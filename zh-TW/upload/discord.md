# 新增 Discord 渠道

## 新增前要準備什麼

| 需要準備 | 用途 |
| --- | --- |
| Discord 帳號 | 建立伺服器與應用程式 |
| Discord Bot | 取得 Bot Token |
| Discord 伺服器與頻道 | 實際存放檔案 |
| 頻道 ID | ImgBed 上傳時指定目標頻道 |

## 新增步驟

### 第一步：建立伺服器

如果還沒有可用伺服器，先在 Discord 建立一個專門存檔的伺服器。

![建立伺服器](../../image/upload/discord/创建服务器.png)

### 第二步：建立 Discord 應用與 Bot

1. 打開 Discord Developer Portal。
2. 建立一個新的 Application。
3. 進入 Bot 頁面。
4. 建立 Bot 並複製 Bot Token。

![查看 Bot Token](../../image/upload/discord/查看机器人令牌.png)

### 第三步：邀請 Bot 到伺服器

1. 在 OAuth2 / URL Generator 裡勾選 `bot`。
2. 勾選 Bot 需要的權限，至少要能傳送訊息、附加檔案、讀取頻道。
3. 用產生的邀請連結把 Bot 加到你的伺服器。

![勾選 Bot 權限](../../image/upload/discord/在oa2勾选机器人权限.png)

![邀請 Bot 到頻道](../../image/upload/discord/邀请机器人到频道.png)

### 第四步：取得頻道 ID

1. 在 Discord 設定裡開啟開發者模式。
2. 對目標頻道按右鍵。
3. 複製頻道 ID。

![開啟開發者模式](../../image/upload/discord/开启开发者权限.png)

![複製頻道 ID](../../image/upload/discord/复制群频道id.png)

### 第五步：回 ImgBed 填寫渠道

| 頁面欄位 | 填寫內容 |
| --- | --- |
| 渠道名稱 | 自己取，例如 `Discord主頻道` |
| Bot Token | Discord Bot Token |
| Channel ID | 目標頻道 ID |
| Relay Proxy URL | 選填，連線 Discord 不穩時使用 |
| 備註 | 選填 |

![新增 Discord 渠道](../../image/upload/discord/添加dc新渠道配置.png)

## 檢查方式

| 檢查項目 | 正常狀態 |
| --- | --- |
| Bot 是否在伺服器 | 成員列表裡看得到 Bot |
| Bot 是否有權限 | 能在目標頻道傳訊息並附加檔案 |
| Channel ID 是否正確 | 填的是頻道 ID，不是伺服器 ID |
| 測試上傳 | 上傳後 Discord 頻道裡會出現附件 |

## 快速流程

```text
建立 Discord 伺服器
-> 建立 Application / Bot
-> 複製 Bot Token
-> 用 OAuth2 邀請 Bot 到伺服器
-> 開啟開發者模式
-> 複製頻道 ID
-> 回 ImgBed 填 Token 和 Channel ID
-> 儲存並測試上傳
```
