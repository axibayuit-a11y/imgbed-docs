# Tambah OneDrive Channel

## Perkara Yang Perlu Disediakan Dahulu

| Requirement | Mengapa Diperlukan |
| --- | --- |
| Microsoft account | Digunakan untuk mengakses Microsoft admin pages dan authorize OneDrive |
| ImgBed domain anda | Digunakan untuk OAuth callback URL |
| App registration | Digunakan untuk generate `Client ID` dan `Client Secret` |
| OneDrive account | Digunakan sebagai lokasi storage sebenar |

## Langkah Setup

### Step 1: Buka Microsoft Entra ID

1. Buka `portal.azure.com`.
2. Cari `Microsoft Entra ID` di bahagian atas.
3. Jika halaman sasaran tidak muncul dalam dropdown, pilih:

```text
Continue searching in Microsoft Entra ID
```

4. Buka `Microsoft Entra ID`.
5. Buka `App registrations`.
6. Klik `New registration`.

### Step 2: Register App

Pada halaman `New registration`, isi:

| Field | Apa Yang Perlu Diisi |
| --- | --- |
| Name | Nama yang mudah dikenali, contohnya `imgbed-onedrive` |
| Supported account types | Pilih berdasarkan jadual di bawah |
| Redirect URI type | `Web` |
| Redirect URI | `https://your-domain.com/api/oauth/onedrive/callback` |

Panduan account type:

| Situasi Anda | Supported Account Types |
| --- | --- |
| Personal OneDrive sahaja | Pilih pilihan personal Microsoft account. |
| Personal dan work/school accounts | Pilih pilihan yang menyokong kedua-dua personal dan organizational accounts. |
| Company atau school OneDrive sahaja | Pilih organizational account option. |

Klik register selepas borang lengkap.

![Create OneDrive app](../../image/upload/onedrive/添加应用程序注册.png)

### Step 3: Copy App Information

Selepas app dicipta, copy nilai ini dari overview page:

| Microsoft Field | ImgBed Field |
| --- | --- |
| `Application (client) ID` | `Client ID` |
| `Directory (tenant) ID` | `Tenant ID` untuk organizational accounts |

![Application and tenant IDs](../../image/upload/onedrive/应用程序ID和目录租户ID位.png)

### Step 4: Cipta Client Secret

1. Buka `Certificates & secrets`.
2. Klik `New client secret`.
3. Masukkan description yang anda mahu.
4. Pilih expiration period.
5. Copy `Value` sebaik sahaja ia dicipta.

![Save client secret value](../../image/upload/onedrive/保存客户端密码值.png)

### Step 5: Tambah API Permissions

1. Buka `API permissions`.
2. Klik `Add a permission`.
3. Pilih `Microsoft Graph`.
4. Pilih `Delegated permissions`.
5. Tambah permissions ini:

| Permission | Purpose |
| --- | --- |
| `Files.ReadWrite.All` | Upload files, cipta folders dan delete files |
| `offline_access` | Membolehkan ImgBed mendapatkan `Refresh Token` |
| `User.Read` | Membaca account dan quota information |

### Step 6: Isi OneDrive Channel

Dalam Upload Settings, pilih `OneDrive` dan isi:

| ImgBed Field | Apa Yang Perlu Diisi |
| --- | --- |
| Channel name | Nama mudah dikenali, contohnya `Main OneDrive` |
| Client ID | Microsoft `Application (client) ID` |
| Client Secret | `Client Secret Value` yang anda copy |
| Tenant ID | Gunakan jadual di bawah |
| Refresh Token | Biarkan kosong buat masa ini |
| Root directory | Optional. Default ialah `imgbed`. |
| Note | Optional |

![Fill OneDrive channel config](../../image/upload/onedrive/添加新渠道配置.png)

Cara mengisi `Tenant ID`:

| Account Type You Chose | ImgBed `Tenant ID` |
| --- | --- |
| Personal accounts | `consumers` |
| Personal + organizational accounts | `common` |
| Current organization only | `Directory (tenant) ID` |

### Step 7: Dapatkan Refresh Token

1. Dalam ImgBed, klik `Get Token`.
2. Sign in ke Microsoft account yang mahu disambungkan.
3. Approve authorization prompt.
4. Callback page akan menunjukkan `Refresh Token`.
5. Copy token tersebut.
6. Kembali ke ImgBed dan paste dalam field `Refresh Token`.

![Copy refresh token](../../image/upload/onedrive/复制刷新令牌.png)

### Step 8: Save Channel

Selepas semua field diisi, save channel.

## Quick Flow

```text
Buka portal.azure.com
-> Cari Microsoft Entra ID
-> Buka App registrations
-> Register app baharu
-> Isi Name / Supported account types / Web redirect URI
-> Register
-> Copy Application (client) ID
-> Semak callback URL dalam Authentication
-> Cipta Client Secret dalam Certificates & secrets
-> Tambah permissions dalam API permissions
-> Isi Client ID / Client Secret / Tenant ID dalam ImgBed
-> Klik Get Token
-> Copy Refresh Token dari callback page
-> Paste kembali ke ImgBed dan save
```

## References

1. Microsoft Entra app registration: https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app
2. Microsoft identity platform authorization code flow: https://learn.microsoft.com/en-us/entra/identity-platform/v2-oauth2-auth-code-flow
3. Microsoft Graph user authentication: https://learn.microsoft.com/en-us/graph/auth-v2-user
