# เพิ่ม OneDrive Channel

## สิ่งที่ต้องเตรียมก่อน

| Requirement | ทำไมต้องใช้ |
| --- | --- |
| Microsoft account | ใช้ access Microsoft admin pages และ authorize OneDrive |
| ImgBed domain ของคุณ | ใช้เป็น OAuth callback URL |
| App registration | ใช้ generate `Client ID` และ `Client Secret` |
| OneDrive account | ใช้เป็นพื้นที่เก็บ file จริง |

## ขั้นตอนตั้งค่า

### Step 1: เปิด Microsoft Entra ID

1. เปิด `portal.azure.com`
2. ค้นหา `Microsoft Entra ID` ด้านบน
3. ถ้า target page ไม่ขึ้นใน dropdown ให้เลือก:

```text
Continue searching in Microsoft Entra ID
```

4. เปิด `Microsoft Entra ID`
5. เปิด `App registrations`
6. คลิก `New registration`

### Step 2: Register App

ในหน้า `New registration` ให้กรอก:

| Field | ใส่อะไร |
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

![Create OneDrive app](../../image/upload/onedrive/添加应用程序注册.png)

### Step 3: Copy App Information

หลังสร้าง app แล้ว ให้ copy values เหล่านี้จาก overview page:

| Microsoft Field | ImgBed Field |
| --- | --- |
| `Application (client) ID` | `Client ID` |
| `Directory (tenant) ID` | `Tenant ID` สำหรับ organizational accounts |

![Application and tenant IDs](../../image/upload/onedrive/应用程序ID和目录租户ID位.png)

### Step 4: สร้าง Client Secret

1. เปิด `Certificates & secrets`
2. คลิก `New client secret`
3. ใส่ description ตามต้องการ
4. เลือก expiration period
5. Copy ค่า `Value` ทันทีหลังสร้างเสร็จ

![Save client secret value](../../image/upload/onedrive/保存客户端密码值.png)

### Step 5: เพิ่ม API Permissions

1. เปิด `API permissions`
2. คลิก `Add a permission`
3. เลือก `Microsoft Graph`
4. เลือก `Delegated permissions`
5. เพิ่ม permissions เหล่านี้:

| Permission | Purpose |
| --- | --- |
| `Files.ReadWrite.All` | Upload files, create folders และ delete files |
| `offline_access` | ให้ ImgBed รับ `Refresh Token` ได้ |
| `User.Read` | อ่าน account และ quota information |

### Step 6: ใส่ OneDrive Channel

ใน Upload Settings เลือก `OneDrive` แล้วกรอก:

| ImgBed Field | ใส่อะไร |
| --- | --- |
| Channel name | ชื่อที่จำง่าย เช่น `Main OneDrive` |
| Client ID | Microsoft `Application (client) ID` |
| Client Secret | `Client Secret Value` ที่ copy ไว้ |
| Tenant ID | ใช้ตารางด้านล่าง |
| Refresh Token | เว้นว่างไว้ก่อน |
| Root directory | Optional ค่าเริ่มต้นคือ `imgbed` |
| Note | Optional |

![Fill OneDrive channel config](../../image/upload/onedrive/添加新渠道配置.png)

วิธีกรอก `Tenant ID`:

| Account Type You Chose | ImgBed `Tenant ID` |
| --- | --- |
| Personal accounts | `consumers` |
| Personal + organizational accounts | `common` |
| Current organization only | `Directory (tenant) ID` |

### Step 7: รับ Refresh Token

1. ใน ImgBed คลิก `Get Token`
2. Sign in ด้วย Microsoft account ที่ต้องการเชื่อมต่อ
3. Approve authorization prompt
4. Callback page จะแสดง `Refresh Token`
5. Copy token นั้น
6. กลับไปที่ ImgBed แล้ว paste ใน field `Refresh Token`

![Copy refresh token](../../image/upload/onedrive/复制刷新令牌.png)

### Step 8: Save Channel

เมื่อกรอกครบทุก field แล้วให้ save channel

## Quick Flow

```text
เปิด portal.azure.com
-> ค้นหา Microsoft Entra ID
-> เปิด App registrations
-> Register app ใหม่
-> กรอก Name / Supported account types / Web redirect URI
-> Register
-> Copy Application (client) ID
-> ตรวจ callback URL ใน Authentication
-> สร้าง Client Secret ใน Certificates & secrets
-> เพิ่ม permissions ใน API permissions
-> ใส่ Client ID / Client Secret / Tenant ID ใน ImgBed
-> คลิก Get Token
-> Copy Refresh Token จาก callback page
-> Paste กลับเข้า ImgBed แล้ว save
```

## References

1. Microsoft Entra app registration: https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app
2. Microsoft identity platform authorization code flow: https://learn.microsoft.com/en-us/entra/identity-platform/v2-oauth2-auth-code-flow
3. Microsoft Graph user authentication: https://learn.microsoft.com/en-us/graph/auth-v2-user
