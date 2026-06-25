# د Google Drive چینل اضافه کول

## مخکې څه ته اړتیا لرئ

له پیل مخکې دا شیان برابر کړئ:

| اړتیا | ولې ورته اړتیا ده |
| --- | --- |
| Google حساب | Google Cloud ته د لاسرسي او Google Drive د authorize کولو لپاره |
| Google Cloud پروژه | د Drive API فعالولو او OAuth اعتبارلیکونه جوړولو لپاره |
| OAuth 2.0 client | ImgBed یې د `Client ID`، `Client Secret` او `Refresh Token` اخیستلو لپاره کاروي |
| ستاسو ImgBed ډومېن | د OAuth ریډایرکټ URI لپاره کارېږي. دا باید له هغه ډومېن سره برابر وي چې تاسې یې رښتیا کاروئ. |

## د تنظیم پړاوونه

### 1 ګام: Google Drive API فعال کړئ

1. Google Cloud Console پرانیزئ.
2. نوی پروژه جوړ کړئ یا موجود پروژه وټاکئ.
3. `APIs & Services` ته لاړ شئ.
4. `Enable APIs and Services` کلیک کړئ.
5. `Google Drive API` ولټوئ.
6. پاڼه یې پرانیزئ او enable کلیک کړئ.

### 2 ګام: د OAuth Consent Screen تنظیم کړئ

1. په Google Cloud کې `Google Auth Platform` پرانیزئ.
2. د `Branding` بنسټیز معلومات بشپړ کړئ، لکه اپ name، support email او developer contact email.
3. `Audience` پرانیزئ.
4. د ډېرو self-hosted شخصي نصبونو لپاره `External` مناسب دی.
5. که `External` مو وټاکه، هغه Google حساب چې authorize کوئ د `Test users` لاندې اضافه کړئ.
6. `Data Access` پرانیزئ.
7. د Google Drive اړین permissions اضافه کړئ.

### 3 ګام: OAuth 2.0 Client جوړ کړئ

1. په `Google Auth Platform` کې `Clients` پرانیزئ.
2. نوی client جوړ کړئ.
3. د اپlication type په توګه `Web application` وټاکئ.
4. داسې نوم ورکړئ چې وروسته یې وپېژنئ.
5. د authorized JavaScript origins لپاره خپل ImgBed URL ولیکئ، د بېلګې په توګه:

```text
https://img.example.com
```

6. د authorized ریډایرکټ URIs لپاره ولیکئ:

```text
https://img.example.com/api/oauth/google/callback
```

![Create OAuth client](../../image/upload/google-drive/oa客户端id创建.png)

![Enter ډومېن and کالبک URL](../../image/upload/google-drive/填写oa客户端url信息.png)

کله چې client جوړ شو، دا ارزښتونه کاپي کړئ:

| Generated ارزښت | د ImgBed فیلډ |
| --- | --- |
| Client ID | `Client ID` |
| Client Secret | `Client Secret` |

## 4 ګام: د Google Drive چینل ډک کړئ

په د اپلوډ تنظیمات کې `Google Drive` وټاکئ او دا fields ډک کړئ:

| د ImgBed فیلډ | څه ولیکئ |
| --- | --- |
| د چینل نوم | داسې نوم چې وپېژندل شي، لکه `Main Google Drive` |
| Client ID | له Google Cloud څخه اخیستل شوی Client ID |
| Client Secret | له Google Cloud څخه اخیستل شوی Client Secret |
| Refresh ټوکن | اوس یې تش پرېږدئ. په بل ګام کې یې اخلئ. |
| اصلي ډایرکټري | اختیاري. اصلي یې `imgbed` دی. |

![Fill client details in ImgBed](../../image/upload/google-drive/粘贴回添加新渠道配置.png)

## 5 ګام: Refresh ټوکن واخلئ

1. `Get Token` کلیک کړئ.
2. هغه Google حساب وټاکئ چې نښلول یې غواړئ.
3. د authorization پیغامونه بشپړ کړئ.
4. کالبک page به `Refresh Token` ښکاره کړي.
5. هغه کاپي کړئ.
6. بېرته ImgBed ته راشئ او د `Refresh Token` فیلډ کې یې پیسټ کړئ.

![کاپي Refresh ټوکن after authorization](../../image/upload/google-drive/授权完复制token.png)

که وروسته Google حساب بدل کړئ، OAuth client بدل کړئ، یا پخوانی authorization expire شي، چینل ړنګولو ته اړتیا نشته. د edit پاڼه پرانیزئ او `Reauthorize` کلیک کړئ.

## 6 ګام: چینل خوندي کړئ

کله چې ټول fields ډک شول، چینل خوندي کړئ.

## چټک بهیر

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

## ماخذونه

1. Google OAuth Web سرور اپlications: https://developers.google.com/identity/protocols/oauth2/web-server
2. Google Workspace OAuth Consent تنظیمات: https://developers.google.com/workspace/guides/configure-oauth-consent
3. Google Drive API Auth Scopes: https://developers.google.com/workspace/drive/api/guides/api-specific-auth
