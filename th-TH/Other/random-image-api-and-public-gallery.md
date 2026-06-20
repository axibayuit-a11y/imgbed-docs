# Random Image API และ Public Gallery

ทั้งสอง features ตั้งค่าได้ที่:

```text
System Settings -> Other Settings
```

## Random Image API

Random Image API return random file หนึ่งรายการจาก selected directories เหมาะกับ site backgrounds, avatar rotation หรือ random image calls จาก external pages

หลัง enable แล้วใช้:

```text
https://your-domain.com/random
```

## Random Image API Settings

| Option | Purpose |
| --- | --- |
| Enable | เปิดหรือปิด endpoint `/random` เมื่อ disabled จะ forbidden |
| Directories | จำกัดว่า random API ใช้ directories ใดได้ Directories ที่ไม่อยู่ในนี้จะใช้กับ API ไม่ได้ |
| Call demo | Generate random API links ที่ copy ได้โดยตรง |

เลือกได้หลาย directories เช่น ถ้า allow เฉพาะ `/landscape/` และ `/portrait/` random API จะเลือก files ได้เฉพาะจาก directories เหล่านั้นและ subdirectories

## Random Image API Parameters

| Parameter | Example | Purpose |
| --- | --- | --- |
| `dir` | `/landscape/` | ระบุ random directory |
| `content` | `image` | ระบุ media type ใช้ `image`, `video`, `audio` หรือ comma-separated combinations |
| `orientation` | `auto` | Filter image orientation ใช้ `portrait`, `landscape` หรือ `auto` |
| `type` | `url` | Return format ถ้าว่างคือ redirect, `url` return plain text URL, `json` return JSON |
| `origin` | `1` | ใช้กับ `type=url` เพื่อ return full URL |
| `age` | `all-ages,r12` | Filter ตาม age rating |
| `tag` | `wallpaper,sky` | Return เฉพาะ files ที่มี tags เหล่านี้ |
| `ex` | `private` | Exclude files ที่มี tags เหล่านี้ |

## Return Formats

ถ้าไม่มี `type` API จะ redirect ไปยัง random file URL โดยตรง

เมื่อ `type=url` จะ return text URL

เมื่อ `type=json` จะ return file information รวม file URL, file ID, file name, file type, tags, rating และ metadata ที่เกี่ยวข้อง

## Access Rules

Random Image API ปฏิบัติตาม public access rules:

| Rule | Effect |
| --- | --- |
| Directory restriction | เลือกได้เฉพาะ files ใน allowed directories |
| Blocklist | Blocklisted files ถูก exclude จาก random pool |
| Allowlist mode | เมื่อ enabled จะ return เฉพาะ files ที่ allowed สำหรับ public access |
| Age rating | R12, R16, R18 และ content คล้ายกันถูก filter ตาม current access mode |

ถ้าหลัง filtering ไม่มี file match API จะ return no matching result

## Cache

Random Image API cache directory candidate pools เพื่อเพิ่ม speed

เมื่อ files เปลี่ยน ImgBed จะ update directory cache version และ requests ภายหลังจะ rebuild candidate pool Empty directories จะถูก cache สั้น ๆ เพื่อเลี่ยง repeated queries

## Public Gallery

Public gallery ให้หน้า public browsing แบบ read-only สำหรับ directories ที่คุณอนุญาตให้ visitors เห็น

หลัง enable แล้ว visitors เปิดได้ที่:

```text
https://your-domain.com/browse/directory-name
```

## Public Gallery Settings

| Option | Purpose |
| --- | --- |
| Enable | เปิดหรือปิด public gallery เมื่อ disabled visitors จะ browse ไม่ได้ |
| Image loading mode | ควบคุมว่า previews ใช้ original images หรือ thumbnails |
| Open directories | กำหนดว่า visitors access directories ใดได้ |

## Image Loading Mode

| Mode | Purpose |
| --- | --- |
| Original | Visitor page load original files โดยตรง |
| Thumbnail | Visitor page prefer thumbnails เพื่อ loading ที่เร็วขึ้น |

## Open Directories

Open directories ตัดสินว่า visitors เห็นอะไรได้

Example:

```text
/1/,/2/,/landscape/,/portrait/
```

Visitors จะ access ได้ที่:

```text
https://your-domain.com/browse/1
https://your-domain.com/browse/2
https://your-domain.com/browse/landscape
https://your-domain.com/browse/portrait
```

Subdirectories ก็เปิดได้ เช่น `/2026/lucky/` Visitors จะถูก block จาก directories ที่ไม่ได้ open

## Public Gallery Features

| Feature | Description |
| --- | --- |
| Browse directories | ดู files และ subdirectories ใน open directories |
| Search | Search ด้วย file name, file ID หรือ tags |
| Type filter | Filter images, videos, audio หรือ other files |
| Tag filter | Include หรือ exclude selected tags |
| Orientation filter | Filter landscape หรือ portrait images |
| Time filter | Filter ตาม upload time range |
| Extension filter | Filter ตาม file extension |
| Copy link | Copy file access links |
| Media preview | ดูหรือเล่น images, videos และ audio บน visitor page |

## Public Gallery Access Rules

Public gallery ก็ปฏิบัติตาม public access rules:

| Rule | Effect |
| --- | --- |
| Open directories | แสดงเฉพาะ allowed directories |
| Access mode | Content ถูก filter ตาม current age-rating access mode |
| Allowlist mode | เมื่อ enabled จะแสดงเฉพาะ files ที่ allowed สำหรับ public access |
| Blocklist | Blocklisted files ถูกซ่อน |
