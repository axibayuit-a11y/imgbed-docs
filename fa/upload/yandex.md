# افزودن کانال Yandex

## ابتدا چه چیزهایی لازم است

| مورد | چرا لازم است |
| --- | --- |
| حساب Yandex | برای ورود و مجوزدهی Yandex Disk استفاده می‌شود |
| برنامه OAuth در Yandex | برای تولید `Client ID` و `Client Secret` استفاده می‌شود |
| دامنه ImgBed شما | به‌عنوان URI بازگشت OAuth استفاده می‌شود |
| فضای ذخیره‌سازی در دسترس در Yandex Disk | محل واقعی ذخیره فایل‌ها خواهد بود |

## مراحل پیکربندی

### مرحله 1: ساخت برنامه OAuth در Yandex

1. صفحه ساخت برنامه OAuth در Yandex را باز کنید:

```text
https://oauth.yandex.com/client/new
```

2. اگر به صفحه ورود هدایت شدید، ابتدا با حساب Yandex خود وارد شوید.
3. یک برنامه جدید بسازید.
4. نامی قابل تشخیص برای برنامه انتخاب کنید، مانند `imgbed-yandex`.
5. تنظیمات URL بازگشت یا تغییرمسیر را پیدا کنید.
6. وارد کنید:

```text
https://your-domain.com/api/oauth/yandex/callback
```

### مرحله 2: تأیید مجوزها

برای یکپارچه‌سازی فعلی Yandex در ImgBed، این چهار مجوز را در `Yandex.Disk REST API` نگه دارید:

| مجوز | کاربرد |
| --- | --- |
| `cloud_api:disk.app_folder` | اجازه می‌دهد ImgBed فایل‌ها را در پوشه برنامه ذخیره کند |
| `cloud_api:disk.read` | خواندن فایل‌ها و لینک‌های دانلود |
| `cloud_api:disk.write` | بارگذاری فایل‌ها، ساخت پوشه‌ها و حذف فایل‌ها |
| `Access to information about Yandex.Disk` | خواندن سهمیه دیسک و فضای مصرف‌شده |

اگر این مجوزها را در `Yandex ID API` هم دیدید، اختیاری هستند:

| متن مجوز | پیشنهاد |
| --- | --- |
| `Access to username, first name and surname, gender` | اختیاری |
| `Access to email address` | اختیاری |

قابلیت‌های اصلی بارگذاری، دانلود، حذف و سهمیه عمدتاً به چهار مجوز بالا در `Yandex.Disk REST API` وابسته‌اند.

![پیکربندی مجوزهای Yandex Disk](../../image/upload/yandex/dataaccess配置软盘权限.png)

### مرحله 3: کپی کردن اعتبارنامه‌های برنامه

پس از ساخت برنامه، این موارد را کپی کنید:

| فیلد Yandex | فیلد ImgBed |
| --- | --- |
| `Client ID` | `Client ID` |
| `Client Secret` | `Client Secret` |

![ثبت Client ID و Secret](../../image/upload/yandex/记录客户端id和secret.png)

### مرحله 4: تکمیل کانال Yandex

در تنظیمات بارگذاری، `Yandex` را انتخاب کنید و این فیلدها را تکمیل کنید:

| فیلد ImgBed | مقدار لازم |
| --- | --- |
| نام کانال | نامی قابل تشخیص، مانند `Main Yandex` |
| Client ID | `Client ID` برنامه Yandex |
| Client Secret | `Client Secret` برنامه Yandex |
| Refresh Token | فعلاً خالی بگذارید |
| دایرکتوری ریشه | اختیاری. مقدار پیش‌فرض `imgbed` است. |

![ویرایش پیکربندی کانال](../../image/upload/yandex/编辑配置渠道.png)

### مرحله 5: دریافت Refresh Token

1. در ImgBed روی `Get Token` کلیک کنید.
2. وارد حساب Yandex موردنظر برای اتصال شوید.
3. درخواست مجوزدهی را تأیید کنید.
4. صفحه بازگشت یک `Refresh Token` نمایش می‌دهد.
5. آن را کپی کنید.
6. به ImgBed برگردید و آن را در فیلد `Refresh Token` قرار دهید.

![کپی کردن refresh token پس از مجوزدهی](../../image/upload/yandex/授权后复制刷新令牌.png)

### مرحله 6: ذخیره کانال

پس از تکمیل همه فیلدها، کانال را ذخیره کنید.

## جریان سریع

```text
Open Yandex OAuth Console
-> Create an app
-> Add https://your-domain.com/api/oauth/yandex/callback
-> Confirm Yandex Disk permissions
-> Copy Client ID and Client Secret
-> Fill Client ID / Client Secret into ImgBed
-> Click Get Token
-> Copy the Refresh Token from the callback page
-> Paste it back into ImgBed and save
```

## منابع

1. ثبت برنامه Yandex: https://yandex.com/dev/id/doc/en/register-client
2. دریافت کد مجوزدهی از طریق URL: https://yandex.com/dev/id/doc/en/codes/code-url
3. اندپوینت توکن OAuth در Yandex: https://yandex.com/dev/id/doc/en/tokens/token
