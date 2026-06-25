# د API Token له لارې د تنظیماتو مدیریت

د API Token له لارې د تنظیماتو مدیریت د اتومات سکرېپټونو، عملیاتي وسیلو او د درېيمې ډلې د کنټرول پینلونو لپاره دی. دا د پورته کولو د چینل تنظیمات، د امنیت تنظیمات، د پاڼو تنظیمات، نور تنظیمات او سپکې فدراسیون اړیکې د ادارې د پاڼې له خلاصولو پرته لوستل او تازه کولای شي.

د مدیریت اجازه یوازې هغه سپکې کړنې پرانیزي چې د سکرېپټونو لپاره مناسبې دي. درنې کړنې چې په براوزر کې تایید، د کارن‌مخ ډله‌ییز کارونه یا د فدراسیون د شاخص پاکول غواړي، لا هم باید په براوزر کې د ادارې له پینله ترسره شي.

![د API Token سمول](../../image/Safety/apitoken/编辑管理权限api.png)

## مخکې له پیل څخه

د ادارې پینل پرانیزئ، بیا دې ځای ته لاړ شئ:

```text
System Settings -> Security Settings -> API Token
```

کله چې API Token جوړوئ یا سمول یې کوئ، ډاډ ترلاسه کړئ چې د مدیریت اجازه لري. د مدیریت اجازه د سایټ تنظیمات بدلولای شي؛ نو دا یوازې باوري سکرېپټونو یا باوري کاروونکو ته ورکړئ.

درې واړه د مدیریت سکرېپټونه د لیکلو کړنو لپاره په اصلي ډول د ازمایښتي اجرا حالت کاروي. د مخکتنې له کتلو وروسته `--apply` اضافه کړئ، څو بدلونونه رښتیا خوندي شي.

Token په چاپېریالي متغیر کې هم اېښودل کېدای شي:

```powershell
$env:IMGBED_API_TOKEN="your API Token"
```

## د مدیریت سکرېپټونه کښته کول

د مستنداتو بسته درې Node.js سکرېپټونه برابروي:

| سکرېپټ | موخه |
| --- | --- |
| <a href="/tools/imgbed-token-upload-settings.mjs" download>د پورته کولو تنظیماتو د مدیریت سکرېپټ کښته کړئ</a> | د پورته کولو چینلونه، فرعي چینلونه او د بار-وېش مدیریت کوي. |
| <a href="/tools/imgbed-token-site-settings.mjs" download>د سایټ د تنظیماتو د مدیریت سکرېپټ کښته کړئ</a> | د امنیت تنظیمات، د پاڼو تنظیمات او نور تنظیمات مدیریت کوي. |
| <a href="/tools/imgbed-token-federation.mjs" download>د فدراسیون اړیکو د مدیریت سکرېپټ کښته کړئ</a> | د فدراسیون د سپکو اړیکو کړنې، غوښتنې او پیغامونه مدیریت کوي. |

Node.js 18 یا تر هغه نوی نسخه اړینه ده.

### ګډ پارامترونه

| پارامتر | اړین | تشریح |
| --- | --- | --- |
| `--base-url <url>` | هو | د ImgBed سایټ URL، لکه `https://image.ai6.me`. |
| `--token <token>` | هو | API Token. د `IMGBED_API_TOKEN` چاپېریالي متغیر هم کارولای شئ. |
| `--retries <n>` | نه | د لنډمهاله ناکامۍ د بیا هڅو شمېر. اصلي ارزښت `3` دی. |
| `--timeout-ms <n>` | نه | د غوښتنې د وخت حد. اصلي ارزښت `180000` دی. |
| `--output <pretty\|json>` | نه | د وتنې بڼه. اصلي ارزښت `pretty` دی؛ د پروګرامونو لپاره `json` وکاروئ. |
| `--save-response <path>` | نه | وروستی JSON پایله په فایل کې ساتي. |
| `--apply` | نه | لیکنې رښتیا ترسره کوي. له دې پرته د لیکلو کړنې یوازې مخکتنه کوي. |
| `-h` / `--help` | نه | د سکرېپټ مرسته ښيي. |

## د پورته کولو تنظیمات

د پورته کولو د تنظیماتو سکرېپټ د پورته کولو فرعي چینلونه لېستوي، لولي، جوړوي، سموي او حذفوي. دا د یوه اصلي د پورته کولو چینل لپاره د بار-وېش بدلول هم کولای شي.

```powershell
node imgbed-token-upload-settings.mjs --base-url "https://your-domain" --token "your API Token" --list
```

### د پورته کولو د تنظیماتو پارامترونه

| پارامتر | تشریح |
| --- | --- |
| `--list` | د پورته کولو د تنظیماتو ډلې لېستوي. |
| `--get` | یو اصلي چینل یا د هغه لاندې یو فرعي چینل لولي. |
| `--upsert` | یو فرعي چینل جوړوي یا سموي. که `--apply` نه وي، یوازې ازمایښتي اجرا ده. |
| `--delete` | یو فرعي چینل حذفوي. که `--apply` نه وي، یوازې ازمایښتي اجرا ده. |
| `--load-balance <true\|false>` | د اصلي چینل لپاره د بار-وېش فعال یا غیرفعال کوي. |
| `--channel <key>` | اصلي د پورته کولو چینل، لکه `s3`، `github` یا `telegram`. |
| `--channel-name <name>` | د فرعي چینل یا حساب نوم. |
| `--set key=value` | یو فیلډ ټاکي. تکرارېدای شي. د نقطې لرونکې لارې ملاتړ کېږي. |
| `--patch-json <path>` | فیلډونه له JSON فایل څخه سره یوځای کوي. |
| `--apply` | د لیکلو پایله خوندي کوي. |

### د چینل کلیدونه

| د چینل کلید | چینل |
| --- | --- |
| `telegram` / `tg` | Telegram |
| `discord` / `dc` | Discord |
| `cfr2` / `r2` | Cloudflare R2 |
| `s3` | S3 |
| `webdav` / `wd` | د WebDAV زېرمه کولو چینل |
| `github` / `gh` | GitHub Releases |
| `gitlab` / `gl` | GitLab Packages |
| `huggingface` / `hf` | Hugging Face |
| `onedrive` / `od` | OneDrive |
| `googledrive` / `google` / `gd` | Google Drive |
| `dropbox` / `db` | Dropbox |
| `yandex` / `yx` | Yandex Disk |
| `pcloud` / `pd` | pCloud |

### د پورته کولو د تنظیماتو بېلګې

ټول د پورته کولو تنظیمات لېست کړئ:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --list
```

د S3 چینل تنظیمات ولولئ:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get `
  --channel s3
```

یو S3 فرعي چینل ولولئ:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get `
  --channel s3 `
  --channel-name "backup-s3"
```

یو فرعي چینل جوړ یا سم کړئ. لومړی یې بې له `--apply` وچلوئ، څو مخکتنه ووینئ:

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

له تایید وروسته یې خوندي کړئ:

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

یو فرعي چینل حذف کړئ:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --delete `
  --channel webdav `
  --channel-name "backup-webdav" `
  --apply
```

د S3 بار-وېش فعال کړئ:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --load-balance true `
  --channel s3 `
  --apply
```

د پېچلو فیلډونو لپاره JSON فایل ولیکئ او د `--patch-json` له لارې یې ورکړئ:

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

## د سایټ تنظیمات

د سایټ د تنظیماتو سکرېپټ درې تنظیمي برخې مدیریت کوي:

| برخه | پارامتر | تشریح |
| --- | --- | --- |
| د امنیت تنظیمات | `security` | د کارن تصدیق، د مدیر تصدیق، د ننوتلو وسایل، API Token، د انځور اعتدال، د کارن د نرخ محدودیتونه، WebDAV او نور. |
| د پاڼو تنظیمات | `page` | عمومي پاڼه، د کارن اړخ پاڼه، د مدیر پاڼه او اړوند د ښودلو تنظیمات. |
| نور تنظیمات | `others` | د تصادفي انځور API، عامه کتنه، ځایي فدراسیون نوډ، اتومات ټګ کول، IP جغرافیایي ځای، د بیک اپ چینل، OCR او نور. |

لومړی `--list-sections` وکاروئ، څو د سمولو وړ برخې، سکشنونه او فیلډونه ووینئ:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --list-sections
```

### د سایټ د تنظیماتو پارامترونه

| پارامتر | تشریح |
| --- | --- |
| `--list-sections` | د سمولو وړ برخې، سکشنونه او فیلډونه لېستوي. |
| `--get` | یو د تنظیماتو سکشن لولي. |
| `--area <security\|page\|others>` | د تنظیماتو برخه ټاکي. |
| `--section <name>` | سکشن ټاکي. هغه نومونه وکاروئ چې `--list-sections` یې ښيي. |
| `--set key=value` | یو فیلډ ټاکي. تکرارېدای شي. |
| `--apply` | د لیکلو پایله خوندي کوي. |

د `page` برخې لپاره، `--set` د پاڼې د تنظیم توکي ID کاروي، لکه `starsEffect=true`. د `security` او `others` لپاره، `--set` په هماغه سکشن کې د فیلډ نوم کاروي، لکه `email=admin@example.com`.

### د سایټ د تنظیماتو بېلګې

د سیسټم د تازه‌والي د خبرتیا تنظیمات ولولئ:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get `
  --area security `
  --section systemUpdate
```

د سیسټم د تازه‌والي د خبرتیا برېښنالیک بدل کړئ. لومړی بې له `--apply` وچلوئ، څو مخکتنه ووینئ:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --area security `
  --section systemUpdate `
  --set email="admin@example.com"
```

له تایید وروسته یې خوندي کړئ:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --area security `
  --section systemUpdate `
  --set email="admin@example.com" `
  --apply
```

د مدیر پاڼې د ستورو اثر بدل کړئ:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --area page `
  --section adminSettings `
  --set starsEffect=true `
  --apply
```

د IP جغرافیایي ځای ژبه بدل کړئ:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --area others `
  --section ipGeolocation `
  --set language="en" `
  --apply
```

د ځایي فدراسیون نوډ تنظیمات عادي فیلډونه لوستل او تازه کولای شي، لکه د فعالېدو حالت، د همغږۍ ډایرېکټري او د بلنې کوډ. د ډومېن تایید د API Token له لارې نه ترسره کېږي. که د ادارې پینل راپور ورکړي چې د ځایي نوډ ډومېن له اوسني لاسرسي ډومېن سره توپیر لري، تایید په براوزر کې د ادارې پینل کې بشپړ کړئ.

## د فدراسیون اړیکې

د فدراسیون سکرېپټ د ځایي نوډ حالت، وتلي نوډونه، راتلونکي نوډونه، پیغامونه، د یوځای کېدو غوښتنې، د بې‌ریکارډه اړیکې بیا غوښتنې، منل، ردول او سپکې اړیکې کړنې مدیریت کوي چې د شاخص پاکولو ته اړتیا نه لري.

د شاخص تازه کول، د فدراسیون شاخص حذفول او د ډومېن بدلون تایید د براوزر پر بشپړ جریان پورې تړلي دي. سکرېپټ دا درنې کړنې نه ترسره کوي.

### سپکې او درنې فدراسیون کړنې

| کړنه | د سکرېپټ ملاتړ | تشریح |
| --- | --- | --- |
| د ځایي نوډ حالت کتل او اړیکې لېستول | ملاتړ کېږي | یوازې د اړیکو ریکارډونه لولي. |
| پیغامونه لوستل او پیغامونه لېږل | ملاتړ کېږي | د اړیکې پیغامونه لولي یا لیکي. |
| بل نوډ ته د یوځای کېدو غوښتنه | ملاتړ کېږي | د غوښتنې د سپارلو لپاره د بلنې لینک کاروي. |
| د بې‌ریکارډه اړیکې لپاره بیا غوښتنه | ملاتړ کېږي | یوازې د وتلو کارتونو لپاره چې `lastResult=none` لري؛ 6-توريز بلنې کوډ غواړي. |
| د وتلې انتظار غوښتنې لغوه کول | ملاتړ کېږي | یوازې انتظار غوښتنه لغوه کوي. |
| راتلونکې غوښتنه منل یا ردول | ملاتړ کېږي | هغه غوښتنې اداره کوي چې نوډونه ستاسو نوډ ته د یوځای کېدو لپاره لېږي. |
| منل شوې راتلونکې اړیکه لرې کول | ملاتړ کېږي | د راتلونکې اړیکې ریکارډ تازه کوي او مقابل لوري ته خبر ورکوي. |
| د راتلونکي پای ریکارډ حذفول | ملاتړ کېږي | یوازې د راتلونکې اړیکې پای ریکارډ حذفوي. |
| منل شوې وتلې ګډون لغوه کول | یوازې براوزر | د ځایي فدراسیون شاخص حذف ته اړتیا لري، چې براوزر یې په ډلو کې چلوي. |
| د وتلي پای ریکارډ حذفول | یوازې براوزر | ښايي لومړی د فدراسیون شاخص پاکول وغواړي. |
| د ډومېن بدلون تایید یا لغوه کول | یوازې براوزر | د اوسني ډومېن تایید او د ډومېن بدلون د شاخص اداره غواړي. |
| شاخصونه خپرول، راکښل یا ډله‌ییز حذفول | یوازې براوزر | دا د کارن‌مخ ډله‌ییز کارونه دي. |

### د فدراسیون پارامترونه

| پارامتر | تشریح |
| --- | --- |
| `--status` | د ځایي فدراسیون نوډ حالت، وتلي نوډونه او راتلونکي نوډونه ښيي. |
| `--list` | د فدراسیون اړیکې لېستوي. |
| `--chat` | د یوې اړیکې زېرمه شوي پیغامونه لولي. |
| `--send-message` | یوې جوړې شوې اړیکې ته پیغام لېږي. |
| `--join` | د بلنې لینک له لارې بل نوډ ته د یوځای کېدو غوښتنه کوي. |
| `--reapply` | د بې‌ریکارډه اړیکې لپاره بیا غوښتنه کوي. 6-توريز بلنې کوډ غواړي. |
| `--accept` | راتلونکې غوښتنه مني. |
| `--deny` | راتلونکې غوښتنه ردوي. |
| `--cancel` | وتلې انتظار غوښتنه لغوه کوي یا منل شوې راتلونکې اړیکه لرې کوي. |
| `--delete` | د راتلونکې اړیکې پای ریکارډ حذفوي. |
| `--direction <outgoing\|incoming\|all>` | د اړیکې لوری. `outgoing` هغه نوډونه دي چې تاسو ورسره یوځای شوي یاست؛ `incoming` هغه نوډونه دي چې ستاسو نوډ ته یوځای کېږي. |
| `--domain <url>` | د اړیکې د نوډ ډومېن. |
| `--invite-link <url>` | د مقابل نوډ د بلنې لینک. |
| `--invite-code <code>` | 6-توريز بلنې کوډ چې د بیا غوښتنې لپاره کارېږي. |
| `--text <message>` | د پیغام متن. |
| `--apply` | د لیکلو پایله خوندي کوي. |

### د فدراسیون بېلګې

د ځایي نوډ حالت او دواړه د اړیکو لېستونه وګورئ:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --status
```

یوازې وتلي نوډونه لېست کړئ:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --list `
  --direction outgoing
```

یوازې راتلونکي نوډونه لېست کړئ:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --list `
  --direction incoming
```

بل نوډ ته د یوځای کېدو غوښتنه. لومړی بې له `--apply` وچلوئ، څو مخکتنه ووینئ:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --join `
  --invite-link "https://peer-domain/federation/invite/abcdef"
```

له تایید وروسته یې خوندي کړئ:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --join `
  --invite-link "https://peer-domain/federation/invite/abcdef" `
  --apply
```

د بې‌ریکارډه اړیکې لپاره بیا غوښتنه:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --reapply `
  --domain "https://peer-domain" `
  --invite-code "abc123" `
  --apply
```

راتلونکې غوښتنه ومنئ:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --accept `
  --domain "https://peer-domain" `
  --apply
```

راتلونکې غوښتنه رد کړئ:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --deny `
  --domain "https://peer-domain" `
  --apply
```

یوې جوړې شوې اړیکې ته پیغام ولېږئ:

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

وتلې انتظار غوښتنه لغوه کړئ:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --cancel `
  --direction outgoing `
  --domain "https://peer-domain" `
  --apply
```

منل شوې راتلونکې اړیکه لرې کړئ:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --cancel `
  --direction incoming `
  --domain "https://peer-domain" `
  --apply
```

د راتلونکي پای ریکارډ حذف کړئ:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --delete `
  --direction incoming `
  --domain "https://peer-domain" `
  --apply
```

د منل شوې وتلې ګډون لغوه کول او د وتلي ریکارډ حذفول باید په براوزر کې د ادارې پینل له لارې ترسره شي، ځکه دا کړنې ښايي لومړی د ځایي فدراسیون شاخص پاکولو ته اړتیا ولري.

### د ډومېن نه سمون

که په اړیکه کې د ځایي نوډ ډومېن او انتظار ډومېن سره برابر نه وي، سکرېپټ د `currentDomain` او `pendingDomain` سره تېروتنه راپوروي. دا په براوزر کې د ادارې پینل کې اداره کړئ، ځکه د ډومېن بدلون د وتلو شاخصونو پاکول او تایید هم رانغاړي.

که د یوځای کېدو غوښتنه `FEDERATION_NODE_DOMAIN_MISMATCH` راستنه کړي، د بلنې لینک کې کارول شوی ډومېن د مقابل نوډ له خوندي شوي ځایي ډومېن سره برابر نه دی. ځواب کې `currentOrigin` او `detectedOrigin` شامل دي. د مقابل لوري اوسنی تایید شوی ډومېن وکاروئ، یا له مقابل لوري وغواړئ چې لومړی ډومېن په خپل براوزري ادارې پینل کې تایید کړي.

## FAQ

### ولې زما بدلون اغېزمن نه شو؟

د لیکلو امرونه په اصلي ډول د مخکتنې حالت کې چلېږي. د مخکتنې له کتلو وروسته `--apply` اضافه کړئ، څو بدلون رښتیا خوندي شي.

### څنګه پوه شم چې کوم فیلډونه بدلېدای شي؟

د پورته کولو د تنظیماتو لپاره `--get` وکاروئ، څو د شته فرعي چینل جوړښت وګورئ. د امنیت تنظیماتو، د پاڼو تنظیماتو او نورو تنظیماتو لپاره `--list-sections` وکاروئ، څو هغه برخې، سکشنونه او فیلډونه ووینئ چې سکرېپټ یې سمولای شي.

### پایله په بل پروګرام کې کارول غواړم

`--output json` وکاروئ، یا `--save-response result.json` اضافه کړئ. ستاسو پروګرام خوندي شوی JSON فایل مستقیم لوستلای شي.



