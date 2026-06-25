# API Token 配置管理

API Token 配置管理适合给自动化脚本、运维工具或第三方控制面板使用。它可以在不打开后台页面的情况下，读取和修改上传渠道配置、安全设置、页面设置、其他设置，以及处理联盟关系。

管理权限只开放适合脚本执行的轻量操作。需要浏览器确认、前端分批任务或联盟索引清理的重操作，仍然要回到浏览器后台处理。

![编辑 API Token](../../image/Safety/apitoken/编辑api%20token.png)

## 准备工作

进入后台后，打开：

系统配置 → 安全设置 → API Token

创建或编辑 API Token 时，确认这个 Token 允许管理。管理权限可以修改站点配置，建议只发给可信脚本或可信用户使用。

三个管理脚本的写入操作默认都是预览模式，不会真正保存。确认预览内容无误后，再加 `--apply` 执行写入。

也可以把 Token 放到环境变量里：

```powershell
$env:IMGBED_API_TOKEN="你的 API Token"
```

## 下载管理脚本

文档仓库里提供了三个 Node.js 脚本：

| 脚本 | 用途 |
| --- | --- |
| <a href="/tools/imgbed-token-upload-settings.mjs" download>下载上传设置管理脚本</a> | 管理上传渠道、子渠道和负载均衡 |
| <a href="/tools/imgbed-token-site-settings.mjs" download>下载站点设置管理脚本</a> | 管理安全设置、页面设置和其他设置 |
| <a href="/tools/imgbed-token-federation.mjs" download>下载联盟关系管理脚本</a> | 管理联盟轻量关系动作、申请和留言 |

运行脚本需要本机安装 Node.js 18 或更高版本。

### 通用参数

| 参数 | 必填 | 说明 |
| --- | --- | --- |
| `--base-url <url>` | 是 | 图床站点地址，例如 `https://image.ai6.me` |
| `--token <token>` | 是 | API Token；也可以用 `IMGBED_API_TOKEN` 环境变量 |
| `--retries <n>` | 否 | 临时失败重试次数，默认 `3` |
| `--timeout-ms <n>` | 否 | 单个请求超时时间，默认 `180000` |
| `--output <pretty\|json>` | 否 | 输出格式，默认 `pretty`；程序调用可用 `json` |
| `--save-response <path>` | 否 | 把最终结果保存成 JSON 文件 |
| `--apply` | 否 | 真正执行写入；不加时只预览 |
| `-h` / `--help` | 否 | 查看脚本帮助 |

## 上传设置

上传设置脚本用于列出、读取、新增或编辑、删除上传子渠道，也可以切换某个大渠道的负载均衡。

```powershell
node imgbed-token-upload-settings.mjs --base-url "https://你的域名" --token "你的 API Token" --list
```

### 上传设置参数

| 参数 | 说明 |
| --- | --- |
| `--list` | 列出上传设置分组 |
| `--get` | 读取一个大渠道，或读取大渠道下的指定子渠道 |
| `--upsert` | 新增或编辑一个子渠道；不加 `--apply` 只预览 |
| `--delete` | 删除一个子渠道；不加 `--apply` 只预览 |
| `--load-balance <true\|false>` | 开启或关闭一个大渠道的负载均衡 |
| `--channel <key>` | 上传大渠道，例如 `s3`、`github`、`telegram` |
| `--channel-name <name>` | 子渠道或账号名称 |
| `--set key=value` | 设置一个字段，可重复使用；支持点路径 |
| `--patch-json <path>` | 从 JSON 文件批量合并字段 |
| `--apply` | 真正保存写入结果 |

### 渠道参数

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

### 上传设置示例

列出全部上传设置：

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://你的域名" `
  --token "你的 API Token" `
  --list
```

读取 S3 渠道配置：

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://你的域名" `
  --token "你的 API Token" `
  --get `
  --channel s3
```

读取 S3 下某个子渠道：

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://你的域名" `
  --token "你的 API Token" `
  --get `
  --channel s3 `
  --channel-name "backup-s3"
```

新增或编辑一个子渠道。第一次执行不加 `--apply`，只查看预览：

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://你的域名" `
  --token "你的 API Token" `
  --upsert `
  --channel webdav `
  --channel-name "backup-webdav" `
  --set enabled=false `
  --set remark="backup test"
```

确认无误后再保存：

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://你的域名" `
  --token "你的 API Token" `
  --upsert `
  --channel webdav `
  --channel-name "backup-webdav" `
  --set enabled=false `
  --set remark="backup test" `
  --apply
```

删除一个子渠道：

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://你的域名" `
  --token "你的 API Token" `
  --delete `
  --channel webdav `
  --channel-name "backup-webdav" `
  --apply
```

开启 S3 负载均衡：

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://你的域名" `
  --token "你的 API Token" `
  --load-balance true `
  --channel s3 `
  --apply
```

批量修改复杂字段时，可以先写一个 JSON 文件，再用 `--patch-json`：

```json
{
  "enabled": true,
  "remark": "primary account"
}
```

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://你的域名" `
  --token "你的 API Token" `
  --upsert `
  --channel s3 `
  --channel-name "primary-s3" `
  --patch-json ".\s3-channel.json" `
  --apply
```

## 其他配置填写

站点设置脚本用于管理三类配置：

| 区域 | 参数 | 说明 |
| --- | --- | --- |
| 安全设置 | `security` | 用户端认证、管理端认证、登录设备、API Token、图像审查、用户频控、WebDAV 等 |
| 页面设置 | `page` | 全局页面、用户端页面、后台页面等 |
| 其他设置 | `others` | 随机图 API、公共浏览、联盟本地节点、自动标签、IP 归属地、备份渠道、OCR 等 |

先用 `--list-sections` 查看当前脚本支持的区域、分区和字段：

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://你的域名" `
  --token "你的 API Token" `
  --list-sections
```

### 其他配置参数

| 参数 | 说明 |
| --- | --- |
| `--list-sections` | 列出可编辑的区域、分区和字段 |
| `--get` | 读取一个配置分区 |
| `--area <security\|page\|others>` | 指定配置区域 |
| `--section <name>` | 指定配置分区，名称以 `--list-sections` 输出为准 |
| `--set key=value` | 设置一个字段，可重复使用 |
| `--apply` | 真正保存写入结果 |

`page` 区域的 `--set` 使用页面配置项 id，例如 `starsEffect=true`。`security` 和 `others` 区域的 `--set` 使用对应分区字段名，例如 `email=admin@example.com`。

### 其他配置示例

读取系统更新通知设置：

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://你的域名" `
  --token "你的 API Token" `
  --get `
  --area security `
  --section systemUpdate
```

修改系统更新通知邮箱。第一次执行不加 `--apply`，只查看预览：

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://你的域名" `
  --token "你的 API Token" `
  --area security `
  --section systemUpdate `
  --set email="admin@example.com"
```

确认无误后再保存：

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://你的域名" `
  --token "你的 API Token" `
  --area security `
  --section systemUpdate `
  --set email="admin@example.com" `
  --apply
```

修改后台页面星空效果：

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://你的域名" `
  --token "你的 API Token" `
  --area page `
  --section adminSettings `
  --set starsEffect=true `
  --apply
```

修改 IP 归属地语言：

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://你的域名" `
  --token "你的 API Token" `
  --area others `
  --section ipGeolocation `
  --set language="zh-CN" `
  --apply
```

联盟本地节点配置可以读取和修改普通字段，例如是否启用、同步目录、邀请码等。域名确认不通过 API Token 处理；如果后台提示本地节点域名和当前访问域名不一致，请在浏览器后台完成确认。

## 联盟关系

联盟关系脚本用于管理本地节点状态、我加入的节点、加入我的节点、留言、申请加入、无关系重新申请、同意、拒绝，以及不涉及索引清理的轻量关系动作。

更新索引、删除联盟索引、确认域名变更依赖浏览器里的完整流程，脚本不处理这些重操作。

### 联盟轻重边界

| 操作 | 脚本是否支持 | 说明 |
| --- | --- | --- |
| 查看本地节点状态、列出关系 | 支持 | 只读关系账本 |
| 查看留言、发送留言 | 支持 | 只读写关系留言 |
| 申请加入其他节点 | 支持 | 通过邀请链接发起申请 |
| 无关系记录重新申请 | 支持 | 仅限 `lastResult=none` 的 outgoing 卡牌，需要 6 位邀请码 |
| 取消 outgoing 待同意申请 | 支持 | 只取消 pending 申请 |
| 同意或拒绝 incoming 申请 | 支持 | 只处理加入我的节点请求 |
| 移除 incoming 已接受关系 | 支持 | 只处理入站关系账本并通知对方 |
| 删除 incoming 终态记录 | 支持 | 只删除入站终态关系记录 |
| outgoing 已接受订阅取消 | 浏览器处理 | 需要删除本地联盟索引，浏览器会分批执行 |
| outgoing 终态记录删除 | 浏览器处理 | 可能需要先清理联盟索引 |
| 域名变更确认或取消 | 浏览器处理 | 需要确认当前域名，并处理域名变更后的索引关系 |
| 发布索引、拉取索引、批量删除索引 | 浏览器处理 | 属于前端分批任务 |

### 联盟关系参数

| 参数 | 说明 |
| --- | --- |
| `--status` | 查看本地联盟节点状态，以及我加入的节点、加入我的节点 |
| `--list` | 列出联盟关系列表 |
| `--chat` | 读取某个关系的缓存留言 |
| `--send-message` | 给某个已建立关系的节点留言 |
| `--join` | 通过邀请链接申请加入其他节点 |
| `--reapply` | 对无关系记录重新申请，需要 6 位邀请码 |
| `--accept` | 同意加入我的节点请求 |
| `--deny` | 拒绝加入我的节点请求 |
| `--cancel` | 取消 outgoing 待同意申请，或移除 incoming 已接受关系 |
| `--delete` | 删除 incoming 终态关系记录 |
| `--direction <outgoing\|incoming\|all>` | 关系方向；`outgoing` 是我加入的节点，`incoming` 是加入我的节点 |
| `--domain <url>` | 关系节点域名 |
| `--invite-link <url>` | 对方节点的邀请码链接 |
| `--invite-code <code>` | 6 位邀请码，用于重新申请 |
| `--text <message>` | 留言内容 |
| `--apply` | 真正保存写入结果 |

### 联盟关系示例

查看本地节点状态和双方关系列表：

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://你的域名" `
  --token "你的 API Token" `
  --status
```

只列出我加入的节点：

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://你的域名" `
  --token "你的 API Token" `
  --list `
  --direction outgoing
```

只列出加入我的节点：

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://你的域名" `
  --token "你的 API Token" `
  --list `
  --direction incoming
```

通过邀请链接申请加入其他节点。第一次执行不加 `--apply`，只查看预览：

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://你的域名" `
  --token "你的 API Token" `
  --join `
  --invite-link "https://对方域名/federation/invite/abcdef"
```

确认无误后再保存：

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://你的域名" `
  --token "你的 API Token" `
  --join `
  --invite-link "https://对方域名/federation/invite/abcdef" `
  --apply
```

对无关系记录重新申请：

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://你的域名" `
  --token "你的 API Token" `
  --reapply `
  --domain "https://对方域名" `
  --invite-code "abc123" `
  --apply
```

同意加入我的节点请求：

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://你的域名" `
  --token "你的 API Token" `
  --accept `
  --domain "https://对方域名" `
  --apply
```

拒绝加入我的节点请求：

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://你的域名" `
  --token "你的 API Token" `
  --deny `
  --domain "https://对方域名" `
  --apply
```

给已建立关系的节点留言：

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://你的域名" `
  --token "你的 API Token" `
  --send-message `
  --direction outgoing `
  --domain "https://对方域名" `
  --text "你好，这是一条测试留言。" `
  --apply
```

取消 outgoing 待同意申请：

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://你的域名" `
  --token "你的 API Token" `
  --cancel `
  --direction outgoing `
  --domain "https://对方域名" `
  --apply
```

移除 incoming 已接受关系：

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://你的域名" `
  --token "你的 API Token" `
  --cancel `
  --direction incoming `
  --domain "https://对方域名" `
  --apply
```

删除 incoming 终态记录：

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://你的域名" `
  --token "你的 API Token" `
  --delete `
  --direction incoming `
  --domain "https://对方域名" `
  --apply
```

outgoing 已接受订阅取消、outgoing 记录删除需要回到浏览器后台处理，因为这些动作可能要先清理本地联盟索引。

### 域名不一致

如果本地节点保存的域名和当前关系里待处理的域名不一致，脚本会直接报错，并提示 `currentDomain` 和 `pendingDomain`。这种情况需要在浏览器后台处理，因为域名变动后还涉及出口索引清理和确认流程。

如果申请加入时对方返回 `FEDERATION_NODE_DOMAIN_MISMATCH`，说明邀请链接访问到的域名和对方本地节点保存的域名不一致。接口会返回 `currentOrigin` 和 `detectedOrigin`，请改用对方当前确认的域名重新导入，或者让对方先在浏览器后台确认域名。

## 常见问题

### 为什么修改命令执行后没有生效

写入命令默认是预览模式。需要确认预览内容无误后，加上 `--apply` 才会真正保存。

### 怎么知道可以修改哪些字段

上传设置先用 `--get` 查看现有子渠道结构。安全设置、页面设置和其他设置先用 `--list-sections` 查看脚本允许编辑的区域、分区和字段。

### 想把结果给其他程序使用

使用 `--output json`，或者加上 `--save-response result.json`。程序可以直接读取保存下来的 JSON 文件。
