# Page Settings

Page settings kiểm soát site display, upload page defaults, background images và admin panel appearance.

## Global Settings

| Option | Purpose |
| --- | --- |
| Site title | Title hiển thị trong browser tab. |
| Site icon | Icon nhỏ hiển thị trong browser tab. |
| ImgBed name | Name hiển thị trên frontend pages. |
| ImgBed logo | Logo image hiển thị trên frontend pages. |
| Logo link | URL mở khi click logo hoặc avatar. |
| Background switch interval | Rotation interval cho nhiều backgrounds, tính bằng milliseconds. `60000` nghĩa là 60 seconds. |
| Background opacity | Opacity của background image từ `0` đến `1`. Giá trị thấp hơn sẽ nhạt hơn. |
| Default URL prefix | Prefix dùng khi generate image links. Để trống sẽ dùng current site domain. |

## Client Settings

| Option | Purpose |
| --- | --- |
| Announcement | Announcement hiển thị ở đầu upload page. Hỗ trợ HTML. |
| Default upload channel | Upload channel được chọn mặc định trên upload page. Cũng có thể chọn Smart Dispatch. |
| Default upload directory | Default upload directory, ví dụ `/user/`. Để trống hoặc `/` nghĩa là root. |
| Default naming method | Strategy generate filename mặc định sau upload. Xem bên dưới. |
| Convert to WebP by default | Convert images sang WebP trước khi upload. |
| Enable compression by default | Compress images local trong browser trước khi upload. |
| Default compression threshold | Tự động compress khi image vượt size này, tính bằng MB. |
| Default target size | Target file size sau compression, tính bằng MB. |
| Login page background | Background image cho user login page. |
| Upload page background | Background image cho upload page. |
| Footer portal link | URL mở khi nhấn footer portal button. |
| Hide footer | Khi enabled, ẩn frontend footer. |

## Admin Settings

| Option | Purpose |
| --- | --- |
| Admin login background | Background image cho admin login page. |
| Admin background | Background image cho admin pages. Dùng một image URL hoặc nhiều URLs. |
| Image loading mode | Preview loading mode cho admin file list. Original load original images. Smart loading ưu tiên thumbnails cho public images và originals cho restricted images. |
| Thumbnail source | Service dùng để generate thumbnails: wsrv.nl, Cloudflare Image Resizing hoặc WordPress Photon. Cloudflare Image Resizing phải được enable trong Cloudflare trước khi chọn. |
| Live2D widget | Hiển thị Live2D character trong admin panel. |
| Firework click effect | Hiển thị firework effect khi click page. |
| Star cursor trail | Hiển thị star trail khi di chuyển mouse. |

## Background Image Formats

Login page background, upload page background và admin login background hỗ trợ các formats này:

| Value | Effect |
| --- | --- |
| `bing` | Dùng Bing wallpaper rotation. |
| `["https://example.com/1.jpg","https://example.com/2.jpg"]` | Rotate nhiều images. |
| `["https://example.com/1.jpg"]` | Dùng một background image. |
| `["https://your-domain.com/random?..."]` | Dùng random image API link. Bạn có thể cấu hình Random Image API của mình trong Other Settings, rồi paste generated random image link ở đây như single-background entry. |

Admin background hỗ trợ image URLs. Có thể tách nhiều URLs bằng English commas theo prompt trên page. Để trống sẽ dùng default background.

## Default Naming Method

| Method | Result |
| --- | --- |
| Default | Time-random prefix + original filename, ví dụ `1760000000000_cat.png`. |
| Prefix only | Chỉ time-random prefix và extension, ví dụ `1760000000000.png`. |
| Original name only | Giữ original filename, ví dụ `cat.png`. Nếu trùng, ImgBed thêm `(1)`, `(2)`, v.v. |
| Short link | Dùng 8-character short ID và extension, ví dụ `a1b2c3d4.png`. |
