# Pengaturan Halaman

Pengaturan halaman mengatur tampilan situs, nilai bawaan halaman unggah, gambar latar belakang, dan tampilan panel administrasi.

## Pengaturan Global

| Opsi | Fungsi |
| --- | --- |
| Judul situs | Judul yang ditampilkan di tab browser. |
| Ikon situs | Ikon kecil yang ditampilkan di tab browser. |
| Nama ImgBed | Nama yang ditampilkan di halaman antarmuka publik. |
| Logo ImgBed | Gambar logo yang ditampilkan di halaman antarmuka publik. |
| Tautan logo | URL yang dibuka saat logo atau avatar diklik. |
| Interval pergantian latar belakang | Interval rotasi untuk beberapa latar belakang, dalam milidetik. `60000` berarti 60 detik. |
| Opasitas latar belakang | Opasitas gambar latar belakang dari `0` hingga `1`. Nilai yang lebih rendah tampak lebih terang. |
| Prefiks URL bawaan | Prefiks yang digunakan saat membuat tautan gambar. Jika kosong, domain situs saat ini digunakan. |

## Pengaturan Klien

| Opsi | Fungsi |
| --- | --- |
| Pengumuman | Pengumuman yang ditampilkan di bagian atas halaman unggah. HTML didukung. |
| Saluran unggah bawaan | Saluran unggah yang dipilih secara bawaan di halaman unggah. Anda juga dapat memilih Smart Dispatch. |
| Direktori unggah bawaan | Direktori unggah bawaan, misalnya `/user/`. Kosong atau `/` berarti root. |
| Metode penamaan bawaan | Strategi bawaan untuk membuat nama file setelah unggah. Lihat penjelasan di bawah. |
| Konversi ke WebP secara bawaan | Mengonversi gambar ke WebP sebelum diunggah. |
| Aktifkan kompresi secara bawaan | Mengompresi gambar secara lokal di browser sebelum diunggah. |
| Ambang kompresi bawaan | Mengompresi otomatis saat ukuran gambar melebihi nilai ini, dalam MB. |
| Ukuran target bawaan | Ukuran file target setelah kompresi, dalam MB. |
| Latar belakang halaman masuk | Gambar latar belakang untuk halaman masuk pengguna. |
| Latar belakang halaman unggah | Gambar latar belakang untuk halaman unggah. |
| Tautan portal kaki halaman | URL yang dibuka oleh tombol portal kaki halaman. |
| Sembunyikan kaki halaman | Menyembunyikan kaki halaman antarmuka publik jika diaktifkan. |

## Pengaturan Administrasi

| Opsi | Fungsi |
| --- | --- |
| Latar belakang masuk administrasi | Gambar latar belakang untuk halaman masuk administrasi. |
| Latar belakang administrasi | Gambar latar belakang untuk halaman administrasi. Gunakan satu URL gambar atau beberapa URL. |
| Mode pemuatan gambar | Mode pemuatan pratinjau untuk daftar file administrasi. Mode gambar asli memuat gambar asli. Pemuatan cerdas mengutamakan gambar mini untuk gambar publik dan gambar asli untuk gambar terbatas. |
| Sumber gambar mini | Layanan untuk membuat gambar mini: wsrv.nl, Cloudflare Image Resizing, atau WordPress Photon. Cloudflare Image Resizing harus diaktifkan di Cloudflare sebelum dipilih. |
| Widget Live2D | Menampilkan karakter Live2D di panel administrasi. |
| Efek klik kembang api | Menampilkan efek kembang api saat halaman diklik. |
| Jejak bintang kursor | Menampilkan jejak bintang saat mouse digerakkan. |

## Format Gambar Latar Belakang

Latar belakang halaman masuk, latar belakang halaman unggah, dan latar belakang masuk administrasi mendukung format berikut:

| Nilai | Efek |
| --- | --- |
| `bing` | Menggunakan rotasi wallpaper Bing. |
| `["https://example.com/1.jpg","https://example.com/2.jpg"]` | Merotasi beberapa gambar. |
| `["https://example.com/1.jpg"]` | Menggunakan satu gambar latar belakang. |
| `["https://your-domain.com/random?..."]` | Menggunakan tautan API gambar acak. Anda dapat mengonfigurasi API gambar acak sendiri di Pengaturan Lainnya, lalu menempelkan tautan gambar acak yang dihasilkan di sini sebagai entri satu latar belakang. |

Latar belakang administrasi mendukung URL gambar. Beberapa URL dapat dipisahkan dengan koma Inggris sesuai petunjuk di halaman. Jika kosong, latar belakang bawaan digunakan.

## Metode Penamaan Bawaan

| Metode | Hasil |
| --- | --- |
| Bawaan | Prefiks acak berbasis waktu + nama file asli, misalnya `1760000000000_cat.png`. |
| Hanya prefiks | Hanya prefiks acak berbasis waktu dan ekstensi, misalnya `1760000000000.png`. |
| Hanya nama asli | Mempertahankan nama file asli, misalnya `cat.png`. Jika ada duplikat, ImgBed menambahkan `(1)`, `(2)`, dan seterusnya. |
| Tautan pendek | Menggunakan ID pendek 8 karakter dengan ekstensi, misalnya `a1b2c3d4.png`. |
