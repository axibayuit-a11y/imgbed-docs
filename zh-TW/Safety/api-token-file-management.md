# API Token 檔案管理

API Token 檔案管理適合給腳本、自動化任務和第三方管理面板使用。它使用 `manage` 權限，可以在不打開後台頁面的情況下編輯檔案資訊、移動檔案、重新命名檔案、建立目錄佔位檔案、調整檔案標籤和名單狀態，也可以停用或恢復某個上傳 IP，並建立或刪除短期上傳 Token。

這個腳本只處理檔案管理和使用者管理裡的輕量管理動作。上傳、列出、刪除、上傳設定、站台設定和聯盟關係仍然使用各自的專用腳本。

![編輯 API Token](../../image/Safety/apitoken/编辑管理权限api.png)

## 準備工作

進入後台後，打開：

系統設定 → 安全設定 → API Token

建立或編輯 API Token 時，請確認這個 Token 允許管理。`manage` 權限可以修改檔案狀態、使用者上傳狀態，並建立短期上傳 Token，建議只發給可信任的腳本或可信任使用者。

檔案管理腳本裡的寫入操作預設都是預覽模式，不會真正儲存。確認預覽內容無誤後，再加上 `--apply` 執行寫入。

也可以把 Token 放到環境變數裡：

```powershell
$env:IMGBED_API_TOKEN="your API Token"
```

## 下載腳本

| 腳本 | 用途 |
| --- | --- |
| <a href="/tools/imgbed-token-manage.mjs" download>檔案管理腳本</a> | 檔案中繼資料、審查標籤、檔案標籤、名單狀態、移動、重新命名、建立資料夾、IP 停用/恢復、短期上傳 Token 建立和刪除 |

執行腳本需要本機安裝 Node.js 18 或更高版本。

## 功能邊界

| 能力 | 腳本 | 權限 |
| --- | --- | --- |
| 上傳檔案 | `imgbed-token-single-upload.mjs` / `imgbed-token-chunk-upload.mjs` | `upload` |
| 列出檔案、篩選檔案、讀取使用者統計 | `imgbed-token-list.mjs` | `list` |
| 刪除明確指定的檔案 | `imgbed-token-delete.mjs` | `delete` |
| 編輯檔案資訊、標籤、名單、移動、重新命名、建立資料夾、停用 IP、建立或刪除短期上傳 Token | `imgbed-token-manage.mjs` | `manage` |
| 編輯上傳渠道、安全設定、頁面設定、其他設定、聯盟關係 | 設定管理相關腳本 | `manage` |

`imgbed-token-manage.mjs` 不會上傳檔案、列出檔案或刪除檔案。需要查找 `fileId` 時，先用列出腳本篩選檔案；需要刪除檔案時，再把明確的 `fileId` 交給刪除腳本。

## 通用參數

| 參數 | 必填 | 說明 |
| --- | --- | --- |
| `--base-url <url>` | 是 | 圖床站台位址，例如 `https://image.ai6.me` |
| `--token <token>` | 是 | API Token；也可以使用 `IMGBED_API_TOKEN` 環境變數 |
| `--retries <n>` | 否 | 暫時失敗重試次數，預設 `3` |
| `--timeout-ms <n>` | 否 | 單個請求逾時時間，預設 `180000` |
| `--output <pretty\|json>` | 否 | 輸出格式，預設 `pretty`；程式呼叫建議使用 `json` |
| `--save-response <path>` | 否 | 把最終結果儲存成 JSON 檔案 |
| `--batch-size <n>` | 否 | 批次動作每個請求處理的數量，預設 `15`，最大 `15` |
| `--apply` | 否 | 真正執行寫入；不加時只預覽 |
| `-h` / `--help` | 否 | 查看腳本說明 |

## 先確認 fileId

檔案管理腳本多數動作都需要 `fileId`。可以先用列出腳本查詢：

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --dir "test4" `
  --count 10 `
  --output json
```

返回結果裡的 `name` 通常就是可以傳給檔案管理腳本的 `fileId`。

## 檔案中繼資料

檔案中繼資料用於修改後台檔案管理裡顯示的檔名和讀取來源。

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-metadata `
  --file-id "photos/2026/a.jpg" `
  --file-name "cover.jpg" `
  --read-source backup
```

確認預覽結果無誤後再儲存：

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-metadata `
  --file-id "photos/2026/a.jpg" `
  --file-name "cover.jpg" `
  --read-source backup `
  --apply
```

### 檔案中繼資料參數

| 參數 | 說明 |
| --- | --- |
| `--set-metadata` | 修改單一檔案的中繼資料 |
| `--file-id <id>` | 要修改的檔案 ID |
| `--file-name <name>` | 新的後台顯示名稱 |
| `--read-source <primary\|backup>` | 讀取來源，`primary` 為主來源，`backup` 為備份來源 |

`--file-name` 和 `--read-source` 至少傳一個。

## 審查標籤

審查標籤對應檔案的年齡分級。可以先讀取目前標籤，再進行修改。

讀取審查標籤：

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-label `
  --file-id "photos/2026/a.jpg"
```

設定審查標籤：

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-label `
  --file-id "photos/2026/a.jpg" `
  --label r12 `
  --apply
```

### 審查標籤參數

| 參數 | 說明 |
| --- | --- |
| `--get-label` | 讀取單一檔案的審查標籤 |
| `--set-label` | 修改單一檔案的審查標籤 |
| `--file-id <id>` | 檔案 ID |
| `--label <value>` | 標籤值：`all-ages`、`r12`、`r16`、`r18`、`None` |

## 檔案標籤

檔案標籤用於給檔案附加可檢索的業務標籤。腳本支援讀取、覆蓋、追加、移除，也支援批次處理多個檔案。

讀取檔案標籤：

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-tags `
  --file-id "photos/2026/a.jpg"
```

追加標籤：

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --add-tags `
  --file-id "photos/2026/a.jpg" `
  --tag "cover" `
  --tag "2026" `
  --apply
```

移除標籤：

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --remove-tags `
  --file-id "photos/2026/a.jpg" `
  --tag "cover" `
  --apply
```

覆蓋標籤：

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-tags `
  --file-id "photos/2026/a.jpg" `
  --tag "archive" `
  --tag "public" `
  --apply
```

批次新增標籤：

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --batch-tags `
  --file-id "photos/2026/a.jpg" `
  --file-id "photos/2026/b.jpg" `
  --tag-action add `
  --tag "batch-test" `
  --apply
```

### 檔案標籤參數

| 參數 | 說明 |
| --- | --- |
| `--get-tags` | 讀取單一檔案標籤 |
| `--set-tags` | 覆蓋單一檔案標籤 |
| `--add-tags` | 給單一檔案追加標籤 |
| `--remove-tags` | 從單一檔案移除標籤 |
| `--batch-tags` | 批次設定、追加或移除標籤 |
| `--file-id <id>` | 檔案 ID；批次動作可重複傳多個 |
| `--tag <tag>` | 標籤值，可重複傳多個 |
| `--tags-json <path>` | 從 JSON 檔案讀取標籤陣列 |
| `--tag-action <set\|add\|remove>` | 批次標籤動作 |

`--tags-json` 檔案內容示例：

```json
["cover", "2026", "public"]
```

## 黑白名單狀態

名單狀態決定檔案在公共存取模式下的存取控制行為。可以單一修改，也可以批次修改。

設定單一檔案為白名單：

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-list-type `
  --file-id "photos/2026/a.jpg" `
  --list-type White `
  --apply
```

批次加入黑名單：

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --batch-list-type `
  --file-id "photos/2026/a.jpg" `
  --file-id "photos/2026/b.jpg" `
  --list-type Block `
  --apply
```

恢復預設名單狀態：

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-list-type `
  --file-id "photos/2026/a.jpg" `
  --list-type None `
  --apply
```

### 黑白名單參數

| 參數 | 說明 |
| --- | --- |
| `--set-list-type` | 修改單一檔案名單狀態 |
| `--batch-list-type` | 批次修改檔案名單狀態，單次請求最多 `15` 個檔案 |
| `--file-id <id>` | 檔案 ID；批次動作可重複傳多個 |
| `--list-type <None\|White\|Block>` | `None` 為預設狀態，`White` 為白名單，`Block` 為黑名單 |

## 移動檔案

移動檔案會把一個或多個檔案移動到目標目錄。後端單次請求最多處理 `15` 個檔案，腳本會依照 `--batch-size` 自動拆成多個請求順序執行。

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --move `
  --file-id "photos/2026/a.jpg" `
  --file-id "photos/2026/b.jpg" `
  --target-path "archive/2026" `
  --apply
```

### 移動參數

| 參數 | 說明 |
| --- | --- |
| `--move` | 移動檔案 |
| `--file-id <id>` | 要移動的檔案 ID，可重複傳多個 |
| `--target-path <dir>` | 目標目錄 |
| `--batch-size <n>` | 每個請求移動的檔案數，預設 `15`，最大 `15` |

## 重新命名或改路徑

重新命名使用明確的舊檔案 ID 和新檔案 ID。新檔案 ID 可以只改檔名，也可以同時改變目錄。

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --rename `
  --old-file-id "photos/2026/a.jpg" `
  --new-file-id "photos/2026/a-renamed.jpg" `
  --apply
```

批次重新命名時，可以重複傳 `--old-file-id` 和 `--new-file-id`：

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --rename `
  --old-file-id "photos/2026/a.jpg" `
  --new-file-id "archive/2026/a.jpg" `
  --old-file-id "photos/2026/b.jpg" `
  --new-file-id "archive/2026/b.jpg" `
  --apply
```

也可以把映射寫到 JSON 檔案：

```json
[
  {
    "oldFileId": "photos/2026/a.jpg",
    "newFileId": "archive/2026/a.jpg"
  },
  {
    "oldFileId": "photos/2026/b.jpg",
    "newFileId": "archive/2026/b.jpg"
  }
]
```

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --rename `
  --items-json ".\rename-items.json" `
  --apply
```

### 重新命名參數

| 參數 | 說明 |
| --- | --- |
| `--rename` | 重新命名或依明確映射改路徑 |
| `--old-file-id <id>` | 原檔案 ID，可重複傳多個 |
| `--new-file-id <id>` | 新檔案 ID，可重複傳多個，數量必須和 `--old-file-id` 一致 |
| `--items-json <path>` | JSON 陣列，元素為 `{ "oldFileId": "...", "newFileId": "..." }` |
| `--batch-size <n>` | 每個請求處理的重新命名數量，預設 `15`，最大 `15` |

## 建立資料夾

圖床的目錄來自檔案路徑，本身沒有真正的空目錄。腳本建立資料夾時，會在目標目錄下建立一個佔位檔案 `0.md`，讓後台檔案管理和目錄統計可以顯示這個目錄。

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --create-folder `
  --parent-directory "photos" `
  --folder-name "2026" `
  --apply
```

### 建立資料夾參數

| 參數 | 說明 |
| --- | --- |
| `--create-folder` | 建立目錄佔位檔案 |
| `--parent-directory <dir>` | 父目錄；根目錄可傳空字串 |
| `--folder-name <name>` | 新資料夾名稱 |

## 上傳 IP 停用和恢復

可以透過管理權限把某個 IP 加入禁止上傳清單，也可以把它移出禁止上傳清單。這個動作會影響該 IP 後續上傳，不會刪除這個 IP 已經上傳的檔案。

停用某個上傳 IP：

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --block-ip "67.159.48.149" `
  --apply
```

恢復某個上傳 IP：

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --allow-ip "67.159.48.149" `
  --apply
```

查看目前禁止上傳 IP 清單：

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --blocked-ips
```

### IP 管理參數

| 參數 | 說明 |
| --- | --- |
| `--block-ip <ip>` | 加入禁止上傳清單 |
| `--allow-ip <ip>` | 從禁止上傳清單移除 |

## 建立和刪除短期上傳 Token

管理權限可以建立短期的上傳專用 Token。這個 Token 固定只有 `upload` 權限，`autoDelete` 固定為 `true`，過期時間最長 `1` 天。

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --create-upload-token `
  --name "Temporary Upload Token" `
  --owner "upload-bot" `
  --default-upload-channel telegram `
  --expires-in-minutes 20 `
  --apply `
  --output json
```

也可以直接傳毫秒時間戳：

```powershell
$expiresAt = [DateTimeOffset]::UtcNow.AddHours(12).ToUnixTimeMilliseconds()

node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --create-upload-token `
  --name "Upload Token valid for one day" `
  --owner "upload-bot" `
  --default-upload-channel telegram `
  --expires-at $expiresAt `
  --apply
```

刪除短期上傳 Token 時，需要傳建立介面返回的 `id`。管理 Token 只能刪除符合以下條件的 Token：

| 條件 | 要求 |
| --- | --- |
| 權限 | `permissions` 只有 `upload` |
| 自動刪除 | `autoDelete=true` |
| 有效期 | `expiresAt - createdAt <= 24` 小時 |

刪除短期上傳 Token：

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --delete-upload-token `
  --token-id "mqt4jqokc85be80d1f0f47078e848a77d6c1aa6e" `
  --apply
```

管理 Token 不能刪除普通 Token、長期 Token、包含 `list` / `delete` / `manage` 權限的 Token，也不能刪除有效期超過 `1` 天的上傳 Token。這些 Token 仍然需要在瀏覽器管理後台處理。

### 短期上傳 Token 參數

| 參數 | 說明 |
| --- | --- |
| `--create-upload-token` | 建立短期上傳專用 Token |
| `--delete-upload-token` | 刪除符合條件的短期上傳專用 Token |
| `--name <name>` | Token 名稱 |
| `--owner <owner>` | Token 歸屬說明 |
| `--default-upload-channel <key>` | 預設上傳渠道，必須是真實渠道，例如 `telegram`、`s3`、`github` |
| `--expires-in-minutes <n>` | 相對目前時間的過期分鐘數，最大 `1440` |
| `--expires-at <ms>` | 絕對過期時間，毫秒時間戳，最大為目前時間後 `24` 小時 |
| `--token-id <id>` | 要刪除的短期上傳 Token ID |

短期上傳 Token 只允許上傳。測試中，使用 `permissions=["upload"]` 的短期 Token 存取列表、檔案管理和刪除介面都會被拒絕。

過期後，`autoDelete=true` 的 Token 會在後端校驗到它過期時清理；讀取 API Token 列表時也會清理已經過期的自動刪除 Token。

## 介面對照

| 動作 | 方法 | 介面 |
| --- | --- | --- |
| 修改檔案中繼資料 | `PATCH` | `/api/manage/metadata/{fileId}` |
| 讀取審查標籤 | `GET` | `/api/manage/label/{fileId}` |
| 修改審查標籤 | `POST` | `/api/manage/label/{fileId}` |
| 讀取檔案標籤 | `GET` | `/api/manage/tags/{fileId}` |
| 修改檔案標籤 | `POST` | `/api/manage/tags/{fileId}` |
| 批次修改檔案標籤 | `POST` | `/api/manage/tags/batch` |
| 修改名單狀態 | `POST` | `/api/manage/listType/{fileId}` |
| 批次修改名單狀態 | `POST` | `/api/manage/listType/batch` |
| 移動或重新命名 | `POST` | `/api/manage/relocate/batch` |
| 建立資料夾 | `POST` | `/api/manage/folder/create` |
| 停用上傳 IP | `POST` | `/api/manage/cusConfig/blockip` |
| 恢復上傳 IP | `POST` | `/api/manage/cusConfig/whiteip` |
| 建立短期上傳 Token | `POST` | `/api/manage/apiTokens` |
| 刪除短期上傳 Token | `DELETE` | `/api/manage/apiTokens?id={tokenId}` |

腳本會自動帶上：

```text
Authorization: Bearer your API Token
```

## 輸出格式

預設 `pretty` 輸出適合人工查看。如果要給其他程式繼續處理，使用 `--output json`：

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-tags `
  --file-id "photos/2026/a.jpg" `
  --output json
```

也可以儲存完整結果：

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-tags `
  --file-id "photos/2026/a.jpg" `
  --output json `
  --save-response ".\manage-result.json"
```

批次移動、批次重新命名和批次名單動作會解析後端返回的 NDJSON 進度流，並彙總事件數量、完成狀態和失敗詳情。

## 常見問題

### 為什麼命令執行後沒有修改

寫入動作預設是預覽模式。需要確認預覽結果無誤後，加上 `--apply` 才會真正儲存。

### 這個腳本能上傳、列出或刪除檔案嗎

不能。上傳使用上傳腳本，列出和篩選使用列出腳本，刪除明確檔案使用刪除腳本。檔案管理腳本只處理 `manage` 權限下的輕量管理動作。

### 怎麼知道要傳哪個 fileId

先用 `imgbed-token-list.mjs --files` 查詢檔案。返回結果裡的 `name` 通常就是檔案 ID，也就是這裡的 `--file-id`。

### 批次操作一次最多多少個檔案

後端單次請求最多處理 `15` 個檔案。腳本預設 `--batch-size 15`；傳更小的值會依照這個數量自動拆分成多次請求順序執行。

### 可以建立真正的空資料夾嗎

圖床目錄由檔案路徑推導出來，沒有真正的空目錄。`--create-folder` 會建立目錄佔位檔案 `0.md`，讓這個目錄可以在檔案管理和目錄統計裡顯示出來。

### 短期上傳 Token 最長多久

最長 `1` 天，也就是 `1440` 分鐘。超過這個時間，腳本會在本機拒絕；後端也會返回 `API_TOKEN_MANAGE_CREATE_EXPIRES_AT_TOO_LONG`。

### 短期上傳 Token 過期後會自動刪除嗎

會自動清理，但不是定時任務立即刪除。過期 Token 被再次校驗時會被清理；讀取 API Token 列表時也會清理已經過期且 `autoDelete=true` 的 Token。
