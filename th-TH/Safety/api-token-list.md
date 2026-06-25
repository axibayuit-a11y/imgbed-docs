# การแสดงรายการและการกรองผ่าน API Token

สคริปต์แสดงรายการผ่าน API Token มีประโยชน์เมื่อสคริปต์ งานอัตโนมัติ หรือโปรแกรมของบุคคลที่สามต้องอ่านข้อมูล ImgBed สคริปต์เหล่านี้ใช้เฉพาะสิทธิ์ `list` เท่านั้น ไม่อัปโหลดไฟล์ ไม่ลบไฟล์ ไม่เปลี่ยนการตั้งค่า และไม่บล็อกหรืออนุญาตที่อยู่ IP ใด ๆ

![แก้ไข API Token](../../image/Safety/apitoken/编辑列出权限api.png)

การใช้งานหลัก:

| ฟีเจอร์ | คำอธิบาย |
| --- | --- |
| รายการตัวจัดการไฟล์ | อ่านรายการไฟล์ของผู้ดูแลระบบและใช้ตัวกรองขั้นสูงแบบเดียวกับที่มีในส่วนจัดการไฟล์ |
| รายการจัดการผู้ใช้ | อ่านสถิติการอัปโหลดของผู้ใช้/IP และใช้ตัวกรองในส่วนจัดการผู้ใช้ |
| รายการช่องทางอัปโหลด | อ่านช่องทางอัปโหลดที่ผ่านการกรองข้อมูลลับแล้ว ช่องทางย่อย ข้อมูลความจุ และสถานะการกระจายโหลด |
| สถิติไดเรกทอรี | อ่านสถิติไดเรกทอรีและข้อมูลไดเรกทอรีแบบแบ่งหน้า |

## ก่อนเริ่ม

เปิดแผงผู้ดูแลระบบ แล้วไปที่:

```text
System Settings -> Security Settings -> API Token
```

เมื่อสร้างหรือแก้ไข API Token ให้ตรวจสอบว่า token อนุญาตให้แสดงรายการได้ สคริปต์นี้ต้องใช้สิทธิ์ `list` เท่านั้น

คุณสามารถใส่ token ไว้ในตัวแปรสภาพแวดล้อมได้ด้วย:

```powershell
$env:IMGBED_API_TOKEN="your API Token"
```

## ดาวน์โหลดสคริปต์

| สคริปต์ | วัตถุประสงค์ |
| --- | --- |
| <a href="/tools/imgbed-token-list.mjs" download>ดาวน์โหลดสคริปต์แสดงรายการและกรอง</a> | รายการตัวจัดการไฟล์, รายการจัดการผู้ใช้, รายการช่องทางอัปโหลด และสถิติไดเรกทอรี |

ต้องใช้ Node.js 18 หรือใหม่กว่า

## พารามิเตอร์ทั่วไป

| พารามิเตอร์ | จำเป็น | คำอธิบาย |
| --- | --- | --- |
| `--base-url <url>` | ใช่ | URL ของไซต์ ImgBed เช่น `https://image.ai6.me` |
| `--token <token>` | ใช่ | API Token สามารถใช้ตัวแปรสภาพแวดล้อม `IMGBED_API_TOKEN` ได้ด้วย |
| `--retries <n>` | ไม่ | จำนวนครั้งที่ลองใหม่เมื่อเกิดความล้มเหลวชั่วคราว ค่าเริ่มต้นคือ `3` |
| `--timeout-ms <n>` | ไม่ | เวลาหมดอายุของแต่ละคำขอ ค่าเริ่มต้นคือ `180000` |
| `--output <pretty\|json>` | ไม่ | รูปแบบผลลัพธ์ ค่าเริ่มต้นคือ `pretty`; ใช้ `json` สำหรับโปรแกรม |
| `--save-response <path>` | ไม่ | บันทึกผลลัพธ์สุดท้ายเป็นไฟล์ JSON |
| `-h` / `--help` | ไม่ | แสดงวิธีใช้สคริปต์ |

## รายการตัวจัดการไฟล์

แสดงรายการไฟล์ในส่วนจัดการไฟล์:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --count 10
```

ส่งออก JSON:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --count 10 `
  --output json
```

อ่านเฉพาะจำนวนภายใต้ตัวกรองปัจจุบัน:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --file-summary `
  --dir "photos/2026" `
  --recursive
```

### พารามิเตอร์ตัวจัดการไฟล์

| พารามิเตอร์ | คำอธิบาย |
| --- | --- |
| `--files` | แสดงรายการไฟล์ |
| `--file-summary` | อ่านเฉพาะสถิติจำนวน |
| `--start <n>` | ตำแหน่งเริ่มต้นของการแบ่งหน้า |
| `--count <n>` | จำนวนระเบียนที่จะส่งคืน |
| `--dir <path>` | ไดเรกทอรีเป้าหมาย |
| `--recursive` | รวมไฟล์ในไดเรกทอรีย่อย |
| `--search <text>` | คำค้นหา |
| `--channel <key>` | กรองตามช่องทางอัปโหลด เช่น `github`, `s3` หรือ `yandex` |
| `--channel-scope <primary\|backup\|all>` | ขอบเขตตัวกรองช่องทาง: ช่องทางหลัก ช่องทางสำรอง หรือทั้งหมด |
| `--channel-name-groups <value>` | ตัวกรองกลุ่มช่องทางย่อย ส่งต่อไปยังฝั่งเซิร์ฟเวอร์ |
| `--list-type <csv>` | ประเภทรายการ โดยทั่วไปใช้ `None,White,Block` |
| `--include-tags <csv>` | ต้องมีแท็กเหล่านี้ |
| `--exclude-tags <csv>` | ไม่รวมแท็กเหล่านี้ |
| `--time-start <ms>` | เวลาเริ่มอัปโหลด เป็นเวลาประทับแบบมิลลิวินาที |
| `--time-end <ms>` | เวลาสิ้นสุดอัปโหลด เป็นเวลาประทับแบบมิลลิวินาที |
| `--file-exts <csv>` | รวมเฉพาะนามสกุลที่ระบุ เช่น `jpg,png,pdf` |
| `--exclude-file-exts <csv>` | ยกเว้นนามสกุลที่ระบุ |
| `--file-status-categories <csv>` | หมวดหมู่ไฟล์: `image,audio,video,document,code,other` |
| `--upload-ip <ip>` | กรองตามคำนำหน้า IP อัปโหลด |
| `--age-ratings <csv>` | เรตอายุ: `none,all-ages,r12,r16,r18` |
| `--orientation <csv>` | ตัวกรองแนวภาพ ส่งต่อไปยังฝั่งเซิร์ฟเวอร์ |
| `--read-source <csv>` | ตัวกรองแหล่งอ่าน ส่งต่อไปยังฝั่งเซิร์ฟเวอร์ |
| `--access-status <normal\|blocked>` | สถานะการเข้าถึงสาธารณะ |
| `--min-width <n>` | ความกว้างต่ำสุด |
| `--max-width <n>` | ความกว้างสูงสุด |
| `--min-height <n>` | ความสูงต่ำสุด |
| `--max-height <n>` | ความสูงสูงสุด |
| `--min-file-size <mb>` | ขนาดไฟล์ต่ำสุด ใช้พารามิเตอร์ MB เดิมของฝั่งเซิร์ฟเวอร์ |
| `--max-file-size <mb>` | ขนาดไฟล์สูงสุด ใช้พารามิเตอร์ MB เดิมของฝั่งเซิร์ฟเวอร์ |

### ตัวอย่างตัวจัดการไฟล์

ค้นหา PDF:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --search "pdf" `
  --file-status-categories "document" `
  --count 20
```

กรองตาม IP อัปโหลดและช่องทาง:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --upload-ip "103.62" `
  --channel yandex `
  --channel-scope primary
```

บันทึกผลลัพธ์ทั้งหมด:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --count 100 `
  --output json `
  --save-response ".\files.json"
```

## รายการจัดการผู้ใช้

แสดงสถิติการอัปโหลดของผู้ใช้/IP:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --count 20
```

ค้นหา IP หรือที่อยู่:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --search "43.198.183.56"
```

ดูไฟล์ที่อัปโหลดโดย IP หนึ่งรายการ:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --user-detail `
  --ip "43.198.183.56" `
  --count 20
```

แสดง IP ที่ถูกบล็อกไม่ให้อัปโหลด:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --blocked-ips
```

### พารามิเตอร์จัดการผู้ใช้

| พารามิเตอร์ | คำอธิบาย |
| --- | --- |
| `--users` | แสดงสถิติการอัปโหลดของผู้ใช้/IP |
| `--user-detail` | ดูไฟล์ที่อัปโหลดโดย IP ที่ระบุ |
| `--blocked-ips` | แสดง IP ที่ถูกบล็อกไม่ให้อัปโหลด |
| `--ip <ip>` | จำเป็นเมื่อใช้กับ `--user-detail` |
| `--start <n>` | ตำแหน่งเริ่มต้นของการแบ่งหน้า |
| `--count <n>` | จำนวนระเบียนที่จะส่งคืน |
| `--sort <value>` | ลำดับการเรียง: `timeDesc`, `timeAsc`, `countDesc`, `countAsc`, `totalSizeDesc`, `totalSizeAsc` |
| `--search <text>` | ค้นหา IP หรือที่อยู่ |
| `--upload-status <allowed\|blocked>` | ระบุว่าอนุญาตให้อัปโหลดหรือไม่ |
| `--start-time <ms>` | เวลาเริ่มต้นของสถิติ เป็นเวลาประทับแบบมิลลิวินาที |
| `--end-time <ms>` | เวลาสิ้นสุดของสถิติ เป็นเวลาประทับแบบมิลลิวินาที |
| `--file-status-categories <csv>` | ตัวกรองหมวดหมู่ไฟล์ |
| `--age-ratings <csv>` | ตัวกรองเรตอายุ |
| `--min-file-size <mb>` | ขนาดไฟล์ต่ำสุด |
| `--max-file-size <mb>` | ขนาดไฟล์สูงสุด |
| `--list-type <csv>` | ประเภทรายการ โดยทั่วไปใช้ `None,White,Block` |
| `--access-status <normal\|blocked>` | สถานะการเข้าถึงสาธารณะ |

### ตัวอย่างจัดการผู้ใช้

แสดงผู้ใช้ที่ถูกบล็อกไม่ให้อัปโหลด:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --upload-status blocked
```

ค้นหาด้วยคำสำคัญของที่อยู่:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --search "Hong Kong"
```

เรียงตามจำนวนการอัปโหลด:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --sort countDesc `
  --count 50
```

## รายการช่องทางอัปโหลด

แสดงการตั้งค่าช่องทางอัปโหลดที่ผ่านการกรองข้อมูลลับแล้ว:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --channels
```

ข้อมูลที่ส่งคืนประกอบด้วย:

| ฟิลด์ | คำอธิบาย |
| --- | --- |
| `type` | ประเภทช่องทางอัปโหลด เช่น `github`, `s3` หรือ `yandex` |
| `name` | ชื่อช่องทางย่อยหรือบัญชี |
| `enabled` | ระบุว่าเปิดใช้อยู่หรือไม่ |
| `load_balance_enabled` | ระบุว่ามีการกระจายโหลดสำหรับประเภทช่องทางนี้หรือไม่ |
| `quota_enabled` | ระบุว่าเปิดใช้การตรวจสอบความจุหรือไม่ |
| `quota_limit_bytes` | ขีดจำกัดความจุ |
| `quota_used_bytes` | ความจุที่ใช้แล้ว |
| `quota_checked_at` | เวลาตรวจสอบความจุ |
| `tag_json` | แท็กที่ไม่ใช่ความลับ เช่น คลังสาธารณะหรือคลังส่วนตัว |
| `created_at` / `updated_at` | เวลาสร้างและเวลาอัปเดต |

API นี้ไม่ส่งคืนความลับ token สำหรับรีเฟรช token สำหรับเข้าถึง รหัสผ่าน หรือการตั้งค่าที่ละเอียดอ่อนอื่น ๆ

## สถิติไดเรกทอรี

แสดงสถิติไดเรกทอรี:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --directories `
  --limit 20
```

แสดงเส้นทางไดเรกทอรีแบบเต็มและค้นหาด้วยคำนำหน้า:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --directories `
  --scope full `
  --search-prefix "test" `
  --include-parents `
  --limit 10
```

### พารามิเตอร์สถิติไดเรกทอรี

| พารามิเตอร์ | คำอธิบาย |
| --- | --- |
| `--directories` | แสดงสถิติไดเรกทอรี |
| `--dir <path>` | ไดเรกทอรีที่จะเริ่มต้น |
| `--scope <direct\|full>` | `direct` แสดงเฉพาะไดเรกทอรีย่อยโดยตรง; `full` แสดงเส้นทางเต็ม |
| `--search-prefix <path>` | ค้นหาตามคำนำหน้าไดเรกทอรี |
| `--include-parents` | ในโหมด `full` ให้รวมไดเรกทอรีแม่ด้วย |
| `--limit <n>` | จำนวนระเบียนที่จะส่งคืน ค่าสูงสุดของฝั่งเซิร์ฟเวอร์คือ `100` |
| `--cursor <path>` | cursor สำหรับหน้าถัดไป |

## รูปแบบผลลัพธ์

ผลลัพธ์ `pretty` เริ่มต้นเหมาะสำหรับให้คนอ่าน:

```powershell
node imgbed-token-list.mjs --base-url "https://your-domain" --token "your API Token" --users --count 5
```

หากโปรแกรมอื่นต้องประมวลผลผลลัพธ์ ให้ใช้ `--output json`:

```powershell
node imgbed-token-list.mjs --base-url "https://your-domain" --token "your API Token" --users --count 5 --output json
```

คุณยังสามารถบันทึกผลลัพธ์ทั้งหมดได้:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --count 5 `
  --output json `
  --save-response ".\users.json"
```

## FAQ

### สคริปต์นี้แก้ไขข้อมูลหรือไม่

ไม่ สคริปต์นี้เรียกเฉพาะ API สำหรับอ่านเท่านั้น ไม่อัปโหลด ลบ ย้าย แก้ไขการตั้งค่า หรือบล็อก/อนุญาตที่อยู่ IP ใด ๆ

### ทำไมต้องใช้สิทธิ์ `list`

รายการตัวจัดการไฟล์ รายการจัดการผู้ใช้ รายการช่องทางที่ผ่านการกรองข้อมูลลับแล้ว และสถิติไดเรกทอรีล้วนเป็นความสามารถด้านการอ่าน ดังนั้น API Token ต้องมีสิทธิ์ `list` เท่านั้น

### ตรวจสอบพารามิเตอร์ที่ใช้ได้ทั้งหมดอย่างไร

เรียกใช้:

```powershell
node imgbed-token-list.mjs --help
```

สคริปต์จะแสดงการดำเนินการและพารามิเตอร์ทั้งหมด
