# Cloudflare API Token

Cloudflare API credentials ช่วยให้ ImgBed purge Cloudflare CDN cache หลัง files เปลี่ยนแปลง

![Cloudflare API Token settings](../../image/Safety/cloudflare%20api%20token截图.png)

## ตั้งค่าที่ไหน

เปิด admin panel แล้วไปที่:

```text
System Settings -> Security Settings -> Cloudflare API Token
```

ต้องกรอก:

- Zone ID
- Account email
- API Key

## Setting นี้ทำอะไร

Cloudflare อาจ cache public image URLs

Caching ทำให้เปิด image ได้เร็วขึ้น แต่ก็อาจทำให้ content เก่ายังแสดงอยู่สักพักหลังจาก delete, block, replace หรือ move file

เมื่อ configure Cloudflare API credentials แล้ว ImgBed จะพยายาม purge Cloudflare cache ที่เกี่ยวข้องหลัง operations เหล่านั้นเสร็จ

มีประโยชน์เมื่อ:

- คุณ delete image แล้วต้องการให้ public link หยุดใช้งานเร็วที่สุด
- คุณ block image แล้วไม่ต้องการให้ visitors เห็น original file
- คุณ replace file ด้วยชื่อเดิม แล้วต้องการให้ visitors เห็น version ใหม่เร็วขึ้น
- คุณ move หรือ rename files แล้วต้องการ refresh cache ของ old path อย่างรวดเร็ว
- คุณเปลี่ยน public access rules แล้วต้องการให้ public gallery หรือ random image cache update เร็วขึ้น

## ถ้าเว้นว่างจะเกิดอะไร

ImgBed ยังทำงานปกติแม้ไม่มี setting นี้

ข้อแตกต่างคือ ImgBed จะไม่ actively purge Cloudflare CDN cache Visitors อาจยังเห็น content เก่าจนกว่า Cloudflare cache จะ expire เอง

## หา Zone ID ได้อย่างไร

Zone ID คือ Cloudflare Zone ID ของ site ที่ใช้กับ ImgBed domain ของคุณ

1. Sign in เข้า Cloudflare dashboard
2. เปิด site ที่มี ImgBed domain
3. หา `Zone ID` ใน site overview page
4. Copy ไปใส่ field `Zone ID` ใน ImgBed

นี่คือ site Zone ID ไม่ใช่ account ID

## Account Email

ใส่ email address ที่ใช้ sign in เข้า Cloudflare

ต้องตรงกับ API Key ที่ใส่ด้านล่าง

## API Key

ใส่ Cloudflare Global API Key

1. Sign in เข้า Cloudflare dashboard
2. เปิด profile
3. ไปที่ API Tokens page
4. หา `Global API Key`
5. View แล้ว copy
6. Paste ลงใน field `API Key` ใน ImgBed

![View global API key](../../image/Safety/查看全局令牌.png)

## มีผลเมื่อไร

หลังกรอก fields แล้วให้ save settings

File changes หลังจากนี้จะพยายาม purge Cloudflare cache อัตโนมัติ Operations ที่เกิดก่อนตั้งค่านี้จะไม่ถูก purge ย้อนหลัง ถ้า delete หรือ replace file ก่อนตั้งค่า ให้รอ Cloudflare cache expire หรือ purge เองใน Cloudflare

## FAQ

### จำเป็นต้องตั้งไหม?

ไม่จำเป็น

ถ้า domain ไม่ได้ใช้ Cloudflare หรือไม่ติดปัญหา CDN cache delay สามารถเว้นว่างได้

### Credentials ผิดจะทำให้ Upload เสียไหม?

โดยทั่วไปไม่

Credentials ผิดจะทำให้ ImgBed purge Cloudflare cache ไม่ได้เท่านั้น Upload และ normal file access ควรยังทำงานได้

### ทำไม Deleted Image ยังเปิดได้?

สาเหตุที่พบบ่อยที่สุดคือ Cloudflare ยัง cache file เก่าไว้

เมื่อมี Cloudflare API credentials ที่ถูกต้อง ImgBed จะ purge related URL cache ตอน file ถูก delete

### ทำไม Replace File แล้ว ยังเห็น Image เก่า?

โดยปกติก็เกิดจาก CDN cache เช่นกัน

หลัง configure setting นี้ ImgBed จะพยายาม purge old URL cache เมื่อ file ชื่อเดิมถูก overwrite
