# إدارة إعدادات API Token

إدارة إعدادات API Token مخصصة لسكربتات الأتمتة، وأدوات التشغيل، ولوحات التحكم التابعة لجهات خارجية. يمكنها قراءة إعدادات قنوات الرفع وتحديثها، وإعدادات الأمان، وإعدادات الصفحات، والإعدادات الأخرى، والعلاقات الاتحادية الخفيفة من دون فتح صفحة الإدارة.

لا تكشف صلاحية الإدارة إلا العمليات الخفيفة المناسبة للسكربتات. أما العمليات الثقيلة التي تتطلب تأكيدًا في المتصفح، أو مهامًا دفعية من الواجهة الأمامية، أو تنظيف فهارس الاتحاد، فما زالت تحتاج إلى تنفيذها من لوحة الإدارة في المتصفح.

![تعديل API Token](../../image/Safety/apitoken/编辑api token.png)

## قبل البدء

افتح لوحة الإدارة، ثم انتقل إلى:

```text
System Settings -> Security Settings -> API Token
```

عند إنشاء API Token أو تعديله، تأكد من أنه يملك صلاحية الإدارة. يمكن لصلاحية الإدارة تغيير إعدادات الموقع، لذلك لا تمنحها إلا لسكربتات موثوقة أو مستخدمين موثوقين.

تستخدم سكربتات الإدارة الثلاثة وضع المعاينة افتراضيًا في عمليات الكتابة. بعد مراجعة المعاينة، أضف `--apply` لحفظ التغييرات فعليًا.

يمكنك أيضًا وضع الرمز في متغير بيئة:

```powershell
$env:IMGBED_API_TOKEN="your API Token"
```

## تنزيل سكربتات الإدارة

توفر حزمة الوثائق ثلاثة سكربتات مبنية على Node.js:

| السكربت | الغرض |
| --- | --- |
| <a href="/tools/imgbed-token-upload-settings.mjs" download>تنزيل سكربت إدارة إعدادات الرفع</a> | إدارة قنوات الرفع، والقنوات الفرعية، وموازنة الحمل. |
| <a href="/tools/imgbed-token-site-settings.mjs" download>تنزيل سكربت إدارة إعدادات الموقع</a> | إدارة إعدادات الأمان، وإعدادات الصفحات، والإعدادات الأخرى. |
| <a href="/tools/imgbed-token-federation.mjs" download>تنزيل سكربت إدارة علاقات الاتحاد</a> | إدارة إجراءات علاقات الاتحاد الخفيفة، والطلبات، والرسائل. |

يتطلب ذلك Node.js 18 أو إصدارًا أحدث.

### المعلمات المشتركة

| المعلمة | إلزامية | الوصف |
| --- | --- | --- |
| `--base-url <url>` | نعم | عنوان موقع ImgBed، مثل `https://image.ai6.me`. |
| `--token <token>` | نعم | API Token. يمكنك أيضًا استخدام متغير البيئة `IMGBED_API_TOKEN`. |
| `--retries <n>` | لا | عدد إعادة المحاولة عند الفشل المؤقت. القيمة الافتراضية `3`. |
| `--timeout-ms <n>` | لا | مهلة الطلب. القيمة الافتراضية `180000`. |
| `--output <pretty\|json>` | لا | صيغة الإخراج. القيمة الافتراضية `pretty`؛ استخدم `json` للبرامج. |
| `--save-response <path>` | لا | حفظ نتيجة JSON النهائية في ملف. |
| `--apply` | لا | تنفيذ عمليات الكتابة فعليًا. من دونه، تعرض عمليات الكتابة معاينة فقط. |
| `-h` / `--help` | لا | عرض مساعدة السكربت. |

## إعدادات الرفع

يعرض سكربت إعدادات الرفع قنوات الرفع الفرعية ويقرأها وينشئها ويعدلها ويحذفها. ويمكنه أيضًا تبديل موازنة الحمل لقناة رفع واحدة على المستوى الأعلى.

```powershell
node imgbed-token-upload-settings.mjs --base-url "https://your-domain" --token "your API Token" --list
```

### معلمات إعدادات الرفع

| المعلمة | الوصف |
| --- | --- |
| `--list` | عرض مجموعات إعدادات الرفع. |
| `--get` | قراءة قناة على المستوى الأعلى، أو قناة فرعية ضمنها. |
| `--upsert` | إنشاء قناة فرعية واحدة أو تعديلها. تكون العملية معاينة ما لم يتم تمرير `--apply`. |
| `--delete` | حذف قناة فرعية واحدة. تكون العملية معاينة ما لم يتم تمرير `--apply`. |
| `--load-balance <true\|false>` | تفعيل موازنة الحمل أو تعطيلها لقناة على المستوى الأعلى. |
| `--channel <key>` | قناة الرفع على المستوى الأعلى، مثل `s3` أو `github` أو `telegram`. |
| `--channel-name <name>` | اسم القناة الفرعية أو الحساب. |
| `--set key=value` | تعيين حقل واحد. يمكن تكرارها. تدعم المسارات المنقطة. |
| `--patch-json <path>` | دمج حقول من ملف JSON. |
| `--apply` | حفظ نتيجة الكتابة. |

### مفاتيح القنوات

| مفتاح القناة | القناة |
| --- | --- |
| `telegram` / `tg` | Telegram |
| `discord` / `dc` | Discord |
| `cfr2` / `r2` | Cloudflare R2 |
| `s3` | S3 |
| `webdav` / `wd` | قناة تخزين WebDAV |
| `github` / `gh` | GitHub Releases |
| `gitlab` / `gl` | GitLab Packages |
| `huggingface` / `hf` | Hugging Face |
| `onedrive` / `od` | OneDrive |
| `googledrive` / `google` / `gd` | Google Drive |
| `dropbox` / `db` | Dropbox |
| `yandex` / `yx` | Yandex Disk |
| `pcloud` / `pd` | pCloud |

### أمثلة إعدادات الرفع

عرض جميع إعدادات الرفع:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --list
```

قراءة إعدادات قناة S3:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get `
  --channel s3
```

قراءة قناة فرعية واحدة ضمن S3:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get `
  --channel s3 `
  --channel-name "backup-s3"
```

إنشاء قناة فرعية واحدة أو تعديلها. شغّل الأمر أولًا من دون `--apply` لمعاينة النتيجة:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --upsert `
  --channel webdav `
  --channel-name "backup-webdav" `
  --set enabled=false `
  --set remark="backup test"
```

ثم احفظ بعد التأكد:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --upsert `
  --channel webdav `
  --channel-name "backup-webdav" `
  --set enabled=false `
  --set remark="backup test" `
  --apply
```

حذف قناة فرعية واحدة:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --delete `
  --channel webdav `
  --channel-name "backup-webdav" `
  --apply
```

تفعيل موازنة الحمل لـ S3:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --load-balance true `
  --channel s3 `
  --apply
```

للحقول المعقدة، اكتب ملف JSON ومرّره باستخدام `--patch-json`:

```json
{
  "enabled": true,
  "remark": "primary account"
}
```

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --upsert `
  --channel s3 `
  --channel-name "primary-s3" `
  --patch-json ".\s3-channel.json" `
  --apply
```

## إعدادات الموقع

يدير سكربت إعدادات الموقع ثلاث مناطق إعدادات:

| المنطقة | المعلمة | الوصف |
| --- | --- | --- |
| إعدادات الأمان | `security` | مصادقة المستخدم، ومصادقة الإدارة، وأجهزة تسجيل الدخول، وAPI Token، ومراجعة الصور، وحدود معدل الرفع للمستخدمين، وWebDAV، وغير ذلك. |
| إعدادات الصفحات | `page` | الصفحة العامة، وصفحة جهة المستخدم، وصفحة الإدارة، وإعدادات العرض ذات الصلة. |
| إعدادات أخرى | `others` | واجهة API للصور العشوائية، والتصفح العام، وعقدة الاتحاد المحلية، والوسوم التلقائية، وتحديد الموقع الجغرافي حسب IP، وقناة النسخ الاحتياطي، وOCR، وغير ذلك. |

استخدم `--list-sections` أولًا لعرض المناطق والأقسام والحقول القابلة للتعديل:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --list-sections
```

### معلمات إعدادات الموقع

| المعلمة | الوصف |
| --- | --- |
| `--list-sections` | عرض المناطق والأقسام والحقول القابلة للتعديل. |
| `--get` | قراءة قسم إعدادات واحد. |
| `--area <security\|page\|others>` | تحديد منطقة إعدادات. |
| `--section <name>` | تحديد قسم. استخدم الأسماء التي يعرضها `--list-sections`. |
| `--set key=value` | تعيين حقل واحد. يمكن تكرارها. |
| `--apply` | حفظ نتيجة الكتابة. |

بالنسبة إلى منطقة `page`، تستخدم `--set` مع معرّفات عناصر إعدادات الصفحة، مثل `starsEffect=true`. وبالنسبة إلى منطقتي `security` و`others`، تستخدم `--set` اسم الحقل داخل ذلك القسم، مثل `email=admin@example.com`.

### أمثلة إعدادات الموقع

قراءة إعدادات إشعار تحديث النظام:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get `
  --area security `
  --section systemUpdate
```

تغيير بريد إشعار تحديث النظام. شغّل الأمر أولًا من دون `--apply` لمعاينة النتيجة:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --area security `
  --section systemUpdate `
  --set email="admin@example.com"
```

ثم احفظ بعد التأكد:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --area security `
  --section systemUpdate `
  --set email="admin@example.com" `
  --apply
```

تغيير تأثير النجوم في صفحة الإدارة:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --area page `
  --section adminSettings `
  --set starsEffect=true `
  --apply
```

تغيير لغة تحديد الموقع الجغرافي حسب IP:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --area others `
  --section ipGeolocation `
  --set language="en" `
  --apply
```

يمكن لإعدادات عقدة الاتحاد المحلية قراءة الحقول العادية وتحديثها، مثل حالة التفعيل، ومجلد المزامنة، ورمز الدعوة. لا يعالج API Token تأكيد النطاق. إذا أبلغت لوحة الإدارة أن نطاق العقدة المحلية يختلف عن نطاق الوصول الحالي، فأكمل التأكيد في لوحة الإدارة داخل المتصفح.

## علاقات الاتحاد

يدير سكربت الاتحاد حالة العقدة المحلية، والعقد الصادرة، والعقد الواردة، والرسائل، وطلبات الانضمام، وإجراءات إعادة التقديم عند عدم وجود سجل، والموافقات، والرفض، وإجراءات العلاقات الخفيفة التي لا تتطلب تنظيف الفهارس.

يعتمد تحديث الفهارس، وحذف فهرس الاتحاد، وتأكيد تغيير النطاق على سير العمل الكامل في المتصفح. ولا يعالج السكربت هذه العمليات الثقيلة.

### إجراءات الاتحاد الخفيفة والثقيلة

| الإجراء | دعم السكربت | الوصف |
| --- | --- | --- |
| عرض حالة العقدة المحلية وقوائم العلاقات | مدعوم | يقرأ سجلات العلاقات فقط. |
| قراءة الرسائل وإرسالها | مدعوم | يقرأ رسائل العلاقة أو يكتبها. |
| طلب الانضمام إلى عقدة أخرى | مدعوم | يستخدم رابط دعوة لإرسال طلب. |
| إعادة التقديم لعلاقة بلا سجل | مدعوم | متاح فقط لبطاقات outgoing التي تحمل `lastResult=none`؛ ويتطلب رمز دعوة من 6 أحرف. |
| إلغاء طلب outgoing معلّق | مدعوم | يلغي طلبًا معلّقًا فقط. |
| قبول طلب incoming أو رفضه | مدعوم | يعالج الطلبات الواردة من عقد تريد الانضمام إلى عقدتك. |
| إزالة علاقة incoming مقبولة | مدعوم | يحدّث سجل العلاقة الواردة ويخطر النظير. |
| حذف سجل incoming نهائي | مدعوم | يحذف سجل علاقة واردة نهائيًا فقط. |
| إلغاء اشتراك outgoing مقبول | من المتصفح فقط | يحتاج إلى حذف فهرس الاتحاد المحلي، وهذا ينفذه المتصفح على دفعات. |
| حذف سجل outgoing نهائي | من المتصفح فقط | قد يتطلب تنظيف فهرس الاتحاد أولًا. |
| تأكيد تغيير النطاق أو إلغاؤه | من المتصفح فقط | يتطلب تأكيد النطاق الحالي ومعالجة فهرس تغيير النطاق. |
| نشر الفهارس أو سحبها أو حذفها دفعيًا | من المتصفح فقط | هذه مهام دفعية في الواجهة الأمامية. |

### معلمات الاتحاد

| المعلمة | الوصف |
| --- | --- |
| `--status` | عرض حالة عقدة الاتحاد المحلية، والعقد الصادرة، والعقد الواردة. |
| `--list` | عرض علاقات الاتحاد. |
| `--chat` | قراءة الرسائل المخزنة مؤقتًا لعلاقة واحدة. |
| `--send-message` | إرسال رسالة إلى علاقة قائمة. |
| `--join` | طلب الانضمام إلى عقدة أخرى عبر رابط دعوة. |
| `--reapply` | إعادة التقديم لعلاقة بلا سجل. يتطلب رمز دعوة من 6 أحرف. |
| `--accept` | قبول طلب وارد. |
| `--deny` | رفض طلب وارد. |
| `--cancel` | إلغاء طلب outgoing معلّق، أو إزالة علاقة incoming مقبولة. |
| `--delete` | حذف سجل علاقة incoming نهائي. |
| `--direction <outgoing\|incoming\|all>` | اتجاه العلاقة. يعني `outgoing` العقد التي انضممت إليها؛ ويعني `incoming` العقد التي تنضم إلى عقدتك. |
| `--domain <url>` | نطاق عقدة العلاقة. |
| `--invite-link <url>` | رابط الدعوة من عقدة النظير. |
| `--invite-code <code>` | رمز دعوة من 6 أحرف يُستخدم لإعادة التقديم. |
| `--text <message>` | نص الرسالة. |
| `--apply` | حفظ نتيجة الكتابة. |

### أمثلة الاتحاد

عرض حالة العقدة المحلية وقائمتي العلاقات:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --status
```

عرض العقد الصادرة فقط:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --list `
  --direction outgoing
```

عرض العقد الواردة فقط:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --list `
  --direction incoming
```

طلب الانضمام إلى عقدة أخرى. شغّل الأمر أولًا من دون `--apply` لمعاينة النتيجة:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --join `
  --invite-link "https://peer-domain/federation/invite/abcdef"
```

ثم احفظ بعد التأكد:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --join `
  --invite-link "https://peer-domain/federation/invite/abcdef" `
  --apply
```

إعادة التقديم لعلاقة بلا سجل:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --reapply `
  --domain "https://peer-domain" `
  --invite-code "abc123" `
  --apply
```

قبول طلب وارد:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --accept `
  --domain "https://peer-domain" `
  --apply
```

رفض طلب وارد:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --deny `
  --domain "https://peer-domain" `
  --apply
```

إرسال رسالة إلى علاقة قائمة:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --send-message `
  --direction outgoing `
  --domain "https://peer-domain" `
  --text "Hello, this is a test message." `
  --apply
```

إلغاء طلب outgoing معلّق:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --cancel `
  --direction outgoing `
  --domain "https://peer-domain" `
  --apply
```

إزالة علاقة incoming مقبولة:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --cancel `
  --direction incoming `
  --domain "https://peer-domain" `
  --apply
```

حذف سجل incoming نهائي:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --delete `
  --direction incoming `
  --domain "https://peer-domain" `
  --apply
```

يجب التعامل مع إلغاء الاشتراك الصادر المقبول وحذف السجل الصادر من لوحة الإدارة في المتصفح، لأن هذه الإجراءات قد تحتاج إلى تنظيف فهرس الاتحاد المحلي أولًا.

### عدم تطابق النطاق

إذا لم يتطابق نطاق العقدة المحلية مع النطاق المعلّق في علاقة ما، يبلغ السكربت عن خطأ يحتوي على `currentDomain` و`pendingDomain`. عالج ذلك في لوحة الإدارة داخل المتصفح، لأن تغييرات النطاق تتضمن أيضًا تنظيف الفهارس الصادرة والتأكيد.

إذا أعاد طلب الانضمام `FEDERATION_NODE_DOMAIN_MISMATCH`، فهذا يعني أن النطاق المستخدم في رابط الدعوة لا يطابق النطاق المحلي المحفوظ لعقدة النظير. تتضمن الاستجابة `currentOrigin` و`detectedOrigin`. استخدم النطاق المؤكد الحالي لدى النظير، أو اطلب من النظير تأكيد النطاق في لوحة الإدارة داخل المتصفح أولًا.

## الأسئلة الشائعة

### لماذا لم يدخل تغييري حيّز التنفيذ؟

تعمل أوامر الكتابة في وضع المعاينة افتراضيًا. أضف `--apply` بعد مراجعة المعاينة لحفظ التغيير فعليًا.

### كيف أعرف الحقول التي يمكن تغييرها؟

بالنسبة إلى إعدادات الرفع، استخدم `--get` لفحص بنية القناة الفرعية الحالية. وبالنسبة إلى إعدادات الأمان وإعدادات الصفحات والإعدادات الأخرى، استخدم `--list-sections` لعرض المناطق والأقسام والحقول التي يستطيع السكربت تعديلها.

### أريد استخدام النتيجة في برنامج آخر

استخدم `--output json`، أو أضف `--save-response result.json`. يستطيع برنامجك قراءة ملف JSON المحفوظ مباشرة.
