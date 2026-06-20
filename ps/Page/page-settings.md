# Page Settings

Page settings د site display، upload page defaults، background images او admin panel appearance کنټرولوي.

## Global Settings

| Option | موخه |
| --- | --- |
| Site title | هغه title چې browser tab کې ښکاري. |
| Site icon | هغه کوچنی icon چې browser tab کې ښکاري. |
| ImgBed name | په frontend pages کې ښکاره کېدونکی نوم. |
| ImgBed logo | په frontend pages کې ښکاره کېدونکی logo image. |
| Logo link | هغه URL چې د logo یا avatar په کلیک پرانیستل کېږي. |
| Background switch interval | د څو backgrounds د rotation interval، په milliseconds کې. `60000` یعنې 60 seconds. |
| Background opacity | د background image opacity له `0` تر `1` پورې. ټیټ values روښانه وي. |
| Default URL prefix | د image links د جوړولو پر وخت کارېدونکی prefix. تش وي نو د اوسني site domain کارېږي. |

## Client Settings

| Option | موخه |
| --- | --- |
| Announcement | هغه announcement چې د upload page په سر کې ښکاري. HTML supported دی. |
| Default upload channel | upload channel چې په upload page کې default selected وي. Smart Dispatch هم ټاکلای شئ. |
| Default upload directory | default upload directory، لکه `/user/`. تش یا `/` یعنې root. |
| Default naming method | له upload وروسته د default filename generation strategy. لاندې یې وګورئ. |
| Convert to WebP by default | images له upload مخکې WebP ته بدلوي. |
| Enable compression by default | images له upload مخکې په browser کې locally compress کوي. |
| Default compression threshold | کله چې image له دې size واوړي، په اتومات ډول compress کېږي، په MB کې. |
| Default target size | له compression وروسته target file size، په MB کې. |
| Login page background | د user login page background image. |
| Upload page background | د upload page background image. |
| Footer portal link | هغه URL چې footer portal button یې پرانیزي. |
| Hide footer | که enabled وي، frontend footer پټوي. |

## Admin Settings

| Option | موخه |
| --- | --- |
| Admin login background | د admin login page background image. |
| Admin background | د admin pages background image. یو image URL یا څو URLs وکاروئ. |
| Image loading mode | د admin file list preview loading mode. Original اصلي images load کوي. Smart loading د public images لپاره thumbnails او د restricted images لپاره originals ته ترجیح ورکوي. |
| Thumbnail source | د thumbnails جوړولو service: wsrv.nl، Cloudflare Image Resizing، یا WordPress Photon. Cloudflare Image Resizing باید په Cloudflare کې مخکې enabled وي. |
| Live2D widget | په admin panel کې Live2D character ښيي. |
| Firework click effect | د page کلیک پر وخت firework effect ښيي. |
| Star cursor trail | د mouse movement پر وخت star trail ښيي. |

## د Background Image Formats

Login page background، upload page background او admin login background دا formats ملاتړ کوي:

| Value | اغېز |
| --- | --- |
| `bing` | Bing wallpaper rotation کاروي. |
| `["https://example.com/1.jpg","https://example.com/2.jpg"]` | څو images rotate کوي. |
| `["https://example.com/1.jpg"]` | یو background image کاروي. |
| `["https://your-domain.com/random?..."]` | د random image API link کاروي. خپل Random Image API په Other Settings کې تنظیمولای شئ، بیا generated random image link دلته د single-background entry په توګه paste کړئ. |

admin background د image URLs ملاتړ کوي. څو URLs د page د prompt له مخې په English commas جلا کېدای شي. تش وي نو default background کارېږي.

## Default Naming Method

| Method | Result |
| --- | --- |
| Default | Time-random prefix + original filename، لکه `1760000000000_cat.png`. |
| Prefix only | یوازې time-random prefix او extension، لکه `1760000000000.png`. |
| Original name only | original filename ساتي، لکه `cat.png`. که duplicate وي، ImgBed `(1)`، `(2)` او داسې نور اضافه کوي. |
| Short link | 8-character short ID او extension کاروي، لکه `a1b2c3d4.png`. |
