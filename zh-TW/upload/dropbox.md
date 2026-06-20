# 新增 Dropbox 渠道

## 新增前要準備什麼

| 需要準備 | 用途 |
| --- | --- |
| Dropbox 帳號 | 登入 Dropbox 並授權應用程式 |
| Dropbox App | 取得 `App Key` 和 `App Secret` |
| 目前 ImgBed 網域 | 設定 OAuth 回呼網址 |
| 可用的 Dropbox 空間 | 實際存放圖片 |

## 新增步驟

### 第一步：建立 Dropbox App

1. 打開 Dropbox App Console：

```text
https://www.dropbox.com/developers/apps
```

2. 建立新的 App。
3. 存取類型建議選：

```text
App folder
```

4. 替 App 取一個好辨識的名稱，例如 `imgbed-app`。
5. 建立完成後進入 App 詳情頁。

| 存取類型 | 建議 |
| --- | --- |
| `App folder` | 推薦，權限範圍剛好符合 ImgBed 使用情境 |
| `Full Dropbox` | 不建議，權限太大，目前沒有必要 |

![建立 Dropbox App](../../image/upload/dropbox/开发者创建应用.png)

### 第二步：設定回呼網址

在 Dropbox App 詳情頁找到 OAuth 或 Redirect URI 設定，加入：

```text
https://你的網域/api/oauth/dropbox/callback
```

如果你平常會從多個網域開後台，請把對應的回呼網址都加上。

![設定回呼網址](../../image/upload/dropbox/配置回调地址.png)

### 第三步：設定權限 Scopes

進入 `Permissions` 分頁，至少勾選：

| 權限 | 是否必要 | 用途 |
| --- | --- | --- |
| `account_info.read` | 必要 | 查詢帳號基本資訊和容量 |
| `files.metadata.read` | 必要 | 讀取檔案 / 目錄 metadata |
| `files.metadata.write` | 必要 | 建立目錄等 metadata 寫入 |
| `files.content.write` | 必要 | 上傳檔案，缺少會出現 `required scope 'files.content.write'` |
| `files.content.read` | 建議 | 下載、預覽、暫時連結等讀取能力 |

勾選後，請記得按頁面底部的 `Submit`。

![新增權限](../../image/upload/dropbox/添加对应的权限.png)

如果你後來修改了 Scopes，必須重新跑一次「取得 Token」流程。舊的 Refresh Token 不會自動取得新權限。

### 第四步：記下 App 資訊

| Dropbox 後台欄位 | ImgBed 欄位 |
| --- | --- |
| `App key` | `App Key` |
| `App secret` | `App Secret` |

### 第五步：回 ImgBed 填寫 Dropbox 渠道

| 頁面欄位 | 填寫內容 |
| --- | --- |
| 渠道名稱 | 自己取，例如 `Dropbox主帳號` |
| App Key | Dropbox App 的 `App key` |
| App Secret | Dropbox App 的 `App secret` |
| Refresh Token | 先留空，下一步取得 |
| 根目錄 | 選填，預設 `imgbed` |
| 備註 | 選填 |

![取得 Token](../../image/upload/dropbox/获取令牌.png)

### 第六步：取得 Refresh Token

1. 在 ImgBed 點「取得 Token」。
2. 登入要綁定的 Dropbox 帳號。
3. 依提示授權。
4. 成功後，回呼頁會顯示 `Refresh Token`。
5. 複製它。
6. 回到 ImgBed，貼到 `Refresh Token` 欄位。

![複製 Token](../../image/upload/dropbox/复制令牌.png)

## 新增完成後怎麼檢查

| 檢查項目 | 檢查方式 |
| --- | --- |
| 渠道卡片是否出現 | 儲存後頁面看得到 Dropbox 渠道 |
| 渠道是否能啟用 | 開關可以正常打開 |
| Token 是否已儲存 | 詳情頁看得到 Refresh Token 已保存 |
| 上傳是否正常 | 上傳測試圖後，Dropbox App 目錄出現檔案 |

如果開啟容量限制，可以點查詢額度。成功後卡片會顯示已用容量、總容量和更新時間。

![查詢額度成功](../../image/upload/dropbox/查询额度成功.png)

## 常見問題

| 問題 | 處理方式 |
| --- | --- |
| 系統提示設定不完整 | 檢查 `App Key`、`App Secret`、`Refresh Token` 是否都填了 |
| 授權成功但沒有 Refresh Token | 重新點「取得 Token」，確認走的是離線授權 |
| 上傳出現 `required scope 'files.content.write'` | 回 Dropbox 勾選 `files.content.write`，按 `Submit` 後重新取得 Refresh Token |
| 回呼失敗 | 確認回呼網址是 `https://你的網域/api/oauth/dropbox/callback` |
| 找不到檔案 | 確認 App 是用 `App folder` 模式建立 |

## 快速流程

```text
打開 Dropbox App Console
-> 建立 App
-> 存取類型選 App folder
-> 設定回呼 https://你的網域/api/oauth/dropbox/callback
-> Permissions 勾選必要 scopes
-> 按 Submit
-> 複製 App Key 和 App Secret
-> 回 ImgBed 填寫
-> 點取得 Token
-> 複製回呼頁的 Refresh Token
-> 貼回 ImgBed 儲存
```
