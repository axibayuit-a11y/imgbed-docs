# Melihat Daftar dan Memfilter dengan API Token

Skrip daftar dengan API Token ditujukan untuk skrip, pekerjaan otomatis, dan aplikasi pihak ketiga yang perlu membaca data ImgBed. Skrip ini hanya memakai izin `list`. Skrip tidak mengunggah berkas, tidak menghapus berkas, tidak mengubah konfigurasi, dan tidak memblokir atau mengizinkan unggahan dari IP mana pun.

![Edit API Token](../../image/Safety/apitoken/编辑列出权限api.png)

Kegunaan utama:

| Fitur | Keterangan |
| --- | --- |
| Daftar pengelolaan berkas | Membaca daftar berkas dari panel admin dan mendukung parameter filter lanjutan di pengelolaan berkas |
| Daftar pengelolaan pengguna | Membaca statistik unggahan pengguna/IP dan mendukung parameter filter di pengelolaan pengguna |
| Daftar kanal unggahan | Membaca kanal unggahan, subkanal, kapasitas, dan informasi penyeimbangan beban setelah data sensitif disamarkan |
| Tabel statistik folder | Membaca statistik folder dan informasi halaman folder |

## Persiapan

Buka panel admin:

```text
System Settings -> Security Settings -> API Token
```

Saat membuat atau mengedit API Token, pastikan Token ini mengizinkan daftar. Skrip ini hanya membutuhkan izin `list`.

API Token juga dapat disimpan dalam variabel lingkungan:

```powershell
$env:IMGBED_API_TOKEN="your API Token"
```

## Mengunduh Skrip

| Skrip | Kegunaan |
| --- | --- |
| <a href="/tools/imgbed-token-list.mjs" download>Unduh skrip daftar dan filter</a> | Daftar pengelolaan berkas, daftar pengelolaan pengguna, daftar kanal unggahan, dan tabel statistik folder |

Skrip membutuhkan Node.js 18 atau versi yang lebih baru.

## Parameter Umum

| Parameter | Wajib | Keterangan |
| --- | --- | --- |
| `--base-url <url>` | Ya | Alamat situs ImgBed, misalnya `https://image.ai6.me` |
| `--token <token>` | Ya | API Token; dapat diganti dengan variabel lingkungan `IMGBED_API_TOKEN` |
| `--retries <n>` | Tidak | Jumlah percobaan ulang saat gagal sementara; bawaan `3` |
| `--timeout-ms <n>` | Tidak | Batas waktu satu permintaan; bawaan `180000` |
| `--output <pretty\|json>` | Tidak | Bentuk keluaran; bawaan `pretty`; untuk diproses program, gunakan `json` |
| `--save-response <path>` | Tidak | Menyimpan hasil akhir sebagai berkas JSON |
| `-h` / `--help` | Tidak | Menampilkan bantuan skrip |

## Daftar Pengelolaan Berkas

Menampilkan berkas di pengelolaan berkas:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --count 10
```

Keluaran JSON:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --count 10 `
  --output json
```

Membaca jumlah saja berdasarkan filter saat ini:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --file-summary `
  --dir "photos/2026" `
  --recursive
```

### Parameter Pengelolaan Berkas

| Parameter | Keterangan |
| --- | --- |
| `--files` | Menampilkan daftar berkas |
| `--file-summary` | Hanya membaca statistik jumlah |
| `--start <n>` | Offset halaman |
| `--count <n>` | Jumlah catatan yang dikembalikan |
| `--dir <path>` | Folder yang ditentukan |
| `--recursive` | Menyertakan berkas di subfolder |
| `--search <text>` | Kata kunci pencarian |
| `--channel <key>` | Memfilter berdasarkan kanal unggahan utama, misalnya `github`, `s3`, atau `yandex` |
| `--channel-scope <primary\|backup\|all>` | Cakupan filter kanal: kanal utama, kanal cadangan, atau semua |
| `--channel-name-groups <value>` | Filter grup subkanal; diteruskan ke server sesuai format yang sudah ada |
| `--list-type <csv>` | Jenis daftar, biasanya `None,White,Block` |
| `--include-tags <csv>` | Harus memuat tag ini |
| `--exclude-tags <csv>` | Mengecualikan tag ini |
| `--time-start <ms>` | Awal waktu unggahan dalam cap waktu milidetik |
| `--time-end <ms>` | Akhir waktu unggahan dalam cap waktu milidetik |
| `--file-exts <csv>` | Hanya menyertakan ekstensi tertentu, misalnya `jpg,png,pdf` |
| `--exclude-file-exts <csv>` | Mengecualikan ekstensi tertentu |
| `--file-status-categories <csv>` | Kategori berkas: `image,audio,video,document,code,other` |
| `--upload-ip <ip>` | Memfilter berdasarkan awalan IP unggahan |
| `--age-ratings <csv>` | Peringkat usia: `none,all-ages,r12,r16,r18` |
| `--orientation <csv>` | Filter orientasi; diteruskan ke server dengan nilai yang sudah ada |
| `--read-source <csv>` | Filter sumber baca; diteruskan ke server dengan nilai yang sudah ada |
| `--access-status <normal\|blocked>` | Status akses publik |
| `--min-width <n>` | Lebar minimum |
| `--max-width <n>` | Lebar maksimum |
| `--min-height <n>` | Tinggi minimum |
| `--max-height <n>` | Tinggi maksimum |
| `--min-file-size <mb>` | Ukuran berkas minimum; memakai parameter MB yang sudah ada di server |
| `--max-file-size <mb>` | Ukuran berkas maksimum; memakai parameter MB yang sudah ada di server |

### Contoh Pengelolaan Berkas

Mencari PDF:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --search "pdf" `
  --file-status-categories "document" `
  --count 20
```

Memfilter berdasarkan IP unggahan dan kanal:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --upload-ip "103.62" `
  --channel yandex `
  --channel-scope primary
```

Menyimpan hasil lengkap:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --count 100 `
  --output json `
  --save-response ".\files.json"
```

## Daftar Pengelolaan Pengguna

Menampilkan statistik unggahan pengguna/IP:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --count 20
```

Mencari IP atau alamat:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --search "43.198.183.56"
```

Melihat rincian berkas yang diunggah dari IP tertentu:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --user-detail `
  --ip "43.198.183.56" `
  --count 20
```

Menampilkan IP yang diblokir dari unggahan:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --blocked-ips
```

### Parameter Pengelolaan Pengguna

| Parameter | Keterangan |
| --- | --- |
| `--users` | Menampilkan statistik unggahan pengguna/IP |
| `--user-detail` | Melihat rincian berkas yang diunggah dari IP tertentu |
| `--blocked-ips` | Menampilkan IP yang diblokir dari unggahan |
| `--ip <ip>` | Wajib untuk `--user-detail` |
| `--start <n>` | Offset halaman |
| `--count <n>` | Jumlah catatan yang dikembalikan |
| `--sort <value>` | Urutan: `timeDesc`, `timeAsc`, `countDesc`, `countAsc`, `totalSizeDesc`, `totalSizeAsc` |
| `--search <text>` | Mencari IP atau alamat |
| `--upload-status <allowed\|blocked>` | Apakah unggahan diizinkan |
| `--start-time <ms>` | Awal waktu statistik dalam cap waktu milidetik |
| `--end-time <ms>` | Akhir waktu statistik dalam cap waktu milidetik |
| `--file-status-categories <csv>` | Filter kategori berkas |
| `--age-ratings <csv>` | Filter peringkat usia |
| `--min-file-size <mb>` | Ukuran berkas minimum |
| `--max-file-size <mb>` | Ukuran berkas maksimum |
| `--list-type <csv>` | Jenis daftar, biasanya `None,White,Block` |
| `--access-status <normal\|blocked>` | Status akses publik |

### Contoh Pengelolaan Pengguna

Menampilkan pengguna yang diblokir dari unggahan:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --upload-status blocked
```

Mencari berdasarkan kata kunci alamat:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --search "Hong Kong"
```

Mengurutkan berdasarkan jumlah unggahan:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --sort countDesc `
  --count 50
```

## Daftar Kanal Unggahan

Menampilkan konfigurasi kanal unggahan yang sudah disamarkan:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --channels
```

Data yang dikembalikan mencakup:

| Bidang | Keterangan |
| --- | --- |
| `type` | Jenis kanal unggahan utama, misalnya `github`, `s3`, atau `yandex` |
| `name` | Nama subkanal atau akun |
| `enabled` | Apakah aktif |
| `load_balance_enabled` | Apakah penyeimbangan beban aktif untuk jenis kanal ini |
| `quota_enabled` | Apakah pemeriksaan kapasitas aktif |
| `quota_limit_bytes` | Batas kapasitas |
| `quota_used_bytes` | Kapasitas yang sudah dipakai |
| `quota_checked_at` | Waktu pemeriksaan kapasitas |
| `tag_json` | Tag tidak sensitif, seperti repositori publik atau repositori privat |
| `created_at` / `updated_at` | Waktu dibuat dan diperbarui |

Antarmuka ini tidak mengembalikan kunci rahasia, token penyegaran, token sementara, kata sandi, atau konfigurasi sensitif lainnya.

## Tabel Statistik Folder

Menampilkan statistik folder:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --directories `
  --limit 20
```

Menampilkan jalur folder lengkap dan mencari berdasarkan awalan:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --directories `
  --scope full `
  --search-prefix "test" `
  --include-parents `
  --limit 10
```

### Parameter Statistik Folder

| Parameter | Keterangan |
| --- | --- |
| `--directories` | Menampilkan tabel statistik folder |
| `--dir <path>` | Folder awal untuk daftar |
| `--scope <direct\|full>` | `direct` hanya menampilkan folder langsung, `full` menampilkan jalur lengkap |
| `--search-prefix <path>` | Mencari berdasarkan awalan folder |
| `--include-parents` | Pada mode `full`, menyertakan folder induk juga |
| `--limit <n>` | Jumlah catatan yang dikembalikan; maksimum server `100` |
| `--cursor <path>` | Kursor halaman berikutnya |

## Bentuk Keluaran

Keluaran bawaan `pretty` cocok dibaca manusia:

```powershell
node imgbed-token-list.mjs --base-url "https://your-domain" --token "your API Token" --users --count 5
```

Jika ingin diproses program lain, gunakan `--output json`:

```powershell
node imgbed-token-list.mjs --base-url "https://your-domain" --token "your API Token" --users --count 5 --output json
```

Hasil lengkap juga dapat disimpan:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --count 5 `
  --output json `
  --save-response ".\users.json"
```

## Pertanyaan Umum

### Apakah skrip ini mengubah data?

Tidak. Skrip ini hanya memanggil antarmuka baca. Skrip tidak mengunggah, menghapus, memindahkan, mengedit konfigurasi, atau memblokir maupun mengizinkan unggahan dari IP mana pun.

### Mengapa izin `list` diperlukan?

Daftar pengelolaan berkas, daftar pengelolaan pengguna, daftar kanal yang sudah disamarkan, dan statistik folder semuanya adalah kemampuan baca, jadi API Token hanya membutuhkan izin `list`.

### Bagaimana cara memastikan semua parameter yang tersedia?

Jalankan:

```powershell
node imgbed-token-list.mjs --help
```

Skrip akan menampilkan semua tindakan dan parameter.


