# Authentication และ Login Device Management

`Authentication Management` และ `Login Device Management` ใช้ปกป้อง ImgBed admin panel, public upload entry และ WebDAV access

หน้านี้ใช้ตั้งค่า access credentials, ตรวจดู devices ที่ sign in อยู่ และ revoke sessions เก่าหากจำเป็น

## ตั้งค่าที่ไหน

เปิด admin panel แล้วไปที่:

```text
System Settings -> Security Settings
```

หน้านี้มีสองส่วนหลัก:

- Authentication Management
- Login Device Management

![Authentication management](../../image/Safety/认证管理界面.png)

## Authentication Management ทำอะไร

Authentication Management เก็บ access credentials

มีสองประเภท:

- User-side authentication
- Admin-side authentication

## User-Side Authentication

User-side authentication คือ upload password

เมื่อกำหนด upload password แล้ว visitors ทั่วไปต้องใส่ password ก่อนใช้ upload page เหมาะเมื่อไม่ต้องการเปิด public upload page ให้ทุกคนใช้งานได้ทันที

![User login page](../../image/Safety/用户端登录界面.png)

### ตั้งค่า Upload Password

เมื่อ configure upload password แล้ว:

- Visitors ต้องใส่ password ก่อนใช้ upload page
- จะ upload ได้หลังจาก password ถูกต้องเท่านั้น
- ถ้าเปิด user-side device sessions ไว้ ImgBed จะบันทึก user-side device นั้น

การเปลี่ยน upload password จะทำให้ user-side sessions เก่า invalid Visitors ต้องใส่ password ใหม่อีกครั้ง

## Admin-Side Authentication

Admin-side authentication ใช้ admin username และ password

ส่วนนี้ปกป้อง admin panel สำหรับ production use ควร configure ไว้เสมอ

![Admin login page](../../image/Safety/管理端登录界面.png)

### ตั้งค่า Admin Credentials

เมื่อ configure admin username และ password แล้ว:

- ต้อง login ก่อนเปิด admin panel
- Login สำเร็จแล้วจะสร้าง admin device record
- ใน Login Device Management สามารถ review, clean up หรือ force devices offline ได้

การเปลี่ยน admin username หรือ password จะทำให้ admin sessions เก่า invalid ต้อง sign in ใหม่

## Login Device Management ทำอะไร

Login Device Management แสดง devices ที่เคย sign in

ช่วยตรวจได้ว่า:

- Devices ใด access admin panel
- Devices ใด access user-side upload page
- WebDAV clients ใด connected
- Device session ยัง valid อยู่หรือไม่
- ควร force offline devices เก่าหรือไม่

Page มีสาม tabs:

- Admin
- User
- WebDAV

## Global Cookie Security

ด้านบนของ Login Device Management สามารถ configure global cookie behavior ได้

### User Cookie Lifetime

ควบคุมว่า user-side login จะ active ได้นานกี่วัน

เช่น ตั้งเป็น 14 days โดยปกติ visitors ไม่ต้องใส่ upload password ซ้ำภายใน 14 วัน

### Admin Cookie Lifetime

ควบคุมว่า admin login จะ active ได้นานกี่วัน

เช่น ตั้งเป็น 14 days โดยปกติ administrators ไม่ต้อง sign in ซ้ำภายใน 14 วัน

### Secure Mode

เมื่อเปิด Secure mode browsers จะส่ง login cookies ผ่าน HTTPS เท่านั้น

ควร enable สำหรับ production HTTPS sites ห้ามเปิดตอน local HTTP testing ไม่เช่นนั้นอาจเจออาการ "login สำเร็จ แต่ refresh แล้วหลุดออก"

## Admin Login Devices

Admin tab แสดง devices ที่ sign in เข้า admin panel

Device records จะแสดงเมื่อ configure admin credentials แล้ว และเข้าถึง admin panel ผ่าน login

แต่ละ device card อาจแสดง:

- Device และ browser information
- First login IP
- Last active IP
- Login time
- Last active time
- Expiration time
- Current status

ถ้าเห็น device ที่ไม่รู้จัก ให้ใช้ `Force Offline` เพื่อทำให้ invalid

## Clean Up Old Devices

`Clean Up Old Devices` ลบ login records เก่าใน tab ปัจจุบันแบบ bulk

ใช้เมื่อสงสัยว่า sessions เก่าอาจยัง active อยู่บน devices อื่น

## Force Offline

`Force Offline` ทำให้ device session หนึ่ง invalid

หลัง force offline แล้ว:

- Admin devices ต้อง sign in ใหม่
- User-side devices ต้องใส่ upload password ใหม่
- WebDAV clients ต้อง authenticate ใหม่

Expired หรือ invalid devices สามารถลบได้เช่นกัน

## Sign Out Current Device

Current device card จะถูก mark เป็น `Current Device`

หลัง sign out current device:

- Current admin session จะ sign out
- Current user-side session จะ sign out

ต้อง sign in ใหม่ก่อนใช้งานส่วนนั้นต่อ
