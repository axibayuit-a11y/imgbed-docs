# เพิ่มช่องทาง Google Drive

## สิ่งที่ต้องเตรียมก่อน

ก่อนเริ่ม ให้เตรียมสิ่งเหล่านี้:

| ข้อกำหนด | ทำไมต้องใช้ |
| --- | --- |
| Google account | ใช้เข้าถึง Google Cloud และ authorize Google Drive |
| Google Cloud project | ใช้ enable Drive API และสร้าง OAuth credentials |
| OAuth 2.0 client | ImgBed ใช้รับ `Client ID`, `Client Secret` และ `Refresh Token` |
| ImgBed domain ของคุณ | ใช้เป็น OAuth redirect URI ต้องตรงกับ domain ที่ใช้งานจริง |

## ขั้นตอนตั้งค่า

### ขั้นตอนที่ 1: Enable Google Drive API

1. เปิด Google Cloud Console
2. สร้าง project ใหม่หรือเลือก project ที่มีอยู่แล้ว
3. ไปที่ `APIs & Services`
4. คลิก `Enable APIs and Services`
5. ค้นหา `Google Drive API`
6. เปิดแล้วคลิก enable

### ขั้นตอนที่ 2: Configure OAuth Consent Screen

1. ใน Google Cloud เปิด `Google Auth Platform`
2. กรอกข้อมูลพื้นฐานใน `Branding` เช่น app name, support email และ developer contact email
3. เปิด `Audience`
4. สำหรับ self-hosted personal deployments ส่วนใหญ่ ให้เลือก `External`
5. ถ้าเลือก `External` ให้เพิ่ม Google account ที่ต้องการ authorize ใน `Test users`
6. เปิด `Data Access`
7. เพิ่ม Google Drive permissions ที่ต้องใช้

### ขั้นตอนที่ 3: สร้าง OAuth 2.0 Client

1. ใน `Google Auth Platform` เปิด `Clients`
2. สร้าง client ใหม่
3. ตั้ง application type เป็น `Web application`
4. ตั้งชื่อ client ให้จำง่าย
5. สำหรับ authorized JavaScript origins ให้ใส่ ImgBed URL เช่น:

```text
https://img.example.com
```

6. สำหรับ authorized redirect URIs ให้ใส่:

```text
https://img.example.com/api/oauth/google/callback
```

![สร้าง OAuth client](../../image/upload/google-drive/oa客户端id创建.png)

![ใส่ domain และ callback URL](../../image/upload/google-drive/填写oa客户端url信息.png)

หลังสร้าง client แล้ว ให้คัดลอกค่าเหล่านี้:

| ค่าที่สร้างขึ้น | ฟิลด์ ImgBed |
| --- | --- |
| Client ID | `Client ID` |
| Client Secret | `Client Secret` |

## ขั้นตอนที่ 4: ใส่ช่องทาง Google Drive

ใน Upload Settings เลือก `Google Drive` แล้วกรอก:

| ฟิลด์ ImgBed | ใส่อะไร |
| --- | --- |
| Channel name | ชื่อที่จำง่าย เช่น `Main Google Drive` |
| Client ID | Client ID จาก Google Cloud |
| Client Secret | Client Secret จาก Google Cloud |
| Refresh Token | เว้นว่างไว้ก่อน รับในขั้นตอนถัดไป |
| Root directory | ไม่บังคับ ค่าเริ่มต้นคือ `imgbed` |

![กรอกรายละเอียด client ใน ImgBed](../../image/upload/google-drive/粘贴回添加新渠道配置.png)

## ขั้นตอนที่ 5: รับ Refresh Token

1. คลิก `Get Token`
2. เลือก Google account ที่ต้องการเชื่อมต่อ
3. ทำ authorization prompts ให้เสร็จ
4. หน้า callback จะแสดง `Refresh Token`
5. คัดลอก token นั้น
6. กลับไปที่ ImgBed แล้ววางในฟิลด์ `Refresh Token`

![คัดลอก Refresh Token หลัง authorization](../../image/upload/google-drive/授权完复制token.png)

ถ้าภายหลังเปลี่ยน Google account, เปลี่ยน OAuth client หรือ authorization เก่าหมดอายุ ไม่จำเป็นต้องลบช่องทาง ให้เปิดหน้าแก้ไขแล้วคลิก `Reauthorize`

## ขั้นตอนที่ 6: บันทึกช่องทาง

เมื่อกรอกครบทุกฟิลด์แล้วให้บันทึกช่องทาง

## ลำดับขั้นตอนด่วน

```text
Open Google Cloud
-> Create or select a project
-> Enable Google Drive API
-> Configure Google Auth Platform
-> If Audience is External, add your Google account to Test users
-> Create a Web application OAuth client
-> Use https://your-domain.com/api/oauth/google/callback as the redirect URI
-> Fill Client ID and Client Secret into ImgBed
-> Click Get Token
-> Sign in with Google and authorize
-> Copy the Refresh Token from the callback page
-> Paste it back into ImgBed and save
-> Upload a test image
```

## เอกสารอ้างอิง

1. Google OAuth Web Server Applications: https://developers.google.com/identity/protocols/oauth2/web-server
2. การกำหนดค่า OAuth Consent ของ Google Workspace: https://developers.google.com/workspace/guides/configure-oauth-consent
3. Auth Scopes ของ Google Drive API: https://developers.google.com/workspace/drive/api/guides/api-specific-auth
