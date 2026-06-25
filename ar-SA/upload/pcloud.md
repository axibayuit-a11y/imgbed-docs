# إضافة قناة pCloud

## مناسبة إذا

- لديك حساب pCloud وتريد من ImgBed حفظ الصور في pCloud.
- لا تمانع استخدام بريد حساب pCloud وكلمة مروره كبيانات اعتماد للقناة.

## ما الذي تحتاجه أولًا؟

| المتطلب | لماذا تحتاجه |
| --- | --- |
| بريد حساب pCloud | لتسجيل الدخول إلى pCloud API |
| كلمة مرور pCloud | لتسجيل الدخول إلى pCloud API |
| مضيف API | الافتراضي `api.pcloud.com`. حسابات أوروبا يمكنها استخدام `eapi.pcloud.com`. |
| مجلد التخزين | مكان حفظ الملفات. الافتراضي `imgbed`. |

## أين تضيفها؟

1. افتح إعدادات النظام.
2. افتح إعدادات الرفع.
3. اضغط إضافة قناة في الزاوية العلوية اليمنى.
4. اختر `pCloud`.

## شرح الحقول

| الحقل | الغرض | مطلوب |
| --- | --- | --- |
| اسم القناة | يميز قناة pCloud هذه، مثل `Personal pCloud` | نعم |
| بريد الحساب | بريد تسجيل الدخول إلى pCloud | نعم |
| Password | كلمة مرور pCloud | نعم |
| مضيف API | مضيف pCloud API. الافتراضي `api.pcloud.com`. | لا |
| مجلد التخزين | المجلد المستخدم لتخزين الملفات. الافتراضي `imgbed`. | لا |

اختر مضيف API حسب منطقة الحساب:

| منطقة الحساب | مضيف API |
| --- | --- |
| Default / US | `api.pcloud.com` |
| Europe | `eapi.pcloud.com` |

## خطوات الإعداد

1. افتح إعدادات الرفع.
2. اضغط إضافة قناة.
3. اختر `pCloud`.
4. أدخل اسم قناة واضحًا.
5. أدخل بريد حساب pCloud.
6. أدخل كلمة مرور pCloud.
7. اترك مضيف API على `api.pcloud.com`، أو استخدم `eapi.pcloud.com` لحسابات أوروبا.
8. اترك مجلد التخزين على `imgbed`، أو غيّره إلى المجلد الذي تفضله.
9. احفظ القناة.

![إعداد القناة](../../image/upload/pcloud/配置渠道.png)

## كيف تتحقق؟

| الفحص | النتيجة المتوقعة |
| --- | --- |
| بطاقة القناة | تظهر بطاقة قناة pCloud بعد الحفظ. |
| مفتاح القناة | يبقى المفتاح على البطاقة مفعّلًا. |
| عرض البريد | تعرض البطاقة بريد pCloud المتصل. |
| استعلام الحصة | بعد نجاح الاستعلام تظهر السعة المستخدمة والإجمالية. |
| اختبار الرفع | تظهر صورة تجريبية في مجلد تخزين pCloud المحدد. |

![نجاح استعلام الحصة](../../image/upload/pcloud/查询额度成功.png)

## استكشاف الأخطاء

### لماذا ليس OAuth2؟

OAuth2 في pCloud ليس متاحًا ذاتيًا بشكل افتراضي. تحتاج إلى مراسلة pCloud وطلب تفعيله.

مسار OAuth2 الحالي في pCloud لا يدعم أيضًا workflow روابط الرفع قصيرة المدة التي يحتاجها ImgBed، لذلك تستخدم هذه القناة تسجيل الدخول ببريد الحساب وكلمة المرور.

### أي مضيف API أستخدم؟

الافتراضي:

```text
api.pcloud.com
```

لحسابات أوروبا:

```text
eapi.pcloud.com
```

## المسار السريع

```text
Prepare your pCloud email and password
-> Open Upload Settings
-> Add Channel
-> Choose pCloud
-> Fill channel name / email / password
-> Keep API host as api.pcloud.com unless your account is in Europe
-> Keep storage directory as imgbed unless you need another folder
-> Save
-> Query quota
-> Upload a test image
```
