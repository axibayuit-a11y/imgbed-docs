#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const MIB = 1024 * 1024;
const USER_AGENT = 'ImgBed-Token-Single-Upload/1.0 Node';

const CHANNELS = Object.freeze({
  telegram: { aliases: ['tg', 'telegram'], limitBytes: 20 * MIB, limitCode: 'TELEGRAM_SINGLE_UPLOAD_LIMIT_EXCEEDED' },
  discord: { aliases: ['dc', 'discord'], limitBytes: 10 * MIB, limitCode: 'DISCORD_SINGLE_UPLOAD_LIMIT_EXCEEDED' },
  cfr2: { aliases: ['r2', 'cfr2'], limitBytes: 0, limitCode: '' },
  s3: { aliases: ['s3'], limitBytes: 64 * MIB, limitCode: 'S3_SINGLE_UPLOAD_LIMIT_EXCEEDED' },
  webdav: { aliases: ['wd', 'webdav'], limitBytes: 64 * MIB, limitCode: 'WEBDAV_SINGLE_UPLOAD_LIMIT_EXCEEDED' },
  github: { aliases: ['gh', 'github'], limitBytes: 64 * MIB, limitCode: 'GITHUB_SINGLE_UPLOAD_LIMIT_EXCEEDED' },
  gitlab: { aliases: ['gl', 'gitlab'], limitBytes: 64 * MIB, limitCode: 'GITLAB_SINGLE_UPLOAD_LIMIT_EXCEEDED' },
  huggingface: { aliases: ['hf', 'huggingface'], limitBytes: 0, limitCode: '' },
  onedrive: { aliases: ['od', 'onedrive'], limitBytes: 0, limitCode: '' },
  googledrive: { aliases: ['gd', 'google', 'googledrive'], limitBytes: 0, limitCode: '' },
  dropbox: { aliases: ['db', 'dropbox'], limitBytes: 0, limitCode: '' },
  yandex: { aliases: ['yx', 'yandex'], limitBytes: 0, limitCode: '' },
  pcloud: { aliases: ['pd', 'pcloud'], limitBytes: 0, limitCode: '' },
});

function printHelp() {
  process.stdout.write(`ImgBed API Token single-request upload tool

Usage:
  node imgbed-token-single-upload.mjs --base-url <url> --token <token> --file <path> --channel <key>
  node imgbed-token-single-upload.mjs --base-url <url> --token <token> --list-channels

Required:
  --base-url <url>       ImgBed site URL, for example https://image.ai6.me
  --token <token>        API Token. You can also set IMGBED_API_TOKEN.
  --file <path>          Local file path.
  --channel <key>        Upload channel:
                         telegram, discord, cfr2, s3, webdav, github, gitlab,
                         huggingface, onedrive, googledrive, dropbox, yandex, pcloud

Optional upload parameters:
  --folder <path>        Upload folder.
  --name-type <type>     uploadNameType. Default: default
  --channel-name <name>  Pick a specific child channel/account.

Tool options:
  --list-channels        List channels available to this API Token, then exit.
  --retries <n>          Retry temporary request failures. Default: 3
  --timeout-ms <n>       Request timeout. Default: 180000
  --output <pretty|json> Output format. Default: pretty
  --save-response <path> Save final JSON result.
  -h, --help             Show this help.

Single-request local size checks:
  telegram              20 MiB
  discord               10 MiB
  s3 / webdav / github / gitlab
                         64 MiB

Notes:
  - This script only calls /upload once. It does not use chunk/session upload APIs.
  - Channels without a local limit above may still be rejected by Cloudflare or the remote platform when the request body is too large.
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
  for (const [key, rule] of Object.entries(CHANNELS)) {
    if (value === key || rule.aliases.includes(value)) return key;
  }
  throw new Error(`Unsupported channel: ${channel}`);
}

function normalizeBaseUrl(baseUrl) {
  return new URL(baseUrl).toString().replace(/\/+$/, '');
}

function buildUploadUrl(args) {
  const url = new URL('/upload', `${normalizeBaseUrl(args.baseUrl)}/`);
  const params = {
    uploadChannel: args.channel,
    uploadFolder: args.uploadFolder,
    uploadNameType: args.uploadNameType,
    channelName: args.channelName,
  };
  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined && value !== null && String(value) !== '') {
      url.searchParams.set(key, String(value));
    }
  }
  return url.toString();
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

function checkSingleRequestLimit(channel, fileInfo) {
  const rule = CHANNELS[channel];
  const limitBytes = Number(rule?.limitBytes || 0);
  if (limitBytes <= 0 || fileInfo.fileSize <= limitBytes) {
    return null;
  }
  return {
    success: false,
    code: rule.limitCode || 'SINGLE_UPLOAD_LIMIT_EXCEEDED',
    error: `${channel} single /upload limit exceeded: file size ${formatBytes(fileInfo.fileSize)}, limit ${formatBytes(limitBytes)}. Use chunk upload script instead.`,
    channel,
    file: fileInfo.filePath,
    fileName: fileInfo.fileName,
    sizeBytes: fileInfo.fileSize,
    sizeText: formatBytes(fileInfo.fileSize),
    limitBytes,
    limitText: formatBytes(limitBytes),
  };
}

async function openFileBlob(fileInfo) {
  if (typeof fs.openAsBlob === 'function') {
    return await fs.openAsBlob(fileInfo.filePath, { type: fileInfo.fileType });
  }
  return new Blob([await fs.promises.readFile(fileInfo.filePath)], { type: fileInfo.fileType });
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

function shouldRetryError(error) {
  const status = Number(error?.status || error?.response?.status || 0);
  if (!status) return true;
  return status === 408 || status === 425 || status === 429 || status >= 500;
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

function log(args, message) {
  const target = args.output === 'json' ? process.stderr : process.stdout;
  target.write(`${message}\n`);
}

function extractLinks(payload) {
  const item = Array.isArray(payload) ? payload[0] : payload;
  const resultItem = Array.isArray(payload?.result) ? payload.result[0] : null;
  const src = String(item?.src || resultItem?.src || '').trim();
  return {
    src,
    url: String(item?.url || resultItem?.url || '').trim(),
    fileId: String(item?.fileId || item?.fullId || resultItem?.fileId || '').trim(),
  };
}

async function uploadSingle(args, fileInfo) {
  const formData = new FormData();
  formData.append('file', await openFileBlob(fileInfo), fileInfo.fileName);

  let response;
  try {
    response = await fetchWithTimeout(buildUploadUrl(args), {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${args.token}`,
        'User-Agent': USER_AGENT,
      },
      body: formData,
    }, args.timeoutMs);
  } catch (error) {
    throw makeNetworkError('singleUpload', error);
  }

  const result = await parseResponse(response);
  if (!result.success) {
    throw makeError('singleUpload', result, 'SINGLE_UPLOAD_FAILED');
  }
  return result.payload;
}

function buildListChannelsUrl(args) {
  return new URL('/api/upload/channels', `${normalizeBaseUrl(args.baseUrl)}/`).toString();
}

async function listChannels(args) {
  let response;
  try {
    response = await fetchWithTimeout(buildListChannelsUrl(args), {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${args.token}`,
        'User-Agent': USER_AGENT,
      },
    }, args.timeoutMs);
  } catch (error) {
    throw makeNetworkError('listChannels', error);
  }

  const result = await parseResponse(response);
  if (!result.success) {
    throw makeError('listChannels', result, 'LIST_CHANNELS_FAILED');
  }
  return result.payload;
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
      const payload = await withRetry(args, 'listChannels', () => listChannels(args));
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
    uploadFolder: args.uploadFolder,
    file: fileInfo.filePath,
    fileName: fileInfo.fileName,
    fileType: fileInfo.fileType,
    sizeBytes: fileInfo.fileSize,
    sizeText: formatBytes(fileInfo.fileSize),
    src: '',
    url: '',
    fileId: '',
    durationSeconds: 0,
  };

  const limitError = checkSingleRequestLimit(args.channel, fileInfo);
  if (limitError) {
    Object.assign(summary, limitError);
    outputSummary(args, summary);
    process.exitCode = 1;
    return;
  }

  try {
    log(args, `[${args.channel}] single /upload ${fileInfo.fileName}, ${formatBytes(fileInfo.fileSize)}`);
    const payload = await withRetry(args, 'singleUpload', () => uploadSingle(args, fileInfo));
    const links = extractLinks(payload);
    summary.success = true;
    summary.src = links.src;
    summary.url = links.url;
    summary.fileId = links.fileId;
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

  outputSummary(args, summary);
  if (!summary.success) {
    process.exitCode = 1;
  }
}

function outputSummary(args, summary) {
  if (args.saveResponse) {
    fs.writeFileSync(path.resolve(args.saveResponse), `${JSON.stringify(summary, null, 2)}\n`, 'utf8');
  }
  if (args.output === 'json') {
    process.stdout.write(`${JSON.stringify(summary, null, 2)}\n`);
    return;
  }
  if (summary.success) {
    process.stdout.write(`success\nsrc: ${summary.src}\nurl: ${summary.url}\nfileId: ${summary.fileId}\n`);
  } else {
    process.stdout.write(`failed ${summary.code || ''}\n${summary.error}\n`);
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
