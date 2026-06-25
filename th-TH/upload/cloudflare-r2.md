# เพิ่มช่องทาง Cloudflare R2

## เหมาะกับกรณีไหน

ใช้ Cloudflare R2 เมื่อ:

- ImgBed site ของคุณ deploy อยู่บน Cloudflare อยู่แล้ว และต้องการเก็บไฟล์ใน R2 bucket ภายใต้ Cloudflare account เดียวกัน
- ไม่ต้องการตั้งค่า S3 endpoint, access key และ secret key แยกต่างหาก
- ต้องการให้การอ่านและเขียนผ่าน Worker หรือ Pages R2 binding โดยตั้งค่าน้อยที่สุด

สรุปสั้น ๆ:

ช่องทาง R2 ไม่ได้สร้างด้วยตัวเองในแผงผู้ดูแลของ ImgBed ก่อนอื่นต้อง bind R2 bucket เข้ากับ Cloudflare project และ binding variable name ต้องเป็น `img_r2`

## สิ่งที่ต้องเตรียมก่อนเริ่ม

- บัญชี Cloudflare
- R2 bucket ที่มีอยู่แล้ว
- สิทธิ์จัดการ Cloudflare project ที่ deploy ImgBed อยู่

## กำหนดค่าใน Cloudflare

### 1. สร้าง R2 Bucket

1. เข้าสู่ระบบ Cloudflare Dashboard
2. เปิด `R2 Object Storage`
3. คลิกสร้าง bucket
4. เลือกชื่อ bucket เช่น `imgbed`

Bucket นี้คือที่เก็บไฟล์ที่อัปโหลด

![สร้าง R2 bucket](../../image/upload/cloudflare-r2/创建一个存储桶img-r2.png)

### 2. Bind Bucket เข้ากับ ImgBed Project

เลือกตำแหน่ง binding ตามประเภท deployment:

| ประเภท Deployment | ตำแหน่ง Binding |
| --- | --- |
| Pages | `Current Pages project -> Settings -> Functions -> R2 bucket bindings` |
| Worker | `Current Worker -> Settings -> Bindings -> R2 bucket bindings` |

ตอนเพิ่ม binding ให้ใส่ฟิลด์สำคัญดังนี้:

| ฟิลด์ | ค่า |
| --- | --- |
| Variable name | `img_r2` |
| R2 bucket | เลือก bucket ที่สร้างไว้ |

Variable name ต้องเป็น `img_r2` แบบตรงตัว การอัปโหลด อ่าน และลบไฟล์ R2 อาศัย binding name นี้ทั้งหมด

### 3. Deploy Project ใหม่

หลังบันทึก binding แล้ว ให้ deploy ImgBed ใหม่ เพื่อให้ Worker หรือ Pages runtime เข้าถึง `img_r2` ได้

## สิ่งที่จะเห็นใน ImgBed

เมื่อ R2 binding พร้อมใช้งานแล้ว ให้เปิด:

1. การตั้งค่าระบบ
2. การตั้งค่าการอัปโหลด
3. ช่องทาง `Cloudflare R2`

ระบบจะสร้างช่องทางแบบ fixed ให้อัตโนมัติ:

| ฟิลด์ | ค่าคงที่ |
| --- | --- |
| Channel name | `Cloudflare R2` |
| Channel type | `cfr2` |
| Storage mode | `binding` |
| Configuration source | Environment binding |

นี่คือช่องทาง fixed binding จึงไม่ต้องคลิกเพิ่มช่องทางเพื่อสร้าง และไม่สามารถลบเหมือนช่องทางทั่วไปได้

## ฟิลด์ที่แก้ไขได้ใน Admin Panel

| ฟิลด์ | ใช้ทำอะไร | จำเป็น |
| --- | --- | --- |
| Enable channel | ควบคุมว่า R2 จะเข้าร่วมการเลือกช่องทางอัปโหลดหรือไม่ | ใช่ |
| Account ID | ใช้เมื่อเปิด quota limits และต้อง query official R2 usage | แนะนำเมื่อเปิด quota limits |
| Bucket name | ใช้เมื่อเปิด quota limits และต้อง query official R2 usage | แนะนำเมื่อเปิด quota limits |
| Quota limit | ควบคุมว่าช่องทาง R2 นี้จะเข้าร่วมการเลือกช่องทางอัปโหลดตาม capacity หรือไม่ | ไม่ |
| Threshold | หยุดเขียนเข้าช่องทางนี้เมื่อ usage ถึง percentage ที่กำหนด | จำเป็นเมื่อเปิด quota limits |

คุณคัดลอก Account ID ได้จากแผงข้อมูลบัญชีใน Cloudflare dashboard กรอกเฉพาะเมื่ออยากให้ ImgBed query และ enforce R2 quota usage

![รับ Account ID](../../image/upload/cloudflare-r2/获取账户id.png)

## ขั้นตอนตั้งค่า

1. สร้าง R2 bucket ใน Cloudflare
2. เปิด Cloudflare settings ของ ImgBed project
3. เพิ่ม R2 bucket binding
4. ตั้ง `Variable name` เป็น `img_r2`
5. เลือก R2 bucket ที่สร้างไว้
6. บันทึก binding แล้ว deploy ImgBed ใหม่
7. กลับไปที่ `ImgBed -> System Settings -> Upload Settings`
8. ตรวจสอบว่าช่องทาง `Cloudflare R2` แสดงขึ้นและเปิดใช้งานอยู่

ถ้าต้องการให้ R2 เข้าร่วมการเลือกช่องทางอัปโหลดตาม capacity ให้เปิด quota limit แล้วใส่ Account ID, bucket name, quota limit และ threshold ก่อนบันทึก

![กำหนด quota limits](../../image/upload/cloudflare-r2/配置容量限制.png)

## วิธีตรวจสอบ

- เห็นช่องทาง fixed `Cloudflare R2` ใน Upload Settings
- การ์ดช่องทางแสดงว่าเปิดใช้งานอยู่
- อัปโหลดไฟล์ทดสอบขนาดเล็กได้สำเร็จ และลิงก์ที่ส่งกลับมาเปิดได้ตามปกติ
- ถ้าเปิด file แล้วขึ้น `R2 database binding is not configured` แปลว่า runtime ยังไม่ได้รับ `img_r2` binding ให้ตรวจ binding name ใน Cloudflare แล้ว redeploy project
