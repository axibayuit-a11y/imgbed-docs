# Tambah Saluran GitHub Releases

## Perkara Yang Diperlukan Sebelum Bermula

Anda hanya memerlukan tiga perkara:

| Keperluan | Tujuan |
| --- | --- |
| Akaun GitHub | Digunakan untuk menjana access token dan memiliki repositori. |
| GitHub Access Token | Digunakan oleh ImgBed untuk mengakses GitHub API, membuat release dan memuat naik fail. |
| Nama repositori | Anda boleh memasukkan nama repositori sahaja, contohnya `image`. |

## Langkah Persediaan

### Langkah 1: Log Masuk Ke GitHub dan Buat Access Token

1. Log masuk ke GitHub.
2. Klik avatar anda di penjuru kanan atas dan buka `Settings`.
3. Buka `Developer settings` daripada sidebar kiri.
4. Buka `Personal access tokens`.
5. Buka `Tokens (classic)`.
6. Klik `Generate new token (classic)`.
7. Berikan nama yang mudah dikenal pasti kepada token.
8. Pilih tarikh tamat berdasarkan keutamaan penyelenggaraan anda.
9. Pilih scopes `repo` dan `workflow`.
10. Salin dan simpan token sebaik sahaja ia dibuat.

![Tambah kebenaran GitHub](../../image/upload/github-releases/添加github权限.png)

## Langkah 2: Isi Saluran GitHub Releases Dalam ImgBed

Selepas memilih `GitHub Releases` dalam Tetapan Muat Naik, isi medan seperti berikut:

| Medan UI | Perkara Yang Perlu Dimasukkan |
| --- | --- |
| Nama saluran | Nama pilihan anda, contohnya `GitHubPrimary`. |
| Access Token | GitHub Personal Access Token yang baru dibuat. |
| Nama repositori | Nama repositori pendek seperti `image`, atau laluan penuh seperti `username/image`. |
| Repositori peribadi | Hidupkan atau matikan mengikut keperluan. |
| Catatan | Pilihan, contohnya `Saluran muat naik utama`. |

![Isi konfigurasi saluran GitHub](../../image/upload/github-releases/填写github渠道配置.png)

## Langkah 3: Simpan Saluran

Selepas mengisi medan, klik Simpan.

Sistem akan mengendalikan butiran berikut:

| Kelakuan Sistem | Penerangan |
| --- | --- |
| Nama repositori pendek | ImgBed mengenal pasti akaun GitHub semasa dan mengembangkan nilai kepada laluan repositori penuh. |
| Laluan repositori penuh | ImgBed menggunakan laluan `username/repository` tepat seperti yang dimasukkan. |
| Semakan repositori | Jika anda menggunakan laluan akaun peribadi semasa, ImgBed membuat repositori secara automatik apabila ia tidak wujud. Jika anda memasukkan laluan penuh secara manual, ImgBed menggunakan laluan itu secara langsung. |
| Keadaan awam/peribadi | Keterlihatan repositori diselaraskan mengikut suis semasa. |

## Senarai Semak Pantas

GitHub Releases berfungsi seperti ini:

```text
Sign in to GitHub
-> Create an Access Token
-> Return to ImgBed and enter the token and repository name
-> Save
-> If only a repo name is entered, ImgBed adds the current username automatically
-> If username/repo is entered, ImgBed uses it as-is
-> Upload a test image
```
