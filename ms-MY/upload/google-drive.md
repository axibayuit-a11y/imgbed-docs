# Tambah Google Drive Channel

## Perkara Yang Perlu Disediakan Dahulu

Sebelum bermula, sediakan item ini:

| Requirement | Mengapa Diperlukan |
| --- | --- |
| Google account | Digunakan untuk akses Google Cloud dan authorize Google Drive |
| Google Cloud project | Digunakan untuk enable Drive API dan cipta OAuth credentials |
| OAuth 2.0 client | Digunakan oleh ImgBed untuk mendapatkan `Client ID`, `Client Secret` dan `Refresh Token` |
| ImgBed domain anda | Digunakan untuk OAuth redirect URI. Ia mesti sepadan dengan domain sebenar yang anda gunakan. |

## Langkah Setup

### Step 1: Enable Google Drive API

1. Buka Google Cloud Console.
2. Cipta project baharu atau pilih project sedia ada.
3. Pergi ke `APIs & Services`.
4. Klik `Enable APIs and Services`.
5. Cari `Google Drive API`.
6. Buka dan klik enable.

### Step 2: Configure OAuth Consent Screen

1. Dalam Google Cloud, buka `Google Auth Platform`.
2. Lengkapkan maklumat asas `Branding`, seperti app name, support email dan developer contact email.
3. Buka `Audience`.
4. Untuk kebanyakan self-hosted personal deployments, pilih `External`.
5. Jika memilih `External`, tambah Google account yang mahu diauthorize di bawah `Test users`.
6. Buka `Data Access`.
7. Tambah Google Drive permissions yang diperlukan.

### Step 3: Cipta OAuth 2.0 Client

1. Dalam `Google Auth Platform`, buka `Clients`.
2. Cipta client baharu.
3. Tetapkan application type kepada `Web application`.
4. Beri nama client yang mudah dikenali.
5. Untuk authorized JavaScript origins, masukkan ImgBed URL, contohnya:

```text
https://img.example.com
```

6. Untuk authorized redirect URIs, masukkan:

```text
https://img.example.com/api/oauth/google/callback
```

![Create OAuth client](../../image/upload/google-drive/oa客户端id创建.png)

![Enter domain and callback URL](../../image/upload/google-drive/填写oa客户端url信息.png)

Selepas client dicipta, copy nilai ini:

| Generated Value | ImgBed Field |
| --- | --- |
| Client ID | `Client ID` |
| Client Secret | `Client Secret` |

## Step 4: Isi Google Drive Channel

Dalam Upload Settings, pilih `Google Drive` dan isi:

| ImgBed Field | Apa Yang Perlu Diisi |
| --- | --- |
| Channel name | Nama mudah dikenali, contohnya `Main Google Drive` |
| Client ID | Client ID dari Google Cloud |
| Client Secret | Client Secret dari Google Cloud |
| Refresh Token | Biarkan kosong buat masa ini. Dapatkan pada step seterusnya. |
| Root directory | Optional. Default ialah `imgbed`. |

![Fill client details in ImgBed](../../image/upload/google-drive/粘贴回添加新渠道配置.png)

## Step 5: Dapatkan Refresh Token

1. Klik `Get Token`.
2. Pilih Google account yang mahu disambungkan.
3. Lengkapkan authorization prompts.
4. Callback page akan menunjukkan `Refresh Token`.
5. Copy token tersebut.
6. Kembali ke ImgBed dan paste dalam field `Refresh Token`.

![Copy Refresh Token after authorization](../../image/upload/google-drive/授权完复制token.png)

Jika kemudian anda menukar Google account, menukar OAuth client, atau authorization lama tamat tempoh, anda tidak perlu delete channel. Buka edit page dan klik `Reauthorize`.

## Step 6: Save Channel

Selepas semua field diisi, save channel.

## Quick Flow

```text
Buka Google Cloud
-> Cipta atau pilih project
-> Enable Google Drive API
-> Configure Google Auth Platform
-> Jika Audience ialah External, tambah Google account anda ke Test users
-> Cipta Web application OAuth client
-> Gunakan https://your-domain.com/api/oauth/google/callback sebagai redirect URI
-> Isi Client ID dan Client Secret dalam ImgBed
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
