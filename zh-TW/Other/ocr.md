# OCR

OCR 會從圖片、掃描件和文件截圖中擷取文字。

辨識完成後，你可以複製結果，匯出為 `Markdown`、`PDF` 或 `Word`，也可以將多種格式一起打包下載。

## OCR 能做什麼

| 功能 | 說明 |
| --- | --- |
| 圖片文字辨識 | 從圖片、截圖和掃描件中擷取文字。 |
| 文件版面辨識 | 更適合表格、公式、印章和圖文混排版面。 |
| 多服務支援 | 支援 Baidu PaddleOCR、Microsoft Azure Vision 和 Google Vision。 |
| 複製結果 | 處理完成後複製辨識文字。 |
| 匯出檔案 | 匯出 `Markdown`、`PDF` 和 `Word`。 |
| 批次打包 | 多個檔案辨識後，可將結果打包下載。 |

## 先設定 OCR 服務

開啟：

```text
System Settings -> Other Settings -> OCR
```

![IP 地理定位與 OCR](../../image/other/ip定位和ocr文字识别.png)

填寫你想使用的服務憑證：

| 服務 | 要填寫什麼 | 最適合 |
| --- | --- | --- |
| Baidu PaddleOCR | `PaddleOCR Token` | 建議優先使用。適合文件、圖片、表格和混合版面。 |
| Microsoft Azure Vision | `Azure Vision Endpoint` 和 `Azure Vision API Key` | 如果你已使用 Microsoft 雲端服務，會很有用。 |
| Google Vision | `Google Vision API Key`。服務帳號 `JSON` 僅用於額度查詢。 | 如果你使用 Google Cloud 服務，會很有用。 |

填寫憑證後請儲存。

初次測試時可以只設定一個服務，不需要三個都設定。

## Google Vision 設定

Google 設定分成兩部分：

| 目標 | 需求 |
| --- | --- |
| 使用 OCR | 啟用 `Cloud Vision API`，然後建立 `API Key`。 |
| 查詢使用量 | 建立服務帳號，授予 `Monitoring Viewer`，然後下載服務帳號 `JSON`。 |

![Google API 金鑰與服務帳號](../../image/other/谷歌api秘钥和服务账号截图.png)

### 使用 Google 進行 OCR

1. 開啟 Google Cloud Console。
2. 前往 `APIs & Services`。
3. 開啟 `Library`，搜尋 `Cloud Vision API` 並啟用。
4. 回到 `Credentials`。
5. 建立 `API Key`。
6. 開啟 API 金鑰並複製。
7. 將它貼到 ImgBed 的 `Google Vision API Key`。
8. 儲存。

之後即可在 OCR 對話框中選擇 Google Vision。

### 查詢 Google 使用量

額度查詢不是辨識必要項。

它只會大致顯示最近 30 天使用了多少次 Google Vision 呼叫。

1. 在 Google Cloud Console 中開啟 `IAM & Admin`。
2. 開啟 `Service Accounts`。
3. 建立服務帳號，例如 `vision-monitor`。
4. 授予它 `Monitoring Viewer` 角色。
5. 開啟服務帳號詳細資料並建立金鑰。
6. 選擇 `JSON`。
7. 下載產生的 JSON 檔案。
8. 回到 ImgBed，在服務帳號 `JSON` 下匯入（選填）。
9. 匯入成功後，點選額度查詢。

匯入後，ImgBed 會顯示該服務帳號所屬的專案名稱。查詢使用量時，ImgBed 會讀取 Google 監控資料並顯示本月呼叫次數。

簡單來說：

| 項目 | 用途 |
| --- | --- |
| `Google Vision API Key` | 執行 OCR 辨識。 |
| 服務帳號 `JSON` | 查詢 Google Vision 使用了多少次。 |
| `Monitoring Viewer` 角色 | 允許服務帳號讀取使用量資料。 |

## 取得 Baidu PaddleOCR 權杖

Baidu PaddleOCR 需要存取權杖。

![取得 PaddleOCR 權杖](../../image/other/获取飞浆令牌.png)

在 Baidu PaddleOCR 頁面開啟 `API` 呼叫視窗，點選取得權杖，然後複製。

回到 ImgBed，將它貼到 `PaddleOCR Token` 並儲存。

## 開始辨識

在檔案管理中選擇一張圖片或文件截圖，然後點選 `OCR`。

![OCR 辨識](../../image/other/ocr识别截图.png)

在對話框中選擇辨識服務和模型。

常見 PaddleOCR 模型選擇：

| 模型 | 最適合 |
| --- | --- |
| `PP-StructureV3` | 建議預設值。適合文件、表格、公式、印章和混合版面。 |
| `PP-OCRv5` | 簡單圖片、一般文字和輕量辨識。 |
| `PaddleOCR-VL` | 多語言、複雜圖片，以及類似圖表的內容。 |
| `PaddleOCR-VL-1.5` | 更複雜的文件頁面和版面還原。 |

如果不確定，先使用 `PP-StructureV3`。

## 進階選項

| 選項 | 說明 |
| --- | --- |
| 方向校正 | 圖片旋轉或歪斜時使用。 |
| 文件展平 | 用於有彎曲或傾斜的拍照文件。 |
| 版面偵測 | 想保留標題、段落、表格和圖片結構時使用。 |
| 圖表辨識 | 圖片包含圖表或複雜結構時使用。 |
| 美化 `Markdown` | 讓匯出的 Markdown 更容易閱讀。 |

一般截圖建議保留最少選項。文件掃描件可開啟更多文件相關選項。

## 查看結果

辨識完成後，對話框會顯示結果。

你可以直接複製，也可以選擇匯出格式。

![PDF 辨識](../../image/other/pdf识别截图.png)

對文件頁面而言，匯出的 `PDF` 可以保留頁面外觀，同時讓文字可搜尋。這很適合用於歸檔掃描件並在之後查找內容。

## 選擇匯出格式

| 格式 | 最適合 |
| --- | --- |
| `Markdown (.md)` | 筆記、文件系統和後續編輯。 |
| `PDF (.pdf)` | 保留頁面外觀和掃描文件結果。 |
| `Word (.docx)` | 繼續編輯版面、修改文字並交給他人。 |
| 全部匯出 | 儲存多種格式和原圖，適合重要檔案歸檔。 |

如果只需要文字，請匯出 Markdown。

如果需要頁面外觀，請使用 PDF 或 Word。

## Word 輸出

匯出的 Word 文件可使用辦公軟體開啟和編輯。

![Word 結果](../../image/other/word识别结果.png)

有些文件會在 Word 輸出中包含辨識到的圖片、標題和段落。

辨識品質取決於原圖清晰度、模型選擇和文件複雜度。

## 最適合 OCR 的檔案類型

| 檔案類型 | 建議 |
| --- | --- |
| 清楚的截圖 | 直接辨識。 |
| 掃描件 | 優先使用 `PP-StructureV3`。 |
| 拍照文件 | 開啟方向校正和文件展平。 |
| 表格、公式、印章 | 優先使用結構化模型。 |
| 簡單短文字圖片 | `PP-OCRv5` 通常足夠。 |

圖片越清楚、文字越端正，通常會得到更好的結果。

## 常見情況

| 情況 | 意義 |
| --- | --- |
| 辨識失敗 | 檢查對應服務的權杖或金鑰是否已儲存。 |
| 辨識很慢 | 複雜文件和大型圖片需要更長時間。 |
| 表格不完整 | 嘗試使用結構化模型。 |
| 文字有錯誤 | 模糊、反光和歪斜會增加辨識錯誤。請嘗試更清楚的圖片。 |
| Word 輸出包含很多圖片 | 結構化模型可能會保留部分辨識到的圖片，這是正常情況。 |

### Google 額度查詢失敗

請檢查：

1. 服務帳號 `JSON` 已匯入。
2. 服務帳號具有 `Monitoring Viewer` 角色。
3. 專案已啟用 `Cloud Vision API`。

如果只需要 OCR 而不查詢使用量，可以忽略服務帳號 `JSON`，只填寫 `Google Vision API Key`。

## 快速流程

```text
Open System Settings
-> Open Other Settings
-> Fill OCR service credentials
-> Save
-> Return to File Management
-> Select a file and click OCR
-> Choose a model
-> Wait for recognition
-> Copy results or export Markdown / PDF / Word
```
