# إضافة قناة GitHub Releases

## ما الذي تحتاجه قبل البدء؟

تحتاج إلى ثلاثة أشياء فقط:

| المتطلب | الغرض |
| --- | --- |
| حساب GitHub | لإنشاء رمز وصول وامتلاك المستودع. |
| GitHub Access Token | يستخدمه ImgBed للوصول إلى GitHub API وإنشاء releases ورفع الملفات. |
| اسم المستودع | يمكن إدخال اسم المستودع فقط، مثل `image`. |

## خطوات الإعداد

### الخطوة 1: سجّل الدخول إلى GitHub وأنشئ Access Token

1. سجّل الدخول إلى GitHub.
2. اضغط صورتك في الزاوية العلوية اليمنى وافتح `Settings`.
3. افتح `Developer settings` من الشريط الجانبي.
4. افتح `Personal access tokens`.
5. افتح `Tokens (classic)`.
6. اضغط `Generate new token (classic)`.
7. أعطِ الرمز اسمًا واضحًا.
8. اختر تاريخ انتهاء يناسب أسلوبك في الصيانة.
9. اختر نطاقي الأذونات التاليين: `repo` و `workflow`.
10. انسخ الرمز واحفظه مباشرة بعد إنشائه.

![إضافة صلاحيات GitHub](../../image/upload/github-releases/添加github权限.png)

## الخطوة 2: املأ قناة GitHub Releases في ImgBed

بعد اختيار `GitHub Releases` في إعدادات الرفع، املأ الحقول كما يلي:

| حقل الواجهة | ما الذي تدخله |
| --- | --- |
| اسم القناة | اسم تختاره، مثل `GitHubPrimary`. |
| Access Token | GitHub Personal Access Token الذي أنشأته للتو. |
| اسم المستودع | اسم مستودع قصير مثل `image`، أو مسار كامل مثل `username/image`. |
| مستودع خاص | فعّله أو عطّله حسب حاجتك. |
| ملاحظة | اختياري، مثل `Primary upload channel`. |

![ملء إعداد قناة GitHub](../../image/upload/github-releases/填写github渠道配置.png)

## الخطوة 3: احفظ القناة

بعد ملء الحقول اضغط حفظ.

سيتولى النظام التفاصيل التالية:

| سلوك النظام | الوصف |
| --- | --- |
| اسم مستودع قصير | يحدد ImgBed حساب GitHub الحالي ويوسّع القيمة إلى مسار مستودع كامل. |
| مسار مستودع كامل | يستخدم ImgBed مسار `username/repository` كما أُدخل. |
| فحص المستودع | إذا استخدمت مسار الحساب الشخصي الحالي، ينشئ ImgBed المستودع تلقائيًا عند عدم وجوده. إذا أدخلت مسارًا كاملًا يدويًا، يستخدمه مباشرة. |
| حالة العام/الخاص | تتم مزامنة ظهور المستودع حسب المفتاح الحالي. |

## قائمة تحقق سريعة

تعمل GitHub Releases بهذه الطريقة:

```text
Sign in to GitHub
-> Create an Access Token
-> Return to ImgBed and enter the token and repository name
-> Save
-> If only a repo name is entered, ImgBed adds the current username automatically
-> If username/repo is entered, ImgBed uses it as-is
-> Upload a test image
```
