# API Token 删除文件

API Token 删除文件适合给脚本、自动化任务和第三方程序使用。它不需要打开后台页面，只要带上站点地址、Token 和明确的文件 ID，就可以删除图床里的单个或多个文件。

删除是写入操作，命令执行后就会真实删除。建议先用 `imgbed-token-list.mjs` 查清楚要删除的 `fileId`，再把这些 ID 传给删除脚本。

![编辑 API Token](../../image/Safety/apitoken/编辑删除权限api.png)

## 准备工作

进入后台后，打开：

系统配置 → 安全设置 → API Token

创建或编辑 API Token 时，确认这个 Token 允许删除。这个脚本只需要 `delete` 权限。

也可以把 Token 放到环境变量里：

```powershell
$env:IMGBED_API_TOKEN="你的 API Token"
```

## 下载脚本

| 脚本 | 用途 |
| --- | --- |
| <a href="/tools/imgbed-token-delete.mjs" download>下载删除文件脚本</a> | 删除一个或多个明确指定的文件 ID |

运行脚本需要本机安装 Node.js 18 或更高版本。

## 删除 API 行为

删除脚本调用的是后端删除接口：

```text
POST /api/manage/delete/batch
```

请求需要带 API Token：

```text
Authorization: Bearer <token>
```

请求体示例：

```json
{
  "fileIds": ["photos/2026/a.txt"],
  "deleteStrictness": "strict"
}
```

`fileIds` 里只有 1 个文件时，就是单文件删除；有多个文件时，就是批量删除。后端单次请求最多处理 15 个文件，脚本会按 `--batch-size` 自动拆成多个请求。

接口返回 NDJSON 进度流，常见事件包括 `batch_start`、`file_step`、`file_done`、`batch_complete`、`batch_error`。脚本会解析这些事件，并汇总成可读结果或 JSON 结果。

删除成功后，后端会自动处理文件索引、目录统计、容量统计和缓存清理。

## 删除脚本参数

| 参数 | 必填 | 说明 |
| --- | --- | --- |
| `--base-url <url>` | 是 | 图床站点地址，例如 `https://image.ai6.me` |
| `--token <token>` | 是 | API Token；也可以用 `IMGBED_API_TOKEN` 环境变量 |
| `--file-id <id>` | 是 | 要删除的文件 ID，可重复传多个 |
| `--strictness <strict\|soft>` | 否 | 删除严格度，默认 `strict` |
| `--batch-size <n>` | 否 | 每个请求删除的文件数，默认 `15`，最大 `15` |
| `--retries <n>` | 否 | 临时失败重试次数，默认 `3` |
| `--timeout-ms <n>` | 否 | 单个请求超时时间，默认 `180000` |
| `--output <pretty\|json>` | 否 | 输出格式，默认 `pretty` |
| `--save-response <path>` | 否 | 把最终结果保存成 JSON 文件 |
| `-h` / `--help` | 否 | 查看脚本帮助 |

这个脚本只删除显式传入的 `--file-id`。它不做模糊匹配，不按目录批量清空，也不从逗号列表或本地文件读取待删除 ID。

## 严格删除和软删除

| 模式 | 说明 |
| --- | --- |
| `strict` | 默认模式。远端存储删除失败时，图床记录会保留，方便后续重试或排查 |
| `soft` | 远端存储删除失败时，也继续清理图床记录，并在结果里返回 warning |

如果你希望“远端文件必须删掉才算成功”，使用默认的 `strict`。如果某个远端平台已经无法删除，但你只想清理图床记录，可以使用 `soft`。

## 使用示例

删除单个文件：

```powershell
node imgbed-token-delete.mjs `
  --base-url "https://你的域名" `
  --token "你的 API Token" `
  --file-id "photos/2026/a.txt"
```

使用环境变量中的 Token：

```powershell
$env:IMGBED_API_TOKEN="你的 API Token"

node imgbed-token-delete.mjs `
  --base-url "https://你的域名" `
  --file-id "photos/2026/a.txt"
```

删除多个文件：

```powershell
node imgbed-token-delete.mjs `
  --base-url "https://你的域名" `
  --file-id "photos/2026/a.txt" `
  --file-id "photos/2026/b.txt" `
  --file-id "photos/2026/c.txt"
```

远端删除失败时仍清理图床记录：

```powershell
node imgbed-token-delete.mjs `
  --base-url "https://你的域名" `
  --file-id "photos/2026/a.txt" `
  --strictness soft
```

输出 JSON 并保存结果：

```powershell
node imgbed-token-delete.mjs `
  --base-url "https://你的域名" `
  --file-id "photos/2026/a.txt" `
  --output json `
  --save-response ".\delete-result.json"
```

限制每次请求删除 5 个文件：

```powershell
node imgbed-token-delete.mjs `
  --base-url "https://你的域名" `
  --file-id "photos/2026/a.txt" `
  --file-id "photos/2026/b.txt" `
  --batch-size 5
```

## 删除前先查 fileId

删除脚本需要的是图床文件 ID。可以先用列出脚本查看目录里的文件：

```powershell
node imgbed-token-list.mjs `
  --base-url "https://你的域名" `
  --token "你的 API Token" `
  --files `
  --dir "photos/2026" `
  --count 10 `
  --output json
```

返回结果里的 `name` 通常就是可以传给删除脚本的 `fileId`。

## 常见问题

### 为什么删除失败但文件还在列表里？

如果使用默认 `strict`，远端存储删除失败时，图床记录会保留。这是为了避免只删掉本地索引、远端文件却还存在。确认可以只清理图床记录时，再用 `soft` 对同一个 `fileId` 重试。

### 为什么结果里有 warning？

warning 通常表示远端删除、缓存清理或统计收尾里有非致命问题。脚本会把 warning 汇总出来，方便你判断是否需要重试。

### 可以按目录一次性删除吗？

这个脚本不提供按目录清空能力。需要先用列出脚本筛选出明确的 `fileId`，再把要删除的文件逐个传给删除脚本。

