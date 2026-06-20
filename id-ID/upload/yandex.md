# Menambahkan Yandex Channel

## Yang Perlu Disiapkan Dahulu

| Requirement | Mengapa Dibutuhkan |
| --- | --- |
| Yandex account | Digunakan untuk sign in dan authorize Yandex Disk |
| Yandex OAuth app | Digunakan untuk generate `Client ID` dan `Client Secret` |
| ImgBed domain Anda | Digunakan untuk OAuth redirect URI |
| Available Yandex Disk storage | Digunakan sebagai lokasi file storage sebenarnya |

## Langkah Setup

### Step 1: Buat Yandex OAuth App

1. Buka halaman pembuatan Yandex OAuth app:

```text
https://oauth.yandex.com/client/new
```

2. Jika diarahkan ke sign in, sign in dengan Yandex account terlebih dahulu.
3. Buat app baru.
4. Beri nama app yang mudah dikenali, misalnya `imgbed-yandex`.
5. Cari callback atau redirect URL settings.
6. Masukkan:

```text
https://your-domain.com/api/oauth/yandex/callback
```

### Step 2: Pastikan Permissions

Untuk ImgBed Yandex integration saat ini, pertahankan empat permissions ini di bawah `Yandex.Disk REST API`:

| Permission | Purpose |
| --- | --- |
| `cloud_api:disk.app_folder` | Mengizinkan ImgBed menyimpan files di app folder |
| `cloud_api:disk.read` | Membaca files dan download links |
| `cloud_api:disk.write` | Upload files, membuat folders, dan delete files |
| `Access to information about Yandex.Disk` | Membaca disk quota dan used space |

Jika Anda juga melihat permissions ini di bawah `Yandex ID API`, itu optional:

| Permission Text | Recommendation |
| --- | --- |
| `Access to username, first name and surname, gender` | Optional |
| `Access to email address` | Optional |

Core upload, download, deletion, dan quota features terutama bergantung pada empat permissions `Yandex.Disk REST API` di atas.

![Configure Yandex Disk permissions](../../image/upload/yandex/dataaccess配置软盘权限.png)

### Step 3: Copy App Credentials

Setelah app dibuat, copy:

| Yandex Field | ImgBed Field |
| --- | --- |
| `Client ID` | `Client ID` |
| `Client Secret` | `Client Secret` |

![Record Client ID and Secret](../../image/upload/yandex/记录客户端id和secret.png)

### Step 4: Isi Yandex Channel

Di Upload Settings, pilih `Yandex` dan isi:

| ImgBed Field | Yang Diisi |
| --- | --- |
| Channel name | Nama yang mudah dikenali, misalnya `Main Yandex` |
| Client ID | Yandex app `Client ID` |
| Client Secret | Yandex app `Client Secret` |
| Refresh Token | Biarkan kosong dulu |
| Root directory | Optional. Default adalah `imgbed`. |

![Edit channel config](../../image/upload/yandex/编辑配置渠道.png)

### Step 5: Dapatkan Refresh Token

1. Di ImgBed, klik `Get Token`.
2. Sign in ke Yandex account yang ingin dihubungkan.
3. Approve authorization prompt.
4. Callback page akan menampilkan `Refresh Token`.
5. Copy token tersebut.
6. Kembali ke ImgBed dan paste ke field `Refresh Token`.

![Copy refresh token after authorization](../../image/upload/yandex/授权后复制刷新令牌.png)

### Step 6: Save Channel

Setelah semua field terisi, save channel.

## Quick Flow

```text
Buka Yandex OAuth Console
-> Buat app
-> Tambahkan https://your-domain.com/api/oauth/yandex/callback
-> Pastikan Yandex Disk permissions
-> Copy Client ID dan Client Secret
-> Isi Client ID / Client Secret ke ImgBed
-> Klik Get Token
-> Copy Refresh Token dari callback page
-> Paste kembali ke ImgBed dan save
```

## References

1. Register a Yandex app: https://yandex.com/dev/id/doc/en/register-client
2. Get an authorization code through URL: https://yandex.com/dev/id/doc/en/codes/code-url
3. Yandex OAuth token endpoint: https://yandex.com/dev/id/doc/en/tokens/token
