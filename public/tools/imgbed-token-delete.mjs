#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const USER_AGENT = 'ImgBed-Token-Delete/1.0 Node';

const STRICTNESS_VALUES = new Set(['strict', 'soft']);

function printHelp() {
  process.stdout.write(`ImgBed API Token delete tool

Usage:
  node imgbed-token-delete.mjs --base-url <url> --token <token> --file-id <id> [--file-id <id> ...]

Required:
  --base-url <url>          ImgBed site URL, for example https://image.ai6.me
  --token <token>           API Token with delete permission. You can also set IMGBED_API_TOKEN.
  --file-id <id>            File ID to delete. Repeat this option to delete multiple files.

Delete options:
  --strictness <strict|soft>
                            Delete strictness. Default: strict
                            strict: stop cleaning ImgBed records if remote storage deletion fails.
                            soft: continue cleaning ImgBed records when remote storage deletion fails.
  --batch-size <n>          Files per request. Default: 15, maximum: 15.

Tool options:
  --retries <n>             Retry temporary request failures. Default: 3
  --timeout-ms <n>          Request timeout. Default: 180000
  --output <pretty|json>    Output format. Default: pretty
  --save-response <path>    Save final JSON result.
  -h, --help                Show this help.

Notes:
  - This script only deletes explicit file IDs. Use imgbed-token-list.mjs to find file IDs first.
  - The backend delete API returns NDJSON progress events; this script summarizes those events.
`);
}

function parseArgs(argv) {
  const args = {
    baseUrl: '',
    token: process.env.IMGBED_API_TOKEN || '',
    fileIds: [],
    strictness: 'strict',
    batchSize: 15,
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
      case '--file-id':
        args.fileIds.push(readValue());
        break;
      case '--strictness':
        args.strictness = String(readValue() || '').trim().toLowerCase();
        break;
      case '--batch-size':
        args.batchSize = parsePositiveInteger(readValue(), '--batch-size');
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

  if (!['pretty', 'json'].includes(args.output)) {
    throw new Error('--output must be pretty or json');
  }
  if (!STRICTNESS_VALUES.has(args.strictness)) {
    throw new Error('--strictness must be strict or soft');
  }
  if (args.batchSize > 15) {
    throw new Error('--batch-size must be between 1 and 15');
  }
  args.fileIds = uniqueFileIds(args.fileIds);
  return args;
}

function validateArgs(args) {
  if (args.help) return;
  if (!args.baseUrl) throw new Error('--base-url is required');
  if (!args.token) throw new Error('--token is required, or set IMGBED_API_TOKEN');
  if (args.fileIds.length === 0) throw new Error('--file-id is required');
}

function uniqueFileIds(fileIds) {
  const seen = new Set();
  const result = [];
  for (const item of fileIds) {
    const value = String(item || '').trim().replace(/^\/+/, '');
    if (!value || seen.has(value)) continue;
    seen.add(value);
    result.push(value);
  }
  return result;
}

function parsePositiveInteger(value, name) {
  const number = Number.parseInt(String(value || ''), 10);
  if (!Number.isInteger(number) || number <= 0) {
    throw new Error(`${name} must be a positive integer`);
  }
  return number;
}

function normalizeBaseUrl(baseUrl) {
  return new URL(baseUrl).toString().replace(/\/+$/, '');
}

function buildDeleteUrl(args) {
  return new URL('/api/manage/delete/batch', `${normalizeBaseUrl(args.baseUrl)}/`);
}

function splitBatches(items, batchSize) {
  const batches = [];
  for (let index = 0; index < items.length; index += batchSize) {
    batches.push(items.slice(index, index + batchSize));
  }
  return batches;
}

function authHeaders(args, extra = {}) {
  return {
    Authorization: `Bearer ${args.token}`,
    'User-Agent': USER_AGENT,
    Accept: 'application/x-ndjson, application/json, text/plain;q=0.9',
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

async function parseTextResponse(response) {
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

function parseNdjson(text) {
  const events = [];
  const parseErrors = [];
  for (const line of String(text || '').split(/\n+/)) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    try {
      events.push(JSON.parse(trimmed));
    } catch (error) {
      parseErrors.push({
        line: trimmed.length > 500 ? trimmed.slice(0, 500) : trimmed,
        error: error?.message || 'Invalid NDJSON line',
      });
    }
  }
  return { events, parseErrors };
}

function makeHttpError(stage, result, fallbackCode = 'REQUEST_FAILED') {
  const payload = result?.payload || {};
  const code = String(payload.code || payload.error || fallbackCode || `HTTP_${result?.status || 0}`).trim();
  const message = String(payload.message || payload.error || result?.bodyPreview || result?.statusText || code).trim();
  const error = new Error(`${stage} failed: ${code} ${message}`);
  error.code = code;
  error.status = Number(result?.status || 0);
  error.response = result;
  return error;
}

async function requestDeleteBatch(args, url, fileIds, batchIndex, totalBatches) {
  const stage = `delete batch ${batchIndex}/${totalBatches}`;
  return withRetry(args, stage, async () => {
    let response;
    try {
      response = await fetchWithTimeout(url, {
        method: 'POST',
        headers: authHeaders(args, { 'Content-Type': 'application/json' }),
        body: JSON.stringify({
          fileIds,
          deleteStrictness: args.strictness,
        }),
      }, args.timeoutMs);
    } catch (error) {
      throw wrapNetworkError(stage, error);
    }

    const result = await parseTextResponse(response);
    if (!result.ok) {
      throw makeHttpError(stage, result);
    }
    const parsed = parseNdjson(result.text);
    return {
      batchIndex,
      totalBatches,
      requested: fileIds,
      status: result.status,
      durationMs: 0,
      events: parsed.events,
      parseErrors: parsed.parseErrors,
      complete: parsed.events.findLast?.((event) => event.type === 'batch_complete' || event.type === 'batch_error')
        || [...parsed.events].reverse().find((event) => event.type === 'batch_complete' || event.type === 'batch_error')
        || null,
    };
  });
}

function collectWarnings(complete) {
  return [
    ...(Array.isArray(complete?.backupWarnings) ? complete.backupWarnings : []),
    ...(Array.isArray(complete?.cacheWarnings) ? complete.cacheWarnings : []),
    ...(Array.isArray(complete?.statsWarnings) ? complete.statsWarnings : []),
  ];
}

function summarizeBatch(batchResult) {
  const complete = batchResult.complete || {};
  const deleted = Array.isArray(complete.deleted) ? complete.deleted : [];
  const failed = Array.isArray(complete.failed) ? complete.failed : [];
  const failedDetails = Array.isArray(complete.failedDetails) ? complete.failedDetails : [];
  const warnings = collectWarnings(complete);
  return {
    batchIndex: batchResult.batchIndex,
    requestedCount: batchResult.requested.length,
    status: batchResult.status,
    eventCount: batchResult.events.length,
    deleted,
    failed,
    failedDetails,
    warningCount: warnings.length,
    warnings,
    parseErrors: batchResult.parseErrors,
    completeType: complete.type || '',
  };
}

function buildFinalResult(args, url, batches, startedAt) {
  const batchSummaries = batches.map(summarizeBatch);
  const deleted = batchSummaries.flatMap((batch) => batch.deleted);
  const failed = batchSummaries.flatMap((batch) => batch.failed);
  const failedDetails = batchSummaries.flatMap((batch) => batch.failedDetails);
  const warnings = batchSummaries.flatMap((batch) => batch.warnings);
  const parseErrors = batchSummaries.flatMap((batch) => batch.parseErrors);
  const batchErrors = batchSummaries
    .filter((batch) => batch.completeType === 'batch_error' || batch.parseErrors.length > 0)
    .map((batch) => ({
      batchIndex: batch.batchIndex,
      completeType: batch.completeType,
      parseErrors: batch.parseErrors,
    }));

  return {
    success: failed.length === 0 && batchErrors.length === 0,
    action: 'delete',
    url: url.toString(),
    strictness: args.strictness,
    batchSize: args.batchSize,
    requested: args.fileIds,
    requestedCount: args.fileIds.length,
    batchCount: batchSummaries.length,
    durationMs: Date.now() - startedAt,
    deleted,
    failed,
    failedDetails,
    warningCount: warnings.length,
    warnings,
    batchErrors,
    batches: batchSummaries,
  };
}

function compact(value, max = 80) {
  const text = String(value ?? '').replace(/\s+/g, ' ').trim();
  if (text.length <= max) return text;
  return `${text.slice(0, Math.max(0, max - 3))}...`;
}

function renderPretty(result) {
  const lines = [];
  lines.push('Action: delete');
  lines.push(`URL: ${result.url}`);
  lines.push(`Strictness: ${result.strictness}`);
  lines.push(`Requested: ${result.requestedCount}, Batches: ${result.batchCount}, Deleted: ${result.deleted.length}, Failed: ${result.failed.length}, Warnings: ${result.warningCount}`);
  lines.push(`Duration: ${result.durationMs} ms`);

  for (const batch of result.batches) {
    lines.push('');
    lines.push(`Batch ${batch.batchIndex}: requested ${batch.requestedCount}, deleted ${batch.deleted.length}, failed ${batch.failed.length}, warnings ${batch.warningCount}`);
    if (batch.deleted.length > 0) {
      lines.push('Deleted:');
      for (const fileId of batch.deleted) {
        lines.push(`  - ${fileId}`);
      }
    }
    if (batch.failedDetails.length > 0) {
      lines.push('Failed:');
      for (const detail of batch.failedDetails) {
        lines.push(`  - ${detail.fileId || ''} ${detail.code || ''} ${compact(detail.error || '')}`.trimEnd());
      }
    }
    if (batch.warnings.length > 0) {
      lines.push('Warnings:');
      for (const warning of batch.warnings) {
        lines.push(`  - ${warning.code || ''} ${compact(warning.error || warning.reason || '')}`.trimEnd());
      }
    }
    if (batch.parseErrors.length > 0) {
      lines.push('Parse errors:');
      for (const error of batch.parseErrors) {
        lines.push(`  - ${compact(error.error || '')}: ${compact(error.line || '')}`);
      }
    }
  }

  return `${lines.join('\n')}\n`;
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

  const url = buildDeleteUrl(args);
  const startedAt = Date.now();
  const batches = splitBatches(args.fileIds, args.batchSize);
  const batchResults = [];

  try {
    for (let index = 0; index < batches.length; index += 1) {
      const batchIndex = index + 1;
      const batchStartedAt = Date.now();
      if (args.output !== 'json') {
        log(args, `Deleting batch ${batchIndex}/${batches.length} (${batches[index].length} file${batches[index].length === 1 ? '' : 's'})...`);
      }
      const batchResult = await requestDeleteBatch(args, url, batches[index], batchIndex, batches.length);
      batchResult.durationMs = Date.now() - batchStartedAt;
      batchResults.push(batchResult);
    }

    const finalResult = buildFinalResult(args, url, batchResults, startedAt);
    saveResult(args.saveResponse, finalResult);
    if (args.output === 'json') {
      process.stdout.write(`${JSON.stringify(finalResult, null, 2)}\n`);
    } else {
      process.stdout.write(renderPretty(finalResult));
      if (args.saveResponse) log(args, `Saved response: ${path.resolve(args.saveResponse)}`);
    }
    if (!finalResult.success) {
      process.exitCode = 1;
    }
  } catch (error) {
    const finalResult = {
      success: false,
      action: 'delete',
      url: url.toString(),
      strictness: args.strictness,
      batchSize: args.batchSize,
      requested: args.fileIds,
      requestedCount: args.fileIds.length,
      durationMs: Date.now() - startedAt,
      code: String(error.code || '').trim(),
      statusCode: Number(error.status || error.response?.status || 0),
      error: String(error.message || error),
      response: error.response?.payload || error.response?.bodyPreview || null,
      completedBatches: batchResults.map(summarizeBatch),
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
