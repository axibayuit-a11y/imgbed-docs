# د API Token له لارې د فایلونو اداره

د API Token له لارې د فایلونو اداره د سکرېپټونو، اتومات کارونو او د درېيمې ډلې د ادارې پینلونو لپاره ده. دا د `manage` اجازه کاروي، څو د ادارې پاڼه له پرانیستلو پرته د فایل معلومات سم کړي، فایلونه ولېږدوي، نومونه یې بدل کړي، د پوښۍ لپاره ځای‌نیونکی فایل جوړ کړي، د فایل ټګونه او د لېست حالت بدل کړي، د پورته کولو یو IP بند یا بېرته فعال کړي، او لنډمهاله د پورته کولو Token جوړ یا حذف کړي.

دا سکرېپټ یوازې د فایلونو په اداره او د کاروونکو په اداره کې سپک اداري کارونه ترسره کوي. پورته کول، لېست کول، حذف، د پورته کولو تنظیمات، د سایټ تنظیمات او د فدراسیون اړیکې لا هم خپل ځانګړي سکرېپټونه کاروي.

![د API Token سمول](../../image/Safety/apitoken/编辑管理权限api.png)

## چمتووالی

د ادارې پینل ته له ننوتلو وروسته، دا ځای پرانیزئ:

System Settings → Security Settings → API Token

کله چې API Token جوړوئ یا یې سموئ، ډاډ ترلاسه کړئ چې دغه Token د ادارې اجازه لري. د `manage` اجازه د فایل حالت، د کارونکي د پورته کولو حالت او لنډمهاله د پورته کولو Token بدلولی شي، نو یوازې باوري سکرېپټونو یا باوري کاروونکو ته یې ورکړئ.

په دې فایل‌اداره سکرېپټ کې د لیکلو کارونه په تلواله توګه یوازې مخکتنه کوي او بدلون نه خوندي کوي. کله چې مخکتنه سمه وي، `--apply` ورزیات کړئ چې لیکل رښتیا ترسره شي.

Token په چاپېریالي متغیر کې هم اېښودلای شئ:

```powershell
$env:IMGBED_API_TOKEN="your API Token"
```

## سکرېپټ کښته کول

| سکرېپټ | کارونه |
| --- | --- |
| <a href="/tools/imgbed-token-manage.mjs" download>د فایل ادارې سکرېپټ</a> | د فایل metadata، د څارنې لیبلونه، د فایل ټګونه، د لېست حالت، لېږد، نوم بدلول، د پوښۍ جوړول، د IP بندول/بېرته فعالول، او د لنډمهاله پورته کولو Token جوړول او حذفول |

د سکرېپټ د چلولو لپاره Node.js 18 یا تر هغه نوی نسخه په خپل ماشین کې اړینه ده.

## د وړتیاوو پولې

| وړتیا | سکرېپټ | اجازه |
| --- | --- | --- |
| فایل پورته کول | `imgbed-token-single-upload.mjs` / `imgbed-token-chunk-upload.mjs` | `upload` |
| فایلونه لېست کول، فایلونه چاڼول، د کارونکي شمېرې لوستل | `imgbed-token-list.mjs` | `list` |
| په څرګند ډول ټاکل شوي فایلونه حذفول | `imgbed-token-delete.mjs` | `delete` |
| د فایل معلومات، ټګونه، لېستونه، لېږد، نوم بدلول، پوښۍ جوړول، IP بندول، د لنډمهاله پورته کولو Token جوړول یا حذفول | `imgbed-token-manage.mjs` | `manage` |
| د پورته کولو چینلونه، امنیتي تنظیمات، د پاڼې تنظیمات، نور تنظیمات او د فدراسیون اړیکې سمول | د تنظیماتو د ادارې اړوند سکرېپټونه | `manage` |

`imgbed-token-manage.mjs` فایل نه پورته کوي، فایلونه نه لېست کوي او فایل نه حذف کوي. که `fileId` موندل غواړئ، لومړی د لېست سکرېپټ وکاروئ او فایلونه چاڼ کړئ؛ که فایل حذفول غواړئ، څرګند `fileId` د حذف سکرېپټ ته ورکړئ.

## عام پارامترونه

| پارامتر | اړین | تشریح |
| --- | --- | --- |
| `--base-url <url>` | هو | د ImgBed سایټ پته، لکه `https://image.ai6.me` |
| `--token <token>` | هو | API Token؛ د `IMGBED_API_TOKEN` چاپېریالي متغیر هم کارولای شئ |
| `--retries <n>` | نه | د لنډمهاله ناکامۍ د بیا هڅو شمېر؛ تلواله `3` |
| `--timeout-ms <n>` | نه | د یوې غوښتنې وخت‌حد؛ تلواله `180000` |
| `--output <pretty\|json>` | نه | د پایلې بڼه؛ تلواله `pretty` ده. د پروګرامي کارونې لپاره `json` غوره دی |
| `--save-response <path>` | نه | وروستۍ پایله په JSON فایل کې خوندي کوي |
| `--batch-size <n>` | نه | په ډله‌ییزو کارونو کې د هرې غوښتنې د توکو شمېر؛ تلواله `15`، ډېر حد `15` |
| `--apply` | نه | لیکل رښتیا ترسره کوي؛ بې له دې یوازې مخکتنه کېږي |
| `-h` / `--help` | نه | د سکرېپټ مرسته ښيي |

## لومړی fileId تایید کړئ

د فایل ادارې ډېری کارونه `fileId` ته اړتیا لري. لومړی یې د لېست سکرېپټ له لارې پلټلی شئ:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --dir "test4" `
  --count 10 `
  --output json
```

په ستنېدونکي ځواب کې `name` عموماً هماغه `fileId` وي چې د فایل ادارې سکرېپټ ته ورکول کېږي.

## د فایل metadata

د فایل metadata د ادارې په فایل‌اداره کې ښکاره کېدونکی نوم او د لوستلو سرچینه بدلوي.

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-metadata `
  --file-id "photos/2026/a.jpg" `
  --file-name "cover.jpg" `
  --read-source backup
```

له سمې مخکتنې وروسته یې خوندي کړئ:

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

### د فایل metadata پارامترونه

| پارامتر | تشریح |
| --- | --- |
| `--set-metadata` | د یوه فایل metadata بدلوي |
| `--file-id <id>` | د بدلولو لپاره د فایل ID |
| `--file-name <name>` | په اداره کې نوی ښکاره کېدونکی نوم |
| `--read-source <primary\|backup>` | د لوستلو سرچینه؛ `primary` اصلي سرچینه ده او `backup` د زېرمه سرچینه ده |

له `--file-name` او `--read-source` څخه لږ تر لږه یو باید ورکړل شي.

## د څارنې لیبلونه

د څارنې لیبلونه د فایل د عمر درجې سره تړاو لري. اوسنی لیبل لومړی لوستلای شئ او بیا یې بدلولی شئ.

د څارنې لیبل لوستل:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-label `
  --file-id "photos/2026/a.jpg"
```

د څارنې لیبل ټاکل:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-label `
  --file-id "photos/2026/a.jpg" `
  --label r12 `
  --apply
```

### د څارنې لیبل پارامترونه

| پارامتر | تشریح |
| --- | --- |
| `--get-label` | د یوه فایل د څارنې لیبل لولي |
| `--set-label` | د یوه فایل د څارنې لیبل بدلوي |
| `--file-id <id>` | د فایل ID |
| `--label <value>` | د لیبل ارزښت: `all-ages`، `r12`، `r16`، `r18`، `None` |

## د فایل ټګونه

د فایل ټګونه فایلونو ته د پلټنې وړ کاري ټګونه ورزیاتوي. سکرېپټ لوستل، ځایناستی کول، زیاتول او لرې کول ملاتړ کوي، او څو فایلونه په ډله‌ییز ډول هم پروسس کولی شي.

د فایل ټګونه لوستل:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-tags `
  --file-id "photos/2026/a.jpg"
```

ټګونه زیاتول:

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

ټګونه لرې کول:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --remove-tags `
  --file-id "photos/2026/a.jpg" `
  --tag "cover" `
  --apply
```

ټګونه ځایناستي کول:

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

په ډله‌ییز ډول ټګونه زیاتول:

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

### د فایل ټګ پارامترونه

| پارامتر | تشریح |
| --- | --- |
| `--get-tags` | د یوه فایل ټګونه لولي |
| `--set-tags` | د یوه فایل ټګونه ځایناستي کوي |
| `--add-tags` | یوه فایل ته ټګونه زیاتوي |
| `--remove-tags` | له یوه فایل څخه ټګونه لرې کوي |
| `--batch-tags` | ټګونه په ډله‌ییز ډول ټاکي، زیاتوي یا لرې کوي |
| `--file-id <id>` | د فایل ID؛ په ډله‌ییزو کارونو کې څو ځله ورکول کېدای شي |
| `--tag <tag>` | د ټګ ارزښت؛ څو ځله ورکول کېدای شي |
| `--tags-json <path>` | د ټګونو array له JSON فایل څخه لولي |
| `--tag-action <set\|add\|remove>` | د ډله‌ییز ټګ عمل |

د `--tags-json` فایل د منځپانګې بېلګه:

```json
["cover", "2026", "public"]
```

## د تور او سپین لېست حالت

د لېست حالت د عام لاسرسي په حالت کې د فایل د لاسرسي کنټرول ټاکي. دا د یوه فایل لپاره هم بدلېدای شي او په ډله‌ییز ډول هم.

یو فایل سپین لېست ته اچول:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-list-type `
  --file-id "photos/2026/a.jpg" `
  --list-type White `
  --apply
```

په ډله‌ییز ډول تور لېست ته زیاتول:

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

د لېست تلواله حالت بېرته راوستل:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-list-type `
  --file-id "photos/2026/a.jpg" `
  --list-type None `
  --apply
```

### د تور او سپین لېست پارامترونه

| پارامتر | تشریح |
| --- | --- |
| `--set-list-type` | د یوه فایل د لېست حالت بدلوي |
| `--batch-list-type` | د فایلونو د لېست حالت په ډله‌ییز ډول بدلوي؛ یوه غوښتنه تر `15` فایلونو پورې پروسس کوي |
| `--file-id <id>` | د فایل ID؛ په ډله‌ییزو کارونو کې څو ځله ورکول کېدای شي |
| `--list-type <None\|White\|Block>` | `None` تلواله حالت دی، `White` سپین لېست دی، او `Block` تور لېست دی |

## فایلونه لېږدول

د فایل لېږد یو یا څو فایلونه هدف پوښۍ ته وړي. backend په یوه غوښتنه کې تر `15` فایلونو پورې پروسس کوي، او سکرېپټ د `--batch-size` له مخې کار په څو غوښتنو ویشي او په ترتیب یې چلوي.

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

### د لېږد پارامترونه

| پارامتر | تشریح |
| --- | --- |
| `--move` | فایلونه لېږدوي |
| `--file-id <id>` | د لېږد لپاره د فایل ID؛ څو ځله ورکول کېدای شي |
| `--target-path <dir>` | هدف پوښۍ |
| `--batch-size <n>` | په هره غوښتنه کې د لېږدېدونکو فایلونو شمېر؛ تلواله `15`، ډېر حد `15` |

## نوم بدلول یا مسیر بدلول

نوم بدلول د پخواني فایل ID او نوي فایل ID په څرګند ډول کاروي. نوی فایل ID یوازې د فایل نوم بدلولی شي، یا ورسره پوښۍ هم بدلولی شي.

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --rename `
  --old-file-id "photos/2026/a.jpg" `
  --new-file-id "photos/2026/a-renamed.jpg" `
  --apply
```

د ډله‌ییز نوم بدلولو لپاره `--old-file-id` او `--new-file-id` څو ځله ورکړئ:

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

mapping په JSON فایل کې هم لیکلی شئ:

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

### د نوم بدلولو پارامترونه

| پارامتر | تشریح |
| --- | --- |
| `--rename` | نوم بدلوي یا د څرګند mapping له مخې مسیر بدلوي |
| `--old-file-id <id>` | اصلي فایل ID؛ څو ځله ورکول کېدای شي |
| `--new-file-id <id>` | نوی فایل ID؛ څو ځله ورکول کېدای شي، شمېر یې باید د `--old-file-id` سره برابر وي |
| `--items-json <path>` | JSON array، چې هر توکی یې `{ "oldFileId": "...", "newFileId": "..." }` دی |
| `--batch-size <n>` | په هره غوښتنه کې د نوم بدلولو د توکو شمېر؛ تلواله `15`، ډېر حد `15` |

## پوښۍ جوړول

د ImgBed پوښۍ د فایل له مسیرونو څخه راځي، نو رښتینې تشه پوښۍ نه لري. کله چې سکرېپټ پوښۍ جوړوي، په هدف پوښۍ کې `0.md` نومې ځای‌نیونکی فایل جوړوي، څو دا پوښۍ د فایلونو په اداره او د پوښیو په شمېرنو کې ښکاره شي.

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --create-folder `
  --parent-directory "photos" `
  --folder-name "2026" `
  --apply
```

### د پوښۍ جوړولو پارامترونه

| پارامتر | تشریح |
| --- | --- |
| `--create-folder` | د پوښۍ ځای‌نیونکی فایل جوړوي |
| `--parent-directory <dir>` | مور پوښۍ؛ د root پوښۍ لپاره تشه string ورکولای شئ |
| `--folder-name <name>` | د نوې پوښۍ نوم |

## د پورته کولو IP بندول او بېرته فعالول

د ادارې له اجازې سره یو IP د پورته کولو د بندیز لېست ته ورزیاتېدای شي، او له هغه لېست څخه بېرته لرې کېدای هم شي. دا کار د هغه IP راتلونکو پورته کولو ته اغېز کوي، خو هغه فایلونه نه حذفوي چې دغه IP مخکې پورته کړي وي.

یو د پورته کولو IP بندول:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --block-ip "67.159.48.149" `
  --apply
```

یو د پورته کولو IP بېرته فعالول:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --allow-ip "67.159.48.149" `
  --apply
```

د اوسني بند شوي پورته کولو IP لېست لیدل:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --blocked-ips
```

### د IP ادارې پارامترونه

| پارامتر | تشریح |
| --- | --- |
| `--block-ip <ip>` | د پورته کولو د بندیز لېست ته IP زیاتوي |
| `--allow-ip <ip>` | IP د پورته کولو د بندیز له لېست څخه لرې کوي |

## لنډمهاله د پورته کولو Token جوړول او حذفول

د ادارې اجازه کولای شي لنډمهاله، یوازې د پورته کولو Token جوړ کړي. دغه Token تل یوازې `upload` اجازه لري، `autoDelete` تل `true` وي، او ډېر د پای وخت یې `1` ورځ ده.

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

millisecond timestamp هم مستقیم ورکولای شئ:

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

کله چې لنډمهاله د پورته کولو Token حذفوئ، د جوړولو API څخه راستنېدونکی `id` ورکړئ. د ادارې Token یوازې هغه Token حذفولای شي چې لاندې شرطونه پوره کړي:

| شرط | غوښتنه |
| --- | --- |
| اجازه | `permissions` یوازې `upload` وي |
| اتومات حذف | `autoDelete=true` |
| د اعتبار موده | `expiresAt - createdAt <= 24` ساعته |

لنډمهاله د پورته کولو Token حذفول:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --delete-upload-token `
  --token-id "mqt4jqokc85be80d1f0f47078e848a77d6c1aa6e" `
  --apply
```

د ادارې Token عادي Token، اوږدمهاله Token، هغه Token چې `list` / `delete` / `manage` اجازه ولري، او د `1` ورځې څخه اوږد اعتبار لرونکی د پورته کولو Token نه شي حذفولای. دا Tokenونه باید لا هم د براوزر د ادارې پینل کې اداره شي.

### د لنډمهاله پورته کولو Token پارامترونه

| پارامتر | تشریح |
| --- | --- |
| `--create-upload-token` | لنډمهاله، یوازې د پورته کولو Token جوړوي |
| `--delete-upload-token` | هغه لنډمهاله، یوازې د پورته کولو Token حذفوي چې شرطونه پوره کوي |
| `--name <name>` | د Token نوم |
| `--owner <owner>` | د Token د مالکیت یادونه |
| `--default-upload-channel <key>` | د پورته کولو تلواله چینل؛ باید رښتینی چینل وي، لکه `telegram`، `s3` یا `github` |
| `--expires-in-minutes <n>` | له اوسني وخت څخه د پای دقیقې؛ ډېر حد `1440` |
| `--expires-at <ms>` | د پای مطلق وخت د millisecond timestamp په بڼه؛ ډېر حد له اوسني وخت څخه `24` ساعته دی |
| `--token-id <id>` | د حذفېدونکي لنډمهاله پورته کولو Token ID |

لنډمهاله د پورته کولو Token یوازې پورته کولای شي. په ازموینه کې، د `permissions=["upload"]` لرونکی لنډمهاله Token د لېست، فایل ادارې او حذف API ته له لاسرسي څخه رد شو.

له پای ته رسېدو وروسته، هغه Tokenونه چې `autoDelete=true` لري، هغه وخت پاکېږي چې backend یې وڅېړي او پای ته رسېدلي یې ومومي. د API Token لېست لوستل هم پای ته رسېدلي اتومات حذفېدونکي Tokenونه پاکوي.

## د API برابرونه

| عمل | میتود | API |
| --- | --- | --- |
| د فایل metadata بدلول | `PATCH` | `/api/manage/metadata/{fileId}` |
| د څارنې لیبل لوستل | `GET` | `/api/manage/label/{fileId}` |
| د څارنې لیبل بدلول | `POST` | `/api/manage/label/{fileId}` |
| د فایل ټګونه لوستل | `GET` | `/api/manage/tags/{fileId}` |
| د فایل ټګونه بدلول | `POST` | `/api/manage/tags/{fileId}` |
| د فایل ټګونه په ډله‌ییز ډول بدلول | `POST` | `/api/manage/tags/batch` |
| د لېست حالت بدلول | `POST` | `/api/manage/listType/{fileId}` |
| د لېست حالت په ډله‌ییز ډول بدلول | `POST` | `/api/manage/listType/batch` |
| لېږد یا نوم بدلول | `POST` | `/api/manage/relocate/batch` |
| پوښۍ جوړول | `POST` | `/api/manage/folder/create` |
| د پورته کولو IP بندول | `POST` | `/api/manage/cusConfig/blockip` |
| د پورته کولو IP بېرته فعالول | `POST` | `/api/manage/cusConfig/whiteip` |
| لنډمهاله د پورته کولو Token جوړول | `POST` | `/api/manage/apiTokens` |
| لنډمهاله د پورته کولو Token حذفول | `DELETE` | `/api/manage/apiTokens?id={tokenId}` |

سکرېپټ په اتومات ډول دا ورسره لېږي:

```text
Authorization: Bearer your API Token
```

## د پایلې بڼه

تلواله `pretty` پایله د انسان د لوستلو لپاره مناسبه ده. که بل پروګرام یې پروسس کوي، `--output json` وکاروئ:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-tags `
  --file-id "photos/2026/a.jpg" `
  --output json
```

بشپړه پایله هم خوندي کولای شئ:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-tags `
  --file-id "photos/2026/a.jpg" `
  --output json `
  --save-response ".\manage-result.json"
```

ډله‌ییز لېږد، ډله‌ییز نوم بدلول او ډله‌ییز د لېست کارونه د backend راستنول شوی NDJSON پرمختګ بهیر لولي، او د پېښو شمېر، د بشپړېدو حالت او د ناکامۍ جزئیات لنډیز کوي.

## عامې پوښتنې

### ولې له قوماندې وروسته بدلون ونه شو؟

د لیکلو کارونه په تلواله توګه د مخکتنې حالت کې دي. کله چې مخکتنه سمه وي، `--apply` ورزیات کړئ، بدلون به رښتیا خوندي شي.

### ایا دا سکرېپټ فایل پورته، لېست یا حذفولای شي؟

نه. د پورته کولو لپاره د پورته کولو سکرېپټونه وکاروئ، د لېست او چاڼ لپاره د لېست سکرېپټ، او د څرګند فایل حذفولو لپاره د حذف سکرېپټ. د فایل ادارې سکرېپټ یوازې د `manage` اجازې لاندې سپک اداري کارونه ترسره کوي.

### څنګه پوه شم کوم fileId ورکړم؟

لومړی د `imgbed-token-list.mjs --files` له لارې فایلونه وپلټئ. په ستنېدونکي ځواب کې `name` عموماً د فایل ID وي، یعنې هماغه ارزښت چې دلته `--file-id` ته ورکول کېږي.

### په یوه ډله‌ییز کار کې تر ټولو ډېر څو فایلونه وي؟

backend په یوه غوښتنه کې تر `15` فایلونو پورې پروسس کوي. د سکرېپټ تلواله `--batch-size 15` ده؛ که کوچنی ارزښت ورکړئ، سکرېپټ به کار د هماغه شمېر له مخې په څو پرله‌پسې غوښتنو وویشي.

### ایا رښتینې تشه پوښۍ جوړېدای شي؟

د ImgBed پوښۍ د فایل له مسیرونو څخه جوړېږي، نو رښتینې تشې پوښۍ نه لري. `--create-folder` د `0.md` په نوم ځای‌نیونکی فایل جوړوي، څو پوښۍ په فایل اداره او د پوښیو په شمېرنو کې ښکاره شي.

### لنډمهاله د پورته کولو Token تر ټولو ډېر څومره وخت اعتبار لري؟

تر ټولو ډېر `1` ورځ، یعنې `1440` دقیقې. که له دې زیات وخت ورکړل شي، سکرېپټ یې په محلي ډول ردوي؛ backend هم `API_TOKEN_MANAGE_CREATE_EXPIRES_AT_TOO_LONG` راستنوي.

### ایا لنډمهاله د پورته کولو Token له پای ته رسېدو وروسته په اتومات ډول حذفېږي؟

په اتومات ډول پاکېږي، خو سمدستي د مهال‌وېشل شوې دندې له لارې نه. پای ته رسېدلی Token هغه وخت پاکېږي چې بیا وڅېړل شي؛ د API Token لېست لوستل هم هغه پای ته رسېدلي Tokenونه پاکوي چې `autoDelete=true` لري.
