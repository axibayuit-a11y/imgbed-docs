# OCR

OCR က images, scans, document screenshots ထဲက text ကို extract လုပ်ပါတယ်။

recognition ပြီးနောက် result ကို copy လုပ်နိုင်ပြီး `Markdown`, `PDF`, `Word` အဖြစ် export လုပ်နိုင်ပါတယ်။ formats အများကြီးကို package တစ်ခုအဖြစ် download လုပ်နိုင်ပါတယ်။

## OCR က ဘာလုပ်နိုင်လဲ

| Feature | Description |
| --- | --- |
| Image text recognition | images, screenshots, scans ထဲက text ကို extract လုပ်သည်။ |
| Document layout recognition | tables, formulas, stamps, mixed text-image layouts အတွက်ပိုသင့်တော်သည်။ |
| Multiple services | Baidu PaddleOCR, Microsoft Azure Vision, Google Vision support လုပ်သည်။ |
| Copy results | processing ပြီးနောက် recognized text copy လုပ်နိုင်သည်။ |
| Export files | `Markdown`, `PDF`, `Word` export လုပ်နိုင်သည်။ |
| Batch packaging | files အများကြီး recognize ပြီးနောက် results ကို package အဖြစ် download လုပ်နိုင်သည်။ |

## OCR Services ကိုအရင် Configure လုပ်ပါ

ဖွင့်ပါ:

```text
System Settings -> Other Settings -> OCR
```

![IP geolocation and OCR](../../image/other/ip定位和ocr文字识别.png)

သုံးချင်တဲ့ services အတွက် credentials ဖြည့်ပါ:

| Service | What To Enter | Best For |
| --- | --- | --- |
| Baidu PaddleOCR | `PaddleOCR Token` | ပထမဦးဆုံးအကြံပြုသောရွေးချယ်မှု။ documents, images, tables, mixed layouts အတွက်ကောင်းသည်။ |
| Microsoft Azure Vision | `Azure Vision Endpoint` နဲ့ `Azure Vision API Key` | Microsoft cloud services သုံးပြီးသားဖြစ်လျှင်အသုံးဝင်သည်။ |
| Google Vision | `Google Vision API Key`။ Service account `JSON` ကို quota query အတွက်သာသုံးသည်။ | Google Cloud services သုံးလျှင်အသုံးဝင်သည်။ |

credentials ဖြည့်ပြီးနောက် save လုပ်ပါ။

initial testing အတွက် service တစ်ခုပဲ configure လုပ်ရင်လုံလောက်ပါတယ်။ သုံးခုလုံးမလိုပါ။

## Google Vision Setup

Google setup မှာ အပိုင်းနှစ်ပိုင်းရှိပါတယ်:

| Goal | Requirement |
| --- | --- |
| OCR သုံးရန် | `Cloud Vision API` enable လုပ်ပြီး `API Key` ဖန်တီးပါ။ |
| usage query လုပ်ရန် | service account ဖန်တီးပါ၊ `Monitoring Viewer` grant လုပ်ပါ၊ service account `JSON` download လုပ်ပါ။ |

![Google API key and service account](../../image/other/谷歌api秘钥和服务账号截图.png)

### Google ကို OCR အတွက်သုံးခြင်း

1. Google Cloud Console ကိုဖွင့်ပါ။
2. `APIs & Services` ကိုသွားပါ။
3. `Library` ကိုဖွင့်ပြီး `Cloud Vision API` ရှာကာ enable လုပ်ပါ။
4. `Credentials` ကိုပြန်သွားပါ။
5. `API Key` ဖန်တီးပါ။
6. API Key ကိုဖွင့်ပြီး copy လုပ်ပါ။
7. ImgBed ထဲက `Google Vision API Key` မှာ paste လုပ်ပါ။
8. Save လုပ်ပါ။

ပြီးရင် OCR dialog မှာ Google Vision ကိုရွေးနိုင်ပါပြီ။

### Google Usage Query

Quota query က recognition အတွက် required မဟုတ်ပါ။

ပြီးခဲ့တဲ့ 30 days အတွင်း Google Vision calls ဘယ်လောက်သုံးထားလဲဆိုတာ rough count ပြတာပါ။

1. Google Cloud Console မှာ `IAM & Admin` ကိုဖွင့်ပါ။
2. `Service Accounts` ကိုဖွင့်ပါ။
3. service account ဖန်တီးပါ၊ ဥပမာ `vision-monitor`။
4. `Monitoring Viewer` role ပေးပါ။
5. service account details ကိုဖွင့်ပြီး key ဖန်တီးပါ။
6. `JSON` ရွေးပါ။
7. generated JSON file ကို download လုပ်ပါ။
8. ImgBed ကိုပြန်သွားပြီး service account `JSON` အောက်မှာ import လုပ်ပါ (optional)။
9. import အောင်မြင်ပြီးနောက် quota query ကိုနှိပ်ပါ။

import ပြီးနောက် ImgBed က service account ပိုင်တဲ့ project name ကိုပြပါမယ်။ usage query လုပ်တဲ့အခါ ImgBed က Google monitoring data ကိုဖတ်ပြီး ဒီလရဲ့ call count ကိုပြပါမယ်။

အတိုချုပ်:

| Item | Purpose |
| --- | --- |
| `Google Vision API Key` | OCR recognition လုပ်သည်။ |
| Service account `JSON` | Google Vision calls သုံးစွဲမှု query လုပ်သည်။ |
| `Monitoring Viewer` role | service account ကို usage data ဖတ်ခွင့်ပေးသည်။ |

## Baidu PaddleOCR Token ရယူပါ

Baidu PaddleOCR က access token လိုပါတယ်။

![Get PaddleOCR token](../../image/other/获取飞浆令牌.png)

Baidu PaddleOCR page မှာ `API` call window ဖွင့်ပါ၊ token ရယူရန် click လုပ်ပြီး copy လုပ်ပါ။

ImgBed ကိုပြန်သွားပြီး `PaddleOCR Token` ထဲ paste လုပ်ကာ save လုပ်ပါ။

## Recognition စတင်ခြင်း

File Management မှာ image သို့မဟုတ် document screenshot တစ်ခုရွေးပြီး `OCR` ကိုနှိပ်ပါ။

![OCR recognition](../../image/other/ocr识别截图.png)

dialog မှာ recognition service နဲ့ model ရွေးပါ။

Common PaddleOCR model choices:

| Model | Best For |
| --- | --- |
| `PP-StructureV3` | recommended default။ documents, tables, formulas, stamps, mixed layouts အတွက်ကောင်းသည်။ |
| `PP-OCRv5` | simple images, ordinary text, lightweight recognition။ |
| `PaddleOCR-VL` | multilingual, complex images, chart-like content။ |
| `PaddleOCR-VL-1.5` | ပိုရှုပ်တဲ့ document pages နဲ့ layout recovery။ |

မသေချာလျှင် `PP-StructureV3` နဲ့စပါ။

## Advanced Options

| Option | Description |
| --- | --- |
| Orientation correction | image လှည့်နေသို့မဟုတ် skewed ဖြစ်နေတဲ့အခါသုံးပါ။ |
| Document flattening | photographed documents မှာ curvature သို့မဟုတ် tilt ရှိတဲ့အခါသုံးပါ။ |
| Layout detection | headings, paragraphs, tables, image structure ကို preserve လုပ်ချင်တဲ့အခါသုံးပါ။ |
| Chart recognition | image ထဲ charts သို့မဟုတ် complex structures ပါတဲ့အခါသုံးပါ။ |
| Beautify `Markdown` | exported Markdown ကိုပိုဖတ်လွယ်စေသည်။ |

regular screenshots အတွက် options နည်းနည်းပဲထားပါ။ document scans အတွက် document-related options ပို enable လုပ်ပါ။

## Results ကြည့်ခြင်း

recognition ပြီးနောက် dialog မှာ result ပြပါမယ်။

တိုက်ရိုက် copy လုပ်နိုင်သလို export formats ရွေးနိုင်ပါတယ်။

![PDF recognition](../../image/other/pdf识别截图.png)

document pages အတွက် exported `PDF` က page appearance ကိုထိန်းထားပြီး text ကို searchable ဖြစ်စေနိုင်ပါတယ်။ scans archive လုပ်ရန်နဲ့ နောက်ပိုင်း content ရှာရန်အသုံးဝင်ပါတယ်။

## Export Format ရွေးခြင်း

| Format | Best For |
| --- | --- |
| `Markdown (.md)` | notes, documentation systems, later editing။ |
| `PDF (.pdf)` | page appearance နဲ့ scanned document results ထိန်းရန်။ |
| `Word (.docx)` | layout editing ဆက်လုပ်ရန်၊ text modification, handoff။ |
| Export all | multiple formats နဲ့ original image သိမ်းရန်၊ important archives အတွက်သင့်တော်သည်။ |

text ပဲလိုလျှင် Markdown export လုပ်ပါ။

page appearance လိုလျှင် PDF သို့မဟုတ် Word သုံးပါ။

## Word Output

exported Word documents တွေကို office software နဲ့ဖွင့်ပြီး edit လုပ်နိုင်ပါတယ်။

![Word result](../../image/other/word识别结果.png)

documents အချို့မှာ Word output ထဲ recognized images, headings, paragraphs ပါနိုင်ပါတယ်။

recognition quality က original image clarity, model choice, document complexity အပေါ်မူတည်ပါတယ်။

## OCR အတွက်သင့်တော်တဲ့ File Types

| File Type | Recommendation |
| --- | --- |
| Clear screenshots | တိုက်ရိုက် recognize လုပ်ပါ။ |
| Scans | `PP-StructureV3` ကိုဦးစားပေးပါ။ |
| Photographed documents | orientation correction နဲ့ document flattening enable လုပ်ပါ။ |
| Tables, formulas, stamps | structured models ကိုဦးစားပေးပါ။ |
| Simple short text images | `PP-OCRv5` ကများသောအားဖြင့်လုံလောက်သည်။ |

ပိုရှင်းတဲ့ images နဲ့ text ပိုတန်းတာက results ပိုကောင်းစေပါတယ်။

## Common Cases

| Case | Meaning |
| --- | --- |
| Recognition fails | service token သို့မဟုတ် key save လုပ်ထားလားစစ်ပါ။ |
| Recognition slow | complex documents နဲ့ large images တွေကအချိန်ပိုယူပါတယ်။ |
| Table incomplete | structured model တစ်ခုစမ်းပါ။ |
| Text mistakes | blur, glare, skew တို့က errors တိုးစေပါတယ်။ clearer image စမ်းပါ။ |
| Word output မှာ images များ | structured models က recognized images အချို့ကို preserve လုပ်နိုင်ပါတယ်။ ဒါက normal ဖြစ်ပါတယ်။ |

### Google Quota Query Fail ဖြစ်သည်

စစ်ပါ:

1. Service account `JSON` import လုပ်ထားလား။
2. service account မှာ `Monitoring Viewer` role ရှိလား။
3. project အတွက် `Cloud Vision API` enabled ဖြစ်လား။

OCR ပဲလိုပြီး usage query မလိုလျှင် service account JSON ကိုထားခဲ့ပြီး `Google Vision API Key` ပဲဖြည့်နိုင်ပါတယ်။

## Quick Flow

```text
System Settings ဖွင့်ပါ
-> Other Settings ဖွင့်ပါ
-> OCR service credentials ဖြည့်ပါ
-> Save
-> File Management ကိုပြန်သွားပါ
-> file ရွေးပြီး OCR နှိပ်ပါ
-> model ရွေးပါ
-> recognition ပြီးအောင်စောင့်ပါ
-> results copy လုပ်ပါ သို့မဟုတ် Markdown / PDF / Word export လုပ်ပါ
```
