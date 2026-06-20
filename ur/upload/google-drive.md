# Google Drive Channel شامل کریں

## شروع کرنے سے پہلے کیا چاہیے

شروع کرنے سے پہلے یہ items تیار کریں:

| ضرورت | وجہ |
| --- | --- |
| Google account | Google Cloud تک access اور Google Drive authorize کرنے کے لیے |
| Google Cloud project | Drive API enable کرنے اور OAuth credentials بنانے کے لیے |
| OAuth 2.0 client | ImgBed کے لیے `Client ID`، `Client Secret`، اور `Refresh Token` حاصل کرنے کے لیے |
| آپ کا ImgBed domain | OAuth redirect URI کے لیے۔ یہ اسی domain سے match ہونا چاہیے جو آپ واقعی استعمال کرتے ہیں۔ |

## Setup Steps

### Step 1: Google Drive API Enable کریں

1. Google Cloud Console کھولیں۔
2. نیا project بنائیں یا existing project منتخب کریں۔
3. `APIs & Services` میں جائیں۔
4. `Enable APIs and Services` پر کلک کریں۔
5. `Google Drive API` تلاش کریں۔
6. اسے کھولیں اور enable پر کلک کریں۔

### Step 2: OAuth Consent Screen Configure کریں

1. Google Cloud میں `Google Auth Platform` کھولیں۔
2. basic `Branding` information مکمل کریں، جیسے app name، support email، اور developer contact email۔
3. `Audience` کھولیں۔
4. زیادہ تر self-hosted personal deployments کے لیے `External` منتخب کریں۔
5. اگر `External` منتخب کرتے ہیں تو جس Google account کو authorize کرنا ہے اسے `Test users` میں شامل کریں۔
6. `Data Access` کھولیں۔
7. درکار Google Drive permissions شامل کریں۔

### Step 3: OAuth 2.0 Client بنائیں

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

![Create OAuth client](../../image/upload/google-drive/oa客户端id创建.png)

![Enter domain and callback URL](../../image/upload/google-drive/填写oa客户端url信息.png)

client بننے کے بعد یہ values copy کریں:

| Generated Value | ImgBed Field |
| --- | --- |
| Client ID | `Client ID` |
| Client Secret | `Client Secret` |

## Step 4: ImgBed میں Google Drive Channel بھریں

Upload Settings میں `Google Drive` منتخب کریں اور یہ fields بھریں:

| ImgBed Field | What To Enter |
| --- | --- |
| Channel name | قابل شناخت نام، مثلاً `Main Google Drive` |
| Client ID | Google Cloud سے لیا ہوا Client ID |
| Client Secret | Google Cloud سے لیا ہوا Client Secret |
| Refresh Token | ابھی خالی چھوڑ دیں۔ اگلے step میں حاصل کریں۔ |
| Root directory | Optional۔ default `imgbed` ہے۔ |

![Fill client details in ImgBed](../../image/upload/google-drive/粘贴回添加新渠道配置.png)

## Step 5: Refresh Token حاصل کریں

1. `Get Token` پر کلک کریں۔
2. وہ Google account منتخب کریں جسے connect کرنا ہے۔
3. authorization prompts مکمل کریں۔
4. callback page ایک `Refresh Token` دکھائے گا۔
5. اسے copy کریں۔
6. ImgBed پر واپس آ کر `Refresh Token` field میں paste کریں۔

![Copy Refresh Token after authorization](../../image/upload/google-drive/授权完复制token.png)

اگر بعد میں Google account بدلیں، OAuth client بدلیں، یا پرانی authorization expire ہو جائے، تو channel delete کرنے کی ضرورت نہیں۔ edit page کھولیں اور `Reauthorize` پر کلک کریں۔

## Step 6: Channel Save کریں

تمام fields بھرنے کے بعد channel save کریں۔

## Quick Flow

```text
Google Cloud کھولیں
-> project بنائیں یا منتخب کریں
-> Google Drive API enable کریں
-> Google Auth Platform configure کریں
-> Audience External ہو تو اپنا Google account Test users میں شامل کریں
-> Web application OAuth client بنائیں
-> redirect URI کے طور پر https://your-domain.com/api/oauth/google/callback استعمال کریں
-> Client ID اور Client Secret ImgBed میں بھریں
-> Get Token پر کلک کریں
-> Google سے sign in اور authorize کریں
-> callback page سے Refresh Token copy کریں
-> ImgBed میں paste کر کے save کریں
-> test image upload کریں
```

## References

1. Google OAuth Web Server Applications: https://developers.google.com/identity/protocols/oauth2/web-server
2. Google Workspace OAuth Consent Configuration: https://developers.google.com/workspace/guides/configure-oauth-consent
3. Google Drive API Auth Scopes: https://developers.google.com/workspace/drive/api/guides/api-specific-auth
