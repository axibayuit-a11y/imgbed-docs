# Yandex 渠道添加说明

## 添加前要准备什么

| 需要准备 | 用途 |
| --- | --- |
| 一个 Yandex 账号 | 用来登录 Yandex 并授权 Yandex Disk |
| 一个 Yandex OAuth 应用 | 用来生成 `Client ID` 和 `Client Secret` |
| 当前图床访问域名 | 用来配置授权回调地址 |
| 一个可用的 Yandex Disk | 后面真正存图用 |

## 添加步骤

### 第一步：创建 Yandex OAuth 应用

1. 打开 Yandex OAuth 创建应用直达地址：

```text
https://oauth.yandex.com/client/new
```

2. 如果页面先跳到登录页，先登录你的 Yandex 账号。
2. 创建一个新应用。
3. 给应用起一个你自己能认出来的名字，例如 `imgbed-yandex`。
4. 在应用设置里找到回调地址相关配置。
5. 回调地址填：
```text
https://你的域名/api/oauth/yandex/callback
```

### 第二步：确认授权范围

按当前项目真实逻辑，Yandex 这条线建议保留 `Yandex.Disk REST API` 下这 4 个权限：


| 权限 | 作用 |
| --- | --- |
| `cloud_api:disk.app_folder` | 让系统把文件存到应用目录 |
| `cloud_api:disk.read` | 读取文件和下载链接 |
| `cloud_api:disk.write` | 上传文件、建目录、删文件 |
| `Access to information about Yandex.Disk` | 读取磁盘容量、已用空间等信息 |


如果你还看到 `Yandex ID API` 下面的用户名、邮箱权限：

| 页面上的权限文案 | 建议 |
| --- | --- |
| `Access to username, first name and surname, gender` | 可选 |
| `Access to email address` | 可选 |

当前项目核心上传、下载、删图、查容量，主要依赖的是上面那 4 个 `Yandex.Disk REST API` 权限。

![配置 Yandex Disk 权限](../../image/upload/yandex/dataaccess配置软盘权限.png)

### 第三步：记录应用信息

应用创建完成后，记下这两个值：

| Yandex 后台字段 | 后面填到哪里 |
| --- | --- |
| `Client ID` | 系统里的 `Client ID` |
| `Client Secret` | 系统里的 `Client Secret` |

![记录客户端 ID 和 Secret](../../image/upload/yandex/记录客户端id和secret.png)

### 第四步：回系统里填写 Yandex 渠道

在上传设置里选择 `Yandex` 后，按下面这套填：

| 页面字段 | 你该填什么 |
| --- | --- |
| 渠道名称 | 你自己起，例如 `Yandex主账号` |
| Client ID | 刚才 Yandex 应用的 `Client ID` |
| Client Secret | 刚才 Yandex 应用的 `Client Secret` |
| Refresh Token | 先留空 |
| 根目录 | 可选，默认 `imgbed` |

![编辑配置渠道](../../image/upload/yandex/编辑配置渠道.png)


### 第五步：获取 Refresh Token

1. 在系统里点 `获取令牌`。
2. 登录你要绑定的 Yandex 账号。
3. 按提示授权。
4. 授权成功后，回调页会显示一串 `Refresh Token`。
5. 复制它。
6. 回到系统，粘贴到 `Refresh Token` 输入框里。

![授权后复制刷新令牌](../../image/upload/yandex/授权后复制刷新令牌.png)

### 第六步：保存渠道配置

字段填好后直接点击保存。

## 渠道流程速查

```text
打开 Yandex OAuth 控制台
-> 创建应用
-> 配置回调地址 https://你的域名/api/oauth/yandex/callback
-> 确认 Disk 权限
-> 复制 Client ID 和 Client Secret
-> 回系统填 Client ID / Client Secret
-> 点击 获取令牌
-> 复制回调页里的 Refresh Token
-> 粘回系统保存
```

## 参考资料

1. Yandex 注册应用：https://yandex.com/dev/id/doc/en/register-client
2. Yandex 通过 URL 获取授权码：https://yandex.com/dev/id/doc/en/codes/code-url
3. Yandex OAuth 令牌接口：https://yandex.com/dev/id/doc/en/tokens/token
