# Pengesahan dan Pengurusan Peranti Log Masuk

`Pengurusan Pengesahan` dan `Pengurusan Peranti Log Masuk` melindungi panel pentadbir ImgBed, pintu masuk muat naik awam dan akses WebDAV.

Gunakan halaman ini untuk menetapkan bukti kelayakan akses, menyemak peranti yang telah log masuk dan membatalkan sesi lama apabila perlu.

## Tempat Mengkonfigurasi

Buka panel pentadbir, kemudian pergi ke:

```text
System Settings -> Security Settings
```

Halaman ini mempunyai dua bahagian utama:

- Pengurusan Pengesahan
- Pengurusan Peranti Log Masuk

![Pengurusan pengesahan](../../image/Safety/认证管理界面.png)

## Fungsi Pengurusan Pengesahan

Pengurusan Pengesahan menyimpan bukti kelayakan akses.

Terdapat dua jenis:

- Pengesahan sisi pengguna
- Pengesahan sisi pentadbir

## Pengesahan Sisi Pengguna

Pengesahan sisi pengguna ialah kata laluan muat naik.

Selepas kata laluan muat naik ditetapkan, pelawat biasa mesti memasukkannya sebelum menggunakan halaman muat naik. Ini berguna apabila anda tidak mahu halaman muat naik awam terbuka kepada semua orang.

![Halaman log masuk pengguna](../../image/Safety/用户端登录界面.png)

### Menetapkan Kata Laluan Muat Naik

Apabila kata laluan muat naik dikonfigurasi:

- Pelawat mesti memasukkan kata laluan sebelum menggunakan halaman muat naik.
- Muat naik hanya tersedia selepas kata laluan diterima.
- Jika sesi peranti sisi pengguna diaktifkan, ImgBed merekodkan peranti sisi pengguna tersebut.

Menukar kata laluan muat naik akan menjadikan sesi sisi pengguna lama tidak sah. Pelawat perlu memasukkan kata laluan baharu sekali lagi.

## Pengesahan Sisi Pentadbir

Pengesahan sisi pentadbir menggunakan nama pengguna pentadbir dan kata laluan pentadbir.

Ini melindungi panel pentadbir. Untuk penggunaan produksi, anda sepatutnya sentiasa mengkonfigurasikannya.

![Halaman log masuk pentadbir](../../image/Safety/管理端登录界面.png)

### Menetapkan Bukti Kelayakan Pentadbir

Apabila nama pengguna pentadbir dan kata laluan pentadbir dikonfigurasi:

- Membuka panel pentadbir memerlukan log masuk.
- Log masuk yang berjaya mencipta rekod peranti pentadbir.
- Anda boleh menyemak, membersihkan atau memaksa peranti keluar talian dalam Pengurusan Peranti Log Masuk.

Menukar nama pengguna pentadbir atau kata laluan pentadbir akan menjadikan sesi pentadbir lama tidak sah. Anda perlu log masuk semula.

## Fungsi Pengurusan Peranti Log Masuk

Pengurusan Peranti Log Masuk memaparkan peranti yang telah log masuk.

Ia membantu anda menyemak:

- Peranti mana yang telah mengakses panel pentadbir.
- Peranti mana yang telah mengakses halaman muat naik sisi pengguna.
- Klien WebDAV mana yang telah bersambung.
- Sama ada sesi peranti masih sah.
- Sama ada peranti lama perlu dipaksa keluar talian.

Halaman ini mempunyai tiga tab:

- Pentadbir
- Pengguna
- WebDAV

## Keselamatan Cookie Global

Di bahagian atas Pengurusan Peranti Log Masuk, anda boleh mengkonfigurasi tingkah laku cookie global.

### Tempoh Hayat Cookie Pengguna

Mengawal berapa hari log masuk sisi pengguna boleh kekal aktif.

Contohnya, jika ditetapkan kepada 14 hari, pelawat biasanya tidak perlu memasukkan kata laluan muat naik semula dalam tempoh 14 hari.

### Tempoh Hayat Cookie Pentadbir

Mengawal berapa hari log masuk pentadbir boleh kekal aktif.

Contohnya, jika ditetapkan kepada 14 hari, pentadbir biasanya tidak perlu log masuk semula dalam tempoh 14 hari.

### Mod Selamat

Apabila mod selamat diaktifkan, pelayar hanya menghantar cookie log masuk melalui HTTPS.

Aktifkan untuk tapak HTTPS produksi. Jangan aktifkan untuk ujian HTTP tempatan, kerana anda mungkin melihat keadaan "log masuk berjaya, tetapi selepas segar semula saya dilog keluar".

## Peranti Log Masuk Pentadbir

Tab Pentadbir memaparkan peranti yang log masuk ke panel pentadbir.

Rekod peranti hanya muncul selepas bukti kelayakan pentadbir dikonfigurasi dan panel pentadbir diakses melalui log masuk.

Setiap kad peranti boleh memaparkan:

- Maklumat peranti dan pelayar
- IP log masuk pertama
- IP aktif terakhir
- Masa log masuk
- Masa aktif terakhir
- Masa tamat tempoh
- Status semasa

Jika anda melihat peranti yang tidak dikenali, gunakan `Paksa Keluar Talian` untuk menjadikannya tidak sah.

## Bersihkan Peranti Lama

`Bersihkan Peranti Lama` membuang rekod log masuk lama dalam tab semasa secara pukal.

Gunakan apabila anda mengesyaki sesi lama mungkin masih aktif pada peranti lain.

## Paksa Keluar Talian

`Paksa Keluar Talian` menjadikan satu sesi peranti tidak sah.

Selepas peranti dipaksa keluar talian:

- Peranti pentadbir mesti log masuk semula.
- Peranti sisi pengguna mesti memasukkan kata laluan muat naik semula.
- Klien WebDAV mesti membuat pengesahan semula.

Peranti yang tamat tempoh atau tidak sah juga boleh dibuang.

## Log Keluar Daripada Peranti Semasa

Kad peranti semasa ditanda sebagai `Peranti Semasa`.

Selepas log keluar daripada peranti semasa:

- Sesi pentadbir semasa akan dilog keluar.
- Sesi sisi pengguna semasa akan dilog keluar.

Anda perlu log masuk semula sebelum terus menggunakan bahagian tersebut.
