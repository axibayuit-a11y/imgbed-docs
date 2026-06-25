# เพิ่มช่องทาง GitLab Packages

## สิ่งที่ต้องเตรียมก่อนเริ่ม

ต้องใช้เพียงสามอย่าง:

| ข้อกำหนด | วัตถุประสงค์ |
| --- | --- |
| GitLab account | ใช้สร้าง access token และเป็น owner ของ project |
| GitLab Personal Access Token | ImgBed ใช้เข้าถึง GitLab API, สร้าง projects และอัปโหลดไฟล์ไปยัง Generic Packages |
| Project name | ใส่เฉพาะ project name ก็ได้ เช่น `imgbed` |

## ขั้นตอนตั้งค่า

### ขั้นตอนที่ 1: เข้าสู่ระบบ GitLab และสร้าง Access Token

1. เข้าสู่ระบบ GitLab
2. คลิก avatar มุมขวาบนแล้วเปิด `Preferences`
3. เปิด `Access Tokens` จากแถบด้านซ้าย
4. ตั้งชื่อ token ให้จำง่าย
5. เลือก expiration date ตามแนวทางการดูแลของคุณ
6. เลือก scope `api`
7. คัดลอกและบันทึก token ทันทีหลังสร้างเสร็จ

![สร้าง legacy token](../../image/upload/gitlab-packages/点击生成旧版令牌.png)

![เลือก token permissions](../../image/upload/gitlab-packages/勾选令牌权限.png)

## ขั้นตอนที่ 2: ใส่ช่องทาง GitLab Packages ใน ImgBed

หลังเลือก `GitLab Packages` ใน Upload Settings ให้กรอกฟิลด์ดังนี้:

| ฟิลด์ UI | ใส่อะไร |
| --- | --- |
| Channel name | ชื่อที่คุณตั้งเอง เช่น `GitLabPrimary` |
| Access Token | GitLab Personal Access Token ที่เพิ่งสร้าง |
| Project name | project name แบบสั้น เช่น `imgbed` หรือพาธแบบเต็ม เช่น `username/imgbed` |
| Private repository | เปิดหรือปิดตามความต้องการ |
| Remark | ไม่บังคับ เช่น `Primary upload channel` |

![กำหนดค่าช่องทาง](../../image/upload/gitlab-packages/配置渠道内容.png)

## ขั้นตอนที่ 3: บันทึกช่องทาง

กรอกครบแล้วคลิก Save

ระบบจะจัดการรายละเอียดเหล่านี้:

| พฤติกรรมของระบบ | คำอธิบาย |
| --- | --- |
| Short project name | ImgBed ระบุ GitLab account ปัจจุบัน แล้วขยายค่าเป็นพาธ project แบบเต็ม |
| Full project path | ImgBed ใช้ path `username/project` ตามที่ใส่มาแบบตรงตัว |
| การตรวจสอบ project | ถ้าใช้พาธของ personal account ปัจจุบัน ImgBed จะสร้าง project อัตโนมัติเมื่อยังไม่มี ถ้าใส่พาธแบบเต็มเอง ImgBed จะใช้พาธนั้นโดยตรง |
| Public/private state | Project visibility จะ sync ตาม switch ปัจจุบัน |

## รายการตรวจสอบด่วน

```text
Sign in to GitLab
-> Create an Access Token
-> Select only the api scope
-> Return to ImgBed and enter the token and project name
-> Save
-> If only a project name is entered, ImgBed adds the current username automatically
-> If username/project is entered, ImgBed uses it as-is
-> Upload a test image
```
