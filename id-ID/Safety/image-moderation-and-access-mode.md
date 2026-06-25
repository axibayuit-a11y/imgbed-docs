# Moderasi Gambar dan Mode Akses

Moderasi gambar memberi peringkat usia pada gambar yang diunggah. Mode akses mengontrol peringkat mana yang terlihat melalui akses publik.

Ini memengaruhi galeri publik, URL berkas publik, dan API gambar acak. Ini tidak membatasi panel admin. Administrator tetap dapat melihat dan mengelola semua berkas.

## Di Mana Mengonfigurasinya

Buka panel admin, lalu masuk ke:

```text
System Settings -> Security Settings -> Upload Management -> Image Moderation
```

Pengaturan utama:

- Mode akses
- Aktifkan moderasi
- Penyedia moderasi

## Fungsi Mode Akses

Mode akses menentukan peringkat usia mana yang dapat ditampilkan secara publik.

Mode saat ini:

| Mode Akses | Peringkat yang Terlihat Publik |
| --- | --- |
| Mode dewasa | General, R12, R16, R18 |
| Mode pemuda | General, R12, R16 |
| Mode remaja | General, R12 |
| Mode anak | Hanya General |

Nilai bawaan adalah mode dewasa.

Untuk situs pribadi atau situs dengan konten dewasa, mode dewasa mungkin sesuai. Untuk galeri publik yang lebih konservatif, pilih mode pemuda, remaja, atau anak.

## Apa yang Terjadi Saat Moderasi Diaktifkan

Saat moderasi aktif, ImgBed memanggil penyedia moderasi yang dipilih ketika unggahan berlangsung, lalu menyimpan peringkat usia yang terdeteksi.

Peringkat utama:

| Peringkat | Arti |
| --- | --- |
| General | Konten publik yang aman |
| R12 | Konten agak sensitif |
| R16 | Konten cukup sensitif |
| R18 | Konten dewasa |

Hasil moderasi dipakai saat menentukan akses publik.

Jika moderasi tidak aktif, atau berkas lama belum memiliki peringkat, berkas tersebut dianggap belum diberi peringkat. Berkas tanpa peringkat tidak otomatis dihapus dari galeri publik atau API gambar acak hanya karena belum memiliki peringkat.

## Memilih Penyedia Moderasi

Penyedia yang tersedia meliputi:

- moderatecontent.com
- nsfwjs
- Sightengine

Setiap penyedia memiliki kebutuhan yang berbeda:

- moderatecontent.com biasanya memerlukan API Key.
- nsfwjs biasanya memerlukan URL titik akhir API.
- Sightengine memerlukan API user dan API secret.

Pilih berdasarkan akun, ketersediaan, dan kualitas deteksi. Selama moderasi diaktifkan dan dikonfigurasi dengan benar, ImgBed akan mencoba menulis peringkat gambar saat unggahan berlangsung.

## Dampak pada Galeri Publik

Galeri publik memfilter berkas sesuai mode akses.

Contoh:

- Mode dewasa: gambar R18 dapat muncul.
- Mode pemuda: gambar R18 disembunyikan.
- Mode remaja: gambar R16 dan R18 disembunyikan.
- Mode anak: hanya gambar General yang ditampilkan.

Ini hanya memengaruhi akses publik normal. Panel admin tetap menampilkan semua berkas.

## Dampak pada URL Berkas Publik

URL berkas publik adalah tautan gambar langsung yang dibuka pengunjung.

Jika peringkat berkas diizinkan oleh mode akses saat ini, ImgBed mengembalikan gambar asli.

Jika peringkat lebih tinggi dari tingkat yang diizinkan, akses publik normal tidak mengembalikan gambar asli. Sebagai gantinya, ImgBed mengembalikan hasil pemblokiran yang dikonfigurasi atau gambar fallback pemblokiran.

Contoh:

- Mode saat ini adalah mode anak.
- Sebuah gambar memiliki peringkat R18.
- Pengunjung membuka URL publik secara langsung.
- ImgBed tidak mengembalikan gambar asli R18 kepada pengunjung tersebut.

![Gambar berkas yang dibatasi](../../image/Safety/文件受限图.png)

Administrator yang melihat berkas di panel admin tidak terpengaruh oleh pembatasan ini.

## Dampak pada API Gambar Acak

API gambar acak juga memfilter kumpulan kandidat sesuai mode akses.

Dalam mode anak, gambar acak hanya dipilih dari berkas dengan peringkat General.

Dalam mode pemuda, gambar acak dapat berasal dari berkas General, R12, dan R16, tetapi bukan berkas R18.

Ini mencegah API gambar acak melewati pembatasan galeri publik.

## Hubungan Dengan Aturan Daftar

Mode akses bukan satu-satunya aturan akses publik. Ia bekerja bersama aturan daftar izin dan daftar blokir.

Secara sederhana:

- Konten dalam daftar izin diprioritaskan sebagai publik.
- Konten dalam daftar blokir tidak dapat dilihat langsung oleh pengunjung biasa.
- Konten yang tidak ada di daftar mana pun kemudian diperiksa menurut mode akses.

Jika gambar dibatasi oleh peringkat usia dan aturan daftar, pengunjung biasa tetap tidak dapat melihat berkas asli secara langsung.

## Pengaturan yang Disarankan

Untuk situs publik:

- Aktifkan moderasi.
- Pilih mode akses yang sesuai dengan audiens situs.
- Gunakan mode anak atau mode remaja untuk pengunjung segala usia.
- Hindari mode dewasa jika Anda tidak ingin konten dewasa tampil secara publik.
- Tinjau peringkat berkas di panel admin dan sesuaikan secara manual bila perlu.

Untuk situs pribadi atau personal:

- Mode dewasa biasanya cukup.
- Aktifkan moderasi jika berguna.
- Tinjau dan sesuaikan peringkat di panel admin sesuai kebutuhan.

## FAQ

### Apakah Berkas Hilang dari Panel Admin Setelah Mode Akses Diubah?

Tidak.

Mode akses hanya memengaruhi akses publik normal. Mode ini tidak memengaruhi panel admin.

### Mengapa Galeri Publik Menampilkan Lebih Sedikit Gambar Setelah Beralih ke Mode Anak?

Mode anak hanya mengizinkan berkas dengan peringkat General tampil secara publik. Berkas R12, R16, dan R18 akan difilter keluar.

### Apakah URL Publik Masih Bisa Membuka Gambar Dewasa?

Jika mode akses saat ini tidak mengizinkan peringkat tersebut, URL publik normal tidak mengembalikan gambar asli.

### Apakah API Gambar Acak Bisa Mengembalikan Gambar yang Dibatasi?

Tidak.

API gambar acak memfilter kandidat sesuai mode akses saat ini.

### Bagaimana Dengan Gambar Lama Tanpa Peringkat?

Gambar tanpa peringkat tidak otomatis disembunyikan hanya karena belum memiliki hasil moderasi. Anda dapat menyesuaikan peringkatnya nanti di panel admin.

