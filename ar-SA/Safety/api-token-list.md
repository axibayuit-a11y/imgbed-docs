# عرض البيانات وتصفيتها باستخدام API Token

تفيد سكربتات العرض عبر API Token عندما تحتاج السكربتات أو مهام الأتمتة أو برامج الجهات الخارجية إلى قراءة بيانات ImgBed. وهي تستخدم صلاحية `list` فقط. ولا ترفع ملفات، ولا تحذف ملفات، ولا تغيّر الإعدادات، ولا تحظر أو تسمح بأي عنوان IP.

![تعديل API Token](../../image/Safety/apitoken/编辑列出权限api.png)

الاستخدامات الرئيسية:

| الميزة | الوصف |
| --- | --- |
| عرض مدير الملفات | قراءة قائمة ملفات الإدارة واستخدام عوامل التصفية المتقدمة نفسها المتاحة في إدارة الملفات. |
| عرض إدارة المستخدمين | قراءة إحصاءات رفع المستخدمين أو عناوين IP واستخدام عوامل التصفية المتاحة في إدارة المستخدمين. |
| قائمة قنوات الرفع | قراءة قنوات الرفع المنقّحة، والقنوات الفرعية، وبيانات السعة، وحالة موازنة الحمل. |
| إحصاءات المجلدات | قراءة إحصاءات المجلدات ومعلومات المجلدات المرقّمة. |

## قبل البدء

افتح لوحة الإدارة، ثم انتقل إلى:

```text
System Settings -> Security Settings -> API Token
```

عند إنشاء API Token أو تعديله، تأكد من أن الرمز يسمح بالعرض. لا يحتاج هذا السكربت إلا إلى صلاحية `list`.

يمكنك أيضًا وضع الرمز في متغير بيئة:

```powershell
$env:IMGBED_API_TOKEN="your API Token"
```

## تنزيل السكربت

| السكربت | الغرض |
| --- | --- |
| <a href="/tools/imgbed-token-list.mjs" download>سكربت العرض والتصفية</a> | عرض مدير الملفات، وعرض إدارة المستخدمين، وقائمة قنوات الرفع، وإحصاءات المجلدات. |

يتطلب ذلك Node.js 18 أو إصدارًا أحدث.

## المعلمات المشتركة

| المعلمة | إلزامية | الوصف |
| --- | --- | --- |
| `--base-url <url>` | نعم | عنوان موقع ImgBed، مثل `https://image.ai6.me`. |
| `--token <token>` | نعم | API Token. يمكنك أيضًا استخدام متغير البيئة `IMGBED_API_TOKEN`. |
| `--retries <n>` | لا | عدد إعادة المحاولة عند الفشل المؤقت. القيمة الافتراضية `3`. |
| `--timeout-ms <n>` | لا | مهلة كل طلب. القيمة الافتراضية `180000`. |
| `--output <pretty\|json>` | لا | صيغة الإخراج. القيمة الافتراضية `pretty`؛ استخدم `json` للبرامج. |
| `--save-response <path>` | لا | حفظ النتيجة النهائية كملف JSON. |
| `-h` / `--help` | لا | عرض مساعدة السكربت. |

## عرض مدير الملفات

عرض الملفات في إدارة الملفات:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --count 10
```

إخراج JSON:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --count 10 `
  --output json
```

قراءة العدد فقط ضمن عوامل التصفية الحالية:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --file-summary `
  --dir "photos/2026" `
  --recursive
```

### معلمات مدير الملفات

| المعلمة | الوصف |
| --- | --- |
| `--files` | عرض الملفات. |
| `--file-summary` | قراءة إحصاءات العدد فقط. |
| `--start <n>` | إزاحة الترقيم. |
| `--count <n>` | عدد السجلات المطلوب إرجاعها. |
| `--dir <path>` | المجلد الهدف. |
| `--recursive` | تضمين الملفات في المجلدات الفرعية. |
| `--search <text>` | كلمة البحث. |
| `--channel <key>` | التصفية حسب قناة الرفع، مثل `github` أو `s3` أو `yandex`. |
| `--channel-scope <primary\|backup\|all>` | نطاق تصفية القناة: القناة الأساسية، أو قناة النسخ الاحتياطي، أو الكل. |
| `--channel-name-groups <value>` | عامل تصفية مجموعات القنوات الفرعية، ويمرر إلى الخادم الخلفي كما هو. |
| `--list-type <csv>` | نوع القائمة، والقيم الشائعة `None,White,Block`. |
| `--include-tags <csv>` | اشتراط وجود هذه الوسوم. |
| `--exclude-tags <csv>` | استبعاد هذه الوسوم. |
| `--time-start <ms>` | بداية وقت الرفع، بطابع زمني بالمللي ثانية. |
| `--time-end <ms>` | نهاية وقت الرفع، بطابع زمني بالمللي ثانية. |
| `--file-exts <csv>` | تضمين امتدادات محددة فقط، مثل `jpg,png,pdf`. |
| `--exclude-file-exts <csv>` | استبعاد امتدادات محددة. |
| `--file-status-categories <csv>` | فئات الملفات: `image,audio,video,document,code,other`. |
| `--upload-ip <ip>` | التصفية حسب بادئة IP الرفع. |
| `--age-ratings <csv>` | التصنيفات العمرية: `none,all-ages,r12,r16,r18`. |
| `--orientation <csv>` | عامل تصفية الاتجاه، ويمرر إلى الخادم الخلفي كما هو. |
| `--read-source <csv>` | عامل تصفية مصدر القراءة، ويمرر إلى الخادم الخلفي كما هو. |
| `--access-status <normal\|blocked>` | حالة الوصول العام. |
| `--min-width <n>` | الحد الأدنى للعرض. |
| `--max-width <n>` | الحد الأقصى للعرض. |
| `--min-height <n>` | الحد الأدنى للارتفاع. |
| `--max-height <n>` | الحد الأقصى للارتفاع. |
| `--min-file-size <mb>` | الحد الأدنى لحجم الملف، باستخدام معلمة MB الحالية في الخادم الخلفي. |
| `--max-file-size <mb>` | الحد الأقصى لحجم الملف، باستخدام معلمة MB الحالية في الخادم الخلفي. |

### أمثلة مدير الملفات

البحث عن ملفات PDF:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --search "pdf" `
  --file-status-categories "document" `
  --count 20
```

التصفية حسب IP الرفع والقناة:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --upload-ip "103.62" `
  --channel yandex `
  --channel-scope primary
```

حفظ النتيجة الكاملة:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --count 100 `
  --output json `
  --save-response ".\files.json"
```

## عرض إدارة المستخدمين

عرض إحصاءات رفع المستخدمين أو عناوين IP:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --count 20
```

البحث عن IP أو عنوان:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --search "43.198.183.56"
```

عرض الملفات التي رفعها IP واحد:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --user-detail `
  --ip "43.198.183.56" `
  --count 20
```

عرض عناوين IP المحظورة من الرفع:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --blocked-ips
```

### معلمات إدارة المستخدمين

| المعلمة | الوصف |
| --- | --- |
| `--users` | عرض إحصاءات رفع المستخدمين أو عناوين IP. |
| `--user-detail` | عرض الملفات التي رفعها IP محدد. |
| `--blocked-ips` | عرض عناوين IP المحظورة من الرفع. |
| `--ip <ip>` | مطلوبة مع `--user-detail`. |
| `--start <n>` | إزاحة الترقيم. |
| `--count <n>` | عدد السجلات المطلوب إرجاعها. |
| `--sort <value>` | ترتيب الفرز: `timeDesc` و`timeAsc` و`countDesc` و`countAsc` و`totalSizeDesc` و`totalSizeAsc`. |
| `--search <text>` | البحث عن IP أو عنوان. |
| `--upload-status <allowed\|blocked>` | ما إذا كان الرفع مسموحًا. |
| `--start-time <ms>` | بداية وقت الإحصاءات، بطابع زمني بالمللي ثانية. |
| `--end-time <ms>` | نهاية وقت الإحصاءات، بطابع زمني بالمللي ثانية. |
| `--file-status-categories <csv>` | عامل تصفية فئة الملف. |
| `--age-ratings <csv>` | عامل تصفية التصنيف العمري. |
| `--min-file-size <mb>` | الحد الأدنى لحجم الملف. |
| `--max-file-size <mb>` | الحد الأقصى لحجم الملف. |
| `--list-type <csv>` | نوع القائمة، والقيم الشائعة `None,White,Block`. |
| `--access-status <normal\|blocked>` | حالة الوصول العام. |

### أمثلة إدارة المستخدمين

عرض المستخدمين المحظورين من الرفع:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --upload-status blocked
```

البحث بكلمة من العنوان:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --search "Hong Kong"
```

الفرز حسب عدد مرات الرفع:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --sort countDesc `
  --count 50
```

## قائمة قنوات الرفع

عرض إعدادات قنوات الرفع بعد تنقيحها:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --channels
```

تتضمن البيانات المعادة:

| الحقل | الوصف |
| --- | --- |
| `type` | نوع قناة الرفع، مثل `github` أو `s3` أو `yandex`. |
| `name` | اسم القناة الفرعية أو الحساب. |
| `enabled` | ما إذا كانت مفعّلة. |
| `load_balance_enabled` | ما إذا كانت موازنة الحمل مفعّلة لهذا النوع من القنوات. |
| `quota_enabled` | ما إذا كانت فحوصات السعة مفعّلة. |
| `quota_limit_bytes` | حد السعة. |
| `quota_used_bytes` | السعة المستخدمة. |
| `quota_checked_at` | وقت فحص السعة. |
| `tag_json` | وسوم غير حساسة، مثل المستودع العام أو المستودع الخاص. |
| `created_at` / `updated_at` | وقت الإنشاء ووقت التحديث. |

لا تعيد هذه الواجهة الأسرار، أو رموز التحديث، أو رموز الوصول، أو كلمات المرور، أو أي إعدادات حساسة أخرى.

## إحصاءات المجلدات

عرض إحصاءات المجلدات:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --directories `
  --limit 20
```

عرض مسارات المجلدات الكاملة والبحث حسب البادئة:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --directories `
  --scope full `
  --search-prefix "test" `
  --include-parents `
  --limit 10
```

### معلمات إحصاءات المجلدات

| المعلمة | الوصف |
| --- | --- |
| `--directories` | عرض إحصاءات المجلدات. |
| `--dir <path>` | المجلد الذي يبدأ منه العرض. |
| `--scope <direct\|full>` | يعرض `direct` المجلدات الفرعية المباشرة فقط؛ ويعرض `full` المسارات الكاملة. |
| `--search-prefix <path>` | البحث حسب بادئة المجلد. |
| `--include-parents` | في وضع `full`، تضمين المجلدات الأصلية أيضًا. |
| `--limit <n>` | عدد السجلات المطلوب إرجاعها. الحد الأقصى في الخادم الخلفي هو `100`. |
| `--cursor <path>` | مؤشر الصفحة التالية. |

## صيغة الإخراج

صيغة الإخراج الافتراضية `pretty` مناسبة للقراءة البشرية:

```powershell
node imgbed-token-list.mjs --base-url "https://your-domain" --token "your API Token" --users --count 5
```

للبرامج الأخرى، استخدم `--output json`:

```powershell
node imgbed-token-list.mjs --base-url "https://your-domain" --token "your API Token" --users --count 5 --output json
```

يمكنك أيضًا حفظ النتيجة الكاملة:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --count 5 `
  --output json `
  --save-response ".\users.json"
```

## الأسئلة الشائعة

### هل يعدّل هذا السكربت البيانات؟

لا. يستدعي هذا السكربت واجهات قراءة فقط. ولا يرفع، ولا يحذف، ولا ينقل، ولا يعدّل الإعدادات، ولا يحظر أو يسمح بأي عنوان IP.

### لماذا يلزم توفر صلاحية `list`؟

عرض مدير الملفات، وعرض إدارة المستخدمين، وقوائم القنوات المنقّحة، وإحصاءات المجلدات كلها قدرات قراءة، لذلك لا تحتاج إلا إلى صلاحية `list` في API Token.

### كيف أتحقق من كل المعلمات المتاحة؟

شغّل:

```powershell
node imgbed-token-list.mjs --help
```

سيعرض السكربت كل الإجراءات والمعلمات.
