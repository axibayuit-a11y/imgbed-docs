# Sandaran Redundan dan Penukaran Sumber Bacaan

Sandaran redundan menyimpan satu salinan tambahan bagi fail yang sudah dimuat naik.

Fail utama dan fail sandaran kedua-duanya boleh digunakan sebagai sumber bacaan. Pelawat biasanya tidak melihat sebarang perbezaan. Perbezaannya hanya pada saluran storan yang menyediakan fail tersebut.

## Perkara Yang Boleh Dilakukan oleh Sandaran Redundan

| Ciri | Penerangan |
| --- | --- |
| Menyimpan salinan tambahan | Menyandarkan fail ke saluran muat naik lain untuk mengurangkan risiko kegagalan satu saluran. |
| Menukar sumber bacaan | Selepas sandaran berjaya, sumber bacaan fail boleh ditukar antara saluran utama dan saluran sandaran. |
| Sandaran satu fail | Menyandarkan satu fail daripada halaman butiran fail. |
| Sandaran kelompok | Memilih beberapa fail dalam halaman pentadbir dan menyandarkannya bersama-sama. |
| Sandaran redundan global | Menyandarkan fail mengikut folder daripada Tetapan Lain. |

## Entri Sandaran Redundan

Buka:

```text
System Settings -> Other Settings -> Redundant Backup
```

![Sandaran redundan](../../image/other/冗余备份截图.png)

Entri ini paling sesuai untuk menambah sandaran pada folder atau semua fail secara kelompok.

Saluran sandaran boleh dipilih secara manual, atau anda boleh memilih penukaran automatik dan membiarkan ImgBed mencari saluran sandaran yang sesuai.

## Sandaran Daripada Butiran Fail

Buka halaman butiran fail dalam panel pentadbir dan klik sandaran.

![Sandaran dalam butiran fail](../../image/other/文件详情里文件备份.png)

Ini paling sesuai untuk menyandarkan satu fail penting apabila diperlukan.

Selepas sandaran berjaya, halaman butiran fail menunjukkan sumber bacaan yang tersedia.

## Sandaran Kelompok Mengikut Pilihan

Dalam panel pentadbir, pilih beberapa fail dan jalankan sandaran kelompok.

![Sandaran kelompok](../../image/other/批量备份截图.png)

Ini paling sesuai untuk memproses sekumpulan fail.

Sandaran mengikut pilihan, sandaran daripada butiran fail dan sandaran redundan di bawah Tetapan Lain semuanya menggunakan sistem sandaran yang sama. Ia hanya entri yang berbeza.

## Menukar Sumber Bacaan Selepas Sandaran

Selepas sandaran selesai, halaman butiran fail membolehkan anda menukar sumber bacaan:

| Sumber Bacaan | Penerangan |
| --- | --- |
| Saluran utama | Membaca daripada saluran muat naik asal. |
| Saluran sandaran | Membaca daripada saluran sandaran. |

![Tukar sumber bacaan selepas sandaran](../../image/other/备份成功切换读取源.png)

Pelawat tidak perlu tahu sama ada fail disajikan daripada saluran utama atau saluran sandaran.

Sumber bacaan yang anda pilih menjadi sumber pilihan untuk akses fail selepas itu.

## Apabila Sandaran Dilangkau

Kes berikut akan dilangkau semasa sandaran. Ini bukan ralat.

| Kes | Sebab Dilangkau |
| --- | --- |
| Sudah disandarkan | Fail yang sudah mempunyai sandaran tidak disandarkan sekali lagi. |
| Saluran utama dan sandaran sama | Sandaran mesti disimpan dalam saluran lain untuk menjadi bermakna. |
| Tiada saluran sandaran yang boleh digunakan | Tiada saluran alternatif yang sesuai tersedia. |

Ringkasnya: sandaran mesti pergi ke saluran lain, dan fail yang sudah disandarkan tidak menggunakan ruang tambahan sekali lagi.

## Saluran Utama Berbanding Saluran Sandaran

| Nama | Maksud |
| --- | --- |
| Saluran utama | Saluran yang digunakan semasa fail pertama kali dimuat naik. |
| Saluran sandaran | Saluran yang menyimpan salinan redundan. |
| Sumber bacaan utama | Fail sedang dibaca daripada saluran utama. |
| Sumber bacaan sandaran | Fail sedang dibaca daripada saluran sandaran. |

Sumber bacaan utama dan sandaran memberikan pengalaman yang sama kepada pengguna.

Selagi fail sandaran tersedia, imej, video dan pautan muat turun terus berfungsi selepas bertukar kepada sumber bacaan sandaran.

## Perkara Yang Berlaku Apabila Fail Dipadam

Apabila fail dipadam, ImgBed memadam kedua-dua fail utama dan fail sandaran.
