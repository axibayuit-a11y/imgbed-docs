# เพิ่มช่องทาง Dropbox

## สิ่งที่ต้องเตรียมก่อน

| ข้อกำหนด | ทำไมต้องใช้ |
| --- | --- |
| Dropbox account | ใช้เข้าสู่ระบบและ authorize app |
| Dropbox app | ใช้สร้าง `App Key` และ `App Secret` |
| ImgBed domain ของคุณ | ใช้เป็น OAuth redirect URI |
| พื้นที่ Dropbox ที่พร้อมใช้งาน | ใช้เป็นพื้นที่เก็บไฟล์จริง |

## ขั้นตอนตั้งค่า

### ขั้นตอนที่ 1: สร้าง Dropbox App

1. เปิด Dropbox App Console:

```text
https://www.dropbox.com/developers/apps
```

2. สร้าง app ใหม่
3. สำหรับประเภทการเข้าถึง ให้เลือก:

```text
App folder
```

4. ตั้งชื่อ app ให้จำง่าย เช่น `imgbed-app`
5. เปิดหน้า app details หลังสร้างเสร็จ

ประเภทการเข้าถึงที่แนะนำ:

| ประเภทการเข้าถึง | คำแนะนำ |
| --- | --- |
| `App folder` | แนะนำ เพราะตรงกับวิธีที่ ImgBed จัดเก็บไฟล์ |
| `Full Dropbox` | ไม่แนะนำ เพราะ ImgBed ไม่จำเป็นต้องเข้าถึงทั้ง account |

![สร้าง Dropbox app](../../image/upload/dropbox/开发者创建应用.png)

### ขั้นตอนที่ 2: เพิ่ม Redirect URI

ในหน้า details ของ Dropbox app ให้หา OAuth หรือการตั้งค่า Redirect URI แล้วเพิ่ม:

```text
https://your-domain.com/api/oauth/dropbox/callback
```

ถ้าใช้ admin panel จากหลาย domain ให้เพิ่ม callback URL ที่ตรงกันทุกตัว

![กำหนดค่า redirect URI](../../image/upload/dropbox/配置回调地址.png)

### ขั้นตอนที่ 3: กำหนดค่า App Permissions

เปิด tab `Permissions` แล้ว enable scopes อย่างน้อยเหล่านี้:

| Scope | จำเป็น | วัตถุประสงค์ |
| --- | --- | --- |
| `account_info.read` | จำเป็น | อ่าน account และข้อมูล quota |
| `files.metadata.read` | จำเป็น | อ่าน metadata ของไฟล์และโฟลเดอร์สำหรับ path checks |
| `files.metadata.write` | จำเป็น | สร้างโฟลเดอร์และเขียน metadata |
| `files.content.write` | จำเป็น | อัปโหลดไฟล์ ถ้าขาด scope นี้จะเกิด `required scope 'files.content.write'` |
| `files.content.read` | แนะนำ | อนุญาต download, preview และ temporary file links |

เลือก scopes แล้วคลิก `Submit` ด้านล่างหน้า

![เพิ่ม permissions](../../image/upload/dropbox/添加对应的权限.png)

สำคัญ:

| สถานการณ์ | ควรทำอะไร |
| --- | --- |
| เปลี่ยน scopes | เรียกใช้ token authorization flow ใหม่และรับ `Refresh Token` ใหม่ |
| ไม่ reauthorize | Token เก่าจะไม่ได้ permissions ใหม่ ทำให้การอัปโหลดยังล้มเหลวได้ |

### ขั้นตอนที่ 4: คัดลอก App Credentials

บันทึกค่าสองตัวนี้จากหน้า Dropbox app:

| ฟิลด์ Dropbox | ฟิลด์ ImgBed |
| --- | --- |
| `App key` | `App Key` |
| `App secret` | `App Secret` |

### ขั้นตอนที่ 5: ใส่ช่องทาง Dropbox

ใน Upload Settings เลือก `Dropbox` แล้วกรอก:

| ฟิลด์ ImgBed | ใส่อะไร |
| --- | --- |
| Channel name | ชื่อที่จำง่าย เช่น `Main Dropbox` |
| App Key | Dropbox `App key` |
| App Secret | Dropbox `App secret` |
| Refresh Token | เว้นว่างไว้ก่อน |
| Root directory | ไม่บังคับ ค่าเริ่มต้นคือ `imgbed` |
| Note | ไม่บังคับ |

![รับ token](../../image/upload/dropbox/获取令牌.png)

### ขั้นตอนที่ 6: รับ Refresh Token

1. ใน ImgBed คลิก `Get Token`
2. เข้าสู่ระบบ Dropbox account ที่ต้องการเชื่อมต่อ
3. อนุมัติ authorization prompt
4. หน้า callback จะแสดง `Refresh Token`
5. คัดลอก token นั้น
6. กลับไปที่ ImgBed แล้ววางในฟิลด์ `Refresh Token`

![คัดลอก token](../../image/upload/dropbox/复制令牌.png)

## วิธีตรวจสอบ

| รายการตรวจสอบ | ผลลัพธ์ที่คาดหวัง |
| --- | --- |
| การ์ดช่องทาง | ช่องทาง Dropbox แสดงหลังบันทึก |
| สวิตช์ช่องทาง | เปิดใช้งานช่องทางได้ |
| บันทึก token แล้ว | Detail page แสดงว่า `Refresh Token` ถูกบันทึกแล้ว |
| ทดสอบอัปโหลด | รูปทดสอบปรากฏใน Dropbox app folder |

ถ้าเปิด quota limits ให้คลิก quota query หลัง query สำเร็จ การ์ดช่องทางจะแสดง used space, total space และ last update time

![Quota query สำเร็จ](../../image/upload/dropbox/查询额度成功.png)

## การแก้ไขปัญหา

| ปัญหา | วิธีแก้ไข |
| --- | --- |
| ImgBed แจ้งว่าการกำหนดค่ายังไม่ครบ | ตรวจว่า `App Key`, `App Secret` และ `Refresh Token` ถูกกรอกครบ |
| Authorization สำเร็จแต่ไม่มี `Refresh Token` | คลิก `Get Token` อีกครั้งและตรวจว่าใช้ offline authorization flow |
| อัปโหลดล้มเหลวด้วย `required scope 'files.content.write'` | Enable `files.content.write`, คลิก `Submit`, แล้วรับ `Refresh Token` ใหม่ |
| Callback ล้มเหลว | ยืนยันว่า redirect URI เป็น `https://your-domain.com/api/oauth/dropbox/callback` |
| หาไฟล์ไม่เจอ | ยืนยันว่า Dropbox app สร้างใน mode `App folder` |

## ลำดับขั้นตอนด่วน

```text
Open Dropbox App Console
-> Create an app
-> Choose App folder access
-> Add https://your-domain.com/api/oauth/dropbox/callback
-> Enable account_info.read / files.metadata.read / files.metadata.write / files.content.write
-> Optionally enable files.content.read
-> Click Submit
-> Copy App Key and App Secret
-> Fill them into ImgBed
-> Click Get Token
-> Copy the Refresh Token from the callback page
-> Paste it back into ImgBed and save
```

## เอกสารอ้างอิง

1. Dropbox App Console: https://www.dropbox.com/developers/apps
2. คู่มือ Dropbox OAuth: https://developers.dropbox.com/oauth-guide
3. คู่มือ Dropbox Developer: https://www.dropbox.com/developers/reference/developer-guide
