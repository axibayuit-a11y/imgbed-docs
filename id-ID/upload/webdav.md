# Menambahkan WebDAV Channel

## Paling Cocok Untuk

Gunakan WebDAV channel saat:

- Anda memiliki NAS, cloud drive, atau object storage service yang menyediakan WebDAV endpoint.
- Anda ingin uploaded images disimpan di WebDAV directory milik sendiri.
- Anda ingin credentials disimpan di tabel D1 `upload_channels`, bukan terekspos lama di frontend.

## Yang Perlu Disiapkan Sebelum Mulai

| Requirement | Purpose |
| --- | --- |
| WebDAV Endpoint | Server-side WebDAV URL, misalnya `https://nas.example.com/dav`. |
| Username | Digunakan untuk sign in ke WebDAV service. |
| Password | Digunakan untuk sign in ke WebDAV service. |
| Authentication mode | Default adalah `Basic`. Gunakan `Digest` atau auto negotiation hanya jika server memerlukannya. |
| Storage directory | Directory untuk menyimpan files. Default adalah `imgbed`. |

## Di Mana Menambahkannya

1. Buka System Settings.
2. Masuk ke Upload Settings.
3. Klik Add Channel di kanan atas.
4. Pilih `WebDAV`.

## Field Reference

| Field | Fungsi | Required |
| --- | --- | --- |
| Channel name | Nama yang mudah dikenali untuk WebDAV channel, misalnya `koofr` atau `nas`. | Yes |
| Endpoint | Full WebDAV endpoint, termasuk `https://`. | Yes |
| Username | WebDAV login username. | Yes |
| Password | WebDAV login password. | Yes |
| Authentication mode | Biasanya `Basic`; gunakan `Digest` jika server membutuhkan digest authentication. | Yes |
| Storage directory | Directory tempat files disimpan. Default adalah `imgbed`. | No |

## Example: fie.nl.tab.digital

### 1. Buat App Password

Buka account security settings, cari application passwords, lalu buat app password baru.

![Create an app password](../../image/upload/webdav/创建应用密码.png)

Setelah dibuat, copy dan simpan app password baru. Biasanya password ini hanya ditampilkan sekali.

![Save the new app password](../../image/upload/webdav/记住新应用程序密码.png)

### 2. Isi WebDAV Configuration di ImgBed

Kembali ke ImgBed dan tambahkan WebDAV channel:

| UI Field | Value |
| --- | --- |
| Endpoint | WebDAV URL yang disediakan oleh `https://fie.nl.tab.digital/`. |
| Username | WebDAV username Anda. |
| Password | App password yang baru dibuat. |
| Authentication mode | Mulai dengan `Basic` untuk sebagian besar kasus. |
| Storage directory | Default adalah `imgbed`; Anda juga bisa memakai custom directory. |

![Fill in the configuration](../../image/upload/webdav/填写配置.png)

## Perilaku Upload File Besar

WebDAV channel sekarang memakai real session-based chunked upload.

Small files di-upload sebagai satu complete file. Files lebih besar dari 64 MiB otomatis dipecah menjadi chunks sekitar 10 MiB dan di-upload ke remote chunk directory.

WebDAV service tidak perlu mendukung `partial update` atau offset-based writes. ImgBed tidak merge chunks menjadi satu large file di remote server. Sebaliknya, ImgBed menyimpan chunk manifest dan membaca chunks secara berurutan saat file diminta.

Dalam praktik:

| File Size | Upload Method | Remote Storage Layout |
| --- | --- | --- |
| 64 MiB atau lebih kecil | Normal upload | Satu complete file |
| Lebih besar dari 64 MiB | Real session chunked upload | Chunk directory berisi beberapa chunk files |

Chunk directory hanya memengaruhi remote storage layout. File URL di ImgBed tidak berubah. Users tetap mengakses file lewat link `/file/...` asli.

## Langkah Setup

1. Buka Upload Settings.
2. Klik Add Channel.
3. Pilih `WebDAV`.
4. Masukkan channel name yang mudah dikenali, misalnya `koofr`.
5. Masukkan WebDAV endpoint, misalnya `https://app.koofr.net/dav/Koofr`.
6. Masukkan username dan password.
7. Biarkan authentication mode sebagai `Basic` secara default.
8. Biarkan storage directory sebagai `imgbed`, atau ubah ke directory Anda sendiri.
9. Klik Save.
10. Setelah save, cek channel card, query capacity jika tersedia, dan upload test file.

## Cara Memeriksa

| Check | Cara Memeriksa |
| --- | --- |
| Channel card muncul | Setelah save, halaman Upload Settings harus menampilkan WebDAV channel card. |
| Channel enabled | Switch di kanan atas card seharusnya tetap on. |
| Credentials tersimpan | Detail view harus menampilkan Endpoint, username, authentication mode, dan storage directory. |
| Small file upload berjalan | Upload test image dan pastikan file muncul di WebDAV directory. |
| Large file rule berjalan | Files lebih besar dari 64 MiB memakai chunked upload dan membuat remote chunk directory. |
| Capacity query berjalan | Jika server mendukung capacity information, query akan menampilkan used dan total capacity. |

![Quota query succeeded](../../image/upload/webdav/查询额度成功.png)

## FAQ

### Mengapa large WebDAV files membuat chunk directory?

Ini adalah storage method saat ini untuk large files.

Files lebih besar dari 64 MiB tidak digabung menjadi satu large remote file. Files disimpan sebagai chunk directory. ImgBed merekam chunk manifest dan mengembalikan content lengkap dengan membaca chunks secara berurutan.

### Jika large file upload gagal, apa yang perlu dicek dulu?

Cek Endpoint, username, password, dan storage directory terlebih dahulu. Lalu pastikan WebDAV service mengizinkan directory creation, file writing, dan file reading.

Jika capacity query gagal tetapi small file upload berjalan, server mungkin tidak mendukung atau membatasi capacity reporting. Itu belum tentu berarti upload tidak tersedia.

### Authentication mode mana yang harus digunakan?

Mulai dengan `Basic`.

Jika server secara eksplisit membutuhkan digest authentication, gunakan `Digest`.

Jika tidak yakin, gunakan automatic negotiation.

## Quick Checklist

```text
Siapkan WebDAV endpoint, username, dan password
-> Buka Upload Settings
-> Add Channel
-> Pilih WebDAV
-> Masukkan Endpoint / username / password
-> Biarkan authentication mode sebagai Basic secara default
-> Biarkan storage directory sebagai imgbed secara default
-> Save
-> Query capacity
-> Upload test file
```
