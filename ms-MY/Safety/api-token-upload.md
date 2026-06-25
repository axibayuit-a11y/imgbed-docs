# Muat Naik Fail dengan API Token

Muat naik melalui API Token sesuai untuk skrip, tugas automasi dan aplikasi pihak ketiga. Anda tidak perlu membuka antara muka web ImgBed. Selagi anda memberikan alamat tapak, API Token, laluan fail tempatan dan saluran muat naik sebenar, skrip akan mengembalikan pautan fail selepas muat naik berjaya.

![Sunting API Token](../../image/Safety/apitoken/编辑上传权限api.png)

## Sebelum Bermula

Buka panel pentadbir, kemudian pergi ke:

```text
System Settings -> Security Settings -> API Token
```

Semasa mencipta atau mengedit API Token, pastikan kebenaran muat naik diaktifkan dan saluran muat naik lalai ialah saluran sebenar. Muat naik API Token tidak menggunakan pembahagian pintar, jadi jangan hantar `__smart__` daripada skrip. Gunakan kunci saluran sebenar seperti `s3`, `github` atau `telegram`.

## Muat Turun Skrip Muat Naik

Dokumentasi ImgBed menyediakan dua skrip Node.js:

| Skrip | Kegunaan |
| --- | --- |
| <a href="/tools/imgbed-token-single-upload.mjs" download>skrip muat naik satu permintaan</a> | Memanggil `/upload` sekali sahaja; sesuai untuk fail kecil dan ujian sambungan antara muka |
| <a href="/tools/imgbed-token-chunk-upload.mjs" download>skrip muat naik berbahagi</a> | Menggunakan muat naik berbahagi, muat naik langsung atau sesi platform mengikut saluran; sesuai untuk fail besar |

Skrip memerlukan Node.js 18 atau versi yang lebih baharu.

## Senaraikan Saluran Tersedia

Kedua-dua skrip boleh menyenaraikan saluran muat naik yang tersedia untuk API Token semasa:

```powershell
node imgbed-token-single-upload.mjs --base-url "https://your-domain" --token "your API Token" --list-channels
node imgbed-token-chunk-upload.mjs --base-url "https://your-domain" --token "your API Token" --list-channels
```

Dalam mod ini, `--file` dan `--channel` tidak diperlukan. Hasilnya mengandungi saluran lalai, kunci saluran utama, nama subsaluran dan status pengimbangan beban. Kunci rahsia, token segar semula dan konfigurasi sensitif tidak dikembalikan.

## Memilih Kaedah Muat Naik

| Kaedah | Bila digunakan | Tingkah laku |
| --- | --- | --- |
| Muat naik satu permintaan | Fail kecil, skrip ringkas, ujian antara muka | Menghantar keseluruhan fail ke `/upload` dalam satu permintaan |
| Muat naik berbahagi | Fail besar atau fail yang mudah melebihi had masa | Menggunakan bahagian, muat naik langsung atau sesi platform mengikut saluran |

Untuk fail besar, gunakan skrip muat naik berbahagi terlebih dahulu. Muat naik satu permintaan dipengaruhi had saiz permintaan Cloudflare, memori Worker dan had platform destinasi.

## Muat Naik Satu Permintaan

Skrip ini menghantar keseluruhan fail ke `/upload` dalam satu permintaan:

```powershell
node imgbed-token-single-upload.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --file "D:\test\image.png" `
  --channel s3 `
  --folder "photos/2026"
```

API Token juga boleh disimpan dalam pemboleh ubah persekitaran:

```powershell
$env:IMGBED_API_TOKEN="your API Token"
node imgbed-token-single-upload.mjs --base-url "https://your-domain" --file "D:\test\image.png" --channel s3
```

### Parameter Muat Naik Satu Permintaan

| Parameter | Wajib | Penerangan |
| --- | --- | --- |
| `--base-url <url>` | Ya | URL tapak ImgBed, contohnya `https://image.ai6.me` |
| `--token <token>` | Ya | API Token. Anda juga boleh menggunakan pemboleh ubah persekitaran `IMGBED_API_TOKEN` |
| `--file <path>` | Ya | Laluan fail tempatan |
| `--channel <key>` | Ya | Saluran muat naik sebenar |
| `--folder <path>` | Tidak | Folder destinasi, contohnya `photos/2026` atau `/user/` |
| `--name-type <type>` | Tidak | Kaedah penamaan; sepadan dengan `uploadNameType` pada pelayan, lalai `default` |
| `--channel-name <name>` | Tidak | Memilih subsaluran atau akaun tertentu; jika kosong, pelayan memilih mengikut konfigurasi saluran |
| `--retries <n>` | Tidak | Bilangan cubaan semula untuk kegagalan sementara; lalai `3` |
| `--timeout-ms <n>` | Tidak | Had masa satu permintaan dalam milisaat; lalai `180000` |
| `--output <pretty\|json>` | Tidak | Format output; lalai `pretty` |
| `--save-response <path>` | Tidak | Simpan hasil akhir sebagai fail JSON |
| `--list-channels` | Tidak | Hanya menyenaraikan saluran dan tidak memuat naik fail |

### Kunci Saluran

| Kunci saluran | Saluran |
| --- | --- |
| `telegram` / `tg` | Telegram |
| `discord` / `dc` | Discord |
| `cfr2` / `r2` | Cloudflare R2 |
| `s3` | S3 |
| `webdav` / `wd` | Saluran storan WebDAV |
| `github` / `gh` | GitHub Releases |
| `gitlab` / `gl` | GitLab Packages |
| `huggingface` / `hf` | Hugging Face |
| `onedrive` / `od` | OneDrive |
| `googledrive` / `google` / `gd` | Google Drive |
| `dropbox` / `db` | Dropbox |
| `yandex` / `yx` | Yandex Disk |
| `pcloud` / `pd` | pCloud |

### Had Saiz Muat Naik Satu Permintaan

Untuk muat naik satu permintaan, fail sebaiknya berada di bawah 100 MB. Saluran berikut mempunyai had tempatan yang jelas dalam skrip:

| Saluran | Had |
| --- | ---: |
| Telegram | 20 MiB |
| Discord | 10 MiB |
| S3 | 64 MiB |
| WebDAV | 64 MiB |
| GitHub Releases | 64 MiB |
| GitLab Packages | 64 MiB |

Jika saiz fail melebihi had, skrip memaparkan ralat tempatan sebelum menghantar permintaan. Saluran lain tidak diberi had tempatan tetap 100 MB; jika permintaan terlalu besar, ralat akan datang daripada Cloudflare atau platform destinasi.

## Muat Naik Berbahagi

Skrip muat naik berbahagi terlebih dahulu meminta pelayan menentukan destinasi muat naik menggunakan API Token, kemudian menjalankan aliran fail besar milik saluran yang dipilih. Pengguna tidak perlu menulis sendiri pembuatan sesi, penghantaran bahagian, penggabungan atau permintaan penyelesaian.

```powershell
node imgbed-token-chunk-upload.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --file "D:\test\video.zip" `
  --channel github `
  --folder "photos/2026" `
  --concurrency 3
```

### Parameter Muat Naik Berbahagi

| Parameter | Wajib | Penerangan |
| --- | --- | --- |
| `--base-url <url>` | Ya | Alamat tapak ImgBed |
| `--token <token>` | Ya | API Token. Anda juga boleh menggunakan pemboleh ubah persekitaran `IMGBED_API_TOKEN` |
| `--file <path>` | Ya | Laluan fail tempatan |
| `--channel <key>` | Ya | Saluran muat naik sebenar |
| `--folder <path>` | Tidak | Folder destinasi |
| `--name-type <type>` | Tidak | Kaedah penamaan; sepadan dengan `uploadNameType` pada pelayan, lalai `default` |
| `--channel-name <name>` | Tidak | Subsaluran atau akaun tertentu |
| `--concurrency <n>` | Tidak | Bilangan muat naik serentak; lalai `1`, maksimum `3` |
| `--retries <n>` | Tidak | Bilangan cubaan semula untuk kegagalan sementara; lalai `3` |
| `--timeout-ms <n>` | Tidak | Had masa setiap permintaan dalam milisaat; lalai `180000` |
| `--output <pretty\|json>` | Tidak | Format output; lalai `pretty` |
| `--save-response <path>` | Tidak | Simpan hasil akhir sebagai fail JSON |
| `--list-channels` | Tidak | Hanya menyenaraikan saluran dan tidak memuat naik fail |

### Laluan Muat Naik Berbahagi

| Kunci saluran | Laluan muat naik |
| --- | --- |
| `telegram` / `tg` | Sesi berbahagi sebenar melalui `/upload` |
| `discord` / `dc` | Sesi berbahagi sebenar melalui `/upload` |
| `cfr2` / `r2` | Sesi berbahagi sebenar melalui `/upload` |
| `github` / `gh` | Sesi berbahagi sebenar melalui `/upload` |
| `gitlab` / `gl` | Sesi berbahagi sebenar melalui `/upload` |
| `webdav` / `wd` | Sesi berbahagi sebenar melalui `/upload` |
| `s3` | Muat naik multipart S3 |
| `onedrive` / `od` | Sesi muat naik OneDrive |
| `googledrive` / `google` / `gd` | Muat naik Google Drive yang boleh disambung semula |
| `dropbox` / `db` | Sesi muat naik Dropbox |
| `yandex` / `yx` | Pautan muat naik langsung Yandex |
| `pcloud` / `pd` | Pautan muat naik pCloud |
| `huggingface` / `hf` | Muat naik Hugging Face LFS |

Dalam ujian, fail arkib atau fail termampat pada Yandex tidak stabil. Apabila menggunakan saluran Yandex, pilih fail bukan arkib.

## Hasil

Apabila muat naik berjaya, skrip memaparkan hasil seperti ini:

```text
success
src: /file/photos/2026/example.png
url: https://your-domain/file/photos/2026/example.png
fileId: photos/2026/example.png
```

| Medan | Penerangan |
| --- | --- |
| `src` | Laluan fail di dalam tapak |
| `url` | Pautan akses lengkap, sedia disimpan dalam skrip atau pangkalan data anda |
| `fileId` | ID fail untuk carian, pengurusan atau pencatatan seterusnya |
| `channelName` | Dalam muat naik berbahagi, boleh mengandungi subsaluran atau akaun yang benar-benar digunakan |

Dengan `--output json`, skrip memaparkan JSON lengkap supaya mudah diproses oleh program.

## Memanggil API Satu Permintaan Secara Terus

Tanpa skrip, API muat naik satu permintaan juga boleh dipanggil terus:

```text
POST https://your-domain/upload?uploadChannel=s3&uploadFolder=photos/2026&uploadNameType=default
Authorization: Bearer your API Token
Content-Type: multipart/form-data
```

Medan borang:

| Medan | Wajib | Penerangan |
| --- | --- | --- |
| `file` | Ya | Fail yang akan dimuat naik |

Parameter pertanyaan:

| Parameter | Wajib | Penerangan |
| --- | --- | --- |
| `uploadChannel` | Ya | Saluran muat naik sebenar |
| `uploadFolder` | Tidak | Folder destinasi |
| `uploadNameType` | Tidak | Kaedah penamaan |
| `channelName` | Tidak | Subsaluran atau akaun tertentu |

Jika berjaya, API mengembalikan hasil seperti ini:

```json
{
  "success": true,
  "src": "/file/photos/2026/example.png",
  "url": "https://your-domain/file/photos/2026/example.png",
  "fileId": "photos/2026/example.png"
}
```

## FAQ

### Muat Naik Fail Besar Gagal dengan Satu Permintaan

`/upload` satu permintaan menghantar keseluruhan fail sekali gus. Fail besar boleh tersekat oleh Cloudflare, memori Worker atau had platform destinasi. Untuk fail besar, gunakan skrip muat naik berbahagi.

### `--channel-name` Telah Diberikan tetapi Masih Gagal

Pastikan saluran yang dipilih mempunyai subsaluran dengan nama yang sama tepat dan subsaluran itu aktif. Jika `--channel-name` tidak diberikan, pelayan memilih akaun yang tersedia mengikut konfigurasi saluran.

### Hasil Hendak Digunakan oleh Program Lain

Gunakan `--output json` atau `--save-response result.json`. Program boleh membaca medan `url` daripada JSON untuk mendapatkan pautan lengkap.

### Muat Naik Arkib Gagal ke Yandex

Yandex tidak menyokong format arkib atau fail termampat dengan stabil. Ini mungkin berkaitan dasar platform. Untuk Yandex, gunakan fail bukan arkib.


