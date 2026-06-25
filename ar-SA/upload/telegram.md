# إضافة قناة Telegram

## ما الذي تحتاجه قبل البدء؟

| المتطلب | الغرض |
| --- | --- |
| حساب Telegram | لإنشاء البوت وقناة التخزين. |
| `@BotFather` | لإنشاء بوت Telegram. |
| قناة Telegram | الوجهة النهائية التي تُحفظ فيها الملفات. |
| `@userinfobot` | لمعرفة `Chat ID` الخاص بالقناة. |

## أين تضيفها؟

1. افتح إعدادات النظام.
2. انتقل إلى إعدادات الرفع.
3. اضغط إضافة قناة في الزاوية العلوية اليمنى.
4. اختر `Telegram`.

## شرح الحقول

| الحقل | وظيفته | مطلوب |
| --- | --- | --- |
| اسم القناة | اسم واضح للقناة، مثل "Telegram Primary". | نعم |
| التفعيل | تفعيل القناة أو تعطيلها. | موصى به |
| Bot Token | رمز بوت Telegram. | نعم |
| Session ID (Chat ID) | معرّف قناة Telegram. | نعم |
| Relay Proxy URL (اختياري) | استخدمه فقط إذا كان الوصول إلى Telegram غير مستقر. أدخل الرابط كاملًا مع `https://`. | لا |
| ملاحظة | ملاحظات للصيانة لاحقًا. | لا |

## خطوات الإعداد

### 1. أنشئ بوت Telegram

1. افتح Telegram وابحث عن `@BotFather`.
2. افتح المحادثة واضغط البدء.
3. أرسل `/newbot`.
4. اتبع التعليمات لإدخال اسم عرض البوت.
5. اتبع التعليمات لإدخال اسم مستخدم البوت. غالبًا يجب أن ينتهي الاسم بـ `bot`.
6. بعد إنشاء البوت سيعيد `@BotFather` رمز البوت.

هذا الرمز هو قيمة `Bot Token` التي تحتاج إلى إدخالها في ImgBed.

![حفظ رمز البوت](../../image/upload/telegram/保存机器人令牌.png)

### 2. أنشئ قناة

1. في Telegram اضغط إنشاء قناة جديدة.
2. أدخل اسم القناة.
3. أكمل إنشاء القناة.

يمكن استخدام القنوات العامة أو الخاصة.

![إنشاء قناة](../../image/upload/telegram/新建频道.png)

### 3. أضف البوت إلى القناة

1. افتح القناة التي أنشأتها.
2. افتح إعدادات القناة.
3. أضف عضوًا أو مسؤولًا.
4. ابحث عن اسم مستخدم البوت الذي أنشأته.
5. أضف البوت إلى القناة.

لرفع أكثر موثوقية، امنح البوت صلاحيات مسؤول.

![دعوة البوت إلى القناة](../../image/upload/telegram/邀请机器人进频道里.png)

### 4. احصل على معرّف القناة عبر User Info - Get ID - IDbot

1. ابحث عن `@userinfobot` في Telegram. غالبًا يظهر باسم `User Info - Get ID - IDbot`.
2. افتح المحادثة واضغط البدء.
3. اختر القناة من الخيارات التي يقدمها البوت.
4. من منتقي الرسائل اختر القناة المطلوبة وأرسلها إلى `@userinfobot`.
5. عندما يعرض `@userinfobot` النتيجة، انسخ الرقم الظاهر بصيغة `Id: -100...`.

الرقم الذي يبدأ بـ `-100` هو قيمة `Session ID (Chat ID)` المطلوبة في ImgBed.

![الحصول على معرف القناة](../../image/upload/telegram/获取频道id.png)

### 5. املأ قناة Telegram في ImgBed

ارجع إلى نافذة إعداد القناة واملأ الحقول كما يلي:

| حقل الواجهة | القيمة |
| --- | --- |
| معرّف القناة | اسم مخصص للقناة، مثل `TelegramPrimary`. |
| التفعيل | يُنصح بتفعيله. |
| Bot Token | رمز البوت من `@BotFather`. |
| Session ID (Chat ID) | الرقم `-100...` الذي أعاده `@userinfobot`. |
| Relay Proxy URL (اختياري) | عند الحاجة فقط، مثل `https://your-tg-proxy.example.com`. |
| ملاحظة | ملاحظات اختيارية. |

بعد الانتهاء اضغط حفظ.

![تعديل الإعداد](../../image/upload/telegram/编辑配置.png)

## كيف تتحقق؟

| الفحص | طريقة التحقق |
| --- | --- |
| ظهور بطاقة القناة | بعد الحفظ يجب أن تظهر بطاقة قناة Telegram في صفحة إعدادات الرفع. |
| إمكانية تفعيل القناة | يجب أن يبقى مفتاح التفعيل قيد التشغيل. |
| حفظ الإعداد | يجب أن تظهر في التفاصيل قيم Bot Token و Chat ID محفوظة. |
| نجاح الرفع | ارفع صورة تجريبية وتأكد من ظهورها في قناة Telegram الهدف. |

## قائمة تحقق سريعة

```text
Create a bot with @BotFather
-> Save the Bot Token
-> Create a Telegram channel
-> Add the bot to the channel and grant administrator permissions
-> Search for @userinfobot and choose Channel
-> Forward any message from the channel to @userinfobot
-> Copy the returned Id: -100...
-> Enter the Bot Token and Chat ID in ImgBed
-> Save and upload a test image
```

## مراجع

1. بوتات Telegram: https://core.telegram.org/bots
2. واجهة Telegram Bot API: https://core.telegram.org/bots/api
