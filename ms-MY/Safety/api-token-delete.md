# Padam fail dengan API Token

Skrip padam melalui API Token sesuai untuk skrip, automasi dan aplikasi pihak ketiga. Anda tidak perlu membuka panel pentadbir; cukup berikan alamat laman, Token dan ID fail yang jelas untuk memadam satu atau beberapa fail dalam ImgBed.

Pemadaman ialah operasi tulis. Selepas arahan dijalankan, fail benar-benar akan dipadam. Sebaiknya semak dahulu `fileId` yang hendak dipadam dengan `imgbed-token-list.mjs`, kemudian serahkan ID tersebut kepada skrip padam.

![Sunting API Token](../../image/Safety/apitoken/编辑删除权限api.png)

## Persediaan

Buka panel pentadbir:

```text
System Settings -> Security Settings -> API Token
```

Semasa mencipta atau mengedit API Token, pastikan Token tersebut dibenarkan untuk memadam. Skrip ini hanya memerlukan kebenaran `delete`.

Token juga boleh diletakkan dalam pemboleh ubah persekitaran:

```powershell
$env:IMGBED_API_TOKEN="your API Token"
```

## Muat turun skrip

| Skrip | Kegunaan |
| --- | --- |
| <a href="/tools/imgbed-token-delete.mjs" download>Muat turun skrip padam fail</a> | Memadam satu atau beberapa ID fail yang dinyatakan dengan jelas |

Skrip ini memerlukan Node.js 18 atau lebih baharu.

## Cara API padam berfungsi

Skrip padam memanggil API padam di bahagian pelayan:

```text
POST /api/manage/delete/batch
```

Permintaan perlu membawa API Token:

```text
Authorization: Bearer <token>
```

Contoh badan permintaan:

```json
{
  "fileIds": ["photos/2026/a.txt"],
  "deleteStrictness": "strict"
}
```

Jika `fileIds` mengandungi satu fail, ia menjadi pemadaman satu fail. Jika mengandungi beberapa fail, ia menjadi pemadaman berkelompok. Pelayan memproses paling banyak 15 fail dalam satu permintaan, dan skrip akan membahagikan permintaan secara automatik mengikut `--batch-size`.

API mengembalikan aliran kemajuan NDJSON. Peristiwa yang biasa ditemui termasuk `batch_start`, `file_step`, `file_done`, `batch_complete` dan `batch_error`. Skrip akan membaca peristiwa ini lalu merumuskannya sebagai keputusan yang mudah dibaca atau keputusan JSON.

Selepas pemadaman berjaya, pelayan turut mengurus indeks fail, statistik direktori, statistik kapasiti dan pembersihan storan sementara secara automatik.

## Parameter skrip padam

| Parameter | Wajib | Maksud |
| --- | --- | --- |
| `--base-url <url>` | Ya | Alamat laman ImgBed, contohnya `https://image.ai6.me` |
| `--token <token>` | Ya | API Token; boleh diganti dengan `IMGBED_API_TOKEN` |
| `--file-id <id>` | Ya | ID fail yang hendak dipadam; boleh dihantar berulang kali |
| `--strictness <strict\|soft>` | Tidak | Tahap ketegasan pemadaman; lalai `strict` |
| `--batch-size <n>` | Tidak | Jumlah fail untuk satu permintaan; lalai `15`, maksimum `15` |
| `--retries <n>` | Tidak | Cubaan semula untuk kegagalan sementara; lalai `3` |
| `--timeout-ms <n>` | Tidak | Had masa satu permintaan; lalai `180000` |
| `--output <pretty\|json>` | Tidak | Format output; lalai `pretty` |
| `--save-response <path>` | Tidak | Simpan keputusan akhir sebagai JSON |
| `-h` / `--help` | Tidak | Paparkan bantuan skrip |

Skrip ini hanya memadam fail yang dihantar secara jelas melalui `--file-id`. Ia tidak melakukan padanan kabur, tidak mengosongkan direktori secara pukal, dan tidak membaca ID untuk dipadam daripada senarai berkoma atau fail tempatan.

## Pemadaman ketat dan pemadaman lembut

| Mod | Maksud |
| --- | --- |
| `strict` | Mod lalai. Jika pemadaman pada storan jauh gagal, rekod ImgBed akan dikekalkan supaya mudah dicuba semula atau disiasat. |
| `soft` | Jika pemadaman pada storan jauh gagal, rekod ImgBed tetap dibersihkan dan keputusan akan memulangkan amaran. |

Jika anda mahu pemadaman hanya dianggap berjaya apabila fail jauh turut dipadam, gunakan `strict` yang menjadi lalai. Jika platform jauh tertentu tidak lagi boleh memadam fail, tetapi anda hanya mahu membersihkan rekod ImgBed, gunakan `soft`.

## Contoh penggunaan

Padam satu fail:

```powershell
node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --file-id "photos/2026/a.txt"
```

Gunakan Token daripada pemboleh ubah persekitaran:

```powershell
$env:IMGBED_API_TOKEN="your API Token"

node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --file-id "photos/2026/a.txt"
```

Padam beberapa fail:

```powershell
node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --file-id "photos/2026/a.txt" `
  --file-id "photos/2026/b.txt" `
  --file-id "photos/2026/c.txt"
```

Bersihkan rekod ImgBed walaupun pemadaman jauh gagal:

```powershell
node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --file-id "photos/2026/a.txt" `
  --strictness soft
```

Keluarkan JSON dan simpan keputusan:

```powershell
node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --file-id "photos/2026/a.txt" `
  --output json `
  --save-response ".\delete-result.json"
```

Hadkan satu permintaan kepada 5 fail:

```powershell
node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --file-id "photos/2026/a.txt" `
  --file-id "photos/2026/b.txt" `
  --batch-size 5
```

## Semak fileId sebelum memadam

Skrip padam memerlukan ID fail ImgBed. Anda boleh menggunakan skrip senarai untuk melihat fail dalam direktori terlebih dahulu:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --dir "photos/2026" `
  --count 10 `
  --output json
```

Nilai `name` dalam keputusan biasanya ialah `fileId` yang boleh diserahkan kepada skrip padam.

## Soalan lazim

### Mengapa pemadaman gagal tetapi fail masih ada dalam senarai?

Jika menggunakan `strict` yang menjadi lalai, rekod ImgBed akan dikekalkan apabila pemadaman storan jauh gagal. Ini mengelakkan keadaan indeks tempatan sudah dipadam tetapi fail jauh masih wujud. Selepas pasti hanya rekod ImgBed perlu dibersihkan, cuba semula `fileId` yang sama dengan `soft`.

### Mengapa Keputusan Mengandungi Amaran?

Amaran biasanya bermaksud terdapat masalah tidak kritikal semasa pemadaman jauh, pembersihan storan sementara atau penamat statistik. Skrip akan mengumpulkan amaran supaya anda boleh menilai sama ada perlu mencuba semula.

### Bolehkah saya memadam mengikut direktori sekali gus?

Skrip ini tidak menyediakan fungsi mengosongkan direktori. Gunakan skrip senarai dahulu untuk menapis `fileId` yang jelas, kemudian hantar fail yang hendak dipadam satu demi satu kepada skrip padam.




