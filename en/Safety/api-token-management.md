# API Token Configuration Management

API Token configuration management is intended for automation scripts, operations tools, or third-party control panels. It can read and update upload channel configuration, security settings, page settings, other settings, and lightweight federation relations without opening the admin page.

Management permission only exposes lightweight operations suitable for scripts. Heavy operations that require browser confirmation, frontend batch jobs, or federation index cleanup still need to be handled in the browser admin panel.

![Edit API Token](../../image/Safety/apitoken/编辑管理权限api.png)

## Before You Start

Open the admin panel, then go to:

```text
System Settings -> Security Settings -> API Token
```

When creating or editing the API Token, make sure it has the management permission. Management permission can change site configuration, so only give it to trusted scripts or trusted users.

All three management scripts use dry-run mode by default for write operations. After reviewing the preview, add `--apply` to actually save changes.

You can also place the token in an environment variable:

```powershell
$env:IMGBED_API_TOKEN="your API Token"
```

## Download The Management Scripts

The documentation package provides three Node.js scripts:

| Script | Purpose |
| --- | --- |
| <a href="/tools/imgbed-token-upload-settings.mjs" download>Download upload settings management script</a> | Manage upload channels, child channels, and load balancing. |
| <a href="/tools/imgbed-token-site-settings.mjs" download>Download site settings management script</a> | Manage security settings, page settings, and other settings. |
| <a href="/tools/imgbed-token-federation.mjs" download>Download federation relation management script</a> | Manage lightweight federation relation actions, requests, and messages. |

Node.js 18 or later is required.

### Common Parameters

| Parameter | Required | Description |
| --- | --- | --- |
| `--base-url <url>` | Yes | ImgBed site URL, for example `https://image.ai6.me`. |
| `--token <token>` | Yes | API Token. You can also use the `IMGBED_API_TOKEN` environment variable. |
| `--retries <n>` | No | Temporary failure retry count. Defaults to `3`. |
| `--timeout-ms <n>` | No | Request timeout. Defaults to `180000`. |
| `--output <pretty\|json>` | No | Output format. Defaults to `pretty`; use `json` for programs. |
| `--save-response <path>` | No | Save the final JSON result to a file. |
| `--apply` | No | Actually perform writes. Without it, write operations only preview. |
| `-h` / `--help` | No | Show script help. |

## Upload Settings

The upload settings script lists, reads, creates, edits, and deletes upload child channels. It can also toggle load balancing for one top-level upload channel.

```powershell
node imgbed-token-upload-settings.mjs --base-url "https://your-domain" --token "your API Token" --list
```

### Upload Settings Parameters

| Parameter | Description |
| --- | --- |
| `--list` | List upload setting groups. |
| `--get` | Read a top-level channel, or one child channel under it. |
| `--upsert` | Create or edit one child channel. Dry-run unless `--apply` is set. |
| `--delete` | Delete one child channel. Dry-run unless `--apply` is set. |
| `--load-balance <true\|false>` | Enable or disable load balancing for a top-level channel. |
| `--channel <key>` | Top-level upload channel, such as `s3`, `github`, or `telegram`. |
| `--channel-name <name>` | Child channel or account name. |
| `--set key=value` | Set one field. Repeatable. Dot paths are supported. |
| `--patch-json <path>` | Merge fields from a JSON file. |
| `--apply` | Save the write result. |

### Channel Keys

| Channel Key | Channel |
| --- | --- |
| `telegram` / `tg` | Telegram |
| `discord` / `dc` | Discord |
| `cfr2` / `r2` | Cloudflare R2 |
| `s3` | S3 |
| `webdav` / `wd` | WebDAV storage channel |
| `github` / `gh` | GitHub Releases |
| `gitlab` / `gl` | GitLab Packages |
| `huggingface` / `hf` | Hugging Face |
| `onedrive` / `od` | OneDrive |
| `googledrive` / `google` / `gd` | Google Drive |
| `dropbox` / `db` | Dropbox |
| `yandex` / `yx` | Yandex Disk |
| `pcloud` / `pd` | pCloud |

### Upload Settings Examples

List all upload settings:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --list
```

Read S3 channel configuration:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get `
  --channel s3
```

Read one S3 child channel:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get `
  --channel s3 `
  --channel-name "backup-s3"
```

Create or edit one child channel. Run it first without `--apply` to preview:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --upsert `
  --channel webdav `
  --channel-name "backup-webdav" `
  --set enabled=false `
  --set remark="backup test"
```

Then save after confirming:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --upsert `
  --channel webdav `
  --channel-name "backup-webdav" `
  --set enabled=false `
  --set remark="backup test" `
  --apply
```

Delete one child channel:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --delete `
  --channel webdav `
  --channel-name "backup-webdav" `
  --apply
```

Enable S3 load balancing:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --load-balance true `
  --channel s3 `
  --apply
```

For complex fields, write a JSON file and pass it with `--patch-json`:

```json
{
  "enabled": true,
  "remark": "primary account"
}
```

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --upsert `
  --channel s3 `
  --channel-name "primary-s3" `
  --patch-json ".\s3-channel.json" `
  --apply
```

## Site Settings

The site settings script manages three configuration areas:

| Area | Parameter | Description |
| --- | --- | --- |
| Security settings | `security` | User authentication, admin authentication, login devices, API Token, image moderation, user rate limits, WebDAV, and more. |
| Page settings | `page` | Global page, user-side page, admin page, and related display settings. |
| Other settings | `others` | Random image API, public browsing, local federation node, auto tagging, IP geolocation, backup channel, OCR, and more. |

Use `--list-sections` first to view editable areas, sections, and fields:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --list-sections
```

### Site Settings Parameters

| Parameter | Description |
| --- | --- |
| `--list-sections` | List editable areas, sections, and fields. |
| `--get` | Read one settings section. |
| `--area <security\|page\|others>` | Select a configuration area. |
| `--section <name>` | Select a section. Use the names shown by `--list-sections`. |
| `--set key=value` | Set one field. Repeatable. |
| `--apply` | Save the write result. |

For the `page` area, `--set` uses page config item IDs, for example `starsEffect=true`. For `security` and `others`, `--set` uses the field name in that section, for example `email=admin@example.com`.

### Site Settings Examples

Read system update notification settings:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get `
  --area security `
  --section systemUpdate
```

Change the system update notification email. Run without `--apply` first to preview:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --area security `
  --section systemUpdate `
  --set email="admin@example.com"
```

Then save after confirming:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --area security `
  --section systemUpdate `
  --set email="admin@example.com" `
  --apply
```

Change the admin page star effect:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --area page `
  --section adminSettings `
  --set starsEffect=true `
  --apply
```

Change the IP geolocation language:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --area others `
  --section ipGeolocation `
  --set language="en" `
  --apply
```

Local federation node settings can read and update normal fields such as enabled state, sync directory, and invite code. Domain confirmation is not handled through API Token. If the admin panel reports that the local node domain differs from the current access domain, complete the confirmation in the browser admin panel.

## Federation Relations

The federation script manages local node status, outgoing nodes, incoming nodes, messages, join requests, no-record reapply actions, approvals, denials, and lightweight relation actions that do not require index cleanup.

Index update, federation index deletion, and domain-change confirmation depend on the full browser workflow. The script does not handle these heavy operations.

### Lightweight And Heavy Federation Actions

| Action | Script Support | Description |
| --- | --- | --- |
| View local node status and list relations | Supported | Reads relation records only. |
| Read messages and send messages | Supported | Reads or writes relation messages. |
| Request to join another node | Supported | Uses an invite link to submit a request. |
| Reapply for a no-record relation | Supported | Only for outgoing cards with `lastResult=none`; requires a 6-character invite code. |
| Cancel an outgoing pending request | Supported | Cancels a pending request only. |
| Accept or deny an incoming request | Supported | Handles requests from nodes joining yours. |
| Remove an accepted incoming relation | Supported | Updates the incoming relation record and notifies the peer. |
| Delete an incoming terminal record | Supported | Deletes an incoming terminal relation record only. |
| Cancel an accepted outgoing subscription | Browser only | Needs local federation index deletion, which the browser runs in batches. |
| Delete an outgoing terminal record | Browser only | May require federation index cleanup first. |
| Confirm or cancel a domain change | Browser only | Requires current-domain confirmation and domain-change index handling. |
| Publish, pull, or batch-delete indexes | Browser only | These are frontend batch tasks. |

### Federation Parameters

| Parameter | Description |
| --- | --- |
| `--status` | View local federation node status, outgoing nodes, and incoming nodes. |
| `--list` | List federation relations. |
| `--chat` | Read cached messages for one relation. |
| `--send-message` | Send a message to one established relation. |
| `--join` | Request to join another node through an invite link. |
| `--reapply` | Reapply for a no-record relation. Requires a 6-character invite code. |
| `--accept` | Accept an incoming request. |
| `--deny` | Deny an incoming request. |
| `--cancel` | Cancel an outgoing pending request, or remove an accepted incoming relation. |
| `--delete` | Delete an incoming terminal relation record. |
| `--direction <outgoing\|incoming\|all>` | Relation direction. `outgoing` means nodes you joined; `incoming` means nodes joining yours. |
| `--domain <url>` | Relation node domain. |
| `--invite-link <url>` | Invite link from the peer node. |
| `--invite-code <code>` | 6-character invite code used for reapply. |
| `--text <message>` | Message text. |
| `--apply` | Save the write result. |

### Federation Examples

View local node status and both relation lists:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --status
```

List only outgoing nodes:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --list `
  --direction outgoing
```

List only incoming nodes:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --list `
  --direction incoming
```

Request to join another node. Run without `--apply` first to preview:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --join `
  --invite-link "https://peer-domain/federation/invite/abcdef"
```

Then save after confirming:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --join `
  --invite-link "https://peer-domain/federation/invite/abcdef" `
  --apply
```

Reapply for a no-record relation:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --reapply `
  --domain "https://peer-domain" `
  --invite-code "abc123" `
  --apply
```

Accept an incoming request:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --accept `
  --domain "https://peer-domain" `
  --apply
```

Deny an incoming request:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --deny `
  --domain "https://peer-domain" `
  --apply
```

Send a message to an established relation:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --send-message `
  --direction outgoing `
  --domain "https://peer-domain" `
  --text "Hello, this is a test message." `
  --apply
```

Cancel an outgoing pending request:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --cancel `
  --direction outgoing `
  --domain "https://peer-domain" `
  --apply
```

Remove an accepted incoming relation:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --cancel `
  --direction incoming `
  --domain "https://peer-domain" `
  --apply
```

Delete an incoming terminal record:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --delete `
  --direction incoming `
  --domain "https://peer-domain" `
  --apply
```

Accepted outgoing subscription cancellation and outgoing record deletion must be handled in the browser admin panel because these actions may need to clean up the local federation index first.

### Domain Mismatch

If the local node domain and the pending domain in a relation do not match, the script reports an error with `currentDomain` and `pendingDomain`. Handle this in the browser admin panel because domain changes also involve outgoing index cleanup and confirmation.

If a join request returns `FEDERATION_NODE_DOMAIN_MISMATCH`, the domain used by the invite link does not match the peer node's saved local domain. The response includes `currentOrigin` and `detectedOrigin`. Use the peer's currently confirmed domain, or ask the peer to confirm the domain in their browser admin panel first.

## FAQ

### Why Did My Change Not Take Effect?

Write commands run in preview mode by default. Add `--apply` after reviewing the preview to actually save the change.

### How Do I Know Which Fields Can Be Changed?

For upload settings, use `--get` to inspect the existing child channel structure. For security settings, page settings, and other settings, use `--list-sections` to view the areas, sections, and fields the script can edit.

### I Want To Use The Result In Another Program

Use `--output json`, or add `--save-response result.json`. Your program can read the saved JSON file directly.

