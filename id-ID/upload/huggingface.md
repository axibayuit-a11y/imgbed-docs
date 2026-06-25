# Menambahkan Kanal Hugging Face

## Yang Diperlukan Sebelum Memulai

Anda hanya memerlukan tiga hal:

| Kebutuhan | Tujuan |
| --- | --- |
| Akun Hugging Face | Digunakan untuk membuat token akses dan memiliki repositori. |
| Hugging Face User Access Token | Digunakan oleh ImgBed untuk mengakses Hugging Face API, membuat repositori, dan mengunggah berkas. |
| Nama repositori | Anda dapat memasukkan nama repositori saja, misalnya `image`. |

## Langkah Konfigurasi

### Langkah 1: Masuk ke Hugging Face dan Buat Access Token

1. Masuk ke Hugging Face.
2. Klik avatar Anda di sudut kanan atas, lalu buka `Settings`.
3. Buka `Access Tokens` dari sidebar kiri.
4. Buat token baru.
5. Beri token nama yang mudah dikenali.
6. Pilih izin `write`.
7. Salin dan simpan token segera setelah dibuat.

![Membuat token](../../image/upload/huggingface/创建令牌.png)

## Langkah 2: Isi Kanal Hugging Face di ImgBed

Setelah memilih `Hugging Face` di Pengaturan Unggah, isi kolom sebagai berikut:

| Kolom UI | Yang Harus Diisi |
| --- | --- |
| Nama kanal | Nama pilihan Anda, misalnya `hf-primary`. |
| Nama repositori | Nama repositori pendek seperti `image`, atau jalur lengkap seperti `username/image`. |
| Access Token | Hugging Face User Access Token yang baru Anda buat. |
| Repositori privat | Aktifkan atau nonaktifkan sesuai kebutuhan. |
| Catatan | Opsional, misalnya `Primary upload channel`. |

![Menambahkan kanal](../../image/upload/huggingface/添加渠道.png)

## Langkah 3: Simpan Kanal

Setelah semua kolom diisi, klik Simpan.

Sistem kemudian akan menangani detail berikut:

| Perilaku Sistem | Deskripsi |
| --- | --- |
| Nama repositori pendek | ImgBed mengidentifikasi akun Hugging Face saat ini dan memperluas nilainya menjadi jalur repositori lengkap. |
| Jalur repositori lengkap | ImgBed menggunakan jalur `username/repository` persis seperti yang dimasukkan. |
| Pemeriksaan repositori | Jika Anda menggunakan jalur akun pribadi saat ini, ImgBed mencoba membuat repositori saat belum ada. Jika Anda memasukkan jalur lengkap secara manual, ImgBed langsung menggunakan jalur tersebut. |
| Jenis repositori | Kanal ini menggunakan repositori `dataset`. |
| Status publik/privat | Visibilitas repositori disinkronkan sesuai sakelar saat ini. |

## Daftar Periksa Cepat

```text
Sign in to Hugging Face
-> Create an Access Token
-> Select write permission
-> Return to ImgBed and enter the token and repository name
-> Save
-> If only a repo name is entered, ImgBed adds the current username automatically
-> If username/repo is entered, ImgBed uses it as-is
-> ImgBed checks or creates the dataset repository
-> Upload a test image
```
