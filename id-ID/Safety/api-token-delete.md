# Menghapus Berkas dengan API Token

Penghapusan berkas melalui API Token ditujukan untuk skrip, pekerjaan otomatis, dan aplikasi pihak ketiga. Anda tidak perlu membuka panel admin; cukup berikan alamat situs, API Token, dan ID berkas yang jelas untuk menghapus satu atau beberapa berkas dari ImgBed.

Penghapusan adalah operasi tulis. Setelah perintah dijalankan, data benar-benar dihapus. Sebaiknya periksa dahulu nilai `fileId` yang akan dihapus dengan `imgbed-token-list.mjs`, lalu kirim ID tersebut ke skrip penghapusan.

![Edit API Token](../../image/Safety/apitoken/编辑api%20token.png)

## Persiapan

Buka panel admin:

```text
System Settings -> Security Settings -> API Token
```

Saat membuat atau mengedit API Token, pastikan Token ini mengizinkan penghapusan. Skrip ini hanya membutuhkan izin `delete`.

API Token juga dapat disimpan dalam variabel lingkungan:

```powershell
$env:IMGBED_API_TOKEN="your API Token"
```

## Mengunduh Skrip

| Skrip | Kegunaan |
| --- | --- |
| <a href="/tools/imgbed-token-delete.mjs" download>Unduh skrip penghapus berkas</a> | Menghapus satu atau beberapa ID berkas yang ditentukan secara jelas |

Skrip membutuhkan Node.js 18 atau versi yang lebih baru.

## Perilaku API Penghapusan

Skrip penghapusan memanggil antarmuka penghapusan di sisi server:

```text
POST /api/manage/delete/batch
```

Permintaan harus membawa API Token:

```text
Authorization: Bearer <token>
```

Contoh isi permintaan:

```json
{
  "fileIds": ["photos/2026/a.txt"],
  "deleteStrictness": "strict"
}
```

Jika `fileIds` hanya berisi satu berkas, operasi ini menghapus satu berkas. Jika berisi beberapa berkas, operasi ini menjadi penghapusan batch. Server memproses maksimal 15 berkas dalam satu permintaan, dan skrip akan otomatis membagi pekerjaan menjadi beberapa permintaan sesuai `--batch-size`.

Antarmuka ini mengembalikan aliran kemajuan NDJSON. Peristiwa umum mencakup `batch_start`, `file_step`, `file_done`, `batch_complete`, dan `batch_error`. Skrip membaca peristiwa ini lalu merangkumnya menjadi hasil yang mudah dibaca atau hasil JSON.

Setelah penghapusan berhasil, server otomatis menangani indeks berkas, statistik folder, statistik kapasitas, dan pembersihan tembolok.

## Parameter Skrip Penghapusan

| Parameter | Wajib | Keterangan |
| --- | --- | --- |
| `--base-url <url>` | Ya | Alamat situs ImgBed, misalnya `https://image.ai6.me` |
| `--token <token>` | Ya | API Token; dapat diganti dengan variabel lingkungan `IMGBED_API_TOKEN` |
| `--file-id <id>` | Ya | ID berkas yang akan dihapus; dapat diberikan beberapa kali |
| `--strictness <strict\|soft>` | Tidak | Ketegasan penghapusan; bawaan `strict` |
| `--batch-size <n>` | Tidak | Jumlah berkas yang dihapus per permintaan; bawaan `15`, maksimum `15` |
| `--retries <n>` | Tidak | Jumlah percobaan ulang saat gagal sementara; bawaan `3` |
| `--timeout-ms <n>` | Tidak | Batas waktu satu permintaan; bawaan `180000` |
| `--output <pretty\|json>` | Tidak | Bentuk keluaran; bawaan `pretty` |
| `--save-response <path>` | Tidak | Menyimpan hasil akhir sebagai berkas JSON |
| `-h` / `--help` | Tidak | Menampilkan bantuan skrip |

Skrip ini hanya menghapus nilai `--file-id` yang Anda berikan secara jelas. Skrip tidak melakukan pencocokan samar, tidak mengosongkan folder secara massal, dan tidak membaca ID yang akan dihapus dari daftar dipisahkan koma atau dari berkas lokal.

## Penghapusan Ketat dan Penghapusan Lunak

| Mode | Keterangan |
| --- | --- |
| `strict` | Mode bawaan. Jika penghapusan di penyimpanan jarak jauh gagal, catatan ImgBed tetap disimpan agar dapat dicoba ulang atau diperiksa |
| `soft` | Jika penghapusan di penyimpanan jarak jauh gagal, catatan ImgBed tetap dibersihkan dan hasilnya mengembalikan peringatan |

Jika Anda ingin operasi dianggap berhasil hanya saat berkas jarak jauh benar-benar terhapus, gunakan mode bawaan `strict`. Jika suatu platform jarak jauh tidak lagi dapat menghapus berkas dan Anda hanya ingin membersihkan catatan ImgBed, gunakan `soft`.

## Contoh Penggunaan

Menghapus satu berkas:

```powershell
node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --file-id "photos/2026/a.txt"
```

Menggunakan API Token dari variabel lingkungan:

```powershell
$env:IMGBED_API_TOKEN="your API Token"

node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --file-id "photos/2026/a.txt"
```

Menghapus beberapa berkas:

```powershell
node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --file-id "photos/2026/a.txt" `
  --file-id "photos/2026/b.txt" `
  --file-id "photos/2026/c.txt"
```

Membersihkan catatan ImgBed meskipun penghapusan di penyimpanan jarak jauh gagal:

```powershell
node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --file-id "photos/2026/a.txt" `
  --strictness soft
```

Mengeluarkan JSON dan menyimpan hasil:

```powershell
node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --file-id "photos/2026/a.txt" `
  --output json `
  --save-response ".\delete-result.json"
```

Membatasi setiap permintaan untuk menghapus 5 berkas:

```powershell
node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --file-id "photos/2026/a.txt" `
  --file-id "photos/2026/b.txt" `
  --batch-size 5
```

## Periksa `fileId` Sebelum Menghapus

Skrip penghapusan membutuhkan ID berkas ImgBed. Anda dapat memakai skrip daftar terlebih dahulu untuk melihat berkas di sebuah folder:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --dir "photos/2026" `
  --count 10 `
  --output json
```

Bidang `name` pada hasil biasanya adalah `fileId` yang dapat diberikan ke skrip penghapusan.

## Pertanyaan Umum

### Mengapa penghapusan gagal tetapi berkas masih ada di daftar?

Saat memakai mode bawaan `strict`, catatan ImgBed tetap disimpan jika penghapusan di penyimpanan jarak jauh gagal. Ini mencegah kondisi ketika hanya indeks lokal yang terhapus, sedangkan berkas jarak jauh masih ada. Setelah yakin hanya ingin membersihkan catatan ImgBed, coba ulang `fileId` yang sama dengan `soft`.

### Mengapa Ada Peringatan dalam Hasil?

Peringatan biasanya menunjukkan masalah tidak fatal saat penghapusan di penyimpanan jarak jauh, pembersihan tembolok, atau penyelesaian statistik. Skrip merangkum peringatan agar Anda dapat menilai apakah perlu mencoba ulang.

### Bisakah menghapus seluruh folder sekaligus?

Skrip ini tidak menyediakan operasi untuk mengosongkan folder secara langsung. Gunakan skrip daftar terlebih dahulu untuk memfilter nilai `fileId` yang jelas, lalu berikan berkas yang ingin dihapus satu per satu ke skrip penghapusan.


