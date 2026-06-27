# Upload Settings

Upload Settings connects ImgBed to your own storage channels. After a channel is configured, uploaded images and files are saved to the service you choose. ImgBed then manages file records, access links, previews, public gallery features, random image API access, WebDAV access, and related workflows.

Different users may prefer different channels. If you want a simple setup, Telegram, Discord, or GitHub Releases can be good starting points. If you care more about capacity, speed, and long-term stability, consider Cloudflare R2, S3, OneDrive, Google Drive, Dropbox, Yandex, pCloud, or your own WebDAV service.

## Before You Start

> Before using ImgBed for the first time, you must open the initialization page and click "Rebuild Index" to complete the required D1 tables and avoid errors in later features.
>
> ![Click Rebuild Index during initialization](../../image/初始化点击重建索引.png)

- Prepare the storage account or API credentials you want to use.
- Make sure your ImgBed domain is reachable, because OAuth-based channels need callback URLs.
- After adding a channel, upload a test image first to confirm that files can be saved and opened correctly.

## Channel Directory

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

## What This Chapter Covers

- What each upload channel needs before setup.
- How to create apps, copy keys, or authorize tokens on third-party platforms.
- How to fill the channel configuration back into ImgBed and confirm uploads work.
