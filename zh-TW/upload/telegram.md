# Telegram 渠道新增說明

## 新增前要準備什麼

| 需要準備 | 用途 |
| --- | --- |
| Telegram 帳號 | 用于建立機器人和頻道。 |
| `@BotFather` | 用于申請 Telegram 機器人。 |
| 一個頻道 | 作為 Telegram 存儲渠道使用。 |
| `@userinfobot` | 用于查詢頻道 `Chat ID`。 |

## 入口位置

1. 進入系統設定。
2. 打開上傳設定。
3. 點擊右上角“新增渠道”。
4. 選擇 `Telegram`。

## 欄位說明

| 欄位 | 作用 | 是否必填 |
| --- | --- | --- |
| 渠道名稱 | 用于區分當前渠道，例如“Telegram 主頻道”。 | 必填 |
| Active | 控制當前渠道是否啟用。 | 建議開啟 |
| Bot Token | Telegram 機器人令牌。 | 必填 |
| Session ID（Chat ID） | Telegram 頻道 ID。 | 必填 |
| Relay Proxy URL（可選） | 僅在訪問 Telegram 不穩定時使用，請填寫完整代理地址，包含 `https://`. | 選填 |
| Remark | 渠道備注資訊，便于後續管理。 | 選填 |

## 設定步驟

### 1. 建立 Telegram 機器人

1. 打開 Telegram，搜索 `@BotFather`。
2. 進入對話後點擊 `Start`。
3. 發送 `/newbot`。
4. 按提示填寫機器人名稱。
5. 按提示填寫機器人使用者名。使用者名通常需要以 `bot` 結尾。
6. 建立完成後，`@BotFather` 會返回一串機器人令牌。

這串令牌就是系統設定中需要填寫的 `Bot Token`。

![保存機器人令牌](../../image/upload/telegram/保存机器人令牌.png)

### 2. 建立頻道

1. 在 Telegram 中點擊“新建頻道”。
2. 填寫頻道名稱。
3. 完成頻道建立。

公開頻道和私有頻道都可以使用。

![新建頻道](../../image/upload/telegram/新建频道.png)

### 3. 將機器人加入頻道

1. 進入剛建立好的頻道。
2. 打開頻道設定。
3. 新增成員或管理員。
4. 搜索剛才建立的機器人使用者名。
5. 將機器人加入頻道。

建議直接授予機器人管理員權限，後續發圖和發檔案會更穩定。

![邀請機器人進頻道里](../../image/upload/telegram/邀请机器人进频道里.png)

### 4. 通過 `User Info - Get ID - IDbot` 獲取頻道 ID

1. 在 Telegram 中搜索 `@userinfobot`，其顯示名稱通常為 `User Info • Get ID • IDbot`。
2. 打開對話并點擊 `Start`。
3. 在 bot 提供的選項中點擊 `Channel`。
4. 在消息列表里，選擇對應頻道發送給 `@userinfobot`。
5. `@userinfobot` 返回結果後，複製其中 `Id: -100...` 這一串數字。

這串以 `-100` 開頭的數字，就是系統設定中需要填寫的 `Session ID（Chat ID）`。


![獲取頻道id](../../image/upload/telegram/获取频道id.png)

### 5. 在系統中填寫 Telegram 渠道

回到系統設定彈窗後，按下表填寫：

| 頁面欄位 | 填寫內容 |
| --- | --- |
| Channel Identifier | 自定義渠道名稱，例如 `Telegram主频道` |
| Active | 建議開啟 |
| Bot Token | 從 `@BotFather` 獲取的機器人令牌 |
| Session ID（Chat ID） | 從 `@userinfobot` 返回結果中複製的 `-100...` 數字 |
| Relay Proxy URL（可選） | 按需填寫，格式例如 `https://your-tg-proxy.example.com`. |
| Remark | 按需填寫 |

填寫完成後點擊保存。

![編輯設定](../../image/upload/telegram/编辑配置.png)

## 新增完成後怎么檢查

| 檢查項 | 檢查方式 |
| --- | --- |
| 渠道卡片是否出現 | 保存後，上傳設定頁面應顯示 Telegram 渠道卡片。 |
| 渠道是否能啟用 | 開關應可正常開啟。 |
| 設定資訊是否已保存 | 詳情頁應能看到 Bot Token 和 Chat ID 已寫入。 |
| 上傳是否正常 | 上傳一張測試圖片，確認圖片已進入目標 Telegram 頻道。 |

## 一句話流程速查

```text
Create a bot with @BotFather
-> Save the Bot Token
-> Create a Telegram channel
-> Add the bot to the channel and grant administrator permissions
-> Search for @userinfobot and choose Channel
-> Forward any message from the channel to @userinfobot
-> Copy the returned Id: -100...
-> Enter the Bot Token and Chat ID in ImgBed
-> Save and upload a test image
```
## 參考資料

1. Telegram 機器人介紹：https://core.telegram.org/bots
2. Telegram Bot API：https://core.telegram.org/bots/api
