# Tambah Saluran Cloudflare R2

## Paling Sesuai

Gunakan Cloudflare R2 apabila:

- Tapak ImgBed anda sudah dideploy pada Cloudflare dan anda mahu menyimpan fail dalam bucket R2 di bawah akaun Cloudflare yang sama.
- Anda tidak mahu mengkonfigurasi endpoint S3, access key dan secret key yang berasingan.
- Anda mahu bacaan dan penulisan melalui binding R2 Worker atau Pages dengan persediaan minimum.

Ringkasnya:

Saluran R2 tidak dibuat secara manual dalam panel pentadbir ImgBed. Anda perlu mengikat bucket R2 kepada projek Cloudflare terlebih dahulu, dan nama pemboleh ubah binding mestilah `img_r2`.

## Perkara Yang Diperlukan Sebelum Bermula

- Akaun Cloudflare.
- Bucket R2 yang sedia ada.
- Kebenaran untuk mengurus projek Cloudflare tempat ImgBed dideploy.

## Konfigurasikan Dalam Cloudflare

### 1. Buat Bucket R2

1. Log masuk ke Cloudflare Dashboard.
2. Buka `R2 Object Storage`.
3. Klik Create bucket.
4. Pilih nama bucket, contohnya `imgbed`.

Bucket ini ialah tempat fail yang dimuat naik akan disimpan.

![Buat bucket R2](../../image/upload/cloudflare-r2/创建一个存储桶img-r2.png)

### 2. Ikat Bucket Kepada Projek ImgBed

Pilih lokasi binding berdasarkan jenis deployment anda:

| Jenis Deployment | Lokasi Binding |
| --- | --- |
| Pages | Current Pages project -> Settings -> Functions -> R2 bucket bindings |
| Worker | Current Worker -> Settings -> Bindings -> R2 bucket bindings |

Apabila menambah binding, medan penting ialah:

| Medan | Nilai |
| --- | --- |
| Nama pemboleh ubah | `img_r2` |
| R2 bucket | Pilih bucket yang anda buat. |

Nama pemboleh ubah mestilah tepat `img_r2`. Muat naik, pembacaan dan pemadaman fail R2 semuanya bergantung pada nama binding ini.

### 3. Deploy Semula Projek

Selepas menyimpan binding, deploy semula ImgBed supaya runtime Worker atau Pages boleh mengakses `img_r2`.

## Perkara Yang Akan Dilihat Dalam ImgBed

Selepas binding R2 tersedia, buka:

1. Tetapan Sistem.
2. Tetapan Muat Naik.
3. Saluran `Cloudflare R2`.

Sistem akan membuat satu saluran tetap secara automatik:

| Medan | Nilai Tetap |
| --- | --- |
| Nama saluran | `Cloudflare R2` |
| Jenis saluran | `cfr2` |
| Mod storan | `binding` |
| Sumber konfigurasi | Binding persekitaran |

Ini ialah saluran binding tetap. Anda tidak perlu mengklik Tambah Saluran untuk membuatnya, dan saluran ini tidak boleh dipadam seperti saluran biasa.

## Medan Boleh Edit Dalam Panel Pentadbir

| Medan | Fungsi | Wajib |
| --- | --- | --- |
| Dayakan saluran | Mengawal sama ada R2 mengambil bahagian dalam pemilihan muat naik. | Ya |
| Account ID | Hanya digunakan apabila had kuota didayakan dan penggunaan rasmi R2 perlu ditanya. | Disyorkan apabila had kuota didayakan |
| Nama bucket | Hanya digunakan apabila had kuota didayakan dan penggunaan rasmi R2 perlu ditanya. | Disyorkan apabila had kuota didayakan |
| Had kuota | Mengawal sama ada saluran R2 ini mengambil bahagian dalam pemilihan muat naik berdasarkan kapasiti. | Tidak |
| Ambang | Menghentikan penulisan ke saluran ini selepas penggunaan mencapai peratusan yang ditentukan. | Wajib apabila had kuota didayakan |

Anda boleh menyalin Account ID daripada panel maklumat akaun dalam Cloudflare Dashboard. Isikannya hanya jika anda mahu ImgBed menanya dan menguatkuasakan penggunaan kuota R2.

![Dapatkan Account ID](../../image/upload/cloudflare-r2/获取账户id.png)

## Langkah Persediaan

1. Buat bucket R2 dalam Cloudflare.
2. Buka tetapan Cloudflare untuk projek ImgBed.
3. Tambah binding bucket R2.
4. Tetapkan `Variable name` kepada `img_r2`.
5. Pilih bucket R2 yang anda buat.
6. Simpan binding dan deploy semula ImgBed.
7. Kembali ke ImgBed -> Tetapan Sistem -> Tetapan Muat Naik.
8. Sahkan bahawa saluran `Cloudflare R2` muncul dan didayakan.

Jika anda mahu R2 mengambil bahagian dalam pemilihan muat naik berdasarkan kapasiti, dayakan had kuota, kemudian masukkan Account ID, nama bucket, had kuota dan ambang sebelum menyimpan.

![Konfigurasikan had kuota](../../image/upload/cloudflare-r2/配置容量限制.png)

## Cara Mengesahkan

- Saluran tetap `Cloudflare R2` muncul dalam Tetapan Muat Naik.
- Kad saluran menunjukkan bahawa saluran ini didayakan.
- Fail ujian kecil berjaya dimuat naik, dan pautan yang dikembalikan boleh dibuka seperti biasa.
- Jika pembukaan fail mengembalikan `R2 database binding is not configured`, runtime belum menerima binding `img_r2`. Semak nama binding dalam Cloudflare dan deploy semula projek.
