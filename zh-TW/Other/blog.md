# 部落格使用說明

部落格功能可以替 ImgBed 站台新增一個獨立部落格頁面。

啟用後，訪客可以透過：

```text
https://你的網域/blog/
```

瀏覽部落格。

![部落格首頁](../../image/other/博客/博客首页.png)

部落格頁面改作自 [LyraVoid/Mizuki](https://github.com/LyraVoid/Mizuki) 開源專案。感謝原專案開源，ImgBed 以 Vue 重寫並整合到目前圖床專案中。

## 入口位置

部落格設定在：

```text
系統設定 -> 其他設定 -> 部落格
```

![部落格設定](../../image/other/博客/QQ20260611-221702.png)

## 第一次使用

1. 打開「啟用」開關。
2. 選擇用來存放部落格設定的 GitHub 帳號。
3. 點「更新部落格」。
4. 等系統提示更新成功。
5. 前往 `https://你的網域/blog/` 查看部落格。

第一次使用時，系統會在你選的 GitHub 帳號下準備一個私有 repo：

```text
imgbed-blog-config
```

這個 repo 用來保存部落格設定和文章內容。

## 怎麼寫文章

文章內容在你自己的 GitHub 私有 repo 裡修改：

```text
imgbed-blog-config
```

常見流程：

1. 打開 GitHub。
2. 進入 `imgbed-blog-config` 私有 repo。
3. 修改或新增文章檔案。
4. Commit 儲存。
5. 回 ImgBed 後台點「更新部落格」，或在部落格首頁左上角 Logo 連點三次觸發更新。

「更新部落格」不會覆蓋你已經寫好的內容，主要用來初始化 repo 或刷新部落格快取。

## 支援功能

部落格支援文章列表、分類、標籤、封存、搜尋、深色模式、多語切換等常見功能。

也支援留言和瀏覽統計。

![部落格留言](../../image/other/博客/支持留言.png)

留言會顯示在文章下方。訪客可以填頭像、暱稱、Email 和留言內容後送出。

瀏覽統計會顯示文章瀏覽量、站台訪問次數等資訊，方便你了解部落格流量。

## 訪問網址

部落格固定在 `/blog/` 路徑下。

例如你的 ImgBed 網域是：

```text
https://image.example.com
```

部落格網址就是：

```text
https://image.example.com/blog/
```

關閉部落格後，訪客將無法訪問部落格頁面。
