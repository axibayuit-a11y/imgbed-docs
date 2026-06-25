# Menambahkan Kanal OneDrive

## Yang Diperlukan Sebelum Memulai

| Kebutuhan | Alasan Diperlukan |
| --- | --- |
| Akun Microsoft | Digunakan untuk mengakses halaman admin Microsoft dan mengotorisasi OneDrive |
| Domain ImgBed Anda | Digunakan untuk URL callback OAuth |
| Registrasi aplikasi | Digunakan untuk menghasilkan `Client ID` dan `Client Secret` |
| Akun OneDrive | Digunakan sebagai lokasi penyimpanan berkas yang sebenarnya |

## Langkah Konfigurasi

### Langkah 1: Buka Microsoft Entra ID

1. Buka `portal.azure.com`.
2. Cari `Microsoft Entra ID` di bagian atas.
3. Jika halaman tujuan tidak muncul dalam menu tarik-turun, pilih:

```text
Continue searching in Microsoft Entra ID
```

4. Buka `Microsoft Entra ID`.
5. Buka `App registrations`.
6. Klik `New registration`.

### Langkah 2: Daftarkan Aplikasi

Pada halaman `New registration`, isi:

| Kolom | Yang Harus Diisi |
| --- | --- |
| Nama | Nama yang mudah dikenali, misalnya `imgbed-onedrive` |
| Jenis akun yang didukung | Pilih berdasarkan tabel di bawah |
| Jenis Redirect URI | `Web` |
| Redirect URI | `https://your-domain.com/api/oauth/onedrive/callback` |

Panduan jenis akun:

| Skenario Anda | Jenis Akun yang Didukung |
| --- | --- |
| Hanya OneDrive pribadi | Pilih opsi akun Microsoft pribadi. |
| Akun pribadi dan akun kerja/sekolah | Pilih opsi yang mendukung akun pribadi dan akun organisasi. |
| Hanya OneDrive perusahaan atau sekolah | Pilih opsi akun organisasi. |

Klik Daftar setelah formulir selesai diisi.

![Membuat aplikasi OneDrive](../../image/upload/onedrive/添加应用程序注册.png)

### Langkah 3: Salin Informasi Aplikasi

Setelah aplikasi dibuat, salin nilai berikut dari halaman ringkasan:

| Kolom Microsoft | Kolom ImgBed |
| --- | --- |
| `Application (client) ID` | `Client ID` |
| `Directory (tenant) ID` | `Tenant ID` untuk akun organisasi |

![Application dan tenant ID](../../image/upload/onedrive/应用程序ID和目录租户ID位.png)

### Langkah 4: Buat Client Secret

1. Buka `Certificates & secrets`.
2. Klik `New client secret`.
3. Masukkan deskripsi sesuai kebutuhan.
4. Pilih periode kedaluwarsa.
5. Salin `Value` segera setelah dibuat.

![Menyimpan nilai client secret](../../image/upload/onedrive/保存客户端密码值.png)

### Langkah 5: Tambahkan Izin API

1. Buka `API permissions`.
2. Klik `Add a permission`.
3. Pilih `Microsoft Graph`.
4. Pilih `Delegated permissions`.
5. Tambahkan izin berikut:

| Izin | Tujuan |
| --- | --- |
| `Files.ReadWrite.All` | Mengunggah berkas, membuat folder, dan menghapus berkas |
| `offline_access` | Memungkinkan ImgBed mendapatkan `Refresh Token` |
| `User.Read` | Membaca informasi akun dan kuota |

### Langkah 6: Isi Kanal OneDrive

Di Pengaturan Unggah, pilih `OneDrive`, lalu isi:

| Kolom ImgBed | Yang Harus Diisi |
| --- | --- |
| Nama kanal | Nama yang mudah dikenali, misalnya `Main OneDrive` |
| Client ID | `Application (client) ID` Microsoft |
| Client Secret | `Client Secret Value` yang telah Anda salin |
| Tenant ID | Gunakan tabel di bawah |
| Refresh Token | Biarkan kosong untuk sementara |
| Direktori root | Opsional. Nilai bawaannya `imgbed`. |
| Catatan | Opsional |

![Mengisi konfigurasi kanal OneDrive](../../image/upload/onedrive/添加新渠道配置.png)

Cara mengisi `Tenant ID`:

| Jenis Akun yang Dipilih | `Tenant ID` ImgBed |
| --- | --- |
| Akun pribadi | `consumers` |
| Akun pribadi + organisasi | `common` |
| Hanya organisasi saat ini | `Directory (tenant) ID` |

### Langkah 7: Dapatkan Refresh Token

1. Di ImgBed, klik `Get Token`.
2. Masuk ke akun Microsoft yang ingin Anda hubungkan.
3. Setujui permintaan otorisasi.
4. Halaman callback akan menampilkan `Refresh Token`.
5. Salin token tersebut.
6. Kembali ke ImgBed dan tempelkan ke kolom `Refresh Token`.

![Menyalin refresh token](../../image/upload/onedrive/复制刷新令牌.png)

### Langkah 8: Simpan Kanal

Setelah semua kolom diisi, simpan kanal.

## Alur Cepat

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

## Referensi

1. Registrasi aplikasi Microsoft Entra: https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app
2. Alur kode otorisasi Microsoft identity platform: https://learn.microsoft.com/en-us/entra/identity-platform/v2-oauth2-auth-code-flow
3. Autentikasi pengguna Microsoft Graph: https://learn.microsoft.com/en-us/graph/auth-v2-user
