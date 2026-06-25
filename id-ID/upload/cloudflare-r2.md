# Menambahkan Kanal Cloudflare R2

## Kapan Cocok Digunakan

Gunakan Cloudflare R2 jika:

- situs ImgBed Anda sudah dideploy di Cloudflare dan Anda ingin menyimpan berkas di bucket R2 pada akun Cloudflare yang sama;
- Anda tidak ingin mengatur endpoint S3, kunci akses, dan kunci rahasia secara terpisah;
- Anda ingin proses baca dan tulis berjalan melalui binding R2 Worker atau Pages dengan konfigurasi minimal.

Singkatnya:

Kanal R2 tidak dibuat secara manual di panel admin ImgBed. Anda harus lebih dulu mengikat bucket R2 ke proyek Cloudflare, dan nama variabel binding harus persis `img_r2`.

## Yang Diperlukan Sebelum Memulai

- Akun Cloudflare.
- Bucket R2 yang sudah ada.
- Izin untuk mengelola proyek Cloudflare tempat ImgBed dideploy.

## Mengonfigurasi di Cloudflare

### 1. Membuat Bucket R2

1. Masuk ke Cloudflare Dashboard.
2. Buka `R2 Object Storage`.
3. Klik Buat bucket.
4. Pilih nama bucket, misalnya `imgbed`.

Berkas yang diunggah akan disimpan di bucket ini.

![Membuat bucket R2](../../image/upload/cloudflare-r2/创建一个存储桶img-r2.png)

### 2. Mengikat Bucket ke Proyek ImgBed

Pilih lokasi binding sesuai jenis deployment:

| Jenis deployment | Lokasi binding |
| --- | --- |
| Pages | Current Pages project -> Settings -> Functions -> R2 bucket bindings |
| Worker | Current Worker -> Settings -> Bindings -> R2 bucket bindings |

Saat menambahkan binding, kolom pentingnya adalah:

| Kolom | Nilai |
| --- | --- |
| Nama variabel | `img_r2` |
| Bucket R2 | Pilih bucket yang Anda buat. |

Nama variabel harus persis `img_r2`. Proses unggah, baca, dan hapus berkas R2 semuanya bergantung pada nama binding ini.

### 3. Redeploy Proyek

Setelah menyimpan binding, redeploy ImgBed agar runtime Worker atau Pages dapat mengakses `img_r2`.

## Yang Akan Terlihat di ImgBed

Setelah binding R2 tersedia, buka:

1. Pengaturan sistem.
2. Pengaturan unggah.
3. Kanal `Cloudflare R2`.

Sistem otomatis membuat kanal tetap:

| Kolom | Nilai tetap |
| --- | --- |
| Nama kanal | `Cloudflare R2` |
| Jenis kanal | `cfr2` |
| Mode penyimpanan | `binding` |
| Sumber konfigurasi | Binding lingkungan |

Ini adalah kanal tetap berbasis binding. Anda tidak perlu mengeklik Tambah kanal untuk membuatnya, dan kanal ini tidak dapat dihapus seperti kanal biasa.

## Kolom yang Dapat Diedit di Panel Admin

| Kolom | Fungsi | Wajib |
| --- | --- | --- |
| Aktifkan kanal | Mengontrol apakah R2 ikut dalam pemilihan unggahan. | Ya |
| Account ID | Hanya digunakan saat batas kuota aktif dan penggunaan resmi R2 perlu ditanyakan. | Disarankan saat batas kuota aktif |
| Nama bucket | Hanya digunakan saat batas kuota aktif dan penggunaan resmi R2 perlu ditanyakan. | Disarankan saat batas kuota aktif |
| Batas kuota | Mengontrol apakah kanal R2 ini ikut dalam pemilihan unggahan berdasarkan kapasitas. | Tidak |
| Ambang batas | Menghentikan penulisan ke kanal ini setelah penggunaan mencapai persentase yang ditentukan. | Wajib saat batas kuota aktif |

Account ID dapat disalin dari panel informasi akun di Cloudflare Dashboard. Isi hanya jika Anda ingin ImgBed menanyakan dan menerapkan penggunaan kuota R2.

![Mendapatkan Account ID](../../image/upload/cloudflare-r2/获取账户id.png)

## Langkah Konfigurasi

1. Buat bucket R2 di Cloudflare.
2. Buka pengaturan Cloudflare untuk proyek ImgBed.
3. Tambahkan binding bucket R2.
4. Atur nama variabel menjadi `img_r2`.
5. Pilih bucket R2 yang sudah dibuat.
6. Simpan binding dan redeploy ImgBed.
7. Kembali ke ImgBed -> Pengaturan sistem -> Pengaturan unggah.
8. Pastikan kanal `Cloudflare R2` muncul dan aktif.

Jika Anda ingin R2 ikut dalam pemilihan unggahan berdasarkan kapasitas, aktifkan batas kuota, lalu masukkan Account ID, nama bucket, batas kuota, dan ambang batas sebelum menyimpan.

![Mengonfigurasi batas kuota](../../image/upload/cloudflare-r2/配置容量限制.png)

## Verifikasi

- Kanal tetap `Cloudflare R2` muncul di pengaturan unggah.
- Kartu kanal menunjukkan bahwa kanal aktif.
- Berkas uji kecil berhasil diunggah dan tautan yang dikembalikan terbuka dengan normal.
- Jika saat membuka berkas muncul `R2 database binding is not configured`, runtime belum menerima binding `img_r2`. Periksa nama binding di Cloudflare dan redeploy proyek.
