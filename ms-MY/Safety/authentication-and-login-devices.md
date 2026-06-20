# Authentication dan Login Device Management

`Authentication Management` dan `Login Device Management` melindungi ImgBed admin panel, public upload entry dan WebDAV access.

Gunakan halaman ini untuk menetapkan access credentials, menyemak devices yang sudah sign in dan revoke sessions lama apabila perlu.

## Di Mana Untuk Configure

Buka admin panel, kemudian pergi ke:

```text
System Settings -> Security Settings
```

Halaman ini mempunyai dua bahagian utama:

- Authentication Management
- Login Device Management

![Authentication management](../../image/Safety/认证管理界面.png)

## Fungsi Authentication Management

Authentication Management menyimpan access credentials.

Terdapat dua jenis:

- User-side authentication
- Admin-side authentication

## User-Side Authentication

User-side authentication ialah upload password.

Selepas upload password ditetapkan, visitors biasa mesti memasukkannya sebelum menggunakan upload page. Ini berguna apabila anda tidak mahu public upload page terbuka kepada semua orang.

![User login page](../../image/Safety/用户端登录界面.png)

### Menetapkan Upload Password

Apabila upload password dikonfigurasi:

- Visitors mesti memasukkan password sebelum menggunakan upload page.
- Upload hanya tersedia selepas password diterima.
- Jika user-side device sessions diaktifkan, ImgBed akan merekod user-side device tersebut.

Menukar upload password akan menjadikan user-side sessions lama invalid. Visitors perlu memasukkan password baharu semula.

## Admin-Side Authentication

Admin-side authentication menggunakan admin username dan password.

Ini melindungi admin panel. Untuk production use, anda patut sentiasa configure bahagian ini.

![Admin login page](../../image/Safety/管理端登录界面.png)

### Menetapkan Admin Credentials

Apabila admin username dan password dikonfigurasi:

- Admin panel memerlukan login sebelum boleh dibuka.
- Login yang berjaya mencipta admin device record.
- Anda boleh review, clean up atau force devices offline dalam Login Device Management.

Menukar admin username atau password akan menjadikan admin sessions lama invalid. Anda perlu sign in semula.

## Fungsi Login Device Management

Login Device Management memaparkan devices yang pernah sign in.

Ia membantu menyemak:

- Devices mana yang mengakses admin panel.
- Devices mana yang mengakses user-side upload page.
- WebDAV clients mana yang connected.
- Sama ada device session masih valid.
- Sama ada devices lama perlu force offline.

Halaman ini mempunyai tiga tabs:

- Admin
- User
- WebDAV

## Global Cookie Security

Di bahagian atas Login Device Management, anda boleh configure global cookie behavior.

### User Cookie Lifetime

Mengawal berapa hari user-side login boleh kekal active.

Contohnya, jika ditetapkan kepada 14 days, visitors biasanya tidak perlu memasukkan upload password semula dalam tempoh 14 hari.

### Admin Cookie Lifetime

Mengawal berapa hari admin login boleh kekal active.

Contohnya, jika ditetapkan kepada 14 days, administrators biasanya tidak perlu sign in semula dalam tempoh 14 hari.

### Secure Mode

Apabila Secure mode diaktifkan, browsers hanya menghantar login cookies melalui HTTPS.

Aktifkan untuk production HTTPS sites. Jangan aktifkan untuk local HTTP testing, jika tidak anda mungkin melihat keadaan "login berjaya, tetapi refresh membuatkan saya logout".

## Admin Login Devices

Admin tab memaparkan devices yang sign in ke admin panel.

Device records hanya muncul selepas admin credentials dikonfigurasi dan admin panel diakses melalui login.

Setiap device card boleh memaparkan:

- Device dan browser information
- First login IP
- Last active IP
- Login time
- Last active time
- Expiration time
- Current status

Jika anda melihat device yang tidak dikenali, gunakan `Force Offline` untuk menjadikannya invalid.

## Clean Up Old Devices

`Clean Up Old Devices` membuang login records lama dalam tab semasa secara bulk.

Gunakan apabila anda mengesyaki sessions lama mungkin masih active pada devices lain.

## Force Offline

`Force Offline` menjadikan satu device session invalid.

Selepas device dipaksa offline:

- Admin devices mesti sign in semula.
- User-side devices mesti memasukkan upload password semula.
- WebDAV clients mesti authenticate semula.

Expired atau invalid devices juga boleh dibuang.

## Sign Out Current Device

Current device card ditanda sebagai `Current Device`.

Selepas sign out current device:

- Current admin session akan sign out.
- Current user-side session akan sign out.

Anda perlu sign in semula sebelum terus menggunakan bahagian tersebut.
