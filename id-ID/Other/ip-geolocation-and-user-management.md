# IP Geolocation dan User Management

IP geolocation mengubah alamat IP di catatan uploader, login devices, dan log sejenis menjadi perkiraan lokasi.

Setelah dikonfigurasi, panel admin bisa menampilkan asal upload dan akses dengan lebih jelas. User Management juga memungkinkan Anda memblokir atau memulihkan akses upload untuk alamat IP yang mencurigakan.

## Lokasi Pengaturan

Buka:

```text
System Settings -> Other Settings -> IP Geolocation
```

![IP geolocation](../../image/other/ip定位/ip定位.png)

## Pengaturan yang Tersedia

Alur IP geolocation terbaru mendukung beberapa sumber, bukan hanya bergantung pada satu layanan peta.

| Pengaturan | Fungsi |
| --- | --- |
| IP geolocation language | Memilih bahasa tampilan, misalnya English, Simplified Chinese, Japanese, French, dan lainnya. |
| MaxMind Account ID | Account ID MaxMind untuk MaxMind GeoLite Web Service. |
| MaxMind License Key | License Key MaxMind. |
| Tencent Map Key | Key Tencent Location Service. Berguna untuk alamat China dan IP China daratan. |
| ipapi Key | Key APILayer ipapi. Mendukung IP geolocation multibahasa. |

Isi hanya layanan yang Anda perlukan. Tidak semua field harus dikonfigurasi.

Jika tidak ada key yang diisi, ImgBed tetap mencoba sumber gratis bawaan, tetapi stabilitas, dukungan bahasa, dan presisinya mungkin lebih rendah dibanding layanan yang Anda konfigurasi sendiri.

## Pilihan yang Disarankan

Jika kebutuhan utama Anda adalah alamat China:

1. Atur IP geolocation language ke Simplified Chinese.
2. Konfigurasikan Tencent Map Key.
3. Opsional, tambahkan MaxMind atau ipapi sebagai fallback source.

Jika kebutuhan utama Anda adalah alamat English atau multibahasa:

1. Pilih bahasa yang dibutuhkan.
2. Konfigurasikan MaxMind Account ID dan License Key.
3. Tambahkan ipapi Key jika butuh hasil multibahasa yang lebih baik.

## Setup MaxMind

MaxMind membutuhkan:

```text
MaxMind Account ID
MaxMind License Key
```

Cari account ID di dashboard MaxMind, lalu buat License Key dari halaman License Keys.

![MaxMind key config](../../image/other/ip定位/maxmind的key配置.png)

Setelah dibuat, tempelkan Account ID dan License Key ke ImgBed, lalu simpan.

Paket gratis MaxMind cukup untuk penggunaan harian, tetapi tetap memiliki batas request. Jika kuota habis, ImgBed akan melanjutkan dengan mencoba sumber lain yang tersedia.

## Setup ipapi

ipapi memakai API Key dari APILayer.

Buka console ipapi dan salin API Key yang ditampilkan di sana.

![ipapi config](../../image/other/ip定位/ipapi配置.png)

Tempelkan ke field `ipapi Key` di ImgBed, lalu simpan.

ipapi mendukung IP geolocation multibahasa dan berguna saat Anda ingin alamat tampil dalam bahasa tertentu. Paket gratisnya juga memiliki batas request. Jika kuota habis, ImgBed akan mencoba sumber lain yang tersedia.

## Setup Tencent Map Key

Tencent Map Key berguna untuk alamat China, terutama IP China daratan.

Saat membuat key di Tencent Location Service, aktifkan:

```text
WebServiceAPI
```

Setelah dibuat, tempelkan key ke `Tencent Map Key`, lalu simpan.

Jika hanya membutuhkan IP geolocation China dasar, Tencent Map Key sudah cukup untuk memulai.

## Yang Perlu Dicek di User Management

User Management bisa dibuka dari bagian atas panel admin.

![User management](../../image/other/用户管理显示.png)

User Management menampilkan aktivitas upload berdasarkan IP:

| Field | Keterangan |
| --- | --- |
| IP source | IP asal uploader. |
| Address | Perkiraan lokasi yang didapat dari IP. |
| Total upload size | Total ukuran file yang diupload dari IP ini. |
| Upload count | Jumlah upload dari IP ini. |
| Upload allowed | Aktif berarti upload diizinkan. Nonaktif berarti upload diblokir. |

Klik panah di sebelah kiri untuk membuka daftar file yang diupload oleh IP tersebut.

Daftar file menampilkan nama file, preview, ukuran file, hasil moderation, status file, dan waktu upload. Jika aktivitas upload terlihat mencurigakan, buka detail IP lebih dulu, tinjau filenya, lalu putuskan apakah upload berikutnya perlu diblokir.

Jika sebuah IP mencurigakan, matikan `Upload allowed`. Upload berikutnya dari IP tersebut akan diblokir.

## Search, Sort, dan Advanced Filters

Di bagian atas User Management, cari berdasarkan IP source atau address.

Urutkan berdasarkan waktu, upload count, atau total upload size untuk menemukan uploader terbaru, uploader dengan frekuensi tinggi, atau IP dengan pemakaian besar.

Untuk investigasi lebih detail, buka advanced filters.

![Advanced filters](../../image/other/用户管理高级筛选.png)

Advanced filters mendukung:

| Filter | Penggunaan |
| --- | --- |
| Time range | Menampilkan IP yang mengupload file dalam periode tertentu. |
| Access status | Memfilter berdasarkan status normal, blocked, dan status sejenis. |
| Allow/block list | Memfilter berdasarkan allowlist, blocklist, atau belum diatur. |
| File type | Menampilkan IP yang mengupload gambar, video, audio, dokumen, kode, atau file lain. |
| File size | Memfilter berdasarkan rentang ukuran file yang diupload. |
| Age rating | Memfilter berdasarkan unset, General, R12+, R16+, R18, dan rating sejenis. |
| File status | Memfilter berdasarkan status file saat ini untuk menelusuri file bermasalah. |

Klik `Apply Filters` untuk menerapkan filter. Gunakan `Reset` untuk kembali ke semua data.

## Tampilan Mobile

Di mobile, User Management berubah menjadi layout card.

![Mobile user management](../../image/other/手机端显示用户管理效果.png)

Setiap card menampilkan IP, address, total upload size, upload count, dan switch upload allowed. Anda bisa mengelola pengguna tanpa perlu menggeser tabel secara horizontal.

## Jika Lokasi Terlihat Salah

IP geolocation bersifat perkiraan. Ini bukan alamat jalan yang presisi.

Jika pengguna memakai proxy, data center, cloud server, atau jaringan lintas negara, lokasi yang ditampilkan bisa berbeda dari lokasi sebenarnya.

Gunakan fitur ini untuk memahami asal secara kasar, menemukan upload abnormal, dan membantu keputusan pemblokiran. Jangan memperlakukannya sebagai pelacakan presisi.

## Kasus Umum

| Kasus | Arti |
| --- | --- |
| Address kosong | IP mungkin belum berhasil di-resolve, atau sumber yang dipakai sedang tidak tersedia. |
| Bahasa address salah | Periksa IP geolocation language dan apakah sumber yang mendukung bahasa tersebut sudah dikonfigurasi. |
| Address menunjukkan data center | Banyak proxy, cloud server, dan crawler muncul sebagai alamat data center atau ISP. |
| Upload count tinggi | Tinjau IP ini dengan teliti dan blokir upload jika perlu. |
| Total upload size besar | Urutkan atau filter, buka detail IP, lalu periksa file tertentu. |
| Perlu memulihkan setelah diblokir | Aktifkan kembali `Upload allowed`. |

## Alur Cepat

```text
Buka IP Geolocation di Other Settings
-> Pilih IP geolocation language
-> Isi credential MaxMind, Tencent Map, atau ipapi sesuai kebutuhan
-> Simpan pengaturan
-> Buka User Management
-> Tinjau IP source, address, total upload size, dan upload count
-> Gunakan search, sort, atau advanced filters untuk menemukan IP abnormal
-> Izinkan atau blokir upload sesuai kebutuhan
```
