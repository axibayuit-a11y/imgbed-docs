# Cloudflare R2 渠道新增說明

## 適合什麼場景

- 你已經把圖床部署在 Cloudflare 上，希望直接使用同一個 Cloudflare 帳號里的 R2 桶保存檔案。
- 你不想再填寫一套 S3 Endpoint、Access Key、Secret Key。
- 你希望檔案讀寫都走 Worker / Pages 的 R2 綁定，設定盡量簡單。

一句話：

R2 這條渠道不是在圖床後台手動建立帳號，而是在 Cloudflare 後台先把 R2 桶綁定到專案，綁定變量名必須是 `img_r2`。

## 新增前要準備什麼

- 一個 Cloudflare 帳號。
- 一個已經建立好的 R2 Bucket。
- 當前圖床專案的 Cloudflare 後台管理權限。

## Cloudflare 後台設定

### 1. 建立 R2 Bucket

1. 登入 Cloudflare Dashboard。
2. 進入 `R2 Object Storage`。
3. 點擊建立 Bucket。
4. Bucket 名稱自己決定，例如 `imgbed`。

這個 Bucket 就是後面實際保存檔案的地方。

![建立一個存儲桶 img-r2](../../image/upload/cloudflare-r2/创建一个存储桶img-r2.png)

### 2. 綁定到圖床專案

根據你的部署類型選擇位置：

| 部署類型 | 綁定位置 |
| --- | --- |
| Pages | 當前 Pages 專案 -> Settings -> Functions -> R2 bucket bindings |
| Worker | 當前 Worker -> Settings -> Bindings -> R2 bucket bindings |

新增綁定時重點只看這一項：

| 欄位 | 填寫 |
| --- | --- |
| Variable name | `img_r2` |
| R2 bucket | 選擇剛建立的 Bucket |

變量名必須寫成 `img_r2`，代碼里上傳、讀取、刪除 R2 檔案都只認這個綁定名。

### 3. 重新部署

綁定保存後，需要重新部署一次圖床專案，讓 Worker / Pages 運行時真正拿到 `img_r2`。

## 圖床後台會看到什麼

R2 綁定成功後，進入：

1. 系統設定。
2. 上傳設定。
3. 查看 `Cloudflare R2` 渠道。

系統會自動生成一條固定渠道：

| 欄位 | 固定值 |
| --- | --- |
| 渠道名稱 | `Cloudflare R2` |
| 渠道類型 | `cfr2` |
| 保存方式 | `binding` |
| 設定來源 | 環境綁定 |

這條渠道是固定綁定渠道，不需要點擊“新增渠道”手動建立，也不能像普通渠道一樣刪除。

## 後台可編輯欄位

| 欄位 | 作用 | 是否必填 |
| --- | --- | --- |
| 啟用渠道 | 控制 R2 是否參與上傳選擇 | 是 |
| Account ID | 只在開啟容量限制并查詢官方 R2 用量時使用 | 開啟容量限制時建議填寫 |
| Bucket 名稱 | 只在開啟容量限制并查詢官方 R2 用量時使用 | 開啟容量限制時建議填寫 |
| 容量限制 | 控制這個 R2 渠道是否按容量閾值參與上傳選擇 | 否 |
| 閾值 | 容量達到多少比例後不再繼續寫入 | 開啟容量限制時填寫 |

Account ID 可以在 Cloudflare 控制臺右側帳號資訊里複製，開啟容量限制時填到後台即可。

![獲取賬戶 ID](../../image/upload/cloudflare-r2/获取账户id.png)

## 新增步驟

1. 在 Cloudflare 建立 R2 Bucket。
2. 打開圖床專案的 Cloudflare 設定。
3. 新增 R2 bucket binding。
4. `Variable name` 填 `img_r2`。
5. `R2 bucket` 選擇剛建立的 Bucket。
6. 保存綁定并重新部署圖床。
7. 回到圖床後台 -> 系統設定 -> 上傳設定。
8. 確認 `Cloudflare R2` 渠道已經出現，并保持啟用。

如果要讓 R2 按容量閾值參與上傳選擇，就打開容量限制，填寫 Account ID、Bucket 名稱、容量上限和閾值後保存。

![設定容量限制](../../image/upload/cloudflare-r2/配置容量限制.png)

## 新增完成後怎么檢查

- 上傳設定里是否出現 `Cloudflare R2` 固定渠道。
- 渠道卡片是否顯示為啟用。
- 上傳一個小檔案，返回連結能否正常打開。
- 如果打開檔案時報 `R2 database binding is not configured`，說明專案運行時沒有拿到 `img_r2` 綁定，需要回 Cloudflare 檢查變量名和重新部署。


