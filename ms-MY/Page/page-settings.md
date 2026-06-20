# Page Settings

Page settings mengawal site display, upload page defaults, background images dan admin panel appearance.

## Global Settings

| Option | Purpose |
| --- | --- |
| Site title | Title yang dipaparkan dalam browser tab. |
| Site icon | Icon kecil yang dipaparkan dalam browser tab. |
| ImgBed name | Name yang dipaparkan pada frontend pages. |
| ImgBed logo | Logo image yang dipaparkan pada frontend pages. |
| Logo link | URL yang dibuka apabila klik logo atau avatar. |
| Background switch interval | Rotation interval untuk multiple backgrounds, dalam milliseconds. `60000` bermaksud 60 seconds. |
| Background opacity | Opacity background image dari `0` hingga `1`. Nilai lebih rendah kelihatan lebih ringan. |
| Default URL prefix | Prefix yang digunakan semasa generate image links. Kosong bermaksud current site domain digunakan. |

## Client Settings

| Option | Purpose |
| --- | --- |
| Announcement | Announcement yang dipaparkan di bahagian atas upload page. HTML disokong. |
| Default upload channel | Upload channel yang dipilih secara default pada upload page. Anda juga boleh memilih Smart Dispatch. |
| Default upload directory | Default upload directory, contohnya `/user/`. Kosong atau `/` bermaksud root. |
| Default naming method | Default filename generation strategy selepas upload. Lihat di bawah. |
| Convert to WebP by default | Convert images kepada WebP sebelum upload. |
| Enable compression by default | Compress images secara local dalam browser sebelum upload. |
| Default compression threshold | Compress secara automatik apabila image melebihi saiz ini, dalam MB. |
| Default target size | Target file size selepas compression, dalam MB. |
| Login page background | Background image untuk user login page. |
| Upload page background | Background image untuk upload page. |
| Footer portal link | URL yang dibuka oleh footer portal button. |
| Hide footer | Menyembunyikan frontend footer apabila enabled. |

## Admin Settings

| Option | Purpose |
| --- | --- |
| Admin login background | Background image untuk admin login page. |
| Admin background | Background image untuk admin pages. Gunakan satu image URL atau beberapa URLs. |
| Image loading mode | Preview loading mode untuk admin file list. Original load original images. Smart loading mengutamakan thumbnails untuk public images dan originals untuk restricted images. |
| Thumbnail source | Service untuk generate thumbnails: wsrv.nl, Cloudflare Image Resizing atau WordPress Photon. Cloudflare Image Resizing mesti enabled dalam Cloudflare sebelum dipilih. |
| Live2D widget | Memaparkan Live2D character dalam admin panel. |
| Firework click effect | Memaparkan firework effect apabila klik halaman. |
| Star cursor trail | Memaparkan star trail apabila mouse bergerak. |

## Background Image Formats

Login page background, upload page background dan admin login background menyokong formats ini:

| Value | Effect |
| --- | --- |
| `bing` | Menggunakan Bing wallpaper rotation. |
| `["https://example.com/1.jpg","https://example.com/2.jpg"]` | Rotate beberapa images. |
| `["https://example.com/1.jpg"]` | Menggunakan satu background image. |
| `["https://your-domain.com/random?..."]` | Menggunakan random image API link. Anda boleh configure Random Image API sendiri dalam Other Settings, kemudian paste generated random image link di sini sebagai single-background entry. |

Admin background menyokong image URLs. Beberapa URLs boleh dipisahkan dengan English commas seperti prompt pada halaman. Kosong bermaksud default background digunakan.

## Default Naming Method

| Method | Result |
| --- | --- |
| Default | Time-random prefix + original filename, contohnya `1760000000000_cat.png`. |
| Prefix only | Time-random prefix dan extension sahaja, contohnya `1760000000000.png`. |
| Original name only | Mengekalkan original filename, contohnya `cat.png`. Jika duplicate, ImgBed menambah `(1)`, `(2)` dan seterusnya. |
| Short link | Menggunakan 8-character short ID dan extension, contohnya `a1b2c3d4.png`. |
