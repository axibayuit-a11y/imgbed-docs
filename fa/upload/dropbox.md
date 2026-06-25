# افزودن کانال Dropbox

## ابتدا چه چیزهایی لازم است

| مورد | چرا لازم است |
| --- | --- |
| حساب Dropbox | برای ورود و مجوزدهی به برنامه استفاده می‌شود |
| برنامه Dropbox | برای تولید `App Key` و `App Secret` استفاده می‌شود |
| دامنه ImgBed شما | به‌عنوان URI بازگشت OAuth استفاده می‌شود |
| فضای ذخیره‌سازی در دسترس در Dropbox | محل واقعی ذخیره فایل‌ها خواهد بود |

## مراحل پیکربندی

### مرحله 1: ساخت برنامه Dropbox

1. Dropbox App Console را باز کنید:

```text
https://www.dropbox.com/developers/apps
```

2. یک برنامه جدید بسازید.
3. برای نوع دسترسی، این گزینه را انتخاب کنید:

```text
App folder
```

4. نامی قابل تشخیص برای برنامه انتخاب کنید، مانند `imgbed-app`.
5. پس از ساخت برنامه، صفحه جزئیات آن را باز کنید.

نوع دسترسی پیشنهادی:

| نوع دسترسی | پیشنهاد |
| --- | --- |
| `App folder` | پیشنهادی. با روش ذخیره فایل‌ها در ImgBed هماهنگ است. |
| `Full Dropbox` | توصیه نمی‌شود. ImgBed به دسترسی کامل به کل حساب نیاز ندارد. |

![ساخت برنامه Dropbox](../../image/upload/dropbox/开发者创建应用.png)

### مرحله 2: افزودن URI بازگشت

در صفحه جزئیات برنامه Dropbox، تنظیمات OAuth یا URI بازگشت را پیدا کنید و این مقدار را اضافه کنید:

```text
https://your-domain.com/api/oauth/dropbox/callback
```

اگر پنل مدیریت را از چند دامنه استفاده می‌کنید، URL بازگشت متناظر هر دامنه را اضافه کنید.

![پیکربندی Redirect URI](../../image/upload/dropbox/配置回调地址.png)

### مرحله 3: پیکربندی مجوزهای برنامه

زبانه `Permissions` را باز کنید و دست‌کم این محدوده‌های دسترسی را فعال کنید:

| محدوده | الزامی | کاربرد |
| --- | --- | --- |
| `account_info.read` | الزامی | خواندن اطلاعات حساب و سهمیه |
| `files.metadata.read` | الزامی | خواندن فراداده فایل‌ها و پوشه‌ها برای بررسی مسیر |
| `files.metadata.write` | الزامی | ساخت پوشه‌ها و نوشتن فراداده |
| `files.content.write` | الزامی | بارگذاری فایل‌ها. اگر این محدوده وجود نداشته باشد، خطای `required scope 'files.content.write'` نمایش داده می‌شود. |
| `files.content.read` | پیشنهادی | امکان دانلود، پیش‌نمایش و لینک‌های موقت فایل را فراهم می‌کند |

پس از انتخاب محدوده‌ها، پایین صفحه روی `Submit` کلیک کنید.

![افزودن مجوزها](../../image/upload/dropbox/添加对应的权限.png)

مهم:

| وضعیت | کار لازم |
| --- | --- |
| محدوده‌ها را تغییر دادید | جریان مجوزدهی توکن را دوباره اجرا کنید و یک `Refresh Token` جدید بگیرید. |
| دوباره مجوزدهی نکردید | توکن قدیمی مجوزهای جدید را دریافت نمی‌کند، بنابراین بارگذاری‌ها ممکن است همچنان شکست بخورند. |

### مرحله 4: کپی کردن اعتبارنامه‌های برنامه

این دو مقدار را از صفحه برنامه Dropbox ذخیره کنید:

| فیلد Dropbox | فیلد ImgBed |
| --- | --- |
| `App key` | `App Key` |
| `App secret` | `App Secret` |

### مرحله 5: تکمیل کانال Dropbox

در تنظیمات بارگذاری، `Dropbox` را انتخاب کنید و این فیلدها را تکمیل کنید:

| فیلد ImgBed | مقدار لازم |
| --- | --- |
| نام کانال | نامی قابل تشخیص، مانند `Main Dropbox` |
| App Key | مقدار `App key` در Dropbox |
| App Secret | مقدار `App secret` در Dropbox |
| Refresh Token | فعلاً خالی بگذارید |
| دایرکتوری ریشه | اختیاری. مقدار پیش‌فرض `imgbed` است. |
| یادداشت | اختیاری |

![دریافت توکن](../../image/upload/dropbox/获取令牌.png)

### مرحله 6: دریافت Refresh Token

1. در ImgBed روی `Get Token` کلیک کنید.
2. وارد حساب Dropbox موردنظر برای اتصال شوید.
3. درخواست مجوزدهی را تأیید کنید.
4. صفحه بازگشت یک `Refresh Token` نمایش می‌دهد.
5. آن را کپی کنید.
6. به ImgBed برگردید و آن را در فیلد `Refresh Token` قرار دهید.

![کپی کردن توکن](../../image/upload/dropbox/复制令牌.png)

## روش بررسی

| بررسی | نتیجه مورد انتظار |
| --- | --- |
| کارت کانال | کانال Dropbox پس از ذخیره نمایش داده شود. |
| کلید کانال | کانال قابل فعال‌سازی باشد. |
| توکن ذخیره شده است | صفحه جزئیات نشان دهد `Refresh Token` ذخیره شده است. |
| آزمایش بارگذاری | یک تصویر آزمایشی در پوشه برنامه Dropbox ظاهر شود. |

اگر محدودیت‌های سهمیه فعال هستند، روی استعلام سهمیه کلیک کنید. پس از استعلام موفق، کارت کانال فضای مصرف‌شده، فضای کل و زمان آخرین به‌روزرسانی را نشان می‌دهد.

![استعلام موفق سهمیه](../../image/upload/dropbox/查询额度成功.png)

## عیب‌یابی

| مشکل | راه‌حل |
| --- | --- |
| ImgBed اعلام می‌کند پیکربندی ناقص است | بررسی کنید `App Key`، `App Secret` و `Refresh Token` همگی تکمیل شده باشند. |
| مجوزدهی کامل می‌شود اما `Refresh Token` نمایش داده نمی‌شود | دوباره روی `Get Token` کلیک کنید و مطمئن شوید جریان مجوزدهی آفلاین استفاده می‌شود. |
| بارگذاری با خطای `required scope 'files.content.write'` شکست می‌خورد | `files.content.write` را فعال کنید، روی `Submit` کلیک کنید و سپس یک `Refresh Token` جدید بگیرید. |
| بازگشت شکست می‌خورد | مطمئن شوید URI بازگشت برابر `https://your-domain.com/api/oauth/dropbox/callback` است. |
| فایل‌ها پیدا نمی‌شوند | مطمئن شوید برنامه Dropbox در حالت `App folder` ساخته شده است. |

## جریان سریع

```text
Open Dropbox App Console
-> Create an app
-> Choose App folder access
-> Add https://your-domain.com/api/oauth/dropbox/callback
-> Enable account_info.read / files.metadata.read / files.metadata.write / files.content.write
-> Optionally enable files.content.read
-> Click Submit
-> Copy App Key and App Secret
-> Fill them into ImgBed
-> Click Get Token
-> Copy the Refresh Token from the callback page
-> Paste it back into ImgBed and save
```

## منابع

1. Dropbox App Console: https://www.dropbox.com/developers/apps
2. راهنمای OAuth در Dropbox: https://developers.dropbox.com/oauth-guide
3. راهنمای توسعه‌دهندگان Dropbox: https://www.dropbox.com/developers/reference/developer-guide
