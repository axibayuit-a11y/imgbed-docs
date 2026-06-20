# เพิ่ม Dropbox Channel

## สิ่งที่ต้องเตรียมก่อน

| Requirement | ทำไมต้องใช้ |
| --- | --- |
| Dropbox account | ใช้ sign in และ authorize app |
| Dropbox app | ใช้ generate `App Key` และ `App Secret` |
| ImgBed domain ของคุณ | ใช้เป็น OAuth redirect URI |
| Available Dropbox storage | ใช้เป็นพื้นที่เก็บ file จริง |

## ขั้นตอนตั้งค่า

### Step 1: สร้าง Dropbox App

1. เปิด Dropbox App Console:

```text
https://www.dropbox.com/developers/apps
```

2. สร้าง app ใหม่
3. สำหรับ access type ให้เลือก:

```text
App folder
```

4. ตั้งชื่อ app ให้จำง่าย เช่น `imgbed-app`
5. เปิด app details page หลังสร้างเสร็จ

Recommended access type:

| Access Type | Recommendation |
| --- | --- |
| `App folder` | Recommended ตรงกับวิธีที่ ImgBed store files |
| `Full Dropbox` | ไม่แนะนำ ImgBed ไม่จำเป็นต้อง access ทั้ง account |

![Create Dropbox app](../../image/upload/dropbox/开发者创建应用.png)

### Step 2: เพิ่ม Redirect URI

ใน Dropbox app details page ให้หา OAuth หรือ Redirect URI settings แล้วเพิ่ม:

```text
https://your-domain.com/api/oauth/dropbox/callback
```

ถ้าใช้ admin panel จากหลาย domain ให้เพิ่ม callback URL ที่ตรงกันทุกตัว

![Configure redirect URI](../../image/upload/dropbox/配置回调地址.png)

### Step 3: Configure App Permissions

เปิด tab `Permissions` แล้ว enable scopes อย่างน้อยเหล่านี้:

| Scope | Required | Purpose |
| --- | --- | --- |
| `account_info.read` | Required | อ่าน account และ quota information |
| `files.metadata.read` | Required | อ่าน file และ folder metadata สำหรับ path checks |
| `files.metadata.write` | Required | สร้าง folders และเขียน metadata |
| `files.content.write` | Required | Upload files ถ้าขาด scope นี้จะเกิด `required scope 'files.content.write'` |
| `files.content.read` | Recommended | อนุญาต download, preview และ temporary file links |

เลือก scopes แล้วคลิก `Submit` ด้านล่าง page

![Add permissions](../../image/upload/dropbox/添加对应的权限.png)

Important:

| Situation | ควรทำอะไร |
| --- | --- |
| เปลี่ยน scopes | Run token authorization flow ใหม่และรับ `Refresh Token` ใหม่ |
| ไม่ reauthorize | Token เก่าจะไม่ได้ permissions ใหม่ ทำให้ uploads ยัง fail ได้ |

### Step 4: Copy App Credentials

Save ค่าสองตัวนี้จาก Dropbox app page:

| Dropbox Field | ImgBed Field |
| --- | --- |
| `App key` | `App Key` |
| `App secret` | `App Secret` |

### Step 5: ใส่ Dropbox Channel

ใน Upload Settings เลือก `Dropbox` แล้วกรอก:

| ImgBed Field | ใส่อะไร |
| --- | --- |
| Channel name | ชื่อที่จำง่าย เช่น `Main Dropbox` |
| App Key | Dropbox `App key` |
| App Secret | Dropbox `App secret` |
| Refresh Token | เว้นว่างไว้ก่อน |
| Root directory | Optional ค่าเริ่มต้นคือ `imgbed` |
| Note | Optional |

![Get token](../../image/upload/dropbox/获取令牌.png)

### Step 6: รับ Refresh Token

1. ใน ImgBed คลิก `Get Token`
2. Sign in เข้า Dropbox account ที่ต้องการเชื่อมต่อ
3. Approve authorization prompt
4. Callback page จะแสดง `Refresh Token`
5. Copy token นั้น
6. กลับไปที่ ImgBed แล้ว paste ใน field `Refresh Token`

![Copy token](../../image/upload/dropbox/复制令牌.png)

## วิธีตรวจสอบ

| Check | Expected Result |
| --- | --- |
| Channel card | Dropbox channel แสดงหลัง save |
| Channel switch | Channel enable ได้ |
| Token saved | Detail page แสดงว่า `Refresh Token` ถูก save แล้ว |
| Upload test | Test image ปรากฏใน Dropbox app folder |

ถ้าเปิด quota limits ให้คลิก quota query หลัง query สำเร็จ channel card จะแสดง used space, total space และ last update time

![Quota query success](../../image/upload/dropbox/查询额度成功.png)

## Troubleshooting

| Problem | Fix |
| --- | --- |
| ImgBed บอกว่า configuration incomplete | ตรวจว่า `App Key`, `App Secret` และ `Refresh Token` ถูกกรอกครบ |
| Authorization สำเร็จแต่ไม่มี `Refresh Token` | คลิก `Get Token` อีกครั้งและตรวจว่าใช้ offline authorization flow |
| Upload fail ด้วย `required scope 'files.content.write'` | Enable `files.content.write`, คลิก `Submit`, แล้วรับ `Refresh Token` ใหม่ |
| Callback fail | Confirm redirect URI เป็น `https://your-domain.com/api/oauth/dropbox/callback` |
| หา files ไม่เจอ | Confirm ว่า Dropbox app สร้างใน mode `App folder` |

## Quick Flow

```text
เปิด Dropbox App Console
-> สร้าง app
-> เลือก App folder access
-> เพิ่ม https://your-domain.com/api/oauth/dropbox/callback
-> Enable account_info.read / files.metadata.read / files.metadata.write / files.content.write
-> Optionally enable files.content.read
-> คลิก Submit
-> Copy App Key และ App Secret
-> ใส่ใน ImgBed
-> คลิก Get Token
-> Copy Refresh Token จาก callback page
-> Paste กลับเข้า ImgBed แล้ว save
```

## References

1. Dropbox App Console: https://www.dropbox.com/developers/apps
2. Dropbox OAuth Guide: https://developers.dropbox.com/oauth-guide
3. Dropbox Developer Guide: https://www.dropbox.com/developers/reference/developer-guide
