# Dropbox 渠道添加说明

## 添加前要准备什么

| 需要准备 | 用途 |
| --- | --- |
| 一个 Dropbox 账号 | 用来登录 Dropbox 并授权应用 |
| 一个 Dropbox 应用 | 用来生成 `App Key` 和 `App Secret` |
| 当前图床访问域名 | 用来配置授权回调地址 |
| 一个可用的 Dropbox 空间 | 后面真正存图用 |

## 添加步骤

### 第一步：创建 Dropbox 应用

1. 打开 Dropbox App Console：

```text
https://www.dropbox.com/developers/apps
```

2. 点击创建新应用。
3. 访问类型建议选：

```text
App folder
```

4. 给应用起一个你自己能认出来的名字，例如 `imgbed-app`。
5. 创建完成后进入应用详情页。

这一步要特别注意：

| 访问类型 | 建议 |
| --- | --- |
| `App folder` | 推荐，和当前项目最匹配 |
| `Full Dropbox` | 不建议，权限更大，当前项目没必要 |

![开发者创建应用](../../image/upload/dropbox/开发者创建应用.png)

### 第二步：配置回调地址

在 Dropbox 应用详情页里找到 OAuth 或 Redirect URI 配置，填下面这个地址：

```text
https://你的域名/api/oauth/dropbox/callback
```

如果你平时会从多个域名打开后台，就把多个域名对应的回调都加上。

![配置回调地址](../../image/upload/dropbox/配置回调地址.png)

### 第三步：配置应用权限（Scopes）

进入应用详情页的 `Permissions` 标签页，至少勾选下面这些权限：

| 权限 | 是否必须 | 用途 |
| --- | --- | --- |
| `account_info.read` | 必须 | 查询账号基础信息、容量信息 |
| `files.metadata.read` | 必须 | 读取文件/目录元数据（用于路径检查） |
| `files.metadata.write` | 必须 | 创建目录等元数据写操作 |
| `files.content.write` | 必须 | 上传文件（缺少会报 `required scope 'files.content.write'`） |
| `files.content.read` | 建议 | 下载、预览、临时直链等读文件能力 |

勾选后点击页面底部 `Submit` 提交权限变更。

![添加对应的权限](../../image/upload/dropbox/添加对应的权限.png)

重要说明：

| 场景 | 处理方式 |
| --- | --- |
| 你修改了 Scopes | 必须重新走一次“获取令牌”流程，拿新的 `Refresh Token` |
| 没有重新授权 | 旧 token 不会自动获得新权限，上传仍会失败 |

### 第四步：记录应用信息

应用创建完成后，记下这两个值：

| Dropbox 后台字段 | 后面填到哪里 |
| --- | --- |
| `App key` | 系统里的 `App Key` |
| `App secret` | 系统里的 `App Secret` |

### 第五步：回系统里填写 Dropbox 渠道

在上传设置里选择 `Dropbox` 后，按下面这套填：

| 页面字段 | 你该填什么 |
| --- | --- |
| 渠道名称 | 你自己起，例如 `Dropbox主账号` |
| App Key | 刚才 Dropbox 应用的 `App key` |
| App Secret | 刚才 Dropbox 应用的 `App secret` |
| Refresh Token | 先留空 |
| 根目录 | 可选，默认 `imgbed` |
| 备注 | 可选 |

![获取令牌](../../image/upload/dropbox/获取令牌.png)

### 第六步：获取 Refresh Token

1. 在系统里点 `获取令牌`。
2. 登录你要绑定的 Dropbox 账号。
3. 按提示授权。
4. 授权成功后，回调页会显示一串 `Refresh Token`。
5. 复制它。
6. 回到系统，粘贴到 `Refresh Token` 输入框里。

![复制令牌](../../image/upload/dropbox/复制令牌.png)

## 添加完成后怎么检查

| 检查项 | 检查方式 |
| --- | --- |
| 渠道卡片是否出现 | 保存后页面里能看到 Dropbox 渠道 |
| 渠道是否能启用 | 开关能正常打开 |
| 令牌是否已写入 | 详情页能看到 `Refresh Token` 已保存 |
| 上传是否正常 | 上传测试图后，Dropbox 应用目录里出现对应文件 |

如果开启了容量限制，可以点击查询额度。查询成功后，卡片会显示已用容量、总容量和更新时间。

![查询额度成功](../../image/upload/dropbox/查询额度成功.png)

## 常见问题

| 问题 | 处理办法 |
| --- | --- |
| 系统提示配置不完整 | 检查 `App Key`、`App Secret`、`Refresh Token` 是否都填了 |
| 授权成功但没拿到 `Refresh Token` | 重新点一次 `获取令牌`，确认走的是离线授权 |
| 上传时报 `required scope 'files.content.write'` | 回 Dropbox `Permissions` 勾选 `files.content.write`，点 `Submit` 后重新获取 `Refresh Token` |
| 回调失败 | 检查回调地址是否是 `https://你的域名/api/oauth/dropbox/callback` |
| 文件找不到 | 确认 Dropbox 应用是不是按 `App folder` 模式创建的 |

## 渠道流程速查

```text
打开 Dropbox App Console
-> 创建应用
-> 访问类型选 App folder
-> 配置回调地址 https://你的域名/api/oauth/dropbox/callback
-> Permissions 勾选 account_info.read / files.metadata.read / files.metadata.write / files.content.write（建议再勾 files.content.read）
-> 点击 Submit 提交权限
-> 复制 App Key 和 App Secret
-> 回系统填 App Key / App Secret
-> 点击 获取令牌
-> 复制回调页里的 Refresh Token
-> 粘回系统保存
```

## 参考资料

1. Dropbox App Console：https://www.dropbox.com/developers/apps
2. Dropbox OAuth Guide：https://developers.dropbox.com/oauth-guide
3. Dropbox Developer Guide：https://www.dropbox.com/developers/reference/developer-guide
