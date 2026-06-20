# OneDrive 渠道添加说明

## 添加前要准备什么

| 需要准备 | 用途 |
| --- | --- |
| Microsoft 账号 | 用来登录微软后台并授权 OneDrive |
| 图床域名 | 用来填写回调地址 |
| 一个应用注册 | 用来生成 `Client ID` 和 `Client Secret` |
| OneDrive 账号 | 后面真正存图用 |

## 添加步骤

### 第一步：进入 Microsoft Entra ID

1. 打开 `portal.azure.com`。
2. 顶部搜索 `Microsoft Entra ID`。
3. 如果下拉里没有目标入口，就点：

```text
继续在 Microsoft Entra ID 中搜索
```

4. 进入 `Microsoft Entra ID`。
5. 打开 `应用注册 / App registrations`。
6. 点击 `新注册 / New registration`。

### 第二步：创建应用

在 `New registration` 页面里按下面填：

| 页面字段 | 你该怎么填 |
| --- | --- |
| Name | 你自己起，例如 `imgbed-onedrive` |
| Supported account types | 按下面表格选 |
| Redirect URI 类型 | `Web` |
| Redirect URI | `https://你的域名/api/oauth/onedrive/callback` |

账号类型怎么选：

| 你的场景 | Supported account types 选什么 |
| --- | --- |
| 个人 OneDrive | 选个人账号那一项 |
| 个人号和组织号都想支持 | 选同时支持个人号和组织号那一项 |
| 只给公司 / 学校 OneDrive 用 | 选组织账号那一项 |

填完后点击注册

![创建 OneDrive 应用](../../image/upload/onedrive/添加应用程序注册.png)


### 第三步：记录应用信息

应用创建成功后，在概览页先记下这两个值：

| 微软后台字段名 | 后面填到哪里 |
| --- | --- |
| `Application (client) ID` | 系统里的 `Client ID` |
| `Directory (tenant) ID` | 组织账号场景下的 `Tenant ID` |

![查看应用程序 ID 和目录租户 ID](../../image/upload/onedrive/应用程序ID和目录租户ID位.png)


### 第四步：创建 Client Secret

1. 进入 `Certificates & secrets`。
2. 点击 `New client secret`。
3. 名称随便起。
4. 过期时间按自己习惯选。
5. 创建后立刻复制 `Value`。

![保存客户端密码值](../../image/upload/onedrive/保存客户端密码值.png)


### 第五步：添加权限

1. 进入 `API permissions`。
2. 点击 `Add a permission`。
3. 选择 `Microsoft Graph`。
4. 选择 `Delegated permissions`。
5. 添加下面这些权限：

| 权限 | 作用 |
| --- | --- |
| `Files.ReadWrite.All` | 上传、建目录、删文件 |
| `offline_access` | 获取 `Refresh Token` |
| `User.Read` | 读取账号信息和容量信息 |

### 第六步：回系统里填写 OneDrive 渠道

在上传设置里选择 `OneDrive` 后，按下面这套填：

| 页面字段 | 你该填什么 |
| --- | --- |
| 渠道名称 | 你自己起，例如 `OneDrive主账号` |
| Client ID | 微软后台的 `Application (client) ID` |
| Client Secret | 刚才复制的 `Client Secret Value` |
| Tenant ID | 按下面表格填 |
| Refresh Token | 先留空 |
| 根目录 | 可选，默认 `imgbed` |
| 备注 | 可选 |

![回系统填写 OneDrive 渠道配置](../../image/upload/onedrive/添加新渠道配置.png)

`Tenant ID` 填法：

| 你刚才选的账号类型 | 系统里的 `Tenant ID` 填什么 |
| --- | --- |
| 个人账号 | `consumers` |
| 个人号 + 组织号 | `common` |
| 只给当前组织账号 | `Directory (tenant) ID` |

### 第七步：获取 Refresh Token

1. 在系统里点 `获取令牌`。
2. 登录你要绑定的 Microsoft 账号。
3. 按提示授权。
4. 授权成功后，回调页会显示一串 `Refresh Token`。
5. 复制它。
6. 回到系统，粘贴到 `Refresh Token` 输入框里。

![复制刷新令牌](../../image/upload/onedrive/复制刷新令牌.png)

### 第九步：保存渠道配置

字段填好后直接点击保存。


## 渠道流程速查

```text
打开 portal.azure.com
-> 搜索 Microsoft Entra ID
-> 进入 应用注册 / App registrations
-> 新注册应用
-> 填 Name / Supported account types / Web 回调地址
-> Register
-> 复制 Application (client) ID
-> 去 Authentication 检查回调地址
-> 去 Certificates & secrets 创建 Client Secret
-> 去 API permissions 添加权限
-> 回系统填 Client ID / Client Secret / Tenant ID
-> 点击 获取令牌
-> 复制回调页里的 Refresh Token
-> 粘回系统保存
```

## 参考资料

1. Microsoft Entra 应用注册：https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app
2. Microsoft 身份平台授权码流程：https://learn.microsoft.com/en-us/entra/identity-platform/v2-oauth2-auth-code-flow
3. Microsoft Graph 用户身份验证：https://learn.microsoft.com/en-us/graph/auth-v2-user
