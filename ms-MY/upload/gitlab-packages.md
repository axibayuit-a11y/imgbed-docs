# Tambah Saluran GitLab Packages

## Perkara Yang Diperlukan Sebelum Bermula

Anda hanya memerlukan tiga perkara:

| Keperluan | Tujuan |
| --- | --- |
| Akaun GitLab | Digunakan untuk menjana access token dan memiliki projek. |
| GitLab Personal Access Token | Digunakan oleh ImgBed untuk mengakses GitLab API, membuat projek dan memuat naik fail ke Generic Packages. |
| Nama projek | Anda boleh memasukkan nama projek sahaja, contohnya `imgbed`. |

## Langkah Persediaan

### Langkah 1: Log Masuk Ke GitLab dan Buat Access Token

1. Log masuk ke GitLab.
2. Klik avatar anda di penjuru kanan atas dan buka `Preferences`.
3. Buka `Access Tokens` daripada sidebar kiri.
4. Berikan nama yang mudah dikenal pasti kepada token.
5. Pilih tarikh tamat berdasarkan keutamaan penyelenggaraan anda.
6. Pilih scope `api`.
7. Salin dan simpan token sebaik sahaja ia dibuat.

![Buat token legacy](../../image/upload/gitlab-packages/点击生成旧版令牌.png)

![Pilih kebenaran token](../../image/upload/gitlab-packages/勾选令牌权限.png)

## Langkah 2: Isi Saluran GitLab Packages Dalam ImgBed

Selepas memilih `GitLab Packages` dalam Tetapan Muat Naik, isi medan seperti berikut:

| Medan UI | Perkara Yang Perlu Dimasukkan |
| --- | --- |
| Nama saluran | Nama pilihan anda, contohnya `GitLabPrimary`. |
| Access Token | GitLab Personal Access Token yang baru dibuat. |
| Nama projek | Nama projek pendek seperti `imgbed`, atau laluan penuh seperti `username/imgbed`. |
| Repositori peribadi | Hidupkan atau matikan mengikut keperluan. |
| Catatan | Pilihan, contohnya `Saluran muat naik utama`. |

![Konfigurasikan saluran](../../image/upload/gitlab-packages/配置渠道内容.png)

## Langkah 3: Simpan Saluran

Selepas mengisi medan, klik Simpan.

Sistem akan mengendalikan butiran berikut:

| Kelakuan Sistem | Penerangan |
| --- | --- |
| Nama projek pendek | ImgBed mengenal pasti akaun GitLab semasa dan mengembangkan nilai kepada laluan projek penuh. |
| Laluan projek penuh | ImgBed menggunakan laluan `username/project` tepat seperti yang dimasukkan. |
| Semakan projek | Jika anda menggunakan laluan akaun peribadi semasa, ImgBed membuat projek secara automatik apabila ia tidak wujud. Jika anda memasukkan laluan penuh secara manual, ImgBed menggunakan laluan itu secara langsung. |
| Keadaan awam/peribadi | Keterlihatan projek diselaraskan mengikut suis semasa. |

## Senarai Semak Pantas

```text
Sign in to GitLab
-> Create an Access Token
-> Select only the api scope
-> Return to ImgBed and enter the token and project name
-> Save
-> If only a project name is entered, ImgBed adds the current username automatically
-> If username/project is entered, ImgBed uses it as-is
-> Upload a test image
```
