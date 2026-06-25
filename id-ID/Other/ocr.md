# OCR

OCR mengekstrak teks dari gambar, pindaian, dan tangkapan layar dokumen.

Setelah pengenalan selesai, Anda dapat menyalin hasilnya, mengekspornya sebagai `Markdown`, `PDF`, atau `Word`, atau mengemas beberapa format sekaligus untuk diunduh.

## Yang Dapat Dilakukan OCR

| Fitur | Deskripsi |
| --- | --- |
| Pengenalan teks gambar | Mengekstrak teks dari gambar, tangkapan layar, dan pindaian. |
| Pengenalan tata letak dokumen | Lebih cocok untuk tabel, rumus, cap, dan tata letak campuran teks-gambar. |
| Beberapa layanan | Mendukung Baidu PaddleOCR, Microsoft Azure Vision, dan Google Vision. |
| Menyalin hasil | Menyalin teks yang dikenali setelah pemrosesan. |
| Ekspor file | Mengekspor `Markdown`, `PDF`, dan `Word`. |
| Pengemasan batch | Setelah mengenali beberapa file, hasil dapat diunduh sebagai satu paket. |

## Konfigurasikan Layanan OCR Terlebih Dahulu

Buka:

```text
System Settings -> Other Settings -> OCR
```

![Geolokasi IP dan OCR](../../image/other/ip定位和ocr文字识别.png)

Isi kredensial untuk layanan yang ingin Anda gunakan:

| Layanan | Yang Perlu Diisi | Cocok Untuk |
| --- | --- | --- |
| Baidu PaddleOCR | `PaddleOCR Token` | Pilihan pertama yang disarankan. Baik untuk dokumen, gambar, tabel, dan tata letak campuran. |
| Microsoft Azure Vision | `Azure Vision Endpoint` dan `Azure Vision API Key` | Berguna jika Anda sudah menggunakan layanan cloud Microsoft. |
| Google Vision | `Google Vision API Key`. Akun layanan `JSON` hanya digunakan untuk kueri kuota. | Berguna jika Anda menggunakan layanan Google Cloud. |

Simpan setelah kredensial diisi.

Untuk pengujian awal, Anda dapat mengonfigurasi satu layanan saja. Anda tidak perlu mengonfigurasi ketiganya.

## Penyiapan Google Vision

Penyiapan Google terdiri dari dua bagian:

| Tujuan | Persyaratan |
| --- | --- |
| Menggunakan OCR | Aktifkan `Cloud Vision API`, lalu buat `API Key`. |
| Mengkueri penggunaan | Buat akun layanan, beri peran `Monitoring Viewer`, lalu unduh `JSON` akun layanan. |

![Kunci API Google dan akun layanan](../../image/other/谷歌api秘钥和服务账号截图.png)

### Menggunakan Google untuk OCR

1. Buka Google Cloud Console.
2. Masuk ke `APIs & Services`.
3. Buka `Library`, cari `Cloud Vision API`, lalu aktifkan.
4. Kembali ke `Credentials`.
5. Buat `API Key`.
6. Buka API Key tersebut dan salin nilainya.
7. Tempelkan ke `Google Vision API Key` di ImgBed.
8. Simpan.

Setelah itu, Anda dapat memilih Google Vision di dialog OCR.

### Mengkueri Penggunaan Google

Kueri kuota tidak wajib untuk pengenalan.

Fitur ini hanya menampilkan perkiraan jumlah panggilan Google Vision yang digunakan dalam 30 hari terakhir.

1. Di Google Cloud Console, buka `IAM & Admin`.
2. Buka `Service Accounts`.
3. Buat akun layanan, misalnya `vision-monitor`.
4. Berikan peran `Monitoring Viewer`.
5. Buka detail akun layanan dan buat kunci.
6. Pilih `JSON`.
7. Unduh file JSON yang dibuat.
8. Kembali ke ImgBed dan impor di bagian `JSON` akun layanan (opsional).
9. Setelah impor berhasil, klik kueri kuota.

Setelah impor, ImgBed menampilkan nama project pemilik akun layanan tersebut. Saat mengkueri penggunaan, ImgBed membaca data monitoring Google dan menampilkan jumlah panggilan bulan ini.

Ringkasnya:

| Item | Tujuan |
| --- | --- |
| `Google Vision API Key` | Menjalankan pengenalan OCR. |
| File `JSON` akun layanan | Mengkueri berapa banyak panggilan Google Vision yang sudah digunakan. |
| Peran `Monitoring Viewer` | Mengizinkan akun layanan membaca data penggunaan. |

## Mendapatkan Baidu PaddleOCR Token

Baidu PaddleOCR membutuhkan token akses.

![Mendapatkan token PaddleOCR](../../image/other/获取飞浆令牌.png)

Buka jendela pemanggilan `API` di halaman Baidu PaddleOCR, klik untuk mendapatkan token, lalu salin token tersebut.

Kembali ke ImgBed, tempelkan ke `PaddleOCR Token`, lalu simpan.

## Memulai Pengenalan

Di Manajemen File, pilih gambar atau tangkapan layar dokumen, lalu klik `OCR`.

![Pengenalan OCR](../../image/other/ocr识别截图.png)

Di dialog, pilih layanan dan model pengenalan.

Pilihan model PaddleOCR yang umum:

| Model | Cocok Untuk |
| --- | --- |
| `PP-StructureV3` | Default yang disarankan. Baik untuk dokumen, tabel, rumus, cap, dan tata letak campuran. |
| `PP-OCRv5` | Gambar sederhana, teks biasa, dan pengenalan ringan. |
| `PaddleOCR-VL` | Konten multibahasa, gambar kompleks, dan konten mirip bagan. |
| `PaddleOCR-VL-1.5` | Halaman dokumen yang lebih kompleks dan pemulihan tata letak. |

Jika ragu, mulai dengan `PP-StructureV3`.

## Opsi Lanjutan

| Opsi | Deskripsi |
| --- | --- |
| Koreksi orientasi | Gunakan saat gambar terputar atau miring. |
| Perataan dokumen | Gunakan untuk dokumen yang difoto dengan lengkungan atau kemiringan. |
| Deteksi tata letak | Gunakan saat Anda ingin mempertahankan struktur judul, paragraf, tabel, dan gambar. |
| Pengenalan bagan | Gunakan saat gambar berisi bagan atau struktur kompleks. |
| Rapikan `Markdown` | Membuat Markdown hasil ekspor lebih mudah dibaca. |

Untuk tangkapan layar biasa, gunakan opsi seminimal mungkin. Untuk pindaian dokumen, aktifkan lebih banyak opsi terkait dokumen.

## Melihat Hasil

Setelah pengenalan selesai, dialog menampilkan hasilnya.

Anda dapat langsung menyalinnya atau memilih format ekspor.

![Pengenalan PDF](../../image/other/pdf识别截图.png)

Untuk halaman dokumen, `PDF` hasil ekspor dapat mempertahankan tampilan halaman sambil membuat teks tetap dapat dicari. Ini berguna untuk mengarsipkan pindaian dan menemukan konten nanti.

## Memilih Format Ekspor

| Format | Cocok Untuk |
| --- | --- |
| `Markdown (.md)` | Catatan, sistem dokumentasi, dan pengeditan lanjutan. |
| `PDF (.pdf)` | Mempertahankan tampilan halaman dan hasil dokumen pindaian. |
| `Word (.docx)` | Melanjutkan pengeditan tata letak, mengubah teks, dan menyerahkan ke orang lain. |
| Ekspor semua | Menyimpan beberapa format dan gambar asli, cocok untuk arsip penting. |

Jika hanya membutuhkan teks, ekspor Markdown.

Jika perlu mempertahankan tampilan halaman, gunakan PDF atau Word.

## Output Word

Dokumen Word hasil ekspor dapat dibuka dan diedit dengan perangkat lunak perkantoran.

![Hasil Word](../../image/other/word识别结果.png)

Beberapa dokumen menyertakan gambar, judul, dan paragraf yang dikenali di output Word.

Kualitas pengenalan bergantung pada kejernihan gambar asli, pilihan model, dan kompleksitas dokumen.

## Jenis File Terbaik untuk OCR

| Jenis File | Rekomendasi |
| --- | --- |
| Tangkapan layar jelas | Kenali langsung. |
| Pindaian | Utamakan `PP-StructureV3`. |
| Dokumen yang difoto | Aktifkan koreksi orientasi dan perataan dokumen. |
| Tabel, rumus, cap | Utamakan model terstruktur. |
| Gambar teks pendek sederhana | `PP-OCRv5` biasanya cukup. |

Gambar yang lebih jelas dengan teks yang lebih lurus biasanya menghasilkan hasil yang lebih baik.

## Kasus Umum

| Kasus | Arti |
| --- | --- |
| Pengenalan gagal | Periksa apakah token atau kunci layanan sudah disimpan. |
| Pengenalan lambat | Dokumen kompleks dan gambar besar membutuhkan waktu lebih lama. |
| Tabel tidak lengkap | Coba model terstruktur. |
| Teks memiliki kesalahan | Buram, pantulan cahaya, dan kemiringan meningkatkan kesalahan pengenalan. Coba gambar yang lebih jelas. |
| Output Word berisi banyak gambar | Model terstruktur dapat mempertahankan sebagian gambar yang dikenali. Ini normal. |

### Kueri Kuota Google Gagal

Periksa:

1. Akun layanan `JSON` sudah diimpor.
2. Akun layanan memiliki peran `Monitoring Viewer`.
3. `Cloud Vision API` sudah diaktifkan untuk project tersebut.

Jika Anda hanya membutuhkan OCR dan tidak membutuhkan kueri penggunaan, Anda dapat mengabaikan JSON akun layanan dan hanya mengisi `Google Vision API Key`.

## Alur Cepat

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
