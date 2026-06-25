# إضافة قناة Discord

## ما الذي تحتاجه قبل البدء؟

| المتطلب | الغرض |
| --- | --- |
| حساب Discord | لإنشاء خادم وقناة وتطبيق مطور. |
| خادم Discord | يجب أن ينضم البوت إلى خادم قبل أن يستطيع الوصول إلى قناة. |
| قناة نصية | سترسل الصور والملفات إلى هذه القناة. |
| Discord Developer Portal | لإنشاء تطبيق وبوت والحصول على `Bot Token`. |

## أين تضيفها؟

1. افتح إعدادات النظام.
2. انتقل إلى إعدادات الرفع.
3. اضغط إضافة قناة في الزاوية العلوية اليمنى.
4. اختر `Discord`.

## شرح الحقول

| الحقل | وظيفته | مطلوب |
| --- | --- | --- |
| اسم القناة | اسم واضح للقناة، مثل "Discord Primary". | نعم |
| Bot Token | رمز بوت Discord. | نعم |
| Channel ID | معرّف القناة النصية الهدف. | نعم |
| Proxy URL (اختياري) | استخدمه فقط إذا كان الوصول إلى Discord CDN غير مستقر. أدخل الرابط كاملًا مع `https://`. | لا |

## خطوات الإعداد

### 1. أنشئ خادم Discord وقناة نصية

1. افتح Discord.
2. أنشئ خادمًا جديدًا، أو استخدم خادمًا تملكه.
3. أنشئ قناة نصية داخل ذلك الخادم.

![إنشاء خادم](../../image/upload/discord/创建服务器.png)

### 2. أنشئ بوتًا في Discord Developer Portal

1. افتح Discord Developer Portal: `https://discord.com/developers/applications`
2. اضغط `New Application`.
3. أدخل اسم التطبيق وأنشئه.
4. افتح صفحة `Bot` من الشريط الجانبي.
5. أنشئ الرمز أو أعد ضبطه من صفحة `Bot`.
6. احفظ الرمز.

هذا الرمز هو قيمة `Bot Token` التي تحتاج إلى إدخالها في ImgBed.

![عرض رمز البوت](../../image/upload/discord/查看机器人令牌.png)

### 3. أنشئ رابط دعوة OAuth2 وثبّت البوت

1. افتح صفحة `OAuth2` من الشريط الجانبي.
2. ضمن نطاقات الأذونات اختر `bot`.
3. في منطقة الأذونات فعّل الصلاحيات التالية:

| الصلاحية | مطلوبة |
| --- | --- |
| View Channels | نعم |
| Send Messages | نعم |
| Attach Files | نعم |
| Read Message History | نعم |

4. في أسفل الصفحة تأكد أن نوع التكامل هو `Guild Install`.
5. انسخ الرابط الذي تم إنشاؤه.
6. افتح الرابط في المتصفح.
7. اختر الخادم الهدف.
8. أكمل مسار التفويض.

![اختيار صلاحيات البوت في OAuth2](../../image/upload/discord/在oa2勾选机器人权限.png)

![دعوة البوت إلى القناة](../../image/upload/discord/邀请机器人到频道.png)

### 4. فعّل وضع المطوّر وانسخ Channel ID

1. اضغط أيقونة الترس بجانب صورتك في أسفل يسار Discord.
2. افتح الإعدادات المتقدمة من الشريط الجانبي.
3. فعّل وضع المطوّر.
4. ارجع إلى القناة النصية الهدف.
5. اضغط بزر الفأرة الأيمن على اسم القناة.
6. اختر نسخ Channel ID.

الرقم المنسوخ هو قيمة `Channel ID` المطلوبة في ImgBed.

![تفعيل وضع المطوّر](../../image/upload/discord/开启开发者权限.png)

![نسخ Channel ID](../../image/upload/discord/复制群频道id.png)

### 5. املأ قناة Discord في ImgBed

ارجع إلى نافذة إعداد القناة واملأ الحقول كما يلي:

| حقل الواجهة | القيمة |
| --- | --- |
| اسم القناة | اسم مخصص للقناة، مثل `DiscordPrimary`. |
| Bot Token | الرمز المحفوظ من صفحة `Bot` في Discord Developer Portal. |
| Channel ID | معرّف القناة الذي نسخته من Discord. |
| Proxy URL (اختياري) | عند الحاجة فقط، مثل `https://your-proxy.example.com`. |

بعد الانتهاء اضغط حفظ.

![إضافة إعداد قناة Discord](../../image/upload/discord/添加dc新渠道配置.png)

## كيف تتحقق؟

| الفحص | طريقة التحقق |
| --- | --- |
| ظهور بطاقة القناة | بعد الحفظ يجب أن تظهر بطاقة قناة Discord في إعدادات الرفع. |
| إمكانية تفعيل القناة | يجب أن يبقى مفتاح التفعيل قيد التشغيل. |
| حفظ الإعداد | يجب أن تظهر في التفاصيل قيم Bot Token و Channel ID محفوظة. |
| نجاح الرفع | ارفع صورة تجريبية وتأكد من ظهورها في القناة النصية الهدف في Discord. |

## قائمة تحقق سريعة

```text
Create a Discord server
-> Create a text channel
-> Create a bot in the Discord Developer Portal
-> Save the Bot Token from the Bot page
-> In OAuth2, select bot, View Channels, Send Messages, Attach Files, and Read Message History
-> Copy the generated URL and authorize the bot for the target server
-> Make sure the target text channel grants the same permissions
-> Enable Developer Mode
-> Right-click the target text channel and copy the Channel ID
-> Enter the Bot Token and Channel ID in ImgBed
-> Save and upload a test image
```

## مراجع

1. دليل البدء من Discord Developers: https://docs.discord.com/developers/quick-start/getting-started
2. مساعدة Discord - أين أجد معرّف المستخدم أو الخادم أو الرسالة: https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID
