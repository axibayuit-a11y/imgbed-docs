# Tambah Cloudflare R2 Channel

## Paling Sesuai Untuk

Gunakan Cloudflare R2 apabila:

- ImgBed site anda sudah deploy di Cloudflare dan anda mahu menyimpan files dalam R2 bucket di bawah Cloudflare account yang sama.
- Anda tidak mahu mengkonfigurasi S3 endpoint, access key dan secret key secara berasingan.
- Anda mahu read dan write berjalan melalui Worker atau Pages R2 binding dengan setup minimum.

Ringkasnya:

R2 channel tidak dicipta secara manual dalam ImgBed admin panel. Anda perlu bind R2 bucket kepada Cloudflare project terlebih dahulu, dan binding variable name mesti `img_r2`.

## Perkara Yang Perlu Disediakan

- Cloudflare account.
- R2 bucket yang sudah wujud.
- Permission untuk mengurus Cloudflare project tempat ImgBed dideploy.

## Configure Dalam Cloudflare

### 1. Cipta R2 Bucket

1. Log in ke Cloudflare Dashboard.
2. Buka `R2 Object Storage`.
3. Klik Create bucket.
4. Pilih bucket name, contohnya `imgbed`.

Bucket ini akan menyimpan uploaded files.

![Create an R2 bucket](../../image/upload/cloudflare-r2/创建一个存储桶img-r2.png)

### 2. Bind Bucket Kepada ImgBed Project

Pilih lokasi binding berdasarkan deployment type:

| Deployment Type | Binding Location |
| --- | --- |
| Pages | Current Pages project -> Settings -> Functions -> R2 bucket bindings |
| Worker | Current Worker -> Settings -> Bindings -> R2 bucket bindings |

Semasa menambah binding, field penting ialah:

| Field | Value |
| --- | --- |
| Variable name | `img_r2` |
| R2 bucket | Pilih bucket yang anda cipta. |

Variable name mesti tepat `img_r2`. Upload, read dan delete R2 files semuanya bergantung pada binding name ini.

### 3. Redeploy Project

Selepas menyimpan binding, redeploy ImgBed supaya Worker atau Pages runtime boleh mengakses `img_r2`.

## Apa Yang Akan Dilihat Dalam ImgBed

Selepas R2 binding tersedia, buka:

1. System Settings.
2. Upload Settings.
3. `Cloudflare R2` channel.

System akan mencipta satu fixed channel secara automatik:

| Field | Fixed Value |
| --- | --- |
| Channel name | `Cloudflare R2` |
| Channel type | `cfr2` |
| Storage mode | `binding` |
| Configuration source | Environment binding |

Ini ialah fixed binding channel. Anda tidak perlu klik Add Channel untuk menciptanya, dan ia tidak boleh dipadam seperti regular channel.

## Field Yang Boleh Diedit Dalam Admin Panel

| Field | Fungsi | Required |
| --- | --- | --- |
| Enable channel | Mengawal sama ada R2 terlibat dalam upload selection. | Yes |
| Account ID | Digunakan hanya apabila quota limits diaktifkan dan official R2 usage perlu di-query. | Recommended apabila quota limits diaktifkan |
| Bucket name | Digunakan hanya apabila quota limits diaktifkan dan official R2 usage perlu di-query. | Recommended apabila quota limits diaktifkan |
| Quota limit | Mengawal sama ada R2 channel ini terlibat dalam upload selection berdasarkan capacity. | No |
| Threshold | Berhenti menulis ke channel ini selepas usage mencapai percentage yang ditetapkan. | Required apabila quota limits diaktifkan |

Anda boleh copy Account ID daripada account information panel dalam Cloudflare dashboard. Isi hanya jika anda mahu ImgBed query dan enforce R2 quota usage.

![Get the Account ID](../../image/upload/cloudflare-r2/获取账户id.png)

## Langkah Setup

1. Cipta R2 bucket dalam Cloudflare.
2. Buka Cloudflare settings untuk ImgBed project.
3. Tambah R2 bucket binding.
4. Tetapkan `Variable name` kepada `img_r2`.
5. Pilih R2 bucket yang anda cipta.
6. Save binding dan redeploy ImgBed.
7. Kembali ke ImgBed -> System Settings -> Upload Settings.
8. Pastikan `Cloudflare R2` channel muncul dan enabled.

Jika mahu R2 terlibat dalam upload selection berdasarkan capacity, enable quota limit, kemudian isi Account ID, bucket name, quota limit dan threshold sebelum save.

![Configure quota limits](../../image/upload/cloudflare-r2/配置容量限制.png)

## Cara Menyemak

- Fixed `Cloudflare R2` channel muncul dalam Upload Settings.
- Channel card menunjukkan ia enabled.
- Small test file berjaya di-upload dan returned link dibuka secara normal.
- Jika membuka file memaparkan `R2 database binding is not configured`, runtime tidak menerima `img_r2` binding. Semak binding name dalam Cloudflare dan redeploy project.
