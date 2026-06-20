# إعدادات الصفحة

تتحكم Page settings في مظهر الموقع، والقيم الافتراضية لصفحة الرفع، وصور الخلفية، ومظهر لوحة الإدارة.

## Global Settings

| الخيار | الغرض |
| --- | --- |
| Site title | العنوان الظاهر في تبويب المتصفح. |
| Site icon | الأيقونة الصغيرة الظاهرة في تبويب المتصفح. |
| ImgBed name | الاسم الظاهر في صفحات الواجهة الأمامية. |
| ImgBed logo | صورة الشعار الظاهرة في صفحات الواجهة الأمامية. |
| Logo link | الرابط الذي يفتح عند الضغط على الشعار أو الصورة الرمزية. |
| Background switch interval | فترة تدوير عدة خلفيات بالميلي ثانية. `60000` تعني 60 ثانية. |
| Background opacity | شفافية صورة الخلفية من `0` إلى `1`. القيم الأقل تجعلها أخف. |
| Default URL prefix | prefix المستخدم عند إنشاء روابط الصور. الفارغ يعني استخدام نطاق الموقع الحالي. |

## Client Settings

| الخيار | الغرض |
| --- | --- |
| Announcement | إعلان يظهر أعلى صفحة الرفع. يدعم HTML. |
| Default upload channel | قناة الرفع المختارة افتراضيًا في صفحة الرفع. يمكن أيضًا اختيار Smart Dispatch. |
| Default upload directory | مجلد الرفع الافتراضي، مثل `/user/`. الفارغ أو `/` يعني الجذر. |
| Default naming method | طريقة إنشاء اسم الملف افتراضيًا بعد الرفع. انظر أدناه. |
| Convert to WebP by default | يحوّل الصور إلى WebP قبل الرفع. |
| Enable compression by default | يضغط الصور محليًا في المتصفح قبل الرفع. |
| Default compression threshold | يبدأ الضغط تلقائيًا عندما تتجاوز الصورة هذا الحجم بالـ MB. |
| Default target size | الحجم المستهدف بعد الضغط بالـ MB. |
| Login page background | خلفية صفحة دخول المستخدم. |
| Upload page background | خلفية صفحة الرفع. |
| Footer portal link | الرابط الذي يفتحه زر footer portal. |
| Hide footer | يخفي تذييل الواجهة الأمامية عند تفعيله. |

## Admin Settings

| الخيار | الغرض |
| --- | --- |
| Admin login background | خلفية صفحة دخول الإدارة. |
| Admin background | خلفية صفحات الإدارة. يمكن استخدام رابط صورة واحد أو عدة روابط. |
| Image loading mode | وضع تحميل المعاينات في قائمة ملفات الإدارة. Original يحمّل الصور الأصلية. Smart loading يفضل thumbnails للصور العامة و originals للصور المقيدة. |
| Thumbnail source | خدمة إنشاء thumbnails: wsrv.nl أو Cloudflare Image Resizing أو WordPress Photon. يجب تفعيل Cloudflare Image Resizing في Cloudflare قبل اختياره. |
| Live2D widget | يعرض شخصية Live2D في لوحة الإدارة. |
| Firework click effect | يعرض تأثير ألعاب نارية عند الضغط على الصفحة. |
| Star cursor trail | يعرض أثر نجوم عند تحريك الفأرة. |

## صيغ صور الخلفية

تدعم Login page background و upload page background و admin login background هذه الصيغ:

| القيمة | التأثير |
| --- | --- |
| `bing` | يستخدم تدوير خلفيات Bing. |
| `["https://example.com/1.jpg","https://example.com/2.jpg"]` | يدوّر عدة صور. |
| `["https://example.com/1.jpg"]` | يستخدم صورة خلفية واحدة. |
| `["https://your-domain.com/random?..."]` | يستخدم رابط random image API. يمكنك ضبط Random Image API الخاص بك في Other Settings ثم لصق الرابط الناتج هنا كخلفية واحدة. |

يدعم admin background روابط الصور. يمكن فصل عدة روابط بفواصل إنجليزية كما توضح الصفحة. القيمة الفارغة تعني استخدام الخلفية الافتراضية.

## Default Naming Method

| Method | Result |
| --- | --- |
| Default | Time-random prefix + original filename، مثل `1760000000000_cat.png`. |
| Prefix only | Time-random prefix والامتداد فقط، مثل `1760000000000.png`. |
| Original name only | يحافظ على original filename، مثل `cat.png`. عند التكرار يضيف ImgBed `(1)` و `(2)` وهكذا. |
| Short link | يستخدم short ID من 8 أحرف مع الامتداد، مثل `a1b2c3d4.png`. |
