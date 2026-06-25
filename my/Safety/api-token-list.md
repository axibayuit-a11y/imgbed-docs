# API Token ဖြင့် စာရင်းကြည့်ခြင်းနှင့် စစ်ထုတ်ခြင်း

API Token စာရင်းကြည့်ခြင်းစခရစ်သည် စခရစ်၊ အလိုအလျောက်လုပ်ငန်းစဉ်များနှင့် ပြင်ပပရိုဂရမ်များမှ ImgBed ဒေတာကို ဖတ်ရန် အသုံးပြုသည်။ ဤစခရစ်သည် `list` ခွင့်ပြုချက်ကိုသာ အသုံးပြုသည်။ ဖိုင်တင်ခြင်း၊ ဖိုင်ဖျက်ခြင်း၊ ပြင်ဆင်ချက်ပြောင်းခြင်း၊ IP တစ်ခုခုကို အပ်လုဒ်တင်ခွင့် ပိတ်ခြင်း သို့မဟုတ် ခွင့်ပြုခြင်းတို့ကို မလုပ်ပါ။

![API Token ပြင်ဆင်ခြင်း](../../image/Safety/apitoken/编辑列出权限api.png)

အဓိက အသုံးပြုရန်နေရာများ:

| လုပ်ဆောင်ချက် | ရှင်းလင်းချက် |
| --- | --- |
| ဖိုင်စီမံမှု စာရင်းကြည့်ခြင်း | စီမံခန့်ခွဲရေးမျက်နှာပြင်ရှိ ဖိုင်စာရင်းကို ဖတ်ပြီး ဖိုင်စီမံမှုတွင် သုံးသော အဆင့်မြင့် စစ်ထုတ်ပါရာမီတာများကိုလည်း ထောက်ပံ့သည် |
| အသုံးပြုသူစီမံမှု စာရင်းကြည့်ခြင်း | အသုံးပြုသူ/IP အပ်လုဒ်စာရင်းအင်းကို ဖတ်ပြီး အသုံးပြုသူစီမံမှုတွင် သုံးသော စစ်ထုတ်ပါရာမီတာများကိုလည်း ထောက်ပံ့သည် |
| အပ်လုဒ်ချန်နယ်စာရင်း | လျှို့ဝှက်အချက်အလက်များ ဖယ်ရှားထားသော အပ်လုဒ်ချန်နယ်၊ ချန်နယ်ခွဲ၊ သိုလှောင်ပမာဏနှင့် ဝန်ခွဲဖြန့်မှုအချက်အလက်များကို ဖတ်သည် |
| ဒါရိုက်ထရီစာရင်းအင်းဇယား | ဒါရိုက်ထရီစာရင်းအင်းနှင့် ဒါရိုက်ထရီစာမျက်နှာခွဲအချက်အလက်များကို ဖတ်သည် |

## ကြိုတင်ပြင်ဆင်ရန်

စီမံခန့်ခွဲရေးမျက်နှာပြင်တွင် အောက်ပါနေရာသို့ သွားပါ။

```text
System Settings -> Security Settings -> API Token
```

API Token ကို ဖန်တီးခြင်း သို့မဟုတ် ပြင်ဆင်ခြင်းပြုလုပ်ပါက ထို Token တွင် စာရင်းကြည့်ခွင့်ရှိကြောင်း စစ်ဆေးပါ။ ဤစခရစ်အတွက် `list` ခွင့်ပြုချက်သာ လိုအပ်သည်။

Token ကို ပတ်ဝန်းကျင်ပြောင်းလဲကိန်းတွင်လည်း ထားနိုင်သည်။

```powershell
$env:IMGBED_API_TOKEN="your API Token"
```

## စခရစ် ဒေါင်းလုဒ်လုပ်ရန်

| စခရစ် | အသုံးပြုရန်နေရာ |
| --- | --- |
| <a href="/tools/imgbed-token-list.mjs" download>စာရင်းကြည့်ခြင်းနှင့် စစ်ထုတ်ခြင်းစခရစ် ဒေါင်းလုဒ်လုပ်ရန်</a> | ဖိုင်စီမံမှုစာရင်း၊ အသုံးပြုသူစီမံမှုစာရင်း၊ အပ်လုဒ်ချန်နယ်စာရင်း၊ ဒါရိုက်ထရီစာရင်းအင်းဇယား |

အသုံးပြုရန် Node.js 18 သို့မဟုတ် ၎င်းထက်အသစ်သော ဗားရှင်း လိုအပ်သည်။

## အထွေထွေ ပါရာမီတာများ

| ပါရာမီတာ | လိုအပ်မှု | ရှင်းလင်းချက် |
| --- | --- | --- |
| `--base-url <url>` | လိုအပ် | ImgBed ဆိုက် URL။ ဥပမာ `https://image.ai6.me` |
| `--token <token>` | လိုအပ် | API Token။ `IMGBED_API_TOKEN` ပတ်ဝန်းကျင်ပြောင်းလဲကိန်းကိုလည်း သုံးနိုင်သည်။ |
| `--retries <n>` | မလိုအပ် | ယာယီမအောင်မြင်ပါက ပြန်ကြိုးစားမည့် အကြိမ်ရေ။ မူရင်းတန်ဖိုး `3`။ |
| `--timeout-ms <n>` | မလိုအပ် | တောင်းဆိုမှုတစ်ကြိမ်၏ အချိန်ကန့်သတ်ချက်။ မူရင်းတန်ဖိုး `180000`။ |
| `--output <pretty\|json>` | မလိုအပ် | ထုတ်ပြပုံ။ မူရင်းတန်ဖိုး `pretty`။ ပရိုဂရမ်မှ အသုံးပြုမည်ဆိုပါက `json` ကို အကြံပြုသည်။ |
| `--save-response <path>` | မလိုအပ် | နောက်ဆုံးရလဒ်ကို JSON ဖိုင်အဖြစ် သိမ်းသည်။ |
| `-h` / `--help` | မလိုအပ် | စခရစ်အကူအညီကို ပြသည်။ |

## ဖိုင်စီမံမှု စာရင်းကြည့်ခြင်း

ဖိုင်စီမံမှုထဲရှိ ဖိုင်များကို စာရင်းကြည့်ရန်:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --count 10
```

JSON အဖြစ် ထုတ်ရန်:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --count 10 `
  --output json
```

လက်ရှိ စစ်ထုတ်အခြေအနေအောက်ရှိ အရေအတွက်ကိုသာ ဖတ်ရန်:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --file-summary `
  --dir "photos/2026" `
  --recursive
```

### ဖိုင်စီမံမှု ပါရာမီတာများ

| ပါရာမီတာ | ရှင်းလင်းချက် |
| --- | --- |
| `--files` | ဖိုင်များကို စာရင်းပြသည် |
| `--file-summary` | အရေအတွက်စာရင်းအင်းကိုသာ ဖတ်သည် |
| `--start <n>` | စာမျက်နှာခွဲအစနေရာ |
| `--count <n>` | ပြန်ပေးမည့် အရေအတွက် |
| `--dir <path>` | ဒါရိုက်ထရီကို သတ်မှတ်သည် |
| `--recursive` | ဒါရိုက်ထရီခွဲများထဲရှိ ဖိုင်များပါ ထည့်သည် |
| `--search <text>` | သော့ချက်စာလုံးဖြင့် ရှာသည် |
| `--channel <key>` | အပ်လုဒ်ချန်နယ်အကြီးအလိုက် စစ်ထုတ်သည်။ ဥပမာ `github`၊ `s3`၊ `yandex` |
| `--channel-scope <primary\|backup\|all>` | ချန်နယ်စစ်ထုတ်အကျယ်အဝန်း: မူလချန်နယ်၊ အရန်ချန်နယ်၊ အားလုံး |
| `--channel-name-groups <value>` | ချန်နယ်ခွဲအုပ်စု စစ်ထုတ်မှု။ ဆာဗာဘက်ရှိ ပါရာမီတာအတိုင်း တိုက်ရိုက်ပို့သည် |
| `--list-type <csv>` | စာရင်းအမျိုးအစား။ အသုံးများသော တန်ဖိုးများမှာ `None,White,Block` ဖြစ်သည် |
| `--include-tags <csv>` | မဖြစ်မနေ ပါဝင်ရမည့် tag များ |
| `--exclude-tags <csv>` | ဖယ်ထုတ်မည့် tag များ |
| `--time-start <ms>` | အပ်လုဒ်အချိန် အစ။ မီလီစက္ကန့် အချိန်တံဆိပ် |
| `--time-end <ms>` | အပ်လုဒ်အချိန် အဆုံး။ မီလီစက္ကန့် အချိန်တံဆိပ် |
| `--file-exts <csv>` | သတ်မှတ်ထားသော extension များကိုသာ ပါဝင်စေသည်။ ဥပမာ `jpg,png,pdf` |
| `--exclude-file-exts <csv>` | သတ်မှတ်ထားသော extension များကို ဖယ်ထုတ်သည် |
| `--file-status-categories <csv>` | ဖိုင်အမျိုးအစား: `image,audio,video,document,code,other` |
| `--upload-ip <ip>` | အပ်လုဒ် IP အစပိုင်းဖြင့် စစ်ထုတ်သည် |
| `--age-ratings <csv>` | အသက်အဆင့်သတ်မှတ်ချက်: `none,all-ages,r12,r16,r18` |
| `--orientation <csv>` | ပုံအနေအထားစစ်ထုတ်မှု။ ဆာဗာဘက်ရှိ တန်ဖိုးအတိုင်း တိုက်ရိုက်ပို့သည် |
| `--read-source <csv>` | ဖတ်ရှုရင်းမြစ်စစ်ထုတ်မှု။ ဆာဗာဘက်ရှိ တန်ဖိုးအတိုင်း တိုက်ရိုက်ပို့သည် |
| `--access-status <normal\|blocked>` | အများပြည်သူဝင်ရောက်ခွင့်အခြေအနေ |
| `--min-width <n>` | အနည်းဆုံး အကျယ် |
| `--max-width <n>` | အများဆုံး အကျယ် |
| `--min-height <n>` | အနည်းဆုံး အမြင့် |
| `--max-height <n>` | အများဆုံး အမြင့် |
| `--min-file-size <mb>` | အနည်းဆုံး ဖိုင်အရွယ်အစား။ ယူနစ်သည် ဆာဗာဘက်ရှိ MB ပါရာမီတာအတိုင်း ဖြစ်သည် |
| `--max-file-size <mb>` | အများဆုံး ဖိုင်အရွယ်အစား။ ယူနစ်သည် ဆာဗာဘက်ရှိ MB ပါရာမီတာအတိုင်း ဖြစ်သည် |

### ဖိုင်စီမံမှု ဥပမာများ

PDF ကို ရှာရန်:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --search "pdf" `
  --file-status-categories "document" `
  --count 20
```

အပ်လုဒ် IP နှင့် ချန်နယ်အလိုက် စစ်ထုတ်ရန်:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --upload-ip "103.62" `
  --channel yandex `
  --channel-scope primary
```

ရလဒ်အပြည့်အစုံ သိမ်းရန်:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --count 100 `
  --output json `
  --save-response ".\files.json"
```

## အသုံးပြုသူစီမံမှု စာရင်းကြည့်ခြင်း

အသုံးပြုသူ/IP အပ်လုဒ်စာရင်းအင်းကို စာရင်းကြည့်ရန်:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --count 20
```

IP တစ်ခု သို့မဟုတ် နေရာတစ်ခုကို ရှာရန်:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --search "43.198.183.56"
```

IP တစ်ခုမှ တင်ထားသော ဖိုင်အသေးစိတ်ကို ကြည့်ရန်:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --user-detail `
  --ip "43.198.183.56" `
  --count 20
```

အပ်လုဒ်တင်ခွင့် ပိတ်ထားသော IP များကို စာရင်းကြည့်ရန်:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --blocked-ips
```

### အသုံးပြုသူစီမံမှု ပါရာမီတာများ

| ပါရာမီတာ | ရှင်းလင်းချက် |
| --- | --- |
| `--users` | အသုံးပြုသူ/IP အပ်လုဒ်စာရင်းအင်းကို စာရင်းပြသည် |
| `--user-detail` | IP တစ်ခုမှ တင်ထားသော ဖိုင်အသေးစိတ်ကို ကြည့်သည် |
| `--blocked-ips` | အပ်လုဒ်တင်ခွင့် ပိတ်ထားသော IP များကို စာရင်းပြသည် |
| `--ip <ip>` | `--user-detail` အတွက် လိုအပ်သည် |
| `--start <n>` | စာမျက်နှာခွဲအစနေရာ |
| `--count <n>` | ပြန်ပေးမည့် အရေအတွက် |
| `--sort <value>` | စီရန်: `timeDesc`၊ `timeAsc`၊ `countDesc`၊ `countAsc`၊ `totalSizeDesc`၊ `totalSizeAsc` |
| `--search <text>` | IP သို့မဟုတ် နေရာကို ရှာသည် |
| `--upload-status <allowed\|blocked>` | အပ်လုဒ်တင်ခွင့် ရှိမရှိ |
| `--start-time <ms>` | စာရင်းအင်းအချိန် အစ။ မီလီစက္ကန့် အချိန်တံဆိပ် |
| `--end-time <ms>` | စာရင်းအင်းအချိန် အဆုံး။ မီလီစက္ကန့် အချိန်တံဆိပ် |
| `--file-status-categories <csv>` | ဖိုင်အမျိုးအစားဖြင့် စစ်ထုတ်သည် |
| `--age-ratings <csv>` | အသက်အဆင့်သတ်မှတ်ချက်ဖြင့် စစ်ထုတ်သည် |
| `--min-file-size <mb>` | အနည်းဆုံး ဖိုင်အရွယ်အစား |
| `--max-file-size <mb>` | အများဆုံး ဖိုင်အရွယ်အစား |
| `--list-type <csv>` | စာရင်းအမျိုးအစား။ အသုံးများသော တန်ဖိုးများမှာ `None,White,Block` ဖြစ်သည် |
| `--access-status <normal\|blocked>` | အများပြည်သူဝင်ရောက်ခွင့်အခြေအနေ |

### အသုံးပြုသူစီမံမှု ဥပမာများ

အပ်လုဒ်တင်ခွင့် ပိတ်ထားသော အသုံးပြုသူများကို စာရင်းကြည့်ရန်:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --upload-status blocked
```

နေရာဆိုင်ရာ သော့ချက်စာလုံးဖြင့် ရှာရန်:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --search "Hong Kong"
```

အပ်လုဒ်အကြိမ်ရေအလိုက် စီရန်:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --sort countDesc `
  --count 50
```

## အပ်လုဒ်ချန်နယ်စာရင်း

လျှို့ဝှက်အချက်အလက်များ ဖယ်ရှားထားသော အပ်လုဒ်ချန်နယ်ပြင်ဆင်ချက်များကို စာရင်းကြည့်ရန်:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --channels
```

ပြန်လာသော အချက်အလက်များ:

| အကွက် | ရှင်းလင်းချက် |
| --- | --- |
| `type` | အပ်လုဒ်ချန်နယ်အကြီး။ ဥပမာ `github`၊ `s3`၊ `yandex` |
| `name` | ချန်နယ်ခွဲ သို့မဟုတ် အကောင့်အမည် |
| `enabled` | ဖွင့်ထားခြင်း ရှိမရှိ |
| `load_balance_enabled` | ထိုချန်နယ်အကြီးတွင် ဝန်ခွဲဖြန့်မှု ဖွင့်ထားခြင်း ရှိမရှိ |
| `quota_enabled` | သိုလှောင်ပမာဏစစ်ဆေးမှု ဖွင့်ထားခြင်း ရှိမရှိ |
| `quota_limit_bytes` | သိုလှောင်ပမာဏ အကန့်အသတ် |
| `quota_used_bytes` | အသုံးပြုပြီးသော သိုလှောင်ပမာဏ |
| `quota_checked_at` | သိုလှောင်ပမာဏ စစ်ဆေးချိန် |
| `tag_json` | အများပြည်သူမြင်နိုင်သော repository၊ သီးသန့် repository စသည့် လျှို့ဝှက်မဟုတ်သော tag များ |
| `created_at` / `updated_at` | ဖန်တီးချိန်နှင့် နောက်ဆုံးပြင်ချိန် |

ဤ API သည် လျှို့ဝှက်ကီး၊ အသစ်ပြန်ယူသော Token၊ ယာယီ Token၊ စကားဝှက် စသည့် လုံခြုံရေးဆိုင်ရာ ပြင်ဆင်ချက်များကို မပြန်ပေးပါ။

## ဒါရိုက်ထရီစာရင်းအင်းဇယား

ဒါရိုက်ထရီစာရင်းအင်းကို စာရင်းကြည့်ရန်:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --directories `
  --limit 20
```

ဒါရိုက်ထရီလမ်းကြောင်းအပြည့်အစုံကို စာရင်းကြည့်ပြီး အစပိုင်းလမ်းကြောင်းဖြင့် ရှာရန်:

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

### ဒါရိုက်ထရီစာရင်းအင်း ပါရာမီတာများ

| ပါရာမီတာ | ရှင်းလင်းချက် |
| --- | --- |
| `--directories` | ဒါရိုက်ထရီစာရင်းအင်းဇယားကို စာရင်းပြသည် |
| `--dir <path>` | မည်သည့် ဒါရိုက်ထရီမှ စတင်စာရင်းပြမည်ကို သတ်မှတ်သည် |
| `--scope <direct\|full>` | `direct` သည် တိုက်ရိုက်အောက်ရှိ ဒါရိုက်ထရီများကိုသာ ပြပြီး၊ `full` သည် လမ်းကြောင်းအပြည့်အစုံကို ပြသည် |
| `--search-prefix <path>` | ဒါရိုက်ထရီအစပိုင်းလမ်းကြောင်းဖြင့် ရှာသည် |
| `--include-parents` | `full` မုဒ်တွင် မိဘဒါရိုက်ထရီများကိုလည်း ထည့်ပြသည် |
| `--limit <n>` | ပြန်ပေးမည့် အရေအတွက်။ ဆာဗာဘက် အများဆုံးတန်ဖိုးမှာ `100` ဖြစ်သည် |
| `--cursor <path>` | နောက်စာမျက်နှာ cursor |

## ထုတ်ပြပုံ

မူရင်း `pretty` ထုတ်ပြပုံသည် လူဖတ်ရန် သင့်တော်သည်။

```powershell
node imgbed-token-list.mjs --base-url "https://your-domain" --token "your API Token" --users --count 5
```

အခြားပရိုဂရမ်တွင် ကိုင်တွယ်ရန်လိုပါက `--output json` ကို သုံးပါ။

```powershell
node imgbed-token-list.mjs --base-url "https://your-domain" --token "your API Token" --users --count 5 --output json
```

ရလဒ်အပြည့်အစုံကို သိမ်းနိုင်သည်။

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --count 5 `
  --output json `
  --save-response ".\users.json"
```

## မေးလေ့ရှိသော မေးခွန်းများ

### ဤစခရစ်သည် ဒေတာကို ပြောင်းလဲပါသလား

မပြောင်းလဲပါ။ ဤစခရစ်သည် ဖတ်ခြင်း API များကိုသာ ခေါ်သည်။ အပ်လုဒ်တင်ခြင်း၊ ဖျက်ခြင်း၊ ရွှေ့ခြင်း၊ ပြင်ဆင်ချက်တည်းဖြတ်ခြင်း၊ IP တစ်ခုခုကို အပ်လုဒ်တင်ခွင့် ပိတ်ခြင်း သို့မဟုတ် ခွင့်ပြုခြင်းတို့ကို မလုပ်ပါ။

### `list` ခွင့်ပြုချက် ဘာကြောင့် လိုအပ်သလဲ

ဖိုင်စီမံမှုစာရင်း၊ အသုံးပြုသူစီမံမှုစာရင်း၊ လျှို့ဝှက်အချက်အလက်ဖယ်ထားသော ချန်နယ်စာရင်းနှင့် ဒါရိုက်ထရီစာရင်းအင်းတို့သည် ဖတ်ခြင်းစွမ်းရည်များဖြစ်သောကြောင့် API Token ၏ `list` ခွင့်ပြုချက်သာ လိုအပ်သည်။

### မည်သည့် ပါရာမီတာများ သုံးနိုင်ကြောင်း ဘယ်လိုစစ်မလဲ

အောက်ပါတို့ကို လုပ်ဆောင်ပါ။

```powershell
node imgbed-token-list.mjs --help
```

စခရစ်သည် လုပ်ဆောင်ချက်များနှင့် ပါရာမီတာအားလုံးကို ပြပေးသည်။


