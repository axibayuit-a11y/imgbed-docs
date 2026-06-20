# Tambah Hugging Face Channel

## Perkara Yang Perlu Disediakan

Anda hanya perlukan tiga perkara:

| Requirement | Purpose |
| --- | --- |
| Hugging Face account | Digunakan untuk generate access token dan memiliki repository. |
| Hugging Face User Access Token | Digunakan oleh ImgBed untuk mengakses Hugging Face API, mencipta repositories dan upload files. |
| Repository name | Anda boleh masukkan repository name sahaja, contohnya `image`. |

## Langkah Setup

### Step 1: Sign in Ke Hugging Face dan Cipta Access Token

1. Sign in ke Hugging Face.
2. Klik avatar di penjuru kanan atas dan buka `Settings`.
3. Buka `Access Tokens` dari left sidebar.
4. Cipta token baharu.
5. Beri nama token yang mudah dikenali.
6. Pilih permission `write`.
7. Copy dan simpan token sebaik sahaja ia dicipta.

![Create a token](../../image/upload/huggingface/创建令牌.png)

## Step 2: Isi Hugging Face Channel Dalam ImgBed

Selepas memilih `Hugging Face` dalam Upload Settings, isi field seperti berikut:

| UI Field | Apa Yang Perlu Diisi |
| --- | --- |
| Channel name | Nama pilihan anda, contohnya `hf-primary`. |
| Repository name | Repo name pendek seperti `image`, atau full path seperti `username/image`. |
| Access Token | Hugging Face User Access Token yang baru dicipta. |
| Private repository | Hidupkan atau matikan mengikut keperluan. |
| Remark | Optional, contohnya `Primary upload channel`. |

![Add the channel](../../image/upload/huggingface/添加渠道.png)

## Step 3: Save Channel

Selepas mengisi semua field, klik Save.

System akan mengurus butiran ini:

| System Behavior | Description |
| --- | --- |
| Short repository name | ImgBed mengenal pasti current Hugging Face account dan mengembangkan value menjadi full repository path. |
| Full repository path | ImgBed menggunakan path `username/repository` tepat seperti yang dimasukkan. |
| Repository check | Jika menggunakan current personal account path, ImgBed cuba mencipta repository apabila ia belum wujud. Jika full path dimasukkan secara manual, ImgBed menggunakan path itu terus. |
| Repository type | Channel ini menggunakan `dataset` repository. |
| Public/private state | Repository visibility diselaraskan mengikut current switch. |

## Quick Checklist

```text
Sign in ke Hugging Face
-> Cipta Access Token
-> Pilih write permission
-> Kembali ke ImgBed dan masukkan token serta repository name
-> Save
-> Jika hanya repo name dimasukkan, ImgBed akan tambah current username secara automatik
-> Jika username/repo dimasukkan, ImgBed akan menggunakannya seperti itu
-> ImgBed check atau cipta dataset repository
-> Upload test image
```
