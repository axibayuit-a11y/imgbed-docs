# 上傳設定

上傳設定用來把 ImgBed 連接到你自己的儲存渠道。設定完成後，使用者上傳的圖片與檔案會保存到你選擇的服務中，ImgBed 會負責建立存取連結、管理檔案記錄，並配合預覽、公開圖庫、隨機圖片 API、WebDAV 存取等功能使用。

不同使用情境適合不同渠道。想快速上手，可以先從 Telegram、Discord、GitHub Releases 開始；如果更重視容量、速度與長期穩定性，可以選擇 Cloudflare R2、S3、OneDrive、Google Drive、Dropbox、Yandex、pCloud 或自架 WebDAV。

## 開始之前

- 準備好要使用的儲存帳號或 API 憑證。
- 確認 ImgBed 的網站網域可以正常存取，部分 OAuth 渠道需要填寫 callback URL。
- 新增渠道後，建議先上傳一張測試圖片，確認檔案可以正常保存與開啟。

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

## 這一章會說明什麼

- 每個上傳渠道需要先準備哪些資訊。
- 如何在第三方平台建立應用、複製金鑰或取得授權 Token。
- 如何把渠道設定填回 ImgBed，並確認它可以正常上傳。
