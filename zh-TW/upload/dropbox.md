# Dropbox 渠道新增說明

## 新增前要準備什麼

| 需要準備 | 用途 |
| --- | --- |
| 一個 Dropbox 帳號 | 用來登入 Dropbox 并授權應用 |
| 一個 Dropbox 應用 | 用來生成 `App Key` 和 `App Secret` |
| 當前圖床訪問域名 | 用來設定授權回調地址 |
| 一個可用的 Dropbox 空間 | 後面真正存圖用 |

## 新增步驟

### 第一步：建立 Dropbox 應用

1. 打開 Dropbox App Console：

```text
https://www.dropbox.com/developers/apps
```

2. 點擊建立新應用。
3. 訪問類型建議選：

```text
App folder
```

4. 給應用起一個你自己能認出來的名字，例如 `imgbed-app`。
5. 建立完成後進入應用詳情頁。

這一步要特別注意：

| 訪問類型 | 建議 |
| --- | --- |
| `App folder` | 推薦，和當前專案最匹配 |
| `Full Dropbox` | 不建議，權限更大，當前專案沒必要 |

![開發者建立應用](../../image/upload/dropbox/开发者创建应用.png)

### 第二步：設定回調地址

在 Dropbox 應用詳情頁里找到 OAuth 或 Redirect URI 設定，填下面這個地址：

```text
https://your-domain.com/api/oauth/dropbox/callback
```

如果你平時會從多個域名打開後台，就把多個域名對應的回調都加上。

![設定回調地址](../../image/upload/dropbox/配置回调地址.png)

### 第三步：設定應用權限（Scopes）

進入應用詳情頁的 `Permissions` 標簽頁，至少勾選下面這些權限：

| 權限 | 是否必須 | 用途 |
| --- | --- | --- |
| `account_info.read` | 必須 | 查詢帳號基礎資訊、容量資訊 |
| `files.metadata.read` | 必須 | 讀取檔案/目錄元數據（用于路徑檢查） |
| `files.metadata.write` | 必須 | 建立目錄等元數據寫操作 |
| `files.content.write` | 必須 | 上傳檔案（缺少會報 `required scope 'files.content.write'`） |
| `files.content.read` | 建議 | 下載、預覽、臨時直鏈等讀檔案能力 |

勾選後點擊頁面底部 `Submit` 提交權限變更。

![新增對應的權限](../../image/upload/dropbox/添加对应的权限.png)

重要說明：

| 場景 | 處理方式 |
| --- | --- |
| 你修改了 Scopes | 必須重新走一次“獲取令牌”流程，拿新的 `Refresh Token` |
| 沒有重新授權 | 舊 token 不會自動獲得新權限，上傳仍會失敗 |

### 第四步：記錄應用資訊

應用建立完成後，記下這兩個值：

| Dropbox 後台欄位 | 後面填到哪里 |
| --- | --- |
| `App key` | 系統里的 `App Key` |
| `App secret` | 系統里的 `App Secret` |

### 第五步：回系統里填寫 Dropbox 渠道

在上傳設定里選擇 `Dropbox` 後，按下面這套填：

| 頁面欄位 | 你該填什麼 |
| --- | --- |
| 渠道名稱 | 你自己起，例如 `Dropbox主账号` |
| App Key | 剛才 Dropbox 應用的 `App key` |
| App Secret | 剛才 Dropbox 應用的 `App secret` |
| Refresh Token | 先留空 |
| 根目錄 | 可選，預設 `imgbed` |
| 備注 | 可選 |

![獲取令牌](../../image/upload/dropbox/获取令牌.png)

### 第六步：獲取 Refresh Token

1. 在系統里點 `获取令牌`。
2. 登入你要綁定的 Dropbox 帳號。
3. 按提示授權。
4. 授權成功後，回調頁會顯示一串 `Refresh Token`。
5. 複製它。
6. 回到系統，貼上到 `Refresh Token` 輸入框里。

![複製令牌](../../image/upload/dropbox/复制令牌.png)

## 新增完成後怎么檢查

| 檢查項 | 檢查方式 |
| --- | --- |
| 渠道卡片是否出現 | 保存後頁面里能看到 Dropbox 渠道 |
| 渠道是否能啟用 | 開關能正常打開 |
| 令牌是否已寫入 | 詳情頁能看到 `Refresh Token` 已保存 |
| 上傳是否正常 | 上傳測試圖後，Dropbox 應用目錄里出現對應檔案 |

如果開啟了容量限制，可以點擊查詢額度。查詢成功後，卡片會顯示已用容量、總容量和更新時間。

![查詢額度成功](../../image/upload/dropbox/查询额度成功.png)

## 常見問題

| 問題 | 處理辦法 |
| --- | --- |
| 系統提示設定不完整 | 檢查 `App Key`、`App Secret`、`Refresh Token` 是否都填了 |
| 授權成功但沒拿到 `Refresh Token` | 重新點一次 `获取令牌`，確認走的是離線授權 |
| 上傳時報 `required scope 'files.content.write'` | 回 Dropbox `Permissions` 勾選 `files.content.write`，點 `Submit` 後重新獲取 `Refresh Token` |
| 回調失敗 | 檢查回調地址是否是 `https://your-domain.com/api/oauth/dropbox/callback`. |
| 檔案找不到 | 確認 Dropbox 應用是不是按 `App folder` 模式建立的 |

## 渠道流程速查

```text
Open Dropbox App Console
-> Create an app
-> Choose App folder access
-> Add https://your-domain.com/api/oauth/dropbox/callback
-> Enable account_info.read / files.metadata.read / files.metadata.write / files.content.write
-> Optionally enable files.content.read
-> Click Submit
-> Copy App Key and App Secret
-> Fill them into ImgBed
-> Click Get Token
-> Copy the Refresh Token from the callback page
-> Paste it back into ImgBed and save
```

## 參考資料

1. Dropbox App Console：https://www.dropbox.com/developers/apps
2. Dropbox OAuth Guide：https://developers.dropbox.com/oauth-guide
3. Dropbox Developer Guide：https://www.dropbox.com/developers/reference/developer-guide
