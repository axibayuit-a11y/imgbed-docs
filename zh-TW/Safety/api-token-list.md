# API Token 列出與篩選

API Token 列出腳本適合讓自動化腳本、排程任務或第三方程式讀取 ImgBed 資料。它只使用 `list` 權限，不會上傳檔案、刪除檔案、修改設定，也不會封鎖或放行某個 IP。

![編輯 API Token](../../image/Safety/apitoken/编辑列出权限api.png)

主要用途：

| 功能 | 說明 |
| --- | --- |
| 檔案管理列出 | 讀取後台檔案清單，並支援檔案管理裡的進階篩選參數。 |
| 使用者管理列出 | 讀取使用者/IP 上傳統計，並支援使用者管理裡的篩選參數。 |
| 上傳渠道清單 | 讀取已脫敏的上傳渠道、子渠道、容量與負載平衡資訊。 |
| 目錄統計表 | 讀取目錄統計與目錄分頁資訊。 |

## 準備工作

進入後台後，開啟：

```text
System Settings -> Security Settings -> API Token
```

建立或編輯 API Token 時，確認這個 Token 已允許列出。這個腳本只需要 `list` 權限。

你也可以把 Token 放到環境變數：

```powershell
$env:IMGBED_API_TOKEN="your API Token"
```

## 下載腳本

| 腳本 | 用途 |
| --- | --- |
| <a href="/tools/imgbed-token-list.mjs" download>下載列出與篩選腳本</a> | 檔案管理列出、使用者管理列出、上傳渠道清單、目錄統計表。 |

執行腳本需要本機安裝 Node.js 18 或更新版本。

## 通用參數

| 參數 | 必填 | 說明 |
| --- | --- | --- |
| `--base-url <url>` | 是 | ImgBed 站點網址，例如 `https://image.ai6.me`。 |
| `--token <token>` | 是 | API Token；也可以使用 `IMGBED_API_TOKEN` 環境變數。 |
| `--retries <n>` | 否 | 暫時性失敗的重試次數，預設 `3`。 |
| `--timeout-ms <n>` | 否 | 單次請求逾時時間，預設 `180000`。 |
| `--output <pretty\|json>` | 否 | 輸出格式，預設 `pretty`；給程式處理時建議用 `json`。 |
| `--save-response <path>` | 否 | 將最終結果儲存成 JSON 檔案。 |
| `-h` / `--help` | 否 | 查看腳本說明。 |

## 檔案管理列出

列出檔案管理中的檔案：

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --count 10
```

輸出 JSON：

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --count 10 `
  --output json
```

只讀取目前篩選條件下的數量：

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --file-summary `
  --dir "photos/2026" `
  --recursive
```

### 檔案管理參數

| 參數 | 說明 |
| --- | --- |
| `--files` | 列出檔案。 |
| `--file-summary` | 只讀取數量統計。 |
| `--start <n>` | 分頁起始位置。 |
| `--count <n>` | 回傳筆數。 |
| `--dir <path>` | 指定目錄。 |
| `--recursive` | 包含子目錄檔案。 |
| `--search <text>` | 搜尋關鍵字。 |
| `--channel <key>` | 依上傳大渠道篩選，例如 `github`、`s3`、`yandex`。 |
| `--channel-scope <primary\|backup\|all>` | 渠道篩選範圍：主渠道、備份渠道、全部。 |
| `--channel-name-groups <value>` | 子渠道分組篩選，會透傳給後端既有參數。 |
| `--list-type <csv>` | 名單類型，常用 `None,White,Block`。 |
| `--include-tags <csv>` | 必須包含這些標籤。 |
| `--exclude-tags <csv>` | 排除這些標籤。 |
| `--time-start <ms>` | 上傳時間起點，毫秒時間戳。 |
| `--time-end <ms>` | 上傳時間終點，毫秒時間戳。 |
| `--file-exts <csv>` | 只包含指定副檔名，例如 `jpg,png,pdf`。 |
| `--exclude-file-exts <csv>` | 排除指定副檔名。 |
| `--file-status-categories <csv>` | 檔案分類：`image,audio,video,document,code,other`。 |
| `--upload-ip <ip>` | 依上傳 IP 前綴篩選。 |
| `--age-ratings <csv>` | 年齡分級：`none,all-ages,r12,r16,r18`。 |
| `--orientation <csv>` | 橫直圖篩選，會透傳給後端既有值。 |
| `--read-source <csv>` | 讀取來源篩選，會透傳給後端既有值。 |
| `--access-status <normal\|blocked>` | 公開存取狀態。 |
| `--min-width <n>` | 最小寬度。 |
| `--max-width <n>` | 最大寬度。 |
| `--min-height <n>` | 最小高度。 |
| `--max-height <n>` | 最大高度。 |
| `--min-file-size <mb>` | 最小檔案大小，單位沿用後端既有 MB 參數。 |
| `--max-file-size <mb>` | 最大檔案大小，單位沿用後端既有 MB 參數。 |

### 檔案管理範例

搜尋 PDF：

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --search "pdf" `
  --file-status-categories "document" `
  --count 20
```

依上傳 IP 與渠道篩選：

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --upload-ip "103.62" `
  --channel yandex `
  --channel-scope primary
```

儲存完整結果：

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --count 100 `
  --output json `
  --save-response ".\files.json"
```

## 使用者管理列出

列出使用者/IP 上傳統計：

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --count 20
```

搜尋某個 IP 或地址：

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --search "43.198.183.56"
```

查看某個 IP 上傳的檔案明細：

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --user-detail `
  --ip "43.198.183.56" `
  --count 20
```

列出禁止上傳 IP：

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --blocked-ips
```

### 使用者管理參數

| 參數 | 說明 |
| --- | --- |
| `--users` | 列出使用者/IP 上傳統計。 |
| `--user-detail` | 查看某個 IP 上傳的檔案明細。 |
| `--blocked-ips` | 列出禁止上傳 IP。 |
| `--ip <ip>` | 搭配 `--user-detail` 時必填。 |
| `--start <n>` | 分頁起始位置。 |
| `--count <n>` | 回傳筆數。 |
| `--sort <value>` | 排序：`timeDesc`、`timeAsc`、`countDesc`、`countAsc`、`totalSizeDesc`、`totalSizeAsc`。 |
| `--search <text>` | 搜尋 IP 或地址。 |
| `--upload-status <allowed\|blocked>` | 是否允許上傳。 |
| `--start-time <ms>` | 統計時間起點，毫秒時間戳。 |
| `--end-time <ms>` | 統計時間終點，毫秒時間戳。 |
| `--file-status-categories <csv>` | 檔案分類篩選。 |
| `--age-ratings <csv>` | 年齡分級篩選。 |
| `--min-file-size <mb>` | 最小檔案大小。 |
| `--max-file-size <mb>` | 最大檔案大小。 |
| `--list-type <csv>` | 名單類型，常用 `None,White,Block`。 |
| `--access-status <normal\|blocked>` | 公開存取狀態。 |

### 使用者管理範例

列出禁止上傳的使用者：

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --upload-status blocked
```

依地址關鍵字搜尋：

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --search "Hong Kong"
```

依上傳次數排序：

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --sort countDesc `
  --count 50
```

## 上傳渠道清單

列出已脫敏的上傳渠道設定：

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --channels
```

回傳內容包含：

| 欄位 | 說明 |
| --- | --- |
| `type` | 上傳大渠道，例如 `github`、`s3`、`yandex`。 |
| `name` | 子渠道或帳號名稱。 |
| `enabled` | 是否啟用。 |
| `load_balance_enabled` | 這個大渠道是否開啟負載平衡。 |
| `quota_enabled` | 是否啟用容量檢查。 |
| `quota_limit_bytes` | 容量上限。 |
| `quota_used_bytes` | 已用容量。 |
| `quota_checked_at` | 容量檢查時間。 |
| `tag_json` | 非敏感標籤，例如公開倉庫、私有倉庫。 |
| `created_at` / `updated_at` | 建立與更新時間。 |

這個介面不會回傳密鑰、重新整理權杖、存取權杖、密碼等敏感設定。

## 目錄統計表

列出目錄統計：

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --directories `
  --limit 20
```

列出完整目錄路徑並搜尋前綴：

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --directories `
  --scope full `
  --search-prefix "test" `
  --include-parents `
  --limit 10
```

### 目錄統計參數

| 參數 | 說明 |
| --- | --- |
| `--directories` | 列出目錄統計表。 |
| `--dir <path>` | 從哪個目錄開始列出。 |
| `--scope <direct\|full>` | `direct` 只列直屬目錄，`full` 列完整路徑。 |
| `--search-prefix <path>` | 依目錄前綴搜尋。 |
| `--include-parents` | `full` 模式下同時帶出父層目錄。 |
| `--limit <n>` | 回傳筆數，後端最多 `100`。 |
| `--cursor <path>` | 下一頁游標。 |

## 輸出格式

預設 `pretty` 輸出適合人工閱讀：

```powershell
node imgbed-token-list.mjs --base-url "https://your-domain" --token "your API Token" --users --count 5
```

如果要交給其他程式處理，使用 `--output json`：

```powershell
node imgbed-token-list.mjs --base-url "https://your-domain" --token "your API Token" --users --count 5 --output json
```

也可以儲存完整結果：

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --count 5 `
  --output json `
  --save-response ".\users.json"
```

## 常見問題

### 這個腳本會修改資料嗎？

不會。這個腳本只呼叫讀取介面，不會上傳、刪除、移動、編輯設定，也不會封鎖或放行任何 IP。

### 為什麼需要 `list` 權限？

檔案管理列出、使用者管理列出、脫敏渠道清單與目錄統計都屬於讀取能力，所以只需要 API Token 的 `list` 權限。

### 如何確認有哪些參數？

執行：

```powershell
node imgbed-token-list.mjs --help
```

腳本會列出所有動作與參數。

