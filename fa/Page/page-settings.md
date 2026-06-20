# Page Settings

Page settings نمایش site، defaults مربوط به upload page، background images و ظاهر admin panel را کنترل می‌کند.

## Global Settings

| Option | Purpose |
| --- | --- |
| Site title | title نمایش‌داده‌شده در browser tab. |
| Site icon | icon کوچک نمایش‌داده‌شده در browser tab. |
| ImgBed name | نام نمایش‌داده‌شده در frontend pages. |
| ImgBed logo | logo image نمایش‌داده‌شده در frontend pages. |
| Logo link | URLی که با click روی logo یا avatar باز می‌شود. |
| Background switch interval | interval چرخش برای چند background، بر حسب milliseconds. `60000` یعنی 60 seconds. |
| Background opacity | opacity مربوط به background image از `0` تا `1`. مقدار کمتر تصویر را روشن‌تر می‌کند. |
| Default URL prefix | prefix استفاده‌شده هنگام ساخت image links. خالی باشد، current site domain استفاده می‌شود. |

## Client Settings

| Option | Purpose |
| --- | --- |
| Announcement | announcement نمایش‌داده‌شده بالای upload page. HTML پشتیبانی می‌شود. |
| Default upload channel | upload channel پیش‌فرض در upload page. می‌توانید Smart Dispatch هم انتخاب کنید. |
| Default upload directory | default upload directory، مثل `/user/`. خالی یا `/` یعنی root. |
| Default naming method | استراتژی پیش‌فرض ساخت filename بعد از upload. پایین‌تر توضیح داده شده. |
| Convert to WebP by default | images را پیش از upload به WebP تبدیل می‌کند. |
| Enable compression by default | images را پیش از upload در browser به‌صورت local compress می‌کند. |
| Default compression threshold | وقتی image از این size بزرگ‌تر باشد، خودکار compress می‌شود، بر حسب MB. |
| Default target size | target file size پس از compression، بر حسب MB. |
| Login page background | background image برای user login page. |
| Upload page background | background image برای upload page. |
| Footer portal link | URLی که footer portal button باز می‌کند. |
| Hide footer | اگر enabled باشد، frontend footer را پنهان می‌کند. |

## Admin Settings

| Option | Purpose |
| --- | --- |
| Admin login background | background image برای admin login page. |
| Admin background | background image برای admin pages. یک image URL یا چند URL. |
| Image loading mode | preview loading mode برای admin file list. Original، original images را load می‌کند. Smart loading برای public images، thumbnails را و برای restricted images، originals را ترجیح می‌دهد. |
| Thumbnail source | service ساخت thumbnails: wsrv.nl، Cloudflare Image Resizing یا WordPress Photon. Cloudflare Image Resizing باید پیش از انتخاب، در Cloudflare enabled باشد. |
| Live2D widget | یک Live2D character در admin panel نشان می‌دهد. |
| Firework click effect | هنگام click روی page، firework effect نشان می‌دهد. |
| Star cursor trail | هنگام حرکت mouse، star trail نشان می‌دهد. |

## Background Image Formats

Login page background، upload page background و admin login background این formats را پشتیبانی می‌کنند:

| Value | Effect |
| --- | --- |
| `bing` | از Bing wallpaper rotation استفاده می‌کند. |
| `["https://example.com/1.jpg","https://example.com/2.jpg"]` | چند image را rotate می‌کند. |
| `["https://example.com/1.jpg"]` | یک background image استفاده می‌کند. |
| `["https://your-domain.com/random?..."]` | از random image API link استفاده می‌کند. می‌توانید Random Image API خودتان را در Other Settings configure کنید و generated random image link را اینجا به‌عنوان single-background entry paste کنید. |

admin background از image URLs پشتیبانی می‌کند. چند URL را طبق prompt صفحه می‌توان با comma انگلیسی جدا کرد. خالی باشد، default background استفاده می‌شود.

## Default Naming Method

| Method | Result |
| --- | --- |
| Default | time-random prefix + original filename، مثل `1760000000000_cat.png`. |
| Prefix only | فقط time-random prefix و extension، مثل `1760000000000.png`. |
| Original name only | original filename را نگه می‌دارد، مثل `cat.png`. اگر duplicate باشد، ImgBed `(1)`، `(2)` و مانند آن اضافه می‌کند. |
| Short link | از 8-character short ID و extension استفاده می‌کند، مثل `a1b2c3d4.png`. |
