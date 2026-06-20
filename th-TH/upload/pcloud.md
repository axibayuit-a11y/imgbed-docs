# เพิ่ม pCloud Channel

## เหมาะกับ

- คุณมี pCloud account และต้องการให้ ImgBed store images ใน pCloud
- คุณสะดวกใช้ pCloud account email และ password เป็น channel credentials

## สิ่งที่ต้องเตรียมก่อน

| Requirement | ทำไมต้องใช้ |
| --- | --- |
| pCloud account email | ใช้ sign in เข้า pCloud API |
| pCloud password | ใช้ sign in เข้า pCloud API |
| API host | ค่าเริ่มต้น `api.pcloud.com` EU accounts ใช้ `eapi.pcloud.com` ได้ |
| Storage directory | ที่เก็บ files ค่าเริ่มต้นคือ `imgbed` |

## เพิ่มได้จากที่ไหน

1. เปิด System Settings
2. เปิด Upload Settings
3. คลิก `Add Channel` ที่มุมขวาบน
4. เลือก `pCloud`

## Field Reference

| Field | Purpose | Required |
| --- | --- | --- |
| Channel name | ใช้ระบุ pCloud channel นี้ เช่น `Personal pCloud` | Yes |
| Account email | pCloud login email ของคุณ | Yes |
| Password | pCloud password ของคุณ | Yes |
| API host | pCloud API host ค่าเริ่มต้น `api.pcloud.com` | No |
| Storage directory | Directory สำหรับเก็บ files ค่าเริ่มต้น `imgbed` | No |

เลือก API host ตาม account region:

| Account Region | API Host |
| --- | --- |
| Default / US | `api.pcloud.com` |
| Europe | `eapi.pcloud.com` |

## ขั้นตอนตั้งค่า

1. เปิด Upload Settings
2. คลิก `Add Channel`
3. เลือก `pCloud`
4. ใส่ channel name ที่จำได้
5. ใส่ pCloud account email
6. ใส่ pCloud password
7. ปล่อย API host เป็น `api.pcloud.com` หรือใช้ `eapi.pcloud.com` สำหรับ EU accounts
8. ปล่อย storage directory เป็น `imgbed` หรือเปลี่ยนเป็น folder ที่ต้องการ
9. Save channel

![Configure channel](../../image/upload/pcloud/配置渠道.png)

## วิธีตรวจสอบ

| Check | Expected Result |
| --- | --- |
| Channel card | pCloud channel card แสดงหลัง save |
| Channel switch | Switch บน card enabled อยู่ |
| Email display | Card แสดง connected pCloud email |
| Quota query | Query สำเร็จแล้วแสดง used และ total capacity |
| Upload test | Test image ปรากฏใน configured pCloud storage directory |

![Quota query success](../../image/upload/pcloud/查询额度成功.png)

## Troubleshooting

### ทำไมไม่ใช้ OAuth2?

pCloud OAuth2 ไม่ได้ self-service โดย default ต้อง email ไปขอให้ pCloud enable

Flow pCloud OAuth2 ปัจจุบันยังไม่รองรับ short-lived upload link workflow ที่ ImgBed ต้องใช้ channel นี้จึงใช้ account email และ password login แทน

### ควรใช้ API Host ไหน?

Default:

```text
api.pcloud.com
```

สำหรับ EU accounts:

```text
eapi.pcloud.com
```

## Quick Flow

```text
เตรียม pCloud email และ password
-> เปิด Upload Settings
-> Add Channel
-> เลือก pCloud
-> ใส่ channel name / email / password
-> ปล่อย API host เป็น api.pcloud.com เว้นแต่ account อยู่ Europe
-> ปล่อย storage directory เป็น imgbed เว้นแต่ต้องใช้ folder อื่น
-> Save
-> Query quota
-> Upload test image
```
