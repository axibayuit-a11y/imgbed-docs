# إضافة قناة OneDrive

## ما الذي تحتاجه أولًا؟

| المتطلب | لماذا تحتاجه |
| --- | --- |
| حساب Microsoft | للوصول إلى صفحات إدارة Microsoft وتفويض OneDrive |
| نطاق ImgBed الخاص بك | لاستخدامه في عنوان رد اتصال OAuth |
| تسجيل تطبيق | لإنشاء `Client ID` و `Client Secret` |
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
| الاسم | اسم واضح، مثل `imgbed-onedrive` |
| أنواع الحسابات المدعومة | اختر حسب الجدول أدناه |
| نوع عنوان إعادة التوجيه | `Web` |
| عنوان إعادة التوجيه | `https://your-domain.com/api/oauth/onedrive/callback` |

إرشاد لاختيار نوع الحساب:

| حالتك | أنواع الحسابات المدعومة |
| --- | --- |
| OneDrive شخصي فقط | اختر خيار حساب Microsoft الشخصي. |
| حسابات شخصية وحسابات عمل/تعليم | اختر الخيار الذي يدعم الحسابات الشخصية والتنظيمية. |
| OneDrive شركة أو مدرسة فقط | اختر خيار الحساب التنظيمي. |

بعد ملء النموذج اضغط تسجيل.

![إنشاء تطبيق OneDrive](../../image/upload/onedrive/添加应用程序注册.png)

### الخطوة 3: انسخ معلومات التطبيق

بعد إنشاء التطبيق انسخ هذه القيم من صفحة النظرة العامة:

| حقل Microsoft | حقل ImgBed |
| --- | --- |
| `Application (client) ID` | `Client ID` |
| `Directory (tenant) ID` | `Tenant ID` للحسابات التنظيمية |

![معرّفات التطبيق والمستأجر](../../image/upload/onedrive/应用程序ID和目录租户ID位.png)

### الخطوة 4: أنشئ Client Secret

1. افتح `Certificates & secrets`.
2. اضغط `New client secret`.
3. أدخل أي وصف مناسب.
4. اختر مدة الانتهاء.
5. انسخ `Value` فور إنشائه.

![حفظ قيمة Client Secret](../../image/upload/onedrive/保存客户端密码值.png)

### الخطوة 5: أضف أذونات API

1. افتح `API permissions`.
2. اضغط `Add a permission`.
3. اختر `Microsoft Graph`.
4. اختر `Delegated permissions`.
5. أضف الصلاحيات التالية:

| الإذن | الغرض |
| --- | --- |
| `Files.ReadWrite.All` | رفع الملفات وإنشاء المجلدات وحذف الملفات |
| `offline_access` | يسمح لـ ImgBed بالحصول على `Refresh Token` |
| `User.Read` | قراءة معلومات الحساب والحصة |

### الخطوة 6: املأ قناة OneDrive

في إعدادات الرفع اختر `OneDrive` واملأ:

| حقل ImgBed | ما الذي تدخله |
| --- | --- |
| اسم القناة | اسم واضح، مثل `Main OneDrive` |
| Client ID | Microsoft `Application (client) ID` |
| Client Secret | قيمة `Client Secret Value` التي نسختها |
| Tenant ID | استخدم الجدول أدناه |
| Refresh Token | اتركه فارغًا الآن |
| المجلد الجذر | اختياري. الافتراضي `imgbed`. |
| ملاحظة | اختياري |

![ملء إعداد قناة OneDrive](../../image/upload/onedrive/添加新渠道配置.png)

طريقة ملء `Tenant ID`:

| نوع الحساب الذي اخترته | ImgBed `Tenant ID` |
| --- | --- |
| الحسابات الشخصية | `consumers` |
| الحسابات الشخصية والتنظيمية | `common` |
| المنظمة الحالية فقط | `Directory (tenant) ID` |

### الخطوة 7: احصل على Refresh Token

1. في ImgBed اضغط الحصول على الرمز.
2. سجّل الدخول بحساب Microsoft الذي تريد ربطه.
3. وافق على طلب التفويض.
4. ستعرض صفحة رد الاتصال قيمة `Refresh Token`.
5. انسخها.
6. ارجع إلى ImgBed والصقها في حقل `Refresh Token`.

![نسخ Refresh Token](../../image/upload/onedrive/复制刷新令牌.png)

### الخطوة 8: احفظ القناة

بعد ملء جميع الحقول احفظ القناة.

## المسار السريع

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

## مراجع

1. تسجيل تطبيق في Microsoft Entra: https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app
2. تدفق رمز التفويض في منصة هوية Microsoft: https://learn.microsoft.com/en-us/entra/identity-platform/v2-oauth2-auth-code-flow
3. مصادقة المستخدم في Microsoft Graph: https://learn.microsoft.com/en-us/graph/auth-v2-user
