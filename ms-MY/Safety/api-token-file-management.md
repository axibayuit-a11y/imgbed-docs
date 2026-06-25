# Pengurusan Fail dengan API Token

Pengurusan fail dengan API Token sesuai untuk skrip, tugasan automasi dan panel pengurusan pihak ketiga. Fungsi ini menggunakan kebenaran `manage` untuk menyunting maklumat fail, memindahkan fail, menamakan semula fail, mencipta fail pemegang tempat direktori, melaras tag fail dan status senarai, menyahdayakan atau memulihkan IP muat naik, serta mencipta atau memadam Token muat naik jangka pendek tanpa membuka panel pentadbir.

Skrip ini hanya mengendalikan tindakan pengurusan ringan dalam pengurusan fail dan pengurusan pengguna. Muat naik, senarai, pemadaman, tetapan muat naik, tetapan tapak dan hubungan federasi masih menggunakan skrip khusus masing-masing.

![Sunting API Token](../../image/Safety/apitoken/编辑管理权限api.png)

## Sebelum Bermula

Selepas masuk ke panel pentadbir, buka:

Tetapan Sistem -> Tetapan Keselamatan -> API Token

Semasa mencipta atau menyunting API Token, pastikan Token ini dibenarkan untuk mengurus. Kebenaran `manage` boleh mengubah status fail, status muat naik pengguna dan mencipta Token muat naik jangka pendek, jadi berikan hanya kepada skrip atau pengguna yang dipercayai.

Operasi tulis dalam skrip pengurusan fail menggunakan mod pratonton secara lalai dan tidak akan disimpan sebenar. Selepas memastikan kandungan pratonton betul, tambah `--apply` untuk melaksanakan penulisan.

Token juga boleh diletakkan dalam pemboleh ubah persekitaran:

```powershell
$env:IMGBED_API_TOKEN="your API Token"
```

## Muat Turun Skrip

| Skrip | Kegunaan |
| --- | --- |
| <a href="/tools/imgbed-token-manage.mjs" download>Muat turun skrip pengurusan fail</a> | Metadata fail, label semakan, tag fail, status senarai, pindah, nama semula, cipta folder, sekat/pulih IP, cipta dan padam Token muat naik jangka pendek |

Untuk menjalankan skrip, komputer setempat perlu memasang Node.js 18 atau versi lebih baharu.

## Sempadan Fungsi

| Keupayaan | Skrip | Kebenaran |
| --- | --- | --- |
| Muat naik fail | `imgbed-token-single-upload.mjs` / `imgbed-token-chunk-upload.mjs` | `upload` |
| Senaraikan fail, tapis fail, baca statistik pengguna | `imgbed-token-list.mjs` | `list` |
| Padam fail yang dinyatakan dengan jelas | `imgbed-token-delete.mjs` | `delete` |
| Sunting maklumat fail, tag, senarai, pindah, nama semula, cipta folder, sekat IP, cipta atau padam Token muat naik jangka pendek | `imgbed-token-manage.mjs` | `manage` |
| Sunting saluran muat naik, tetapan keselamatan, tetapan halaman, tetapan lain, hubungan federasi | Skrip berkaitan pengurusan konfigurasi | `manage` |

`imgbed-token-manage.mjs` tidak memuat naik fail, tidak menyenaraikan fail dan tidak memadam fail. Jika perlu mencari `fileId`, gunakan skrip senarai untuk menapis fail terlebih dahulu. Jika perlu memadam fail, berikan `fileId` yang jelas kepada skrip pemadaman.

## Parameter Umum

| Parameter | Wajib | Penerangan |
| --- | --- | --- |
| `--base-url <url>` | Ya | URL tapak ImgBed, contohnya `https://image.ai6.me` |
| `--token <token>` | Ya | API Token. Anda juga boleh menggunakan pemboleh ubah persekitaran `IMGBED_API_TOKEN` |
| `--retries <n>` | Tidak | Bilangan cubaan semula untuk kegagalan sementara. Lalai `3` |
| `--timeout-ms <n>` | Tidak | Had masa untuk satu permintaan. Lalai `180000` |
| `--output <pretty\|json>` | Tidak | Format output. Lalai `pretty`; untuk panggilan program, disarankan guna `json` |
| `--save-response <path>` | Tidak | Simpan keputusan akhir sebagai fail JSON |
| `--batch-size <n>` | Tidak | Bilangan item yang diproses setiap permintaan untuk tindakan kelompok. Lalai `15`, maksimum `15` |
| `--apply` | Tidak | Benar-benar melaksanakan penulisan. Tanpa pilihan ini, tindakan hanya dipratonton |
| `-h` / `--help` | Tidak | Paparkan bantuan skrip |

## Sahkan fileId Terlebih Dahulu

Kebanyakan tindakan dalam skrip pengurusan fail memerlukan `fileId`. Anda boleh menyemaknya dahulu dengan skrip senarai:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --dir "test4" `
  --count 10 `
  --output json
```

Nilai `name` dalam keputusan yang dikembalikan biasanya ialah `fileId` yang boleh diberikan kepada skrip pengurusan fail.

## Metadata Fail

Metadata fail digunakan untuk mengubah nama fail yang dipaparkan dan sumber bacaan dalam pengurusan fail panel pentadbir.

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-metadata `
  --file-id "photos/2026/a.jpg" `
  --file-name "cover.jpg" `
  --read-source backup
```

Selepas memastikan keputusan pratonton betul, simpan perubahan:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-metadata `
  --file-id "photos/2026/a.jpg" `
  --file-name "cover.jpg" `
  --read-source backup `
  --apply
```

### Parameter Metadata Fail

| Parameter | Penerangan |
| --- | --- |
| `--set-metadata` | Ubah metadata satu fail |
| `--file-id <id>` | ID fail yang hendak diubah |
| `--file-name <name>` | Nama paparan baharu dalam panel pentadbir |
| `--read-source <primary\|backup>` | Sumber bacaan. `primary` ialah sumber utama, `backup` ialah sumber sandaran |

Berikan sekurang-kurangnya satu daripada `--file-name` atau `--read-source`.

## Label Semakan

Label semakan sepadan dengan penarafan umur fail. Anda boleh membaca label semasa sebelum mengubahnya.

Baca label semakan:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-label `
  --file-id "photos/2026/a.jpg"
```

Tetapkan label semakan:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-label `
  --file-id "photos/2026/a.jpg" `
  --label r12 `
  --apply
```

### Parameter Label Semakan

| Parameter | Penerangan |
| --- | --- |
| `--get-label` | Baca label semakan satu fail |
| `--set-label` | Ubah label semakan satu fail |
| `--file-id <id>` | ID fail |
| `--label <value>` | Nilai label: `all-ages`, `r12`, `r16`, `r18`, `None` |

## Tag Fail

Tag fail digunakan untuk menambah tag perniagaan yang boleh dicari pada fail. Skrip menyokong baca, ganti, tambah, buang dan juga pemprosesan kelompok untuk beberapa fail.

Baca tag fail:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-tags `
  --file-id "photos/2026/a.jpg"
```

Tambah tag:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --add-tags `
  --file-id "photos/2026/a.jpg" `
  --tag "cover" `
  --tag "2026" `
  --apply
```

Buang tag:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --remove-tags `
  --file-id "photos/2026/a.jpg" `
  --tag "cover" `
  --apply
```

Ganti tag:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-tags `
  --file-id "photos/2026/a.jpg" `
  --tag "archive" `
  --tag "public" `
  --apply
```

Tambah tag secara kelompok:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --batch-tags `
  --file-id "photos/2026/a.jpg" `
  --file-id "photos/2026/b.jpg" `
  --tag-action add `
  --tag "batch-test" `
  --apply
```

### Parameter Tag Fail

| Parameter | Penerangan |
| --- | --- |
| `--get-tags` | Baca tag satu fail |
| `--set-tags` | Ganti tag satu fail |
| `--add-tags` | Tambah tag pada satu fail |
| `--remove-tags` | Buang tag daripada satu fail |
| `--batch-tags` | Tetapkan, tambah atau buang tag secara kelompok |
| `--file-id <id>` | ID fail. Untuk tindakan kelompok, boleh diberikan berulang kali |
| `--tag <tag>` | Nilai tag, boleh diberikan berulang kali |
| `--tags-json <path>` | Baca tatasusunan tag daripada fail JSON |
| `--tag-action <set\|add\|remove>` | Tindakan tag kelompok |

Contoh kandungan fail `--tags-json`:

```json
["cover", "2026", "public"]
```

## Status Senarai Hitam dan Senarai Putih

Status senarai menentukan tingkah laku kawalan akses fail dalam mod akses awam. Ia boleh diubah untuk satu fail atau secara kelompok.

Tetapkan satu fail sebagai senarai putih:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-list-type `
  --file-id "photos/2026/a.jpg" `
  --list-type White `
  --apply
```

Tambah kepada senarai hitam secara kelompok:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --batch-list-type `
  --file-id "photos/2026/a.jpg" `
  --file-id "photos/2026/b.jpg" `
  --list-type Block `
  --apply
```

Pulihkan status senarai lalai:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-list-type `
  --file-id "photos/2026/a.jpg" `
  --list-type None `
  --apply
```

### Parameter Senarai Hitam dan Senarai Putih

| Parameter | Penerangan |
| --- | --- |
| `--set-list-type` | Ubah status senarai satu fail |
| `--batch-list-type` | Ubah status senarai fail secara kelompok. Satu permintaan memproses maksimum `15` fail |
| `--file-id <id>` | ID fail. Untuk tindakan kelompok, boleh diberikan berulang kali |
| `--list-type <None\|White\|Block>` | `None` ialah status lalai, `White` ialah senarai putih, `Block` ialah senarai hitam |

## Memindahkan Fail

Memindahkan fail akan memindahkan satu atau lebih fail ke direktori sasaran. Backend memproses maksimum `15` fail dalam satu permintaan. Skrip akan memecahkan kerja secara automatik mengikut `--batch-size` kepada beberapa permintaan dan menjalankannya mengikut turutan.

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --move `
  --file-id "photos/2026/a.jpg" `
  --file-id "photos/2026/b.jpg" `
  --target-path "archive/2026" `
  --apply
```

### Parameter Pindah

| Parameter | Penerangan |
| --- | --- |
| `--move` | Pindahkan fail |
| `--file-id <id>` | ID fail yang hendak dipindahkan, boleh diberikan berulang kali |
| `--target-path <dir>` | Direktori sasaran |
| `--batch-size <n>` | Bilangan fail yang dipindahkan setiap permintaan. Lalai `15`, maksimum `15` |

## Nama Semula atau Ubah Laluan

Nama semula menggunakan ID fail lama dan ID fail baharu yang jelas. ID fail baharu boleh hanya menukar nama fail, atau menukar direktori pada masa yang sama.

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --rename `
  --old-file-id "photos/2026/a.jpg" `
  --new-file-id "photos/2026/a-renamed.jpg" `
  --apply
```

Untuk nama semula secara kelompok, `--old-file-id` dan `--new-file-id` boleh diberikan berulang kali:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --rename `
  --old-file-id "photos/2026/a.jpg" `
  --new-file-id "archive/2026/a.jpg" `
  --old-file-id "photos/2026/b.jpg" `
  --new-file-id "archive/2026/b.jpg" `
  --apply
```

Pemetaan juga boleh ditulis ke fail JSON:

```json
[
  {
    "oldFileId": "photos/2026/a.jpg",
    "newFileId": "archive/2026/a.jpg"
  },
  {
    "oldFileId": "photos/2026/b.jpg",
    "newFileId": "archive/2026/b.jpg"
  }
]
```

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --rename `
  --items-json ".\rename-items.json" `
  --apply
```

### Parameter Nama Semula

| Parameter | Penerangan |
| --- | --- |
| `--rename` | Nama semula atau ubah laluan mengikut pemetaan yang jelas |
| `--old-file-id <id>` | ID fail asal, boleh diberikan berulang kali |
| `--new-file-id <id>` | ID fail baharu, boleh diberikan berulang kali; bilangannya mesti sama dengan `--old-file-id` |
| `--items-json <path>` | Tatasusunan JSON, itemnya ialah `{ "oldFileId": "...", "newFileId": "..." }` |
| `--batch-size <n>` | Bilangan item nama semula yang diproses setiap permintaan. Lalai `15`, maksimum `15` |

## Mencipta Folder

Direktori ImgBed berasal daripada laluan fail, jadi tiada direktori kosong sebenar. Apabila skrip mencipta folder, ia akan mencipta fail pemegang tempat `0.md` dalam direktori sasaran supaya direktori itu boleh dipaparkan dalam pengurusan fail dan statistik direktori.

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --create-folder `
  --parent-directory "photos" `
  --folder-name "2026" `
  --apply
```

### Parameter Cipta Folder

| Parameter | Penerangan |
| --- | --- |
| `--create-folder` | Cipta fail pemegang tempat direktori |
| `--parent-directory <dir>` | Direktori induk; untuk direktori akar, boleh berikan rentetan kosong |
| `--folder-name <name>` | Nama folder baharu |

## Sekat dan Pulihkan IP Muat Naik

Kebenaran pengurusan boleh menambah IP tertentu ke dalam senarai larangan muat naik, dan juga boleh mengeluarkannya daripada senarai tersebut. Tindakan ini menjejaskan muat naik seterusnya daripada IP itu, tetapi tidak memadam fail yang telah dimuat naik oleh IP tersebut.

Sekat IP muat naik:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --block-ip "67.159.48.149" `
  --apply
```

Pulihkan IP muat naik:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --allow-ip "67.159.48.149" `
  --apply
```

Lihat senarai IP yang sedang dilarang memuat naik:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --blocked-ips
```

### Parameter Pengurusan IP

| Parameter | Penerangan |
| --- | --- |
| `--block-ip <ip>` | Tambah ke senarai larangan muat naik |
| `--allow-ip <ip>` | Buang daripada senarai larangan muat naik |

## Mencipta dan Memadam Token Muat Naik Jangka Pendek

Kebenaran pengurusan boleh mencipta Token khusus muat naik yang bersifat jangka pendek. Token ini sentiasa hanya mempunyai kebenaran `upload`, `autoDelete` sentiasa `true`, dan tempoh tamat tempoh maksimum ialah `1` hari.

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --create-upload-token `
  --name "Temporary Upload Token" `
  --owner "upload-bot" `
  --default-upload-channel telegram `
  --expires-in-minutes 20 `
  --apply `
  --output json
```

Anda juga boleh memberikan cap masa milisaat secara langsung:

```powershell
$expiresAt = [DateTimeOffset]::UtcNow.AddHours(12).ToUnixTimeMilliseconds()

node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --create-upload-token `
  --name "Upload Token valid for one day" `
  --owner "upload-bot" `
  --default-upload-channel telegram `
  --expires-at $expiresAt `
  --apply
```

Semasa memadam Token muat naik jangka pendek, berikan `id` yang dikembalikan oleh API penciptaan. Token pengurusan hanya boleh memadam Token yang memenuhi syarat berikut:

| Syarat | Keperluan |
| --- | --- |
| Kebenaran | `permissions` hanya mengandungi `upload` |
| Padam automatik | `autoDelete=true` |
| Tempoh sah | `expiresAt - createdAt <= 24` jam |

Padam Token muat naik jangka pendek:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --delete-upload-token `
  --token-id "mqt4jqokc85be80d1f0f47078e848a77d6c1aa6e" `
  --apply
```

Token pengurusan tidak boleh memadam Token biasa, Token jangka panjang, Token yang mengandungi kebenaran `list` / `delete` / `manage`, atau Token muat naik yang tempoh sahnya melebihi `1` hari. Token seperti ini masih perlu diurus dalam panel pentadbir pelayar.

### Parameter Token Muat Naik Jangka Pendek

| Parameter | Penerangan |
| --- | --- |
| `--create-upload-token` | Cipta Token khusus muat naik jangka pendek |
| `--delete-upload-token` | Padam Token khusus muat naik jangka pendek yang memenuhi syarat |
| `--name <name>` | Nama Token |
| `--owner <owner>` | Keterangan pemilik Token |
| `--default-upload-channel <key>` | Saluran muat naik lalai, mesti saluran sebenar seperti `telegram`, `s3`, `github` |
| `--expires-in-minutes <n>` | Bilangan minit tamat tempoh daripada masa semasa, maksimum `1440` |
| `--expires-at <ms>` | Masa tamat tempoh mutlak dalam cap masa milisaat, maksimum `24` jam daripada masa semasa |
| `--token-id <id>` | ID Token muat naik jangka pendek yang hendak dipadam |

Token muat naik jangka pendek hanya membenarkan muat naik. Dalam ujian, Token jangka pendek dengan `permissions=["upload"]` ditolak apabila mengakses API senarai, pengurusan fail dan pemadaman.

Selepas tamat tempoh, Token dengan `autoDelete=true` akan dibersihkan apabila backend mengesahkan dan mendapati Token itu telah tamat tempoh. Membaca senarai API Token juga akan membersihkan Token padam automatik yang telah tamat tempoh.

## Padanan API

| Tindakan | Kaedah | API |
| --- | --- | --- |
| Ubah metadata fail | `PATCH` | `/api/manage/metadata/{fileId}` |
| Baca label semakan | `GET` | `/api/manage/label/{fileId}` |
| Ubah label semakan | `POST` | `/api/manage/label/{fileId}` |
| Baca tag fail | `GET` | `/api/manage/tags/{fileId}` |
| Ubah tag fail | `POST` | `/api/manage/tags/{fileId}` |
| Ubah tag fail secara kelompok | `POST` | `/api/manage/tags/batch` |
| Ubah status senarai | `POST` | `/api/manage/listType/{fileId}` |
| Ubah status senarai secara kelompok | `POST` | `/api/manage/listType/batch` |
| Pindah atau nama semula | `POST` | `/api/manage/relocate/batch` |
| Cipta folder | `POST` | `/api/manage/folder/create` |
| Sekat IP muat naik | `POST` | `/api/manage/cusConfig/blockip` |
| Pulihkan IP muat naik | `POST` | `/api/manage/cusConfig/whiteip` |
| Cipta Token muat naik jangka pendek | `POST` | `/api/manage/apiTokens` |
| Padam Token muat naik jangka pendek | `DELETE` | `/api/manage/apiTokens?id={tokenId}` |

Skrip akan membawa secara automatik:

```text
Authorization: Bearer your API Token
```

## Format Output

Output lalai `pretty` sesuai untuk bacaan manusia. Jika mahu diproses oleh program lain, gunakan `--output json`:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-tags `
  --file-id "photos/2026/a.jpg" `
  --output json
```

Anda juga boleh menyimpan keputusan penuh:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-tags `
  --file-id "photos/2026/a.jpg" `
  --output json `
  --save-response ".\manage-result.json"
```

Pindah kelompok, nama semula kelompok dan tindakan senarai kelompok akan menghuraikan strim kemajuan NDJSON daripada backend, kemudian meringkaskan bilangan peristiwa, status selesai dan butiran kegagalan.

## Soalan Lazim

### Mengapa arahan dijalankan tetapi tiada perubahan

Tindakan tulis menggunakan mod pratonton secara lalai. Selepas memastikan keputusan pratonton betul, tambah `--apply` untuk benar-benar menyimpan perubahan.

### Bolehkah skrip ini memuat naik, menyenaraikan atau memadam fail

Tidak. Muat naik menggunakan skrip muat naik, senarai dan tapisan menggunakan skrip senarai, manakala pemadaman fail yang jelas menggunakan skrip pemadaman. Skrip pengurusan fail hanya mengendalikan tindakan pengurusan ringan di bawah kebenaran `manage`.

### Bagaimana mengetahui fileId yang perlu diberikan

Gunakan `imgbed-token-list.mjs --files` untuk mencari fail terlebih dahulu. Nilai `name` dalam keputusan yang dikembalikan biasanya ialah ID fail, iaitu nilai yang diberikan kepada `--file-id` di sini.

### Operasi kelompok sekali jalan maksimum berapa fail

Backend memproses maksimum `15` fail dalam satu permintaan. Lalai skrip ialah `--batch-size 15`; jika nilai lebih kecil diberikan, skrip akan memecahkannya secara automatik kepada beberapa permintaan berturutan mengikut jumlah itu.

### Bolehkah mencipta folder kosong sebenar

Direktori ImgBed diterbitkan daripada laluan fail, jadi tiada direktori kosong sebenar. `--create-folder` akan mencipta fail pemegang tempat direktori `0.md` supaya direktori itu boleh dipaparkan dalam pengurusan fail dan statistik direktori.

### Berapa lama maksimum Token muat naik jangka pendek

Maksimum `1` hari, iaitu `1440` minit. Jika melebihi tempoh ini, skrip akan menolak secara setempat; backend juga akan mengembalikan `API_TOKEN_MANAGE_CREATE_EXPIRES_AT_TOO_LONG`.

### Adakah Token muat naik jangka pendek dipadam automatik selepas tamat tempoh

Ia akan dibersihkan secara automatik, tetapi bukan oleh tugasan berjadual yang memadam serta-merta. Token yang tamat tempoh akan dibersihkan apabila disahkan semula; membaca senarai API Token juga akan membersihkan Token yang telah tamat tempoh dan mempunyai `autoDelete=true`.
