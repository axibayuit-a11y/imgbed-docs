# Yandex 渠道新增說明

## 新增前要準備什麼

| 需要準備 | 用途 |
| --- | --- |
| 一個 Yandex 帳號 | 用來登入 Yandex 并授權 Yandex Disk |
| 一個 Yandex OAuth 應用 | 用來生成 `Client ID` 和 `Client Secret` |
| 當前圖床訪問域名 | 用來設定授權回調地址 |
| 一個可用的 Yandex Disk | 後面真正存圖用 |

## 新增步驟

### 第一步：建立 Yandex OAuth 應用

1. 打開 Yandex OAuth 建立應用直達地址：

```text
https://oauth.yandex.com/client/new
```

2. 如果頁面先跳到登入頁，先登入你的 Yandex 帳號。
2. 建立一個新應用。
3. 給應用起一個你自己能認出來的名字，例如 `imgbed-yandex`。
4. 在應用設定里找到回調地址相關設定。
5. 回調地址填：
```text
https://your-domain.com/api/oauth/yandex/callback
```

### 第二步：確認授權范圍

按當前專案真實邏輯，Yandex 這條線建議保留 `Yandex.Disk REST API` 下這 4 個權限：


| 權限 | 作用 |
| --- | --- |
| `cloud_api:disk.app_folder` | 讓系統把檔案存到應用目錄 |
| `cloud_api:disk.read` | 讀取檔案和下載連結 |
| `cloud_api:disk.write` | 上傳檔案、建目錄、刪檔案 |
| `Access to information about Yandex.Disk` | 讀取磁盤容量、已用空間等資訊 |


如果你還看到 `Yandex ID API` 下面的使用者名、郵箱權限：

| 頁面上的權限文案 | 建議 |
| --- | --- |
| `Access to username, first name and surname, gender` | 可選 |
| `Access to email address` | 可選 |

當前專案核心上傳、下載、刪圖、查容量，主要依賴的是上面那 4 個 `Yandex.Disk REST API` 權限。

![設定 Yandex Disk 權限](../../image/upload/yandex/dataaccess配置软盘权限.png)

### 第三步：記錄應用資訊

應用建立完成後，記下這兩個值：

| Yandex 後台欄位 | 後面填到哪里 |
| --- | --- |
| `Client ID` | 系統里的 `Client ID` |
| `Client Secret` | 系統里的 `Client Secret` |

![記錄客戶端 ID 和 Secret](../../image/upload/yandex/记录客户端id和secret.png)

### 第四步：回系統里填寫 Yandex 渠道

在上傳設定里選擇 `Yandex` 後，按下面這套填：

| 頁面欄位 | 你該填什麼 |
| --- | --- |
| 渠道名稱 | 你自己起，例如 `Yandex主账号` |
| Client ID | 剛才 Yandex 應用的 `Client ID` |
| Client Secret | 剛才 Yandex 應用的 `Client Secret` |
| Refresh Token | 先留空 |
| 根目錄 | 可選，預設 `imgbed` |

![編輯設定渠道](../../image/upload/yandex/编辑配置渠道.png)


### 第五步：獲取 Refresh Token

1. 在系統里點 `获取令牌`。
2. 登入你要綁定的 Yandex 帳號。
3. 按提示授權。
4. 授權成功後，回調頁會顯示一串 `Refresh Token`。
5. 複製它。
6. 回到系統，貼上到 `Refresh Token` 輸入框里。

![授權後複製Refresh Token](../../image/upload/yandex/授权后复制刷新令牌.png)

### 第六步：保存渠道設定

欄位填好後直接點擊保存。

## 渠道流程速查

```text
Open Yandex OAuth Console
-> Create an app
-> Add https://your-domain.com/api/oauth/yandex/callback
-> Confirm Yandex Disk permissions
-> Copy Client ID and Client Secret
-> Fill Client ID / Client Secret into ImgBed
-> Click Get Token
-> Copy the Refresh Token from the callback page
-> Paste it back into ImgBed and save
```

## 參考資料

1. Yandex 注冊應用：https://yandex.com/dev/id/doc/en/register-client
2. Yandex 通過 URL 獲取授權碼：https://yandex.com/dev/id/doc/en/codes/code-url
3. Yandex OAuth 令牌接口：https://yandex.com/dev/id/doc/en/tokens/token
