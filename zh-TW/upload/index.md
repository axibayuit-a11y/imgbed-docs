# 上傳設定

上傳設定用于把 ImgBed 連接到你自己的存儲渠道。設定完成後，使用者上傳的圖片和檔案會保存到你選擇的服務中，ImgBed 負責生成訪問連結、管理檔案記錄，并在需要時配合預覽、公開圖庫、隨機圖片接口、WebDAV 訪問等功能使用。

不同使用者適合的渠道不一樣：如果你想設定簡單，可以從 Telegram、Discord、GitHub Releases 這類渠道開始；如果你更看重容量、速度和長期穩定性，可以選擇 Cloudflare R2、S3、OneDrive、Google Drive、Dropbox、Yandex、pCloud 或自建 WebDAV。

## 開始之前

- 準備好要使用的存儲帳號或 API 憑據。
- 確認 ImgBed 的訪問域名已經可用，部分 OAuth 渠道需要填寫回調地址。
- 新增渠道後，建議先上傳一張測試圖片，確認檔案能正常保存和訪問。

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
- 如何在第三方平臺建立應用、複製密鑰或授權 Token。
- 如何把渠道設定填回 ImgBed，并確認它可以正常上傳。
