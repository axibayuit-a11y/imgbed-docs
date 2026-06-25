# API Token பட்டியலிடலும் வடிகட்டலும்

ஸ்கிரிப்ட்கள், தானியக்கப் பணிகள் அல்லது மூன்றாம் தரப்பு நிரல்கள் ImgBed தரவைப் படிக்க வேண்டியபோது API Token பட்டியலிடல் ஸ்கிரிப்ட்கள் பயனுள்ளதாக இருக்கும். அவை `list` அனுமதியை மட்டுமே பயன்படுத்தும். அவை கோப்புகளை பதிவேற்றாது, கோப்புகளை நீக்காது, அமைப்புகளை மாற்றாது, எந்த IP முகவரியையும் தடுக்கவோ அனுமதிக்கவோ செய்யாது.

![API Token திருத்துதல்](../../image/Safety/apitoken/编辑列出权限api.png)

முக்கிய பயன்பாடுகள்:

| அம்சம் | விளக்கம் |
| --- | --- |
| கோப்பு மேலாண்மை பட்டியல் | நிர்வாக கோப்பு பட்டியலைப் படித்து, கோப்பு மேலாண்மையில் கிடைக்கும் அதே மேம்பட்ட வடிகட்டிகளைப் பயன்படுத்தும். |
| பயனர் மேலாண்மை பட்டியல் | பயனர்/IP பதிவேற்ற புள்ளிவிவரங்களைப் படித்து, பயனர் மேலாண்மையில் கிடைக்கும் வடிகட்டிகளைப் பயன்படுத்தும். |
| பதிவேற்ற சேனல் பட்டியல் | சுத்திகரிக்கப்பட்ட பதிவேற்ற சேனல்கள், துணை சேனல்கள், கொள்ளளவு தரவு மற்றும் சுமை சமநிலை நிலையைப் படிக்கும். |
| அடைவு புள்ளிவிவரங்கள் | அடைவு புள்ளிவிவரங்கள் மற்றும் பக்கமிட்ட அடைவு தகவலைப் படிக்கும். |

## தொடங்குவதற்கு முன்

நிர்வாகப் பலகையைத் திறந்து இங்கே செல்லவும்:

```text
System Settings -> Security Settings -> API Token
```

API Token உருவாக்கும் போது அல்லது திருத்தும் போது, அந்த token-க்கு பட்டியலிடல் அனுமதி இருப்பதை உறுதிசெய்யவும். இந்த ஸ்கிரிப்டுக்கு `list` அனுமதி மட்டும் போதும்.

Token-ஐ சூழல் மாறியிலும் வைக்கலாம்:

```powershell
$env:IMGBED_API_TOKEN="your API Token"
```

## ஸ்கிரிப்டைப் பதிவிறக்குதல்

| ஸ்கிரிப்ட் | நோக்கம் |
| --- | --- |
| <a href="/tools/imgbed-token-list.mjs" download>பட்டியலிடல் மற்றும் வடிகட்டல் ஸ்கிரிப்டைப் பதிவிறக்கவும்</a> | கோப்பு மேலாண்மை பட்டியல், பயனர் மேலாண்மை பட்டியல், பதிவேற்ற சேனல் பட்டியல் மற்றும் அடைவு புள்ளிவிவரங்கள். |

Node.js 18 அல்லது அதற்கு மேல் தேவை.

## பொதுவான அளவுருக்கள்

| அளவுரு | கட்டாயம் | விளக்கம் |
| --- | --- | --- |
| `--base-url <url>` | ஆம் | ImgBed தள URL, உதாரணமாக `https://image.ai6.me`. |
| `--token <token>` | ஆம் | API Token. `IMGBED_API_TOKEN` சூழல் மாறியையும் பயன்படுத்தலாம். |
| `--retries <n>` | இல்லை | தற்காலிக தோல்விகளுக்கான மீண்டும் முயற்சி எண்ணிக்கை. இயல்புநிலை `3`. |
| `--timeout-ms <n>` | இல்லை | ஒவ்வொரு கோரிக்கைக்கும் நேரவரம்பு. இயல்புநிலை `180000`. |
| `--output <pretty\|json>` | இல்லை | வெளியீட்டு வடிவம். இயல்புநிலை `pretty`; நிரல்களுக்கு `json` பயன்படுத்தவும். |
| `--save-response <path>` | இல்லை | இறுதி முடிவை JSON கோப்பாகச் சேமிக்கும். |
| `-h` / `--help` | இல்லை | ஸ்கிரிப்ட் உதவியை காட்டும். |

## கோப்பு மேலாண்மை பட்டியல்

கோப்பு மேலாண்மையில் உள்ள கோப்புகளைப் பட்டியலிடுதல்:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --count 10
```

JSON வெளியீடு:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --count 10 `
  --output json
```

தற்போதைய வடிகட்டிகளின் கீழ் எண்ணிக்கையை மட்டும் படித்தல்:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --file-summary `
  --dir "photos/2026" `
  --recursive
```

### கோப்பு மேலாண்மை அளவுருக்கள்

| அளவுரு | விளக்கம் |
| --- | --- |
| `--files` | கோப்புகளைப் பட்டியலிடும். |
| `--file-summary` | எண்ணிக்கை புள்ளிவிவரங்களை மட்டும் படிக்கும். |
| `--start <n>` | பக்கமிடல் இடமாற்றம். |
| `--count <n>` | திருப்பி வழங்க வேண்டிய பதிவுகளின் எண்ணிக்கை. |
| `--dir <path>` | இலக்கு அடைவு. |
| `--recursive` | துணை அடைவுகளில் உள்ள கோப்புகளையும் சேர்க்கும். |
| `--search <text>` | தேடல் சொல்லை அமைக்கும். |
| `--channel <key>` | பதிவேற்ற சேனலின்படி வடிகட்டும், உதாரணமாக `github`, `s3`, அல்லது `yandex`. |
| `--channel-scope <primary\|backup\|all>` | சேனல் வடிகட்டி வரம்பு: முதன்மை சேனல், காப்பு சேனல் அல்லது அனைத்தும். |
| `--channel-name-groups <value>` | துணை சேனல் குழு வடிகட்டி; பின்தளத்துக்கு மாற்றமின்றி அனுப்பப்படும். |
| `--list-type <csv>` | பட்டியல் வகை; பொதுவாக `None,White,Block` பயன்படுத்தப்படும். |
| `--include-tags <csv>` | இத்தகைய குறிச்சொற்கள் இருக்க வேண்டும். |
| `--exclude-tags <csv>` | இத்தகைய குறிச்சொற்களை விலக்கும். |
| `--time-start <ms>` | பதிவேற்ற தொடக்க நேரம், மில்லிசெகண்ட் நேரமுத்திரையாக. |
| `--time-end <ms>` | பதிவேற்ற முடிவு நேரம், மில்லிசெகண்ட் நேரமுத்திரையாக. |
| `--file-exts <csv>` | குறிப்பிட்ட நீட்சிகளை மட்டும் சேர்க்கும், உதாரணமாக `jpg,png,pdf`. |
| `--exclude-file-exts <csv>` | குறிப்பிட்ட நீட்சிகளை விலக்கும். |
| `--file-status-categories <csv>` | கோப்பு வகைகள்: `image,audio,video,document,code,other`. |
| `--upload-ip <ip>` | பதிவேற்ற IP முன்னொட்டின்படி வடிகட்டும். |
| `--age-ratings <csv>` | வயது மதிப்பீடுகள்: `none,all-ages,r12,r16,r18`. |
| `--orientation <csv>` | திசை வடிகட்டி; பின்தளத்தின் தற்போதைய மதிப்புகளுக்கு மாற்றமின்றி அனுப்பப்படும். |
| `--read-source <csv>` | வாசிப்பு மூல வடிகட்டி; பின்தளத்தின் தற்போதைய மதிப்புகளுக்கு மாற்றமின்றி அனுப்பப்படும். |
| `--access-status <normal\|blocked>` | பொதுப் பயன்பாட்டு நிலை. |
| `--min-width <n>` | குறைந்தபட்ச அகலம். |
| `--max-width <n>` | அதிகபட்ச அகலம். |
| `--min-height <n>` | குறைந்தபட்ச உயரம். |
| `--max-height <n>` | அதிகபட்ச உயரம். |
| `--min-file-size <mb>` | குறைந்தபட்ச கோப்பு அளவு; பின்தளத்தின் தற்போதைய MB அளவுருவைப் பயன்படுத்தும். |
| `--max-file-size <mb>` | அதிகபட்ச கோப்பு அளவு; பின்தளத்தின் தற்போதைய MB அளவுருவைப் பயன்படுத்தும். |

### கோப்பு மேலாண்மை எடுத்துக்காட்டுகள்

PDF-களைத் தேடுதல்:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --search "pdf" `
  --file-status-categories "document" `
  --count 20
```

பதிவேற்ற IP மற்றும் சேனலின்படி வடிகட்டுதல்:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --upload-ip "103.62" `
  --channel yandex `
  --channel-scope primary
```

முழு முடிவைச் சேமித்தல்:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --count 100 `
  --output json `
  --save-response ".\files.json"
```

## பயனர் மேலாண்மை பட்டியல்

பயனர்/IP பதிவேற்ற புள்ளிவிவரங்களைப் பட்டியலிடுதல்:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --count 20
```

ஒரு IP அல்லது முகவரியைத் தேடுதல்:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --search "43.198.183.56"
```

ஒரு IP மூலம் பதிவேற்றப்பட்ட கோப்புகளைப் பார்க்குதல்:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --user-detail `
  --ip "43.198.183.56" `
  --count 20
```

பதிவேற்றம் தடுக்கப்பட்ட IP-களைப் பட்டியலிடுதல்:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --blocked-ips
```

### பயனர் மேலாண்மை அளவுருக்கள்

| அளவுரு | விளக்கம் |
| --- | --- |
| `--users` | பயனர்/IP பதிவேற்ற புள்ளிவிவரங்களைப் பட்டியலிடும். |
| `--user-detail` | குறிப்பிட்ட IP மூலம் பதிவேற்றப்பட்ட கோப்புகளைப் பார்க்கும். |
| `--blocked-ips` | பதிவேற்றம் தடுக்கப்பட்ட IP-களைப் பட்டியலிடும். |
| `--ip <ip>` | `--user-detail` உடன் கட்டாயம். |
| `--start <n>` | பக்கமிடல் இடமாற்றம். |
| `--count <n>` | திருப்பி வழங்க வேண்டிய பதிவுகளின் எண்ணிக்கை. |
| `--sort <value>` | வரிசைப்படுத்தல்: `timeDesc`, `timeAsc`, `countDesc`, `countAsc`, `totalSizeDesc`, `totalSizeAsc`. |
| `--search <text>` | IP அல்லது முகவரியைத் தேடும். |
| `--upload-status <allowed\|blocked>` | பதிவேற்றம் அனுமதிக்கப்படுகிறதா என்பதை குறிக்கும். |
| `--start-time <ms>` | புள்ளிவிவர தொடக்க நேரம், மில்லிசெகண்ட் நேரமுத்திரையாக. |
| `--end-time <ms>` | புள்ளிவிவர முடிவு நேரம், மில்லிசெகண்ட் நேரமுத்திரையாக. |
| `--file-status-categories <csv>` | கோப்பு வகை வடிகட்டி. |
| `--age-ratings <csv>` | வயது மதிப்பீட்டு வடிகட்டி. |
| `--min-file-size <mb>` | குறைந்தபட்ச கோப்பு அளவு. |
| `--max-file-size <mb>` | அதிகபட்ச கோப்பு அளவு. |
| `--list-type <csv>` | பட்டியல் வகை; பொதுவாக `None,White,Block` பயன்படுத்தப்படும். |
| `--access-status <normal\|blocked>` | பொதுப் பயன்பாட்டு நிலை. |

### பயனர் மேலாண்மை எடுத்துக்காட்டுகள்

பதிவேற்றம் தடுக்கப்பட்ட பயனர்களைப் பட்டியலிடுதல்:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --upload-status blocked
```

முகவரி சொல்லின்படி தேடுதல்:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --search "Hong Kong"
```

பதிவேற்ற எண்ணிக்கையின்படி வரிசைப்படுத்துதல்:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --sort countDesc `
  --count 50
```

## பதிவேற்ற சேனல் பட்டியல்

சுத்திகரிக்கப்பட்ட பதிவேற்ற சேனல் அமைப்பைப் பட்டியலிடுதல்:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --channels
```

திரும்பும் தரவில் பின்வருவன அடங்கும்:

| புலம் | விளக்கம் |
| --- | --- |
| `type` | பதிவேற்ற சேனல் வகை, உதாரணமாக `github`, `s3`, அல்லது `yandex`. |
| `name` | துணை சேனல் அல்லது கணக்கு பெயர். |
| `enabled` | அது இயக்கப்பட்டுள்ளதா. |
| `load_balance_enabled` | இந்த சேனல் வகைக்கு சுமை சமநிலை இயக்கப்பட்டுள்ளதா. |
| `quota_enabled` | கொள்ளளவு சோதனைகள் இயக்கப்பட்டுள்ளதா. |
| `quota_limit_bytes` | கொள்ளளவு வரம்பு. |
| `quota_used_bytes` | பயன்படுத்தப்பட்ட கொள்ளளவு. |
| `quota_checked_at` | கொள்ளளவு சோதனை நேரம். |
| `tag_json` | பொதுக் களஞ்சியம் அல்லது தனிப்பட்ட களஞ்சியம் போன்ற ரகசியமற்ற குறிச்சொற்கள். |
| `created_at` / `updated_at` | உருவாக்க நேரமும் புதுப்பிப்பு நேரமும். |

இந்த API ரகசியங்கள், புதுப்பிப்பு token-கள், அணுகல் token-கள், கடவுச்சொற்கள் அல்லது பிற உணர்வுப்பூர்வ அமைப்புகளைத் திருப்பி வழங்காது.

## அடைவு புள்ளிவிவரங்கள்

அடைவு புள்ளிவிவரங்களைப் பட்டியலிடுதல்:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --directories `
  --limit 20
```

முழு அடைவு பாதைகளைப் பட்டியலிட்டு முன்னொட்டின்படி தேடுதல்:

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

### அடைவு புள்ளிவிவர அளவுருக்கள்

| அளவுரு | விளக்கம் |
| --- | --- |
| `--directories` | அடைவு புள்ளிவிவரங்களைப் பட்டியலிடும். |
| `--dir <path>` | தொடங்க வேண்டிய அடைவு. |
| `--scope <direct\|full>` | `direct` நேரடி துணை அடைவுகளை மட்டும் பட்டியலிடும்; `full` முழு பாதைகளைப் பட்டியலிடும். |
| `--search-prefix <path>` | அடைவு முன்னொட்டின்படி தேடும். |
| `--include-parents` | `full` முறையில், பெற்றோர் அடைவுகளையும் சேர்க்கும். |
| `--limit <n>` | திருப்பி வழங்க வேண்டிய பதிவுகளின் எண்ணிக்கை. பின்தள அதிகபட்சம் `100`. |
| `--cursor <path>` | அடுத்த பக்கக் cursor. |

## வெளியீட்டு வடிவம்

இயல்புநிலை `pretty` வெளியீடு மனிதர்கள் வாசிக்க ஏற்றது:

```powershell
node imgbed-token-list.mjs --base-url "https://your-domain" --token "your API Token" --users --count 5
```

மற்ற நிரல்கள் முடிவைப் பயன்படுத்த வேண்டுமெனில், `--output json` பயன்படுத்தவும்:

```powershell
node imgbed-token-list.mjs --base-url "https://your-domain" --token "your API Token" --users --count 5 --output json
```

முழு முடிவையும் சேமிக்கலாம்:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --count 5 `
  --output json `
  --save-response ".\users.json"
```

## FAQ

### இந்த ஸ்கிரிப்ட் தரவை மாற்றுமா?

இல்லை. இந்த ஸ்கிரிப்ட் வாசிப்பு API-களை மட்டுமே அழைக்கும். இது கோப்புகளை பதிவேற்றாது, நீக்காது, நகர்த்தாது, அமைப்புகளைத் திருத்தாது, எந்த IP முகவரிக்கும் பதிவேற்றத்தைத் தடுக்கவோ அனுமதிக்கவோ செய்யாது.

### `list` அனுமதி ஏன் தேவை?

கோப்பு மேலாண்மை பட்டியல், பயனர் மேலாண்மை பட்டியல், சுத்திகரிக்கப்பட்ட சேனல் பட்டியல் மற்றும் அடைவு புள்ளிவிவரங்கள் அனைத்தும் வாசிப்பு திறன்கள்; ஆகவே API Token-க்கு `list` அனுமதி மட்டும் போதும்.

### கிடைக்கும் எல்லா அளவுருக்களையும் எப்படி பார்க்கலாம்?

இயக்கவும்:

```powershell
node imgbed-token-list.mjs --help
```

ஸ்கிரிப்ட் எல்லா செயல்களையும் அளவுருக்களையும் பட்டியலிடும்.
