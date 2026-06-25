# Tambah Saluran Yandex

## Perkara Yang Diperlukan Dahulu

| Keperluan | Sebab Diperlukan |
| --- | --- |
| Akaun Yandex | Digunakan untuk log masuk dan mengizinkan Yandex Disk |
| App OAuth Yandex | Digunakan untuk menjana `Client ID` dan `Client Secret` |
| Domain ImgBed anda | Digunakan untuk URI redirect OAuth |
| Storan Yandex Disk tersedia | Digunakan sebagai lokasi storan fail sebenar |

## Langkah Persediaan

### Langkah 1: Buat App OAuth Yandex

1. Buka halaman penciptaan app OAuth Yandex:

```text
https://oauth.yandex.com/client/new
```

2. Jika anda dialihkan untuk log masuk, log masuk dengan akaun Yandex anda terlebih dahulu.
3. Buat app baharu.
4. Berikan nama yang mudah dikenal pasti kepada app, seperti `imgbed-yandex`.
5. Cari tetapan callback atau redirect URL.
6. Masukkan:

```text
https://your-domain.com/api/oauth/yandex/callback
```

### Langkah 2: Sahkan Kebenaran

Untuk integrasi Yandex ImgBed semasa, kekalkan empat kebenaran ini di bawah `Yandex.Disk REST API`:

| Kebenaran | Tujuan |
| --- | --- |
| `cloud_api:disk.app_folder` | Membolehkan ImgBed menyimpan fail dalam folder app |
| `cloud_api:disk.read` | Membaca fail dan pautan muat turun |
| `cloud_api:disk.write` | Memuat naik fail, membuat folder dan memadam fail |
| `Access to information about Yandex.Disk` | Membaca kuota disk dan ruang yang digunakan |

Jika anda juga melihat kebenaran berikut di bawah `Yandex ID API`, kebenaran tersebut adalah pilihan:

| Teks Kebenaran | Saranan |
| --- | --- |
| `Access to username, first name and surname, gender` | Pilihan |
| `Access to email address` | Pilihan |

Ciri teras muat naik, muat turun, pemadaman dan kuota bergantung terutamanya pada empat kebenaran `Yandex.Disk REST API` di atas.

![Konfigurasikan kebenaran Yandex Disk](../../image/upload/yandex/dataaccess配置软盘权限.png)

### Langkah 3: Salin Kelayakan App

Selepas app dibuat, salin:

| Medan Yandex | Medan ImgBed |
| --- | --- |
| `Client ID` | `Client ID` |
| `Client Secret` | `Client Secret` |

![Catat Client ID dan Secret](../../image/upload/yandex/记录客户端id和secret.png)

### Langkah 4: Isi Saluran Yandex

Dalam Tetapan Muat Naik, pilih `Yandex` dan isi:

| Medan ImgBed | Perkara Yang Perlu Dimasukkan |
| --- | --- |
| Nama saluran | Nama yang mudah dikenal pasti, seperti `Main Yandex` |
| Client ID | `Client ID` app Yandex |
| Client Secret | `Client Secret` app Yandex |
| Refresh Token | Biarkan kosong buat masa ini |
| Direktori akar | Pilihan. Lalai ialah `imgbed`. |

![Edit konfigurasi saluran](../../image/upload/yandex/编辑配置渠道.png)

### Langkah 5: Dapatkan Refresh Token

1. Dalam ImgBed, klik `Get Token`.
2. Log masuk ke akaun Yandex yang mahu disambungkan.
3. Luluskan permintaan kebenaran.
4. Halaman callback akan menunjukkan `Refresh Token`.
5. Salin token tersebut.
6. Kembali ke ImgBed dan tampalkannya dalam medan `Refresh Token`.

![Salin refresh token selepas kebenaran](../../image/upload/yandex/授权后复制刷新令牌.png)

### Langkah 6: Simpan Saluran

Selepas semua medan diisi, simpan saluran.

## Aliran Pantas

```text
Open Yandex OAuth Console
-> Create an app
-> Add https://your-domain.com/api/oauth/yandex/callback
-> Confirm Yandex Disk permissions
-> Copy Client ID and Client Secret
-> Fill Client ID / Client Secret into ImgBed
-> Click Get Token
-> Copy the Refresh Token from the callback page
-> Paste it back into ImgBed and save
```

## Rujukan

1. Daftarkan app Yandex: https://yandex.com/dev/id/doc/en/register-client
2. Dapatkan authorization code melalui URL: https://yandex.com/dev/id/doc/en/codes/code-url
3. Endpoint token OAuth Yandex: https://yandex.com/dev/id/doc/en/tokens/token
