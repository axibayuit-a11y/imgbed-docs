# เพิ่ม GitLab Packages Channel

## สิ่งที่ต้องเตรียมก่อนเริ่ม

ต้องใช้เพียงสามอย่าง:

| Requirement | Purpose |
| --- | --- |
| GitLab account | ใช้ generate access token และเป็น owner ของ project |
| GitLab Personal Access Token | ImgBed ใช้ access GitLab API, create projects และ upload files ไปยัง Generic Packages |
| Project name | ใส่เฉพาะ project name ก็ได้ เช่น `imgbed` |

## ขั้นตอนตั้งค่า

### Step 1: Sign in เข้า GitLab และสร้าง Access Token

1. Sign in เข้า GitLab
2. คลิก avatar มุมขวาบนแล้วเปิด `Preferences`
3. เปิด `Access Tokens` จาก left sidebar
4. ตั้งชื่อ token ให้จำง่าย
5. เลือก expiration date ตามแนวทาง maintenance ของคุณ
6. เลือก scope `api`
7. Copy และ save token ทันทีหลังสร้างเสร็จ

![Create a legacy token](../../image/upload/gitlab-packages/点击生成旧版令牌.png)

![Select token permissions](../../image/upload/gitlab-packages/勾选令牌权限.png)

## Step 2: ใส่ GitLab Packages Channel ใน ImgBed

หลังเลือก `GitLab Packages` ใน Upload Settings ให้กรอก fields ดังนี้:

| UI Field | ใส่อะไร |
| --- | --- |
| Channel name | ชื่อที่คุณตั้งเอง เช่น `GitLabPrimary` |
| Access Token | GitLab Personal Access Token ที่เพิ่งสร้าง |
| Project name | Project name สั้น ๆ เช่น `imgbed` หรือ full path เช่น `username/imgbed` |
| Private repository | เปิดหรือปิดตามความต้องการ |
| Remark | Optional เช่น `Primary upload channel` |

![Configure the channel](../../image/upload/gitlab-packages/配置渠道内容.png)

## Step 3: Save Channel

กรอกครบแล้วคลิก Save

System จะจัดการรายละเอียดเหล่านี้:

| System Behavior | Description |
| --- | --- |
| Short project name | ImgBed ระบุ current GitLab account แล้วขยายค่าเป็น full project path |
| Full project path | ImgBed ใช้ path `username/project` ตามที่ใส่มาแบบตรงตัว |
| Project check | ถ้าใช้ current personal account path ImgBed จะสร้าง project อัตโนมัติเมื่อยังไม่มี ถ้าใส่ full path เอง ImgBed จะใช้ path นั้นโดยตรง |
| Public/private state | Project visibility จะ sync ตาม switch ปัจจุบัน |

## Quick Checklist

```text
Sign in เข้า GitLab
-> สร้าง Access Token
-> เลือกเฉพาะ api scope
-> กลับไป ImgBed แล้วใส่ token และ project name
-> Save
-> ถ้าใส่แค่ project name ImgBed จะเติม current username ให้อัตโนมัติ
-> ถ้าใส่ username/project ImgBed จะใช้ตามนั้น
-> Upload test image
```
