# API Token 上傳檔案

API Token 上傳適合腳本、自動化任務和第三方程式使用。不需要打開網頁，只要帶上站台位址、Token、本機檔案路徑和真實上傳渠道，就可以把檔案上傳到 ImgBed，成功後會拿到檔案連結。

![編輯 API Token](../../image/Safety/apitoken/编辑上传权限api.png)

## 準備工作

進入後台後打開：

```text
System Settings -> Security Settings -> API Token
```

建立或編輯 API Token 時，確認這個 Token 允許上傳，並選擇一個真實的預設上傳渠道。API Token 上傳不使用「智慧分配」入口，腳本呼叫時也需要傳入真實渠道。

## 下載上傳腳本

文件倉庫提供兩個 Node.js 腳本：

| 腳本 | 用途 |
| --- | --- |
| <a href="/tools/imgbed-token-single-upload.mjs" download>單次上傳腳本</a> | 只呼叫一次 `/upload`，適合小檔案和介面連通性測試 |
| <a href="/tools/imgbed-token-chunk-upload.mjs" download>分塊上傳腳本</a> | 使用 API Token 的分塊、直傳或平台工作階段介面，適合大檔案 |

執行腳本需要本機安裝 Node.js 18 或更高版本。

## 列出可用渠道

兩個腳本都支援先列出目前 API Token 可用的上傳渠道：

```powershell
node imgbed-token-single-upload.mjs --base-url "https://your-domain" --token "your API Token" --list-channels
node imgbed-token-chunk-upload.mjs --base-url "https://your-domain" --token "your API Token" --list-channels
```

列出渠道時不需要傳 `--file` 和 `--channel`。回傳內容包含預設上傳渠道、大渠道參數、子渠道名稱和是否開啟負載平衡，不會回傳密鑰、刷新權杖等敏感設定。

## 上傳方式怎麼選

| 上傳方式 | 適合情境 | 說明 |
| --- | --- | --- |
| 單次上傳 | 小檔案、簡單腳本、介面測試 | 檔案作為一個請求送到 `/upload` |
| 分塊上傳 | 大檔案、容易逾時的檔案 | 腳本依渠道呼叫分塊、直傳或平台工作階段流程 |

如果檔案比較大，優先使用分塊上傳腳本。單次上傳會受到 Cloudflare 請求體、Worker 記憶體和各渠道自身限制影響。

## 單次上傳

單次上傳腳本只請求一次 `/upload`。

```powershell
node imgbed-token-single-upload.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --file "D:\test\image.png" `
  --channel s3 `
  --folder "photos/2026"
```

也可以把 Token 放到環境變數裡：

```powershell
$env:IMGBED_API_TOKEN="your API Token"
node imgbed-token-single-upload.mjs --base-url "https://your-domain" --file "D:\test\image.png" --channel s3
```

### 單次上傳參數

| 參數 | 必填 | 說明 |
| --- | --- | --- |
| `--base-url <url>` | 是 | 圖床站台位址，例如 `https://image.ai6.me` |
| `--token <token>` | 是 | API Token；也可以使用 `IMGBED_API_TOKEN` 環境變數 |
| `--file <path>` | 是 | 本機檔案路徑 |
| `--channel <key>` | 是 | 上傳渠道 |
| `--folder <path>` | 否 | 上傳目錄，例如 `photos/2026` 或 `/user/` |
| `--name-type <type>` | 否 | 命名方式，對應後端 `uploadNameType`，預設 `default` |
| `--channel-name <name>` | 否 | 指定某個子渠道或帳號；不傳時由後端渠道設定決定 |
| `--retries <n>` | 否 | 暫時失敗重試次數，預設 `3` |
| `--timeout-ms <n>` | 否 | 單次請求逾時時間，預設 `180000` |
| `--output <pretty\|json>` | 否 | 輸出格式，預設 `pretty` |
| `--save-response <path>` | 否 | 把最終結果儲存成 JSON 檔案 |
| `--list-channels` | 否 | 只列出目前 Token 可用上傳渠道，不執行上傳 |

### 單次上傳渠道

| 渠道參數 | 渠道 |
| --- | --- |
| `telegram` / `tg` | Telegram |
| `discord` / `dc` | Discord |
| `cfr2` / `r2` | Cloudflare R2 |
| `s3` | S3 |
| `webdav` / `wd` | WebDAV 儲存渠道 |
| `github` / `gh` | GitHub Releases |
| `gitlab` / `gl` | GitLab Packages |
| `huggingface` / `hf` | Hugging Face |
| `onedrive` / `od` | OneDrive |
| `googledrive` / `google` / `gd` | Google Drive |
| `dropbox` / `db` | Dropbox |
| `yandex` / `yx` | Yandex Disk |
| `pcloud` / `pd` | pCloud |

### 單次上傳大小限制（建議單檔控制在 100 MB 內）

下面這些渠道有明確的單次 `/upload` 攔截門檻：

| 渠道 | 單次上傳上限 |
| --- | ---: |
| Telegram | 20 MiB |
| Discord | 10 MiB |
| S3 | 64 MiB |
| WebDAV | 64 MiB |
| GitHub Releases | 64 MiB |
| GitLab Packages | 64 MiB |

超過上限時，腳本會在本機直接提示對應錯誤。其他渠道沒有在腳本裡寫死 100 MB 本機限制；如果請求體超過 Cloudflare 或平台能力，會由 Cloudflare 或遠端平台回傳錯誤。

## 分塊上傳

分塊上傳腳本會先用 API Token 請求後端解析檔案目標，再依渠道走對應的大檔案上傳流程。使用者不需要自己撰寫分塊工作階段、合併和完成請求。

```powershell
node imgbed-token-chunk-upload.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --file "D:\test\video.zip" `
  --channel github `
  --folder "photos/2026" `
  --concurrency 3
```

### 分塊上傳參數

| 參數 | 必填 | 說明 |
| --- | --- | --- |
| `--base-url <url>` | 是 | 圖床站台位址 |
| `--token <token>` | 是 | API Token；也可以使用 `IMGBED_API_TOKEN` 環境變數 |
| `--file <path>` | 是 | 本機檔案路徑 |
| `--channel <key>` | 是 | 上傳渠道 |
| `--folder <path>` | 否 | 上傳目錄 |
| `--name-type <type>` | 否 | 命名方式，對應後端 `uploadNameType`，預設 `default` |
| `--channel-name <name>` | 否 | 指定某個子渠道或帳號；不傳時由後端渠道設定決定 |
| `--concurrency <n>` | 否 | 並行上傳數，預設 `1`，最大 `3` |
| `--retries <n>` | 否 | 暫時失敗重試次數，預設 `3` |
| `--timeout-ms <n>` | 否 | 單個請求逾時時間，預設 `180000` |
| `--output <pretty\|json>` | 否 | 輸出格式，預設 `pretty` |
| `--save-response <path>` | 否 | 把最終結果儲存成 JSON 檔案 |
| `--list-channels` | 否 | 只列出目前 Token 可用上傳渠道，不執行上傳 |

### 分塊上傳渠道

| 渠道參數 | 上傳流程 |
| --- | --- |
| `telegram` / `tg` | `/upload` 真分塊工作階段 |
| `discord` / `dc` | `/upload` 真分塊工作階段 |
| `cfr2` / `r2` | `/upload` 真分塊工作階段 |
| `github` / `gh` | `/upload` 真分塊工作階段 |
| `gitlab` / `gl` | `/upload` 真分塊工作階段 |
| `webdav` / `wd` | `/upload` 真分塊工作階段 |
| `s3` | S3 multipart 上傳 |
| `onedrive` / `od` | OneDrive 上傳工作階段 |
| `googledrive` / `google` / `gd` | Google Drive 可恢復上傳 |
| `dropbox` / `db` | Dropbox 上傳工作階段 |
| `yandex` / `yx` | Yandex 直傳 URL |
| `pcloud` / `pd` | pCloud upload link |
| `huggingface` / `hf` | Hugging Face LFS 上傳 |

Yandex 壓縮包樣本在測試中表現不穩定；非壓縮檔案已驗證可以上傳。

## 回傳結果

上傳成功後，腳本會輸出：

```text
success
src: /file/photos/2026/example.png
url: https://your-domain/file/photos/2026/example.png
fileId: photos/2026/example.png
```

| 欄位 | 說明 |
| --- | --- |
| `src` | 站內檔案路徑 |
| `url` | 完整存取連結，適合直接寫入自己的腳本或資料庫 |
| `fileId` | 檔案 ID，後續查詢、管理或記錄時使用 |
| `channelName` | 分塊腳本可能回傳實際使用的子渠道或帳號 |

如果指定 `--output json`，腳本會輸出完整 JSON，方便程式繼續處理。

## 直接請求單次上傳介面

不使用腳本時，也可以直接請求單次上傳介面：

```text
POST https://your-domain/upload?uploadChannel=s3&uploadFolder=photos/2026&uploadNameType=default
Authorization: Bearer your API Token
Content-Type: multipart/form-data
```

表單欄位：

| 欄位 | 必填 | 說明 |
| --- | --- | --- |
| `file` | 是 | 要上傳的檔案 |

查詢參數：

| 參數 | 必填 | 說明 |
| --- | --- | --- |
| `uploadChannel` | 是 | 真實上傳渠道 |
| `uploadFolder` | 否 | 上傳目錄 |
| `uploadNameType` | 否 | 命名方式 |
| `channelName` | 否 | 指定子渠道或帳號 |

介面成功時會回傳類似：

```json
{
  "success": true,
  "src": "/file/photos/2026/example.png",
  "url": "https://your-domain/file/photos/2026/example.png",
  "fileId": "photos/2026/example.png"
}
```

## 常見問題

### 大檔案單次上傳失敗

單次 `/upload` 是一個請求傳完整檔案，大檔案可能被 Cloudflare 或遠端平台攔截。大檔案請使用分塊上傳腳本。

### 傳了 `--channel-name` 還是失敗

先確認後台這個渠道裡確實存在同名子渠道，並且該子渠道已啟用。沒有傳 `--channel-name` 時，後端會依該渠道自己的設定選擇可用帳號。

### 想把結果給其他程式使用

使用 `--output json`，或加上 `--save-response result.json`。程式讀取裡面的 `url` 欄位即可拿到完整檔案連結。

### Yandex 上傳壓縮包失敗

Yandex 不支援壓縮包格式，可能是他們的相關政策導致。需要使用 Yandex 渠道時，建議上傳非壓縮檔案。


