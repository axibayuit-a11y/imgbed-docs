# إدارة الملفات عبر API Token

إدارة الملفات عبر API Token مخصصة للسكربتات، ومهام الأتمتة، ولوحات الإدارة التابعة لجهات خارجية. تستخدم صلاحية `manage` لتعديل معلومات الملفات، ونقل الملفات، وإعادة تسميتها، وإنشاء ملفات حجز مكان للمجلدات، وضبط وسوم الملفات وحالة القوائم، كما يمكنها حظر عنوان IP للرفع أو السماح به من جديد، وإنشاء أو حذف Tokens رفع قصيرة الأجل، من دون فتح صفحة الإدارة.

يعالج هذا السكربت إجراءات الإدارة الخفيفة في إدارة الملفات وإدارة المستخدمين فقط. أما الرفع، والعرض، والحذف، وإعدادات الرفع، وإعدادات الموقع، وعلاقات الاتحاد، فما زالت تستخدم سكربتاتها المخصصة.

![تعديل API Token](../../image/Safety/apitoken/编辑管理权限api.png)

## قبل البدء

بعد الدخول إلى لوحة الإدارة، افتح:

إعدادات النظام → إعدادات الأمان → API Token

عند إنشاء API Token أو تعديله، تأكد من أن هذا Token يسمح بالإدارة. تستطيع صلاحية `manage` تغيير حالة الملفات، وحالة رفع المستخدمين، وإنشاء Tokens رفع قصيرة الأجل، لذلك يُنصح بمنحها للسكربتات أو المستخدمين الموثوقين فقط.

تعمل عمليات الكتابة في سكربت إدارة الملفات افتراضيًا في وضع المعاينة، ولا يتم حفظ أي تغيير فعليًا. بعد التأكد من صحة المعاينة، أضف `--apply` لتنفيذ الكتابة.

يمكنك أيضًا وضع Token في متغير بيئة:

```powershell
$env:IMGBED_API_TOKEN="your API Token"
```

## تنزيل السكربت

| السكربت | الغرض |
| --- | --- |
| <a href="/tools/imgbed-token-manage.mjs" download>سكربت إدارة الملفات</a> | بيانات الملفات الوصفية، وتصنيفات المراجعة، ووسوم الملفات، وحالة القوائم، والنقل، وإعادة التسمية، وإنشاء المجلدات، وحظر عناوين IP أو السماح بها، وإنشاء وحذف Tokens الرفع قصيرة الأجل |

يتطلب تشغيل السكربت Node.js 18 أو إصدارًا أحدث.

## حدود الوظائف

| القدرة | السكربت | الصلاحية |
| --- | --- | --- |
| رفع الملفات | `imgbed-token-single-upload.mjs` / `imgbed-token-chunk-upload.mjs` | `upload` |
| عرض الملفات، وتصفية الملفات، وقراءة إحصاءات المستخدمين | `imgbed-token-list.mjs` | `list` |
| حذف ملفات محددة بوضوح | `imgbed-token-delete.mjs` | `delete` |
| تعديل معلومات الملفات، والوسوم، والقوائم، والنقل، وإعادة التسمية، وإنشاء المجلدات، وحظر IP، وإنشاء أو حذف Tokens رفع قصيرة الأجل | `imgbed-token-manage.mjs` | `manage` |
| تعديل قنوات الرفع، وإعدادات الأمان، وإعدادات الصفحات، والإعدادات الأخرى، وعلاقات الاتحاد | سكربتات إدارة الإعدادات | `manage` |

لا يرفع `imgbed-token-manage.mjs` الملفات، ولا يعرضها، ولا يحذفها. عند الحاجة إلى العثور على `fileId`، استخدم سكربت العرض أولًا لتصفية الملفات؛ وعند الحاجة إلى حذف ملف، مرّر `fileId` المحدد إلى سكربت الحذف.

## المعلمات المشتركة

| المعلمة | إلزامية | الوصف |
| --- | --- | --- |
| `--base-url <url>` | نعم | عنوان موقع ImgBed، مثل `https://image.ai6.me` |
| `--token <token>` | نعم | API Token؛ يمكن أيضًا استخدام متغير البيئة `IMGBED_API_TOKEN` |
| `--retries <n>` | لا | عدد إعادة المحاولة عند الفشل المؤقت، والقيمة الافتراضية `3` |
| `--timeout-ms <n>` | لا | مهلة الطلب الواحد، والقيمة الافتراضية `180000` |
| `--output <pretty\|json>` | لا | صيغة الإخراج، والقيمة الافتراضية `pretty`؛ يوصى باستخدام `json` عند الاستدعاء من برنامج |
| `--save-response <path>` | لا | حفظ النتيجة النهائية في ملف JSON |
| `--batch-size <n>` | لا | عدد العناصر التي يعالجها كل طلب في الإجراءات الدفعية، والقيمة الافتراضية `15`، والحد الأقصى `15` |
| `--apply` | لا | تنفيذ الكتابة فعليًا؛ من دونه تعرض العملية معاينة فقط |
| `-h` / `--help` | لا | عرض مساعدة السكربت |

## تأكيد fileId أولًا

تحتاج معظم إجراءات سكربت إدارة الملفات إلى `fileId`. يمكنك الاستعلام عنه أولًا باستخدام سكربت العرض:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --dir "test4" `
  --count 10 `
  --output json
```

عادةً ما تكون قيمة `name` في النتيجة المعادة هي `fileId` الذي يمكن تمريره إلى سكربت إدارة الملفات.

## بيانات الملف الوصفية

تُستخدم بيانات الملف الوصفية لتغيير اسم الملف المعروض في إدارة الملفات داخل لوحة الإدارة، وكذلك مصدر القراءة.

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-metadata `
  --file-id "photos/2026/a.jpg" `
  --file-name "cover.jpg" `
  --read-source backup
```

بعد التأكد من صحة المعاينة، احفظ التغيير:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-metadata `
  --file-id "photos/2026/a.jpg" `
  --file-name "cover.jpg" `
  --read-source backup `
  --apply
```

### معلمات بيانات الملف الوصفية

| المعلمة | الوصف |
| --- | --- |
| `--set-metadata` | تعديل بيانات ملف واحد الوصفية |
| `--file-id <id>` | معرّف الملف المراد تعديله |
| `--file-name <name>` | الاسم الجديد المعروض في لوحة الإدارة |
| `--read-source <primary\|backup>` | مصدر القراءة؛ `primary` هو المصدر الأساسي، و`backup` هو مصدر النسخ الاحتياطي |

يجب تمرير واحد على الأقل من `--file-name` و`--read-source`.

## تصنيفات المراجعة

ترتبط تصنيفات المراجعة بالفئة العمرية للملف. يمكنك قراءة التصنيف الحالي أولًا ثم تعديله.

قراءة تصنيف المراجعة:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-label `
  --file-id "photos/2026/a.jpg"
```

تعيين تصنيف المراجعة:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-label `
  --file-id "photos/2026/a.jpg" `
  --label r12 `
  --apply
```

### معلمات تصنيفات المراجعة

| المعلمة | الوصف |
| --- | --- |
| `--get-label` | قراءة تصنيف المراجعة لملف واحد |
| `--set-label` | تعديل تصنيف المراجعة لملف واحد |
| `--file-id <id>` | معرّف الملف |
| `--label <value>` | قيمة التصنيف: `all-ages`، `r12`، `r16`، `r18`، `None` |

## وسوم الملفات

تُستخدم وسوم الملفات لإضافة وسوم عمل قابلة للبحث إلى الملفات. يدعم السكربت القراءة، والاستبدال، والإضافة، والإزالة، كما يدعم المعالجة الدفعية لعدة ملفات.

قراءة وسوم الملف:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-tags `
  --file-id "photos/2026/a.jpg"
```

إضافة وسوم:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --add-tags `
  --file-id "photos/2026/a.jpg" `
  --tag "cover" `
  --tag "2026" `
  --apply
```

إزالة وسوم:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --remove-tags `
  --file-id "photos/2026/a.jpg" `
  --tag "cover" `
  --apply
```

استبدال الوسوم:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-tags `
  --file-id "photos/2026/a.jpg" `
  --tag "archive" `
  --tag "public" `
  --apply
```

إضافة وسوم دفعيًا:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --batch-tags `
  --file-id "photos/2026/a.jpg" `
  --file-id "photos/2026/b.jpg" `
  --tag-action add `
  --tag "batch-test" `
  --apply
```

### معلمات وسوم الملفات

| المعلمة | الوصف |
| --- | --- |
| `--get-tags` | قراءة وسوم ملف واحد |
| `--set-tags` | استبدال وسوم ملف واحد |
| `--add-tags` | إضافة وسوم إلى ملف واحد |
| `--remove-tags` | إزالة وسوم من ملف واحد |
| `--batch-tags` | تعيين الوسوم أو إضافتها أو إزالتها دفعيًا |
| `--file-id <id>` | معرّف الملف؛ يمكن تمريره أكثر من مرة في الإجراءات الدفعية |
| `--tag <tag>` | قيمة الوسم؛ يمكن تمريرها أكثر من مرة |
| `--tags-json <path>` | قراءة مصفوفة الوسوم من ملف JSON |
| `--tag-action <set\|add\|remove>` | إجراء الوسوم الدفعي |

مثال على محتوى ملف `--tags-json`:

```json
["cover", "2026", "public"]
```

## حالة قائمة الحظر وقائمة السماح

تحدد حالة القائمة سلوك التحكم في وصول الملف ضمن وضع الوصول العام. يمكن تعديلها لملف واحد أو دفعيًا.

تعيين ملف واحد ضمن قائمة السماح:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-list-type `
  --file-id "photos/2026/a.jpg" `
  --list-type White `
  --apply
```

إضافة ملفات إلى قائمة الحظر دفعيًا:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --batch-list-type `
  --file-id "photos/2026/a.jpg" `
  --file-id "photos/2026/b.jpg" `
  --list-type Block `
  --apply
```

استعادة حالة القائمة الافتراضية:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-list-type `
  --file-id "photos/2026/a.jpg" `
  --list-type None `
  --apply
```

### معلمات قائمة الحظر وقائمة السماح

| المعلمة | الوصف |
| --- | --- |
| `--set-list-type` | تعديل حالة القائمة لملف واحد |
| `--batch-list-type` | تعديل حالة القائمة دفعيًا، بحد أقصى `15` ملفًا في الطلب الواحد |
| `--file-id <id>` | معرّف الملف؛ يمكن تمريره أكثر من مرة في الإجراءات الدفعية |
| `--list-type <None\|White\|Block>` | `None` هي الحالة الافتراضية، و`White` قائمة السماح، و`Block` قائمة الحظر |

## نقل الملفات

ينقل إجراء النقل ملفًا واحدًا أو عدة ملفات إلى المجلد الهدف. يعالج الخادم الخلفي بحد أقصى `15` ملفًا في الطلب الواحد، ويقسّم السكربت العمل تلقائيًا حسب `--batch-size` وينفذ الطلبات بالترتيب.

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --move `
  --file-id "photos/2026/a.jpg" `
  --file-id "photos/2026/b.jpg" `
  --target-path "archive/2026" `
  --apply
```

### معلمات النقل

| المعلمة | الوصف |
| --- | --- |
| `--move` | نقل الملفات |
| `--file-id <id>` | معرّف الملف المراد نقله؛ يمكن تمريره أكثر من مرة |
| `--target-path <dir>` | المجلد الهدف |
| `--batch-size <n>` | عدد الملفات المنقولة في كل طلب، والقيمة الافتراضية `15`، والحد الأقصى `15` |

## إعادة التسمية أو تغيير المسار

تستخدم إعادة التسمية معرّف الملف القديم ومعرّف الملف الجديد بشكل صريح. يمكن أن يغيّر معرّف الملف الجديد اسم الملف فقط، أو يغيّر المجلد أيضًا.

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --rename `
  --old-file-id "photos/2026/a.jpg" `
  --new-file-id "photos/2026/a-renamed.jpg" `
  --apply
```

عند إعادة التسمية دفعيًا، يمكن تكرار `--old-file-id` و`--new-file-id`:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --rename `
  --old-file-id "photos/2026/a.jpg" `
  --new-file-id "archive/2026/a.jpg" `
  --old-file-id "photos/2026/b.jpg" `
  --new-file-id "archive/2026/b.jpg" `
  --apply
```

يمكنك أيضًا كتابة خريطة التحويل في ملف JSON:

```json
[
  {
    "oldFileId": "photos/2026/a.jpg",
    "newFileId": "archive/2026/a.jpg"
  },
  {
    "oldFileId": "photos/2026/b.jpg",
    "newFileId": "archive/2026/b.jpg"
  }
]
```

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --rename `
  --items-json ".\rename-items.json" `
  --apply
```

### معلمات إعادة التسمية

| المعلمة | الوصف |
| --- | --- |
| `--rename` | إعادة التسمية أو تغيير المسار وفق خريطة صريحة |
| `--old-file-id <id>` | معرّف الملف الأصلي؛ يمكن تمريره أكثر من مرة |
| `--new-file-id <id>` | معرّف الملف الجديد؛ يمكن تمريره أكثر من مرة، ويجب أن يطابق عدده عدد `--old-file-id` |
| `--items-json <path>` | مصفوفة JSON، ويكون كل عنصر بالشكل `{ "oldFileId": "...", "newFileId": "..." }` |
| `--batch-size <n>` | عدد عناصر إعادة التسمية في كل طلب، والقيمة الافتراضية `15`، والحد الأقصى `15` |

## إنشاء المجلدات

تُستنتج مجلدات ImgBed من مسارات الملفات، ولا توجد مجلدات فارغة حقيقية. عند إنشاء مجلد، ينشئ السكربت ملف حجز مكان باسم `0.md` داخل المجلد الهدف، حتى يظهر هذا المجلد في إدارة الملفات وإحصاءات المجلدات.

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --create-folder `
  --parent-directory "photos" `
  --folder-name "2026" `
  --apply
```

### معلمات إنشاء المجلدات

| المعلمة | الوصف |
| --- | --- |
| `--create-folder` | إنشاء ملف حجز مكان للمجلد |
| `--parent-directory <dir>` | المجلد الأب؛ يمكن تمرير سلسلة فارغة للمجلد الجذر |
| `--folder-name <name>` | اسم المجلد الجديد |

## حظر عنوان IP للرفع والسماح به من جديد

يمكن عبر صلاحية الإدارة إضافة عنوان IP إلى قائمة منع الرفع، كما يمكن إزالته منها. يؤثر هذا الإجراء في عمليات الرفع اللاحقة من هذا العنوان، ولا يحذف الملفات التي رُفعت منه سابقًا.

حظر عنوان IP للرفع:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --block-ip "67.159.48.149" `
  --apply
```

السماح بعنوان IP للرفع من جديد:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --allow-ip "67.159.48.149" `
  --apply
```

عرض قائمة عناوين IP المحظورة من الرفع حاليًا:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --blocked-ips
```

### معلمات إدارة IP

| المعلمة | الوصف |
| --- | --- |
| `--block-ip <ip>` | إضافة عنوان IP إلى قائمة منع الرفع |
| `--allow-ip <ip>` | إزالة عنوان IP من قائمة منع الرفع |

## إنشاء وحذف Tokens رفع قصيرة الأجل

تستطيع صلاحية الإدارة إنشاء Tokens مخصصة للرفع وقصيرة الأجل. يكون هذا Token ثابتًا بصلاحية `upload` فقط، وتكون قيمة `autoDelete` ثابتة على `true`، وأقصى مدة انتهاء هي `1` يوم.

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --create-upload-token `
  --name "Temporary Upload Token" `
  --owner "upload-bot" `
  --default-upload-channel telegram `
  --expires-in-minutes 20 `
  --apply `
  --output json
```

يمكنك أيضًا تمرير طابع زمني بالميلي ثانية مباشرة:

```powershell
$expiresAt = [DateTimeOffset]::UtcNow.AddHours(12).ToUnixTimeMilliseconds()

node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --create-upload-token `
  --name "Upload Token valid for one day" `
  --owner "upload-bot" `
  --default-upload-channel telegram `
  --expires-at $expiresAt `
  --apply
```

عند حذف Token رفع قصير الأجل، يجب تمرير `id` الذي تعيده واجهة الإنشاء. لا يستطيع Token الإدارة حذف إلا Tokens التي تستوفي الشروط التالية:

| الشرط | المتطلب |
| --- | --- |
| الصلاحية | قيمة `permissions` هي `upload` فقط |
| الحذف التلقائي | `autoDelete=true` |
| مدة الصلاحية | `expiresAt - createdAt <= 24` ساعة |

حذف Token رفع قصير الأجل:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --delete-upload-token `
  --token-id "mqt4jqokc85be80d1f0f47078e848a77d6c1aa6e" `
  --apply
```

لا يستطيع Token الإدارة حذف Tokens عادية، أو Tokens طويلة الأجل، أو Tokens تحتوي على صلاحيات `list` / `delete` / `manage`، ولا يمكنه حذف Tokens رفع تتجاوز مدة صلاحيتها `1` يوم. يجب التعامل مع هذه Tokens من لوحة الإدارة في المتصفح.

### معلمات Token الرفع قصير الأجل

| المعلمة | الوصف |
| --- | --- |
| `--create-upload-token` | إنشاء Token مخصص للرفع وقصير الأجل |
| `--delete-upload-token` | حذف Token مخصص للرفع وقصير الأجل إذا استوفى الشروط |
| `--name <name>` | اسم Token |
| `--owner <owner>` | وصف مالك Token |
| `--default-upload-channel <key>` | قناة الرفع الافتراضية، ويجب أن تكون قناة حقيقية، مثل `telegram` أو `s3` أو `github` |
| `--expires-in-minutes <n>` | عدد دقائق الانتهاء نسبةً إلى الوقت الحالي، والحد الأقصى `1440` |
| `--expires-at <ms>` | وقت الانتهاء المطلق كطابع زمني بالميلي ثانية، والحد الأقصى هو `24` ساعة من الوقت الحالي |
| `--token-id <id>` | معرّف Token الرفع قصير الأجل المراد حذفه |

لا يسمح Token الرفع قصير الأجل إلا بالرفع. في الاختبار، يتم رفض وصول Token قصير الأجل بقيمة `permissions=["upload"]` إلى واجهات العرض، وإدارة الملفات، والحذف.

بعد انتهاء الصلاحية، تُنظَّف Tokens التي تحمل `autoDelete=true` عندما يتحقق الخادم الخلفي منها ويجد أنها منتهية. كما يؤدي قراءة قائمة API Token إلى تنظيف Tokens المنتهية التي تحمل `autoDelete=true`.

## مطابقة الواجهات

| الإجراء | الطريقة | الواجهة |
| --- | --- | --- |
| تعديل بيانات الملف الوصفية | `PATCH` | `/api/manage/metadata/{fileId}` |
| قراءة تصنيف المراجعة | `GET` | `/api/manage/label/{fileId}` |
| تعديل تصنيف المراجعة | `POST` | `/api/manage/label/{fileId}` |
| قراءة وسوم الملف | `GET` | `/api/manage/tags/{fileId}` |
| تعديل وسوم الملف | `POST` | `/api/manage/tags/{fileId}` |
| تعديل وسوم الملفات دفعيًا | `POST` | `/api/manage/tags/batch` |
| تعديل حالة القائمة | `POST` | `/api/manage/listType/{fileId}` |
| تعديل حالة القائمة دفعيًا | `POST` | `/api/manage/listType/batch` |
| النقل أو إعادة التسمية | `POST` | `/api/manage/relocate/batch` |
| إنشاء مجلد | `POST` | `/api/manage/folder/create` |
| حظر IP للرفع | `POST` | `/api/manage/cusConfig/blockip` |
| السماح لـ IP بالرفع من جديد | `POST` | `/api/manage/cusConfig/whiteip` |
| إنشاء Token رفع قصير الأجل | `POST` | `/api/manage/apiTokens` |
| حذف Token رفع قصير الأجل | `DELETE` | `/api/manage/apiTokens?id={tokenId}` |

يضيف السكربت تلقائيًا:

```text
Authorization: Bearer your API Token
```

## صيغة الإخراج

الإخراج الافتراضي `pretty` مناسب للقراءة البشرية. إذا كنت تريد تمرير النتيجة إلى برنامج آخر، فاستخدم `--output json`:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-tags `
  --file-id "photos/2026/a.jpg" `
  --output json
```

يمكنك أيضًا حفظ النتيجة الكاملة:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-tags `
  --file-id "photos/2026/a.jpg" `
  --output json `
  --save-response ".\manage-result.json"
```

تُحلل إجراءات النقل الدفعي، وإعادة التسمية الدفعية، والقوائم الدفعية تدفق التقدم NDJSON الذي يعيده الخادم الخلفي، ثم تلخص عدد الأحداث، وحالة الاكتمال، وتفاصيل الفشل.

## الأسئلة الشائعة

### لماذا لم يغيّر الأمر شيئًا بعد تنفيذه؟

تعمل إجراءات الكتابة افتراضيًا في وضع المعاينة. بعد التأكد من صحة المعاينة، أضف `--apply` لحفظ التغيير فعليًا.

### هل يستطيع هذا السكربت رفع الملفات أو عرضها أو حذفها؟

لا. استخدم سكربتات الرفع للرفع، وسكربت العرض للعرض والتصفية، وسكربت الحذف لحذف الملفات المحددة. يعالج سكربت إدارة الملفات فقط إجراءات الإدارة الخفيفة ضمن صلاحية `manage`.

### كيف أعرف أي fileId يجب تمريره؟

استخدم `imgbed-token-list.mjs --files` للاستعلام عن الملفات أولًا. عادةً ما تكون قيمة `name` في النتيجة هي معرّف الملف، وهي القيمة التي تمرر هنا عبر `--file-id`.

### ما الحد الأقصى لعدد الملفات في العملية الدفعية الواحدة؟

يعالج الخادم الخلفي بحد أقصى `15` ملفًا في الطلب الواحد. القيمة الافتراضية في السكربت هي `--batch-size 15`؛ وإذا مررت قيمة أصغر، سيقسّم السكربت العمل تلقائيًا إلى عدة طلبات متتابعة بهذا العدد.

### هل يمكن إنشاء مجلد فارغ حقيقي؟

تُستنتج مجلدات ImgBed من مسارات الملفات، ولا توجد مجلدات فارغة حقيقية. ينشئ `--create-folder` ملف حجز مكان باسم `0.md`، مما يسمح بظهور المجلد في إدارة الملفات وإحصاءات المجلدات.

### ما أطول مدة يمكن أن يستمر فيها Token رفع قصير الأجل؟

الحد الأقصى هو `1` يوم، أي `1440` دقيقة. إذا تجاوزت هذه المدة، يرفضها السكربت محليًا، وسيعيد الخادم الخلفي أيضًا `API_TOKEN_MANAGE_CREATE_EXPIRES_AT_TOO_LONG`.

### هل يُحذف Token الرفع قصير الأجل تلقائيًا بعد انتهاء صلاحيته؟

يُزال تلقائيًا، لكن ليس عبر مهمة مجدولة فورية. يُنظَّف Token المنتهي عندما يُتحقق منه مرة أخرى؛ كما تؤدي قراءة قائمة API Token إلى تنظيف Tokens المنتهية التي تحمل `autoDelete=true`.
