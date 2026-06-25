# API Token 上传文件

API Token 上传适合给脚本、自动化任务和第三方程序使用。它不需要打开网页，只要带上站点地址、Token、文件路径和上传渠道，就可以把文件上传到图床，并在成功后拿到文件链接。

![编辑 API Token](../../image/Safety/apitoken/编辑上传权限api.png)

## 准备工作

进入后台后，打开：

系统配置 → 安全设置 → API Token

创建或编辑 API Token 时，确认这个 Token 允许上传，并选择一个真实的默认上传渠道。API Token 上传不使用“智能分配”入口，脚本调用时也需要传入真实渠道。

## 下载上传脚本

文档仓库里提供了两个 Node.js 脚本：

| 脚本 | 用途 |
| --- | --- |
| <a href="/tools/imgbed-token-single-upload.mjs" download>单次上传脚本</a> | 只调用一次 `/upload`，适合小文件和接口连通性测试 |
| <a href="/tools/imgbed-token-chunk-upload.mjs" download>分块上传脚本</a> | 使用 API Token 的分块、直传或平台会话接口，适合大文件 |

运行脚本需要本机安装 Node.js 18 或更高版本。

## 列出可用渠道

两个脚本都支持先列出当前 API Token 可用的上传渠道：

```powershell
node imgbed-token-single-upload.mjs --base-url "https://你的域名" --token "你的 API Token" --list-channels
node imgbed-token-chunk-upload.mjs --base-url "https://你的域名" --token "你的 API Token" --list-channels
```

列出渠道时不需要传 `--file` 和 `--channel`。返回内容包含默认上传渠道、大渠道参数、子渠道名称和是否开启负载均衡，不会返回密钥、刷新令牌等敏感配置。

## 上传方式怎么选

| 上传方式 | 适合场景 | 说明 |
| --- | --- | --- |
| 单次上传 | 小文件、简单脚本、接口测试 | 文件作为一个请求发到 `/upload` |
| 分块上传 | 大文件、容易超时的文件 | 脚本按渠道调用分块、直传或平台会话接口 |

如果文件比较大，优先使用分块上传脚本。单次上传受到 Cloudflare 请求体、Worker 内存和各渠道自身限制影响。

## 单次上传

单次上传脚本只请求一次 `/upload`。

```powershell
node imgbed-token-single-upload.mjs `
  --base-url "https://你的域名" `
  --token "你的 API Token" `
  --file "D:\test\image.png" `
  --channel s3 `
  --folder "photos/2026"
```

也可以把 Token 放到环境变量里：

```powershell
$env:IMGBED_API_TOKEN="你的 API Token"
node imgbed-token-single-upload.mjs --base-url "https://你的域名" --file "D:\test\image.png" --channel s3
```

### 单次上传参数

| 参数 | 必填 | 说明 |
| --- | --- | --- |
| `--base-url <url>` | 是 | 图床站点地址，例如 `https://image.ai6.me` |
| `--token <token>` | 是 | API Token；也可以用 `IMGBED_API_TOKEN` 环境变量 |
| `--file <path>` | 是 | 本地文件路径 |
| `--channel <key>` | 是 | 上传渠道 |
| `--folder <path>` | 否 | 上传目录，例如 `photos/2026` 或 `/user/` |
| `--name-type <type>` | 否 | 命名方式，对应后端 `uploadNameType`，默认 `default` |
| `--channel-name <name>` | 否 | 指定某个子渠道或账号；不传时由后端渠道配置决定 |
| `--retries <n>` | 否 | 临时失败重试次数，默认 `3` |
| `--timeout-ms <n>` | 否 | 单次请求超时时间，默认 `180000` |
| `--output <pretty\|json>` | 否 | 输出格式，默认 `pretty` |
| `--save-response <path>` | 否 | 把最终结果保存成 JSON 文件 |
| `--list-channels` | 否 | 只列出当前 Token 可用上传渠道，不执行上传 |

### 单次上传渠道

| 渠道参数 | 渠道 |
| --- | --- |
| `telegram` / `tg` | Telegram |
| `discord` / `dc` | Discord |
| `cfr2` / `r2` | Cloudflare R2 |
| `s3` | S3 |
| `webdav` / `wd` | WebDAV 存储渠道 |
| `github` / `gh` | GitHub Releases |
| `gitlab` / `gl` | GitLab Packages |
| `huggingface` / `hf` | Hugging Face |
| `onedrive` / `od` | OneDrive |
| `googledrive` / `google` / `gd` | Google Drive |
| `dropbox` / `db` | Dropbox |
| `yandex` / `yx` | Yandex Disk |
| `pcloud` / `pd` | pCloud |

### 单次上传大小限制（单文件建议限制在100 MB内）

下面这些渠道有明确的单次 `/upload` 拦截阈值：

| 渠道 | 单次上传上限 |
| --- | ---: |
| Telegram | 20 MiB |
| Discord | 10 MiB |
| S3 | 64 MiB |
| WebDAV | 64 MiB |
| GitHub Releases | 64 MiB |
| GitLab Packages | 64 MiB |

超过上限时，脚本会在本地直接提示对应错误。其他渠道不在脚本里写 100 MB 本地限制；如果请求体超过 Cloudflare 或平台能力，会由 Cloudflare 或远端平台返回错误。

## 分块上传

分块上传脚本会先用 API Token 请求后端解析文件目标，再按渠道走对应的大文件上传流程。用户不需要自己写分块会话、合并和完成请求。

```powershell
node imgbed-token-chunk-upload.mjs `
  --base-url "https://你的域名" `
  --token "你的 API Token" `
  --file "D:\test\video.zip" `
  --channel github `
  --folder "photos/2026" `
  --concurrency 3
```

### 分块上传参数

| 参数 | 必填 | 说明 |
| --- | --- | --- |
| `--base-url <url>` | 是 | 图床站点地址 |
| `--token <token>` | 是 | API Token；也可以用 `IMGBED_API_TOKEN` 环境变量 |
| `--file <path>` | 是 | 本地文件路径 |
| `--channel <key>` | 是 | 上传渠道 |
| `--folder <path>` | 否 | 上传目录 |
| `--name-type <type>` | 否 | 命名方式，对应后端 `uploadNameType`，默认 `default` |
| `--channel-name <name>` | 否 | 指定某个子渠道或账号；不传时由后端渠道配置决定 |
| `--concurrency <n>` | 否 | 并发上传数，默认 `1`，最大 `3` |
| `--retries <n>` | 否 | 临时失败重试次数，默认 `3` |
| `--timeout-ms <n>` | 否 | 单个请求超时时间，默认 `180000` |
| `--output <pretty\|json>` | 否 | 输出格式，默认 `pretty` |
| `--save-response <path>` | 否 | 把最终结果保存成 JSON 文件 |
| `--list-channels` | 否 | 只列出当前 Token 可用上传渠道，不执行上传 |

### 分块上传渠道

| 渠道参数 | 上传链路 |
| --- | --- |
| `telegram` / `tg` | `/upload` 真分块会话 |
| `discord` / `dc` | `/upload` 真分块会话 |
| `cfr2` / `r2` | `/upload` 真分块会话 |
| `github` / `gh` | `/upload` 真分块会话 |
| `gitlab` / `gl` | `/upload` 真分块会话 |
| `webdav` / `wd` | `/upload` 真分块会话 |
| `s3` | S3 multipart 上传 |
| `onedrive` / `od` | OneDrive 上传会话 |
| `googledrive` / `google` / `gd` | Google Drive 可恢复上传 |
| `dropbox` / `db` | Dropbox 上传会话 |
| `yandex` / `yx` | Yandex 直传 URL |
| `pcloud` / `pd` | pCloud upload link |
| `huggingface` / `hf` | Hugging Face LFS 上传 |

Yandex 压缩包样本在测试中表现不稳定；非压缩文件已验证可以上传。

## 返回结果

上传成功后，脚本会输出：

```text
success
src: /file/photos/2026/example.png
url: https://你的域名/file/photos/2026/example.png
fileId: photos/2026/example.png
```

| 字段 | 说明 |
| --- | --- |
| `src` | 站内文件路径 |
| `url` | 完整访问链接，适合直接写入自己的脚本或数据库 |
| `fileId` | 文件 ID，后续查询、管理或记录时使用 |
| `channelName` | 分块脚本可能返回实际使用的子渠道或账号 |

如果指定 `--output json`，脚本会输出完整 JSON，适合程序继续处理。

## 直接请求单次上传接口

不使用脚本时，也可以直接请求单次上传接口：

```text
POST https://你的域名/upload?uploadChannel=s3&uploadFolder=photos/2026&uploadNameType=default
Authorization: Bearer 你的 API Token
Content-Type: multipart/form-data
```

表单字段：

| 字段 | 必填 | 说明 |
| --- | --- | --- |
| `file` | 是 | 要上传的文件 |

查询参数：

| 参数 | 必填 | 说明 |
| --- | --- | --- |
| `uploadChannel` | 是 | 真实上传渠道 |
| `uploadFolder` | 否 | 上传目录 |
| `uploadNameType` | 否 | 命名方式 |
| `channelName` | 否 | 指定子渠道或账号 |

接口成功时会返回类似：

```json
{
  "success": true,
  "src": "/file/photos/2026/example.png",
  "url": "https://你的域名/file/photos/2026/example.png",
  "fileId": "photos/2026/example.png"
}
```

## 常见问题

### 大文件单次上传失败

单次 `/upload` 是一个请求传完整文件，大文件可能被 Cloudflare 或远端平台拦截。大文件请使用分块上传脚本。

### 传了 `--channel-name` 还是失败

先确认后台这个渠道里确实存在同名子渠道，并且该子渠道已启用。没有传 `--channel-name` 时，后端会按该渠道自己的配置选择可用账号。

### 想把结果给其他程序用

使用 `--output json`，或者加上 `--save-response result.json`。程序读取里面的 `url` 字段即可拿到完整文件链接。

### Yandex 上传压缩包失败

Yandex 不支持压缩包格式，可能是他们的相关政策导致。需要使用 Yandex 渠道时，建议上传非压缩文件。

