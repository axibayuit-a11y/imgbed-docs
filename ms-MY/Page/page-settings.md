# Tetapan Halaman

Tetapan halaman mengawal paparan laman, nilai lalai halaman muat naik, imej latar belakang dan rupa panel pentadbiran.

## Tetapan Global

| Pilihan | Tujuan |
| --- | --- |
| Tajuk laman | Tajuk yang dipaparkan pada tab pelayar. |
| Ikon laman | Ikon kecil yang dipaparkan pada tab pelayar. |
| Nama ImgBed | Nama yang dipaparkan pada halaman antara muka awam. |
| Logo ImgBed | Imej logo yang dipaparkan pada halaman antara muka awam. |
| Pautan logo | URL yang dibuka apabila logo atau avatar diklik. |
| Selang pertukaran latar belakang | Selang putaran untuk beberapa latar belakang, dalam milisaat. `60000` bermaksud 60 saat. |
| Kelegapan latar belakang | Kelegapan imej latar belakang daripada `0` hingga `1`. Nilai yang lebih rendah kelihatan lebih cerah. |
| Awalan URL lalai | Awalan yang digunakan semasa menjana pautan imej. Jika kosong, domain laman semasa digunakan. |

## Tetapan Klien

| Pilihan | Tujuan |
| --- | --- |
| Pengumuman | Pengumuman yang dipaparkan di bahagian atas halaman muat naik. HTML disokong. |
| Saluran muat naik lalai | Saluran muat naik yang dipilih secara lalai pada halaman muat naik. Anda juga boleh memilih Smart Dispatch. |
| Direktori muat naik lalai | Direktori muat naik lalai, contohnya `/user/`. Kosong atau `/` bermaksud akar. |
| Kaedah penamaan lalai | Strategi lalai untuk menjana nama fail selepas muat naik. Lihat di bawah. |
| Tukar kepada WebP secara lalai | Menukar imej kepada WebP sebelum muat naik. |
| Dayakan pemampatan secara lalai | Memampatkan imej secara setempat dalam pelayar sebelum muat naik. |
| Ambang pemampatan lalai | Memampatkan secara automatik apabila imej melebihi saiz ini, dalam MB. |
| Saiz sasaran lalai | Saiz fail sasaran selepas pemampatan, dalam MB. |
| Latar belakang halaman log masuk | Imej latar belakang untuk halaman log masuk pengguna. |
| Latar belakang halaman muat naik | Imej latar belakang untuk halaman muat naik. |
| Pautan portal pengaki | URL yang dibuka oleh butang portal pengaki. |
| Sembunyikan pengaki | Menyembunyikan pengaki antara muka awam apabila didayakan. |

## Tetapan Pentadbiran

| Pilihan | Tujuan |
| --- | --- |
| Latar belakang log masuk pentadbiran | Imej latar belakang untuk halaman log masuk pentadbiran. |
| Latar belakang pentadbiran | Imej latar belakang untuk halaman pentadbiran. Gunakan satu URL imej atau beberapa URL. |
| Mod pemuatan imej | Mod pemuatan pratonton untuk senarai fail pentadbiran. Mod imej asal memuatkan imej asal. Pemuatan pintar mengutamakan imej kecil untuk imej awam dan imej asal untuk imej terhad. |
| Sumber imej kecil | Perkhidmatan untuk menjana imej kecil: wsrv.nl, Cloudflare Image Resizing atau WordPress Photon. Cloudflare Image Resizing mesti didayakan dalam Cloudflare sebelum dipilih. |
| Widget Live2D | Memaparkan watak Live2D dalam panel pentadbiran. |
| Kesan klik bunga api | Memaparkan kesan bunga api apabila halaman diklik. |
| Jejak bintang kursor | Memaparkan jejak bintang apabila tetikus digerakkan. |

## Format Imej Latar Belakang

Latar belakang halaman log masuk, latar belakang halaman muat naik dan latar belakang log masuk pentadbiran menyokong format berikut:

| Nilai | Kesan |
| --- | --- |
| `bing` | Menggunakan putaran kertas dinding Bing. |
| `["https://example.com/1.jpg","https://example.com/2.jpg"]` | Memutarkan beberapa imej. |
| `["https://example.com/1.jpg"]` | Menggunakan satu imej latar belakang. |
| `["https://your-domain.com/random?..."]` | Menggunakan pautan API imej rawak. Anda boleh mengkonfigurasi API imej rawak sendiri dalam Tetapan Lain, kemudian tampal pautan imej rawak yang dijana di sini sebagai entri satu latar belakang. |

Latar belakang pentadbiran menyokong URL imej. Beberapa URL boleh dipisahkan dengan koma Inggeris seperti yang ditunjukkan pada halaman. Jika kosong, latar belakang lalai digunakan.

## Kaedah Penamaan Lalai

| Kaedah | Hasil |
| --- | --- |
| Lalai | Awalan rawak berasaskan masa + nama fail asal, contohnya `1760000000000_cat.png`. |
| Awalan sahaja | Awalan rawak berasaskan masa dan sambungan sahaja, contohnya `1760000000000.png`. |
| Nama asal sahaja | Mengekalkan nama fail asal, contohnya `cat.png`. Jika terdapat pendua, ImgBed menambah `(1)`, `(2)` dan seterusnya. |
| Pautan pendek | Menggunakan ID pendek 8 aksara dengan sambungan, contohnya `a1b2c3d4.png`. |
