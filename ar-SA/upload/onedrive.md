# إضافة قناة OneDrive

## ما الذي تحتاجه أولًا؟

| المتطلب | لماذا تحتاجه |
| --- | --- |
| حساب Microsoft | للوصول إلى صفحات إدارة Microsoft وتفويض OneDrive |
| نطاق ImgBed الخاص بك | لاستخدامه في OAuth callback URL |
| App registration | لإنشاء `Client ID` و `Client Secret` |
| حساب OneDrive | موقع التخزين الفعلي للملفات |

## خطوات الإعداد

### الخطوة 1: افتح Microsoft Entra ID

1. افتح `portal.azure.com`.
2. ابحث في الأعلى عن `Microsoft Entra ID`.
3. إذا لم تظهر الصفحة المطلوبة في القائمة، اختر:

```text
Continue searching in Microsoft Entra ID
```

4. افتح `Microsoft Entra ID`.
5. افتح `App registrations`.
6. اضغط `New registration`.

### الخطوة 2: سجّل تطبيقًا

في صفحة `New registration` املأ:

| الحقل | ما الذي تدخله |
| --- | --- |
| Name | اسم واضح، مثل `imgbed-onedrive` |
| Supported account types | اختر حسب الجدول أدناه |
| Redirect URI type | `Web` |
| Redirect URI | `https://your-domain.com/api/oauth/onedrive/callback` |

إرشاد لاختيار نوع الحساب:

| حالتك | Supported Account Types |
| --- | --- |
| OneDrive شخصي فقط | اختر خيار حساب Microsoft الشخصي. |
| حسابات شخصية وحسابات عمل/تعليم | اختر الخيار الذي يدعم الحسابات الشخصية والتنظيمية. |
| OneDrive شركة أو مدرسة فقط | اختر خيار الحساب التنظيمي. |

بعد ملء النموذج اضغط register.

![إنشاء OneDrive app](../../image/upload/onedrive/添加应用程序注册.png)

### الخطوة 3: انسخ معلومات التطبيق

بعد إنشاء التطبيق انسخ هذه القيم من صفحة overview:

| حقل Microsoft | حقل ImgBed |
| --- | --- |
| `Application (client) ID` | `Client ID` |
| `Directory (tenant) ID` | `Tenant ID` للحسابات التنظيمية |

![Application و tenant IDs](../../image/upload/onedrive/应用程序ID和目录租户ID位.png)

### الخطوة 4: أنشئ Client Secret

1. افتح `Certificates & secrets`.
2. اضغط `New client secret`.
3. أدخل أي وصف مناسب.
4. اختر مدة الانتهاء.
5. انسخ `Value` فور إنشائه.

![حفظ قيمة client secret](../../image/upload/onedrive/保存客户端密码值.png)

### الخطوة 5: أضف API Permissions

1. افتح `API permissions`.
2. اضغط `Add a permission`.
3. اختر `Microsoft Graph`.
4. اختر `Delegated permissions`.
5. أضف الصلاحيات التالية:

| Permission | الغرض |
| --- | --- |
| `Files.ReadWrite.All` | رفع الملفات وإنشاء المجلدات وحذف الملفات |
| `offline_access` | يسمح لـ ImgBed بالحصول على `Refresh Token` |
| `User.Read` | قراءة معلومات الحساب والحصة |

### الخطوة 6: املأ قناة OneDrive

في إعدادات الرفع اختر `OneDrive` واملأ:

| حقل ImgBed | ما الذي تدخله |
| --- | --- |
| Channel name | اسم واضح، مثل `Main OneDrive` |
| Client ID | Microsoft `Application (client) ID` |
| Client Secret | قيمة `Client Secret Value` التي نسختها |
| Tenant ID | استخدم الجدول أدناه |
| Refresh Token | اتركه فارغًا الآن |
| Root directory | اختياري. الافتراضي `imgbed`. |
| Note | اختياري |

![ملء إعداد قناة OneDrive](../../image/upload/onedrive/添加新渠道配置.png)

طريقة ملء `Tenant ID`:

| نوع الحساب الذي اخترته | ImgBed `Tenant ID` |
| --- | --- |
| Personal accounts | `consumers` |
| Personal + organizational accounts | `common` |
| المنظمة الحالية فقط | `Directory (tenant) ID` |

### الخطوة 7: احصل على Refresh Token

1. في ImgBed اضغط `Get Token`.
2. سجّل الدخول بحساب Microsoft الذي تريد ربطه.
3. وافق على طلب التفويض.
4. ستعرض صفحة callback قيمة `Refresh Token`.
5. انسخها.
6. ارجع إلى ImgBed والصقها في حقل `Refresh Token`.

![نسخ refresh token](../../image/upload/onedrive/复制刷新令牌.png)

### الخطوة 8: احفظ القناة

بعد ملء جميع الحقول احفظ القناة.

## المسار السريع

```text
افتح portal.azure.com
-> ابحث عن Microsoft Entra ID
-> افتح App registrations
-> سجّل app جديد
-> املأ Name / Supported account types / Web redirect URI
-> Register
-> انسخ Application (client) ID
-> تحقق من callback URL في Authentication
-> أنشئ Client Secret في Certificates & secrets
-> أضف permissions في API permissions
-> أدخل Client ID / Client Secret / Tenant ID في ImgBed
-> اضغط Get Token
-> انسخ Refresh Token من صفحة callback
-> الصقه في ImgBed واحفظ
```

## مراجع

1. Microsoft Entra app registration: https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app
2. Microsoft identity platform authorization code flow: https://learn.microsoft.com/en-us/entra/identity-platform/v2-oauth2-auth-code-flow
3. Microsoft Graph user authentication: https://learn.microsoft.com/en-us/graph/auth-v2-user
