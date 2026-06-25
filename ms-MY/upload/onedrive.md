# Tambah Saluran OneDrive

## Perkara Yang Diperlukan Dahulu

| Keperluan | Sebab Diperlukan |
| --- | --- |
| Akaun Microsoft | Digunakan untuk mengakses halaman pentadbir Microsoft dan mengizinkan OneDrive |
| Domain ImgBed anda | Digunakan untuk URL callback OAuth |
| Pendaftaran app | Digunakan untuk menjana `Client ID` dan `Client Secret` |
| Akaun OneDrive | Digunakan sebagai lokasi storan fail sebenar |

## Langkah Persediaan

### Langkah 1: Buka Microsoft Entra ID

1. Buka `portal.azure.com`.
2. Cari `Microsoft Entra ID` di bahagian atas.
3. Jika halaman sasaran tidak ditunjukkan dalam dropdown, pilih:

```text
Continue searching in Microsoft Entra ID
```

4. Buka `Microsoft Entra ID`.
5. Buka `App registrations`.
6. Klik `New registration`.

### Langkah 2: Daftarkan App

Pada halaman `New registration`, isi:

| Medan | Perkara Yang Perlu Dimasukkan |
| --- | --- |
| Nama | Nama yang mudah dikenal pasti, seperti `imgbed-onedrive` |
| Jenis akaun yang disokong | Pilih berdasarkan jadual di bawah |
| Jenis Redirect URI | `Web` |
| Redirect URI | `https://your-domain.com/api/oauth/onedrive/callback` |

Panduan jenis akaun:

| Senario Anda | Jenis Akaun Yang Disokong |
| --- | --- |
| OneDrive peribadi sahaja | Pilih pilihan akaun Microsoft peribadi. |
| Akaun peribadi dan kerja/sekolah | Pilih pilihan yang menyokong akaun peribadi dan organisasi. |
| OneDrive syarikat atau sekolah sahaja | Pilih pilihan akaun organisasi. |

Klik `Register` selepas mengisi borang.

![Buat app OneDrive](../../image/upload/onedrive/添加应用程序注册.png)

### Langkah 3: Salin Maklumat App

Selepas app dibuat, salin nilai berikut daripada halaman gambaran keseluruhan:

| Medan Microsoft | Medan ImgBed |
| --- | --- |
| `Application (client) ID` | `Client ID` |
| `Directory (tenant) ID` | `Tenant ID` untuk akaun organisasi |

![Application dan tenant ID](../../image/upload/onedrive/应用程序ID和目录租户ID位.png)

### Langkah 4: Buat Client Secret

1. Buka `Certificates & secrets`.
2. Klik `New client secret`.
3. Masukkan sebarang keterangan yang anda mahu.
4. Pilih tempoh tamat.
5. Salin `Value` sebaik sahaja ia dibuat.

![Simpan nilai client secret](../../image/upload/onedrive/保存客户端密码值.png)

### Langkah 5: Tambah Kebenaran API

1. Buka `API permissions`.
2. Klik `Add a permission`.
3. Pilih `Microsoft Graph`.
4. Pilih `Delegated permissions`.
5. Tambah kebenaran berikut:

| Kebenaran | Tujuan |
| --- | --- |
| `Files.ReadWrite.All` | Memuat naik fail, membuat folder dan memadam fail |
| `offline_access` | Membolehkan ImgBed mendapatkan `Refresh Token` |
| `User.Read` | Membaca maklumat akaun dan kuota |

### Langkah 6: Isi Saluran OneDrive

Dalam Tetapan Muat Naik, pilih `OneDrive` dan isi:

| Medan ImgBed | Perkara Yang Perlu Dimasukkan |
| --- | --- |
| Nama saluran | Nama yang mudah dikenal pasti, seperti `Main OneDrive` |
| Client ID | Microsoft `Application (client) ID` |
| Client Secret | `Client Secret Value` yang anda salin |
| Tenant ID | Gunakan jadual di bawah |
| Refresh Token | Biarkan kosong buat masa ini |
| Direktori akar | Pilihan. Lalai ialah `imgbed`. |
| Catatan | Pilihan |

![Isi konfigurasi saluran OneDrive](../../image/upload/onedrive/添加新渠道配置.png)

Cara mengisi `Tenant ID`:

| Jenis Akaun Yang Dipilih | `Tenant ID` ImgBed |
| --- | --- |
| Akaun peribadi | `consumers` |
| Akaun peribadi + organisasi | `common` |
| Organisasi semasa sahaja | `Directory (tenant) ID` |

### Langkah 7: Dapatkan Refresh Token

1. Dalam ImgBed, klik `Get Token`.
2. Log masuk ke akaun Microsoft yang mahu disambungkan.
3. Luluskan permintaan kebenaran.
4. Halaman callback akan menunjukkan `Refresh Token`.
5. Salin token tersebut.
6. Kembali ke ImgBed dan tampalkannya dalam medan `Refresh Token`.

![Salin refresh token](../../image/upload/onedrive/复制刷新令牌.png)

### Langkah 8: Simpan Saluran

Selepas semua medan diisi, simpan saluran.

## Aliran Pantas

```text
Open portal.azure.com
-> Search for Microsoft Entra ID
-> Open App registrations
-> Register a new app
-> Fill Name / Supported account types / Web redirect URI
-> Register
-> Copy Application (client) ID
-> Check the callback URL in Authentication
-> Create a Client Secret in Certificates & secrets
-> Add permissions in API permissions
-> Fill Client ID / Client Secret / Tenant ID into ImgBed
-> Click Get Token
-> Copy the Refresh Token from the callback page
-> Paste it back into ImgBed and save
```

## Rujukan

1. Pendaftaran app Microsoft Entra: https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app
2. Aliran authorization code Microsoft identity platform: https://learn.microsoft.com/en-us/entra/identity-platform/v2-oauth2-auth-code-flow
3. Pengesahan pengguna Microsoft Graph: https://learn.microsoft.com/en-us/graph/auth-v2-user
