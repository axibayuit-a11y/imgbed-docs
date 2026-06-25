#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const USER_AGENT = 'ImgBed-Token-Upload-Settings/1.0 Node';

const CHANNELS = Object.freeze({
  telegram: { aliases: ['tg', 'telegram'] },
  discord: { aliases: ['dc', 'discord'] },
  cfr2: { aliases: ['r2', 'cfr2'] },
  s3: { aliases: ['s3'] },
  webdav: { aliases: ['wd', 'webdav'] },
  github: { aliases: ['gh', 'github'] },
  gitlab: { aliases: ['gl', 'gitlab'] },
  huggingface: { aliases: ['hf', 'huggingface'] },
  onedrive: { aliases: ['od', 'onedrive'] },
  googledrive: { aliases: ['gd', 'google', 'googledrive'] },
  dropbox: { aliases: ['db', 'dropbox'] },
  yandex: { aliases: ['yx', 'yandex'] },
  pcloud: { aliases: ['pd', 'pcloud'] },
});

function printHelp() {
  process.stdout.write(`ImgBed API Token upload settings tool

Usage:
  node imgbed-token-upload-settings.mjs --base-url <url> --token <token> --list
  node imgbed-token-upload-settings.mjs --base-url <url> --token <token> --get --channel <key> [--channel-name <name>]
  node imgbed-token-upload-settings.mjs --base-url <url> --token <token> --upsert --channel <key> --channel-name <name> [--patch-json <path>] [--set key=value]
  node imgbed-token-upload-settings.mjs --base-url <url> --token <token> --delete --channel <key> --channel-name <name> [--apply]
  node imgbed-token-upload-settings.mjs --base-url <url> --token <token> --load-balance <true|false> --channel <key> [--apply]

Required:
  --base-url <url>       ImgBed site URL, for example https://image.ai6.me
  --token <token>        API Token with manage permission. You can also set IMGBED_API_TOKEN.

Actions:
  --list                 List upload setting groups.
  --get                  Read one upload group or child channel.
  --upsert               Create or edit one child channel. Dry-run unless --apply is set.
  --delete               Delete one child channel. Dry-run unless --apply is set.
  --load-balance <bool>  Enable or disable load balance for one upload channel. Dry-run unless --apply is set.

Action parameters:
  --channel <key>        Upload channel:
                         telegram, discord, cfr2, s3, webdav, github, gitlab,
                         huggingface, onedrive, googledrive, dropbox, yandex, pcloud
  --channel-name <name>  Child channel/account name.
  --patch-json <path>    JSON object to merge into the child channel.
  --set key=value        Set a field. Repeatable. Dot paths are supported, for example quota.enabled=true.
  --apply                Actually send write requests. Without this flag, writes only preview.

Tool options:
  --retries <n>          Retry temporary request failures. Default: 3
  --timeout-ms <n>       Request timeout. Default: 180000
  --output <pretty|json> Output format. Default: pretty
  --save-response <path> Save final JSON result.
  -h, --help             Show this help.
`);
}

function parseArgs(argv) {
  const args = {
    baseUrl: '',
    token: process.env.IMGBED_API_TOKEN || '',
    action: '',
    channel: '',
    channelName: '',
    patchJson: '',
    setValues: [],
    loadBalance: null,
    apply: false,
    retries: 3,
    timeoutMs: 180000,
    output: 'pretty',
    saveResponse: '',
    help: false,
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
      if (args.action && args.action !== action) throw new Error(`Only one action can be used. Already set: --${args.action}`);
      args.action = action;
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
      case '--list':
        setAction('list');
        break;
      case '--get':
        setAction('get');
        break;
      case '--upsert':
        setAction('upsert');
        break;
      case '--delete':
        setAction('delete');
        break;
      case '--load-balance':
        setAction('load-balance');
        args.loadBalance = parseBoolean(readValue(), '--load-balance');
        break;
      case '--channel':
        args.channel = normalizeChannel(readValue());
        break;
      case '--channel-name':
        args.channelName = readValue();
        break;
      case '--patch-json':
        args.patchJson = readValue();
        break;
      case '--set':
        args.setValues.push(readValue());
        break;
      case '--apply':
        args.apply = true;
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
      default:
        throw new Error(`Unknown argument: ${raw}`);
    }
  }

  if (!['pretty', 'json'].includes(args.output)) throw new Error('--output must be pretty or json');
  return args;
}

function validateArgs(args) {
  if (args.help) return;
  if (!args.baseUrl) throw new Error('--base-url is required');
  if (!args.token) throw new Error('--token is required, or set IMGBED_API_TOKEN');
  if (!args.action) throw new Error('One action is required: --list, --get, --upsert, --delete, or --load-balance');
  if (args.action !== 'list' && !args.channel) throw new Error('--channel is required');
  if (['upsert', 'delete'].includes(args.action) && !args.channelName) throw new Error('--channel-name is required');
  if (!['upsert'].includes(args.action) && (args.patchJson || args.setValues.length > 0)) {
    throw new Error('--patch-json and --set can only be used with --upsert');
  }
}

function parsePositiveInteger(value, name) {
  const number = Number.parseInt(String(value || ''), 10);
  if (!Number.isInteger(number) || number <= 0) throw new Error(`${name} must be a positive integer`);
  return number;
}

function parseBoolean(value, name) {
  const normalized = String(value || '').trim().toLowerCase();
  if (['1', 'true', 'yes', 'on'].includes(normalized)) return true;
  if (['0', 'false', 'no', 'off'].includes(normalized)) return false;
  throw new Error(`${name} must be true or false`);
}

function normalizeChannel(channel) {
  const value = String(channel || '').trim().toLowerCase();
  for (const [key, rule] of Object.entries(CHANNELS)) {
    if (value === key || rule.aliases.includes(value)) return key;
  }
  throw new Error(`Unsupported channel: ${channel}`);
}

function normalizeChannelName(value) {
  return String(value || '').trim();
}

function normalizeBaseUrl(baseUrl) {
  return new URL(baseUrl).toString().replace(/\/+$/, '');
}

function toUrl(args, pathname) {
  return new URL(pathname, `${normalizeBaseUrl(args.baseUrl)}/`).toString();
}

function authHeaders(args, extra = {}) {
  return {
    Authorization: `Bearer ${args.token}`,
    'User-Agent': USER_AGENT,
    Accept: 'application/json',
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
    status: response.status,
    statusText: response.statusText,
    payload,
    bodyPreview: text.slice(0, 1000),
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

function wrapNetworkError(stage, error) {
  const isTimeout = String(error?.name || '').trim() === 'AbortError';
  const code = isTimeout ? 'REQUEST_TIMEOUT' : 'NETWORK_ERROR';
  const wrapped = new Error(`${stage} failed: ${code} ${error?.message || error}`);
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

async function requestJson(args, method, url, body = undefined, stage = 'request') {
  return withRetry(args, stage, async () => {
    let response;
    try {
      response = await fetchWithTimeout(url, {
        method,
        headers: authHeaders(args, body === undefined ? {} : { 'Content-Type': 'application/json' }),
        ...(body === undefined ? {} : { body: JSON.stringify(body) }),
      }, args.timeoutMs);
    } catch (error) {
      throw wrapNetworkError(stage, error);
    }

    const result = await parseResponse(response);
    if (!result.ok || result.payload?.success === false) {
      throw makeError(stage, result);
    }
    return result.payload;
  });
}

async function getUploadSettings(args) {
  return requestJson(args, 'GET', toUrl(args, '/api/manage/sysConfig/upload'), undefined, 'getUploadSettings');
}

function readPatchFile(filePath) {
  if (!filePath) return {};
  const absolutePath = path.resolve(filePath);
  const text = fs.readFileSync(absolutePath, 'utf8');
  const parsed = JSON.parse(text);
  if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
    throw new Error('--patch-json must contain a JSON object');
  }
  return parsed;
}

function parseSetValue(raw) {
  const text = String(raw || '');
  const index = text.indexOf('=');
  if (index <= 0) throw new Error(`Invalid --set value: ${raw}`);
  const key = text.slice(0, index).trim();
  const valueText = text.slice(index + 1);
  if (!key) throw new Error(`Invalid --set key: ${raw}`);
  return { key, value: parseTypedValue(valueText) };
}

function parseTypedValue(valueText) {
  const value = String(valueText);
  const trimmed = value.trim();
  if (trimmed === 'true') return true;
  if (trimmed === 'false') return false;
  if (trimmed === 'null') return null;
  if (trimmed !== '' && /^-?\d+(\.\d+)?$/.test(trimmed)) return Number(trimmed);
  if ((trimmed.startsWith('{') && trimmed.endsWith('}')) || (trimmed.startsWith('[') && trimmed.endsWith(']'))) {
    return JSON.parse(trimmed);
  }
  return value;
}

function setByPath(target, keyPath, value) {
  const parts = String(keyPath || '').split('.').map((part) => part.trim()).filter(Boolean);
  if (parts.length === 0) throw new Error(`Invalid field path: ${keyPath}`);
  let cursor = target;
  for (let index = 0; index < parts.length - 1; index += 1) {
    const part = parts[index];
    if (!cursor[part] || typeof cursor[part] !== 'object' || Array.isArray(cursor[part])) {
      cursor[part] = {};
    }
    cursor = cursor[part];
  }
  cursor[parts[parts.length - 1]] = value;
}

function deepMerge(base, patch) {
  const result = Array.isArray(base) ? [...base] : { ...(base || {}) };
  for (const [key, value] of Object.entries(patch || {})) {
    if (value && typeof value === 'object' && !Array.isArray(value) && result[key] && typeof result[key] === 'object' && !Array.isArray(result[key])) {
      result[key] = deepMerge(result[key], value);
    } else {
      result[key] = value;
    }
  }
  return result;
}

function buildPatch(args) {
  let patch = readPatchFile(args.patchJson);
  for (const rawSet of args.setValues) {
    const { key, value } = parseSetValue(rawSet);
    patch = { ...patch };
    setByPath(patch, key, value);
  }
  return patch;
}

function getGroup(settings, channel) {
  return settings?.[channel] && typeof settings[channel] === 'object'
    ? settings[channel]
    : { channels: [], loadBalance: { enabled: false, channels: [] } };
}

function findChannel(group, channelName) {
  const normalizedName = normalizeChannelName(channelName).toLowerCase();
  return (Array.isArray(group?.channels) ? group.channels : []).find((channel) => (
    normalizeChannelName(channel?.name).toLowerCase() === normalizedName
  )) || null;
}

function buildSingleGroupBody(channel, group, nextChannel = null) {
  return {
    [channel]: {
      loadBalance: group?.loadBalance || { enabled: false, channels: [] },
      channels: nextChannel ? [nextChannel] : [],
    },
  };
}

function buildLoadBalanceBody(channel, enabled) {
  return {
    [channel]: {
      loadBalance: { enabled: enabled === true },
    },
  };
}

function buildOperation(args, settings) {
  const group = getGroup(settings, args.channel);
  const existingChannel = args.channelName ? findChannel(group, args.channelName) : null;

  if (args.action === 'list') {
    return { action: 'list', settings };
  }

  if (args.action === 'get') {
    return {
      action: 'get',
      channel: args.channel,
      channelName: args.channelName,
      group,
      childChannel: args.channelName ? existingChannel : null,
    };
  }

  if (args.action === 'upsert') {
    const patch = buildPatch(args);
    const baseChannel = existingChannel || { name: normalizeChannelName(args.channelName), enabled: false };
    const nextChannel = deepMerge(baseChannel, patch);
    nextChannel.name = normalizeChannelName(nextChannel.name || args.channelName);
    const body = buildSingleGroupBody(args.channel, group, nextChannel);
    const url = new URL(toUrl(args, '/api/manage/sysConfig/upload'));
    url.searchParams.set('action', 'upsert');
    url.searchParams.set('channelName', args.channelName);
    return {
      action: 'upsert',
      method: 'POST',
      url: url.toString(),
      channel: args.channel,
      channelName: args.channelName,
      existed: Boolean(existingChannel),
      patch,
      before: existingChannel,
      after: nextChannel,
      body,
    };
  }

  if (args.action === 'delete') {
    const url = new URL(toUrl(args, '/api/manage/sysConfig/upload'));
    url.searchParams.set('action', 'delete');
    url.searchParams.set('channelName', args.channelName);
    return {
      action: 'delete',
      method: 'POST',
      url: url.toString(),
      channel: args.channel,
      channelName: args.channelName,
      existed: Boolean(existingChannel),
      before: existingChannel,
      body: buildSingleGroupBody(args.channel, group, null),
    };
  }

  if (args.action === 'load-balance') {
    const url = new URL(toUrl(args, '/api/manage/sysConfig/upload'));
    url.searchParams.set('action', 'loadBalance');
    return {
      action: 'load-balance',
      method: 'POST',
      url: url.toString(),
      channel: args.channel,
      before: group?.loadBalance?.enabled === true,
      after: args.loadBalance === true,
      body: buildLoadBalanceBody(args.channel, args.loadBalance),
    };
  }

  throw new Error(`Unsupported action: ${args.action}`);
}

async function applyOperation(args, operation) {
  if (!operation.method || !operation.url) return null;
  return requestJson(args, operation.method, operation.url, operation.body, operation.action);
}

async function verifyOperation(args, operation) {
  if (!['upsert', 'delete', 'load-balance'].includes(operation.action)) return { verified: true };
  const settings = await getUploadSettings(args);
  const group = getGroup(settings, operation.channel);

  if (operation.action === 'upsert') {
    const actual = findChannel(group, operation.channelName);
    return {
      verified: Boolean(actual),
      actual,
    };
  }
  if (operation.action === 'delete') {
    const actual = findChannel(group, operation.channelName);
    return {
      verified: !actual,
      actual: actual || null,
    };
  }
  if (operation.action === 'load-balance') {
    return {
      verified: (group?.loadBalance?.enabled === true) === operation.after,
      actual: group?.loadBalance?.enabled === true,
    };
  }
  return { verified: true };
}

function summarizeList(settings) {
  return Object.entries(CHANNELS).map(([channel]) => {
    const group = getGroup(settings, channel);
    const channels = Array.isArray(group.channels) ? group.channels : [];
    return {
      channel,
      loadBalanceEnabled: group?.loadBalance?.enabled === true,
      count: channels.length,
      channelNames: channels.map((item) => normalizeChannelName(item?.name)).filter(Boolean),
    };
  });
}

function output(args, summary) {
  const payload = summary;
  if (args.saveResponse) {
    fs.writeFileSync(path.resolve(args.saveResponse), `${JSON.stringify(payload, null, 2)}\n`, 'utf8');
  }
  if (args.output === 'json') {
    process.stdout.write(`${JSON.stringify(payload, null, 2)}\n`);
    return;
  }
  outputPretty(payload);
}

function outputPretty(summary) {
  if (summary.success === false) {
    process.stdout.write(`failed\ncode: ${summary.code || 'ERROR'}\nerror: ${summary.error || ''}\n`);
    return;
  }
  if (summary.action === 'list') {
    process.stdout.write('success\n');
    for (const item of summary.channels || []) {
      process.stdout.write(`${item.channel}: count=${item.count}, loadBalance=${item.loadBalanceEnabled}, names=${item.channelNames.join(', ')}\n`);
    }
    return;
  }
  if (summary.dryRun) {
    process.stdout.write(`dry-run\n`);
    process.stdout.write(`action: ${summary.action}\n`);
    if (summary.channel) process.stdout.write(`channel: ${summary.channel}\n`);
    if (summary.channelName) process.stdout.write(`channelName: ${summary.channelName}\n`);
    if (summary.url) process.stdout.write(`url: ${summary.url}\n`);
    process.stdout.write(`apply: false\n`);
    process.stdout.write(`body: ${JSON.stringify(summary.body, null, 2)}\n`);
    return;
  }
  process.stdout.write('success\n');
  process.stdout.write(`action: ${summary.action}\n`);
  if (summary.channel) process.stdout.write(`channel: ${summary.channel}\n`);
  if (summary.channelName) process.stdout.write(`channelName: ${summary.channelName}\n`);
  if (Object.prototype.hasOwnProperty.call(summary, 'verified')) process.stdout.write(`verified: ${summary.verified}\n`);
  if (summary.result) process.stdout.write(`result: ${JSON.stringify(summary.result, null, 2)}\n`);
}

function wantsJsonOutput(argv) {
  const outputIndex = argv.findIndex((item) => item === '--output' || item.startsWith('--output='));
  if (outputIndex === -1) return false;
  const raw = argv[outputIndex];
  const value = raw.includes('=') ? raw.split(/=(.*)/s, 2)[1] : argv[outputIndex + 1];
  return String(value || '').trim().toLowerCase() === 'json';
}

async function main() {
  const argv = process.argv.slice(2);
  let args;
  try {
    args = parseArgs(argv);
    if (args.help) {
      printHelp();
      return;
    }
    validateArgs(args);
  } catch (error) {
    process.exitCode = 1;
    const message = error?.message || String(error);
    if (wantsJsonOutput(argv)) {
      process.stdout.write(`${JSON.stringify({ success: false, code: 'ARGUMENT_ERROR', error: message }, null, 2)}\n`);
      return;
    }
    process.stderr.write(`Error: ${message}\n`);
    return;
  }

  const summary = {
    success: false,
    action: args.action,
    applied: false,
    dryRun: false,
  };

  try {
    const settings = await getUploadSettings(args);
    const operation = buildOperation(args, settings);

    if (args.action === 'list') {
      Object.assign(summary, {
        success: true,
        channels: summarizeList(settings),
      });
      output(args, summary);
      return;
    }

    if (args.action === 'get') {
      Object.assign(summary, {
        success: true,
        channel: operation.channel,
        channelName: operation.channelName,
        group: operation.channelName ? undefined : operation.group,
        childChannel: operation.channelName ? operation.childChannel : undefined,
      });
      output(args, summary);
      return;
    }

    Object.assign(summary, {
      success: true,
      dryRun: !args.apply,
      channel: operation.channel,
      channelName: operation.channelName,
      existed: operation.existed,
      before: operation.before,
      after: operation.after,
      url: operation.url,
      body: operation.body,
    });

    if (!args.apply) {
      output(args, summary);
      return;
    }

    const result = await applyOperation(args, operation);
    const verification = await verifyOperation(args, operation);
    Object.assign(summary, {
      applied: true,
      dryRun: false,
      result,
      ...verification,
    });
    if (verification.verified === false) {
      summary.success = false;
      summary.code = 'VERIFY_FAILED';
      summary.error = 'Write request succeeded but verification failed';
      process.exitCode = 1;
    }
  } catch (error) {
    Object.assign(summary, {
      success: false,
      code: error?.code || 'ERROR',
      error: error?.message || String(error),
      status: error?.status || 0,
    });
    process.exitCode = 1;
  }

  output(args, summary);
}

main();
