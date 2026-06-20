# إضافة قناة Dropbox

## ما الذي تحتاجه أولًا؟

| المتطلب | لماذا تحتاجه |
| --- | --- |
| حساب Dropbox | لتسجيل الدخول وتفويض التطبيق |
| Dropbox app | لإنشاء `App Key` و `App Secret` |
| نطاق ImgBed الخاص بك | لاستخدامه في OAuth redirect URI |
| مساحة Dropbox متاحة | موقع التخزين الفعلي للملفات |

## خطوات الإعداد

### الخطوة 1: أنشئ Dropbox App

1. افتح Dropbox App Console:

```text
https://www.dropbox.com/developers/apps
```

2. أنشئ app جديدًا.
3. في access type اختر:

```text
App folder
```

4. أعطِ التطبيق اسمًا واضحًا، مثل `imgbed-app`.
5. افتح صفحة تفاصيل التطبيق بعد إنشائه.

نوع الوصول الموصى به:

| Access Type | التوصية |
| --- | --- |
| `App folder` | موصى به. يناسب طريقة ImgBed في تخزين الملفات. |
| `Full Dropbox` | غير موصى به. لا يحتاج ImgBed إلى الوصول إلى الحساب كاملًا. |

![إنشاء Dropbox app](../../image/upload/dropbox/开发者创建应用.png)

### الخطوة 2: أضف Redirect URI

في صفحة تفاصيل Dropbox app، ابحث عن إعدادات OAuth أو Redirect URI وأضف:

```text
https://your-domain.com/api/oauth/dropbox/callback
```

إذا كنت تستخدم لوحة الإدارة من أكثر من نطاق، فأضف كل callback URL مطابق.

![ضبط redirect URI](../../image/upload/dropbox/配置回调地址.png)

### الخطوة 3: اضبط App Permissions

افتح تبويب `Permissions` وفعّل على الأقل هذه scopes:

| Scope | مطلوب | الغرض |
| --- | --- | --- |
| `account_info.read` | نعم | قراءة معلومات الحساب والحصة |
| `files.metadata.read` | نعم | قراءة metadata للملفات والمجلدات للتحقق من المسارات |
| `files.metadata.write` | نعم | إنشاء المجلدات وكتابة metadata |
| `files.content.write` | نعم | رفع الملفات. غياب هذا scope يسبب خطأ `required scope 'files.content.write'`. |
| `files.content.read` | موصى به | يسمح بالتنزيل والمعاينة والروابط المؤقتة للملفات |

بعد اختيار scopes اضغط `Submit` في أسفل الصفحة.

![إضافة الصلاحيات](../../image/upload/dropbox/添加对应的权限.png)

مهم:

| الحالة | ما العمل |
| --- | --- |
| غيّرت scopes | شغّل مسار التفويض مرة أخرى واحصل على `Refresh Token` جديد. |
| لم تعِد التفويض | لن يحصل الرمز القديم على الصلاحيات الجديدة، وقد تستمر أخطاء الرفع. |

### الخطوة 4: انسخ App Credentials

احفظ هاتين القيمتين من صفحة Dropbox app:

| حقل Dropbox | حقل ImgBed |
| --- | --- |
| `App key` | `App Key` |
| `App secret` | `App Secret` |

### الخطوة 5: املأ قناة Dropbox

في إعدادات الرفع اختر `Dropbox` واملأ:

| حقل ImgBed | ما الذي تدخله |
| --- | --- |
| Channel name | اسم واضح، مثل `Main Dropbox` |
| App Key | Dropbox `App key` |
| App Secret | Dropbox `App secret` |
| Refresh Token | اتركه فارغًا الآن |
| Root directory | اختياري. الافتراضي `imgbed`. |
| Note | اختياري |

![الحصول على token](../../image/upload/dropbox/获取令牌.png)

### الخطوة 6: احصل على Refresh Token

1. في ImgBed اضغط `Get Token`.
2. سجّل الدخول إلى حساب Dropbox الذي تريد ربطه.
3. وافق على طلب التفويض.
4. ستعرض صفحة callback قيمة `Refresh Token`.
5. انسخها.
6. ارجع إلى ImgBed والصقها في حقل `Refresh Token`.

![نسخ token](../../image/upload/dropbox/复制令牌.png)

## كيف تتحقق؟

| الفحص | النتيجة المتوقعة |
| --- | --- |
| بطاقة القناة | تظهر قناة Dropbox بعد الحفظ. |
| مفتاح القناة | يمكن تفعيل القناة. |
| حفظ الرمز | تعرض صفحة التفاصيل أن `Refresh Token` تم حفظه. |
| اختبار الرفع | تظهر صورة تجريبية داخل Dropbox app folder. |

إذا كانت quota limits مفعلة، اضغط استعلام الحصة. بعد نجاح الاستعلام تعرض بطاقة القناة المساحة المستخدمة والإجمالية ووقت آخر تحديث.

![نجاح استعلام الحصة](../../image/upload/dropbox/查询额度成功.png)

## استكشاف الأخطاء

| المشكلة | الحل |
| --- | --- |
| يقول ImgBed إن الإعداد غير مكتمل | تأكد من ملء `App Key` و `App Secret` و `Refresh Token`. |
| نجح التفويض لكن لا يظهر `Refresh Token` | اضغط `Get Token` مرة أخرى وتأكد من استخدام offline authorization flow. |
| يفشل الرفع برسالة `required scope 'files.content.write'` | فعّل `files.content.write`، واضغط `Submit`، ثم احصل على `Refresh Token` جديد. |
| يفشل callback | تأكد أن redirect URI هو `https://your-domain.com/api/oauth/dropbox/callback`. |
| لا يمكن العثور على الملفات | تأكد أن Dropbox app أُنشئ بوضع `App folder`. |

## المسار السريع

```text
افتح Dropbox App Console
-> أنشئ app
-> اختر App folder access
-> أضف https://your-domain.com/api/oauth/dropbox/callback
-> فعّل account_info.read / files.metadata.read / files.metadata.write / files.content.write
-> اختياريًا فعّل files.content.read
-> اضغط Submit
-> انسخ App Key و App Secret
-> أدخلهما في ImgBed
-> اضغط Get Token
-> انسخ Refresh Token من صفحة callback
-> الصقه في ImgBed واحفظ
```

## مراجع

1. Dropbox App Console: https://www.dropbox.com/developers/apps
2. Dropbox OAuth Guide: https://developers.dropbox.com/oauth-guide
3. Dropbox Developer Guide: https://www.dropbox.com/developers/reference/developer-guide
