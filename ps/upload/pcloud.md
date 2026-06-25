# د pCloud چینل اضافه کول

## د چا لپاره ښه دی

- pCloud حساب لرئ او غواړئ ImgBed انځورونه په pCloud کې وساتي.
- د چینل اعتبارلیکونه په توګه د pCloud حساب email او password کارول درته منل شوي دي.

## مخکې څه ته اړتیا لرئ

| اړتیا | ولې ورته اړتیا ده |
| --- | --- |
| د pCloud حساب email | pCloud API ته د ننوځئ لپاره |
| pCloud password | pCloud API ته د ننوځئ لپاره |
| API host | اصلي یې `api.pcloud.com` دی. EU حسابs کولای شي `eapi.pcloud.com` وکاروي. |
| د زېرمه کولو ډایرکټري | فایلونه هلته ساتل کېږي. اصلي یې `imgbed` دی. |

## چېرته یې اضافه کړئ

1. د سیسټم تنظیمات پرانیزئ.
2. د اپلوډ تنظیمات پرانیزئ.
3. په ښي پورتني کونج کې `Add Channel` کلیک کړئ.
4. `pCloud` وټاکئ.

## د فیلډ لارښود

| فیلډ | موخه | اړین |
| --- | --- | --- |
| د چینل نوم | دا pCloud چینل پېژندل کېږي، د بېلګې په توګه `Personal pCloud` | Yes |
| د حساب ایمېل | ستاسو د pCloud login email | Yes |
| پټنوم | ستاسو pCloud password | Yes |
| API host | د pCloud API host. اصلي یې `api.pcloud.com` دی. | No |
| د زېرمه کولو ډایرکټري | د فایلونو د ساتلو directory. اصلي یې `imgbed` دی. | No |

د خپل حساب region له مخې API host وټاکئ:

| حساب Region | API Host |
| --- | --- |
| اصلي / US | `api.pcloud.com` |
| Europe | `eapi.pcloud.com` |

## د تنظیم پړاوونه

1. د اپلوډ تنظیمات پرانیزئ.
2. `Add Channel` کلیک کړئ.
3. `pCloud` وټاکئ.
4. داسې چینل name ولیکئ چې وپېژندل شي.
5. د خپل pCloud حساب email ولیکئ.
6. خپل pCloud password ولیکئ.
7. API host پر `api.pcloud.com` پرېږدئ، یا د EU حسابs لپاره `eapi.pcloud.com` وکاروئ.
8. زېرمه directory پر `imgbed` پرېږدئ، یا یې خپلې خوښې folder ته بدل کړئ.
9. چینل خوندي کړئ.

![تنظیم چینل](../../image/upload/pcloud/配置渠道.png)

## څنګه یې verify کړئ

| کتنه | تمه کېدونکې پایله |
| --- | --- |
| چینل card | د خوندي وروسته pCloud چینل card ښکاره کېږي. |
| چینل switch | د card switch فعال پاتې کېږي. |
| Email display | card نښلول شوی pCloud email ښيي. |
| Quota query | له بریالۍ query وروسته used او total capacity ښکاره کېږي. |
| اپلوډ test | test image په ټاکل شوي pCloud زېرمه directory کې ښکاري. |

![Quota query success](../../image/upload/pcloud/查询额度成功.png)

## ستونزې او حل

### ولې OAuth2 نه؟

pCloud OAuth2 عموما په اصلي ډول self-خدمت نه دی. باید pCloud ته email وکړئ او ترې وغواړئ چې دا درته enable کړي.

د pCloud اوسنی OAuth2 flow هم هغه short-lived اپلوډ link workflow نه ملاتړوي چې ImgBed ورته اړتیا لري، نو دا چینل د حساب email او password login کاروي.

### کوم API Host وکاروم؟

اصلي:

```text
api.pcloud.com
```

د EU حسابs لپاره:

```text
eapi.pcloud.com
```

## چټک بهیر

```text
Prepare your pCloud email and password
-> Open Upload Settings
-> Add Channel
-> Choose pCloud
-> Fill channel name / email / password
-> Keep API host as api.pcloud.com unless your account is in Europe
-> Keep storage directory as imgbed unless you need another folder
-> Save
-> Query quota
-> Upload a test image
```
