# 新增 Telegram 渠道

## 新增前要準備什麼

| 需要準備 | 用途 |
| --- | --- |
| Telegram 帳號 | 用來建立 Bot 和儲存頻道 |
| Telegram Bot | 取得 `Bot Token` |
| Telegram 頻道 | 實際存放檔案 |
| 頻道 ID | ImgBed 上傳時要指定目標頻道 |

## 新增步驟

### 第一步：建立 Bot

1. 在 Telegram 搜尋 `@BotFather`。
2. 傳送 `/newbot`。
3. 依照提示輸入 Bot 顯示名稱和 username。
4. 建立完成後，BotFather 會給你一串 Token。
5. 複製這串 `Bot Token`。

![保存 Bot Token](../../image/upload/telegram/保存机器人令牌.png)

### 第二步：建立儲存頻道

1. 建立一個新的 Telegram Channel。
2. 名稱自己取，例如 `ImgBed Storage`。
3. 頻道可以是私有頻道。

![建立頻道](../../image/upload/telegram/新建频道.png)

### 第三步：把 Bot 加進頻道

1. 進入頻道設定。
2. 新增成員或管理員。
3. 搜尋剛才建立的 Bot。
4. 建議把 Bot 設成管理員，避免上傳權限不足。

![邀請 Bot 進頻道](../../image/upload/telegram/邀请机器人进频道里.png)

### 第四步：取得頻道 ID

可以透過 Telegram 的頻道資訊或相關工具取得 Chat ID。需要填到 ImgBed 的通常是以 `-100` 開頭的數字。

![取得頻道 ID](../../image/upload/telegram/获取频道id.png)

### 第五步：回 ImgBed 填寫渠道

在上傳設定裡選擇 `Telegram`：

| 頁面欄位 | 填寫內容 |
| --- | --- |
| 渠道名稱 | 自己取，例如 `Telegram主頻道` |
| Bot Token | BotFather 給你的 Token |
| Session ID / Chat ID | 以 `-100` 開頭的頻道 ID |
| Relay Proxy URL | 選填，Telegram 連線不穩時再填 |
| 備註 | 選填 |

![編輯設定](../../image/upload/telegram/编辑配置.png)

## 檢查方式

| 檢查項目 | 正常狀態 |
| --- | --- |
| Bot 權限 | Bot 在頻道內，且有發訊息 / 上傳檔案權限 |
| Chat ID | 填的是頻道 ID，不是個人帳號 ID |
| 測試上傳 | 上傳圖片後，頻道裡會出現檔案 |

## 常見問題

| 問題 | 處理方式 |
| --- | --- |
| 上傳失敗 | 檢查 Bot Token、Chat ID、Bot 是否在頻道裡 |
| 權限不足 | 把 Bot 設為頻道管理員 |
| 網路不穩 | 視情況設定 Relay Proxy URL |

## 快速流程

```text
找 BotFather
-> 建立 Bot
-> 複製 Bot Token
-> 建立 Telegram 頻道
-> 把 Bot 加入頻道並給權限
-> 取得 -100 開頭的 Chat ID
-> 回 ImgBed 填 Bot Token 和 Chat ID
-> 儲存並上傳測試圖片
```
