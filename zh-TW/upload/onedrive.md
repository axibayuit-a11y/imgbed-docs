# 新增 OneDrive 渠道

## 新增前要準備什麼

| 需要準備 | 用途 |
| --- | --- |
| Microsoft 帳號 | 登入 Microsoft 後台並授權 OneDrive |
| ImgBed 網域 | 設定回呼網址 |
| 一個 App registration | 取得 `Client ID` 和 `Client Secret` |
| OneDrive 帳號 | 實際存放檔案 |

## 新增步驟

### 第一步：進入 Microsoft Entra ID

1. 打開 `portal.azure.com`。
2. 上方搜尋 `Microsoft Entra ID`。
3. 如果下拉選單沒有目標入口，就點：

```text
繼續在 Microsoft Entra ID 中搜尋
```

4. 進入 `Microsoft Entra ID`。
5. 打開 `App registrations`。
6. 點 `New registration`。

### 第二步：建立應用程式

在 `New registration` 頁面填：

| 頁面欄位 | 填寫方式 |
| --- | --- |
| Name | 自己取，例如 `imgbed-onedrive` |
| Supported account types | 依下表選 |
| Redirect URI 類型 | `Web` |
| Redirect URI | `https://你的網域/api/oauth/onedrive/callback` |

帳號類型建議：

| 使用情境 | Supported account types |
| --- | --- |
| 個人 OneDrive | 選個人 Microsoft 帳號 |
| 個人與組織帳號都要支援 | 選同時支援個人和組織帳號 |
| 只給公司 / 學校 OneDrive 用 | 選組織帳號 |

填完後按註冊。

![建立 OneDrive 應用](../../image/upload/onedrive/添加应用程序注册.png)

### 第三步：記下應用程式資訊

| Microsoft 後台欄位 | ImgBed 欄位 |
| --- | --- |
| `Application (client) ID` | `Client ID` |
| `Directory (tenant) ID` | 組織帳號情境下的 `Tenant ID` |

![查看 Application ID 和 Tenant ID](../../image/upload/onedrive/应用程序ID和目录租户ID位.png)

### 第四步：建立 Client Secret

1. 進入 `Certificates & secrets`。
2. 點 `New client secret`。
3. 名稱自己取。
4. 到期時間依需求選。
5. 建立後立刻複製 `Value`。

![保存 Client Secret Value](../../image/upload/onedrive/保存客户端密码值.png)

### 第五步：新增權限

1. 進入 `API permissions`。
2. 點 `Add a permission`。
3. 選 `Microsoft Graph`。
4. 選 `Delegated permissions`。
5. 加入：

| 權限 | 作用 |
| --- | --- |
| `Files.ReadWrite.All` | 上傳、建目錄、刪檔 |
| `offline_access` | 取得 Refresh Token |
| `User.Read` | 讀取帳號資訊和容量 |

### 第六步：回 ImgBed 填寫 OneDrive 渠道

| 頁面欄位 | 填寫內容 |
| --- | --- |
| 渠道名稱 | 自己取，例如 `OneDrive主帳號` |
| Client ID | Microsoft 的 `Application (client) ID` |
| Client Secret | 剛才複製的 Client Secret Value |
| Tenant ID | 依下表填 |
| Refresh Token | 先留空 |
| 根目錄 | 選填，預設 `imgbed` |
| 備註 | 選填 |

![回 ImgBed 填寫 OneDrive 設定](../../image/upload/onedrive/添加新渠道配置.png)

`Tenant ID` 填法：

| 你選的帳號類型 | ImgBed 裡的 `Tenant ID` |
| --- | --- |
| 個人帳號 | `consumers` |
| 個人 + 組織帳號 | `common` |
| 只給目前組織 | `Directory (tenant) ID` |

### 第七步：取得 Refresh Token

1. 在 ImgBed 點「取得 Token」。
2. 登入要綁定的 Microsoft 帳號。
3. 依提示授權。
4. 成功後，回呼頁會顯示 `Refresh Token`。
5. 複製它。
6. 回到 ImgBed，貼到 `Refresh Token` 欄位。

![複製 Refresh Token](../../image/upload/onedrive/复制刷新令牌.png)

### 第八步：儲存渠道

欄位填好後直接儲存。

## 快速流程

```text
打開 portal.azure.com
-> 搜尋 Microsoft Entra ID
-> 進入 App registrations
-> New registration
-> 填 Name / Supported account types / Web 回呼網址
-> 複製 Application (client) ID
-> 建立 Client Secret
-> 新增 Microsoft Graph 權限
-> 回 ImgBed 填 Client ID / Client Secret / Tenant ID
-> 點取得 Token
-> 複製 Refresh Token
-> 貼回 ImgBed 儲存
```
