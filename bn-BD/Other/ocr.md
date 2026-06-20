# OCR

OCR images, scans এবং document screenshots থেকে text extract করে।

Recognition-এর পর result copy করা যায়, `Markdown`, `PDF` বা `Word` হিসেবে export করা যায়, অথবা multiple formats একসঙ্গে package করে download করা যায়।

## OCR কী করতে পারে

| Feature | Description |
| --- | --- |
| Image text recognition | Images, screenshots এবং scans থেকে text extract করে। |
| Document layout recognition | Tables, formulas, stamps এবং mixed text-image layouts-এর জন্য ভালো। |
| Multiple services | Baidu PaddleOCR, Microsoft Azure Vision এবং Google Vision support করে। |
| Copy results | Processing-এর পর recognized text copy করুন। |
| Export files | `Markdown`, `PDF` এবং `Word` export করুন। |
| Batch packaging | Multiple files recognize করার পর results package হিসেবে download করুন। |

## আগে OCR Services Configure করুন

খুলুন:

```text
System Settings -> Other Settings -> OCR
```

![IP geolocation and OCR](../../image/other/ip定位和ocr文字识别.png)

যে services ব্যবহার করতে চান সেগুলোর credentials পূরণ করুন:

| Service | What To Enter | Best For |
| --- | --- | --- |
| Baidu PaddleOCR | `PaddleOCR Token` | Recommended first choice। Documents, images, tables এবং mixed layouts-এর জন্য ভালো। |
| Microsoft Azure Vision | `Azure Vision Endpoint` এবং `Azure Vision API Key` | Microsoft cloud services ব্যবহার করলে useful। |
| Google Vision | `Google Vision API Key`। Service account `JSON` শুধু quota query-এর জন্য। | Google Cloud services ব্যবহার করলে useful। |

Credentials পূরণ করার পর save করুন।

Initial testing-এর জন্য একটি service configure করলেই হয়। তিনটিই দরকার নেই।

## Google Vision Setup

Google setup-এর দুটি অংশ:

| Goal | Requirement |
| --- | --- |
| OCR ব্যবহার | `Cloud Vision API` enable করুন, তারপর `API Key` তৈরি করুন। |
| Usage query | Service account তৈরি করুন, `Monitoring Viewer` grant করুন, তারপর service account `JSON` download করুন। |

![Google API key and service account](../../image/other/谷歌api秘钥和服务账号截图.png)

### OCR-এর জন্য Google ব্যবহার

1. Google Cloud Console খুলুন।
2. `APIs & Services`-এ যান।
3. `Library` খুলে `Cloud Vision API` search করে enable করুন।
4. `Credentials`-এ ফিরে যান।
5. একটি `API Key` তৈরি করুন।
6. API Key খুলে copy করুন।
7. ImgBed-এর `Google Vision API Key`-এ paste করুন।
8. Save করুন।

এরপর OCR dialog-এ Google Vision নির্বাচন করতে পারবেন।

### Google Usage Query

Quota query recognition-এর জন্য required নয়।

এটি শুধু গত 30 দিনে কত Google Vision calls ব্যবহৃত হয়েছে তার rough count দেখায়।

1. Google Cloud Console-এ `IAM & Admin` খুলুন।
2. `Service Accounts` খুলুন।
3. একটি service account তৈরি করুন, যেমন `vision-monitor`।
4. এটিকে `Monitoring Viewer` role দিন।
5. Service account details খুলে key create করুন।
6. `JSON` নির্বাচন করুন।
7. Generated JSON file download করুন।
8. ImgBed-এ ফিরে service account `JSON`-এর নিচে import করুন (optional)।
9. Import successful হলে quota query ক্লিক করুন।

Import-এর পর ImgBed service account-এর project name দেখায়। Usage query করার সময় ImgBed Google monitoring data পড়ে এই মাসের call count দেখায়।

সংক্ষেপে:

| Item | Purpose |
| --- | --- |
| `Google Vision API Key` | OCR recognition করে। |
| Service account `JSON` | কত Google Vision calls ব্যবহৃত হয়েছে query করে। |
| `Monitoring Viewer` role | Service account-কে usage data পড়তে দেয়। |

## Baidu PaddleOCR Token নেওয়া

Baidu PaddleOCR access token চায়।

![Get PaddleOCR token](../../image/other/获取飞浆令牌.png)

Baidu PaddleOCR page-এর `API` call window খুলে token নেওয়ার জন্য click করুন, তারপর copy করুন।

ImgBed-এ ফিরে `PaddleOCR Token`-এ paste করে save করুন।

## Recognition শুরু করা

File Management-এ image বা document screenshot নির্বাচন করে `OCR` ক্লিক করুন।

![OCR recognition](../../image/other/ocr识别截图.png)

Dialog-এ recognition service এবং model নির্বাচন করুন।

Common PaddleOCR model choices:

| Model | Best For |
| --- | --- |
| `PP-StructureV3` | Recommended default। Documents, tables, formulas, stamps এবং mixed layouts-এর জন্য ভালো। |
| `PP-OCRv5` | Simple images, ordinary text এবং lightweight recognition। |
| `PaddleOCR-VL` | Multilingual, complex images এবং chart-like content। |
| `PaddleOCR-VL-1.5` | আরও complex document pages এবং layout recovery। |

নিশ্চিত না হলে `PP-StructureV3` দিয়ে শুরু করুন।

## Advanced Options

| Option | Description |
| --- | --- |
| Orientation correction | Image rotated বা skewed হলে ব্যবহার করুন। |
| Document flattening | Curvature বা tilt থাকা photographed documents-এর জন্য ব্যবহার করুন। |
| Layout detection | Headings, paragraphs, tables এবং image structure preserve করতে চাইলে ব্যবহার করুন। |
| Chart recognition | Image-এ charts বা complex structures থাকলে ব্যবহার করুন। |
| Beautify `Markdown` | Exported Markdown পড়তে সহজ করে। |

Regular screenshots-এর জন্য options minimal রাখুন। Document scans-এর জন্য document-related options বেশি enable করুন।

## Results দেখা

Recognition শেষ হলে dialog result দেখায়।

আপনি direct copy করতে পারেন বা export formats বেছে নিতে পারেন।

![PDF recognition](../../image/other/pdf识别截图.png)

Document pages-এর জন্য exported `PDF` page appearance preserve করতে পারে এবং text searchable রাখে। Scans archive করা এবং পরে content খোঁজার জন্য useful।

## Export Format নির্বাচন

| Format | Best For |
| --- | --- |
| `Markdown (.md)` | Notes, documentation systems এবং পরের editing। |
| `PDF (.pdf)` | Page appearance এবং scanned document results preserve করা। |
| `Word (.docx)` | Layout editing, text modification এবং অন্যদের handoff। |
| Export all | Multiple formats এবং original image save করে; important archives-এর জন্য suitable। |

শুধু text দরকার হলে Markdown export করুন।

Page appearance দরকার হলে PDF বা Word ব্যবহার করুন।

## Word Output

Exported Word documents office software দিয়ে খোলা এবং edit করা যায়।

![Word result](../../image/other/word识别结果.png)

কিছু documents-এর Word output-এ recognized images, headings এবং paragraphs থাকে।

Recognition quality original image clarity, model choice এবং document complexity-এর ওপর depend করে।

## OCR-এর জন্য ভালো File Types

| File Type | Recommendation |
| --- | --- |
| Clear screenshots | Direct recognize করুন। |
| Scans | `PP-StructureV3` prefer করুন। |
| Photographed documents | Orientation correction এবং document flattening enable করুন। |
| Tables, formulas, stamps | Structured models prefer করুন। |
| Simple short text images | `PP-OCRv5` সাধারণত যথেষ্ট। |

Straight text থাকা clearer images সাধারণত ভালো results দেয়।

## Common Cases

| Case | Meaning |
| --- | --- |
| Recognition fails | Service token বা key save আছে কি না check করুন। |
| Recognition slow | Complex documents এবং large images বেশি সময় নেয়। |
| Table incomplete | Structured model try করুন। |
| Text mistakes | Blur, glare এবং skew recognition errors বাড়ায়। Clearer image try করুন। |
| Word output-এ অনেক images | Structured models কিছু recognized images preserve করতে পারে। এটি normal। |

### Google Quota Query fail হলে

Check করুন:

1. Service account `JSON` import হয়েছে।
2. Service account-এর `Monitoring Viewer` role আছে।
3. Project-এ `Cloud Vision API` enabled।

শুধু OCR দরকার হলে usage query না করেও চলে; service account JSON ignore করে শুধু `Google Vision API Key` পূরণ করতে পারেন।

## Quick Flow

```text
System Settings খুলুন
-> Other Settings খুলুন
-> OCR service credentials পূরণ করুন
-> Save
-> File Management-এ ফিরে যান
-> File select করে OCR ক্লিক করুন
-> Model নির্বাচন করুন
-> Recognition শেষ হওয়ার অপেক্ষা করুন
-> Results copy করুন বা Markdown / PDF / Word export করুন
```
