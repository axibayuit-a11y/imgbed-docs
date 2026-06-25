# مدیریت تنظیمات با API Token

مدیریت تنظیمات با API Token برای اسکریپت‌های خودکار، ابزارهای عملیاتی و پنل‌های کنترل بیرونی مناسب است. API Token دارای مجوز `manage` می‌تواند بدون باز کردن پنل مدیریت، تنظیمات کانال‌های آپلود، تنظیمات امنیتی، تنظیمات صفحه‌ها، تنظیمات دیگر و بخشی از روابط سبک فدراسیون را بخواند یا تغییر دهد.

این مجوز فقط عملیات سبک و مناسب اسکریپت را در دسترس می‌گذارد. عملیات سنگین که به تأیید در مرورگر، اجرای دسته‌ای در رابط وب یا پاک‌سازی فهرست‌های فدراسیون نیاز دارند، همچنان باید از پنل مدیریت در مرورگر انجام شوند.

![ویرایش API Token](../../image/Safety/apitoken/编辑api%20token.png)

## آماده‌سازی

در پنل مدیریت باز کنید:

```text
System Settings -> Security Settings -> API Token
```

هنگام ساخت یا ویرایش API Token، مجوز مدیریت را فعال کنید. این مجوز می‌تواند تنظیمات سایت را تغییر دهد، بنابراین فقط به اسکریپت‌ها یا کاربران قابل اعتماد داده شود.

همه عملیات نوشتن در سه اسکریپت مدیریت به‌صورت پیش‌فرض فقط پیش‌نمایش هستند. پس از بررسی پیش‌نمایش، با افزودن `--apply` تغییر واقعاً ذخیره می‌شود.

API Token را می‌توان در متغیر محیطی هم قرار داد:

```powershell
$env:IMGBED_API_TOKEN="your API Token"
```

## دانلود اسکریپت‌های مدیریت

مستندات ImgBed سه اسکریپت Node.js دارد:

| اسکریپت | کاربرد |
| --- | --- |
| <a href="/tools/imgbed-token-upload-settings.mjs" download>دانلود اسکریپت مدیریت تنظیمات آپلود</a> | مدیریت کانال‌های آپلود، کانال‌های فرعی و توازن بار |
| <a href="/tools/imgbed-token-site-settings.mjs" download>دانلود اسکریپت مدیریت تنظیمات سایت</a> | مدیریت تنظیمات امنیتی، تنظیمات صفحه‌ها و تنظیمات دیگر |
| <a href="/tools/imgbed-token-federation.mjs" download>دانلود اسکریپت مدیریت روابط فدراسیون</a> | مدیریت کارهای سبک رابطه، درخواست‌های پیوستن و پیام‌ها |

برای اجرا، Node.js 18 یا نسخه جدیدتر لازم است.

### پارامترهای مشترک

| پارامتر | ضروری | توضیح |
| --- | --- | --- |
| `--base-url <url>` | بله | نشانی سایت ImgBed، مانند `https://image.ai6.me` |
| `--token <token>` | بله | API Token؛ می‌توان از متغیر محیطی `IMGBED_API_TOKEN` هم استفاده کرد |
| `--retries <n>` | خیر | تعداد تلاش دوباره هنگام خطای موقت؛ پیش‌فرض `3` |
| `--timeout-ms <n>` | خیر | زمان مجاز هر درخواست بر حسب میلی‌ثانیه؛ پیش‌فرض `180000` |
| `--output <pretty\|json>` | خیر | قالب خروجی؛ پیش‌فرض `pretty`، برای برنامه‌ها از `json` استفاده کنید |
| `--save-response <path>` | خیر | نتیجه نهایی را در فایل JSON ذخیره می‌کند |
| `--apply` | خیر | نوشتن را واقعاً اجرا می‌کند؛ بدون آن فقط پیش‌نمایش نشان داده می‌شود |
| `-h` / `--help` | خیر | راهنمای اسکریپت را نشان می‌دهد |

## تنظیمات آپلود

اسکریپت تنظیمات آپلود می‌تواند کانال‌های فرعی را فهرست کند، بخواند، ایجاد یا ویرایش کند، حذف کند و توازن بار یک کانال اصلی را روشن یا خاموش کند.

```powershell
node imgbed-token-upload-settings.mjs --base-url "https://your-domain" --token "your API Token" --list
```

### پارامترهای تنظیمات آپلود

| پارامتر | توضیح |
| --- | --- |
| `--list` | گروه‌های تنظیمات آپلود را نشان می‌دهد |
| `--get` | یک کانال اصلی یا کانال فرعی مشخص زیر آن را می‌خواند |
| `--upsert` | کانال فرعی را ایجاد یا ویرایش می‌کند؛ بدون `--apply` فقط پیش‌نمایش است |
| `--delete` | کانال فرعی را حذف می‌کند؛ بدون `--apply` فقط پیش‌نمایش است |
| `--load-balance <true\|false>` | توازن بار یک کانال اصلی را روشن یا خاموش می‌کند |
| `--channel <key>` | کانال اصلی، مانند `s3`، `github` یا `telegram` |
| `--channel-name <name>` | نام کانال فرعی یا حساب |
| `--set key=value` | یک فیلد را تنظیم می‌کند؛ قابل تکرار است و مسیر نقطه‌ای را پشتیبانی می‌کند |
| `--patch-json <path>` | چند فیلد را از فایل JSON ادغام می‌کند |
| `--apply` | تغییر را واقعاً ذخیره می‌کند |

### کلیدهای کانال

| کلید کانال | کانال |
| --- | --- |
| `telegram` / `tg` | Telegram |
| `discord` / `dc` | Discord |
| `cfr2` / `r2` | Cloudflare R2 |
| `s3` | S3 |
| `webdav` / `wd` | کانال ذخیره‌سازی WebDAV |
| `github` / `gh` | GitHub Releases |
| `gitlab` / `gl` | GitLab Packages |
| `huggingface` / `hf` | Hugging Face |
| `onedrive` / `od` | OneDrive |
| `googledrive` / `google` / `gd` | Google Drive |
| `dropbox` / `db` | Dropbox |
| `yandex` / `yx` | Yandex Disk |
| `pcloud` / `pd` | pCloud |

### نمونه‌های تنظیمات آپلود

دیدن همه تنظیمات آپلود:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --list
```

خواندن تنظیمات کانال S3:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get `
  --channel s3
```

خواندن یک کانال فرعی زیر S3:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get `
  --channel s3 `
  --channel-name "backup-s3"
```

ایجاد یا ویرایش کانال فرعی WebDAV. نخست بدون `--apply` اجرا کنید و پیش‌نمایش را ببینید:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --upsert `
  --channel webdav `
  --channel-name "backup-webdav" `
  --set enabled=false `
  --set remark="backup test"
```

پس از بررسی، همان دستور را با `--apply` اجرا کنید:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --upsert `
  --channel webdav `
  --channel-name "backup-webdav" `
  --set enabled=false `
  --set remark="backup test" `
  --apply
```

حذف یک کانال فرعی:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --delete `
  --channel webdav `
  --channel-name "backup-webdav" `
  --apply
```

روشن کردن توازن بار برای S3:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --load-balance true `
  --channel s3 `
  --apply
```

برای تغییر چند فیلد پیچیده، می‌توانید ابتدا یک فایل JSON بنویسید و آن را با `--patch-json` بدهید:

```json
{
  "enabled": true,
  "remark": "primary account"
}
```

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --upsert `
  --channel s3 `
  --channel-name "primary-s3" `
  --patch-json ".\s3-channel.json" `
  --apply
```

## تنظیمات دیگر سایت

اسکریپت تنظیمات سایت سه بخش را مدیریت می‌کند:

| بخش | مقدار `--area` | توضیح |
| --- | --- | --- |
| تنظیمات امنیتی | `security` | احراز هویت کاربر و مدیر، دستگاه‌های ورود، API Token، بررسی تصویر، محدودیت دفعات درخواست کاربر، WebDAV |
| تنظیمات صفحه | `page` | صفحه عمومی، صفحه کاربر، صفحه مدیریت و جلوه‌های نمایشی |
| تنظیمات دیگر | `others` | رابط تصویر تصادفی، گالری عمومی، گره محلی فدراسیون، برچسب‌گذاری خودکار، مکان‌یابی با IP، پشتیبان‌گیری، OCR |

ابتدا بخش‌ها، زیربخش‌ها و فیلدهای قابل ویرایش را ببینید:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --list-sections
```

### پارامترهای تنظیمات سایت

| پارامتر | توضیح |
| --- | --- |
| `--list-sections` | بخش‌ها، زیربخش‌ها و فیلدهای قابل ویرایش را نشان می‌دهد |
| `--get` | یک زیربخش تنظیمات را می‌خواند |
| `--area <security\|page\|others>` | بخش تنظیمات را انتخاب می‌کند |
| `--section <name>` | زیربخش را انتخاب می‌کند؛ نام را مطابق خروجی `--list-sections` وارد کنید |
| `--set key=value` | یک فیلد را تنظیم می‌کند؛ قابل تکرار است |
| `--apply` | تغییر را واقعاً ذخیره می‌کند |

در بخش `page`، مقدار `--set` شناسه تنظیم صفحه است، مانند `starsEffect=true`. در بخش‌های `security` و `others`، نام فیلد داخل زیربخش داده می‌شود، مانند `email=admin@example.com`.

### نمونه‌های تنظیمات سایت

خواندن تنظیمات اعلان به‌روزرسانی سیستم:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get `
  --area security `
  --section systemUpdate
```

تغییر ایمیل اعلان به‌روزرسانی سیستم. نخست بدون `--apply` اجرا کنید:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --area security `
  --section systemUpdate `
  --set email="admin@example.com"
```

پس از بررسی، با `--apply` ذخیره کنید:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --area security `
  --section systemUpdate `
  --set email="admin@example.com" `
  --apply
```

تغییر جلوه ستاره‌ها در صفحه مدیریت:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --area page `
  --section adminSettings `
  --set starsEffect=true `
  --apply
```

تغییر زبان مکان‌یابی با IP:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --area others `
  --section ipGeolocation `
  --set language="en" `
  --apply
```

فیلدهای عادی گره محلی فدراسیون، مانند فعال بودن، پوشه‌های همگام‌سازی و کدهای دعوت، قابل خواندن و ویرایش هستند. تأیید دامنه با API Token انجام نمی‌شود. اگر پنل مدیریت هشدار داد دامنه گره محلی با دامنه فعلی دسترسی یکی نیست، تأیید را در مرورگر انجام دهید.

## روابط فدراسیون

اسکریپت فدراسیون وضعیت گره محلی، گره‌هایی که شما به آن‌ها پیوسته‌اید، گره‌هایی که به گره شما پیوسته‌اند، پیام‌ها، درخواست پیوستن، درخواست دوباره در حالت بی‌رابطه، پذیرش، رد کردن و کارهای سبک بدون پاک‌سازی فهرست را مدیریت می‌کند.

به‌روزرسانی فهرست، حذف فهرست‌های فدراسیون و تأیید تغییر دامنه به جریان کامل مرورگر وابسته‌اند. اسکریپت این عملیات سنگین را انجام نمی‌دهد.

### مرز عملیات سبک و سنگین

| عملیات | پشتیبانی در اسکریپت | توضیح |
| --- | --- | --- |
| دیدن وضعیت گره محلی و فهرست روابط | پشتیبانی می‌شود | فقط دفتر روابط را می‌خواند |
| خواندن و ارسال پیام | پشتیبانی می‌شود | پیام‌های رابطه را می‌خواند یا می‌نویسد |
| درخواست پیوستن به گره دیگر | پشتیبانی می‌شود | از لینک دعوت استفاده می‌کند |
| درخواست دوباره برای رکورد بی‌رابطه | پشتیبانی می‌شود | فقط برای کارت `outgoing` با `lastResult=none`؛ به کد دعوت ۶ کاراکتری نیاز دارد |
| لغو درخواست `outgoing` در انتظار | پشتیبانی می‌شود | فقط درخواست در انتظار را لغو می‌کند |
| پذیرش یا رد درخواست `incoming` | پشتیبانی می‌شود | درخواست‌های واردشده به گره شما را پردازش می‌کند |
| حذف رابطه پذیرفته‌شده `incoming` | پشتیبانی می‌شود | دفتر رابطه ورودی را تغییر می‌دهد و طرف مقابل را آگاه می‌کند |
| حذف رکورد نهایی `incoming` | پشتیبانی می‌شود | فقط رکورد ورودی در وضعیت نهایی را حذف می‌کند |
| لغو اشتراک پذیرفته‌شده `outgoing` | فقط مرورگر | ممکن است به پاک‌سازی فهرست فدراسیون محلی نیاز داشته باشد |
| حذف رکورد نهایی `outgoing` | فقط مرورگر | ممکن است ابتدا به پاک‌سازی فهرست نیاز داشته باشد |
| تأیید یا لغو تغییر دامنه | فقط مرورگر | به تأیید دامنه فعلی و مدیریت رابطه‌های فهرست نیاز دارد |
| انتشار، دریافت یا حذف دسته‌ای فهرست‌ها | فقط مرورگر | از کارهای دسته‌ای رابط وب است |

### پارامترهای روابط فدراسیون

| پارامتر | توضیح |
| --- | --- |
| `--status` | وضعیت گره محلی و روابط `outgoing` و `incoming` را نشان می‌دهد |
| `--list` | فهرست روابط فدراسیون را نشان می‌دهد |
| `--chat` | پیام‌های ذخیره‌شده یک رابطه را می‌خواند |
| `--send-message` | به یک رابطه برقرارشده پیام می‌فرستد |
| `--join` | با لینک دعوت، درخواست پیوستن به گره دیگر می‌دهد |
| `--reapply` | برای رابطه بی‌رکورد دوباره درخواست می‌دهد؛ به کد ۶ کاراکتری نیاز دارد |
| `--accept` | درخواست `incoming` را می‌پذیرد |
| `--deny` | درخواست `incoming` را رد می‌کند |
| `--cancel` | درخواست `outgoing` در انتظار را لغو می‌کند یا رابطه پذیرفته‌شده `incoming` را حذف می‌کند |
| `--delete` | رکورد نهایی `incoming` را حذف می‌کند |
| `--direction <outgoing\|incoming\|all>` | جهت رابطه؛ `outgoing` یعنی گره‌هایی که شما به آن‌ها پیوسته‌اید، `incoming` یعنی گره‌هایی که به گره شما پیوسته‌اند |
| `--domain <url>` | دامنه گره رابطه |
| `--invite-link <url>` | لینک دعوت گره دیگر |
| `--invite-code <code>` | کد دعوت ۶ کاراکتری برای درخواست دوباره |
| `--text <message>` | متن پیام |
| `--apply` | تغییر را واقعاً ذخیره می‌کند |

### نمونه‌های روابط فدراسیون

دیدن وضعیت گره محلی و هر دو فهرست رابطه:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --status
```

فقط دیدن گره‌هایی که شما به آن‌ها پیوسته‌اید:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --list `
  --direction outgoing
```

فقط دیدن گره‌هایی که به گره شما پیوسته‌اند:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --list `
  --direction incoming
```

درخواست پیوستن با لینک دعوت. نخست بدون `--apply` اجرا کنید:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --join `
  --invite-link "https://peer-domain/federation/invite/abcdef"
```

پس از بررسی، ذخیره کنید:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --join `
  --invite-link "https://peer-domain/federation/invite/abcdef" `
  --apply
```

درخواست دوباره برای رابطه بی‌رکورد:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --reapply `
  --domain "https://peer-domain" `
  --invite-code "abc123" `
  --apply
```

پذیرش درخواست `incoming`:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --accept `
  --domain "https://peer-domain" `
  --apply
```

رد درخواست `incoming`:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --deny `
  --domain "https://peer-domain" `
  --apply
```

ارسال پیام به رابطه برقرارشده:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --send-message `
  --direction outgoing `
  --domain "https://peer-domain" `
  --text "Hello, this is a test message." `
  --apply
```

لغو درخواست `outgoing` در انتظار:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --cancel `
  --direction outgoing `
  --domain "https://peer-domain" `
  --apply
```

حذف رابطه پذیرفته‌شده `incoming`:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --cancel `
  --direction incoming `
  --domain "https://peer-domain" `
  --apply
```

حذف رکورد نهایی `incoming`:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --delete `
  --direction incoming `
  --domain "https://peer-domain" `
  --apply
```

لغو اشتراک پذیرفته‌شده `outgoing` و حذف رکورد `outgoing` باید از پنل مدیریت در مرورگر انجام شود، چون ممکن است لازم باشد ابتدا فهرست فدراسیون محلی پاک‌سازی شود.

### ناهماهنگی دامنه

اگر دامنه ذخیره‌شده گره محلی با دامنه در انتظار در رابطه یکی نباشد، اسکریپت فوراً خطا می‌دهد و `currentDomain` و `pendingDomain` را نشان می‌دهد. این حالت باید در پنل مدیریت مرورگر رسیدگی شود، چون تغییر دامنه به پاک‌سازی و تأیید فهرست خروجی هم وابسته است.

اگر درخواست پیوستن خطای `FEDERATION_NODE_DOMAIN_MISMATCH` برگرداند، یعنی دامنه لینک دعوت با دامنه ذخیره‌شده گره مقصد یکی نیست. پاسخ شامل `currentOrigin` و `detectedOrigin` خواهد بود. از دامنه تأییدشده طرف مقابل استفاده کنید یا از او بخواهید ابتدا دامنه را در پنل مدیریت مرورگر تأیید کند.

## پرسش‌های رایج

### دستور تغییر را اجرا کردم اما چیزی اعمال نشد

دستورات نوشتن به‌صورت پیش‌فرض فقط پیش‌نمایش هستند. پس از بررسی پیش‌نمایش، `--apply` اضافه کنید تا ذخیره واقعی انجام شود.

### از کجا بدانم کدام فیلدها قابل تغییر هستند

برای تنظیمات آپلود ابتدا `--get` را اجرا کنید تا ساختار کانال فرعی موجود را ببینید. برای تنظیمات امنیتی، صفحه و تنظیمات دیگر ابتدا `--list-sections` را اجرا کنید تا بخش‌ها، زیربخش‌ها و فیلدهای مجاز را ببینید.

### می‌خواهم نتیجه را در برنامه دیگری استفاده کنم

از `--output json` یا `--save-response result.json` استفاده کنید. برنامه می‌تواند فایل JSON ذخیره‌شده را مستقیم بخواند.

