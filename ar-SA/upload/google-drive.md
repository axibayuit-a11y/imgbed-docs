# إضافة قناة Google Drive

## ما الذي تحتاجه أولًا؟

قبل البدء جهّز هذه العناصر:

| المتطلب | لماذا تحتاجه |
| --- | --- |
| حساب Google | للوصول إلى Google Cloud وتفويض Google Drive |
| مشروع Google Cloud | لتفعيل Drive API وإنشاء OAuth credentials |
| OAuth 2.0 client | يستخدمه ImgBed للحصول على `Client ID` و `Client Secret` و `Refresh Token` |
| نطاق ImgBed الخاص بك | لاستخدامه في OAuth redirect URI. يجب أن يطابق النطاق الذي تستخدمه فعليًا. |

## خطوات الإعداد

### الخطوة 1: فعّل Google Drive API

1. افتح Google Cloud Console.
2. أنشئ مشروعًا جديدًا أو اختر مشروعًا موجودًا.
3. انتقل إلى `APIs & Services`.
4. اضغط `Enable APIs and Services`.
5. ابحث عن `Google Drive API`.
6. افتحه واضغط enable.

### الخطوة 2: اضبط OAuth Consent Screen

1. في Google Cloud افتح `Google Auth Platform`.
2. أكمل معلومات `Branding` الأساسية، مثل اسم التطبيق وبريد الدعم وبريد تواصل المطور.
3. افتح `Audience`.
4. لمعظم عمليات النشر الشخصية ذاتية الاستضافة اختر `External`.
5. إذا اخترت `External` فأضف حساب Google الذي تريد تفويضه ضمن `Test users`.
6. افتح `Data Access`.
7. أضف صلاحيات Google Drive المطلوبة.

### الخطوة 3: أنشئ OAuth 2.0 Client

1. في `Google Auth Platform` افتح `Clients`.
2. أنشئ client جديدًا.
3. اجعل application type هو `Web application`.
4. أعطِ الـ client اسمًا واضحًا.
5. في authorized JavaScript origins أدخل رابط ImgBed، مثل:

```text
https://img.example.com
```

6. في authorized redirect URIs أدخل:

```text
https://img.example.com/api/oauth/google/callback
```

![إنشاء OAuth client](../../image/upload/google-drive/oa客户端id创建.png)

![إدخال النطاق و callback URL](../../image/upload/google-drive/填写oa客户端url信息.png)

بعد إنشاء client انسخ القيم التالية:

| القيمة الناتجة | حقل ImgBed |
| --- | --- |
| Client ID | `Client ID` |
| Client Secret | `Client Secret` |

## الخطوة 4: املأ قناة Google Drive

في إعدادات الرفع اختر `Google Drive` واملأ:

| حقل ImgBed | ما الذي تدخله |
| --- | --- |
| Channel name | اسم واضح، مثل `Main Google Drive` |
| Client ID | Client ID من Google Cloud |
| Client Secret | Client Secret من Google Cloud |
| Refresh Token | اتركه فارغًا الآن. تحصل عليه في الخطوة التالية. |
| Root directory | اختياري. الافتراضي `imgbed`. |

![لصق بيانات client في ImgBed](../../image/upload/google-drive/粘贴回添加新渠道配置.png)

## الخطوة 5: احصل على Refresh Token

1. اضغط `Get Token`.
2. اختر حساب Google الذي تريد ربطه.
3. أكمل رسائل التفويض.
4. ستعرض صفحة callback قيمة `Refresh Token`.
5. انسخها.
6. ارجع إلى ImgBed والصقها في حقل `Refresh Token`.

![نسخ Refresh Token بعد التفويض](../../image/upload/google-drive/授权完复制token.png)

إذا غيّرت حساب Google لاحقًا، أو بدّلت OAuth client، أو انتهت صلاحية التفويض القديم، فلا تحتاج إلى حذف القناة. افتح صفحة التحرير واضغط `Reauthorize`.

## الخطوة 6: احفظ القناة

بعد ملء جميع الحقول احفظ القناة.

## المسار السريع

```text
افتح Google Cloud
-> أنشئ مشروعًا أو اختر مشروعًا
-> فعّل Google Drive API
-> اضبط Google Auth Platform
-> إذا كان Audience هو External فأضف حساب Google إلى Test users
-> أنشئ Web application OAuth client
-> استخدم https://your-domain.com/api/oauth/google/callback كـ redirect URI
-> أدخل Client ID و Client Secret في ImgBed
-> اضغط Get Token
-> سجّل الدخول بـ Google وفوّض
-> انسخ Refresh Token من صفحة callback
-> الصقه في ImgBed واحفظ
-> ارفع صورة تجريبية
```

## مراجع

1. Google OAuth Web Server Applications: https://developers.google.com/identity/protocols/oauth2/web-server
2. Google Workspace OAuth Consent Configuration: https://developers.google.com/workspace/guides/configure-oauth-consent
3. Google Drive API Auth Scopes: https://developers.google.com/workspace/drive/api/guides/api-specific-auth
