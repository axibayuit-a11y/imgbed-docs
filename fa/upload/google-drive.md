# افزودن کانال Google Drive

## ابتدا چه چیزهایی لازم است

پیش از شروع، این موارد را آماده کنید:

| مورد | چرا لازم است |
| --- | --- |
| حساب Google | برای دسترسی به Google Cloud و مجوزدهی Google Drive استفاده می‌شود |
| پروژه Google Cloud | برای فعال کردن Drive API و ساخت اعتبارنامه‌های OAuth استفاده می‌شود |
| کلاینت OAuth 2.0 | ImgBed از آن برای دریافت `Client ID`، `Client Secret` و `Refresh Token` استفاده می‌کند |
| دامنه ImgBed شما | به‌عنوان URI بازگشت OAuth استفاده می‌شود. باید با دامنه‌ای که واقعاً استفاده می‌کنید مطابقت داشته باشد. |

## مراحل پیکربندی

### مرحله 1: فعال کردن Google Drive API

1. Google Cloud Console را باز کنید.
2. یک پروژه جدید بسازید یا پروژه موجود را انتخاب کنید.
3. به `APIs & Services` بروید.
4. روی `Enable APIs and Services` کلیک کنید.
5. `Google Drive API` را جست‌وجو کنید.
6. آن را باز کنید و روی فعال‌سازی کلیک کنید.

### مرحله 2: پیکربندی صفحه رضایت OAuth

1. در Google Cloud، `Google Auth Platform` را باز کنید.
2. اطلاعات پایه در `Branding` را کامل کنید، مانند نام برنامه، ایمیل پشتیبانی و ایمیل تماس توسعه‌دهنده.
3. `Audience` را باز کنید.
4. برای بیشتر استقرارهای شخصی خودمیزبان، `External` را انتخاب کنید.
5. اگر `External` را انتخاب کردید، حساب Google موردنظر برای مجوزدهی را در `Test users` اضافه کنید.
6. `Data Access` را باز کنید.
7. مجوزهای موردنیاز Google Drive را اضافه کنید.

### مرحله 3: ساخت کلاینت OAuth 2.0

1. در `Google Auth Platform`، `Clients` را باز کنید.
2. یک کلاینت جدید بسازید.
3. نوع برنامه را `Web application` قرار دهید.
4. برای کلاینت نامی قابل تشخیص وارد کنید.
5. در بخش مبدأهای JavaScript مجاز، URL مربوط به ImgBed را وارد کنید، برای مثال:

```text
https://img.example.com
```

6. در بخش URIهای بازگشت مجاز، وارد کنید:

```text
https://img.example.com/api/oauth/google/callback
```

![ساخت کلاینت OAuth](../../image/upload/google-drive/oa客户端id创建.png)

![وارد کردن دامنه و URL بازگشت](../../image/upload/google-drive/填写oa客户端url信息.png)

پس از ساخت کلاینت، این مقدارها را کپی کنید:

| مقدار تولیدشده | فیلد ImgBed |
| --- | --- |
| Client ID | `Client ID` |
| Client Secret | `Client Secret` |

## مرحله 4: تکمیل کانال Google Drive

در تنظیمات بارگذاری، `Google Drive` را انتخاب کنید و این فیلدها را تکمیل کنید:

| فیلد ImgBed | مقدار لازم |
| --- | --- |
| نام کانال | نامی قابل تشخیص، مانند `Main Google Drive` |
| Client ID | `Client ID` از Google Cloud |
| Client Secret | `Client Secret` از Google Cloud |
| Refresh Token | فعلاً خالی بگذارید. در مرحله بعد آن را دریافت می‌کنید. |
| دایرکتوری ریشه | اختیاری. مقدار پیش‌فرض `imgbed` است. |

![تکمیل اطلاعات کلاینت در ImgBed](../../image/upload/google-drive/粘贴回添加新渠道配置.png)

## مرحله 5: دریافت Refresh Token

1. روی `Get Token` کلیک کنید.
2. حساب Google موردنظر برای اتصال را انتخاب کنید.
3. درخواست‌های مجوزدهی را کامل کنید.
4. صفحه بازگشت یک `Refresh Token` نمایش می‌دهد.
5. آن را کپی کنید.
6. به ImgBed برگردید و آن را در فیلد `Refresh Token` قرار دهید.

![کپی کردن Refresh Token پس از مجوزدهی](../../image/upload/google-drive/授权完复制token.png)

اگر بعداً حساب Google را تغییر دادید، کلاینت OAuth را عوض کردید یا مجوزدهی قبلی منقضی شد، لازم نیست کانال را حذف کنید. صفحه ویرایش را باز کنید و روی `Reauthorize` کلیک کنید.

## مرحله 6: ذخیره کانال

پس از تکمیل همه فیلدها، کانال را ذخیره کنید.

## جریان سریع

```text
Open Google Cloud
-> Create or select a project
-> Enable Google Drive API
-> Configure Google Auth Platform
-> If Audience is External, add your Google account to Test users
-> Create a Web application OAuth client
-> Use https://your-domain.com/api/oauth/google/callback as the redirect URI
-> Fill Client ID and Client Secret into ImgBed
-> Click Get Token
-> Sign in with Google and authorize
-> Copy the Refresh Token from the callback page
-> Paste it back into ImgBed and save
-> Upload a test image
```

## منابع

1. برنامه‌های وب سرور برای Google OAuth: https://developers.google.com/identity/protocols/oauth2/web-server
2. پیکربندی صفحه رضایت OAuth در Google Workspace: https://developers.google.com/workspace/guides/configure-oauth-consent
3. محدوده‌های احراز هویت Google Drive API: https://developers.google.com/workspace/drive/api/guides/api-specific-auth
