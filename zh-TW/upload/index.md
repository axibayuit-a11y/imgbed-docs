# 上傳設定

上傳設定用於將 ImgBed 連接到你自己的儲存渠道。設定完成後，使用者上傳的圖片和檔案會儲存到你選擇的服務中，ImgBed 會負責產生存取連結、管理檔案記錄，並在需要時配合預覽、公開圖庫、隨機圖片介面、WebDAV 存取等功能使用。

不同使用者適合的渠道不一樣：如果你想設定簡單，可以從 Telegram、Discord、GitHub Releases 這類渠道開始；如果你更看重容量、速度和長期穩定性，可以選擇 Cloudflare R2、S3、OneDrive、Google Drive、Dropbox、Yandex、pCloud 或自建 WebDAV。

## 開始之前

> 首次使用 ImgBed 前，必須先進入初始化頁面點擊「重建索引」，以補齊必要的 D1 資料表，避免後續功能發生錯誤。
>
> ![初始化時點擊重建索引](../../image/初始化点击重建索引.png)

- 準備好要使用的儲存帳號或 API 憑證。
- 確認 ImgBed 的存取網域已經可用，部分 OAuth 渠道需要填寫回呼地址。
- 新增渠道後，建議先上傳一張測試圖片，確認檔案能正常儲存和存取。

## 渠道目錄

- [Telegram](./telegram.md)
- [Cloudflare R2](./cloudflare-r2.md)
- [S3](./s3.md)
- [WebDAV](./webdav.md)
- [Discord](./discord.md)
- [Hugging Face](./huggingface.md)
- [GitHub Releases](./github-releases.md)
- [GitLab Packages](./gitlab-packages.md)
- [OneDrive](./onedrive.md)
- [Google Drive](./google-drive.md)
- [Dropbox](./dropbox.md)
- [Yandex](./yandex.md)
- [pCloud](./pcloud.md)

## 本章會說明什麼

- 每個上傳渠道需要提前準備哪些資訊。
- 如何在第三方平台建立應用、複製金鑰或授權 Token。
- 如何把渠道設定填回 ImgBed，並確認它可以正常上傳。
