# Random Image API dan Public Gallery

Kedua fitur ini dikonfigurasi di:

```text
System Settings -> Other Settings
```

## Random Image API

Random Image API mengembalikan satu file acak dari direktori yang dipilih. Fitur ini berguna untuk background situs, rotasi avatar, atau pemanggilan gambar acak dari halaman eksternal.

Setelah diaktifkan, gunakan:

```text
https://your-domain.com/random
```

## Pengaturan Random Image API

| Opsi | Fungsi |
| --- | --- |
| Enable | Mengaktifkan atau menonaktifkan endpoint `/random`. Jika nonaktif, akses akan ditolak. |
| Directories | Membatasi direktori yang boleh dipakai random API. Direktori yang tidak ada di sini tidak bisa dipakai API. |
| Call demo | Membuat link random API yang bisa langsung disalin. |

Anda bisa memilih beberapa direktori. Misalnya hanya `/landscape/` dan `/portrait/` yang diizinkan, maka random API hanya bisa mengambil file dari direktori tersebut dan subdirektorinya.

## Parameter Random Image API

| Parameter | Contoh | Fungsi |
| --- | --- | --- |
| `dir` | `/landscape/` | Menentukan direktori acak. |
| `content` | `image` | Menentukan jenis media. Gunakan `image`, `video`, `audio`, atau kombinasi yang dipisahkan koma. |
| `orientation` | `auto` | Memfilter orientasi gambar. Gunakan `portrait`, `landscape`, atau `auto`. |
| `type` | `url` | Format respons. Kosong berarti redirect, `url` mengembalikan URL teks biasa, `json` mengembalikan JSON. |
| `origin` | `1` | Dipakai bersama `type=url` untuk mengembalikan URL lengkap. |
| `age` | `all-ages,r12` | Memfilter berdasarkan rating usia. |
| `tag` | `wallpaper,sky` | Hanya mengembalikan file yang memiliki tag tersebut. |
| `ex` | `private` | Mengecualikan file yang memiliki tag tersebut. |

## Format Respons

Tanpa `type`, API akan redirect langsung ke URL file acak.

Dengan `type=url`, API mengembalikan URL dalam bentuk teks.

Dengan `type=json`, API mengembalikan informasi file, termasuk URL file, file ID, nama file, tipe file, tag, rating, dan metadata terkait.

## Aturan Akses

Random Image API mengikuti aturan akses publik:

| Aturan | Dampak |
| --- | --- |
| Directory restriction | Hanya file di direktori yang diizinkan yang bisa dipilih. |
| Blocklist | File dalam blocklist dikeluarkan dari kumpulan random. |
| Allowlist mode | Jika aktif, hanya file yang diizinkan untuk akses publik yang dikembalikan. |
| Age rating | Konten R12, R16, R18, dan sejenisnya difilter mengikuti access mode saat ini. |

Jika setelah difilter tidak ada file yang cocok, API akan mengembalikan hasil tidak ditemukan.

## Cache

Random Image API menyimpan cache candidate pool direktori agar respons lebih cepat.

Setelah file berubah, ImgBed memperbarui versi cache direktori, dan request berikutnya akan membangun ulang candidate pool. Direktori kosong di-cache singkat untuk menghindari query berulang.

## Public Gallery

Public gallery menyediakan halaman browsing publik yang read-only untuk direktori yang Anda izinkan dilihat pengunjung.

Setelah diaktifkan, pengunjung bisa membuka:

```text
https://your-domain.com/browse/directory-name
```

## Pengaturan Public Gallery

| Opsi | Fungsi |
| --- | --- |
| Enable | Mengaktifkan atau menonaktifkan public gallery. Jika nonaktif, pengunjung tidak bisa membukanya. |
| Image loading mode | Mengatur apakah preview memakai gambar asli atau thumbnail. |
| Open directories | Menentukan direktori yang bisa diakses pengunjung. |

## Image Loading Mode

| Mode | Fungsi |
| --- | --- |
| Original | Halaman pengunjung memuat file asli secara langsung. |
| Thumbnail | Halaman pengunjung lebih mengutamakan thumbnail agar lebih cepat. |

## Open Directories

Open directories menentukan apa yang bisa dilihat pengunjung.

Contoh:

```text
/1/,/2/,/landscape/,/portrait/
```

Pengunjung kemudian bisa mengakses:

```text
https://your-domain.com/browse/1
https://your-domain.com/browse/2
https://your-domain.com/browse/landscape
https://your-domain.com/browse/portrait
```

Subdirektori juga bisa dibuka, misalnya `/2026/lucky/`. Pengunjung akan diblokir dari direktori yang tidak dibuka.

## Fitur Public Gallery

| Fitur | Keterangan |
| --- | --- |
| Browse directories | Melihat file dan subdirektori di direktori yang dibuka. |
| Search | Mencari berdasarkan nama file, file ID, atau tag. |
| Type filter | Memfilter gambar, video, audio, atau file lain. |
| Tag filter | Menyertakan atau mengecualikan tag tertentu. |
| Orientation filter | Memfilter gambar landscape atau portrait. |
| Time filter | Memfilter berdasarkan rentang waktu upload. |
| Extension filter | Memfilter berdasarkan ekstensi file. |
| Copy link | Menyalin link akses file. |
| Media preview | Melihat atau memutar gambar, video, dan audio di halaman pengunjung. |

## Aturan Akses Public Gallery

Public gallery juga mengikuti aturan akses publik:

| Aturan | Dampak |
| --- | --- |
| Open directories | Hanya direktori yang diizinkan yang ditampilkan. |
| Access mode | Konten difilter berdasarkan access mode rating usia saat ini. |
| Allowlist mode | Jika aktif, hanya file yang diizinkan untuk akses publik yang ditampilkan. |
| Blocklist | File dalam blocklist disembunyikan. |
