# Cloudflare API Token 設定

Cloudflare API Token 用來讓系統在檔案異動後，主動清除 Cloudflare CDN 快取。

![Cloudflare API Token 設定](../../image/Safety/cloudflare%20api%20token截图.png)

## 功能入口

進入後台後打開：

```text
系統設定 -> 安全設定 -> Cloudflare API Token
```

頁面需要填三項：

- Zone ID
- 帳號信箱
- API Key

## 這個設定有什麼用

Cloudflare 會快取公開圖片。

快取可以讓圖片開得更快，但也會造成一個問題：當你刪除、封鎖、取代或移動圖片後，外部訪客可能仍會在一段時間內看到舊內容。

設定 Cloudflare API Token 後，系統會在相關操作完成時，請 Cloudflare 清除對應快取。

適合這些情境：

- 刪除圖片後，希望公開連結盡快失效。
- 封鎖圖片後，希望外部訪客盡快看不到原圖。
- 覆蓋同名圖片後，希望使用者盡快看到新圖。
- 移動或重新命名檔案後，希望舊路徑快取盡快更新。
- 調整公開存取規則後，希望公開圖庫和隨機圖快取盡快刷新。

## 不設定會怎樣

不設定也可以正常使用 ImgBed。

只是系統不會主動清 Cloudflare CDN 快取，外部使用者可能在快取自然過期前繼續看到舊內容。

## Zone ID 怎麼填

Zone ID 是 Cloudflare 裡目前站點的 Zone ID。

取得方式：

1. 登入 Cloudflare Dashboard。
2. 進入 ImgBed 網域所在的站點。
3. 在站點 Overview 頁找到 Zone ID。
4. 複製後填入 `Zone ID`。

注意：這裡填的是站點 Zone ID，不是 Account ID。

## 帳號信箱怎麼填

填 Cloudflare 登入信箱。

這個信箱需要和下面的 API Key 搭配使用。

## API Key 怎麼填

這裡填 Cloudflare 的 Global API Key。

取得方式：

1. 登入 Cloudflare Dashboard。
2. 進入個人資料。
3. 打開 API Tokens 頁面。
4. 找到 Global API Key。
5. 檢視並複製。
6. 貼到後台的 API Key 欄位。

![查看全域金鑰](../../image/Safety/查看全局令牌.png)

## 儲存後什麼時候生效

填寫完成後按儲存。

儲存成功後，後續檔案異動會自動嘗試清除 Cloudflare 快取。

已經發生過的舊操作不會自動補清。如果你之前刪除或取代過檔案，但當時尚未設定這些資訊，可能需要等 Cloudflare 快取自然過期，或到 Cloudflare 後台手動清除快取。

## 常見問題

### 一定要設定嗎？

不是必填。

如果你的網域沒有接 Cloudflare，或不介意 CDN 快取延遲，可以不填。

### 填錯會影響上傳嗎？

通常不會影響正常上傳和存取。

填錯時，系統只是無法成功請 Cloudflare 清快取，舊快取可能會繼續存在一段時間。

### 為什麼刪除圖片後外面還能打開？

最常見原因是 Cloudflare CDN 還快取著舊檔案。

設定正確後，系統會在刪除時主動清除對應 URL 快取。

### 為什麼替換同名圖片後還是舊圖？

這也是 CDN 快取常見現象。

設定後，系統會在覆蓋同名檔案時嘗試清掉舊 URL 快取，讓新圖更快生效。
