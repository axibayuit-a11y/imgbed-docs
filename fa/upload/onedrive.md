# افزودن کانال OneDrive

## پیش از شروع چه چیزهایی لازم است

| مورد | چرا لازم است |
| --- | --- |
| حساب Microsoft | برای دسترسی به صفحه‌های مدیریتی Microsoft و مجوزدهی OneDrive استفاده می‌شود |
| دامنه ImgBed شما | به‌عنوان URL بازگشت OAuth استفاده می‌شود |
| ثبت برنامه | برای تولید `Client ID` و `Client Secret` استفاده می‌شود |
| حساب OneDrive | محل واقعی ذخیره فایل‌ها خواهد بود |

## مراحل پیکربندی

### مرحله 1: باز کردن Microsoft Entra ID

1. `portal.azure.com` را باز کنید.
2. در بالای صفحه `Microsoft Entra ID` را جست‌وجو کنید.
3. اگر صفحه مقصد در فهرست کشویی نمایش داده نشد، این گزینه را انتخاب کنید:

```text
Continue searching in Microsoft Entra ID
```

4. `Microsoft Entra ID` را باز کنید.
5. `App registrations` را باز کنید.
6. روی `New registration` کلیک کنید.

### مرحله 2: ثبت برنامه

در صفحه `New registration` این فیلدها را تکمیل کنید:

| فیلد | مقدار لازم |
| --- | --- |
| Name | نامی قابل تشخیص، مانند `imgbed-onedrive` |
| Supported account types | بر اساس جدول زیر انتخاب کنید |
| Redirect URI type | `Web` |
| Redirect URI | `https://your-domain.com/api/oauth/onedrive/callback` |

راهنمای نوع حساب:

| سناریوی شما | Supported Account Types |
| --- | --- |
| فقط OneDrive شخصی | گزینه حساب شخصی Microsoft را انتخاب کنید. |
| حساب‌های شخصی و کاری/آموزشی | گزینه‌ای را انتخاب کنید که از حساب‌های شخصی و سازمانی پشتیبانی کند. |
| فقط OneDrive کاری یا آموزشی | گزینه حساب سازمانی را انتخاب کنید. |

پس از تکمیل فرم، روی ثبت کلیک کنید.

![ساخت برنامه OneDrive](../../image/upload/onedrive/添加应用程序注册.png)

### مرحله 3: کپی کردن اطلاعات برنامه

پس از ساخت برنامه، این مقدارها را از صفحه خلاصه کپی کنید:

| فیلد Microsoft | فیلد ImgBed |
| --- | --- |
| `Application (client) ID` | `Client ID` |
| `Directory (tenant) ID` | `Tenant ID` برای حساب‌های سازمانی |

![شناسه‌های برنامه و tenant](../../image/upload/onedrive/应用程序ID和目录租户ID位.png)

### مرحله 4: ساخت Client Secret

1. `Certificates & secrets` را باز کنید.
2. روی `New client secret` کلیک کنید.
3. توضیح دلخواه را وارد کنید.
4. دوره انقضا را انتخاب کنید.
5. پس از ساخت، مقدار `Value` را فوراً کپی کنید.

![ذخیره مقدار client secret](../../image/upload/onedrive/保存客户端密码值.png)

### مرحله 5: افزودن مجوزهای API

1. `API permissions` را باز کنید.
2. روی `Add a permission` کلیک کنید.
3. `Microsoft Graph` را انتخاب کنید.
4. `Delegated permissions` را انتخاب کنید.
5. این مجوزها را اضافه کنید:

| مجوز | کاربرد |
| --- | --- |
| `Files.ReadWrite.All` | بارگذاری فایل‌ها، ساخت پوشه‌ها و حذف فایل‌ها |
| `offline_access` | به ImgBed اجازه می‌دهد `Refresh Token` دریافت کند |
| `User.Read` | خواندن اطلاعات حساب و سهمیه |

### مرحله 6: تکمیل کانال OneDrive

در تنظیمات بارگذاری، `OneDrive` را انتخاب کنید و این فیلدها را تکمیل کنید:

| فیلد ImgBed | مقدار لازم |
| --- | --- |
| نام کانال | نامی قابل تشخیص، مانند `Main OneDrive` |
| Client ID | مقدار `Application (client) ID` در Microsoft |
| Client Secret | مقدار `Client Secret Value` که کپی کرده‌اید |
| Tenant ID | بر اساس جدول زیر |
| Refresh Token | فعلاً خالی بگذارید |
| دایرکتوری ریشه | اختیاری. مقدار پیش‌فرض `imgbed` است. |
| یادداشت | اختیاری |

![تکمیل پیکربندی کانال OneDrive](../../image/upload/onedrive/添加新渠道配置.png)

روش تکمیل `Tenant ID`:

| نوع حساب انتخاب‌شده | `Tenant ID` در ImgBed |
| --- | --- |
| حساب‌های شخصی | `consumers` |
| حساب‌های شخصی + سازمانی | `common` |
| فقط سازمان فعلی | `Directory (tenant) ID` |

### مرحله 7: دریافت Refresh Token

1. در ImgBed روی `Get Token` کلیک کنید.
2. وارد حساب Microsoft موردنظر برای اتصال شوید.
3. درخواست مجوزدهی را تأیید کنید.
4. صفحه بازگشت یک `Refresh Token` نمایش می‌دهد.
5. آن را کپی کنید.
6. به ImgBed برگردید و آن را در فیلد `Refresh Token` قرار دهید.

![کپی کردن refresh token](../../image/upload/onedrive/复制刷新令牌.png)

### مرحله 8: ذخیره کانال

پس از تکمیل همه فیلدها، کانال را ذخیره کنید.

## جریان سریع

```text
Open portal.azure.com
-> Search for Microsoft Entra ID
-> Open App registrations
-> Register a new app
-> Fill Name / Supported account types / Web redirect URI
-> Register
-> Copy Application (client) ID
-> Check the callback URL in Authentication
-> Create a Client Secret in Certificates & secrets
-> Add permissions in API permissions
-> Fill Client ID / Client Secret / Tenant ID into ImgBed
-> Click Get Token
-> Copy the Refresh Token from the callback page
-> Paste it back into ImgBed and save
```

## منابع

1. ثبت برنامه در Microsoft Entra: https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app
2. جریان کد مجوزدهی در Microsoft identity platform: https://learn.microsoft.com/en-us/entra/identity-platform/v2-oauth2-auth-code-flow
3. احراز هویت کاربر در Microsoft Graph: https://learn.microsoft.com/en-us/graph/auth-v2-user
