# 部落格

部落格功能會為你的 ImgBed 網站新增一個獨立的部落格頁面。

啟用後，訪客可以開啟：

```text
https://your-domain.com/blog/
```

![部落格首頁](../../image/other/博客/博客首页.png)

部落格改造自開源專案 [LyraVoid/Mizuki](https://github.com/LyraVoid/Mizuki)。ImgBed 以 Vue 重寫並整合，使其能作為圖床網站的一部分執行。

## 在哪裡設定

部落格設定位於：

```text
System Settings -> Other Settings -> Blog
```

![部落格設定](../../image/other/博客/QQ20260611-221702.png)

## 第一次設定

1. 開啟 `Enable`。
2. 選擇用於儲存部落格設定的 GitHub 帳號。
3. 點選 `Update Blog`。
4. 等待成功訊息。
5. 開啟 `https://your-domain.com/blog/` 查看部落格。

第一次使用時，ImgBed 會在所選帳號下準備一個私有 GitHub 儲存庫：

```text
imgbed-blog-config
```

這個儲存庫用於儲存部落格設定和文章內容。

## 撰寫文章

在你自己的私有 GitHub 儲存庫中編輯部落格文章：

```text
imgbed-blog-config
```

常見流程：

1. 開啟 GitHub。
2. 進入私有 `imgbed-blog-config` 儲存庫。
3. 編輯或新增文章檔案。
4. 提交變更。
5. 回到 ImgBed 管理面板並點選 `Update Blog`，或在部落格首頁左上角連點標誌三次以觸發部落格更新。

`Update Blog` 不會覆蓋你已寫好的內容。它會在需要時初始化儲存庫，並重新整理部落格快取。

## 支援的功能

部落格支援文章列表、分類、標籤、封存、搜尋、深色模式、語言切換等常見部落格功能。

也支援留言和造訪統計。

![部落格留言](../../image/other/博客/支持留言.png)

留言會顯示在文章下方。訪客可以提交頭像、暱稱、電子郵件和留言內容。

造訪統計會顯示文章瀏覽量和網站造訪次數，協助你了解部落格流量。

## 網址

部落格固定在 `/blog/` 路徑下提供服務。

例如你的 ImgBed 網域是：

```text
https://image.example.com
```

部落格網址為：

```text
https://image.example.com/blog/
```

停用部落格後，訪客將無法再存取部落格頁面。
