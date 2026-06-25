# เพิ่มช่องทาง Hugging Face

## สิ่งที่ต้องเตรียมก่อนเริ่ม

ต้องใช้เพียงสามอย่าง:

| ข้อกำหนด | วัตถุประสงค์ |
| --- | --- |
| Hugging Face account | ใช้สร้าง access token และเป็น owner ของ repository |
| Hugging Face User Access Token | ImgBed ใช้เข้าถึง Hugging Face API, สร้าง repositories และอัปโหลดไฟล์ |
| Repository name | ใส่เฉพาะ repository name ก็ได้ เช่น `image` |

## ขั้นตอนตั้งค่า

### ขั้นตอนที่ 1: เข้าสู่ระบบ Hugging Face และสร้าง Access Token

1. เข้าสู่ระบบ Hugging Face
2. คลิก avatar มุมขวาบนแล้วเปิด `Settings`
3. เปิด `Access Tokens` จากแถบด้านซ้าย
4. สร้าง token ใหม่
5. ตั้งชื่อ token ให้จำง่าย
6. เลือก permission เป็น `write`
7. คัดลอกและบันทึก token ทันทีหลังสร้างเสร็จ

![สร้าง token](../../image/upload/huggingface/创建令牌.png)

## ขั้นตอนที่ 2: ใส่ช่องทาง Hugging Face ใน ImgBed

หลังเลือก `Hugging Face` ใน Upload Settings ให้กรอกฟิลด์ดังนี้:

| ฟิลด์ UI | ใส่อะไร |
| --- | --- |
| Channel name | ชื่อที่คุณตั้งเอง เช่น `hf-primary` |
| Repository name | repo name แบบสั้น เช่น `image` หรือพาธแบบเต็ม เช่น `username/image` |
| Access Token | Hugging Face User Access Token ที่เพิ่งสร้าง |
| Private repository | เปิดหรือปิดตามความต้องการ |
| Remark | ไม่บังคับ เช่น `Primary upload channel` |

![เพิ่มช่องทาง](../../image/upload/huggingface/添加渠道.png)

## ขั้นตอนที่ 3: บันทึกช่องทาง

กรอกครบแล้วคลิก Save

ระบบจะจัดการรายละเอียดเหล่านี้:

| พฤติกรรมของระบบ | คำอธิบาย |
| --- | --- |
| Short repository name | ImgBed ระบุ Hugging Face account ปัจจุบัน แล้วขยายค่าเป็นพาธ repository แบบเต็ม |
| Full repository path | ImgBed ใช้ path `username/repository` ตามที่ใส่มาแบบตรงตัว |
| การตรวจสอบ repository | ถ้าใช้พาธของ personal account ปัจจุบัน ImgBed จะพยายามสร้าง repository เมื่อยังไม่มี ถ้าใส่พาธแบบเต็มเอง ImgBed จะใช้พาธนั้นโดยตรง |
| Repository type | ช่องทางนี้ใช้ `dataset` repository |
| Public/private state | Repository visibility จะ sync ตาม switch ปัจจุบัน |

## รายการตรวจสอบด่วน

```text
Sign in to Hugging Face
-> Create an Access Token
-> Select write permission
-> Return to ImgBed and enter the token and repository name
-> Save
-> If only a repo name is entered, ImgBed adds the current username automatically
-> If username/repo is entered, ImgBed uses it as-is
-> ImgBed checks or creates the dataset repository
-> Upload a test image
```
