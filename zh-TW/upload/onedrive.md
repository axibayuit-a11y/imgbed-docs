# OneDrive 渠道新增說明

## 新增前要準備什麼

| 需要準備 | 用途 |
| --- | --- |
| Microsoft 帳號 | 用來登入微軟後台并授權 OneDrive |
| 圖床域名 | 用來填寫回調地址 |
| 一個應用注冊 | 用來生成 `Client ID` 和 `Client Secret` |
| OneDrive 帳號 | 後面真正存圖用 |

## 新增步驟

### 第一步：進入 Microsoft Entra ID

1. 打開 `portal.azure.com`。
2. 頂部搜索 `Microsoft Entra ID`。
3. 如果下拉里沒有目標入口，就點：

```text
Continue searching in Microsoft Entra ID
```

4. 進入 `Microsoft Entra ID`。
5. 打開 `应用注册 / App registrations`。
6. 點擊 `新注册 / New registration`。

### 第二步：建立應用

在 `New registration` 頁面里按下面填：

| 頁面欄位 | 你該怎么填 |
| --- | --- |
| Name | 你自己起，例如 `imgbed-onedrive` |
| Supported account types | 按下面表格選 |
| Redirect URI 類型 | `Web` |
| Redirect URI | `https://your-domain.com/api/oauth/onedrive/callback` |

帳號類型怎么選：

| 你的場景 | Supported account types 選什麼 |
| --- | --- |
| 個人 OneDrive | 選個人帳號那一項 |
| 個人號和組織號都想支援 | 選同時支援個人號和組織號那一項 |
| 只給公司 / 學校 OneDrive 用 | 選組織帳號那一項 |

填完後點擊注冊

![建立 OneDrive 應用](../../image/upload/onedrive/添加应用程序注册.png)


### 第三步：記錄應用資訊

應用建立成功後，在概覽頁先記下這兩個值：

| 微軟後台欄位名 | 後面填到哪里 |
| --- | --- |
| `Application (client) ID` | 系統里的 `Client ID` |
| `Directory (tenant) ID` | 組織帳號場景下的 `Tenant ID` |

![查看應用程序 ID 和目錄租戶 ID](../../image/upload/onedrive/应用程序ID和目录租户ID位.png)


### 第四步：建立 Client Secret

1. 進入 `Certificates & secrets`。
2. 點擊 `New client secret`。
3. 名稱隨便起。
4. 過期時間按自己習慣選。
5. 建立後立刻複製 `Value`。

![保存客戶端密碼值](../../image/upload/onedrive/保存客户端密码值.png)


### 第五步：新增權限

1. 進入 `API permissions`。
2. 點擊 `Add a permission`。
3. 選擇 `Microsoft Graph`。
4. 選擇 `Delegated permissions`。
5. 新增下面這些權限：

| 權限 | 作用 |
| --- | --- |
| `Files.ReadWrite.All` | 上傳、建目錄、刪檔案 |
| `offline_access` | 獲取 `Refresh Token` |
| `User.Read` | 讀取帳號資訊和容量資訊 |

### 第六步：回系統里填寫 OneDrive 渠道

在上傳設定里選擇 `OneDrive` 後，按下面這套填：

| 頁面欄位 | 你該填什麼 |
| --- | --- |
| 渠道名稱 | 你自己起，例如 `OneDrive主账号` |
| Client ID | 微軟後台的 `Application (client) ID` |
| Client Secret | 剛才複製的 `Client Secret Value` |
| Tenant ID | 按下面表格填 |
| Refresh Token | 先留空 |
| 根目錄 | 可選，預設 `imgbed` |
| 備注 | 可選 |

![回系統填寫 OneDrive 渠道設定](../../image/upload/onedrive/添加新渠道配置.png)

`Tenant ID` 填法：

| 你剛才選的帳號類型 | 系統里的 `Tenant ID` 填什麼 |
| --- | --- |
| 個人帳號 | `consumers` |
| 個人號 + 組織號 | `common` |
| 只給當前組織帳號 | `Directory (tenant) ID` |

### 第七步：獲取 Refresh Token

1. 在系統里點 `获取令牌`。
2. 登入你要綁定的 Microsoft 帳號。
3. 按提示授權。
4. 授權成功後，回調頁會顯示一串 `Refresh Token`。
5. 複製它。
6. 回到系統，貼上到 `Refresh Token` 輸入框里。

![複製Refresh Token](../../image/upload/onedrive/复制刷新令牌.png)

### 第九步：保存渠道設定

欄位填好後直接點擊保存。


## 渠道流程速查

```text
Open portal.azure.com
-> Search for Microsoft Entra ID
-> Open App registrations
-> Register a new app
-> Fill Name / Supported account types / Web redirect URI
-> Register
-> Copy Application (client) ID
-> Check the callback URL in Authentication
-> Create a Client Secret in Certificates & secrets
-> Add permissions in API permissions
-> Fill Client ID / Client Secret / Tenant ID into ImgBed
-> Click Get Token
-> Copy the Refresh Token from the callback page
-> Paste it back into ImgBed and save
```

## 參考資料

1. Microsoft Entra 應用注冊：https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app
2. Microsoft 身份平臺授權碼流程：https://learn.microsoft.com/en-us/entra/identity-platform/v2-oauth2-auth-code-flow
3. Microsoft Graph 使用者身份驗證：https://learn.microsoft.com/en-us/graph/auth-v2-user
