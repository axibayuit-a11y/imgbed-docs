# เพิ่มช่องทาง GitHub Releases

## สิ่งที่ต้องเตรียมก่อนเริ่ม

ต้องใช้เพียงสามอย่าง:

| ข้อกำหนด | วัตถุประสงค์ |
| --- | --- |
| GitHub account | ใช้สร้าง access token และเป็น owner ของ repository |
| GitHub Access Token | ImgBed ใช้เข้าถึง GitHub API, สร้าง releases และอัปโหลดไฟล์ |
| Repository name | ใส่เฉพาะ repository name ก็ได้ เช่น `image` |

## ขั้นตอนตั้งค่า

### ขั้นตอนที่ 1: เข้าสู่ระบบ GitHub และสร้าง Access Token

1. เข้าสู่ระบบ GitHub
2. คลิก avatar มุมขวาบนแล้วเปิด `Settings`
3. เปิด `Developer settings` จากแถบด้านซ้าย
4. เปิด `Personal access tokens`
5. เปิด `Tokens (classic)`
6. คลิก `Generate new token (classic)`
7. ตั้งชื่อ token ให้จำง่าย
8. เลือก expiration date ตามแนวทางการดูแลของคุณ
9. เลือก scopes `repo` และ `workflow`
10. คัดลอกและบันทึก token ทันทีหลังสร้างเสร็จ

![เพิ่ม GitHub permissions](../../image/upload/github-releases/添加github权限.png)

## ขั้นตอนที่ 2: ใส่ช่องทาง GitHub Releases ใน ImgBed

หลังเลือก `GitHub Releases` ใน Upload Settings ให้กรอกฟิลด์ดังนี้:

| ฟิลด์ UI | ใส่อะไร |
| --- | --- |
| Channel name | ชื่อที่คุณตั้งเอง เช่น `GitHubPrimary` |
| Access Token | GitHub Personal Access Token ที่เพิ่งสร้าง |
| Repository name | repo name แบบสั้น เช่น `image` หรือพาธแบบเต็ม เช่น `username/image` |
| Private repository | เปิดหรือปิดตามความต้องการ |
| Remark | ไม่บังคับ เช่น `Primary upload channel` |

![กรอกการกำหนดค่าช่องทาง GitHub](../../image/upload/github-releases/填写github渠道配置.png)

## ขั้นตอนที่ 3: บันทึกช่องทาง

กรอกครบแล้วคลิก Save

ระบบจะจัดการรายละเอียดเหล่านี้:

| พฤติกรรมของระบบ | คำอธิบาย |
| --- | --- |
| Short repository name | ImgBed ระบุ GitHub account ปัจจุบัน แล้วขยายค่าเป็นพาธ repository แบบเต็ม |
| Full repository path | ImgBed ใช้ path `username/repository` ตามที่ใส่มาแบบตรงตัว |
| การตรวจสอบ repository | ถ้าใช้พาธของ personal account ปัจจุบัน ImgBed จะสร้าง repository อัตโนมัติเมื่อยังไม่มี ถ้าใส่พาธแบบเต็มเอง ImgBed จะใช้พาธนั้นโดยตรง |
| Public/private state | Repository visibility จะ sync ตาม switch ปัจจุบัน |

## รายการตรวจสอบด่วน

GitHub Releases ทำงานตาม flow นี้:

```text
Sign in to GitHub
-> Create an Access Token
-> Return to ImgBed and enter the token and repository name
-> Save
-> If only a repo name is entered, ImgBed adds the current username automatically
-> If username/repo is entered, ImgBed uses it as-is
-> Upload a test image
```
