# OCR

OCR متن را از images، scans و document screenshots استخراج می‌کند.

پس از recognition، می‌توانید result را copy کنید، به‌صورت `Markdown`، `PDF` یا `Word` export کنید، یا چند format را با هم package و download کنید.

## OCR چه کارهایی می‌تواند انجام دهد

| Feature | Description |
| --- | --- |
| Image text recognition | استخراج text از images، screenshots و scans. |
| Document layout recognition | مناسب‌تر برای tables، formulas، stamps و mixed text-image layouts. |
| Multiple services | پشتیبانی از Baidu PaddleOCR، Microsoft Azure Vision و Google Vision. |
| Copy results | copy کردن recognized text پس از processing. |
| Export files | export کردن `Markdown`، `PDF` و `Word`. |
| Batch packaging | پس از recognize کردن چند file، results را به‌صورت package download کنید. |

## ابتدا OCR Services را Configure کنید

باز کنید:

```text
System Settings -> Other Settings -> OCR
```

![IP geolocation and OCR](../../image/other/ip定位和ocr文字识别.png)

credentials مربوط به services موردنیاز را وارد کنید:

| Service | What To Enter | Best For |
| --- | --- | --- |
| Baidu PaddleOCR | `PaddleOCR Token` | انتخاب پیشنهادی اول. مناسب documents، images، tables و mixed layouts. |
| Microsoft Azure Vision | `Azure Vision Endpoint` و `Azure Vision API Key` | اگر از Microsoft cloud services استفاده می‌کنید مفید است. |
| Google Vision | `Google Vision API Key`. Service account `JSON` فقط برای quota query استفاده می‌شود. | اگر از Google Cloud services استفاده می‌کنید مفید است. |

بعد از پر کردن credentials، save کنید.

برای تست اولیه، configure کردن یک service کافی است. لازم نیست هر سه را داشته باشید.

## Google Vision Setup

Google setup دو بخش دارد:

| Goal | Requirement |
| --- | --- |
| استفاده از OCR | `Cloud Vision API` را enable کنید و سپس `API Key` بسازید. |
| query کردن usage | service account بسازید، `Monitoring Viewer` بدهید، سپس service account `JSON` را download کنید. |

![Google API key and service account](../../image/other/谷歌api秘钥和服务账号截图.png)

### استفاده از Google برای OCR

1. Google Cloud Console را باز کنید.
2. به `APIs & Services` بروید.
3. `Library` را باز کنید، `Cloud Vision API` را جست‌وجو و enable کنید.
4. به `Credentials` برگردید.
5. `API Key` بسازید.
6. API Key را باز و copy کنید.
7. در ImgBed داخل `Google Vision API Key` paste کنید.
8. Save کنید.

بعد از آن می‌توانید Google Vision را در OCR dialog انتخاب کنید.

### Query کردن Google Usage

Quota query برای recognition لازم نیست.

فقط حدوداً نشان می‌دهد در 30 روز گذشته چند Google Vision call استفاده شده است.

1. در Google Cloud Console، `IAM & Admin` را باز کنید.
2. `Service Accounts` را باز کنید.
3. service account بسازید، مثل `vision-monitor`.
4. role `Monitoring Viewer` را به آن بدهید.
5. جزئیات service account را باز کنید و key بسازید.
6. `JSON` را انتخاب کنید.
7. generated JSON file را download کنید.
8. به ImgBed برگردید و آن را زیر service account `JSON` import کنید (اختیاری).
9. پس از موفقیت import، quota query را بزنید.

پس از import، ImgBed نام project مالک service account را نشان می‌دهد. هنگام query usage، ImgBed Google monitoring data را می‌خواند و call count این ماه را نشان می‌دهد.

خلاصه:

| Item | Purpose |
| --- | --- |
| `Google Vision API Key` | OCR recognition را اجرا می‌کند. |
| Service account `JSON` | تعداد Google Vision calls استفاده‌شده را query می‌کند. |
| `Monitoring Viewer` role | اجازه می‌دهد service account usage data را بخواند. |

## گرفتن Baidu PaddleOCR Token

Baidu PaddleOCR به access token نیاز دارد.

![Get PaddleOCR token](../../image/other/获取飞浆令牌.png)

در صفحه Baidu PaddleOCR، پنجره `API` call را باز کنید، برای گرفتن token کلیک کنید و آن را copy کنید.

به ImgBed برگردید، داخل `PaddleOCR Token` paste کنید و save کنید.

## شروع Recognition

در File Management، یک image یا document screenshot انتخاب کنید و `OCR` را بزنید.

![OCR recognition](../../image/other/ocr识别截图.png)

در dialog، recognition service و model را انتخاب کنید.

مدل‌های رایج PaddleOCR:

| Model | Best For |
| --- | --- |
| `PP-StructureV3` | default پیشنهادی. مناسب documents، tables، formulas، stamps و mixed layouts. |
| `PP-OCRv5` | simple images، ordinary text و lightweight recognition. |
| `PaddleOCR-VL` | multilingual، complex images و chart-like content. |
| `PaddleOCR-VL-1.5` | document pages پیچیده‌تر و layout recovery. |

اگر مطمئن نیستید، با `PP-StructureV3` شروع کنید.

## Advanced Options

| Option | Description |
| --- | --- |
| Orientation correction | وقتی image چرخیده یا skewed است. |
| Document flattening | برای photographed documents با curvature یا tilt. |
| Layout detection | وقتی می‌خواهید headings، paragraphs، tables و image structure حفظ شود. |
| Chart recognition | وقتی image شامل charts یا structures پیچیده است. |
| Beautify `Markdown` | exported Markdown را خواناتر می‌کند. |

برای screenshots عادی، options را حداقلی نگه دارید. برای document scans، گزینه‌های مرتبط با document را بیشتر enable کنید.

## مشاهده Results

پس از پایان recognition، dialog result را نشان می‌دهد.

می‌توانید آن را مستقیم copy کنید یا export formats را انتخاب کنید.

![PDF recognition](../../image/other/pdf识别截图.png)

برای document pages، exported `PDF` می‌تواند ظاهر page را حفظ کند و text را searchable نگه دارد. برای archive کردن scans و پیدا کردن content بعداً مفید است.

## انتخاب Export Format

| Format | Best For |
| --- | --- |
| `Markdown (.md)` | notes، documentation systems و later editing. |
| `PDF (.pdf)` | حفظ ظاهر page و scanned document results. |
| `Word (.docx)` | ادامه layout editing، text modification و handoff به دیگران. |
| Export all | ذخیره multiple formats و original image، مناسب archives مهم. |

اگر فقط text می‌خواهید، Markdown export کنید.

اگر ظاهر page مهم است، PDF یا Word استفاده کنید.

## Word Output

exported Word documents با office software قابل باز کردن و edit هستند.

![Word result](../../image/other/word识别结果.png)

بعضی documents شامل recognized images، headings و paragraphs در Word output هستند.

recognition quality به original image clarity، model choice و document complexity بستگی دارد.

## بهترین File Types برای OCR

| File Type | Recommendation |
| --- | --- |
| Clear screenshots | مستقیم recognize کنید. |
| Scans | `PP-StructureV3` را ترجیح دهید. |
| Photographed documents | orientation correction و document flattening را enable کنید. |
| Tables, formulas, stamps | structured models را ترجیح دهید. |
| Simple short text images | `PP-OCRv5` معمولاً کافی است. |

images واضح‌تر با text صاف‌تر معمولاً result بهتری می‌دهند.

## Common Cases

| Case | Meaning |
| --- | --- |
| Recognition fails | بررسی کنید service token یا key ذخیره شده باشد. |
| Recognition slow است | documents پیچیده و images بزرگ زمان بیشتری می‌برند. |
| Table incomplete است | یک structured model امتحان کنید. |
| Text mistakes دارد | blur، glare و skew خطا را زیاد می‌کنند. image واضح‌تر امتحان کنید. |
| Word output images زیادی دارد | structured models ممکن است بعضی recognized images را حفظ کنند. این عادی است. |

### Google Quota Query Fail می‌شود

بررسی کنید:

1. Service account `JSON` import شده باشد.
2. service account role `Monitoring Viewer` داشته باشد.
3. `Cloud Vision API` برای project enabled باشد.

اگر فقط OCR لازم دارید و usage query نمی‌خواهید، می‌توانید service account JSON را نادیده بگیرید و فقط `Google Vision API Key` را وارد کنید.

## Quick Flow

```text
System Settings را باز کنید
-> Other Settings را باز کنید
-> OCR service credentials را وارد کنید
-> Save
-> به File Management برگردید
-> file را انتخاب کنید و OCR را بزنید
-> model را انتخاب کنید
-> منتظر recognition بمانید
-> results را copy کنید یا Markdown / PDF / Word export کنید
```
