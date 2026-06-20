# Tambah Yandex Channel

## Perkara Yang Perlu Disediakan Dahulu

| Requirement | Mengapa Diperlukan |
| --- | --- |
| Yandex account | Digunakan untuk sign in dan authorize Yandex Disk |
| Yandex OAuth app | Digunakan untuk generate `Client ID` dan `Client Secret` |
| ImgBed domain anda | Digunakan untuk OAuth redirect URI |
| Available Yandex Disk storage | Digunakan sebagai lokasi file storage sebenar |

## Langkah Setup

### Step 1: Cipta Yandex OAuth App

1. Buka halaman penciptaan Yandex OAuth app:

```text
https://oauth.yandex.com/client/new
```

2. Jika anda redirected ke sign in, sign in dengan Yandex account dahulu.
3. Cipta app baharu.
4. Beri nama app yang mudah dikenali, contohnya `imgbed-yandex`.
5. Cari callback atau redirect URL settings.
6. Masukkan:

```text
https://your-domain.com/api/oauth/yandex/callback
```

### Step 2: Sahkan Permissions

Untuk ImgBed Yandex integration semasa, kekalkan empat permissions ini di bawah `Yandex.Disk REST API`:

| Permission | Purpose |
| --- | --- |
| `cloud_api:disk.app_folder` | Membolehkan ImgBed menyimpan files dalam app folder |
| `cloud_api:disk.read` | Membaca files dan download links |
| `cloud_api:disk.write` | Upload files, cipta folders dan delete files |
| `Access to information about Yandex.Disk` | Membaca disk quota dan used space |

Jika anda juga melihat permissions ini di bawah `Yandex ID API`, ia optional:

| Permission Text | Recommendation |
| --- | --- |
| `Access to username, first name and surname, gender` | Optional |
| `Access to email address` | Optional |

Core upload, download, deletion dan quota features bergantung terutamanya pada empat permissions `Yandex.Disk REST API` di atas.

![Configure Yandex Disk permissions](../../image/upload/yandex/dataaccess配置软盘权限.png)

### Step 3: Copy App Credentials

Selepas app dicipta, copy:

| Yandex Field | ImgBed Field |
| --- | --- |
| `Client ID` | `Client ID` |
| `Client Secret` | `Client Secret` |

![Record Client ID and Secret](../../image/upload/yandex/记录客户端id和secret.png)

### Step 4: Isi Yandex Channel

Dalam Upload Settings, pilih `Yandex` dan isi:

| ImgBed Field | Apa Yang Perlu Diisi |
| --- | --- |
| Channel name | Nama mudah dikenali, contohnya `Main Yandex` |
| Client ID | Yandex app `Client ID` |
| Client Secret | Yandex app `Client Secret` |
| Refresh Token | Biarkan kosong buat masa ini |
| Root directory | Optional. Default ialah `imgbed`. |

![Edit channel config](../../image/upload/yandex/编辑配置渠道.png)

### Step 5: Dapatkan Refresh Token

1. Dalam ImgBed, klik `Get Token`.
2. Sign in ke Yandex account yang mahu disambungkan.
3. Approve authorization prompt.
4. Callback page akan menunjukkan `Refresh Token`.
5. Copy token tersebut.
6. Kembali ke ImgBed dan paste dalam field `Refresh Token`.

![Copy refresh token after authorization](../../image/upload/yandex/授权后复制刷新令牌.png)

### Step 6: Save Channel

Selepas semua field diisi, save channel.

## Quick Flow

```text
Buka Yandex OAuth Console
-> Cipta app
-> Tambah https://your-domain.com/api/oauth/yandex/callback
-> Sahkan Yandex Disk permissions
-> Copy Client ID dan Client Secret
-> Isi Client ID / Client Secret dalam ImgBed
-> Klik Get Token
-> Copy Refresh Token dari callback page
-> Paste kembali ke ImgBed dan save
```

## References

1. Register a Yandex app: https://yandex.com/dev/id/doc/en/register-client
2. Get an authorization code through URL: https://yandex.com/dev/id/doc/en/codes/code-url
3. Yandex OAuth token endpoint: https://yandex.com/dev/id/doc/en/tokens/token
