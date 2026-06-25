# Cloudflare R2 சேனல் சேர்க்கவும்

## எப்போது பயன்படுத்துவது

Cloudflare R2 பயன்படுத்தலாம், நீங்கள்:

- ImgBed site ஏற்கனவே Cloudflare-ல் deploy செய்து, அதே Cloudflare கணக்கு-இன் R2 bucket-ல் கோப்புகள் சேமிக்க விரும்பினால்.
- தனியாக S3 endpoint, அணுகல் key, secret key அமைக்க விரும்பவில்லை என்றால்.
- Worker அல்லது Pages R2 binding மூலம் குறைந்த setup-இல் reads/writes செல்ல வேண்டும் என்றால்.

சுருக்கமாக:

R2 சேனல் ImgBed நிர்வாகப் பலகையில் கைமுறையாக உருவாக்கப்படாது. முதலில் Cloudflare திட்டத்துக்கு R2 bucket bind செய்ய வேண்டும்; binding variable name கண்டிப்பாக `img_r2` ஆக இருக்க வேண்டும்.

## தொடங்குவதற்கு முன் தேவையானவை

- Cloudflare கணக்கு.
- ஏற்கனவே உருவாக்கப்பட்ட R2 bucket.
- ImgBed deploy செய்யப்பட்ட Cloudflare திட்டம்-ஐ manage செய்ய permission.

## Cloudflare-ல் கட்டமை செய்யவும்

### 1. R2 Bucket உருவாக்கவும்

1. Cloudflare Dashboard-ல் உள்நுழையவும்.
2. `R2 Object Storage` திறக்கவும்.
3. bucket உருவாக்கு என்பதைக் கிளிக் செய்யவும்.
4. bucket name-ஐத் தேர்வு செய்யவும், உதா. `imgbed`.

பதிவேற்றப்பட்ட கோப்புகள் இந்த bucket-ல் சேமிக்கப்படும்.

![R2 bucket உருவாக்கவும்](../../image/upload/cloudflare-r2/创建一个存储桶img-r2.png)

### 2. Bucket-ஐ ImgBed திட்டத்துக்கு Bind செய்யவும்

deployment type அடிப்படையில் binding இடத்தைத் தேர்வு செய்யவும்:

| Deployment வகை | Binding இடம் |
| --- | --- |
| Pages | `Current Pages project -> Settings -> Functions -> R2 bucket bindings` |
| Worker | `Current Worker -> Settings -> Bindings -> R2 bucket bindings` |

binding சேர்க்கும் போது முக்கிய புலங்கள்:

| புலம் | மதிப்பு |
| --- | --- |
| Variable name | `img_r2` |
| R2 bucket | நீங்கள் உருவாக்கிய bucket-ஐ தேர்வு செய்யவும். |

Variable name சரியாக `img_r2` ஆகவே இருக்க வேண்டும். R2 கோப்புகளின் பதிவேற்றம், படித்தல், நீக்குதல் அனைத்தும் இந்த binding name-ஐ சார்ந்தவை.

### 3. திட்டம்-ஐ மீண்டும் Deploy செய்யவும்

binding சேமித்த பிறகு ImgBed-ஐ மீண்டும் deploy செய்யவும். அப்போதுதான் Worker அல்லது Pages runtime `img_r2` அணுக முடியும்.

## ImgBed-ல் என்ன தெரியும்

R2 binding கிடைத்த பிறகு திறக்கவும்:

1. அமைப்பு அமைப்புகள்.
2. பதிவேற்ற அமைப்புகள்.
3. `Cloudflare R2` சேனல்.

அமைப்பு ஒரு நிலையான சேனலை தானாக உருவாக்கும்:

| புலம் | தீர்மானிக்கப்பட்ட மதிப்பு |
| --- | --- |
| சேனல் பெயர் | `Cloudflare R2` |
| சேனல் type | `cfr2` |
| சேமிப்பு mode | `binding` |
| கட்டமைப்பு source | Environment binding |

இது நிலையான binding சேனல். இதை உருவாக்க சேனல் சேர்க்கவும் என்பதைக் கிளிக் செய்ய வேண்டியதில்லை; சாதாரண சேனல் போல நீக்கவும் முடியாது.

## Admin Panel-ல் திருத்தக்கூடிய புலங்கள்

| புலம் | பயன்பாடு | அவசியம் |
| --- | --- | --- |
| Enable சேனல் | R2 பதிவேற்றத் தேர்வில் பங்கேற்க வேண்டுமா என்பதை கட்டுப்படுத்தும். | ஆம் |
| கணக்கு ID | quota limits இயக்கப்பட்டிருக்கும் போது official R2 usage query செய்ய மட்டும். | quota limits இயக்கப்பட்டிருந்தால் பரிந்துரைக்கப்படுகிறது |
| Bucket name | quota limits இயக்கப்பட்டிருக்கும் போது official R2 usage query செய்ய மட்டும். | quota limits இயக்கப்பட்டிருந்தால் பரிந்துரைக்கப்படுகிறது |
| Quota limit | capacity அடிப்படையில் இந்த R2 சேனல் பதிவேற்றத் தேர்வில் பங்கேற்க வேண்டுமா என்பதை கட்டுப்படுத்தும். | இல்லை |
| Threshold | usage குறிப்பிட்ட percentage-ஐ அடைந்த பிறகு இந்த சேனலில் write செய்வதை நிறுத்தும். | quota limit இயக்கப்பட்டால் அவசியம் |

Cloudflare dashboard-ல் கணக்கு information panel-இல் இருந்து கணக்கு ID-ஐ நகலெடுக்கலாம். ImgBed R2 quota usage-ஐ query/enforce செய்ய வேண்டும் என்றால் மட்டும் நிரப்பவும்.

![கணக்கு ID-ஐ பெறவும்](../../image/upload/cloudflare-r2/获取账户id.png)

## அமைப்பு படிகள்

1. Cloudflare-ல் R2 bucket உருவாக்கவும்.
2. ImgBed திட்டம்-க்கான Cloudflare settings திறக்கவும்.
3. R2 bucket binding-ஐ சேர்க்கவும்.
4. `Variable name`-ஐ `img_r2` ஆக அமைக்கவும்.
5. உருவாக்கிய R2 bucket தேர்வு செய்யவும்.
6. binding-ஐ சேமித்து ImgBed-ஐ மீண்டும் deploy செய்யவும்.
7. ImgBed -> அமைப்பு அமைப்புகள் -> பதிவேற்ற அமைப்புகள்-க்கு திரும்பவும்.
8. `Cloudflare R2` சேனல் தெரிகிறதா, இயக்கத்தில் உள்ளதா பார்க்கவும்.

capacity அடிப்படையில் R2 பதிவேற்றம் selection-ல் பங்கேற்க வேண்டும் என்றால் quota limit enable செய்து கணக்கு ID, bucket name, quota limit, threshold நிரப்பி சேமி செய்யவும்.

![கட்டமை quota limits](../../image/upload/cloudflare-r2/配置容量限制.png)

## Verify செய்வது

- fixed `Cloudflare R2` சேனல் பதிவேற்ற அமைப்புகள்-ல் தெரியும்.
- சேனல் card இயக்கத்தில் உள்ளது என காட்டும்.
- சிறிய test கோப்பு பதிவேற்றம் ஆகி returned link திறக்கும்.
- கோப்பு திறக்கும் போது `R2 database binding is not configured` வந்தால் runtime-க்கு `img_r2` binding கிடைக்கவில்லை. Cloudflare-ல் binding name சரிபார்த்து திட்டம் redeploy செய்யவும்.
