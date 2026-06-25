# Dropbox Channel شامل کریں

## پہلے کیا چاہیے

| ضرورت | وجہ |
| --- | --- |
| Dropbox account | sign in اور app authorize کرنے کے لیے |
| Dropbox app | `App Key` اور `App Secret` generate کرنے کے لیے |
| آپ کا ImgBed domain | OAuth redirect URI کے لیے |
| دستیاب Dropbox storage | اصل file storage location کے طور پر |

## سیٹ اپ کے مراحل

### مرحلہ 1: Dropbox App بنائیں

1. Dropbox App Console کھولیں:

```text
https://www.dropbox.com/developers/apps
```

2. نیا app بنائیں۔
3. access type کے لیے منتخب کریں:

```text
App folder
```

4. app کو ایسا نام دیں جسے آپ پہچان سکیں، مثلاً `imgbed-app`۔
5. app بننے کے بعد app تفصیلات کا صفحہ کھولیں۔

تجویز کردہ access type:

| Access Type | تجویز |
| --- | --- |
| `App folder` | تجویز کردہ۔ یہ ImgBed کے file storage model سے match کرتا ہے۔ |
| `Full Dropbox` | تجویز کردہ نہیں۔ ImgBed کو پورے account access کی ضرورت نہیں۔ |

![Dropbox app بنائیں](../../image/upload/dropbox/开发者创建应用.png)

### مرحلہ 2: Redirect URI شامل کریں

Dropbox app تفصیلات کا صفحہ میں OAuth یا Redirect URI settings تلاش کریں اور یہ شامل کریں:

```text
https://your-domain.com/api/oauth/dropbox/callback
```

اگر آپ ایڈمن پینل کو ایک سے زیادہ domains سے استعمال کرتے ہیں، تو ہر matching callback URL شامل کریں۔

![Configure redirect URI](../../image/upload/dropbox/配置回调地址.png)

### مرحلہ 3: App اجازتs Configure کریں

`Permissions` tab کھولیں اور کم از کم یہ scopes فعال کریں:

| Scope | ضروری | مقصد |
| --- | --- | --- |
| `account_info.read` | ضروری | account اور quota information پڑھتا ہے |
| `files.metadata.read` | ضروری | path checks کے لیے file اور folder metadata پڑھتا ہے |
| `files.metadata.write` | ضروری | folders بناتا ہے اور metadata لکھتا ہے |
| `files.content.write` | ضروری | files upload کرتا ہے۔ یہ scope نہ ہو تو `required scope 'files.content.write'` خرابی آئے گی۔ |
| `files.content.read` | تجویز کردہ | download، preview، اور temporary file links کی اجازت دیتا ہے |

scopes منتخب کرنے کے بعد صفحہ کے نیچے `Submit` پر کلک کریں۔

![permissions شامل کریں](../../image/upload/dropbox/添加对应的权限.png)

اہم:

| صورتحال | کیا کرنا ہے |
| --- | --- |
| آپ نے scopes بدلے | token authorization flow دوبارہ چلائیں اور نیا `Refresh Token` لیں۔ |
| دوبارہ authorize نہیں کیا | پرانے token کو نئی permissions نہیں ملیں گی، اس لیے uploads پھر بھی ناکام ہو سکتے ہیں۔ |

### مرحلہ 4: App Credentials کاپی کریں

Dropbox app صفحہ سے یہ دو قدرs محفوظ کریں:

| Dropbox فیلڈ | ImgBed فیلڈ |
| --- | --- |
| `App key` | `App Key` |
| `App secret` | `App Secret` |

### مرحلہ 5: ImgBed میں Dropbox Channel بھریں

اپ لوڈ سیٹنگز میں `Dropbox` منتخب کریں اور یہ فیلڈز بھریں:

| ImgBed فیلڈ | کیا درج کریں |
| --- | --- |
| Channel name | قابل شناخت نام، مثلاً `Main Dropbox` |
| App Key | Dropbox کا `App key` |
| App Secret | Dropbox کا `App secret` |
| Refresh Token | ابھی خالی چھوڑ دیں |
| Root directory | اختیاری۔ ڈیفالٹ `imgbed` ہے۔ |
| نہیںte | اختیاری |

![token حاصل کریں](../../image/upload/dropbox/获取令牌.png)

### مرحلہ 6: Refresh Token حاصل کریں

1. ImgBed میں `Get Token` پر کلک کریں۔
2. جس Dropbox account کو منسلک کرنا ہے اس میں سائن ان کریں۔
3. authorization prompt منظور کریں۔
4. callback صفحہ ایک `Refresh Token` دکھائے گا۔
5. اسے کاپی کریں۔
6. ImgBed پر واپس آ کر `Refresh Token` فیلڈ میں چسپاں کریں۔

![token کاپی کریں](../../image/upload/dropbox/复制令牌.png)

## Verify کیسے کریں

| جانچ | متوقع نتیجہ |
| --- | --- |
| چینل card | Save کے بعد Dropbox channel نظر آئے۔ |
| Channel switch | channel فعال ہو سکے۔ |
| token محفوظ ہے | تفصیلات کا صفحہ دکھائے کہ `Refresh Token` محفوظ ہو گیا ہے۔ |
| upload ٹیسٹ | test image Dropbox app folder میں نظر آئے۔ |

quota limits فعال ہوں تو quota query پر کلک کریں۔ کامیاب query کے بعد چینل card used space، total space، اور last update time دکھاتا ہے۔

![Quota query کامیاب](../../image/upload/dropbox/查询额度成功.png)

## مسائل کا حل

| مسئلہ | حل |
| --- | --- |
| ImgBed کہتا ہے configuration نامکمل ہے | چیک کریں کہ `App Key`، `App Secret`، اور `Refresh Token` سب بھرے ہوئے ہیں۔ |
| Authorization کامیاب ہے مگر `Refresh Token` نہیں دکھتا | `Get Token` دوبارہ کلک کریں اور یقینی بنائیں کہ offline authorization flow استعمال ہو رہا ہے۔ |
| Upload `required scope 'files.content.write'` کے ساتھ ناکام ہوتا ہے | `files.content.write` فعال کریں، `Submit` پر کلک کریں، پھر نیا `Refresh Token` لیں۔ |
| Callback ناکام ہوتا ہے | تصدیق کریں کہ redirect URI `https://your-domain.com/api/oauth/dropbox/callback` ہے۔ |
| Files نہیں ملتیں | تصدیق کریں کہ Dropbox app `App folder` mode میں بنایا گیا تھا۔ |

## فوری بہاؤ

```text
Open Dropbox App Console
-> Create an app
-> Choose App folder access
-> Add https://your-domain.com/api/oauth/dropbox/callback
-> Enable account_info.read / files.metadata.read / files.metadata.write / files.content.write
-> Optionally enable files.content.read
-> Click Submit
-> Copy App Key and App Secret
-> Fill them into ImgBed
-> Click Get Token
-> Copy the Refresh Token from the callback page
-> Paste it back into ImgBed and save
```

## حوالہ جات

1. Dropbox App Console: https://www.dropbox.com/developers/apps
2. Dropbox OAuth Guide: https://developers.dropbox.com/oauth-guide
3. Dropbox Developer Guide: https://www.dropbox.com/developers/reference/developer-guide
