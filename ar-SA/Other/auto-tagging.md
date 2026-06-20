# الوسم التلقائي

يُضبط Auto Tagging من:

```text
System Settings -> Other Settings -> Auto Tagging
```

ينشئ النظام وسوم الصور تلقائيًا، وهي مفيدة للبحث، وتصفية random image، وتصفية public gallery، والتحكم في الوصول حسب التقييم العمري.

## ماذا يستطيع Auto Tagging فعله؟

| الميزة | الوصف |
| --- | --- |
| إنشاء content tags | يضيف وسومًا للأشخاص والمشاهد والعناصر والأسلوب الفني والمحتوى البصري المشابه. |
| إنشاء character tags | مفيد لصور الأنمي والرسوم. |
| إضافة orientation tags | يضيف `landscape` أو `portrait` أو `square`. |
| إضافة image rating | يحفظ نتائج `G/S/Q/E` للمحتوى العام أو الحساس أو المشكوك فيه أو الصريح. |
| Auto-tag on upload | تدخل الصور الجديدة مسار الوسم تلقائيًا. |
| Batch tagging | يضيف وسومًا للصور القديمة في كل المجلدات أو المجلدات المحددة. |

## ما الذي تحتاجه أولًا؟

جهّز رابط Hugging Face Space واحدًا على الأقل يمكن الوصول إليه.

الطريقة الموصى بها هي نسخ Space الخاص بـ SmilingWolf باسم `wd-tagger` إلى حساب Hugging Face الخاص بك:

```text
https://huggingface.co/spaces/SmilingWolf/wd-tagger
```

يمكنك استخدام الـ Space العام مؤقتًا للتجربة، لكنه مشترك بين كثير من المستخدمين وقد يتأخر أو يدخل في طابور أو يتوقف مؤقتًا. النسخة الموجودة في حسابك عادة أكثر ثباتًا للاستخدام اليومي.

## نسخ Space الخاص بـ SmilingWolf

1. سجّل الدخول إلى Hugging Face.
2. افتح `https://huggingface.co/spaces/SmilingWolf/wd-tagger`.

![SmilingWolf public Space](../../image/other/微笑狼的公开仓库.png)

3. اضغط قائمة النقاط الثلاث في الزاوية العلوية اليمنى.
4. اختر `Duplicate this Space`.
5. اترك الاسم الافتراضي أو اختر اسمًا مثل `wd-tagger`.
6. اجعل visibility على `Public`. هذا يجعل استدعاء ImgBed أسهل.
7. ابدأ بالعتاد المجاني الافتراضي. قم بالترقية فقط إذا لاحظت طوابير واضحة.
8. أنشئ Space وانتظر اكتمال البناء.

بعد اكتمال البناء، افتح صفحة Space الخاصة بك. غالبًا يكون الرابط بالشكل:

```text
https://huggingface.co/spaces/your-name/wd-tagger
```

انسخ الرابط من المتصفح والصقه في `Space URLs` داخل ImgBed.

## إدخال عدة Space URLs

أدخل رابط Space واحدًا في كل سطر.

| القيمة | الوصف |
| --- | --- |
| `https://huggingface.co/spaces/SmilingWolf/wd-tagger` | Space العام لـ SmilingWolf. مناسب للتجربة المؤقتة. |
| `https://huggingface.co/spaces/lintonxue00/wd-tagger` | رابط صفحة Space منسوخ. |
| `https://huggingface.co/spaces/your-name/wd-tagger` | Space الذي نسخته إلى حسابك. |

يمكن إدخال عدة روابط. يستخدم ImgBed عدة Spaces معًا وقد يحسن ذلك السرعة.

إذا تعطل Space مؤقتًا، يمكن للآخرين متابعة المعالجة.

## الإعدادات

| الخيار | التوصية |
| --- | --- |
| `Space URLs` | أدخل روابط Space التي جهزتها. استخدم واحدًا على الأقل. |
| Target folder | اتركه فارغًا لكل المجلدات. اختر مجلدًا فقط إذا أردت معالجة مجلد محدد. |
| Recognition model | اترك `wd-swinv2-tagger-v3` افتراضيًا. |
| General tag threshold | القيمة الافتراضية مناسبة لمعظم الصور. القيمة الأقل تنتج وسومًا أكثر، والأعلى تنتج وسومًا أقل. |
| Character tag threshold | القيمة الافتراضية محافظة وتقلل أخطاء character tags. |
| `MCut` automatic threshold | اتركه مغلقًا في البداية. فعّله إذا أردت أن يقرر النموذج عدد الوسوم تلقائيًا. |
| Auto-tag on upload | فعّله إذا كانت الصور الجديدة يجب أن تُوسم تلقائيًا. |
| Start tagging | يشغّل وسمًا جماعيًا يدويًا للصور القديمة. |

## قيم بداية مقترحة

| الخيار | القيمة المقترحة |
| --- | --- |
| Recognition model | `wd-swinv2-tagger-v3` |
| General tag threshold | `0.35` |
| Character tag threshold | `0.85` |
| `MCut` | مغلق في البداية |
| Auto-tag on upload | فعّله عند الحاجة |

إذا كانت الوسوم كثيرة، ارفع general threshold قليلًا. إذا كانت قليلة، اخفضه قليلًا.

## Batch Tagging

1. املأ `Space URLs`.
2. اختر target folder.
3. اضغط start tagging.
4. انتظر اكتمال التقدم.

إذا كان target folder فارغًا، يعالج ImgBed كل المجلدات.

Batch tagging مناسب للصور القديمة. للصور الجديدة فعّل auto-tag on upload حتى لا تحتاج إلى تشغيله يدويًا كل مرة.

## Auto-Tag on Upload

بعد تفعيله، تستدعي الصور الجديدة روابط `Space URLs` المضبوطة تلقائيًا.

هذا مناسب للاستخدام المستمر.

إذا كان Space في طابور، يمكن أن يكتمل الرفع أولًا وتستمر عملية الوسم بعده.

## أي الصور تُعالج؟

يعالج Auto tagging ملفات الصور أساسًا.

تُتجاوز الصور التي تملك بالفعل tags و orientation و rating و width و height كاملة لتجنب استدعاءات Space غير الضرورية.

يحاول ImgBed ملء المعلومات الناقصة فقط متى أمكن. مثلًا، إذا كان orientation فقط مفقودًا، يحاول إضافته دون تشغيل مسار وسوم المحتوى كاملًا.

## FAQ

### لماذا أنسخ Space خاصًا بي؟

Spaces العامة مشتركة بين كثير من المستخدمين. النسخة الخاصة بك يستخدمها موقعك غالبًا، لذلك تكون أسرع وأكثر موثوقية.

### Space يستغرق وقتًا في البدء

بعد الإنشاء الأول أو فترة خمول طويلة قد يحتاج Space إلى وقت للبدء.

افتح صفحة Space أولًا. بعد أن يستطيع التعرف على صورة بشكل طبيعي، ارجع إلى ImgBed وابدأ الوسم.

### كيف أنسخ Space URL؟

افتح صفحة Hugging Face Space وانسخ عنوان المتصفح.

```text
https://huggingface.co/spaces/lintonxue00/wd-tagger
https://huggingface.co/spaces/SmilingWolf/wd-tagger
```

### هل يمكن إضافة عدة Spaces؟

نعم. أدخل رابط Space واحدًا في كل سطر.

عدة Spaces تعالج الصور معًا وهي مفيدة إذا كان لديك عدد كبير من الصور.

### لماذا الوسوم بالإنجليزية؟

نماذج SmilingWolf تُخرج وسومًا إنجليزية. هذا متوقع.

تستخدم الوسوم أساسًا للبحث والتصفية و random image API وفلاتر public gallery.

### ما فائدة rating tags؟

تعمل نتائج rating مع access mode في Security Settings.

مثلًا، عند تقييد وصول الزوار حسب التقييم العمري، تُفلتر ميزات التصفح العام و random image الصور حسب تلك القواعد.

## المسار السريع

```text
سجّل الدخول إلى Hugging Face
-> افتح SmilingWolf/wd-tagger
-> Duplicate this Space
-> انتظر بناء Space
-> انسخ Space URL
-> املأ Space URLs في ImgBed
-> اختر النموذج وال thresholds
-> ابدأ tagging أو فعّل auto-tag on upload
```
