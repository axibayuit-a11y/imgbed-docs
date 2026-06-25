# Blog

Fitur blog menambahkan halaman blog mandiri ke situs ImgBed Anda.

Setelah diaktifkan, pengunjung dapat membuka:

```text
https://your-domain.com/blog/
```

![Beranda blog](../../image/other/博客/博客首页.png)

Blog ini diadaptasi dari proyek sumber terbuka [LyraVoid/Mizuki](https://github.com/LyraVoid/Mizuki). ImgBed menulis ulang dan mengintegrasikannya dengan Vue agar dapat berjalan sebagai bagian dari situs hosting gambar.

## Tempat Mengonfigurasinya

Pengaturan blog berada di:

```text
System Settings -> Other Settings -> Blog
```

![Pengaturan blog](../../image/other/博客/QQ20260611-221702.png)

## Penyiapan Pertama Kali

1. Aktifkan `Enable`.
2. Pilih akun GitHub yang digunakan untuk menyimpan konfigurasi blog.
3. Klik `Update Blog`.
4. Tunggu pesan berhasil.
5. Buka `https://your-domain.com/blog/` untuk melihat blog.

Pada penggunaan pertama, ImgBed menyiapkan repositori GitHub privat di bawah akun yang dipilih:

```text
imgbed-blog-config
```

Repositori ini menyimpan pengaturan blog dan konten artikel.

## Menulis Artikel

Edit artikel blog di repositori GitHub privat Anda:

```text
imgbed-blog-config
```

Alur kerja umum:

1. Buka GitHub.
2. Masuk ke repositori privat `imgbed-blog-config`.
3. Edit atau tambahkan file artikel.
4. Commit perubahan.
5. Kembali ke panel admin ImgBed dan klik `Update Blog`, atau klik logo di sudut kiri atas beranda blog tiga kali untuk memicu pembaruan blog.

`Update Blog` tidak menimpa konten yang sudah Anda tulis. Tombol ini menginisialisasi repositori bila diperlukan dan menyegarkan cache blog.

## Fitur yang Didukung

Blog mendukung fitur umum blog seperti daftar artikel, kategori, tag, arsip, pencarian, mode gelap, dan pergantian bahasa.

Blog juga mendukung komentar dan statistik kunjungan.

![Komentar blog](../../image/other/博客/支持留言.png)

Komentar muncul di bawah artikel. Pengunjung dapat mengirim avatar, nama panggilan, email, dan isi komentar.

Statistik kunjungan menampilkan jumlah tampilan artikel dan kunjungan situs, sehingga membantu Anda memahami lalu lintas blog.

## URL

Blog selalu disajikan di bawah `/blog/`.

Misalnya, jika domain ImgBed Anda adalah:

```text
https://image.example.com
```

Maka URL blog adalah:

```text
https://image.example.com/blog/
```

Setelah blog dinonaktifkan, pengunjung tidak dapat lagi mengakses halaman blog.
