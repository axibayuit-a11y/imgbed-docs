# OCR

OCR images, scans, document screenshots-இல் இருந்து text extract செய்கிறது.

recognition பிறகு result copy செய்யலாம், `Markdown`, `PDF`, `Word` ஆக export செய்யலாம், அல்லது பல formats ஒன்றாக package செய்து download செய்யலாம்.

## OCR என்ன செய்ய முடியும்

| Feature | Description |
| --- | --- |
| Image text recognition | images, screenshots, scans-இல் இருந்து text extract. |
| Document layout recognition | tables, formulas, stamps, mixed text-image layouts-க்கு சிறந்தது. |
| Multiple services | Baidu PaddleOCR, Microsoft Azure Vision, Google Vision support. |
| Copy results | processing பிறகு recognized text copy. |
| Export files | `Markdown`, `PDF`, `Word` export. |
| Batch packaging | பல files recognize செய்த பிறகு results package download. |

## முதலில் OCR Services Configure செய்யவும்

திறக்கவும்:

```text
System Settings -> Other Settings -> OCR
```

![IP geolocation and OCR](../../image/other/ip定位和ocr文字识别.png)

பயன்படுத்த வேண்டிய services-க்கு credentials நிரப்பவும்:

| Service | What To Enter | Best For |
| --- | --- | --- |
| Baidu PaddleOCR | `PaddleOCR Token` | முதலில் பரிந்துரை. documents, images, tables, mixed layouts. |
| Microsoft Azure Vision | `Azure Vision Endpoint` மற்றும் `Azure Vision API Key` | Microsoft cloud services ஏற்கனவே பயன்படுத்தினால் useful. |
| Google Vision | `Google Vision API Key`. Service account `JSON` quota query-க்கு மட்டும். | Google Cloud services பயன்படுத்தினால் useful. |

credentials நிரப்பிய பிறகு save செய்யவும்.

initial testing-க்கு ஒரு service போதும். மூன்றையும் configure செய்ய வேண்டியதில்லை.

## Google Vision Setup

Google setup இரண்டு பகுதிகள்:

| Goal | Requirement |
| --- | --- |
| OCR பயன்படுத்த | `Cloud Vision API` enable செய்து `API Key` உருவாக்கவும். |
| usage query | service account உருவாக்கி `Monitoring Viewer` grant செய்து service account `JSON` download செய்யவும். |

![Google API key and service account](../../image/other/谷歌api秘钥和服务账号截图.png)

### Google-ஐ OCR-க்கு பயன்படுத்துவது

1. Google Cloud Console திறக்கவும்.
2. `APIs & Services` செல்லவும்.
3. `Library` திறந்து `Cloud Vision API` தேடி enable செய்யவும்.
4. `Credentials`-க்கு திரும்பவும்.
5. `API Key` உருவாக்கவும்.
6. API Key திறந்து copy செய்யவும்.
7. ImgBed `Google Vision API Key`-ல் paste செய்யவும்.
8. Save செய்யவும்.

பிறகு OCR dialog-ல் Google Vision தேர்வு செய்யலாம்.

### Google Usage Query

Quota query recognition-க்கு required அல்ல.

இது கடந்த 30 நாட்களில் Google Vision calls எவ்வளவு பயன்படுத்தப்பட்டது என rough count காட்டும்.

1. Google Cloud Console-ல் `IAM & Admin` திறக்கவும்.
2. `Service Accounts` திறக்கவும்.
3. service account உருவாக்கவும், உதா. `vision-monitor`.
4. `Monitoring Viewer` role கொடுக்கவும்.
5. service account details திறந்து key உருவாக்கவும்.
6. `JSON` தேர்வு செய்யவும்.
7. generated JSON file download செய்யவும்.
8. ImgBed-க்கு திரும்பி service account `JSON` கீழ் import செய்யவும் (optional).
9. import success ஆன பிறகு quota query கிளிக் செய்யவும்.

import பிறகு ImgBed service account-ன் project name காட்டும். usage query செய்யும்போது ImgBed Google monitoring data படித்து இந்த month's call count காட்டும்.

சுருக்கமாக:

| Item | Purpose |
| --- | --- |
| `Google Vision API Key` | OCR recognition செய்யும். |
| Service account `JSON` | Google Vision calls usage query. |
| `Monitoring Viewer` role | service account usage data படிக்க அனுமதி. |

## Baidu PaddleOCR Token பெறுதல்

Baidu PaddleOCR access token தேவை.

![Get PaddleOCR token](../../image/other/获取飞浆令牌.png)

Baidu PaddleOCR page-ல் `API` call window திறந்து token பெற கிளிக் செய்து copy செய்யவும்.

ImgBed-க்கு திரும்பி `PaddleOCR Token`-ல் paste செய்து save செய்யவும்.

## Recognition தொடங்குதல்

File Management-ல் image அல்லது document screenshot தேர்வு செய்து `OCR` கிளிக் செய்யவும்.

![OCR recognition](../../image/other/ocr识别截图.png)

dialog-ல் recognition service மற்றும் model தேர்வு செய்யவும்.

Common PaddleOCR model choices:

| Model | Best For |
| --- | --- |
| `PP-StructureV3` | recommended default. documents, tables, formulas, stamps, mixed layouts. |
| `PP-OCRv5` | simple images, ordinary text, lightweight recognition. |
| `PaddleOCR-VL` | multilingual, complex images, chart-like content. |
| `PaddleOCR-VL-1.5` | complex document pages மற்றும் layout recovery. |

நிச்சயமில்லையெனில் `PP-StructureV3`-இல் தொடங்கவும்.

## Advanced Options

| Option | Description |
| --- | --- |
| Orientation correction | image rotated அல்லது skewed என்றால். |
| Document flattening | photographed documents-ல் curvature அல்லது tilt இருந்தால். |
| Layout detection | headings, paragraphs, tables, image structure preserve செய்ய. |
| Chart recognition | image-ல் charts அல்லது complex structures இருந்தால். |
| Beautify `Markdown` | exported Markdown readable ஆகும். |

regular screenshots-க்கு minimal options வைத்திருக்கவும். document scans-க்கு document-related options enable செய்யவும்.

## Results பார்க்க

recognition முடிந்ததும் dialog result காட்டும்.

அதை நேரடியாக copy செய்யலாம் அல்லது export formats தேர்வு செய்யலாம்.

![PDF recognition](../../image/other/pdf识别截图.png)

document pages-க்கு exported `PDF` page appearance preserve செய்து text searchable ஆக வைத்திருக்கலாம். scans archive செய்யவும் பின்னர் content தேடவும் useful.

## Export Format தேர்வு

| Format | Best For |
| --- | --- |
| `Markdown (.md)` | notes, documentation systems, later editing. |
| `PDF (.pdf)` | page appearance மற்றும் scanned document results preserve. |
| `Word (.docx)` | layout editing, text modification, handoff. |
| Export all | multiple formats மற்றும் original image சேமிக்க, important archives. |

text மட்டும் வேண்டுமெனில் Markdown export செய்யவும்.

page appearance தேவை என்றால் PDF அல்லது Word.

## Word Output

exported Word documents office software-ல் open/edit செய்யலாம்.

![Word result](../../image/other/word识别结果.png)

சில documents Word output-ல் recognized images, headings, paragraphs கொண்டிருக்கும்.

recognition quality original image clarity, model choice, document complexity ஆகியவற்றை சார்ந்தது.

## OCR-க்கு சிறந்த File Types

| File Type | Recommendation |
| --- | --- |
| Clear screenshots | directly recognize. |
| Scans | `PP-StructureV3` prefer. |
| Photographed documents | orientation correction மற்றும் document flattening enable. |
| Tables, formulas, stamps | structured models prefer. |
| Simple short text images | `PP-OCRv5` பொதுவாக போதும். |

clearer images மற்றும் straight text நல்ல results தரும்.

## Common Cases

| Case | Meaning |
| --- | --- |
| Recognition fails | service token அல்லது key save ஆனதா பார்க்கவும். |
| Recognition slow | complex documents மற்றும் large images நேரம் எடுக்கும். |
| Table incomplete | structured model try செய்யவும். |
| Text mistakes | blur, glare, skew errors அதிகரிக்கும். clearer image try செய்யவும். |
| Word output பல images கொண்டுள்ளது | structured models சில recognized images preserve செய்யலாம். இது normal. |

### Google Quota Query Fail

சரிபார்க்கவும்:

1. Service account `JSON` imported.
2. service account-க்கு `Monitoring Viewer` role உள்ளது.
3. project-க்கு `Cloud Vision API` enabled.

OCR மட்டும் வேண்டும், usage query வேண்டாம் என்றால் service account JSON தவிர்த்து `Google Vision API Key` மட்டும் நிரப்பலாம்.

## Quick Flow

```text
System Settings திறக்கவும்
-> Other Settings திறக்கவும்
-> OCR service credentials நிரப்பவும்
-> Save
-> File Management-க்கு திரும்பவும்
-> file தேர்வு செய்து OCR கிளிக் செய்யவும்
-> model தேர்வு செய்யவும்
-> recognition முடியும் வரை காத்திருக்கவும்
-> results copy அல்லது Markdown / PDF / Word export செய்யவும்
```
