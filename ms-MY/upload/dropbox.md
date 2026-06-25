# Tambah Saluran Dropbox

## Perkara Yang Diperlukan Dahulu

| Keperluan | Sebab Diperlukan |
| --- | --- |
| Akaun Dropbox | Digunakan untuk log masuk dan mengizinkan app |
| App Dropbox | Digunakan untuk menjana `App Key` dan `App Secret` |
| Domain ImgBed anda | Digunakan untuk URI redirect OAuth |
| Storan Dropbox tersedia | Digunakan sebagai lokasi storan fail sebenar |

## Langkah Persediaan

### Langkah 1: Buat App Dropbox

1. Buka Dropbox App Console:

```text
https://www.dropbox.com/developers/apps
```

2. Buat app baharu.
3. Untuk jenis akses, pilih:

```text
App folder
```

4. Berikan nama app yang mudah dikenal pasti, seperti `imgbed-app`.
5. Buka halaman butiran app selepas app dibuat.

Jenis akses yang disyorkan:

| Jenis Akses | Saranan |
| --- | --- |
| `App folder` | Disyorkan. Ia sepadan dengan cara ImgBed menyimpan fail. |
| `Full Dropbox` | Tidak disyorkan. ImgBed tidak memerlukan akses penuh kepada akaun. |

![Buat app Dropbox](../../image/upload/dropbox/开发者创建应用.png)

### Langkah 2: Tambah Redirect URI

Dalam halaman butiran app Dropbox, cari tetapan OAuth atau Redirect URI dan tambah:

```text
https://your-domain.com/api/oauth/dropbox/callback
```

Jika anda menggunakan panel pentadbir daripada lebih daripada satu domain, tambah setiap URL callback yang sepadan.

![Konfigurasikan redirect URI](../../image/upload/dropbox/配置回调地址.png)

### Langkah 3: Konfigurasikan Kebenaran App

Buka tab `Permissions` dan dayakan sekurang-kurangnya scopes berikut:

| Scope | Wajib | Tujuan |
| --- | --- | --- |
| `account_info.read` | Wajib | Membaca maklumat akaun dan kuota |
| `files.metadata.read` | Wajib | Membaca metadata fail dan folder untuk semakan laluan |
| `files.metadata.write` | Wajib | Membuat folder dan menulis metadata |
| `files.content.write` | Wajib | Memuat naik fail. Jika scope ini tiada, `required scope 'files.content.write'` akan berlaku. |
| `files.content.read` | Disyorkan | Membenarkan muat turun, pratonton dan pautan fail sementara |

Selepas memilih scopes, klik `Submit` di bahagian bawah halaman.

![Tambah kebenaran](../../image/upload/dropbox/添加对应的权限.png)

Penting:

| Situasi | Tindakan |
| --- | --- |
| Anda menukar scopes | Jalankan semula aliran kebenaran token dan dapatkan `Refresh Token` baharu. |
| Anda tidak mengizinkan semula | Token lama tidak akan mendapat kebenaran baharu, jadi muat naik mungkin masih gagal. |

### Langkah 4: Salin Kelayakan App

Simpan dua nilai ini daripada halaman app Dropbox:

| Medan Dropbox | Medan ImgBed |
| --- | --- |
| `App key` | `App Key` |
| `App secret` | `App Secret` |

### Langkah 5: Isi Saluran Dropbox

Dalam Tetapan Muat Naik, pilih `Dropbox` dan isi:

| Medan ImgBed | Perkara Yang Perlu Dimasukkan |
| --- | --- |
| Nama saluran | Nama yang mudah dikenal pasti, seperti `Main Dropbox` |
| App Key | `App key` Dropbox |
| App Secret | `App secret` Dropbox |
| Refresh Token | Biarkan kosong buat masa ini |
| Direktori akar | Pilihan. Lalai ialah `imgbed`. |
| Catatan | Pilihan |

![Dapatkan token](../../image/upload/dropbox/获取令牌.png)

### Langkah 6: Dapatkan Refresh Token

1. Dalam ImgBed, klik `Get Token`.
2. Log masuk ke akaun Dropbox yang mahu disambungkan.
3. Luluskan permintaan kebenaran.
4. Halaman callback akan menunjukkan `Refresh Token`.
5. Salin token tersebut.
6. Kembali ke ImgBed dan tampalkannya dalam medan `Refresh Token`.

![Salin token](../../image/upload/dropbox/复制令牌.png)

## Cara Mengesahkan

| Semakan | Hasil Dijangka |
| --- | --- |
| Kad saluran | Saluran Dropbox muncul selepas disimpan. |
| Suis saluran | Saluran boleh didayakan. |
| Token disimpan | Halaman butiran menunjukkan bahawa `Refresh Token` telah disimpan. |
| Ujian muat naik | Imej ujian muncul dalam folder app Dropbox. |

Jika had kuota didayakan, klik pertanyaan kuota. Selepas pertanyaan berjaya, kad saluran menunjukkan ruang digunakan, jumlah ruang dan masa kemas kini terakhir.

![Pertanyaan kuota berjaya](../../image/upload/dropbox/查询额度成功.png)

## Penyelesaian Masalah

| Masalah | Penyelesaian |
| --- | --- |
| ImgBed menyatakan konfigurasi tidak lengkap | Semak bahawa `App Key`, `App Secret` dan `Refresh Token` semuanya diisi. |
| Kebenaran berjaya tetapi tiada `Refresh Token` muncul | Klik `Get Token` sekali lagi dan pastikan aliran kebenaran offline digunakan. |
| Muat naik gagal dengan `required scope 'files.content.write'` | Dayakan `files.content.write`, klik `Submit`, kemudian dapatkan `Refresh Token` baharu. |
| Callback gagal | Sahkan bahawa redirect URI ialah `https://your-domain.com/api/oauth/dropbox/callback`. |
| Fail tidak ditemui | Sahkan bahawa app Dropbox dibuat dalam mod `App folder`. |

## Aliran Pantas

```text
Open Dropbox App Console
-> Create an app
-> Choose App folder access
-> Add https://your-domain.com/api/oauth/dropbox/callback
-> Enable account_info.read / files.metadata.read / files.metadata.write / files.content.write
-> Optionally enable files.content.read
-> Click Submit
-> Copy App Key and App Secret
-> Fill them into ImgBed
-> Click Get Token
-> Copy the Refresh Token from the callback page
-> Paste it back into ImgBed and save
```

## Rujukan

1. Dropbox App Console: https://www.dropbox.com/developers/apps
2. Panduan OAuth Dropbox: https://developers.dropbox.com/oauth-guide
3. Panduan Pembangun Dropbox: https://www.dropbox.com/developers/reference/developer-guide
