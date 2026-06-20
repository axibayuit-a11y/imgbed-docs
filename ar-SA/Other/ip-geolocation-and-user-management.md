# تحديد الموقع عبر IP وإدارة المستخدمين

تحوّل IP geolocation عناوين IP في سجلات الرفع وأجهزة الدخول والسجلات المشابهة إلى مواقع تقريبية.

بعد ضبطها تستطيع لوحة الإدارة عرض مصادر الرفع والوصول بوضوح أكبر. كما تتيح User Management حظر أو إعادة السماح بالرفع لعناوين IP المشبوهة.

## أين تضبطها؟

افتح:

```text
System Settings -> Other Settings -> IP Geolocation
```

![IP geolocation](../../image/other/ip定位/ip定位.png)

## الإعدادات المتاحة

يدعم مسار IP geolocation الجديد عدة مصادر بدل الاعتماد على خدمة خرائط واحدة.

| الإعداد | الغرض |
| --- | --- |
| IP geolocation language | يحدد لغة العرض، مثل English و Simplified Chinese و Japanese و French وغيرها. |
| MaxMind Account ID | حساب MaxMind لاستخدام MaxMind GeoLite Web Service. |
| MaxMind License Key | مفتاح ترخيص MaxMind. |
| Tencent Map Key | مفتاح Tencent Location Service. مفيد للعناوين الصينية و IP داخل الصين القارية. |
| ipapi Key | مفتاح APILayer ipapi. يدعم تحديد الموقع بعدة لغات. |

املأ الخدمات التي تحتاجها فقط. لا يلزم ضبط كل الحقول.

إذا لم تُدخل أي مفتاح، سيحاول ImgBed استخدام مصادر مجانية مدمجة، لكن الثبات ودعم اللغة والدقة قد تكون أقل من خدمة تضبطها بنفسك.

## الاختيارات الموصى بها

إذا كنت تحتاج العناوين الصينية غالبًا:

1. اجعل IP geolocation language على Simplified Chinese.
2. اضبط Tencent Map Key.
3. أضف MaxMind أو ipapi اختياريًا كمصادر احتياطية.

إذا كنت تحتاج الإنجليزية أو عناوين متعددة اللغات:

1. اختر اللغة المطلوبة.
2. اضبط MaxMind Account ID و License Key.
3. أضف ipapi Key إذا أردت نتائج متعددة اللغات أفضل.

## إعداد MaxMind

يحتاج MaxMind إلى:

```text
MaxMind Account ID
MaxMind License Key
```

ابحث عن Account ID في لوحة MaxMind وأنشئ License Key من صفحة License Keys.

![إعداد MaxMind key](../../image/other/ip定位/maxmind的key配置.png)

بعد الإنشاء، الصق Account ID و License Key في ImgBed واحفظ.

خطة MaxMind المجانية مناسبة للاستخدام اليومي، لكنها محدودة الطلبات. إذا انتهت الحصة، يواصل ImgBed تجربة المصادر الأخرى المتاحة.

## إعداد ipapi

يستخدم ipapi مفتاح APILayer API Key.

افتح لوحة ipapi وانسخ API Key المعروض هناك.

![إعداد ipapi](../../image/other/ip定位/ipapi配置.png)

الصقه في حقل `ipapi Key` داخل ImgBed واحفظ.

يدعم ipapi تحديد الموقع بعدة لغات، وهو مفيد عند عرض العناوين بلغة محددة. خطته المجانية محدودة الطلبات أيضًا. إذا انتهت الحصة، يواصل ImgBed تجربة المصادر الأخرى.

## إعداد Tencent Map Key

Tencent Map Key مفيد للعناوين الصينية، خصوصًا IP داخل الصين القارية.

عند إنشاء المفتاح في Tencent Location Service فعّل:

```text
WebServiceAPI
```

بعد الإنشاء، الصق المفتاح في `Tencent Map Key` واحفظ.

إذا كنت تحتاج تحديدًا أساسيًا لعناوين IP الصينية، فهذا يكفي كبداية.

## ما الذي تراجعه في User Management؟

تتوفر User Management من أعلى لوحة الإدارة.

![User management](../../image/other/用户管理显示.png)

تعرض User Management نشاط الرفع حسب IP:

| الحقل | الوصف |
| --- | --- |
| IP source | عنوان IP المصدر للرافع. |
| Address | الموقع التقريبي المحلل من IP. |
| Total upload size | إجمالي حجم الملفات المرفوعة من هذا IP. |
| Upload count | عدد الرفعات من هذا IP. |
| Upload allowed | مفعّل يعني أن الرفع مسموح. مغلق يعني أن الرفع محظور. |

اضغط السهم على اليسار لعرض الملفات التي رفعها ذلك IP.

تعرض قائمة الملفات اسم الملف والمعاينة والحجم ونتيجة المراجعة وحالة الملف ووقت الرفع. إذا بدا النشاط مشبوهًا، افتح IP أولًا وراجع الملفات ثم قرر هل تمنع الرفع لاحقًا.

إذا كان IP مشبوهًا، أوقف `Upload allowed`. ستُحظر الرفعات المستقبلية من ذلك IP.

## البحث والترتيب والفلاتر المتقدمة

في أعلى User Management يمكنك البحث حسب IP source أو address.

رتّب حسب الوقت أو upload count أو total upload size للعثور على الرافعين الجدد أو الأكثر تكرارًا أو الأعلى استخدامًا.

لتحقيق أعمق، افتح advanced filters.

![الفلاتر المتقدمة](../../image/other/用户管理高级筛选.png)

تدعم advanced filters:

| الفلتر | الاستخدام |
| --- | --- |
| Time range | عرض IP التي رفعت ملفات خلال فترة محددة. |
| Access status | التصفية حسب normal و blocked وحالات مشابهة. |
| Allow/block list | التصفية حسب allowlist أو blocklist أو unset. |
| File type | عرض IP التي رفعت images أو videos أو audio أو documents أو code أو غيرها. |
| File size | التصفية حسب نطاق حجم الملف المرفوع. |
| Age rating | التصفية حسب unset و General و R12+ و R16+ و R18 وما شابه. |
| File status | التصفية حسب حالة الملف الحالية للتحقق من الملفات غير الطبيعية. |

اضغط `Apply Filters` للتطبيق. استخدم `Reset` للعودة إلى كل البيانات.

## عرض الجوال

على الجوال تتحول User Management إلى عرض بطاقات.

![إدارة المستخدمين على الجوال](../../image/other/手机端显示用户管理效果.png)

تعرض كل بطاقة IP والعنوان وإجمالي حجم الرفع وعدد الرفعات ومفتاح upload allowed. يمكنك إدارة المستخدمين دون تمرير أفقي للجدول.

## إذا بدا الموقع غير صحيح

تحديد الموقع عبر IP تقريبي وليس عنوانًا دقيقًا.

إذا كان المستخدم خلف proxy أو data center أو cloud server أو شبكة عابرة للحدود، فقد يختلف الموقع المعروض عن الموقع الحقيقي.

استخدم هذه الميزة لفهم المصدر التقريبي، واكتشاف الرفعات غير الطبيعية، والمساعدة في قرارات الحظر. لا تعتبرها تتبعًا دقيقًا.

## حالات شائعة

| الحالة | المعنى |
| --- | --- |
| Address فارغ | قد لا يكون IP قد حُلل بعد، أو أن المصدر الحالي غير متاح مؤقتًا. |
| لغة Address غير صحيحة | تحقق من IP geolocation language ومن وجود مصدر يدعم تلك اللغة. |
| Address يعرض data center | كثير من البروكسيات والخوادم السحابية والزواحف تظهر كعناوين data center أو ISP. |
| Upload count مرتفع | راجع هذا IP بعناية واحظر الرفع عند الحاجة. |
| Total upload size كبير | رتّب أو فلتر، وافتح IP، وراجع الملفات المحددة. |
| تحتاج إلى الإرجاع بعد الحظر | أعد تفعيل `Upload allowed`. |

## المسار السريع

```text
افتح IP Geolocation في Other Settings
-> اختر IP geolocation language
-> املأ بيانات MaxMind أو Tencent Map أو ipapi حسب الحاجة
-> احفظ الإعدادات
-> افتح User Management
-> راجع IP source و address و total upload size و upload count
-> استخدم البحث أو الترتيب أو advanced filters للعثور على IP غير طبيعي
-> اسمح بالرفع أو احظره عند الحاجة
```
