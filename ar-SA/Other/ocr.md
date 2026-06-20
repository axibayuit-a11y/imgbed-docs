# OCR

تستخرج OCR النصوص من الصور، والملفات الممسوحة، ولقطات شاشة المستندات.

بعد التعرف يمكنك نسخ النتيجة، أو تصديرها بصيغة `Markdown` أو `PDF` أو `Word`، أو تجميع عدة صيغ في حزمة واحدة للتنزيل.

## ماذا تستطيع OCR فعله؟

| الميزة | الوصف |
| --- | --- |
| التعرف على نص الصور | استخراج النص من الصور ولقطات الشاشة والمسح الضوئي. |
| التعرف على تخطيط المستندات | أفضل للجداول والمعادلات والأختام والتخطيطات المختلطة بين النص والصورة. |
| خدمات متعددة | تدعم Baidu PaddleOCR و Microsoft Azure Vision و Google Vision. |
| نسخ النتائج | نسخ النص المتعرف عليه بعد المعالجة. |
| تصدير الملفات | تصدير `Markdown` و `PDF` و `Word`. |
| Batch packaging | بعد التعرف على عدة ملفات، يمكن تنزيل النتائج كحزمة. |

## اضبط خدمات OCR أولًا

افتح:

```text
System Settings -> Other Settings -> OCR
```

![IP geolocation و OCR](../../image/other/ip定位和ocr文字识别.png)

املأ بيانات الخدمات التي تريد استخدامها:

| الخدمة | ما الذي تدخله | أفضل استخدام |
| --- | --- | --- |
| Baidu PaddleOCR | `PaddleOCR Token` | الخيار الأول الموصى به. مناسب للمستندات والصور والجداول والتخطيطات المختلطة. |
| Microsoft Azure Vision | `Azure Vision Endpoint` و `Azure Vision API Key` | مناسب إذا كنت تستخدم خدمات Microsoft السحابية. |
| Google Vision | `Google Vision API Key`. يستخدم service account `JSON` فقط لاستعلام الحصة. | مناسب إذا كنت تستخدم Google Cloud. |

احفظ بعد إدخال البيانات.

يمكن ضبط خدمة واحدة فقط للتجربة الأولى. لا تحتاج إلى الثلاث كلها.

## إعداد Google Vision

إعداد Google له جزآن:

| الهدف | المتطلب |
| --- | --- |
| استخدام OCR | تفعيل `Cloud Vision API` ثم إنشاء `API Key`. |
| استعلام الاستخدام | إنشاء service account ومنحه `Monitoring Viewer` ثم تنزيل service account `JSON`. |

![Google API key و service account](../../image/other/谷歌api秘钥和服务账号截图.png)

### استخدام Google للتعرف

1. افتح Google Cloud Console.
2. انتقل إلى `APIs & Services`.
3. افتح `Library` وابحث عن `Cloud Vision API` وفعّله.
4. ارجع إلى `Credentials`.
5. أنشئ `API Key`.
6. افتح API Key وانسخه.
7. الصقه في `Google Vision API Key` داخل ImgBed.
8. احفظ.

بعد ذلك يمكنك اختيار Google Vision من نافذة OCR.

### استعلام استخدام Google

Quota query غير مطلوب للتعرف نفسه.

يعرض فقط تقريبًا عدد استدعاءات Google Vision المستخدمة خلال آخر 30 يومًا.

1. في Google Cloud Console افتح `IAM & Admin`.
2. افتح `Service Accounts`.
3. أنشئ service account، مثل `vision-monitor`.
4. امنحه دور `Monitoring Viewer`.
5. افتح تفاصيل service account وأنشئ key.
6. اختر `JSON`.
7. نزّل ملف JSON الناتج.
8. ارجع إلى ImgBed واستورده ضمن service account `JSON` (اختياري).
9. بعد نجاح الاستيراد اضغط quota query.

بعد الاستيراد، يعرض ImgBed اسم المشروع الذي يملك service account. عند الاستعلام يقرأ ImgBed بيانات Google monitoring ويعرض عدد استدعاءات هذا الشهر.

باختصار:

| العنصر | الغرض |
| --- | --- |
| `Google Vision API Key` | تنفيذ التعرف OCR. |
| Service account `JSON` | معرفة عدد استدعاءات Google Vision المستخدمة. |
| دور `Monitoring Viewer` | يسمح للحساب الخدمي بقراءة بيانات الاستخدام. |

## الحصول على Baidu PaddleOCR Token

يتطلب Baidu PaddleOCR access token.

![الحصول على PaddleOCR token](../../image/other/获取飞浆令牌.png)

افتح نافذة استدعاء `API` في صفحة Baidu PaddleOCR، واضغط للحصول على token، ثم انسخه.

ارجع إلى ImgBed، والصقه في `PaddleOCR Token`، واحفظ.

## بدء التعرف

في File Management اختر صورة أو لقطة شاشة لمستند واضغط `OCR`.

![تعرف OCR](../../image/other/ocr识别截图.png)

في النافذة اختر خدمة التعرف والنموذج.

نماذج PaddleOCR الشائعة:

| Model | أفضل استخدام |
| --- | --- |
| `PP-StructureV3` | الافتراضي الموصى به. جيد للمستندات والجداول والمعادلات والأختام والتخطيطات المختلطة. |
| `PP-OCRv5` | صور بسيطة ونصوص عادية وتعرف خفيف. |
| `PaddleOCR-VL` | صور معقدة ومتعددة اللغات ومحتوى يشبه الرسوم البيانية. |
| `PaddleOCR-VL-1.5` | صفحات مستندات أكثر تعقيدًا واسترجاع التخطيط. |

إذا لم تكن متأكدًا، ابدأ بـ `PP-StructureV3`.

## خيارات متقدمة

| الخيار | الوصف |
| --- | --- |
| Orientation correction | استخدمه عند دوران الصورة أو ميلانها. |
| Document flattening | للوثائق المصورة التي فيها انحناء أو ميل. |
| Layout detection | عند الرغبة في حفظ العناوين والفقرات والجداول وبنية الصور. |
| Chart recognition | عند وجود رسوم بيانية أو بنى معقدة. |
| Beautify `Markdown` | يجعل Markdown الناتج أسهل قراءة. |

للقطات الشاشة العادية اترك الخيارات قليلة. للمسح الضوئي للوثائق فعّل خيارات المستندات أكثر.

## عرض النتائج

بعد انتهاء التعرف تعرض النافذة النتيجة.

يمكنك نسخها مباشرة أو اختيار صيغ التصدير.

![تعرف PDF](../../image/other/pdf识别截图.png)

في صفحات المستندات، يمكن لـ `PDF` الناتج الحفاظ على شكل الصفحة مع إبقاء النص قابلًا للبحث. هذا مفيد لأرشفة المسح الضوئي والبحث لاحقًا.

## اختيار صيغة التصدير

| الصيغة | أفضل استخدام |
| --- | --- |
| `Markdown (.md)` | الملاحظات وأنظمة التوثيق والتحرير اللاحق. |
| `PDF (.pdf)` | حفظ شكل الصفحة ونتائج المستندات الممسوحة. |
| `Word (.docx)` | متابعة تحرير التخطيط والنص وتسليمه للآخرين. |
| Export all | حفظ عدة صيغ مع الصورة الأصلية، مناسب للأرشيف المهم. |

إذا كنت تحتاج النص فقط، صدّر Markdown.

إذا كان شكل الصفحة مهمًا، استخدم PDF أو Word.

## إخراج Word

يمكن فتح مستندات Word الناتجة وتعديلها ببرامج المكتب.

![نتيجة Word](../../image/other/word识别结果.png)

بعض المستندات تتضمن صورًا وعناوين وفقرات متعرفًا عليها داخل Word output.

تعتمد جودة التعرف على وضوح الصورة الأصلية، واختيار النموذج، وتعقيد المستند.

## أفضل أنواع الملفات لـ OCR

| نوع الملف | التوصية |
| --- | --- |
| لقطات شاشة واضحة | تعرّف عليها مباشرة. |
| ملفات ممسوحة | فضّل `PP-StructureV3`. |
| مستندات مصورة | فعّل orientation correction و document flattening. |
| جداول ومعادلات وأختام | فضّل structured models. |
| صور نصوص قصيرة بسيطة | غالبًا يكفي `PP-OCRv5`. |

الصور الأوضح والنصوص الأكثر استقامة تعطي نتائج أفضل عادة.

## حالات شائعة

| الحالة | المعنى |
| --- | --- |
| Recognition fails | تحقق من حفظ service token أو key. |
| Recognition is slow | المستندات المعقدة والصور الكبيرة تستغرق وقتًا أطول. |
| Table is incomplete | جرّب نموذجًا هيكليًا. |
| Text has mistakes | الضبابية واللمعان والميل تزيد الأخطاء. جرّب صورة أوضح. |
| Word output contains many images | قد تحفظ structured models بعض الصور المتعرف عليها. هذا طبيعي. |

### فشل Google Quota Query

تحقق من:

1. تم استيراد service account `JSON`.
2. لدى service account دور `Monitoring Viewer`.
3. `Cloud Vision API` مفعّل للمشروع.

إذا كنت تحتاج OCR فقط ولا تحتاج استعلام الاستخدام، يمكنك تجاهل service account JSON وملء `Google Vision API Key` فقط.

## المسار السريع

```text
افتح System Settings
-> افتح Other Settings
-> املأ بيانات خدمات OCR
-> احفظ
-> ارجع إلى File Management
-> اختر ملفًا واضغط OCR
-> اختر نموذجًا
-> انتظر التعرف
-> انسخ النتائج أو صدّر Markdown / PDF / Word
```
