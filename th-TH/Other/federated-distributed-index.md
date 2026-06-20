# Federated Distributed Index

Federated distributed index ช่วยให้ ImgBed sites หลายแห่ง share file lists กันได้

พูดง่าย ๆ:

- คุณ share selected folders จาก site ของคุณให้คนอื่นได้
- คุณ join node อื่นและ sync shared file list ของ node นั้นเข้ามาใน admin panel ของคุณได้
- Federated files มีไว้สำหรับ browsing, searching และเปิด links เป็นหลัก ไม่ได้ re-upload เข้า storage ของคุณเอง

## ตั้งค่าที่ไหน

เปิด:

```text
System Settings -> Other Settings -> Federated Distributed Index
```

![Local federation node](../../image/other/联盟图/联盟分布式索引本地节点.png)

Page มีสาม tabs:

| Tab | Purpose |
| --- | --- |
| Local Node | Enable node ของคุณ, confirm public domain, เลือก shared folders และ update outbound index |
| Nodes I Joined | Manage ImgBed nodes อื่นที่คุณ join |
| Nodes Joining Me | Manage requests จากคนอื่นที่ต้องการ join node ของคุณ |

## First-Time Setup

1. เปิด `Local Node`
2. เปิด `Enable`
3. เลือก folders ที่ต้องการ share ใน `Sync folders`
4. คลิก `Update Outbound Index`
5. ถ้า ImgBed detect domain change ให้ confirm ว่า current domain ถูกต้องก่อนทำต่อ

เลือก sync folders ได้หลายรายการ

ถ้า sync folder list ว่าง จะ share ทุก folders

## Local Node

### Public Domain

Public domain คือ site URL ที่ nodes อื่นใช้ access node ของคุณ

ImgBed detect ให้อัตโนมัติ ไม่ต้องพิมพ์เอง ครั้งแรกที่ update index ImgBed จะถามว่า current access URL คือ production domain หรือไม่

ถ้าเปลี่ยน domain ภายหลัง การ update index จะถาม confirmation อีกครั้ง

### Sync Folders

Sync folders กำหนดว่า files ใด share ให้ federation nodes

เช่น ถ้าเลือกเฉพาะ:

```text
/1/
/2/
```

Nodes อื่นจะเห็นเฉพาะ files ในสอง directories นี้

### Update Outbound Index

Update file list ที่ nodes อื่น sync จากคุณได้

ใช้เมื่อ:

- Enable federation ครั้งแรก
- Upload files ที่ต้องการ share
- เปลี่ยน sync folders
- เปลี่ยน public domain และต้อง confirm

## Nodes I Joined

`Nodes I Joined` คือที่ subscribe nodes อื่น

![Nodes I joined](../../image/other/联盟图/我加入的节点.png)

### Request To Join Another Node

1. ขอ invitation link จาก owner อีกฝั่ง
2. Paste ใน input box
3. คลิก `Request to Join`
4. รอ owner อีกฝั่ง approve ใน admin panel

หลัง approval แล้ว node status จะเป็น approved

### Update Inbound Index

`Update Inbound Index` sync file lists จาก nodes ที่คุณ joined

ใช้เมื่อ:

- Owner อีกฝั่งเพิ่ง approve request ของคุณ
- Owner อีกฝั่งบอกว่า shared content update แล้ว
- ต้องการ refresh joined federation file lists ทั้งหมด

ถ้าต้องการ update node เดียว ให้คลิก `Update Index` บน node card นั้น

![Update index](../../image/other/联盟图/更新索引.png)

### Unsubscribe

ถ้าไม่ต้องการ sync node แล้ว ให้คลิก `Unsubscribe`

หลัง unsubscribe federated index ของ node นั้นจะถูกลบออกจาก local site ของคุณ

## Nodes Joining Me

`Nodes Joining Me` คือที่จัดการ requests จากคนอื่น

![Nodes joining me](../../image/other/联盟图/加入我的节点.png)

### Generate Invitation Link

1. ตรวจว่า local node enabled
2. คลิก `Update Outbound Index` อย่างน้อยหนึ่งครั้งเพื่อให้ ImgBed confirm public domain
3. เปิด `Nodes Joining Me`
4. คลิก `Reset Invitation Link`
5. Copy invitation link แล้วส่งให้ owner อีกฝั่ง

ถ้า invitation link ว่าง มักแปลว่ายังไม่ได้ confirm public domain กลับไปที่ `Local Node` แล้วคลิก `Update Outbound Index`

### Handle Join Requests

เมื่อมีคน submit request จะปรากฏใน list `Nodes Joining Me`

| Action | Meaning |
| --- | --- |
| Approve | อนุญาตให้ node อีกฝั่ง sync shared file list ของคุณ |
| Reject | ปฏิเสธ join request |
| Delete | ลบ finished record |
| Check Status | ตรวจว่าอีกฝั่งยังรักษา relationship นี้อยู่หรือไม่ |

หลัง approval อีกฝั่งยังต้องคลิก `Update Inbound Index` ก่อน shared files ของคุณจึงจะแสดงที่ฝั่งนั้น

![Approve invited node](../../image/other/联盟图/邀请节点同意.png)

## Messages

หลัง relationship approved ให้คลิก `Message` บน node card

Messages ใช้สื่อสารเกี่ยวกับ federation relationship เท่านั้น ไม่เปลี่ยน files, tags, directories หรือ permissions

![Messages](../../image/other/联盟图/留言功能.png)

## ดู Federated Files

หลัง sync เสร็จ กลับไปที่ admin file list

ด้านบนของ page ให้สลับระหว่าง local files และ federated files ใน federated files คุณ browse synced content ได้

Federated files ใช้สำหรับ viewing, searching, previewing และ copying links เป็นหลัก ไม่ใช่ local files จึง move, delete, retag หรือ back up จาก site ของคุณเองไม่ได้

![Federated files in admin](../../image/other/联盟图/联盟管理显示效果图.png)

## FAQ

### ทำไมระบบบอกให้ Reapply เพราะไม่มี Relationship Record?

มักหมายถึงอีกฝั่ง delete คุณและลบ record แล้ว relationship จึงหาไม่เจอ ให้ submit join request ใหม่

![Reapply when no relationship record exists](../../image/other/联盟图/无关系记录重新申请.png)

### ทำไม Join แล้วไม่เห็น Files?

ตรวจว่า:

1. Owner อีกฝั่ง approve request แล้ว
2. Owner อีกฝั่งคลิก `Update Outbound Index` แล้ว
3. คุณคลิก `Update Inbound Index` แล้ว
4. Sync folders ของ owner อีกฝั่งรวม directories ที่ต้องการ share

### Domain Change Detected ควรทำอย่างไร?

ถ้าตอนนี้เปิด admin panel ผ่าน production domain ให้ confirm และ continue

ถ้าใช้ temporary address ให้ cancel แล้วเปิด admin panel ด้วย production domain จากนั้นลองใหม่

### Empty Sync Folder List หมายถึงอะไร?

หมายถึง share ทุก folders

ถ้าต้องการ share เฉพาะบาง directories ให้เลือก folders เอง

### Difference Between Outbound and Inbound Index Updates

| Button | Simple Meaning |
| --- | --- |
| Update Outbound Index | Update สิ่งที่คนอื่น sync จากฉันได้ |
| Update Inbound Index | Update สิ่งที่ฉัน sync จากคนอื่น |
