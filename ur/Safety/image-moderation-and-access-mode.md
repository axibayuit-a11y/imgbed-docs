# Image Moderation اور Access Mode

Image moderation uploaded images کو age ratings دیتی ہے۔ Access mode یہ کنٹرول کرتا ہے کہ public access کے ذریعے کون سی ratings دکھائی جا سکتی ہیں۔

یہ public gallery، public file URLs، اور random image API کو متاثر کرتا ہے۔ admin panel محدود نہیں ہوتا۔ administrators پھر بھی تمام files دیکھ اور manage کر سکتے ہیں۔

## کہاں Configure کریں

admin panel کھولیں، پھر جائیں:

```text
System Settings -> Security Settings -> Upload Management -> Image Moderation
```

main settings یہ ہیں:

- Access mode
- Enable moderation
- Moderation provider

## Access Mode کیا کرتا ہے

Access mode طے کرتا ہے کہ کون سی age ratings public طور پر دکھائی جا سکتی ہیں۔

موجودہ modes:

| Access Mode | Publicly Visible Ratings |
| --- | --- |
| Adult mode | General, R12, R16, R18 |
| Youth mode | General, R12, R16 |
| Teen mode | General, R12 |
| Child mode | صرف General |

default Adult mode ہے۔

private sites یا mature content والی sites کے لیے Adult mode مناسب ہو سکتا ہے۔ زیادہ conservative public gallery کے لیے Youth، Teen، یا Child mode منتخب کریں۔

## Moderation Enable کرنے سے کیا ہوتا ہے

moderation enabled ہو تو ImgBed upload کے دوران selected moderation provider کو call کرتا ہے اور detected age rating محفوظ کرتا ہے۔

main ratings:

| Rating | Meaning |
| --- | --- |
| General | safe public content |
| R12 | ہلکا sensitive content |
| R16 | درمیانے درجے کا sensitive content |
| R18 | adult content |

public access کا فیصلہ کرتے وقت moderation result استعمال ہوتا ہے۔

اگر moderation enabled نہیں، یا old files کے پاس rating نہیں، تو وہ files unrated سمجھی جاتی ہیں۔ صرف rating نہ ہونے کی وجہ سے unrated files خودکار طور پر public gallery یا random image API سے remove نہیں ہوتیں۔

## Moderation Provider منتخب کرنا

available providers میں شامل ہیں:

- moderatecontent.com
- nsfwjs
- Sightengine

ہر provider کی requirements مختلف ہیں:

- moderatecontent.com عموماً API Key require کرتا ہے۔
- nsfwjs عموماً API endpoint URL require کرتا ہے۔
- Sightengine API user اور API secret require کرتا ہے۔

اپنے account، availability، اور detection quality کے مطابق provider منتخب کریں۔ جب moderation enabled اور صحیح configured ہو، ImgBed upload کے دوران image rating لکھنے کی کوشش کرتا ہے۔

## Public Gallery پر اثر

public gallery access mode کے مطابق files filter کرتی ہے۔

مثالیں:

- Adult mode: R18 images دکھ سکتی ہیں۔
- Youth mode: R18 images hidden ہوتی ہیں۔
- Teen mode: R16 اور R18 images hidden ہوتی ہیں۔
- Child mode: صرف General images دکھائی جاتی ہیں۔

یہ صرف normal public access کو متاثر کرتا ہے۔ admin panel پھر بھی تمام files دکھاتا ہے۔

## Public File URLs پر اثر

Public file URLs وہ direct image links ہیں جو visitors کھولتے ہیں۔

اگر file rating current access mode میں allowed ہے تو ImgBed original image واپس کرتا ہے۔

اگر rating allowed level سے اوپر ہے، تو normal public access original image واپس نہیں کرتا۔ اس کے بجائے ImgBed configured blocked result یا alternative blocked image واپس کرتا ہے۔

مثال:

- current mode Child mode ہے۔
- ایک image R18 rated ہے۔
- visitor public URL directly کھولتا ہے۔
- ImgBed اس visitor کو R18 original image واپس نہیں کرتا۔

![Restricted file image](../../image/Safety/文件受限图.png)

admin panel میں files دیکھنے والے administrators اس restriction سے متاثر نہیں ہوتے۔

## Random Image API پر اثر

random image API بھی candidate pool کو access mode کے مطابق filter کرتی ہے۔

Child mode میں random images صرف General-rated files سے منتخب ہوتی ہیں۔

Youth mode میں random images General، R12، اور R16 files سے آ سکتی ہیں، لیکن R18 files سے نہیں۔

اس سے random image API public gallery restrictions کو bypass نہیں کر سکتی۔

## List Rules سے تعلق

Access mode واحد public access rule نہیں۔ یہ allow/block list rules کے ساتھ مل کر کام کرتا ہے۔

سادہ الفاظ میں:

- Allowlisted content پہلے public ہوتا ہے۔
- Blocklisted content regular visitors directly نہیں دیکھ سکتے۔
- جو content کسی list میں نہیں، اسے پھر access mode کے against چیک کیا جاتا ہے۔

اگر image age rating اور list rules دونوں سے restricted ہو، regular visitors پھر بھی original file directly نہیں دیکھ سکتے۔

## Recommended Settings

Public sites کے لیے:

- moderation enable کریں۔
- site کے audience کے مطابق access mode منتخب کریں۔
- all-age visitors کے لیے Child mode یا Teen mode استعمال کریں۔
- اگر mature content public نہیں دکھانا تو Adult mode سے بچیں۔
- admin panel میں file ratings review کریں اور ضرورت ہو تو manually adjust کریں۔

Private یا personal sites کے لیے:

- Adult mode عموماً ٹھیک ہے۔
- فائدہ ہو تو moderation enable کریں۔
- ضرورت کے مطابق admin panel میں ratings review اور adjust کریں۔

## FAQ

### Access Mode بدلنے کے بعد Files Admin Panel سے غائب ہوں گی؟

نہیں۔

Access mode صرف normal public access کو متاثر کرتا ہے۔ admin panel پر اثر نہیں پڑتا۔

### Child Mode پر switch کرنے کے بعد Public Gallery میں Images کم کیوں ہو گئیں؟

Child mode صرف General-rated files کو public دکھاتا ہے۔ R12، R16، اور R18 files filter ہو جاتی ہیں۔

### کیا Public URLs Adult Images کھول سکتی ہیں؟

اگر current access mode اس rating کو allow نہیں کرتا، تو normal public URLs original image واپس نہیں کرتیں۔

### کیا Random Image API Restricted Images واپس کر سکتی ہے؟

نہیں۔

random image API candidates کو current access mode کے مطابق filter کرتی ہے۔

### پرانی Unrated Images کا کیا ہوگا؟

Unrated images صرف اس لیے خودکار طور پر hidden نہیں ہوتیں کہ ان کے پاس moderation results نہیں ہیں۔ آپ بعد میں admin panel میں ان کی ratings adjust کر سکتے ہیں۔
