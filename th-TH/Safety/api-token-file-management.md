# การจัดการไฟล์ผ่าน API Token

การจัดการไฟล์ผ่าน API Token เหมาะสำหรับสคริปต์ งานอัตโนมัติ และแผงจัดการของบุคคลที่สาม โดยใช้สิทธิ์ `manage` เพื่อแก้ไขข้อมูลไฟล์ ย้ายไฟล์ เปลี่ยนชื่อไฟล์ สร้างไฟล์ placeholder สำหรับไดเรกทอรี ปรับแท็กไฟล์และสถานะรายการ รวมถึงปิดกั้นหรือเปิดใช้งาน IP สำหรับอัปโหลด และสร้างหรือลบ Token อัปโหลดระยะสั้นได้โดยไม่ต้องเปิดหน้าผู้ดูแลระบบ

สคริปต์นี้จัดการเฉพาะงานจัดการเบา ๆ ในส่วนจัดการไฟล์และจัดการผู้ใช้เท่านั้น การอัปโหลด การแสดงรายการ การลบ การตั้งค่าอัปโหลด การตั้งค่าไซต์ และความสัมพันธ์สหพันธ์ยังคงใช้สคริปต์เฉพาะของแต่ละส่วน

![แก้ไข API Token](../../image/Safety/apitoken/编辑管理权限api.png)

## การเตรียมตัว

หลังจากเข้าสู่แผงผู้ดูแลระบบ ให้เปิด:

System Settings → Security Settings → API Token

เมื่อสร้างหรือแก้ไข API Token ให้ตรวจสอบว่า Token นี้ได้รับสิทธิ์จัดการ สิทธิ์ `manage` สามารถเปลี่ยนสถานะไฟล์ สถานะการอัปโหลดของผู้ใช้ และสร้าง Token อัปโหลดระยะสั้นได้ จึงควรมอบให้เฉพาะสคริปต์หรือผู้ใช้ที่เชื่อถือได้เท่านั้น

การเขียนข้อมูลในสคริปต์จัดการไฟล์จะอยู่ในโหมดแสดงตัวอย่างตามค่าเริ่มต้น และจะยังไม่บันทึกจริง หลังจากตรวจสอบตัวอย่างแล้วว่าถูกต้อง ให้เพิ่ม `--apply` เพื่อให้เขียนข้อมูลจริง

สามารถใส่ Token ไว้ในตัวแปรสภาพแวดล้อมได้:

```powershell
$env:IMGBED_API_TOKEN="your API Token"
```

## ดาวน์โหลดสคริปต์

| สคริปต์ | การใช้งาน |
| --- | --- |
| <a href="/tools/imgbed-token-manage.mjs" download>ดาวน์โหลดสคริปต์จัดการไฟล์</a> | metadata ของไฟล์, moderation labels, แท็กไฟล์, สถานะรายการ, การย้าย, การเปลี่ยนชื่อ, การสร้างโฟลเดอร์, การปิดกั้น/เปิดใช้งาน IP, การสร้างและลบ Token อัปโหลดระยะสั้น |

ต้องติดตั้ง Node.js 18 หรือใหม่กว่าบนเครื่องก่อนจึงจะเรียกใช้สคริปต์ได้

## ขอบเขตความสามารถ

| ความสามารถ | สคริปต์ | สิทธิ์ |
| --- | --- | --- |
| อัปโหลดไฟล์ | `imgbed-token-single-upload.mjs` / `imgbed-token-chunk-upload.mjs` | `upload` |
| แสดงรายการไฟล์ กรองไฟล์ และอ่านสถิติผู้ใช้ | `imgbed-token-list.mjs` | `list` |
| ลบไฟล์ที่ระบุชัดเจน | `imgbed-token-delete.mjs` | `delete` |
| แก้ไขข้อมูลไฟล์ แท็ก รายการ ย้าย เปลี่ยนชื่อ สร้างโฟลเดอร์ ปิดกั้น IP สร้างหรือลบ Token อัปโหลดระยะสั้น | `imgbed-token-manage.mjs` | `manage` |
| แก้ไขช่องทางอัปโหลด การตั้งค่าความปลอดภัย การตั้งค่าหน้า การตั้งค่าอื่น ๆ และความสัมพันธ์สหพันธ์ | สคริปต์ที่เกี่ยวข้องกับการจัดการการกำหนดค่า | `manage` |

`imgbed-token-manage.mjs` ไม่อัปโหลดไฟล์ ไม่แสดงรายการไฟล์ และไม่ลบไฟล์ หากต้องการหา `fileId` ให้ใช้สคริปต์แสดงรายการเพื่อกรองไฟล์ก่อน หากต้องการลบไฟล์ ให้นำ `fileId` ที่ระบุชัดเจนไปใช้กับสคริปต์ลบไฟล์

## พารามิเตอร์ทั่วไป

| พารามิเตอร์ | จำเป็น | คำอธิบาย |
| --- | --- | --- |
| `--base-url <url>` | ใช่ | URL ของไซต์ ImgBed เช่น `https://image.ai6.me` |
| `--token <token>` | ใช่ | API Token สามารถใช้ตัวแปรสภาพแวดล้อม `IMGBED_API_TOKEN` ได้ด้วย |
| `--retries <n>` | ไม่ | จำนวนครั้งที่ลองใหม่เมื่อเกิดความล้มเหลวชั่วคราว ค่าเริ่มต้นคือ `3` |
| `--timeout-ms <n>` | ไม่ | เวลาหมดอายุของคำขอหนึ่งครั้ง ค่าเริ่มต้นคือ `180000` |
| `--output <pretty\|json>` | ไม่ | รูปแบบผลลัพธ์ ค่าเริ่มต้นคือ `pretty`; หากเรียกจากโปรแกรมแนะนำให้ใช้ `json` |
| `--save-response <path>` | ไม่ | บันทึกผลลัพธ์สุดท้ายเป็นไฟล์ JSON |
| `--batch-size <n>` | ไม่ | จำนวนรายการที่แต่ละคำขอประมวลผลในงานแบบชุด ค่าเริ่มต้นคือ `15` และสูงสุด `15` |
| `--apply` | ไม่ | เขียนข้อมูลจริง หากไม่ใส่จะเป็นการแสดงตัวอย่างเท่านั้น |
| `-h` / `--help` | ไม่ | แสดงวิธีใช้สคริปต์ |

## ตรวจสอบ fileId ก่อน

การทำงานส่วนใหญ่ของสคริปต์จัดการไฟล์ต้องใช้ `fileId` สามารถใช้สคริปต์แสดงรายการค้นหาก่อนได้:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --dir "test4" `
  --count 10 `
  --output json
```

ค่า `name` ในผลลัพธ์ที่ได้มักเป็น `fileId` ที่ส่งให้สคริปต์จัดการไฟล์ได้

## metadata ของไฟล์

metadata ของไฟล์ใช้เปลี่ยนชื่อไฟล์ที่แสดงในส่วนจัดการไฟล์ของผู้ดูแลระบบ และเปลี่ยน read source

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-metadata `
  --file-id "photos/2026/a.jpg" `
  --file-name "cover.jpg" `
  --read-source backup
```

หลังจากตรวจสอบตัวอย่างแล้ว ให้บันทึก:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-metadata `
  --file-id "photos/2026/a.jpg" `
  --file-name "cover.jpg" `
  --read-source backup `
  --apply
```

### พารามิเตอร์ metadata ของไฟล์

| พารามิเตอร์ | คำอธิบาย |
| --- | --- |
| `--set-metadata` | แก้ไข metadata ของไฟล์เดียว |
| `--file-id <id>` | ID ของไฟล์ที่จะปรับ |
| `--file-name <name>` | ชื่อใหม่ที่แสดงในแผงผู้ดูแลระบบ |
| `--read-source <primary\|backup>` | แหล่งอ่านไฟล์ โดย `primary` คือแหล่งหลัก และ `backup` คือแหล่งสำรอง |

ต้องส่งอย่างน้อยหนึ่งค่าใน `--file-name` หรือ `--read-source`

## moderation labels

moderation labels สอดคล้องกับการจัดระดับอายุของไฟล์ สามารถอ่าน label ปัจจุบันก่อน แล้วค่อยแก้ไข

อ่าน moderation label:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-label `
  --file-id "photos/2026/a.jpg"
```

ตั้งค่า moderation label:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-label `
  --file-id "photos/2026/a.jpg" `
  --label r12 `
  --apply
```

### พารามิเตอร์ moderation label

| พารามิเตอร์ | คำอธิบาย |
| --- | --- |
| `--get-label` | อ่าน moderation label ของไฟล์เดียว |
| `--set-label` | แก้ไข moderation label ของไฟล์เดียว |
| `--file-id <id>` | ID ของไฟล์ |
| `--label <value>` | ค่า label: `all-ages`, `r12`, `r16`, `r18`, `None` |

## แท็กไฟล์

แท็กไฟล์ใช้เพิ่มแท็กเชิงงานที่ค้นหาได้ให้กับไฟล์ สคริปต์รองรับการอ่าน การแทนที่ การเพิ่ม และการลบ รวมถึงประมวลผลหลายไฟล์แบบชุดได้

อ่านแท็กไฟล์:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-tags `
  --file-id "photos/2026/a.jpg"
```

เพิ่มแท็ก:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --add-tags `
  --file-id "photos/2026/a.jpg" `
  --tag "cover" `
  --tag "2026" `
  --apply
```

ลบแท็ก:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --remove-tags `
  --file-id "photos/2026/a.jpg" `
  --tag "cover" `
  --apply
```

แทนที่แท็ก:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-tags `
  --file-id "photos/2026/a.jpg" `
  --tag "archive" `
  --tag "public" `
  --apply
```

เพิ่มแท็กแบบชุด:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --batch-tags `
  --file-id "photos/2026/a.jpg" `
  --file-id "photos/2026/b.jpg" `
  --tag-action add `
  --tag "batch-test" `
  --apply
```

### พารามิเตอร์แท็กไฟล์

| พารามิเตอร์ | คำอธิบาย |
| --- | --- |
| `--get-tags` | อ่านแท็กของไฟล์เดียว |
| `--set-tags` | แทนที่แท็กของไฟล์เดียว |
| `--add-tags` | เพิ่มแท็กให้ไฟล์เดียว |
| `--remove-tags` | ลบแท็กออกจากไฟล์เดียว |
| `--batch-tags` | ตั้งค่า เพิ่ม หรือลบแท็กแบบชุด |
| `--file-id <id>` | ID ของไฟล์ สำหรับงานแบบชุดสามารถส่งซ้ำหลายครั้งได้ |
| `--tag <tag>` | ค่าแท็ก สามารถส่งซ้ำหลายครั้งได้ |
| `--tags-json <path>` | อ่าน array ของแท็กจากไฟล์ JSON |
| `--tag-action <set\|add\|remove>` | การดำเนินการแท็กแบบชุด |

ตัวอย่างเนื้อหาไฟล์ `--tags-json`:

```json
["cover", "2026", "public"]
```

## สถานะบัญชีดำและบัญชีขาว

สถานะรายการกำหนดพฤติกรรมควบคุมการเข้าถึงของไฟล์ในโหมดเข้าถึงสาธารณะ สามารถแก้ไขทีละไฟล์หรือแบบชุดได้

ตั้งไฟล์เดียวเป็นบัญชีขาว:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-list-type `
  --file-id "photos/2026/a.jpg" `
  --list-type White `
  --apply
```

เพิ่มเข้าบัญชีดำแบบชุด:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --batch-list-type `
  --file-id "photos/2026/a.jpg" `
  --file-id "photos/2026/b.jpg" `
  --list-type Block `
  --apply
```

คืนค่าสถานะรายการเป็นค่าเริ่มต้น:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-list-type `
  --file-id "photos/2026/a.jpg" `
  --list-type None `
  --apply
```

### พารามิเตอร์บัญชีดำและบัญชีขาว

| พารามิเตอร์ | คำอธิบาย |
| --- | --- |
| `--set-list-type` | แก้ไขสถานะรายการของไฟล์เดียว |
| `--batch-list-type` | แก้ไขสถานะรายการของไฟล์แบบชุด หนึ่งคำขอประมวลผลได้สูงสุด `15` ไฟล์ |
| `--file-id <id>` | ID ของไฟล์ สำหรับงานแบบชุดสามารถส่งซ้ำหลายครั้งได้ |
| `--list-type <None\|White\|Block>` | `None` คือสถานะเริ่มต้น, `White` คือบัญชีขาว, `Block` คือบัญชีดำ |

## ย้ายไฟล์

การย้ายไฟล์จะย้ายไฟล์หนึ่งไฟล์หรือหลายไฟล์ไปยังไดเรกทอรีปลายทาง บริการเบื้องหลังประมวลผลได้สูงสุด `15` ไฟล์ต่อคำขอ และสคริปต์จะแยกงานตาม `--batch-size` แล้วส่งคำขอตามลำดับ

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --move `
  --file-id "photos/2026/a.jpg" `
  --file-id "photos/2026/b.jpg" `
  --target-path "archive/2026" `
  --apply
```

### พารามิเตอร์การย้าย

| พารามิเตอร์ | คำอธิบาย |
| --- | --- |
| `--move` | ย้ายไฟล์ |
| `--file-id <id>` | ID ของไฟล์ที่จะย้าย สามารถส่งซ้ำหลายครั้งได้ |
| `--target-path <dir>` | ไดเรกทอรีปลายทาง |
| `--batch-size <n>` | จำนวนไฟล์ที่ย้ายในแต่ละคำขอ ค่าเริ่มต้นคือ `15` และสูงสุด `15` |

## เปลี่ยนชื่อหรือเปลี่ยนเส้นทาง

การเปลี่ยนชื่อใช้ ID ไฟล์เก่าและ ID ไฟล์ใหม่อย่างชัดเจน ID ไฟล์ใหม่อาจเปลี่ยนเฉพาะชื่อไฟล์ หรือเปลี่ยนไดเรกทอรีพร้อมกันก็ได้

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --rename `
  --old-file-id "photos/2026/a.jpg" `
  --new-file-id "photos/2026/a-renamed.jpg" `
  --apply
```

เมื่อต้องการเปลี่ยนชื่อแบบชุด สามารถส่ง `--old-file-id` และ `--new-file-id` ซ้ำได้:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --rename `
  --old-file-id "photos/2026/a.jpg" `
  --new-file-id "archive/2026/a.jpg" `
  --old-file-id "photos/2026/b.jpg" `
  --new-file-id "archive/2026/b.jpg" `
  --apply
```

สามารถเขียน mapping ลงในไฟล์ JSON ได้:

```json
[
  {
    "oldFileId": "photos/2026/a.jpg",
    "newFileId": "archive/2026/a.jpg"
  },
  {
    "oldFileId": "photos/2026/b.jpg",
    "newFileId": "archive/2026/b.jpg"
  }
]
```

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --rename `
  --items-json ".\rename-items.json" `
  --apply
```

### พารามิเตอร์การเปลี่ยนชื่อ

| พารามิเตอร์ | คำอธิบาย |
| --- | --- |
| `--rename` | เปลี่ยนชื่อหรือเปลี่ยนเส้นทางตาม mapping ที่ระบุชัดเจน |
| `--old-file-id <id>` | ID ไฟล์เดิม สามารถส่งซ้ำหลายครั้งได้ |
| `--new-file-id <id>` | ID ไฟล์ใหม่ สามารถส่งซ้ำหลายครั้งได้ จำนวนต้องตรงกับ `--old-file-id` |
| `--items-json <path>` | JSON array โดยแต่ละรายการเป็น `{ "oldFileId": "...", "newFileId": "..." }` |
| `--batch-size <n>` | จำนวนรายการเปลี่ยนชื่อที่ประมวลผลต่อคำขอ ค่าเริ่มต้นคือ `15` และสูงสุด `15` |

## สร้างโฟลเดอร์

ไดเรกทอรีของ ImgBed มาจากเส้นทางไฟล์ จึงไม่มีไดเรกทอรีว่างจริง เมื่อสคริปต์สร้างโฟลเดอร์ จะสร้างไฟล์ placeholder ชื่อ `0.md` ไว้ใต้ไดเรกทอรีปลายทาง เพื่อให้โฟลเดอร์นี้แสดงในส่วนจัดการไฟล์และสถิติไดเรกทอรี

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --create-folder `
  --parent-directory "photos" `
  --folder-name "2026" `
  --apply
```

### พารามิเตอร์การสร้างโฟลเดอร์

| พารามิเตอร์ | คำอธิบาย |
| --- | --- |
| `--create-folder` | สร้างไฟล์ placeholder ของไดเรกทอรี |
| `--parent-directory <dir>` | ไดเรกทอรีแม่ หากเป็น root directory ให้ส่งสตริงว่างได้ |
| `--folder-name <name>` | ชื่อโฟลเดอร์ใหม่ |

## ปิดกั้นและเปิดใช้งาน IP อัปโหลด

สามารถใช้สิทธิ์จัดการเพิ่ม IP เข้าในรายการห้ามอัปโหลด และสามารถนำออกจากรายการนั้นได้ การดำเนินการนี้มีผลกับการอัปโหลดครั้งต่อไปจาก IP นั้น และจะไม่ลบไฟล์ที่ IP นั้นเคยอัปโหลดไว้แล้ว

ปิดกั้น IP อัปโหลด:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --block-ip "67.159.48.149" `
  --apply
```

เปิดใช้งาน IP อัปโหลดอีกครั้ง:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --allow-ip "67.159.48.149" `
  --apply
```

ดูรายการ IP ที่ถูกห้ามอัปโหลดในปัจจุบัน:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --blocked-ips
```

### พารามิเตอร์การจัดการ IP

| พารามิเตอร์ | คำอธิบาย |
| --- | --- |
| `--block-ip <ip>` | เพิ่มเข้าในรายการห้ามอัปโหลด |
| `--allow-ip <ip>` | นำออกจากรายการห้ามอัปโหลด |

## สร้างและลบ Token อัปโหลดระยะสั้น

สิทธิ์จัดการสามารถสร้าง Token สำหรับอัปโหลดระยะสั้นได้ Token นี้มีสิทธิ์ `upload` เท่านั้นเสมอ, `autoDelete` เป็น `true` เสมอ และเวลาหมดอายุสูงสุดคือ `1` วัน

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --create-upload-token `
  --name "Temporary Upload Token" `
  --owner "upload-bot" `
  --default-upload-channel telegram `
  --expires-in-minutes 20 `
  --apply `
  --output json
```

สามารถส่ง millisecond timestamp โดยตรงได้:

```powershell
$expiresAt = [DateTimeOffset]::UtcNow.AddHours(12).ToUnixTimeMilliseconds()

node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --create-upload-token `
  --name "Upload Token valid for one day" `
  --owner "upload-bot" `
  --default-upload-channel telegram `
  --expires-at $expiresAt `
  --apply
```

เมื่อลบ Token อัปโหลดระยะสั้น ต้องส่ง `id` ที่ได้จาก API สร้าง Token โดย Token จัดการจะลบได้เฉพาะ Token ที่ตรงตามเงื่อนไขต่อไปนี้:

| เงื่อนไข | ข้อกำหนด |
| --- | --- |
| สิทธิ์ | `permissions` มีเฉพาะ `upload` |
| ลบอัตโนมัติ | `autoDelete=true` |
| อายุการใช้งาน | `expiresAt - createdAt <= 24` ชั่วโมง |

ลบ Token อัปโหลดระยะสั้น:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --delete-upload-token `
  --token-id "mqt4jqokc85be80d1f0f47078e848a77d6c1aa6e" `
  --apply
```

Token จัดการไม่สามารถลบ Token ทั่วไป, Token ระยะยาว, Token ที่มีสิทธิ์ `list` / `delete` / `manage` หรือ Token อัปโหลดที่มีอายุมากกว่า `1` วันได้ Token เหล่านี้ยังต้องจัดการในแผงผู้ดูแลระบบบนเบราว์เซอร์

### พารามิเตอร์ Token อัปโหลดระยะสั้น

| พารามิเตอร์ | คำอธิบาย |
| --- | --- |
| `--create-upload-token` | สร้าง Token ระยะสั้นสำหรับอัปโหลดเท่านั้น |
| `--delete-upload-token` | ลบ Token ระยะสั้นสำหรับอัปโหลดเท่านั้นที่ตรงเงื่อนไข |
| `--name <name>` | ชื่อ Token |
| `--owner <owner>` | คำอธิบายเจ้าของ Token |
| `--default-upload-channel <key>` | ช่องทางอัปโหลดเริ่มต้น ต้องเป็นช่องทางจริง เช่น `telegram`, `s3`, `github` |
| `--expires-in-minutes <n>` | จำนวนนาทีจนหมดอายุจากเวลาปัจจุบัน สูงสุด `1440` |
| `--expires-at <ms>` | เวลาหมดอายุแบบ absolute เป็น millisecond timestamp สูงสุดคือ `24` ชั่วโมงจากเวลาปัจจุบัน |
| `--token-id <id>` | ID ของ Token อัปโหลดระยะสั้นที่จะลบ |

Token อัปโหลดระยะสั้นอนุญาตให้อัปโหลดเท่านั้น จากการทดสอบ Token ระยะสั้นที่มี `permissions=["upload"]` จะถูกปฏิเสธเมื่อเข้าถึง API สำหรับรายการไฟล์ การจัดการไฟล์ และการลบ

หลังหมดอายุ Token ที่มี `autoDelete=true` จะถูกล้างเมื่อบริการเบื้องหลังตรวจพบว่าหมดอายุแล้ว การอ่านรายการ API Token ก็จะล้าง Token ที่หมดอายุและมี `autoDelete=true` เช่นกัน

## ตารางเทียบ API

| การดำเนินการ | Method | API |
| --- | --- | --- |
| แก้ไข metadata ของไฟล์ | `PATCH` | `/api/manage/metadata/{fileId}` |
| อ่าน moderation label | `GET` | `/api/manage/label/{fileId}` |
| แก้ไข moderation label | `POST` | `/api/manage/label/{fileId}` |
| อ่านแท็กไฟล์ | `GET` | `/api/manage/tags/{fileId}` |
| แก้ไขแท็กไฟล์ | `POST` | `/api/manage/tags/{fileId}` |
| แก้ไขแท็กไฟล์แบบชุด | `POST` | `/api/manage/tags/batch` |
| แก้ไขสถานะรายการ | `POST` | `/api/manage/listType/{fileId}` |
| แก้ไขสถานะรายการแบบชุด | `POST` | `/api/manage/listType/batch` |
| ย้ายหรือเปลี่ยนชื่อ | `POST` | `/api/manage/relocate/batch` |
| สร้างโฟลเดอร์ | `POST` | `/api/manage/folder/create` |
| ปิดกั้น IP อัปโหลด | `POST` | `/api/manage/cusConfig/blockip` |
| เปิดใช้งาน IP อัปโหลดอีกครั้ง | `POST` | `/api/manage/cusConfig/whiteip` |
| สร้าง Token อัปโหลดระยะสั้น | `POST` | `/api/manage/apiTokens` |
| ลบ Token อัปโหลดระยะสั้น | `DELETE` | `/api/manage/apiTokens?id={tokenId}` |

สคริปต์จะใส่ข้อมูลนี้ให้อัตโนมัติ:

```text
Authorization: Bearer your API Token
```

## รูปแบบผลลัพธ์

ผลลัพธ์เริ่มต้นแบบ `pretty` เหมาะสำหรับอ่านด้วยคน หากต้องให้โปรแกรมอื่นประมวลผลต่อ ให้ใช้ `--output json`:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-tags `
  --file-id "photos/2026/a.jpg" `
  --output json
```

สามารถบันทึกผลลัพธ์ทั้งหมดได้:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-tags `
  --file-id "photos/2026/a.jpg" `
  --output json `
  --save-response ".\manage-result.json"
```

การย้ายแบบชุด การเปลี่ยนชื่อแบบชุด และการจัดการสถานะรายการแบบชุดจะวิเคราะห์ NDJSON progress stream ที่บริการเบื้องหลังส่งกลับมา แล้วสรุปจำนวนเหตุการณ์ สถานะการเสร็จสิ้น และรายละเอียดความล้มเหลว

## คำถามที่พบบ่อย

### ทำไมคำสั่งทำงานแล้วแต่ไม่มีการเปลี่ยนแปลง?

การเขียนข้อมูลอยู่ในโหมดแสดงตัวอย่างตามค่าเริ่มต้น หลังจากตรวจสอบตัวอย่างว่าถูกต้องแล้ว ให้เพิ่ม `--apply` เพื่อบันทึกการเปลี่ยนแปลงจริง

### สคริปต์นี้อัปโหลด แสดงรายการ หรือลบไฟล์ได้ไหม?

ไม่ได้ การอัปโหลดให้ใช้สคริปต์อัปโหลด การแสดงรายการและการกรองให้ใช้สคริปต์รายการ และการลบไฟล์ที่ระบุชัดเจนให้ใช้สคริปต์ลบไฟล์ สคริปต์จัดการไฟล์ทำเฉพาะงานจัดการเบา ๆ ภายใต้สิทธิ์ `manage`

### จะรู้ได้อย่างไรว่าต้องส่ง fileId ใด?

ใช้ `imgbed-token-list.mjs --files` เพื่อค้นหาไฟล์ก่อน ค่า `name` ในผลลัพธ์มักเป็น ID ของไฟล์ ซึ่งเป็นค่าที่ส่งให้ `--file-id`

### งานแบบชุดหนึ่งครั้งรองรับไฟล์สูงสุดกี่ไฟล์?

บริการเบื้องหลังรองรับสูงสุด `15` ไฟล์ต่อคำขอ ค่าเริ่มต้นของสคริปต์คือ `--batch-size 15`; หากส่งค่าที่น้อยกว่า สคริปต์จะแบ่งงานเป็นหลายคำขอตามจำนวนนั้นและทำตามลำดับ

### สร้างโฟลเดอร์ว่างจริงได้ไหม?

ไดเรกทอรีของ ImgBed ถูกอนุมานจากเส้นทางไฟล์ จึงไม่มีไดเรกทอรีว่างจริง `--create-folder` จะสร้างไฟล์ placeholder ชื่อ `0.md` เพื่อให้โฟลเดอร์นั้นแสดงในส่วนจัดการไฟล์และสถิติไดเรกทอรี

### Token อัปโหลดระยะสั้นอยู่ได้นานที่สุดเท่าไร?

สูงสุด `1` วัน หรือ `1440` นาที หากเกินค่านี้ สคริปต์จะปฏิเสธในเครื่อง และบริการเบื้องหลังจะส่ง `API_TOKEN_MANAGE_CREATE_EXPIRES_AT_TOO_LONG` กลับมา

### Token อัปโหลดระยะสั้นจะถูกลบอัตโนมัติหลังหมดอายุไหม?

จะถูกล้างอัตโนมัติ แต่ไม่ใช่งานตามเวลาที่ลบทันที Token ที่หมดอายุจะถูกล้างเมื่อถูกตรวจสอบอีกครั้ง การอ่านรายการ API Token ก็จะล้าง Token ที่หมดอายุและมี `autoDelete=true` เช่นกัน
