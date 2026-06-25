#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const USER_AGENT = 'ImgBed-Token-Federation/1.0 Node';

const WRITE_ACTIONS = new Set([
  'join',
  'reapply',
  'accept',
  'deny',
  'cancel',
  'delete',
  'send-message',
]);

const ACTION_ROUTES = Object.freeze({
  join: { method: 'POST', path: '/api/manage/federation/outgoing/join' },
  reapply: { method: 'POST', path: '/api/manage/federation/outgoing/reapply-request' },
  accept: { method: 'POST', path: '/api/manage/federation/incoming/approve' },
  deny: { method: 'POST', path: '/api/manage/federation/incoming/reject' },
  'send-message': { method: 'POST', path: '/api/manage/federation/chat/send' },
});

const CANCEL_ROUTES = Object.freeze({
  outgoing: {
    pending: { action: 'cancel-request', path: '/api/manage/federation/outgoing/cancel-request' },
  },
  incoming: {
    accepted: { action: 'remove-incoming', path: '/api/manage/federation/incoming/remove' },
  },
});

const DELETE_ROUTES = Object.freeze({
  incoming: { action: 'delete-incoming', path: '/api/manage/federation/incoming/delete-record' },
});

function printHelp() {
  process.stdout.write(`ImgBed API Token federation tool

Usage:
  node imgbed-token-federation.mjs --base-url <url> --token <token> --status
  node imgbed-token-federation.mjs --base-url <url> --token <token> --list [--direction outgoing|incoming|all]
  node imgbed-token-federation.mjs --base-url <url> --token <token> --chat --direction outgoing|incoming --domain <url>
  node imgbed-token-federation.mjs --base-url <url> --token <token> --send-message --direction outgoing|incoming --domain <url> --text <message> [--apply]
  node imgbed-token-federation.mjs --base-url <url> --token <token> --join --invite-link <url> [--apply]
  node imgbed-token-federation.mjs --base-url <url> --token <token> --reapply --domain <url> --invite-code <code> [--apply]
  node imgbed-token-federation.mjs --base-url <url> --token <token> --accept --domain <url> [--apply]
  node imgbed-token-federation.mjs --base-url <url> --token <token> --deny --domain <url> [--apply]
  node imgbed-token-federation.mjs --base-url <url> --token <token> --cancel --direction outgoing|incoming --domain <url> [--apply]
  node imgbed-token-federation.mjs --base-url <url> --token <token> --delete --direction outgoing|incoming --domain <url> [--apply]

Required:
  --base-url <url>       ImgBed site URL, for example https://image.ai6.me
  --token <token>        API Token with manage permission. You can also set IMGBED_API_TOKEN.

Read actions:
  --status               Read local federation node status and both relation lists.
  --list                 List outgoing/incoming relations from federation status.
  --chat                 Read cached messages for one relation.

Write actions:
  --join                 Request to join another node by invite link.
  --reapply              Reapply an outgoing no-record relation with a 6-character invite code.
  --accept               Accept an incoming request.
  --deny                 Deny an incoming request.
  --cancel               Cancel the current relation action for one card.
                         outgoing pending -> cancel request; incoming accepted -> remove incoming relation.
                         Outgoing accepted cancellation must be handled in the browser because it deletes federation indexes in batches.
  --delete               Delete an incoming terminal relation record.
                         Outgoing record deletion must be handled in the browser because it may need federation index cleanup.
  --send-message         Append a local chat message to one accepted relation.
  --apply                Actually send write requests. Without this flag, writes only preview.

Action parameters:
  --direction <value>    outgoing, incoming, or all for --list. --chat/--send-message require outgoing|incoming.
  --domain <url>         Relation domain, for example https://example.com
  --invite-link <url>    Federation invite link from another node.
  --invite-code <code>   6-character invite code for --reapply.
  --text <message>       Message text for --send-message.

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
    direction: 'all',
    domain: '',
    inviteLink: '',
    inviteCode: '',
    text: '',
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
      case '--status':
        setAction('status');
        break;
      case '--list':
        setAction('list');
        break;
      case '--chat':
        setAction('chat');
        break;
      case '--join':
        setAction('join');
        break;
      case '--reapply':
        setAction('reapply');
        break;
      case '--accept':
        setAction('accept');
        break;
      case '--deny':
        setAction('deny');
        break;
      case '--cancel':
        setAction('cancel');
        break;
      case '--delete':
        setAction('delete');
        break;
      case '--send-message':
        setAction('send-message');
        break;
      case '--direction':
        args.direction = normalizeDirection(readValue(), true);
        break;
      case '--domain':
        args.domain = readValue();
        break;
      case '--invite-link':
        args.inviteLink = readValue();
        break;
      case '--invite-code':
        args.inviteCode = readValue();
        break;
      case '--text':
        args.text = readValue();
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
  if (!args.action) throw new Error('One action is required. Use --help to see actions.');

  if (args.action === 'join' && !args.inviteLink) throw new Error('--invite-link is required for --join');
  if (['reapply', 'accept', 'deny', 'cancel', 'delete'].includes(args.action) && !args.domain) {
    throw new Error('--domain is required for this action');
  }
  if (args.action === 'reapply' && !isValidInviteCode(args.inviteCode)) {
    throw new Error('--invite-code must be 6 lowercase letters or digits for --reapply');
  }
  if (['cancel', 'delete'].includes(args.action)) {
    args.direction = normalizeDirection(args.direction, false);
  }
  if (['chat', 'send-message'].includes(args.action)) {
    args.direction = normalizeDirection(args.direction, false);
    if (!args.domain) throw new Error('--domain is required for chat actions');
  }
  if (args.action === 'send-message' && !String(args.text || '').trim()) throw new Error('--text is required for --send-message');
}

function parsePositiveInteger(value, name) {
  const number = Number.parseInt(String(value || ''), 10);
  if (!Number.isInteger(number) || number <= 0) throw new Error(`${name} must be a positive integer`);
  return number;
}

function normalizeDirection(value, allowAll = false) {
  const normalized = String(value || '').trim().toLowerCase();
  if (normalized === 'out' || normalized === 'outgoing') return 'outgoing';
  if (normalized === 'in' || normalized === 'incoming') return 'incoming';
  if (allowAll && (!normalized || normalized === 'all')) return 'all';
  throw new Error(allowAll ? '--direction must be outgoing, incoming, or all' : '--direction must be outgoing or incoming');
}

function isValidInviteCode(value) {
  return /^[a-z0-9]{6}$/.test(String(value || '').trim());
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

function buildBody(args) {
  if (args.action === 'join') return { inviteLink: args.inviteLink };
  if (args.action === 'reapply') {
    return {
      domain: args.domain,
      inviteCode: String(args.inviteCode || '').trim(),
    };
  }
  if (args.action === 'send-message') {
    return {
      direction: args.direction,
      domain: args.domain,
      text: String(args.text || '').trim(),
    };
  }
  return { domain: args.domain };
}

async function getFederationStatus(args) {
  return requestJson(args, 'GET', toUrl(args, '/api/manage/federation/status'), undefined, 'status');
}

function findRelation(statusPayload = {}, direction = '', domain = '') {
  const normalizedDomain = String(domain || '').trim().replace(/\/+$/, '');
  const list = Array.isArray(statusPayload?.[direction]) ? statusPayload[direction] : [];
  return list.find((item) => String(item?.domain || '').trim().replace(/\/+$/, '') === normalizedDomain) || null;
}

function getDomainMismatchDetails(relation = {}) {
  const currentDomain = String(relation?.domain || '').trim();
  const pendingDomain = String(relation?.pendingDomain || '').trim();
  const lastResult = String(relation?.lastResult || '').trim();
  if (!pendingDomain || pendingDomain === currentDomain) {
    return lastResult === 'domain_mismatch'
      ? { currentDomain, pendingDomain, lastResult }
      : null;
  }
  return { currentDomain, pendingDomain, lastResult };
}

function assertNoDomainMismatch(relation = {}) {
  const mismatch = getDomainMismatchDetails(relation);
  if (!mismatch) return;
  throw new Error(
    `Domain mismatch must be handled in the browser because it requires domain confirmation and outgoing index cleanup. `
    + `currentDomain=${mismatch.currentDomain || 'unknown'}, pendingDomain=${mismatch.pendingDomain || 'unknown'}`
  );
}

function throwBrowserRequired(message) {
  throw new Error(`${message} Please handle it in the browser.`);
}

async function resolveCardActionRoute(args) {
  if (args.action === 'reapply') {
    const statusPayload = await getFederationStatus(args);
    const relation = findRelation(statusPayload, 'outgoing', args.domain);
    if (!relation) throw new Error(`Outgoing relation not found: ${args.domain}`);
    assertNoDomainMismatch(relation);
    const lastResult = String(relation.lastResult || '').trim();
    if (lastResult !== 'none') {
      throw new Error(`Reapply is only available for no-record relation. Current lastResult=${lastResult || 'empty'}`);
    }
    return {
      action: 'reapply',
      path: '/api/manage/federation/outgoing/reapply-request',
      relation,
    };
  }

  if (args.action === 'cancel') {
    const statusPayload = await getFederationStatus(args);
    const relation = findRelation(statusPayload, args.direction, args.domain);
    if (!relation) throw new Error(`Relation not found: ${args.direction} ${args.domain}`);
    const state = String(relation.state || '').trim();
    if (args.direction === 'outgoing' && state === 'accepted') {
      throwBrowserRequired('Outgoing accepted cancellation requires federation index deletion in batches.');
    }
    const route = CANCEL_ROUTES?.[args.direction]?.[state];
    if (!route) {
      throw new Error(`Cannot cancel relation in current state: direction=${args.direction}, state=${state || 'unknown'}`);
    }
    return { ...route, relation };
  }

  if (args.action === 'delete') {
    const statusPayload = await getFederationStatus(args);
    const relation = findRelation(statusPayload, args.direction, args.domain);
    if (!relation) throw new Error(`Relation not found: ${args.direction} ${args.domain}`);
    if (args.direction === 'outgoing') {
      throwBrowserRequired('Outgoing record deletion may require federation index cleanup.');
    }
    const state = String(relation.state || '').trim();
    const lastResult = String(relation.lastResult || '').trim();
    const terminal = args.direction === 'outgoing'
      ? state === 'denied' || state === 'cancelled' || lastResult === 'none'
      : state === 'denied' || state === 'cancelled';
    if (!terminal) {
      throw new Error(`Delete is only available for terminal relation. Current direction=${args.direction}, state=${state || 'unknown'}, lastResult=${lastResult || 'empty'}`);
    }
    const route = DELETE_ROUTES[args.direction];
    if (!route) throw new Error(`Cannot delete relation direction: ${args.direction}`);
    return { ...route, relation };
  }

  return null;
}

async function buildOperation(args) {
  if (args.action === 'status') {
    return {
      action: 'status',
      method: 'GET',
      url: toUrl(args, '/api/manage/federation/status'),
    };
  }

  if (args.action === 'list') {
    return {
      action: 'list',
      method: 'GET',
      url: toUrl(args, '/api/manage/federation/status'),
      direction: args.direction,
    };
  }

  if (args.action === 'chat') {
    const url = new URL(toUrl(args, '/api/manage/federation/chat'));
    url.searchParams.set('direction', args.direction);
    url.searchParams.set('domain', args.domain);
    return {
      action: 'chat',
      method: 'GET',
      url: url.toString(),
      direction: args.direction,
      domain: args.domain,
    };
  }

  const cardRoute = await resolveCardActionRoute(args);
  if (cardRoute) {
    return {
      action: args.action,
      resolvedAction: cardRoute.action,
      method: 'POST',
      url: toUrl(args, cardRoute.path),
      direction: args.direction,
      domain: args.domain,
      relationState: cardRoute.relation?.state || '',
      relationLastResult: cardRoute.relation?.lastResult || '',
      body: buildBody(args),
    };
  }

  const route = ACTION_ROUTES[args.action];
  if (!route) throw new Error(`Unsupported action: ${args.action}`);
  return {
    action: args.action,
    resolvedAction: args.action,
    method: route.method,
    url: toUrl(args, route.path),
    direction: args.direction,
    domain: args.domain,
    body: buildBody(args),
  };
}

function filterRelations(payload, direction) {
  if (direction === 'outgoing') return { outgoing: payload.outgoing || [] };
  if (direction === 'incoming') return { incoming: payload.incoming || [] };
  return {
    outgoing: payload.outgoing || [],
    incoming: payload.incoming || [],
  };
}

function relationSummary(relation = {}) {
  return {
    domain: relation.domain || '',
    display: relation.domainDisplay || '',
    state: relation.state || '',
    lastResult: relation.lastResult || '',
    friendAlive: relation.friendAlive === true,
    linkedAt: relation.linkedAt || 0,
    lastRequestedAt: relation.lastRequestedAt || 0,
    lastPulledAt: relation.lastPulledAt || 0,
    denyReason: relation.denyReason || '',
    cancelReason: relation.cancelReason || '',
  };
}

function summarizeRelations(relations = {}) {
  const result = {};
  if (Array.isArray(relations.outgoing)) {
    result.outgoing = relations.outgoing.map(relationSummary);
  }
  if (Array.isArray(relations.incoming)) {
    result.incoming = relations.incoming.map(relationSummary);
  }
  return result;
}

function outputPretty(summary) {
  if (!summary.success) {
    process.stdout.write(`failed: ${summary.error || summary.code || 'unknown error'}\n`);
    if (summary.status) process.stdout.write(`status: ${summary.status}\n`);
    return;
  }

  if (summary.action === 'status') {
    const node = summary.status?.node || {};
    process.stdout.write('success\n');
    process.stdout.write(`nodeEnabled: ${node.enabled === true}\n`);
    process.stdout.write(`publicDomain: ${node.publicDomain || ''}\n`);
    process.stdout.write(`outgoing: ${(summary.status?.outgoing || []).length}\n`);
    process.stdout.write(`incoming: ${(summary.status?.incoming || []).length}\n`);
    process.stdout.write(`totalRemoteFiles: ${summary.status?.totalRemoteFiles || 0}\n`);
    return;
  }

  if (summary.action === 'list') {
    process.stdout.write('success\n');
    for (const [direction, items] of Object.entries(summary.relations || {})) {
      process.stdout.write(`${direction}: ${items.length}\n`);
      for (const item of items) {
        process.stdout.write(`- ${item.domain} state=${item.state || '-'} result=${item.lastResult || '-'} alive=${item.friendAlive}\n`);
      }
    }
    return;
  }

  if (summary.action === 'chat') {
    const relation = summary.relation || {};
    const ownMessageCount = Array.isArray(relation.chatOwnMessages?.messages)
      ? relation.chatOwnMessages.messages.length
      : 0;
    const peerMessageCount = Array.isArray(relation.chatPeerMessages?.messages)
      ? relation.chatPeerMessages.messages.length
      : 0;
    process.stdout.write('success\n');
    process.stdout.write(`direction: ${summary.direction}\n`);
    process.stdout.write(`domain: ${summary.domain}\n`);
    process.stdout.write(`state: ${relation.state || ''}\n`);
    process.stdout.write(`ownMessages: ${ownMessageCount}\n`);
    process.stdout.write(`peerMessages: ${peerMessageCount}\n`);
    return;
  }

  if (summary.dryRun) {
    process.stdout.write('dry-run\n');
    process.stdout.write(`action: ${summary.action}\n`);
    if (summary.resolvedAction) process.stdout.write(`resolvedAction: ${summary.resolvedAction}\n`);
    if (summary.relationState) process.stdout.write(`relationState: ${summary.relationState}\n`);
    process.stdout.write(`method: ${summary.method}\n`);
    process.stdout.write(`url: ${summary.url}\n`);
    if (summary.body) process.stdout.write(`body: ${JSON.stringify(summary.body, null, 2)}\n`);
    process.stdout.write('apply: false\n');
    return;
  }

  process.stdout.write('success\n');
  process.stdout.write(`action: ${summary.action}\n`);
  if (summary.resolvedAction) process.stdout.write(`resolvedAction: ${summary.resolvedAction}\n`);
  if (summary.domain) process.stdout.write(`domain: ${summary.domain}\n`);
  if (summary.direction && summary.action === 'send-message') process.stdout.write(`direction: ${summary.direction}\n`);
  if (summary.result) process.stdout.write(`result: ${JSON.stringify(summary.result, null, 2)}\n`);
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
    const operation = await buildOperation(args);

    if (WRITE_ACTIONS.has(args.action) && !args.apply) {
      Object.assign(summary, {
        success: true,
        dryRun: true,
        action: operation.action,
        resolvedAction: operation.resolvedAction,
        method: operation.method,
        url: operation.url,
        direction: operation.direction,
        domain: operation.domain,
        relationState: operation.relationState,
        relationLastResult: operation.relationLastResult,
        body: operation.body,
      });
      output(args, summary);
      return;
    }

    const payload = await requestJson(args, operation.method, operation.url, operation.body, operation.action);

    if (args.action === 'status') {
      Object.assign(summary, {
        success: true,
        status: payload,
      });
    } else if (args.action === 'list') {
      Object.assign(summary, {
        success: true,
        direction: args.direction,
        relations: summarizeRelations(filterRelations(payload, args.direction)),
      });
    } else if (args.action === 'chat') {
      Object.assign(summary, {
        success: true,
        direction: args.direction,
        domain: args.domain,
        relation: payload.relation || null,
      });
    } else {
      Object.assign(summary, {
        success: true,
        applied: true,
        dryRun: false,
        action: operation.action,
        resolvedAction: operation.resolvedAction,
        direction: operation.direction,
        domain: operation.domain,
        relationState: operation.relationState,
        relationLastResult: operation.relationLastResult,
        result: payload,
      });
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
