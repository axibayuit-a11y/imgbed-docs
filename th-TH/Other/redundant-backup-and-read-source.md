# Redundant Backup และ Read Source Switching

Redundant backup เก็บ extra copy ของ file ที่ upload แล้ว

ทั้ง primary file และ backup file ใช้เป็น read sources ได้ Visitors โดยทั่วไปจะไม่เห็นความต่าง ต่างกันแค่ storage channel ใด serve file

## Redundant Backup ทำอะไรได้บ้าง

| Feature | Description |
| --- | --- |
| Store an extra copy | Back up files ไปยัง upload channel อื่นเพื่อลด risk หาก channel เดียวล้มเหลว |
| Switch read source | หลัง backup สำเร็จ สลับ file reads ระหว่าง primary channel และ backup channel |
| Single-file backup | Back up file เดียวจาก file details page |
| Batch backup | เลือกหลาย files ใน admin page แล้ว back up พร้อมกัน |
| Global redundant backup | Back up files ตาม folder จาก Other Settings |

## Redundant Backup Entry

เปิด:

```text
System Settings -> Other Settings -> Redundant Backup
```

![Redundant backup](../../image/other/冗余备份截图.png)

Entry นี้เหมาะกับการเพิ่ม backups ให้ folder หรือ files ทั้งหมดแบบ bulk

Backup channel เลือกเองได้ หรือเลือก automatic switching ให้ ImgBed หา suitable backup channel

## Backup จาก File Details

เปิด file details page ใน admin panel แล้วคลิก backup

![Backup in file details](../../image/other/文件详情里文件备份.png)

เหมาะกับการ back up important file หนึ่งไฟล์แบบ on demand

หลัง backup สำเร็จ file details page จะแสดง available read sources

## Batch Backup by Selection

ใน admin panel เลือกหลาย files แล้ว run batch backup

![Batch backup](../../image/other/批量备份截图.png)

เหมาะกับการ process files เป็นกลุ่ม

Selection backup, file details backup และ redundant backup ใต้ Other Settings ใช้ backup system เดียวกัน เป็นเพียง entry points คนละจุด

## Switch Read Source หลัง Backup

หลัง backup complete file details page ให้ switch read source ได้:

| Read Source | Description |
| --- | --- |
| Primary channel | Read จาก original upload channel |
| Backup channel | Read จาก backup channel |

![Switch read source after backup](../../image/other/备份成功切换读取源.png)

Visitors ไม่จำเป็นต้องรู้ว่า file serve จาก primary หรือ backup channel

Read source ที่คุณเลือกจะกลายเป็น preferred source สำหรับ file access ภายหลัง

## เมื่อไร Backup จะถูก Skip

Cases ต่อไปนี้จะถูก skip ระหว่าง backup ไม่ใช่ errors

| Case | Why It Is Skipped |
| --- | --- |
| Already backed up | File ที่มี backup แล้วจะไม่ back up ซ้ำ |
| Primary และ backup channels เหมือนกัน | Backup ต้องเก็บใน channel อื่นจึงจะมีความหมาย |
| No usable backup channel | ไม่มี alternative channel ที่เหมาะสม |

สรุป: backups ต้องไปยัง channel อื่น และ files ที่ backed up แล้วจะไม่กินพื้นที่เพิ่มซ้ำ

## Primary Channel vs Backup Channel

| Name | Meaning |
| --- | --- |
| Primary channel | Channel ที่ใช้ตอน file ถูก upload ครั้งแรก |
| Backup channel | Channel ที่เก็บ redundant copy |
| Primary read source | File กำลัง read จาก primary channel |
| Backup read source | File กำลัง read จาก backup channel |

Primary และ backup read sources มี user-facing behavior เหมือนกัน

ตราบใดที่ backup file available images, videos และ download links จะยังทำงานหลัง switch ไป backup read source

## เมื่อ File ถูก Delete

เมื่อ delete file ImgBed จะ delete ทั้ง primary file และ backup file
