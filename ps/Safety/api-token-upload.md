# د API Token له لارې د فایلونو پورته کول

د API Token له لارې پورته کول د سکرېپټونو، اتومات کارونو او د درېيمې ډلې پروګرامونو لپاره دي. د ویب انٹرفېس خلاصولو ته اړتیا نشته. که د سایټ URL، token، د ځایي فایل لاره او یو رښتینی د پورته کولو چینل ورکړئ، فایل ImgBed ته پورته کېږي او ځواب به د فایل URL ولري.

![د API Token سمول](../../image/Safety/apitoken/编辑上传权限api.png)

## مخکې له پیل څخه

د ادارې پینل پرانیزئ، بیا دې ځای ته لاړ شئ:

```text
System Settings -> Security Settings -> API Token
```

کله چې API Token جوړوئ یا سمول یې کوئ، ډاډ ترلاسه کړئ چې د پورته کولو اجازه لري او یو رښتینی د پورته کولو اصلي چینل کاروي. د API Token له لارې پورته کول د هوښیار وېش ننوتنه نه کاروي، او سکرېپټونه هم باید رښتینی چینل ولېږي.

## د پورته کولو سکرېپټونه کښته کول

د مستنداتو بسته دوه Node.js سکرېپټونه برابروي:

| سکرېپټ | موخه |
| --- | --- |
| <a href="/tools/imgbed-token-single-upload.mjs" download>د یوې غوښتنې د پورته کولو سکرېپټ</a> | `/upload` یو ځل غږوي. د وړو فایلونو او د اړیکې د ازموینو لپاره ګټور دی. |
| <a href="/tools/imgbed-token-chunk-upload.mjs" download>د ټوټه-ټوټه پورته کولو سکرېپټ</a> | د API Token ټوټه کول، مستقیم پورته کول یا د پلاتفورم د پورته کولو ناستې کاروي. د لویو فایلونو لپاره سپارښتنه کېږي. |

Node.js 18 یا تر هغه نوی نسخه اړینه ده.

## شته چینلونه لېست کول

دواړه سکرېپټونه کولی شي هغه د پورته کولو چینلونه ولېستي چې اوسني API Token ته شته:

```powershell
node imgbed-token-single-upload.mjs --base-url "https://your-domain" --token "your API Token" --list-channels
node imgbed-token-chunk-upload.mjs --base-url "https://your-domain" --token "your API Token" --list-channels
```

د چینلونو د لېست کولو پر مهال `--file` او `--channel` اړین نه دي. ځواب کې د پورته کولو اصلي چینل، د پورته کولو چینل کلیدونه، د فرعي چینل نومونه او د بار-وېش حالت راځي. پټ ارزښتونه، د تازه کولو ټوکنونه او نور حساس تنظیمي ارزښتونه نه راستنېږي.

## د پورته کولو حالت ټاکل

| حالت | د څه لپاره غوره دی | تشریح |
| --- | --- | --- |
| د یوې غوښتنې پورته کول | واړه فایلونه، ساده سکرېپټونه، د اړیکې ازموینې | ټول فایل په یوه غوښتنه کې `/upload` ته لېږي. |
| ټوټه-ټوټه پورته کول | لوی فایلونه یا هغه فایلونه چې د وخت له پای ته رسېدو سره مخ کېدای شي | سکرېپټ د هر چینل لپاره ځانګړی ټوټه-ټوټه، مستقیم یا د پورته کولو-ناستې جریان ټاکي. |

د لویو فایلونو لپاره لومړی د ټوټه-ټوټه پورته کولو سکرېپټ وکاروئ. د یوې غوښتنې پورته کول د Cloudflare د غوښتنې د اندازې، د Worker د حافظې او د هر پلاتفورم د خپلو محدودیتونو له مخې محدودېږي.

## د یوې غوښتنې پورته کول

د یوې غوښتنې سکرېپټ `/upload` ته یوه غوښتنه لېږي.

```powershell
node imgbed-token-single-upload.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --file "D:\test\image.png" `
  --channel s3 `
  --folder "photos/2026"
```

Token په چاپېریالي متغیر کې هم اېښودل کېدای شي:

```powershell
$env:IMGBED_API_TOKEN="your API Token"
node imgbed-token-single-upload.mjs --base-url "https://your-domain" --file "D:\test\image.png" --channel s3
```

### د یوې غوښتنې پارامترونه

| پارامتر | اړین | تشریح |
| --- | --- | --- |
| `--base-url <url>` | هو | د ImgBed سایټ URL، لکه `https://image.ai6.me`. |
| `--token <token>` | هو | API Token. د `IMGBED_API_TOKEN` چاپېریالي متغیر هم کارولای شئ. |
| `--file <path>` | هو | د ځایي فایل لاره. |
| `--channel <key>` | هو | د پورته کولو چینل. |
| `--folder <path>` | نه | د پورته کولو پوښۍ، لکه `photos/2026` یا `/user/`. |
| `--name-type <type>` | نه | د نوم اېښودلو حالت، چې د سرور اړخ `uploadNameType` سره سمون لري. اصلي ارزښت `default` دی. |
| `--channel-name <name>` | نه | فرعي چینل یا حساب ټاکي. که پرېښودل شي، د سرور اړخ د چینل تنظیمات پرېکړه کوي. |
| `--retries <n>` | نه | د لنډمهاله ناکامۍ د بیا هڅو شمېر. اصلي ارزښت `3` دی. |
| `--timeout-ms <n>` | نه | د غوښتنې د وخت حد. اصلي ارزښت `180000` دی. |
| `--output <pretty\|json>` | نه | د وتنې بڼه. اصلي ارزښت `pretty` دی. |
| `--save-response <path>` | نه | وروستی JSON ځواب په فایل کې ساتي. |
| `--list-channels` | نه | اوسني token ته شته چینلونه لېست کوي او وځي. |

### د یوې غوښتنې چینلونه

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

### د یوې غوښتنې د اندازې محدودیتونه

تر ممکنه حده د یوې غوښتنې فایلونه له 100 MB څخه کم وساتئ.

دا چینلونه د یوې غوښتنې `/upload` لپاره څرګند بندوونکي حدونه لري:

| چینل | د یوې غوښتنې حد |
| --- | ---: |
| Telegram | 20 MiB |
| Discord | 10 MiB |
| S3 | 64 MiB |
| WebDAV | 64 MiB |
| GitHub Releases | 64 MiB |
| GitLab Packages | 64 MiB |

که فایل له دې حدونو څخه یو واوړي، سکرېپټ اړوند تېروتنه په ځایي ډول راپوروي. نور چینلونه په سکرېپټ کې د 100 MB سخت ځایي چک نه لري. که د غوښتنې body د Cloudflare یا پلاتفورم له وړتیا واوړي، Cloudflare یا لرې پلاتفورم به تېروتنه ورکړي.

## ټوټه-ټوټه پورته کول

د ټوټه-ټوټه پورته کولو سکرېپټ لومړی له سرور اړخ څخه د هدف فایل حل غواړي، بیا د ټاکلي چینل د لوی فایل جریان تعقیبوي. تاسو اړتیا نه لرئ چې د ټوټه-ناستې، یوځای کولو یا بشپړولو غوښتنې پخپله ولیکئ.

```powershell
node imgbed-token-chunk-upload.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --file "D:\test\video.zip" `
  --channel github `
  --folder "photos/2026" `
  --concurrency 3
```

### د ټوټه-ټوټه پورته کولو پارامترونه

| پارامتر | اړین | تشریح |
| --- | --- | --- |
| `--base-url <url>` | هو | د ImgBed سایټ URL. |
| `--token <token>` | هو | API Token. د `IMGBED_API_TOKEN` چاپېریالي متغیر هم کارولای شئ. |
| `--file <path>` | هو | د ځایي فایل لاره. |
| `--channel <key>` | هو | د پورته کولو چینل. |
| `--folder <path>` | نه | د پورته کولو پوښۍ. |
| `--name-type <type>` | نه | د نوم اېښودلو حالت، چې د سرور اړخ `uploadNameType` سره سمون لري. اصلي ارزښت `default` دی. |
| `--channel-name <name>` | نه | فرعي چینل یا حساب ټاکي. که پرېښودل شي، د سرور اړخ د چینل تنظیمات پرېکړه کوي. |
| `--concurrency <n>` | نه | هممهاله پورته کول. اصلي ارزښت `1` دی، اعظمي `3`. |
| `--retries <n>` | نه | د لنډمهاله ناکامۍ د بیا هڅو شمېر. اصلي ارزښت `3` دی. |
| `--timeout-ms <n>` | نه | د هرې غوښتنې د وخت حد. اصلي ارزښت `180000` دی. |
| `--output <pretty\|json>` | نه | د وتنې بڼه. اصلي ارزښت `pretty` دی. |
| `--save-response <path>` | نه | وروستی JSON ځواب په فایل کې ساتي. |
| `--list-channels` | نه | اوسني token ته شته چینلونه لېست کوي او وځي. |

### د ټوټه-ټوټه پورته کولو چینلونه

| د چینل کلید | د پورته کولو جریان |
| --- | --- |
| `telegram` / `tg` | د `/upload` رښتینې ټوټه-ټوټه ناسته |
| `discord` / `dc` | د `/upload` رښتینې ټوټه-ټوټه ناسته |
| `cfr2` / `r2` | د `/upload` رښتینې ټوټه-ټوټه ناسته |
| `github` / `gh` | د `/upload` رښتینې ټوټه-ټوټه ناسته |
| `gitlab` / `gl` | د `/upload` رښتینې ټوټه-ټوټه ناسته |
| `webdav` / `wd` | د `/upload` رښتینې ټوټه-ټوټه ناسته |
| `s3` | S3 multipart upload |
| `onedrive` / `od` | د OneDrive د پورته کولو ناسته |
| `googledrive` / `google` / `gd` | د Google Drive بیا پیلېدونکی پورته کول |
| `dropbox` / `db` | د Dropbox د پورته کولو ناسته |
| `yandex` / `yx` | د Yandex مستقیم د پورته کولو URL |
| `pcloud` / `pd` | د pCloud د پورته کولو لینک |
| `huggingface` / `hf` | د Hugging Face LFS پورته کول |

د Yandex د کمپرس شوو فایلونو بېلګې په ازموینه کې ناپایدارې وې. غیر کمپرس شوي فایلونه په بریالۍ توګه پورته کېدل تایید شوي دي.

## د پورته کولو ځواب

له بریالي پورته کولو وروسته، سکرېپټ دا چاپوي:

```text
success
src: /file/photos/2026/example.png
url: https://your-domain/file/photos/2026/example.png
fileId: photos/2026/example.png
```

| فیلډ | تشریح |
| --- | --- |
| `src` | د سایټ دننه د فایل لاره. |
| `url` | بشپړ عامه URL، چې د خپلو سکرېپټونو یا د ډیټابېس ریکارډونو لپاره مناسب دی. |
| `fileId` | د فایل ID، چې د وروسته پوښتنو، مدیریت یا لاګونو لپاره ګټور دی. |
| `channelName` | د ټوټه-ټوټه سکرېپټ ښايي هغه واقعي فرعي چینل یا حساب وښيي چې کارول شوی. |

د `--output json` سره، سکرېپټ د پروګرامي کارونې لپاره بشپړ JSON ځواب چاپوي.

## د یوې غوښتنې مستقیم API غږول

که سکرېپټ نه کاروئ، د یوې غوښتنې د پورته کولو پای ټکی مستقیم غږولای شئ:

```text
POST https://your-domain/upload?uploadChannel=s3&uploadFolder=photos/2026&uploadNameType=default
Authorization: Bearer your API Token
Content-Type: multipart/form-data
```

د فورم فیلډ:

| فیلډ | اړین | تشریح |
| --- | --- | --- |
| `file` | هو | د پورته کولو فایل. |

Query پارامترونه:

| پارامتر | اړین | تشریح |
| --- | --- | --- |
| `uploadChannel` | هو | رښتینی د پورته کولو چینل. |
| `uploadFolder` | نه | د پورته کولو پوښۍ. |
| `uploadNameType` | نه | د نوم اېښودلو حالت. |
| `channelName` | نه | فرعي چینل یا حساب ټاکي. |

بریالي ځوابونه داسې ښکاري:

```json
{
  "success": true,
  "src": "/file/photos/2026/example.png",
  "url": "https://your-domain/file/photos/2026/example.png",
  "fileId": "photos/2026/example.png"
}
```

## FAQ

### د یوې غوښتنې لوی پورته کول ناکامېږي

د یوې غوښتنې `/upload` ټول فایل په یوه غوښتنه کې لېږي. لوی فایلونه ښايي د Cloudflare یا لرې پلاتفورم له خوا بند شي. د لویو فایلونو لپاره د ټوټه-ټوټه پورته کولو سکرېپټ وکاروئ.

### `--channel-name` ټاکل شوی، خو پورته کول لا هم ناکامېږي

وګورئ چې ټاکلی چینل په رښتیا د همدې نوم فرعي چینل لري او هغه فعال دی. که `--channel-name` پرېښودل شي، سرور اړخ د هماغه چینل د تنظیم له مخې شته حساب ټاکي.

### پایله په بل پروګرام کې کارول غواړم

`--output json` وکاروئ، یا `--save-response result.json` اضافه کړئ. د بشپړ فایل URL د ترلاسه کولو لپاره د `url` فیلډ ولولئ.

### Yandex ارشیفونه نه شي پورته کولای

Yandex د ارشیف بڼې نه ملاتړ کوي. دا ښايي د دوی د پلاتفورم د پالیسۍ له امله وي. د Yandex کارولو پر مهال، تر ممکنه حده غیر ارشیفي فایلونه پورته کړئ.



