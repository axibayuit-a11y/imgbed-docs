# Google Drive சேனல் சேர்க்கவும்

## முதலில் தேவையானவை

| தேவை | ஏன் தேவை |
| --- | --- |
| Google கணக்கு | Google Cloud அணுகவும் Google Drive authorize செய்யவும் |
| Google Cloud திட்டம் | Drive API enable செய்து OAuth சான்றுகள் உருவாக்க |
| OAuth 2.0 client | ImgBed `Client ID`, `Client Secret`, `Refresh Token` பெற |
| உங்கள் ImgBed டொமைன் | OAuth redirect URI-க்கு. நீங்கள் பயன்படுத்தும் டொமைன்-க்கு சரியாக match ஆக வேண்டும். |

## அமைப்பு படிகள்

### படி 1: Google Drive API Enable செய்யவும்

1. Google Cloud Console திறக்கவும்.
2. புதிய திட்டம் உருவாக்கவும் அல்லது ஏற்கனவே உள்ள திட்டத்தைத் தேர்வு செய்யவும்.
3. `APIs & Services` செல்லவும்.
4. `Enable APIs and Services` கிளிக் செய்யவும்.
5. `Google Drive API` தேடவும்.
6. அதைத் திறந்து enable கிளிக் செய்யவும்.

### படி 2: OAuth Consent Screen கட்டமை செய்யவும்

1. Google Cloud-ல் `Google Auth Platform` திறக்கவும்.
2. செயலி name, support email, developer contact email போன்ற basic `Branding` தகவலை முடிக்கவும்.
3. `Audience` திறக்கவும்.
4. பெரும்பாலான self-hosted personal deployments-க்கு `External` தேர்வு செய்யவும்.
5. `External` தேர்வு செய்தால் authorize செய்ய வேண்டிய Google கணக்கு-ஐ `Test users`-ல் சேர்க்கவும்.
6. `Data Access` திறக்கவும்.
7. தேவையான Google Drive permissions சேர்க்கவும்.

### படி 3: OAuth 2.0 Client உருவாக்கவும்

1. `Google Auth Platform`-ல் `Clients` திறக்கவும்.
2. புதிய client உருவாக்கவும்.
3. செயலிlication type-ஐ `Web application` ஆக அமைக்கவும்.
4. அறியக்கூடிய client name கொடுக்கவும்.
5. authorized JavaScript origins-ல் உங்கள் ImgBed URL கொடுக்கவும், உதா:

```text
https://img.example.com
```

6. authorized redirect URIs-ல்:

```text
https://img.example.com/api/oauth/google/callback
```

![OAuth client உருவாக்கவும்](../../image/upload/google-drive/oa客户端id创建.png)

![டொமைன் மற்றும் callback URL உள்ளிடவும்](../../image/upload/google-drive/填写oa客户端url信息.png)

client உருவான பிறகு:

| உருவாக்கப்பட்ட மதிப்பு | ImgBed புலம் |
| --- | --- |
| Client ID | `Client ID` |
| Client Secret | `Client Secret` |

## படி 4: ImgBed-ல் Google Drive சேனல் நிரப்பவும்

பதிவேற்ற அமைப்புகள்-ல் `Google Drive` தேர்வு செய்து:

| ImgBed புலம் | எதை உள்ளிட வேண்டும் |
| --- | --- |
| சேனல் பெயர் | அறியக்கூடிய பெயர், உதா. `Main Google Drive` |
| Client ID | Google Cloud Client ID |
| Client Secret | Google Cloud Client Secret |
| Refresh டோக்கன் | இப்போது காலியாக விடவும். அடுத்த படியில் பெறவும். |
| வேர் அடைவு | விருப்பத்தேர்வு. இயல்புநிலை `imgbed`. |

![ImgBed-ல் client விவரங்களை நிரப்பவும்](../../image/upload/google-drive/粘贴回添加新渠道配置.png)

## படி 5: Refresh டோக்கன் பெறவும்

1. `Get Token` கிளிக் செய்யவும்.
2. இணைக்க வேண்டிய Google கணக்கைத் தேர்வு செய்யவும்.
3. authorization prompts-ஐ முடிக்கவும்.
4. callback பக்கம் `Refresh Token` காட்டும்.
5. அதை நகலெடுக்கவும்.
6. ImgBed-க்கு திரும்பி, அதை `Refresh Token` புலத்தில் ஒட்டவும்.

![authorization முடிந்த பிறகு Refresh டோக்கனை நகலெடுக்கவும்](../../image/upload/google-drive/授权完复制token.png)

பின்னர் Google கணக்கு மாற்றினாலும், OAuth client மாற்றினாலும், பழைய authorization காலாவதியானாலும் சேனலை நீக்க வேண்டியதில்லை. திருத்தப் பக்கத்தைத் திறந்து `Reauthorize` கிளிக் செய்யவும்.

## படி 6: சேனல் சேமி செய்யவும்

அனைத்து புலங்களையும் நிரப்பிய பிறகு சேனலை சேமிக்கவும்.

## விரைவு ஓட்டம்

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

## மேற்கோள்கள்

1. Google OAuth Web சேவையகம் செயலிlications: https://developers.google.com/identity/protocols/oauth2/web-server
2. Google Workspace OAuth Consent கட்டமைப்பு: https://developers.google.com/workspace/guides/configure-oauth-consent
3. Google Drive API Auth Scopes: https://developers.google.com/workspace/drive/api/guides/api-specific-auth
