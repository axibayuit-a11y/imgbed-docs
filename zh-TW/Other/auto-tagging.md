# 自動打標籤使用說明

自動打標籤在：

```text
系統設定 -> 其他設定 -> 自動打標籤
```

這個功能會替圖片自動產生標籤，方便之後搜尋、隨機圖篩選、訪客圖庫篩選，以及年齡分級存取控制。

## 自動打標籤能做什麼

| 功能 | 說明 |
| --- | --- |
| 產生內容標籤 | 例如人物、場景、物件、畫風等標籤 |
| 產生角色標籤 | 對動漫圖、插畫裡的角色特別有用 |
| 補方向標籤 | 自動補 `landscape`、`portrait`、`square` |
| 補圖片分級 | 儲存 `G/S/Q/E` 分級結果 |
| 上傳時自動打標 | 開啟後，新上傳圖片會自動進入打標流程 |
| 批次打標 | 可以替全部或指定資料夾裡的舊圖片補標籤 |

## 需要先準備什麼

你需要至少一個可以存取的 Hugging Face Space。

建議把 SmilingWolf 的 `wd-tagger` 複製到自己的 Hugging Face 帳號使用：

```text
https://huggingface.co/spaces/SmilingWolf/wd-tagger
```

也可以先臨時使用公開 Space，但公開 Space 很多人一起用，容易排隊、變慢或暫時不可用。自己的 Space 比較穩，也比較適合長期自動打標。

## 複製 SmilingWolf 的 Space

1. 登入 Hugging Face。
2. 打開 `https://huggingface.co/spaces/SmilingWolf/wd-tagger`。

![SmilingWolf 公開 Space](../../image/other/微笑狼的公开仓库.png)

3. 點右上角三個點。
4. 選 `Duplicate this Space`。
5. Space 名稱可保持預設，也可以改成自己喜歡的名字，例如 `wd-tagger`。
6. 可見性建議選 `Public`，比較方便 ImgBed 呼叫。
7. 硬體先用預設免費配置即可，排隊明顯時再考慮升級。
8. 建立後等待 Space 建置完成。

建置完成後，進入你自己的 Space 頁面。網址通常像：

```text
https://huggingface.co/spaces/你的使用者名稱/wd-tagger
```

直接複製瀏覽器網址，貼到 ImgBed 的 `Space URLs`。

## 多個 Space URLs 怎麼填

`Space URLs` 一行填一個。

| 填寫內容 | 說明 |
| --- | --- |
| `https://huggingface.co/spaces/SmilingWolf/wd-tagger` | SmilingWolf 公開 Space，適合臨時測試 |
| `https://huggingface.co/spaces/lintonxue00/wd-tagger` | 直接複製 Space 頁面連結 |
| `https://huggingface.co/spaces/你的使用者名稱/wd-tagger` | 你自己複製後的 Space |

可以填多個地址。系統會同時使用多個 Space 處理圖片，速度會更快；其中一個暫時不可用時，其他 Space 仍可繼續處理。

## 頁面選項怎麼填

| 選項 | 建議 |
| --- | --- |
| `Space URLs` | 填你準備好的 Space 地址，建議至少 1 個 |
| 目標資料夾 | 不選就是全部資料夾；只想處理某個目錄時再選 |
| 辨識模型 | 預設 `wd-swinv2-tagger-v3` 即可 |
| 通用標籤閾值 | 預設值適合大多數圖片，越低標籤越多，越高標籤越少 |
| 角色標籤閾值 | 預設值偏穩，適合避免角色誤判 |
| 使用 `MCut` | 不確定時先關閉，需要模型自動判斷標籤數量時再開 |
| 上傳時自動打標 | 想讓新圖自動有標籤就開啟 |
| 開始打標籤 | 手動替舊圖片批次補標籤 |

## 推薦初始設定

| 選項 | 推薦值 |
| --- | --- |
| 辨識模型 | `wd-swinv2-tagger-v3` |
| 通用標籤閾值 | `0.35` |
| 角色標籤閾值 | `0.85` |
| `MCut` | 先關閉 |
| 上傳時自動打標 | 依需求開啟 |

如果標籤太多，可以把通用標籤閾值調高一點；標籤太少，就調低一點。

## 批次打標怎麼用

1. 先填好 `Space URLs`。
2. 選擇目標資料夾。
3. 點開始打標籤。
4. 等進度完成。

目標資料夾留空時會處理全部資料夾。

批次打標適合處理舊圖片。新圖片建議開啟上傳時自動打標，之後就不用每次手動跑。

## 上傳時自動打標

開啟後，新上傳圖片會自動呼叫你填的 `Space URLs`。

如果 Space 正在排隊，上傳本身會先完成，打標會在後面繼續處理。

## 哪些圖片會被處理

自動打標主要處理圖片檔。

已經有完整標籤、方向、分級、寬高資訊的圖片會跳過，不會重複浪費 Space 呼叫。

缺什麼就補什麼。例如只缺方向標籤時，系統會盡量只補方向；缺內容標籤時，才會呼叫 Space 產生內容標籤。

## 常見問題

### 為什麼建議複製自己的 Space？

公開 Space 是大家一起用的，別人也在排隊。複製到自己的帳號後，主要供你的 ImgBed 使用，速度和穩定性通常更好。

### Space 一直啟動中怎麼辦？

第一次打開或長時間沒人用時，Space 可能需要啟動一下。可以先打開你的 Space 頁面，等它能正常辨識圖片後，再回 ImgBed 開始打標。

### Space 地址怎麼複製？

打開你的 Hugging Face Space 頁面，直接複製瀏覽器網址即可。

### 可以填多個 Space 嗎？

可以。每行一個 Space 地址。圖片很多時，多個 Space 會一起處理。

### 標籤語言為什麼是英文？

SmilingWolf 模型輸出的是英文標籤，這是正常現象。這些標籤主要用於搜尋、篩選、隨機圖 API 和公開圖庫篩選。

### 分級標籤有什麼用？

分級結果會配合安全設定裡的存取模式使用。例如訪客模式限制年齡分級後，公開瀏覽和隨機圖會依規則過濾圖片。

## 快速流程

```text
登入 Hugging Face
-> 打開 SmilingWolf/wd-tagger
-> Duplicate this Space
-> 等 Space 建置完成
-> 複製自己的 Space 地址
-> 回 ImgBed 填 Space URLs
-> 選模型和閾值
-> 開始打標或開啟上傳時自動打標
```
