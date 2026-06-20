# Random Image API والمعرض العام

تُضبط الميزتان من:

```text
System Settings -> Other Settings
```

## Random Image API

يعيد Random Image API ملفًا عشوائيًا من مجلدات محددة. يفيد لخلفيات المواقع، أو تدوير الصور الرمزية، أو استدعاء صورة عشوائية من صفحات خارجية.

بعد تفعيله استخدم:

```text
https://your-domain.com/random
```

## إعدادات Random Image API

| الخيار | الغرض |
| --- | --- |
| Enable | تشغيل أو إيقاف endpoint `/random`. عند الإيقاف يُمنع الوصول. |
| Directories | يحدد المجلدات التي يمكن للواجهة العشوائية استخدامها. المجلدات غير المدرجة لا يمكن استخدامها. |
| Call demo | ينشئ روابط random API يمكنك نسخها مباشرة. |

يمكن اختيار عدة مجلدات. مثلًا، إذا سمحت فقط بـ `/landscape/` و `/portrait/` فلن يختار random API إلا من هذين المجلدين ومجلداتهما الفرعية.

## معاملات Random Image API

| المعامل | مثال | الغرض |
| --- | --- | --- |
| `dir` | `/landscape/` | يحدد المجلد العشوائي. |
| `content` | `image` | يحدد نوع الوسائط. استخدم `image` أو `video` أو `audio` أو تركيبات مفصولة بفواصل. |
| `orientation` | `auto` | يفلتر اتجاه الصورة. استخدم `portrait` أو `landscape` أو `auto`. |
| `type` | `url` | صيغة الرد. فارغ يعني redirect، و `url` يعيد رابطًا نصيًا، و `json` يعيد JSON. |
| `origin` | `1` | مع `type=url` يعيد رابطًا كاملًا. |
| `age` | `all-ages,r12` | يفلتر حسب age rating. |
| `tag` | `wallpaper,sky` | يعيد فقط الملفات التي تحتوي هذه tags. |
| `ex` | `private` | يستبعد الملفات التي تحتوي هذه tags. |

## صيغ الرد

دون `type`، يحوّل API مباشرة إلى رابط الملف العشوائي.

مع `type=url` يعيد رابطًا نصيًا.

مع `type=json` يعيد معلومات الملف، بما في ذلك file URL و file ID و file name و file type و tags و rating و metadata المرتبطة.

## قواعد الوصول

يلتزم Random Image API بقواعد public access:

| القاعدة | التأثير |
| --- | --- |
| Directory restriction | لا تُختار إلا الملفات داخل المجلدات المسموحة. |
| Blocklist | تُستبعد blocklisted files من مجموعة الاختيار العشوائي. |
| Allowlist mode | عند تفعيله لا تعاد إلا الملفات المسموح بها للوصول العام. |
| Age rating | تُفلتر محتويات R12 و R16 و R18 وما شابه حسب access mode الحالي. |

إذا لم يوجد ملف مطابق بعد التصفية، يعيد API نتيجة بعدم وجود تطابق.

## Cache

يخزّن Random Image API مجموعات المرشحين للمجلدات في الكاش لتحسين السرعة.

بعد تغيّر الملفات، يحدّث ImgBed إصدار كاش المجلد، ثم تعيد الطلبات اللاحقة بناء مجموعة المرشحين. تُخزن المجلدات الفارغة مؤقتًا لفترة قصيرة لتجنب الاستعلامات المتكررة.

## Public Gallery

يوفر public gallery صفحة تصفح عامة للقراءة فقط للمجلدات التي تسمح للزوار برؤيتها.

بعد تفعيلها يمكن للزوار فتح:

```text
https://your-domain.com/browse/directory-name
```

## إعدادات Public Gallery

| الخيار | الغرض |
| --- | --- |
| Enable | تشغيل أو إيقاف public gallery. عند الإيقاف لا يستطيع الزوار تصفحها. |
| Image loading mode | يحدد هل تستخدم المعاينات الصور الأصلية أو thumbnails. |
| Open directories | يحدد المجلدات التي يمكن للزوار الوصول إليها. |

## Image Loading Mode

| الوضع | الغرض |
| --- | --- |
| Original | صفحة الزائر تحمّل الملفات الأصلية مباشرة. |
| Thumbnail | صفحة الزائر تفضّل thumbnails لتحميل أسرع. |

## Open Directories

تحدد Open directories ما يستطيع الزوار رؤيته.

مثال:

```text
/1/,/2/,/landscape/,/portrait/
```

يمكن للزوار بعدها الوصول إلى:

```text
https://your-domain.com/browse/1
https://your-domain.com/browse/2
https://your-domain.com/browse/landscape
https://your-domain.com/browse/portrait
```

يمكن أيضًا فتح مجلدات فرعية مثل `/2026/lucky/`. يُمنع الزوار من المجلدات غير المفتوحة.

## ميزات Public Gallery

| الميزة | الوصف |
| --- | --- |
| Browse directories | عرض الملفات والمجلدات الفرعية داخل المجلدات المفتوحة. |
| Search | البحث حسب file name أو file ID أو tags. |
| Type filter | تصفية الصور أو الفيديو أو الصوت أو الملفات الأخرى. |
| Tag filter | تضمين أو استبعاد tags محددة. |
| Orientation filter | تصفية صور landscape أو portrait. |
| Time filter | التصفية حسب نطاق وقت الرفع. |
| Extension filter | التصفية حسب file extension. |
| Copy link | نسخ روابط الوصول للملفات. |
| Media preview | عرض أو تشغيل الصور والفيديو والصوت في صفحة الزائر. |

## قواعد وصول Public Gallery

تلتزم public gallery أيضًا بقواعد public access:

| القاعدة | التأثير |
| --- | --- |
| Open directories | لا تظهر إلا المجلدات المسموحة. |
| Access mode | يُفلتر المحتوى حسب age-rating access mode الحالي. |
| Allowlist mode | عند تفعيله لا تظهر إلا الملفات المسموح بها للوصول العام. |
| Blocklist | تُخفى blocklisted files. |
