# إضافة قناة Cloudflare R2

## متى تكون مناسبة؟

استخدم Cloudflare R2 عندما:

- يكون موقع ImgBed منشورًا أصلًا على Cloudflare وتريد حفظ الملفات في R2 bucket ضمن الحساب نفسه.
- لا ترغب في ضبط S3 endpoint و access key و secret key بشكل منفصل.
- تريد أن تتم القراءة والكتابة عبر R2 binding في Worker أو Pages بأقل إعداد ممكن.

باختصار:

لا تُنشأ قناة R2 يدويًا داخل لوحة إدارة ImgBed. يجب أولًا ربط R2 bucket بمشروع Cloudflare، ويجب أن يكون اسم متغير الربط بالضبط `img_r2`.

## ما الذي تحتاجه قبل البدء؟

- حساب Cloudflare.
- R2 bucket موجود مسبقًا.
- صلاحية إدارة مشروع Cloudflare الذي يعمل عليه ImgBed.

## الإعداد في Cloudflare

### 1. أنشئ R2 Bucket

1. سجّل الدخول إلى Cloudflare Dashboard.
2. افتح `R2 Object Storage`.
3. اضغط Create bucket.
4. اختر اسمًا للـ bucket، مثل `imgbed`.

سيتم حفظ الملفات المرفوعة داخل هذا الـ bucket.

![إنشاء R2 bucket](../../image/upload/cloudflare-r2/创建一个存储桶img-r2.png)

### 2. اربط الـ Bucket بمشروع ImgBed

اختر مكان الربط حسب نوع النشر:

| نوع النشر | مكان الربط |
| --- | --- |
| Pages | Current Pages project -> Settings -> Functions -> R2 bucket bindings |
| Worker | Current Worker -> Settings -> Bindings -> R2 bucket bindings |

عند إضافة الربط، الحقول المهمة هي:

| الحقل | القيمة |
| --- | --- |
| Variable name | `img_r2` |
| R2 bucket | اختر الـ bucket الذي أنشأته. |

يجب أن يكون اسم المتغير `img_r2` بالضبط. تعتمد عمليات الرفع والقراءة والحذف في R2 على اسم الربط هذا.

### 3. أعد نشر المشروع

بعد حفظ الربط، أعد نشر ImgBed حتى يستطيع runtime الخاص بـ Worker أو Pages الوصول إلى `img_r2`.

## ماذا سترى في ImgBed؟

بعد توفر ربط R2، افتح:

1. إعدادات النظام.
2. إعدادات الرفع.
3. قناة `Cloudflare R2`.

ينشئ النظام قناة ثابتة واحدة تلقائيًا:

| الحقل | القيمة الثابتة |
| --- | --- |
| اسم القناة | `Cloudflare R2` |
| نوع القناة | `cfr2` |
| وضع التخزين | `binding` |
| مصدر الإعداد | Environment binding |

هذه قناة ربط ثابتة. لا تحتاج إلى الضغط على Add Channel لإنشائها، ولا يمكن حذفها مثل القنوات العادية.

## الحقول القابلة للتعديل في لوحة الإدارة

| الحقل | وظيفته | مطلوب |
| --- | --- | --- |
| Enable channel | يحدد هل تشارك R2 في اختيار قناة الرفع. | نعم |
| Account ID | يستخدم فقط عند تفعيل حدود الحصة والحاجة إلى قراءة الاستخدام الرسمي لـ R2. | موصى به عند تفعيل الحصص |
| Bucket name | يستخدم فقط عند تفعيل حدود الحصة والحاجة إلى قراءة الاستخدام الرسمي لـ R2. | موصى به عند تفعيل الحصص |
| Quota limit | يحدد هل تُؤخذ سعة هذه القناة في الاعتبار عند اختيار قناة الرفع. | لا |
| Threshold | يوقف الكتابة إلى هذه القناة بعد بلوغ نسبة الاستخدام المحددة. | مطلوب عند تفعيل الحصص |

يمكن نسخ Account ID من لوحة معلومات الحساب في Cloudflare dashboard. املأه فقط إذا أردت من ImgBed قراءة استخدام حصة R2 وتطبيقه.

![الحصول على Account ID](../../image/upload/cloudflare-r2/获取账户id.png)

## خطوات الإعداد

1. أنشئ R2 bucket في Cloudflare.
2. افتح إعدادات Cloudflare الخاصة بمشروع ImgBed.
3. أضف R2 bucket binding.
4. اجعل `Variable name` مساويًا لـ `img_r2`.
5. اختر R2 bucket الذي أنشأته.
6. احفظ الربط وأعد نشر ImgBed.
7. ارجع إلى ImgBed -> System Settings -> Upload Settings.
8. تأكد من ظهور قناة `Cloudflare R2` وأنها مفعلة.

إذا أردت أن تشارك R2 في اختيار قناة الرفع حسب السعة، فعّل quota limit ثم أدخل Account ID واسم الـ bucket وحد الحصة والـ threshold قبل الحفظ.

![ضبط حدود الحصة](../../image/upload/cloudflare-r2/配置容量限制.png)

## كيف تتحقق؟

- تظهر قناة `Cloudflare R2` الثابتة في إعدادات الرفع.
- تظهر بطاقة القناة على أنها مفعلة.
- ينجح رفع ملف صغير، ويفتح الرابط الناتج بشكل طبيعي.
- إذا أعاد فتح الملف رسالة `R2 database binding is not configured` فهذا يعني أن runtime لم يستلم الربط `img_r2`. تحقق من اسم الربط في Cloudflare وأعد نشر المشروع.
