# Menambahkan Cloudflare R2 Channel

## Paling Cocok Untuk

Gunakan Cloudflare R2 saat:

- ImgBed site Anda sudah deploy di Cloudflare dan Anda ingin menyimpan files di R2 bucket dalam Cloudflare account yang sama.
- Anda tidak ingin mengatur S3 endpoint, access key, dan secret key secara terpisah.
- Anda ingin proses baca/tulis lewat Worker atau Pages R2 binding dengan setup minimal.

Singkatnya:

R2 channel tidak dibuat manual di ImgBed admin panel. Anda harus bind R2 bucket ke Cloudflare project terlebih dahulu, dan binding variable name wajib `img_r2`.

## Yang Perlu Disiapkan Sebelum Mulai

- Cloudflare account.
- R2 bucket yang sudah ada.
- Permission untuk mengelola Cloudflare project tempat ImgBed dideploy.

## Konfigurasi di Cloudflare

### 1. Buat R2 Bucket

1. Log in ke Cloudflare Dashboard.
2. Buka `R2 Object Storage`.
3. Klik Create bucket.
4. Pilih bucket name, misalnya `imgbed`.

Bucket ini akan menjadi tempat uploaded files disimpan.

![Create an R2 bucket](../../image/upload/cloudflare-r2/创建一个存储桶img-r2.png)

### 2. Bind Bucket ke ImgBed Project

Pilih lokasi binding berdasarkan deployment type:

| Deployment Type | Binding Location |
| --- | --- |
| Pages | Current Pages project -> Settings -> Functions -> R2 bucket bindings |
| Worker | Current Worker -> Settings -> Bindings -> R2 bucket bindings |

Saat menambahkan binding, field pentingnya:

| Field | Value |
| --- | --- |
| Variable name | `img_r2` |
| R2 bucket | Pilih bucket yang Anda buat. |

Variable name harus persis `img_r2`. Upload, read, dan delete R2 files semuanya bergantung pada binding name ini.

### 3. Redeploy Project

Setelah menyimpan binding, redeploy ImgBed agar Worker atau Pages runtime bisa mengakses `img_r2`.

## Yang Akan Terlihat di ImgBed

Setelah R2 binding tersedia, buka:

1. System Settings.
2. Upload Settings.
3. `Cloudflare R2` channel.

System akan otomatis membuat satu fixed channel:

| Field | Fixed Value |
| --- | --- |
| Channel name | `Cloudflare R2` |
| Channel type | `cfr2` |
| Storage mode | `binding` |
| Configuration source | Environment binding |

Ini adalah fixed binding channel. Anda tidak perlu klik Add Channel untuk membuatnya, dan channel ini tidak bisa dihapus seperti regular channel.

## Field yang Bisa Diedit di Admin Panel

| Field | Fungsi | Required |
| --- | --- | --- |
| Enable channel | Mengontrol apakah R2 ikut dalam upload selection. | Yes |
| Account ID | Hanya dipakai saat quota limits aktif dan official R2 usage perlu di-query. | Recommended saat quota limits aktif |
| Bucket name | Hanya dipakai saat quota limits aktif dan official R2 usage perlu di-query. | Recommended saat quota limits aktif |
| Quota limit | Mengontrol apakah R2 channel ini ikut upload selection berdasarkan capacity. | No |
| Threshold | Menghentikan penulisan ke channel ini setelah usage mencapai percentage tertentu. | Required saat quota limits aktif |

Anda bisa copy Account ID dari account information panel di Cloudflare dashboard. Isi hanya jika ingin ImgBed query dan enforce R2 quota usage.

![Get the Account ID](../../image/upload/cloudflare-r2/获取账户id.png)

## Langkah Setup

1. Buat R2 bucket di Cloudflare.
2. Buka Cloudflare settings untuk ImgBed project.
3. Tambahkan R2 bucket binding.
4. Set `Variable name` menjadi `img_r2`.
5. Pilih R2 bucket yang dibuat.
6. Save binding dan redeploy ImgBed.
7. Kembali ke ImgBed -> System Settings -> Upload Settings.
8. Pastikan `Cloudflare R2` channel muncul dan enabled.

Jika ingin R2 ikut upload selection berdasarkan capacity, aktifkan quota limit, lalu masukkan Account ID, bucket name, quota limit, dan threshold sebelum save.

![Configure quota limits](../../image/upload/cloudflare-r2/配置容量限制.png)

## Cara Memeriksa

- Fixed `Cloudflare R2` channel muncul di Upload Settings.
- Channel card menunjukkan enabled.
- Small test file berhasil di-upload, dan returned link terbuka normal.
- Jika membuka file menampilkan `R2 database binding is not configured`, runtime belum menerima `img_r2` binding. Periksa binding name di Cloudflare dan redeploy project.
