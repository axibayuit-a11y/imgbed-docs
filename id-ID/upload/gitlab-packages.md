# Menambahkan GitLab Packages Channel

## Yang Perlu Disiapkan Sebelum Mulai

Anda hanya perlu tiga hal:

| Requirement | Purpose |
| --- | --- |
| GitLab account | Digunakan untuk generate access token dan memiliki project. |
| GitLab Personal Access Token | Digunakan ImgBed untuk mengakses GitLab API, membuat projects, dan upload files ke Generic Packages. |
| Project name | Anda bisa memasukkan project name saja, misalnya `imgbed`. |

## Langkah Setup

### Step 1: Sign in ke GitLab dan Buat Access Token

1. Sign in ke GitLab.
2. Klik avatar di kanan atas dan buka `Preferences`.
3. Buka `Access Tokens` dari left sidebar.
4. Beri nama token yang mudah dikenali.
5. Pilih expiration date sesuai preferensi maintenance Anda.
6. Pilih scope `api`.
7. Copy dan simpan token segera setelah dibuat.

![Create a legacy token](../../image/upload/gitlab-packages/点击生成旧版令牌.png)

![Select token permissions](../../image/upload/gitlab-packages/勾选令牌权限.png)

## Step 2: Isi GitLab Packages Channel di ImgBed

Setelah memilih `GitLab Packages` di Upload Settings, isi field sebagai berikut:

| UI Field | Yang Diisi |
| --- | --- |
| Channel name | Nama pilihan Anda, misalnya `GitLabPrimary`. |
| Access Token | GitLab Personal Access Token yang baru dibuat. |
| Project name | Project name pendek seperti `imgbed`, atau full path seperti `username/imgbed`. |
| Private repository | Aktifkan atau nonaktifkan sesuai kebutuhan. |
| Remark | Optional, misalnya `Primary upload channel`. |

![Configure the channel](../../image/upload/gitlab-packages/配置渠道内容.png)

## Step 3: Save Channel

Setelah mengisi field, klik Save.

System akan menangani detail berikut:

| System Behavior | Description |
| --- | --- |
| Short project name | ImgBed mengenali current GitLab account dan memperluas value menjadi full project path. |
| Full project path | ImgBed memakai path `username/project` persis seperti yang dimasukkan. |
| Project check | Jika memakai current personal account path, ImgBed otomatis membuat project saat belum ada. Jika memasukkan full path manual, ImgBed langsung memakai path tersebut. |
| Public/private state | Project visibility disinkronkan sesuai current switch. |

## Quick Checklist

```text
Sign in ke GitLab
-> Buat Access Token
-> Pilih hanya scope api
-> Kembali ke ImgBed dan masukkan token serta project name
-> Save
-> Jika hanya project name yang dimasukkan, ImgBed menambahkan current username otomatis
-> Jika username/project dimasukkan, ImgBed memakainya apa adanya
-> Upload test image
```
