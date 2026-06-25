# Mengurus Konfigurasi dengan API Token

Pengurusan konfigurasi melalui API Token sesuai untuk skrip automasi, alat operasi dan panel kawalan luaran. API Token dengan kebenaran `manage` boleh membaca dan mengubah konfigurasi saluran muat naik, tetapan keselamatan, tetapan halaman, tetapan lain serta sebahagian hubungan federasi ringan tanpa membuka panel pentadbir.

Kebenaran pengurusan ini hanya membuka operasi ringan yang sesuai untuk skrip. Operasi berat yang memerlukan pengesahan dalam pelayar, kerja berperingkat dalam antara muka web atau pembersihan indeks federasi tetap perlu dilakukan daripada panel pentadbir dalam pelayar.

![Sunting API Token](../../image/Safety/apitoken/编辑管理权限api.png)

## Sebelum Bermula

Buka panel pentadbir, kemudian pergi ke:

```text
System Settings -> Security Settings -> API Token
```

Semasa mencipta atau mengedit API Token, aktifkan kebenaran pengurusan. Kebenaran ini boleh mengubah konfigurasi tapak, jadi berikan hanya kepada skrip atau pengguna yang dipercayai.

Semua tindakan tulis dalam tiga skrip pengurusan hanya memaparkan pratonton secara lalai. Selepas pratonton disemak, tambah `--apply` supaya perubahan benar-benar disimpan.

API Token juga boleh disimpan dalam pemboleh ubah persekitaran:

```powershell
$env:IMGBED_API_TOKEN="your API Token"
```

## Muat Turun Skrip Pengurusan

Dokumentasi ImgBed menyediakan tiga skrip Node.js:

| Skrip | Kegunaan |
| --- | --- |
| <a href="/tools/imgbed-token-upload-settings.mjs" download>skrip pengurusan tetapan muat naik</a> | Mengurus saluran muat naik, subsaluran dan pengimbangan beban |
| <a href="/tools/imgbed-token-site-settings.mjs" download>skrip pengurusan tetapan tapak</a> | Mengurus tetapan keselamatan, tetapan halaman dan tetapan lain |
| <a href="/tools/imgbed-token-federation.mjs" download>skrip pengurusan hubungan federasi</a> | Mengurus tindakan hubungan ringan, permintaan menyertai dan mesej |

Skrip memerlukan Node.js 18 atau versi yang lebih baharu.

### Parameter Umum

| Parameter | Wajib | Penerangan |
| --- | --- | --- |
| `--base-url <url>` | Ya | URL tapak ImgBed, contohnya `https://image.ai6.me` |
| `--token <token>` | Ya | API Token. Anda juga boleh menggunakan pemboleh ubah persekitaran `IMGBED_API_TOKEN` |
| `--retries <n>` | Tidak | Bilangan cubaan semula untuk kegagalan sementara; lalai `3` |
| `--timeout-ms <n>` | Tidak | Had masa setiap permintaan dalam milisaat; lalai `180000` |
| `--output <pretty\|json>` | Tidak | Format output; lalai `pretty`, gunakan `json` untuk integrasi program |
| `--save-response <path>` | Tidak | Simpan hasil akhir sebagai fail JSON |
| `--apply` | Tidak | Benar-benar menjalankan penulisan; tanpa ini hanya pratonton |
| `-h` / `--help` | Tidak | Papar bantuan skrip |

## Tetapan Muat Naik

Skrip tetapan muat naik boleh menyenaraikan, membaca, mencipta, mengedit dan memadam subsaluran. Skrip ini juga boleh menghidupkan atau mematikan pengimbangan beban pada saluran utama.

```powershell
node imgbed-token-upload-settings.mjs --base-url "https://your-domain" --token "your API Token" --list
```

### Parameter Tetapan Muat Naik

| Parameter | Penerangan |
| --- | --- |
| `--list` | Menyenaraikan kumpulan tetapan muat naik |
| `--get` | Membaca saluran utama atau subsaluran tertentu di bawahnya |
| `--upsert` | Mencipta atau mengedit subsaluran; tanpa `--apply` hanya pratonton |
| `--delete` | Memadam subsaluran; tanpa `--apply` hanya pratonton |
| `--load-balance <true\|false>` | Menghidupkan atau mematikan pengimbangan beban saluran utama |
| `--channel <key>` | Saluran muat naik utama, contohnya `s3`, `github`, `telegram` |
| `--channel-name <name>` | Nama subsaluran atau akaun |
| `--set key=value` | Menetapkan satu medan; boleh diulang dan menyokong laluan bertitik |
| `--patch-json <path>` | Menggabungkan beberapa medan daripada fail JSON |
| `--apply` | Menyimpan perubahan secara nyata |

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

### Contoh Tetapan Muat Naik

Menyenaraikan semua tetapan muat naik:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --list
```

Membaca konfigurasi saluran S3:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get `
  --channel s3
```

Membaca subsaluran tertentu di bawah S3:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get `
  --channel s3 `
  --channel-name "backup-s3"
```

Mencipta atau mengedit subsaluran WebDAV. Jalankan dahulu tanpa `--apply` untuk melihat pratonton:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --upsert `
  --channel webdav `
  --channel-name "backup-webdav" `
  --set enabled=false `
  --set remark="backup test"
```

Jika pratonton sudah betul, jalankan sekali lagi dengan `--apply`:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --upsert `
  --channel webdav `
  --channel-name "backup-webdav" `
  --set enabled=false `
  --set remark="backup test" `
  --apply
```

Memadam subsaluran:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --delete `
  --channel webdav `
  --channel-name "backup-webdav" `
  --apply
```

Menghidupkan pengimbangan beban S3:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --load-balance true `
  --channel s3 `
  --apply
```

Untuk perubahan beberapa medan yang lebih rumit, sediakan fail JSON kemudian gunakan `--patch-json`:

```json
{
  "enabled": true,
  "remark": "primary account"
}
```

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --upsert `
  --channel s3 `
  --channel-name "primary-s3" `
  --patch-json ".\s3-channel.json" `
  --apply
```

## Tetapan Tapak Lain

Skrip tetapan tapak mengurus tiga kawasan:

| Kawasan | Nilai `--area` | Penerangan |
| --- | --- | --- |
| Keselamatan | `security` | Pengesahan pengguna dan pentadbir, peranti log masuk, API Token, moderasi imej, had kekerapan pengguna, WebDAV |
| Halaman | `page` | Halaman global, halaman pengguna, halaman pentadbir dan kesan paparan |
| Lain-lain | `others` | API imej rawak, galeri awam, nod federasi tempatan, penandaan automatik, geolokasi IP, sandaran, OCR |

Mulakan dengan melihat kawasan, bahagian dan medan yang boleh diedit:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --list-sections
```

### Parameter Tetapan Tapak

| Parameter | Penerangan |
| --- | --- |
| `--list-sections` | Menyenaraikan kawasan, bahagian dan medan yang boleh diedit |
| `--get` | Membaca satu bahagian konfigurasi |
| `--area <security\|page\|others>` | Memilih kawasan konfigurasi |
| `--section <name>` | Memilih bahagian; gunakan nama mengikut output `--list-sections` |
| `--set key=value` | Menetapkan satu medan; boleh diulang |
| `--apply` | Menyimpan perubahan secara nyata |

Dalam kawasan `page`, `--set` menggunakan ID tetapan halaman, contohnya `starsEffect=true`. Dalam kawasan `security` dan `others`, gunakan nama medan dalam bahagian, contohnya `email=admin@example.com`.

### Contoh Tetapan Tapak

Membaca tetapan pemberitahuan kemas kini sistem:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get `
  --area security `
  --section systemUpdate
```

Mengubah e-mel pemberitahuan kemas kini. Jalankan dahulu tanpa `--apply`:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --area security `
  --section systemUpdate `
  --set email="admin@example.com"
```

Kemudian simpan dengan `--apply`:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --area security `
  --section systemUpdate `
  --set email="admin@example.com" `
  --apply
```

Mengubah kesan bintang pada halaman pentadbir:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --area page `
  --section adminSettings `
  --set starsEffect=true `
  --apply
```

Mengubah bahasa geolokasi IP:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --area others `
  --section ipGeolocation `
  --set language="en" `
  --apply
```

Medan biasa pada nod federasi tempatan, seperti status aktif, folder penyegerakan dan kod jemputan, boleh dibaca atau diubah. Pengesahan domain tidak dilakukan melalui API Token. Jika panel pentadbir memberitahu bahawa domain nod tempatan berbeza daripada domain akses semasa, selesaikan pengesahan dalam pelayar.

## Hubungan Federasi

Skrip federasi mengurus status nod tempatan, nod yang anda ikuti, nod yang mengikuti nod anda, mesej, permintaan menyertai, permohonan semula apabila tiada hubungan, penerimaan, penolakan dan tindakan hubungan ringan yang tidak memerlukan pembersihan indeks.

Penerbitan indeks, penarikan indeks, pemadaman indeks secara berperingkat dan pengesahan perubahan domain bergantung pada aliran penuh dalam pelayar. Skrip tidak mengendalikan operasi berat tersebut.

### Had Tindakan Ringan dan Berat

| Operasi | Sokongan skrip | Penerangan |
| --- | --- | --- |
| Melihat status nod tempatan dan senarai hubungan | Disokong | Hanya membaca buku hubungan |
| Membaca dan menghantar mesej | Disokong | Membaca atau menulis mesej hubungan |
| Memohon menyertai nod lain | Disokong | Menggunakan pautan jemputan |
| Memohon semula pada rekod tanpa hubungan | Disokong | Hanya untuk kad `outgoing` dengan `lastResult=none`; memerlukan kod jemputan 6 aksara |
| Membatalkan permintaan `outgoing` yang menunggu | Disokong | Hanya membatalkan permintaan yang masih menunggu |
| Menerima atau menolak permintaan `incoming` | Disokong | Memproses permintaan yang masuk ke nod anda |
| Memadam hubungan `incoming` yang telah diterima | Disokong | Mengubah buku hubungan masuk dan memaklumkan pihak lain |
| Memadam rekod akhir `incoming` | Disokong | Memadam rekod masuk yang sudah berstatus akhir |
| Membatalkan langganan `outgoing` yang telah diterima | Pelayar sahaja | Mungkin memerlukan pembersihan indeks federasi tempatan |
| Memadam rekod akhir `outgoing` | Pelayar sahaja | Mungkin perlu membersihkan indeks terlebih dahulu |
| Mengesahkan atau membatalkan perubahan domain | Pelayar sahaja | Memerlukan pengesahan domain semasa dan pengendalian hubungan indeks |
| Menerbitkan, menarik atau memadam indeks secara berperingkat | Pelayar sahaja | Merupakan kerja berperingkat dalam antara muka web |

### Parameter Hubungan Federasi

| Parameter | Penerangan |
| --- | --- |
| `--status` | Memaparkan status nod federasi tempatan serta hubungan `outgoing` dan `incoming` |
| `--list` | Menyenaraikan hubungan federasi |
| `--chat` | Membaca mesej tersimpan daripada satu hubungan |
| `--send-message` | Menghantar mesej kepada nod yang sudah mempunyai hubungan |
| `--join` | Memohon menyertai nod lain melalui pautan jemputan |
| `--reapply` | Memohon semula untuk hubungan tanpa rekod; memerlukan kod 6 aksara |
| `--accept` | Menerima permintaan `incoming` |
| `--deny` | Menolak permintaan `incoming` |
| `--cancel` | Membatalkan permintaan `outgoing` yang menunggu atau memadam hubungan `incoming` yang diterima |
| `--delete` | Memadam rekod akhir `incoming` |
| `--direction <outgoing\|incoming\|all>` | Arah hubungan; `outgoing` ialah nod yang anda ikuti, `incoming` ialah nod yang mengikuti nod anda |
| `--domain <url>` | Domain nod hubungan |
| `--invite-link <url>` | Pautan jemputan daripada nod lain |
| `--invite-code <code>` | Kod jemputan 6 aksara untuk permohonan semula |
| `--text <message>` | Kandungan mesej |
| `--apply` | Menyimpan perubahan secara nyata |

### Contoh Hubungan Federasi

Melihat status nod tempatan dan kedua-dua senarai hubungan:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --status
```

Hanya menyenaraikan nod yang anda ikuti:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --list `
  --direction outgoing
```

Hanya menyenaraikan nod yang mengikuti nod anda:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --list `
  --direction incoming
```

Memohon menyertai melalui pautan jemputan. Jalankan dahulu tanpa `--apply`:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --join `
  --invite-link "https://peer-domain/federation/invite/abcdef"
```

Selepas disemak, simpan:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --join `
  --invite-link "https://peer-domain/federation/invite/abcdef" `
  --apply
```

Memohon semula untuk rekod tanpa hubungan:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --reapply `
  --domain "https://peer-domain" `
  --invite-code "abc123" `
  --apply
```

Menerima permintaan `incoming`:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --accept `
  --domain "https://peer-domain" `
  --apply
```

Menolak permintaan `incoming`:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --deny `
  --domain "https://peer-domain" `
  --apply
```

Menghantar mesej kepada hubungan yang telah terbentuk:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --send-message `
  --direction outgoing `
  --domain "https://peer-domain" `
  --text "Hello, this is a test message." `
  --apply
```

Membatalkan permintaan `outgoing` yang menunggu:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --cancel `
  --direction outgoing `
  --domain "https://peer-domain" `
  --apply
```

Memadam hubungan `incoming` yang telah diterima:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --cancel `
  --direction incoming `
  --domain "https://peer-domain" `
  --apply
```

Memadam rekod akhir `incoming`:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --delete `
  --direction incoming `
  --domain "https://peer-domain" `
  --apply
```

Membatalkan langganan `outgoing` yang telah diterima dan memadam rekod `outgoing` mesti dilakukan daripada panel pentadbir dalam pelayar, kerana pembersihan indeks federasi tempatan mungkin perlu dibuat dahulu.

### Domain Tidak Sepadan

Jika domain yang disimpan pada nod tempatan berbeza daripada domain yang menunggu dalam hubungan, skrip terus mengembalikan ralat dan memaparkan `currentDomain` serta `pendingDomain`. Keadaan ini mesti diselesaikan dalam panel pentadbir melalui pelayar, kerana perubahan domain juga berkaitan dengan pembersihan dan pengesahan indeks keluar.

Jika permintaan menyertai mengembalikan `FEDERATION_NODE_DOMAIN_MISMATCH`, ini bermaksud domain dalam pautan jemputan tidak sepadan dengan domain yang disimpan pada nod tujuan. Respons mengandungi `currentOrigin` dan `detectedOrigin`. Gunakan domain yang telah disahkan oleh pihak lain, atau minta mereka mengesahkan domain melalui panel pentadbir dalam pelayar.

## FAQ

### Arahan Perubahan Dijalankan tetapi Tidak Berkuat Kuasa

Arahan tulis hanya memaparkan pratonton secara lalai. Selepas pratonton disemak, tambah `--apply`.

### Cara Mengetahui Medan yang Boleh Diubah

Untuk tetapan muat naik, jalankan `--get` dahulu dan lihat struktur subsaluran sedia ada. Untuk keselamatan, halaman dan tetapan lain, jalankan `--list-sections` untuk melihat kawasan, bahagian dan medan yang dibenarkan.

### Hasil Hendak Digunakan oleh Program Lain

Gunakan `--output json` atau `--save-response result.json`. Program boleh membaca fail JSON yang disimpan secara langsung.


