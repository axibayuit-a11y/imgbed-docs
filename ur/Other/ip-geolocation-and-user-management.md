# IP Geolocation اور User Management

IP geolocation uploader records، login devices، اور ملتے جلتے logs میں موجود IP addresses کو approximate locations میں بدلتا ہے۔

configure ہونے کے بعد admin panel upload اور access origins زیادہ واضح دکھا سکتا ہے۔ User Management مشکوک IP addresses کے لیے upload access block یا restore کرنے کی سہولت بھی دیتا ہے۔

## کہاں Configure کریں

کھولیں:

```text
System Settings -> Other Settings -> IP Geolocation
```

![IP geolocation](../../image/other/ip定位/ip定位.png)

## Available Settings

نیا IP geolocation flow ایک map service پر depend کرنے کے بجائے multiple sources support کرتا ہے۔

| Setting | Purpose |
| --- | --- |
| IP geolocation language | display language منتخب کرتا ہے، جیسے English، Simplified Chinese، Japanese، French، وغیرہ۔ |
| MaxMind Account ID | MaxMind GeoLite Web Service کے لیے MaxMind account ID۔ |
| MaxMind License Key | MaxMind License Key۔ |
| Tencent Map Key | Tencent Location Service key۔ Chinese addresses اور mainland China IPs کے لیے مفید۔ |
| ipapi Key | APILayer ipapi key۔ multilingual IP geolocation support کرتا ہے۔ |

صرف وہ services بھریں جن کی آپ کو ضرورت ہے۔ ہر field configure کرنا ضروری نہیں۔

اگر کوئی key فراہم نہ کی جائے تو ImgBed built-in free sources try کرتا ہے، مگر stability، language support، اور precision خود configured service سے کم ہو سکتی ہے۔

## Recommended Choices

اگر آپ کو بنیادی طور پر Chinese addresses چاہیے:

1. IP geolocation language کو Simplified Chinese پر set کریں۔
2. Tencent Map Key configure کریں۔
3. optionally MaxMind یا ipapi کو fallback source کے طور پر شامل کریں۔

اگر آپ کو English یا multilingual addresses چاہیے:

1. مطلوبہ language منتخب کریں۔
2. MaxMind Account ID اور License Key configure کریں۔
3. multilingual results بہتر چاہیے ہوں تو ipapi Key شامل کریں۔

## MaxMind Setup

MaxMind کو چاہیے:

```text
MaxMind Account ID
MaxMind License Key
```

MaxMind dashboard میں account ID تلاش کریں اور License Keys page سے License Key generate کریں۔

![MaxMind key config](../../image/other/ip定位/maxmind的key配置.png)

generation کے بعد Account ID اور License Key ImgBed میں paste کر کے save کریں۔

MaxMind کا free plan روزمرہ استعمال کے لیے کافی ہے، مگر request limits موجود ہیں۔ quota exceed ہو جائے تو ImgBed باقی available sources try کرتا رہتا ہے۔

## ipapi Setup

ipapi APILayer API Key استعمال کرتا ہے۔

ipapi console کھولیں اور وہاں دکھائی گئی API Key copy کریں۔

![ipapi config](../../image/other/ip定位/ipapi配置.png)

اسے ImgBed کے `ipapi Key` field میں paste کریں اور save کریں۔

ipapi multilingual IP geolocation support کرتا ہے اور اس وقت useful ہے جب آپ selected language میں addresses دکھانا چاہتے ہیں۔ اس کے free plan میں بھی request limits ہیں۔ quota ختم ہو جائے تو ImgBed باقی available sources try کرتا ہے۔

## Tencent Map Key Setup

Tencent Map Key Chinese addresses، خاص طور پر mainland China IPs کے لیے مفید ہے۔

Tencent Location Service میں key بناتے وقت enable کریں:

```text
WebServiceAPI
```

creation کے بعد key کو `Tencent Map Key` میں paste کریں اور save کریں۔

اگر صرف basic Chinese IP geolocation چاہیے تو Tencent Map Key شروع کرنے کے لیے کافی ہے۔

## User Management میں کیا چیک کریں

User Management admin panel کے اوپر سے available ہے۔

![User management](../../image/other/用户管理显示.png)

User Management IP کے حساب سے upload activity دکھاتا ہے:

| Field | Description |
| --- | --- |
| IP source | uploader کا source IP۔ |
| Address | IP سے resolve ہونے والی approximate location۔ |
| Total upload size | اس IP سے upload ہونے والی total file size۔ |
| Upload count | اس IP سے uploads کی تعداد۔ |
| Upload allowed | On کا مطلب uploads allowed ہیں۔ Off کا مطلب uploads blocked ہیں۔ |

بائیں arrow پر کلک کر کے اس IP سے uploaded files کی list expand کریں۔

file list file name، preview، file size، moderation result، file status، اور upload time دکھاتی ہے۔ uploads مشکوک لگیں تو پہلے IP expand کریں، files review کریں، پھر decide کریں کہ further uploads block کرنی ہیں یا نہیں۔

اگر IP suspicious ہو تو `Upload allowed` off کریں۔ اس IP سے future uploads block ہو جائیں گے۔

## Search, Sort, اور Advanced Filters

User Management کے اوپر IP source یا address سے search کریں۔

recent uploaders، high-frequency uploaders، یا high-usage IPs تلاش کرنے کے لیے time، upload count، یا total upload size سے sort کریں۔

گہری investigation کے لیے advanced filters کھولیں۔

![Advanced filters](../../image/other/用户管理高级筛选.png)

Advanced filters support کرتے ہیں:

| Filter | Usage |
| --- | --- |
| Time range | selected period میں files upload کرنے والے IPs دکھاتا ہے۔ |
| Access status | normal، blocked، اور ملتے جلتے states سے filter کرتا ہے۔ |
| Allow/block list | allowlist، blocklist، یا unset سے filter کرتا ہے۔ |
| File type | images، videos، audio، documents، code، یا other files upload کرنے والے IPs دکھاتا ہے۔ |
| File size | uploaded file size range سے filter کرتا ہے۔ |
| Age rating | unset، General، R12+، R16+، R18، اور ملتی جلتی ratings سے filter کرتا ہے۔ |
| File status | abnormal files investigate کرنے کے لیے current file status سے filter کرتا ہے۔ |

apply کرنے کے لیے `Apply Filters` پر کلک کریں۔ تمام data پر واپس آنے کے لیے `Reset` استعمال کریں۔

## Mobile View

mobile پر User Management card layout میں بدل جاتا ہے۔

![Mobile user management](../../image/other/手机端显示用户管理效果.png)

ہر card IP، address، total upload size، upload count، اور upload allowed switch دکھاتا ہے۔ آپ horizontal table scrolling کے بغیر users manage کر سکتے ہیں۔

## اگر Location غلط لگے

IP geolocation approximate ہے۔ یہ precise street address نہیں۔

اگر user proxy، data center، cloud server، یا cross-border network کے پیچھے ہے، دکھائی گئی location real location سے مختلف ہو سکتی ہے۔

اس feature کو rough origin سمجھنے، abnormal uploads تلاش کرنے، اور blocking decisions میں مدد کے لیے استعمال کریں۔ اسے precise tracking نہ سمجھیں۔

## Common Cases

| Case | Meaning |
| --- | --- |
| Address empty ہے | IP شاید ابھی resolve نہیں ہوا، یا current source temporarily unavailable ہے۔ |
| Address language غلط ہے | IP geolocation language اور اس language کو support کرنے والے source کی configuration چیک کریں۔ |
| Address data center دکھاتا ہے | بہت سے proxies، cloud servers، اور crawlers data center یا ISP addresses کے طور پر دکھتے ہیں۔ |
| Upload count high ہے | اس IP کو غور سے review کریں اور ضرورت ہو تو uploads block کریں۔ |
| Total upload size large ہے | sort یا filter کریں، IP expand کریں، اور specific files inspect کریں۔ |
| blocking کے بعد restore کرنا ہے | `Upload allowed` دوبارہ on کریں۔ |

## Quick Flow

```text
Other Settings میں IP Geolocation کھولیں
-> IP geolocation language منتخب کریں
-> ضرورت کے مطابق MaxMind, Tencent Map, یا ipapi credentials بھریں
-> settings save کریں
-> User Management کھولیں
-> IP source, address, total upload size, اور upload count review کریں
-> abnormal IPs تلاش کرنے کے لیے search, sort, یا advanced filters استعمال کریں
-> ضرورت کے مطابق uploads allow یا block کریں
```
