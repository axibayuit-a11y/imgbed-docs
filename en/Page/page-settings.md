# Page Settings

Page settings control site display, upload page defaults, background images, and admin panel appearance.

## Global Settings

| Option | Purpose |
| --- | --- |
| Site title | Title shown in the browser tab. |
| Site icon | Small icon shown in the browser tab. |
| ImgBed name | Name shown on the frontend pages. |
| ImgBed logo | Logo image shown on the frontend pages. |
| Logo link | URL opened when clicking the logo or avatar. |
| Background switch interval | Rotation interval for multiple backgrounds, in milliseconds. `60000` means 60 seconds. |
| Background opacity | Background image opacity from `0` to `1`. Lower values are lighter. |
| Default URL prefix | Prefix used when generating image links. Empty means the current site domain is used. |

## Client Settings

| Option | Purpose |
| --- | --- |
| Announcement | Announcement shown at the top of the upload page. HTML is supported. |
| Default upload channel | The upload channel selected by default on the upload page. You can also choose Smart Dispatch. |
| Default upload directory | Default upload directory, such as `/user/`. Empty or `/` means root. |
| Default naming method | Default filename generation strategy after upload. See below. |
| Convert to WebP by default | Converts images to WebP before upload. |
| Enable compression by default | Compresses images locally in the browser before upload. |
| Default compression threshold | Automatically compress when an image exceeds this size, in MB. |
| Default target size | Target file size after compression, in MB. |
| Login page background | Background image for the user login page. |
| Upload page background | Background image for the upload page. |
| Footer portal link | URL opened by the footer portal button. |
| Hide footer | Hides the frontend footer when enabled. |

## Admin Settings

| Option | Purpose |
| --- | --- |
| Admin login background | Background image for the admin login page. |
| Admin background | Background image for admin pages. Use one image URL or multiple URLs. |
| Image loading mode | Preview loading mode for the admin file list. Original loads original images. Smart loading prefers thumbnails for public images and originals for restricted images. |
| Thumbnail source | Service used to generate thumbnails: wsrv.nl, Cloudflare Image Resizing, or WordPress Photon. Cloudflare Image Resizing must be enabled in Cloudflare before selecting it. |
| Live2D widget | Shows a Live2D character in the admin panel. |
| Firework click effect | Shows a firework effect when clicking the page. |
| Star cursor trail | Shows a star trail when moving the mouse. |

## Background Image Formats

Login page background, upload page background, and admin login background support these formats:

| Value | Effect |
| --- | --- |
| `bing` | Uses Bing wallpaper rotation. |
| `["https://example.com/1.jpg","https://example.com/2.jpg"]` | Rotates multiple images. |
| `["https://example.com/1.jpg"]` | Uses a single background image. |
| `["https://your-domain.com/random?..."]` | Uses a random image API link. You can configure your own Random Image API in Other Settings, then paste the generated random image link here as a single-background entry. |

The admin background supports image URLs. Multiple URLs can be separated by English commas as prompted on the page. Empty means the default background is used.

## Default Naming Method

| Method | Result |
| --- | --- |
| Default | Time-random prefix + original filename, such as `1760000000000_cat.png`. |
| Prefix only | Time-random prefix and extension only, such as `1760000000000.png`. |
| Original name only | Keeps the original filename, such as `cat.png`. If duplicated, ImgBed adds `(1)`, `(2)`, and so on. |
| Short link | Uses an 8-character short ID and extension, such as `a1b2c3d4.png`. |
