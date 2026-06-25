# Menambahkan Kanal pCloud

## Cocok Untuk

- Anda memiliki akun pCloud dan ingin ImgBed menyimpan gambar di pCloud.
- Anda tidak keberatan menggunakan email dan kata sandi akun pCloud sebagai kredensial kanal.

## Yang Diperlukan Sebelum Memulai

| Kebutuhan | Alasan Diperlukan |
| --- | --- |
| Email akun pCloud | Digunakan untuk masuk ke API pCloud |
| Kata sandi pCloud | Digunakan untuk masuk ke API pCloud |
| Host API | Nilai bawaannya `api.pcloud.com`. Akun EU dapat menggunakan `eapi.pcloud.com`. |
| Direktori penyimpanan | Tempat berkas disimpan. Nilai bawaannya `imgbed`. |

## Tempat Menambahkannya

1. Buka Pengaturan Sistem.
2. Buka Pengaturan Unggah.
3. Klik `Add Channel` di sudut kanan atas.
4. Pilih `pCloud`.

## Referensi Kolom

| Kolom | Fungsi | Wajib |
| --- | --- | --- |
| Nama kanal | Mengidentifikasi kanal pCloud ini, misalnya `Personal pCloud` | Ya |
| Email akun | Email yang Anda gunakan untuk masuk ke pCloud | Ya |
| Kata sandi | Kata sandi pCloud Anda | Ya |
| Host API | Host API pCloud. Nilai bawaannya `api.pcloud.com`. | Tidak |
| Direktori penyimpanan | Direktori yang digunakan untuk menyimpan berkas. Nilai bawaannya `imgbed`. | Tidak |

Pilih host API berdasarkan wilayah akun Anda:

| Wilayah Akun | Host API |
| --- | --- |
| Default / AS | `api.pcloud.com` |
| Eropa | `eapi.pcloud.com` |

## Langkah Konfigurasi

1. Buka Pengaturan Unggah.
2. Klik `Add Channel`.
3. Pilih `pCloud`.
4. Masukkan nama kanal yang mudah Anda kenali.
5. Masukkan email akun pCloud Anda.
6. Masukkan kata sandi pCloud Anda.
7. Biarkan host API sebagai `api.pcloud.com`, atau gunakan `eapi.pcloud.com` untuk akun EU.
8. Biarkan direktori penyimpanan sebagai `imgbed`, atau ubah ke folder yang Anda inginkan.
9. Simpan kanal.

![Mengonfigurasi kanal](../../image/upload/pcloud/配置渠道.png)

## Cara Memverifikasinya

| Pemeriksaan | Hasil yang Diharapkan |
| --- | --- |
| Kartu kanal | Kartu kanal pCloud muncul setelah disimpan. |
| Sakelar kanal | Sakelar pada kartu tetap aktif. |
| Tampilan email | Kartu menampilkan email pCloud yang terhubung. |
| Kueri kuota | Setelah kueri berhasil, kapasitas terpakai dan total kapasitas ditampilkan. |
| Uji unggah | Gambar uji muncul di direktori penyimpanan pCloud yang dikonfigurasi. |

![Kueri kuota berhasil](../../image/upload/pcloud/查询额度成功.png)

## Pemecahan Masalah

### Mengapa Tidak OAuth2?

OAuth2 pCloud tidak tersedia sebagai layanan mandiri secara default. Anda perlu mengirim email ke pCloud dan meminta mereka mengaktifkannya.

Alur OAuth2 pCloud saat ini juga tidak mendukung alur kerja tautan unggah berumur pendek yang dibutuhkan ImgBed. Karena itu, kanal ini menggunakan email dan kata sandi akun untuk masuk.

### Host API Mana yang Harus Digunakan?

Default:

```text
api.pcloud.com
```

Untuk akun EU:

```text
eapi.pcloud.com
```

## Alur Cepat

```text
Prepare your pCloud email and password
-> Open Upload Settings
-> Add Channel
-> Choose pCloud
-> Fill channel name / email / password
-> Keep API host as api.pcloud.com unless your account is in Europe
-> Keep storage directory as imgbed unless you need another folder
-> Save
-> Query quota
-> Upload a test image
```
