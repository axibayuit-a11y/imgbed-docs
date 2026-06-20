# Menambahkan OneDrive Channel

## Yang Perlu Disiapkan Dahulu

| Requirement | Mengapa Dibutuhkan |
| --- | --- |
| Microsoft account | Digunakan untuk mengakses Microsoft admin pages dan authorize OneDrive |
| ImgBed domain Anda | Digunakan untuk OAuth callback URL |
| App registration | Digunakan untuk generate `Client ID` dan `Client Secret` |
| OneDrive account | Digunakan sebagai lokasi file storage sebenarnya |

## Langkah Setup

### Step 1: Buka Microsoft Entra ID

1. Buka `portal.azure.com`.
2. Cari `Microsoft Entra ID` di bagian atas.
3. Jika target page tidak muncul di dropdown, pilih:

```text
Continue searching in Microsoft Entra ID
```

4. Buka `Microsoft Entra ID`.
5. Buka `App registrations`.
6. Klik `New registration`.

### Step 2: Register App

Di halaman `New registration`, isi:

| Field | Yang Diisi |
| --- | --- |
| Name | Nama yang mudah dikenali, misalnya `imgbed-onedrive` |
| Supported account types | Pilih sesuai tabel di bawah |
| Redirect URI type | `Web` |
| Redirect URI | `https://your-domain.com/api/oauth/onedrive/callback` |

Panduan account type:

| Skenario Anda | Supported Account Types |
| --- | --- |
| Personal OneDrive saja | Pilih opsi personal Microsoft account. |
| Personal dan work/school accounts | Pilih opsi yang mendukung personal dan organizational accounts. |
| Company atau school OneDrive saja | Pilih organizational account option. |

Klik register setelah form selesai diisi.

![Create OneDrive app](../../image/upload/onedrive/添加应用程序注册.png)

### Step 3: Copy App Information

Setelah app dibuat, copy nilai berikut dari overview page:

| Microsoft Field | ImgBed Field |
| --- | --- |
| `Application (client) ID` | `Client ID` |
| `Directory (tenant) ID` | `Tenant ID` untuk organizational accounts |

![Application and tenant IDs](../../image/upload/onedrive/应用程序ID和目录租户ID位.png)

### Step 4: Buat Client Secret

1. Buka `Certificates & secrets`.
2. Klik `New client secret`.
3. Masukkan description sesuai kebutuhan.
4. Pilih expiration period.
5. Copy `Value` segera setelah dibuat.

![Save client secret value](../../image/upload/onedrive/保存客户端密码值.png)

### Step 5: Tambahkan API Permissions

1. Buka `API permissions`.
2. Klik `Add a permission`.
3. Pilih `Microsoft Graph`.
4. Pilih `Delegated permissions`.
5. Tambahkan permissions ini:

| Permission | Purpose |
| --- | --- |
| `Files.ReadWrite.All` | Upload files, membuat folders, dan delete files |
| `offline_access` | Mengizinkan ImgBed mendapatkan `Refresh Token` |
| `User.Read` | Membaca account dan quota information |

### Step 6: Isi OneDrive Channel

Di Upload Settings, pilih `OneDrive` dan isi:

| ImgBed Field | Yang Diisi |
| --- | --- |
| Channel name | Nama yang mudah dikenali, misalnya `Main OneDrive` |
| Client ID | Microsoft `Application (client) ID` |
| Client Secret | `Client Secret Value` yang Anda copy |
| Tenant ID | Gunakan tabel di bawah |
| Refresh Token | Biarkan kosong dulu |
| Root directory | Optional. Default adalah `imgbed`. |
| Note | Optional |

![Fill OneDrive channel config](../../image/upload/onedrive/添加新渠道配置.png)

Cara mengisi `Tenant ID`:

| Account Type You Chose | ImgBed `Tenant ID` |
| --- | --- |
| Personal accounts | `consumers` |
| Personal + organizational accounts | `common` |
| Current organization only | `Directory (tenant) ID` |

### Step 7: Dapatkan Refresh Token

1. Di ImgBed, klik `Get Token`.
2. Sign in ke Microsoft account yang ingin dihubungkan.
3. Approve authorization prompt.
4. Callback page akan menampilkan `Refresh Token`.
5. Copy token tersebut.
6. Kembali ke ImgBed dan paste ke field `Refresh Token`.

![Copy refresh token](../../image/upload/onedrive/复制刷新令牌.png)

### Step 8: Save Channel

Setelah semua field terisi, save channel.

## Quick Flow

```text
Buka portal.azure.com
-> Cari Microsoft Entra ID
-> Buka App registrations
-> Register app baru
-> Isi Name / Supported account types / Web redirect URI
-> Register
-> Copy Application (client) ID
-> Cek callback URL di Authentication
-> Buat Client Secret di Certificates & secrets
-> Tambahkan permissions di API permissions
-> Isi Client ID / Client Secret / Tenant ID ke ImgBed
-> Klik Get Token
-> Copy Refresh Token dari callback page
-> Paste kembali ke ImgBed dan save
```

## References

1. Microsoft Entra app registration: https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app
2. Microsoft identity platform authorization code flow: https://learn.microsoft.com/en-us/entra/identity-platform/v2-oauth2-auth-code-flow
3. Microsoft Graph user authentication: https://learn.microsoft.com/en-us/graph/auth-v2-user
