# Tambah GitLab Packages Channel

## Perkara Yang Perlu Disediakan

Anda hanya perlukan tiga perkara:

| Requirement | Purpose |
| --- | --- |
| GitLab account | Digunakan untuk generate access token dan memiliki project. |
| GitLab Personal Access Token | Digunakan oleh ImgBed untuk mengakses GitLab API, mencipta projects dan upload files ke Generic Packages. |
| Project name | Anda boleh masukkan project name sahaja, contohnya `imgbed`. |

## Langkah Setup

### Step 1: Sign in Ke GitLab dan Cipta Access Token

1. Sign in ke GitLab.
2. Klik avatar di penjuru kanan atas dan buka `Preferences`.
3. Buka `Access Tokens` dari left sidebar.
4. Beri nama token yang mudah dikenali.
5. Pilih expiration date mengikut cara maintenance anda.
6. Pilih scope `api`.
7. Copy dan simpan token sebaik sahaja ia dicipta.

![Create a legacy token](../../image/upload/gitlab-packages/点击生成旧版令牌.png)

![Select token permissions](../../image/upload/gitlab-packages/勾选令牌权限.png)

## Step 2: Isi GitLab Packages Channel Dalam ImgBed

Selepas memilih `GitLab Packages` dalam Upload Settings, isi field seperti berikut:

| UI Field | Apa Yang Perlu Diisi |
| --- | --- |
| Channel name | Nama pilihan anda, contohnya `GitLabPrimary`. |
| Access Token | GitLab Personal Access Token yang baru dicipta. |
| Project name | Project name pendek seperti `imgbed`, atau full path seperti `username/imgbed`. |
| Private repository | Hidupkan atau matikan mengikut keperluan. |
| Remark | Optional, contohnya `Primary upload channel`. |

![Configure the channel](../../image/upload/gitlab-packages/配置渠道内容.png)

## Step 3: Save Channel

Selepas mengisi field, klik Save.

System akan mengurus butiran ini:

| System Behavior | Description |
| --- | --- |
| Short project name | ImgBed mengenal pasti current GitLab account dan mengembangkan value menjadi full project path. |
| Full project path | ImgBed menggunakan path `username/project` tepat seperti yang dimasukkan. |
| Project check | Jika menggunakan current personal account path, ImgBed mencipta project secara automatik apabila ia belum wujud. Jika full path dimasukkan secara manual, ImgBed menggunakan path itu terus. |
| Public/private state | Project visibility diselaraskan mengikut current switch. |

## Quick Checklist

```text
Sign in ke GitLab
-> Cipta Access Token
-> Pilih scope api sahaja
-> Kembali ke ImgBed dan masukkan token serta project name
-> Save
-> Jika hanya project name dimasukkan, ImgBed akan tambah current username secara automatik
-> Jika username/project dimasukkan, ImgBed akan menggunakannya seperti itu
-> Upload test image
```
