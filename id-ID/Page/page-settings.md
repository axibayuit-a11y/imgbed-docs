# Page Settings

Page settings mengatur tampilan situs, default halaman upload, gambar background, dan tampilan panel admin.

## Global Settings

| Opsi | Fungsi |
| --- | --- |
| Site title | Judul yang tampil di tab browser. |
| Site icon | Ikon kecil yang tampil di tab browser. |
| ImgBed name | Nama yang tampil di halaman frontend. |
| ImgBed logo | Gambar logo yang tampil di halaman frontend. |
| Logo link | URL yang dibuka saat logo atau avatar diklik. |
| Background switch interval | Interval rotasi untuk beberapa background, dalam milidetik. `60000` berarti 60 detik. |
| Background opacity | Opacity gambar background dari `0` sampai `1`. Nilai lebih rendah membuatnya lebih terang. |
| Default URL prefix | Prefix yang dipakai saat membuat link gambar. Kosong berarti memakai domain situs saat ini. |

## Client Settings

| Opsi | Fungsi |
| --- | --- |
| Announcement | Pengumuman yang tampil di bagian atas halaman upload. HTML didukung. |
| Default upload channel | Upload channel yang dipilih secara default di halaman upload. Anda juga bisa memilih Smart Dispatch. |
| Default upload directory | Direktori upload default, misalnya `/user/`. Kosong atau `/` berarti root. |
| Default naming method | Strategi pembuatan nama file default setelah upload. Lihat penjelasan di bawah. |
| Convert to WebP by default | Mengubah gambar ke WebP sebelum upload. |
| Enable compression by default | Mengompres gambar secara lokal di browser sebelum upload. |
| Default compression threshold | Otomatis kompres saat ukuran gambar melewati batas ini, dalam MB. |
| Default target size | Target ukuran file setelah kompresi, dalam MB. |
| Login page background | Gambar background untuk halaman login pengguna. |
| Upload page background | Gambar background untuk halaman upload. |
| Footer portal link | URL yang dibuka oleh tombol footer portal. |
| Hide footer | Menyembunyikan footer frontend jika diaktifkan. |

## Admin Settings

| Opsi | Fungsi |
| --- | --- |
| Admin login background | Gambar background untuk halaman login admin. |
| Admin background | Gambar background untuk halaman admin. Gunakan satu URL gambar atau beberapa URL. |
| Image loading mode | Mode loading preview untuk daftar file admin. Original memuat gambar asli. Smart loading mengutamakan thumbnail untuk gambar publik dan gambar asli untuk gambar terbatas. |
| Thumbnail source | Layanan untuk membuat thumbnail: wsrv.nl, Cloudflare Image Resizing, atau WordPress Photon. Cloudflare Image Resizing harus diaktifkan di Cloudflare sebelum dipilih. |
| Live2D widget | Menampilkan karakter Live2D di panel admin. |
| Firework click effect | Menampilkan efek kembang api saat halaman diklik. |
| Star cursor trail | Menampilkan jejak bintang saat mouse digerakkan. |

## Format Background Image

Login page background, upload page background, dan admin login background mendukung format berikut:

| Nilai | Efek |
| --- | --- |
| `bing` | Memakai rotasi wallpaper Bing. |
| `["https://example.com/1.jpg","https://example.com/2.jpg"]` | Merotasi beberapa gambar. |
| `["https://example.com/1.jpg"]` | Memakai satu gambar background. |
| `["https://your-domain.com/random?..."]` | Memakai link Random Image API. Anda bisa mengonfigurasi Random Image API sendiri di Other Settings, lalu tempelkan link random image yang dihasilkan di sini sebagai satu entry background. |

Admin background mendukung URL gambar. Beberapa URL bisa dipisahkan dengan koma Inggris sesuai petunjuk di halaman. Kosong berarti memakai background default.

## Default Naming Method

| Metode | Hasil |
| --- | --- |
| Default | Prefix waktu-random + nama file asli, misalnya `1760000000000_cat.png`. |
| Prefix only | Hanya prefix waktu-random dan ekstensi, misalnya `1760000000000.png`. |
| Original name only | Mempertahankan nama file asli, misalnya `cat.png`. Jika duplikat, ImgBed menambahkan `(1)`, `(2)`, dan seterusnya. |
| Short link | Memakai short ID 8 karakter dan ekstensi, misalnya `a1b2c3d4.png`. |
