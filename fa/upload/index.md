# تنظیمات آپلود

تنظیمات آپلود، ImgBed را به کانال‌های ذخیره‌سازی خودتان وصل می‌کند. پس از پیکربندی یک کانال، تصاویر و فایل‌های آپلودشده در سرویسی که انتخاب کرده‌اید ذخیره می‌شوند. ImgBed لینک‌های دسترسی، رکوردهای فایل، پیش‌نمایش‌ها، گالری عمومی، API تصویر تصادفی، دسترسی WebDAV و جریان‌های مرتبط را مدیریت می‌کند.

هر کاربر ممکن است کانال متفاوتی را ترجیح دهد. اگر شروع ساده می‌خواهید، Telegram، Discord یا GitHub Releases گزینه‌های مناسبی هستند. اگر ظرفیت، سرعت و پایداری بلندمدت برایتان مهم‌تر است، Cloudflare R2، S3، OneDrive، Google Drive، Dropbox، Yandex، pCloud یا سرویس WebDAV خودتان را در نظر بگیرید.

## پیش از شروع

- حساب ذخیره‌سازی یا API credentials مورد نیاز را آماده کنید.
- مطمئن شوید دامنه ImgBed در دسترس است، چون کانال‌های OAuth به callback URL نیاز دارند.
- پس از افزودن کانال، ابتدا یک تصویر آزمایشی آپلود کنید تا ذخیره و باز شدن فایل را بررسی کنید.

## فهرست کانال‌ها

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

## این فصل چه چیزهایی را توضیح می‌دهد

- هر کانال آپلود پیش از راه‌اندازی به چه اطلاعاتی نیاز دارد.
- چگونه در پلتفرم‌های بیرونی app بسازید، key کپی کنید یا Token را authorize کنید.
- چگونه تنظیمات کانال را در ImgBed وارد کنید و از کارکرد آپلود مطمئن شوید.
