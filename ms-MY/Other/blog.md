# Blog

Blog feature menambah halaman blog standalone kepada ImgBed site anda.

Selepas diaktifkan, visitors boleh membuka:

```text
https://your-domain.com/blog/
```

![Blog homepage](../../image/other/博客/博客首页.png)

Blog ini diadaptasi daripada open-source project [LyraVoid/Mizuki](https://github.com/LyraVoid/Mizuki). ImgBed rewrite dan mengintegrasikannya dengan Vue supaya ia boleh berjalan sebagai sebahagian daripada image hosting site.

## Di Mana Untuk Configure

Blog settings berada di:

```text
System Settings -> Other Settings -> Blog
```

![Blog settings](../../image/other/博客/QQ20260611-221702.png)

## First-Time Setup

1. Hidupkan `Enable`.
2. Pilih GitHub account yang digunakan untuk menyimpan blog configuration.
3. Klik `Update Blog`.
4. Tunggu success message.
5. Buka `https://your-domain.com/blog/` untuk melihat blog.

Pada penggunaan pertama, ImgBed menyediakan private GitHub repository di bawah account yang dipilih:

```text
imgbed-blog-config
```

Repository ini menyimpan blog settings dan article content.

## Menulis Posts

Edit blog posts dalam private GitHub repository:

```text
imgbed-blog-config
```

Typical workflow:

1. Buka GitHub.
2. Masuk ke private repository `imgbed-blog-config`.
3. Edit atau add post files.
4. Commit changes.
5. Kembali ke ImgBed admin panel dan klik `Update Blog`, atau klik logo di penjuru kiri atas blog homepage tiga kali untuk trigger blog update.

`Update Blog` tidak overwrite content yang anda tulis. Ia initialize repository apabila perlu dan refresh blog cache.

## Supported Features

Blog menyokong common blog features seperti post lists, categories, tags, archives, search, dark mode dan language switching.

Ia juga menyokong comments dan visit statistics.

![Blog comments](../../image/other/博客/支持留言.png)

Comments muncul di bawah posts. Visitors boleh submit avatar, nickname, email dan comment content.

Visit statistics menunjukkan post views dan site visits, membantu anda memahami blog traffic.

## URL

Blog sentiasa served di bawah `/blog/`.

Contohnya, jika ImgBed domain anda ialah:

```text
https://image.example.com
```

Blog URL ialah:

```text
https://image.example.com/blog/
```

Selepas blog disabled, visitors tidak lagi boleh mengakses blog page.
