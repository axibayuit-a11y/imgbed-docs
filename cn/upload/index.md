# 上传设置

上传设置用于把 ImgBed 连接到你自己的存储渠道。配置完成后，用户上传的图片和文件会保存到你选择的服务中，ImgBed 负责生成访问链接、管理文件记录，并在需要时配合预览、公开图库、随机图片接口、WebDAV 访问等功能使用。

不同用户适合的渠道不一样：如果你想配置简单，可以从 Telegram、Discord、GitHub Releases 这类渠道开始；如果你更看重容量、速度和长期稳定性，可以选择 Cloudflare R2、S3、OneDrive、Google Drive、Dropbox、Yandex、pCloud 或自建 WebDAV。

## 开始之前

> 首次使用 ImgBed 前，必须先进入初始化页面点击「重建索引」，以补齐必要的 D1 数据表，避免后续功能报错。
>
> ![初始化时点击重建索引](../../image/初始化点击重建索引.png)

- 准备好要使用的存储账号或 API 凭据。
- 确认 ImgBed 的访问域名已经可用，部分 OAuth 渠道需要填写回调地址。
- 添加渠道后，建议先上传一张测试图片，确认文件能正常保存和访问。

## 渠道目录

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

## 本章会说明什么

- 每个上传渠道需要提前准备哪些信息。
- 如何在第三方平台创建应用、复制密钥或授权 Token。
- 如何把渠道配置填回 ImgBed，并确认它可以正常上传。
