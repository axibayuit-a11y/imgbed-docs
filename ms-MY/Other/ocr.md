# OCR

OCR mengekstrak text daripada images, scans dan document screenshots.

Selepas recognition, anda boleh copy result, export sebagai `Markdown`, `PDF` atau `Word`, atau package beberapa formats bersama untuk download.

## Fungsi OCR

| Feature | Description |
| --- | --- |
| Image text recognition | Mengekstrak text daripada images, screenshots dan scans. |
| Document layout recognition | Lebih baik untuk tables, formulas, stamps dan mixed text-image layouts. |
| Multiple services | Menyokong Baidu PaddleOCR, Microsoft Azure Vision dan Google Vision. |
| Copy results | Copy recognized text selepas processing. |
| Export files | Export `Markdown`, `PDF` dan `Word`. |
| Batch packaging | Selepas recognize beberapa files, download results sebagai package. |

## Configure OCR Services Dahulu

Buka:

```text
System Settings -> Other Settings -> OCR
```

![IP geolocation and OCR](../../image/other/ip定位和ocr文字识别.png)

Isi credentials untuk services yang mahu digunakan:

| Service | What To Enter | Best For |
| --- | --- | --- |
| Baidu PaddleOCR | `PaddleOCR Token` | Recommended first choice. Baik untuk documents, images, tables dan mixed layouts. |
| Microsoft Azure Vision | `Azure Vision Endpoint` dan `Azure Vision API Key` | Berguna jika anda sudah menggunakan Microsoft cloud services. |
| Google Vision | `Google Vision API Key`. Service account `JSON` hanya digunakan untuk quota query. | Berguna jika anda menggunakan Google Cloud services. |

Save selepas mengisi credentials.

Untuk initial testing, configure satu service sahaja sudah cukup. Tidak perlu ketiga-tiganya.

## Google Vision Setup

Google setup mempunyai dua bahagian:

| Goal | Requirement |
| --- | --- |
| Menggunakan OCR | Enable `Cloud Vision API`, kemudian cipta `API Key`. |
| Query usage | Cipta service account, grant `Monitoring Viewer`, kemudian download service account `JSON`. |

![Google API key and service account](../../image/other/谷歌api秘钥和服务账号截图.png)

### Gunakan Google Untuk OCR

1. Buka Google Cloud Console.
2. Pergi ke `APIs & Services`.
3. Buka `Library`, cari `Cloud Vision API` dan enable.
4. Kembali ke `Credentials`.
5. Cipta `API Key`.
6. Buka API Key dan copy.
7. Paste ke `Google Vision API Key` dalam ImgBed.
8. Save.

Selepas itu, anda boleh memilih Google Vision dalam OCR dialog.

### Query Google Usage

Quota query tidak required untuk recognition.

Ia hanya menunjukkan anggaran berapa banyak Google Vision calls digunakan dalam 30 hari terakhir.

1. Dalam Google Cloud Console, buka `IAM & Admin`.
2. Buka `Service Accounts`.
3. Cipta service account, contohnya `vision-monitor`.
4. Grant role `Monitoring Viewer`.
5. Buka service account details dan create key.
6. Pilih `JSON`.
7. Download generated JSON file.
8. Kembali ke ImgBed dan import di bawah service account `JSON` (optional).
9. Selepas import berjaya, klik quota query.

Selepas import, ImgBed menunjukkan project name yang memiliki service account. Semasa query usage, ImgBed membaca Google monitoring data dan menunjukkan call count bulan ini.

Ringkasnya:

| Item | Purpose |
| --- | --- |
| `Google Vision API Key` | Melakukan OCR recognition. |
| Service account `JSON` | Query berapa banyak Google Vision calls digunakan. |
| `Monitoring Viewer` role | Membenarkan service account membaca usage data. |

## Dapatkan Baidu PaddleOCR Token

Baidu PaddleOCR memerlukan access token.

![Get PaddleOCR token](../../image/other/获取飞浆令牌.png)

Buka `API` call window pada halaman Baidu PaddleOCR, klik untuk mendapatkan token, kemudian copy.

Kembali ke ImgBed, paste ke `PaddleOCR Token` dan save.

## Mulakan Recognition

Dalam File Management, pilih image atau document screenshot dan klik `OCR`.

![OCR recognition](../../image/other/ocr识别截图.png)

Dalam dialog, pilih recognition service dan model.

Common PaddleOCR model choices:

| Model | Best For |
| --- | --- |
| `PP-StructureV3` | Recommended default. Baik untuk documents, tables, formulas, stamps dan mixed layouts. |
| `PP-OCRv5` | Simple images, ordinary text dan lightweight recognition. |
| `PaddleOCR-VL` | Multilingual, complex images dan chart-like content. |
| `PaddleOCR-VL-1.5` | Document pages yang lebih kompleks dan layout recovery. |

Jika tidak pasti, mulakan dengan `PP-StructureV3`.

## Advanced Options

| Option | Description |
| --- | --- |
| Orientation correction | Gunakan apabila image rotated atau skewed. |
| Document flattening | Gunakan untuk photographed documents dengan curvature atau tilt. |
| Layout detection | Gunakan apabila mahu preserve headings, paragraphs, tables dan image structure. |
| Chart recognition | Gunakan apabila image mengandungi charts atau structures kompleks. |
| Beautify `Markdown` | Menjadikan exported Markdown lebih mudah dibaca. |

Untuk regular screenshots, kekalkan options minimum. Untuk document scans, enable lebih banyak document-related options.

## Lihat Results

Selepas recognition selesai, dialog menunjukkan result.

Anda boleh copy terus atau pilih export formats.

![PDF recognition](../../image/other/pdf识别截图.png)

Untuk document pages, exported `PDF` boleh preserve page appearance sambil mengekalkan text searchable. Ini berguna untuk archiving scans dan mencari content kemudian.

## Memilih Export Format

| Format | Best For |
| --- | --- |
| `Markdown (.md)` | Notes, documentation systems dan editing kemudian. |
| `PDF (.pdf)` | Preserve page appearance dan scanned document results. |
| `Word (.docx)` | Layout editing, text modification dan handoff kepada orang lain. |
| Export all | Menyimpan beberapa formats dan original image, sesuai untuk archives penting. |

Jika hanya perlukan text, export Markdown.

Jika perlukan page appearance, gunakan PDF atau Word.

## Word Output

Exported Word documents boleh dibuka dan diedit dengan office software.

![Word result](../../image/other/word识别结果.png)

Sesetengah documents mengandungi recognized images, headings dan paragraphs dalam Word output.

Recognition quality bergantung pada original image clarity, model choice dan document complexity.

## File Types Terbaik Untuk OCR

| File Type | Recommendation |
| --- | --- |
| Clear screenshots | Recognize secara terus. |
| Scans | Prefer `PP-StructureV3`. |
| Photographed documents | Enable orientation correction dan document flattening. |
| Tables, formulas, stamps | Prefer structured models. |
| Simple short text images | `PP-OCRv5` biasanya cukup. |

Images yang lebih jelas dan text yang lebih lurus biasanya menghasilkan results lebih baik.

## Common Cases

| Case | Meaning |
| --- | --- |
| Recognition fails | Semak service token atau key telah disimpan. |
| Recognition slow | Complex documents dan large images mengambil masa lebih lama. |
| Table incomplete | Cuba structured model. |
| Text ada kesilapan | Blur, glare dan skew meningkatkan recognition errors. Cuba image yang lebih jelas. |
| Word output mengandungi banyak images | Structured models mungkin preserve beberapa recognized images. Ini normal. |

### Google Quota Query Gagal

Semak:

1. Service account `JSON` telah diimport.
2. Service account mempunyai role `Monitoring Viewer`.
3. `Cloud Vision API` enabled untuk project.

Jika anda hanya perlukan OCR dan bukan usage query, abaikan service account JSON dan isi hanya `Google Vision API Key`.

## Quick Flow

```text
Buka System Settings
-> Buka Other Settings
-> Isi OCR service credentials
-> Save
-> Kembali ke File Management
-> Pilih file dan klik OCR
-> Pilih model
-> Tunggu recognition
-> Copy results atau export Markdown / PDF / Word
```
