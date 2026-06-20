# Menambahkan GitHub Releases Channel

## Yang Perlu Disiapkan Sebelum Mulai

Anda hanya perlu tiga hal:

| Requirement | Purpose |
| --- | --- |
| GitHub account | Digunakan untuk generate access token dan memiliki repository. |
| GitHub Access Token | Digunakan ImgBed untuk mengakses GitHub API, membuat releases, dan upload files. |
| Repository name | Anda bisa memasukkan repository name saja, misalnya `image`. |

## Langkah Setup

### Step 1: Sign in ke GitHub dan Buat Access Token

1. Sign in ke GitHub.
2. Klik avatar di kanan atas dan buka `Settings`.
3. Buka `Developer settings` dari left sidebar.
4. Buka `Personal access tokens`.
5. Buka `Tokens (classic)`.
6. Klik `Generate new token (classic)`.
7. Beri nama token yang mudah dikenali.
8. Pilih expiration date sesuai preferensi maintenance Anda.
9. Pilih scopes `repo` dan `workflow`.
10. Copy dan simpan token segera setelah dibuat.

![Add GitHub permissions](../../image/upload/github-releases/添加github权限.png)

## Step 2: Isi GitHub Releases Channel di ImgBed

Setelah memilih `GitHub Releases` di Upload Settings, isi field sebagai berikut:

| UI Field | Yang Diisi |
| --- | --- |
| Channel name | Nama pilihan Anda, misalnya `GitHubPrimary`. |
| Access Token | GitHub Personal Access Token yang baru dibuat. |
| Repository name | Repo name pendek seperti `image`, atau full path seperti `username/image`. |
| Private repository | Aktifkan atau nonaktifkan sesuai kebutuhan. |
| Remark | Optional, misalnya `Primary upload channel`. |

![Fill in the GitHub channel configuration](../../image/upload/github-releases/填写github渠道配置.png)

## Step 3: Save Channel

Setelah mengisi field, klik Save.

System akan menangani detail berikut:

| System Behavior | Description |
| --- | --- |
| Short repository name | ImgBed mengenali current GitHub account dan memperluas value menjadi full repository path. |
| Full repository path | ImgBed memakai path `username/repository` persis seperti yang dimasukkan. |
| Repository check | Jika memakai current personal account path, ImgBed otomatis membuat repository saat belum ada. Jika memasukkan full path manual, ImgBed langsung memakai path tersebut. |
| Public/private state | Repository visibility disinkronkan sesuai current switch. |

## Quick Checklist

GitHub Releases bekerja seperti ini:

```text
Sign in ke GitHub
-> Buat Access Token
-> Kembali ke ImgBed dan masukkan token serta repository name
-> Save
-> Jika hanya repo name yang dimasukkan, ImgBed menambahkan current username otomatis
-> Jika username/repo dimasukkan, ImgBed memakainya apa adanya
-> Upload test image
```
