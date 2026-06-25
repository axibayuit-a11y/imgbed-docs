# Manajemen File dengan API Token

Manajemen file dengan API Token ditujukan untuk skrip, tugas otomatis, dan panel pengelolaan pihak ketiga. Fitur ini memakai izin `manage` untuk mengedit informasi file, memindahkan file, mengganti nama file, membuat file placeholder direktori, menyesuaikan tag file dan status daftar, menonaktifkan atau memulihkan IP unggahan, serta membuat atau menghapus Token unggahan jangka pendek tanpa membuka panel admin.

Skrip ini hanya menangani tindakan pengelolaan ringan di pengelolaan file dan pengelolaan pengguna. Unggahan, daftar, penghapusan, pengaturan unggahan, pengaturan situs, dan relasi federasi tetap menggunakan skrip khusus masing-masing.

![Edit API Token](../../image/Safety/apitoken/编辑管理权限api.png)

## Persiapan

Setelah masuk ke panel admin, buka:

Pengaturan Sistem -> Pengaturan Keamanan -> API Token

Saat membuat atau mengedit API Token, pastikan Token tersebut diizinkan untuk mengelola. Izin `manage` dapat mengubah status file, status unggahan pengguna, dan membuat Token unggahan jangka pendek, sehingga sebaiknya hanya diberikan kepada skrip atau pengguna tepercaya.

Operasi tulis dalam skrip manajemen file secara default berada dalam mode pratinjau dan tidak benar-benar disimpan. Setelah memastikan pratinjau sudah benar, tambahkan `--apply` untuk menjalankan penulisan.

Token juga dapat diletakkan di variabel lingkungan:

```powershell
$env:IMGBED_API_TOKEN="your API Token"
```

## Mengunduh Skrip

| Skrip | Kegunaan |
| --- | --- |
| <a href="/tools/imgbed-token-manage.mjs" download>skrip manajemen file</a> | Metadata file, label moderasi, tag file, status daftar, pemindahan, penggantian nama, pembuatan folder, pemblokiran/pemulihan IP, serta pembuatan dan penghapusan Token unggahan jangka pendek |

Untuk menjalankan skrip, Node.js 18 atau versi yang lebih baru harus terpasang di komputer lokal.

## Batas Fungsi

| Kemampuan | Skrip | Izin |
| --- | --- | --- |
| Mengunggah file | `imgbed-token-single-upload.mjs` / `imgbed-token-chunk-upload.mjs` | `upload` |
| Menampilkan daftar file, memfilter file, membaca statistik pengguna | `imgbed-token-list.mjs` | `list` |
| Menghapus file yang ditentukan secara eksplisit | `imgbed-token-delete.mjs` | `delete` |
| Mengedit informasi file, tag, daftar, memindahkan, mengganti nama, membuat folder, memblokir IP, membuat atau menghapus Token unggahan jangka pendek | `imgbed-token-manage.mjs` | `manage` |
| Mengedit kanal unggahan, pengaturan keamanan, pengaturan halaman, pengaturan lain, relasi federasi | Skrip terkait manajemen konfigurasi | `manage` |

`imgbed-token-manage.mjs` tidak mengunggah file, menampilkan daftar file, atau menghapus file. Jika perlu mencari `fileId`, gunakan skrip daftar untuk memfilter file terlebih dahulu. Jika perlu menghapus file, berikan `fileId` yang jelas ke skrip penghapusan.

## Parameter Umum

| Parameter | Wajib | Deskripsi |
| --- | --- | --- |
| `--base-url <url>` | Ya | URL situs ImgBed, misalnya `https://image.ai6.me` |
| `--token <token>` | Ya | API Token. Anda juga dapat menggunakan variabel lingkungan `IMGBED_API_TOKEN` |
| `--retries <n>` | Tidak | Jumlah percobaan ulang untuk kegagalan sementara. Default `3` |
| `--timeout-ms <n>` | Tidak | Batas waktu untuk satu permintaan. Default `180000` |
| `--output <pretty\|json>` | Tidak | Format keluaran. Default `pretty`; untuk pemanggilan program, disarankan memakai `json` |
| `--save-response <path>` | Tidak | Simpan hasil akhir sebagai file JSON |
| `--batch-size <n>` | Tidak | Jumlah item yang diproses setiap permintaan untuk tindakan batch. Default `15`, maksimum `15` |
| `--apply` | Tidak | Benar-benar menjalankan penulisan. Tanpa opsi ini, tindakan hanya dipratinjau |
| `-h` / `--help` | Tidak | Menampilkan bantuan skrip |

## Konfirmasi fileId Terlebih Dahulu

Sebagian besar tindakan pada skrip manajemen file membutuhkan `fileId`. Anda dapat mencarinya lebih dulu dengan skrip daftar:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --dir "test4" `
  --count 10 `
  --output json
```

Nilai `name` pada hasil yang dikembalikan biasanya adalah `fileId` yang dapat diberikan ke skrip manajemen file.

## Metadata File

Metadata file digunakan untuk mengubah nama file yang ditampilkan dan sumber baca di pengelolaan file panel admin.

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-metadata `
  --file-id "photos/2026/a.jpg" `
  --file-name "cover.jpg" `
  --read-source backup
```

Setelah memastikan hasil pratinjau sudah benar, simpan perubahan:

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

### Parameter Metadata File

| Parameter | Deskripsi |
| --- | --- |
| `--set-metadata` | Mengubah metadata satu file |
| `--file-id <id>` | ID file yang akan diubah |
| `--file-name <name>` | Nama tampilan baru di panel admin |
| `--read-source <primary\|backup>` | Sumber baca. `primary` adalah sumber utama, `backup` adalah sumber cadangan |

Berikan minimal salah satu dari `--file-name` atau `--read-source`.

## Label Moderasi

Label moderasi sesuai dengan klasifikasi usia file. Anda dapat membaca label saat ini sebelum mengubahnya.

Membaca label moderasi:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-label `
  --file-id "photos/2026/a.jpg"
```

Mengatur label moderasi:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-label `
  --file-id "photos/2026/a.jpg" `
  --label r12 `
  --apply
```

### Parameter Label Moderasi

| Parameter | Deskripsi |
| --- | --- |
| `--get-label` | Membaca label moderasi satu file |
| `--set-label` | Mengubah label moderasi satu file |
| `--file-id <id>` | ID file |
| `--label <value>` | Nilai label: `all-ages`, `r12`, `r16`, `r18`, `None` |

## Tag File

Tag file digunakan untuk menambahkan tag bisnis yang dapat dicari ke file. Skrip mendukung baca, timpa, tambah, hapus, dan juga pemrosesan batch untuk beberapa file.

Membaca tag file:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-tags `
  --file-id "photos/2026/a.jpg"
```

Menambahkan tag:

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

Menghapus tag:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --remove-tags `
  --file-id "photos/2026/a.jpg" `
  --tag "cover" `
  --apply
```

Menimpa tag:

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

Menambahkan tag secara batch:

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

### Parameter Tag File

| Parameter | Deskripsi |
| --- | --- |
| `--get-tags` | Membaca tag satu file |
| `--set-tags` | Menimpa tag satu file |
| `--add-tags` | Menambahkan tag ke satu file |
| `--remove-tags` | Menghapus tag dari satu file |
| `--batch-tags` | Mengatur, menambahkan, atau menghapus tag secara batch |
| `--file-id <id>` | ID file. Untuk tindakan batch, dapat diberikan beberapa kali |
| `--tag <tag>` | Nilai tag, dapat diberikan beberapa kali |
| `--tags-json <path>` | Membaca array tag dari file JSON |
| `--tag-action <set\|add\|remove>` | Tindakan tag batch |

Contoh isi file `--tags-json`:

```json
["cover", "2026", "public"]
```

## Status Daftar Hitam dan Daftar Putih

Status daftar menentukan perilaku kontrol akses file dalam mode akses publik. Status ini dapat diubah untuk satu file atau secara batch.

Menetapkan satu file ke daftar putih:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-list-type `
  --file-id "photos/2026/a.jpg" `
  --list-type White `
  --apply
```

Menambahkan ke daftar hitam secara batch:

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

Mengembalikan status daftar default:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-list-type `
  --file-id "photos/2026/a.jpg" `
  --list-type None `
  --apply
```

### Parameter Daftar Hitam dan Daftar Putih

| Parameter | Deskripsi |
| --- | --- |
| `--set-list-type` | Mengubah status daftar satu file |
| `--batch-list-type` | Mengubah status daftar file secara batch. Satu permintaan memproses maksimal `15` file |
| `--file-id <id>` | ID file. Untuk tindakan batch, dapat diberikan beberapa kali |
| `--list-type <None\|White\|Block>` | `None` adalah status default, `White` adalah daftar putih, `Block` adalah daftar hitam |

## Memindahkan File

Pemindahan file akan memindahkan satu atau beberapa file ke direktori tujuan. Backend memproses maksimal `15` file dalam satu permintaan. Skrip akan otomatis memecah pekerjaan sesuai `--batch-size` menjadi beberapa permintaan dan menjalankannya berurutan.

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

### Parameter Pemindahan

| Parameter | Deskripsi |
| --- | --- |
| `--move` | Memindahkan file |
| `--file-id <id>` | ID file yang akan dipindahkan, dapat diberikan beberapa kali |
| `--target-path <dir>` | Direktori tujuan |
| `--batch-size <n>` | Jumlah file yang dipindahkan per permintaan. Default `15`, maksimum `15` |

## Mengganti Nama atau Mengubah Path

Penggantian nama memakai ID file lama dan ID file baru yang jelas. ID file baru dapat hanya mengubah nama file, atau sekaligus mengubah direktori.

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --rename `
  --old-file-id "photos/2026/a.jpg" `
  --new-file-id "photos/2026/a-renamed.jpg" `
  --apply
```

Saat mengganti nama secara batch, `--old-file-id` dan `--new-file-id` dapat diberikan berulang:

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

Pemetaan juga dapat ditulis ke file JSON:

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

### Parameter Penggantian Nama

| Parameter | Deskripsi |
| --- | --- |
| `--rename` | Mengganti nama atau mengubah path berdasarkan pemetaan eksplisit |
| `--old-file-id <id>` | ID file lama, dapat diberikan beberapa kali |
| `--new-file-id <id>` | ID file baru, dapat diberikan beberapa kali; jumlahnya harus sama dengan `--old-file-id` |
| `--items-json <path>` | Array JSON dengan elemen `{ "oldFileId": "...", "newFileId": "..." }` |
| `--batch-size <n>` | Jumlah item penggantian nama yang diproses per permintaan. Default `15`, maksimum `15` |

## Membuat Folder

Direktori ImgBed berasal dari path file, sehingga tidak ada direktori kosong yang benar-benar berdiri sendiri. Saat skrip membuat folder, skrip akan membuat file placeholder `0.md` di direktori tujuan agar direktori tersebut muncul di pengelolaan file dan statistik direktori.

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --create-folder `
  --parent-directory "photos" `
  --folder-name "2026" `
  --apply
```

### Parameter Pembuatan Folder

| Parameter | Deskripsi |
| --- | --- |
| `--create-folder` | Membuat file placeholder direktori |
| `--parent-directory <dir>` | Direktori induk; untuk direktori root, dapat diberikan string kosong |
| `--folder-name <name>` | Nama folder baru |

## Memblokir dan Memulihkan IP Unggahan

Dengan izin manajemen, IP tertentu dapat dimasukkan ke daftar larangan unggah, dan juga dapat dikeluarkan dari daftar tersebut. Tindakan ini memengaruhi unggahan berikutnya dari IP itu, tetapi tidak menghapus file yang sudah diunggah oleh IP tersebut.

Memblokir IP unggahan:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --block-ip "67.159.48.149" `
  --apply
```

Memulihkan IP unggahan:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --allow-ip "67.159.48.149" `
  --apply
```

Melihat daftar IP yang saat ini dilarang mengunggah:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --blocked-ips
```

### Parameter Manajemen IP

| Parameter | Deskripsi |
| --- | --- |
| `--block-ip <ip>` | Menambahkan IP ke daftar larangan unggah |
| `--allow-ip <ip>` | Menghapus IP dari daftar larangan unggah |

## Membuat dan Menghapus Token Unggahan Jangka Pendek

Izin manajemen dapat membuat Token khusus unggahan jangka pendek. Token ini selalu hanya memiliki izin `upload`, `autoDelete` selalu `true`, dan waktu kedaluwarsa paling lama `1` hari.

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

Anda juga dapat langsung memberikan timestamp milidetik:

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

Saat menghapus Token unggahan jangka pendek, berikan `id` yang dikembalikan oleh API pembuatan. Token manajemen hanya dapat menghapus Token yang memenuhi syarat berikut:

| Syarat | Ketentuan |
| --- | --- |
| Izin | `permissions` hanya berisi `upload` |
| Hapus otomatis | `autoDelete=true` |
| Masa berlaku | `expiresAt - createdAt <= 24` jam |

Menghapus Token unggahan jangka pendek:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --delete-upload-token `
  --token-id "mqt4jqokc85be80d1f0f47078e848a77d6c1aa6e" `
  --apply
```

Token manajemen tidak dapat menghapus Token biasa, Token jangka panjang, Token yang berisi izin `list` / `delete` / `manage`, atau Token unggahan dengan masa berlaku lebih dari `1` hari. Token seperti itu tetap harus ditangani di panel admin browser.

### Parameter Token Unggahan Jangka Pendek

| Parameter | Deskripsi |
| --- | --- |
| `--create-upload-token` | Membuat Token khusus unggahan jangka pendek |
| `--delete-upload-token` | Menghapus Token khusus unggahan jangka pendek yang memenuhi syarat |
| `--name <name>` | Nama Token |
| `--owner <owner>` | Keterangan pemilik Token |
| `--default-upload-channel <key>` | Kanal unggahan default, harus kanal nyata seperti `telegram`, `s3`, `github` |
| `--expires-in-minutes <n>` | Jumlah menit hingga kedaluwarsa dari waktu saat ini, maksimum `1440` |
| `--expires-at <ms>` | Waktu kedaluwarsa absolut dalam timestamp milidetik, maksimum `24` jam dari waktu saat ini |
| `--token-id <id>` | ID Token unggahan jangka pendek yang akan dihapus |

Token unggahan jangka pendek hanya mengizinkan unggahan. Dalam pengujian, Token jangka pendek dengan `permissions=["upload"]` ditolak saat mengakses API daftar, manajemen file, dan penghapusan.

Setelah kedaluwarsa, Token dengan `autoDelete=true` akan dibersihkan ketika backend memverifikasi dan menemukan Token tersebut sudah kedaluwarsa. Membaca daftar API Token juga akan membersihkan Token hapus otomatis yang sudah kedaluwarsa.

## Pemetaan API

| Tindakan | Metode | API |
| --- | --- | --- |
| Mengubah metadata file | `PATCH` | `/api/manage/metadata/{fileId}` |
| Membaca label moderasi | `GET` | `/api/manage/label/{fileId}` |
| Mengubah label moderasi | `POST` | `/api/manage/label/{fileId}` |
| Membaca tag file | `GET` | `/api/manage/tags/{fileId}` |
| Mengubah tag file | `POST` | `/api/manage/tags/{fileId}` |
| Mengubah tag file secara batch | `POST` | `/api/manage/tags/batch` |
| Mengubah status daftar | `POST` | `/api/manage/listType/{fileId}` |
| Mengubah status daftar secara batch | `POST` | `/api/manage/listType/batch` |
| Memindahkan atau mengganti nama | `POST` | `/api/manage/relocate/batch` |
| Membuat folder | `POST` | `/api/manage/folder/create` |
| Memblokir IP unggahan | `POST` | `/api/manage/cusConfig/blockip` |
| Memulihkan IP unggahan | `POST` | `/api/manage/cusConfig/whiteip` |
| Membuat Token unggahan jangka pendek | `POST` | `/api/manage/apiTokens` |
| Menghapus Token unggahan jangka pendek | `DELETE` | `/api/manage/apiTokens?id={tokenId}` |

Skrip akan otomatis menyertakan:

```text
Authorization: Bearer your API Token
```

## Format Keluaran

Keluaran default `pretty` cocok untuk dibaca manusia. Jika hasil akan diproses oleh program lain, gunakan `--output json`:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-tags `
  --file-id "photos/2026/a.jpg" `
  --output json
```

Anda juga dapat menyimpan hasil lengkap:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-tags `
  --file-id "photos/2026/a.jpg" `
  --output json `
  --save-response ".\manage-result.json"
```

Pemindahan batch, penggantian nama batch, dan tindakan daftar batch akan mengurai aliran progres NDJSON dari backend, lalu merangkum jumlah peristiwa, status selesai, dan detail kegagalan.

## FAQ

### Mengapa perintah dijalankan tetapi tidak ada perubahan

Tindakan tulis secara default berada dalam mode pratinjau. Setelah memastikan pratinjau sudah benar, tambahkan `--apply` agar perubahan benar-benar disimpan.

### Apakah skrip ini dapat mengunggah, menampilkan daftar, atau menghapus file

Tidak. Unggahan memakai skrip unggahan, daftar dan filter memakai skrip daftar, dan penghapusan file eksplisit memakai skrip penghapusan. Skrip manajemen file hanya menangani tindakan pengelolaan ringan di bawah izin `manage`.

### Bagaimana mengetahui fileId yang harus diberikan

Gunakan `imgbed-token-list.mjs --files` terlebih dahulu untuk mencari file. Nilai `name` pada hasil yang dikembalikan biasanya adalah ID file, yaitu nilai yang diberikan ke `--file-id` di sini.

### Operasi batch sekali jalan maksimal berapa file

Backend memproses maksimal `15` file dalam satu permintaan. Default skrip adalah `--batch-size 15`; jika Anda memberikan nilai lebih kecil, skrip akan otomatis membaginya menjadi beberapa permintaan berurutan sesuai jumlah tersebut.

### Apakah bisa membuat folder kosong yang benar-benar kosong

Direktori ImgBed diturunkan dari path file, sehingga tidak ada direktori kosong yang benar-benar berdiri sendiri. `--create-folder` akan membuat file placeholder direktori `0.md` agar direktori itu dapat tampil di pengelolaan file dan statistik direktori.

### Berapa lama maksimal Token unggahan jangka pendek

Maksimal `1` hari, yaitu `1440` menit. Jika melebihi waktu ini, skrip akan menolak secara lokal; backend juga akan mengembalikan `API_TOKEN_MANAGE_CREATE_EXPIRES_AT_TOO_LONG`.

### Apakah Token unggahan jangka pendek otomatis dihapus setelah kedaluwarsa

Akan dibersihkan otomatis, tetapi bukan oleh tugas terjadwal yang langsung berjalan. Token kedaluwarsa akan dibersihkan saat diperiksa kembali; membaca daftar API Token juga akan membersihkan Token yang sudah kedaluwarsa dan memiliki `autoDelete=true`.
