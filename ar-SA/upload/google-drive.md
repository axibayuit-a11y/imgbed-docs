# إضافة قناة Google Drive

## ما الذي تحتاجه أولًا؟

قبل البدء جهّز هذه العناصر:

| المتطلب | لماذا تحتاجه |
| --- | --- |
| حساب Google | للوصول إلى Google Cloud وتفويض Google Drive |
| مشروع Google Cloud | لتفعيل Drive API وإنشاء بيانات اعتماد OAuth |
| عميل OAuth 2.0 | يستخدمه ImgBed للحصول على `Client ID` و `Client Secret` و `Refresh Token` |
| نطاق ImgBed الخاص بك | لاستخدامه في عنوان إعادة توجيه OAuth. يجب أن يطابق النطاق الذي تستخدمه فعليًا. |

## خطوات الإعداد

### الخطوة 1: فعّل Google Drive API

1. افتح وحدة تحكم Google Cloud.
2. أنشئ مشروعًا جديدًا أو اختر مشروعًا موجودًا.
3. انتقل إلى `APIs & Services`.
4. اضغط `Enable APIs and Services`.
5. ابحث عن `Google Drive API`.
6. افتحه واضغط تفعيل.

### الخطوة 2: اضبط شاشة موافقة OAuth

1. في Google Cloud افتح `Google Auth Platform`.
2. أكمل معلومات `Branding` الأساسية، مثل اسم التطبيق وبريد الدعم وبريد تواصل المطور.
3. افتح `Audience`.
4. لمعظم عمليات النشر الشخصية ذاتية الاستضافة اختر `External`.
5. إذا اخترت `External` فأضف حساب Google الذي تريد تفويضه ضمن `Test users`.
6. افتح `Data Access`.
7. أضف صلاحيات Google Drive المطلوبة.

### الخطوة 3: أنشئ عميل OAuth 2.0

1. في `Google Auth Platform` افتح `Clients`.
2. أنشئ عميلًا جديدًا.
3. اجعل نوع التطبيق هو `Web application`.
4. أعطِ العميل اسمًا واضحًا.
5. في مصادر JavaScript المصرّح بها أدخل رابط ImgBed، مثل:

```text
https://img.example.com
```

6. في عناوين إعادة التوجيه المصرّح بها أدخل:

```text
https://img.example.com/api/oauth/google/callback
```

![إنشاء عميل OAuth](../../image/upload/google-drive/oa客户端id创建.png)

![إدخال النطاق وعنوان رد الاتصال](../../image/upload/google-drive/填写oa客户端url信息.png)

بعد إنشاء العميل انسخ القيم التالية:

| القيمة الناتجة | حقل ImgBed |
| --- | --- |
| Client ID | `Client ID` |
| Client Secret | `Client Secret` |

## الخطوة 4: املأ قناة Google Drive

في إعدادات الرفع اختر `Google Drive` واملأ:

| حقل ImgBed | ما الذي تدخله |
| --- | --- |
| اسم القناة | اسم واضح، مثل `Main Google Drive` |
| Client ID | Client ID من Google Cloud |
| Client Secret | Client Secret من Google Cloud |
| Refresh Token | اتركه فارغًا الآن. تحصل عليه في الخطوة التالية. |
| المجلد الجذر | اختياري. الافتراضي `imgbed`. |

![لصق بيانات العميل في ImgBed](../../image/upload/google-drive/粘贴回添加新渠道配置.png)

## الخطوة 5: احصل على Refresh Token

1. اضغط الحصول على الرمز.
2. اختر حساب Google الذي تريد ربطه.
3. أكمل رسائل التفويض.
4. ستعرض صفحة رد الاتصال قيمة `Refresh Token`.
5. انسخها.
6. ارجع إلى ImgBed والصقها في حقل `Refresh Token`.

![نسخ Refresh Token بعد التفويض](../../image/upload/google-drive/授权完复制token.png)

إذا غيّرت حساب Google لاحقًا، أو بدّلت عميل OAuth، أو انتهت صلاحية التفويض القديم، فلا تحتاج إلى حذف القناة. افتح صفحة التحرير واضغط إعادة التفويض.

## الخطوة 6: احفظ القناة

بعد ملء جميع الحقول احفظ القناة.

## المسار السريع

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

## مراجع

1. تطبيقات خادم الويب في Google OAuth: https://developers.google.com/identity/protocols/oauth2/web-server
2. إعداد موافقة OAuth في Google Workspace: https://developers.google.com/workspace/guides/configure-oauth-consent
3. نطاقات تفويض Google Drive API: https://developers.google.com/workspace/drive/api/guides/api-specific-auth
