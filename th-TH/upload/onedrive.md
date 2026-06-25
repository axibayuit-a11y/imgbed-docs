# เพิ่มช่องทาง OneDrive

## สิ่งที่ต้องเตรียมก่อน

| ข้อกำหนด | ทำไมต้องใช้ |
| --- | --- |
| Microsoft account | ใช้เข้าถึงหน้า admin ของ Microsoft และ authorize OneDrive |
| ImgBed domain ของคุณ | ใช้เป็น OAuth callback URL |
| App registration | ใช้สร้าง `Client ID` และ `Client Secret` |
| OneDrive account | ใช้เป็นพื้นที่เก็บไฟล์จริง |

## ขั้นตอนตั้งค่า

### ขั้นตอนที่ 1: เปิด Microsoft Entra ID

1. เปิด `portal.azure.com`
2. ค้นหา `Microsoft Entra ID` ด้านบน
3. ถ้า target page ไม่ขึ้นใน dropdown ให้เลือก:

```text
Continue searching in Microsoft Entra ID
```

4. เปิด `Microsoft Entra ID`
5. เปิด `App registrations`
6. คลิก `New registration`

### ขั้นตอนที่ 2: Register App

ในหน้า `New registration` ให้กรอก:

| ฟิลด์ | ใส่อะไร |
| --- | --- |
| Name | ชื่อที่จำง่าย เช่น `imgbed-onedrive` |
| Supported account types | เลือกตามตารางด้านล่าง |
| Redirect URI type | `Web` |
| Redirect URI | `https://your-domain.com/api/oauth/onedrive/callback` |

คำแนะนำสำหรับ account type:

| สถานการณ์ของคุณ | Supported Account Types |
| --- | --- |
| ใช้เฉพาะ personal OneDrive | เลือก option สำหรับ personal Microsoft account |
| ใช้ทั้ง personal และ work/school accounts | เลือก option ที่รองรับทั้ง personal และ organizational accounts |
| ใช้เฉพาะ company หรือ school OneDrive | เลือก organizational account option |

กรอกครบแล้วคลิก register

![สร้าง OneDrive app](../../image/upload/onedrive/添加应用程序注册.png)

### ขั้นตอนที่ 3: คัดลอก App Information

หลังสร้าง app แล้ว ให้คัดลอกค่าเหล่านี้จากหน้า overview:

| ฟิลด์ Microsoft | ฟิลด์ ImgBed |
| --- | --- |
| `Application (client) ID` | `Client ID` |
| `Directory (tenant) ID` | `Tenant ID` สำหรับ organizational accounts |

![Application และ tenant IDs](../../image/upload/onedrive/应用程序ID和目录租户ID位.png)

### ขั้นตอนที่ 4: สร้าง Client Secret

1. เปิด `Certificates & secrets`
2. คลิก `New client secret`
3. ใส่คำอธิบายตามต้องการ
4. เลือกระยะเวลาหมดอายุ
5. คัดลอกค่า `Value` ทันทีหลังสร้างเสร็จ

![บันทึกค่า client secret](../../image/upload/onedrive/保存客户端密码值.png)

### ขั้นตอนที่ 5: เพิ่ม API Permissions

1. เปิด `API permissions`
2. คลิก `Add a permission`
3. เลือก `Microsoft Graph`
4. เลือก `Delegated permissions`
5. เพิ่ม permissions เหล่านี้:

| Permission | วัตถุประสงค์ |
| --- | --- |
| `Files.ReadWrite.All` | อัปโหลดไฟล์ สร้างโฟลเดอร์ และลบไฟล์ |
| `offline_access` | ให้ ImgBed รับ `Refresh Token` ได้ |
| `User.Read` | อ่าน account และข้อมูล quota |

### ขั้นตอนที่ 6: ใส่ช่องทาง OneDrive

ใน Upload Settings เลือก `OneDrive` แล้วกรอก:

| ฟิลด์ ImgBed | ใส่อะไร |
| --- | --- |
| Channel name | ชื่อที่จำง่าย เช่น `Main OneDrive` |
| Client ID | Microsoft `Application (client) ID` |
| Client Secret | `Client Secret Value` ที่คัดลอกไว้ |
| Tenant ID | ใช้ตารางด้านล่าง |
| Refresh Token | เว้นว่างไว้ก่อน |
| Root directory | ไม่บังคับ ค่าเริ่มต้นคือ `imgbed` |
| Note | ไม่บังคับ |

![กรอกการกำหนดค่าช่องทาง OneDrive](../../image/upload/onedrive/添加新渠道配置.png)

วิธีกรอก `Tenant ID`:

| ประเภทบัญชีที่เลือก | ImgBed `Tenant ID` |
| --- | --- |
| บัญชี personal | `consumers` |
| บัญชี personal + organizational | `common` |
| เฉพาะองค์กรปัจจุบัน | `Directory (tenant) ID` |

### ขั้นตอนที่ 7: รับ Refresh Token

1. ใน ImgBed คลิก `Get Token`
2. เข้าสู่ระบบด้วย Microsoft account ที่ต้องการเชื่อมต่อ
3. อนุมัติ authorization prompt
4. หน้า callback จะแสดง `Refresh Token`
5. คัดลอก token นั้น
6. กลับไปที่ ImgBed แล้ววางในฟิลด์ `Refresh Token`

![คัดลอก refresh token](../../image/upload/onedrive/复制刷新令牌.png)

### ขั้นตอนที่ 8: บันทึกช่องทาง

เมื่อกรอกครบทุกฟิลด์แล้วให้บันทึกช่องทาง

## ลำดับขั้นตอนด่วน

```text
Open portal.azure.com
-> Search for Microsoft Entra ID
-> Open App registrations
-> Register a new app
-> Fill Name / Supported account types / Web redirect URI
-> Register
-> Copy Application (client) ID
-> Check the callback URL in Authentication
-> Create a Client Secret in Certificates & secrets
-> Add permissions in API permissions
-> Fill Client ID / Client Secret / Tenant ID into ImgBed
-> Click Get Token
-> Copy the Refresh Token from the callback page
-> Paste it back into ImgBed and save
```

## เอกสารอ้างอิง

1. การลงทะเบียน app ใน Microsoft Entra: https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app
2. Authorization code flow ของ Microsoft identity platform: https://learn.microsoft.com/en-us/entra/identity-platform/v2-oauth2-auth-code-flow
3. การยืนยันตัวตนผู้ใช้ของ Microsoft Graph: https://learn.microsoft.com/en-us/graph/auth-v2-user
