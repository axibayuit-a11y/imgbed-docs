#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const USER_AGENT = 'ImgBed-Token-List/1.0 Node';

const ACTION_FLAGS = Object.freeze({
  '--files': 'files',
  '--file-summary': 'file-summary',
  '--channels': 'channels',
  '--directories': 'directories',
  '--users': 'users',
  '--user-detail': 'user-detail',
  '--blocked-ips': 'blocked-ips',
});

const FILE_QUERY_MAP = Object.freeze({
  start: 'start',
  count: 'count',
  dir: 'dir',
  recursive: 'recursive',
  search: 'search',
  channel: 'channel',
  channelScope: 'channelScope',
  channelNameGroups: 'channelNameGroups',
  listType: 'listType',
  includeTags: 'includeTags',
  excludeTags: 'excludeTags',
  timeStart: 'timeStart',
  timeEnd: 'timeEnd',
  fileExts: 'fileExts',
  excludeFileExts: 'excludeFileExts',
  fileStatusCategories: 'fileStatusCategories',
  uploadIp: 'uploadIp',
  ageRatings: 'ageRatings',
  orientation: 'orientation',
  readSource: 'readSource',
  accessStatus: 'accessStatus',
  minWidth: 'minWidth',
  maxWidth: 'maxWidth',
  minHeight: 'minHeight',
  maxHeight: 'maxHeight',
  minFileSize: 'minFileSize',
  maxFileSize: 'maxFileSize',
});

const DIRECTORY_QUERY_MAP = Object.freeze({
  dir: 'dir',
  scope: 'scope',
  searchPrefix: 'searchPrefix',
  includeParents: 'includeParents',
  limit: 'limit',
  cursor: 'cursor',
});

const USER_QUERY_MAP = Object.freeze({
  start: 'start',
  count: 'count',
  sort: 'sort',
  search: 'search',
  uploadStatus: 'uploadStatus',
  startTime: 'startTime',
  endTime: 'endTime',
  fileStatusCategories: 'fileStatusCategories',
  ageRatings: 'ageRatings',
  minFileSize: 'minFileSize',
  maxFileSize: 'maxFileSize',
  listType: 'listType',
  accessStatus: 'accessStatus',
});

const USER_DETAIL_QUERY_MAP = Object.freeze({
  ip: 'ip',
  start: 'start',
  count: 'count',
  startTime: 'startTime',
  endTime: 'endTime',
  fileStatusCategories: 'fileStatusCategories',
  ageRatings: 'ageRatings',
  minFileSize: 'minFileSize',
  maxFileSize: 'maxFileSize',
  listType: 'listType',
  accessStatus: 'accessStatus',
});

const ENUMS = Object.freeze({
  channelScope: new Set(['primary', 'backup', 'all']),
  scope: new Set(['direct', 'full']),
  sort: new Set(['timeDesc', 'timeAsc', 'countDesc', 'countAsc', 'totalSizeDesc', 'totalSizeAsc']),
  uploadStatus: new Set(['allowed', 'blocked']),
  accessStatus: new Set(['normal', 'blocked']),
  output: new Set(['pretty', 'json']),
});

function printHelp() {
  process.stdout.write(`ImgBed API Token list tool

Usage:
  node imgbed-token-list.mjs --base-url <url> --token <token> --files [filters]
  node imgbed-token-list.mjs --base-url <url> --token <token> --file-summary [filters]
  node imgbed-token-list.mjs --base-url <url> --token <token> --channels
  node imgbed-token-list.mjs --base-url <url> --token <token> --directories [directory filters]
  node imgbed-token-list.mjs --base-url <url> --token <token> --users [filters]
  node imgbed-token-list.mjs --base-url <url> --token <token> --user-detail --ip <ip> [filters]
  node imgbed-token-list.mjs --base-url <url> --token <token> --blocked-ips

Required:
  --base-url <url>             ImgBed site URL, for example https://image.ai6.me
  --token <token>              API Token with list permission. You can also set IMGBED_API_TOKEN.

Actions:
  --files                      List files from /api/manage/list.
  --file-summary               Read file count summary from /api/manage/list?sum=true&count=-1.
  --channels                   List redacted upload channel config.
  --directories                List directory stats.
  --users                      List user/IP upload stats.
  --user-detail                List files uploaded by one IP. Requires --ip.
  --blocked-ips                List blocked upload IPs.

File filters:
  --start <n>                  Offset. Default is server default.
  --count <n>                  Page size.
  --dir <path>                 Directory path.
  --recursive                  Include subdirectory files.
  --search <text>              Search keyword.
  --channel <key>              Upload channel key.
  --channel-scope <value>      primary, backup, or all.
  --channel-name-groups <csv>  Existing backend channelNameGroups value.
  --list-type <csv>            None, White, Block.
  --include-tags <csv>         Include tags.
  --exclude-tags <csv>         Exclude tags.
  --time-start <ms>            File upload time start.
  --time-end <ms>              File upload time end.
  --file-exts <csv>            Include file extensions.
  --exclude-file-exts <csv>    Exclude file extensions.
  --file-status-categories <csv>
                               image, audio, video, document, code, other.
  --upload-ip <ip>             Upload IP prefix.
  --age-ratings <csv>          none, all-ages, r12, r16, r18.
  --orientation <csv>          Backend orientation filter value.
  --read-source <csv>          Backend readSource filter value.
  --access-status <value>      normal or blocked.
  --min-width <n>              Minimum image width.
  --max-width <n>              Maximum image width.
  --min-height <n>             Minimum image height.
  --max-height <n>             Maximum image height.
  --min-file-size <mb>         Minimum file size in MiB-like MB units used by backend.
  --max-file-size <mb>         Maximum file size in MiB-like MB units used by backend.

Directory filters:
  --scope <value>              direct or full.
  --search-prefix <path>       Directory prefix search.
  --include-parents            Include parent directories in full mode.
  --limit <n>                  Directory page size, backend caps at 100.
  --cursor <path>              Directory pagination cursor.

User filters:
  --sort <value>               timeDesc, timeAsc, countDesc, countAsc, totalSizeDesc, totalSizeAsc.
  --upload-status <value>      allowed or blocked.
  --start-time <ms>            User stats time start.
  --end-time <ms>              User stats time end.

Tool options:
  --retries <n>                Retry temporary request failures. Default: 3
  --timeout-ms <n>             Request timeout. Default: 180000
  --output <pretty|json>       Output format. Default: pretty
  --save-response <path>       Save final JSON result.
  -h, --help                   Show this help.

Notes:
  - This script is read-only. It does not delete files, edit settings, or block/unblock IPs.
  - CSV filters are passed to the backend as strings so future backend values keep working.
`);
}

function parseArgs(argv) {
  const args = {
    baseUrl: '',
    token: process.env.IMGBED_API_TOKEN || '',
    action: '',
    retries: 3,
    timeoutMs: 180000,
    output: 'pretty',
    saveResponse: '',
    help: false,
    params: {},
  };

  for (let index = 0; index < argv.length; index += 1) {
    const raw = argv[index];
    const [flag, inlineValue] = raw.includes('=') ? raw.split(/=(.*)/s, 2) : [raw, undefined];
    const readValue = () => {
      if (inlineValue !== undefined) return inlineValue;
      const next = argv[index + 1];
      if (!next || next.startsWith('--')) throw new Error(`Missing value for ${flag}`);
      index += 1;
      return next;
    };
    const setAction = (action) => {
      if (args.action && args.action !== action) {
        throw new Error(`Only one action can be used. Already set: --${args.action}`);
      }
      args.action = action;
    };

    if (ACTION_FLAGS[flag]) {
      setAction(ACTION_FLAGS[flag]);
      continue;
    }

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
      case '--start':
        args.params.start = parseNonNegativeInteger(readValue(), '--start');
        break;
      case '--count':
        args.params.count = parseInteger(readValue(), '--count');
        break;
      case '--dir':
        args.params.dir = readValue();
        break;
      case '--recursive':
        args.params.recursive = true;
        break;
      case '--search':
        args.params.search = readValue();
        break;
      case '--channel':
        args.params.channel = readValue();
        break;
      case '--channel-scope':
        args.params.channelScope = parseEnum(readValue(), '--channel-scope', ENUMS.channelScope);
        break;
      case '--channel-name-groups':
        args.params.channelNameGroups = readValue();
        break;
      case '--list-type':
        args.params.listType = readValue();
        break;
      case '--include-tags':
        args.params.includeTags = readValue();
        break;
      case '--exclude-tags':
        args.params.excludeTags = readValue();
        break;
      case '--time-start':
        args.params.timeStart = parseNonNegativeInteger(readValue(), '--time-start');
        break;
      case '--time-end':
        args.params.timeEnd = parseNonNegativeInteger(readValue(), '--time-end');
        break;
      case '--file-exts':
        args.params.fileExts = readValue();
        break;
      case '--exclude-file-exts':
        args.params.excludeFileExts = readValue();
        break;
      case '--file-status-categories':
        args.params.fileStatusCategories = readValue();
        break;
      case '--upload-ip':
        args.params.uploadIp = readValue();
        break;
      case '--age-ratings':
        args.params.ageRatings = readValue();
        break;
      case '--orientation':
        args.params.orientation = readValue();
        break;
      case '--read-source':
        args.params.readSource = readValue();
        break;
      case '--access-status':
        args.params.accessStatus = parseEnum(readValue(), '--access-status', ENUMS.accessStatus);
        break;
      case '--min-width':
        args.params.minWidth = parsePositiveInteger(readValue(), '--min-width');
        break;
      case '--max-width':
        args.params.maxWidth = parsePositiveInteger(readValue(), '--max-width');
        break;
      case '--min-height':
        args.params.minHeight = parsePositiveInteger(readValue(), '--min-height');
        break;
      case '--max-height':
        args.params.maxHeight = parsePositiveInteger(readValue(), '--max-height');
        break;
      case '--min-file-size':
        args.params.minFileSize = parsePositiveInteger(readValue(), '--min-file-size');
        break;
      case '--max-file-size':
        args.params.maxFileSize = parsePositiveInteger(readValue(), '--max-file-size');
        break;
      case '--scope':
        args.params.scope = parseEnum(readValue(), '--scope', ENUMS.scope);
        break;
      case '--search-prefix':
        args.params.searchPrefix = readValue();
        break;
      case '--include-parents':
        args.params.includeParents = true;
        break;
      case '--limit':
        args.params.limit = parsePositiveInteger(readValue(), '--limit');
        break;
      case '--cursor':
        args.params.cursor = readValue();
        break;
      case '--sort':
        args.params.sort = parseEnum(readValue(), '--sort', ENUMS.sort);
        break;
      case '--upload-status':
        args.params.uploadStatus = parseEnum(readValue(), '--upload-status', ENUMS.uploadStatus);
        break;
      case '--start-time':
        args.params.startTime = parseNonNegativeInteger(readValue(), '--start-time');
        break;
      case '--end-time':
        args.params.endTime = parseNonNegativeInteger(readValue(), '--end-time');
        break;
      case '--ip':
        args.params.ip = readValue();
        break;
      default:
        throw new Error(`Unknown argument: ${raw}`);
    }
  }

  if (!ENUMS.output.has(args.output)) throw new Error('--output must be pretty or json');
  return args;
}

function validateArgs(args) {
  if (args.help) return;
  if (!args.baseUrl) throw new Error('--base-url is required');
  if (!args.token) throw new Error('--token is required, or set IMGBED_API_TOKEN');
  if (!args.action) throw new Error('One action is required. Use --help to see actions.');
  if (args.action === 'user-detail' && !String(args.params.ip || '').trim()) {
    throw new Error('--ip is required for --user-detail');
  }
}

function parseInteger(value, name) {
  const number = Number.parseInt(String(value || ''), 10);
  if (!Number.isInteger(number)) throw new Error(`${name} must be an integer`);
  return number;
}

function parsePositiveInteger(value, name) {
  const number = parseInteger(value, name);
  if (number <= 0) throw new Error(`${name} must be a positive integer`);
  return number;
}

function parseNonNegativeInteger(value, name) {
  const number = parseInteger(value, name);
  if (number < 0) throw new Error(`${name} must be a non-negative integer`);
  return number;
}

function parseEnum(value, name, allowedSet) {
  const text = String(value || '').trim();
  if (!allowedSet.has(text)) {
    throw new Error(`${name} must be one of: ${[...allowedSet].join(', ')}`);
  }
  return text;
}

function normalizeBaseUrl(baseUrl) {
  return new URL(baseUrl).toString().replace(/\/+$/, '');
}

function authHeaders(args, extra = {}) {
  return {
    Authorization: `Bearer ${args.token}`,
    'User-Agent': USER_AGENT,
    Accept: 'application/json, text/plain;q=0.9',
    ...extra,
  };
}

function appendQuery(url, params, map) {
  for (const [argKey, queryKey] of Object.entries(map)) {
    const value = params[argKey];
    if (value === undefined || value === null || value === '') continue;
    url.searchParams.set(queryKey, String(value));
  }
}

function buildRequestUrl(args) {
  const base = `${normalizeBaseUrl(args.baseUrl)}/`;
  if (args.action === 'files') {
    const url = new URL('/api/manage/list', base);
    appendQuery(url, args.params, FILE_QUERY_MAP);
    return url;
  }
  if (args.action === 'file-summary') {
    const url = new URL('/api/manage/list', base);
    appendQuery(url, args.params, FILE_QUERY_MAP);
    url.searchParams.set('sum', 'true');
    url.searchParams.set('count', '-1');
    return url;
  }
  if (args.action === 'channels') {
    const url = new URL('/api/manage/list', base);
    url.searchParams.set('action', 'channel-config');
    return url;
  }
  if (args.action === 'directories') {
    const url = new URL('/api/manage/list', base);
    url.searchParams.set('action', 'directories');
    appendQuery(url, args.params, DIRECTORY_QUERY_MAP);
    return url;
  }
  if (args.action === 'users') {
    const url = new URL('/api/manage/cusConfig/list', base);
    appendQuery(url, args.params, USER_QUERY_MAP);
    return url;
  }
  if (args.action === 'user-detail') {
    const url = new URL('/api/manage/cusConfig/detail', base);
    appendQuery(url, args.params, USER_DETAIL_QUERY_MAP);
    return url;
  }
  if (args.action === 'blocked-ips') {
    return new URL('/api/manage/cusConfig/blockipList', base);
  }
  throw new Error(`Unsupported action: ${args.action}`);
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
    status: response.status,
    statusText: response.statusText,
    headers: Object.fromEntries(response.headers.entries()),
    payload,
    text,
    bodyPreview: text.length > 2000 ? text.slice(0, 2000) : text,
  };
}

function makeError(stage, result, fallbackCode = 'REQUEST_FAILED') {
  const payload = result?.payload || {};
  const code = String(payload.code || payload.error || fallbackCode || `HTTP_${result?.status || 0}`).trim();
  const message = String(payload.message || payload.error || result?.bodyPreview || result?.statusText || code).trim();
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
  if (name) parts.push(name);
  if (code && code !== name) parts.push(code);
  if (message && message !== name && message !== code) parts.push(message);
  const current = parts.join(' ');
  const causeText = describeErrorCause(error.cause, depth + 1);
  if (current && causeText) return `${current}; cause: ${causeText}`;
  return current || causeText || '';
}

function wrapNetworkError(stage, error) {
  const isTimeout = String(error?.name || '').trim() === 'AbortError';
  const code = isTimeout ? 'REQUEST_TIMEOUT' : 'NETWORK_ERROR';
  const wrapped = new Error(`${stage} failed: ${code} ${describeErrorCause(error) || error}`);
  wrapped.code = code;
  wrapped.status = 0;
  wrapped.cause = error;
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
      return await task();
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

async function requestList(args, url) {
  return withRetry(args, args.action, async () => {
    let response;
    try {
      response = await fetchWithTimeout(url, {
        method: 'GET',
        headers: authHeaders(args),
      }, args.timeoutMs);
    } catch (error) {
      throw wrapNetworkError(args.action, error);
    }

    const result = await parseResponse(response);
    if (!result.ok || result.payload?.success === false) {
      throw makeError(args.action, result);
    }
    return result;
  });
}

function formatBytes(bytes) {
  const value = Number(bytes || 0);
  if (!Number.isFinite(value) || value <= 0) return value === 0 ? '0 B' : '';
  if (value >= 1024 ** 4) return `${(value / 1024 ** 4).toFixed(2)} TiB`;
  if (value >= 1024 ** 3) return `${(value / 1024 ** 3).toFixed(2)} GiB`;
  if (value >= 1024 ** 2) return `${(value / 1024 ** 2).toFixed(2)} MiB`;
  if (value >= 1024) return `${(value / 1024).toFixed(2)} KiB`;
  return `${value} B`;
}

function formatTime(value) {
  const number = Number(value || 0);
  if (!Number.isFinite(number) || number <= 0) return '';
  try {
    return new Date(number).toISOString().replace('T', ' ').replace(/\.\d{3}Z$/, 'Z');
  } catch {
    return String(value);
  }
}

function compact(value, max = 64) {
  const text = String(value ?? '').replace(/\s+/g, ' ').trim();
  if (text.length <= max) return text;
  return `${text.slice(0, Math.max(0, max - 3))}...`;
}

function pad(text, width) {
  const value = String(text ?? '');
  if (value.length >= width) return value;
  return value + ' '.repeat(width - value.length);
}

function renderTable(rows, columns) {
  if (!rows.length) return 'No rows.\n';
  const widths = columns.map((column) => Math.min(
    Math.max(
      column.label.length,
      ...rows.map((row) => String(row[column.key] ?? '').length)
    ),
    column.maxWidth || 48
  ));
  const header = columns.map((column, index) => pad(compact(column.label, widths[index]), widths[index])).join('  ');
  const divider = widths.map((width) => '-'.repeat(width)).join('  ');
  const body = rows.map((row) => columns
    .map((column, index) => pad(compact(row[column.key], widths[index]), widths[index]))
    .join('  '));
  return `${header}\n${divider}\n${body.join('\n')}\n`;
}

function getFileName(file) {
  return file?.metadata?.FileName || file?.name || file?.originalId || '';
}

function summarizeFile(file) {
  const metadata = file?.metadata || {};
  return {
    name: getFileName(file),
    size: formatBytes(file?.fileSizeBytes || metadata.FileSize),
    channel: metadata.ChannelName || metadata.Channel || '',
    directory: metadata.Directory || '',
    time: formatTime(metadata.TimeStamp),
    ip: metadata.UploadIP || '',
  };
}

function summarizeDirectory(entry) {
  const metadata = entry?.metadata || {};
  return {
    name: entry?.name || entry?.path || entry?.directory || '',
    files: entry?.subtreeFileCount ?? metadata.SubtreeFileCount ?? metadata.FileCount ?? '',
    size: formatBytes(entry?.subtreeSizeBytes || metadata.SubtreeSizeBytes || metadata.TotalSizeBytes || metadata.FileSize),
  };
}

function summarizeChannel(channel) {
  return {
    type: channel?.type || channel?.uploadChannel || '',
    name: channel?.name || channel?.channelName || '',
    enabled: boolText(channel?.enabled),
    load_balance: boolText(channel?.load_balance_enabled ?? channel?.loadBalanceEnabled),
    quota: channel?.quota_limit_bytes ? `${formatBytes(channel.quota_used_bytes)}/${formatBytes(channel.quota_limit_bytes)}` : formatBytes(channel?.quota_used_bytes),
    checked: formatTime(channel?.quota_checked_at),
  };
}

function summarizeUser(user) {
  return {
    ip: user?.ip || '',
    address: user?.address || '',
    size: formatBytes(user?.totalSizeBytes),
    count: user?.count ?? '',
    latest: formatTime(user?.latestTimestamp),
  };
}

function summarizeDetailFile(file) {
  const metadata = file?.metadata || {};
  return {
    name: metadata.FileName || file?.name || '',
    type: metadata.FileType || '',
    size: formatBytes(metadata.FileSize),
    listType: metadata.ListType || '',
    label: metadata.Label || '',
    time: formatTime(metadata.TimeStamp),
  };
}

function boolText(value) {
  if (value === true) return 'yes';
  if (value === false) return 'no';
  return '';
}

function renderPretty(result) {
  const payload = result.payload;
  const lines = [];
  lines.push(`Action: ${result.action}`);
  lines.push(`URL: ${result.url}`);
  lines.push(`Status: ${result.status}`);
  lines.push(`Duration: ${result.durationMs} ms`);

  if (result.action === 'files') {
    const files = Array.isArray(payload?.files) ? payload.files : [];
    lines.push(`Total: ${payload?.totalCount ?? ''}, Returned: ${payload?.returnedCount ?? files.length}`);
    lines.push(renderTable(files.map(summarizeFile), [
      { key: 'name', label: 'File', maxWidth: 36 },
      { key: 'size', label: 'Size', maxWidth: 12 },
      { key: 'channel', label: 'Channel', maxWidth: 18 },
      { key: 'directory', label: 'Directory', maxWidth: 28 },
      { key: 'time', label: 'Time', maxWidth: 22 },
      { key: 'ip', label: 'IP', maxWidth: 24 },
    ]));
  } else if (result.action === 'file-summary') {
    lines.push(`Sum: ${payload?.sum ?? ''}`);
    lines.push(`Index updated: ${formatTime(payload?.indexLastUpdated)}`);
  } else if (result.action === 'channels') {
    const channels = Array.isArray(payload?.channels) ? payload.channels : [];
    lines.push(`Channels: ${channels.length}`);
    lines.push(renderTable(channels.map(summarizeChannel), [
      { key: 'type', label: 'Type', maxWidth: 14 },
      { key: 'name', label: 'Name', maxWidth: 24 },
      { key: 'enabled', label: 'Enabled', maxWidth: 8 },
      { key: 'load_balance', label: 'LB', maxWidth: 5 },
      { key: 'quota', label: 'Quota', maxWidth: 28 },
      { key: 'checked', label: 'Checked', maxWidth: 22 },
    ]));
  } else if (result.action === 'directories') {
    const directories = Array.isArray(payload?.directories) ? payload.directories : [];
    lines.push(`Returned: ${payload?.returnedCount ?? directories.length}, Has more: ${boolText(payload?.hasMore)}, Next cursor: ${payload?.nextCursor || ''}`);
    lines.push(renderTable(directories.map(summarizeDirectory), [
      { key: 'name', label: 'Directory', maxWidth: 48 },
      { key: 'files', label: 'Files', maxWidth: 10 },
      { key: 'size', label: 'Size', maxWidth: 14 },
    ]));
  } else if (result.action === 'users') {
    const users = Array.isArray(payload?.users) ? payload.users : [];
    lines.push(`Total: ${payload?.total ?? ''}, Returned: ${users.length}, Has more: ${boolText(payload?.hasMore)}, Sort: ${payload?.sort || ''}`);
    lines.push(renderTable(users.map(summarizeUser), [
      { key: 'ip', label: 'IP', maxWidth: 28 },
      { key: 'address', label: 'Address', maxWidth: 56 },
      { key: 'size', label: 'Uploaded', maxWidth: 14 },
      { key: 'count', label: 'Count', maxWidth: 8 },
      { key: 'latest', label: 'Latest', maxWidth: 22 },
    ]));
  } else if (result.action === 'user-detail') {
    const files = Array.isArray(payload?.files) ? payload.files : [];
    lines.push(`IP: ${payload?.ip || ''}`);
    lines.push(`Total: ${payload?.total ?? ''}, Returned: ${files.length}, Has more: ${boolText(payload?.hasMore)}`);
    lines.push(renderTable(files.map(summarizeDetailFile), [
      { key: 'name', label: 'File', maxWidth: 36 },
      { key: 'type', label: 'Type', maxWidth: 24 },
      { key: 'size', label: 'Size', maxWidth: 12 },
      { key: 'listType', label: 'List', maxWidth: 8 },
      { key: 'label', label: 'Label', maxWidth: 12 },
      { key: 'time', label: 'Time', maxWidth: 22 },
    ]));
  } else if (result.action === 'blocked-ips') {
    const ips = result.blockedIps || [];
    lines.push(`Blocked IPs: ${ips.length}`);
    lines.push(ips.length ? `${ips.join('\n')}\n` : 'No blocked IPs.\n');
  }

  return `${lines.join('\n')}\n`;
}

function buildFinalResult(args, url, responseResult, startedAt) {
  const result = {
    success: true,
    action: args.action,
    url: url.toString(),
    status: responseResult.status,
    durationMs: Date.now() - startedAt,
    payload: responseResult.payload,
  };
  if (args.action === 'blocked-ips') {
    result.blockedIps = String(responseResult.text || '')
      .split(',')
      .map((item) => item.trim())
      .filter(Boolean);
    result.payload = { ips: result.blockedIps };
  }
  return result;
}

function saveResult(filePath, result) {
  if (!filePath) return;
  const absolutePath = path.resolve(filePath);
  fs.mkdirSync(path.dirname(absolutePath), { recursive: true });
  fs.writeFileSync(absolutePath, `${JSON.stringify(result, null, 2)}\n`, 'utf8');
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    printHelp();
    return;
  }
  validateArgs(args);
  args.baseUrl = normalizeBaseUrl(args.baseUrl);

  const url = buildRequestUrl(args);
  const startedAt = Date.now();
  try {
    const responseResult = await requestList(args, url);
    const finalResult = buildFinalResult(args, url, responseResult, startedAt);
    saveResult(args.saveResponse, finalResult);
    if (args.output === 'json') {
      process.stdout.write(`${JSON.stringify(finalResult, null, 2)}\n`);
    } else {
      process.stdout.write(renderPretty(finalResult));
      if (args.saveResponse) log(args, `Saved response: ${path.resolve(args.saveResponse)}`);
    }
  } catch (error) {
    const finalResult = {
      success: false,
      action: args.action,
      url: url.toString(),
      durationMs: Date.now() - startedAt,
      code: String(error.code || '').trim(),
      statusCode: Number(error.status || error.response?.status || 0),
      error: String(error.message || error),
      response: error.response?.payload || null,
    };
    saveResult(args.saveResponse, finalResult);
    if (args.output === 'json') {
      process.stdout.write(`${JSON.stringify(finalResult, null, 2)}\n`);
    } else {
      process.stderr.write(`${finalResult.error}\n`);
      if (args.saveResponse) process.stderr.write(`Saved response: ${path.resolve(args.saveResponse)}\n`);
    }
    process.exitCode = 1;
  }
}

main().catch((error) => {
  process.stderr.write(`Error: ${error?.message || error}\n`);
  process.exitCode = 1;
});
