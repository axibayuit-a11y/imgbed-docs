# Google Drive Channel شامل کریں

## شروع کرنے سے پہلے کیا چاہیے

شروع کرنے سے پہلے یہ items تیار کریں:

| ضرورت | وجہ |
| --- | --- |
| Google account | Google Cloud تک access اور Google Drive authorize کرنے کے لیے |
| Google Cloud project | Drive API فعال کرنے اور OAuth credentials بنانے کے لیے |
| OAuth 2.0 client | ImgBed کے لیے `Client ID`، `Client Secret`، اور `Refresh Token` حاصل کرنے کے لیے |
| آپ کا ImgBed domain | OAuth redirect URI کے لیے۔ یہ اسی domain سے match ہونا چاہیے جو آپ واقعی استعمال کرتے ہیں۔ |

## سیٹ اپ کے مراحل

### مرحلہ 1: Google Drive API Enable کریں

1. Google Cloud Console کھولیں۔
2. نیا project بنائیں یا موجودہ project منتخب کریں۔
3. `APIs & Services` میں جائیں۔
4. `Enable APIs and Services` پر کلک کریں۔
5. `Google Drive API` تلاش کریں۔
6. اسے کھولیں اور فعال پر کلک کریں۔

### مرحلہ 2: OAuth Consent Screen Configure کریں

1. Google Cloud میں `Google Auth Platform` کھولیں۔
2. basic `Branding` information مکمل کریں، جیسے app name، support email، اور developer contact email۔
3. `Audience` کھولیں۔
4. زیادہ تر self-hosted personal deployments کے لیے `External` منتخب کریں۔
5. اگر `External` منتخب کرتے ہیں تو جس Google account کو authorize کرنا ہے اسے `Test users` میں شامل کریں۔
6. `Data Access` کھولیں۔
7. درکار Google Drive permissions شامل کریں۔

### مرحلہ 3: OAuth 2.0 Client بنائیں

1. `Google Auth Platform` میں `Clients` کھولیں۔
2. نیا client بنائیں۔
3. application type کو `Web application` رکھیں۔
4. client کو قابل شناخت نام دیں۔
5. authorized JavaScript origins میں اپنا ImgBed URL درج کریں، مثلاً:

```text
https://img.example.com
```

6. authorized redirect URIs میں درج کریں:

```text
https://img.example.com/api/oauth/google/callback
```

![OAuth client بنائیں](../../image/upload/google-drive/oa客户端id创建.png)

![domain اور callback URL درج کریں](../../image/upload/google-drive/填写oa客户端url信息.png)

client بننے کے بعد یہ قدرs کاپی کریں:

| تیار کردہ قدر | ImgBed فیلڈ |
| --- | --- |
| Client ID | `Client ID` |
| Client Secret | `Client Secret` |

## مرحلہ 4: ImgBed میں Google Drive Channel بھریں

اپ لوڈ سیٹنگز میں `Google Drive` منتخب کریں اور یہ فیلڈز بھریں:

| ImgBed فیلڈ | کیا درج کریں |
| --- | --- |
| Channel name | قابل شناخت نام، مثلاً `Main Google Drive` |
| Client ID | Google Cloud سے لیا ہوا Client ID |
| Client Secret | Google Cloud سے لیا ہوا Client Secret |
| Refresh Token | ابھی خالی چھوڑ دیں۔ اگلے مرحلے میں حاصل کریں۔ |
| Root directory | اختیاری۔ ڈیفالٹ `imgbed` ہے۔ |

![ImgBed میں client details بھریں](../../image/upload/google-drive/粘贴回添加新渠道配置.png)

## مرحلہ 5: Refresh Token حاصل کریں

1. `Get Token` پر کلک کریں۔
2. وہ Google account منتخب کریں جسے منسلک کرنا ہے۔
3. authorization prompts مکمل کریں۔
4. callback صفحہ ایک `Refresh Token` دکھائے گا۔
5. اسے کاپی کریں۔
6. ImgBed پر واپس آ کر `Refresh Token` فیلڈ میں چسپاں کریں۔

![authorization کے بعد Refresh Token کاپی کریں](../../image/upload/google-drive/授权完复制token.png)

اگر بعد میں Google account بدلیں، OAuth client بدلیں، یا پرانی authorization expire ہو جائے، تو چینل delete کرنے کی ضرورت نہیں۔ ترمیمی صفحہ کھولیں اور `Reauthorize` پر کلک کریں۔

## مرحلہ 6: چینل محفوظ کریں

تمام فیلڈز بھرنے کے بعد channel save کریں۔

## فوری بہاؤ

```text
Open Google Cloud
-> Create or select a project
-> Enable Google Drive API
-> Configure Google Auth Platform
-> If Audience is External, add your Google account to Test users
-> Create a Web application OAuth client
-> Use https://your-domain.com/api/oauth/google/callback as the redirect URI
-> Fill Client ID and Client Secret into ImgBed
-> Click Get Token
-> Sign in with Google and authorize
-> Copy the Refresh Token from the callback page
-> Paste it back into ImgBed and save
-> Upload a test image
```

## حوالہ جات

1. Google OAuth Web Server Applications: https://developers.google.com/identity/protocols/oauth2/web-server
2. Google Workspace OAuth Consent Configuration: https://developers.google.com/workspace/guides/configure-oauth-consent
3. Google Drive API Auth Scopes: https://developers.google.com/workspace/drive/api/guides/api-specific-auth
