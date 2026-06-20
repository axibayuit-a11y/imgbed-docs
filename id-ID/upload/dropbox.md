# Menambahkan Dropbox Channel

## Yang Perlu Disiapkan Dahulu

| Requirement | Mengapa Dibutuhkan |
| --- | --- |
| Dropbox account | Digunakan untuk sign in dan authorize app |
| Dropbox app | Digunakan untuk generate `App Key` dan `App Secret` |
| ImgBed domain Anda | Digunakan untuk OAuth redirect URI |
| Available Dropbox storage | Digunakan sebagai lokasi file storage sebenarnya |

## Langkah Setup

### Step 1: Buat Dropbox App

1. Buka Dropbox App Console:

```text
https://www.dropbox.com/developers/apps
```

2. Buat app baru.
3. Untuk access type, pilih:

```text
App folder
```

4. Beri nama app yang mudah dikenali, misalnya `imgbed-app`.
5. Buka app details page setelah dibuat.

Recommended access type:

| Access Type | Recommendation |
| --- | --- |
| `App folder` | Recommended. Cocok dengan cara ImgBed menyimpan files. |
| `Full Dropbox` | Tidak recommended. ImgBed tidak membutuhkan akses seluruh account. |

![Create Dropbox app](../../image/upload/dropbox/开发者创建应用.png)

### Step 2: Tambahkan Redirect URI

Di Dropbox app details page, cari OAuth atau Redirect URI settings dan tambahkan:

```text
https://your-domain.com/api/oauth/dropbox/callback
```

Jika memakai admin panel dari lebih dari satu domain, tambahkan setiap callback URL yang cocok.

![Configure redirect URI](../../image/upload/dropbox/配置回调地址.png)

### Step 3: Configure App Permissions

Buka tab `Permissions` dan enable minimal scopes ini:

| Scope | Required | Purpose |
| --- | --- | --- |
| `account_info.read` | Required | Membaca account dan quota information |
| `files.metadata.read` | Required | Membaca file dan folder metadata untuk path checks |
| `files.metadata.write` | Required | Membuat folders dan menulis metadata |
| `files.content.write` | Required | Upload files. Jika scope ini tidak ada, akan muncul `required scope 'files.content.write'`. |
| `files.content.read` | Recommended | Mengizinkan download, preview, dan temporary file links |

Setelah memilih scopes, klik `Submit` di bagian bawah page.

![Add permissions](../../image/upload/dropbox/添加对应的权限.png)

Important:

| Situation | Yang Perlu Dilakukan |
| --- | --- |
| Anda mengubah scopes | Jalankan token authorization flow lagi dan ambil `Refresh Token` baru. |
| Anda tidak reauthorize | Token lama tidak akan mendapat permissions baru, jadi uploads masih bisa gagal. |

### Step 4: Copy App Credentials

Simpan dua nilai ini dari Dropbox app page:

| Dropbox Field | ImgBed Field |
| --- | --- |
| `App key` | `App Key` |
| `App secret` | `App Secret` |

### Step 5: Isi Dropbox Channel

Di Upload Settings, pilih `Dropbox` dan isi:

| ImgBed Field | Yang Diisi |
| --- | --- |
| Channel name | Nama yang mudah dikenali, misalnya `Main Dropbox` |
| App Key | Dropbox `App key` |
| App Secret | Dropbox `App secret` |
| Refresh Token | Biarkan kosong dulu |
| Root directory | Optional. Default adalah `imgbed`. |
| Note | Optional |

![Get token](../../image/upload/dropbox/获取令牌.png)

### Step 6: Dapatkan Refresh Token

1. Di ImgBed, klik `Get Token`.
2. Sign in ke Dropbox account yang ingin dihubungkan.
3. Approve authorization prompt.
4. Callback page akan menampilkan `Refresh Token`.
5. Copy token tersebut.
6. Kembali ke ImgBed dan paste ke field `Refresh Token`.

![Copy token](../../image/upload/dropbox/复制令牌.png)

## Cara Memeriksa

| Check | Expected Result |
| --- | --- |
| Channel card | Dropbox channel muncul setelah save. |
| Channel switch | Channel bisa diaktifkan. |
| Token saved | Detail page menunjukkan `Refresh Token` sudah tersimpan. |
| Upload test | Test image muncul di Dropbox app folder. |

Jika quota limits aktif, klik quota query. Setelah query berhasil, channel card menampilkan used space, total space, dan last update time.

![Quota query success](../../image/upload/dropbox/查询额度成功.png)

## Troubleshooting

| Problem | Fix |
| --- | --- |
| ImgBed mengatakan configuration incomplete | Periksa `App Key`, `App Secret`, dan `Refresh Token` semuanya sudah diisi. |
| Authorization sukses tetapi tidak ada `Refresh Token` | Klik `Get Token` lagi dan pastikan offline authorization flow digunakan. |
| Upload gagal dengan `required scope 'files.content.write'` | Enable `files.content.write`, klik `Submit`, lalu ambil `Refresh Token` baru. |
| Callback gagal | Pastikan redirect URI adalah `https://your-domain.com/api/oauth/dropbox/callback`. |
| Files tidak ditemukan | Pastikan Dropbox app dibuat dalam mode `App folder`. |

## Quick Flow

```text
Buka Dropbox App Console
-> Buat app
-> Pilih App folder access
-> Tambahkan https://your-domain.com/api/oauth/dropbox/callback
-> Enable account_info.read / files.metadata.read / files.metadata.write / files.content.write
-> Optional enable files.content.read
-> Klik Submit
-> Copy App Key dan App Secret
-> Isi ke ImgBed
-> Klik Get Token
-> Copy Refresh Token dari callback page
-> Paste kembali ke ImgBed dan save
```

## References

1. Dropbox App Console: https://www.dropbox.com/developers/apps
2. Dropbox OAuth Guide: https://developers.dropbox.com/oauth-guide
3. Dropbox Developer Guide: https://www.dropbox.com/developers/reference/developer-guide
