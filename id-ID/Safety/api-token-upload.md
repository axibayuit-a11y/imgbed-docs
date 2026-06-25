# Mengunggah Berkas dengan API Token

Unggahan melalui API Token ditujukan untuk skrip, pekerjaan otomatis, dan aplikasi pihak ketiga. Anda tidak perlu membuka antarmuka web ImgBed; cukup berikan alamat situs, API Token, jalur berkas lokal, dan kanal unggahan yang nyata. Setelah unggahan berhasil, skrip akan mengembalikan tautan berkas.

![Edit API Token](../../image/Safety/apitoken/编辑api%20token.png)

## Persiapan

Buka panel admin:

```text
System Settings -> Security Settings -> API Token
```

Saat membuat atau mengedit API Token, pastikan izin unggah aktif dan kanal unggahan bawaan adalah kanal nyata. Unggahan API Token tidak memakai pembagian cerdas, jadi jangan kirim `__smart__` dari skrip. Gunakan kunci kanal nyata seperti `s3`, `github`, atau `telegram`.

## Mengunduh Skrip Unggahan

Dokumentasi ImgBed menyediakan dua skrip Node.js:

| Skrip | Kegunaan |
| --- | --- |
| <a href="/tools/imgbed-token-single-upload.mjs" download>Unduh skrip unggahan satu permintaan</a> | Memanggil `/upload` satu kali saja; cocok untuk berkas kecil dan uji koneksi antarmuka |
| <a href="/tools/imgbed-token-chunk-upload.mjs" download>Unduh skrip unggahan bertahap</a> | Memakai unggahan bertahap, unggahan langsung, atau sesi platform sesuai kanal; cocok untuk berkas besar |

Skrip membutuhkan Node.js 18 atau versi yang lebih baru.

## Melihat Kanal yang Tersedia

Kedua skrip dapat menampilkan kanal unggahan yang tersedia untuk API Token saat ini:

```powershell
node imgbed-token-single-upload.mjs --base-url "https://your-domain" --token "your API Token" --list-channels
node imgbed-token-chunk-upload.mjs --base-url "https://your-domain" --token "your API Token" --list-channels
```

Pada mode ini, `--file` dan `--channel` tidak diperlukan. Hasilnya berisi kanal bawaan, kunci kanal utama, nama subkanal, dan status penyeimbangan beban. Kunci rahasia, token penyegaran, dan konfigurasi sensitif tidak dikembalikan.

## Memilih Cara Unggah

| Cara | Kapan dipakai | Perilaku |
| --- | --- | --- |
| Unggahan satu permintaan | Berkas kecil, skrip sederhana, uji antarmuka | Mengirim seluruh berkas ke `/upload` dalam satu permintaan |
| Unggahan bertahap | Berkas besar atau berkas yang rawan melewati batas waktu | Memakai bagian, unggahan langsung, atau sesi platform sesuai kanal |

Untuk berkas besar, gunakan skrip unggahan bertahap terlebih dahulu. Unggahan satu permintaan dipengaruhi batas ukuran permintaan Cloudflare, memori Worker, dan batas platform tujuan.

## Unggahan Satu Permintaan

Skrip ini mengirim seluruh berkas ke `/upload` dalam satu permintaan:

```powershell
node imgbed-token-single-upload.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --file "D:\test\image.png" `
  --channel s3 `
  --folder "photos/2026"
```

API Token juga dapat disimpan dalam variabel lingkungan:

```powershell
$env:IMGBED_API_TOKEN="your API Token"
node imgbed-token-single-upload.mjs --base-url "https://your-domain" --file "D:\test\image.png" --channel s3
```

### Parameter Unggahan Satu Permintaan

| Parameter | Wajib | Keterangan |
| --- | --- | --- |
| `--base-url <url>` | Ya | Alamat situs ImgBed, misalnya `https://image.ai6.me` |
| `--token <token>` | Ya | API Token; dapat diganti dengan variabel lingkungan `IMGBED_API_TOKEN` |
| `--file <path>` | Ya | Jalur berkas lokal |
| `--channel <key>` | Ya | Kanal unggahan nyata |
| `--folder <path>` | Tidak | Folder tujuan, misalnya `photos/2026` atau `/user/` |
| `--name-type <type>` | Tidak | Cara penamaan; sesuai dengan `uploadNameType` di sisi server, bawaan `default` |
| `--channel-name <name>` | Tidak | Memilih subkanal atau akun tertentu; bila kosong, server memilih sesuai konfigurasi kanal |
| `--retries <n>` | Tidak | Jumlah percobaan ulang saat gagal sementara; bawaan `3` |
| `--timeout-ms <n>` | Tidak | Batas waktu satu permintaan dalam milidetik; bawaan `180000` |
| `--output <pretty\|json>` | Tidak | Bentuk keluaran; bawaan `pretty` |
| `--save-response <path>` | Tidak | Menyimpan hasil akhir sebagai berkas JSON |
| `--list-channels` | Tidak | Hanya menampilkan kanal dan tidak mengunggah berkas |

### Kunci Kanal

| Kunci kanal | Kanal |
| --- | --- |
| `telegram` / `tg` | Telegram |
| `discord` / `dc` | Discord |
| `cfr2` / `r2` | Cloudflare R2 |
| `s3` | S3 |
| `webdav` / `wd` | Kanal penyimpanan WebDAV |
| `github` / `gh` | GitHub Releases |
| `gitlab` / `gl` | GitLab Packages |
| `huggingface` / `hf` | Hugging Face |
| `onedrive` / `od` | OneDrive |
| `googledrive` / `google` / `gd` | Google Drive |
| `dropbox` / `db` | Dropbox |
| `yandex` / `yx` | Yandex Disk |
| `pcloud` / `pd` | pCloud |

### Batas Ukuran Unggahan Satu Permintaan

Untuk unggahan satu permintaan, sebaiknya berkas berada di bawah 100 MB. Kanal berikut memiliki batas lokal yang jelas di skrip:

| Kanal | Batas |
| --- | ---: |
| Telegram | 20 MiB |
| Discord | 10 MiB |
| S3 | 64 MiB |
| WebDAV | 64 MiB |
| GitHub Releases | 64 MiB |
| GitLab Packages | 64 MiB |

Jika ukuran berkas melewati batas, skrip menampilkan galat lokal sebelum mengirim permintaan. Kanal lain tidak diberi batas lokal tetap 100 MB; jika permintaan terlalu besar, galat akan datang dari Cloudflare atau platform tujuan.

## Unggahan Bertahap

Skrip unggahan bertahap terlebih dahulu meminta server menentukan tujuan unggahan memakai API Token, lalu menjalankan alur berkas besar milik kanal yang dipilih. Pengguna tidak perlu menulis sendiri pembuatan sesi, pengiriman bagian, penggabungan, atau permintaan penyelesaian.

```powershell
node imgbed-token-chunk-upload.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --file "D:\test\video.zip" `
  --channel github `
  --folder "photos/2026" `
  --concurrency 3
```

### Parameter Unggahan Bertahap

| Parameter | Wajib | Keterangan |
| --- | --- | --- |
| `--base-url <url>` | Ya | Alamat situs ImgBed |
| `--token <token>` | Ya | API Token; dapat diganti dengan variabel lingkungan `IMGBED_API_TOKEN` |
| `--file <path>` | Ya | Jalur berkas lokal |
| `--channel <key>` | Ya | Kanal unggahan nyata |
| `--folder <path>` | Tidak | Folder tujuan |
| `--name-type <type>` | Tidak | Cara penamaan; sesuai dengan `uploadNameType` di sisi server, bawaan `default` |
| `--channel-name <name>` | Tidak | Subkanal atau akun tertentu |
| `--concurrency <n>` | Tidak | Jumlah unggahan serentak; bawaan `1`, maksimum `3` |
| `--retries <n>` | Tidak | Jumlah percobaan ulang saat gagal sementara; bawaan `3` |
| `--timeout-ms <n>` | Tidak | Batas waktu tiap permintaan dalam milidetik; bawaan `180000` |
| `--output <pretty\|json>` | Tidak | Bentuk keluaran; bawaan `pretty` |
| `--save-response <path>` | Tidak | Menyimpan hasil akhir sebagai berkas JSON |
| `--list-channels` | Tidak | Hanya menampilkan kanal dan tidak mengunggah berkas |

### Jalur Unggahan Bertahap

| Kunci kanal | Jalur unggahan |
| --- | --- |
| `telegram` / `tg` | Sesi bertahap nyata melalui `/upload` |
| `discord` / `dc` | Sesi bertahap nyata melalui `/upload` |
| `cfr2` / `r2` | Sesi bertahap nyata melalui `/upload` |
| `github` / `gh` | Sesi bertahap nyata melalui `/upload` |
| `gitlab` / `gl` | Sesi bertahap nyata melalui `/upload` |
| `webdav` / `wd` | Sesi bertahap nyata melalui `/upload` |
| `s3` | Unggahan multipart S3 |
| `onedrive` / `od` | Sesi unggahan OneDrive |
| `googledrive` / `google` / `gd` | Unggahan Google Drive yang dapat dilanjutkan |
| `dropbox` / `db` | Sesi unggahan Dropbox |
| `yandex` / `yx` | Tautan unggahan langsung Yandex |
| `pcloud` / `pd` | Tautan unggahan pCloud |
| `huggingface` / `hf` | Unggahan Hugging Face LFS |

Dalam pengujian, berkas arsip atau berkas terkompresi di Yandex tidak stabil. Saat memakai kanal Yandex, pilih berkas nonarsip.

## Hasil

Saat unggahan berhasil, skrip menampilkan hasil seperti ini:

```text
success
src: /file/photos/2026/example.png
url: https://your-domain/file/photos/2026/example.png
fileId: photos/2026/example.png
```

| Kolom | Keterangan |
| --- | --- |
| `src` | Jalur berkas di dalam situs |
| `url` | Tautan akses lengkap, siap disimpan di skrip atau basis data Anda |
| `fileId` | ID berkas untuk pencarian, pengelolaan, atau pencatatan berikutnya |
| `channelName` | Pada unggahan bertahap, dapat berisi subkanal atau akun yang benar-benar dipakai |

Dengan `--output json`, skrip menampilkan JSON lengkap agar mudah diproses program.

## Memanggil Antarmuka Satu Permintaan Secara Langsung

Tanpa skrip, antarmuka unggahan satu permintaan juga dapat dipanggil langsung:

```text
POST https://your-domain/upload?uploadChannel=s3&uploadFolder=photos/2026&uploadNameType=default
Authorization: Bearer your API Token
Content-Type: multipart/form-data
```

Kolom formulir:

| Kolom | Wajib | Keterangan |
| --- | --- | --- |
| `file` | Ya | Berkas yang akan diunggah |

Parameter kueri:

| Parameter | Wajib | Keterangan |
| --- | --- | --- |
| `uploadChannel` | Ya | Kanal unggahan nyata |
| `uploadFolder` | Tidak | Folder tujuan |
| `uploadNameType` | Tidak | Cara penamaan |
| `channelName` | Tidak | Subkanal atau akun tertentu |

Jika berhasil, antarmuka mengembalikan hasil seperti ini:

```json
{
  "success": true,
  "src": "/file/photos/2026/example.png",
  "url": "https://your-domain/file/photos/2026/example.png",
  "fileId": "photos/2026/example.png"
}
```

## Tanya Jawab

### Berkas besar gagal diunggah dengan satu permintaan

`/upload` satu permintaan mengirim seluruh berkas sekaligus. Berkas besar dapat tertahan oleh Cloudflare, memori Worker, atau batas platform tujuan. Untuk berkas besar, gunakan skrip unggahan bertahap.

### `--channel-name` sudah diberikan tetapi masih gagal

Pastikan kanal yang dipilih memiliki subkanal dengan nama yang sama persis dan subkanal itu aktif. Jika `--channel-name` tidak diberikan, server memilih akun yang tersedia sesuai konfigurasi kanal.

### Hasil ingin dipakai oleh program lain

Gunakan `--output json` atau `--save-response result.json`. Program dapat membaca kolom `url` dari JSON untuk mendapatkan tautan lengkap.

### Arsip gagal diunggah ke Yandex

Yandex tidak mendukung format arsip atau berkas terkompresi secara andal. Hal ini mungkin terkait kebijakan platform. Untuk Yandex, gunakan berkas nonarsip.

