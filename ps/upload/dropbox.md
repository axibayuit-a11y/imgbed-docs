# د Dropbox چینل اضافه کول

## مخکې څه ته اړتیا لرئ

| اړتیا | ولې ورته اړتیا ده |
| --- | --- |
| Dropbox حساب | ننوځئ او اپ authorize کولو لپاره |
| Dropbox اپ | د `App Key` او `App Secret` جوړولو لپاره |
| ستاسو ImgBed ډومېن | د OAuth ریډایرکټ URI لپاره |
| کافي Dropbox زېرمه | د فایلونو اصلي زېرمه ځای |

## د تنظیم پړاوونه

### 1 ګام: Dropbox اپ جوړ کړئ

1. د Dropbox اپ Console پرانیزئ:

```text
https://www.dropbox.com/developers/apps
```

2. نوی اپ جوړ کړئ.
3. د لاسرسی type لپاره دا وټاکئ:

```text
App folder
```

4. اپ ته داسې نوم ورکړئ چې وپېژندل شي، لکه `imgbed-app`.
5. له جوړېدو وروسته د اپ details پاڼه پرانیزئ.

سپارښت شوی لاسرسی type:

| لاسرسی Type | سپارښتنه |
| --- | --- |
| `App folder` | سپارښتنه کېږي. دا د ImgBed د فایل ساتلو له طریقې سره ښه برابر دی. |
| `Full Dropbox` | نه سپارښتل کېږي. ImgBed د ټول حساب لاسرسی ته اړتیا نه لري. |

![Create Dropbox اپ](../../image/upload/dropbox/开发者创建应用.png)

### 2 ګام: Redirect URI اضافه کړئ

د Dropbox اپ details پاڼه کې د OAuth یا Redirect URI settings ومومئ او دا اضافه کړئ:

```text
https://your-domain.com/api/oauth/dropbox/callback
```

که admin panel له څو ډومېنونو کاروئ، د هر ډومېن لپاره ورته کالبک URL اضافه کړئ.

![تنظیم ریډایرکټ URI](../../image/upload/dropbox/配置回调地址.png)

### 3 ګام: اپ اجازهs تنظیم کړئ

`Permissions` tab پرانیزئ او لږ تر لږه دا سکوپونه فعال کړئ:

| Scope | اړین | موخه |
| --- | --- | --- |
| `account_info.read` | اړین | د حساب او کوټه معلومات لولي |
| `files.metadata.read` | اړین | د لارې کتنې لپاره د فایل او فولډر metadata لولي |
| `files.metadata.write` | اړین | folders جوړوي او metadata لیکي |
| `files.content.write` | اړین | فایلونه اپلوډ کوي. که دا سکوپ نه وي، `required scope 'files.content.write'` خطا راځي. |
| `files.content.read` | سپارښتنه کېږي | download، preview او temporary فایل links ته اجازه ورکوي |

له سکوپ ټاکلو وروسته د پاڼې په پای کې `Submit` کلیک کړئ.

![Add permissions](../../image/upload/dropbox/添加对应的权限.png)

مهم:

| حالت | څه وکړئ |
| --- | --- |
| سکوپونه مو بدل کړل | ټوکن authorization flow بیا اجرا کړئ او نوی `Refresh Token` واخلئ. |
| بیا مو authorize نه کړل | زوړ ټوکن نوې permissions نه اخلي، نو اپلوډ ښايي لا هم ناکام شي. |

### 4 ګام: اپ اعتبارلیکونه کاپي کړئ

له Dropbox اپ page څخه دا دوه ارزښتونه وساتئ:

| د Dropbox فیلډ | د ImgBed فیلډ |
| --- | --- |
| `App key` | `App Key` |
| `App secret` | `App Secret` |

### 5 ګام: د Dropbox چینل ډک کړئ

په د اپلوډ تنظیمات کې `Dropbox` وټاکئ او دا fields ډک کړئ:

| د ImgBed فیلډ | څه ولیکئ |
| --- | --- |
| د چینل نوم | داسې نوم چې وپېژندل شي، لکه `Main Dropbox` |
| اپ Key | د Dropbox `App key` |
| اپ Secret | د Dropbox `App secret` |
| Refresh ټوکن | اوس یې تش پرېږدئ |
| اصلي ډایرکټري | اختیاري. اصلي یې `imgbed` دی. |
| Note | اختیاري |

![Get ټوکن](../../image/upload/dropbox/获取令牌.png)

### 6 ګام: Refresh ټوکن واخلئ

1. په ImgBed کې `Get Token` کلیک کړئ.
2. هغه Dropbox حساب ته ننوځئ وکړئ چې نښلول یې غواړئ.
3. د authorization غوښتنه اپrove کړئ.
4. کالبک page به `Refresh Token` ښکاره کړي.
5. هغه کاپي کړئ.
6. بېرته ImgBed ته راشئ او د `Refresh Token` فیلډ کې یې پیسټ کړئ.

![کاپي ټوکن](../../image/upload/dropbox/复制令牌.png)

## څنګه یې verify کړئ

| کتنه | تمه کېدونکې پایله |
| --- | --- |
| چینل card | د خوندي وروسته Dropbox چینل ښکاره کېږي. |
| چینل switch | چینل فعالېدای شي. |
| ټوکن خونديd | detail page ښيي چې `Refresh Token` خوندي شوی دی. |
| اپلوډ test | test image د Dropbox اپ folder کې ښکاري. |

که کوټه limits فعال وي، کوټه query کلیک کړئ. له بریالۍ query وروسته چینل card used space، total space او last update time ښيي.

![Quota query success](../../image/upload/dropbox/查询额度成功.png)

## ستونزې او حل

| ستونزه | حل |
| --- | --- |
| ImgBed وايي تنظیمات نیمګړی دی | وګورئ چې `App Key`، `App Secret` او `Refresh Token` ټول ډک دي. |
| Authorization بریالی کېږي خو `Refresh Token` نه ښکاري | `Get Token` بیا کلیک کړئ او ډاډه شئ چې offline authorization flow کارېږي. |
| اپلوډ د `required scope 'files.content.write'` سره ناکامېږي | `files.content.write` فعال کړئ، `Submit` کلیک کړئ، بیا نوی `Refresh Token` واخلئ. |
| Callback ناکامېږي | ډاډ ترلاسه کړئ چې ریډایرکټ URI دا دی: `https://your-domain.com/api/oauth/dropbox/callback`. |
| فایلونه نه موندل کېږي | وګورئ Dropbox اپ په `App folder` mode کې جوړ شوی دی. |

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

1. Dropbox اپ Console: https://www.dropbox.com/developers/apps
2. Dropbox OAuth Guide: https://developers.dropbox.com/oauth-guide
3. Dropbox Developer Guide: https://www.dropbox.com/developers/reference/developer-guide
