# OCR

OCR mengekstrak teks daripada imej, imbasan dan tangkapan skrin dokumen.

Selepas pengecaman, anda boleh menyalin hasil, mengeksportnya sebagai `Markdown`, `PDF` atau `Word`, atau membungkus beberapa format bersama-sama untuk dimuat turun.

## Perkara Yang Boleh Dilakukan OCR

| Ciri | Penerangan |
| --- | --- |
| Pengecaman teks imej | Mengekstrak teks daripada imej, tangkapan skrin dan imbasan. |
| Pengecaman susun atur dokumen | Lebih sesuai untuk jadual, formula, cop dan susun atur campuran teks-imej. |
| Berbilang perkhidmatan | Menyokong Baidu PaddleOCR, Microsoft Azure Vision dan Google Vision. |
| Salin hasil | Menyalin teks yang dikenal pasti selepas pemprosesan. |
| Eksport fail | Mengeksport `Markdown`, `PDF` dan `Word`. |
| Pembungkusan kelompok | Selepas mengenal pasti berbilang fail, muat turun hasil sebagai satu pakej. |

## Konfigurasikan Perkhidmatan OCR Dahulu

Buka:

```text
System Settings -> Other Settings -> OCR
```

![Geolokasi IP dan OCR](../../image/other/ip定位和ocr文字识别.png)

Isi kelayakan untuk perkhidmatan yang mahu anda gunakan:

| Perkhidmatan | Perkara Yang Perlu Diisi | Paling Sesuai Untuk |
| --- | --- | --- |
| Baidu PaddleOCR | `PaddleOCR Token` | Pilihan pertama yang disyorkan. Baik untuk dokumen, imej, jadual dan susun atur campuran. |
| Microsoft Azure Vision | `Azure Vision Endpoint` dan `Azure Vision API Key` | Berguna jika anda sudah menggunakan perkhidmatan awan Microsoft. |
| Google Vision | `Google Vision API Key`. Akaun perkhidmatan `JSON` hanya digunakan untuk pertanyaan kuota. | Berguna jika anda menggunakan perkhidmatan Google Cloud. |

Simpan selepas mengisi kelayakan.

Untuk ujian awal, satu perkhidmatan sahaja sudah mencukupi. Anda tidak perlu mengkonfigurasikan ketiga-tiganya.

## Persediaan Google Vision

Persediaan Google mempunyai dua bahagian:

| Matlamat | Keperluan |
| --- | --- |
| Menggunakan OCR | Aktifkan `Cloud Vision API`, kemudian cipta `API Key`. |
| Menyemak penggunaan | Cipta akaun perkhidmatan, berikan `Monitoring Viewer`, kemudian muat turun akaun perkhidmatan `JSON`. |

![Kunci API Google dan akaun perkhidmatan](../../image/other/谷歌api秘钥和服务账号截图.png)

### Menggunakan Google Untuk OCR

1. Buka Google Cloud Console.
2. Pergi ke `APIs & Services`.
3. Buka `Library`, cari `Cloud Vision API` dan aktifkannya.
4. Kembali ke `Credentials`.
5. Cipta `API Key`.
6. Buka API Key dan salin.
7. Tampal ke `Google Vision API Key` dalam ImgBed.
8. Simpan.

Selepas itu, anda boleh memilih Google Vision dalam dialog OCR.

### Menyemak Penggunaan Google

Pertanyaan kuota tidak diperlukan untuk pengecaman.

Ia hanya menunjukkan anggaran bilangan panggilan Google Vision yang digunakan dalam 30 hari terakhir.

1. Dalam Google Cloud Console, buka `IAM & Admin`.
2. Buka `Service Accounts`.
3. Cipta akaun perkhidmatan, contohnya `vision-monitor`.
4. Berikan peranan `Monitoring Viewer`.
5. Buka butiran akaun perkhidmatan dan cipta kunci.
6. Pilih `JSON`.
7. Muat turun fail JSON yang dijana.
8. Kembali ke ImgBed dan import di bawah akaun perkhidmatan `JSON` (pilihan).
9. Selepas import berjaya, klik pertanyaan kuota.

Selepas import, ImgBed menunjukkan nama projek yang memiliki akaun perkhidmatan tersebut. Semasa menyemak penggunaan, ImgBed membaca data pemantauan Google dan menunjukkan bilangan panggilan bulan ini.

Ringkasnya:

| Perkara | Tujuan |
| --- | --- |
| `Google Vision API Key` | Melakukan pengecaman OCR. |
| Akaun perkhidmatan `JSON` | Menyemak berapa banyak panggilan Google Vision telah digunakan. |
| Peranan `Monitoring Viewer` | Membenarkan akaun perkhidmatan membaca data penggunaan. |

## Mendapatkan Baidu PaddleOCR Token

Baidu PaddleOCR memerlukan token akses.

![Dapatkan token PaddleOCR](../../image/other/获取飞浆令牌.png)

Buka tetingkap panggilan `API` pada halaman Baidu PaddleOCR, klik untuk mendapatkan token, kemudian salin.

Kembali ke ImgBed, tampal ke `PaddleOCR Token` dan simpan.

## Memulakan Pengecaman

Dalam Pengurusan Fail, pilih imej atau tangkapan skrin dokumen dan klik `OCR`.

![Pengecaman OCR](../../image/other/ocr识别截图.png)

Dalam dialog, pilih perkhidmatan pengecaman dan model.

Pilihan model PaddleOCR yang biasa:

| Model | Paling Sesuai Untuk |
| --- | --- |
| `PP-StructureV3` | Lalai yang disyorkan. Baik untuk dokumen, jadual, formula, cop dan susun atur campuran. |
| `PP-OCRv5` | Imej mudah, teks biasa dan pengecaman ringan. |
| `PaddleOCR-VL` | Berbilang bahasa, imej kompleks dan kandungan seperti carta. |
| `PaddleOCR-VL-1.5` | Halaman dokumen yang lebih kompleks dan pemulihan susun atur. |

Jika tidak pasti, mulakan dengan `PP-StructureV3`.

## Pilihan Lanjutan

| Pilihan | Penerangan |
| --- | --- |
| Pembetulan orientasi | Gunakan apabila imej diputar atau condong. |
| Perataan dokumen | Gunakan untuk dokumen yang difoto dengan lengkungan atau kecondongan. |
| Pengesanan susun atur | Gunakan apabila anda mahu mengekalkan tajuk, perenggan, jadual dan struktur imej. |
| Pengecaman carta | Gunakan apabila imej mengandungi carta atau struktur kompleks. |
| Perkemas `Markdown` | Menjadikan Markdown yang dieksport lebih mudah dibaca. |

Untuk tangkapan skrin biasa, kekalkan pilihan pada tahap minimum. Untuk imbasan dokumen, aktifkan lebih banyak pilihan berkaitan dokumen.

## Melihat Hasil

Selepas pengecaman selesai, dialog menunjukkan hasilnya.

Anda boleh menyalinnya terus atau memilih format eksport.

![Pengecaman PDF](../../image/other/pdf识别截图.png)

Untuk halaman dokumen, `PDF` yang dieksport boleh mengekalkan rupa halaman sambil memastikan teks boleh dicari. Ini berguna untuk mengarkib imbasan dan mencari kandungan kemudian.

## Memilih Format Eksport

| Format | Paling Sesuai Untuk |
| --- | --- |
| `Markdown (.md)` | Nota, sistem dokumentasi dan penyuntingan kemudian. |
| `PDF (.pdf)` | Mengekalkan rupa halaman dan hasil dokumen imbasan. |
| `Word (.docx)` | Penyuntingan susun atur, pengubahsuaian teks dan penyerahan kepada orang lain. |
| Eksport semua | Menyimpan beberapa format dan imej asal, sesuai untuk arkib penting. |

Jika anda hanya memerlukan teks, eksport Markdown.

Jika anda memerlukan rupa halaman, gunakan PDF atau Word.

## Output Word

Dokumen Word yang dieksport boleh dibuka dan disunting dengan perisian pejabat.

![Hasil Word](../../image/other/word识别结果.png)

Sesetengah dokumen memasukkan imej, tajuk dan perenggan yang dikenal pasti dalam output Word.

Kualiti pengecaman bergantung pada kejelasan imej asal, pilihan model dan kerumitan dokumen.

## Jenis Fail Terbaik Untuk OCR

| Jenis Fail | Cadangan |
| --- | --- |
| Tangkapan skrin jelas | Kenal pasti secara terus. |
| Imbasan | Utamakan `PP-StructureV3`. |
| Dokumen yang difoto | Aktifkan pembetulan orientasi dan perataan dokumen. |
| Jadual, formula, cop | Utamakan model berstruktur. |
| Imej teks pendek yang mudah | `PP-OCRv5` biasanya mencukupi. |

Imej yang lebih jelas dengan teks yang lebih lurus biasanya menghasilkan keputusan yang lebih baik.

## Kes Biasa

| Kes | Maksud |
| --- | --- |
| Pengecaman gagal | Semak bahawa token atau kunci perkhidmatan telah disimpan. |
| Pengecaman perlahan | Dokumen kompleks dan imej besar mengambil masa lebih lama. |
| Jadual tidak lengkap | Cuba model berstruktur. |
| Teks mempunyai kesilapan | Kabur, silau dan kecondongan meningkatkan ralat pengecaman. Cuba imej yang lebih jelas. |
| Output Word mengandungi banyak imej | Model berstruktur mungkin mengekalkan beberapa imej yang dikenal pasti. Ini normal. |

### Pertanyaan Kuota Google Gagal

Semak:

1. Akaun perkhidmatan `JSON` telah diimport.
2. Akaun perkhidmatan mempunyai peranan `Monitoring Viewer`.
3. `Cloud Vision API` telah diaktifkan untuk projek.

Jika anda hanya memerlukan OCR dan tidak memerlukan pertanyaan penggunaan, anda boleh mengabaikan JSON akaun perkhidmatan dan hanya mengisi `Google Vision API Key`.

## Aliran Pantas

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
