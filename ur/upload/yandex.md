# Yandex Channel شامل کریں

## پہلے کیا چاہیے

| ضرورت | وجہ |
| --- | --- |
| Yandex account | sign in اور Yandex Disk authorize کرنے کے لیے |
| Yandex OAuth app | `Client ID` اور `Client Secret` generate کرنے کے لیے |
| آپ کا ImgBed domain | OAuth redirect URI کے لیے |
| دستیاب Yandex Disk storage | اصل file storage location کے طور پر |

## سیٹ اپ کے مراحل

### مرحلہ 1: Yandex OAuth App بنائیں

1. Yandex OAuth app creation صفحہ کھولیں:

```text
https://oauth.yandex.com/client/new
```

2. اگر sign in صفحہ پر redirect ہو جائیں، پہلے اپنے Yandex account سے sign in کریں۔
3. نیا app بنائیں۔
4. app کو قابل شناخت نام دیں، مثلاً `imgbed-yandex`۔
5. callback یا redirect URL settings تلاش کریں۔
6. درج کریں:

```text
https://your-domain.com/api/oauth/yandex/callback
```

### مرحلہ 2: اجازتوں کی تصدیق کریں

موجودہ ImgBed Yandex integration کے لیے `Yandex.Disk REST API` کے تحت یہ چار permissions رکھیں:

| اجازت | مقصد |
| --- | --- |
| `cloud_api:disk.app_folder` | ImgBed کو app folder میں files store کرنے دیتا ہے |
| `cloud_api:disk.read` | files اور download links پڑھتا ہے |
| `cloud_api:disk.write` | files upload کرتا ہے، folders بناتا ہے، اور files delete کرتا ہے |
| `Access to information about Yandex.Disk` | disk quota اور used space پڑھتا ہے |

اگر `Yandex ID API` کے تحت یہ permissions بھی نظر آئیں تو اختیاری ہیں:

| اجازت کا متن | تجویز |
| --- | --- |
| `Access to username, first name and surname, gender` | اختیاری |
| `Access to email address` | اختیاری |

Core upload، download، deletion، اور quota features کا انحصار اوپر والی چار `Yandex.Disk REST API` permissions پر ہے۔

![Configure Yandex Disk permissions](../../image/upload/yandex/dataaccess配置软盘权限.png)

### مرحلہ 3: App Credentials کاپی کریں

app بننے کے بعد کاپی کریں:

| Yandex فیلڈ | ImgBed فیلڈ |
| --- | --- |
| `Client ID` | `Client ID` |
| `Client Secret` | `Client Secret` |

![Client ID اور Secret محفوظ کریں](../../image/upload/yandex/记录客户端id和secret.png)

### مرحلہ 4: ImgBed میں Yandex Channel بھریں

اپ لوڈ سیٹنگز میں `Yandex` منتخب کریں اور یہ فیلڈز بھریں:

| ImgBed فیلڈ | کیا درج کریں |
| --- | --- |
| Channel name | قابل شناخت نام، مثلاً `Main Yandex` |
| Client ID | Yandex app کا `Client ID` |
| Client Secret | Yandex app کا `Client Secret` |
| Refresh Token | ابھی خالی چھوڑ دیں |
| Root directory | اختیاری۔ ڈیفالٹ `imgbed` ہے۔ |

![channel config میں ترمیم کریں](../../image/upload/yandex/编辑配置渠道.png)

### مرحلہ 5: Refresh Token حاصل کریں

1. ImgBed میں `Get Token` پر کلک کریں۔
2. جس Yandex account کو منسلک کرنا ہے اس میں سائن ان کریں۔
3. authorization prompt منظور کریں۔
4. callback صفحہ ایک `Refresh Token` دکھائے گا۔
5. اسے کاپی کریں۔
6. ImgBed پر واپس آ کر `Refresh Token` فیلڈ میں چسپاں کریں۔

![authorization کے بعد refresh token کاپی کریں](../../image/upload/yandex/授权后复制刷新令牌.png)

### مرحلہ 6: چینل محفوظ کریں

تمام فیلڈز بھرنے کے بعد channel save کریں۔

## فوری بہاؤ

```text
Open Yandex OAuth Console
-> Create an app
-> Add https://your-domain.com/api/oauth/yandex/callback
-> Confirm Yandex Disk permissions
-> Copy Client ID and Client Secret
-> Fill Client ID / Client Secret into ImgBed
-> Click Get Token
-> Copy the Refresh Token from the callback page
-> Paste it back into ImgBed and save
```

## حوالہ جات

1. Register a Yandex app: https://yandex.com/dev/id/doc/en/register-client
2. URL کے ذریعے authorization code حاصل کریں: https://yandex.com/dev/id/doc/en/codes/code-url
3. Yandex OAuth token endpoint: https://yandex.com/dev/id/doc/en/tokens/token
