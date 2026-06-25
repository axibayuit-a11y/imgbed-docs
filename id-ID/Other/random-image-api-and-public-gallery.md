# Gambar Acak dan Galeri Publik

Kedua fitur ini dikonfigurasi di:

```text
System Settings -> Other Settings
```

## API Gambar Acak

API Gambar Acak mengembalikan satu file acak dari direktori yang dipilih. Fitur ini berguna untuk latar belakang situs, rotasi avatar, atau pemanggilan gambar acak dari halaman eksternal.

Setelah diaktifkan, gunakan:

```text
https://your-domain.com/random
```

## Pengaturan API Gambar Acak

| Opsi | Tujuan |
| --- | --- |
| Aktifkan | Mengaktifkan atau menonaktifkan endpoint `/random`. Saat nonaktif, akses akan dilarang. |
| Direktori | Membatasi direktori yang dapat digunakan API Gambar Acak. Direktori yang tidak disertakan di sini tidak dapat digunakan oleh API. |
| Demo panggilan | Membuat tautan API Gambar Acak yang dapat langsung Anda salin. |

Anda dapat memilih beberapa direktori. Misalnya, jika hanya `/landscape/` dan `/portrait/` yang diizinkan, API Gambar Acak hanya dapat memilih file dari direktori tersebut dan subdirektorinya.

## Parameter API Gambar Acak

| Parameter | Contoh | Tujuan |
| --- | --- | --- |
| `dir` | `/landscape/` | Menentukan direktori acak. |
| `content` | `image` | Menentukan jenis media. Gunakan `image`, `video`, `audio`, atau kombinasi yang dipisahkan koma. |
| `orientation` | `auto` | Memfilter orientasi gambar. Gunakan `portrait`, `landscape`, atau `auto`. |
| `type` | `url` | Format keluaran. Kosong berarti pengalihan, `url` mengembalikan URL teks biasa, `json` mengembalikan JSON. |
| `origin` | `1` | Digunakan bersama `type=url` untuk mengembalikan URL lengkap. |
| `age` | `all-ages,r12` | Memfilter berdasarkan rating usia. |
| `tag` | `wallpaper,sky` | Hanya mengembalikan file yang memuat tag ini. |
| `ex` | `private` | Mengecualikan file yang memuat tag ini. |

## Format Keluaran

Tanpa `type`, API langsung mengalihkan ke URL file acak.

Dengan `type=url`, API mengembalikan URL dalam bentuk teks.

Dengan `type=json`, API mengembalikan informasi file, termasuk URL file, ID file, nama file, jenis file, tag, rating, dan metadata terkait.

## Aturan Akses

API Gambar Acak mengikuti aturan akses publik:

| Aturan | Dampak |
| --- | --- |
| Pembatasan direktori | Hanya file dalam direktori yang diizinkan yang dapat dipilih. |
| Daftar blokir | File dalam daftar blokir dikeluarkan dari kumpulan acak. |
| Mode daftar izin | Jika aktif, hanya file yang diizinkan untuk akses publik yang dikembalikan. |
| Rating usia | Konten R12, R16, R18, dan sejenisnya difilter mengikuti mode akses saat ini. |

Jika tidak ada file yang cocok setelah pemfilteran, API tidak mengembalikan hasil yang cocok.

## Cache

API Gambar Acak menyimpan cache kumpulan kandidat per direktori untuk meningkatkan kecepatan.

Setelah file berubah, ImgBed memperbarui versi cache direktori, dan permintaan berikutnya membangun ulang kumpulan kandidat. Direktori kosong di-cache sebentar untuk menghindari kueri berulang.

## Galeri Publik

Galeri publik menyediakan halaman penelusuran publik hanya-baca untuk direktori yang Anda izinkan dilihat oleh pengunjung.

Setelah diaktifkan, pengunjung dapat membuka:

```text
https://your-domain.com/browse/directory-name
```

## Pengaturan Galeri Publik

| Opsi | Tujuan |
| --- | --- |
| Aktifkan | Mengaktifkan atau menonaktifkan galeri publik. Saat nonaktif, pengunjung tidak dapat menelusurinya. |
| Mode pemuatan gambar | Mengatur apakah pratinjau menggunakan gambar asli atau thumbnail. |
| Direktori terbuka | Menentukan direktori yang dapat diakses pengunjung. |

## Mode Pemuatan Gambar

| Mode | Tujuan |
| --- | --- |
| Asli | Halaman pengunjung memuat file asli secara langsung. |
| Thumbnail | Halaman pengunjung mengutamakan thumbnail agar pemuatan lebih cepat. |

## Direktori Terbuka

Direktori terbuka menentukan apa yang dapat dilihat pengunjung.

Contoh:

```text
/1/,/2/,/landscape/,/portrait/
```

Pengunjung kemudian dapat mengakses:

```text
https://your-domain.com/browse/1
https://your-domain.com/browse/2
https://your-domain.com/browse/landscape
https://your-domain.com/browse/portrait
```

Subdirektori juga dapat dibuka, misalnya `/2026/lucky/`. Pengunjung akan diblokir dari direktori yang tidak dibuka.

## Fitur Galeri Publik

| Fitur | Deskripsi |
| --- | --- |
| Menelusuri direktori | Melihat file dan subdirektori di direktori terbuka. |
| Pencarian | Mencari berdasarkan nama file, ID file, atau tag. |
| Filter jenis | Memfilter gambar, video, audio, atau file lain. |
| Filter tag | Menyertakan atau mengecualikan tag yang dipilih. |
| Filter orientasi | Memfilter gambar lanskap atau potret. |
| Filter waktu | Memfilter berdasarkan rentang waktu upload. |
| Filter ekstensi | Memfilter berdasarkan ekstensi file. |
| Salin tautan | Menyalin tautan akses file. |
| Pratinjau media | Melihat atau memutar gambar, video, dan audio di halaman pengunjung. |

## Aturan Akses Galeri Publik

Galeri publik juga mengikuti aturan akses publik:

| Aturan | Dampak |
| --- | --- |
| Direktori terbuka | Hanya direktori yang diizinkan yang ditampilkan. |
| Mode akses | Konten difilter berdasarkan mode akses rating usia saat ini. |
| Mode daftar izin | Jika aktif, hanya file yang diizinkan untuk akses publik yang ditampilkan. |
| Daftar blokir | File dalam daftar blokir disembunyikan. |
