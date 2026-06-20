# การตั้งค่าอัปโหลด

ส่วนนี้จัดเรียงตามลำดับ channel เดียวกับหน้า System Settings เพื่อให้คุณไปยัง storage provider ที่ต้องตั้งค่าได้ทันที

## โครงสร้างของส่วนนี้

- แต่ละ provider มีหน้าแยกของตัวเอง การแยก upload channel ทั้ง 13 แบบออกจากกันช่วยให้ทำตามขั้นตอนได้ง่ายขึ้น
- รูปหน้าจอเก็บไว้ใน `../../image/upload/provider-name/` และอ้างอิงแบบ local จากแต่ละหน้า
- เอกสารภาษาไทยถูกปรับให้เข้ากับการใช้งานจริง โดยยังคงชื่อ field ให้ใกล้กับ UI ของผลิตภัณฑ์เท่าที่เหมาะสม

## รายการ Channel

- [Telegram](./telegram.md)
- [Cloudflare R2](./cloudflare-r2.md)
- [S3](./s3.md)
- [WebDAV](./webdav.md)
- [Discord](./discord.md)
- [Hugging Face](./huggingface.md)
- [GitHub Releases](./github-releases.md)
- [GitLab Packages](./gitlab-packages.md)
- [OneDrive](./onedrive.md)
- [Google Drive](./google-drive.md)
- [Dropbox](./dropbox.md)
- [Yandex](./yandex.md)
- [pCloud](./pcloud.md)

## บทนี้ครอบคลุมอะไรบ้าง

- วิธีเพิ่ม upload channel แต่ละประเภท
- ต้องเตรียม credentials, keys หรือ IDs อะไรก่อนเพิ่ม channel
- วิธีตรวจสอบว่า channel พร้อมใช้อัปโหลดแล้วหรือยัง

รายละเอียด troubleshooting, quota strategy และ best practices จะอธิบายแยกไว้ในหน้าที่เกี่ยวข้อง
