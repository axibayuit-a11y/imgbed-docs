#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const MIB = 1024 * 1024;
const USER_AGENT = 'ImgBed-Token-Chunk-Upload/1.0 Node';

const TRUE_SESSION_CHANNELS = Object.freeze({
  telegram: { aliases: ['tg', 'telegram'], chunkSize: 18 * MIB },
  discord: { aliases: ['dc', 'discord'], chunkSize: 9 * MIB },
  cfr2: { aliases: ['r2', 'cfr2'], chunkSize: 10 * MIB },
  github: { aliases: ['gh', 'github'], chunkSize: 30 * MIB },
  gitlab: { aliases: ['gl', 'gitlab'], chunkSize: 30 * MIB },
  webdav: { aliases: ['wd', 'webdav'], chunkSize: 10 * MIB },
});

const DIRECT_SESSION_CHANNELS = Object.freeze({
  s3: { aliases: ['s3'], kind: 's3-multipart', chunkSize: 10 * MIB, initApi: '/api/s3/createSession', completeApi: '/api/s3/completeUpload' },
  onedrive: { aliases: ['od', 'onedrive'], kind: 'range-session', chunkSize: 10 * MIB, continueStatus: 202, initApi: '/api/onedrive/createSession', completeApi: '/api/onedrive/completeUpload' },
  googledrive: { aliases: ['gd', 'google', 'googledrive'], kind: 'range-session', chunkSize: 10 * MIB, continueStatus: 308, initApi: '/api/googledrive/createSession', completeApi: '/api/googledrive/completeUpload' },
  dropbox: { aliases: ['db', 'dropbox'], kind: 'dropbox-session', chunkSize: 10 * MIB, initApi: '/api/dropbox/createSession', completeApi: '/api/dropbox/completeUpload' },
  yandex: { aliases: ['yx', 'yandex'], kind: 'direct-url', chunkSize: 0, initApi: '/api/yandex/createSession', completeApi: '/api/yandex/completeUpload' },
  pcloud: { aliases: ['pd', 'pcloud'], kind: 'upload-link', chunkSize: 0, initApi: '/api/pcloud/createSession', completeApi: '/api/pcloud/completeUpload' },
  huggingface: { aliases: ['hf', 'huggingface'], kind: 'hf-lfs', chunkSize: 0, initApi: '/api/huggingface/getUploadUrl', completeApi: '/api/huggingface/commitUpload' },
});

function printHelp() {
  process.stdout.write(`ImgBed API Token upload tool

Usage:
  node imgbed-token-chunk-upload.mjs --base-url <url> --token <token> --file <path> --channel <key>
  node imgbed-token-chunk-upload.mjs --base-url <url> --token <token> --list-channels

Required:
  --base-url <url>       ImgBed site URL, for example https://image.ai6.me
  --token <token>        API Token. You can also set IMGBED_API_TOKEN.
  --file <path>          Local file path.
  --channel <key>        Upload channel:
                         telegram, discord, cfr2, github, gitlab, webdav,
                         s3, onedrive, googledrive, dropbox, yandex, pcloud, huggingface

Optional upload parameters:
  --folder <path>        Upload folder.
  --name-type <type>     uploadNameType. Default: default
  --channel-name <name>  Pick a specific child channel/account.

Tool options:
  --list-channels        List channels available to this API Token, then exit.
  --concurrency <n>      Parallel chunk requests. Default: 1, max: 3.
  --retries <n>          Retry failed chunk/request. Default: 3
  --timeout-ms <n>       Request timeout. Default: 180000
  --output <pretty|json> Output format. Default: pretty
  --save-response <path> Save final JSON result.
  -h, --help             Show this help.

Notes:
  - This script does not change backend/source code. It only calls existing API Token upload APIs.
  - telegram/discord/cfr2/github/gitlab/webdav use /upload true chunk sessions.
  - s3 uses S3 multipart session APIs.
  - onedrive/googledrive/dropbox/huggingface use their existing multipart/resumable APIs.
  - yandex/pcloud use their existing direct upload URL/link APIs, because the current backend does not expose a custom chunk API for them.
`);
}

function parseArgs(argv) {
  const args = {
    baseUrl: '',
    token: process.env.IMGBED_API_TOKEN || '',
    file: '',
    channel: '',
    uploadFolder: '',
    uploadNameType: 'default',
    channelName: '',
    concurrency: 1,
    retries: 3,
    timeoutMs: 180000,
    output: 'pretty',
    saveResponse: '',
    listChannels: false,
    help: false,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const raw = argv[index];
    const [flag, inlineValue] = raw.includes('=') ? raw.split(/=(.*)/s, 2) : [raw, undefined];
    const readValue = () => {
      if (inlineValue !== undefined) return inlineValue;
      const next = argv[index + 1];
      if (!next || next.startsWith('--')) {
        throw new Error(`Missing value for ${flag}`);
      }
      index += 1;
      return next;
    };

    switch (flag) {
      case '-h':
      case '--help':
        args.help = true;
        break;
      case '--base-url':
        args.baseUrl = readValue();
        break;
      case '--token':
        args.token = readValue();
        break;
      case '--file':
        args.file = readValue();
        break;
      case '--channel':
        args.channel = normalizeChannel(readValue());
        break;
      case '--folder':
        args.uploadFolder = readValue();
        break;
      case '--name-type':
        args.uploadNameType = readValue();
        break;
      case '--channel-name':
        args.channelName = readValue();
        break;
      case '--concurrency':
        args.concurrency = Math.min(3, parsePositiveInteger(readValue(), '--concurrency'));
        break;
      case '--retries':
        args.retries = parsePositiveInteger(readValue(), '--retries');
        break;
      case '--timeout-ms':
        args.timeoutMs = parsePositiveInteger(readValue(), '--timeout-ms');
        break;
      case '--output':
        args.output = String(readValue() || '').trim().toLowerCase();
        break;
      case '--save-response':
        args.saveResponse = readValue();
        break;
      case '--list-channels':
        args.listChannels = true;
        break;
      default:
        throw new Error(`Unknown argument: ${raw}`);
    }
  }

  if (!['pretty', 'json'].includes(args.output)) {
    throw new Error('--output must be pretty or json');
  }
  return args;
}

function validateArgs(args) {
  if (args.help) return;
  if (!args.baseUrl) throw new Error('--base-url is required');
  if (!args.token) throw new Error('--token is required, or set IMGBED_API_TOKEN');
  if (args.listChannels) return;
  if (!args.file) throw new Error('--file is required');
  if (!args.channel) throw new Error('--channel is required');
  if (!fs.existsSync(args.file)) throw new Error(`File not found: ${args.file}`);
  if (!fs.statSync(args.file).isFile()) throw new Error(`Not a file: ${args.file}`);
}

function parsePositiveInteger(value, name) {
  const number = Number.parseInt(String(value || ''), 10);
  if (!Number.isInteger(number) || number <= 0) {
    throw new Error(`${name} must be a positive integer`);
  }
  return number;
}

function normalizeChannel(channel) {
  const value = String(channel || '').trim().toLowerCase();
  for (const [key, rule] of Object.entries(TRUE_SESSION_CHANNELS)) {
    if (value === key || rule.aliases.includes(value)) return key;
  }
  for (const [key, rule] of Object.entries(DIRECT_SESSION_CHANNELS)) {
    if (value === key || rule.aliases.includes(value)) return key;
  }
  throw new Error(`Unsupported channel: ${channel}`);
}

function normalizeBaseUrl(baseUrl) {
  return new URL(baseUrl).toString().replace(/\/+$/, '');
}

function toUrl(baseUrl, pathname) {
  return new URL(pathname, `${normalizeBaseUrl(baseUrl)}/`).toString();
}

function buildUploadUrl(args, params) {
  const url = new URL(toUrl(args.baseUrl, '/upload'));
  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined && value !== null && String(value) !== '') {
      url.searchParams.set(key, String(value));
    }
  }
  return url.toString();
}

function buildCommonUploadQuery(args, extra = {}) {
  return {
    uploadChannel: args.channel,
    uploadFolder: args.uploadFolder,
    uploadNameType: args.uploadNameType,
    channelName: args.channelName,
    ...extra,
  };
}

function buildSessionPayload(args, fileInfo, resolvedFileId, extra = {}) {
  return removeEmptyFields({
    fileName: fileInfo.fileName,
    fileSize: fileInfo.fileSize,
    fileType: fileInfo.fileType,
    uploadFolder: args.uploadFolder,
    uploadNameType: args.uploadNameType,
    channelName: args.channelName,
    resolvedFileId,
    ...extra,
  });
}

function removeEmptyFields(payload) {
  const result = {};
  for (const [key, value] of Object.entries(payload)) {
    if (value === undefined || value === null) continue;
    if (typeof value === 'string' && value.trim() === '') continue;
    result[key] = value;
  }
  return result;
}

function authHeaders(args, extra = {}) {
  return {
    Authorization: `Bearer ${args.token}`,
    'User-Agent': USER_AGENT,
    ...extra,
  };
}

async function fetchWithTimeout(url, options, timeoutMs) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(url, { ...options, signal: controller.signal });
  } finally {
    clearTimeout(timer);
  }
}

async function parseResponse(response) {
  const text = await response.text();
  let payload = null;
  if (text.trim()) {
    try {
      payload = JSON.parse(text);
    } catch {
      payload = null;
    }
  }
  return {
    ok: response.ok,
    success: response.ok && payload?.success !== false,
    status: response.status,
    statusText: response.statusText,
    payload,
    bodyPreview: text.length > 2000 ? text.slice(0, 2000) : text,
  };
}

function describeErrorCause(error, depth = 0) {
  if (!error || depth > 4) return '';
  const parts = [];
  const name = String(error.name || '').trim();
  const message = String(error.message || error).trim();
  const code = String(error.code || '').trim();
  const errno = String(error.errno || '').trim();
  const syscall = String(error.syscall || '').trim();
  const address = String(error.address || '').trim();
  const port = error.port === undefined || error.port === null ? '' : String(error.port);

  if (name) parts.push(name);
  if (code && code !== name) parts.push(code);
  if (message && message !== name && message !== code) parts.push(message);
  if (errno) parts.push(`errno=${errno}`);
  if (syscall) parts.push(`syscall=${syscall}`);
  if (address) parts.push(`address=${address}`);
  if (port) parts.push(`port=${port}`);

  const current = parts.join(' ');
  const causeText = describeErrorCause(error.cause, depth + 1);
  if (current && causeText) return `${current}; cause: ${causeText}`;
  return current || causeText || '';
}

function makeNetworkError(stage, error) {
  const causeDetail = describeErrorCause(error) || String(error || 'Network request failed');
  const isTimeout = String(error?.name || '').trim() === 'AbortError';
  const code = isTimeout ? 'REQUEST_TIMEOUT' : 'NETWORK_ERROR';
  const wrapped = new Error(`${stage} failed: ${code} ${causeDetail}`);
  wrapped.code = code;
  wrapped.status = 0;
  wrapped.causeDetail = causeDetail;
  wrapped.originalError = error;
  return wrapped;
}

function makeError(stage, result, fallbackCode = 'REQUEST_FAILED') {
  const payload = result?.payload || {};
  const code = String(payload.code || fallbackCode || `HTTP_${result?.status || 0}`).trim();
  const message = String(payload.error || payload.message || result?.bodyPreview || result?.statusText || code).trim();
  const error = new Error(`${stage} failed: ${code} ${message}`);
  error.code = code;
  error.status = Number(result?.status || 0);
  error.response = result;
  return error;
}

function shouldRetryError(error) {
  const status = Number(error?.status || error?.response?.status || 0);
  if (!status) return true;
  return status === 408 || status === 425 || status === 429 || status >= 500;
}

function ensureSuccess(stage, result, fallbackCode) {
  if (result?.success) return result.payload;
  throw makeError(stage, result, fallbackCode);
}

async function requestWithRetry(args, stage, task) {
  let lastError = null;
  for (let attempt = 1; attempt <= args.retries; attempt += 1) {
    try {
      return await task(attempt);
    } catch (error) {
      lastError = error;
      if (attempt >= args.retries || !shouldRetryError(error)) break;
      log(args, `${stage} failed, retry ${attempt}/${args.retries}: ${error.message}`);
      await new Promise((resolve) => setTimeout(resolve, attempt * 1000));
    }
  }
  throw lastError;
}

async function postJson(args, pathname, payload, stage, options = {}) {
  const task = async () => {
    let response;
    try {
      response = await fetchWithTimeout(toUrl(args.baseUrl, pathname), {
        method: 'POST',
        headers: authHeaders(args, { 'Content-Type': 'application/json' }),
        body: JSON.stringify(payload),
      }, args.timeoutMs);
    } catch (error) {
      throw makeNetworkError(stage, error);
    }
    return ensureSuccess(stage, await parseResponse(response), `${stage.toUpperCase()}_FAILED`);
  };
  return options.retry === false ? await task() : await requestWithRetry(args, stage, task);
}

async function postForm(args, url, formData, stage, options = {}) {
  const task = async () => {
    let response;
    try {
      response = await fetchWithTimeout(url, {
        method: 'POST',
        headers: authHeaders(args),
        body: formData,
      }, args.timeoutMs);
    } catch (error) {
      throw makeNetworkError(stage, error);
    }
    return ensureSuccess(stage, await parseResponse(response), `${stage.toUpperCase()}_FAILED`);
  };
  return options.retry === true ? await requestWithRetry(args, stage, task) : await task();
}

async function listChannels(args) {
  return await requestWithRetry(args, 'listChannels', async () => {
    let response;
    try {
      response = await fetchWithTimeout(toUrl(args.baseUrl, '/api/upload/channels'), {
        method: 'GET',
        headers: authHeaders(args),
      }, args.timeoutMs);
    } catch (error) {
      throw makeNetworkError('listChannels', error);
    }
    return ensureSuccess('listChannels', await parseResponse(response), 'LIST_CHANNELS_FAILED');
  });
}

async function withRetry(args, stage, task) {
  let lastError = null;
  for (let attempt = 1; attempt <= args.retries; attempt += 1) {
    try {
      return await task(attempt);
    } catch (error) {
      lastError = error;
      if (attempt >= args.retries || !shouldRetryError(error)) break;
      log(args, `${stage} failed, retry ${attempt}/${args.retries}: ${error.message}`);
      await new Promise((resolve) => setTimeout(resolve, attempt * 1000));
    }
  }
  throw lastError;
}

async function runWithConcurrency(items, concurrency, worker) {
  const queue = items.slice();
  const workerCount = Math.max(1, Math.min(3, Number(concurrency || 1), queue.length || 1));
  async function runWorker() {
    while (queue.length > 0) {
      const item = queue.shift();
      await worker(item);
    }
  }
  await Promise.all(Array.from({ length: workerCount }, () => runWorker()));
}

function getFileInfo(filePath) {
  const stat = fs.statSync(filePath);
  const fileName = path.basename(filePath);
  return {
    filePath: path.resolve(filePath),
    fileName,
    fileType: getMimeType(fileName),
    fileSize: stat.size,
  };
}

function getMimeType(fileName) {
  const ext = path.extname(fileName).toLowerCase();
  const types = {
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.png': 'image/png',
    '.gif': 'image/gif',
    '.webp': 'image/webp',
    '.avif': 'image/avif',
    '.svg': 'image/svg+xml',
    '.mp4': 'video/mp4',
    '.webm': 'video/webm',
    '.mp3': 'audio/mpeg',
    '.wav': 'audio/wav',
    '.pdf': 'application/pdf',
    '.txt': 'text/plain',
    '.json': 'application/json',
    '.zip': 'application/zip',
    '.7z': 'application/x-7z-compressed',
    '.rar': 'application/vnd.rar',
    '.psd': 'image/vnd.adobe.photoshop',
    '.ppt': 'application/vnd.ms-powerpoint',
    '.pptx': 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  };
  return types[ext] || 'application/octet-stream';
}

function formatBytes(bytes) {
  if (bytes >= 1024 ** 3) return `${(bytes / 1024 ** 3).toFixed(2)} GiB`;
  if (bytes >= 1024 ** 2) return `${(bytes / 1024 ** 2).toFixed(2)} MiB`;
  if (bytes >= 1024) return `${(bytes / 1024).toFixed(2)} KiB`;
  return `${bytes} B`;
}

function log(args, message) {
  const target = args.output === 'json' ? process.stderr : process.stdout;
  target.write(`${message}\n`);
}

async function readChunk(fileHandle, start, length) {
  const buffer = Buffer.allocUnsafe(length);
  const { bytesRead } = await fileHandle.read(buffer, 0, length, start);
  return bytesRead === length ? buffer : buffer.subarray(0, bytesRead);
}

async function openFileBlob(fileInfo) {
  if (typeof fs.openAsBlob === 'function') {
    return await fs.openAsBlob(fileInfo.filePath, { type: fileInfo.fileType });
  }
  return new Blob([await fs.promises.readFile(fileInfo.filePath)], { type: fileInfo.fileType });
}

function extractLinks(payload) {
  const resultItem = Array.isArray(payload?.result) ? payload.result[0] : null;
  const arrayItem = Array.isArray(payload) ? payload[0] : null;
  const src = String(payload?.src || resultItem?.src || arrayItem?.src || '').trim();
  return {
    src,
    url: String(payload?.url || resultItem?.url || arrayItem?.url || '').trim(),
    fileId: String(payload?.fileId || payload?.fullId || resultItem?.fileId || arrayItem?.fileId || '').trim(),
  };
}

async function resolveTarget(args, fileInfo) {
  const payload = await postJson(args, '/api/upload/resolveTarget', {
    fileName: fileInfo.fileName,
    fileSize: fileInfo.fileSize,
    fileType: fileInfo.fileType,
    uploadFolder: args.uploadFolder,
    uploadNameType: args.uploadNameType,
    preferredUploadChannel: args.channel,
    stage: 'finalize',
  }, 'resolveTarget');
  const fileId = String(payload?.fileId || '').trim();
  if (!fileId) throw new Error('resolveTarget succeeded but fileId is missing');
  return fileId;
}

async function uploadTrueSession(args, fileInfo, resolvedFileId) {
  const rule = TRUE_SESSION_CHANNELS[args.channel];
  const totalChunks = Math.ceil(fileInfo.fileSize / rule.chunkSize);
  const initForm = new FormData();
  initForm.append('originalFileName', fileInfo.fileName);
  initForm.append('originalFileType', fileInfo.fileType);
  initForm.append('originalFileSize', String(fileInfo.fileSize));
  initForm.append('totalChunks', String(totalChunks));
  initForm.append('resolvedFileId', resolvedFileId);

  const initUrl = buildUploadUrl(args, buildCommonUploadQuery(args, {
    initChunked: 'true',
    resolvedFileId,
  }));
  const initPayload = await postForm(args, initUrl, initForm, 'initChunked', { retry: true });
  const uploadId = String(initPayload?.uploadId || '').trim();
  const selectedChannelName = String(initPayload?.sessionInfo?.channelName || '').trim();
  if (!uploadId) throw new Error('initChunked succeeded but uploadId is missing');

  log(args, `[${args.channel}] uploadId=${uploadId}, channelName=${selectedChannelName || '(none)'}, chunks=${totalChunks}, chunkSize=${formatBytes(rule.chunkSize)}`);
  const handle = await fs.promises.open(fileInfo.filePath, 'r');
  try {
    const chunkIndexes = Array.from({ length: totalChunks }, (_, index) => index);
    await runWithConcurrency(chunkIndexes, args.concurrency, async (index) => {
      await withRetry(args, `chunk ${index + 1}/${totalChunks}`, async () => {
        const start = index * rule.chunkSize;
        const end = Math.min(start + rule.chunkSize, fileInfo.fileSize);
        const chunk = await readChunk(handle, start, end - start);
        const form = new FormData();
        form.append('file', new Blob([chunk], { type: 'application/octet-stream' }), `${fileInfo.fileName}.part${index}`);
        form.append('chunkIndex', String(index));
        form.append('totalChunks', String(totalChunks));
        form.append('uploadId', uploadId);
        form.append('originalFileName', fileInfo.fileName);
        form.append('originalFileType', fileInfo.fileType);
        const chunkUrl = buildUploadUrl(args, buildCommonUploadQuery(args, {
          chunked: 'true',
          resolvedFileId,
        }));
        await postForm(args, chunkUrl, form, `chunk ${index + 1}/${totalChunks}`);
      });
      log(args, `[${args.channel}] chunk ${index + 1}/${totalChunks} ok`);
    });
  } finally {
    await handle.close();
  }

  for (let round = 0; round < 3; round += 1) {
    const mergeForm = new FormData();
    mergeForm.append('uploadId', uploadId);
    mergeForm.append('totalChunks', String(totalChunks));
    mergeForm.append('originalFileName', fileInfo.fileName);
    mergeForm.append('originalFileType', fileInfo.fileType);
    const mergeUrl = buildUploadUrl(args, buildCommonUploadQuery(args, {
      chunked: 'true',
      merge: 'true',
      resolvedFileId,
    }));
    const response = await fetchWithTimeout(mergeUrl, {
      method: 'POST',
      headers: authHeaders(args),
      body: mergeForm,
    }, args.timeoutMs);
    const result = await parseResponse(response);
    if (result.success) {
      return { payload: result.payload, totalChunks, chunkSize: rule.chunkSize, channelName: selectedChannelName };
    }
    const missingIndexes = Array.isArray(result.payload?.missingIndexes) ? result.payload.missingIndexes : [];
    if (result.status !== 409 || result.payload?.code !== 'MISSING_CHUNKS' || missingIndexes.length === 0) {
      throw makeError('merge', result, 'MERGE_FAILED');
    }
    log(args, `[${args.channel}] merge reports missing chunks: ${missingIndexes.join(',')}`);
    const handleRecover = await fs.promises.open(fileInfo.filePath, 'r');
    try {
      for (const index of missingIndexes) {
        const start = index * rule.chunkSize;
        const end = Math.min(start + rule.chunkSize, fileInfo.fileSize);
        const chunk = await readChunk(handleRecover, start, end - start);
        const form = new FormData();
        form.append('file', new Blob([chunk], { type: 'application/octet-stream' }), `${fileInfo.fileName}.part${index}`);
        form.append('chunkIndex', String(index));
        form.append('totalChunks', String(totalChunks));
        form.append('uploadId', uploadId);
        form.append('originalFileName', fileInfo.fileName);
        form.append('originalFileType', fileInfo.fileType);
        const chunkUrl = buildUploadUrl(args, buildCommonUploadQuery(args, {
          chunked: 'true',
          resolvedFileId,
        }));
        await postForm(args, chunkUrl, form, `recover chunk ${index + 1}/${totalChunks}`);
      }
    } finally {
      await handleRecover.close();
    }
  }
  throw new Error('merge failed after missing chunk recovery');
}

async function uploadS3(args, fileInfo, resolvedFileId) {
  const rule = DIRECT_SESSION_CHANNELS.s3;
  const initData = await postJson(args, rule.initApi, buildSessionPayload(args, fileInfo, resolvedFileId), 's3CreateSession');
  const totalParts = Number(initData.totalParts || 0);
  const chunkSize = Number(initData.chunkSize || rule.chunkSize);
  if (!initData.sessionId || totalParts <= 0 || chunkSize <= 0) {
    throw new Error('S3 createSession returned invalid session payload');
  }
  const parts = [];
  const handle = await fs.promises.open(fileInfo.filePath, 'r');
  try {
    const partNumbers = Array.from({ length: totalParts }, (_, index) => index + 1);
    await runWithConcurrency(partNumbers, args.concurrency, async (partNumber) => {
      await withRetry(args, `s3 part ${partNumber}/${totalParts}`, async () => {
        const start = (partNumber - 1) * chunkSize;
        const end = Math.min(start + chunkSize, fileInfo.fileSize);
        const chunk = await readChunk(handle, start, end - start);
        const url = new URL(toUrl(args.baseUrl, '/api/s3/uploadPart'));
        url.searchParams.set('sessionId', initData.sessionId);
        url.searchParams.set('partNumber', String(partNumber));
        const response = await fetchWithTimeout(url, {
          method: 'POST',
          headers: authHeaders(args, { 'Content-Type': 'application/octet-stream' }),
          body: chunk,
        }, args.timeoutMs);
        const payload = ensureSuccess(`s3 part ${partNumber}/${totalParts}`, await parseResponse(response), 'S3_PART_UPLOAD_FAILED');
        parts.push({
          partNumber: Number(payload.partNumber || partNumber),
          etag: String(payload.etag || '').trim(),
        });
      });
      log(args, `[s3] part ${partNumber}/${totalParts} ok`);
    });
  } finally {
    await handle.close();
  }
  const payload = await postJson(args, rule.completeApi, {
    sessionId: initData.sessionId,
    parts: parts.sort((a, b) => a.partNumber - b.partNumber),
    fileName: fileInfo.fileName,
    fileType: fileInfo.fileType,
    fileSize: fileInfo.fileSize,
    uploadFolder: args.uploadFolder,
  }, 's3CompleteUpload');
  return { payload, totalChunks: totalParts, chunkSize, channelName: String(initData.channelName || '').trim() };
}

async function uploadRangeSession(args, fileInfo, resolvedFileId) {
  const rule = DIRECT_SESSION_CHANNELS[args.channel];
  const initData = await postJson(args, rule.initApi, buildSessionPayload(args, fileInfo, resolvedFileId), `${args.channel}CreateSession`);
  const totalChunks = Math.ceil(fileInfo.fileSize / rule.chunkSize);
  let lastPayload = null;
  const handle = await fs.promises.open(fileInfo.filePath, 'r');
  try {
    for (let index = 0; index < totalChunks; index += 1) {
      await withRetry(args, `${args.channel} chunk ${index + 1}/${totalChunks}`, async () => {
        const start = index * rule.chunkSize;
        const end = Math.min(start + rule.chunkSize, fileInfo.fileSize);
        const chunk = await readChunk(handle, start, end - start);
        const response = await fetchWithTimeout(initData.uploadUrl, {
          method: 'PUT',
          headers: {
            'Content-Length': String(chunk.length),
            'Content-Range': `bytes ${start}-${end - 1}/${fileInfo.fileSize}`,
          },
          body: chunk,
        }, args.timeoutMs);
        if (response.status === rule.continueStatus) {
          return;
        }
        if (!response.ok) {
          const text = await response.text();
          throw new Error(`${args.channel} upload failed: HTTP ${response.status} ${text.slice(0, 1000)}`);
        }
        lastPayload = await response.json();
      });
      log(args, `[${args.channel}] chunk ${index + 1}/${totalChunks} ok`);
    }
  } finally {
    await handle.close();
  }
  const providerPayload = args.channel === 'googledrive'
    ? { googleFileId: lastPayload?.id }
    : { itemId: lastPayload?.id };
  const payload = await postJson(args, rule.completeApi, {
    ...initData,
    ...providerPayload,
    fileName: fileInfo.fileName,
    fileType: fileInfo.fileType,
    fileSize: fileInfo.fileSize,
    uploadFolder: args.uploadFolder,
  }, `${args.channel}CompleteUpload`);
  return { payload, totalChunks, chunkSize: rule.chunkSize, channelName: String(initData.channelName || '').trim() };
}

async function uploadDropbox(args, fileInfo, resolvedFileId) {
  const rule = DIRECT_SESSION_CHANNELS.dropbox;
  const initData = await postJson(args, rule.initApi, buildSessionPayload(args, fileInfo, resolvedFileId), 'dropboxCreateSession');
  let offset = 0;
  const handle = await fs.promises.open(fileInfo.filePath, 'r');
  try {
    while (offset + rule.chunkSize < fileInfo.fileSize) {
      const uploadedLength = await withRetry(args, `dropbox append ${formatBytes(offset)}`, async () => {
        const chunk = await readChunk(handle, offset, rule.chunkSize);
        const response = await fetchWithTimeout('https://content.dropboxapi.com/2/files/upload_session/append_v2', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${initData.accessToken}`,
            'Dropbox-API-Arg': JSON.stringify({ cursor: { session_id: initData.sessionId, offset }, close: false }),
            'Content-Type': 'application/octet-stream',
          },
          body: chunk,
        }, args.timeoutMs);
        if (!response.ok) {
          const text = await response.text();
          throw new Error(`Dropbox append failed: HTTP ${response.status} ${text.slice(0, 1000)}`);
        }
        return chunk.length;
      });
      offset += uploadedLength;
      log(args, `[dropbox] ${formatBytes(offset)}/${formatBytes(fileInfo.fileSize)} ok`);
    }

    const lastChunk = await readChunk(handle, offset, fileInfo.fileSize - offset);
    const finishResponse = await withRetry(args, 'dropbox finish', async () => {
      const response = await fetchWithTimeout('https://content.dropboxapi.com/2/files/upload_session/finish', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${initData.accessToken}`,
          'Dropbox-API-Arg': JSON.stringify({
            cursor: { session_id: initData.sessionId, offset },
            commit: { path: initData.filePath, mode: 'add', autorename: true, mute: true },
          }),
          'Content-Type': 'application/octet-stream',
        },
        body: lastChunk,
      }, args.timeoutMs);
      if (!response.ok) {
        const text = await response.text();
        throw new Error(`Dropbox finish failed: HTTP ${response.status} ${text.slice(0, 1000)}`);
      }
      return response;
    });
    const finishPayload = await finishResponse.json();
    const payload = await postJson(args, rule.completeApi, {
      ...initData,
      dropboxPath: finishPayload.path_display || initData.filePath,
      dropboxSize: finishPayload.size,
      fileName: fileInfo.fileName,
      fileType: fileInfo.fileType,
      fileSize: fileInfo.fileSize,
      uploadFolder: args.uploadFolder,
    }, 'dropboxCompleteUpload');
    return {
      payload,
      totalChunks: Math.ceil(fileInfo.fileSize / rule.chunkSize),
      chunkSize: rule.chunkSize,
      channelName: String(initData.channelName || '').trim(),
    };
  } finally {
    await handle.close();
  }
}

async function uploadYandex(args, fileInfo, resolvedFileId) {
  const rule = DIRECT_SESSION_CHANNELS.yandex;
  const initData = await postJson(args, rule.initApi, buildSessionPayload(args, fileInfo, resolvedFileId), 'yandexCreateSession');
  await withRetry(args, 'yandex upload', async () => {
    const response = await fetchWithTimeout(initData.uploadUrl, {
      method: initData.uploadMethod || 'PUT',
      headers: {
        'Content-Type': fileInfo.fileType,
        'Content-Length': String(fileInfo.fileSize),
      },
      body: fs.createReadStream(fileInfo.filePath),
      duplex: 'half',
    }, args.timeoutMs);
    if (!response.ok) {
      const text = await response.text();
      throw new Error(`Yandex upload failed: HTTP ${response.status} ${text.slice(0, 1000)}`);
    }
  });
  const payload = await postJson(args, rule.completeApi, {
    ...initData,
    fileName: fileInfo.fileName,
    fileType: fileInfo.fileType,
    fileSize: fileInfo.fileSize,
    uploadFolder: args.uploadFolder,
  }, 'yandexCompleteUpload');
  return { payload, totalChunks: 1, chunkSize: fileInfo.fileSize, channelName: String(initData.channelName || '').trim() };
}

async function uploadPcloud(args, fileInfo, resolvedFileId) {
  const rule = DIRECT_SESSION_CHANNELS.pcloud;
  const initData = await postJson(args, rule.initApi, buildSessionPayload(args, fileInfo, resolvedFileId), 'pcloudCreateSession');
  const response = await withRetry(args, 'pcloud upload', async () => {
    const formData = new FormData();
    for (const [key, value] of Object.entries(initData.uploadFormFields || {})) {
      formData.append(key, String(value));
    }
    formData.append('file', await openFileBlob(fileInfo), initData.uploadTargetName || fileInfo.fileName);
    const uploadResponse = await fetchWithTimeout(initData.uploadUrl, {
      method: initData.uploadMethod || 'POST',
      body: formData,
    }, args.timeoutMs);
    if (!uploadResponse.ok) {
      const failedText = await uploadResponse.text();
      throw new Error(`pCloud upload failed: HTTP ${uploadResponse.status} ${failedText.slice(0, 1000)}`);
    }
    return uploadResponse;
  });
  const text = await response.text();
  let uploadResponsePayload = null;
  if (text.trim()) {
    try {
      uploadResponsePayload = JSON.parse(text);
    } catch {
      uploadResponsePayload = null;
    }
  }
  if (!response.ok || Number(uploadResponsePayload?.result || 0) > 0) {
    throw new Error(`pCloud upload failed: HTTP ${response.status} ${text.slice(0, 1000)}`);
  }
  const payload = await postJson(args, rule.completeApi, {
    ...initData,
    uploadResponsePayload,
    fileName: fileInfo.fileName,
    fileType: fileInfo.fileType,
    fileSize: fileInfo.fileSize,
    uploadFolder: args.uploadFolder,
  }, 'pcloudCompleteUpload');
  return { payload, totalChunks: 1, chunkSize: fileInfo.fileSize, channelName: String(initData.channelName || '').trim() };
}

async function sha256File(filePath) {
  return await new Promise((resolve, reject) => {
    const hash = crypto.createHash('sha256');
    const stream = fs.createReadStream(filePath);
    stream.on('data', (chunk) => hash.update(chunk));
    stream.on('error', reject);
    stream.on('end', () => resolve(hash.digest('hex')));
  });
}

async function fileSampleBase64(filePath, sampleSize = 512) {
  const handle = await fs.promises.open(filePath, 'r');
  try {
    return (await readChunk(handle, 0, sampleSize)).toString('base64');
  } finally {
    await handle.close();
  }
}

function normalizeHeaders(headers) {
  const result = {};
  for (const [key, value] of Object.entries(headers || {})) {
    if (String(key || '').trim()) result[String(key).trim()] = String(value ?? '').trim();
  }
  return result;
}

function parseHfMultipart(uploadAction) {
  const multipart = uploadAction?.multipart && typeof uploadAction.multipart === 'object' ? uploadAction.multipart : {};
  const complete = multipart?.complete && typeof multipart.complete === 'object' ? multipart.complete : {};
  const chunkSize = Number(multipart.chunkSize || 0);
  const parts = Array.isArray(multipart.parts) ? multipart.parts : [];
  return {
    valid: chunkSize > 0 && parts.length > 0 && !!String(complete.url || '').trim(),
    chunkSize,
    completeUrl: String(complete.url || '').trim(),
    completeMethod: String(complete.method || 'POST').trim().toUpperCase(),
    completeHeaders: normalizeHeaders(complete.headers),
    parts: parts.map((part) => ({
      partNumber: Number(part.partNumber || 0),
      url: String(part.url || '').trim(),
      method: String(part.method || 'PUT').trim().toUpperCase(),
      headers: normalizeHeaders(part.headers),
    })).filter((part) => part.partNumber > 0 && part.url).sort((a, b) => a.partNumber - b.partNumber),
  };
}

function parseHfSingle(uploadAction) {
  const single = uploadAction?.single && typeof uploadAction.single === 'object' ? uploadAction.single : {};
  return {
    valid: !!String(single.url || '').trim(),
    url: String(single.url || '').trim(),
    method: String(single.method || 'PUT').trim().toUpperCase(),
    headers: normalizeHeaders(single.headers),
  };
}

async function uploadHuggingFace(args, fileInfo, resolvedFileId) {
  const rule = DIRECT_SESSION_CHANNELS.huggingface;
  const sha256 = await sha256File(fileInfo.filePath);
  const fileSample = await fileSampleBase64(fileInfo.filePath);
  const initData = await postJson(args, rule.initApi, buildSessionPayload(args, fileInfo, resolvedFileId, {
    sha256,
    fileSample,
  }), 'huggingfaceGetUploadUrl');

  let totalChunks = 0;
  let chunkSize = 0;
  const completedParts = [];
  if (!initData.alreadyExists && initData.needsLfs && initData.uploadAction) {
    const multipart = parseHfMultipart(initData.uploadAction);
    const single = parseHfSingle(initData.uploadAction);
    if (multipart.valid) {
      totalChunks = multipart.parts.length;
      chunkSize = multipart.chunkSize;
      const handle = await fs.promises.open(fileInfo.filePath, 'r');
      try {
        await runWithConcurrency(multipart.parts, args.concurrency, async (part) => {
          const start = (part.partNumber - 1) * multipart.chunkSize;
          const end = Math.min(start + multipart.chunkSize, fileInfo.fileSize);
          const chunk = await readChunk(handle, start, end - start);
          const response = await withRetry(args, `huggingface part ${part.partNumber}`, async () => {
            const partResponse = await fetchWithTimeout(part.url, {
              method: part.method,
              headers: part.headers,
              body: chunk,
            }, args.timeoutMs);
            if (!partResponse.ok) {
              const text = await partResponse.text();
              throw new Error(`HuggingFace part ${part.partNumber} failed: HTTP ${partResponse.status} ${text.slice(0, 1000)}`);
            }
            return partResponse;
          });
          completedParts.push({
            partNumber: part.partNumber,
            etag: response.headers.get('ETag') || response.headers.get('etag') || '',
          });
          log(args, `[huggingface] part ${part.partNumber}/${multipart.parts.length} ok`);
        });
      } finally {
        await handle.close();
      }
      await withRetry(args, 'huggingface multipart complete', async () => {
        const completeResponse = await fetchWithTimeout(multipart.completeUrl, {
          method: multipart.completeMethod,
          headers: multipart.completeHeaders,
          body: JSON.stringify({ oid: initData.oid, parts: completedParts }),
        }, args.timeoutMs);
        if (!completeResponse.ok) {
          const text = await completeResponse.text();
          throw new Error(`HuggingFace multipart complete failed: HTTP ${completeResponse.status} ${text.slice(0, 1000)}`);
        }
      });
    } else if (single.valid) {
      totalChunks = 1;
      chunkSize = fileInfo.fileSize;
      await withRetry(args, 'huggingface single upload', async () => {
        const response = await fetchWithTimeout(single.url, {
          method: single.method,
          headers: {
            ...single.headers,
            'Content-Length': String(fileInfo.fileSize),
          },
          body: fs.createReadStream(fileInfo.filePath),
          duplex: 'half',
        }, args.timeoutMs);
        if (!response.ok) {
          const text = await response.text();
          throw new Error(`HuggingFace single upload failed: HTTP ${response.status} ${text.slice(0, 1000)}`);
        }
      });
    } else {
      throw new Error('Invalid HuggingFace upload action');
    }
  }

  const payload = await postJson(args, rule.completeApi, {
    fullId: initData.fullId,
    filePath: initData.filePath,
    sha256,
    fileSize: fileInfo.fileSize,
    fileName: fileInfo.fileName,
    fileType: fileInfo.fileType,
    channelName: initData.channelName,
    uploadIp: initData.uploadIp,
    uploadAddress: initData.uploadAddress,
    multipartParts: completedParts,
  }, 'huggingfaceCommitUpload');
  return { payload, totalChunks, chunkSize, channelName: String(initData.channelName || '').trim() };
}

async function uploadByChannel(args, fileInfo, resolvedFileId) {
  if (TRUE_SESSION_CHANNELS[args.channel]) return await uploadTrueSession(args, fileInfo, resolvedFileId);
  if (args.channel === 's3') return await uploadS3(args, fileInfo, resolvedFileId);
  if (args.channel === 'onedrive' || args.channel === 'googledrive') return await uploadRangeSession(args, fileInfo, resolvedFileId);
  if (args.channel === 'dropbox') return await uploadDropbox(args, fileInfo, resolvedFileId);
  if (args.channel === 'yandex') return await uploadYandex(args, fileInfo, resolvedFileId);
  if (args.channel === 'pcloud') return await uploadPcloud(args, fileInfo, resolvedFileId);
  if (args.channel === 'huggingface') return await uploadHuggingFace(args, fileInfo, resolvedFileId);
  throw new Error(`Unsupported channel: ${args.channel}`);
}

function getRouteMode(channel) {
  if (TRUE_SESSION_CHANNELS[channel]) return '/upload true chunk session';
  return DIRECT_SESSION_CHANNELS[channel]?.kind || '';
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    printHelp();
    return;
  }
  validateArgs(args);
  args.baseUrl = normalizeBaseUrl(args.baseUrl);
  if (args.listChannels) {
    const startedAt = Date.now();
    const summary = {
      success: false,
      baseUrl: args.baseUrl,
      defaultUploadChannel: '',
      channels: [],
      channelCount: 0,
      durationSeconds: 0,
    };
    try {
      const payload = await listChannels(args);
      summary.success = true;
      summary.defaultUploadChannel = String(payload?.defaultUploadChannel || '').trim();
      summary.channels = Array.isArray(payload?.channels) ? payload.channels : [];
      summary.channelCount = summary.channels.length;
      summary.payload = payload;
    } catch (error) {
      summary.success = false;
      summary.code = String(error.code || '').trim();
      summary.statusCode = Number(error.status || error.response?.status || 0);
      summary.error = String(error.message || error);
      summary.causeDetail = String(error.causeDetail || '').trim();
      summary.payload = error.response?.payload || null;
      summary.responsePreview = error.response?.bodyPreview || '';
    } finally {
      summary.durationSeconds = Number(((Date.now() - startedAt) / 1000).toFixed(2));
    }
    outputChannelList(args, summary);
    if (!summary.success) {
      process.exitCode = 1;
    }
    return;
  }
  const fileInfo = getFileInfo(args.file);
  const startedAt = Date.now();

  const summary = {
    success: false,
    baseUrl: args.baseUrl,
    channel: args.channel,
    routeMode: getRouteMode(args.channel),
    uploadFolder: args.uploadFolder,
    file: fileInfo.filePath,
    fileName: fileInfo.fileName,
    fileType: fileInfo.fileType,
    sizeBytes: fileInfo.fileSize,
    sizeText: formatBytes(fileInfo.fileSize),
    concurrency: args.concurrency,
    src: '',
    url: '',
    fileId: '',
    channelName: '',
    resolvedFileId: '',
    totalChunks: 0,
    chunkSizeBytes: 0,
    chunkSizeText: '',
    durationSeconds: 0,
  };

  try {
    log(args, `[${args.channel}] ${fileInfo.fileName}, ${formatBytes(fileInfo.fileSize)}, route=${summary.routeMode}`);
    const resolvedFileId = await resolveTarget(args, fileInfo);
    summary.resolvedFileId = resolvedFileId;
    log(args, `[${args.channel}] fileId=${resolvedFileId}`);

    const result = await uploadByChannel(args, fileInfo, resolvedFileId);
    const links = extractLinks(result.payload);
    summary.success = true;
    summary.src = links.src;
    summary.url = links.url;
    summary.fileId = links.fileId || resolvedFileId;
    summary.channelName = String(result.channelName || '').trim();
    summary.totalChunks = result.totalChunks;
    summary.chunkSizeBytes = result.chunkSize;
    summary.chunkSizeText = result.chunkSize ? formatBytes(result.chunkSize) : '';
    summary.payload = result.payload;
  } catch (error) {
    summary.success = false;
    summary.code = String(error.code || '').trim();
    summary.statusCode = Number(error.status || error.response?.status || 0);
    summary.error = String(error.message || error);
    summary.causeDetail = String(error.causeDetail || '').trim();
    summary.payload = error.response?.payload || null;
    summary.responsePreview = error.response?.bodyPreview || '';
  } finally {
    summary.durationSeconds = Number(((Date.now() - startedAt) / 1000).toFixed(2));
  }

  if (args.saveResponse) {
    fs.writeFileSync(path.resolve(args.saveResponse), `${JSON.stringify(summary, null, 2)}\n`, 'utf8');
  }
  if (args.output === 'json') {
    process.stdout.write(`${JSON.stringify(summary, null, 2)}\n`);
  } else if (summary.success) {
    process.stdout.write(`success\nsrc: ${summary.src}\nurl: ${summary.url}\nfileId: ${summary.fileId}\nchannelName: ${summary.channelName}\n`);
  } else {
    process.stdout.write(`failed ${summary.code || ''}\n${summary.error}\n`);
  }
  if (!summary.success) {
    process.exitCode = 1;
  }
}

function outputChannelList(args, summary) {
  if (args.saveResponse) {
    fs.writeFileSync(path.resolve(args.saveResponse), `${JSON.stringify(summary, null, 2)}\n`, 'utf8');
  }
  if (args.output === 'json') {
    process.stdout.write(`${JSON.stringify(summary, null, 2)}\n`);
    return;
  }
  if (!summary.success) {
    process.stdout.write(`failed ${summary.code || ''}\n${summary.error}\n`);
    return;
  }
  process.stdout.write(`success\ndefaultUploadChannel: ${summary.defaultUploadChannel || '(none)'}\nchannelCount: ${summary.channelCount}\n`);
  for (const channel of summary.channels) {
    const names = Array.isArray(channel.channelNames) ? channel.channelNames.join(', ') : '';
    process.stdout.write(`- ${channel.uploadChannel} ${channel.label || ''} loadBalance=${Boolean(channel.loadBalanceEnabled)} channelNames=${names || '(none)'}\n`);
  }
}

main().catch((error) => {
  process.stderr.write(`${error.message || error}\n`);
  process.exitCode = 1;
});
