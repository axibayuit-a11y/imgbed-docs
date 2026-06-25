# د API Token له لارې د فایلونو ړنګول

د API Token د ړنګولو سکریپټ د سکریپټونو، اتومات کارونو او بهرنیو پروګرامونو لپاره کارېږي. د ادارې پاڼه خلاصولو ته اړتیا نشته؛ د سایټ پته، Token او روښانه فایل ID ورکړئ، او د ImgBed دننه یو یا څو فایلونه ړنګ کړئ.

ړنګول د بدلون راوستلو عمل دی. کله چې امر وچلېږي، فایلونه په رښتیا ړنګېږي. ښه ده چې لومړی په `imgbed-token-list.mjs` سره د ړنګولو لپاره اړین `fileId` کره وګورئ، بیا هغه ID د ړنګولو سکریپټ ته ورکړئ.

![API Token سمول](../../image/Safety/apitoken/编辑删除权限api.png)

## چمتووالی

په ادارې پاڼه کې دا ځای پرانیزئ:

```text
System Settings -> Security Settings -> API Token
```

کله چې API Token جوړوئ یا یې سموئ، ډاډ ترلاسه کړئ چې دغه Token د ړنګولو اجازه لري. دا سکریپټ یوازې `delete` اجازې ته اړتیا لري.

Token په چاپېریالي متغیر کې هم اېښودل کېدای شي:

```powershell
$env:IMGBED_API_TOKEN="your API Token"
```

## سکریپټ ښکته کول

| سکریپټ | کار |
| --- | --- |
| <a href="/tools/imgbed-token-delete.mjs" download>د فایل ړنګولو سکریپټ</a> | یو یا څو په ښکاره ټاکل شوي فایل ID ړنګوي |

د چلولو لپاره Node.js 18 یا تر هغه نوی بڼه پکار ده.

## د ړنګولو API چلند

د ړنګولو سکریپټ د شاتني خدمت د ړنګولو API رابولي:

```text
POST /api/manage/delete/batch
```

غوښتنه باید API Token ولري:

```text
Authorization: Bearer <token>
```

د غوښتنې د بدن بېلګه:

```json
{
  "fileIds": ["photos/2026/a.txt"],
  "deleteStrictness": "strict"
}
```

که په `fileIds` کې یوازې یو فایل وي، نو دا د یوه فایل ړنګول دي. که څو فایلونه وي، نو ډله ییز ړنګول دي. شاتنی خدمت په یوه غوښتنه کې تر ۱۵ فایلونو پورې سمبالوي، او سکریپټ د `--batch-size` له مخې غوښتنې په اتومات ډول بېلوي.

API د NDJSON د پرمختګ بهیر بېرته ورکوي. عامې پېښې پکې `batch_start`، `file_step`، `file_done`، `batch_complete` او `batch_error` دي. سکریپټ دا پېښې لولي او د لوستلو وړ پایلې یا JSON پایلې په توګه یې راټولوي.

کله چې ړنګول بریالي شي، شاتنی خدمت د فایل لړلیک، د پوښیو شمېرنې، د ځای کارونې شمېرنې او زیرمه پاکول هم په اتومات ډول سمبالوي.

## د ړنګولو سکریپټ پارامترونه

| پارامتر | اړین | تشریح |
| --- | --- | --- |
| `--base-url <url>` | هو | د ImgBed سایټ پته، لکه `https://image.ai6.me` |
| `--token <token>` | هو | API Token؛ `IMGBED_API_TOKEN` هم کارول کېدای شي |
| `--file-id <id>` | هو | د ړنګولو فایل ID؛ څو ځله ورکول کېدای شي |
| `--strictness <strict\|soft>` | نه | د ړنګولو سختوالی؛ بنسټیز ارزښت `strict` دی |
| `--batch-size <n>` | نه | په یوه غوښتنه کې د ړنګېدونکو فایلونو شمېر؛ بنسټیز ارزښت `15` او اعظمي هم `15` دی |
| `--retries <n>` | نه | د لنډمهاله ناکامۍ د بیا هڅو شمېر؛ بنسټیز ارزښت `3` دی |
| `--timeout-ms <n>` | نه | د یوې غوښتنې وختي حد؛ بنسټیز ارزښت `180000` دی |
| `--output <pretty\|json>` | نه | د وتنې بڼه؛ بنسټیز ارزښت `pretty` دی |
| `--save-response <path>` | نه | وروستۍ پایله د JSON فایل په توګه ساتي |
| `-h` / `--help` | نه | د سکریپټ مرسته ښيي |

دا سکریپټ یوازې هغه فایلونه ړنګوي چې د `--file-id` له لارې په ښکاره ورکړل شوي وي. ناندره لټون نه کوي، ټوله پوښۍ په یوه وار نه خالي کوي، او د کوما جلا لړلیک یا ځايي فایل څخه د ړنګولو ID نه لولي.

## سخت ړنګول او نرم ړنګول

| حالت | تشریح |
| --- | --- |
| `strict` | بنسټیز حالت دی. که په لیرې زېرمه کې ړنګول ناکام شي، د ImgBed ثبت پاتې کېږي، څو بیا هڅه یا پلټنه اسانه وي. |
| `soft` | که په لیرې زېرمه کې ړنګول ناکام شي، د ImgBed ثبت بیا هم پاکېږي او پایله کې خبرداری راځي. |

که غواړئ کار یوازې هغه وخت بریالی وګڼل شي چې لیرې فایل هم ړنګ شوی وي، بنسټیز `strict` وکاروئ. که کوم لیرې پلاتفورم نور ړنګولو ته اجازه نه ورکوي، خو تاسو یوازې د ImgBed ثبت پاکول غواړئ، `soft` کارولای شئ.

## د کارونې بېلګې

یو فایل ړنګول:

```powershell
node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --file-id "photos/2026/a.txt"
```

له چاپېریالي متغیر څخه Token کارول:

```powershell
$env:IMGBED_API_TOKEN="your API Token"

node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --file-id "photos/2026/a.txt"
```

څو فایلونه ړنګول:

```powershell
node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --file-id "photos/2026/a.txt" `
  --file-id "photos/2026/b.txt" `
  --file-id "photos/2026/c.txt"
```

که لیرې ړنګول ناکام شي هم د ImgBed ثبت پاکول:

```powershell
node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --file-id "photos/2026/a.txt" `
  --strictness soft
```

JSON وتنه او پایله ساتل:

```powershell
node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --file-id "photos/2026/a.txt" `
  --output json `
  --save-response ".\delete-result.json"
```

په یوه غوښتنه کې ړنګول ۵ فایلونو ته محدودول:

```powershell
node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --file-id "photos/2026/a.txt" `
  --file-id "photos/2026/b.txt" `
  --batch-size 5
```

## له ړنګولو مخکې fileId وګورئ

د ړنګولو سکریپټ د ImgBed فایل ID ته اړتیا لري. د پوښۍ فایلونه لومړی د لړلیک سکریپټ په وسیله کتلای شئ:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --dir "photos/2026" `
  --count 10 `
  --output json
```

په پایله کې `name` عموما هماغه `fileId` وي چې د ړنګولو سکریپټ ته ورکول کېدای شي.

## عامې پوښتنې

### ولې ړنګول ناکام شول، خو فایل لا هم په لړلیک کې ښکاري؟

که بنسټیز `strict` وکارول شي، د لیرې زېرمه ړنګول چې ناکام شي د ImgBed ثبت پاتې کېږي. دا د دې لپاره دي چې یوازې ځايي لړلیک ړنګ نه شي او لیرې فایل پاتې نه شي. که ډاډه یاست چې یوازې د ImgBed ثبت پاکول بس دي، هماغه `fileId` د `soft` په کارولو بیا وازمایئ.

### ولې په پایله کې خبرداری ښکاري؟

خبرداری عموما د لیرې ړنګولو، زیرمې پاکولو یا د شمېرنو د پای کار پر مهال یوه غیر جدي ستونزه ښيي. سکریپټ خبرداری راټولوي، څو پرېکړه اسانه شي چې بیا هڅه پکار ده که نه.

### ایا ټوله پوښۍ په یوه وار ړنګولای شم؟

دا سکریپټ د پوښۍ خالي کولو وړتیا نه لري. لومړی د لړلیک سکریپټ په وسیله روښانه `fileId` وټاکئ، بیا هر فایل د ړنګولو سکریپټ ته ورکړئ.


