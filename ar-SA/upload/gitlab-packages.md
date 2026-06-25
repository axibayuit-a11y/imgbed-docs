# إضافة قناة GitLab Packages

## ما الذي تحتاجه قبل البدء؟

تحتاج إلى ثلاثة أشياء فقط:

| المتطلب | الغرض |
| --- | --- |
| حساب GitLab | لإنشاء رمز وصول وامتلاك المشروع. |
| GitLab Personal Access Token | يستخدمه ImgBed للوصول إلى GitLab API وإنشاء المشاريع ورفع الملفات إلى Generic Packages. |
| اسم المشروع | يمكن إدخال اسم المشروع فقط، مثل `imgbed`. |

## خطوات الإعداد

### الخطوة 1: سجّل الدخول إلى GitLab وأنشئ Access Token

1. سجّل الدخول إلى GitLab.
2. اضغط صورتك في الزاوية العلوية اليمنى وافتح `Preferences`.
3. افتح `Access Tokens` من الشريط الجانبي.
4. أعطِ الرمز اسمًا واضحًا.
5. اختر تاريخ انتهاء يناسب أسلوبك في الصيانة.
6. اختر نطاق الأذونات `api`.
7. انسخ الرمز واحفظه مباشرة بعد إنشائه.

![إنشاء رمز تقليدي](../../image/upload/gitlab-packages/点击生成旧版令牌.png)

![اختيار صلاحيات الرمز](../../image/upload/gitlab-packages/勾选令牌权限.png)

## الخطوة 2: املأ قناة GitLab Packages في ImgBed

بعد اختيار `GitLab Packages` في إعدادات الرفع، املأ الحقول كما يلي:

| حقل الواجهة | ما الذي تدخله |
| --- | --- |
| اسم القناة | اسم تختاره، مثل `GitLabPrimary`. |
| Access Token | GitLab Personal Access Token الذي أنشأته للتو. |
| اسم المشروع | اسم مشروع قصير مثل `imgbed`، أو مسار كامل مثل `username/imgbed`. |
| مستودع خاص | فعّله أو عطّله حسب حاجتك. |
| ملاحظة | اختياري، مثل `Primary upload channel`. |

![إعداد القناة](../../image/upload/gitlab-packages/配置渠道内容.png)

## الخطوة 3: احفظ القناة

بعد ملء الحقول اضغط حفظ.

سيتولى النظام التفاصيل التالية:

| سلوك النظام | الوصف |
| --- | --- |
| اسم مشروع قصير | يحدد ImgBed حساب GitLab الحالي ويوسّع القيمة إلى مسار مشروع كامل. |
| مسار مشروع كامل | يستخدم ImgBed مسار `username/project` كما أُدخل. |
| فحص المشروع | إذا استخدمت مسار الحساب الشخصي الحالي، ينشئ ImgBed المشروع تلقائيًا عند عدم وجوده. إذا أدخلت مسارًا كاملًا يدويًا، يستخدمه مباشرة. |
| حالة العام/الخاص | تتم مزامنة ظهور المشروع حسب المفتاح الحالي. |

## قائمة تحقق سريعة

```text
Sign in to GitLab
-> Create an Access Token
-> Select only the api scope
-> Return to ImgBed and enter the token and project name
-> Save
-> If only a project name is entered, ImgBed adds the current username automatically
-> If username/project is entered, ImgBed uses it as-is
-> Upload a test image
```
