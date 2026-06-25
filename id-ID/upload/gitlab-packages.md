# Menambahkan Kanal GitLab Packages

## Yang Diperlukan Sebelum Memulai

Anda hanya memerlukan tiga hal:

| Kebutuhan | Tujuan |
| --- | --- |
| Akun GitLab | Digunakan untuk membuat token akses dan memiliki proyek. |
| GitLab Personal Access Token | Digunakan oleh ImgBed untuk mengakses GitLab API, membuat proyek, dan mengunggah berkas ke Generic Packages. |
| Nama proyek | Anda dapat memasukkan nama proyek saja, misalnya `imgbed`. |

## Langkah Konfigurasi

### Langkah 1: Masuk ke GitLab dan Buat Access Token

1. Masuk ke GitLab.
2. Klik avatar Anda di sudut kanan atas, lalu buka `Preferences`.
3. Buka `Access Tokens` dari sidebar kiri.
4. Beri token nama yang mudah dikenali.
5. Pilih tanggal kedaluwarsa sesuai preferensi pemeliharaan Anda.
6. Pilih cakupan `api`.
7. Salin dan simpan token segera setelah dibuat.

![Membuat token legacy](../../image/upload/gitlab-packages/点击生成旧版令牌.png)

![Memilih izin token](../../image/upload/gitlab-packages/勾选令牌权限.png)

## Langkah 2: Isi Kanal GitLab Packages di ImgBed

Setelah memilih `GitLab Packages` di Pengaturan Unggah, isi kolom sebagai berikut:

| Kolom UI | Yang Harus Diisi |
| --- | --- |
| Nama kanal | Nama pilihan Anda, misalnya `GitLabPrimary`. |
| Access Token | GitLab Personal Access Token yang baru Anda buat. |
| Nama proyek | Nama proyek pendek seperti `imgbed`, atau jalur lengkap seperti `username/imgbed`. |
| Repositori privat | Aktifkan atau nonaktifkan sesuai kebutuhan. |
| Catatan | Opsional, misalnya `Primary upload channel`. |

![Mengonfigurasi kanal](../../image/upload/gitlab-packages/配置渠道内容.png)

## Langkah 3: Simpan Kanal

Setelah semua kolom diisi, klik Simpan.

Sistem akan menangani detail berikut:

| Perilaku Sistem | Deskripsi |
| --- | --- |
| Nama proyek pendek | ImgBed mengidentifikasi akun GitLab saat ini dan memperluas nilainya menjadi jalur proyek lengkap. |
| Jalur proyek lengkap | ImgBed menggunakan jalur `username/project` persis seperti yang dimasukkan. |
| Pemeriksaan proyek | Jika Anda menggunakan jalur akun pribadi saat ini, ImgBed otomatis membuat proyek saat belum ada. Jika Anda memasukkan jalur lengkap secara manual, ImgBed langsung menggunakan jalur tersebut. |
| Status publik/privat | Visibilitas proyek disinkronkan sesuai sakelar saat ini. |

## Daftar Periksa Cepat

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
