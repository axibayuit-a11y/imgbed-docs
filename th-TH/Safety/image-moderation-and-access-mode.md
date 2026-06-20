# Image Moderation และ Access Mode

Image moderation กำหนด age rating ให้ uploaded images ส่วน Access mode ควบคุมว่า ratings ใดสามารถมองเห็นผ่าน public access

มีผลกับ public gallery, public file URLs และ random image API แต่ไม่จำกัด admin panel Administrators ยังดูและ manage files ได้ทั้งหมด

## ตั้งค่าที่ไหน

เปิด admin panel แล้วไปที่:

```text
System Settings -> Security Settings -> Upload Management -> Image Moderation
```

Settings หลัก:

- Access mode
- Enable moderation
- Moderation provider

## Access Mode ทำอะไร

Access mode ตัดสินว่า age ratings ใดแสดงแบบ public ได้

Current modes:

| Access Mode | Publicly Visible Ratings |
| --- | --- |
| Adult mode | General, R12, R16, R18 |
| Youth mode | General, R12, R16 |
| Teen mode | General, R12 |
| Child mode | เฉพาะ General |

Default คือ Adult mode

สำหรับ private sites หรือ sites ที่มี mature content Adult mode อาจเหมาะสม ถ้าต้องการ public gallery ที่ conservative กว่า ให้เลือก Youth, Teen หรือ Child mode

## Enable Moderation แล้วเกิดอะไร

เมื่อ moderation enabled ImgBed จะ call selected moderation provider ตอน upload และ save age rating ที่ตรวจพบ

Ratings หลัก:

| Rating | Meaning |
| --- | --- |
| General | Safe public content |
| R12 | Content ที่ sensitive เล็กน้อย |
| R16 | Content ที่ sensitive ปานกลาง |
| R18 | Adult content |

Moderation result ใช้ตอนตัดสิน public access

ถ้าไม่ได้ enable moderation หรือ files เก่าไม่มี rating files เหล่านั้นจะถือเป็น unrated Unrated files จะไม่ถูกเอาออกจาก public gallery หรือ random image API อัตโนมัติเพียงเพราะไม่มี rating

## เลือก Moderation Provider

Available providers:

- moderatecontent.com
- nsfwjs
- Sightengine

แต่ละ provider มี requirements ต่างกัน:

- moderatecontent.com มักต้องใช้ API Key
- nsfwjs มักต้องใช้ API endpoint URL
- Sightengine ต้องใช้ API user และ API secret

เลือกตาม account, availability และ detection quality ของคุณ ตราบใดที่ moderation enabled และ configured ถูกต้อง ImgBed จะพยายามเขียน image rating ตอน upload

## ผลต่อ Public Gallery

Public gallery filter files ตาม access mode

Examples:

- Adult mode: R18 images แสดงได้
- Youth mode: R18 images ถูกซ่อน
- Teen mode: R16 และ R18 images ถูกซ่อน
- Child mode: แสดงเฉพาะ General images

มีผลเฉพาะ normal public access Admin panel ยังแสดง files ทั้งหมด

## ผลต่อ Public File URLs

Public file URLs คือ direct image links ที่ visitors เปิด

ถ้า file rating allowed ตาม current access mode ImgBed จะ return original image

ถ้า rating สูงกว่า allowed level normal public access จะไม่ return original image แต่ ImgBed จะ return configured blocked result หรือ blocked fallback image แทน

Example:

- Current mode คือ Child mode
- Image หนึ่งมี rating R18
- Visitor เปิด public URL โดยตรง
- ImgBed ไม่ return R18 original image ให้ visitor นั้น

![Restricted file image](../../image/Safety/文件受限图.png)

Administrators ที่ดู files ใน admin panel จะไม่ได้รับผลจาก restriction นี้

## ผลต่อ Random Image API

Random image API ก็ filter candidate pool ตาม access mode เช่นกัน

ใน Child mode random images จะเลือกจาก General-rated files เท่านั้น

ใน Youth mode random images อาจมาจาก General, R12 และ R16 files แต่ไม่รวม R18 files

ช่วยป้องกันไม่ให้ random image API bypass public gallery restrictions

## ความสัมพันธ์กับ List Rules

Access mode ไม่ใช่ public access rule เดียว แต่ทำงานร่วมกับ allow/block list rules

สรุปง่าย ๆ:

- Allowlisted content เป็น public ก่อน
- Blocklisted content ไม่สามารถดูตรง ๆ โดย regular visitors
- Content ที่ไม่อยู่ใน list ใด ๆ จะถูกตรวจตาม access mode

ถ้า image ถูกจำกัดทั้งด้วย age rating และ list rules regular visitors ก็ยังดู original file โดยตรงไม่ได้

## Recommended Settings

สำหรับ public sites:

- Enable moderation
- เลือก access mode ให้ตรงกับ audience ของ site
- ใช้ Child mode หรือ Teen mode สำหรับ visitors ทุกวัย
- หลีกเลี่ยง Adult mode หากไม่ต้องการแสดง mature content แบบ public
- Review file ratings ใน admin panel และ adjust manually เมื่อจำเป็น

สำหรับ private หรือ personal sites:

- Adult mode มักใช้ได้
- Enable moderation ถ้ามีประโยชน์
- Review และ adjust ratings ใน admin panel ตามต้องการ

## FAQ

### เปลี่ยน Access Mode แล้ว Files จะหายจาก Admin Panel ไหม?

ไม่

Access mode มีผลเฉพาะ normal public access ไม่มีผลกับ admin panel

### ทำไม Public Gallery แสดง Images น้อยลงหลังเปลี่ยนเป็น Child Mode?

Child mode อนุญาตให้แสดงเฉพาะ General-rated files แบบ public R12, R16 และ R18 files จะถูก filter ออก

### Public URLs ยังเปิด Adult Images ได้ไหม?

ถ้า current access mode ไม่อนุญาต rating นั้น normal public URLs จะไม่ return original image

### Random Image API Return Restricted Images ได้ไหม?

ไม่ได้

Random image API filter candidates ตาม current access mode

### Old Unrated Images จะเป็นอย่างไร?

Unrated images จะไม่ถูกซ่อนอัตโนมัติเพียงเพราะไม่มี moderation results คุณสามารถ adjust ratings ใน admin panel ภายหลังได้
