# API Token ဖြင့် ဖိုင် စီမံခန့်ခွဲခြင်း

API Token ဖြင့် ဖိုင်စီမံခန့်ခွဲခြင်းသည် စခရစ်များ၊ အလိုအလျောက်လုပ်ငန်းများနှင့် ပြင်ပစီမံခန့်ခွဲရေး panel များအတွက် သင့်တော်သည်။ ၎င်းသည် `manage` ခွင့်ပြုချက်ကို အသုံးပြုပြီး စီမံခန့်ခွဲရေးစာမျက်နှာကို မဖွင့်ဘဲ ဖိုင်အချက်အလက် ပြင်ဆင်ခြင်း၊ ဖိုင်ရွှေ့ခြင်း၊ ဖိုင်အမည်ပြောင်းခြင်း၊ ဖိုလ်ဒါအတွက် placeholder ဖိုင်ဖန်တီးခြင်း၊ ဖိုင် tag နှင့် list အခြေအနေ ပြင်ဆင်ခြင်း၊ upload IP တစ်ခုကို ပိတ်ခြင်း သို့မဟုတ် ပြန်ဖွင့်ခြင်း၊ ထို့အပြင် အချိန်တို upload Token ဖန်တီးခြင်း သို့မဟုတ် ဖျက်ခြင်းတို့ကို လုပ်နိုင်စေသည်။

ဤစခရစ်သည် ဖိုင်စီမံခန့်ခွဲရေးနှင့် အသုံးပြုသူစီမံခန့်ခွဲရေးအတွင်းရှိ ပေါ့ပါးသော စီမံခန့်ခွဲရေးလုပ်ဆောင်ချက်များကိုသာ ကိုင်တွယ်သည်။ အပ်လုဒ်တင်ခြင်း၊ စာရင်းပြခြင်း၊ ဖျက်ခြင်း၊ upload setting များ၊ site setting များနှင့် federation ဆက်ဆံရေးများအတွက် သက်ဆိုင်ရာ သီးခြားစခရစ်များကို ဆက်လက်အသုံးပြုရမည်။

![API Token ပြင်ဆင်ခြင်း](../../image/Safety/apitoken/编辑管理权限api.png)

## ကြိုတင်ပြင်ဆင်ရန်

စီမံခန့်ခွဲရေး panel ထဲဝင်ပြီးနောက် အောက်ပါနေရာကို ဖွင့်ပါ။

System Settings → Security Settings → API Token

API Token ဖန်တီးခြင်း သို့မဟုတ် ပြင်ဆင်ခြင်း ပြုလုပ်သောအခါ ဤ Token တွင် စီမံခန့်ခွဲခွင့် ရှိကြောင်း အတည်ပြုပါ။ `manage` ခွင့်ပြုချက်သည် ဖိုင်အခြေအနေ၊ အသုံးပြုသူ upload အခြေအနေ နှင့် အချိန်တို upload Token များကို ပြောင်းလဲနိုင်သဖြင့် ယုံကြည်စိတ်ချရသော စခရစ်များ သို့မဟုတ် အသုံးပြုသူများကိုသာ ပေးသင့်သည်။

ဖိုင်စီမံခန့်ခွဲရေးစခရစ်ရှိ ရေးသားမှုလုပ်ဆောင်ချက်များသည် မူရင်းအားဖြင့် preview mode ဖြစ်ပြီး အမှန်တကယ် မသိမ်းဆည်းပါ။ preview ရလဒ် မှန်ကန်ကြောင်း အတည်ပြုပြီးမှ `--apply` ထည့်၍ ရေးသားမှုကို လုပ်ဆောင်ပါ။

Token ကို ပတ်ဝန်းကျင်ပြောင်းလဲကိန်းထဲတွင်လည်း ထားနိုင်သည်။

```powershell
$env:IMGBED_API_TOKEN="your API Token"
```

## စခရစ် ဒေါင်းလုဒ်လုပ်ရန်

| စခရစ် | အသုံးပြုရန်နေရာ |
| --- | --- |
| <a href="/tools/imgbed-token-manage.mjs" download>ဖိုင်စီမံခန့်ခွဲရေးစခရစ်</a> | ဖိုင် metadata၊ moderation labels၊ ဖိုင် tag များ၊ list အခြေအနေ၊ ရွှေ့ခြင်း၊ အမည်ပြောင်းခြင်း၊ ဖိုလ်ဒါဖန်တီးခြင်း၊ IP ပိတ်/ပြန်ဖွင့်ခြင်း၊ အချိန်တို upload Token ဖန်တီးခြင်းနှင့် ဖျက်ခြင်း |

စခရစ်ကို run ရန် စက်တွင်းတွင် Node.js 18 သို့မဟုတ် ၎င်းထက်အသစ်သော ဗားရှင်း လိုအပ်သည်။

## လုပ်ဆောင်နိုင်သော အကန့်အသတ်များ

| လုပ်ဆောင်နိုင်မှု | စခရစ် | ခွင့်ပြုချက် |
| --- | --- | --- |
| ဖိုင်အပ်လုဒ်တင်ခြင်း | `imgbed-token-single-upload.mjs` / `imgbed-token-chunk-upload.mjs` | `upload` |
| ဖိုင်စာရင်းပြခြင်း၊ ဖိုင်စစ်ထုတ်ခြင်း၊ အသုံးပြုသူစာရင်းအင်း ဖတ်ခြင်း | `imgbed-token-list.mjs` | `list` |
| သတ်မှတ်ထားသော ဖိုင်များကို ဖျက်ခြင်း | `imgbed-token-delete.mjs` | `delete` |
| ဖိုင်အချက်အလက်၊ tag များ၊ list များ၊ ရွှေ့ခြင်း၊ အမည်ပြောင်းခြင်း၊ ဖိုလ်ဒါဖန်တီးခြင်း၊ IP ပိတ်ခြင်း၊ အချိန်တို upload Token ဖန်တီးခြင်း သို့မဟုတ် ဖျက်ခြင်း | `imgbed-token-manage.mjs` | `manage` |
| upload channel များ၊ လုံခြုံရေး setting များ၊ စာမျက်နှာ setting များ၊ အခြား setting များနှင့် federation ဆက်ဆံရေးများ ပြင်ဆင်ခြင်း | configuration management ဆိုင်ရာ စခရစ်များ | `manage` |

`imgbed-token-manage.mjs` သည် ဖိုင်မအပ်လုဒ်တင်ပါ၊ ဖိုင်စာရင်းမပြပါ၊ ဖိုင်မဖျက်ပါ။ `fileId` ရှာရန် လိုအပ်ပါက ပထမဦးစွာ list စခရစ်ဖြင့် ဖိုင်များကို စစ်ထုတ်ပါ။ ဖိုင်ဖျက်ရန် လိုအပ်ပါက တိကျသော `fileId` ကို delete စခရစ်သို့ ပေးပါ။

## အထွေထွေ parameter များ

| parameter | လိုအပ်မှု | ရှင်းလင်းချက် |
| --- | --- | --- |
| `--base-url <url>` | လိုအပ် | ImgBed site လိပ်စာ။ ဥပမာ `https://image.ai6.me` |
| `--token <token>` | လိုအပ် | API Token။ `IMGBED_API_TOKEN` ပတ်ဝန်းကျင်ပြောင်းလဲကိန်းကိုလည်း သုံးနိုင်သည် |
| `--retries <n>` | မလိုအပ် | ယာယီမအောင်မြင်ပါက ပြန်ကြိုးစားမည့် အကြိမ်ရေ။ မူရင်း `3` |
| `--timeout-ms <n>` | မလိုအပ် | တောင်းဆိုမှုတစ်ကြိမ်၏ အချိန်ကန့်သတ်ချက်။ မူရင်း `180000` |
| `--output <pretty\|json>` | မလိုအပ် | output ပုံစံ။ မူရင်း `pretty` ဖြစ်သည်။ program မှ ဆက်လက်အသုံးပြုရန် `json` ကို အကြံပြုသည် |
| `--save-response <path>` | မလိုအပ် | နောက်ဆုံးရလဒ်ကို JSON ဖိုင်အဖြစ် သိမ်းဆည်းသည် |
| `--batch-size <n>` | မလိုအပ် | batch လုပ်ဆောင်ချက်များတွင် တောင်းဆိုမှုတစ်ကြိမ်စီ လုပ်ဆောင်မည့် အရေအတွက်။ မူရင်း `15`၊ အများဆုံး `15` |
| `--apply` | မလိုအပ် | ရေးသားမှုကို အမှန်တကယ်လုပ်ဆောင်သည်။ မထည့်ပါက preview သာဖြစ်သည် |
| `-h` / `--help` | မလိုအပ် | စခရစ်အကူအညီကို ပြသည် |

## fileId ကို ပထမဆုံး အတည်ပြုရန်

ဖိုင်စီမံခန့်ခွဲရေးစခရစ်၏ လုပ်ဆောင်ချက်အများစုသည် `fileId` လိုအပ်သည်။ ပထမဦးစွာ list စခရစ်ဖြင့် မေးမြန်းနိုင်သည်။

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --dir "test4" `
  --count 10 `
  --output json
```

ပြန်လာသောရလဒ်ရှိ `name` သည် ပုံမှန်အားဖြင့် ဖိုင်စီမံခန့်ခွဲရေးစခရစ်သို့ ပေးနိုင်သော `fileId` ဖြစ်သည်။

## ဖိုင် metadata

ဖိုင် metadata ကို စီမံခန့်ခွဲရေး panel ၏ ဖိုင်စီမံခန့်ခွဲရေးတွင် ပြသမည့် ဖိုင်အမည်နှင့် read source ပြောင်းရန် အသုံးပြုသည်။

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-metadata `
  --file-id "photos/2026/a.jpg" `
  --file-name "cover.jpg" `
  --read-source backup
```

preview ရလဒ်မှန်ကန်ကြောင်း အတည်ပြုပြီးနောက် သိမ်းဆည်းပါ။

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

### ဖိုင် metadata parameter များ

| parameter | ရှင်းလင်းချက် |
| --- | --- |
| `--set-metadata` | ဖိုင်တစ်ခု၏ metadata ကို ပြင်ဆင်သည် |
| `--file-id <id>` | ပြင်ဆင်မည့် ဖိုင် ID |
| `--file-name <name>` | စီမံခန့်ခွဲရေး panel တွင် ပြသမည့် အမည်အသစ် |
| `--read-source <primary\|backup>` | ဖတ်မည့်ရင်းမြစ်။ `primary` သည် ပင်မရင်းမြစ်၊ `backup` သည် အရန်ရင်းမြစ် |

`--file-name` နှင့် `--read-source` အနက် အနည်းဆုံးတစ်ခု ပေးရမည်။

## moderation labels

moderation labels သည် ဖိုင်၏ အသက်အရွယ် အဆင့်သတ်မှတ်ချက်နှင့် သက်ဆိုင်သည်။ လက်ရှိ label ကို ပထမဦးစွာ ဖတ်ပြီးမှ ပြင်ဆင်နိုင်သည်။

moderation label ဖတ်ရန်:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-label `
  --file-id "photos/2026/a.jpg"
```

moderation label သတ်မှတ်ရန်:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-label `
  --file-id "photos/2026/a.jpg" `
  --label r12 `
  --apply
```

### moderation label parameter များ

| parameter | ရှင်းလင်းချက် |
| --- | --- |
| `--get-label` | ဖိုင်တစ်ခု၏ moderation label ကို ဖတ်သည် |
| `--set-label` | ဖိုင်တစ်ခု၏ moderation label ကို ပြင်ဆင်သည် |
| `--file-id <id>` | ဖိုင် ID |
| `--label <value>` | label value: `all-ages`၊ `r12`၊ `r16`၊ `r18`၊ `None` |

## ဖိုင် tag များ

ဖိုင် tag များကို ဖိုင်များတွင် ရှာဖွေနိုင်သော လုပ်ငန်းဆိုင်ရာ tag များ ထည့်ရန် အသုံးပြုသည်။ စခရစ်သည် ဖတ်ခြင်း၊ အစားထိုးခြင်း၊ ထည့်ခြင်း၊ ဖယ်ရှားခြင်းတို့ကို ထောက်ပံ့ပြီး ဖိုင်များစွာကို batch အနေဖြင့်လည်း လုပ်ဆောင်နိုင်သည်။

ဖိုင် tag များ ဖတ်ရန်:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-tags `
  --file-id "photos/2026/a.jpg"
```

tag များ ထည့်ရန်:

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

tag များ ဖယ်ရှားရန်:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --remove-tags `
  --file-id "photos/2026/a.jpg" `
  --tag "cover" `
  --apply
```

tag များ အစားထိုးရန်:

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

batch ဖြင့် tag များ ထည့်ရန်:

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

### ဖိုင် tag parameter များ

| parameter | ရှင်းလင်းချက် |
| --- | --- |
| `--get-tags` | ဖိုင်တစ်ခု၏ tag များကို ဖတ်သည် |
| `--set-tags` | ဖိုင်တစ်ခု၏ tag များကို အစားထိုးသည် |
| `--add-tags` | ဖိုင်တစ်ခုတွင် tag များ ထည့်သည် |
| `--remove-tags` | ဖိုင်တစ်ခုမှ tag များ ဖယ်ရှားသည် |
| `--batch-tags` | tag များကို batch အနေဖြင့် သတ်မှတ်၊ ထည့် သို့မဟုတ် ဖယ်ရှားသည် |
| `--file-id <id>` | ဖိုင် ID။ batch လုပ်ဆောင်ချက်များတွင် အကြိမ်ကြိမ် ပေးနိုင်သည် |
| `--tag <tag>` | tag တန်ဖိုး။ အကြိမ်ကြိမ် ပေးနိုင်သည် |
| `--tags-json <path>` | JSON ဖိုင်မှ tag array ကို ဖတ်သည် |
| `--tag-action <set\|add\|remove>` | batch tag လုပ်ဆောင်ချက် |

`--tags-json` ဖိုင်အကြောင်းအရာ ဥပမာ:

```json
["cover", "2026", "public"]
```

## blacklist နှင့် whitelist အခြေအနေ

list အခြေအနေသည် public access mode အတွင်း ဖိုင်၏ access control လုပ်ဆောင်ပုံကို သတ်မှတ်သည်။ ဖိုင်တစ်ခုချင်း ပြင်နိုင်သလို batch ဖြင့်လည်း ပြင်နိုင်သည်။

ဖိုင်တစ်ခုကို whitelist အဖြစ် သတ်မှတ်ရန်:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-list-type `
  --file-id "photos/2026/a.jpg" `
  --list-type White `
  --apply
```

batch ဖြင့် blacklist ထဲ ထည့်ရန်:

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

မူရင်း list အခြေအနေ ပြန်ထားရန်:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-list-type `
  --file-id "photos/2026/a.jpg" `
  --list-type None `
  --apply
```

### blacklist နှင့် whitelist parameter များ

| parameter | ရှင်းလင်းချက် |
| --- | --- |
| `--set-list-type` | ဖိုင်တစ်ခု၏ list အခြေအနေကို ပြင်ဆင်သည် |
| `--batch-list-type` | ဖိုင် list အခြေအနေကို batch ဖြင့် ပြင်ဆင်သည်။ တောင်းဆိုမှုတစ်ကြိမ်တွင် အများဆုံး `15` ဖိုင် |
| `--file-id <id>` | ဖိုင် ID။ batch လုပ်ဆောင်ချက်များတွင် အကြိမ်ကြိမ် ပေးနိုင်သည် |
| `--list-type <None\|White\|Block>` | `None` သည် မူရင်းအခြေအနေ၊ `White` သည် whitelist၊ `Block` သည် blacklist |

## ဖိုင်များ ရွှေ့ခြင်း

ဖိုင်ရွှေ့ခြင်းသည် ဖိုင်တစ်ခု သို့မဟုတ် ဖိုင်များစွာကို ရည်မှန်းထားသော ဖိုလ်ဒါသို့ ရွှေ့သည်။ backend သည် တောင်းဆိုမှုတစ်ကြိမ်တွင် အများဆုံး `15` ဖိုင်ကိုသာ လုပ်ဆောင်ပြီး စခရစ်သည် `--batch-size` အတိုင်း တောင်းဆိုမှုများစွာအဖြစ် အလိုအလျောက် ခွဲ၍ အစဉ်လိုက် လုပ်ဆောင်သည်။

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

### ရွှေ့ခြင်း parameter များ

| parameter | ရှင်းလင်းချက် |
| --- | --- |
| `--move` | ဖိုင်များ ရွှေ့သည် |
| `--file-id <id>` | ရွှေ့မည့် ဖိုင် ID။ အကြိမ်ကြိမ် ပေးနိုင်သည် |
| `--target-path <dir>` | ရည်မှန်းထားသော ဖိုလ်ဒါ |
| `--batch-size <n>` | တောင်းဆိုမှုတစ်ကြိမ်တွင် ရွှေ့မည့် ဖိုင်အရေအတွက်။ မူရင်း `15`၊ အများဆုံး `15` |

## အမည်ပြောင်းခြင်း သို့မဟုတ် path ပြောင်းခြင်း

အမည်ပြောင်းရာတွင် ဖိုင် ID အဟောင်းနှင့် ဖိုင် ID အသစ်ကို တိကျစွာ အသုံးပြုသည်။ ဖိုင် ID အသစ်သည် ဖိုင်အမည်ကိုသာ ပြောင်းနိုင်သလို ဖိုလ်ဒါကိုပါ တစ်ပြိုင်နက် ပြောင်းနိုင်သည်။

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --rename `
  --old-file-id "photos/2026/a.jpg" `
  --new-file-id "photos/2026/a-renamed.jpg" `
  --apply
```

batch အနေဖြင့် အမည်ပြောင်းရာတွင် `--old-file-id` နှင့် `--new-file-id` ကို အကြိမ်ကြိမ် ပေးနိုင်သည်။

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

mapping ကို JSON ဖိုင်ထဲတွင်လည်း ရေးနိုင်သည်။

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

### အမည်ပြောင်းခြင်း parameter များ

| parameter | ရှင်းလင်းချက် |
| --- | --- |
| `--rename` | တိကျသော mapping အတိုင်း အမည် သို့မဟုတ် path ကို ပြောင်းသည် |
| `--old-file-id <id>` | မူရင်း ဖိုင် ID။ အကြိမ်ကြိမ် ပေးနိုင်သည် |
| `--new-file-id <id>` | ဖိုင် ID အသစ်။ အကြိမ်ကြိမ် ပေးနိုင်ပြီး အရေအတွက်သည် `--old-file-id` နှင့် တူရမည် |
| `--items-json <path>` | JSON array။ item တစ်ခုစီသည် `{ "oldFileId": "...", "newFileId": "..." }` ဖြစ်သည် |
| `--batch-size <n>` | တောင်းဆိုမှုတစ်ကြိမ်တွင် လုပ်ဆောင်မည့် အမည်ပြောင်း item အရေအတွက်။ မူရင်း `15`၊ အများဆုံး `15` |

## ဖိုလ်ဒါ ဖန်တီးခြင်း

ImgBed ၏ ဖိုလ်ဒါများသည် ဖိုင် path များမှ ဖြစ်ပေါ်လာသောကြောင့် အမှန်တကယ် ဗလာဖိုလ်ဒါ မရှိပါ။ စခရစ်သည် ဖိုလ်ဒါဖန်တီးသောအခါ ရည်မှန်းထားသော ဖိုလ်ဒါအောက်တွင် `0.md` အမည်ရှိ placeholder ဖိုင်တစ်ခုကို ဖန်တီးပြီး ထိုဖိုလ်ဒါကို ဖိုင်စီမံခန့်ခွဲရေးနှင့် ဖိုလ်ဒါစာရင်းအင်းတွင် ပြသနိုင်စေသည်။

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --create-folder `
  --parent-directory "photos" `
  --folder-name "2026" `
  --apply
```

### ဖိုလ်ဒါဖန်တီးခြင်း parameter များ

| parameter | ရှင်းလင်းချက် |
| --- | --- |
| `--create-folder` | ဖိုလ်ဒါ placeholder ဖိုင် ဖန်တီးသည် |
| `--parent-directory <dir>` | parent directory။ root directory အတွက် ဗလာ string ပေးနိုင်သည် |
| `--folder-name <name>` | ဖိုလ်ဒါအသစ်အမည် |

## upload IP ပိတ်ခြင်းနှင့် ပြန်ဖွင့်ခြင်း

စီမံခန့်ခွဲခွင့်ဖြင့် IP တစ်ခုကို upload ပိတ်ပင်စာရင်းထဲ ထည့်နိုင်ပြီး ထိုစာရင်းမှ ဖယ်ရှားနိုင်သည်။ ဤလုပ်ဆောင်ချက်သည် ထို IP မှ နောက်ပိုင်း upload များကိုသာ သက်ရောက်စေပြီး ထို IP မှ ယခင် upload တင်ထားသော ဖိုင်များကို မဖျက်ပါ။

upload IP တစ်ခု ပိတ်ရန်:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --block-ip "67.159.48.149" `
  --apply
```

upload IP တစ်ခု ပြန်ဖွင့်ရန်:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --allow-ip "67.159.48.149" `
  --apply
```

လက်ရှိ upload ပိတ်ထားသော IP စာရင်းကြည့်ရန်:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --blocked-ips
```

### IP စီမံခန့်ခွဲရေး parameter များ

| parameter | ရှင်းလင်းချက် |
| --- | --- |
| `--block-ip <ip>` | upload ပိတ်ပင်စာရင်းထဲ ထည့်သည် |
| `--allow-ip <ip>` | upload ပိတ်ပင်စာရင်းမှ ဖယ်ရှားသည် |

## အချိန်တို upload Token ဖန်တီးခြင်းနှင့် ဖျက်ခြင်း

စီမံခန့်ခွဲခွင့်သည် upload အတွက်သာ အသုံးပြုမည့် အချိန်တို Token ကို ဖန်တီးနိုင်သည်။ ဤ Token တွင် `upload` ခွင့်ပြုချက်သာ အမြဲပါရှိပြီး `autoDelete` သည် အမြဲ `true` ဖြစ်သည်။ သက်တမ်းကုန်ချိန် အများဆုံးမှာ `1` ရက် ဖြစ်သည်။

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

millisecond timestamp ကို တိုက်ရိုက် ပေးနိုင်သည်။

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

အချိန်တို upload Token ကို ဖျက်ရာတွင် ဖန်တီး API မှ ပြန်ပေးသော `id` ကို ပေးရမည်။ management Token သည် အောက်ပါအခြေအနေများနှင့် ကိုက်ညီသော Token များကိုသာ ဖျက်နိုင်သည်။

| အခြေအနေ | လိုအပ်ချက် |
| --- | --- |
| ခွင့်ပြုချက် | `permissions` သည် `upload` သာ ဖြစ်ရမည် |
| အလိုအလျောက်ဖျက်ခြင်း | `autoDelete=true` |
| သက်တမ်း | `expiresAt - createdAt <= 24` နာရီ |

အချိန်တို upload Token ဖျက်ရန်:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --delete-upload-token `
  --token-id "mqt4jqokc85be80d1f0f47078e848a77d6c1aa6e" `
  --apply
```

management Token သည် သာမန် Token၊ ရေရှည် Token၊ `list` / `delete` / `manage` ခွင့်ပြုချက်ပါသော Token၊ သို့မဟုတ် `1` ရက်ထက်ပိုသော သက်တမ်းရှိ upload Token ကို မဖျက်နိုင်ပါ။ ထို Token များကို browser စီမံခန့်ခွဲရေး panel တွင် ဆက်လက်ကိုင်တွယ်ရမည်။

### အချိန်တို upload Token parameter များ

| parameter | ရှင်းလင်းချက် |
| --- | --- |
| `--create-upload-token` | အချိန်တို upload-only Token ဖန်တီးသည် |
| `--delete-upload-token` | အခြေအနေကိုက်ညီသော အချိန်တို upload-only Token ကို ဖျက်သည် |
| `--name <name>` | Token အမည် |
| `--owner <owner>` | Token ပိုင်ဆိုင်မှုဖော်ပြချက် |
| `--default-upload-channel <key>` | မူရင်း upload channel။ `telegram`၊ `s3`၊ `github` ကဲ့သို့ အမှန်တကယ်ရှိသော channel ဖြစ်ရမည် |
| `--expires-in-minutes <n>` | လက်ရှိအချိန်မှ သက်တမ်းကုန်ရန် မိနစ်အရေအတွက်။ အများဆုံး `1440` |
| `--expires-at <ms>` | millisecond timestamp အဖြစ် အကြွင်းမဲ့ သက်တမ်းကုန်ချိန်။ လက်ရှိအချိန်မှ အများဆုံး `24` နာရီ |
| `--token-id <id>` | ဖျက်မည့် အချိန်တို upload Token ID |

အချိန်တို upload Token သည် အပ်လုဒ်တင်ခြင်းသာ လုပ်နိုင်သည်။ စမ်းသပ်မှုတွင် `permissions=["upload"]` ပါသော အချိန်တို Token သည် list၊ file management နှင့် delete API များကို ဝင်ရောက်ရာတွင် ပယ်ချခံရသည်။

သက်တမ်းကုန်ပြီးနောက် `autoDelete=true` ပါသော Token များကို backend က စစ်ဆေးရာတွင် သက်တမ်းကုန်နေကြောင်း တွေ့ပါက ရှင်းလင်းသည်။ API Token စာရင်းကို ဖတ်သည့်အခါလည်း သက်တမ်းကုန်ပြီး `autoDelete=true` ဖြစ်သော Token များကို ရှင်းလင်းသည်။

## API ကိုက်ညီမှု

| လုပ်ဆောင်ချက် | နည်းလမ်း | API |
| --- | --- | --- |
| ဖိုင် metadata ပြင်ဆင်ခြင်း | `PATCH` | `/api/manage/metadata/{fileId}` |
| moderation label ဖတ်ခြင်း | `GET` | `/api/manage/label/{fileId}` |
| moderation label ပြင်ဆင်ခြင်း | `POST` | `/api/manage/label/{fileId}` |
| ဖိုင် tag များ ဖတ်ခြင်း | `GET` | `/api/manage/tags/{fileId}` |
| ဖိုင် tag များ ပြင်ဆင်ခြင်း | `POST` | `/api/manage/tags/{fileId}` |
| ဖိုင် tag များကို batch ဖြင့် ပြင်ဆင်ခြင်း | `POST` | `/api/manage/tags/batch` |
| list အခြေအနေ ပြင်ဆင်ခြင်း | `POST` | `/api/manage/listType/{fileId}` |
| list အခြေအနေကို batch ဖြင့် ပြင်ဆင်ခြင်း | `POST` | `/api/manage/listType/batch` |
| ရွှေ့ခြင်း သို့မဟုတ် အမည်ပြောင်းခြင်း | `POST` | `/api/manage/relocate/batch` |
| ဖိုလ်ဒါ ဖန်တီးခြင်း | `POST` | `/api/manage/folder/create` |
| upload IP ပိတ်ခြင်း | `POST` | `/api/manage/cusConfig/blockip` |
| upload IP ပြန်ဖွင့်ခြင်း | `POST` | `/api/manage/cusConfig/whiteip` |
| အချိန်တို upload Token ဖန်တီးခြင်း | `POST` | `/api/manage/apiTokens` |
| အချိန်တို upload Token ဖျက်ခြင်း | `DELETE` | `/api/manage/apiTokens?id={tokenId}` |

စခရစ်သည် အောက်ပါအရာကို အလိုအလျောက် ထည့်ပေးသည်။

```text
Authorization: Bearer your API Token
```

## output ပုံစံ

မူရင်း `pretty` output သည် လူဖတ်ရန် သင့်တော်သည်။ အခြား program ဖြင့် ဆက်လက်လုပ်ဆောင်ရန် `--output json` ကို အသုံးပြုပါ။

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-tags `
  --file-id "photos/2026/a.jpg" `
  --output json
```

ရလဒ်အပြည့်အစုံကိုလည်း သိမ်းဆည်းနိုင်သည်။

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-tags `
  --file-id "photos/2026/a.jpg" `
  --output json `
  --save-response ".\manage-result.json"
```

batch move၊ batch rename နှင့် batch list လုပ်ဆောင်ချက်များသည် backend မှ ပြန်လာသော NDJSON progress stream ကို parse လုပ်ပြီး event count၊ completion status နှင့် failure details တို့ကို စုစည်းပြသည်။

## မေးလေ့ရှိသော မေးခွန်းများ

### command run ပြီးနောက် ဘာကြောင့် မပြောင်းလဲသနည်း

ရေးသားမှုလုပ်ဆောင်ချက်များသည် မူရင်းအားဖြင့် preview mode ဖြစ်သည်။ preview ရလဒ်မှန်ကန်ကြောင်း အတည်ပြုပြီးမှ `--apply` ထည့်ပါ။ ထိုအခါ ပြောင်းလဲမှုကို အမှန်တကယ် သိမ်းဆည်းမည်။

### ဤစခရစ်သည် ဖိုင် upload၊ list သို့မဟုတ် delete လုပ်နိုင်သလား

မလုပ်နိုင်ပါ။ upload အတွက် upload စခရစ်များကို သုံးပါ။ list နှင့် filter အတွက် list စခရစ်ကို သုံးပါ။ တိကျသော ဖိုင်ဖျက်ရန် delete စခရစ်ကို သုံးပါ။ ဖိုင်စီမံခန့်ခွဲရေးစခရစ်သည် `manage` ခွင့်ပြုချက်အောက်ရှိ ပေါ့ပါးသော စီမံခန့်ခွဲရေးလုပ်ဆောင်ချက်များကိုသာ ကိုင်တွယ်သည်။

### ဘယ် fileId ပေးရမလဲ ဘယ်လိုသိနိုင်မလဲ

ပထမဦးစွာ `imgbed-token-list.mjs --files` ဖြင့် ဖိုင်များကို ရှာပါ။ ပြန်လာသောရလဒ်ရှိ `name` သည် ပုံမှန်အားဖြင့် ဖိုင် ID ဖြစ်ပြီး ဤနေရာတွင် `--file-id` အဖြစ် ပေးရမည့် တန်ဖိုးဖြစ်သည်။

### batch operation တစ်ကြိမ်တွင် အများဆုံး ဖိုင်ဘယ်နှခု လုပ်နိုင်သလဲ

backend သည် တောင်းဆိုမှုတစ်ကြိမ်တွင် အများဆုံး `15` ဖိုင်ကို လုပ်ဆောင်သည်။ စခရစ်၏ မူရင်းတန်ဖိုးမှာ `--batch-size 15` ဖြစ်သည်။ ပိုငယ်သောတန်ဖိုး ပေးပါက ထိုအရေအတွက်အတိုင်း တောင်းဆိုမှုများစွာအဖြစ် အစဉ်လိုက် ခွဲလုပ်မည်။

### အမှန်တကယ် ဗလာဖိုလ်ဒါ ဖန်တီးနိုင်သလား

ImgBed ဖိုလ်ဒါများသည် ဖိုင် path များမှ ဆင်းသက်လာသောကြောင့် အမှန်တကယ် ဗလာဖိုလ်ဒါ မရှိပါ။ `--create-folder` သည် `0.md` အမည်ရှိ placeholder ဖိုင်တစ်ခုကို ဖန်တီးပြီး ထိုဖိုလ်ဒါကို ဖိုင်စီမံခန့်ခွဲရေးနှင့် ဖိုလ်ဒါစာရင်းအင်းတွင် ပြသနိုင်စေသည်။

### အချိန်တို upload Token သက်တမ်း အများဆုံး ဘယ်လောက်လဲ

အများဆုံး `1` ရက်၊ ဆိုလိုသည်မှာ `1440` မိနစ် ဖြစ်သည်။ ထိုကန့်သတ်ချက်ထက်ကျော်လွန်ပါက စခရစ်က စက်တွင်းတွင် ပယ်ချမည်။ backend ကလည်း `API_TOKEN_MANAGE_CREATE_EXPIRES_AT_TOO_LONG` ကို ပြန်ပေးမည်။

### အချိန်တို upload Token သက်တမ်းကုန်ပြီးနောက် အလိုအလျောက် ဖျက်မလား

အလိုအလျောက် ရှင်းလင်းမည်။ သို့သော် ချက်ချင်း run သော scheduled task မဟုတ်ပါ။ သက်တမ်းကုန် Token ကို ထပ်မံစစ်ဆေးသောအခါ ရှင်းလင်းမည်။ API Token စာရင်းကို ဖတ်သည့်အခါလည်း `autoDelete=true` ပါသော သက်တမ်းကုန် Token များကို ရှင်းလင်းမည်။
