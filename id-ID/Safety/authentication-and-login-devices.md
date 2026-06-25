# Manajemen Autentikasi dan Perangkat Login

`Manajemen Autentikasi` dan `Manajemen Perangkat Login` melindungi panel admin ImgBed, pintu unggah publik, dan akses WebDAV.

Gunakan halaman ini untuk mengatur kredensial akses, meninjau perangkat yang sudah login, dan mencabut sesi lama saat diperlukan.

## Di Mana Mengonfigurasinya

Buka panel admin, lalu masuk ke:

```text
System Settings -> Security Settings
```

Halaman ini memiliki dua area utama:

- Manajemen Autentikasi
- Manajemen Perangkat Login

![Manajemen autentikasi](../../image/Safety/认证管理界面.png)

## Fungsi Manajemen Autentikasi

Manajemen Autentikasi menyimpan kredensial akses.

Ada dua jenis:

- Autentikasi sisi pengguna
- Autentikasi sisi admin

## Autentikasi Sisi Pengguna

Autentikasi sisi pengguna adalah kata sandi unggah.

Setelah kata sandi unggah diatur, pengunjung biasa harus memasukkannya sebelum menggunakan halaman unggah. Ini berguna jika Anda tidak ingin halaman unggah publik terbuka untuk semua orang.

![Halaman login pengguna](../../image/Safety/用户端登录界面.png)

### Mengatur Kata Sandi Unggah

Saat kata sandi unggah dikonfigurasi:

- Pengunjung harus memasukkan kata sandi sebelum menggunakan halaman unggah.
- Unggahan hanya tersedia setelah kata sandi diterima.
- Jika sesi perangkat sisi pengguna diaktifkan, ImgBed mencatat perangkat sisi pengguna tersebut.

Mengubah kata sandi unggah akan membuat sesi sisi pengguna lama tidak berlaku. Pengunjung perlu memasukkan kata sandi baru lagi.

## Autentikasi Sisi Admin

Autentikasi sisi admin memakai nama pengguna admin dan kata sandi admin.

Ini melindungi panel admin. Untuk penggunaan produksi, Anda sebaiknya selalu mengonfigurasinya.

![Halaman login admin](../../image/Safety/管理端登录界面.png)

### Mengatur Kredensial Admin

Saat nama pengguna admin dan kata sandi admin dikonfigurasi:

- Membuka panel admin akan meminta login.
- Login berhasil akan membuat catatan perangkat admin.
- Anda dapat meninjau, membersihkan, atau memaksa perangkat offline di Manajemen Perangkat Login.

Mengubah nama pengguna admin atau kata sandi admin akan membuat sesi admin lama tidak berlaku. Anda perlu login lagi.

## Fungsi Manajemen Perangkat Login

Manajemen Perangkat Login menampilkan perangkat yang pernah login.

Ini membantu Anda memeriksa:

- Perangkat mana yang pernah mengakses panel admin.
- Perangkat mana yang pernah mengakses halaman unggah sisi pengguna.
- Klien WebDAV mana yang pernah terhubung.
- Apakah sesi perangkat masih valid.
- Apakah perangkat lama perlu dipaksa offline.

Halaman ini memiliki tiga tab:

- Admin
- Pengguna
- WebDAV

## Keamanan Cookie Global

Di bagian atas Manajemen Perangkat Login, Anda dapat mengatur perilaku cookie global.

### Masa Aktif Cookie Pengguna

Mengontrol berapa hari login sisi pengguna dapat tetap aktif.

Misalnya, jika diatur ke 14 hari, pengunjung biasanya tidak perlu memasukkan kata sandi unggah lagi selama 14 hari.

### Masa Aktif Cookie Admin

Mengontrol berapa hari login admin dapat tetap aktif.

Misalnya, jika diatur ke 14 hari, administrator biasanya tidak perlu login lagi selama 14 hari.

### Mode Aman

Saat mode aman diaktifkan, peramban hanya mengirim cookie login melalui HTTPS.

Aktifkan untuk situs produksi yang memakai HTTPS. Jangan aktifkan untuk pengujian HTTP lokal, karena Anda mungkin melihat perilaku "login berhasil, tetapi setelah refresh saya keluar".

## Perangkat Login Admin

Tab Admin menampilkan perangkat yang login ke panel admin.

Catatan perangkat hanya muncul setelah kredensial admin dikonfigurasi dan panel admin diakses melalui login.

Setiap kartu perangkat dapat menampilkan:

- Informasi perangkat dan peramban
- IP login pertama
- IP aktif terakhir
- Waktu login
- Waktu aktif terakhir
- Waktu kedaluwarsa
- Status saat ini

Jika Anda melihat perangkat yang tidak dikenal, gunakan `Paksa Offline` untuk membuatnya tidak berlaku.

## Bersihkan Perangkat Lama

`Bersihkan Perangkat Lama` menghapus catatan login lama secara massal pada tab saat ini.

Gunakan saat Anda mencurigai sesi lama mungkin masih aktif di perangkat lain.

## Paksa Offline

`Paksa Offline` membuat satu sesi perangkat tidak berlaku.

Setelah perangkat dipaksa offline:

- Perangkat admin harus login lagi.
- Perangkat sisi pengguna harus memasukkan kata sandi unggah lagi.
- Klien WebDAV harus melakukan autentikasi lagi.

Perangkat yang kedaluwarsa atau tidak valid juga dapat dihapus.

## Keluar dari Perangkat Saat Ini

Kartu perangkat saat ini ditandai sebagai `Perangkat Saat Ini`.

Setelah keluar dari perangkat saat ini:

- Sesi admin saat ini akan keluar.
- Sesi sisi pengguna saat ini akan keluar.

Anda perlu login lagi sebelum melanjutkan penggunaan area tersebut.
