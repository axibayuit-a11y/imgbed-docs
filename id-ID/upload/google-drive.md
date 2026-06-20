# Menambahkan Google Drive Channel

## Yang Perlu Disiapkan Dahulu

Sebelum mulai, siapkan item berikut:

| Requirement | Mengapa Dibutuhkan |
| --- | --- |
| Google account | Digunakan untuk mengakses Google Cloud dan authorize Google Drive |
| Google Cloud project | Digunakan untuk enable Drive API dan membuat OAuth credentials |
| OAuth 2.0 client | Digunakan ImgBed untuk mendapatkan `Client ID`, `Client Secret`, dan `Refresh Token` |
| ImgBed domain Anda | Digunakan untuk OAuth redirect URI. Harus cocok dengan domain yang benar-benar Anda pakai. |

## Langkah Setup

### Step 1: Enable Google Drive API

1. Buka Google Cloud Console.
2. Buat project baru atau pilih project yang sudah ada.
3. Masuk ke `APIs & Services`.
4. Klik `Enable APIs and Services`.
5. Cari `Google Drive API`.
6. Buka dan klik enable.

### Step 2: Configure OAuth Consent Screen

1. Di Google Cloud, buka `Google Auth Platform`.
2. Lengkapi informasi dasar `Branding`, seperti app name, support email, dan developer contact email.
3. Buka `Audience`.
4. Untuk kebanyakan self-hosted personal deployments, pilih `External`.
5. Jika memilih `External`, tambahkan Google account yang ingin diauthorize di `Test users`.
6. Buka `Data Access`.
7. Tambahkan Google Drive permissions yang diperlukan.

### Step 3: Buat OAuth 2.0 Client

1. Di `Google Auth Platform`, buka `Clients`.
2. Buat client baru.
3. Set application type ke `Web application`.
4. Beri nama client yang mudah dikenali.
5. Untuk authorized JavaScript origins, masukkan ImgBed URL, misalnya:

```text
https://img.example.com
```

6. Untuk authorized redirect URIs, masukkan:

```text
https://img.example.com/api/oauth/google/callback
```

![Create OAuth client](../../image/upload/google-drive/oa客户端id创建.png)

![Enter domain and callback URL](../../image/upload/google-drive/填写oa客户端url信息.png)

Setelah client dibuat, copy nilai ini:

| Generated Value | ImgBed Field |
| --- | --- |
| Client ID | `Client ID` |
| Client Secret | `Client Secret` |

## Step 4: Isi Google Drive Channel

Di Upload Settings, pilih `Google Drive` dan isi:

| ImgBed Field | Yang Diisi |
| --- | --- |
| Channel name | Nama yang mudah dikenali, misalnya `Main Google Drive` |
| Client ID | Client ID dari Google Cloud |
| Client Secret | Client Secret dari Google Cloud |
| Refresh Token | Biarkan kosong dulu. Ambil di step berikutnya. |
| Root directory | Optional. Default adalah `imgbed`. |

![Fill client details in ImgBed](../../image/upload/google-drive/粘贴回添加新渠道配置.png)

## Step 5: Dapatkan Refresh Token

1. Klik `Get Token`.
2. Pilih Google account yang ingin dihubungkan.
3. Selesaikan authorization prompts.
4. Callback page akan menampilkan `Refresh Token`.
5. Copy token tersebut.
6. Kembali ke ImgBed dan paste ke field `Refresh Token`.

![Copy Refresh Token after authorization](../../image/upload/google-drive/授权完复制token.png)

Jika nanti mengganti Google account, mengganti OAuth client, atau authorization lama expired, Anda tidak perlu menghapus channel. Buka edit page dan klik `Reauthorize`.

## Step 6: Save Channel

Setelah semua field terisi, save channel.

## Quick Flow

```text
Buka Google Cloud
-> Buat atau pilih project
-> Enable Google Drive API
-> Configure Google Auth Platform
-> Jika Audience External, tambahkan Google account Anda ke Test users
-> Buat Web application OAuth client
-> Gunakan https://your-domain.com/api/oauth/google/callback sebagai redirect URI
-> Isi Client ID dan Client Secret ke ImgBed
-> Klik Get Token
-> Sign in dengan Google dan authorize
-> Copy Refresh Token dari callback page
-> Paste kembali ke ImgBed dan save
-> Upload test image
```

## References

1. Google OAuth Web Server Applications: https://developers.google.com/identity/protocols/oauth2/web-server
2. Google Workspace OAuth Consent Configuration: https://developers.google.com/workspace/guides/configure-oauth-consent
3. Google Drive API Auth Scopes: https://developers.google.com/workspace/drive/api/guides/api-specific-auth
