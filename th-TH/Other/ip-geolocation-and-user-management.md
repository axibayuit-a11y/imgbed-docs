# IP Geolocation และ User Management

IP geolocation แปลง IP addresses ใน uploader records, login devices และ logs ที่คล้ายกันให้เป็น locations โดยประมาณ

หลัง configure แล้ว admin panel จะแสดงต้นทางของ upload และ access ได้ชัดขึ้น User Management ยังช่วย block หรือ restore upload access สำหรับ IP addresses ที่น่าสงสัยได้

## ตั้งค่าที่ไหน

เปิด:

```text
System Settings -> Other Settings -> IP Geolocation
```

![IP geolocation](../../image/other/ip定位/ip定位.png)

## Available Settings

IP geolocation flow ใหม่รองรับหลาย sources ไม่ได้พึ่ง map service เดียว

| Setting | Purpose |
| --- | --- |
| IP geolocation language | เลือก display language เช่น English, Simplified Chinese, Japanese, French และอื่น ๆ |
| MaxMind Account ID | MaxMind account ID สำหรับ MaxMind GeoLite Web Service |
| MaxMind License Key | MaxMind License Key |
| Tencent Map Key | Tencent Location Service key เหมาะกับ Chinese addresses และ mainland China IPs |
| ipapi Key | APILayer ipapi key รองรับ multilingual IP geolocation |

กรอกเฉพาะ services ที่ต้องใช้ ไม่จำเป็นต้อง configure ทุก field

ถ้าไม่ใส่ key ImgBed ยังพยายามใช้ built-in free sources แต่ stability, language support และ precision อาจต่ำกว่า service ที่คุณ configure เอง

## Recommended Choices

ถ้าต้องการ Chinese addresses เป็นหลัก:

1. ตั้ง IP geolocation language เป็น Simplified Chinese
2. Configure Tencent Map Key
3. เพิ่ม MaxMind หรือ ipapi เป็น fallback ถ้าต้องการ

ถ้าต้องการ English หรือ multilingual addresses:

1. เลือก language ที่ต้องใช้
2. Configure MaxMind Account ID และ License Key
3. เพิ่ม ipapi Key ถ้าต้องการ multilingual results ที่ดีขึ้น

## MaxMind Setup

MaxMind ต้องใช้:

```text
MaxMind Account ID
MaxMind License Key
```

หา account ID ใน MaxMind dashboard และ generate License Key จาก License Keys page

![MaxMind key config](../../image/other/ip定位/maxmind的key配置.png)

หลัง generate แล้ว paste Account ID และ License Key ใน ImgBed แล้ว save

Free plan ของ MaxMind เหมาะกับ everyday use แต่มี request limits ถ้า quota เกิน ImgBed จะลอง sources อื่นที่ available ต่อ

## ipapi Setup

ipapi ใช้ APILayer API Key

เปิด ipapi console แล้ว copy API Key ที่แสดง

![ipapi config](../../image/other/ip定位/ipapi配置.png)

Paste ใน field `ipapi Key` ใน ImgBed แล้ว save

ipapi รองรับ multilingual IP geolocation และมีประโยชน์เมื่ออยากแสดง addresses ใน selected language Free plan ก็มี request limits ถ้า quota หมด ImgBed จะลอง sources อื่นที่ available ต่อ

## Tencent Map Key Setup

Tencent Map Key เหมาะกับ Chinese addresses โดยเฉพาะ mainland China IPs

ตอนสร้าง key ใน Tencent Location Service ให้ enable:

```text
WebServiceAPI
```

หลังสร้างแล้ว paste key ใน `Tencent Map Key` แล้ว save

ถ้าต้องการ basic Chinese IP geolocation แค่ Tencent Map Key ก็เริ่มได้

## ควรดูอะไรใน User Management

User Management เปิดได้จากด้านบนของ admin panel

![User management](../../image/other/用户管理显示.png)

User Management แสดง upload activity ตาม IP:

| Field | Description |
| --- | --- |
| IP source | Uploader source IP |
| Address | Location โดยประมาณที่ resolve จาก IP |
| Total upload size | Total file size ที่ upload จาก IP นี้ |
| Upload count | จำนวน uploads จาก IP นี้ |
| Upload allowed | On หมายถึง allow uploads Off หมายถึง block uploads |

คลิก arrow ทางซ้ายเพื่อ expand list ของ files ที่ upload โดย IP นั้น

File list แสดง file name, preview, file size, moderation result, file status และ upload time ถ้า uploads ดูน่าสงสัย ให้ expand IP ก่อน review files แล้วค่อยตัดสินใจว่าจะ block uploads ต่อไปหรือไม่

ถ้า IP น่าสงสัย ให้ปิด `Upload allowed` Future uploads จาก IP นั้นจะถูก block

## Search, Sort และ Advanced Filters

ด้านบนของ User Management สามารถ search ด้วย IP source หรือ address

Sort ตาม time, upload count หรือ total upload size เพื่อหา recent uploaders, high-frequency uploaders หรือ high-usage IPs

ถ้าต้องการตรวจละเอียด ให้เปิด advanced filters

![Advanced filters](../../image/other/用户管理高级筛选.png)

Advanced filters รองรับ:

| Filter | Usage |
| --- | --- |
| Time range | แสดง IPs ที่ upload files ในช่วงเวลาที่เลือก |
| Access status | Filter ตาม normal, blocked และ states ที่คล้ายกัน |
| Allow/block list | Filter ตาม allowlist, blocklist หรือ unset |
| File type | แสดง IPs ที่ upload images, videos, audio, documents, code หรือ other files |
| File size | Filter ตาม uploaded file size range |
| Age rating | Filter ตาม unset, General, R12+, R16+, R18 และ ratings คล้ายกัน |
| File status | Filter ตาม current file status เพื่อตรวจ abnormal files |

คลิก `Apply Filters` เพื่อ apply ใช้ `Reset` เพื่อกลับไปดูข้อมูลทั้งหมด

## Mobile View

บน mobile User Management จะเปลี่ยนเป็น card layout

![Mobile user management](../../image/other/手机端显示用户管理效果.png)

แต่ละ card แสดง IP, address, total upload size, upload count และ upload allowed switch จัดการ users ได้โดยไม่ต้อง scroll table แนวนอน

## ถ้า Location ดูผิด

IP geolocation เป็นค่าโดยประมาณ ไม่ใช่ street address ที่แม่นยำ

ถ้า user อยู่หลัง proxy, data center, cloud server หรือ cross-border network location ที่แสดงอาจต่างจาก location จริง

ใช้ feature นี้เพื่อเข้าใจ rough origin, หา abnormal uploads และช่วยตัดสินใจ block อย่าใช้แทน precise tracking

## Common Cases

| Case | Meaning |
| --- | --- |
| Address ว่าง | IP อาจยังไม่ resolve หรือ current source unavailable ชั่วคราว |
| Address language ผิด | ตรวจ IP geolocation language และมี source ที่รองรับ language นั้น configured หรือไม่ |
| Address แสดง data center | Proxies, cloud servers และ crawlers จำนวนมากแสดงเป็น data center หรือ ISP addresses |
| Upload count สูง | Review IP นี้อย่างระมัดระวัง และ block uploads หากจำเป็น |
| Total upload size ใหญ่ | Sort หรือ filter, expand IP แล้วตรวจ specific files |
| ต้อง restore หลัง block | เปิด `Upload allowed` กลับเป็น on |

## Quick Flow

```text
เปิด IP Geolocation ใน Other Settings
-> เลือก IP geolocation language
-> กรอก MaxMind, Tencent Map หรือ ipapi credentials ตามต้องการ
-> Save settings
-> เปิด User Management
-> Review IP source, address, total upload size และ upload count
-> ใช้ search, sort หรือ advanced filters หา IPs ผิดปกติ
-> Allow หรือ block uploads ตามต้องการ
```
