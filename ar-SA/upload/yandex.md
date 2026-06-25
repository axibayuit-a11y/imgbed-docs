# إضافة قناة Yandex

## ما الذي تحتاجه أولًا؟

| المتطلب | لماذا تحتاجه |
| --- | --- |
| حساب Yandex | لتسجيل الدخول وتفويض Yandex Disk |
| تطبيق Yandex OAuth | لإنشاء `Client ID` و `Client Secret` |
| نطاق ImgBed الخاص بك | لاستخدامه في عنوان إعادة توجيه OAuth |
| مساحة Yandex Disk متاحة | موقع التخزين الفعلي للملفات |

## خطوات الإعداد

### الخطوة 1: أنشئ تطبيق Yandex OAuth

1. افتح صفحة إنشاء تطبيق Yandex OAuth:

```text
https://oauth.yandex.com/client/new
```

2. إذا تم تحويلك إلى تسجيل الدخول، فسجّل الدخول أولًا بحساب Yandex.
3. أنشئ تطبيقًا جديدًا.
4. أعطِ التطبيق اسمًا واضحًا، مثل `imgbed-yandex`.
5. ابحث عن إعدادات رد الاتصال أو عنوان إعادة التوجيه.
6. أدخل:

```text
https://your-domain.com/api/oauth/yandex/callback
```

### الخطوة 2: تأكد من الصلاحيات

لدمج Yandex الحالي في ImgBed، أبقِ هذه الصلاحيات الأربع ضمن `Yandex.Disk REST API`:

| الإذن | الغرض |
| --- | --- |
| `cloud_api:disk.app_folder` | يسمح لـ ImgBed بحفظ الملفات في مجلد التطبيق |
| `cloud_api:disk.read` | قراءة الملفات وروابط التنزيل |
| `cloud_api:disk.write` | رفع الملفات وإنشاء المجلدات وحذف الملفات |
| `Access to information about Yandex.Disk` | قراءة حصة القرص والمساحة المستخدمة |

إذا ظهرت هذه الصلاحيات ضمن `Yandex ID API` فهي اختيارية:

| نص الصلاحية | التوصية |
| --- | --- |
| `Access to username, first name and surname, gender` | اختياري |
| `Access to email address` | اختياري |

تعتمد ميزات الرفع والتنزيل والحذف والحصص أساسًا على صلاحيات `Yandex.Disk REST API` الأربع أعلاه.

![ضبط صلاحيات Yandex Disk](../../image/upload/yandex/dataaccess配置软盘权限.png)

### الخطوة 3: انسخ بيانات اعتماد التطبيق

بعد إنشاء التطبيق انسخ:

| حقل Yandex | حقل ImgBed |
| --- | --- |
| `Client ID` | `Client ID` |
| `Client Secret` | `Client Secret` |

![تسجيل Client ID و Secret](../../image/upload/yandex/记录客户端id和secret.png)

### الخطوة 4: املأ قناة Yandex

في إعدادات الرفع اختر `Yandex` واملأ:

| حقل ImgBed | ما الذي تدخله |
| --- | --- |
| اسم القناة | اسم واضح، مثل `Main Yandex` |
| Client ID | `Client ID` الخاص بتطبيق Yandex |
| Client Secret | `Client Secret` الخاص بتطبيق Yandex |
| Refresh Token | اتركه فارغًا الآن |
| المجلد الجذر | اختياري. الافتراضي `imgbed`. |

![تعديل إعداد القناة](../../image/upload/yandex/编辑配置渠道.png)

### الخطوة 5: احصل على Refresh Token

1. في ImgBed اضغط الحصول على الرمز.
2. سجّل الدخول إلى حساب Yandex الذي تريد ربطه.
3. وافق على طلب التفويض.
4. ستعرض صفحة رد الاتصال قيمة `Refresh Token`.
5. انسخها.
6. ارجع إلى ImgBed والصقها في حقل `Refresh Token`.

![نسخ refresh token بعد التفويض](../../image/upload/yandex/授权后复制刷新令牌.png)

### الخطوة 6: احفظ القناة

بعد ملء جميع الحقول احفظ القناة.

## المسار السريع

```text
Open Yandex OAuth Console
-> Create an app
-> Add https://your-domain.com/api/oauth/yandex/callback
-> Confirm Yandex Disk permissions
-> Copy Client ID and Client Secret
-> Fill Client ID / Client Secret into ImgBed
-> Click Get Token
-> Copy the Refresh Token from the callback page
-> Paste it back into ImgBed and save
```

## مراجع

1. تسجيل تطبيق Yandex: https://yandex.com/dev/id/doc/en/register-client
2. الحصول على رمز تفويض عبر URL: https://yandex.com/dev/id/doc/en/codes/code-url
3. نقطة نهاية رمز Yandex OAuth: https://yandex.com/dev/id/doc/en/tokens/token
