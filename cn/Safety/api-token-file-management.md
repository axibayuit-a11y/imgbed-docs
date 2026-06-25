# API Token 文件管理

API Token 文件管理适合给脚本、自动化任务和第三方管理面板使用。它使用 `manage` 权限，可以在不打开后台页面的情况下编辑文件信息、移动文件、重命名文件、创建目录占位文件、调整文件标签和名单状态，也可以禁用或恢复某个上传 IP，并创建或删除短期上传 Token。

这个脚本只处理文件管理和用户管理里的轻量管理动作。上传、列出、删除、上传设置、站点设置和联盟关系仍然使用各自的专用脚本。

![编辑 API Token](../../image/Safety/apitoken/编辑管理权限api.png)

## 准备工作

进入后台后，打开：

系统配置 → 安全设置 → API Token

创建或编辑 API Token 时，确认这个 Token 允许管理。`manage` 权限可以修改文件状态、用户上传状态和创建短期上传 Token，建议只发给可信脚本或可信用户使用。

文件管理脚本里的写入操作默认都是预览模式，不会真正保存。确认预览内容无误后，再加 `--apply` 执行写入。

也可以把 Token 放到环境变量里：

```powershell
$env:IMGBED_API_TOKEN="你的 API Token"
```

## 下载脚本

| 脚本 | 用途 |
| --- | --- |
| <a href="/tools/imgbed-token-manage.mjs" download>文件管理脚本</a> | 文件元数据、审查标签、文件标签、名单状态、移动、重命名、创建文件夹、IP 禁用/恢复、短期上传 Token 创建和删除 |

运行脚本需要本机安装 Node.js 18 或更高版本。

## 功能边界

| 能力 | 脚本 | 权限 |
| --- | --- | --- |
| 上传文件 | `imgbed-token-single-upload.mjs` / `imgbed-token-chunk-upload.mjs` | `upload` |
| 列出文件、筛选文件、读取用户统计 | `imgbed-token-list.mjs` | `list` |
| 删除明确指定的文件 | `imgbed-token-delete.mjs` | `delete` |
| 编辑文件信息、标签、名单、移动、重命名、建文件夹、禁用 IP、创建或删除短期上传 Token | `imgbed-token-manage.mjs` | `manage` |
| 编辑上传渠道、安全设置、页面设置、其他设置、联盟关系 | 配置管理相关脚本 | `manage` |

`imgbed-token-manage.mjs` 不会上传文件、列出文件或删除文件。需要查找 `fileId` 时，先用列出脚本筛选文件；需要删除文件时，再把明确的 `fileId` 交给删除脚本。

## 通用参数

| 参数 | 必填 | 说明 |
| --- | --- | --- |
| `--base-url <url>` | 是 | 图床站点地址，例如 `https://image.ai6.me` |
| `--token <token>` | 是 | API Token；也可以用 `IMGBED_API_TOKEN` 环境变量 |
| `--retries <n>` | 否 | 临时失败重试次数，默认 `3` |
| `--timeout-ms <n>` | 否 | 单个请求超时时间，默认 `180000` |
| `--output <pretty\|json>` | 否 | 输出格式，默认 `pretty`；程序调用建议用 `json` |
| `--save-response <path>` | 否 | 把最终结果保存成 JSON 文件 |
| `--batch-size <n>` | 否 | 批量动作每个请求处理的数量，默认 `15`，最大 `15` |
| `--apply` | 否 | 真正执行写入；不加时只预览 |
| `-h` / `--help` | 否 | 查看脚本帮助 |

## 先确认 fileId

文件管理脚本多数动作都需要 `fileId`。可以先用列出脚本查询：

```powershell
node imgbed-token-list.mjs `
  --base-url "https://你的域名" `
  --token "你的 API Token" `
  --files `
  --dir "test4" `
  --count 10 `
  --output json
```

返回结果里的 `name` 通常就是可以传给文件管理脚本的 `fileId`。

## 文件元数据

文件元数据用于修改后台文件管理里显示的文件名和读取来源。

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://你的域名" `
  --token "你的 API Token" `
  --set-metadata `
  --file-id "photos/2026/a.jpg" `
  --file-name "封面图.jpg" `
  --read-source backup
```

确认预览结果无误后再保存：

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://你的域名" `
  --token "你的 API Token" `
  --set-metadata `
  --file-id "photos/2026/a.jpg" `
  --file-name "封面图.jpg" `
  --read-source backup `
  --apply
```

### 文件元数据参数

| 参数 | 说明 |
| --- | --- |
| `--set-metadata` | 修改单个文件的元数据 |
| `--file-id <id>` | 要修改的文件 ID |
| `--file-name <name>` | 新的后台显示名 |
| `--read-source <primary\|backup>` | 读取来源，`primary` 为主源，`backup` 为备份源 |

`--file-name` 和 `--read-source` 至少传一个。

## 审查标签

审查标签对应文件的年龄分级。可以先读取当前标签，再修改。

读取审查标签：

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://你的域名" `
  --token "你的 API Token" `
  --get-label `
  --file-id "photos/2026/a.jpg"
```

设置审查标签：

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://你的域名" `
  --token "你的 API Token" `
  --set-label `
  --file-id "photos/2026/a.jpg" `
  --label r12 `
  --apply
```

### 审查标签参数

| 参数 | 说明 |
| --- | --- |
| `--get-label` | 读取单个文件的审查标签 |
| `--set-label` | 修改单个文件的审查标签 |
| `--file-id <id>` | 文件 ID |
| `--label <value>` | 标签值：`all-ages`、`r12`、`r16`、`r18`、`None` |

## 文件标签

文件标签用于给文件附加可检索的业务标签。脚本支持读取、覆盖、追加、移除，也支持批量处理多个文件。

读取文件标签：

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://你的域名" `
  --token "你的 API Token" `
  --get-tags `
  --file-id "photos/2026/a.jpg"
```

追加标签：

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://你的域名" `
  --token "你的 API Token" `
  --add-tags `
  --file-id "photos/2026/a.jpg" `
  --tag "cover" `
  --tag "2026" `
  --apply
```

移除标签：

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://你的域名" `
  --token "你的 API Token" `
  --remove-tags `
  --file-id "photos/2026/a.jpg" `
  --tag "cover" `
  --apply
```

覆盖标签：

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://你的域名" `
  --token "你的 API Token" `
  --set-tags `
  --file-id "photos/2026/a.jpg" `
  --tag "archive" `
  --tag "public" `
  --apply
```

批量添加标签：

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://你的域名" `
  --token "你的 API Token" `
  --batch-tags `
  --file-id "photos/2026/a.jpg" `
  --file-id "photos/2026/b.jpg" `
  --tag-action add `
  --tag "batch-test" `
  --apply
```

### 文件标签参数

| 参数 | 说明 |
| --- | --- |
| `--get-tags` | 读取单个文件标签 |
| `--set-tags` | 覆盖单个文件标签 |
| `--add-tags` | 给单个文件追加标签 |
| `--remove-tags` | 从单个文件移除标签 |
| `--batch-tags` | 批量设置、追加或移除标签 |
| `--file-id <id>` | 文件 ID；批量动作可重复传多个 |
| `--tag <tag>` | 标签值，可重复传多个 |
| `--tags-json <path>` | 从 JSON 文件读取标签数组 |
| `--tag-action <set\|add\|remove>` | 批量标签动作 |

`--tags-json` 文件内容示例：

```json
["cover", "2026", "public"]
```

## 黑白名单状态

名单状态决定文件在公共访问模式下的访问控制行为。可以单个修改，也可以批量修改。

设置单个文件为白名单：

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://你的域名" `
  --token "你的 API Token" `
  --set-list-type `
  --file-id "photos/2026/a.jpg" `
  --list-type White `
  --apply
```

批量加入黑名单：

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://你的域名" `
  --token "你的 API Token" `
  --batch-list-type `
  --file-id "photos/2026/a.jpg" `
  --file-id "photos/2026/b.jpg" `
  --list-type Block `
  --apply
```

恢复默认名单状态：

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://你的域名" `
  --token "你的 API Token" `
  --set-list-type `
  --file-id "photos/2026/a.jpg" `
  --list-type None `
  --apply
```

### 黑白名单参数

| 参数 | 说明 |
| --- | --- |
| `--set-list-type` | 修改单个文件名单状态 |
| `--batch-list-type` | 批量修改文件名单状态，单次请求最多 `15` 个文件 |
| `--file-id <id>` | 文件 ID；批量动作可重复传多个 |
| `--list-type <None\|White\|Block>` | `None` 为默认状态，`White` 为白名单，`Block` 为黑名单 |

## 移动文件

移动文件会把一个或多个文件移动到目标目录。后端单次请求最多处理 `15` 个文件，脚本会按 `--batch-size` 自动拆成多个请求顺序执行。

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://你的域名" `
  --token "你的 API Token" `
  --move `
  --file-id "photos/2026/a.jpg" `
  --file-id "photos/2026/b.jpg" `
  --target-path "archive/2026" `
  --apply
```

### 移动参数

| 参数 | 说明 |
| --- | --- |
| `--move` | 移动文件 |
| `--file-id <id>` | 要移动的文件 ID，可重复传多个 |
| `--target-path <dir>` | 目标目录 |
| `--batch-size <n>` | 每个请求移动的文件数，默认 `15`，最大 `15` |

## 重命名或改路径

重命名使用明确的旧文件 ID 和新文件 ID。新文件 ID 可以只改文件名，也可以同时改变目录。

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://你的域名" `
  --token "你的 API Token" `
  --rename `
  --old-file-id "photos/2026/a.jpg" `
  --new-file-id "photos/2026/a-renamed.jpg" `
  --apply
```

批量重命名时，可以重复传 `--old-file-id` 和 `--new-file-id`：

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://你的域名" `
  --token "你的 API Token" `
  --rename `
  --old-file-id "photos/2026/a.jpg" `
  --new-file-id "archive/2026/a.jpg" `
  --old-file-id "photos/2026/b.jpg" `
  --new-file-id "archive/2026/b.jpg" `
  --apply
```

也可以把映射写到 JSON 文件：

```json
[
  {
    "oldFileId": "photos/2026/a.jpg",
    "newFileId": "archive/2026/a.jpg"
  },
  {
    "oldFileId": "photos/2026/b.jpg",
    "newFileId": "archive/2026/b.jpg"
  }
]
```

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://你的域名" `
  --token "你的 API Token" `
  --rename `
  --items-json ".\rename-items.json" `
  --apply
```

### 重命名参数

| 参数 | 说明 |
| --- | --- |
| `--rename` | 重命名或按明确映射改路径 |
| `--old-file-id <id>` | 原文件 ID，可重复传多个 |
| `--new-file-id <id>` | 新文件 ID，可重复传多个，数量必须和 `--old-file-id` 一致 |
| `--items-json <path>` | JSON 数组，元素为 `{ "oldFileId": "...", "newFileId": "..." }` |
| `--batch-size <n>` | 每个请求处理的重命名数量，默认 `15`，最大 `15` |

## 创建文件夹

图床的目录来自文件路径，本身没有真正的空目录。脚本创建文件夹时，会在目标目录下创建一个占位文件 `0.md`，这样后台文件管理和目录统计就能显示这个目录。

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://你的域名" `
  --token "你的 API Token" `
  --create-folder `
  --parent-directory "photos" `
  --folder-name "2026" `
  --apply
```

### 创建文件夹参数

| 参数 | 说明 |
| --- | --- |
| `--create-folder` | 创建目录占位文件 |
| `--parent-directory <dir>` | 父目录；根目录可传空字符串 |
| `--folder-name <name>` | 新文件夹名称 |

## 上传 IP 禁用和恢复

可以通过管理权限把某个 IP 加入禁止上传列表，也可以把它移出禁止上传列表。这个动作影响该 IP 后续上传，不会删除这个 IP 已经上传的文件。

禁用某个上传 IP：

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://你的域名" `
  --token "你的 API Token" `
  --block-ip "67.159.48.149" `
  --apply
```

恢复某个上传 IP：

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://你的域名" `
  --token "你的 API Token" `
  --allow-ip "67.159.48.149" `
  --apply
```

查看当前禁止上传 IP 列表：

```powershell
node imgbed-token-list.mjs `
  --base-url "https://你的域名" `
  --token "你的 API Token" `
  --blocked-ips
```

### IP 管理参数

| 参数 | 说明 |
| --- | --- |
| `--block-ip <ip>` | 加入禁止上传列表 |
| `--allow-ip <ip>` | 从禁止上传列表移除 |

## 创建和删除短期上传 Token

管理权限可以创建短期的上传专用 Token。这个 Token 固定只有 `upload` 权限，`autoDelete` 固定为 `true`，过期时间最长 `1` 天。

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://你的域名" `
  --token "你的 API Token" `
  --create-upload-token `
  --name "临时上传 Token" `
  --owner "upload-bot" `
  --default-upload-channel telegram `
  --expires-in-minutes 20 `
  --apply `
  --output json
```

也可以直接传毫秒时间戳：

```powershell
$expiresAt = [DateTimeOffset]::UtcNow.AddHours(12).ToUnixTimeMilliseconds()

node imgbed-token-manage.mjs `
  --base-url "https://你的域名" `
  --token "你的 API Token" `
  --create-upload-token `
  --name "一天内有效的上传 Token" `
  --owner "upload-bot" `
  --default-upload-channel telegram `
  --expires-at $expiresAt `
  --apply
```

删除短期上传 Token 时，需要传创建接口返回的 `id`。管理 Token 只能删除满足以下条件的 Token：

| 条件 | 要求 |
| --- | --- |
| 权限 | `permissions` 只有 `upload` |
| 自动删除 | `autoDelete=true` |
| 有效期 | `expiresAt - createdAt <= 24` 小时 |

删除短期上传 Token：

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://你的域名" `
  --token "你的 API Token" `
  --delete-upload-token `
  --token-id "mqt4jqokc85be80d1f0f47078e848a77d6c1aa6e" `
  --apply
```

管理 Token 不能删除普通 Token、长期 Token、包含 `list` / `delete` / `manage` 权限的 Token，也不能删除有效期超过 `1` 天的上传 Token。这些 Token 仍然需要在浏览器管理员后台处理。

### 短期上传 Token 参数

| 参数 | 说明 |
| --- | --- |
| `--create-upload-token` | 创建短期上传专用 Token |
| `--delete-upload-token` | 删除符合条件的短期上传专用 Token |
| `--name <name>` | Token 名称 |
| `--owner <owner>` | Token 归属说明 |
| `--default-upload-channel <key>` | 默认上传渠道，必须是真实渠道，例如 `telegram`、`s3`、`github` |
| `--expires-in-minutes <n>` | 相对当前时间的过期分钟数，最大 `1440` |
| `--expires-at <ms>` | 绝对过期时间，毫秒时间戳，最大为当前时间后 `24` 小时 |
| `--token-id <id>` | 要删除的短期上传 Token ID |

短期上传 Token 只允许上传。测试中，使用 `permissions=["upload"]` 的短期 Token 访问列表、文件管理和删除接口都会被拒绝。

过期后，`autoDelete=true` 的 Token 会在后端校验到它过期时清理；读取 API Token 列表时也会清理已经过期的自动删除 Token。

## 接口对照

| 动作 | 方法 | 接口 |
| --- | --- | --- |
| 修改文件元数据 | `PATCH` | `/api/manage/metadata/{fileId}` |
| 读取审查标签 | `GET` | `/api/manage/label/{fileId}` |
| 修改审查标签 | `POST` | `/api/manage/label/{fileId}` |
| 读取文件标签 | `GET` | `/api/manage/tags/{fileId}` |
| 修改文件标签 | `POST` | `/api/manage/tags/{fileId}` |
| 批量修改文件标签 | `POST` | `/api/manage/tags/batch` |
| 修改名单状态 | `POST` | `/api/manage/listType/{fileId}` |
| 批量修改名单状态 | `POST` | `/api/manage/listType/batch` |
| 移动或重命名 | `POST` | `/api/manage/relocate/batch` |
| 创建文件夹 | `POST` | `/api/manage/folder/create` |
| 禁用上传 IP | `POST` | `/api/manage/cusConfig/blockip` |
| 恢复上传 IP | `POST` | `/api/manage/cusConfig/whiteip` |
| 创建短期上传 Token | `POST` | `/api/manage/apiTokens` |
| 删除短期上传 Token | `DELETE` | `/api/manage/apiTokens?id={tokenId}` |

脚本会自动带上：

```text
Authorization: Bearer 你的 API Token
```

## 输出格式

默认 `pretty` 输出适合人工查看。如果要给其他程序继续处理，使用 `--output json`：

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://你的域名" `
  --token "你的 API Token" `
  --get-tags `
  --file-id "photos/2026/a.jpg" `
  --output json
```

也可以保存完整结果：

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://你的域名" `
  --token "你的 API Token" `
  --get-tags `
  --file-id "photos/2026/a.jpg" `
  --output json `
  --save-response ".\manage-result.json"
```

批量移动、批量重命名和批量名单动作会解析后端返回的 NDJSON 进度流，并汇总事件数量、完成状态和失败详情。

## 常见问题

### 为什么命令执行后没有修改

写入动作默认是预览模式。需要确认预览结果无误后，加上 `--apply` 才会真正保存。

### 这个脚本能上传、列出或删除文件吗

不能。上传使用上传脚本，列出和筛选使用列出脚本，删除明确文件使用删除脚本。文件管理脚本只处理 `manage` 权限下的轻量管理动作。

### 怎么知道要传哪个 fileId

先用 `imgbed-token-list.mjs --files` 查询文件。返回结果里的 `name` 通常就是文件 ID，也就是这里的 `--file-id`。

### 批量操作一次最多多少个文件

后端单次请求最多处理 `15` 个文件。脚本默认 `--batch-size 15`；传更小的值会按这个数量自动拆分成多次请求顺序执行。

### 可以创建真正的空文件夹吗

图床目录由文件路径推导出来，没有真正的空目录。`--create-folder` 会创建目录占位文件 `0.md`，让这个目录可以在文件管理和目录统计里显示出来。

### 短期上传 Token 最长多久

最长 `1` 天，也就是 `1440` 分钟。超过这个时间，脚本会在本地拒绝；后端也会返回 `API_TOKEN_MANAGE_CREATE_EXPIRES_AT_TOO_LONG`。

### 短期上传 Token 过期后会自动删除吗

会自动清理，但不是定时任务立即删除。过期 Token 被再次校验时会被清理；读取 API Token 列表时也会清理已经过期且 `autoDelete=true` 的 Token。
