# pCloud Channel شامل کریں

## کب مناسب ہے

- آپ کے پاس pCloud account ہے اور آپ چاہتے ہیں کہ ImgBed images کو pCloud میں store کرے۔
- آپ pCloud account email اور password کو channel credentials کے طور پر استعمال کرنے میں comfortable ہیں۔

## پہلے کیا چاہیے

| ضرورت | وجہ |
| --- | --- |
| pCloud account email | pCloud API میں sign in کرنے کے لیے |
| pCloud password | pCloud API میں sign in کرنے کے لیے |
| API host | ڈیفالٹ `api.pcloud.com` ہے۔ EU accounts `eapi.pcloud.com` استعمال کر سکتے ہیں۔ |
| Storage directory | files جہاں محفوظ ہوں گی۔ ڈیفالٹ `imgbed` ہے۔ |

## کہاں شامل کریں

1. سسٹم سیٹنگز کھولیں۔
2. اپ لوڈ سیٹنگز کھولیں۔
3. اوپر دائیں طرف `Add Channel` پر کلک کریں۔
4. `pCloud` منتخب کریں۔

## فیلڈز کی تفصیل

| فیلڈ | مقصد | ضروری |
| --- | --- | --- |
| Channel name | اس pCloud channel کی شناخت، مثلاً `Personal pCloud` | ہاں |
| Account email | آپ کا pCloud login email | ہاں |
| Password | آپ کا pCloud password | ہاں |
| API host | pCloud API host۔ ڈیفالٹ `api.pcloud.com` ہے۔ | نہیں |
| Storage directory | files محفوظ کرنے والی directory۔ ڈیفالٹ `imgbed` ہے۔ | نہیں |

account region کے مطابق API host منتخب کریں:

| Account Region | API Host |
| --- | --- |
| ڈیفالٹ / US | `api.pcloud.com` |
| Europe | `eapi.pcloud.com` |

## سیٹ اپ کے مراحل

1. اپ لوڈ سیٹنگز کھولیں۔
2. `Add Channel` پر کلک کریں۔
3. `pCloud` منتخب کریں۔
4. ایسا channel name درج کریں جسے آپ پہچان سکیں۔
5. اپنا pCloud account email درج کریں۔
6. اپنا pCloud password درج کریں۔
7. API host کو `api.pcloud.com` رہنے دیں، یا EU account کے لیے `eapi.pcloud.com` استعمال کریں۔
8. storage directory کو `imgbed` رہنے دیں، یا اپنی پسند کا folder درج کریں۔
9. channel save کریں۔

![Configure channel](../../image/upload/pcloud/配置渠道.png)

## Verify کیسے کریں

| جانچ | متوقع نتیجہ |
| --- | --- |
| چینل card | Save کے بعد pCloud چینل card نظر آئے۔ |
| Channel switch | card کا switch فعال رہے۔ |
| Email display | card connected pCloud email دکھائے۔ |
| Quota query | کامیاب query کے بعد used اور total capacity دکھے۔ |
| upload ٹیسٹ | آزمائشی تصویر ترتیب دی گئی pCloud storage directory میں نظر آئے۔ |

![Quota query کامیاب](../../image/upload/pcloud/查询额度成功.png)

## مسائل کا حل

### OAuth2 کیوں نہیں؟

pCloud OAuth2 ڈیفالٹ طور پر self-service نہیں ہے۔ اسے فعال کروانے کے لیے pCloud کو email کرنا پڑتا ہے۔

موجودہ pCloud OAuth2 flow ImgBed کو درکار short-lived upload link workflow بھی support نہیں کرتا، اس لیے یہ channel account email اور password login استعمال کرتا ہے۔

### کون سا API Host استعمال کروں؟

ڈیفالٹ:

```text
api.pcloud.com
```

EU accounts کے لیے:

```text
eapi.pcloud.com
```

## فوری بہاؤ

```text
Prepare your pCloud email and password
-> Open Upload Settings
-> Add Channel
-> Choose pCloud
-> Fill channel name / email / password
-> Keep API host as api.pcloud.com unless your account is in Europe
-> Keep storage directory as imgbed unless you need another folder
-> Save
-> Query quota
-> Upload a test image
```
