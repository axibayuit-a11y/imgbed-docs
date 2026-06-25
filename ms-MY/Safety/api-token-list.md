# Senarai dan penapisan dengan API Token

Skrip senarai melalui API Token sesuai untuk skrip, automasi dan aplikasi pihak ketiga yang perlu membaca data ImgBed. Skrip ini hanya menggunakan kebenaran `list`; ia tidak memuat naik fail, memadam fail, mengubah konfigurasi, atau menyekat dan membenarkan muat naik daripada IP tertentu.

Kegunaan utama:

| Fungsi | Maksud |
| --- | --- |
| Senarai pengurusan fail | Membaca senarai fail dalam panel pentadbir dan menyokong parameter penapisan lanjutan pengurusan fail |
| Senarai pengurusan pengguna | Membaca statistik muat naik pengguna/IP dan menyokong parameter penapisan pengurusan pengguna |
| Senarai saluran muat naik | Membaca saluran muat naik, subsaluran, kapasiti dan maklumat pengimbangan beban yang sudah dinyahpeka |
| Jadual statistik direktori | Membaca statistik direktori dan maklumat halaman direktori |

## Persediaan

Buka panel pentadbir:

```text
System Settings -> Security Settings -> API Token
```

Semasa mencipta atau mengedit API Token, pastikan Token tersebut dibenarkan untuk menyenaraikan data. Skrip ini hanya memerlukan kebenaran `list`.

Token juga boleh diletakkan dalam pemboleh ubah persekitaran:

```powershell
$env:IMGBED_API_TOKEN="your API Token"
```

## Muat turun skrip

| Skrip | Kegunaan |
| --- | --- |
| <a href="/tools/imgbed-token-list.mjs" download>Muat turun skrip senarai dan penapisan</a> | Senarai pengurusan fail, senarai pengurusan pengguna, senarai saluran muat naik, jadual statistik direktori |

Skrip ini memerlukan Node.js 18 atau lebih baharu.

## Parameter umum

| Parameter | Wajib | Maksud |
| --- | --- | --- |
| `--base-url <url>` | Ya | Alamat laman ImgBed, contohnya `https://image.ai6.me` |
| `--token <token>` | Ya | API Token; boleh diganti dengan `IMGBED_API_TOKEN` |
| `--retries <n>` | Tidak | Cubaan semula untuk kegagalan sementara; lalai `3` |
| `--timeout-ms <n>` | Tidak | Had masa satu permintaan; lalai `180000` |
| `--output <pretty\|json>` | Tidak | Format output; lalai `pretty`. Untuk panggilan program, gunakan `json` |
| `--save-response <path>` | Tidak | Simpan keputusan akhir sebagai JSON |
| `-h` / `--help` | Tidak | Paparkan bantuan skrip |

## Senarai pengurusan fail

Senaraikan fail dalam pengurusan fail:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --count 10
```

Keluarkan JSON:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --count 10 `
  --output json
```

Baca jumlah sahaja mengikut penapis semasa:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --file-summary `
  --dir "photos/2026" `
  --recursive
```

### Parameter pengurusan fail

| Parameter | Maksud |
| --- | --- |
| `--files` | Senaraikan fail |
| `--file-summary` | Baca statistik jumlah sahaja |
| `--start <n>` | Ofset halaman |
| `--count <n>` | Jumlah data yang dipulangkan |
| `--dir <path>` | Tentukan direktori |
| `--recursive` | Sertakan fail dalam subdirektori |
| `--search <text>` | Cari kata kunci |
| `--channel <key>` | Tapis mengikut saluran muat naik utama, contohnya `github`, `s3`, `yandex` |
| `--channel-scope <primary\|backup\|all>` | Skop penapisan saluran: saluran utama, saluran sandaran, semua |
| `--channel-name-groups <value>` | Penapis kumpulan subsaluran; dihantar terus kepada parameter sedia ada di bahagian pelayan |
| `--list-type <csv>` | Jenis senarai; nilai biasa ialah `None,White,Block` |
| `--include-tags <csv>` | Tag yang mesti disertakan |
| `--exclude-tags <csv>` | Tag yang dikecualikan |
| `--time-start <ms>` | Masa mula muat naik, cap masa milisaat |
| `--time-end <ms>` | Masa tamat muat naik, cap masa milisaat |
| `--file-exts <csv>` | Hanya sertakan sambungan tertentu, contohnya `jpg,png,pdf` |
| `--exclude-file-exts <csv>` | Kecualikan sambungan tertentu |
| `--file-status-categories <csv>` | Kategori fail: `image,audio,video,document,code,other` |
| `--upload-ip <ip>` | Tapis mengikut awalan IP muat naik |
| `--age-ratings <csv>` | Penarafan umur: `none,all-ages,r12,r16,r18` |
| `--orientation <csv>` | Penapis orientasi; dihantar terus kepada nilai sedia ada di bahagian pelayan |
| `--read-source <csv>` | Penapis sumber bacaan; dihantar terus kepada nilai sedia ada di bahagian pelayan |
| `--access-status <normal\|blocked>` | Status akses awam |
| `--min-width <n>` | Lebar minimum |
| `--max-width <n>` | Lebar maksimum |
| `--min-height <n>` | Tinggi minimum |
| `--max-height <n>` | Tinggi maksimum |
| `--min-file-size <mb>` | Saiz fail minimum; unit mengikut parameter MB sedia ada di bahagian pelayan |
| `--max-file-size <mb>` | Saiz fail maksimum; unit mengikut parameter MB sedia ada di bahagian pelayan |

### Contoh pengurusan fail

Cari PDF:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --search "pdf" `
  --file-status-categories "document" `
  --count 20
```

Tapis mengikut IP muat naik dan saluran:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --upload-ip "103.62" `
  --channel yandex `
  --channel-scope primary
```

Simpan keputusan penuh:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --count 100 `
  --output json `
  --save-response ".\files.json"
```

## Senarai pengurusan pengguna

Senaraikan statistik muat naik pengguna/IP:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --count 20
```

Cari IP atau lokasi tertentu:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --search "43.198.183.56"
```

Lihat butiran fail yang dimuat naik oleh IP tertentu:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --user-detail `
  --ip "43.198.183.56" `
  --count 20
```

Senaraikan IP yang dilarang memuat naik:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --blocked-ips
```

### Parameter pengurusan pengguna

| Parameter | Maksud |
| --- | --- |
| `--users` | Senaraikan statistik muat naik pengguna/IP |
| `--user-detail` | Lihat butiran fail yang dimuat naik oleh IP tertentu |
| `--blocked-ips` | Senaraikan IP yang dilarang memuat naik |
| `--ip <ip>` | Wajib untuk `--user-detail` |
| `--start <n>` | Ofset halaman |
| `--count <n>` | Jumlah data yang dipulangkan |
| `--sort <value>` | Susunan: `timeDesc`, `timeAsc`, `countDesc`, `countAsc`, `totalSizeDesc`, `totalSizeAsc` |
| `--search <text>` | Cari IP atau lokasi |
| `--upload-status <allowed\|blocked>` | Sama ada muat naik dibenarkan |
| `--start-time <ms>` | Masa mula statistik, cap masa milisaat |
| `--end-time <ms>` | Masa tamat statistik, cap masa milisaat |
| `--file-status-categories <csv>` | Penapis kategori fail |
| `--age-ratings <csv>` | Penapis penarafan umur |
| `--min-file-size <mb>` | Saiz fail minimum |
| `--max-file-size <mb>` | Saiz fail maksimum |
| `--list-type <csv>` | Jenis senarai; nilai biasa ialah `None,White,Block` |
| `--access-status <normal\|blocked>` | Status akses awam |

### Contoh pengurusan pengguna

Senaraikan pengguna yang dilarang memuat naik:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --upload-status blocked
```

Cari mengikut kata kunci lokasi:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --search "Hong Kong"
```

Susun mengikut jumlah muat naik:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --sort countDesc `
  --count 50
```

## Senarai saluran muat naik

Senaraikan konfigurasi saluran muat naik yang sudah dinyahpeka:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --channels
```

Kandungan yang dipulangkan:

| Medan | Maksud |
| --- | --- |
| `type` | Saluran muat naik utama, contohnya `github`, `s3`, `yandex` |
| `name` | Nama subsaluran atau akaun |
| `enabled` | Sama ada diaktifkan |
| `load_balance_enabled` | Sama ada saluran utama ini menggunakan pengimbangan beban |
| `quota_enabled` | Sama ada semakan kapasiti diaktifkan |
| `quota_limit_bytes` | Had kapasiti |
| `quota_used_bytes` | Kapasiti yang sudah digunakan |
| `quota_checked_at` | Masa semakan kapasiti |
| `tag_json` | Tag tidak sensitif, seperti repositori awam atau repositori peribadi |
| `created_at` / `updated_at` | Masa penciptaan dan kemas kini |

API ini tidak memulangkan kunci rahsia, token penyegar, token sementara, kata laluan atau konfigurasi sensitif lain.

## Jadual statistik direktori

Senaraikan statistik direktori:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --directories `
  --limit 20
```

Senaraikan laluan direktori penuh dan cari mengikut awalan:

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

### Parameter statistik direktori

| Parameter | Maksud |
| --- | --- |
| `--directories` | Senaraikan jadual statistik direktori |
| `--dir <path>` | Direktori mula untuk senarai |
| `--scope <direct\|full>` | `direct` hanya menyenaraikan direktori terus di bawahnya; `full` menyenaraikan laluan penuh |
| `--search-prefix <path>` | Cari mengikut awalan direktori |
| `--include-parents` | Dalam mod `full`, sertakan juga direktori induk |
| `--limit <n>` | Jumlah data yang dipulangkan; had maksimum pelayan ialah `100` |
| `--cursor <path>` | Kursor halaman seterusnya |

## Format output

Output lalai `pretty` sesuai untuk dibaca oleh manusia:

```powershell
node imgbed-token-list.mjs --base-url "https://your-domain" --token "your API Token" --users --count 5
```

Jika keputusan perlu diproses oleh program lain, gunakan `--output json`:

```powershell
node imgbed-token-list.mjs --base-url "https://your-domain" --token "your API Token" --users --count 5 --output json
```

Keputusan penuh juga boleh disimpan:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --count 5 `
  --output json `
  --save-response ".\users.json"
```

## Soalan lazim

### Adakah skrip ini mengubah data?

Tidak. Skrip ini hanya memanggil API bacaan. Ia tidak memuat naik, memadam, memindahkan, mengedit konfigurasi, atau menyekat dan membenarkan muat naik daripada IP tertentu.

### Mengapa kebenaran `list` diperlukan?

Senarai pengurusan fail, senarai pengurusan pengguna, senarai saluran yang dinyahpeka dan statistik direktori semuanya ialah keupayaan bacaan, jadi hanya kebenaran `list` pada API Token diperlukan.

### Bagaimana hendak menyemak parameter yang tersedia?

Jalankan:

```powershell
node imgbed-token-list.mjs --help
```

Skrip akan memaparkan semua tindakan dan parameter.


