# Menambahkan Kanal Dropbox

## Yang Diperlukan Terlebih Dahulu

| Kebutuhan | Alasan diperlukan |
| --- | --- |
| Akun Dropbox | Digunakan untuk masuk dan mengotorisasi aplikasi |
| Aplikasi Dropbox | Digunakan untuk membuat `App Key` dan `App Secret` |
| Domain ImgBed Anda | Digunakan sebagai OAuth redirect URI |
| Ruang penyimpanan Dropbox yang tersedia | Digunakan sebagai lokasi penyimpanan berkas sebenarnya |

## Langkah Konfigurasi

### Langkah 1: Membuat Aplikasi Dropbox

1. Buka Dropbox App Console:

```text
https://www.dropbox.com/developers/apps
```

2. Buat aplikasi baru.
3. Untuk jenis akses, pilih:

```text
App folder
```

4. Beri aplikasi nama yang mudah dikenali, misalnya `imgbed-app`.
5. Setelah dibuat, buka halaman detail aplikasi.

Jenis akses yang disarankan:

| Jenis akses | Rekomendasi |
| --- | --- |
| `App folder` | Disarankan. Sesuai dengan cara ImgBed menyimpan berkas. |
| `Full Dropbox` | Tidak disarankan. ImgBed tidak membutuhkan akses penuh ke seluruh akun. |

![Membuat aplikasi Dropbox](../../image/upload/dropbox/开发者创建应用.png)

### Langkah 2: Menambahkan Redirect URI

Pada halaman detail aplikasi Dropbox, cari pengaturan OAuth atau Redirect URI, lalu tambahkan:

```text
https://your-domain.com/api/oauth/dropbox/callback
```

Jika panel admin digunakan dari lebih dari satu domain, tambahkan setiap URL callback yang sesuai.

![Mengonfigurasi Redirect URI](../../image/upload/dropbox/配置回调地址.png)

### Langkah 3: Mengonfigurasi Izin Aplikasi

Buka tab `Permissions` dan aktifkan setidaknya cakupan berikut:

| Cakupan | Wajib | Tujuan |
| --- | --- | --- |
| `account_info.read` | Wajib | Membaca informasi akun dan kuota |
| `files.metadata.read` | Wajib | Membaca metadata berkas dan folder untuk pemeriksaan jalur |
| `files.metadata.write` | Wajib | Membuat folder dan menulis metadata |
| `files.content.write` | Wajib | Mengunggah berkas. Jika cakupan ini tidak ada, akan muncul `required scope 'files.content.write'`. |
| `files.content.read` | Disarankan | Mengizinkan unduhan, pratinjau, dan tautan berkas sementara |

Setelah memilih cakupan, klik `Submit` di bagian bawah halaman.

![Menambahkan izin](../../image/upload/dropbox/添加对应的权限.png)

Penting:

| Situasi | Yang harus dilakukan |
| --- | --- |
| Anda mengubah cakupan | Jalankan ulang alur otorisasi token dan ambil `Refresh Token` baru. |
| Anda tidak mengotorisasi ulang | Token lama tidak akan mendapat izin baru, sehingga unggahan masih dapat gagal. |

### Langkah 4: Menyalin Kredensial Aplikasi

Simpan dua nilai ini dari halaman aplikasi Dropbox:

| Kolom Dropbox | Kolom ImgBed |
| --- | --- |
| `App key` | `App Key` |
| `App secret` | `App Secret` |

### Langkah 5: Mengisi Kanal Dropbox

Di pengaturan unggah, pilih `Dropbox` lalu isi:

| Kolom ImgBed | Nilai yang diisi |
| --- | --- |
| Nama kanal | Nama yang mudah dikenali, misalnya `Main Dropbox` |
| App Key | `App key` Dropbox |
| App Secret | `App secret` Dropbox |
| Refresh Token | Biarkan kosong terlebih dahulu |
| Direktori root | Opsional. Default adalah `imgbed`. |
| Catatan | Opsional |

![Mendapatkan token](../../image/upload/dropbox/获取令牌.png)

### Langkah 6: Mendapatkan Refresh Token

1. Di ImgBed, klik `Get Token`.
2. Masuk ke akun Dropbox yang ingin dihubungkan.
3. Setujui permintaan otorisasi.
4. Halaman callback akan menampilkan `Refresh Token`.
5. Salin token tersebut.
6. Kembali ke ImgBed dan tempelkan ke kolom `Refresh Token`.

![Menyalin token](../../image/upload/dropbox/复制令牌.png)

## Verifikasi

| Pemeriksaan | Hasil yang diharapkan |
| --- | --- |
| Kartu kanal | Kanal Dropbox muncul setelah disimpan. |
| Sakelar kanal | Kanal dapat diaktifkan. |
| Token tersimpan | Halaman detail menunjukkan bahwa `Refresh Token` sudah tersimpan. |
| Uji unggah | Gambar uji muncul di folder aplikasi Dropbox. |

Jika batas kuota aktif, klik kueri kuota. Setelah kueri berhasil, kartu kanal menampilkan ruang terpakai, ruang total, dan waktu pembaruan terakhir.

![Kueri kuota berhasil](../../image/upload/dropbox/查询额度成功.png)

## Pemecahan Masalah

| Masalah | Solusi |
| --- | --- |
| ImgBed menyatakan konfigurasi belum lengkap | Pastikan `App Key`, `App Secret`, dan `Refresh Token` semuanya terisi. |
| Otorisasi selesai tetapi `Refresh Token` tidak muncul | Klik `Get Token` lagi dan pastikan alur otorisasi offline digunakan. |
| Unggahan gagal dengan `required scope 'files.content.write'` | Aktifkan `files.content.write`, klik `Submit`, lalu ambil `Refresh Token` baru. |
| Callback gagal | Pastikan redirect URI adalah `https://your-domain.com/api/oauth/dropbox/callback`. |
| Berkas tidak ditemukan | Pastikan aplikasi Dropbox dibuat dalam mode `App folder`. |

## Alur Cepat

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

## Referensi

1. Dropbox App Console: https://www.dropbox.com/developers/apps
2. Panduan OAuth Dropbox: https://developers.dropbox.com/oauth-guide
3. Panduan Developer Dropbox: https://www.dropbox.com/developers/reference/developer-guide
