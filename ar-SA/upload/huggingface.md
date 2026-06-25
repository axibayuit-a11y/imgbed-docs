# إضافة قناة Hugging Face

## ما الذي تحتاجه قبل البدء؟

تحتاج إلى ثلاثة أشياء فقط:

| المتطلب | الغرض |
| --- | --- |
| حساب Hugging Face | لإنشاء رمز وصول وامتلاك المستودع. |
| Hugging Face User Access Token | يستخدمه ImgBed للوصول إلى Hugging Face API وإنشاء المستودعات ورفع الملفات. |
| اسم المستودع | يمكن إدخال اسم المستودع فقط، مثل `image`. |

## خطوات الإعداد

### الخطوة 1: سجّل الدخول إلى Hugging Face وأنشئ Access Token

1. سجّل الدخول إلى Hugging Face.
2. اضغط صورتك في الزاوية العلوية اليمنى وافتح `Settings`.
3. افتح `Access Tokens` من الشريط الجانبي.
4. أنشئ رمزًا جديدًا.
5. أعطِ الرمز اسمًا واضحًا.
6. اختر صلاحية `write`.
7. انسخ الرمز واحفظه مباشرة بعد إنشائه.

![إنشاء token](../../image/upload/huggingface/创建令牌.png)

## الخطوة 2: املأ قناة Hugging Face في ImgBed

بعد اختيار `Hugging Face` في إعدادات الرفع، املأ الحقول كما يلي:

| حقل الواجهة | ما الذي تدخله |
| --- | --- |
| اسم القناة | اسم تختاره، مثل `hf-primary`. |
| اسم المستودع | اسم مستودع قصير مثل `image`، أو مسار كامل مثل `username/image`. |
| Access Token | Hugging Face User Access Token الذي أنشأته للتو. |
| مستودع خاص | فعّله أو عطّله حسب حاجتك. |
| ملاحظة | اختياري، مثل `Primary upload channel`. |

![إضافة القناة](../../image/upload/huggingface/添加渠道.png)

## الخطوة 3: احفظ القناة

بعد ملء الحقول اضغط حفظ.

سيتولى النظام التفاصيل التالية:

| سلوك النظام | الوصف |
| --- | --- |
| اسم مستودع قصير | يحدد ImgBed حساب Hugging Face الحالي ويوسّع القيمة إلى مسار مستودع كامل. |
| مسار مستودع كامل | يستخدم ImgBed مسار `username/repository` كما أُدخل. |
| فحص المستودع | إذا استخدمت مسار الحساب الشخصي الحالي، يحاول ImgBed إنشاء المستودع إن لم يكن موجودًا. إذا أدخلت مسارًا كاملًا يدويًا، يستخدمه مباشرة. |
| نوع المستودع | تستخدم هذه القناة مستودعًا من نوع `dataset`. |
| حالة العام/الخاص | تتم مزامنة ظهور المستودع حسب المفتاح الحالي. |

## قائمة تحقق سريعة

```text
Sign in to Hugging Face
-> Create an Access Token
-> Select write permission
-> Return to ImgBed and enter the token and repository name
-> Save
-> If only a repo name is entered, ImgBed adds the current username automatically
-> If username/repo is entered, ImgBed uses it as-is
-> ImgBed checks or creates the dataset repository
-> Upload a test image
```
