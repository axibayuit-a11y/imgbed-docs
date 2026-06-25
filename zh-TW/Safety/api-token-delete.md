# API Token 刪除檔案

API Token 刪除檔案適合給腳本、自動化任務和第三方程式使用。你不需要打開後台頁面，只要帶上站點網址、Token 和明確的檔案 ID，就可以刪除 ImgBed 裡的單一或多個檔案。

刪除是寫入操作，命令執行後會真的刪除資料。建議先用 `imgbed-token-list.mjs` 查清楚要刪除的 `fileId`，再把這些 ID 傳給刪除腳本。

![編輯 API Token](../../image/Safety/apitoken/编辑api token.png)

## 準備工作

進入後台後，開啟：

```text
System Settings -> Security Settings -> API Token
```

建立或編輯 API Token 時，確認這個 Token 已允許刪除。這個腳本只需要 `delete` 權限。

你也可以把 Token 放到環境變數：

```powershell
$env:IMGBED_API_TOKEN="your API Token"
```

## 下載腳本

| 腳本 | 用途 |
| --- | --- |
| <a href="/tools/imgbed-token-delete.mjs" download>下載刪除檔案腳本</a> | 刪除一個或多個明確指定的檔案 ID。 |

執行腳本需要本機安裝 Node.js 18 或更新版本。

## 刪除 API 行為

刪除腳本呼叫的是後端刪除介面：

```text
POST /api/manage/delete/batch
```

請求需要帶 API Token：

```text
Authorization: Bearer <token>
```

請求內容範例：

```json
{
  "fileIds": ["photos/2026/a.txt"],
  "deleteStrictness": "strict"
}
```

`fileIds` 裡只有 1 個檔案時，就是單檔刪除；有多個檔案時，就是批次刪除。後端單次請求最多處理 15 個檔案，腳本會依照 `--batch-size` 自動拆成多個請求。

介面會回傳 NDJSON 進度串流，常見事件包括 `batch_start`、`file_step`、`file_done`、`batch_complete`、`batch_error`。腳本會解析這些事件，並彙整成可讀結果或 JSON 結果。

刪除成功後，後端會自動處理檔案索引、目錄統計、容量統計與快取清理。

## 刪除腳本參數

| 參數 | 必填 | 說明 |
| --- | --- | --- |
| `--base-url <url>` | 是 | ImgBed 站點網址，例如 `https://image.ai6.me`。 |
| `--token <token>` | 是 | API Token；也可以使用 `IMGBED_API_TOKEN` 環境變數。 |
| `--file-id <id>` | 是 | 要刪除的檔案 ID，可重複傳入多個。 |
| `--strictness <strict\|soft>` | 否 | 刪除嚴格度，預設 `strict`。 |
| `--batch-size <n>` | 否 | 每個請求刪除的檔案數，預設 `15`，最大 `15`。 |
| `--retries <n>` | 否 | 暫時性失敗的重試次數，預設 `3`。 |
| `--timeout-ms <n>` | 否 | 單次請求逾時時間，預設 `180000`。 |
| `--output <pretty\|json>` | 否 | 輸出格式，預設 `pretty`。 |
| `--save-response <path>` | 否 | 將最終結果儲存成 JSON 檔案。 |
| `-h` / `--help` | 否 | 查看腳本說明。 |

這個腳本只會刪除明確傳入的 `--file-id`。它不做模糊比對，不按目錄整批清空，也不從逗號清單或本機檔案讀取待刪除 ID。

## 嚴格刪除與軟刪除

| 模式 | 說明 |
| --- | --- |
| `strict` | 預設模式。遠端儲存刪除失敗時，ImgBed 記錄會保留，方便後續重試或排查。 |
| `soft` | 遠端儲存刪除失敗時，也會繼續清理 ImgBed 記錄，並在結果裡回傳警告。 |

如果你希望「遠端檔案必須刪掉才算成功」，使用預設的 `strict`。如果某個遠端平台已經無法刪除，但你只想清理 ImgBed 記錄，可以使用 `soft`。

## 使用範例

刪除單一檔案：

```powershell
node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --file-id "photos/2026/a.txt"
```

使用環境變數中的 Token：

```powershell
$env:IMGBED_API_TOKEN="your API Token"

node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --file-id "photos/2026/a.txt"
```

刪除多個檔案：

```powershell
node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --file-id "photos/2026/a.txt" `
  --file-id "photos/2026/b.txt" `
  --file-id "photos/2026/c.txt"
```

遠端刪除失敗時仍清理 ImgBed 記錄：

```powershell
node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --file-id "photos/2026/a.txt" `
  --strictness soft
```

輸出 JSON 並儲存結果：

```powershell
node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --file-id "photos/2026/a.txt" `
  --output json `
  --save-response ".\delete-result.json"
```

限制每次請求刪除 5 個檔案：

```powershell
node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --file-id "photos/2026/a.txt" `
  --file-id "photos/2026/b.txt" `
  --batch-size 5
```

## 刪除前先查 fileId

刪除腳本需要的是 ImgBed 檔案 ID。可以先用列出腳本查看目錄裡的檔案：

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --dir "photos/2026" `
  --count 10 `
  --output json
```

回傳結果裡的 `name` 通常就是可以傳給刪除腳本的 `fileId`。

## 常見問題

### 為什麼刪除失敗但檔案還在清單裡？

如果使用預設 `strict`，遠端儲存刪除失敗時，ImgBed 記錄會保留。這是為了避免只刪掉本地索引，遠端檔案卻還存在。確認可以只清理 ImgBed 記錄後，再用 `soft` 對同一個 `fileId` 重試。

### 為什麼結果裡有警告？

警告通常表示遠端刪除、快取清理或統計收尾中有非致命問題。腳本會彙整警告，方便你判斷是否需要重試。

### 可以按目錄一次刪除嗎？

這個腳本不提供按目錄清空能力。需要先用列出腳本篩選出明確的 `fileId`，再把要刪除的檔案逐一傳給刪除腳本。

