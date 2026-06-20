# Google Drive चैनल जोड़ना

## पहले क्या चाहिए

शुरू करने से पहले ये items तैयार रखें:

| ज़रूरत | क्यों चाहिए |
| --- | --- |
| Google account | Google Cloud access और Google Drive authorize करने के लिए |
| Google Cloud project | Drive API enable और OAuth credentials create करने के लिए |
| OAuth 2.0 client | ImgBed को `Client ID`, `Client Secret` और `Refresh Token` पाने के लिए |
| आपका ImgBed domain | OAuth redirect URI के लिए। यह आपके actual used domain से match होना चाहिए। |

## Setup Steps

### Step 1: Google Drive API enable करें

1. Google Cloud Console खोलें।
2. नया project बनाएँ या existing project चुनें।
3. `APIs & Services` पर जाएँ।
4. `Enable APIs and Services` पर क्लिक करें।
5. `Google Drive API` search करें।
6. इसे खोलकर enable करें।

### Step 2: OAuth Consent Screen configure करें

1. Google Cloud में `Google Auth Platform` खोलें।
2. app name, support email और developer contact email जैसी basic `Branding` information पूरी करें।
3. `Audience` खोलें।
4. अधिकतर self-hosted personal deployments के लिए `External` चुनें।
5. अगर `External` चुनते हैं, तो authorize करना वाला Google account `Test users` में जोड़ें।
6. `Data Access` खोलें।
7. required Google Drive permissions जोड़ें।

### Step 3: OAuth 2.0 Client बनाएँ

1. `Google Auth Platform` में `Clients` खोलें।
2. नया client बनाएँ।
3. application type को `Web application` करें।
4. client को पहचानने लायक नाम दें।
5. authorized JavaScript origins में अपना ImgBed URL डालें, जैसे:

```text
https://img.example.com
```

6. authorized redirect URIs में डालें:

```text
https://img.example.com/api/oauth/google/callback
```

![OAuth client बनाएँ](../../image/upload/google-drive/oa客户端id创建.png)

![Domain और callback URL डालें](../../image/upload/google-drive/填写oa客户端url信息.png)

client बन जाने के बाद ये values copy करें:

| Generated Value | ImgBed Field |
| --- | --- |
| Client ID | `Client ID` |
| Client Secret | `Client Secret` |

## Step 4: Google Drive channel भरें

Upload Settings में `Google Drive` चुनें और भरें:

| ImgBed Field | क्या डालें |
| --- | --- |
| Channel name | पहचानने लायक नाम, जैसे `Main Google Drive` |
| Client ID | Google Cloud से Client ID |
| Client Secret | Google Cloud से Client Secret |
| Refresh Token | अभी खाली छोड़ें। अगले step में लें। |
| Root directory | optional। default `imgbed`। |

![Client details ImgBed में paste करें](../../image/upload/google-drive/粘贴回添加新渠道配置.png)

## Step 5: Refresh Token लें

1. `Get Token` पर क्लिक करें।
2. जिस Google account को connect करना है उसे चुनें।
3. authorization prompts complete करें।
4. callback page `Refresh Token` दिखाएगा।
5. इसे copy करें।
6. ImgBed में लौटकर `Refresh Token` field में paste करें।

![Authorization के बाद Refresh Token copy करें](../../image/upload/google-drive/授权完复制token.png)

अगर बाद में Google account बदलते हैं, OAuth client बदलते हैं, या पुरानी authorization expire हो जाती है, तो channel delete करने की ज़रूरत नहीं। edit page खोलें और `Reauthorize` पर क्लिक करें।

## Step 6: Channel save करें

सभी fields भरने के बाद channel save करें।

## Quick Flow

```text
Google Cloud खोलें
-> project बनाएँ या चुनें
-> Google Drive API enable करें
-> Google Auth Platform configure करें
-> Audience External हो तो अपना Google account Test users में जोड़ें
-> Web application OAuth client बनाएँ
-> redirect URI के रूप में https://your-domain.com/api/oauth/google/callback use करें
-> ImgBed में Client ID और Client Secret भरें
-> Get Token क्लिक करें
-> Google से sign in और authorize करें
-> callback page से Refresh Token copy करें
-> ImgBed में paste करके save करें
-> test image upload करें
```

## References

1. Google OAuth Web Server Applications: https://developers.google.com/identity/protocols/oauth2/web-server
2. Google Workspace OAuth Consent Configuration: https://developers.google.com/workspace/guides/configure-oauth-consent
3. Google Drive API Auth Scopes: https://developers.google.com/workspace/drive/api/guides/api-specific-auth
