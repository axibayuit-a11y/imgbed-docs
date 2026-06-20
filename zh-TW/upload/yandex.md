# 新增 Yandex 渠道

## 新增前要準備什麼

| 需要準備 | 用途 |
| --- | --- |
| Yandex 帳號 | 登入並授權 Yandex Disk |
| Yandex OAuth App | 取得 `Client ID` 和 `Client Secret` |
| 目前 ImgBed 網域 | 設定授權回呼網址 |
| 可用的 Yandex Disk 空間 | 實際存放檔案 |

## 新增步驟

### 第一步：建立 Yandex OAuth App

1. 打開 Yandex OAuth 建立應用頁：

```text
https://oauth.yandex.com/client/new
```

2. 如果先跳到登入頁，先登入 Yandex 帳號。
3. 建立新 App。
4. 取一個自己看得懂的名稱，例如 `imgbed-yandex`。
5. 在設定裡找到回呼網址。
6. 填：

```text
https://你的網域/api/oauth/yandex/callback
```

### 第二步：確認授權範圍

目前 ImgBed 的 Yandex 整合建議保留 `Yandex.Disk REST API` 下這 4 個權限：

| 權限 | 作用 |
| --- | --- |
| `cloud_api:disk.app_folder` | 讓系統把檔案存到 App 目錄 |
| `cloud_api:disk.read` | 讀取檔案與下載連結 |
| `cloud_api:disk.write` | 上傳檔案、建目錄、刪檔 |
| `Access to information about Yandex.Disk` | 讀取磁碟容量、已用空間等資訊 |

如果也看到 `Yandex ID API` 底下的姓名、Email 權限，可以視需求保留；核心上傳、下載、刪除、查容量主要依賴上面 4 個 Disk 權限。

![設定 Yandex Disk 權限](../../image/upload/yandex/dataaccess配置软盘权限.png)

### 第三步：記下 App 資訊

| Yandex 後台欄位 | ImgBed 欄位 |
| --- | --- |
| `Client ID` | `Client ID` |
| `Client Secret` | `Client Secret` |

![記錄 Client ID 和 Secret](../../image/upload/yandex/记录客户端id和secret.png)

### 第四步：回 ImgBed 填寫 Yandex 渠道

| 頁面欄位 | 填寫內容 |
| --- | --- |
| 渠道名稱 | 自己取，例如 `Yandex主帳號` |
| Client ID | Yandex App 的 `Client ID` |
| Client Secret | Yandex App 的 `Client Secret` |
| Refresh Token | 先留空 |
| 根目錄 | 選填，預設 `imgbed` |

![編輯渠道設定](../../image/upload/yandex/编辑配置渠道.png)

### 第五步：取得 Refresh Token

1. 在 ImgBed 點「取得 Token」。
2. 登入要綁定的 Yandex 帳號。
3. 依提示授權。
4. 授權成功後，回呼頁會顯示 `Refresh Token`。
5. 複製它。
6. 回到 ImgBed，貼到 `Refresh Token` 欄位。

![授權後複製 Refresh Token](../../image/upload/yandex/授权后复制刷新令牌.png)

### 第六步：儲存渠道

欄位填好後直接儲存。

## 快速流程

```text
打開 Yandex OAuth Console
-> 建立 App
-> 設定回呼 https://你的網域/api/oauth/yandex/callback
-> 確認 Disk 權限
-> 複製 Client ID 和 Client Secret
-> 回 ImgBed 填 Client ID / Client Secret
-> 點取得 Token
-> 複製 Refresh Token
-> 貼回 ImgBed 儲存
```
