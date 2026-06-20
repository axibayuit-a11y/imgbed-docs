# Page Settings

Page settings ควบคุม site display, upload page defaults, background images และ admin panel appearance

## Global Settings

| Option | Purpose |
| --- | --- |
| Site title | Title ที่แสดงใน browser tab |
| Site icon | Icon เล็กที่แสดงใน browser tab |
| ImgBed name | Name ที่แสดงบน frontend pages |
| ImgBed logo | Logo image ที่แสดงบน frontend pages |
| Logo link | URL ที่เปิดเมื่อคลิก logo หรือ avatar |
| Background switch interval | Rotation interval สำหรับหลาย backgrounds หน่วย milliseconds `60000` หมายถึง 60 seconds |
| Background opacity | Opacity ของ background image จาก `0` ถึง `1` ค่าต่ำจะดูจางกว่า |
| Default URL prefix | Prefix ที่ใช้ตอน generate image links ถ้าว่างจะใช้ current site domain |

## Client Settings

| Option | Purpose |
| --- | --- |
| Announcement | Announcement ที่แสดงด้านบนของ upload page รองรับ HTML |
| Default upload channel | Upload channel ที่เลือกเป็น default บน upload page เลือก Smart Dispatch ได้ด้วย |
| Default upload directory | Default upload directory เช่น `/user/` ถ้าว่างหรือ `/` หมายถึง root |
| Default naming method | Strategy สำหรับ generate filename หลัง upload ดูด้านล่าง |
| Convert to WebP by default | Convert images เป็น WebP ก่อน upload |
| Enable compression by default | Compress images ใน browser ก่อน upload |
| Default compression threshold | Compress อัตโนมัติเมื่อ image เกิน size นี้ หน่วย MB |
| Default target size | Target file size หลัง compression หน่วย MB |
| Login page background | Background image สำหรับ user login page |
| Upload page background | Background image สำหรับ upload page |
| Footer portal link | URL ที่เปิดจาก footer portal button |
| Hide footer | เมื่อ enabled จะซ่อน frontend footer |

## Admin Settings

| Option | Purpose |
| --- | --- |
| Admin login background | Background image สำหรับ admin login page |
| Admin background | Background image สำหรับ admin pages ใช้ image URL เดียวหรือหลาย URLs |
| Image loading mode | Preview loading mode สำหรับ admin file list Original load original images Smart loading prefer thumbnails สำหรับ public images และ originals สำหรับ restricted images |
| Thumbnail source | Service ที่ใช้ generate thumbnails: wsrv.nl, Cloudflare Image Resizing หรือ WordPress Photon ต้อง enable Cloudflare Image Resizing ใน Cloudflare ก่อนเลือก |
| Live2D widget | แสดง Live2D character ใน admin panel |
| Firework click effect | แสดง firework effect เมื่อคลิก page |
| Star cursor trail | แสดง star trail เมื่อขยับ mouse |

## Background Image Formats

Login page background, upload page background และ admin login background รองรับ formats เหล่านี้:

| Value | Effect |
| --- | --- |
| `bing` | ใช้ Bing wallpaper rotation |
| `["https://example.com/1.jpg","https://example.com/2.jpg"]` | Rotate หลาย images |
| `["https://example.com/1.jpg"]` | ใช้ background image เดียว |
| `["https://your-domain.com/random?..."]` | ใช้ random image API link คุณสามารถ configure Random Image API ของตัวเองใน Other Settings แล้ว paste generated random image link ที่นี่เป็น single-background entry |

Admin background รองรับ image URLs หลาย URLs แยกด้วย English commas ตาม prompt บน page ถ้าว่างจะใช้ default background

## Default Naming Method

| Method | Result |
| --- | --- |
| Default | Time-random prefix + original filename เช่น `1760000000000_cat.png` |
| Prefix only | เฉพาะ time-random prefix และ extension เช่น `1760000000000.png` |
| Original name only | เก็บ original filename เช่น `cat.png` ถ้าซ้ำ ImgBed จะเพิ่ม `(1)`, `(2)` เป็นต้น |
| Short link | ใช้ 8-character short ID และ extension เช่น `a1b2c3d4.png` |
