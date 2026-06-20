# WebDAV Site Access (Beta)

تنظیم WebDAV در Security Settings، سایت ImgBed شما را به‌عنوان WebDAV endpoint در دسترس قرار می‌دهد.

بعد از enable شدن، می‌توانید با Windows، macOS، mobile file managers یا هر WebDAV-compatible client، files داخل ImgBed را مثل یک remote folder browse، upload، delete و manage کنید.

این entry مربوط به WebDAV access خود سایت است و با WebDAV storage channel در Upload Settings فرق دارد. upload channel، files را در سرویس WebDAV شخص ثالث ذخیره می‌کند. این setting باعث می‌شود سایت ImgBed شما به clients، WebDAV access بدهد.

## کجا Configure کنیم

admin panel را باز کنید و بروید به:

```text
System Settings -> Security Settings -> WebDAV
```

settings موجود:

- Enable
- Username
- Password
- Image loading mode
- Default channel

## این Feature چه می‌کند

پس از enable شدن WebDAV، ImgBed یک access URL ثابت ارائه می‌کند:

```text
https://your-domain.com/dav
```

برای اتصال به ImgBed file directory از همین URL استفاده کنید.

موارد استفاده مناسب:

- browse کردن مستقیم ImgBed files از file manager کامپیوتر.
- drag کردن images داخل WebDAV folder برای upload.
- organize کردن ImgBed folders از local file manager.
- sync یا manage کردن images با WebDAV-compatible software.
- دسترسی به ImgBed content بدون باز کردن admin panel.

## Settings

### Enable

WebDAV endpoint را روشن می‌کند.

وقتی disabled باشد، clients نمی‌توانند از طریق WebDAV وصل شوند.

### Username و Password

WebDAV clients هنگام اتصال از این credentials استفاده می‌کنند.

یک WebDAV username و password اختصاصی استفاده کنید. admin password یا upload password را دوباره استفاده نکنید.

اگر username یا password خالی باشد، WebDAV clients درست connect نمی‌شوند.

### Image Loading Mode

Image loading mode مشخص می‌کند WebDAV clients هنگام خواندن images، کدام image URL را ترجیح دهند.

گزینه‌های رایج:

| Mode | Description |
| --- | --- |
| Smart loading | ImgBed بر اساس context انتخاب می‌کند. برای استفاده عادی recommended. |
| Original | original images را ترجیح می‌دهد. |
| Thumbnail | thumbnails را ترجیح می‌دهد. برای fast preview مفید است. |

اگر مطمئن نیستید، `Smart loading` را نگه دارید.

### Default Channel

default channel برای WebDAV uploads استفاده می‌شود.

وقتی از Windows یا client دیگر files را داخل WebDAV directory copy می‌کنید، ImgBed آن‌ها را از طریق selected default upload channel upload می‌کند.

اگر default channel انتخاب نشده باشد، browsing ممکن است کار کند، اما uploads fail می‌شوند.

## دسترسی به WebDAV در Windows 11

Windows 11 می‌تواند WebDAV را به‌عنوان network location اضافه کند.

1. `This PC` را باز کنید.
2. `Add a network location` را انتخاب کنید.
3. `https://your-domain.com/dav` را وارد کنید.
4. وقتی prompt آمد، WebDAV username و password را وارد کنید.
5. wizard را کامل کنید. سپس WebDAV directory در File Explorer باز می‌شود.

![Add WebDAV in Windows 11](../../image/Safety/webdav在win11配置.png)

بعد از اضافه شدن، WebDAV directory در Windows File Explorer ظاهر می‌شود. می‌توانید مثل folder عادی files را open، copy و manage کنید.

![WebDAV in Windows](../../image/Safety/webdav在win显示效果.png)

## Supported Operations

پس از اتصال موفق WebDAV، معمولاً می‌توانید:

- files و folders را ببینید.
- files upload کنید.
- folders بسازید.
- files یا folders را rename کنید.
- files را move کنید.
- files را delete کنید.

WebDAV برای everyday access و مدیریت file در مقیاس کوچک مناسب است. برای moves بزرگ، bulk deletes یا organization پیچیده، admin panel را استفاده کنید.

## Login Device Management

اتصال‌های موفق WebDAV در tab مربوط به WebDAV داخل Login Device Management هم ظاهر می‌شوند.

می‌توانید آنجا WebDAV clients را review کنید و در صورت نیاز old devices را force offline کنید.

اگر WebDAV username یا password را تغییر دهید، old clients باید دوباره sign in کنند.

## FAQ

### Windows مدام Username و Password می‌خواهد

بررسی کنید:

- URL برابر `https://your-domain.com/dav` باشد.
- username و password با WebDAV settings مطابقت داشته باشند.
- WebDAV enabled باشد.
- site از طریق HTTPS قابل دسترسی باشد.

### Browsing کار می‌کند، اما Uploading fail می‌شود

`Default channel` را بررسی کنید.

WebDAV uploads به default upload channel نیاز دارد. اگر missing، disabled یا misconfigured باشد، uploads ممکن است fail شوند.

### Access Speed ناپایدار است

WebDAV performance به client، network، file count و default upload channel وابسته است.

اگر یک directory files زیادی دارد، آن‌ها را در folders organize کنید و تعداد زیادی file را در یک directory نگه ندارید.

## Security Recommendations

- برای WebDAV access از HTTPS استفاده کنید.
- password قوی تنظیم کنید.
- WebDAV password را با افراد غیرقابل‌اعتماد share نکنید.
- وقتی استفاده نمی‌کنید WebDAV را off کنید.
- در Login Device Management، WebDAV devices استفاده‌نشده را دوره‌ای clean up کنید.

## WebDAV Upload File Size

WebDAV clients از large-file chunking flow مربوط به browser upload page استفاده نمی‌کنند. برای files بزرگ‌تر از suggested limits زیر، از web upload page استفاده کنید.

| Default Upload Channel | Suggested Single-File Limit for WebDAV |
| --- | ---: |
| Telegram | 20 MB |
| Discord | 10 MB |
| Cloudflare R2 | 30 MB |
| S3 | 30 MB |
| GitHub Releases | 64 MB |
| GitLab Packages | 64 MB |
| Hugging Face | 20 MB |
| OneDrive | 30 MB |
| Google Drive | 30 MB |
| Dropbox | 30 MB |
| Yandex Disk | 30 MB |
| pCloud | 30 MB |
| WebDAV | 64 MB |
