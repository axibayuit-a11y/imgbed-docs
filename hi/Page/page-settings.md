# Page Settings

Page settings site display, upload page defaults, background images और admin panel appearance control करती हैं।

## Global Settings

| Option | Purpose |
| --- | --- |
| Site title | Browser tab में दिखने वाला title। |
| Site icon | Browser tab में दिखने वाला छोटा icon। |
| ImgBed name | Frontend pages पर दिखने वाला नाम। |
| ImgBed logo | Frontend pages पर दिखने वाली logo image। |
| Logo link | Logo या avatar click करने पर खुलने वाला URL। |
| Background switch interval | Multiple backgrounds के rotation interval, milliseconds में। `60000` मतलब 60 seconds। |
| Background opacity | Background image opacity `0` से `1` तक। Lower values हल्की दिखती हैं। |
| Default URL prefix | Image links generate करते समय इस्तेमाल होने वाला prefix। Empty होने पर current site domain इस्तेमाल होता है। |

## Client Settings

| Option | Purpose |
| --- | --- |
| Announcement | Upload page के top पर दिखने वाला announcement। HTML supported है। |
| Default upload channel | Upload page पर default selected upload channel। Smart Dispatch भी चुन सकते हैं। |
| Default upload directory | Default upload directory, जैसे `/user/`। Empty या `/` मतलब root। |
| Default naming method | Upload के बाद filename generate करने की default strategy। नीचे देखें। |
| Convert to WebP by default | Upload से पहले images को WebP में convert करता है। |
| Enable compression by default | Upload से पहले browser में locally images compress करता है। |
| Default compression threshold | Image इस size से बड़ी होने पर automatically compress होगी, MB में। |
| Default target size | Compression के बाद target file size, MB में। |
| Login page background | User login page की background image। |
| Upload page background | Upload page की background image। |
| Footer portal link | Footer portal button click करने पर खुलने वाला URL। |
| Hide footer | Enabled होने पर frontend footer hide करता है। |

## Admin Settings

| Option | Purpose |
| --- | --- |
| Admin login background | Admin login page की background image। |
| Admin background | Admin pages की background image। एक image URL या multiple URLs इस्तेमाल करें। |
| Image loading mode | Admin file list के लिए preview loading mode। Original original images load करता है। Smart loading public images के लिए thumbnails और restricted images के लिए originals prefer करता है। |
| Thumbnail source | Thumbnails generate करने वाली service: wsrv.nl, Cloudflare Image Resizing या WordPress Photon। Cloudflare Image Resizing select करने से पहले Cloudflare में enabled होना चाहिए। |
| Live2D widget | Admin panel में Live2D character दिखाता है। |
| Firework click effect | Page click करने पर firework effect दिखाता है। |
| Star cursor trail | Mouse move करने पर star trail दिखाता है। |

## Background Image Formats

Login page background, upload page background और admin login background ये formats support करते हैं:

| Value | Effect |
| --- | --- |
| `bing` | Bing wallpaper rotation इस्तेमाल करता है। |
| `["https://example.com/1.jpg","https://example.com/2.jpg"]` | Multiple images rotate करता है। |
| `["https://example.com/1.jpg"]` | Single background image इस्तेमाल करता है। |
| `["https://your-domain.com/random?..."]` | Random image API link इस्तेमाल करता है। Other Settings में अपना Random Image API configure करें, फिर generated random image link को single-background entry के रूप में यहाँ paste करें। |

Admin background image URLs support करता है। Page पर prompt के अनुसार multiple URLs English commas से separate किए जा सकते हैं। Empty होने पर default background इस्तेमाल होता है।

## Default Naming Method

| Method | Result |
| --- | --- |
| Default | Time-random prefix + original filename, जैसे `1760000000000_cat.png`। |
| Prefix only | केवल time-random prefix और extension, जैसे `1760000000000.png`। |
| Original name only | Original filename रखता है, जैसे `cat.png`। Duplicate होने पर ImgBed `(1)`, `(2)` आदि जोड़ता है। |
| Short link | 8-character short ID और extension इस्तेमाल करता है, जैसे `a1b2c3d4.png`। |
