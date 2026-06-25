# API Token கோப்பு மேலாண்மை

API Token கோப்பு மேலாண்மை ஸ்கிரிப்ட்கள், தானியக்க பணிகள் மற்றும் மூன்றாம் தரப்பு மேலாண்மை பலகைகளுக்கு ஏற்றது. இது `manage` அனுமதியைப் பயன்படுத்தி, நிர்வாகப் பக்கத்தைத் திறக்காமல் கோப்பு தகவலைத் திருத்த, கோப்புகளை நகர்த்த, கோப்புப் பெயரை மாற்ற, அடைவு placeholder கோப்பை உருவாக்க, கோப்பு குறிச்சொற்கள் மற்றும் பட்டியல் நிலையை மாற்ற, ஒரு upload IP-ஐத் தடைசெய்ய அல்லது மீண்டும் அனுமதிக்க, மேலும் குறுகிய கால upload Token-களை உருவாக்க அல்லது நீக்க உதவுகிறது.

இந்த ஸ்கிரிப்ட் கோப்பு மேலாண்மை மற்றும் பயனர் மேலாண்மையில் உள்ள இலகு நிர்வாகச் செயல்களை மட்டும் கையாளும். மேலேற்றம், பட்டியலிடல், நீக்கல், upload அமைப்புகள், தள அமைப்புகள் மற்றும் federation உறவுகள் இன்னும் தங்களுக்கான தனி ஸ்கிரிப்ட்களைப் பயன்படுத்த வேண்டும்.

![API Token திருத்தம்](../../image/Safety/apitoken/编辑管理权限api.png)

## தயாரிப்பு

நிர்வாகப் பலகையில் நுழைந்த பிறகு திறக்கவும்:

System Settings → Security Settings → API Token

API Token உருவாக்கும்போதோ திருத்தும்போதோ, அந்த Token-க்கு மேலாண்மை அனுமதி உள்ளதை உறுதிசெய்யவும். `manage` அனுமதி கோப்பு நிலை, பயனர் upload நிலை மற்றும் குறுகிய கால upload Token-களை மாற்ற முடியும். ஆகவே இதை நம்பகமான ஸ்கிரிப்ட்கள் அல்லது நம்பகமான பயனர்களுக்கே வழங்கவும்.

கோப்பு மேலாண்மை ஸ்கிரிப்டில் எழுதும் செயல்கள் இயல்பாக preview mode-இல் இயங்கும்; அவை உண்மையில் சேமிக்கப்படாது. preview சரியாக இருப்பதை உறுதிசெய்த பிறகு `--apply` சேர்த்து எழுதலைச் செயல்படுத்தவும்.

Token-ஐ சூழல் மாறியிலும் வைக்கலாம்:

```powershell
$env:IMGBED_API_TOKEN="your API Token"
```

## ஸ்கிரிப்ட் பதிவிறக்கம்

| ஸ்கிரிப்ட் | பயன்பாடு |
| --- | --- |
| <a href="/tools/imgbed-token-manage.mjs" download>கோப்பு மேலாண்மை ஸ்கிரிப்ட்</a> | கோப்பு metadata, moderation labels, கோப்பு குறிச்சொற்கள், பட்டியல் நிலை, நகர்த்தல், பெயர் மாற்றம், கோப்புறை உருவாக்கம், IP தடை/மீட்பு, குறுகிய கால upload Token உருவாக்கம் மற்றும் நீக்கம் |

ஸ்கிரிப்டை இயக்க உள்ளூர் கணினியில் Node.js 18 அல்லது அதற்கு மேற்பட்ட பதிப்பு தேவை.

## செயல்பாட்டு எல்லைகள்

| திறன் | ஸ்கிரிப்ட் | அனுமதி |
| --- | --- | --- |
| கோப்பை மேலேற்றுதல் | `imgbed-token-single-upload.mjs` / `imgbed-token-chunk-upload.mjs` | `upload` |
| கோப்புகளைப் பட்டியலிடுதல், கோப்புகளை வடிகட்டுதல், பயனர் புள்ளிவிவரங்களைப் படித்தல் | `imgbed-token-list.mjs` | `list` |
| தெளிவாகக் குறிப்பிடப்பட்ட கோப்புகளை நீக்குதல் | `imgbed-token-delete.mjs` | `delete` |
| கோப்பு தகவல், குறிச்சொற்கள், பட்டியல், நகர்த்தல், பெயர் மாற்றம், கோப்புறை உருவாக்கம், IP தடை, குறுகிய கால upload Token உருவாக்கம் அல்லது நீக்கம் | `imgbed-token-manage.mjs` | `manage` |
| upload சேனல்கள், பாதுகாப்பு அமைப்புகள், பக்க அமைப்புகள், பிற அமைப்புகள் மற்றும் federation உறவுகளைத் திருத்துதல் | அமைப்பு மேலாண்மை தொடர்பான ஸ்கிரிப்ட்கள் | `manage` |

`imgbed-token-manage.mjs` கோப்பை மேலேற்றாது, கோப்புகளைப் பட்டியலிடாது, கோப்புகளை நீக்காது. `fileId` தேவைப்பட்டால் முதலில் பட்டியல் ஸ்கிரிப்டைப் பயன்படுத்தி கோப்புகளை வடிகட்டவும்; கோப்பை நீக்க வேண்டும் என்றால் தெளிவான `fileId`-ஐ நீக்கல் ஸ்கிரிப்டிற்கு வழங்கவும்.

## பொதுப் பராமீட்டர்கள்

| பராமீட்டர் | அவசியம் | விளக்கம் |
| --- | --- | --- |
| `--base-url <url>` | ஆம் | ImgBed தள முகவரி, உதாரணம் `https://image.ai6.me` |
| `--token <token>` | ஆம் | API Token; `IMGBED_API_TOKEN` சூழல் மாறியையும் பயன்படுத்தலாம் |
| `--retries <n>` | இல்லை | தற்காலிக தோல்விக்குப் பிறகு மீண்டும் முயற்சிக்கும் எண்ணிக்கை; இயல்பு `3` |
| `--timeout-ms <n>` | இல்லை | ஒவ்வொரு கோரிக்கைக்கும் நேரவரம்பு; இயல்பு `180000` |
| `--output <pretty\|json>` | இல்லை | வெளியீட்டு வடிவம்; இயல்பு `pretty`. நிரலால் பயன்படுத்த `json` பரிந்துரைக்கப்படுகிறது |
| `--save-response <path>` | இல்லை | இறுதி முடிவை JSON கோப்பாகச் சேமிக்கிறது |
| `--batch-size <n>` | இல்லை | தொகுதி செயல்களில் ஒவ்வொரு கோரிக்கையும் செயல்படுத்தும் உருப்படிகளின் எண்ணிக்கை; இயல்பு `15`, அதிகபட்சம் `15` |
| `--apply` | இல்லை | உண்மையில் எழுதலைச் செய்கிறது; இல்லையெனில் preview மட்டும் |
| `-h` / `--help` | இல்லை | ஸ்கிரிப்ட் உதவியை காட்டுகிறது |

## முதலில் fileId உறுதிசெய்க

கோப்பு மேலாண்மை ஸ்கிரிப்டின் பெரும்பாலான செயல்களுக்கு `fileId` தேவை. முதலில் பட்டியல் ஸ்கிரிப்டால் தேடலாம்:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --dir "test4" `
  --count 10 `
  --output json
```

திரும்பும் முடிவில் உள்ள `name` பொதுவாக கோப்பு மேலாண்மை ஸ்கிரிப்டிற்கு வழங்கக்கூடிய `fileId` ஆகும்.

## கோப்பு metadata

கோப்பு metadata நிர்வாகப் பலகையின் கோப்பு மேலாண்மையில் காட்டப்படும் கோப்புப் பெயரும் read source-உம் மாற்றப் பயன்படுகிறது.

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-metadata `
  --file-id "photos/2026/a.jpg" `
  --file-name "cover.jpg" `
  --read-source backup
```

preview சரியாக இருப்பதை உறுதிசெய்த பிறகு சேமிக்கவும்:

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

### கோப்பு metadata பராமீட்டர்கள்

| பராமீட்டர் | விளக்கம் |
| --- | --- |
| `--set-metadata` | ஒரு கோப்பின் metadata-வை மாற்றுகிறது |
| `--file-id <id>` | மாற்ற வேண்டிய கோப்பின் ID |
| `--file-name <name>` | நிர்வாகப் பலகையில் காட்டப்படும் புதிய பெயர் |
| `--read-source <primary\|backup>` | படிக்கும் மூலம்; `primary` முதன்மை மூலம், `backup` காப்பு மூலம் |

`--file-name` மற்றும் `--read-source` இவற்றில் குறைந்தது ஒன்று வழங்கப்பட வேண்டும்.

## moderation labels

moderation labels கோப்பின் வயது வகைப்பாட்டை குறிக்கும். முதலில் தற்போதைய label-ஐப் படித்து, பின்னர் மாற்றலாம்.

moderation label படித்தல்:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-label `
  --file-id "photos/2026/a.jpg"
```

moderation label அமைத்தல்:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-label `
  --file-id "photos/2026/a.jpg" `
  --label r12 `
  --apply
```

### moderation label பராமீட்டர்கள்

| பராமீட்டர் | விளக்கம் |
| --- | --- |
| `--get-label` | ஒரு கோப்பின் moderation label-ஐப் படிக்கும் |
| `--set-label` | ஒரு கோப்பின் moderation label-ஐ மாற்றும் |
| `--file-id <id>` | கோப்பு ID |
| `--label <value>` | label value: `all-ages`, `r12`, `r16`, `r18`, `None` |

## கோப்பு குறிச்சொற்கள்

கோப்பு குறிச்சொற்கள் கோப்புகளுக்கு தேடக்கூடிய வணிக குறிச்சொற்களைச் சேர்க்கப் பயன்படுகின்றன. ஸ்கிரிப்ட் படித்தல், மாற்றீடு, சேர்த்தல், அகற்றல் ஆகியவற்றை ஆதரிக்கிறது; பல கோப்புகளையும் தொகுதியாக செயல்படுத்த முடியும்.

கோப்பு குறிச்சொற்களைப் படித்தல்:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-tags `
  --file-id "photos/2026/a.jpg"
```

குறிச்சொற்கள் சேர்த்தல்:

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

குறிச்சொற்கள் அகற்றல்:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --remove-tags `
  --file-id "photos/2026/a.jpg" `
  --tag "cover" `
  --apply
```

குறிச்சொற்களை மாற்றீடு செய்தல்:

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

தொகுதியாக குறிச்சொற்கள் சேர்த்தல்:

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

### கோப்பு குறிச்சொல் பராமீட்டர்கள்

| பராமீட்டர் | விளக்கம் |
| --- | --- |
| `--get-tags` | ஒரு கோப்பின் குறிச்சொற்களைப் படிக்கும் |
| `--set-tags` | ஒரு கோப்பின் குறிச்சொற்களை மாற்றீடு செய்யும் |
| `--add-tags` | ஒரு கோப்பிற்கு குறிச்சொற்களைச் சேர்க்கும் |
| `--remove-tags` | ஒரு கோப்பிலிருந்து குறிச்சொற்களை அகற்றும் |
| `--batch-tags` | தொகுதியாக குறிச்சொற்களை அமைக்கும், சேர்க்கும் அல்லது அகற்றும் |
| `--file-id <id>` | கோப்பு ID; தொகுதி செயல்களில் பலமுறை வழங்கலாம் |
| `--tag <tag>` | குறிச்சொல் மதிப்பு; பலமுறை வழங்கலாம் |
| `--tags-json <path>` | JSON கோப்பிலிருந்து குறிச்சொல் array-ஐப் படிக்கும் |
| `--tag-action <set\|add\|remove>` | தொகுதி குறிச்சொல் செயல் |

`--tags-json` கோப்பு உள்ளடக்க உதாரணம்:

```json
["cover", "2026", "public"]
```

## கருப்பு மற்றும் வெள்ளை பட்டியல் நிலை

பட்டியல் நிலை public access mode-இல் கோப்பின் access control நடத்தை நிர்ணயிக்கிறது. இதை ஒரு கோப்பிற்கோ தொகுதியாகவோ மாற்றலாம்.

ஒரு கோப்பை வெள்ளை பட்டியலாக அமைத்தல்:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-list-type `
  --file-id "photos/2026/a.jpg" `
  --list-type White `
  --apply
```

தொகுதியாக கருப்பு பட்டியலில் சேர்த்தல்:

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

இயல்புநிலை பட்டியல் நிலையை மீட்டமைத்தல்:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-list-type `
  --file-id "photos/2026/a.jpg" `
  --list-type None `
  --apply
```

### கருப்பு மற்றும் வெள்ளை பட்டியல் பராமீட்டர்கள்

| பராமீட்டர் | விளக்கம் |
| --- | --- |
| `--set-list-type` | ஒரு கோப்பின் பட்டியல் நிலையை மாற்றும் |
| `--batch-list-type` | கோப்புகளின் பட்டியல் நிலையை தொகுதியாக மாற்றும்; ஒரு கோரிக்கை அதிகபட்சம் `15` கோப்புகள் |
| `--file-id <id>` | கோப்பு ID; தொகுதி செயல்களில் பலமுறை வழங்கலாம் |
| `--list-type <None\|White\|Block>` | `None` இயல்புநிலை, `White` வெள்ளை பட்டியல், `Block` கருப்பு பட்டியல் |

## கோப்புகளை நகர்த்தல்

நகர்த்துதல் ஒரு அல்லது பல கோப்புகளை இலக்கு அடைவிற்கு நகர்த்தும். பின்னணி சேவை ஒவ்வொரு கோரிக்கையிலும் அதிகபட்சம் `15` கோப்புகள் வரை செயல்படுத்தும்; ஸ்கிரிப்ட் `--batch-size` படி பணியை பல கோரிக்கைகளாகப் பிரித்து வரிசையாக இயக்கும்.

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

### நகர்த்தல் பராமீட்டர்கள்

| பராமீட்டர் | விளக்கம் |
| --- | --- |
| `--move` | கோப்புகளை நகர்த்தும் |
| `--file-id <id>` | நகர்த்த வேண்டிய கோப்பு ID; பலமுறை வழங்கலாம் |
| `--target-path <dir>` | இலக்கு அடைவு |
| `--batch-size <n>` | ஒவ்வொரு கோரிக்கையிலும் நகர்த்தப்படும் கோப்புகளின் எண்ணிக்கை; இயல்பு `15`, அதிகபட்சம் `15` |

## பெயர் மாற்றம் அல்லது பாதை மாற்றம்

பெயர் மாற்றம் பழைய கோப்பு ID மற்றும் புதிய கோப்பு ID-ஐத் தெளிவாகப் பயன்படுத்துகிறது. புதிய கோப்பு ID கோப்புப் பெயரை மட்டும் மாற்றலாம், அல்லது அதே நேரத்தில் அடைவையும் மாற்றலாம்.

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --rename `
  --old-file-id "photos/2026/a.jpg" `
  --new-file-id "photos/2026/a-renamed.jpg" `
  --apply
```

தொகுதியாக பெயர் மாற்றும்போது `--old-file-id` மற்றும் `--new-file-id`-ஐ மீண்டும் மீண்டும் வழங்கலாம்:

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

mapping-ஐ JSON கோப்பிலும் எழுதலாம்:

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

### பெயர் மாற்றப் பராமீட்டர்கள்

| பராமீட்டர் | விளக்கம் |
| --- | --- |
| `--rename` | தெளிவான mapping படி பெயர் அல்லது பாதையை மாற்றும் |
| `--old-file-id <id>` | அசல் கோப்பு ID; பலமுறை வழங்கலாம் |
| `--new-file-id <id>` | புதிய கோப்பு ID; பலமுறை வழங்கலாம், எண்ணிக்கை `--old-file-id`-க்கு சமமாக இருக்க வேண்டும் |
| `--items-json <path>` | JSON array; ஒவ்வொரு உருப்படியும் `{ "oldFileId": "...", "newFileId": "..." }` |
| `--batch-size <n>` | ஒவ்வொரு கோரிக்கையிலும் செயல்படுத்தப்படும் பெயர் மாற்ற உருப்படிகளின் எண்ணிக்கை; இயல்பு `15`, அதிகபட்சம் `15` |

## கோப்புறை உருவாக்கம்

ImgBed அடைவுகள் கோப்பு பாதைகளிலிருந்து பெறப்படுகின்றன; உண்மையான காலியான அடைவு கிடையாது. ஸ்கிரிப்ட் கோப்புறை உருவாக்கும்போது, இலக்கு அடைவில் `0.md` என்ற placeholder கோப்பை உருவாக்குகிறது. இதனால் அந்த அடைவு கோப்பு மேலாண்மை மற்றும் அடைவு புள்ளிவிவரங்களில் தோன்றும்.

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --create-folder `
  --parent-directory "photos" `
  --folder-name "2026" `
  --apply
```

### கோப்புறை உருவாக்கப் பராமீட்டர்கள்

| பராமீட்டர் | விளக்கம் |
| --- | --- |
| `--create-folder` | அடைவு placeholder கோப்பை உருவாக்கும் |
| `--parent-directory <dir>` | மேல் அடைவு; root அடைவிற்கு காலியான string வழங்கலாம் |
| `--folder-name <name>` | புதிய கோப்புறை பெயர் |

## upload IP தடை மற்றும் மீட்பு

மேலாண்மை அனுமதியால் ஒரு IP-ஐ upload தடை பட்டியலில் சேர்க்கலாம்; அதிலிருந்து அகற்றவும் முடியும். இந்த செயல் அந்த IP-இன் அடுத்தடுத்த upload-களைப் பாதிக்கும்; அந்த IP ஏற்கனவே upload செய்த கோப்புகளை நீக்காது.

ஒரு upload IP-ஐத் தடைசெய்தல்:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --block-ip "67.159.48.149" `
  --apply
```

ஒரு upload IP-ஐ மீண்டும் அனுமதித்தல்:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --allow-ip "67.159.48.149" `
  --apply
```

தற்போதைய தடைசெய்யப்பட்ட upload IP பட்டியலைப் பார்க்க:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --blocked-ips
```

### IP மேலாண்மை பராமீட்டர்கள்

| பராமீட்டர் | விளக்கம் |
| --- | --- |
| `--block-ip <ip>` | upload தடை பட்டியலில் சேர்க்கும் |
| `--allow-ip <ip>` | upload தடை பட்டியலில் இருந்து அகற்றும் |

## குறுகிய கால upload Token உருவாக்கம் மற்றும் நீக்கம்

மேலாண்மை அனுமதி குறுகிய கால, upload-only Token உருவாக்க முடியும். இந்த Token எப்போதும் `upload` அனுமதியை மட்டும் கொண்டிருக்கும், `autoDelete` எப்போதும் `true`, அதிகபட்ச காலாவதி நேரம் `1` நாள்.

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

millisecond timestamp-ஐ நேரடியாகவும் வழங்கலாம்:

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

குறுகிய கால upload Token-ஐ நீக்கும்போது, உருவாக்கும் API திருப்பிய `id`-ஐ வழங்க வேண்டும். மேலாண்மை Token பின்வரும் நிபந்தனைகளை பூர்த்தி செய்யும் Token-களை மட்டுமே நீக்க முடியும்:

| நிபந்தனை | தேவை |
| --- | --- |
| அனுமதி | `permissions` என்பது `upload` மட்டும் |
| தானியங்கி நீக்கம் | `autoDelete=true` |
| செல்லுபடியாகும் காலம் | `expiresAt - createdAt <= 24` மணி |

குறுகிய கால upload Token நீக்கம்:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --delete-upload-token `
  --token-id "mqt4jqokc85be80d1f0f47078e848a77d6c1aa6e" `
  --apply
```

மேலாண்மை Token சாதாரண Token, நீண்டகால Token, `list` / `delete` / `manage` அனுமதிகள் உள்ள Token, அல்லது `1` நாளுக்கு மேலான செல்லுபடியாகும் காலம் கொண்ட upload Token-ஐ நீக்க முடியாது. இவை இன்னும் உலாவி நிர்வாகப் பலகையில் கையாளப்பட வேண்டும்.

### குறுகிய கால upload Token பராமீட்டர்கள்

| பராமீட்டர் | விளக்கம் |
| --- | --- |
| `--create-upload-token` | குறுகிய கால, upload-only Token உருவாக்கும் |
| `--delete-upload-token` | நிபந்தனைகள் பூர்த்தி செய்யும் குறுகிய கால upload-only Token-ஐ நீக்கும் |
| `--name <name>` | Token பெயர் |
| `--owner <owner>` | Token உரிமை விளக்கம் |
| `--default-upload-channel <key>` | இயல்புநிலை upload சேனல்; `telegram`, `s3`, `github` போன்ற உண்மையான சேனல் இருக்க வேண்டும் |
| `--expires-in-minutes <n>` | தற்போதைய நேரத்திலிருந்து காலாவதியாகும் நிமிடங்கள்; அதிகபட்சம் `1440` |
| `--expires-at <ms>` | millisecond timestamp ஆக முழு காலாவதி நேரம்; தற்போதைய நேரத்திலிருந்து அதிகபட்சம் `24` மணி |
| `--token-id <id>` | நீக்க வேண்டிய குறுகிய கால upload Token ID |

குறுகிய கால upload Token மேலேற்றத்தையே செய்ய முடியும். சோதனையில், `permissions=["upload"]` கொண்ட குறுகிய கால Token பட்டியல், கோப்பு மேலாண்மை மற்றும் நீக்க API-களை அணுகும்போது நிராகரிக்கப்பட்டது.

காலாவதியான பிறகு, `autoDelete=true` கொண்ட Token-கள் பின்னணி சேவை அவை காலாவதியானவை என்று சரிபார்க்கும் போது சுத்தம் செய்யப்படும். API Token பட்டியலைப் படிக்கும் போதும் காலாவதியான auto-delete Token-கள் சுத்தம் செய்யப்படும்.

## API ஒப்பீடு

| செயல் | முறை | API |
| --- | --- | --- |
| கோப்பு metadata மாற்றம் | `PATCH` | `/api/manage/metadata/{fileId}` |
| moderation label படித்தல் | `GET` | `/api/manage/label/{fileId}` |
| moderation label மாற்றம் | `POST` | `/api/manage/label/{fileId}` |
| கோப்பு குறிச்சொற்கள் படித்தல் | `GET` | `/api/manage/tags/{fileId}` |
| கோப்பு குறிச்சொற்கள் மாற்றம் | `POST` | `/api/manage/tags/{fileId}` |
| கோப்பு குறிச்சொற்கள் தொகுதியாக மாற்றம் | `POST` | `/api/manage/tags/batch` |
| பட்டியல் நிலை மாற்றம் | `POST` | `/api/manage/listType/{fileId}` |
| பட்டியல் நிலை தொகுதியாக மாற்றம் | `POST` | `/api/manage/listType/batch` |
| நகர்த்தல் அல்லது பெயர் மாற்றம் | `POST` | `/api/manage/relocate/batch` |
| கோப்புறை உருவாக்கம் | `POST` | `/api/manage/folder/create` |
| upload IP தடை | `POST` | `/api/manage/cusConfig/blockip` |
| upload IP மீட்பு | `POST` | `/api/manage/cusConfig/whiteip` |
| குறுகிய கால upload Token உருவாக்கம் | `POST` | `/api/manage/apiTokens` |
| குறுகிய கால upload Token நீக்கம் | `DELETE` | `/api/manage/apiTokens?id={tokenId}` |

ஸ்கிரிப்ட் தானாக இதைப் சேர்க்கும்:

```text
Authorization: Bearer your API Token
```

## வெளியீட்டு வடிவம்

இயல்புநிலை `pretty` வெளியீடு மனிதர் படிக்க ஏற்றது. மற்றொரு நிரலுக்குத் தர வேண்டுமெனில் `--output json` பயன்படுத்தவும்:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-tags `
  --file-id "photos/2026/a.jpg" `
  --output json
```

முழு முடிவையும் சேமிக்கலாம்:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-tags `
  --file-id "photos/2026/a.jpg" `
  --output json `
  --save-response ".\manage-result.json"
```

தொகுதி நகர்த்தல், தொகுதி பெயர் மாற்றம் மற்றும் தொகுதி பட்டியல் செயல்கள் பின்னணி சேவை திருப்பும் NDJSON progress stream-ஐ பகுப்பாய்வு செய்து, event count, completion status மற்றும் failure details ஆகியவற்றைச் சுருக்கம் செய்கின்றன.

## பொதுவான கேள்விகள்

### கட்டளை இயங்கிய பிறகும் மாற்றம் ஏன் இல்லை?

எழுதும் செயல்கள் இயல்பாக preview mode-இல் இருக்கும். preview சரியாக இருப்பதை உறுதிசெய்த பிறகு `--apply` சேர்த்தால் மாற்றம் உண்மையில் சேமிக்கப்படும்.

### இந்த ஸ்கிரிப்ட் கோப்புகளை upload, list அல்லது delete செய்யுமா?

இல்லை. upload செய்ய upload ஸ்கிரிப்ட்களைப் பயன்படுத்தவும்; list மற்றும் filter செய்ய list ஸ்கிரிப்டை பயன்படுத்தவும்; குறிப்பிட்ட கோப்பை delete செய்ய delete ஸ்கிரிப்டை பயன்படுத்தவும். கோப்பு மேலாண்மை ஸ்கிரிப்ட் `manage` அனுமதிக்குள் உள்ள இலகு நிர்வாகச் செயல்களை மட்டும் கையாளும்.

### எந்த fileId கொடுக்க வேண்டும் என்பதை எப்படி அறியலாம்?

முதலில் `imgbed-token-list.mjs --files` கொண்டு கோப்புகளைத் தேடுங்கள். திரும்பும் முடிவில் உள்ள `name` பொதுவாக கோப்பு ID; அதுவே இங்கே `--file-id` ஆக வழங்கப்படும்.

### ஒரு தொகுதி செயல்பாட்டில் அதிகபட்சம் எத்தனை கோப்புகள்?

பின்னணி சேவை ஒரு கோரிக்கையில் அதிகபட்சம் `15` கோப்புகள் செயல்படுத்தும். ஸ்கிரிப்ட் இயல்பாக `--batch-size 15`; அதைவிடச் சிறிய மதிப்பு கொடுத்தால், அந்த எண்ணிக்கைக்கு ஏற்ப பல தொடர்ச்சியான கோரிக்கைகளாகப் பிரிக்கும்.

### உண்மையான காலியான கோப்புறை உருவாக்க முடியுமா?

ImgBed அடைவுகள் கோப்பு பாதைகளிலிருந்து பெறப்படுகின்றன; எனவே உண்மையான காலியான அடைவு இல்லை. `--create-folder` `0.md` என்ற placeholder கோப்பை உருவாக்கி, அந்த கோப்புறை கோப்பு மேலாண்மை மற்றும் அடைவு புள்ளிவிவரங்களில் தோன்றச் செய்கிறது.

### குறுகிய கால upload Token அதிகபட்சம் எவ்வளவு நீடிக்கும்?

அதிகபட்சம் `1` நாள், அதாவது `1440` நிமிடங்கள். இதை மீறினால் ஸ்கிரிப்ட் உள்ளூரிலேயே நிராகரிக்கும்; பின்னணி சேவையும் `API_TOKEN_MANAGE_CREATE_EXPIRES_AT_TOO_LONG` திருப்பும்.

### குறுகிய கால upload Token காலாவதியான பிறகு தானாக நீங்குமா?

தானாக சுத்தம் செய்யப்படும், ஆனால் உடனடி திட்டமிட்ட பணியாக அல்ல. காலாவதியான Token மீண்டும் சரிபார்க்கப்படும் போது சுத்தம் செய்யப்படும்; API Token பட்டியலைப் படிக்கும் போதும் `autoDelete=true` கொண்ட காலாவதியான Token-கள் சுத்தம் செய்யப்படும்.
