# WebDAV Channel شامل کریں

## کب استعمال کریں

WebDAV channel اس وقت استعمال کریں جب:

- آپ کے پاس NAS، cloud drive، یا object storage service ہے جو WebDAV endpoint دیتی ہے۔
- آپ چاہتے ہیں کہ uploaded images آپ کی اپنی WebDAV directory میں محفوظ ہوں۔
- آپ credentials کو frontend میں لمبے عرصے تک expose کرنے کے بجائے D1 کی `upload_channels` table میں محفوظ رکھنا چاہتے ہیں۔

## شروع کرنے سے پہلے کیا چاہیے

| ضرورت | مقصد |
| --- | --- |
| WebDAV Endpoint | server-side WebDAV URL، مثلاً `https://nas.example.com/dav`. |
| Username | WebDAV service میں sign in کرنے کے لیے۔ |
| Password | WebDAV service میں sign in کرنے کے لیے۔ |
| Authentication mode | ڈیفالٹ `Basic` ہے۔ `Digest` یا auto negotiation صرف اس وقت استعمال کریں جب server require کرے۔ |
| Storage directory | files محفوظ کرنے کی directory۔ ڈیفالٹ `imgbed` ہے۔ |

## کہاں شامل کریں

1. سسٹم سیٹنگز کھولیں۔
2. اپ لوڈ سیٹنگز میں جائیں۔
3. اوپر دائیں طرف چینل شامل کریں پر کلک کریں۔
4. `WebDAV` منتخب کریں۔

## فیلڈز کی تفصیل

| فیلڈ | کام | ضروری |
| --- | --- | --- |
| Channel name | اس WebDAV channel کا واضح نام، مثلاً `koofr` یا `nas`۔ | ہاں |
| Endpoint | مکمل WebDAV endpoint، `https://` سمیت۔ | ہاں |
| Username | WebDAV login username۔ | ہاں |
| Password | WebDAV login password۔ | ہاں |
| Authentication mode | عموماً `Basic`؛ اگر server digest authentication require کرے تو `Digest` استعمال کریں۔ | ہاں |
| Storage directory | جہاں files محفوظ ہوں گی۔ ڈیفالٹ `imgbed` ہے۔ | نہیں |

## مثال: fie.nl.tab.digital

### 1. App Password بنائیں

اپنے account security settings کھولیں، application passwords تلاش کریں، اور نیا app password بنائیں۔

![app password بنائیں](../../image/upload/webdav/创建应用密码.png)

بننے کے بعد نیا app password کاپی کر کے محفوظ کریں۔ عموماً یہ صرف ایک بار دکھایا جاتا ہے۔

![Save the new app password](../../image/upload/webdav/记住新应用程序密码.png)

### 2. ImgBed میں WebDAV configuration بھریں

ImgBed پر واپس آئیں اور WebDAV channel شامل کریں:

| UI فیلڈ | قدر |
| --- | --- |
| Endpoint | `https://fie.nl.tab.digital/` کی طرف سے دیا گیا WebDAV URL۔ |
| Username | آپ کا WebDAV username۔ |
| Password | ابھی بنایا ہوا app password۔ |
| Authentication mode | زیادہ تر cases میں `Basic` سے شروع کریں۔ |
| Storage directory | ڈیفالٹ `imgbed` ہے؛ custom directory بھی استعمال کر سکتے ہیں۔ |

![configuration بھریں](../../image/upload/webdav/填写配置.png)

## بڑی فائل upload کا رویہ

WebDAV channel اب real session-based chunked upload استعمال کرتا ہے۔

چھوٹی files ایک مکمل file کے طور پر upload ہوتی ہیں۔ 64 MiB سے بڑی files تقریباً 10 MiB کے chunks میں خودکار طور پر تقسیم ہو کر remote chunk directory میں upload ہوتی ہیں۔

WebDAV service کو `partial update` یا offset-based writes support کرنے کی ضرورت نہیں۔ ImgBed remote server پر chunks کو ایک بڑی file میں merge نہیں کرتا۔ اس کے بجائے chunk manifest محفوظ کرتا ہے اور file request ہونے پر chunks کو ترتیب سے پڑھتا ہے۔

عملی طور پر:

| File Size | Upload Method | Remote Storage Layout |
| --- | --- | --- |
| 64 MiB یا کم | نہیںrmal upload | ایک مکمل file |
| 64 MiB سے زیادہ | Real session chunked upload | chunk directory جس میں متعدد chunk files ہوں |

chunk directory صرف remote storage layout پر اثر ڈالتی ہے۔ ImgBed میں file URL نہیں بدلتا۔ users پھر بھی اصل `/file/...` link سے file access کرتے ہیں۔

## سیٹ اپ کے مراحل

1. اپ لوڈ سیٹنگز کھولیں۔
2. چینل شامل کریں پر کلک کریں۔
3. `WebDAV` منتخب کریں۔
4. قابل شناخت channel name درج کریں، مثلاً `koofr`۔
5. WebDAV endpoint درج کریں، مثلاً `https://app.koofr.net/dav/Koofr`.
6. username اور password درج کریں۔
7. authentication mode کو ڈیفالٹ طور پر `Basic` رہنے دیں۔
8. storage directory کو `imgbed` رہنے دیں، یا اپنی directory درج کریں۔
9. Save پر کلک کریں۔
10. Save کے بعد چینل card چیک کریں، capacity query دستیاب ہو تو چلائیں، اور test file upload کریں۔

## Verify کیسے کریں

| جانچ | Verify کرنے کا طریقہ |
| --- | --- |
| چینل card ظاہر ہوتا ہے | محفوظ کرنے کے بعد اپ لوڈ سیٹنگز میں WebDAV چینل card نظر آنا چاہیے۔ |
| Channel is فعال | card کے اوپر دائیں switch کو on رہنا چاہیے۔ |
| credentials محفوظ ہیں | تفصیلی منظر میں Endpoint، username، authentication mode، اور storage directory دکھنے چاہئیں۔ |
| چھوٹی file upload کام کرتی ہے | آزمائشی تصویر upload کریں اور تصدیق کریں کہ file WebDAV directory میں آ گئی ہے۔ |
| بڑی file rule کام کرتا ہے | 64 MiB سے بڑی files chunked upload استعمال کرتی ہیں اور remote chunk directory بناتی ہیں۔ |
| Capacity query کام کرتا ہے | server capacity information support کرے تو query used اور total capacity دکھائے گی۔ |

![Quota query کامیاب](../../image/upload/webdav/查询额度成功.png)

## FAQ

### بڑی WebDAV files chunk directory کیوں بناتی ہیں؟

یہ بڑی files کے لیے موجودہ storage method ہے۔

64 MiB سے بڑی فائلیں ریموٹ طرف ایک بڑی فائل میں ضم نہیں ہوتیں۔ وہ chunk directory کے طور پر محفوظ ہوتی ہیں۔ ImgBed chunk manifest محفوظ کرتا ہے اور مکمل مواد کو chunks سے ترتیب وار پڑھ کر واپس کرتا ہے۔

### بڑی file upload ناکام ہو تو پہلے کیا چیک کریں؟

سب سے پہلے Endpoint، username، password، اور storage directory چیک کریں۔ پھر تصدیق کریں کہ WebDAV service directory creation، file writing، اور file reading allow کرتی ہے۔

اگر capacity query ناکام ہو لیکن small file upload کام کرے، تو server شاید capacity reporting support نہیں کرتا یا restrict کرتا ہے۔ اس کا لازمی مطلب یہ نہیں کہ upload unavailable ہے۔

### کون سا authentication mode استعمال کروں؟

`Basic` سے شروع کریں۔

اگر server واضح طور پر digest authentication require کرے تو `Digest` استعمال کریں۔

یقین نہ ہو تو automatic negotiation استعمال کریں۔

## فوری چیک لسٹ

```text
Prepare WebDAV endpoint, username, and password
-> Open Upload Settings
-> Add Channel
-> Select WebDAV
-> Enter Endpoint / username / password
-> Keep authentication mode as Basic by default
-> Keep storage directory as imgbed by default
-> Save
-> Query capacity
-> Upload a test file
```
