# Menambahkan Kanal Google Drive

## Yang Diperlukan Terlebih Dahulu

Sebelum memulai, siapkan hal berikut:

| Kebutuhan | Alasan diperlukan |
| --- | --- |
| Akun Google | Digunakan untuk mengakses Google Cloud dan mengotorisasi Google Drive |
| Proyek Google Cloud | Digunakan untuk mengaktifkan Drive API dan membuat kredensial OAuth |
| Klien OAuth 2.0 | ImgBed menggunakannya untuk memperoleh `Client ID`, `Client Secret`, dan `Refresh Token` |
| Domain ImgBed Anda | Digunakan sebagai OAuth redirect URI. Harus cocok dengan domain yang benar-benar Anda gunakan. |

## Langkah Konfigurasi

### Langkah 1: Mengaktifkan Google Drive API

1. Buka Google Cloud Console.
2. Buat proyek baru atau pilih proyek yang sudah ada.
3. Masuk ke `APIs & Services`.
4. Klik `Enable APIs and Services`.
5. Cari `Google Drive API`.
6. Buka dan klik Aktifkan.

### Langkah 2: Mengonfigurasi OAuth Consent Screen

1. Di Google Cloud, buka `Google Auth Platform`.
2. Lengkapi informasi dasar `Branding`, seperti nama aplikasi, email dukungan, dan email kontak developer.
3. Buka `Audience`.
4. Untuk sebagian besar deployment pribadi yang dikelola sendiri, pilih `External`.
5. Jika memilih `External`, tambahkan akun Google yang ingin diotorisasi ke `Test users`.
6. Buka `Data Access`.
7. Tambahkan izin Google Drive yang diperlukan.

### Langkah 3: Membuat Klien OAuth 2.0

1. Di `Google Auth Platform`, buka `Clients`.
2. Buat klien baru.
3. Atur jenis aplikasi menjadi `Web application`.
4. Beri klien nama yang mudah dikenali.
5. Pada authorized JavaScript origins, masukkan URL ImgBed, misalnya:

```text
https://img.example.com
```

6. Pada authorized redirect URIs, masukkan:

```text
https://img.example.com/api/oauth/google/callback
```

![Membuat klien OAuth](../../image/upload/google-drive/oa客户端id创建.png)

![Memasukkan domain dan URL callback](../../image/upload/google-drive/填写oa客户端url信息.png)

Setelah klien dibuat, salin nilai berikut:

| Nilai yang dibuat | Kolom ImgBed |
| --- | --- |
| Client ID | `Client ID` |
| Client Secret | `Client Secret` |

## Langkah 4: Mengisi Kanal Google Drive

Di pengaturan unggah, pilih `Google Drive` lalu isi:

| Kolom ImgBed | Nilai yang diisi |
| --- | --- |
| Nama kanal | Nama yang mudah dikenali, misalnya `Main Google Drive` |
| Client ID | `Client ID` dari Google Cloud |
| Client Secret | `Client Secret` dari Google Cloud |
| Refresh Token | Biarkan kosong terlebih dahulu. Anda akan mengambilnya pada langkah berikutnya. |
| Direktori root | Opsional. Default adalah `imgbed`. |

![Mengisi detail klien di ImgBed](../../image/upload/google-drive/粘贴回添加新渠道配置.png)

## Langkah 5: Mendapatkan Refresh Token

1. Klik `Get Token`.
2. Pilih akun Google yang ingin dihubungkan.
3. Selesaikan permintaan otorisasi.
4. Halaman callback akan menampilkan `Refresh Token`.
5. Salin token tersebut.
6. Kembali ke ImgBed dan tempelkan ke kolom `Refresh Token`.

![Menyalin Refresh Token setelah otorisasi](../../image/upload/google-drive/授权完复制token.png)

Jika nanti Anda mengganti akun Google, mengganti klien OAuth, atau otorisasi lama kedaluwarsa, Anda tidak perlu menghapus kanal. Buka halaman edit dan klik `Reauthorize`.

## Langkah 6: Menyimpan Kanal

Setelah semua kolom terisi, simpan kanal.

## Alur Cepat

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

## Referensi

1. Aplikasi server web Google OAuth: https://developers.google.com/identity/protocols/oauth2/web-server
2. Konfigurasi consent OAuth Google Workspace: https://developers.google.com/workspace/guides/configure-oauth-consent
3. Cakupan autentikasi Google Drive API: https://developers.google.com/workspace/drive/api/guides/api-specific-auth
