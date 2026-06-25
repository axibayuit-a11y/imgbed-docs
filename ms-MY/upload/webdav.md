# Tambah Saluran WebDAV

## Paling Sesuai

Gunakan saluran WebDAV apabila:

- Anda mempunyai NAS, pemacu awan atau perkhidmatan storan objek yang menyediakan endpoint WebDAV.
- Anda mahu imej yang dimuat naik disimpan dalam direktori WebDAV anda sendiri.
- Anda mahu kelayakan disimpan dalam jadual D1 `upload_channels`, bukannya terdedah lama dalam frontend.

## Perkara Yang Diperlukan Sebelum Bermula

| Keperluan | Tujuan |
| --- | --- |
| Endpoint WebDAV | URL WebDAV sisi pelayan, contohnya `https://nas.example.com/dav`. |
| Nama pengguna | Digunakan untuk log masuk ke perkhidmatan WebDAV. |
| Kata laluan | Digunakan untuk log masuk ke perkhidmatan WebDAV. |
| Mod pengesahan | Lalai ialah `Basic`. Gunakan `Digest` atau rundingan automatik hanya jika diperlukan oleh pelayan. |
| Direktori storan | Direktori yang digunakan untuk menyimpan fail. Lalai ialah `imgbed`. |

## Tempat Menambahkannya

1. Buka Tetapan Sistem.
2. Pergi ke Tetapan Muat Naik.
3. Klik Tambah Saluran di penjuru kanan atas.
4. Pilih `WebDAV`.

## Rujukan Medan

| Medan | Fungsi | Wajib |
| --- | --- | --- |
| Nama saluran | Nama mesra untuk saluran WebDAV ini, seperti `koofr` atau `nas`. | Ya |
| Endpoint | Endpoint WebDAV penuh, termasuk `https://`. | Ya |
| Nama pengguna | Nama pengguna log masuk WebDAV. | Ya |
| Kata laluan | Kata laluan log masuk WebDAV. | Ya |
| Mod pengesahan | Biasanya `Basic`; gunakan `Digest` jika pelayan memerlukan digest authentication. | Ya |
| Direktori storan | Direktori tempat fail disimpan. Lalai ialah `imgbed`. | Tidak |

## Contoh: fie.nl.tab.digital

### 1. Buat Kata Laluan App

Buka tetapan keselamatan akaun anda, cari kata laluan aplikasi dan buat kata laluan app baharu.

![Buat kata laluan app](../../image/upload/webdav/创建应用密码.png)

Selepas dibuat, salin dan simpan kata laluan app baharu dengan segera. Biasanya ia hanya dipaparkan sekali.

![Simpan kata laluan app baharu](../../image/upload/webdav/记住新应用程序密码.png)

### 2. Isi Konfigurasi WebDAV Dalam ImgBed

Kembali ke ImgBed dan tambah saluran WebDAV:

| Medan UI | Nilai |
| --- | --- |
| Endpoint | URL WebDAV yang disediakan oleh `https://fie.nl.tab.digital/`. |
| Nama pengguna | Nama pengguna WebDAV anda. |
| Kata laluan | Kata laluan app yang baru anda buat. |
| Mod pengesahan | Mulakan dengan `Basic` dalam kebanyakan kes. |
| Direktori storan | Lalai ialah `imgbed`; anda juga boleh menggunakan direktori tersuai. |

![Isi konfigurasi](../../image/upload/webdav/填写配置.png)

## Kelakuan Muat Naik Fail Besar

Saluran WebDAV kini menggunakan muat naik berketul berasaskan sesi yang sebenar.

Fail kecil dimuat naik sebagai satu fail lengkap. Fail yang lebih besar daripada 64 MiB akan dipecahkan secara automatik kepada ketul sekitar 10 MiB dan dimuat naik ke direktori ketul jauh.

Perkhidmatan WebDAV tidak perlu menyokong `partial update` atau penulisan berasaskan offset. ImgBed tidak menggabungkan ketul menjadi satu fail besar pada pelayan jauh. Sebaliknya, ImgBed menyimpan manifest ketul dan membaca ketul mengikut urutan apabila fail diminta.

Dalam amalan:

| Saiz Fail | Kaedah Muat Naik | Susun Atur Storan Jauh |
| --- | --- | --- |
| 64 MiB atau lebih kecil | Muat naik biasa | Satu fail lengkap |
| Lebih besar daripada 64 MiB | Muat naik berketul berasaskan sesi sebenar | Direktori ketul yang mengandungi berbilang fail ketul |

Direktori ketul hanya mempengaruhi susun atur storan jauh. Ia tidak mengubah URL fail dalam ImgBed. Pengguna masih mengakses fail melalui pautan asal `/file/...`.

## Langkah Persediaan

1. Buka Tetapan Muat Naik.
2. Klik Tambah Saluran.
3. Pilih `WebDAV`.
4. Masukkan nama saluran yang mudah dikenal pasti, contohnya `koofr`.
5. Masukkan endpoint WebDAV, contohnya `https://app.koofr.net/dav/Koofr`.
6. Masukkan nama pengguna dan kata laluan.
7. Kekalkan mod pengesahan sebagai `Basic` secara lalai.
8. Kekalkan direktori storan sebagai `imgbed`, atau tukar kepada direktori anda sendiri.
9. Klik Simpan.
10. Selepas menyimpan, semak kad saluran, tanya kapasiti jika tersedia, dan muat naik fail ujian.

## Cara Mengesahkan

| Semakan | Cara Mengesahkan |
| --- | --- |
| Kad saluran muncul | Selepas menyimpan, halaman Tetapan Muat Naik sepatutnya memaparkan kad saluran WebDAV. |
| Saluran didayakan | Suis di penjuru kanan atas kad sepatutnya kekal hidup. |
| Kelayakan disimpan | Paparan butiran sepatutnya menunjukkan Endpoint, nama pengguna, mod pengesahan dan direktori storan. |
| Muat naik fail kecil berfungsi | Muat naik imej ujian dan sahkan fail muncul dalam direktori WebDAV. |
| Peraturan fail besar berfungsi | Fail yang lebih besar daripada 64 MiB menggunakan muat naik berketul dan membuat direktori ketul jauh. |
| Pertanyaan kapasiti berfungsi | Jika pelayan menyokong maklumat kapasiti, pertanyaan akan menunjukkan kapasiti digunakan dan jumlah kapasiti. |

![Pertanyaan kuota berjaya](../../image/upload/webdav/查询额度成功.png)

## FAQ

### Mengapa fail WebDAV besar membuat direktori ketul?

Ini ialah kaedah storan semasa untuk fail besar.

Fail yang lebih besar daripada 64 MiB tidak digabungkan menjadi satu fail jauh yang besar. Fail tersebut disimpan sebagai direktori ketul. ImgBed merekodkan manifest ketul dan mengembalikan kandungan lengkap dengan membaca ketul mengikut urutan.

### Apakah yang perlu disemak dahulu jika muat naik fail besar gagal?

Semak Endpoint, nama pengguna, kata laluan dan direktori storan dahulu. Kemudian sahkan bahawa perkhidmatan WebDAV membenarkan penciptaan direktori, penulisan fail dan pembacaan fail.

Jika pertanyaan kapasiti gagal tetapi muat naik fail kecil berfungsi, pelayan mungkin tidak menyokong atau mungkin mengehadkan laporan kapasiti. Itu tidak semestinya bermaksud muat naik tidak tersedia.

### Mod pengesahan mana yang patut digunakan?

Mulakan dengan `Basic`.

Jika pelayan secara jelas memerlukan digest authentication, gunakan `Digest`.

Jika anda tidak pasti, gunakan rundingan automatik.

## Senarai Semak Pantas

```text
Prepare WebDAV endpoint, username, and password
-> Open Upload Settings
-> Add Channel
-> Select WebDAV
-> Enter Endpoint / username / password
-> Keep authentication mode as Basic by default
-> Keep storage directory as imgbed by default
-> Save
-> Query capacity
-> Upload a test file
```
