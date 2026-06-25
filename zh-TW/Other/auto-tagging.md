# 自動打標籤

自動打標籤在以下位置設定：

```text
System Settings -> Other Settings -> Auto Tagging
```

這個功能會自動為圖片產生標籤，適合後續用於搜尋、隨機圖片篩選、訪客圖庫篩選，以及年齡分級存取控制。

## 自動打標籤能做什麼

| 功能 | 說明 |
| --- | --- |
| 產生內容標籤 | 為人物、場景、物體、畫風等視覺內容加入標籤。 |
| 產生角色標籤 | 適合動漫圖片和插畫。 |
| 補上方向標籤 | 加入 `landscape`、`portrait` 或 `square`。 |
| 補上圖片分級 | 儲存 `G/S/Q/E` 分級結果，對應一般、敏感、可疑或露骨內容。 |
| 上傳時自動打標 | 新上傳的圖片會自動進入打標流程。 |
| 批次打標 | 可為全部資料夾或指定資料夾中的舊圖片批次補標籤。 |

## 需要先準備什麼

請先準備至少一個可存取的 Hugging Face Space URL。

建議將 SmilingWolf 的 `wd-tagger` Space 複製到你自己的 Hugging Face 帳號下：

```text
https://huggingface.co/spaces/SmilingWolf/wd-tagger
```

你可以暫時使用公開 Space 進行測試，但公開 Space 由許多使用者共用，可能需要排隊、變慢或暫時無法使用。複製到自己帳號下的 Space 更穩定，也更適合長期自動打標籤。

## 複製 SmilingWolf 的 Space

1. 登入 Hugging Face。
2. 開啟 `https://huggingface.co/spaces/SmilingWolf/wd-tagger`。

![SmilingWolf 公開 Space](../../image/other/微笑狼的公开仓库.png)

3. 點選右上角的三點選單。
4. 選擇 `Duplicate this Space`。
5. Space 名稱可保留預設值，也可改成你自己的名稱，例如 `wd-tagger`。
6. 將可見性設定為 `Public`。公開 Space 較方便 ImgBed 呼叫。
7. 一開始保留預設免費硬體即可，只有在排隊情況明顯時再考慮升級。
8. 建立 Space，並等待建置完成。

建置完成後，開啟你自己的 Space 頁面。URL 通常類似：

```text
https://huggingface.co/spaces/your-name/wd-tagger
```

複製瀏覽器中的 URL，貼到 ImgBed 的 `Space URLs`。

## 填寫多個 Space URLs

每行填寫一個 Space URL。

範例：

| 值 | 說明 |
| --- | --- |
| `https://huggingface.co/spaces/SmilingWolf/wd-tagger` | SmilingWolf 的公開 Space，適合暫時測試。 |
| `https://huggingface.co/spaces/lintonxue00/wd-tagger` | 已複製 Space 的頁面 URL。 |
| `https://huggingface.co/spaces/your-name/wd-tagger` | 你自己複製後的 Space 頁面 URL。 |

可以填入多個 URL。ImgBed 會一起使用多個 Space，速度可能會更快。

如果其中一個 Space 暫時不可用，其他 Space 仍可繼續處理。

## 設定項目

| 選項 | 建議 |
| --- | --- |
| `Space URLs` | 填入準備好的 Space URLs，至少需要一個。 |
| 目標資料夾 | 留空表示全部資料夾。只有想處理特定目錄時才選擇資料夾。 |
| 辨識模型 | 預設保留 `wd-swinv2-tagger-v3`。 |
| 一般標籤閾值 | 預設值適合大多數圖片。數值越低，標籤越多；數值越高，標籤越少。 |
| 角色標籤閾值 | 預設值較保守，有助於避免錯誤的角色標籤。 |
| `MCut` 自動閾值 | 一開始先關閉。想讓模型自動決定標籤數量時再開啟。 |
| 上傳時自動打標 | 若希望新上傳圖片自動取得標籤，請開啟。 |
| 開始打標籤 | 手動為舊圖片批次打標。 |

## 建議起始值

| 選項 | 建議值 |
| --- | --- |
| 辨識模型 | `wd-swinv2-tagger-v3` |
| 一般標籤閾值 | `0.35` |
| 角色標籤閾值 | `0.85` |
| `MCut` | 一開始關閉 |
| 上傳時自動打標 | 視需求開啟 |

如果標籤太多，可以稍微提高一般標籤閾值。

如果標籤太少，可以稍微降低一般標籤閾值。

## 批次打標

1. 填寫 `Space URLs`。
2. 選擇目標資料夾。
3. 點選開始打標籤。
4. 等待進度完成。

若目標資料夾為空，ImgBed 會處理全部資料夾。

批次打標適合處理舊圖片。新圖片建議開啟上傳時自動打標，之後就不需要每次手動執行。

## 上傳時自動打標

開啟上傳時自動打標後，新上傳的圖片會自動呼叫你設定的 `Space URLs`。

這個開關適合長期使用。

如果你的 Space 正在排隊，上傳本身仍可先完成，打標會在後續繼續處理。

## 哪些圖片會被處理

自動打標籤主要處理圖片檔案。

已經有完整標籤、方向、分級、寬度和高度資訊的圖片會被略過，避免不必要的 Space 呼叫。

ImgBed 會盡量只補缺少的資訊。例如只有方向缺失時，系統會嘗試補上方向，而不呼叫完整的內容標籤流程。

## 常見問題

### 為什麼要複製自己的 Space？

公開 Space 由許多使用者共用。你自己複製的 Space 主要由你的 ImgBed 網站使用，所以通常更快、更可靠。

### Space 一直在啟動

首次建立後，或長時間閒置後，Space 可能需要一些時間啟動。

先開啟你的 Space 頁面。確認它能正常辨識圖片後，再回到 ImgBed 開始打標。

### 如何複製 Space URL？

開啟你的 Hugging Face Space 頁面，直接複製瀏覽器網址。

範例：

```text
https://huggingface.co/spaces/lintonxue00/wd-tagger
https://huggingface.co/spaces/SmilingWolf/wd-tagger
```

### 可以加入多個 Space 嗎？

可以。每行填寫一個 Space URL。

多個 Space 會一起處理圖片，圖片數量多時很有用。

### 為什麼標籤是英文？

SmilingWolf 模型輸出的是英文標籤，這是預期行為。

這些標籤主要用於搜尋、篩選、隨機圖片 API，以及訪客圖庫篩選。

### 分級標籤有什麼用？

分級結果會與安全性設定中的存取模式搭配使用。

例如訪客存取受到年齡分級限制時，公開瀏覽和隨機圖片功能會依照這些規則篩選圖片。

## 快速流程

```text
Sign in to Hugging Face
-> Open SmilingWolf/wd-tagger
-> Duplicate this Space
-> Wait for the Space to build
-> Copy your Space URL
-> Fill Space URLs in ImgBed
-> Choose model and thresholds
-> Start tagging or enable auto-tag on upload
```
