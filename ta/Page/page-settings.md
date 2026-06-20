# Page Settings

Page settings site display, upload page defaults, background images, admin panel appearance ஆகியவற்றை கட்டுப்படுத்தும்.

## Global Settings

| Option | Purpose |
| --- | --- |
| Site title | browser tab-ல் காட்டப்படும் title. |
| Site icon | browser tab-ல் காட்டப்படும் சிறிய icon. |
| ImgBed name | frontend pages-ல் காட்டப்படும் பெயர். |
| ImgBed logo | frontend pages-ல் காட்டப்படும் logo image. |
| Logo link | logo அல்லது avatar click செய்தால் திறக்கும் URL. |
| Background switch interval | multiple backgrounds rotation interval, milliseconds. `60000` = 60 seconds. |
| Background opacity | background image opacity `0` முதல் `1` வரை. குறைந்த value image-ஐ lighter ஆக்கும். |
| Default URL prefix | image links generate செய்யும் போது பயன்படுத்தும் prefix. empty என்றால் current site domain. |

## Client Settings

| Option | Purpose |
| --- | --- |
| Announcement | upload page மேல் காட்டப்படும் announcement. HTML supported. |
| Default upload channel | upload page-ல் default selected upload channel. Smart Dispatch தேர்வு செய்யலாம். |
| Default upload directory | default upload directory, உதா. `/user/`. empty அல்லது `/` என்றால் root. |
| Default naming method | upload பிறகு default filename generation strategy. கீழே பார்க்கவும். |
| Convert to WebP by default | upload முன் images-ஐ WebP-க்கு convert. |
| Enable compression by default | upload முன் browser-ல் images locally compress. |
| Default compression threshold | image இந்த size-ஐ மீறினால் automatically compress, MB. |
| Default target size | compression பிறகு target file size, MB. |
| Login page background | user login page background image. |
| Upload page background | upload page background image. |
| Footer portal link | footer portal button திறக்கும் URL. |
| Hide footer | enabled என்றால் frontend footer hide. |

## Admin Settings

| Option | Purpose |
| --- | --- |
| Admin login background | admin login page background image. |
| Admin background | admin pages background image. ஒரு image URL அல்லது multiple URLs. |
| Image loading mode | admin file list preview loading mode. Original original images load செய்யும். Smart loading public images-க்கு thumbnails, restricted images-க்கு originals prefer செய்யும். |
| Thumbnail source | thumbnails generate செய்யும் service: wsrv.nl, Cloudflare Image Resizing, WordPress Photon. Cloudflare Image Resizing தேர்வு செய்ய முன் Cloudflare-ல் enable செய்ய வேண்டும். |
| Live2D widget | admin panel-ல் Live2D character காட்டும். |
| Firework click effect | page click செய்தால் firework effect. |
| Star cursor trail | mouse move செய்தால் star trail. |

## Background Image Formats

Login page background, upload page background, admin login background இந்த formats support செய்கின்றன:

| Value | Effect |
| --- | --- |
| `bing` | Bing wallpaper rotation பயன்படுத்தும். |
| `["https://example.com/1.jpg","https://example.com/2.jpg"]` | multiple images rotate. |
| `["https://example.com/1.jpg"]` | single background image. |
| `["https://your-domain.com/random?..."]` | random image API link. Other Settings-ல் உங்கள் Random Image API configure செய்து generated random image link-ஐ single-background entry ஆக paste செய்யலாம். |

admin background image URLs support செய்கிறது. page prompt படி multiple URLs English commas மூலம் separate செய்யலாம். empty என்றால் default background.

## Default Naming Method

| Method | Result |
| --- | --- |
| Default | time-random prefix + original filename, உதா. `1760000000000_cat.png`. |
| Prefix only | time-random prefix மற்றும் extension மட்டும், உதா. `1760000000000.png`. |
| Original name only | original filename வைத்திருக்கும், உதா. `cat.png`. duplicate என்றால் ImgBed `(1)`, `(2)` போன்றவை சேர்க்கும். |
| Short link | 8-character short ID மற்றும் extension, உதா. `a1b2c3d4.png`. |
