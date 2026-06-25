# Menambahkan Kanal Yandex

## Yang Diperlukan Sebelum Memulai

| Kebutuhan | Alasan Diperlukan |
| --- | --- |
| Akun Yandex | Digunakan untuk masuk dan mengotorisasi Yandex Disk |
| Aplikasi OAuth Yandex | Digunakan untuk menghasilkan `Client ID` dan `Client Secret` |
| Domain ImgBed Anda | Digunakan untuk URI pengalihan OAuth |
| Penyimpanan Yandex Disk yang tersedia | Digunakan sebagai lokasi penyimpanan berkas yang sebenarnya |

## Langkah Konfigurasi

### Langkah 1: Buat Aplikasi OAuth Yandex

1. Buka halaman pembuatan aplikasi OAuth Yandex:

```text
https://oauth.yandex.com/client/new
```

2. Jika Anda dialihkan ke halaman masuk, masuk lebih dulu dengan akun Yandex Anda.
3. Buat aplikasi baru.
4. Beri aplikasi nama yang mudah dikenali, misalnya `imgbed-yandex`.
5. Temukan pengaturan callback atau URL pengalihan.
6. Masukkan:

```text
https://your-domain.com/api/oauth/yandex/callback
```

### Langkah 2: Konfirmasi Izin

Untuk integrasi Yandex ImgBed saat ini, pertahankan empat izin berikut di bawah `Yandex.Disk REST API`:

| Izin | Tujuan |
| --- | --- |
| `cloud_api:disk.app_folder` | Memungkinkan ImgBed menyimpan berkas di folder aplikasi |
| `cloud_api:disk.read` | Membaca berkas dan tautan unduhan |
| `cloud_api:disk.write` | Mengunggah berkas, membuat folder, dan menghapus berkas |
| `Access to information about Yandex.Disk` | Membaca kuota disk dan ruang yang telah digunakan |

Jika Anda juga melihat izin berikut di bawah `Yandex ID API`, izin tersebut bersifat opsional:

| Teks Izin | Rekomendasi |
| --- | --- |
| `Access to username, first name and surname, gender` | Opsional |
| `Access to email address` | Opsional |

Fitur inti untuk unggah, unduh, hapus, dan kuota terutama bergantung pada empat izin `Yandex.Disk REST API` di atas.

![Mengonfigurasi izin Yandex Disk](../../image/upload/yandex/dataaccess配置软盘权限.png)

### Langkah 3: Salin Kredensial Aplikasi

Setelah aplikasi dibuat, salin:

| Kolom Yandex | Kolom ImgBed |
| --- | --- |
| `Client ID` | `Client ID` |
| `Client Secret` | `Client Secret` |

![Mencatat Client ID dan Secret](../../image/upload/yandex/记录客户端id和secret.png)

### Langkah 4: Isi Kanal Yandex

Di Pengaturan Unggah, pilih `Yandex`, lalu isi:

| Kolom ImgBed | Yang Harus Diisi |
| --- | --- |
| Nama kanal | Nama yang mudah dikenali, misalnya `Main Yandex` |
| Client ID | `Client ID` aplikasi Yandex |
| Client Secret | `Client Secret` aplikasi Yandex |
| Refresh Token | Biarkan kosong untuk sementara |
| Direktori root | Opsional. Nilai bawaannya `imgbed`. |

![Mengedit konfigurasi kanal](../../image/upload/yandex/编辑配置渠道.png)

### Langkah 5: Dapatkan Refresh Token

1. Di ImgBed, klik `Get Token`.
2. Masuk ke akun Yandex yang ingin Anda hubungkan.
3. Setujui permintaan otorisasi.
4. Halaman callback akan menampilkan `Refresh Token`.
5. Salin token tersebut.
6. Kembali ke ImgBed dan tempelkan ke kolom `Refresh Token`.

![Menyalin refresh token setelah otorisasi](../../image/upload/yandex/授权后复制刷新令牌.png)

### Langkah 6: Simpan Kanal

Setelah semua kolom diisi, simpan kanal.

## Alur Cepat

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

## Referensi

1. Mendaftarkan aplikasi Yandex: https://yandex.com/dev/id/doc/en/register-client
2. Mendapatkan kode otorisasi melalui URL: https://yandex.com/dev/id/doc/en/codes/code-url
3. Endpoint token OAuth Yandex: https://yandex.com/dev/id/doc/en/tokens/token
