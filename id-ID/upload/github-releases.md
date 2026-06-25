# Menambahkan Kanal GitHub Releases

## Yang Diperlukan Sebelum Memulai

Anda hanya memerlukan tiga hal:

| Kebutuhan | Tujuan |
| --- | --- |
| Akun GitHub | Digunakan untuk membuat token akses dan memiliki repositori. |
| GitHub Access Token | Digunakan oleh ImgBed untuk mengakses GitHub API, membuat release, dan mengunggah berkas. |
| Nama repositori | Anda dapat memasukkan nama repositori saja, misalnya `image`. |

## Langkah Konfigurasi

### Langkah 1: Masuk ke GitHub dan Buat Access Token

1. Masuk ke GitHub.
2. Klik avatar Anda di sudut kanan atas, lalu buka `Settings`.
3. Buka `Developer settings` dari sidebar kiri.
4. Buka `Personal access tokens`.
5. Buka `Tokens (classic)`.
6. Klik `Generate new token (classic)`.
7. Beri token nama yang mudah dikenali.
8. Pilih tanggal kedaluwarsa sesuai preferensi pemeliharaan Anda.
9. Pilih cakupan `repo` dan `workflow`.
10. Salin dan simpan token segera setelah dibuat.

![Menambahkan izin GitHub](../../image/upload/github-releases/添加github权限.png)

## Langkah 2: Isi Kanal GitHub Releases di ImgBed

Setelah memilih `GitHub Releases` di Pengaturan Unggah, isi kolom sebagai berikut:

| Kolom UI | Yang Harus Diisi |
| --- | --- |
| Nama kanal | Nama pilihan Anda, misalnya `GitHubPrimary`. |
| Access Token | GitHub Personal Access Token yang baru Anda buat. |
| Nama repositori | Nama repositori pendek seperti `image`, atau jalur lengkap seperti `username/image`. |
| Repositori privat | Aktifkan atau nonaktifkan sesuai kebutuhan. |
| Catatan | Opsional, misalnya `Primary upload channel`. |

![Mengisi konfigurasi kanal GitHub](../../image/upload/github-releases/填写github渠道配置.png)

## Langkah 3: Simpan Kanal

Setelah semua kolom diisi, klik Simpan.

Sistem akan menangani detail berikut:

| Perilaku Sistem | Deskripsi |
| --- | --- |
| Nama repositori pendek | ImgBed mengidentifikasi akun GitHub saat ini dan memperluas nilainya menjadi jalur repositori lengkap. |
| Jalur repositori lengkap | ImgBed menggunakan jalur `username/repository` persis seperti yang dimasukkan. |
| Pemeriksaan repositori | Jika Anda menggunakan jalur akun pribadi saat ini, ImgBed otomatis membuat repositori saat belum ada. Jika Anda memasukkan jalur lengkap secara manual, ImgBed langsung menggunakan jalur tersebut. |
| Status publik/privat | Visibilitas repositori disinkronkan sesuai sakelar saat ini. |

## Daftar Periksa Cepat

GitHub Releases bekerja seperti ini:

```text
Sign in to GitHub
-> Create an Access Token
-> Return to ImgBed and enter the token and repository name
-> Save
-> If only a repo name is entered, ImgBed adds the current username automatically
-> If username/repo is entered, ImgBed uses it as-is
-> Upload a test image
```
