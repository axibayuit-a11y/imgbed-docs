# Menambahkan Kanal WebDAV

## Kapan Cocok Digunakan

Gunakan kanal WebDAV jika:

- Anda memiliki NAS, drive cloud, atau layanan penyimpanan objek yang menyediakan endpoint WebDAV;
- Anda ingin gambar yang diunggah disimpan di direktori WebDAV milik sendiri;
- Anda ingin kredensial disimpan di tabel D1 `upload_channels`, bukan terekspos lama di frontend.

## Yang Diperlukan Sebelum Memulai

| Kebutuhan | Tujuan |
| --- | --- |
| Endpoint WebDAV | URL WebDAV server, misalnya `https://nas.example.com/dav`. |
| Nama pengguna | Digunakan untuk masuk ke layanan WebDAV. |
| Kata sandi | Digunakan untuk masuk ke layanan WebDAV. |
| Mode autentikasi | Default adalah `Basic`. Gunakan `Digest` atau negosiasi otomatis hanya jika server memerlukannya. |
| Direktori penyimpanan | Direktori untuk menyimpan berkas. Default adalah `imgbed`. |

## Di Mana Menambahkannya

1. Buka pengaturan sistem.
2. Masuk ke pengaturan unggah.
3. Klik Tambah kanal di kanan atas.
4. Pilih `WebDAV`.

## Referensi Kolom

| Kolom | Fungsi | Wajib |
| --- | --- | --- |
| Nama kanal | Nama yang mudah dikenali untuk kanal WebDAV, misalnya `koofr` atau `nas`. | Ya |
| Endpoint | Endpoint WebDAV lengkap, termasuk `https://`. | Ya |
| Nama pengguna | Nama pengguna login WebDAV. | Ya |
| Kata sandi | Kata sandi login WebDAV. | Ya |
| Mode autentikasi | Biasanya `Basic`; gunakan `Digest` jika server memerlukan autentikasi Digest. | Ya |
| Direktori penyimpanan | Direktori tempat berkas disimpan. Default adalah `imgbed`. | Tidak |

## Contoh: fie.nl.tab.digital

### 1. Membuat Kata Sandi Aplikasi

Buka pengaturan keamanan akun, cari kata sandi aplikasi, lalu buat kata sandi aplikasi baru.

![Membuat kata sandi aplikasi](../../image/upload/webdav/创建应用密码.png)

Setelah dibuat, salin dan simpan kata sandi aplikasi baru. Biasanya hanya ditampilkan satu kali.

![Menyimpan kata sandi aplikasi baru](../../image/upload/webdav/记住新应用程序密码.png)

### 2. Mengisi Konfigurasi WebDAV di ImgBed

Kembali ke ImgBed dan tambahkan kanal WebDAV:

| Kolom UI | Nilai |
| --- | --- |
| Endpoint | URL WebDAV yang disediakan oleh `https://fie.nl.tab.digital/`. |
| Nama pengguna | Nama pengguna WebDAV Anda. |
| Kata sandi | Kata sandi aplikasi yang baru dibuat. |
| Mode autentikasi | Mulai dengan `Basic` dalam sebagian besar kasus. |
| Direktori penyimpanan | Default adalah `imgbed`; Anda juga dapat memakai direktori kustom. |

![Mengisi konfigurasi](../../image/upload/webdav/填写配置.png)

## Perilaku Unggahan Berkas Besar

Kanal WebDAV sekarang memakai unggahan terpecah berbasis sesi yang sebenarnya.

Berkas kecil diunggah sebagai satu berkas utuh. Berkas yang lebih besar dari 64 MiB otomatis dipecah menjadi bagian sekitar 10 MiB dan diunggah ke direktori bagian jarak jauh.

Layanan WebDAV tidak perlu mendukung `partial update` atau penulisan berbasis offset. ImgBed tidak menggabungkan bagian-bagian itu menjadi satu berkas besar di server jarak jauh. Sebagai gantinya, ImgBed menyimpan manifes bagian dan membaca bagian-bagian secara berurutan saat berkas diminta.

Dalam praktiknya:

| Ukuran berkas | Metode unggah | Tata letak penyimpanan jarak jauh |
| --- | --- | --- |
| 64 MiB atau kurang | Unggahan normal | Satu berkas utuh |
| Lebih dari 64 MiB | Unggahan terpecah berbasis sesi yang sebenarnya | Direktori bagian berisi beberapa berkas bagian |

Direktori bagian hanya memengaruhi tata letak penyimpanan jarak jauh. URL berkas di ImgBed tidak berubah. Pengguna tetap mengakses berkas melalui tautan asli `/file/...`.

## Langkah Konfigurasi

1. Buka pengaturan unggah.
2. Klik Tambah kanal.
3. Pilih `WebDAV`.
4. Masukkan nama kanal yang mudah dikenali, misalnya `koofr`.
5. Masukkan endpoint WebDAV, misalnya `https://app.koofr.net/dav/Koofr`.
6. Masukkan nama pengguna dan kata sandi.
7. Biarkan mode autentikasi sebagai `Basic` secara default.
8. Biarkan direktori penyimpanan sebagai `imgbed`, atau ubah ke direktori Anda sendiri.
9. Klik Simpan.
10. Setelah disimpan, periksa kartu kanal, lakukan kueri kapasitas jika tersedia, lalu unggah berkas uji.

## Verifikasi

| Pemeriksaan | Cara memeriksa |
| --- | --- |
| Kartu kanal muncul | Setelah disimpan, halaman pengaturan unggah harus menampilkan kartu kanal WebDAV. |
| Kanal aktif | Sakelar di kanan atas kartu harus tetap aktif. |
| Kredensial tersimpan | Tampilan detail harus menampilkan Endpoint, nama pengguna, mode autentikasi, dan direktori penyimpanan. |
| Unggahan berkas kecil berjalan | Unggah gambar uji dan pastikan berkas muncul di direktori WebDAV. |
| Aturan berkas besar berjalan | Berkas yang lebih besar dari 64 MiB memakai unggahan terpecah dan membuat direktori bagian jarak jauh. |
| Kueri kapasitas berjalan | Jika server mendukung informasi kapasitas, kueri akan menampilkan kapasitas terpakai dan total. |

![Kueri kuota berhasil](../../image/upload/webdav/查询额度成功.png)

## FAQ

### Mengapa berkas WebDAV besar membuat direktori bagian?

Ini adalah metode penyimpanan saat ini untuk berkas besar.

Berkas yang lebih besar dari 64 MiB tidak digabung menjadi satu berkas besar jarak jauh. Berkas disimpan sebagai direktori bagian. ImgBed mencatat manifes bagian dan mengembalikan konten lengkap dengan membaca bagian-bagian secara berurutan.

### Jika unggahan berkas besar gagal, apa yang perlu diperiksa dulu?

Periksa Endpoint, nama pengguna, kata sandi, dan direktori penyimpanan terlebih dahulu. Lalu pastikan layanan WebDAV mengizinkan pembuatan direktori, penulisan berkas, dan pembacaan berkas.

Jika kueri kapasitas gagal tetapi unggahan berkas kecil berjalan, server mungkin tidak mendukung informasi kapasitas atau membatasinya. Itu tidak selalu berarti unggahan tidak tersedia.

### Mode autentikasi mana yang harus digunakan?

Mulailah dengan `Basic`.

Jika server secara eksplisit memerlukan autentikasi Digest, gunakan `Digest`.

Jika tidak yakin, gunakan negosiasi otomatis.

## Daftar Cepat

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
