#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const USER_AGENT = 'ImgBed-Token-Manage/1.0 Node';
const WRITE_ACTIONS = new Set([
  'set-metadata',
  'set-label',
  'set-list-type',
  'batch-list-type',
  'set-tags',
  'add-tags',
  'remove-tags',
  'batch-tags',
  'move',
  'rename',
  'create-folder',
  'block-ip',
  'allow-ip',
  'create-upload-token',
]);

const READ_ACTIONS = new Set(['get-label', 'get-tags']);
const VALID_READ_SOURCES = new Set(['primary', 'backup']);
const VALID_LABELS = new Set(['all-ages', 'r12', 'r16', 'r18', 'None']);
const VALID_LIST_TYPES = new Set(['None', 'White', 'Block']);
const VALID_TAG_ACTIONS = new Set(['set', 'add', 'remove']);
const BATCH_LIMIT = 15;

function printHelp() {
  process.stdout.write(`ImgBed API Token manage tool

Usage:
  node imgbed-token-manage.mjs --base-url <url> --token <token> --set-metadata --file-id <id> [--file-name <name>] [--read-source primary|backup] [--apply]
  node imgbed-token-manage.mjs --base-url <url> --token <token> --get-label --file-id <id>
  node imgbed-token-manage.mjs --base-url <url> --token <token> --set-label --file-id <id> --label all-ages|r12|r16|r18|None [--apply]
  node imgbed-token-manage.mjs --base-url <url> --token <token> --get-tags --file-id <id>
  node imgbed-token-manage.mjs --base-url <url> --token <token> --add-tags --file-id <id> --tag <tag> [--tag <tag> ...] [--apply]
  node imgbed-token-manage.mjs --base-url <url> --token <token> --batch-tags --file-id <id> [--file-id <id> ...] --tag-action set|add|remove --tag <tag> [--apply]
  node imgbed-token-manage.mjs --base-url <url> --token <token> --set-list-type --file-id <id> --list-type None|White|Block [--apply]
  node imgbed-token-manage.mjs --base-url <url> --token <token> --batch-list-type --file-id <id> [--file-id <id> ...] --list-type None|White|Block [--apply]
  node imgbed-token-manage.mjs --base-url <url> --token <token> --move --file-id <id> [--file-id <id> ...] --target-path <dir> [--apply]
  node imgbed-token-manage.mjs --base-url <url> --token <token> --rename --old-file-id <id> --new-file-id <id> [--apply]
  node imgbed-token-manage.mjs --base-url <url> --token <token> --create-folder --parent-directory <dir> --folder-name <name> [--apply]
  node imgbed-token-manage.mjs --base-url <url> --token <token> --block-ip <ip> [--apply]
  node imgbed-token-manage.mjs --base-url <url> --token <token> --allow-ip <ip> [--apply]
  node imgbed-token-manage.mjs --base-url <url> --token <token> --create-upload-token --name <name> --owner <owner> --default-upload-channel <key> --expires-in-minutes <n> [--apply]

Required:
  --base-url <url>              ImgBed site URL, for example https://image.ai6.me
  --token <token>               API Token with manage permission. You can also set IMGBED_API_TOKEN.

Actions:
  --set-metadata                Update FileName and/or ReadSource for one file.
  --get-label                   Read one file review label.
  --set-label                   Update one file review label.
  --get-tags                    Read one file tags.
  --set-tags                    Replace one file tags.
  --add-tags                    Add tags to one file.
  --remove-tags                 Remove tags from one file.
  --batch-tags                  Set, add, or remove tags for multiple files.
  --set-list-type               Update one file list type.
  --batch-list-type             Update multiple file list types. Maximum 15 files per request.
  --move                        Move files to a target directory. Maximum 15 files per request.
  --rename                      Rename or relocate explicit old/new file ID pairs. Maximum 15 pairs per request.
  --create-folder               Create a folder placeholder file 0.md.
  --block-ip <ip>               Add an upload IP to the blocked list.
  --allow-ip <ip>               Remove an upload IP from the blocked list.
  --create-upload-token         Create a short-lived upload-only API Token.
  --apply                       Actually send write requests. Without this flag, writes only preview.

Action parameters:
  --file-id <id>                File ID. Repeatable for batch actions.
  --old-file-id <id>            Source file ID for --rename. Repeatable with --new-file-id.
  --new-file-id <id>            Target file ID for --rename. Repeatable with --old-file-id.
  --items-json <path>           JSON array of { "oldFileId": "...", "newFileId": "..." } for --rename.
  --file-name <name>            New display name for --set-metadata.
  --read-source <value>         primary or backup.
  --label <value>               all-ages, r12, r16, r18, or None.
  --list-type <value>           None, White, or Block.
  --tag <tag>                   Tag value. Repeatable.
  --tags-json <path>            JSON array of tag strings.
  --tag-action <value>          set, add, or remove for --batch-tags.
  --target-path <dir>           Target directory for --move.
  --parent-directory <dir>      Parent directory for --create-folder. Empty means root.
  --folder-name <name>          Folder name for --create-folder.
  --name <name>                 Token name for --create-upload-token.
  --owner <owner>               Token owner for --create-upload-token.
  --default-upload-channel <key>
                                Default upload channel for the short upload token.
  --expires-in-minutes <n>      Expiration relative to now for --create-upload-token.
  --expires-at <ms>             Absolute expiration timestamp in milliseconds.

Tool options:
  --batch-size <n>              Batch size for batch actions. Default: 15, maximum: 15.
  --retries <n>                 Retry temporary request failures. Default: 3
  --timeout-ms <n>              Request timeout. Default: 180000
  --output <pretty|json>        Output format. Default: pretty
  --save-response <path>        Save final JSON result.
  -h, --help                    Show this help.

Notes:
  - This script does not upload, list, or delete files. Use the dedicated upload/list/delete scripts for those permissions.
  - Write actions are dry-run by default. Add --apply only after checking the preview.
`);
}

function parseArgs(argv) {
  const args = {
    baseUrl: '',
    token: process.env.IMGBED_API_TOKEN || '',
    action: '',
    fileIds: [],
    oldFileIds: [],
    newFileIds: [],
    itemsJson: '',
    fileName: '',
    readSource: '',
    label: '',
    listType: '',
    tags: [],
    tagsJson: '',
    tagAction: '',
    targetPath: '',
    parentDirectory: '',
    folderName: '',
    ip: '',
    name: '',
    owner: '',
    defaultUploadChannel: '',
    expiresInMinutes: '',
    expiresAt: '',
    batchSize: BATCH_LIMIT,
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
      if (next === undefined || next.startsWith('--')) throw new Error(`Missing value for ${flag}`);
      index += 1;
      return next;
    };
    const setAction = (action) => {
      if (args.action && args.action !== action) throw new Error(`Only one action can be used. Already set: --${args.action}`);
      args.action = action;
    };

    switch (flag) {
      case '--set-metadata':
      case '--get-label':
      case '--set-label':
      case '--get-tags':
      case '--set-tags':
      case '--add-tags':
      case '--remove-tags':
      case '--batch-tags':
      case '--set-list-type':
      case '--batch-list-type':
      case '--move':
      case '--rename':
      case '--create-folder':
      case '--create-upload-token':
        setAction(flag.slice(2));
        break;
      case '--block-ip':
        setAction('block-ip');
        args.ip = readValue();
        break;
      case '--allow-ip':
        setAction('allow-ip');
        args.ip = readValue();
        break;
      case '--base-url':
        args.baseUrl = readValue();
        break;
      case '--token':
        args.token = readValue();
        break;
      case '--file-id':
        args.fileIds.push(readValue());
        break;
      case '--old-file-id':
        args.oldFileIds.push(readValue());
        break;
      case '--new-file-id':
        args.newFileIds.push(readValue());
        break;
      case '--items-json':
        args.itemsJson = readValue();
        break;
      case '--file-name':
        args.fileName = readValue();
        break;
      case '--read-source':
        args.readSource = String(readValue() || '').trim().toLowerCase();
        break;
      case '--label':
        args.label = readValue();
        break;
      case '--list-type':
        args.listType = readValue();
        break;
      case '--tag':
        args.tags.push(readValue());
        break;
      case '--tags-json':
        args.tagsJson = readValue();
        break;
      case '--tag-action':
        args.tagAction = String(readValue() || '').trim().toLowerCase();
        break;
      case '--target-path':
        args.targetPath = readValue();
        break;
      case '--parent-directory':
        args.parentDirectory = readValue();
        break;
      case '--folder-name':
        args.folderName = readValue();
        break;
      case '--name':
        args.name = readValue();
        break;
      case '--owner':
        args.owner = readValue();
        break;
      case '--default-upload-channel':
        args.defaultUploadChannel = readValue();
        break;
      case '--expires-in-minutes':
        args.expiresInMinutes = readValue();
        break;
      case '--expires-at':
        args.expiresAt = readValue();
        break;
      case '--batch-size':
        args.batchSize = Number(readValue());
        break;
      case '--retries':
        args.retries = Number(readValue());
        break;
      case '--timeout-ms':
        args.timeoutMs = Number(readValue());
        break;
      case '--output':
        args.output = readValue();
        break;
      case '--save-response':
        args.saveResponse = readValue();
        break;
      case '--apply':
        args.apply = true;
        break;
      case '-h':
      case '--help':
        args.help = true;
        break;
      default:
        throw new Error(`Unknown argument: ${raw}`);
    }
  }

  return args;
}

function normalizeBaseUrl(value) {
  return String(value || '').trim().replace(/\/+$/, '');
}

function encodeFileId(fileId) {
  return encodeURIComponent(String(fileId || '').trim()).replace(/%2F/g, '/');
}

function toUrl(args, pathname) {
  return new URL(pathname, `${normalizeBaseUrl(args.baseUrl)}/`).toString();
}

function authHeaders(args, extra = {}) {
  return {
    Authorization: `Bearer ${args.token}`,
    'User-Agent': USER_AGENT,
    ...extra,
  };
}

function jsonHeaders(args) {
  return authHeaders(args, {
    Accept: 'application/json, application/x-ndjson;q=0.9, text/plain;q=0.8',
    'Content-Type': 'application/json',
  });
}

function textHeaders(args) {
  return authHeaders(args, {
    Accept: 'text/plain, application/json;q=0.9',
    'Content-Type': 'text/plain;charset=utf-8',
  });
}

function readJsonFile(filePath, label) {
  const absolutePath = path.resolve(filePath);
  try {
    return JSON.parse(fs.readFileSync(absolutePath, 'utf8'));
  } catch (error) {
    throw new Error(`Failed to read ${label} JSON file: ${absolutePath}: ${error.message}`);
  }
}

function normalizeTags(args) {
  let tags = [...args.tags];
  if (args.tagsJson) {
    const parsed = readJsonFile(args.tagsJson, '--tags-json');
    if (!Array.isArray(parsed)) throw new Error('--tags-json must contain a JSON array');
    tags = tags.concat(parsed);
  }
  return [...new Set(tags.map((tag) => String(tag || '').trim()).filter(Boolean))];
}

function normalizeFileIds(args, { required = true } = {}) {
  const fileIds = [...new Set(args.fileIds.map((fileId) => String(fileId || '').trim()).filter(Boolean))];
  if (required && fileIds.length === 0) throw new Error('--file-id is required');
  return fileIds;
}

function normalizeRenameItems(args) {
  let items = [];
  if (args.itemsJson) {
    const parsed = readJsonFile(args.itemsJson, '--items-json');
    if (!Array.isArray(parsed)) throw new Error('--items-json must contain a JSON array');
    items = items.concat(parsed);
  }
  if (args.oldFileIds.length > 0 || args.newFileIds.length > 0) {
    if (args.oldFileIds.length !== args.newFileIds.length) {
      throw new Error('--old-file-id and --new-file-id must be provided in pairs');
    }
    items = items.concat(args.oldFileIds.map((oldFileId, index) => ({
      oldFileId,
      newFileId: args.newFileIds[index],
    })));
  }

  const normalized = items.map((item) => ({
    oldFileId: String(item?.oldFileId || '').trim(),
    newFileId: String(item?.newFileId || '').trim(),
  })).filter((item) => item.oldFileId && item.newFileId);

  if (normalized.length === 0) throw new Error('--rename requires --old-file-id/--new-file-id or --items-json');
  if (normalized.length > args.batchSize) throw new Error(`Too many rename items. Batch size is ${args.batchSize}`);
  return normalized;
}

function requireSingleFileId(args) {
  const fileIds = normalizeFileIds(args);
  if (fileIds.length !== 1) throw new Error('This action requires exactly one --file-id');
  return fileIds[0];
}

function parsePositiveInteger(value, label) {
  const parsed = Number(value);
  if (!Number.isInteger(parsed) || parsed <= 0) throw new Error(`${label} must be a positive integer`);
  return parsed;
}

function resolveExpiresAt(args) {
  if (args.expiresAt) {
    const parsed = Number(args.expiresAt);
    if (!Number.isFinite(parsed) || parsed <= Date.now()) throw new Error('--expires-at must be a future millisecond timestamp');
    return Math.floor(parsed);
  }
  if (args.expiresInMinutes) {
    return Date.now() + parsePositiveInteger(args.expiresInMinutes, '--expires-in-minutes') * 60 * 1000;
  }
  throw new Error('--create-upload-token requires --expires-in-minutes or --expires-at');
}

function validateArgs(args) {
  if (args.help) return;
  if (!args.action) throw new Error('One action is required. Use --help for examples.');
  if (!READ_ACTIONS.has(args.action) && !WRITE_ACTIONS.has(args.action)) throw new Error(`Unsupported action: ${args.action}`);
  if (!args.baseUrl) throw new Error('--base-url is required');
  if (!args.token) throw new Error('--token is required, or set IMGBED_API_TOKEN');
  if (!Number.isInteger(args.batchSize) || args.batchSize < 1 || args.batchSize > BATCH_LIMIT) {
    throw new Error(`--batch-size must be between 1 and ${BATCH_LIMIT}`);
  }
  if (!Number.isInteger(args.retries) || args.retries < 0) throw new Error('--retries must be a non-negative integer');
  if (!Number.isInteger(args.timeoutMs) || args.timeoutMs <= 0) throw new Error('--timeout-ms must be a positive integer');
  if (!['pretty', 'json'].includes(args.output)) throw new Error('--output must be pretty or json');

  switch (args.action) {
    case 'set-metadata':
      requireSingleFileId(args);
      if (!args.fileName && !args.readSource) throw new Error('--set-metadata requires --file-name and/or --read-source');
      if (args.readSource && !VALID_READ_SOURCES.has(args.readSource)) throw new Error('--read-source must be primary or backup');
      break;
    case 'get-label':
    case 'get-tags':
      requireSingleFileId(args);
      break;
    case 'set-label':
      requireSingleFileId(args);
      if (!VALID_LABELS.has(args.label)) throw new Error('--label must be all-ages, r12, r16, r18, or None');
      break;
    case 'set-list-type':
      requireSingleFileId(args);
      if (!VALID_LIST_TYPES.has(args.listType)) throw new Error('--list-type must be None, White, or Block');
      break;
    case 'batch-list-type':
      if (normalizeFileIds(args).length > args.batchSize) throw new Error(`Too many --file-id values. Batch size is ${args.batchSize}`);
      if (!VALID_LIST_TYPES.has(args.listType)) throw new Error('--list-type must be None, White, or Block');
      break;
    case 'set-tags':
    case 'add-tags':
    case 'remove-tags':
      requireSingleFileId(args);
      if (normalizeTags(args).length === 0) throw new Error('At least one --tag or --tags-json value is required');
      break;
    case 'batch-tags':
      if (normalizeFileIds(args).length > args.batchSize) throw new Error(`Too many --file-id values. Batch size is ${args.batchSize}`);
      if (!VALID_TAG_ACTIONS.has(args.tagAction)) throw new Error('--tag-action must be set, add, or remove');
      if (normalizeTags(args).length === 0) throw new Error('At least one --tag or --tags-json value is required');
      break;
    case 'move':
      if (normalizeFileIds(args).length > args.batchSize) throw new Error(`Too many --file-id values. Batch size is ${args.batchSize}`);
      if (!String(args.targetPath || '').trim()) throw new Error('--move requires --target-path');
      break;
    case 'rename':
      normalizeRenameItems(args);
      break;
    case 'create-folder':
      if (!String(args.folderName || '').trim()) throw new Error('--create-folder requires --folder-name');
      break;
    case 'block-ip':
    case 'allow-ip':
      if (!String(args.ip || '').trim()) throw new Error(`--${args.action} requires an IP value`);
      break;
    case 'create-upload-token':
      if (!args.name) throw new Error('--create-upload-token requires --name');
      if (!args.owner) throw new Error('--create-upload-token requires --owner');
      if (!args.defaultUploadChannel) throw new Error('--create-upload-token requires --default-upload-channel');
      resolveExpiresAt(args);
      break;
  }
}

function buildActionPlan(args) {
  switch (args.action) {
    case 'set-metadata': {
      const body = {};
      if (args.fileName) body.FileName = args.fileName;
      if (args.readSource) body.ReadSource = args.readSource;
      const fileId = requireSingleFileId(args);
      return {
        method: 'PATCH',
        url: toUrl(args, `/api/manage/metadata/${encodeFileId(fileId)}`),
        body,
        response: 'json',
      };
    }
    case 'get-label': {
      const fileId = requireSingleFileId(args);
      return {
        method: 'GET',
        url: toUrl(args, `/api/manage/label/${encodeFileId(fileId)}`),
        response: 'json',
        readOnly: true,
      };
    }
    case 'set-label': {
      const fileId = requireSingleFileId(args);
      return {
        method: 'POST',
        url: toUrl(args, `/api/manage/label/${encodeFileId(fileId)}`),
        body: { label: args.label },
        response: 'json',
      };
    }
    case 'get-tags': {
      const fileId = requireSingleFileId(args);
      return {
        method: 'GET',
        url: toUrl(args, `/api/manage/tags/${encodeFileId(fileId)}`),
        response: 'json',
        readOnly: true,
      };
    }
    case 'set-tags':
    case 'add-tags':
    case 'remove-tags': {
      const action = args.action.replace('-tags', '');
      const fileId = requireSingleFileId(args);
      return {
        method: 'POST',
        url: toUrl(args, `/api/manage/tags/${encodeFileId(fileId)}`),
        body: { action, tags: normalizeTags(args) },
        response: 'json',
      };
    }
    case 'batch-tags':
      return {
        method: 'POST',
        url: toUrl(args, '/api/manage/tags/batch'),
        body: {
          fileIds: normalizeFileIds(args),
          action: args.tagAction,
          tags: normalizeTags(args),
        },
        response: 'json',
      };
    case 'set-list-type': {
      const fileId = requireSingleFileId(args);
      return {
        method: 'POST',
        url: toUrl(args, `/api/manage/listType/${encodeFileId(fileId)}`),
        body: { listType: args.listType },
        response: 'json',
      };
    }
    case 'batch-list-type':
      return {
        method: 'POST',
        url: toUrl(args, '/api/manage/listType/batch'),
        body: { fileIds: normalizeFileIds(args), listType: args.listType },
        response: 'ndjson',
      };
    case 'move':
      return {
        method: 'POST',
        url: toUrl(args, '/api/manage/relocate/batch'),
        body: {
          taskType: 'move',
          fileIds: normalizeFileIds(args),
          targetPath: args.targetPath,
        },
        response: 'ndjson',
      };
    case 'rename':
      return {
        method: 'POST',
        url: toUrl(args, '/api/manage/relocate/batch'),
        body: {
          taskType: 'rename',
          items: normalizeRenameItems(args),
        },
        response: 'ndjson',
      };
    case 'create-folder':
      return {
        method: 'POST',
        url: toUrl(args, '/api/manage/folder/create'),
        body: {
          parentDirectory: args.parentDirectory,
          folderName: args.folderName,
        },
        response: 'json',
      };
    case 'block-ip':
      return {
        method: 'POST',
        url: toUrl(args, '/api/manage/cusConfig/blockip'),
        bodyText: String(args.ip || '').trim(),
        response: 'text',
      };
    case 'allow-ip':
      return {
        method: 'POST',
        url: toUrl(args, '/api/manage/cusConfig/whiteip'),
        bodyText: String(args.ip || '').trim(),
        response: 'text',
      };
    case 'create-upload-token':
      return {
        method: 'POST',
        url: toUrl(args, '/api/manage/apiTokens'),
        body: {
          name: args.name,
          owner: args.owner,
          permissions: ['upload'],
          defaultUploadChannel: args.defaultUploadChannel,
          expiresAt: resolveExpiresAt(args),
          autoDelete: true,
        },
        response: 'json',
      };
    default:
      throw new Error(`Unsupported action: ${args.action}`);
  }
}

function createDryRunResult(args, plan) {
  return {
    success: true,
    dryRun: true,
    action: args.action,
    method: plan.method,
    url: plan.url,
    body: plan.body,
    bodyText: plan.bodyText,
    message: 'Dry run only. Add --apply to execute this write action.',
  };
}

async function parseResponse(response, mode) {
  const text = await response.text();
  if (mode === 'ndjson') {
    const events = [];
    const parseErrors = [];
    for (const rawLine of text.split(/\r?\n/)) {
      const line = rawLine.trim();
      if (!line) continue;
      try {
        events.push(JSON.parse(line));
      } catch (error) {
        parseErrors.push({ line, error: error.message });
      }
    }
    const complete = [...events].reverse().find((event) => event.type === 'batch_complete' || event.type === 'batch_error') || null;
    return {
      events,
      eventCount: events.length,
      complete,
      parseErrors,
      rawText: events.length === 0 ? text : undefined,
    };
  }
  if (mode === 'json') {
    if (!text) return null;
    try {
      return JSON.parse(text);
    } catch {
      return { rawText: text };
    }
  }
  return text;
}

function shouldRetryStatus(status) {
  return status === 408 || status === 409 || status === 425 || status === 429 || status >= 500;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function requestWithRetries(args, plan) {
  let lastError = null;
  for (let attempt = 0; attempt <= args.retries; attempt += 1) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), args.timeoutMs);
    try {
      const isTextBody = plan.bodyText !== undefined;
      const response = await fetch(plan.url, {
        method: plan.method,
        headers: isTextBody ? textHeaders(args) : jsonHeaders(args),
        body: plan.method === 'GET'
          ? undefined
          : isTextBody
            ? plan.bodyText
            : JSON.stringify(plan.body || {}),
        signal: controller.signal,
      });
      const payload = await parseResponse(response, plan.response);
      const failedPayload = payload && typeof payload === 'object' && payload.success === false;
      const ndjsonBatchError = plan.response === 'ndjson' && payload?.complete?.type === 'batch_error';
      const result = {
        success: response.ok && !failedPayload && !ndjsonBatchError && (payload?.parseErrors?.length || 0) === 0,
        action: args.action,
        status: response.status,
        statusText: response.statusText,
        payload,
      };
      if (result.success || attempt >= args.retries || !shouldRetryStatus(response.status)) {
        return result;
      }
      lastError = new Error(`HTTP ${response.status}`);
    } catch (error) {
      lastError = error;
      if (attempt >= args.retries) break;
    } finally {
      clearTimeout(timeout);
    }
    await sleep(Math.min(1000 * (attempt + 1), 5000));
  }
  return {
    success: false,
    action: args.action,
    error: lastError?.message || 'Request failed',
  };
}

function summarize(result) {
  if (!result || typeof result !== 'object') return result;
  if (result.dryRun) return result;
  const payload = result.payload;
  if (payload && typeof payload === 'object' && !Array.isArray(payload)) {
    if (payload.events) {
      return {
        success: result.success,
        action: result.action,
        status: result.status,
        eventCount: payload.eventCount,
        complete: payload.complete,
        parseErrorCount: payload.parseErrors?.length || 0,
      };
    }
    return {
      success: result.success,
      action: result.action,
      status: result.status,
      payload,
    };
  }
  return result;
}

function printPretty(result) {
  const summary = summarize(result);
  if (summary.dryRun) {
    process.stdout.write(`dry-run: ${summary.action}\n`);
    process.stdout.write(`${summary.method} ${summary.url}\n`);
    if (summary.body !== undefined) process.stdout.write(`${JSON.stringify(summary.body, null, 2)}\n`);
    if (summary.bodyText !== undefined) process.stdout.write(`${summary.bodyText}\n`);
    process.stdout.write(`${summary.message}\n`);
    return;
  }
  process.stdout.write(JSON.stringify(summary, null, 2));
  process.stdout.write('\n');
}

function saveResponseIfNeeded(args, result) {
  if (!args.saveResponse) return;
  fs.writeFileSync(path.resolve(args.saveResponse), `${JSON.stringify(result, null, 2)}\n`, 'utf8');
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    printHelp();
    return;
  }
  validateArgs(args);

  const plan = buildActionPlan(args);
  const result = !plan.readOnly && WRITE_ACTIONS.has(args.action) && !args.apply
    ? createDryRunResult(args, plan)
    : await requestWithRetries(args, plan);

  saveResponseIfNeeded(args, result);
  if (args.output === 'json') {
    process.stdout.write(JSON.stringify(result, null, 2));
    process.stdout.write('\n');
  } else {
    printPretty(result);
  }

  if (result.success === false) process.exitCode = 1;
}

main().catch((error) => {
  process.stderr.write(`${error.stack || error.message}\n`);
  process.exitCode = 1;
});
