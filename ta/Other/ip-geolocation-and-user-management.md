# IP Geolocation மற்றும் User Management

IP geolocation uploader records, login devices போன்ற logs-இல் உள்ள IP addresses-ஐ approximate locations ஆக மாற்றும்.

configure செய்த பிறகு admin panel upload மற்றும் access origins-ஐ தெளிவாக காட்டும். User Management மூலம் suspicious IP addresses-க்கு upload access block அல்லது restore செய்யலாம்.

## எங்கு Configure செய்வது

திறக்கவும்:

```text
System Settings -> Other Settings -> IP Geolocation
```

![IP geolocation](../../image/other/ip定位/ip定位.png)

## Available Settings

புதிய IP geolocation flow ஒரே map service-ஐ சாராமல் multiple sources support செய்கிறது.

| Setting | Purpose |
| --- | --- |
| IP geolocation language | display language தேர்வு, உதா. English, Simplified Chinese, Japanese, French. |
| MaxMind Account ID | MaxMind GeoLite Web Service-க்கு MaxMind account ID. |
| MaxMind License Key | MaxMind License Key. |
| Tencent Map Key | Tencent Location Service key. Chinese addresses மற்றும் mainland China IPs-க்கு useful. |
| ipapi Key | APILayer ipapi key. multilingual IP geolocation support. |

தேவையான services மட்டும் நிரப்பவும். எல்லா fields-ஐயும் configure செய்ய வேண்டியதில்லை.

key எதுவும் இல்லாவிட்டாலும் ImgBed built-in free sources முயலும்; ஆனால் stability, language support, precision குறையலாம்.

## Recommended Choices

Chinese addresses முக்கியம் என்றால்:

1. IP geolocation language-ஐ Simplified Chinese ஆக அமைக்கவும்.
2. Tencent Map Key configure செய்யவும்.
3. optional-ஆக MaxMind அல்லது ipapi fallback source சேர்க்கவும்.

English அல்லது multilingual addresses முக்கியம் என்றால்:

1. தேவையான language தேர்வு செய்யவும்.
2. MaxMind Account ID மற்றும் License Key configure செய்யவும்.
3. multilingual results மேம்பட ipapi Key சேர்க்கவும்.

## MaxMind Setup

MaxMind-க்கு:

```text
MaxMind Account ID
MaxMind License Key
```

MaxMind dashboard-ல் account ID கண்டுபிடித்து License Keys page-ல் License Key generate செய்யவும்.

![MaxMind key config](../../image/other/ip定位/maxmind的key配置.png)

generation பிறகு Account ID மற்றும் License Key ImgBed-ல் paste செய்து save செய்யவும்.

MaxMind free plan daily use-க்கு பொருத்தம், ஆனால் request limits உள்ளன. quota exceed ஆனால் ImgBed மற்ற available sources முயலும்.

## ipapi Setup

ipapi APILayer API Key பயன்படுத்தும்.

ipapi console திறந்து API Key copy செய்யவும்.

![ipapi config](../../image/other/ip定位/ipapi配置.png)

ImgBed `ipapi Key` field-ல் paste செய்து save செய்யவும்.

ipapi multilingual IP geolocation support செய்கிறது. selected language-ல் addresses வேண்டும் என்றால் useful. free plan-க்கும் request limits உள்ளன. quota முடிந்தால் ImgBed மற்ற sources முயலும்.

## Tencent Map Key Setup

Tencent Map Key Chinese addresses, குறிப்பாக mainland China IPs-க்கு useful.

Tencent Location Service-ல் key உருவாக்கும்போது enable செய்யவும்:

```text
WebServiceAPI
```

creation பிறகு key-ஐ `Tencent Map Key`-ல் paste செய்து save செய்யவும்.

basic Chinese IP geolocation மட்டும் வேண்டுமானால் Tencent Map Key போதும்.

## User Management-ல் என்ன பார்க்க வேண்டும்

User Management admin panel மேல் பகுதியிலிருந்து கிடைக்கும்.

![User management](../../image/other/用户管理显示.png)

User Management IP அடிப்படையில் upload activity காட்டும்:

| Field | Description |
| --- | --- |
| IP source | uploader source IP. |
| Address | IP-இல் இருந்து resolve ஆன approximate location. |
| Total upload size | இந்த IP upload செய்த total file size. |
| Upload count | இந்த IP upload செய்த எண்ணிக்கை. |
| Upload allowed | On என்றால் uploads allowed. Off என்றால் blocked. |

இடது arrow கிளிக் செய்து அந்த IP upload செய்த files list expand செய்யவும்.

file list file name, preview, file size, moderation result, file status, upload time காட்டும். upload suspicious என்றால் முதலில் IP expand செய்து files review செய்து பிறகு further uploads block செய்யலாமா முடிவு செய்யவும்.

IP suspicious என்றால் `Upload allowed` off செய்யவும். அந்த IP-இல் இருந்து future uploads blocked ஆகும்.

## Search, Sort, Advanced Filters

User Management மேல் பகுதியில் IP source அல்லது address மூலம் search செய்யலாம்.

recent uploaders, high-frequency uploaders, high-usage IPs கண்டறிய time, upload count, total upload size மூலம் sort செய்யலாம்.

மேலும் ஆய்வு செய்ய advanced filters திறக்கவும்.

![Advanced filters](../../image/other/用户管理高级筛选.png)

Advanced filters:

| Filter | Usage |
| --- | --- |
| Time range | selected period-ல் files upload செய்த IPs. |
| Access status | normal, blocked போன்ற states. |
| Allow/block list | allowlist, blocklist, unset. |
| File type | images, videos, audio, documents, code, other files. |
| File size | uploaded file size range. |
| Age rating | unset, General, R12+, R16+, R18 போன்ற ratings. |
| File status | abnormal files ஆய்வு செய்ய current file status. |

`Apply Filters` கிளிக் செய்து apply செய்யவும். `Reset` மூலம் எல்லா data-க்கும் திரும்பலாம்.

## Mobile View

mobile-ல் User Management card layout ஆக மாறும்.

![Mobile user management](../../image/other/手机端显示用户管理效果.png)

ஒவ்வொரு card IP, address, total upload size, upload count, upload allowed switch காட்டும். horizontal table scrolling இல்லாமல் manage செய்யலாம்.

## Location தவறாக தெரிந்தால்

IP geolocation approximate. இது precise street address அல்ல.

user proxy, data center, cloud server, cross-border network பின்னால் இருந்தால் location வேறுபடலாம்.

rough origin புரிய, abnormal uploads கண்டறிய, blocking decisions உதவ இதை பயன்படுத்தவும். precise tracking என கருத வேண்டாம்.

## Common Cases

| Case | Meaning |
| --- | --- |
| Address empty | IP இன்னும் resolve ஆகவில்லை, அல்லது current source unavailable. |
| Address language wrong | IP geolocation language மற்றும் அந்த language support source configured உள்ளதா பார்க்கவும். |
| Address data center காட்டுகிறது | proxies, cloud servers, crawlers பல data center/ISP addresses ஆக தெரியும். |
| Upload count high | IP-ஐ கவனமாக review செய்து தேவையெனில் uploads block செய்யவும். |
| Total upload size large | sort/filter செய்து IP expand செய்து specific files inspect செய்யவும். |
| blocking பிறகு restore | `Upload allowed` மீண்டும் on செய்யவும். |

## Quick Flow

```text
Other Settings-ல் IP Geolocation திறக்கவும்
-> IP geolocation language தேர்வு செய்யவும்
-> தேவையான MaxMind, Tencent Map, ipapi credentials நிரப்பவும்
-> settings save செய்யவும்
-> User Management திறக்கவும்
-> IP source, address, total upload size, upload count review செய்யவும்
-> abnormal IPs கண்டறிய search, sort, advanced filters பயன்படுத்தவும்
-> தேவைக்கேற்ப uploads allow/block செய்யவும்
```
