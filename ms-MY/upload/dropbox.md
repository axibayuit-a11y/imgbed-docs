# Tambah Dropbox Channel

## Perkara Yang Perlu Disediakan Dahulu

| Requirement | Mengapa Diperlukan |
| --- | --- |
| Dropbox account | Digunakan untuk sign in dan authorize app |
| Dropbox app | Digunakan untuk generate `App Key` dan `App Secret` |
| ImgBed domain anda | Digunakan untuk OAuth redirect URI |
| Available Dropbox storage | Digunakan sebagai lokasi file storage sebenar |

## Langkah Setup

### Step 1: Cipta Dropbox App

1. Buka Dropbox App Console:

```text
https://www.dropbox.com/developers/apps
```

2. Cipta app baharu.
3. Untuk access type, pilih:

```text
App folder
```

4. Beri nama app yang mudah dikenali, contohnya `imgbed-app`.
5. Buka app details page selepas ia dicipta.

Recommended access type:

| Access Type | Recommendation |
| --- | --- |
| `App folder` | Recommended. Ia sepadan dengan cara ImgBed menyimpan files. |
| `Full Dropbox` | Tidak recommended. ImgBed tidak memerlukan full-account access. |

![Create Dropbox app](../../image/upload/dropbox/开发者创建应用.png)

### Step 2: Tambah Redirect URI

Dalam Dropbox app details page, cari OAuth atau Redirect URI settings dan tambah:

```text
https://your-domain.com/api/oauth/dropbox/callback
```

Jika anda menggunakan admin panel dari lebih daripada satu domain, tambah setiap callback URL yang sepadan.

![Configure redirect URI](../../image/upload/dropbox/配置回调地址.png)

### Step 3: Configure App Permissions

Buka tab `Permissions` dan enable sekurang-kurangnya scopes ini:

| Scope | Required | Purpose |
| --- | --- | --- |
| `account_info.read` | Required | Membaca account dan quota information |
| `files.metadata.read` | Required | Membaca file dan folder metadata untuk path checks |
| `files.metadata.write` | Required | Mencipta folders dan menulis metadata |
| `files.content.write` | Required | Upload files. Jika scope ini tiada, error `required scope 'files.content.write'` akan berlaku. |
| `files.content.read` | Recommended | Membolehkan download, preview dan temporary file links |

Selepas memilih scopes, klik `Submit` di bahagian bawah halaman.

![Add permissions](../../image/upload/dropbox/添加对应的权限.png)

Important:

| Situation | Apa Yang Perlu Dibuat |
| --- | --- |
| Anda menukar scopes | Jalankan token authorization flow semula dan dapatkan `Refresh Token` baharu. |
| Anda tidak reauthorize | Token lama tidak akan mendapat permissions baharu, jadi uploads masih boleh gagal. |

### Step 4: Copy App Credentials

Simpan dua nilai ini dari Dropbox app page:

| Dropbox Field | ImgBed Field |
| --- | --- |
| `App key` | `App Key` |
| `App secret` | `App Secret` |

### Step 5: Isi Dropbox Channel

Dalam Upload Settings, pilih `Dropbox` dan isi:

| ImgBed Field | Apa Yang Perlu Diisi |
| --- | --- |
| Channel name | Nama mudah dikenali, contohnya `Main Dropbox` |
| App Key | Dropbox `App key` |
| App Secret | Dropbox `App secret` |
| Refresh Token | Biarkan kosong buat masa ini |
| Root directory | Optional. Default ialah `imgbed`. |
| Note | Optional |

![Get token](../../image/upload/dropbox/获取令牌.png)

### Step 6: Dapatkan Refresh Token

1. Dalam ImgBed, klik `Get Token`.
2. Sign in ke Dropbox account yang mahu disambungkan.
3. Approve authorization prompt.
4. Callback page akan menunjukkan `Refresh Token`.
5. Copy token tersebut.
6. Kembali ke ImgBed dan paste dalam field `Refresh Token`.

![Copy token](../../image/upload/dropbox/复制令牌.png)

## Cara Menyemak

| Check | Expected Result |
| --- | --- |
| Channel card | Dropbox channel muncul selepas save. |
| Channel switch | Channel boleh enabled. |
| Token saved | Detail page menunjukkan `Refresh Token` telah disimpan. |
| Upload test | Test image muncul dalam Dropbox app folder. |

Jika quota limits diaktifkan, klik quota query. Selepas query berjaya, channel card memaparkan used space, total space dan last update time.

![Quota query success](../../image/upload/dropbox/查询额度成功.png)

## Troubleshooting

| Problem | Fix |
| --- | --- |
| ImgBed mengatakan configuration incomplete | Semak `App Key`, `App Secret` dan `Refresh Token` semuanya telah diisi. |
| Authorization berjaya tetapi tiada `Refresh Token` | Klik `Get Token` sekali lagi dan pastikan offline authorization flow digunakan. |
| Upload gagal dengan `required scope 'files.content.write'` | Enable `files.content.write`, klik `Submit`, kemudian dapatkan `Refresh Token` baharu. |
| Callback gagal | Pastikan redirect URI ialah `https://your-domain.com/api/oauth/dropbox/callback`. |
| Files tidak dijumpai | Pastikan Dropbox app dicipta dalam mode `App folder`. |

## Quick Flow

```text
Buka Dropbox App Console
-> Cipta app
-> Pilih App folder access
-> Tambah https://your-domain.com/api/oauth/dropbox/callback
-> Enable account_info.read / files.metadata.read / files.metadata.write / files.content.write
-> Optional enable files.content.read
-> Klik Submit
-> Copy App Key dan App Secret
-> Isi dalam ImgBed
-> Klik Get Token
-> Copy Refresh Token dari callback page
-> Paste kembali ke ImgBed dan save
```

## References

1. Dropbox App Console: https://www.dropbox.com/developers/apps
2. Dropbox OAuth Guide: https://developers.dropbox.com/oauth-guide
3. Dropbox Developer Guide: https://www.dropbox.com/developers/reference/developer-guide
