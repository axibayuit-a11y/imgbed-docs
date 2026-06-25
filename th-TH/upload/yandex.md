# เพิ่มช่องทาง Yandex

## สิ่งที่ต้องเตรียมก่อน

| ข้อกำหนด | ทำไมต้องใช้ |
| --- | --- |
| Yandex account | ใช้เข้าสู่ระบบและ authorize Yandex Disk |
| Yandex OAuth app | ใช้สร้าง `Client ID` และ `Client Secret` |
| ImgBed domain ของคุณ | ใช้เป็น OAuth redirect URI |
| พื้นที่ Yandex Disk ที่พร้อมใช้งาน | ใช้เป็นพื้นที่เก็บไฟล์จริง |

## ขั้นตอนตั้งค่า

### ขั้นตอนที่ 1: สร้าง Yandex OAuth App

1. เปิดหน้าสร้าง Yandex OAuth app:

```text
https://oauth.yandex.com/client/new
```

2. ถ้าถูก redirect ไปหน้า sign in ให้เข้าสู่ระบบด้วย Yandex account ก่อน
3. สร้าง app ใหม่
4. ตั้งชื่อ app ให้จำง่าย เช่น `imgbed-yandex`
5. หา callback หรือ redirect URL settings
6. ใส่:

```text
https://your-domain.com/api/oauth/yandex/callback
```

### ขั้นตอนที่ 2: ยืนยัน Permissions

สำหรับ ImgBed Yandex integration ปัจจุบัน ให้คง permissions สี่ตัวนี้ไว้ใน `Yandex.Disk REST API`:

| Permission | วัตถุประสงค์ |
| --- | --- |
| `cloud_api:disk.app_folder` | ให้ ImgBed จัดเก็บไฟล์ใน app folder |
| `cloud_api:disk.read` | อ่านไฟล์และ download links |
| `cloud_api:disk.write` | อัปโหลดไฟล์ สร้างโฟลเดอร์ และลบไฟล์ |
| `Access to information about Yandex.Disk` | อ่าน disk quota และ used space |

ถ้าเห็น permissions เหล่านี้ใน `Yandex ID API` จะเป็นแบบไม่บังคับ:

| ข้อความ Permission | คำแนะนำ |
| --- | --- |
| `Access to username, first name and surname, gender` | ไม่บังคับ |
| `Access to email address` | ไม่บังคับ |

ฟีเจอร์หลักด้านการอัปโหลด ดาวน์โหลด ลบ และ quota พึ่งพา permissions สี่ตัวใน `Yandex.Disk REST API` เป็นหลัก

![กำหนดค่า Yandex Disk permissions](../../image/upload/yandex/dataaccess配置软盘权限.png)

### ขั้นตอนที่ 3: คัดลอก App Credentials

หลังสร้าง app แล้วคัดลอก:

| ฟิลด์ Yandex | ฟิลด์ ImgBed |
| --- | --- |
| `Client ID` | `Client ID` |
| `Client Secret` | `Client Secret` |

![บันทึก Client ID และ Secret](../../image/upload/yandex/记录客户端id和secret.png)

### ขั้นตอนที่ 4: ใส่ช่องทาง Yandex

ใน Upload Settings เลือก `Yandex` แล้วกรอก:

| ฟิลด์ ImgBed | ใส่อะไร |
| --- | --- |
| Channel name | ชื่อที่จำง่าย เช่น `Main Yandex` |
| Client ID | Yandex app `Client ID` |
| Client Secret | Yandex app `Client Secret` |
| Refresh Token | เว้นว่างไว้ก่อน |
| Root directory | ไม่บังคับ ค่าเริ่มต้นคือ `imgbed` |

![แก้ไขการกำหนดค่าช่องทาง](../../image/upload/yandex/编辑配置渠道.png)

### ขั้นตอนที่ 5: รับ Refresh Token

1. ใน ImgBed คลิก `Get Token`
2. เข้าสู่ระบบ Yandex account ที่ต้องการเชื่อมต่อ
3. อนุมัติ authorization prompt
4. หน้า callback จะแสดง `Refresh Token`
5. คัดลอก token นั้น
6. กลับไปที่ ImgBed แล้ววางในฟิลด์ `Refresh Token`

![คัดลอก refresh token หลัง authorization](../../image/upload/yandex/授权后复制刷新令牌.png)

### ขั้นตอนที่ 6: บันทึกช่องทาง

เมื่อกรอกครบทุกฟิลด์แล้วให้บันทึกช่องทาง

## ลำดับขั้นตอนด่วน

```text
Open Yandex OAuth Console
-> Create an app
-> Add https://your-domain.com/api/oauth/yandex/callback
-> Confirm Yandex Disk permissions
-> Copy Client ID and Client Secret
-> Fill Client ID / Client Secret into ImgBed
-> Click Get Token
-> Copy the Refresh Token from the callback page
-> Paste it back into ImgBed and save
```

## เอกสารอ้างอิง

1. ลงทะเบียน Yandex app: https://yandex.com/dev/id/doc/en/register-client
2. รับ authorization code ผ่าน URL: https://yandex.com/dev/id/doc/en/codes/code-url
3. Yandex OAuth token endpoint: https://yandex.com/dev/id/doc/en/tokens/token
