# เพิ่ม Hugging Face Channel

## สิ่งที่ต้องเตรียมก่อนเริ่ม

ต้องใช้เพียงสามอย่าง:

| Requirement | Purpose |
| --- | --- |
| Hugging Face account | ใช้ generate access token และเป็น owner ของ repository |
| Hugging Face User Access Token | ImgBed ใช้ access Hugging Face API, create repositories และ upload files |
| Repository name | ใส่เฉพาะ repository name ก็ได้ เช่น `image` |

## ขั้นตอนตั้งค่า

### Step 1: Sign in เข้า Hugging Face และสร้าง Access Token

1. Sign in เข้า Hugging Face
2. คลิก avatar มุมขวาบนแล้วเปิด `Settings`
3. เปิด `Access Tokens` จาก left sidebar
4. สร้าง token ใหม่
5. ตั้งชื่อ token ให้จำง่าย
6. เลือก permission เป็น `write`
7. Copy และ save token ทันทีหลังสร้างเสร็จ

![Create a token](../../image/upload/huggingface/创建令牌.png)

## Step 2: ใส่ Hugging Face Channel ใน ImgBed

หลังเลือก `Hugging Face` ใน Upload Settings ให้กรอก fields ดังนี้:

| UI Field | ใส่อะไร |
| --- | --- |
| Channel name | ชื่อที่คุณตั้งเอง เช่น `hf-primary` |
| Repository name | Repo name สั้น ๆ เช่น `image` หรือ full path เช่น `username/image` |
| Access Token | Hugging Face User Access Token ที่เพิ่งสร้าง |
| Private repository | เปิดหรือปิดตามความต้องการ |
| Remark | Optional เช่น `Primary upload channel` |

![Add the channel](../../image/upload/huggingface/添加渠道.png)

## Step 3: Save Channel

กรอกครบแล้วคลิก Save

System จะจัดการรายละเอียดเหล่านี้:

| System Behavior | Description |
| --- | --- |
| Short repository name | ImgBed ระบุ current Hugging Face account แล้วขยายค่าเป็น full repository path |
| Full repository path | ImgBed ใช้ path `username/repository` ตามที่ใส่มาแบบตรงตัว |
| Repository check | ถ้าใช้ current personal account path ImgBed จะพยายามสร้าง repository เมื่อยังไม่มี ถ้าใส่ full path เอง ImgBed จะใช้ path นั้นโดยตรง |
| Repository type | Channel นี้ใช้ `dataset` repository |
| Public/private state | Repository visibility จะ sync ตาม switch ปัจจุบัน |

## Quick Checklist

```text
Sign in เข้า Hugging Face
-> สร้าง Access Token
-> เลือก write permission
-> กลับไป ImgBed แล้วใส่ token และ repository name
-> Save
-> ถ้าใส่แค่ repo name ImgBed จะเติม current username ให้อัตโนมัติ
-> ถ้าใส่ username/repo ImgBed จะใช้ตามนั้น
-> ImgBed จะ check หรือ create dataset repository
-> Upload test image
```
