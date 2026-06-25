# Geolokasi IP dan Manajemen Pengguna

Geolokasi IP mengubah alamat IP dalam catatan pengupload, perangkat login, dan log sejenis menjadi perkiraan lokasi.

Setelah dikonfigurasi, panel admin dapat menampilkan asal upload dan akses dengan lebih jelas. Manajemen Pengguna juga memungkinkan Anda memblokir atau memulihkan akses upload untuk alamat IP yang mencurigakan.

## Tempat Mengonfigurasinya

Buka:

```text
System Settings -> Other Settings -> IP Geolocation
```

![Geolokasi IP](../../image/other/ip定位/ip定位.png)

## Pengaturan yang Tersedia

Alur geolokasi IP yang lebih baru mendukung beberapa sumber, bukan hanya bergantung pada satu layanan peta.

| Pengaturan | Tujuan |
| --- | --- |
| Bahasa geolokasi IP | Memilih bahasa tampilan, seperti bahasa Inggris, Tionghoa Sederhana, Jepang, Prancis, dan lainnya. |
| MaxMind Account ID | ID akun MaxMind untuk MaxMind GeoLite Web Service. |
| MaxMind License Key | License Key MaxMind. |
| Tencent Map Key | Kunci Tencent Location Service. Berguna untuk alamat berbahasa Tionghoa dan IP Tiongkok daratan. |
| ipapi Key | Kunci APILayer ipapi. Mendukung geolokasi IP multibahasa. |

Isi hanya layanan yang Anda perlukan. Anda tidak harus mengonfigurasi semua kolom.

Jika tidak ada kunci yang diberikan, ImgBed tetap mencoba sumber gratis bawaan, tetapi stabilitas, dukungan bahasa, dan presisinya mungkin lebih rendah daripada layanan yang Anda konfigurasi sendiri.

## Pilihan yang Disarankan

Jika Anda terutama membutuhkan alamat berbahasa Tionghoa:

1. Atur bahasa geolokasi IP ke Tionghoa Sederhana.
2. Konfigurasikan Tencent Map Key.
3. Opsional, tambahkan MaxMind atau ipapi sebagai sumber cadangan.

Jika Anda terutama membutuhkan alamat berbahasa Inggris atau multibahasa:

1. Pilih bahasa yang Anda perlukan.
2. Konfigurasikan MaxMind Account ID dan License Key.
3. Tambahkan ipapi Key jika Anda membutuhkan hasil multibahasa yang lebih baik.

## Penyiapan MaxMind

MaxMind membutuhkan:

```text
MaxMind Account ID
MaxMind License Key
```

Temukan ID akun di dasbor MaxMind dan buat License Key dari halaman License Keys.

![Konfigurasi kunci MaxMind](../../image/other/ip定位/maxmind的key配置.png)

Setelah dibuat, tempelkan Account ID dan License Key ke ImgBed, lalu simpan.

Paket gratis MaxMind cocok untuk penggunaan sehari-hari, tetapi memiliki batas permintaan. Jika kuota terlampaui, ImgBed akan terus mencoba sumber lain yang tersedia.

## Penyiapan ipapi

ipapi menggunakan API Key APILayer.

Buka konsol ipapi dan salin API Key yang ditampilkan di sana.

![Konfigurasi ipapi](../../image/other/ip定位/ipapi配置.png)

Tempelkan ke kolom `ipapi Key` di ImgBed, lalu simpan.

ipapi mendukung geolokasi IP multibahasa dan berguna saat Anda ingin alamat ditampilkan dalam bahasa yang dipilih. Paket gratisnya juga memiliki batas permintaan. Jika kuota habis, ImgBed akan terus mencoba sumber lain yang tersedia.

## Penyiapan Tencent Map Key

Tencent Map Key berguna untuk alamat berbahasa Tionghoa, terutama IP Tiongkok daratan.

Saat membuat kunci di Tencent Location Service, aktifkan:

```text
WebServiceAPI
```

Setelah dibuat, tempelkan kunci ke `Tencent Map Key`, lalu simpan.

Jika Anda hanya membutuhkan geolokasi IP dasar dalam bahasa Tionghoa, Tencent Map Key sudah cukup untuk mulai digunakan.

## Yang Perlu Dicek di Manajemen Pengguna

Manajemen Pengguna tersedia dari bagian atas panel admin.

![Manajemen pengguna](../../image/other/用户管理显示.png)

Manajemen Pengguna menampilkan aktivitas upload berdasarkan IP:

| Kolom | Deskripsi |
| --- | --- |
| Sumber IP | IP sumber pengupload. |
| Alamat | Perkiraan lokasi yang diperoleh dari IP. |
| Total ukuran upload | Total ukuran file yang diupload oleh IP ini. |
| Jumlah upload | Jumlah upload dari IP ini. |
| Upload diizinkan | Aktif berarti upload diizinkan. Nonaktif berarti upload diblokir. |

Klik panah di sebelah kiri untuk membuka daftar file yang diupload oleh IP tersebut.

Daftar file menampilkan nama file, pratinjau, ukuran file, hasil moderasi, status file, dan waktu upload. Jika upload terlihat mencurigakan, buka detail IP terlebih dahulu, tinjau file, lalu putuskan apakah upload berikutnya perlu diblokir.

Jika sebuah IP mencurigakan, nonaktifkan `Upload allowed`. Upload berikutnya dari IP tersebut akan diblokir.

## Pencarian, Pengurutan, dan Filter Lanjutan

Di bagian atas Manajemen Pengguna, cari berdasarkan sumber IP atau alamat.

Urutkan berdasarkan waktu, jumlah upload, atau total ukuran upload untuk menemukan pengupload terbaru, pengupload berfrekuensi tinggi, atau IP dengan penggunaan besar.

Untuk investigasi lebih mendalam, buka filter lanjutan.

![Filter lanjutan](../../image/other/用户管理高级筛选.png)

Filter lanjutan mendukung:

| Filter | Penggunaan |
| --- | --- |
| Rentang waktu | Menampilkan IP yang mengupload file dalam periode yang dipilih. |
| Status akses | Memfilter berdasarkan status normal, diblokir, dan status sejenis. |
| Daftar izin/blokir | Memfilter berdasarkan daftar izin, daftar blokir, atau belum diatur. |
| Jenis file | Menampilkan IP yang mengupload gambar, video, audio, dokumen, kode, atau file lain. |
| Ukuran file | Memfilter berdasarkan rentang ukuran file yang diupload. |
| Rating usia | Memfilter berdasarkan belum diatur, General, R12+, R16+, R18, dan rating sejenis. |
| Status file | Memfilter berdasarkan status file saat ini untuk menelusuri file yang tidak normal. |

Klik `Apply Filters` untuk menerapkan filter. Gunakan `Reset` untuk kembali ke semua data.

## Tampilan Mobile

Di mobile, Manajemen Pengguna beralih ke tata letak kartu.

![Manajemen pengguna mobile](../../image/other/手机端显示用户管理效果.png)

Setiap kartu menampilkan IP, alamat, total ukuran upload, jumlah upload, dan sakelar upload diizinkan. Anda dapat mengelola pengguna tanpa menggulir tabel secara horizontal.

## Jika Lokasi Terlihat Salah

Geolokasi IP bersifat perkiraan. Ini bukan alamat jalan yang presisi.

Jika pengguna berada di balik proxy, pusat data, server cloud, atau jaringan lintas negara, lokasi yang ditampilkan dapat berbeda dari lokasi sebenarnya.

Gunakan fitur ini untuk memahami asal secara kasar, menemukan upload tidak normal, dan membantu keputusan pemblokiran. Jangan memperlakukannya sebagai pelacakan presisi.

## Kasus Umum

| Kasus | Arti |
| --- | --- |
| Alamat kosong | IP mungkin belum berhasil di-resolve, atau sumber saat ini sedang tidak tersedia. |
| Bahasa alamat salah | Periksa bahasa geolokasi IP dan apakah sumber yang mendukung bahasa tersebut sudah dikonfigurasi. |
| Alamat menunjukkan pusat data | Banyak proxy, server cloud, dan crawler muncul sebagai alamat pusat data atau ISP. |
| Jumlah upload tinggi | Tinjau IP ini dengan cermat dan blokir upload jika perlu. |
| Total ukuran upload besar | Urutkan atau filter, buka detail IP, lalu periksa file terkait. |
| Perlu memulihkan setelah diblokir | Aktifkan kembali `Upload allowed`. |

## Alur Cepat

```text
Open IP Geolocation in Other Settings
-> Choose IP geolocation language
-> Fill MaxMind, Tencent Map, or ipapi credentials as needed
-> Save settings
-> Open User Management
-> Review IP source, address, total upload size, and upload count
-> Use search, sort, or advanced filters to find abnormal IPs
-> Allow or block uploads as needed
```
