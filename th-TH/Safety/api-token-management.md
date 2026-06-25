# การจัดการการกำหนดค่าผ่าน API Token

การจัดการการกำหนดค่าผ่าน API Token เหมาะสำหรับสคริปต์อัตโนมัติ เครื่องมือปฏิบัติการ หรือแผงควบคุมของบุคคลที่สาม สามารถอ่านและอัปเดตการกำหนดค่าช่องทางอัปโหลด การตั้งค่าความปลอดภัย การตั้งค่าหน้า การตั้งค่าอื่น ๆ และความสัมพันธ์แบบสหพันธ์ที่เป็นงานเบาได้โดยไม่ต้องเปิดหน้าผู้ดูแลระบบ

สิทธิ์จัดการเปิดเฉพาะการดำเนินการเบาที่เหมาะกับสคริปต์เท่านั้น การดำเนินการหนักที่ต้องยืนยันในเบราว์เซอร์ งานแบบชุดของส่วนหน้า หรือการล้างดัชนีสหพันธ์ ยังคงต้องทำในแผงผู้ดูแลระบบบนเบราว์เซอร์

![แก้ไข API Token](../../image/Safety/apitoken/编辑api token.png)

## ก่อนเริ่ม

เปิดแผงผู้ดูแลระบบ แล้วไปที่:

```text
System Settings -> Security Settings -> API Token
```

เมื่อสร้างหรือแก้ไข API Token ให้ตรวจสอบว่ามีสิทธิ์จัดการ สิทธิ์จัดการสามารถเปลี่ยนการกำหนดค่าของไซต์ได้ จึงควรมอบให้เฉพาะสคริปต์หรือผู้ใช้ที่เชื่อถือได้

สคริปต์จัดการทั้งสามตัวใช้โหมดทดลองโดยค่าเริ่มต้นสำหรับการเขียน หลังจากตรวจสอบตัวอย่างแล้ว ให้เพิ่ม `--apply` เพื่อบันทึกการเปลี่ยนแปลงจริง

คุณสามารถใส่ token ไว้ในตัวแปรสภาพแวดล้อมได้ด้วย:

```powershell
$env:IMGBED_API_TOKEN="your API Token"
```

## ดาวน์โหลดสคริปต์จัดการ

ชุดเอกสารมีสคริปต์ Node.js สามตัว:

| สคริปต์ | วัตถุประสงค์ |
| --- | --- |
| <a href="/tools/imgbed-token-upload-settings.mjs" download>ดาวน์โหลดสคริปต์จัดการการตั้งค่าอัปโหลด</a> | จัดการช่องทางอัปโหลด ช่องทางย่อย และการกระจายโหลด |
| <a href="/tools/imgbed-token-site-settings.mjs" download>ดาวน์โหลดสคริปต์จัดการการตั้งค่าไซต์</a> | จัดการการตั้งค่าความปลอดภัย การตั้งค่าหน้า และการตั้งค่าอื่น ๆ |
| <a href="/tools/imgbed-token-federation.mjs" download>ดาวน์โหลดสคริปต์จัดการความสัมพันธ์สหพันธ์</a> | จัดการการดำเนินการเบาของความสัมพันธ์สหพันธ์ คำขอ และข้อความ |

ต้องใช้ Node.js 18 หรือใหม่กว่า

### พารามิเตอร์ทั่วไป

| พารามิเตอร์ | จำเป็น | คำอธิบาย |
| --- | --- | --- |
| `--base-url <url>` | ใช่ | URL ของไซต์ ImgBed เช่น `https://image.ai6.me` |
| `--token <token>` | ใช่ | API Token สามารถใช้ตัวแปรสภาพแวดล้อม `IMGBED_API_TOKEN` ได้ด้วย |
| `--retries <n>` | ไม่ | จำนวนครั้งที่ลองใหม่เมื่อเกิดความล้มเหลวชั่วคราว ค่าเริ่มต้นคือ `3` |
| `--timeout-ms <n>` | ไม่ | เวลาหมดอายุคำขอ ค่าเริ่มต้นคือ `180000` |
| `--output <pretty\|json>` | ไม่ | รูปแบบผลลัพธ์ ค่าเริ่มต้นคือ `pretty`; ใช้ `json` สำหรับโปรแกรม |
| `--save-response <path>` | ไม่ | บันทึกผลลัพธ์ JSON สุดท้ายลงไฟล์ |
| `--apply` | ไม่ | ดำเนินการเขียนจริง หากไม่มี ตัวเขียนจะแสดงเฉพาะตัวอย่าง |
| `-h` / `--help` | ไม่ | แสดงวิธีใช้สคริปต์ |

## การตั้งค่าอัปโหลด

สคริปต์การตั้งค่าอัปโหลดจะแสดง อ่าน สร้าง แก้ไข และลบช่องทางย่อยของการอัปโหลดได้ และยังเปิดหรือปิดการกระจายโหลดของช่องทางอัปโหลดระดับบนหนึ่งช่องทางได้

```powershell
node imgbed-token-upload-settings.mjs --base-url "https://your-domain" --token "your API Token" --list
```

### พารามิเตอร์การตั้งค่าอัปโหลด

| พารามิเตอร์ | คำอธิบาย |
| --- | --- |
| `--list` | แสดงกลุ่มการตั้งค่าอัปโหลด |
| `--get` | อ่านช่องทางระดับบน หรือช่องทางย่อยหนึ่งรายการใต้ช่องทางนั้น |
| `--upsert` | สร้างหรือแก้ไขช่องทางย่อยหนึ่งรายการ เป็นการทดลองหากไม่ได้ตั้ง `--apply` |
| `--delete` | ลบช่องทางย่อยหนึ่งรายการ เป็นการทดลองหากไม่ได้ตั้ง `--apply` |
| `--load-balance <true\|false>` | เปิดหรือปิดการกระจายโหลดสำหรับช่องทางระดับบน |
| `--channel <key>` | ช่องทางอัปโหลดระดับบน เช่น `s3`, `github` หรือ `telegram` |
| `--channel-name <name>` | ชื่อช่องทางย่อยหรือบัญชี |
| `--set key=value` | ตั้งค่าหนึ่งฟิลด์ ใช้ซ้ำได้ รองรับเส้นทางแบบจุด |
| `--patch-json <path>` | รวมฟิลด์จากไฟล์ JSON |
| `--apply` | บันทึกผลลัพธ์การเขียน |

### key ช่องทาง

| key ช่องทาง | ช่องทาง |
| --- | --- |
| `telegram` / `tg` | Telegram |
| `discord` / `dc` | Discord |
| `cfr2` / `r2` | Cloudflare R2 |
| `s3` | S3 |
| `webdav` / `wd` | ช่องทางจัดเก็บ WebDAV |
| `github` / `gh` | GitHub Releases |
| `gitlab` / `gl` | GitLab Packages |
| `huggingface` / `hf` | Hugging Face |
| `onedrive` / `od` | OneDrive |
| `googledrive` / `google` / `gd` | Google Drive |
| `dropbox` / `db` | Dropbox |
| `yandex` / `yx` | Yandex Disk |
| `pcloud` / `pd` | pCloud |

### ตัวอย่างการตั้งค่าอัปโหลด

แสดงการตั้งค่าอัปโหลดทั้งหมด:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --list
```

อ่านการกำหนดค่าช่องทาง S3:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get `
  --channel s3
```

อ่านช่องทางย่อย S3 หนึ่งรายการ:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get `
  --channel s3 `
  --channel-name "backup-s3"
```

สร้างหรือแก้ไขช่องทางย่อยหนึ่งรายการ เรียกใช้โดยไม่มี `--apply` ก่อนเพื่อดูตัวอย่าง:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --upsert `
  --channel webdav `
  --channel-name "backup-webdav" `
  --set enabled=false `
  --set remark="backup test"
```

จากนั้นบันทึกหลังจากยืนยันแล้ว:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --upsert `
  --channel webdav `
  --channel-name "backup-webdav" `
  --set enabled=false `
  --set remark="backup test" `
  --apply
```

ลบช่องทางย่อยหนึ่งรายการ:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --delete `
  --channel webdav `
  --channel-name "backup-webdav" `
  --apply
```

เปิดการกระจายโหลด S3:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --load-balance true `
  --channel s3 `
  --apply
```

สำหรับฟิลด์ที่ซับซ้อน ให้เขียนไฟล์ JSON แล้วส่งผ่าน `--patch-json`:

```json
{
  "enabled": true,
  "remark": "primary account"
}
```

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --upsert `
  --channel s3 `
  --channel-name "primary-s3" `
  --patch-json ".\s3-channel.json" `
  --apply
```

## การตั้งค่าไซต์

สคริปต์การตั้งค่าไซต์จัดการพื้นที่การกำหนดค่าสามส่วน:

| พื้นที่ | พารามิเตอร์ | คำอธิบาย |
| --- | --- | --- |
| การตั้งค่าความปลอดภัย | `security` | การยืนยันตัวตนของผู้ใช้ การยืนยันตัวตนของผู้ดูแลระบบ อุปกรณ์เข้าสู่ระบบ API Token การตรวจสอบรูปภาพ ขีดจำกัดผู้ใช้ WebDAV และอื่น ๆ |
| การตั้งค่าหน้า | `page` | หน้าทั่วไป หน้าฝั่งผู้ใช้ หน้าผู้ดูแลระบบ และการตั้งค่าการแสดงผลที่เกี่ยวข้อง |
| การตั้งค่าอื่น ๆ | `others` | API รูปภาพสุ่ม การเรียกดูสาธารณะ โหนดสหพันธ์ภายใน แท็กอัตโนมัติ ตำแหน่งทางภูมิศาสตร์ของ IP ช่องทางสำรอง OCR และอื่น ๆ |

ใช้ `--list-sections` ก่อนเพื่อดูพื้นที่ ส่วน และฟิลด์ที่แก้ไขได้:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --list-sections
```

### พารามิเตอร์การตั้งค่าไซต์

| พารามิเตอร์ | คำอธิบาย |
| --- | --- |
| `--list-sections` | แสดงพื้นที่ ส่วน และฟิลด์ที่แก้ไขได้ |
| `--get` | อ่านส่วนการตั้งค่าหนึ่งส่วน |
| `--area <security\|page\|others>` | เลือกพื้นที่การกำหนดค่า |
| `--section <name>` | เลือกส่วน ใช้ชื่อที่แสดงโดย `--list-sections` |
| `--set key=value` | ตั้งค่าหนึ่งฟิลด์ ใช้ซ้ำได้ |
| `--apply` | บันทึกผลลัพธ์การเขียน |

สำหรับพื้นที่ `page` พารามิเตอร์ `--set` ใช้ ID รายการกำหนดค่าหน้า เช่น `starsEffect=true` สำหรับ `security` และ `others` พารามิเตอร์ `--set` ใช้ชื่อฟิลด์ในส่วนนั้น เช่น `email=admin@example.com`

### ตัวอย่างการตั้งค่าไซต์

อ่านการตั้งค่าการแจ้งเตือนอัปเดตระบบ:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get `
  --area security `
  --section systemUpdate
```

เปลี่ยนอีเมลแจ้งเตือนอัปเดตระบบ เรียกใช้โดยไม่มี `--apply` ก่อนเพื่อดูตัวอย่าง:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --area security `
  --section systemUpdate `
  --set email="admin@example.com"
```

จากนั้นบันทึกหลังจากยืนยันแล้ว:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --area security `
  --section systemUpdate `
  --set email="admin@example.com" `
  --apply
```

เปลี่ยนเอฟเฟกต์ดาวบนหน้าผู้ดูแลระบบ:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --area page `
  --section adminSettings `
  --set starsEffect=true `
  --apply
```

เปลี่ยนภาษาตำแหน่งทางภูมิศาสตร์ของ IP:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --area others `
  --section ipGeolocation `
  --set language="en" `
  --apply
```

การตั้งค่าโหนดสหพันธ์ภายในสามารถอ่านและอัปเดตฟิลด์ทั่วไป เช่น สถานะเปิดใช้ ไดเรกทอรีซิงก์ และรหัสเชิญ การยืนยันโดเมนไม่ได้จัดการผ่าน API Token หากแผงผู้ดูแลระบบแจ้งว่าโดเมนของโหนดภายในต่างจากโดเมนเข้าถึงปัจจุบัน ให้ยืนยันให้เสร็จในแผงผู้ดูแลระบบบนเบราว์เซอร์

## ความสัมพันธ์สหพันธ์

สคริปต์สหพันธ์จัดการสถานะโหนดภายใน โหนดขาออก โหนดขาเข้า ข้อความ คำขอเข้าร่วม การสมัครซ้ำแบบไม่มีบันทึก การอนุมัติ การปฏิเสธ และการดำเนินการเบาของความสัมพันธ์ที่ไม่ต้องล้างดัชนี

การอัปเดตดัชนี การลบดัชนีสหพันธ์ และการยืนยันการเปลี่ยนโดเมนขึ้นอยู่กับขั้นตอนเต็มในเบราว์เซอร์ สคริปต์ไม่จัดการการดำเนินการหนักเหล่านี้

### การดำเนินการสหพันธ์แบบเบาและแบบหนัก

| การดำเนินการ | การรองรับของสคริปต์ | คำอธิบาย |
| --- | --- | --- |
| ดูสถานะโหนดภายในและรายการความสัมพันธ์ | รองรับ | อ่านเฉพาะบันทึกความสัมพันธ์ |
| อ่านข้อความและส่งข้อความ | รองรับ | อ่านหรือเขียนข้อความความสัมพันธ์ |
| ขอเข้าร่วมโหนดอื่น | รองรับ | ใช้ลิงก์เชิญเพื่อส่งคำขอ |
| สมัครซ้ำสำหรับความสัมพันธ์ที่ไม่มีบันทึก | รองรับ | เฉพาะการ์ดขาออกที่มี `lastResult=none`; ต้องใช้รหัสเชิญ 6 อักขระ |
| ยกเลิกคำขอขาออกที่รอดำเนินการ | รองรับ | ยกเลิกเฉพาะคำขอที่รอดำเนินการ |
| ยอมรับหรือปฏิเสธคำขอขาเข้า | รองรับ | จัดการคำขอจากโหนดที่เข้าร่วมกับคุณ |
| ลบความสัมพันธ์ขาเข้าที่ได้รับการยอมรับ | รองรับ | อัปเดตบันทึกความสัมพันธ์ขาเข้าและแจ้งอีกฝ่าย |
| ลบบันทึกขาเข้าที่สิ้นสุดแล้ว | รองรับ | ลบเฉพาะบันทึกความสัมพันธ์ขาเข้าที่สิ้นสุดแล้ว |
| ยกเลิกการติดตามขาออกที่ได้รับการยอมรับ | เฉพาะเบราว์เซอร์ | ต้องลบดัชนีสหพันธ์ภายใน ซึ่งเบราว์เซอร์ทำเป็นชุด |
| ลบบันทึกขาออกที่สิ้นสุดแล้ว | เฉพาะเบราว์เซอร์ | อาจต้องล้างดัชนีสหพันธ์ก่อน |
| ยืนยันหรือยกเลิกการเปลี่ยนโดเมน | เฉพาะเบราว์เซอร์ | ต้องยืนยันโดเมนปัจจุบันและจัดการดัชนีการเปลี่ยนโดเมน |
| เผยแพร่ ดึง หรือ ลบดัชนีเป็นชุด | เฉพาะเบราว์เซอร์ | เป็นงานแบบชุดของส่วนหน้า |

### พารามิเตอร์สหพันธ์

| พารามิเตอร์ | คำอธิบาย |
| --- | --- |
| `--status` | ดูสถานะโหนดสหพันธ์ภายใน โหนดขาออก และโหนดขาเข้า |
| `--list` | แสดงรายการความสัมพันธ์สหพันธ์ |
| `--chat` | อ่านข้อความที่แคชไว้ของความสัมพันธ์หนึ่งรายการ |
| `--send-message` | ส่งข้อความถึงความสัมพันธ์ที่ตั้งขึ้นแล้วหนึ่งรายการ |
| `--join` | ขอเข้าร่วมโหนดอื่นผ่านลิงก์เชิญ |
| `--reapply` | สมัครซ้ำสำหรับความสัมพันธ์ที่ไม่มีบันทึก ต้องใช้รหัสเชิญ 6 อักขระ |
| `--accept` | ยอมรับคำขอขาเข้า |
| `--deny` | ปฏิเสธคำขอขาเข้า |
| `--cancel` | ยกเลิกคำขอขาออกที่รอดำเนินการ หรือลบความสัมพันธ์ขาเข้าที่ได้รับการยอมรับ |
| `--delete` | ลบบันทึกความสัมพันธ์ขาเข้าที่สิ้นสุดแล้ว |
| `--direction <outgoing\|incoming\|all>` | ทิศทางความสัมพันธ์ `outgoing` หมายถึงโหนดที่คุณเข้าร่วม; `incoming` หมายถึงโหนดที่เข้าร่วมกับคุณ |
| `--domain <url>` | โดเมนของโหนดความสัมพันธ์ |
| `--invite-link <url>` | ลิงก์เชิญจากโหนดอีกฝ่าย |
| `--invite-code <code>` | รหัสเชิญ 6 อักขระที่ใช้สมัครซ้ำ |
| `--text <message>` | ข้อความ |
| `--apply` | บันทึกผลลัพธ์การเขียน |

### ตัวอย่างสหพันธ์

ดูสถานะโหนดภายในและรายการความสัมพันธ์ทั้งสองฝั่ง:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --status
```

แสดงเฉพาะโหนดขาออก:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --list `
  --direction outgoing
```

แสดงเฉพาะโหนดขาเข้า:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --list `
  --direction incoming
```

ขอเข้าร่วมโหนดอื่น เรียกใช้โดยไม่มี `--apply` ก่อนเพื่อดูตัวอย่าง:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --join `
  --invite-link "https://peer-domain/federation/invite/abcdef"
```

จากนั้นบันทึกหลังจากยืนยันแล้ว:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --join `
  --invite-link "https://peer-domain/federation/invite/abcdef" `
  --apply
```

สมัครซ้ำสำหรับความสัมพันธ์ที่ไม่มีบันทึก:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --reapply `
  --domain "https://peer-domain" `
  --invite-code "abc123" `
  --apply
```

ยอมรับคำขอขาเข้า:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --accept `
  --domain "https://peer-domain" `
  --apply
```

ปฏิเสธคำขอขาเข้า:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --deny `
  --domain "https://peer-domain" `
  --apply
```

ส่งข้อความถึงความสัมพันธ์ที่ตั้งขึ้นแล้ว:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --send-message `
  --direction outgoing `
  --domain "https://peer-domain" `
  --text "Hello, this is a test message." `
  --apply
```

ยกเลิกคำขอขาออกที่รอดำเนินการ:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --cancel `
  --direction outgoing `
  --domain "https://peer-domain" `
  --apply
```

ลบความสัมพันธ์ขาเข้าที่ได้รับการยอมรับ:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --cancel `
  --direction incoming `
  --domain "https://peer-domain" `
  --apply
```

ลบบันทึกขาเข้าที่สิ้นสุดแล้ว:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --delete `
  --direction incoming `
  --domain "https://peer-domain" `
  --apply
```

การยกเลิกการติดตามขาออกที่ได้รับการยอมรับและการลบบันทึกขาออกต้องทำในแผงผู้ดูแลระบบบนเบราว์เซอร์ เพราะการดำเนินการเหล่านี้อาจต้องล้างดัชนีสหพันธ์ภายในก่อน

### โดเมนไม่ตรงกัน

หากโดเมนโหนดภายในและโดเมนที่รอดำเนินการในความสัมพันธ์ไม่ตรงกัน สคริปต์จะแจ้งข้อผิดพลาดพร้อม `currentDomain` และ `pendingDomain` ให้จัดการเรื่องนี้ในแผงผู้ดูแลระบบบนเบราว์เซอร์ เพราะการเปลี่ยนโดเมนเกี่ยวข้องกับการล้างดัชนีขาออกและการยืนยันด้วย

หากคำขอเข้าร่วมส่งคืน `FEDERATION_NODE_DOMAIN_MISMATCH` แสดงว่าโดเมนที่ใช้ในลิงก์เชิญไม่ตรงกับโดเมนภายในที่บันทึกไว้ของโหนดอีกฝ่าย ผลตอบกลับจะมี `currentOrigin` และ `detectedOrigin` ให้ใช้โดเมนที่อีกฝ่ายยืนยันล่าสุด หรือขอให้อีกฝ่ายยืนยันโดเมนในแผงผู้ดูแลระบบบนเบราว์เซอร์ก่อน

## FAQ

### ทำไมการเปลี่ยนแปลงของฉันไม่เกิดผล

คำสั่งเขียนทำงานในโหมดตัวอย่างโดยค่าเริ่มต้น หลังจากตรวจสอบตัวอย่างแล้ว ให้เพิ่ม `--apply` เพื่อบันทึกการเปลี่ยนแปลงจริง

### จะรู้ได้อย่างไรว่าฟิลด์ใดแก้ไขได้

สำหรับการตั้งค่าอัปโหลด ให้ใช้ `--get` เพื่อตรวจสอบโครงสร้างช่องทางย่อยที่มีอยู่ สำหรับการตั้งค่าความปลอดภัย การตั้งค่าหน้า และการตั้งค่าอื่น ๆ ให้ใช้ `--list-sections` เพื่อดูพื้นที่ ส่วน และฟิลด์ที่สคริปต์แก้ไขได้

### ต้องการใช้ผลลัพธ์ในโปรแกรมอื่น

ใช้ `--output json` หรือเพิ่ม `--save-response result.json` โปรแกรมของคุณสามารถอ่านไฟล์ JSON ที่บันทึกไว้ได้โดยตรง
