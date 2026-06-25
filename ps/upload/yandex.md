# د Yandex چینل اضافه کول

## مخکې څه ته اړتیا لرئ

| اړتیا | ولې ورته اړتیا ده |
| --- | --- |
| Yandex حساب | ننوځئ او Yandex Disk authorize کولو لپاره |
| Yandex OAuth اپ | د `Client ID` او `Client Secret` جوړولو لپاره |
| ستاسو ImgBed ډومېن | د OAuth ریډایرکټ URI لپاره |
| کافي Yandex Disk زېرمه | د فایلونو اصلي زېرمه ځای |

## د تنظیم پړاوونه

### 1 ګام: Yandex OAuth اپ جوړ کړئ

1. د Yandex OAuth اپ جوړولو پاڼه پرانیزئ:

```text
https://oauth.yandex.com/client/new
```

2. که ننوځئ ته ولېږدول شوئ، لومړی خپل Yandex حساب ته ننوځئ وکړئ.
3. نوی اپ جوړ کړئ.
4. اپ ته داسې نوم ورکړئ چې وپېژندل شي، لکه `imgbed-yandex`.
5. د کالبک یا ریډایرکټ URL settings ومومئ.
6. دا ولیکئ:

```text
https://your-domain.com/api/oauth/yandex/callback
```

### 2 ګام: اجازهs تایید کړئ

د اوسني ImgBed Yandex integration لپاره، د `Yandex.Disk REST API` لاندې دا څلور permissions وساتئ:

| اجازه | موخه |
| --- | --- |
| `cloud_api:disk.app_folder` | ImgBed ته اجازه ورکوي چې فایلونه په اپ folder کې وساتي |
| `cloud_api:disk.read` | فایلونه او download links لولي |
| `cloud_api:disk.write` | فایلونه اپلوډ کوي، folders جوړوي او فایلونه ړنګوي |
| `Access to information about Yandex.Disk` | disk کوټه او used space لولي |

که د `Yandex ID API` لاندې دا permissions هم ښکاره شي، اختیاري دي:

| د اجازې متن | سپارښتنه |
| --- | --- |
| `Access to username, first name and surname, gender` | اختیاري |
| `Access to email address` | اختیاري |

د اپلوډ، download، deletion او کوټه اصلي ځانګړنې تر ډېره پر همدې پورته څلورو `Yandex.Disk REST API` permissions ولاړې دي.

![تنظیم Yandex Disk permissions](../../image/upload/yandex/dataaccess配置软盘权限.png)

### 3 ګام: اپ اعتبارلیکونه کاپي کړئ

کله چې اپ جوړ شو، دا کاپي کړئ:

| د Yandex فیلډ | د ImgBed فیلډ |
| --- | --- |
| `Client ID` | `Client ID` |
| `Client Secret` | `Client Secret` |

![Record Client ID and Secret](../../image/upload/yandex/记录客户端id和secret.png)

### 4 ګام: د Yandex چینل ډک کړئ

په د اپلوډ تنظیمات کې `Yandex` وټاکئ او دا fields ډک کړئ:

| د ImgBed فیلډ | څه ولیکئ |
| --- | --- |
| د چینل نوم | داسې نوم چې وپېژندل شي، لکه `Main Yandex` |
| Client ID | د Yandex اپ `Client ID` |
| Client Secret | د Yandex اپ `Client Secret` |
| Refresh ټوکن | اوس یې تش پرېږدئ |
| اصلي ډایرکټري | اختیاري. اصلي یې `imgbed` دی. |

![Edit چینل config](../../image/upload/yandex/编辑配置渠道.png)

### 5 ګام: Refresh ټوکن واخلئ

1. په ImgBed کې `Get Token` کلیک کړئ.
2. هغه Yandex حساب ته ننوځئ وکړئ چې نښلول یې غواړئ.
3. د authorization غوښتنه اپrove کړئ.
4. کالبک page به `Refresh Token` ښکاره کړي.
5. هغه کاپي کړئ.
6. بېرته ImgBed ته راشئ او د `Refresh Token` فیلډ کې یې پیسټ کړئ.

![کاپي refresh ټوکن after authorization](../../image/upload/yandex/授权后复制刷新令牌.png)

### 6 ګام: چینل خوندي کړئ

کله چې ټول fields ډک شول، چینل خوندي کړئ.

## چټک بهیر

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

## ماخذونه

1. Register a Yandex اپ: https://yandex.com/dev/id/doc/en/register-client
2. Get an authorization code through URL: https://yandex.com/dev/id/doc/en/codes/code-url
3. Yandex OAuth ټوکن endpoint: https://yandex.com/dev/id/doc/en/tokens/token
