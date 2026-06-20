# เพิ่ม Discord Channel

## สิ่งที่ต้องเตรียมก่อนเริ่ม

| Requirement | Purpose |
| --- | --- |
| Discord account | ใช้สร้าง server, channel และ developer application |
| Discord server | Bot ต้องอยู่ใน server ก่อนจึงจะ access channel ได้ |
| Text channel | Images และ files จะถูกส่งไปยัง channel นี้ |
| Discord Developer Portal | ใช้สร้าง application, สร้าง bot และรับ `Bot Token` |

## เพิ่มได้จากที่ไหน

1. เปิด System Settings
2. ไปที่ Upload Settings
3. คลิก Add Channel ที่มุมขวาบน
4. เลือก `Discord`

## Field Reference

| Field | ใช้ทำอะไร | Required |
| --- | --- | --- |
| Channel name | ชื่อที่จำง่ายสำหรับ channel นี้ เช่น "Discord Primary" | Required |
| Bot Token | Discord bot token | Required |
| Channel ID | ID ของ target text channel | Required |
| Proxy URL (optional) | ใช้เฉพาะเมื่อ Discord CDN access ไม่เสถียร ใส่ full URL รวม `https://` | Optional |

## ขั้นตอนตั้งค่า

### 1. สร้าง Discord Server และ Text Channel

1. เปิด Discord
2. สร้าง server ใหม่ หรือใช้ existing server ที่คุณเป็นเจ้าของ
3. สร้าง text channel ใน server นั้น

![Create a server](../../image/upload/discord/创建服务器.png)

### 2. สร้าง Bot ใน Discord Developer Portal

1. เปิด Discord Developer Portal: `https://discord.com/developers/applications`
2. คลิก `New Application`
3. ใส่ application name แล้วสร้าง
4. เปิดหน้า `Bot` จาก left sidebar
5. Generate หรือ reset token ในหน้า `Bot`
6. Save token ไว้

Token นี้คือ `Bot Token` ที่ต้องใส่ใน ImgBed

![View the bot token](../../image/upload/discord/查看机器人令牌.png)

### 3. สร้าง OAuth2 Invite Link และ Install Bot

1. เปิดหน้า `OAuth2` จาก left sidebar
2. ใน scopes ให้เลือก `bot`
3. ใน permission area ให้ enable permissions เหล่านี้:

| Permission | Required |
| --- | --- |
| View Channels | Yes |
| Send Messages | Yes |
| Attach Files | Yes |
| Read Message History | Yes |

4. ด้านล่างของ page ให้ confirm ว่า integration type เป็น `Guild Install`
5. Copy generated URL
6. เปิด URL นั้นใน browser
7. เลือก target server
8. ทำ authorization flow ให้เสร็จ

![Select bot permissions in OAuth2](../../image/upload/discord/在oa2勾选机器人权限.png)

![Invite the bot to the channel](../../image/upload/discord/邀请机器人到频道.png)

### 4. Enable Developer Mode และ Copy Channel ID

1. คลิก gear icon ข้าง avatar มุมซ้ายล่างของ Discord
2. เปิด Advanced จาก left sidebar
3. Enable Developer Mode
4. กลับไปที่ target text channel
5. Right-click ชื่อ channel
6. คลิก Copy Channel ID

เลขที่ copy ได้คือ `Channel ID` ที่ ImgBed ต้องใช้

![Enable developer mode](../../image/upload/discord/开启开发者权限.png)

![Copy the channel ID](../../image/upload/discord/复制群频道id.png)

### 5. ใส่ Discord Channel ใน ImgBed

กลับไปที่ channel configuration dialog แล้วกรอกดังนี้:

| UI Field | Value |
| --- | --- |
| Channel name | Custom channel name เช่น `DiscordPrimary` |
| Bot Token | Token ที่ save จากหน้า `Bot` ใน Discord Developer Portal |
| Channel ID | Channel ID ที่ copy จาก Discord |
| Proxy URL (optional) | ใส่เฉพาะเมื่อจำเป็น เช่น `https://your-proxy.example.com` |

กรอกครบแล้วคลิก Save

![Add the Discord channel configuration](../../image/upload/discord/添加dc新渠道配置.png)

## วิธีตรวจสอบ

| Check | วิธีตรวจสอบ |
| --- | --- |
| เห็น channel card | หลัง save หน้า Upload Settings ควรแสดง Discord channel card |
| Channel เปิดใช้งานได้ | Active switch ควรอยู่ on |
| Configuration ถูกบันทึก | Detail view ควรแสดงว่า Bot Token และ Channel ID ถูกบันทึกแล้ว |
| Upload ใช้งานได้ | Upload test image แล้วตรวจว่าไปปรากฏใน target Discord text channel |

## Quick Checklist

```text
สร้าง Discord server
-> สร้าง text channel
-> สร้าง bot ใน Discord Developer Portal
-> Save Bot Token จากหน้า Bot
-> ใน OAuth2 เลือก bot, View Channels, Send Messages, Attach Files และ Read Message History
-> Copy generated URL แล้ว authorize bot ให้ target server
-> ตรวจว่า target text channel ให้ permissions เดียวกัน
-> Enable Developer Mode
-> Right-click target text channel แล้ว copy Channel ID
-> ใส่ Bot Token และ Channel ID ใน ImgBed
-> Save แล้ว upload test image
```

## References

1. Discord Developers Getting Started: https://docs.discord.com/developers/quick-start/getting-started
2. Discord Help - Where can I find my User/Server/Message ID: https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID
