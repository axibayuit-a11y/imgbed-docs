# Tambah Saluran Hugging Face

## Perkara Yang Diperlukan Sebelum Bermula

Anda hanya memerlukan tiga perkara:

| Keperluan | Tujuan |
| --- | --- |
| Akaun Hugging Face | Digunakan untuk menjana access token dan memiliki repositori. |
| Hugging Face User Access Token | Digunakan oleh ImgBed untuk mengakses Hugging Face API, membuat repositori dan memuat naik fail. |
| Nama repositori | Anda boleh memasukkan nama repositori sahaja, contohnya `image`. |

## Langkah Persediaan

### Langkah 1: Log Masuk Ke Hugging Face dan Buat Access Token

1. Log masuk ke Hugging Face.
2. Klik avatar anda di penjuru kanan atas dan buka `Settings`.
3. Buka `Access Tokens` daripada sidebar kiri.
4. Buat token baharu.
5. Berikan nama yang mudah dikenal pasti kepada token.
6. Pilih kebenaran `write`.
7. Salin dan simpan token sebaik sahaja ia dibuat.

![Buat token](../../image/upload/huggingface/创建令牌.png)

## Langkah 2: Isi Saluran Hugging Face Dalam ImgBed

Selepas memilih `Hugging Face` dalam Tetapan Muat Naik, isi medan seperti berikut:

| Medan UI | Perkara Yang Perlu Dimasukkan |
| --- | --- |
| Nama saluran | Nama pilihan anda, contohnya `hf-primary`. |
| Nama repositori | Nama repositori pendek seperti `image`, atau laluan penuh seperti `username/image`. |
| Access Token | Hugging Face User Access Token yang baru dibuat. |
| Repositori peribadi | Hidupkan atau matikan mengikut keperluan. |
| Catatan | Pilihan, contohnya `Saluran muat naik utama`. |

![Tambah saluran](../../image/upload/huggingface/添加渠道.png)

## Langkah 3: Simpan Saluran

Selepas mengisi medan, klik Simpan.

Sistem kemudian akan mengendalikan butiran berikut:

| Kelakuan Sistem | Penerangan |
| --- | --- |
| Nama repositori pendek | ImgBed mengenal pasti akaun Hugging Face semasa dan mengembangkan nilai kepada laluan repositori penuh. |
| Laluan repositori penuh | ImgBed menggunakan laluan `username/repository` tepat seperti yang dimasukkan. |
| Semakan repositori | Jika anda menggunakan laluan akaun peribadi semasa, ImgBed cuba membuat repositori apabila ia tidak wujud. Jika anda memasukkan laluan penuh secara manual, ImgBed menggunakan laluan itu secara langsung. |
| Jenis repositori | Saluran ini menggunakan repositori `dataset`. |
| Keadaan awam/peribadi | Keterlihatan repositori diselaraskan mengikut suis semasa. |

## Senarai Semak Pantas

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
