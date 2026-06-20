# Blog

Fitur blog menambahkan halaman blog terpisah ke situs ImgBed Anda.

Setelah diaktifkan, pengunjung bisa membuka:

```text
https://your-domain.com/blog/
```

![Blog homepage](../../image/other/博客/博客首页.png)

Blog ini diadaptasi dari proyek open-source [LyraVoid/Mizuki](https://github.com/LyraVoid/Mizuki). ImgBed menulis ulang dan mengintegrasikannya dengan Vue agar bisa berjalan sebagai bagian dari situs image hosting.

## Lokasi Pengaturan

Pengaturan blog ada di:

```text
System Settings -> Other Settings -> Blog
```

![Blog settings](../../image/other/博客/QQ20260611-221702.png)

## Setup Pertama Kali

1. Aktifkan `Enable`.
2. Pilih akun GitHub yang akan dipakai untuk menyimpan konfigurasi blog.
3. Klik `Update Blog`.
4. Tunggu pesan berhasil.
5. Buka `https://your-domain.com/blog/` untuk melihat blog.

Saat pertama kali dipakai, ImgBed akan menyiapkan repository GitHub private di akun yang dipilih:

```text
imgbed-blog-config
```

Repository ini menyimpan pengaturan blog dan konten artikel.

## Menulis Post

Edit post blog di repository GitHub private Anda:

```text
imgbed-blog-config
```

Alur umumnya:

1. Buka GitHub.
2. Masuk ke repository private `imgbed-blog-config`.
3. Edit atau tambahkan file post.
4. Commit perubahan.
5. Kembali ke panel admin ImgBed dan klik `Update Blog`, atau klik logo di kiri atas homepage blog tiga kali untuk memicu update blog.

`Update Blog` tidak menimpa konten yang sudah Anda tulis. Tombol ini menginisialisasi repository bila diperlukan dan menyegarkan cache blog.

## Fitur yang Didukung

Blog mendukung fitur umum seperti daftar post, kategori, tag, arsip, pencarian, dark mode, dan penggantian bahasa.

Blog juga mendukung komentar dan statistik kunjungan.

![Blog comments](../../image/other/博客/支持留言.png)

Komentar muncul di bawah post. Pengunjung bisa mengisi avatar, nickname, email, dan isi komentar.

Statistik kunjungan menampilkan jumlah view post dan kunjungan situs, sehingga Anda bisa memantau traffic blog.

## URL

Blog selalu disajikan di `/blog/`.

Misalnya domain ImgBed Anda:

```text
https://image.example.com
```

Maka URL blog adalah:

```text
https://image.example.com/blog/
```

Setelah blog dinonaktifkan, pengunjung tidak bisa lagi mengakses halaman blog.
