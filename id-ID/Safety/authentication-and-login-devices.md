# Authentication dan Login Device Management

`Authentication Management` dan `Login Device Management` melindungi ImgBed admin panel, public upload entry, dan WebDAV access.

Gunakan halaman ini untuk mengatur access credentials, meninjau devices yang sudah sign in, dan revoke sessions lama saat diperlukan.

## Di Mana Mengonfigurasinya

Buka admin panel, lalu masuk ke:

```text
System Settings -> Security Settings
```

Halaman ini memiliki dua area utama:

- Authentication Management
- Login Device Management

![Authentication management](../../image/Safety/认证管理界面.png)

## Fungsi Authentication Management

Authentication Management menyimpan access credentials.

Ada dua jenis:

- User-side authentication
- Admin-side authentication

## User-Side Authentication

User-side authentication adalah upload password.

Setelah upload password diatur, visitors biasa harus memasukkannya sebelum menggunakan upload page. Ini berguna jika Anda tidak ingin public upload page terbuka untuk semua orang.

![User login page](../../image/Safety/用户端登录界面.png)

### Mengatur Upload Password

Saat upload password dikonfigurasi:

- Visitors harus memasukkan password sebelum menggunakan upload page.
- Upload hanya tersedia setelah password diterima.
- Jika user-side device sessions diaktifkan, ImgBed mencatat user-side device tersebut.

Mengubah upload password akan membuat user-side sessions lama invalid. Visitors perlu memasukkan password baru lagi.

## Admin-Side Authentication

Admin-side authentication memakai admin username dan password.

Ini melindungi admin panel. Untuk production use, sebaiknya selalu dikonfigurasi.

![Admin login page](../../image/Safety/管理端登录界面.png)

### Mengatur Admin Credentials

Saat admin username dan password dikonfigurasi:

- Membuka admin panel akan meminta login.
- Login berhasil membuat admin device record.
- Anda dapat review, clean up, atau force devices offline di Login Device Management.

Mengubah admin username atau password akan membuat admin sessions lama invalid. Anda perlu sign in lagi.

## Fungsi Login Device Management

Login Device Management menampilkan devices yang pernah sign in.

Ini membantu memeriksa:

- Devices mana yang mengakses admin panel.
- Devices mana yang mengakses user-side upload page.
- WebDAV clients mana yang connected.
- Apakah device session masih valid.
- Apakah devices lama perlu force offline.

Halaman ini memiliki tiga tabs:

- Admin
- User
- WebDAV

## Global Cookie Security

Di bagian atas Login Device Management, Anda dapat mengatur global cookie behavior.

### User Cookie Lifetime

Mengontrol berapa hari user-side login dapat tetap active.

Contohnya, jika diatur ke 14 days, visitors biasanya tidak perlu memasukkan upload password lagi dalam 14 hari.

### Admin Cookie Lifetime

Mengontrol berapa hari admin login dapat tetap active.

Contohnya, jika diatur ke 14 days, administrators biasanya tidak perlu sign in lagi dalam 14 hari.

### Secure Mode

Saat Secure mode aktif, browsers hanya mengirim login cookies lewat HTTPS.

Aktifkan untuk production HTTPS sites. Jangan aktifkan untuk local HTTP testing, atau Anda bisa melihat perilaku "login berhasil, tetapi refresh membuat saya logout".

## Admin Login Devices

Admin tab menampilkan devices yang sign in ke admin panel.

Device records hanya muncul setelah admin credentials dikonfigurasi dan admin panel diakses lewat login.

Setiap device card dapat menampilkan:

- Device dan browser information
- First login IP
- Last active IP
- Login time
- Last active time
- Expiration time
- Current status

Jika melihat device yang tidak dikenal, gunakan `Force Offline` untuk membuatnya invalid.

## Clean Up Old Devices

`Clean Up Old Devices` menghapus login records lama di tab saat ini secara bulk.

Gunakan saat Anda mencurigai sessions lama masih active di devices lain.

## Force Offline

`Force Offline` membuat satu device session invalid.

Setelah device dipaksa offline:

- Admin devices harus sign in lagi.
- User-side devices harus memasukkan upload password lagi.
- WebDAV clients harus authenticate lagi.

Expired atau invalid devices juga dapat dihapus.

## Sign Out Current Device

Current device card ditandai sebagai `Current Device`.

Setelah sign out current device:

- Current admin session akan sign out.
- Current user-side session akan sign out.

Anda perlu sign in lagi sebelum melanjutkan penggunaan area tersebut.
