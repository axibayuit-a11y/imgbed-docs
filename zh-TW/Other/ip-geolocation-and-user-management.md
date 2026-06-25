# IP 地理定位與使用者管理

IP 地理定位會將上傳者記錄、登入裝置等紀錄中的 IP 位址轉換成大致位置。

設定完成後，管理面板可以更清楚地顯示上傳來源和存取來源。使用者管理也能針對可疑 IP 位址封鎖或恢復上傳權限。

## 在哪裡設定

開啟：

```text
System Settings -> Other Settings -> IP Geolocation
```

![IP 地理定位](../../image/other/ip定位/ip定位.png)

## 可設定項目

新版 IP 地理定位支援多個來源，不再只依賴單一地圖服務。

| 設定 | 用途 |
| --- | --- |
| IP 地理定位語言 | 選擇顯示語言，例如英文、簡體中文、日文、法文等。 |
| MaxMind Account ID | MaxMind GeoLite Web Service 使用的 MaxMind 帳號 ID。 |
| MaxMind License Key | MaxMind License Key。 |
| Tencent Map Key | Tencent Location Service 金鑰，適合中文地址和中國大陸 IP。 |
| ipapi Key | APILayer ipapi 金鑰，支援多語言 IP 地理定位。 |

只需填寫你需要的服務，不必每個欄位都設定。

如果沒有提供任何金鑰，ImgBed 仍會嘗試使用內建免費來源，但穩定性、語言支援和精準度可能不如你自行設定的服務。

## 建議選擇

如果你主要需要中文地址：

1. 將 IP 地理定位語言設為簡體中文。
2. 設定 Tencent Map Key。
3. 視需求加入 MaxMind 或 ipapi 作為備用來源。

如果你主要需要英文或多語言地址：

1. 選擇需要的語言。
2. 設定 MaxMind Account ID 和 License Key。
3. 若需要更好的多語言結果，可加入 ipapi Key。

## MaxMind 設定

MaxMind 需要：

```text
MaxMind Account ID
MaxMind License Key
```

在 MaxMind 控制台找到帳號 ID，並在 License Keys 頁面產生 License Key。

![MaxMind 金鑰設定](../../image/other/ip定位/maxmind的key配置.png)

產生後，將 Account ID 和 License Key 貼到 ImgBed 並儲存。

MaxMind 免費方案適合日常使用，但有請求次數限制。若超過額度，ImgBed 會繼續嘗試其他可用來源。

## ipapi 設定

ipapi 使用 APILayer API Key。

開啟 ipapi 控制台，複製其中顯示的 API Key。

![ipapi 設定](../../image/other/ip定位/ipapi配置.png)

將它貼到 ImgBed 的 `ipapi Key` 欄位並儲存。

ipapi 支援多語言 IP 地理定位，適合希望地址依指定語言顯示的情境。免費方案也有請求次數限制。若額度用完，ImgBed 會繼續嘗試其他可用來源。

## Tencent Map Key 設定

Tencent Map Key 適合中文地址，尤其是中國大陸 IP。

在 Tencent Location Service 建立金鑰時，請啟用：

```text
WebServiceAPI
```

建立後，將金鑰貼到 `Tencent Map Key` 並儲存。

如果只需要基本的中文 IP 地理定位，Tencent Map Key 就足以開始使用。

## 使用者管理中要看什麼

使用者管理可從管理面板頂部進入。

![使用者管理](../../image/other/用户管理显示.png)

使用者管理會依 IP 顯示上傳活動：

| 欄位 | 說明 |
| --- | --- |
| IP 來源 | 上傳者的來源 IP。 |
| 地址 | 由 IP 解析出的約略位置。 |
| 上傳總量 | 此 IP 上傳檔案的總大小。 |
| 上傳次數 | 此 IP 的上傳次數。 |
| 允許上傳 | 開啟表示允許上傳；關閉表示封鎖上傳。 |

點選左側箭頭，可展開該 IP 上傳過的檔案清單。

檔案清單會顯示檔名、預覽、檔案大小、審核結果、檔案狀態和上傳時間。如果上傳看起來可疑，先展開 IP、查看檔案，再決定是否封鎖後續上傳。

如果某個 IP 可疑，請關閉 `Upload allowed`。之後來自該 IP 的上傳會被封鎖。

## 搜尋、排序與進階篩選

在使用者管理頂部，可依 IP 來源或地址搜尋。

可依時間、上傳次數或上傳總量排序，以找出近期上傳者、高頻上傳者或高使用量 IP。

若需要更深入排查，請開啟進階篩選。

![進階篩選](../../image/other/用户管理高级筛选.png)

進階篩選支援：

| 篩選項 | 用法 |
| --- | --- |
| 時間範圍 | 顯示在指定時間內上傳過檔案的 IP。 |
| 存取狀態 | 依正常、已封鎖等狀態篩選。 |
| 允許/封鎖清單 | 依允許清單、封鎖清單或未設定篩選。 |
| 檔案類型 | 顯示上傳過圖片、影片、音訊、文件、程式碼或其他檔案的 IP。 |
| 檔案大小 | 依上傳檔案大小範圍篩選。 |
| 年齡分級 | 依未設定、General、R12+、R16+、R18 等分級篩選。 |
| 檔案狀態 | 依目前檔案狀態篩選，方便排查異常檔案。 |

點選 `Apply Filters` 套用篩選。使用 `Reset` 可回到全部資料。

## 行動版檢視

在行動裝置上，使用者管理會切換為卡片版面。

![行動版使用者管理](../../image/other/手机端显示用户管理效果.png)

每張卡片會顯示 IP、地址、上傳總量、上傳次數和允許上傳開關。你可以不用水平捲動表格也能管理使用者。

## 如果位置看起來不準

IP 地理定位是約略位置，不是精確街道地址。

如果使用者位於代理伺服器、資料中心、雲端伺服器或跨境網路後方，顯示的位置可能與真實位置不同。

請將此功能用於了解大致來源、找出異常上傳並輔助封鎖決策，不要將它視為精準追蹤。

## 常見情況

| 情況 | 意義 |
| --- | --- |
| 地址為空 | IP 可能尚未解析，或目前來源暫時不可用。 |
| 地址語言不正確 | 檢查 IP 地理定位語言，以及是否已設定支援該語言的來源。 |
| 地址顯示為資料中心 | 許多代理、雲端伺服器和爬蟲會顯示為資料中心或 ISP 地址。 |
| 上傳次數很高 | 請仔細檢查此 IP，必要時封鎖上傳。 |
| 上傳總量很大 | 排序或篩選後展開 IP，檢查具體檔案。 |
| 封鎖後需要恢復 | 重新開啟 `Upload allowed`。 |

## 快速流程

```text
Open IP Geolocation in Other Settings
-> Choose IP geolocation language
-> Fill MaxMind, Tencent Map, or ipapi credentials as needed
-> Save settings
-> Open User Management
-> Review IP source, address, total upload size, and upload count
-> Use search, sort, or advanced filters to find abnormal IPs
-> Allow or block uploads as needed
```
