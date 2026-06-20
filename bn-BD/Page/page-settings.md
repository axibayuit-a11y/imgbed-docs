# Page Settings

Page settings site display, upload page defaults, background images এবং admin panel appearance control করে।

## Global Settings

| Option | Purpose |
| --- | --- |
| Site title | Browser tab-এ দেখা title। |
| Site icon | Browser tab-এ দেখা ছোট icon। |
| ImgBed name | Frontend pages-এ দেখা name। |
| ImgBed logo | Frontend pages-এ দেখা logo image। |
| Logo link | Logo বা avatar ক্লিক করলে যে URL খুলবে। |
| Background switch interval | Multiple backgrounds-এর rotation interval, milliseconds-এ। `60000` মানে 60 seconds। |
| Background opacity | Background image opacity `0` থেকে `1`। Lower values হালকা দেখায়। |
| Default URL prefix | Image links generate করার সময় ব্যবহৃত prefix। Empty হলে current site domain ব্যবহার হয়। |

## Client Settings

| Option | Purpose |
| --- | --- |
| Announcement | Upload page-এর top-এ দেখা announcement। HTML supported। |
| Default upload channel | Upload page-এ default selected upload channel। Smart Dispatch-ও বেছে নিতে পারেন। |
| Default upload directory | Default upload directory, যেমন `/user/`। Empty বা `/` মানে root। |
| Default naming method | Upload-এর পর filename generation strategy। নিচে দেখুন। |
| Convert to WebP by default | Upload-এর আগে images WebP-তে convert করে। |
| Enable compression by default | Upload-এর আগে browser-এ locally images compress করে। |
| Default compression threshold | Image এই size ছাড়ালে automatically compress হবে, MB-তে। |
| Default target size | Compression-এর পর target file size, MB-তে। |
| Login page background | User login page-এর background image। |
| Upload page background | Upload page-এর background image। |
| Footer portal link | Footer portal button ক্লিক করলে যে URL খুলবে। |
| Hide footer | Enabled হলে frontend footer hide করে। |

## Admin Settings

| Option | Purpose |
| --- | --- |
| Admin login background | Admin login page-এর background image। |
| Admin background | Admin pages-এর background image। একটি image URL বা multiple URLs ব্যবহার করুন। |
| Image loading mode | Admin file list-এর preview loading mode। Original original images load করে। Smart loading public images-এর জন্য thumbnails এবং restricted images-এর জন্য originals prefer করে। |
| Thumbnail source | Thumbnails generate করার service: wsrv.nl, Cloudflare Image Resizing বা WordPress Photon। Cloudflare Image Resizing নির্বাচন করার আগে Cloudflare-এ enabled থাকতে হবে। |
| Live2D widget | Admin panel-এ Live2D character দেখায়। |
| Firework click effect | Page ক্লিক করলে firework effect দেখায়। |
| Star cursor trail | Mouse move করলে star trail দেখায়। |

## Background Image Formats

Login page background, upload page background এবং admin login background এই formats support করে:

| Value | Effect |
| --- | --- |
| `bing` | Bing wallpaper rotation ব্যবহার করে। |
| `["https://example.com/1.jpg","https://example.com/2.jpg"]` | Multiple images rotate করে। |
| `["https://example.com/1.jpg"]` | Single background image ব্যবহার করে। |
| `["https://your-domain.com/random?..."]` | Random image API link ব্যবহার করে। Other Settings-এ নিজের Random Image API configure করে generated random image link এখানে single-background entry হিসেবে paste করুন। |

Admin background image URLs support করে। Page-এর prompt অনুযায়ী multiple URLs English commas দিয়ে separate করা যায়। Empty হলে default background ব্যবহার হয়।

## Default Naming Method

| Method | Result |
| --- | --- |
| Default | Time-random prefix + original filename, যেমন `1760000000000_cat.png`। |
| Prefix only | শুধু time-random prefix এবং extension, যেমন `1760000000000.png`। |
| Original name only | Original filename রাখে, যেমন `cat.png`। Duplicate হলে ImgBed `(1)`, `(2)` ইত্যাদি যোগ করে। |
| Short link | 8-character short ID এবং extension ব্যবহার করে, যেমন `a1b2c3d4.png`। |
