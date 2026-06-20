# Menambahkan Hugging Face Channel

## Yang Perlu Disiapkan Sebelum Mulai

Anda hanya perlu tiga hal:

| Requirement | Purpose |
| --- | --- |
| Hugging Face account | Digunakan untuk generate access token dan memiliki repository. |
| Hugging Face User Access Token | Digunakan ImgBed untuk mengakses Hugging Face API, membuat repositories, dan upload files. |
| Repository name | Anda bisa memasukkan repository name saja, misalnya `image`. |

## Langkah Setup

### Step 1: Sign in ke Hugging Face dan Buat Access Token

1. Sign in ke Hugging Face.
2. Klik avatar di kanan atas dan buka `Settings`.
3. Buka `Access Tokens` dari left sidebar.
4. Buat token baru.
5. Beri nama token yang mudah dikenali.
6. Pilih permission `write`.
7. Copy dan simpan token segera setelah dibuat.

![Create a token](../../image/upload/huggingface/创建令牌.png)

## Step 2: Isi Hugging Face Channel di ImgBed

Setelah memilih `Hugging Face` di Upload Settings, isi field sebagai berikut:

| UI Field | Yang Diisi |
| --- | --- |
| Channel name | Nama pilihan Anda, misalnya `hf-primary`. |
| Repository name | Repo name pendek seperti `image`, atau full path seperti `username/image`. |
| Access Token | Hugging Face User Access Token yang baru dibuat. |
| Private repository | Aktifkan atau nonaktifkan sesuai kebutuhan. |
| Remark | Optional, misalnya `Primary upload channel`. |

![Add the channel](../../image/upload/huggingface/添加渠道.png)

## Step 3: Save Channel

Setelah mengisi field, klik Save.

System akan menangani detail berikut:

| System Behavior | Description |
| --- | --- |
| Short repository name | ImgBed mengenali current Hugging Face account dan memperluas value menjadi full repository path. |
| Full repository path | ImgBed memakai path `username/repository` persis seperti yang dimasukkan. |
| Repository check | Jika memakai current personal account path, ImgBed mencoba membuat repository saat belum ada. Jika memasukkan full path manual, ImgBed langsung memakai path tersebut. |
| Repository type | Channel ini memakai `dataset` repository. |
| Public/private state | Repository visibility disinkronkan sesuai current switch. |

## Quick Checklist

```text
Sign in ke Hugging Face
-> Buat Access Token
-> Pilih write permission
-> Kembali ke ImgBed dan masukkan token serta repository name
-> Save
-> Jika hanya repo name yang dimasukkan, ImgBed menambahkan current username otomatis
-> Jika username/repo dimasukkan, ImgBed memakainya apa adanya
-> ImgBed check atau membuat dataset repository
-> Upload test image
```
