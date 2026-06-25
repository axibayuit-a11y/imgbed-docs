#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const USER_AGENT = 'ImgBed-Token-Site-Settings/1.0 Node';

const SECURITY_SECTIONS = Object.freeze({
  userAuth: ['authCode'],
  adminAuth: ['adminUsername', 'adminPassword'],
  accessControl: ['allowedDomains', 'whiteListMode', 'linkProxy'],
  sessionPolicy: ['sessionSecure', 'userSessionEnabled', 'userSessionMaxAge', 'adminSessionMaxAge'],
  uploadModeration: [
    'enabled',
    'accessMode',
    'channel',
    'moderateContentApiKey',
    'apiKey',
    'nsfwApiPath',
    'sightengineApiUser',
    'sightengineApiSecret',
  ],
  userRateLimit: [
    'enabled',
    'windowHours',
    'maxFiles',
    'singleFileLimitMB',
    'totalSizeLimitMB',
    'excludeImage',
    'excludeVideo',
    'excludeAudio',
    'excludeDocument',
    'excludeCode',
    'excludeOther',
  ],
  cloudflareApiToken: ['CF_ZONE_ID', 'CF_EMAIL', 'CF_API_KEY', 'fixed'],
  webdav: ['enabled', 'username', 'password', 'defaultUploadChannel', 'imageDisplayMode', 'fixed'],
  systemUpdate: ['email', 'updateSource'],
});

const OTHERS_SECTIONS = Object.freeze({
  randomImageAPI: ['enabled', 'allowedDir', 'demoState', 'fixed'],
  publicBrowse: ['enabled', 'allowedDir', 'imageDisplayMode', 'demoState', 'fixed'],
  federationLocalNode: [
    'enabled',
    'publicDomain',
    'syncDirectory',
    'lastInboundRefreshAt',
    'lastOutboundPublishAt',
    'currentInviteCode',
    'lastInviteResetAt',
    'fixed',
  ],
  autoTag: [
    'spaceUrls',
    'targetFolder',
    'model',
    'generalThresh',
    'generalMcut',
    'characterThresh',
    'characterMcut',
    'autoTagOnUpload',
  ],
  ipGeolocation: [
    'maxmindAccountId',
    'maxmindLicenseKey',
    'tencentMapKey',
    'baiduMapKey',
    'apilayerIpApiKey',
    'language',
    'fixed',
  ],
  magnetTransfer: ['enabled', 'githubAccount', 'cloudChannel', 'cloudAccount', 'timeout', 'targetFolder'],
  blog: ['enabled', 'githubAccount'],
  backupChannel: ['channel', 'fixed'],
  ocrConfig: [
    'paddleOcrToken',
    'azureVisionEndpoint',
    'azureVisionApiKey',
    'googleVisionApiKey',
    'googleVisionServiceAccount',
    'googleVisionModel',
    'googleVisionDetectionType',
  ],
});

const PAGE_SECTIONS = Object.freeze({
  globalSettings: [
    'siteTitle',
    'siteIcon',
    'logoUrl',
    'logoLink',
    'bkInterval',
    'bkOpacity',
    'urlPrefix',
  ],
  clientSettings: [
    'announcement',
    'defaultUploadChannel',
    'defaultUploadFolder',
    'defaultUploadNameType',
    'defaultConvertToWebp',
    'defaultCustomerCompress',
    'defaultCompressBar',
    'defaultCompressQuality',
    'loginBkImg',
    'uploadBkImg',
    'footerLink',
    'disableFooter',
    'disableImgHub',
  ],
  adminSettings: [
    'adminLoginBkImg',
    'adminBkImg',
    'adminImageDisplayMode',
    'thumbnailProvider',
    'live2d',
    'fireworksEffect',
    'starsEffect',
  ],
});

const AREA_SECTIONS = Object.freeze({
  security: SECURITY_SECTIONS,
  page: PAGE_SECTIONS,
  others: OTHERS_SECTIONS,
});

const LINK_PROXY_FIELDS = new Set(['externalEnabled', 'randomEnabled', 'federationEnabled']);

function printHelp() {
  process.stdout.write(`ImgBed API Token site settings tool

Usage:
  node imgbed-token-site-settings.mjs --base-url <url> --token <token> --list-sections
  node imgbed-token-site-settings.mjs --base-url <url> --token <token> --get --area <security|page|others> --section <name>
  node imgbed-token-site-settings.mjs --base-url <url> --token <token> --area <security|page|others> --section <name> --set key=value [--apply]

Required:
  --base-url <url>       ImgBed site URL, for example https://image.ai6.me
  --token <token>        API Token with manage permission. You can also set IMGBED_API_TOKEN.

Actions:
  --list-sections        List editable areas, sections, and fields.
  --get                  Read one settings section.
  --set key=value        Set a field. Repeatable. Dot paths are supported for nested objects.
  --apply                Actually send write requests. Without this flag, writes only preview.

Area and section:
  --area <name>          security, page, or others.
  --section <name>       Section name listed by --list-sections.

Tool options:
  --retries <n>          Retry temporary request failures. Default: 3
  --timeout-ms <n>       Request timeout. Default: 180000
  --output <pretty|json> Output format. Default: pretty
  --save-response <path> Save final JSON result.
  -h, --help             Show this help.

Notes:
  - Writes are dry-run by default. Add --apply to save.
  - For page settings, --set uses config id names, for example --set starsEffect=true.
  - For security/others settings, --set uses section field names, for example --set email=me@example.com.
`);
}

function parseArgs(argv) {
  const args = {
    baseUrl: '',
    token: process.env.IMGBED_API_TOKEN || '',
    action: '',
    area: '',
    section: '',
    setValues: [],
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
      case '--list-sections':
        setAction('list-sections');
        break;
      case '--get':
        setAction('get');
        break;
      case '--area':
        args.area = normalizeArea(readValue());
        break;
      case '--section':
        args.section = String(readValue() || '').trim();
        break;
      case '--set':
        args.setValues.push(readValue());
        if (!args.action) args.action = 'write';
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
  if (!args.action) throw new Error('One action is required: --list-sections, --get, or --set');
  if (args.action === 'list-sections') return;
  if (!args.area) throw new Error('--area is required');
  if (!args.section) throw new Error('--section is required');
  assertKnownSection(args.area, args.section);
  if (args.action === 'get') return;
  if (args.setValues.length === 0) throw new Error('Write mode requires --set');
}

function parsePositiveInteger(value, name) {
  const number = Number.parseInt(String(value || ''), 10);
  if (!Number.isInteger(number) || number <= 0) throw new Error(`${name} must be a positive integer`);
  return number;
}

function normalizeArea(area) {
  const value = String(area || '').trim().toLowerCase();
  if (['security', 'page', 'others'].includes(value)) return value;
  throw new Error(`Unsupported area: ${area}`);
}

function assertKnownSection(area, section) {
  if (!AREA_SECTIONS[area] || !Object.prototype.hasOwnProperty.call(AREA_SECTIONS[area], section)) {
    throw new Error(`Unsupported section for ${area}: ${section}`);
  }
}

function normalizeBaseUrl(baseUrl) {
  return new URL(baseUrl).toString().replace(/\/+$/, '');
}

function buildSectionUrl(args) {
  const url = new URL(`/api/manage/sysConfig/${args.area}`, `${normalizeBaseUrl(args.baseUrl)}/`);
  url.searchParams.set('section', args.section);
  return url.toString();
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

function buildRawPatch(args) {
  const patch = {};
  for (const rawSet of args.setValues) {
    const { key, value } = parseSetValue(rawSet);
    setByPath(patch, key, value);
  }
  return patch;
}

function getAllowedFields(area, section) {
  return AREA_SECTIONS[area]?.[section] || [];
}

function validateSecurityOrOthersPatch(area, section, patch) {
  if (!patch || typeof patch !== 'object' || Array.isArray(patch)) {
    throw new Error(`${area}.${section} patch must be a JSON object`);
  }
  const allowed = new Set(getAllowedFields(area, section));
  for (const key of Object.keys(patch)) {
    if (!allowed.has(key)) throw new Error(`Field is not allowed in ${area}.${section}: ${key}`);
  }
  if (area === 'security' && section === 'accessControl' && patch.linkProxy !== undefined) {
    if (patch.linkProxy !== null && (typeof patch.linkProxy !== 'object' || Array.isArray(patch.linkProxy))) {
      throw new Error('security.accessControl linkProxy must be an object');
    }
    for (const key of Object.keys(patch.linkProxy || {})) {
      if (!LINK_PROXY_FIELDS.has(key)) throw new Error(`Field is not allowed in security.accessControl.linkProxy: ${key}`);
    }
  }
}

function normalizePagePatch(section, patch) {
  const allowed = new Set(getAllowedFields('page', section));
  const entries = [];
  if (Array.isArray(patch)) {
    for (const item of patch) {
      if (!item || typeof item !== 'object' || Array.isArray(item) || !item.id || !Object.prototype.hasOwnProperty.call(item, 'value')) {
        throw new Error('page patch array items must be { id, value }');
      }
      entries.push({ id: String(item.id).trim(), value: item.value });
    }
  } else if (patch && typeof patch === 'object') {
    for (const [id, value] of Object.entries(patch)) {
      entries.push({ id, value });
    }
  } else {
    throw new Error('page patch must be a JSON object or array');
  }

  for (const entry of entries) {
    if (!allowed.has(entry.id)) throw new Error(`Page config id is not allowed in ${section}: ${entry.id}`);
  }
  return { config: entries };
}

function buildWriteBody(args) {
  const patch = buildRawPatch(args);
  if (args.area === 'page') {
    return normalizePagePatch(args.section, patch);
  }
  validateSecurityOrOthersPatch(args.area, args.section, patch);
  return patch;
}

function getSectionPayload(area, responsePayload) {
  return area === 'page'
    ? { config: Array.isArray(responsePayload?.config) ? responsePayload.config : [] }
    : { data: responsePayload?.data || {} };
}

async function getSection(args) {
  const payload = await requestJson(args, 'GET', buildSectionUrl(args), undefined, 'getSection');
  return getSectionPayload(args.area, payload);
}

async function postSection(args, body) {
  return requestJson(args, 'POST', buildSectionUrl(args), body, 'writeSection');
}

function getByPath(source, keyPath) {
  const parts = String(keyPath || '').split('.').map((part) => part.trim()).filter(Boolean);
  let cursor = source;
  for (const part of parts) {
    if (!cursor || typeof cursor !== 'object') return undefined;
    cursor = cursor[part];
  }
  return cursor;
}

function normalizeComparable(value) {
  return JSON.stringify(value);
}

function verifyBodyAgainstSection(area, body, sectionPayload) {
  if (area === 'page') {
    const actualConfig = Array.isArray(sectionPayload?.config) ? sectionPayload.config : [];
    const failures = [];
    for (const item of body.config || []) {
      const actual = actualConfig.find((config) => config?.id === item.id);
      if (!actual || normalizeComparable(actual.value) !== normalizeComparable(item.value)) {
        failures.push(item.id);
      }
    }
    return { verified: failures.length === 0, failures };
  }

  const data = sectionPayload?.data || {};
  const failures = [];
  function walk(prefix, value) {
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      for (const [key, child] of Object.entries(value)) {
        walk(prefix ? `${prefix}.${key}` : key, child);
      }
      return;
    }
    if (normalizeComparable(getByPath(data, prefix)) !== normalizeComparable(value)) {
      failures.push(prefix);
    }
  }
  walk('', body);
  return { verified: failures.length === 0, failures };
}

function listSectionsPayload() {
  return Object.entries(AREA_SECTIONS).map(([area, sections]) => ({
    area,
    sections: Object.entries(sections).map(([section, fields]) => ({ section, fields })),
  }));
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
  if (summary.action === 'list-sections') {
    process.stdout.write('success\n');
    for (const area of summary.areas || []) {
      process.stdout.write(`${area.area}\n`);
      for (const section of area.sections) {
        process.stdout.write(`  ${section.section}: ${section.fields.join(', ')}\n`);
      }
    }
    return;
  }
  if (summary.action === 'get') {
    process.stdout.write('success\n');
    process.stdout.write(`area: ${summary.area}\nsection: ${summary.section}\n`);
    process.stdout.write(`${JSON.stringify(summary.payload, null, 2)}\n`);
    return;
  }
  if (summary.dryRun) {
    process.stdout.write('dry-run\n');
    process.stdout.write(`area: ${summary.area}\nsection: ${summary.section}\n`);
    process.stdout.write(`url: ${summary.url}\n`);
    process.stdout.write('apply: false\n');
    process.stdout.write(`body: ${JSON.stringify(summary.body, null, 2)}\n`);
    return;
  }
  process.stdout.write('success\n');
  process.stdout.write(`area: ${summary.area}\nsection: ${summary.section}\n`);
  process.stdout.write(`verified: ${summary.verified}\n`);
  if (summary.updated) process.stdout.write(`updated: ${summary.updated.join(', ')}\n`);
}

function getUpdatedFields(area, body) {
  if (area === 'page') return (body.config || []).map((item) => item.id);
  const fields = [];
  function walk(prefix, value) {
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      for (const [key, child] of Object.entries(value)) {
        walk(prefix ? `${prefix}.${key}` : key, child);
      }
      return;
    }
    fields.push(prefix);
  }
  walk('', body);
  return fields;
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
    if (args.action === 'list-sections') {
      Object.assign(summary, {
        success: true,
        areas: listSectionsPayload(),
      });
      output(args, summary);
      return;
    }

    if (args.action === 'get') {
      const payload = await getSection(args);
      Object.assign(summary, {
        success: true,
        area: args.area,
        section: args.section,
        payload,
      });
      output(args, summary);
      return;
    }

    const body = buildWriteBody(args);
    Object.assign(summary, {
      success: true,
      area: args.area,
      section: args.section,
      url: buildSectionUrl(args),
      dryRun: !args.apply,
      body,
      updated: getUpdatedFields(args.area, body),
    });

    if (!args.apply) {
      output(args, summary);
      return;
    }

    const result = await postSection(args, body);
    const sectionPayload = await getSection(args);
    const verification = verifyBodyAgainstSection(args.area, body, sectionPayload);
    Object.assign(summary, {
      applied: true,
      dryRun: false,
      result,
      ...verification,
    });
    if (verification.verified === false) {
      summary.success = false;
      summary.code = 'VERIFY_FAILED';
      summary.error = `Write request succeeded but verification failed: ${verification.failures.join(', ')}`;
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
