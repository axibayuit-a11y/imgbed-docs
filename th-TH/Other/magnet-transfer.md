# Magnet Transfer

Magnet transfer ดาวน์โหลด files จาก magnet link แล้ว upload อัตโนมัติไปยัง cloud storage channel ที่คุณเลือก

เหมาะกับการย้าย anime episodes, videos, archives และ files ลักษณะใกล้เคียง Paste magnet link แล้ว ImgBed จะสร้าง background download task เมื่อ download เสร็จ file จะถูก upload เข้า ImgBed และ final link จะแสดงใน upload list

![Magnet transfer](../../image/other/磁力链接/磁力链接.png)

## ใช้จากที่ไหน

Magnet transfer entry อยู่ใน homepage upload area

Paste magnet link ลงใน input box เลือก `Transfer` แล้ว upload

![Upload anime](../../image/other/磁力链接/上传番剧.png)

## ก่อนใช้งานครั้งแรก

ต้อง configure magnet transfer ใน admin panel ก่อน

โดยทั่วไปต้องมี:

1. GitHub account สำหรับ run download task
2. Cloud upload channel เช่น Google Drive หรือ OneDrive
3. Target upload directory
4. Task timeout

เมื่อตั้งค่าพร้อมแล้ว กลับไปหน้า homepage และ paste magnet link เพื่อเริ่ม transfer

## Upload Magnet Link

1. Paste magnet link ใน homepage upload box
2. ตรวจว่า mode ตั้งเป็น `Transfer`
3. คลิก upload
4. รอ ImgBed create magnet task
5. หลัง task เริ่ม ให้ใช้ floating panel `Magnet Tasks` มุมขวาล่างเพื่อตรวจ progress

Download และ upload อาจใช้เวลา Speed ขึ้นกับ magnet resource, GitHub runtime environment และ selected cloud storage channel

![Magnet downloading](../../image/other/磁力链接/磁力链接下载中.png)

## หลัง Completion

เมื่อ task complete upload list จะแสดง file name และ link

Videos แสดง video preview, images แสดง image preview และ other files แสดง regular file icon

![Downloaded video](../../image/other/磁力链接/下载好后的视频.png)

Copy ได้:

| Link Type | Use Case |
| --- | --- |
| Original link | Direct file access |
| Markdown | Markdown posts หรือ notes |
| HTML | Web page code |
| BBCode | Forums ที่รองรับ BBCode |

## Magnet Task Panel

Magnet task panel มุมขวาล่างแสดง task count, task name, progress และ final status

Common states:

| Status | Meaning |
| --- | --- |
| Waiting | Task ถูกสร้างแล้วและรอ run |
| Downloading | Magnet resource กำลัง download |
| Uploading | File download เสร็จแล้วและกำลัง upload เข้า cloud storage |
| Completed | Upload สำเร็จและ copy link ได้ |
| Failed | Task ไม่เสร็จสมบูรณ์ ตรวจ message แล้วลองใหม่ |

## Tips

- ถ้า magnet link มีหลาย files ImgBed จะ prioritize main completed file สำหรับ display
- Large files ใช้เวลานาน รอ task finish ก่อน refresh page
- ถ้า magnet resource ไม่มี available peers อาจช้ามากหรือ fail
- ถ้า cloud account quota เต็ม, authorization หมดอายุ หรือ upload directory ผิด task อาจ fail
- Video preview อาจใช้เวลาสักครู่หลัง upload complete

## FAQ

### Paste Magnet Link แล้วไม่มีอะไรเริ่ม

Confirm ว่า magnet transfer enabled ใน admin panel และเลือก GitHub account กับ cloud channel ที่ใช้งานได้แล้ว

### Download ช้าตลอด

Magnet speed ขึ้นกับ resource เอง ถ้าไม่มี available peers download อาจช้ามากหรือเป็นไปไม่ได้

### Upload แล้วไม่เห็น Preview

ก่อนอื่น confirm ว่า file link เปิดได้ Video files อาจต้องใช้เวลาสั้น ๆ เพื่อ load ใน browser หรือเปิด link โดยตรงได้

### Task fail ควรตรวจอะไร?

ตรวจว่า magnet link valid, cloud channel ทำงานได้ และ upload directory ถูกต้อง จากนั้น submit task ใหม่
