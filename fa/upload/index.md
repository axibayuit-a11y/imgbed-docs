# تنظیمات آپلود

این بخش همان ترتیب channelهای صفحه System Settings را دنبال می‌کند تا بتوانید مستقیم سراغ storage provider موردنظر بروید.

## ساختار این بخش

- هر provider صفحه جداگانه دارد. جدا بودن 13 upload channel باعث می‌شود مراحل راه‌اندازی راحت‌تر دنبال شود.
- تصاویر در مسیر `../../image/upload/provider-name/` نگهداری می‌شوند و از هر صفحه به‌صورت local ارجاع داده شده‌اند.
- در نسخه فارسی، نام fieldهای UI و اصطلاحات فنی محصول در جاهای لازم به انگلیسی نگه داشته شده‌اند.

## فهرست Channelها

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

## این فصل چه چیزهایی را پوشش می‌دهد

- روش اضافه کردن هر upload channel.
- credentials، keys یا IDs موردنیاز پیش از اضافه کردن channel.
- روش بررسی اینکه channel برای upload آماده است یا نه.

جزئیات troubleshooting، quota strategy و best practices در صفحه‌های مربوطه آمده است.
