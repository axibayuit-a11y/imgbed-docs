# เพิ่มช่องทาง Telegram

## สิ่งที่ต้องเตรียมก่อนเริ่ม

| ข้อกำหนด | วัตถุประสงค์ |
| --- | --- |
| Telegram account | ใช้สร้าง bot และ storage channel |
| `@BotFather` | ใช้สร้าง Telegram bot |
| Telegram channel | ปลายทางสุดท้ายสำหรับเก็บไฟล์ |
| `@userinfobot` | ใช้ดู `Chat ID` ของ channel |

## เพิ่มได้จากที่ไหน

1. เปิดการตั้งค่าระบบ
2. ไปที่การตั้งค่าการอัปโหลด
3. คลิกเพิ่มช่องทางที่มุมขวาบน
4. เลือก `Telegram`

## รายละเอียดฟิลด์

| ฟิลด์ | ใช้ทำอะไร | จำเป็น |
| --- | --- | --- |
| Channel name | ชื่อที่จำง่ายสำหรับ channel นี้ เช่น "Telegram Primary" | จำเป็น |
| Active | เปิดหรือปิด channel นี้ | แนะนำ |
| Bot Token | Token ของ Telegram bot | จำเป็น |
| Session ID (Chat ID) | ID ของ Telegram channel | จำเป็น |
| Relay Proxy URL (ไม่บังคับ) | ใช้เฉพาะเมื่อเข้าถึง Telegram ไม่เสถียร ใส่ proxy URL แบบเต็มรวม `https://` | ไม่บังคับ |
| Remark | หมายเหตุสำหรับดูแลในภายหลัง | ไม่บังคับ |

## ขั้นตอนตั้งค่า

### 1. สร้าง Telegram Bot

1. เปิด Telegram แล้วค้นหา `@BotFather`
2. เปิด chat แล้วคลิก `Start`
3. ส่ง `/newbot`
4. ทำตาม prompt เพื่อใส่ bot display name
5. ทำตาม prompt เพื่อใส่ bot username โดยปกติ username ต้องลงท้ายด้วย `bot`
6. เมื่อสร้าง bot แล้ว `@BotFather` จะส่ง bot token กลับมา

Token นี้คือค่า `Bot Token` ที่ต้องใส่ใน ImgBed

![บันทึก bot token](../../image/upload/telegram/保存机器人令牌.png)

### 2. สร้าง Channel

1. ใน Telegram ให้คลิก New Channel
2. ใส่ channel name
3. สร้าง channel ให้เสร็จ

ใช้ได้ทั้ง public และ private channel

![สร้าง channel](../../image/upload/telegram/新建频道.png)

### 3. เพิ่ม Bot เข้า Channel

1. เปิด channel ที่เพิ่งสร้าง
2. เปิด channel settings
3. เพิ่ม member หรือ administrator
4. ค้นหา bot username ที่สร้างไว้
5. เพิ่ม bot เข้า channel

เพื่อให้อัปโหลดได้เสถียรที่สุด แนะนำให้ให้สิทธิ์ bot เป็น administrator

![เชิญ bot เข้าช่องทาง](../../image/upload/telegram/邀请机器人进频道里.png)

### 4. รับ Channel ID ด้วย `User Info - Get ID - IDbot`

1. ค้นหา `@userinfobot` ใน Telegram ชื่อที่แสดงมักเป็น `User Info - Get ID - IDbot`
2. เปิด chat แล้วคลิก `Start`
3. เลือก `Channel` จากตัวเลือกที่ bot ให้มา
4. ใน message picker ให้เลือก target channel แล้วส่งไปที่ `@userinfobot`
5. เมื่อ `@userinfobot` ส่งผลลัพธ์กลับมา ให้คัดลอกเลขที่แสดงเป็น `Id: -100...`

เลขที่ขึ้นต้นด้วย `-100` คือ `Session ID (Chat ID)` ที่ ImgBed ต้องใช้

![รับ channel ID](../../image/upload/telegram/获取频道id.png)

### 5. ใส่ช่องทาง Telegram ใน ImgBed

กลับไปที่กล่องกำหนดค่า channel แล้วกรอกดังนี้:

| ฟิลด์ UI | ค่า |
| --- | --- |
| Channel Identifier | ชื่อ channel ที่ตั้งเอง เช่น `TelegramPrimary` |
| Active | แนะนำ |
| Bot Token | Bot token จาก `@BotFather` |
| Session ID (Chat ID) | เลข `-100...` ที่ได้จาก `@userinfobot` |
| Relay Proxy URL (ไม่บังคับ) | ใส่เฉพาะเมื่อจำเป็น เช่น `https://your-tg-proxy.example.com` |
| Remark | หมายเหตุเพิ่มเติม |

กรอกครบแล้วคลิก Save

![แก้ไขการกำหนดค่า](../../image/upload/telegram/编辑配置.png)

## วิธีตรวจสอบ

| รายการตรวจสอบ | วิธีตรวจสอบ |
| --- | --- |
| เห็นการ์ดช่องทาง | หลังบันทึก หน้า Upload Settings ควรแสดงการ์ดช่องทาง Telegram |
| เปิดใช้งานช่องทางได้ | Active switch ควรอยู่ในสถานะ on |
| บันทึกการกำหนดค่าแล้ว | Detail view ควรแสดงว่า Bot Token และ Chat ID ถูกบันทึกแล้ว |
| การอัปโหลดใช้งานได้ | อัปโหลดรูปทดสอบแล้วตรวจสอบว่าไปปรากฏใน Telegram channel เป้าหมาย |

## รายการตรวจสอบด่วน

```text
Create a bot with @BotFather
-> Save the Bot Token
-> Create a Telegram channel
-> Add the bot to the channel and grant administrator permissions
-> Search for @userinfobot and choose Channel
-> Forward any message from the channel to @userinfobot
-> Copy the returned Id: -100...
-> Enter the Bot Token and Chat ID in ImgBed
-> Save and upload a test image
```

## เอกสารอ้างอิง

1. Telegram bots: https://core.telegram.org/bots
2. Telegram Bot API: https://core.telegram.org/bots/api
