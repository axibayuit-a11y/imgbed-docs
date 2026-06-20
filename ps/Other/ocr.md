# OCR

OCR له images، scans او document screenshots څخه text استخراجوي.

له recognition وروسته result copy کولای شئ، یا یې د `Markdown`، `PDF` یا `Word` په توګه export کولای شئ، او څو formats یو ځای package او download کولای شئ.

## OCR څه کولای شي

| Feature | تشریح |
| --- | --- |
| Image text recognition | له images، screenshots او scans څخه text استخراجوي. |
| Document layout recognition | د tables، formulas، stamps او ګډ text-image layouts لپاره ښه دی. |
| Multiple services | Baidu PaddleOCR، Microsoft Azure Vision او Google Vision ملاتړ کوي. |
| Copy results | له processing وروسته recognized text copy کړئ. |
| Export files | `Markdown`، `PDF` او `Word` export کړئ. |
| Batch packaging | د څو files له recognize وروسته results د package په توګه download کړئ. |

## لومړی OCR Services تنظیم کړئ

دا پرانیزئ:

```text
System Settings -> Other Settings -> OCR
```

![IP geolocation and OCR](../../image/other/ip定位和ocr文字识别.png)

د هغو services credentials ډک کړئ چې کارول یې غواړئ:

| Service | څه ولیکئ | Best For |
| --- | --- | --- |
| Baidu PaddleOCR | `PaddleOCR Token` | لومړی انتخاب یې سپارښتنه کېږي. د documents، images، tables او mixed layouts لپاره ښه دی. |
| Microsoft Azure Vision | `Azure Vision Endpoint` او `Azure Vision API Key` | که Microsoft cloud services کاروئ، ګټور دی. |
| Google Vision | `Google Vision API Key`. Service account `JSON` یوازې د quota query لپاره کارېږي. | که Google Cloud services کاروئ، ګټور دی. |

له credentials ډکولو وروسته save وکړئ.

د لومړنۍ ازموینې لپاره یوازې یو service تنظیمولای شئ. درې واړه اړین نه دي.

## Google Vision Setup

Google setup دوه برخې لري:

| Goal | Requirement |
| --- | --- |
| OCR کارول | `Cloud Vision API` enable کړئ، بیا `API Key` جوړ کړئ. |
| usage query | service account جوړ کړئ، `Monitoring Viewer` ورکړئ، بیا service account `JSON` download کړئ. |

![Google API key and service account](../../image/other/谷歌api秘钥和服务账号截图.png)

### Google د OCR لپاره وکاروئ

1. Google Cloud Console پرانیزئ.
2. `APIs & Services` ته لاړ شئ.
3. `Library` پرانیزئ، `Cloud Vision API` ولټوئ او enable یې کړئ.
4. بېرته `Credentials` ته راشئ.
5. `API Key` جوړ کړئ.
6. API Key پرانیزئ او copy یې کړئ.
7. په ImgBed کې یې `Google Vision API Key` ته paste کړئ.
8. save کړئ.

بیا د OCR dialog کې Google Vision ټاکلای شئ.

### د Google Usage Query

Quota query د recognition لپاره اړینه نه ده.

دا یوازې ښيي چې په تېرو 30 ورځو کې شاوخوا څو Google Vision calls کارول شوي دي.

1. په Google Cloud Console کې `IAM & Admin` پرانیزئ.
2. `Service Accounts` پرانیزئ.
3. service account جوړ کړئ، لکه `vision-monitor`.
4. `Monitoring Viewer` role ورکړئ.
5. د service account details پرانیزئ او key جوړ کړئ.
6. `JSON` وټاکئ.
7. generated JSON file download کړئ.
8. بېرته ImgBed ته راشئ او د service account `JSON` لاندې یې import کړئ (اختیاري).
9. د import له بریا وروسته quota query کلیک کړئ.

له import وروسته، ImgBed هغه project name ښيي چې service account پورې تړاو لري. د usage query پر وخت، ImgBed Google monitoring data لولي او د دې میاشت call count ښيي.

په لنډه توګه:

| Item | موخه |
| --- | --- |
| `Google Vision API Key` | OCR recognition اجرا کوي. |
| Service account `JSON` | ګوري چې څو Google Vision calls کارول شوي دي. |
| `Monitoring Viewer` role | service account ته د usage data د لوستلو اجازه ورکوي. |

## Baidu PaddleOCR Token اخیستل

Baidu PaddleOCR access token غواړي.

![Get PaddleOCR token](../../image/other/获取飞浆令牌.png)

د Baidu PaddleOCR page کې د `API` call window پرانیزئ، د token اخیستلو لپاره کلیک وکړئ، بیا یې copy کړئ.

بېرته ImgBed ته راشئ، په `PaddleOCR Token` کې یې paste او save کړئ.

## Recognition پیلول

په File Management کې image یا document screenshot وټاکئ او `OCR` کلیک کړئ.

![OCR recognition](../../image/other/ocr识别截图.png)

په dialog کې recognition service او model وټاکئ.

عام PaddleOCR model choices:

| Model | Best For |
| --- | --- |
| `PP-StructureV3` | سپارښتل شوی default. د documents، tables، formulas، stamps او mixed layouts لپاره ښه دی. |
| `PP-OCRv5` | ساده images، عادي text او lightweight recognition. |
| `PaddleOCR-VL` | multilingual، complex images او chart-like content. |
| `PaddleOCR-VL-1.5` | ډېر complex document pages او layout recovery. |

که ډاډه نه یاست، له `PP-StructureV3` څخه پیل وکړئ.

## Advanced Options

| Option | تشریح |
| --- | --- |
| Orientation correction | کله وکاروئ چې image rotated یا skewed وي. |
| Document flattening | د curvature یا tilt لرونکو photographed documents لپاره. |
| Layout detection | کله چې headings، paragraphs، tables او image structure ساتل غواړئ. |
| Chart recognition | کله چې image charts یا complex structures ولري. |
| Beautify `Markdown` | exported Markdown لوستل اسانه کوي. |

د عادي screenshots لپاره options کم وساتئ. د document scans لپاره نور document-related options فعال کړئ.

## Results لیدل

له recognition وروسته dialog result ښيي.

مستقیم یې copy کولای شئ یا export formats ټاکلای شئ.

![PDF recognition](../../image/other/pdf识别截图.png)

د document pages لپاره، exported `PDF` د page appearance ساتلی شي او text searchable پرېږدي. دا د scans archive کولو او وروسته content موندلو لپاره ګټور دی.

## Export Format ټاکل

| Format | Best For |
| --- | --- |
| `Markdown (.md)` | notes، documentation systems او وروسته editing. |
| `PDF (.pdf)` | د page appearance او scanned document results ساتل. |
| `Word (.docx)` | layout editing ته دوام، text modification او نورو ته handoff. |
| Export all | څو formats او original image خوندي کوي، د مهمو archives لپاره مناسب دی. |

که یوازې text ته اړتیا لرئ، Markdown export کړئ.

که page appearance ته اړتیا لرئ، PDF یا Word وکاروئ.

## Word Output

Exported Word documents د office software له لارې پرانیستل او edit کېدای شي.

![Word result](../../image/other/word识别结果.png)

ځینې documents په Word output کې recognized images، headings او paragraphs لري.

Recognition quality د original image clarity، model choice او document complexity پورې تړلې ده.

## د OCR لپاره غوره File Types

| File Type | سپارښتنه |
| --- | --- |
| Clear screenshots | مستقیم recognize کړئ. |
| Scans | `PP-StructureV3` ته ترجیح ورکړئ. |
| Photographed documents | orientation correction او document flattening فعال کړئ. |
| Tables, formulas, stamps | structured models ته ترجیح ورکړئ. |
| Simple short text images | `PP-OCRv5` عموما بس وي. |

روښانه images چې text یې مستقیم وي، عموما غوره results ورکوي.

## Common Cases

| Case | معنا |
| --- | --- |
| Recognition fails | وګورئ service token یا key save شوی دی. |
| Recognition is slow | complex documents او لوی images ډېر وخت نیسي. |
| Table incomplete دی | structured model وازمویئ. |
| Text mistakes لري | blur، glare او skew recognition errors زیاتوي. روښانه image وازمویئ. |
| Word output ډېر images لري | structured models ښايي ځینې recognized images وساتي. دا عادي ده. |

### Google Quota Query ناکامېږي

وګورئ:

1. Service account `JSON` import شوی دی.
2. service account د `Monitoring Viewer` role لري.
3. `Cloud Vision API` د project لپاره enabled دی.

که یوازې OCR ته اړتیا لرئ او usage query نه غواړئ، service account JSON ignore کولای شئ او یوازې `Google Vision API Key` ډک کړئ.

## چټک بهیر

```text
Open System Settings
-> Open Other Settings
-> Fill OCR service credentials
-> Save
-> Return to File Management
-> Select a file and click OCR
-> Choose a model
-> Wait for recognition
-> Copy results or export Markdown / PDF / Word
```
