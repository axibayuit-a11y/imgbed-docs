# การตั้งค่าอัปโหลด

การตั้งค่าอัปโหลดใช้เชื่อม ImgBed กับช่องทางจัดเก็บไฟล์ของคุณ หลังจากตั้งค่าช่องทางแล้ว รูปภาพและไฟล์ที่อัปโหลดจะถูกบันทึกไปยังบริการที่เลือก และ ImgBed จะช่วยจัดการลิงก์เข้าถึง รายการไฟล์ พรีวิว แกลเลอรีสาธารณะ Random Image API การเข้าถึง WebDAV และงานที่เกี่ยวข้อง

ผู้ใช้แต่ละคนอาจเหมาะกับช่องทางต่างกัน หากต้องการเริ่มแบบง่าย Telegram, Discord หรือ GitHub Releases เป็นตัวเลือกที่ดี หากให้ความสำคัญกับพื้นที่ ความเร็ว และความเสถียรระยะยาว ให้พิจารณา Cloudflare R2, S3, OneDrive, Google Drive, Dropbox, Yandex, pCloud หรือ WebDAV ของคุณเอง

## ก่อนเริ่มต้น

- เตรียมบัญชี storage หรือ API credentials ที่ต้องการใช้
- ตรวจสอบว่าโดเมน ImgBed เปิดได้ตามปกติ เพราะช่องทางแบบ OAuth ต้องใช้ callback URL
- หลังเพิ่มช่องทางแล้ว แนะนำให้อัปโหลดรูปทดสอบก่อน เพื่อยืนยันว่าไฟล์บันทึกและเปิดดูได้

## รายการช่องทาง

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

## เนื้อหาในบทนี้

- ข้อมูลที่ต้องเตรียมก่อนตั้งค่าแต่ละช่องทางอัปโหลด
- วิธีสร้างแอป คัดลอก key หรือ authorize Token บนแพลตฟอร์มภายนอก
- วิธีกรอกค่ากลับเข้า ImgBed และตรวจสอบว่าอัปโหลดได้จริง
