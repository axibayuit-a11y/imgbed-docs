# User Rate Limits

User rate limits ควบคุมว่า regular users หรือ visitors จะ upload files จาก homepage ได้ถี่แค่ไหน ช่วยลดการ abuse ของ public upload pages

Feature นี้มีผลเฉพาะ homepage uploads Admin uploads และ uploads ที่ทำด้วย API Tokens จะไม่ถูกจำกัดโดย user rate limits

## ตั้งค่าที่ไหน

เปิด admin panel แล้วไปที่:

```text
System Settings -> Security Settings -> Upload Management -> User Rate Limits
```

![User rate limit settings](../../image/other/用户频控截图.png)

## Enable Rate Limits

หลังเปิด `Enable Rate Limits` ImgBed จะ track recent uploads ตาม uploader IP address

Default values:

| Setting | Default | Description |
| --- | --- | --- |
| Detection window | 1.5 hours | นับ upload records ย้อนหลังนานแค่ไหน |
| Max file count | 20 | จำนวน files สูงสุดที่ allowed ใน detection window |
| Single file size limit | 20 MB | ขนาดสูงสุดของ file เดียว |
| Total upload size limit | 200 MB | Total upload size สูงสุดใน detection window |

ตัวอย่าง ถ้าตั้ง 1.5 hour window, 20 files, 20 MB ต่อ file และ 200 MB total uploads จาก IP เดียวกันจะถูก block เมื่อเกิน limit ใด limit หนึ่ง

## Excluding File Types

`Excluded upload file types` block regular users หรือ visitors ไม่ให้ upload file categories ที่เลือก

Available categories:

| Type | Description |
| --- | --- |
| Images | jpg, png, webp, gif และ image files ใกล้เคียง |
| Videos | mp4, webm, mov และ video files ใกล้เคียง |
| Audio | mp3, flac, wav และ audio files ใกล้เคียง |
| Documents | pdf, txt, md, docx และ document files ใกล้เคียง |
| Other | Files นอก categories ด้านบน เช่น zip, rar, exe, apk |

ค่าเริ่มต้นคือไม่มี type ถูกเลือก แปลว่า allowed

เมื่อคลิก type จะ highlight ซึ่งหมายถึง type นั้นถูก block

ถ้าเลือก `Other` visitors ที่ upload zip หรือ rar files จะถูก block และเห็นข้อความว่า file type นี้ไม่ supported

## Block Messages

เมื่อ limit ถูก trigger users จะเห็น message ที่ตรงกับสถานการณ์:

![Too frequent upload message](../../image/other/频繁报错提示.png)

| Scenario | Message Meaning |
| --- | --- |
| Single file too large | File ใหญ่เกินไป ควร compress ก่อน upload |
| File type blocked | File type นี้ไม่ supported ให้เอาออกแล้วลองใหม่ |
| Uploads too frequent | Recent uploads ถี่เกินไป พร้อมแสดง retry time |
| Total size too high | Recent total upload size สูงเกินไป พร้อมแสดง retry time |

## ควร Enable เมื่อไร

Enable user rate limits ถ้า upload homepage เปิดให้ public เข้าถึงได้

เหตุผลที่พบบ่อย:

- กังวล scripted bulk uploads
- ต้องการจำกัด large visitor uploads
- ต้องการให้ regular users upload ได้เฉพาะ images ไม่ใช่ archives หรือ installers
- ต้องการให้ public upload ยังใช้งานได้ แต่ควบคุม resource usage

ถ้า site ใช้เองเท่านั้น หรือมีเฉพาะ administrators ที่ upload ได้ สามารถปิดไว้ได้
