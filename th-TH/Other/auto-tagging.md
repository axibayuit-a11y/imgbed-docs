# Auto Tagging

Auto tagging ตั้งค่าได้ที่:

```text
System Settings -> Other Settings -> Auto Tagging
```

ระบบจะสร้าง image tags อัตโนมัติ ซึ่งมีประโยชน์กับ search, random image filtering, public gallery filtering และ age-rating access control

## Auto Tagging ทำอะไรได้บ้าง

| Feature | Description |
| --- | --- |
| Generate content tags | เพิ่ม tags สำหรับคน, ฉาก, objects, art style และ visual content ที่คล้ายกัน |
| Generate character tags | เหมาะกับ anime images และ illustrations |
| Add orientation tags | เพิ่ม `landscape`, `portrait` หรือ `square` |
| Add image rating | Save ผล `G/S/Q/E` สำหรับ general, sensitive, questionable หรือ explicit content |
| Auto-tag on upload | Images ที่เพิ่ง upload จะเข้า tagging flow อัตโนมัติ |
| Batch tagging | เพิ่ม tags ให้ old images ในทุก folders หรือ selected folders |

## สิ่งที่ต้องเตรียมก่อน

เตรียม Hugging Face Space URL ที่เข้าถึงได้อย่างน้อยหนึ่งรายการ

วิธีที่แนะนำคือ duplicate Space `wd-tagger` ของ SmilingWolf ไปไว้ใน Hugging Face account ของคุณเอง:

```text
https://huggingface.co/spaces/SmilingWolf/wd-tagger
```

ใช้ public Space ชั่วคราวได้ แต่ public Spaces ถูก share โดยผู้ใช้จำนวนมาก อาจมี queue, ช้า หรือ unavailable ได้ Space ที่ duplicate ไว้ใน account ของคุณเองจะเสถียรกว่าสำหรับ auto tagging ระยะยาว

## Duplicate Space ของ SmilingWolf

1. Sign in เข้า Hugging Face
2. เปิด `https://huggingface.co/spaces/SmilingWolf/wd-tagger`

![SmilingWolf public Space](../../image/other/微笑狼的公开仓库.png)

3. คลิกเมนูสามจุดที่มุมขวาบน
4. เลือก `Duplicate this Space`
5. ใช้ Space name เดิมหรือกำหนดเอง เช่น `wd-tagger`
6. ตั้ง visibility เป็น `Public` เพื่อให้ ImgBed call ได้ง่าย
7. เริ่มจาก free hardware ค่าเริ่มต้นก่อน ค่อย upgrade เมื่อ queueing ชัดเจน
8. Create Space แล้วรอ build เสร็จ

หลัง build เสร็จ เปิด Space page ของคุณ URL มักมีรูปแบบ:

```text
https://huggingface.co/spaces/your-name/wd-tagger
```

Copy browser URL แล้ว paste ใน `Space URLs` ของ ImgBed

## ใส่ Multiple Space URLs

ใส่หนึ่ง Space URL ต่อหนึ่ง line

Examples:

| Value | Description |
| --- | --- |
| `https://huggingface.co/spaces/SmilingWolf/wd-tagger` | SmilingWolf public Space เหมาะกับ temporary testing |
| `https://huggingface.co/spaces/lintonxue00/wd-tagger` | Copied Space page URL |
| `https://huggingface.co/spaces/your-name/wd-tagger` | Space ที่คุณ duplicate เอง |

ใส่ได้หลาย URLs ImgBed จะใช้หลาย Spaces ร่วมกัน ซึ่งช่วยเพิ่ม speed ได้

ถ้า Space หนึ่ง temporarily unavailable อีก Space ยัง process ต่อได้

## Settings

| Option | Recommendation |
| --- | --- |
| `Space URLs` | ใส่ Space URLs ที่เตรียมไว้ อย่างน้อยหนึ่งรายการ |
| Target folder | เว้นว่างเพื่อใช้กับทุก folders เลือก folder เฉพาะเมื่อต้องการ process directory บางชุด |
| Recognition model | ใช้ `wd-swinv2-tagger-v3` เป็นค่าเริ่มต้น |
| General tag threshold | ค่า default เหมาะกับ images ส่วนใหญ่ ค่าต่ำให้ tags มากขึ้น ค่าสูงให้ tags น้อยลง |
| Character tag threshold | ค่า default ค่อนข้าง conservative และช่วยลด character tags ที่ผิด |
| `MCut` automatic threshold | เริ่มต้นให้ off เปิดเมื่ออยากให้ model ตัดสินจำนวน tags เอง |
| Auto-tag on upload | เปิดถ้าต้องการให้ newly uploaded images ได้ tags อัตโนมัติ |
| Start tagging | Batch-tag old images แบบ manual |

## Recommended Starting Values

| Option | Recommended Value |
| --- | --- |
| Recognition model | `wd-swinv2-tagger-v3` |
| General tag threshold | `0.35` |
| Character tag threshold | `0.85` |
| `MCut` | เริ่มต้น Off |
| Auto-tag on upload | Enable หากต้องการ |

ถ้า tags มากเกินไป ให้เพิ่ม general threshold เล็กน้อย

ถ้า tags น้อยเกินไป ให้ลด general threshold เล็กน้อย

## Batch Tagging

1. กรอก `Space URLs`
2. เลือก target folder
3. คลิก start tagging
4. รอ progress จนเสร็จ

ถ้า target folder ว่าง ImgBed จะ process ทุก folders

Batch tagging เหมาะกับ old images สำหรับ new images ให้ enable auto-tag on upload เพื่อไม่ต้อง run เองทุกครั้ง

## Auto-Tag on Upload

หลัง enable auto-tag on upload Images ที่ upload ใหม่จะ call `Space URLs` ที่ configure ไว้อัตโนมัติ

เหมาะกับการใช้งานระยะยาว

ถ้า Space กำลัง queue อยู่ upload อาจเสร็จก่อน แล้ว tagging จะทำต่อภายหลัง

## Images ใดจะถูก Process

Auto tagging process image files เป็นหลัก

Images ที่มี tags, orientation, rating, width และ height ครบแล้วจะถูก skip เพื่อเลี่ยง Space calls ที่ไม่จำเป็น

ImgBed จะเติมเฉพาะข้อมูลที่ขาดเมื่อทำได้ เช่น ถ้าขาดแค่ orientation ก็จะพยายามเพิ่ม orientation โดยไม่เรียก full content tag flow

## FAQ

### ทำไมควร Duplicate Space เอง?

Public Spaces ถูก share โดยผู้ใช้จำนวนมาก Space ที่ duplicate เองจะถูกใช้โดย ImgBed site ของคุณเป็นหลัก จึงมักเร็วและ reliable กว่า

### Space ขึ้น Starting Up บ่อย

หลังสร้างครั้งแรก หรือหลัง idle นาน Space อาจต้องใช้เวลาสตาร์ท

เปิด Space page ของคุณก่อน เมื่อ recognize image ได้ปกติแล้วค่อยกลับมา ImgBed และ start tagging

### Copy Space URL อย่างไร?

เปิด Hugging Face Space page แล้ว copy browser address

Examples:

```text
https://huggingface.co/spaces/lintonxue00/wd-tagger
https://huggingface.co/spaces/SmilingWolf/wd-tagger
```

### เพิ่ม Multiple Spaces ได้ไหม?

ได้ ใส่หนึ่ง Space URL ต่อหนึ่ง line

Multiple Spaces process images ร่วมกัน เหมาะเมื่อมี images จำนวนมาก

### ทำไม Tags เป็น English?

SmilingWolf models output English tags เป็นพฤติกรรมปกติ

Tags ใช้หลัก ๆ สำหรับ search, filtering, random image API และ public gallery filters

### Rating Tags ใช้ทำอะไร?

Rating results ทำงานร่วมกับ access mode ใน Security Settings

เช่น เมื่อ visitor access ถูกจำกัดด้วย age rating public browsing และ random image features จะ filter images ตาม rules เหล่านั้น

## Quick Flow

```text
Sign in เข้า Hugging Face
-> เปิด SmilingWolf/wd-tagger
-> Duplicate this Space
-> รอ Space build เสร็จ
-> Copy Space URL ของคุณ
-> ใส่ Space URLs ใน ImgBed
-> เลือก model และ thresholds
-> Start tagging หรือ enable auto-tag on upload
```
