# Akses Tapak WebDAV (Beta)

Tetapan WebDAV dalam Tetapan Keselamatan mendedahkan tapak ImgBed anda sebagai titik akhir WebDAV.

Selepas diaktifkan, anda boleh menggunakan Windows, macOS, pengurus fail mudah alih atau mana-mana klien yang serasi dengan WebDAV untuk menyemak imbas, memuat naik, memadam dan mengurus fail ImgBed seperti folder jauh.

Ini ialah pintu masuk akses WebDAV untuk tapak. Ia berbeza daripada saluran storan WebDAV dalam Tetapan Muat Naik. Saluran muat naik menyimpan fail dalam perkhidmatan WebDAV pihak ketiga. Tetapan ini membolehkan tapak ImgBed anda menyediakan akses WebDAV kepada klien.

## Tempat Mengkonfigurasi

Buka panel pentadbir, kemudian pergi ke:

```text
System Settings -> Security Settings -> WebDAV
```

Tetapan yang tersedia:

- Aktifkan
- Nama pengguna
- Kata laluan
- Mod pemuatan imej
- Saluran lalai

## Fungsi Ciri Ini

Selepas WebDAV diaktifkan, ImgBed menyediakan URL akses tetap:

```text
https://your-domain.com/dav
```

Gunakan URL ini untuk bersambung ke direktori fail ImgBed anda.

Kegunaan yang sesuai:

- Menyemak imbas fail ImgBed terus daripada pengurus fail komputer.
- Menyeret imej ke folder WebDAV untuk memuat naiknya.
- Menyusun folder ImgBed daripada pengurus fail tempatan.
- Menggunakan perisian yang serasi dengan WebDAV untuk menyegerak atau mengurus imej.
- Mengakses kandungan ImgBed tanpa membuka panel pentadbir.

## Tetapan

### Aktifkan

Menghidupkan titik akhir WebDAV.

Apabila dimatikan, klien tidak boleh bersambung melalui WebDAV.

### Nama Pengguna dan Kata Laluan

Bukti kelayakan ini digunakan oleh klien WebDAV semasa bersambung.

Gunakan nama pengguna dan kata laluan khusus untuk WebDAV. Jangan guna semula kata laluan pentadbir atau kata laluan muat naik.

Jika nama pengguna atau kata laluan kosong, klien WebDAV tidak dapat bersambung dengan betul.

### Mod Pemuatan Imej

Mod pemuatan imej menentukan URL imej mana yang diutamakan oleh klien WebDAV semasa membaca imej.

Pilihan biasa:

| Mod | Penerangan |
| --- | --- |
| Pemuatan pintar | ImgBed memilih berdasarkan konteks. Disyorkan untuk penggunaan biasa. |
| Asal | Mengutamakan imej asal. |
| Imej kecil | Mengutamakan imej kecil. Berguna untuk pratonton pantas. |

Jika tidak pasti, kekalkan `Pemuatan pintar`.

### Saluran Lalai

Saluran lalai digunakan untuk muat naik WebDAV.

Apabila anda menyalin fail ke direktori WebDAV daripada Windows atau klien lain, ImgBed memuat naik fail tersebut melalui saluran muat naik lalai yang dipilih.

Jika tiada saluran lalai dipilih, penyemakan imbas mungkin berfungsi, tetapi muat naik boleh gagal.

## Mengakses WebDAV dalam Windows 11

Windows 11 boleh menambah WebDAV sebagai lokasi rangkaian.

1. Buka `PC ini`.
2. Pilih `Tambah lokasi rangkaian`.
3. Masukkan `https://your-domain.com/dav`.
4. Masukkan nama pengguna dan kata laluan WebDAV apabila diminta.
5. Selesaikan wizard. Direktori WebDAV kemudian boleh dibuka dalam Penjelajah Fail.

![Tambah WebDAV dalam Windows 11](../../image/Safety/webdav在win11配置.png)

Selepas ditambah, direktori WebDAV muncul dalam Penjelajah Fail Windows. Anda boleh membuka, menyalin dan mengurus fail seperti folder biasa.

![WebDAV dalam Windows](../../image/Safety/webdav在win显示效果.png)

## Operasi yang Disokong

Selepas sambungan WebDAV berjaya, biasanya anda boleh:

- Melihat fail dan folder.
- Memuat naik fail.
- Mencipta folder.
- Menamakan semula fail atau folder.
- Memindahkan fail.
- Memadam fail.

WebDAV paling sesuai untuk akses harian dan pengurusan fail berskala kecil. Untuk pemindahan besar, pemadaman pukal atau susunan yang kompleks, gunakan panel pentadbir.

## Pengurusan Peranti Log Masuk

Sambungan WebDAV yang berjaya juga muncul di bawah tab WebDAV dalam Pengurusan Peranti Log Masuk.

Anda boleh menyemak klien WebDAV di sana dan memaksa peranti lama keluar talian apabila perlu.

Jika anda menukar nama pengguna atau kata laluan WebDAV, klien lama perlu log masuk semula.

## FAQ

### Windows Terus Meminta Nama Pengguna dan Kata Laluan

Semak:

- URL ialah `https://your-domain.com/dav`.
- Nama pengguna dan kata laluan sepadan dengan tetapan WebDAV.
- WebDAV diaktifkan.
- Tapak boleh diakses melalui HTTPS.

### Penyemakan Imbas Berfungsi, tetapi Muat Naik Gagal

Semak `Saluran lalai`.

Muat naik WebDAV memerlukan saluran muat naik lalai. Jika saluran itu tiada, dimatikan atau salah konfigurasi, muat naik boleh gagal.

### Kelajuan Akses Tidak Stabil

Prestasi WebDAV bergantung pada klien, rangkaian, bilangan fail dan saluran muat naik lalai.

Jika satu direktori mempunyai banyak fail, susun fail tersebut ke dalam folder dan jangan letakkan terlalu banyak fail dalam satu direktori.

## Cadangan Keselamatan

- Gunakan HTTPS untuk akses WebDAV.
- Tetapkan kata laluan yang kuat.
- Jangan kongsi kata laluan WebDAV dengan orang yang tidak dipercayai.
- Matikan WebDAV apabila tidak digunakan.
- Bersihkan peranti WebDAV yang tidak digunakan secara berkala dalam Pengurusan Peranti Log Masuk.

## Saiz Fail Muat Naik WebDAV

Klien WebDAV tidak menggunakan aliran pemecahan fail besar milik halaman muat naik pelayar. Untuk fail yang melebihi had yang disyorkan di bawah, gunakan halaman muat naik web.

| Saluran Muat Naik Lalai | Had Satu Fail yang Disyorkan untuk WebDAV |
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
