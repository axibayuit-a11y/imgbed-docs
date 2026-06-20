# Tambah WebDAV Channel

## Paling Sesuai Untuk

Gunakan WebDAV channel apabila:

- Anda mempunyai NAS, cloud drive atau object storage service yang menyediakan WebDAV endpoint.
- Anda mahu uploaded images disimpan dalam WebDAV directory milik anda.
- Anda mahu credentials disimpan dalam D1 `upload_channels` table, bukan didedahkan lama di frontend.

## Perkara Yang Perlu Disediakan

| Requirement | Purpose |
| --- | --- |
| WebDAV Endpoint | Server-side WebDAV URL, contohnya `https://nas.example.com/dav`. |
| Username | Digunakan untuk sign in ke WebDAV service. |
| Password | Digunakan untuk sign in ke WebDAV service. |
| Authentication mode | Default ialah `Basic`. Gunakan `Digest` atau auto negotiation hanya jika server memerlukannya. |
| Storage directory | Directory untuk menyimpan files. Default ialah `imgbed`. |

## Di Mana Untuk Menambahnya

1. Buka System Settings.
2. Pergi ke Upload Settings.
3. Klik Add Channel di penjuru kanan atas.
4. Pilih `WebDAV`.

## Field Reference

| Field | Fungsi | Required |
| --- | --- | --- |
| Channel name | Nama mudah dikenali untuk WebDAV channel, contohnya `koofr` atau `nas`. | Yes |
| Endpoint | Full WebDAV endpoint termasuk `https://`. | Yes |
| Username | WebDAV login username. | Yes |
| Password | WebDAV login password. | Yes |
| Authentication mode | Biasanya `Basic`; gunakan `Digest` jika server memerlukan digest authentication. | Yes |
| Storage directory | Directory tempat files disimpan. Default ialah `imgbed`. | No |

## Example: fie.nl.tab.digital

### 1. Cipta App Password

Buka account security settings, cari application passwords dan cipta app password baharu.

![Create an app password](../../image/upload/webdav/创建应用密码.png)

Selepas dicipta, copy dan simpan app password baharu. Biasanya ia hanya dipaparkan sekali.

![Save the new app password](../../image/upload/webdav/记住新应用程序密码.png)

### 2. Isi WebDAV Configuration Dalam ImgBed

Kembali ke ImgBed dan tambah WebDAV channel:

| UI Field | Value |
| --- | --- |
| Endpoint | WebDAV URL yang diberi oleh `https://fie.nl.tab.digital/`. |
| Username | WebDAV username anda. |
| Password | App password yang baru dicipta. |
| Authentication mode | Mulakan dengan `Basic` dalam kebanyakan keadaan. |
| Storage directory | Default ialah `imgbed`; boleh juga gunakan custom directory. |

![Fill in the configuration](../../image/upload/webdav/填写配置.png)

## Kelakuan Upload File Besar

WebDAV channel kini menggunakan real session-based chunked upload.

Small files di-upload sebagai satu complete file. Files lebih besar daripada 64 MiB akan dipecahkan secara automatik kepada chunks sekitar 10 MiB dan di-upload ke remote chunk directory.

WebDAV service tidak perlu menyokong `partial update` atau offset-based writes. ImgBed tidak merge chunks menjadi satu large file pada remote server. Sebaliknya, ia menyimpan chunk manifest dan membaca chunks mengikut turutan apabila file diminta.

Dalam praktik:

| File Size | Upload Method | Remote Storage Layout |
| --- | --- | --- |
| 64 MiB atau kurang | Normal upload | Satu complete file |
| Lebih besar daripada 64 MiB | Real session chunked upload | Chunk directory yang mengandungi beberapa chunk files |

Chunk directory hanya mempengaruhi remote storage layout. Ia tidak mengubah file URL dalam ImgBed. Users masih mengakses file melalui link asal `/file/...`.

## Langkah Setup

1. Buka Upload Settings.
2. Klik Add Channel.
3. Pilih `WebDAV`.
4. Masukkan channel name yang mudah dikenali, contohnya `koofr`.
5. Masukkan WebDAV endpoint, contohnya `https://app.koofr.net/dav/Koofr`.
6. Masukkan username dan password.
7. Kekalkan authentication mode sebagai `Basic` secara default.
8. Kekalkan storage directory sebagai `imgbed`, atau tukar kepada directory anda sendiri.
9. Klik Save.
10. Selepas save, semak channel card, query capacity jika tersedia, dan upload test file.

## Cara Menyemak

| Check | Cara Menyemak |
| --- | --- |
| Channel card muncul | Selepas save, halaman Upload Settings patut memaparkan WebDAV channel card. |
| Channel enabled | Switch di penjuru kanan atas card patut kekal on. |
| Credentials disimpan | Detail view patut memaparkan Endpoint, username, authentication mode dan storage directory. |
| Small file upload berfungsi | Upload test image dan pastikan file muncul dalam WebDAV directory. |
| Large file rule berfungsi | Files lebih besar daripada 64 MiB menggunakan chunked upload dan mencipta remote chunk directory. |
| Capacity query berfungsi | Jika server menyokong capacity information, query akan menunjukkan used dan total capacity. |

![Quota query succeeded](../../image/upload/webdav/查询额度成功.png)

## FAQ

### Mengapa large WebDAV files mencipta chunk directory?

Ini ialah storage method semasa untuk large files.

Files lebih besar daripada 64 MiB tidak digabungkan menjadi satu remote file besar. Ia disimpan sebagai chunk directory. ImgBed merekod chunk manifest dan mengembalikan content lengkap dengan membaca chunks mengikut turutan.

### Jika large file upload gagal, apa yang perlu disemak dahulu?

Semak Endpoint, username, password dan storage directory dahulu. Kemudian pastikan WebDAV service membenarkan directory creation, file writing dan file reading.

Jika capacity query gagal tetapi small file upload berfungsi, server mungkin tidak menyokong atau mengehadkan capacity reporting. Itu tidak semestinya bermaksud upload tidak tersedia.

### Authentication mode mana patut digunakan?

Mulakan dengan `Basic`.

Jika server jelas memerlukan digest authentication, gunakan `Digest`.

Jika tidak pasti, gunakan automatic negotiation.

## Quick Checklist

```text
Sediakan WebDAV endpoint, username dan password
-> Buka Upload Settings
-> Add Channel
-> Pilih WebDAV
-> Masukkan Endpoint / username / password
-> Kekalkan authentication mode sebagai Basic secara default
-> Kekalkan storage directory sebagai imgbed secara default
-> Save
-> Query capacity
-> Upload test file
```
