# API Token 設定管理

API Token 設定管理適合給自動化腳本、維運工具或第三方控制面板使用。它可以在不打開後台頁面的情況下，讀取和修改上傳渠道設定、安全設定、頁面設定、其他設定，以及處理輕量的聯盟關係。

管理權限只開放適合腳本執行的輕量操作。需要瀏覽器確認、前端分批任務或聯盟索引清理的重操作，仍然要回到瀏覽器後台處理。

![編輯 API Token](../../image/Safety/apitoken/编辑管理权限api.png)

## 準備工作

進入後台後打開：

```text
System Settings -> Security Settings -> API Token
```

建立或編輯 API Token 時，確認這個 Token 允許管理。管理權限可以修改站台設定，建議只發給可信任的腳本或可信任使用者。

三個管理腳本的寫入操作預設都是預覽模式，不會真正儲存。確認預覽內容無誤後，再加 `--apply` 執行寫入。

也可以把 Token 放到環境變數裡：

```powershell
$env:IMGBED_API_TOKEN="your API Token"
```

## 下載管理腳本

文件倉庫提供三個 Node.js 腳本：

| 腳本 | 用途 |
| --- | --- |
| <a href="/tools/imgbed-token-upload-settings.mjs" download>下載上傳設定管理腳本</a> | 管理上傳渠道、子渠道和負載平衡 |
| <a href="/tools/imgbed-token-site-settings.mjs" download>下載站台設定管理腳本</a> | 管理安全設定、頁面設定和其他設定 |
| <a href="/tools/imgbed-token-federation.mjs" download>下載聯盟關係管理腳本</a> | 管理聯盟輕量關係動作、申請和留言 |

執行腳本需要本機安裝 Node.js 18 或更高版本。

### 通用參數

| 參數 | 必填 | 說明 |
| --- | --- | --- |
| `--base-url <url>` | 是 | 圖床站台位址，例如 `https://image.ai6.me` |
| `--token <token>` | 是 | API Token；也可以使用 `IMGBED_API_TOKEN` 環境變數 |
| `--retries <n>` | 否 | 暫時失敗重試次數，預設 `3` |
| `--timeout-ms <n>` | 否 | 單個請求逾時時間，預設 `180000` |
| `--output <pretty\|json>` | 否 | 輸出格式，預設 `pretty`；程式呼叫可用 `json` |
| `--save-response <path>` | 否 | 把最終結果儲存成 JSON 檔案 |
| `--apply` | 否 | 真正執行寫入；不加時只預覽 |
| `-h` / `--help` | 否 | 查看腳本說明 |

## 上傳設定

上傳設定腳本用於列出、讀取、新增或編輯、刪除上傳子渠道，也可以切換某個大渠道的負載平衡。

```powershell
node imgbed-token-upload-settings.mjs --base-url "https://your-domain" --token "your API Token" --list
```

### 上傳設定參數

| 參數 | 說明 |
| --- | --- |
| `--list` | 列出上傳設定分組 |
| `--get` | 讀取一個大渠道，或讀取大渠道下的指定子渠道 |
| `--upsert` | 新增或編輯一個子渠道；不加 `--apply` 只預覽 |
| `--delete` | 刪除一個子渠道；不加 `--apply` 只預覽 |
| `--load-balance <true\|false>` | 開啟或關閉一個大渠道的負載平衡 |
| `--channel <key>` | 上傳大渠道，例如 `s3`、`github`、`telegram` |
| `--channel-name <name>` | 子渠道或帳號名稱 |
| `--set key=value` | 設定一個欄位，可重複使用；支援點路徑 |
| `--patch-json <path>` | 從 JSON 檔案批量合併欄位 |
| `--apply` | 真正儲存寫入結果 |

### 渠道參數

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

### 上傳設定示例

列出全部上傳設定：

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --list
```

讀取 S3 渠道設定：

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get `
  --channel s3
```

讀取 S3 下某個子渠道：

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get `
  --channel s3 `
  --channel-name "backup-s3"
```

新增或編輯一個子渠道。第一次執行不加 `--apply`，只查看預覽：

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --upsert `
  --channel webdav `
  --channel-name "backup-webdav" `
  --set enabled=false `
  --set remark="backup test"
```

確認無誤後再儲存：

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --upsert `
  --channel webdav `
  --channel-name "backup-webdav" `
  --set enabled=false `
  --set remark="backup test" `
  --apply
```

刪除一個子渠道：

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --delete `
  --channel webdav `
  --channel-name "backup-webdav" `
  --apply
```

開啟 S3 負載平衡：

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --load-balance true `
  --channel s3 `
  --apply
```

批量修改複雜欄位時，可以先寫一個 JSON 檔案，再用 `--patch-json`：

```json
{
  "enabled": true,
  "remark": "primary account"
}
```

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --upsert `
  --channel s3 `
  --channel-name "primary-s3" `
  --patch-json ".\s3-channel.json" `
  --apply
```

## 其他設定填寫

站台設定腳本用於管理三類設定：

| 區域 | 參數 | 說明 |
| --- | --- | --- |
| 安全設定 | `security` | 使用者端認證、管理端認證、登入裝置、API Token、圖片審查、使用者頻控、WebDAV 等 |
| 頁面設定 | `page` | 全域頁面、使用者端頁面、後台頁面等 |
| 其他設定 | `others` | 隨機圖 API、公共瀏覽、聯盟本地節點、自動標籤、IP 歸屬地、備份渠道、OCR 等 |

先用 `--list-sections` 查看目前腳本支援的區域、分區和欄位：

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --list-sections
```

### 其他設定參數

| 參數 | 說明 |
| --- | --- |
| `--list-sections` | 列出可編輯的區域、分區和欄位 |
| `--get` | 讀取一個設定分區 |
| `--area <security\|page\|others>` | 指定設定區域 |
| `--section <name>` | 指定設定分區，名稱以 `--list-sections` 輸出為準 |
| `--set key=value` | 設定一個欄位，可重複使用 |
| `--apply` | 真正儲存寫入結果 |

`page` 區域的 `--set` 使用頁面設定項 id，例如 `starsEffect=true`。`security` 和 `others` 區域的 `--set` 使用對應分區欄位名稱，例如 `email=admin@example.com`。

### 其他設定示例

讀取系統更新通知設定：

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get `
  --area security `
  --section systemUpdate
```

修改系統更新通知信箱。第一次執行不加 `--apply`，只查看預覽：

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --area security `
  --section systemUpdate `
  --set email="admin@example.com"
```

確認無誤後再儲存：

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --area security `
  --section systemUpdate `
  --set email="admin@example.com" `
  --apply
```

修改後台頁面星空效果：

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --area page `
  --section adminSettings `
  --set starsEffect=true `
  --apply
```

修改 IP 歸屬地語言：

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --area others `
  --section ipGeolocation `
  --set language="en" `
  --apply
```

聯盟本地節點設定可以讀取和修改普通欄位，例如是否啟用、同步目錄、邀請碼等。域名確認不透過 API Token 處理；如果後台提示本地節點域名和目前存取域名不一致，請在瀏覽器後台完成確認。

## 聯盟關係

聯盟關係腳本用於管理本地節點狀態、我加入的節點、加入我的節點、留言、申請加入、無關係重新申請、同意、拒絕，以及不涉及索引清理的輕量關係動作。

更新索引、刪除聯盟索引、確認域名變更依賴瀏覽器裡的完整流程，腳本不處理這些重操作。

### 聯盟輕重邊界

| 操作 | 腳本是否支援 | 說明 |
| --- | --- | --- |
| 查看本地節點狀態、列出關係 | 支援 | 只讀關係帳本 |
| 查看留言、發送留言 | 支援 | 只讀寫關係留言 |
| 申請加入其他節點 | 支援 | 透過邀請連結發起申請 |
| 無關係記錄重新申請 | 支援 | 僅限 `lastResult=none` 的 outgoing 卡片，需要 6 位邀請碼 |
| 取消 outgoing 待同意申請 | 支援 | 只取消 pending 申請 |
| 同意或拒絕 incoming 申請 | 支援 | 只處理加入我的節點請求 |
| 移除 incoming 已接受關係 | 支援 | 只處理入站關係帳本並通知對方 |
| 刪除 incoming 終態記錄 | 支援 | 只刪除入站終態關係記錄 |
| outgoing 已接受訂閱取消 | 瀏覽器處理 | 需要刪除本地聯盟索引，瀏覽器會分批執行 |
| outgoing 終態記錄刪除 | 瀏覽器處理 | 可能需要先清理聯盟索引 |
| 域名變更確認或取消 | 瀏覽器處理 | 需要確認目前域名，並處理域名變更後的索引關係 |
| 發布索引、拉取索引、批量刪除索引 | 瀏覽器處理 | 屬於前端分批任務 |

### 聯盟關係參數

| 參數 | 說明 |
| --- | --- |
| `--status` | 查看本地聯盟節點狀態，以及我加入的節點、加入我的節點 |
| `--list` | 列出聯盟關係清單 |
| `--chat` | 讀取某個關係的快取留言 |
| `--send-message` | 給某個已建立關係的節點留言 |
| `--join` | 透過邀請連結申請加入其他節點 |
| `--reapply` | 對無關係記錄重新申請，需要 6 位邀請碼 |
| `--accept` | 同意加入我的節點請求 |
| `--deny` | 拒絕加入我的節點請求 |
| `--cancel` | 取消 outgoing 待同意申請，或移除 incoming 已接受關係 |
| `--delete` | 刪除 incoming 終態關係記錄 |
| `--direction <outgoing\|incoming\|all>` | 關係方向；`outgoing` 是我加入的節點，`incoming` 是加入我的節點 |
| `--domain <url>` | 關係節點域名 |
| `--invite-link <url>` | 對方節點的邀請碼連結 |
| `--invite-code <code>` | 6 位邀請碼，用於重新申請 |
| `--text <message>` | 留言內容 |
| `--apply` | 真正儲存寫入結果 |

### 聯盟關係示例

查看本地節點狀態和雙方關係清單：

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --status
```

只列出我加入的節點：

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --list `
  --direction outgoing
```

只列出加入我的節點：

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --list `
  --direction incoming
```

透過邀請連結申請加入其他節點。第一次執行不加 `--apply`，只查看預覽：

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --join `
  --invite-link "https://peer-domain/federation/invite/abcdef"
```

確認無誤後再儲存：

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --join `
  --invite-link "https://peer-domain/federation/invite/abcdef" `
  --apply
```

對無關係記錄重新申請：

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --reapply `
  --domain "https://peer-domain" `
  --invite-code "abc123" `
  --apply
```

同意加入我的節點請求：

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --accept `
  --domain "https://peer-domain" `
  --apply
```

拒絕加入我的節點請求：

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --deny `
  --domain "https://peer-domain" `
  --apply
```

給已建立關係的節點留言：

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --send-message `
  --direction outgoing `
  --domain "https://peer-domain" `
  --text "Hello, this is a test message." `
  --apply
```

取消 outgoing 待同意申請：

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --cancel `
  --direction outgoing `
  --domain "https://peer-domain" `
  --apply
```

移除 incoming 已接受關係：

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --cancel `
  --direction incoming `
  --domain "https://peer-domain" `
  --apply
```

刪除 incoming 終態記錄：

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --delete `
  --direction incoming `
  --domain "https://peer-domain" `
  --apply
```

outgoing 已接受訂閱取消、outgoing 記錄刪除需要回到瀏覽器後台處理，因為這些動作可能要先清理本地聯盟索引。

### 域名不一致

如果本地節點儲存的域名和目前關係裡待處理的域名不一致，腳本會直接報錯，並提示 `currentDomain` 和 `pendingDomain`。這種情況需要在瀏覽器後台處理，因為域名變動後還涉及出口索引清理和確認流程。

如果申請加入時對方回傳 `FEDERATION_NODE_DOMAIN_MISMATCH`，表示邀請連結存取到的域名和對方本地節點儲存的域名不一致。介面會回傳 `currentOrigin` 和 `detectedOrigin`，請改用對方目前確認的域名重新導入，或請對方先在瀏覽器後台確認域名。

## 常見問題

### 為什麼修改命令執行後沒有生效

寫入命令預設是預覽模式。需要確認預覽內容無誤後，加上 `--apply` 才會真正儲存。

### 怎麼知道可以修改哪些欄位

上傳設定先用 `--get` 查看現有子渠道結構。安全設定、頁面設定和其他設定先用 `--list-sections` 查看腳本允許編輯的區域、分區和欄位。

### 想把結果給其他程式使用

使用 `--output json`，或加上 `--save-response result.json`。程式可以直接讀取儲存下來的 JSON 檔案。


