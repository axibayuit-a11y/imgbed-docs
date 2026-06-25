# Tambah Saluran Google Drive

## Perkara Yang Diperlukan Dahulu

Sebelum bermula, sediakan perkara berikut:

| Keperluan | Sebab Diperlukan |
| --- | --- |
| Akaun Google | Digunakan untuk mengakses Google Cloud dan mengizinkan Google Drive |
| Projek Google Cloud | Digunakan untuk mendayakan Drive API dan membuat kelayakan OAuth |
| Client OAuth 2.0 | Digunakan oleh ImgBed untuk mendapatkan `Client ID`, `Client Secret` dan `Refresh Token` |
| Domain ImgBed anda | Digunakan untuk URI redirect OAuth. Ia mesti sepadan dengan domain sebenar yang anda gunakan. |

## Langkah Persediaan

### Langkah 1: Dayakan Google Drive API

1. Buka Google Cloud Console.
2. Buat projek baharu atau pilih projek sedia ada.
3. Pergi ke `APIs & Services`.
4. Klik `Enable APIs and Services`.
5. Cari `Google Drive API`.
6. Buka dan dayakannya.

### Langkah 2: Konfigurasikan OAuth Consent Screen

1. Dalam Google Cloud, buka `Google Auth Platform`.
2. Lengkapkan maklumat asas `Branding`, seperti nama app, e-mel sokongan dan e-mel hubungan pembangun.
3. Buka `Audience`.
4. Untuk kebanyakan deployment peribadi self-hosted, pilih `External`.
5. Jika anda memilih `External`, tambah akaun Google yang mahu diizinkan di bawah `Test users`.
6. Buka `Data Access`.
7. Tambah kebenaran Google Drive yang diperlukan.

### Langkah 3: Buat Client OAuth 2.0

1. Dalam `Google Auth Platform`, buka `Clients`.
2. Buat client baharu.
3. Tetapkan jenis aplikasi kepada `Web application`.
4. Berikan nama yang mudah dikenal pasti kepada client.
5. Untuk authorized JavaScript origins, masukkan URL ImgBed anda, contohnya:

```text
https://img.example.com
```

6. Untuk authorized redirect URIs, masukkan:

```text
https://img.example.com/api/oauth/google/callback
```

![Buat client OAuth](../../image/upload/google-drive/oa客户端id创建.png)

![Masukkan domain dan URL callback](../../image/upload/google-drive/填写oa客户端url信息.png)

Selepas client dibuat, salin nilai berikut:

| Nilai Dijana | Medan ImgBed |
| --- | --- |
| Client ID | `Client ID` |
| Client Secret | `Client Secret` |

## Langkah 4: Isi Saluran Google Drive

Dalam Tetapan Muat Naik, pilih `Google Drive` dan isi:

| Medan ImgBed | Perkara Yang Perlu Dimasukkan |
| --- | --- |
| Nama saluran | Nama yang mudah dikenal pasti, seperti `Main Google Drive` |
| Client ID | Client ID daripada Google Cloud |
| Client Secret | Client Secret daripada Google Cloud |
| Refresh Token | Biarkan kosong buat masa ini. Dapatkannya dalam langkah seterusnya. |
| Direktori akar | Pilihan. Lalai ialah `imgbed`. |

![Isi butiran client dalam ImgBed](../../image/upload/google-drive/粘贴回添加新渠道配置.png)

## Langkah 5: Dapatkan Refresh Token

1. Klik `Get Token`.
2. Pilih akaun Google yang mahu disambungkan.
3. Lengkapkan permintaan kebenaran.
4. Halaman callback akan menunjukkan `Refresh Token`.
5. Salin token tersebut.
6. Kembali ke ImgBed dan tampalkannya dalam medan `Refresh Token`.

![Salin Refresh Token selepas kebenaran](../../image/upload/google-drive/授权完复制token.png)

Jika anda menukar akaun Google kemudian, menukar client OAuth atau kebenaran lama tamat tempoh, anda tidak perlu memadam saluran. Buka halaman edit dan klik `Reauthorize`.

## Langkah 6: Simpan Saluran

Selepas semua medan diisi, simpan saluran.

## Aliran Pantas

```text
Open Google Cloud
-> Create or select a project
-> Enable Google Drive API
-> Configure Google Auth Platform
-> If Audience is External, add your Google account to Test users
-> Create a Web application OAuth client
-> Use https://your-domain.com/api/oauth/google/callback as the redirect URI
-> Fill Client ID and Client Secret into ImgBed
-> Click Get Token
-> Sign in with Google and authorize
-> Copy the Refresh Token from the callback page
-> Paste it back into ImgBed and save
-> Upload a test image
```

## Rujukan

1. Aplikasi pelayan web Google OAuth: https://developers.google.com/identity/protocols/oauth2/web-server
2. Konfigurasi persetujuan OAuth Google Workspace: https://developers.google.com/workspace/guides/configure-oauth-consent
3. Skop auth Google Drive API: https://developers.google.com/workspace/drive/api/guides/api-specific-auth
