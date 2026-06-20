# Tambah GitHub Releases Channel

## Perkara Yang Perlu Disediakan

Anda hanya perlukan tiga perkara:

| Requirement | Purpose |
| --- | --- |
| GitHub account | Digunakan untuk generate access token dan memiliki repository. |
| GitHub Access Token | Digunakan oleh ImgBed untuk mengakses GitHub API, mencipta releases dan upload files. |
| Repository name | Anda boleh masukkan repository name sahaja, contohnya `image`. |

## Langkah Setup

### Step 1: Sign in Ke GitHub dan Cipta Access Token

1. Sign in ke GitHub.
2. Klik avatar di penjuru kanan atas dan buka `Settings`.
3. Buka `Developer settings` dari left sidebar.
4. Buka `Personal access tokens`.
5. Buka `Tokens (classic)`.
6. Klik `Generate new token (classic)`.
7. Beri nama token yang mudah dikenali.
8. Pilih expiration date mengikut cara maintenance anda.
9. Pilih scopes `repo` dan `workflow`.
10. Copy dan simpan token sebaik sahaja ia dicipta.

![Add GitHub permissions](../../image/upload/github-releases/添加github权限.png)

## Step 2: Isi GitHub Releases Channel Dalam ImgBed

Selepas memilih `GitHub Releases` dalam Upload Settings, isi field seperti berikut:

| UI Field | Apa Yang Perlu Diisi |
| --- | --- |
| Channel name | Nama pilihan anda, contohnya `GitHubPrimary`. |
| Access Token | GitHub Personal Access Token yang baru dicipta. |
| Repository name | Repo name pendek seperti `image`, atau full path seperti `username/image`. |
| Private repository | Hidupkan atau matikan mengikut keperluan. |
| Remark | Optional, contohnya `Primary upload channel`. |

![Fill in the GitHub channel configuration](../../image/upload/github-releases/填写github渠道配置.png)

## Step 3: Save Channel

Selepas mengisi field, klik Save.

System akan mengurus butiran ini:

| System Behavior | Description |
| --- | --- |
| Short repository name | ImgBed mengenal pasti current GitHub account dan mengembangkan value menjadi full repository path. |
| Full repository path | ImgBed menggunakan path `username/repository` tepat seperti yang dimasukkan. |
| Repository check | Jika menggunakan current personal account path, ImgBed mencipta repository secara automatik apabila ia belum wujud. Jika full path dimasukkan secara manual, ImgBed menggunakan path itu terus. |
| Public/private state | Repository visibility diselaraskan mengikut current switch. |

## Quick Checklist

GitHub Releases berfungsi seperti ini:

```text
Sign in ke GitHub
-> Cipta Access Token
-> Kembali ke ImgBed dan masukkan token serta repository name
-> Save
-> Jika hanya repo name dimasukkan, ImgBed akan tambah current username secara automatik
-> Jika username/repo dimasukkan, ImgBed akan menggunakannya seperti itu
-> Upload test image
```
