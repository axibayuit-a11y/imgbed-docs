# WebDAV Site Access (Beta)

WebDAV setting ใน Security Settings ทำให้ ImgBed site ของคุณเป็น WebDAV endpoint

หลัง enable แล้ว คุณสามารถใช้ Windows, macOS, mobile file managers หรือ WebDAV-compatible client ใด ๆ เพื่อ browse, upload, delete และ manage ImgBed files เหมือน remote folder

นี่คือ WebDAV access entry ของ site แตกต่างจาก WebDAV storage channel ใน Upload Settings Upload channel ใช้ store files ใน third-party WebDAV service ส่วน setting นี้ให้ ImgBed site ของคุณ provide WebDAV access ให้ clients

## ตั้งค่าที่ไหน

เปิด admin panel แล้วไปที่:

```text
System Settings -> Security Settings -> WebDAV
```

Available settings:

- Enable
- Username
- Password
- Image loading mode
- Default channel

## Feature นี้ทำอะไร

หลัง WebDAV enabled ImgBed จะให้ fixed access URL:

```text
https://your-domain.com/dav
```

ใช้ URL นี้เพื่อ connect เข้า ImgBed file directory

Use cases ที่เหมาะ:

- Browse ImgBed files จาก computer file manager โดยตรง
- Drag images เข้า WebDAV folder เพื่อ upload
- Organize ImgBed folders จาก local file manager
- ใช้ WebDAV-compatible software เพื่อ sync หรือ manage images
- Access ImgBed content โดยไม่ต้องเปิด admin panel

## Settings

### Enable

เปิด WebDAV endpoint

เมื่อ disabled clients จะ connect ผ่าน WebDAV ไม่ได้

### Username และ Password

Credentials นี้ใช้เมื่อ WebDAV clients connect

ใช้ dedicated WebDAV username และ password อย่า reuse admin password หรือ upload password

ถ้า username หรือ password ว่าง WebDAV clients จะ connect ได้ไม่ถูกต้อง

### Image Loading Mode

Image loading mode ตัดสินว่า WebDAV clients จะ prefer image URL แบบใดเมื่ออ่าน images

Common choices:

| Mode | Description |
| --- | --- |
| Smart loading | ImgBed เลือกตาม context เหมาะกับ normal use |
| Original | Prefer original images |
| Thumbnail | Prefer thumbnails เหมาะกับ fast preview |

ถ้าไม่แน่ใจ ให้ใช้ `Smart loading`

### Default Channel

Default channel ใช้สำหรับ WebDAV uploads

เมื่อ copy files เข้า WebDAV directory จาก Windows หรือ client อื่น ImgBed จะ upload ผ่าน selected default upload channel

ถ้าไม่เลือก default channel การ browse อาจทำงานได้ แต่ uploads อาจ fail

## เข้าถึง WebDAV ใน Windows 11

Windows 11 เพิ่ม WebDAV เป็น network location ได้

1. เปิด `This PC`
2. เลือก `Add a network location`
3. ใส่ `https://your-domain.com/dav`
4. เมื่อมี prompt ให้ใส่ WebDAV username และ password
5. ทำ wizard ให้เสร็จ จากนั้นเปิด WebDAV directory ใน File Explorer ได้

![Add WebDAV in Windows 11](../../image/Safety/webdav在win11配置.png)

หลังเพิ่มแล้ว WebDAV directory จะแสดงใน Windows File Explorer คุณสามารถ open, copy และ manage files เหมือน folder ปกติ

![WebDAV in Windows](../../image/Safety/webdav在win显示效果.png)

## Supported Operations

หลัง WebDAV connection สำเร็จ โดยทั่วไปทำได้:

- View files และ folders
- Upload files
- Create folders
- Rename files หรือ folders
- Move files
- Delete files

WebDAV เหมาะกับ everyday access และ small-scale file management สำหรับ large moves, bulk deletes หรือ organization ที่ซับซ้อน แนะนำใช้ admin panel

## Login Device Management

Successful WebDAV connections จะแสดงใน WebDAV tab ของ Login Device Management ด้วย

คุณสามารถ review WebDAV clients และ force old devices offline เมื่อจำเป็น

ถ้าเปลี่ยน WebDAV username หรือ password clients เก่าต้อง sign in ใหม่

## FAQ

### Windows ถาม Username และ Password ซ้ำ

ตรวจว่า:

- URL คือ `https://your-domain.com/dav`
- Username และ password ตรงกับ WebDAV settings
- WebDAV enabled
- Site access ผ่าน HTTPS ได้

### Browsing ได้ แต่ Upload fail

ตรวจ `Default channel`

WebDAV uploads ต้องใช้ default upload channel ถ้า missing, disabled หรือ misconfigured uploads อาจ fail

### Access Speed ไม่เสถียร

WebDAV performance ขึ้นกับ client, network, file count และ default upload channel

ถ้า directory มี files จำนวนมาก ให้จัดเป็น folders แทนการเก็บทุกอย่างใน directory เดียว

## Security Recommendations

- ใช้ HTTPS สำหรับ WebDAV access
- ตั้ง strong password
- อย่า share WebDAV password กับคนที่ไม่ trusted
- ปิด WebDAV เมื่อไม่ได้ใช้งาน
- Clean up unused WebDAV devices เป็นระยะใน Login Device Management

## WebDAV Upload File Size

WebDAV clients ไม่ใช้ large-file chunking flow ของ browser upload page สำหรับ files ที่ใหญ่กว่า suggested limits ด้านล่าง ให้ใช้ web upload page แทน

| Default Upload Channel | Suggested Single-File Limit for WebDAV |
| --- | ---: |
| Telegram | 20 MB |
| Discord | 10 MB |
| Cloudflare R2 | 30 MB |
| S3 | 30 MB |
| GitHub Releases | 64 MB |
| GitLab Packages | 64 MB |
| Hugging Face | 20 MB |
| OneDrive | 30 MB |
| Google Drive | 30 MB |
| Dropbox | 30 MB |
| Yandex Disk | 30 MB |
| pCloud | 30 MB |
| WebDAV | 64 MB |
