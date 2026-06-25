# Akses Situs WebDAV (Beta)

Pengaturan WebDAV di Pengaturan Keamanan membuat situs ImgBed Anda tersedia sebagai titik akhir WebDAV.

Setelah diaktifkan, Anda dapat memakai Windows, macOS, pengelola berkas seluler, atau klien apa pun yang kompatibel dengan WebDAV untuk menelusuri, mengunggah, menghapus, dan mengelola berkas ImgBed seperti folder jarak jauh.

Ini adalah entri akses WebDAV untuk situs. Ini berbeda dari kanal penyimpanan WebDAV di Pengaturan Unggahan. Kanal unggahan menyimpan berkas di layanan WebDAV pihak ketiga. Pengaturan ini memungkinkan situs ImgBed Anda menyediakan akses WebDAV untuk klien.

## Di Mana Mengonfigurasinya

Buka panel admin, lalu masuk ke:

```text
System Settings -> Security Settings -> WebDAV
```

Pengaturan yang tersedia:

- Aktifkan
- Nama pengguna
- Kata sandi
- Mode pemuatan gambar
- Kanal bawaan

## Fungsi Fitur Ini

Setelah WebDAV diaktifkan, ImgBed menyediakan URL akses tetap:

```text
https://your-domain.com/dav
```

Gunakan URL ini untuk terhubung ke direktori berkas ImgBed Anda.

Contoh penggunaan yang sesuai:

- Menelusuri berkas ImgBed langsung dari pengelola berkas komputer.
- Menyeret gambar ke folder WebDAV untuk mengunggahnya.
- Mengatur folder ImgBed dari pengelola berkas lokal.
- Memakai perangkat lunak yang kompatibel dengan WebDAV untuk menyinkronkan atau mengelola gambar.
- Mengakses konten ImgBed tanpa membuka panel admin.

## Pengaturan

### Aktifkan

Mengaktifkan titik akhir WebDAV.

Saat dinonaktifkan, klien tidak dapat terhubung melalui WebDAV.

### Nama Pengguna dan Kata Sandi

Kredensial ini digunakan oleh klien WebDAV saat terhubung.

Gunakan nama pengguna dan kata sandi khusus untuk WebDAV. Jangan memakai ulang kata sandi admin atau kata sandi unggah.

Jika nama pengguna atau kata sandi kosong, klien WebDAV tidak dapat terhubung dengan benar.

### Mode Pemuatan Gambar

Mode pemuatan gambar menentukan URL gambar mana yang diprioritaskan klien WebDAV saat membaca gambar.

Pilihan umum:

| Mode | Keterangan |
| --- | --- |
| Pemuatan cerdas | ImgBed memilih berdasarkan konteks. Disarankan untuk penggunaan normal. |
| Asli | Memprioritaskan gambar asli. |
| Gambar mini | Memprioritaskan gambar mini. Berguna untuk pratinjau cepat. |

Jika ragu, pertahankan `Pemuatan cerdas`.

### Kanal Bawaan

Kanal bawaan digunakan untuk unggahan WebDAV.

Saat Anda menyalin berkas ke direktori WebDAV dari Windows atau klien lain, ImgBed mengunggahnya melalui kanal unggahan bawaan yang dipilih.

Jika tidak ada kanal bawaan yang dipilih, penelusuran mungkin berjalan, tetapi unggahan dapat gagal.

## Mengakses WebDAV di Windows 11

Windows 11 dapat menambahkan WebDAV sebagai lokasi jaringan.

1. Buka `PC ini`.
2. Pilih `Tambahkan lokasi jaringan`.
3. Masukkan `https://your-domain.com/dav`.
4. Masukkan nama pengguna dan kata sandi WebDAV saat diminta.
5. Selesaikan panduan. Direktori WebDAV kemudian dapat dibuka di Penjelajah File.

![Tambahkan WebDAV di Windows 11](../../image/Safety/webdav在win11配置.png)

Setelah ditambahkan, direktori WebDAV muncul di Penjelajah File Windows. Anda dapat membuka, menyalin, dan mengelola berkas seperti folder biasa.

![WebDAV di Windows](../../image/Safety/webdav在win显示效果.png)

## Operasi yang Didukung

Setelah koneksi WebDAV berhasil, biasanya Anda dapat:

- Melihat berkas dan folder.
- Mengunggah berkas.
- Membuat folder.
- Mengganti nama berkas atau folder.
- Memindahkan berkas.
- Menghapus berkas.

WebDAV paling cocok untuk akses harian dan pengelolaan berkas skala kecil. Untuk pemindahan besar, penghapusan massal, atau pengaturan yang rumit, gunakan panel admin.

## Manajemen Perangkat Login

Koneksi WebDAV yang berhasil juga muncul di tab WebDAV dalam Manajemen Perangkat Login.

Anda dapat meninjau klien WebDAV di sana dan memaksa perangkat lama offline jika diperlukan.

Jika Anda mengubah nama pengguna atau kata sandi WebDAV, klien lama perlu login lagi.

## FAQ

### Windows Terus Meminta Nama Pengguna dan Kata Sandi

Periksa:

- URL adalah `https://your-domain.com/dav`.
- Nama pengguna dan kata sandi cocok dengan pengaturan WebDAV.
- WebDAV diaktifkan.
- Situs dapat diakses melalui HTTPS.

### Penelusuran Berjalan, tetapi Unggahan Gagal

Periksa `Kanal bawaan`.

Unggahan WebDAV memerlukan kanal unggahan bawaan. Jika kanal ini tidak ada, dinonaktifkan, atau salah konfigurasi, unggahan dapat gagal.

### Kecepatan Akses Tidak Stabil

Performa WebDAV bergantung pada klien, jaringan, jumlah berkas, dan kanal unggahan bawaan.

Jika sebuah direktori memiliki banyak berkas, atur berkas tersebut ke dalam folder daripada menyimpan terlalu banyak berkas dalam satu direktori.

## Rekomendasi Keamanan

- Gunakan HTTPS untuk akses WebDAV.
- Tetapkan kata sandi yang kuat.
- Jangan bagikan kata sandi WebDAV kepada orang yang tidak dipercaya.
- Matikan WebDAV saat tidak digunakan.
- Bersihkan perangkat WebDAV yang tidak digunakan secara berkala di Manajemen Perangkat Login.

## Ukuran Berkas Unggahan WebDAV

Klien WebDAV tidak memakai alur pemotongan berkas besar milik halaman unggah peramban. Untuk berkas yang melebihi batas yang disarankan di bawah, gunakan halaman unggah web.

| Kanal Unggahan Bawaan | Batas Satu Berkas yang Disarankan untuk WebDAV |
| --- | ---: |
| Telegram | 20 MB |
| Discord | 10 MB |
| Cloudflare R2 | 30 MB |
| S3 | 30 MB |
| GitHub Releases | 64 MB |
| GitLab Packages | 64 MB |
| Hugging Face | 20 MB |
| OneDrive | 30 MB |
| Google Drive | 30 MB |
| Dropbox | 30 MB |
| Yandex Disk | 30 MB |
| pCloud | 30 MB |
| WebDAV | 64 MB |
