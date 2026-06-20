# د Yandex Channel اضافه کول

## مخکې څه ته اړتیا لرئ

| اړتیا | ولې ورته اړتیا ده |
| --- | --- |
| Yandex account | sign in او Yandex Disk authorize کولو لپاره |
| Yandex OAuth app | د `Client ID` او `Client Secret` جوړولو لپاره |
| ستاسو ImgBed domain | د OAuth redirect URI لپاره |
| کافي Yandex Disk storage | د فایلونو اصلي storage ځای |

## د تنظیم پړاوونه

### 1 ګام: Yandex OAuth App جوړ کړئ

1. د Yandex OAuth app جوړولو پاڼه پرانیزئ:

```text
https://oauth.yandex.com/client/new
```

2. که sign in ته ولېږدول شوئ، لومړی خپل Yandex account ته sign in وکړئ.
3. نوی app جوړ کړئ.
4. app ته داسې نوم ورکړئ چې وپېژندل شي، لکه `imgbed-yandex`.
5. د callback یا redirect URL settings ومومئ.
6. دا ولیکئ:

```text
https://your-domain.com/api/oauth/yandex/callback
```

### 2 ګام: Permissions تایید کړئ

د اوسني ImgBed Yandex integration لپاره، د `Yandex.Disk REST API` لاندې دا څلور permissions وساتئ:

| Permission | موخه |
| --- | --- |
| `cloud_api:disk.app_folder` | ImgBed ته اجازه ورکوي چې فایلونه په app folder کې وساتي |
| `cloud_api:disk.read` | فایلونه او download links لولي |
| `cloud_api:disk.write` | فایلونه upload کوي، folders جوړوي او فایلونه ړنګوي |
| `Access to information about Yandex.Disk` | disk quota او used space لولي |

که د `Yandex ID API` لاندې دا permissions هم ښکاره شي، اختیاري دي:

| Permission Text | سپارښتنه |
| --- | --- |
| `Access to username, first name and surname, gender` | اختیاري |
| `Access to email address` | اختیاري |

د upload، download، deletion او quota اصلي ځانګړنې تر ډېره پر همدې پورته څلورو `Yandex.Disk REST API` permissions ولاړې دي.

![Configure Yandex Disk permissions](../../image/upload/yandex/dataaccess配置软盘权限.png)

### 3 ګام: App Credentials copy کړئ

کله چې app جوړ شو، دا copy کړئ:

| Yandex Field | ImgBed Field |
| --- | --- |
| `Client ID` | `Client ID` |
| `Client Secret` | `Client Secret` |

![Record Client ID and Secret](../../image/upload/yandex/记录客户端id和secret.png)

### 4 ګام: د Yandex Channel ډک کړئ

په Upload Settings کې `Yandex` وټاکئ او دا fields ډک کړئ:

| ImgBed Field | څه ولیکئ |
| --- | --- |
| Channel name | داسې نوم چې وپېژندل شي، لکه `Main Yandex` |
| Client ID | د Yandex app `Client ID` |
| Client Secret | د Yandex app `Client Secret` |
| Refresh Token | اوس یې تش پرېږدئ |
| Root directory | اختیاري. Default یې `imgbed` دی. |

![Edit channel config](../../image/upload/yandex/编辑配置渠道.png)

### 5 ګام: Refresh Token واخلئ

1. په ImgBed کې `Get Token` کلیک کړئ.
2. هغه Yandex account ته sign in وکړئ چې نښلول یې غواړئ.
3. د authorization غوښتنه approve کړئ.
4. callback page به `Refresh Token` ښکاره کړي.
5. هغه copy کړئ.
6. بېرته ImgBed ته راشئ او د `Refresh Token` field کې یې paste کړئ.

![Copy refresh token after authorization](../../image/upload/yandex/授权后复制刷新令牌.png)

### 6 ګام: Channel خوندي کړئ

کله چې ټول fields ډک شول، channel save کړئ.

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

1. Register a Yandex app: https://yandex.com/dev/id/doc/en/register-client
2. Get an authorization code through URL: https://yandex.com/dev/id/doc/en/codes/code-url
3. Yandex OAuth token endpoint: https://yandex.com/dev/id/doc/en/tokens/token
