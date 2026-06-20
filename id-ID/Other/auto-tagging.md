# Auto Tagging

Auto tagging dikonfigurasi di:

```text
System Settings -> Other Settings -> Auto Tagging
```

Fitur ini membuat tag gambar secara otomatis. Tag tersebut berguna untuk pencarian, filter random image, filter public gallery, dan kontrol akses berdasarkan rating usia.

## Yang Bisa Dilakukan Auto Tagging

| Fitur | Keterangan |
| --- | --- |
| Membuat tag konten | Menambahkan tag untuk orang, suasana, objek, gaya ilustrasi, dan isi visual sejenis. |
| Membuat tag karakter | Berguna untuk gambar anime dan ilustrasi. |
| Menambahkan tag orientasi | Menambahkan `landscape`, `portrait`, atau `square`. |
| Menambahkan rating gambar | Menyimpan hasil rating `G/S/Q/E` untuk konten umum, sensitif, meragukan, atau eksplisit. |
| Auto-tag saat upload | Gambar baru otomatis masuk ke proses tagging. |
| Batch tagging | Menambahkan tag ke gambar lama di semua folder atau folder tertentu. |

## Yang Perlu Disiapkan

Siapkan minimal satu URL Hugging Face Space yang bisa diakses.

Cara yang paling disarankan adalah menggandakan Space `wd-tagger` milik SmilingWolf ke akun Hugging Face Anda sendiri:

```text
https://huggingface.co/spaces/SmilingWolf/wd-tagger
```

Anda bisa memakai Space publik untuk uji coba sementara, tetapi Space publik dipakai banyak orang. Antrean bisa panjang, respons bisa lambat, atau sewaktu-waktu tidak tersedia. Space hasil duplikasi di akun sendiri biasanya lebih stabil untuk pemakaian jangka panjang.

## Menggandakan Space SmilingWolf

1. Masuk ke Hugging Face.
2. Buka `https://huggingface.co/spaces/SmilingWolf/wd-tagger`.

![SmilingWolf public Space](../../image/other/微笑狼的公开仓库.png)

3. Klik menu tiga titik di kanan atas.
4. Pilih `Duplicate this Space`.
5. Gunakan nama Space bawaan atau isi nama sendiri, misalnya `wd-tagger`.
6. Atur visibility menjadi `Public`. Public Space lebih mudah dipanggil oleh ImgBed.
7. Untuk awal, biarkan hardware gratis bawaan. Upgrade hanya jika antrean sudah terasa mengganggu.
8. Buat Space dan tunggu proses build selesai.

Setelah build selesai, buka halaman Space Anda. URL biasanya berbentuk seperti ini:

```text
https://huggingface.co/spaces/your-name/wd-tagger
```

Salin URL dari browser, lalu tempelkan ke `Space URLs` di ImgBed.

## Mengisi Beberapa Space URL

Masukkan satu Space URL per baris.

Contoh:

| Nilai | Keterangan |
| --- | --- |
| `https://huggingface.co/spaces/SmilingWolf/wd-tagger` | Space publik SmilingWolf. Cocok untuk tes sementara. |
| `https://huggingface.co/spaces/lintonxue00/wd-tagger` | URL halaman Space yang sudah disalin. |
| `https://huggingface.co/spaces/your-name/wd-tagger` | Space duplikasi milik Anda sendiri. |

Anda boleh memasukkan beberapa URL. ImgBed akan memakai beberapa Space secara bersamaan, sehingga proses bisa lebih cepat.

Jika salah satu Space sedang tidak tersedia, Space lain tetap bisa melanjutkan pemrosesan.

## Pengaturan

| Opsi | Rekomendasi |
| --- | --- |
| `Space URLs` | Masukkan Space URL yang sudah disiapkan. Pakai minimal satu. |
| Target folder | Kosongkan untuk semua folder. Pilih folder hanya jika ingin memproses direktori tertentu. |
| Recognition model | Biarkan `wd-swinv2-tagger-v3` sebagai default. |
| General tag threshold | Nilai default cocok untuk sebagian besar gambar. Nilai lebih rendah menghasilkan lebih banyak tag; nilai lebih tinggi menghasilkan lebih sedikit tag. |
| Character tag threshold | Default cukup konservatif dan membantu mengurangi tag karakter yang keliru. |
| `MCut` automatic threshold | Matikan dulu. Aktifkan jika ingin model menentukan jumlah tag secara otomatis. |
| Auto-tag on upload | Aktifkan jika gambar baru perlu diberi tag otomatis setelah upload. |
| Start tagging | Menjalankan batch-tagging manual untuk gambar lama. |

## Nilai Awal yang Disarankan

| Opsi | Nilai yang Disarankan |
| --- | --- |
| Recognition model | `wd-swinv2-tagger-v3` |
| General tag threshold | `0.35` |
| Character tag threshold | `0.85` |
| `MCut` | Matikan dulu |
| Auto-tag on upload | Aktifkan bila diperlukan |

Jika tag yang keluar terlalu banyak, naikkan sedikit general threshold.

Jika tag terlalu sedikit, turunkan sedikit general threshold.

## Batch Tagging

1. Isi `Space URLs`.
2. Pilih target folder.
3. Klik start tagging.
4. Tunggu sampai progress selesai.

Jika target folder kosong, ImgBed akan memproses semua folder.

Batch tagging paling cocok untuk gambar lama. Untuk gambar baru, aktifkan auto-tag on upload agar tidak perlu menjalankannya manual setiap kali.

## Auto-Tag Saat Upload

Setelah auto-tag on upload diaktifkan, gambar yang baru diupload otomatis memanggil `Space URLs` yang sudah dikonfigurasi.

Ini cocok untuk pemakaian jangka panjang.

Jika Space sedang antre, upload tetap bisa selesai lebih dulu, lalu tagging dilanjutkan di belakang.

## Gambar yang Diproses

Auto tagging terutama memproses file gambar.

Gambar yang sudah memiliki tag lengkap, orientasi, rating, lebar, dan tinggi akan dilewati agar tidak memanggil Space tanpa perlu.

Jika memungkinkan, ImgBed hanya melengkapi informasi yang belum ada. Misalnya jika hanya orientasi yang belum ada, ImgBed akan mencoba menambahkan orientasi tanpa menjalankan seluruh alur content tag.

## FAQ

### Kenapa Perlu Menggandakan Space Sendiri?

Space publik dipakai banyak orang. Space duplikasi milik Anda biasanya hanya dipakai oleh situs ImgBed Anda, sehingga umumnya lebih cepat dan lebih stabil.

### Space Terus Berstatus Starting Up

Setelah pertama kali dibuat, atau setelah lama tidak dipakai, Space mungkin butuh waktu untuk menyala.

Buka halaman Space Anda terlebih dahulu. Setelah Space bisa mengenali gambar secara normal, kembali ke ImgBed dan mulai tagging.

### Bagaimana Cara Menyalin Space URL?

Buka halaman Hugging Face Space Anda dan salin alamat dari browser.

Contoh:

```text
https://huggingface.co/spaces/lintonxue00/wd-tagger
https://huggingface.co/spaces/SmilingWolf/wd-tagger
```

### Bisa Menambahkan Beberapa Space?

Bisa. Masukkan satu Space URL per baris.

Beberapa Space akan memproses gambar bersama-sama dan berguna jika jumlah gambar banyak.

### Kenapa Tag Menggunakan Bahasa Inggris?

Model SmilingWolf memang menghasilkan tag berbahasa Inggris. Ini normal.

Tag tersebut terutama dipakai untuk pencarian, filter, Random Image API, dan filter public gallery.

### Rating Tag Dipakai Untuk Apa?

Hasil rating bekerja bersama access mode di Security Settings.

Misalnya saat akses pengunjung dibatasi berdasarkan rating usia, fitur public browsing dan random image akan memfilter gambar mengikuti aturan tersebut.

## Alur Cepat

```text
Masuk ke Hugging Face
-> Buka SmilingWolf/wd-tagger
-> Duplicate this Space
-> Tunggu Space selesai build
-> Salin Space URL Anda
-> Isi Space URLs di ImgBed
-> Pilih model dan threshold
-> Start tagging atau aktifkan auto-tag on upload
```
