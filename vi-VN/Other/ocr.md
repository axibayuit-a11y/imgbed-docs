# OCR

OCR trích xuất text từ images, scans và document screenshots.

Sau recognition, bạn có thể copy result, export thành `Markdown`, `PDF` hoặc `Word`, hoặc package nhiều formats lại để download.

## OCR làm được gì

| Feature | Description |
| --- | --- |
| Image text recognition | Extract text từ images, screenshots và scans. |
| Document layout recognition | Tốt hơn cho tables, formulas, stamps và mixed text-image layouts. |
| Multiple services | Hỗ trợ Baidu PaddleOCR, Microsoft Azure Vision và Google Vision. |
| Copy results | Copy recognized text sau khi processing. |
| Export files | Export `Markdown`, `PDF` và `Word`. |
| Batch packaging | Sau khi recognize nhiều files, download results dưới dạng package. |

## Cấu hình OCR Services trước

Mở:

```text
System Settings -> Other Settings -> OCR
```

![IP geolocation and OCR](../../image/other/ip定位和ocr文字识别.png)

Điền credentials cho services bạn muốn dùng:

| Service | What To Enter | Best For |
| --- | --- | --- |
| Baidu PaddleOCR | `PaddleOCR Token` | Recommended first choice. Tốt cho documents, images, tables và mixed layouts. |
| Microsoft Azure Vision | `Azure Vision Endpoint` và `Azure Vision API Key` | Hữu ích nếu bạn đã dùng Microsoft cloud services. |
| Google Vision | `Google Vision API Key`. Service account `JSON` chỉ dùng cho quota query. | Hữu ích nếu bạn dùng Google Cloud services. |

Điền credentials xong thì save.

Bạn chỉ cần cấu hình một service để test ban đầu. Không cần cả ba.

## Google Vision Setup

Google setup có hai phần:

| Goal | Requirement |
| --- | --- |
| Dùng OCR | Enable `Cloud Vision API`, rồi tạo `API Key`. |
| Query usage | Tạo service account, grant `Monitoring Viewer`, rồi download service account `JSON`. |

![Google API key and service account](../../image/other/谷歌api秘钥和服务账号截图.png)

### Dùng Google cho OCR

1. Mở Google Cloud Console.
2. Vào `APIs & Services`.
3. Mở `Library`, tìm `Cloud Vision API` và enable.
4. Quay lại `Credentials`.
5. Tạo một `API Key`.
6. Mở API Key và copy.
7. Paste vào `Google Vision API Key` trong ImgBed.
8. Save.

Sau đó bạn có thể chọn Google Vision trong OCR dialog.

### Query Google Usage

Quota query không required cho recognition.

Nó chỉ hiển thị sơ bộ số Google Vision calls đã dùng trong 30 ngày gần nhất.

1. Trong Google Cloud Console, mở `IAM & Admin`.
2. Mở `Service Accounts`.
3. Tạo service account, ví dụ `vision-monitor`.
4. Grant role `Monitoring Viewer`.
5. Mở service account details và create key.
6. Chọn `JSON`.
7. Download generated JSON file.
8. Quay lại ImgBed và import dưới service account `JSON` (optional).
9. Sau khi import thành công, nhấn quota query.

Sau import, ImgBed hiển thị project name sở hữu service account. Khi query usage, ImgBed đọc Google monitoring data và hiển thị call count của tháng này.

Tóm lại:

| Item | Purpose |
| --- | --- |
| `Google Vision API Key` | Thực hiện OCR recognition. |
| Service account `JSON` | Query số Google Vision calls đã dùng. |
| `Monitoring Viewer` role | Cho phép service account đọc usage data. |

## Lấy Baidu PaddleOCR Token

Baidu PaddleOCR cần access token.

![Get PaddleOCR token](../../image/other/获取飞浆令牌.png)

Mở cửa sổ `API` call trên trang Baidu PaddleOCR, click để lấy token, rồi copy.

Quay lại ImgBed, paste vào `PaddleOCR Token`, rồi save.

## Bắt đầu Recognition

Trong File Management, chọn image hoặc document screenshot và nhấn `OCR`.

![OCR recognition](../../image/other/ocr识别截图.png)

Trong dialog, chọn recognition service và model.

Common PaddleOCR model choices:

| Model | Best For |
| --- | --- |
| `PP-StructureV3` | Recommended default. Tốt cho documents, tables, formulas, stamps và mixed layouts. |
| `PP-OCRv5` | Simple images, ordinary text và lightweight recognition. |
| `PaddleOCR-VL` | Multilingual, complex images và chart-like content. |
| `PaddleOCR-VL-1.5` | Document pages phức tạp hơn và layout recovery. |

Nếu chưa chắc, bắt đầu với `PP-StructureV3`.

## Advanced Options

| Option | Description |
| --- | --- |
| Orientation correction | Dùng khi image bị xoay hoặc nghiêng. |
| Document flattening | Dùng cho photographed documents có cong hoặc nghiêng. |
| Layout detection | Dùng khi muốn preserve headings, paragraphs, tables và image structure. |
| Chart recognition | Dùng khi image có charts hoặc structures phức tạp. |
| Beautify `Markdown` | Làm exported Markdown dễ đọc hơn. |

Với regular screenshots, giữ options tối giản. Với document scans, bật thêm document-related options.

## Xem Results

Sau khi recognition xong, dialog hiển thị result.

Bạn có thể copy trực tiếp hoặc chọn export formats.

![PDF recognition](../../image/other/pdf识别截图.png)

Với document pages, exported `PDF` có thể preserve page appearance và vẫn giữ text searchable. Điều này hữu ích để archive scans và tìm content sau này.

## Chọn Export Format

| Format | Best For |
| --- | --- |
| `Markdown (.md)` | Notes, documentation systems và chỉnh sửa sau này. |
| `PDF (.pdf)` | Preserve page appearance và scanned document results. |
| `Word (.docx)` | Layout editing, text modification và handoff cho người khác. |
| Export all | Save nhiều formats và original image, phù hợp với archives quan trọng. |

Nếu chỉ cần text, export Markdown.

Nếu cần page appearance, dùng PDF hoặc Word.

## Word Output

Exported Word documents có thể mở và edit bằng office software.

![Word result](../../image/other/word识别结果.png)

Một số documents có recognized images, headings và paragraphs trong Word output.

Recognition quality phụ thuộc vào original image clarity, model choice và document complexity.

## File Types phù hợp với OCR

| File Type | Recommendation |
| --- | --- |
| Clear screenshots | Recognize trực tiếp. |
| Scans | Ưu tiên `PP-StructureV3`. |
| Photographed documents | Enable orientation correction và document flattening. |
| Tables, formulas, stamps | Ưu tiên structured models. |
| Simple short text images | `PP-OCRv5` thường đủ. |

Images càng rõ và text càng thẳng thì results thường càng tốt.

## Common Cases

| Case | Meaning |
| --- | --- |
| Recognition fails | Kiểm tra service token hoặc key đã save chưa. |
| Recognition slow | Complex documents và large images mất thời gian hơn. |
| Table incomplete | Thử structured model. |
| Text có lỗi | Blur, glare và skew làm tăng recognition errors. Thử image rõ hơn. |
| Word output có nhiều images | Structured models có thể preserve một số recognized images. Đây là bình thường. |

### Google Quota Query Fails

Kiểm tra:

1. Service account `JSON` đã được import.
2. Service account có role `Monitoring Viewer`.
3. `Cloud Vision API` đã enabled cho project.

Nếu chỉ cần OCR và không cần usage query, có thể bỏ qua service account JSON và chỉ điền `Google Vision API Key`.

## Quick Flow

```text
Mở System Settings
-> Mở Other Settings
-> Điền OCR service credentials
-> Save
-> Quay lại File Management
-> Chọn file và nhấn OCR
-> Chọn model
-> Chờ recognition
-> Copy results hoặc export Markdown / PDF / Word
```
