# OCR

OCR mengekstrak teks dari gambar, hasil scan, dan screenshot dokumen.

Setelah pengenalan selesai, Anda bisa menyalin hasilnya, mengekspornya sebagai `Markdown`, `PDF`, atau `Word`, atau mengemas beberapa format sekaligus untuk diunduh.

## Yang Bisa Dilakukan OCR

| Fitur | Keterangan |
| --- | --- |
| Pengenalan teks gambar | Mengekstrak teks dari gambar, screenshot, dan scan. |
| Pengenalan layout dokumen | Lebih cocok untuk tabel, rumus, cap, dan layout campuran teks-gambar. |
| Beberapa layanan | Mendukung Baidu PaddleOCR, Microsoft Azure Vision, dan Google Vision. |
| Menyalin hasil | Menyalin teks hasil pengenalan setelah proses selesai. |
| Ekspor file | Mengekspor `Markdown`, `PDF`, dan `Word`. |
| Batch packaging | Setelah mengenali beberapa file, hasilnya bisa diunduh sebagai satu paket. |

## Konfigurasikan Layanan OCR Lebih Dulu

Buka:

```text
System Settings -> Other Settings -> OCR
```

![IP geolocation and OCR](../../image/other/ip定位和ocr文字识别.png)

Isi credential untuk layanan yang ingin dipakai:

| Layanan | Yang Perlu Diisi | Cocok Untuk |
| --- | --- | --- |
| Baidu PaddleOCR | `PaddleOCR Token` | Pilihan pertama yang disarankan. Bagus untuk dokumen, gambar, tabel, dan layout campuran. |
| Microsoft Azure Vision | `Azure Vision Endpoint` dan `Azure Vision API Key` | Berguna jika Anda sudah memakai layanan cloud Microsoft. |
| Google Vision | `Google Vision API Key`. Service account `JSON` hanya dipakai untuk query kuota. | Berguna jika Anda memakai layanan Google Cloud. |

Simpan setelah credential diisi.

Untuk uji awal, satu layanan saja sudah cukup. Anda tidak wajib mengonfigurasi ketiganya.

## Setup Google Vision

Setup Google terdiri dari dua bagian:

| Tujuan | Syarat |
| --- | --- |
| Memakai OCR | Aktifkan `Cloud Vision API`, lalu buat `API Key`. |
| Query penggunaan | Buat service account, beri role `Monitoring Viewer`, lalu download service account `JSON`. |

![Google API key and service account](../../image/other/谷歌api秘钥和服务账号截图.png)

### Memakai Google untuk OCR

1. Buka Google Cloud Console.
2. Masuk ke `APIs & Services`.
3. Buka `Library`, cari `Cloud Vision API`, lalu aktifkan.
4. Kembali ke `Credentials`.
5. Buat `API Key`.
6. Buka API Key tersebut dan salin nilainya.
7. Tempelkan ke `Google Vision API Key` di ImgBed.
8. Simpan.

Setelah itu, Anda bisa memilih Google Vision di dialog OCR.

### Query Penggunaan Google

Query kuota tidak wajib untuk pengenalan teks.

Fitur ini hanya menampilkan perkiraan berapa banyak panggilan Google Vision yang dipakai dalam 30 hari terakhir.

1. Di Google Cloud Console, buka `IAM & Admin`.
2. Buka `Service Accounts`.
3. Buat service account, misalnya `vision-monitor`.
4. Berikan role `Monitoring Viewer`.
5. Buka detail service account dan buat key.
6. Pilih `JSON`.
7. Download file JSON yang dibuat.
8. Kembali ke ImgBed dan import ke service account `JSON` (opsional).
9. Setelah import berhasil, klik quota query.

Setelah import, ImgBed menampilkan nama project pemilik service account tersebut. Saat query penggunaan, ImgBed membaca data monitoring Google dan menampilkan jumlah panggilan bulan ini.

Ringkasnya:

| Item | Fungsi |
| --- | --- |
| `Google Vision API Key` | Menjalankan OCR recognition. |
| Service account `JSON` | Mengecek berapa banyak panggilan Google Vision yang sudah dipakai. |
| Role `Monitoring Viewer` | Mengizinkan service account membaca data penggunaan. |

## Mendapatkan Baidu PaddleOCR Token

Baidu PaddleOCR membutuhkan access token.

![Get PaddleOCR token](../../image/other/获取飞浆令牌.png)

Buka jendela pemanggilan `API` di halaman Baidu PaddleOCR, klik untuk mendapatkan token, lalu salin token tersebut.

Kembali ke ImgBed, tempelkan ke `PaddleOCR Token`, lalu simpan.

## Mulai Recognition

Di File Management, pilih gambar atau screenshot dokumen, lalu klik `OCR`.

![OCR recognition](../../image/other/ocr识别截图.png)

Di dialog, pilih layanan recognition dan model.

Pilihan model PaddleOCR yang umum:

| Model | Cocok Untuk |
| --- | --- |
| `PP-StructureV3` | Default yang disarankan. Bagus untuk dokumen, tabel, rumus, cap, dan layout campuran. |
| `PP-OCRv5` | Gambar sederhana, teks biasa, dan recognition ringan. |
| `PaddleOCR-VL` | Multibahasa, gambar kompleks, dan konten seperti chart. |
| `PaddleOCR-VL-1.5` | Halaman dokumen yang lebih kompleks dan pemulihan layout. |

Jika ragu, mulai dari `PP-StructureV3`.

## Advanced Options

| Opsi | Keterangan |
| --- | --- |
| Orientation correction | Gunakan jika gambar miring atau terputar. |
| Document flattening | Gunakan untuk dokumen yang difoto dengan lengkungan atau kemiringan. |
| Layout detection | Gunakan jika ingin mempertahankan struktur heading, paragraf, tabel, dan gambar. |
| Chart recognition | Gunakan jika gambar berisi chart atau struktur kompleks. |
| Beautify `Markdown` | Membuat Markdown hasil ekspor lebih mudah dibaca. |

Untuk screenshot biasa, gunakan opsi seminimal mungkin. Untuk scan dokumen, aktifkan lebih banyak opsi terkait dokumen.

## Melihat Hasil

Setelah recognition selesai, dialog akan menampilkan hasilnya.

Anda bisa langsung menyalinnya atau memilih format ekspor.

![PDF recognition](../../image/other/pdf识别截图.png)

Untuk halaman dokumen, `PDF` hasil ekspor bisa mempertahankan tampilan halaman sambil membuat teks tetap searchable. Ini berguna untuk mengarsipkan scan dan mencari isi dokumen nanti.

## Memilih Format Ekspor

| Format | Cocok Untuk |
| --- | --- |
| `Markdown (.md)` | Catatan, sistem dokumentasi, dan pengeditan lanjutan. |
| `PDF (.pdf)` | Menjaga tampilan halaman dan hasil scan dokumen. |
| `Word (.docx)` | Pengeditan layout, perubahan teks, dan handoff ke orang lain. |
| Export all | Menyimpan beberapa format dan gambar asli, cocok untuk arsip penting. |

Jika hanya membutuhkan teks, ekspor Markdown.

Jika perlu mempertahankan tampilan halaman, gunakan PDF atau Word.

## Output Word

Dokumen Word hasil ekspor bisa dibuka dan diedit dengan software office.

![Word result](../../image/other/word识别结果.png)

Beberapa dokumen menyertakan gambar, heading, dan paragraf yang dikenali di output Word.

Kualitas recognition bergantung pada kejernihan gambar asli, pilihan model, dan kompleksitas dokumen.

## Jenis File yang Cocok untuk OCR

| Jenis File | Rekomendasi |
| --- | --- |
| Screenshot jelas | Kenali langsung. |
| Scan | Utamakan `PP-StructureV3`. |
| Dokumen yang difoto | Aktifkan orientation correction dan document flattening. |
| Tabel, rumus, cap | Utamakan model structured. |
| Gambar teks pendek sederhana | `PP-OCRv5` biasanya cukup. |

Gambar yang lebih jelas dengan teks yang lebih lurus biasanya menghasilkan recognition yang lebih baik.

## Kasus Umum

| Kasus | Arti |
| --- | --- |
| Recognition gagal | Periksa apakah token atau key layanan sudah disimpan. |
| Recognition lambat | Dokumen kompleks dan gambar besar membutuhkan waktu lebih lama. |
| Tabel tidak lengkap | Coba model structured. |
| Teks banyak salah | Blur, pantulan cahaya, dan kemiringan meningkatkan error. Coba gambar yang lebih jelas. |
| Output Word berisi banyak gambar | Model structured mungkin mempertahankan sebagian gambar yang dikenali. Ini normal. |

### Query Kuota Google Gagal

Periksa:

1. Service account `JSON` sudah diimport.
2. Service account memiliki role `Monitoring Viewer`.
3. `Cloud Vision API` sudah diaktifkan untuk project tersebut.

Jika hanya membutuhkan OCR dan tidak perlu query penggunaan, Anda bisa mengabaikan service account JSON dan cukup mengisi `Google Vision API Key`.

## Alur Cepat

```text
Buka System Settings
-> Buka Other Settings
-> Isi credential layanan OCR
-> Simpan
-> Kembali ke File Management
-> Pilih file dan klik OCR
-> Pilih model
-> Tunggu recognition selesai
-> Salin hasil atau ekspor Markdown / PDF / Word
```
