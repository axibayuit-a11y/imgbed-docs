# د API Token له لارې لړلیک او چاڼ

د API Token د لړلیک سکریپټ د سکریپټونو، اتومات کارونو او بهرنیو پروګرامونو لپاره دی چې د ImgBed معلومات لوستل غواړي. دا یوازې `list` اجازه کاروي؛ فایل نه پورته کوي، فایل نه ړنګوي، امستنې نه بدلوي، او د کوم IP پورته کول نه بندوي او نه یې بېرته فعالوي.

![د API Token سمول](../../image/Safety/apitoken/编辑列出权限api.png)

اصلي کارونې:

| دنده | تشریح |
| --- | --- |
| د فایلونو د مدیریت لړلیک | د ادارې پاڼې د فایلونو لړلیک لولي او د فایلونو د مدیریت پرمختللي چاڼ پارامترونه هم مني |
| د کاروونکو د مدیریت لړلیک | د کاروونکو/IP د پورته کولو شمېرنې لولي او د کاروونکو د مدیریت چاڼ پارامترونه هم مني |
| د پورته کولو چینلونو لړلیک | هغه پورته کولو چینلونه، فرعي چینلونه، ځای او د بار وېش معلومات لولي چې پټ معلومات ترې لرې شوي وي |
| د پوښیو د شمېرنو جدول | د پوښیو شمېرنې او د پوښیو د پاڼې کولو معلومات لولي |

## چمتووالی

په ادارې پاڼه کې دا ځای پرانیزئ:

```text
System Settings -> Security Settings -> API Token
```

کله چې API Token جوړوئ یا یې سموئ، ډاډ ترلاسه کړئ چې دغه Token د لړلیک لوستلو اجازه لري. دا سکریپټ یوازې `list` اجازې ته اړتیا لري.

Token په چاپېریالي متغیر کې هم اېښودل کېدای شي:

```powershell
$env:IMGBED_API_TOKEN="your API Token"
```

## سکریپټ ښکته کول

| سکریپټ | کار |
| --- | --- |
| <a href="/tools/imgbed-token-list.mjs" download>د لړلیک او چاڼ سکریپټ ښکته کړئ</a> | د فایلونو مدیریت لړلیک، د کاروونکو مدیریت لړلیک، د پورته کولو چینلونو لړلیک، د پوښیو شمېرنو جدول |

د چلولو لپاره Node.js 18 یا تر هغه نوی بڼه پکار ده.

## عمومي پارامترونه

| پارامتر | اړین | تشریح |
| --- | --- | --- |
| `--base-url <url>` | هو | د ImgBed سایټ پته، لکه `https://image.ai6.me` |
| `--token <token>` | هو | API Token؛ `IMGBED_API_TOKEN` هم کارول کېدای شي |
| `--retries <n>` | نه | د لنډمهاله ناکامۍ د بیا هڅو شمېر؛ بنسټیز ارزښت `3` دی |
| `--timeout-ms <n>` | نه | د یوې غوښتنې وختي حد؛ بنسټیز ارزښت `180000` دی |
| `--output <pretty\|json>` | نه | د وتنې بڼه؛ بنسټیز ارزښت `pretty` دی. د پروګرامي کارونې لپاره `json` غوره دی |
| `--save-response <path>` | نه | وروستۍ پایله د JSON فایل په توګه ساتي |
| `-h` / `--help` | نه | د سکریپټ مرسته ښيي |

## د فایلونو د مدیریت لړلیک

د فایلونو مدیریت کې فایلونه وښایئ:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --count 10
```

JSON وتنه وکاروئ:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --count 10 `
  --output json
```

یوازې د اوسنیو چاڼ شرطونو شمېر ولولئ:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --file-summary `
  --dir "photos/2026" `
  --recursive
```

### د فایلونو د مدیریت پارامترونه

| پارامتر | تشریح |
| --- | --- |
| `--files` | فایلونه ښيي |
| `--file-summary` | یوازې د شمېرنې معلومات لولي |
| `--start <n>` | د پاڼې کولو پیل ځای |
| `--count <n>` | د بېرته راتلونکو پایلو شمېر |
| `--dir <path>` | پوښۍ ټاکي |
| `--recursive` | د فرعي پوښیو فایلونه هم رانغاړي |
| `--search <text>` | د کلیدي ټکي له مخې لټون کوي |
| `--channel <key>` | د پورته کولو د اصلي چینل له مخې چاڼ کوي، لکه `github`، `s3`، `yandex` |
| `--channel-scope <primary\|backup\|all>` | د چینل د چاڼ ساحه: اصلي چینل، زېرمه چینل، ټول |
| `--channel-name-groups <value>` | د فرعي چینل د ډلې چاڼ؛ د شاتني خدمت شته پارامتر ته هماغسې لېږل کېږي |
| `--list-type <csv>` | د لړلیک ډول؛ عام ارزښتونه `None,White,Block` دي |
| `--include-tags <csv>` | هغه tag چې باید پکې وي |
| `--exclude-tags <csv>` | هغه tag چې باید لرې شي |
| `--time-start <ms>` | د پورته کولو د وخت پیل، د میلي‌ثانیوي وخت ټاپه |
| `--time-end <ms>` | د پورته کولو د وخت پای، د میلي‌ثانیوي وخت ټاپه |
| `--file-exts <csv>` | یوازې ټاکلي غځونې رانغاړي، لکه `jpg,png,pdf` |
| `--exclude-file-exts <csv>` | ټاکلې غځونې لرې کوي |
| `--file-status-categories <csv>` | د فایل ډولونه: `image,audio,video,document,code,other` |
| `--upload-ip <ip>` | د پورته کولو IP د پیل له مخې چاڼ کوي |
| `--age-ratings <csv>` | د عمر درجه بندي: `none,all-ages,r12,r16,r18` |
| `--orientation <csv>` | د انځور لوري چاڼ؛ د شاتني خدمت شته ارزښتونو ته هماغسې لېږل کېږي |
| `--read-source <csv>` | د لوستلو سرچینې چاڼ؛ د شاتني خدمت شته ارزښتونو ته هماغسې لېږل کېږي |
| `--access-status <normal\|blocked>` | د عام لاسرسي حالت |
| `--min-width <n>` | تر ټولو لږ پلنوالی |
| `--max-width <n>` | تر ټولو زیات پلنوالی |
| `--min-height <n>` | تر ټولو لږ لوړوالی |
| `--max-height <n>` | تر ټولو زیات لوړوالی |
| `--min-file-size <mb>` | تر ټولو لږ فایل اندازه؛ واحد یې د شاتني خدمت د MB شته پارامتر کاروي |
| `--max-file-size <mb>` | تر ټولو زیاته فایل اندازه؛ واحد یې د شاتني خدمت د MB شته پارامتر کاروي |

### د فایلونو د مدیریت بېلګې

PDF ولټوئ:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --search "pdf" `
  --file-status-categories "document" `
  --count 20
```

د پورته کولو IP او چینل له مخې چاڼ:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --upload-ip "103.62" `
  --channel yandex `
  --channel-scope primary
```

بشپړه پایله وساتئ:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --count 100 `
  --output json `
  --save-response ".\files.json"
```

## د کاروونکو د مدیریت لړلیک

د کاروونکو/IP د پورته کولو شمېرنې وښایئ:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --count 20
```

یو IP یا ځای ولټوئ:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --search "43.198.183.56"
```

د یو IP له خوا پورته شوي فایلونه په جزئیاتو وګورئ:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --user-detail `
  --ip "43.198.183.56" `
  --count 20
```

هغه IP وښایئ چې پورته کول پرې بند دي:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --blocked-ips
```

### د کاروونکو د مدیریت پارامترونه

| پارامتر | تشریح |
| --- | --- |
| `--users` | د کاروونکو/IP د پورته کولو شمېرنې ښيي |
| `--user-detail` | د یو IP له خوا پورته شوي فایلونه په جزئیاتو ښيي |
| `--blocked-ips` | هغه IP ښيي چې پورته کول پرې بند دي |
| `--ip <ip>` | د `--user-detail` لپاره اړین دی |
| `--start <n>` | د پاڼې کولو پیل ځای |
| `--count <n>` | د بېرته راتلونکو پایلو شمېر |
| `--sort <value>` | ترتیب: `timeDesc`، `timeAsc`، `countDesc`، `countAsc`، `totalSizeDesc`، `totalSizeAsc` |
| `--search <text>` | IP یا ځای لټوي |
| `--upload-status <allowed\|blocked>` | ایا پورته کول اجازه لري که بند دي |
| `--start-time <ms>` | د شمېرنې د وخت پیل، د میلي‌ثانیوي وخت ټاپه |
| `--end-time <ms>` | د شمېرنې د وخت پای، د میلي‌ثانیوي وخت ټاپه |
| `--file-status-categories <csv>` | د فایل ډول چاڼ |
| `--age-ratings <csv>` | د عمر درجې چاڼ |
| `--min-file-size <mb>` | تر ټولو لږ فایل اندازه |
| `--max-file-size <mb>` | تر ټولو زیاته فایل اندازه |
| `--list-type <csv>` | د لړلیک ډول؛ عام ارزښتونه `None,White,Block` دي |
| `--access-status <normal\|blocked>` | د عام لاسرسي حالت |

### د کاروونکو د مدیریت بېلګې

هغه کاروونکي وښایئ چې پورته کول پرې بند دي:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --upload-status blocked
```

د ځای د کلیدي ټکي له مخې لټون:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --search "Hong Kong"
```

د پورته کولو د شمېر له مخې ترتیب:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --sort countDesc `
  --count 50
```

## د پورته کولو چینلونو لړلیک

د پټو معلوماتو له لرې کولو وروسته د پورته کولو چینلونو امستنې وښایئ:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --channels
```

پایله دا برخې لري:

| برخه | تشریح |
| --- | --- |
| `type` | د پورته کولو اصلي چینل، لکه `github`، `s3`، `yandex` |
| `name` | د فرعي چینل یا حساب نوم |
| `enabled` | ایا فعال دی |
| `load_balance_enabled` | ایا په دې اصلي چینل کې د بار وېش فعال دی |
| `quota_enabled` | ایا د ځای کتل فعال دي |
| `quota_limit_bytes` | د ځای حد |
| `quota_used_bytes` | کارول شوی ځای |
| `quota_checked_at` | د ځای د کتلو وخت |
| `tag_json` | غیر حساس tag، لکه عام repository یا شخصي repository |
| `created_at` / `updated_at` | د جوړېدو او تازه کېدو وخت |

دا API پټ کیلي، د تازه کولو ټوکن، لنډمهاله token، پټنوم یا نور حساس امستنې نه بېرته ورکوي.

## د پوښیو د شمېرنو جدول

د پوښیو شمېرنې وښایئ:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --directories `
  --limit 20
```

بشپړ پوښۍ لارې وښایئ او د پیل برخې له مخې لټون وکړئ:

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

### د پوښیو شمېرنې پارامترونه

| پارامتر | تشریح |
| --- | --- |
| `--directories` | د پوښیو د شمېرنو جدول ښيي |
| `--dir <path>` | هغه پوښۍ چې لړلیک ترې پیل شي |
| `--scope <direct\|full>` | `direct` یوازې نېغې لاندې پوښۍ ښيي، `full` بشپړې لارې ښيي |
| `--search-prefix <path>` | د پوښۍ د پیل لارې له مخې لټون کوي |
| `--include-parents` | په `full` حالت کې مور پوښۍ هم رانغاړي |
| `--limit <n>` | د بېرته راتلونکو پایلو شمېر؛ شاتنی خدمت تر `100` پورې ورکوي |
| `--cursor <path>` | د بلې پاڼې cursor |

## د وتنې بڼه

بنسټیزه `pretty` وتنه د انسان د لوستلو لپاره مناسبه ده:

```powershell
node imgbed-token-list.mjs --base-url "https://your-domain" --token "your API Token" --users --count 5
```

که پایله بل پروګرام کاروي، `--output json` وکاروئ:

```powershell
node imgbed-token-list.mjs --base-url "https://your-domain" --token "your API Token" --users --count 5 --output json
```

بشپړه پایله هم ساتل کېدای شي:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --count 5 `
  --output json `
  --save-response ".\users.json"
```

## عامې پوښتنې

### ایا دا سکریپټ معلومات بدلوي؟

نه. دا سکریپټ یوازې د لوستلو API رابولي. نه فایل پورته کوي، نه ړنګوي، نه یې لېږدوي، نه امستنې سموي، او نه د کوم IP پورته کول بندوي یا بېرته فعالوي.

### ولې `list` اجازه پکار ده؟

د فایلونو مدیریت لړلیک، د کاروونکو مدیریت لړلیک، له پټو معلوماتو پاک د چینلونو لړلیک او د پوښیو شمېرنې ټول د لوستلو وړتیاوې دي؛ نو د API Token لپاره یوازې `list` اجازه بس ده.

### شته پارامترونه څنګه وګورم؟

دا وچلوئ:

```powershell
node imgbed-token-list.mjs --help
```

سکریپټ ټول عملونه او پارامترونه ښيي.


