# Penandaan Otomatis

Penandaan otomatis dikonfigurasi di:

```text
System Settings -> Other Settings -> Auto Tagging
```

Fitur ini membuat tag gambar secara otomatis. Tag tersebut berguna untuk pencarian, pemfilteran gambar acak, pemfilteran galeri publik, dan kontrol akses berdasarkan rating usia.

## Yang Dapat Dilakukan Penandaan Otomatis

| Fitur | Deskripsi |
| --- | --- |
| Membuat tag konten | Menambahkan tag untuk orang, suasana, objek, gaya seni, dan konten visual sejenis. |
| Membuat tag karakter | Berguna untuk gambar anime dan ilustrasi. |
| Menambahkan tag orientasi | Menambahkan `landscape`, `portrait`, atau `square`. |
| Menambahkan rating gambar | Menyimpan hasil rating `G/S/Q/E` untuk konten umum, sensitif, meragukan, atau eksplisit. |
| Penandaan otomatis saat upload | Gambar yang baru diupload otomatis masuk ke alur penandaan. |
| Penandaan batch | Menambahkan tag ke gambar lama di semua folder atau folder yang dipilih. |

## Yang Perlu Disiapkan Terlebih Dahulu

Siapkan setidaknya satu URL Hugging Face Space yang dapat diakses.

Cara yang disarankan adalah menduplikasi Space `wd-tagger` milik SmilingWolf ke akun Hugging Face Anda sendiri:

```text
https://huggingface.co/spaces/SmilingWolf/wd-tagger
```

Anda dapat menggunakan Space publik untuk sementara, tetapi Space publik digunakan bersama oleh banyak pengguna sehingga dapat mengantre, melambat, atau tidak tersedia. Space hasil duplikasi di akun Anda sendiri lebih stabil untuk penandaan otomatis jangka panjang.

## Menduplikasi Space SmilingWolf

1. Masuk ke Hugging Face.
2. Buka `https://huggingface.co/spaces/SmilingWolf/wd-tagger`.

![Space publik SmilingWolf](../../image/other/微笑狼的公开仓库.png)

3. Klik menu tiga titik di sudut kanan atas.
4. Pilih `Duplicate this Space`.
5. Pertahankan nama Space bawaan atau pilih nama Anda sendiri, misalnya `wd-tagger`.
6. Atur visibilitas ke `Public`. Space publik lebih mudah dipanggil oleh ImgBed.
7. Untuk awal, gunakan perangkat keras gratis bawaan. Tingkatkan nanti hanya jika antrean mulai jelas terasa.
8. Buat Space dan tunggu proses build selesai.

Setelah build selesai, buka halaman Space Anda. URL biasanya terlihat seperti:

```text
https://huggingface.co/spaces/your-name/wd-tagger
```

Salin URL browser lalu tempelkan ke `Space URLs` di ImgBed.

## Mengisi Beberapa Space URLs

Masukkan satu Space URL per baris.

Contoh:

| Nilai | Deskripsi |
| --- | --- |
| `https://huggingface.co/spaces/SmilingWolf/wd-tagger` | Space publik SmilingWolf. Cocok untuk pengujian sementara. |
| `https://huggingface.co/spaces/lintonxue00/wd-tagger` | URL halaman Space yang sudah disalin. |
| `https://huggingface.co/spaces/your-name/wd-tagger` | URL halaman Space hasil duplikasi milik Anda sendiri. |

Anda dapat memasukkan beberapa URL. ImgBed menggunakan beberapa Space secara bersamaan, sehingga kecepatan dapat meningkat.

Jika salah satu Space sementara tidak tersedia, Space lain tetap dapat melanjutkan pemrosesan.

## Pengaturan

| Opsi | Rekomendasi |
| --- | --- |
| `Space URLs` | Masukkan Space URLs yang sudah Anda siapkan. Gunakan setidaknya satu. |
| Folder target | Kosongkan untuk semua folder. Pilih folder hanya jika Anda ingin memproses direktori tertentu. |
| Model pengenalan | Pertahankan `wd-swinv2-tagger-v3` sebagai default. |
| Ambang tag umum | Nilai default cocok untuk sebagian besar gambar. Nilai lebih rendah menghasilkan lebih banyak tag; nilai lebih tinggi menghasilkan lebih sedikit tag. |
| Ambang tag karakter | Nilai default bersifat konservatif dan membantu menghindari tag karakter yang salah. |
| Ambang otomatis `MCut` | Biarkan nonaktif terlebih dahulu. Aktifkan saat Anda ingin model menentukan jumlah tag secara otomatis. |
| Penandaan otomatis saat upload | Aktifkan jika gambar yang baru diupload perlu mendapatkan tag secara otomatis. |
| Mulai penandaan | Menjalankan penandaan batch manual untuk gambar lama. |

## Nilai Awal yang Disarankan

| Opsi | Nilai yang Disarankan |
| --- | --- |
| Model pengenalan | `wd-swinv2-tagger-v3` |
| Ambang tag umum | `0.35` |
| Ambang tag karakter | `0.85` |
| `MCut` | Nonaktif terlebih dahulu |
| Penandaan otomatis saat upload | Aktifkan jika diperlukan |

Jika tag terlalu banyak, naikkan sedikit ambang tag umum.

Jika tag terlalu sedikit, turunkan sedikit ambang tag umum.

## Penandaan Batch

1. Isi `Space URLs`.
2. Pilih folder target.
3. Klik mulai penandaan.
4. Tunggu hingga progres selesai.

Jika folder target kosong, ImgBed memproses semua folder.

Penandaan batch paling cocok untuk gambar lama. Untuk gambar baru, aktifkan penandaan otomatis saat upload agar Anda tidak perlu menjalankannya secara manual setiap kali.

## Penandaan Otomatis Saat Upload

Setelah penandaan otomatis saat upload diaktifkan, gambar yang baru diupload otomatis memanggil `Space URLs` yang sudah dikonfigurasi.

Ini cocok untuk penggunaan jangka panjang.

Jika Space Anda sedang mengantre, proses upload tetap dapat selesai lebih dulu, lalu penandaan berlanjut setelahnya.

## Gambar yang Diproses

Penandaan otomatis terutama memproses file gambar.

Gambar yang sudah memiliki tag, orientasi, rating, lebar, dan tinggi lengkap akan dilewati untuk menghindari panggilan Space yang tidak perlu.

Jika memungkinkan, ImgBed hanya mengisi informasi yang hilang. Misalnya, jika hanya orientasi yang hilang, ImgBed mencoba menambahkan orientasi tanpa memanggil seluruh alur tag konten.

## Pertanyaan Umum

### Mengapa Perlu Menduplikasi Space Sendiri?

Space publik digunakan bersama oleh banyak pengguna. Space hasil duplikasi milik Anda terutama digunakan oleh situs ImgBed Anda, sehingga biasanya lebih cepat dan lebih andal.

### Space Terus Memulai

Setelah pertama kali dibuat, atau setelah lama tidak aktif, Space mungkin membutuhkan waktu untuk menyala.

Buka halaman Space Anda terlebih dahulu. Setelah Space dapat mengenali gambar secara normal, kembali ke ImgBed dan mulai penandaan.

### Bagaimana Cara Menyalin Space URL?

Buka halaman Hugging Face Space Anda lalu salin alamat browser.

Contoh:

```text
https://huggingface.co/spaces/lintonxue00/wd-tagger
https://huggingface.co/spaces/SmilingWolf/wd-tagger
```

### Bisakah Saya Menambahkan Beberapa Spaces?

Bisa. Masukkan satu Space URL per baris.

Beberapa Spaces memproses gambar bersama-sama dan berguna ketika Anda memiliki banyak gambar.

### Mengapa Tag Berbahasa Inggris?

Model SmilingWolf menghasilkan tag berbahasa Inggris. Ini memang perilaku yang diharapkan.

Tag tersebut terutama digunakan untuk pencarian, pemfilteran, API gambar acak, dan filter galeri publik.

### Untuk Apa Tag Rating Digunakan?

Hasil rating bekerja bersama mode akses di Security Settings.

Misalnya, saat akses pengunjung dibatasi oleh rating usia, fitur penelusuran publik dan gambar acak memfilter gambar sesuai aturan tersebut.

## Alur Cepat

```text
Sign in to Hugging Face
-> Open SmilingWolf/wd-tagger
-> Duplicate this Space
-> Wait for the Space to build
-> Copy your Space URL
-> Fill Space URLs in ImgBed
-> Choose model and thresholds
-> Start tagging or enable auto-tag on upload
```
