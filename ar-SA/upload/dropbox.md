# إضافة قناة Dropbox

## ما الذي تحتاجه أولًا؟

| المتطلب | لماذا تحتاجه |
| --- | --- |
| حساب Dropbox | لتسجيل الدخول وتفويض التطبيق |
| تطبيق Dropbox | لإنشاء `App Key` و `App Secret` |
| نطاق ImgBed الخاص بك | لاستخدامه في عنوان إعادة توجيه OAuth |
| مساحة Dropbox متاحة | موقع التخزين الفعلي للملفات |

## خطوات الإعداد

### الخطوة 1: أنشئ تطبيق Dropbox

1. افتح وحدة تطبيقات Dropbox:

```text
https://www.dropbox.com/developers/apps
```

2. أنشئ تطبيقًا جديدًا.
3. في نوع الوصول اختر:

```text
App folder
```

4. أعطِ التطبيق اسمًا واضحًا، مثل `imgbed-app`.
5. افتح صفحة تفاصيل التطبيق بعد إنشائه.

نوع الوصول الموصى به:

| نوع الوصول | التوصية |
| --- | --- |
| `App folder` | موصى به. يناسب طريقة ImgBed في تخزين الملفات. |
| `Full Dropbox` | غير موصى به. لا يحتاج ImgBed إلى الوصول إلى الحساب كاملًا. |

![إنشاء تطبيق Dropbox](../../image/upload/dropbox/开发者创建应用.png)

### الخطوة 2: أضف عنوان إعادة التوجيه

في صفحة تفاصيل تطبيق Dropbox، ابحث عن إعدادات OAuth أو عنوان إعادة التوجيه وأضف:

```text
https://your-domain.com/api/oauth/dropbox/callback
```

إذا كنت تستخدم لوحة الإدارة من أكثر من نطاق، فأضف كل عنوان رد اتصال مطابق.

![ضبط عنوان إعادة التوجيه](../../image/upload/dropbox/配置回调地址.png)

### الخطوة 3: اضبط أذونات التطبيق

افتح تبويب `Permissions` وفعّل على الأقل نطاقات الأذونات التالية:

| نطاق الأذونات | مطلوب | الغرض |
| --- | --- | --- |
| `account_info.read` | نعم | قراءة معلومات الحساب والحصة |
| `files.metadata.read` | نعم | قراءة بيانات الملفات والمجلدات للتحقق من المسارات |
| `files.metadata.write` | نعم | إنشاء المجلدات وكتابة البيانات الوصفية |
| `files.content.write` | نعم | رفع الملفات. غياب هذا النطاق يسبب خطأ `required scope 'files.content.write'`. |
| `files.content.read` | موصى به | يسمح بالتنزيل والمعاينة والروابط المؤقتة للملفات |

بعد اختيار نطاقات الأذونات اضغط زر الإرسال في أسفل الصفحة.

![إضافة الصلاحيات](../../image/upload/dropbox/添加对应的权限.png)

مهم:

| الحالة | ما العمل |
| --- | --- |
| غيّرت نطاقات الأذونات | شغّل مسار التفويض مرة أخرى واحصل على `Refresh Token` جديد. |
| لم تعِد التفويض | لن يحصل الرمز القديم على الصلاحيات الجديدة، وقد تستمر أخطاء الرفع. |

### الخطوة 4: انسخ بيانات اعتماد التطبيق

احفظ هاتين القيمتين من صفحة تطبيق Dropbox:

| حقل Dropbox | حقل ImgBed |
| --- | --- |
| `App key` | `App Key` |
| `App secret` | `App Secret` |

### الخطوة 5: املأ قناة Dropbox

في إعدادات الرفع اختر `Dropbox` واملأ:

| حقل ImgBed | ما الذي تدخله |
| --- | --- |
| اسم القناة | اسم واضح، مثل `Main Dropbox` |
| App Key | Dropbox `App key` |
| App Secret | Dropbox `App secret` |
| Refresh Token | اتركه فارغًا الآن |
| المجلد الجذر | اختياري. الافتراضي `imgbed`. |
| ملاحظة | اختياري |

![الحصول على الرمز](../../image/upload/dropbox/获取令牌.png)

### الخطوة 6: احصل على Refresh Token

1. في ImgBed اضغط الحصول على الرمز.
2. سجّل الدخول إلى حساب Dropbox الذي تريد ربطه.
3. وافق على طلب التفويض.
4. ستعرض صفحة رد الاتصال قيمة `Refresh Token`.
5. انسخها.
6. ارجع إلى ImgBed والصقها في حقل `Refresh Token`.

![نسخ الرمز](../../image/upload/dropbox/复制令牌.png)

## كيف تتحقق؟

| الفحص | النتيجة المتوقعة |
| --- | --- |
| بطاقة القناة | تظهر قناة Dropbox بعد الحفظ. |
| مفتاح القناة | يمكن تفعيل القناة. |
| حفظ الرمز | تعرض صفحة التفاصيل أن `Refresh Token` تم حفظه. |
| اختبار الرفع | تظهر صورة تجريبية داخل مجلد تطبيق Dropbox. |

إذا كانت حدود الحصة مفعلة، اضغط الاستعلام عن الحصة. بعد نجاح الاستعلام تعرض بطاقة القناة المساحة المستخدمة والإجمالية ووقت آخر تحديث.

![نجاح استعلام الحصة](../../image/upload/dropbox/查询额度成功.png)

## استكشاف الأخطاء

| المشكلة | الحل |
| --- | --- |
| يقول ImgBed إن الإعداد غير مكتمل | تأكد من ملء `App Key` و `App Secret` و `Refresh Token`. |
| نجح التفويض لكن لا يظهر `Refresh Token` | اضغط الحصول على الرمز مرة أخرى وتأكد من استخدام مسار التفويض دون اتصال. |
| يفشل الرفع برسالة `required scope 'files.content.write'` | فعّل `files.content.write`، واضغط زر الإرسال، ثم احصل على `Refresh Token` جديد. |
| يفشل رد الاتصال | تأكد أن عنوان إعادة التوجيه هو `https://your-domain.com/api/oauth/dropbox/callback`. |
| لا يمكن العثور على الملفات | تأكد أن تطبيق Dropbox أُنشئ بوضع `App folder`. |

## المسار السريع

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

## مراجع

1. وحدة تطبيقات Dropbox: https://www.dropbox.com/developers/apps
2. دليل OAuth من Dropbox: https://developers.dropbox.com/oauth-guide
3. دليل مطوري Dropbox: https://www.dropbox.com/developers/reference/developer-guide
