# Page Settings

Page settings site display، upload page defaults، background images، اور admin panel appearance کو control کرتی ہیں۔

## Global Settings

| Option | Purpose |
| --- | --- |
| Site title | browser tab میں دکھنے والا title۔ |
| Site icon | browser tab میں دکھنے والا چھوٹا icon۔ |
| ImgBed name | frontend pages پر دکھنے والا نام۔ |
| ImgBed logo | frontend pages پر دکھنے والی logo image۔ |
| Logo link | logo یا avatar click کرنے پر کھلنے والا URL۔ |
| Background switch interval | multiple backgrounds کے لیے rotation interval، milliseconds میں۔ `60000` کا مطلب 60 seconds ہے۔ |
| Background opacity | background image opacity `0` سے `1` تک۔ کم value image کو lighter بناتی ہے۔ |
| Default URL prefix | image links generate کرتے وقت استعمال ہونے والا prefix۔ empty ہو تو current site domain استعمال ہوتا ہے۔ |

## Client Settings

| Option | Purpose |
| --- | --- |
| Announcement | upload page کے اوپر دکھنے والا announcement۔ HTML supported ہے۔ |
| Default upload channel | upload page پر default selected upload channel۔ Smart Dispatch بھی منتخب کیا جا سکتا ہے۔ |
| Default upload directory | default upload directory، مثلاً `/user/`۔ empty یا `/` کا مطلب root ہے۔ |
| Default naming method | upload کے بعد default filename generation strategy۔ نیچے دیکھیں۔ |
| Convert to WebP by default | upload سے پہلے images کو WebP میں convert کرتا ہے۔ |
| Enable compression by default | upload سے پہلے browser میں images locally compress کرتا ہے۔ |
| Default compression threshold | image اس size سے بڑی ہو تو automatically compress ہوتی ہے، MB میں۔ |
| Default target size | compression کے بعد target file size، MB میں۔ |
| Login page background | user login page کے لیے background image۔ |
| Upload page background | upload page کے لیے background image۔ |
| Footer portal link | footer portal button سے کھلنے والا URL۔ |
| Hide footer | enabled ہو تو frontend footer hide کرتا ہے۔ |

## Admin Settings

| Option | Purpose |
| --- | --- |
| Admin login background | admin login page کے لیے background image۔ |
| Admin background | admin pages کے لیے background image۔ ایک image URL یا multiple URLs استعمال کریں۔ |
| Image loading mode | admin file list کے لیے preview loading mode۔ Original original images load کرتا ہے۔ Smart loading public images کے لیے thumbnails اور restricted images کے لیے originals prefer کرتا ہے۔ |
| Thumbnail source | thumbnails generate کرنے والی service: wsrv.nl، Cloudflare Image Resizing، یا WordPress Photon۔ Cloudflare Image Resizing کو منتخب کرنے سے پہلے Cloudflare میں enable کرنا ہوگا۔ |
| Live2D widget | admin panel میں Live2D character دکھاتا ہے۔ |
| Firework click effect | page click کرنے پر firework effect دکھاتا ہے۔ |
| Star cursor trail | mouse move کرنے پر star trail دکھاتا ہے۔ |

## Background Image Formats

Login page background، upload page background، اور admin login background یہ formats support کرتے ہیں:

| Value | Effect |
| --- | --- |
| `bing` | Bing wallpaper rotation استعمال کرتا ہے۔ |
| `["https://example.com/1.jpg","https://example.com/2.jpg"]` | multiple images rotate کرتا ہے۔ |
| `["https://example.com/1.jpg"]` | single background image استعمال کرتا ہے۔ |
| `["https://your-domain.com/random?..."]` | random image API link استعمال کرتا ہے۔ آپ Other Settings میں اپنی Random Image API configure کر کے generated random image link یہاں single-background entry کے طور پر paste کر سکتے ہیں۔ |

admin background image URLs support کرتا ہے۔ page کے prompt کے مطابق multiple URLs کو English commas سے separate کیا جا سکتا ہے۔ empty ہو تو default background استعمال ہوتا ہے۔

## Default Naming Method

| Method | Result |
| --- | --- |
| Default | time-random prefix + original filename، جیسے `1760000000000_cat.png`۔ |
| Prefix only | صرف time-random prefix اور extension، جیسے `1760000000000.png`۔ |
| Original name only | original filename رکھتا ہے، جیسے `cat.png`۔ duplicate ہو تو ImgBed `(1)`، `(2)`، وغیرہ add کرتا ہے۔ |
| Short link | 8-character short ID اور extension استعمال کرتا ہے، جیسے `a1b2c3d4.png`۔ |
