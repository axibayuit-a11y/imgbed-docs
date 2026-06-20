# Google Drive 渠道添加说明

## 添加前要准备什么

在开始之前，你只需要准备这 4 样：

| 需要准备 | 用途 |
| --- | --- |
| 一个 Google 账号 | 用来登录 Google Cloud，并授权你的 Google Drive |
| 一个 Google Cloud 项目 | 用来启用 Drive API，并创建 OAuth 2.0 凭据 |
| OAuth 2.0 客户端 | 系统通过它获取 `Client ID`、`Client Secret` 和 `Refresh Token` |
| 当前图床访问域名 | 用来配置授权回调地址，必须和系统实际访问域名一致 |

## 添加步骤

### 第一步：登录 Google Cloud 并启用 Google Drive API

操作顺序如下：

1. 打开 Google Cloud Console。
2. 新建一个项目，或者直接选择你现有的项目。
3. 进入 `APIs & Services`。
4. 点击 `Enable APIs and Services`。
5. 搜索 `Google Drive API`。
6. 点进去后点击启用。

### 第二步：配置 OAuth 同意页面

操作顺序如下：

1. 在 Google Cloud 里进入 `Google Auth Platform`。
2. 先完成 `Branding` 里的基础信息，例如应用名称、支持邮箱、开发者联系邮箱。
3. 进入 `Audience`。
4. 大多数个人部署场景，直接选 `External` 就行。
5. 如果你选的是 `External`，再把你自己要授权的 Google 账号加到 `Test users`。
6. 进入 `Data Access`。
7. 添加 Google Drive 权限。


### 第三步：创建 OAuth 2.0 客户端

操作顺序如下：

1. 进入 `Google Auth Platform` 的 `Clients`。
2. 点击创建客户端。
3. 应用类型选择 `Web application`。
4. 给这套客户端起一个你自己能认出来的名字。
5.已获授权的 JavaScript 来源填写你的图床地址：https://img.example.com
6.已获授权的重定向 URI 来源填写你的图床回调：https://img.example.com/api/oauth/google/callback

![创建 OAuth 客户端](../../image/upload/google-drive/oa客户端id创建.png)

![填写图床域名和回调地址](../../image/upload/google-drive/填写oa客户端url信息.png)

创建完成以后，复制保存这两个值：

| 生成结果 | 后面填到哪里 |
| --- | --- |
| Client ID | 系统里的 `Client ID` |
| Client Secret | 系统里的 `Client Secret` |


## 第四步：回到系统里填写 Google Drive 渠道

在上传设置里选择 `Google Drive` 后，按下面这套填：

| 页面字段 | 你该填什么 |
| --- | --- |
| 渠道名称 | 你自己起，比如 `GoogleDrive主账号` |
| Client ID | 刚才在 Google Cloud 创建出来的 Client ID |
| Client Secret | 刚才在 Google Cloud 创建出来的 Client Secret |
| Refresh Token | 先可以留空，下一步通过系统按钮获取 |
| 根目录 | 可选，默认是 `imgbed` |

![把客户端信息先填回系统](../../image/upload/google-drive/粘贴回添加新渠道配置.png)


## 第五步：在系统里获取 Refresh Token

1. 点击 `获取令牌`。
2. 选择你要绑定的 Google 账号。
3. 按页面提示完成授权。
4. 成功后，回调页会显示一串 `Refresh Token`。
5. 复制它。
6. 回到系统，把它粘贴到 `Refresh Token` 输入框里。

![授权成功后复制 Refresh Token](../../image/upload/google-drive/授权完复制token.png)

如果你后面换了 Google 账号、改了客户端、或者旧授权失效了，也不用删渠道，直接点编辑页里的 `重新授权` 就行。


## 第六步：保存渠道配置
字段填好以后，直接点击保存。


## 渠道的操作流程总结

```text
登录 Google Cloud
-> 新建或选择项目
-> 启用 Google Drive API
-> 配置 Google Auth Platform
-> Audience 选 External 时，把自己的 Google 账号加进 Test users
-> 创建 Web application 类型的 OAuth 客户端
-> 回调地址填写 https://你的域名/api/oauth/google/callback
-> 回系统填 Client ID 和 Client Secret
-> 点击 获取令牌
-> Google 登录并授权
-> 复制回调页里的 Refresh Token
-> 粘回系统并保存
-> 上传测试图
```

## 参考资料

1. Google OAuth Web Server Applications：https://developers.google.com/identity/protocols/oauth2/web-server
2. Google Workspace OAuth Consent Configuration：https://developers.google.com/workspace/guides/configure-oauth-consent
3. Google Drive API Auth Scope 说明：https://developers.google.com/workspace/drive/api/guides/api-specific-auth
