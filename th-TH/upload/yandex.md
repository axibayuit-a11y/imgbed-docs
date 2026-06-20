# เพิ่ม Yandex Channel

## สิ่งที่ต้องเตรียมก่อน

| Requirement | ทำไมต้องใช้ |
| --- | --- |
| Yandex account | ใช้ sign in และ authorize Yandex Disk |
| Yandex OAuth app | ใช้ generate `Client ID` และ `Client Secret` |
| ImgBed domain ของคุณ | ใช้เป็น OAuth redirect URI |
| Available Yandex Disk storage | ใช้เป็นพื้นที่เก็บ file จริง |

## ขั้นตอนตั้งค่า

### Step 1: สร้าง Yandex OAuth App

1. เปิดหน้า create Yandex OAuth app:

```text
https://oauth.yandex.com/client/new
```

2. ถ้าถูก redirect ไปหน้า sign in ให้ sign in ด้วย Yandex account ก่อน
3. สร้าง app ใหม่
4. ตั้งชื่อ app ให้จำง่าย เช่น `imgbed-yandex`
5. หา callback หรือ redirect URL settings
6. ใส่:

```text
https://your-domain.com/api/oauth/yandex/callback
```

### Step 2: Confirm Permissions

สำหรับ ImgBed Yandex integration ปัจจุบัน ให้คง permissions สี่ตัวนี้ไว้ใน `Yandex.Disk REST API`:

| Permission | Purpose |
| --- | --- |
| `cloud_api:disk.app_folder` | ให้ ImgBed store files ใน app folder |
| `cloud_api:disk.read` | อ่าน files และ download links |
| `cloud_api:disk.write` | Upload files, create folders และ delete files |
| `Access to information about Yandex.Disk` | อ่าน disk quota และ used space |

ถ้าเห็น permissions เหล่านี้ใน `Yandex ID API` จะเป็น optional:

| Permission Text | Recommendation |
| --- | --- |
| `Access to username, first name and surname, gender` | Optional |
| `Access to email address` | Optional |

Core upload, download, deletion และ quota features พึ่งพา permissions สี่ตัวใน `Yandex.Disk REST API` เป็นหลัก

![Configure Yandex Disk permissions](../../image/upload/yandex/dataaccess配置软盘权限.png)

### Step 3: Copy App Credentials

หลังสร้าง app แล้ว copy:

| Yandex Field | ImgBed Field |
| --- | --- |
| `Client ID` | `Client ID` |
| `Client Secret` | `Client Secret` |

![Record Client ID and Secret](../../image/upload/yandex/记录客户端id和secret.png)

### Step 4: ใส่ Yandex Channel

ใน Upload Settings เลือก `Yandex` แล้วกรอก:

| ImgBed Field | ใส่อะไร |
| --- | --- |
| Channel name | ชื่อที่จำง่าย เช่น `Main Yandex` |
| Client ID | Yandex app `Client ID` |
| Client Secret | Yandex app `Client Secret` |
| Refresh Token | เว้นว่างไว้ก่อน |
| Root directory | Optional ค่าเริ่มต้นคือ `imgbed` |

![Edit channel config](../../image/upload/yandex/编辑配置渠道.png)

### Step 5: รับ Refresh Token

1. ใน ImgBed คลิก `Get Token`
2. Sign in เข้า Yandex account ที่ต้องการเชื่อมต่อ
3. Approve authorization prompt
4. Callback page จะแสดง `Refresh Token`
5. Copy token นั้น
6. กลับไปที่ ImgBed แล้ว paste ใน field `Refresh Token`

![Copy refresh token after authorization](../../image/upload/yandex/授权后复制刷新令牌.png)

### Step 6: Save Channel

เมื่อกรอกครบทุก field แล้วให้ save channel

## Quick Flow

```text
เปิด Yandex OAuth Console
-> สร้าง app
-> เพิ่ม https://your-domain.com/api/oauth/yandex/callback
-> Confirm Yandex Disk permissions
-> Copy Client ID และ Client Secret
-> ใส่ Client ID / Client Secret ใน ImgBed
-> คลิก Get Token
-> Copy Refresh Token จาก callback page
-> Paste กลับเข้า ImgBed แล้ว save
```

## References

1. Register a Yandex app: https://yandex.com/dev/id/doc/en/register-client
2. Get an authorization code through URL: https://yandex.com/dev/id/doc/en/codes/code-url
3. Yandex OAuth token endpoint: https://yandex.com/dev/id/doc/en/tokens/token
