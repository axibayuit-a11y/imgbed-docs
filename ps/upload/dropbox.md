# د Dropbox Channel اضافه کول

## مخکې څه ته اړتیا لرئ

| اړتیا | ولې ورته اړتیا ده |
| --- | --- |
| Dropbox account | sign in او app authorize کولو لپاره |
| Dropbox app | د `App Key` او `App Secret` جوړولو لپاره |
| ستاسو ImgBed domain | د OAuth redirect URI لپاره |
| کافي Dropbox storage | د فایلونو اصلي storage ځای |

## د تنظیم پړاوونه

### 1 ګام: Dropbox App جوړ کړئ

1. د Dropbox App Console پرانیزئ:

```text
https://www.dropbox.com/developers/apps
```

2. نوی app جوړ کړئ.
3. د access type لپاره دا وټاکئ:

```text
App folder
```

4. app ته داسې نوم ورکړئ چې وپېژندل شي، لکه `imgbed-app`.
5. له جوړېدو وروسته د app details پاڼه پرانیزئ.

سپارښت شوی access type:

| Access Type | سپارښتنه |
| --- | --- |
| `App folder` | سپارښتنه کېږي. دا د ImgBed د فایل ساتلو له طریقې سره ښه برابر دی. |
| `Full Dropbox` | نه سپارښتل کېږي. ImgBed د ټول account access ته اړتیا نه لري. |

![Create Dropbox app](../../image/upload/dropbox/开发者创建应用.png)

### 2 ګام: Redirect URI اضافه کړئ

د Dropbox app details پاڼه کې د OAuth یا Redirect URI settings ومومئ او دا اضافه کړئ:

```text
https://your-domain.com/api/oauth/dropbox/callback
```

که admin panel له څو domainونو کاروئ، د هر domain لپاره ورته callback URL اضافه کړئ.

![Configure redirect URI](../../image/upload/dropbox/配置回调地址.png)

### 3 ګام: App Permissions تنظیم کړئ

`Permissions` tab پرانیزئ او لږ تر لږه دا scopes فعال کړئ:

| Scope | Required | موخه |
| --- | --- | --- |
| `account_info.read` | Required | د account او quota معلومات لولي |
| `files.metadata.read` | Required | د path check لپاره د فایل او folder metadata لولي |
| `files.metadata.write` | Required | folders جوړوي او metadata لیکي |
| `files.content.write` | Required | فایلونه upload کوي. که دا scope نه وي، `required scope 'files.content.write'` خطا راځي. |
| `files.content.read` | Recommended | download، preview او temporary file links ته اجازه ورکوي |

له scope ټاکلو وروسته د پاڼې په پای کې `Submit` کلیک کړئ.

![Add permissions](../../image/upload/dropbox/添加对应的权限.png)

مهم:

| حالت | څه وکړئ |
| --- | --- |
| scopes مو بدل کړل | token authorization flow بیا اجرا کړئ او نوی `Refresh Token` واخلئ. |
| بیا مو authorize نه کړل | زوړ token نوې permissions نه اخلي، نو upload ښايي لا هم ناکام شي. |

### 4 ګام: App Credentials copy کړئ

له Dropbox app page څخه دا دوه ارزښتونه وساتئ:

| Dropbox Field | ImgBed Field |
| --- | --- |
| `App key` | `App Key` |
| `App secret` | `App Secret` |

### 5 ګام: د Dropbox Channel ډک کړئ

په Upload Settings کې `Dropbox` وټاکئ او دا fields ډک کړئ:

| ImgBed Field | څه ولیکئ |
| --- | --- |
| Channel name | داسې نوم چې وپېژندل شي، لکه `Main Dropbox` |
| App Key | د Dropbox `App key` |
| App Secret | د Dropbox `App secret` |
| Refresh Token | اوس یې تش پرېږدئ |
| Root directory | اختیاري. Default یې `imgbed` دی. |
| Note | اختیاري |

![Get token](../../image/upload/dropbox/获取令牌.png)

### 6 ګام: Refresh Token واخلئ

1. په ImgBed کې `Get Token` کلیک کړئ.
2. هغه Dropbox account ته sign in وکړئ چې نښلول یې غواړئ.
3. د authorization غوښتنه approve کړئ.
4. callback page به `Refresh Token` ښکاره کړي.
5. هغه copy کړئ.
6. بېرته ImgBed ته راشئ او د `Refresh Token` field کې یې paste کړئ.

![Copy token](../../image/upload/dropbox/复制令牌.png)

## څنګه یې verify کړئ

| Check | Expected Result |
| --- | --- |
| Channel card | د save وروسته Dropbox channel ښکاره کېږي. |
| Channel switch | channel فعالېدای شي. |
| Token saved | detail page ښيي چې `Refresh Token` خوندي شوی دی. |
| Upload test | test image د Dropbox app folder کې ښکاري. |

که quota limits فعال وي، quota query کلیک کړئ. له بریالۍ query وروسته channel card used space، total space او last update time ښيي.

![Quota query success](../../image/upload/dropbox/查询额度成功.png)

## ستونزې او حل

| ستونزه | حل |
| --- | --- |
| ImgBed وايي configuration نیمګړی دی | وګورئ چې `App Key`، `App Secret` او `Refresh Token` ټول ډک دي. |
| Authorization بریالی کېږي خو `Refresh Token` نه ښکاري | `Get Token` بیا کلیک کړئ او ډاډه شئ چې offline authorization flow کارېږي. |
| Upload د `required scope 'files.content.write'` سره ناکامېږي | `files.content.write` فعال کړئ، `Submit` کلیک کړئ، بیا نوی `Refresh Token` واخلئ. |
| Callback ناکامېږي | ډاډ ترلاسه کړئ چې redirect URI دا دی: `https://your-domain.com/api/oauth/dropbox/callback`. |
| فایلونه نه موندل کېږي | وګورئ Dropbox app په `App folder` mode کې جوړ شوی دی. |

## چټک بهیر

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

## ماخذونه

1. Dropbox App Console: https://www.dropbox.com/developers/apps
2. Dropbox OAuth Guide: https://developers.dropbox.com/oauth-guide
3. Dropbox Developer Guide: https://www.dropbox.com/developers/reference/developer-guide
