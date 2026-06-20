# د pCloud Channel اضافه کول

## د چا لپاره ښه دی

- pCloud account لرئ او غواړئ ImgBed images په pCloud کې وساتي.
- د channel credentials په توګه د pCloud account email او password کارول درته منل شوي دي.

## مخکې څه ته اړتیا لرئ

| اړتیا | ولې ورته اړتیا ده |
| --- | --- |
| د pCloud account email | pCloud API ته د sign in لپاره |
| pCloud password | pCloud API ته د sign in لپاره |
| API host | Default یې `api.pcloud.com` دی. EU accounts کولای شي `eapi.pcloud.com` وکاروي. |
| Storage directory | فایلونه هلته ساتل کېږي. Default یې `imgbed` دی. |

## چېرته یې اضافه کړئ

1. System Settings پرانیزئ.
2. Upload Settings پرانیزئ.
3. په ښي پورتني کونج کې `Add Channel` کلیک کړئ.
4. `pCloud` وټاکئ.

## د Field لارښود

| Field | موخه | Required |
| --- | --- | --- |
| Channel name | دا pCloud channel پېژندل کېږي، د بېلګې په توګه `Personal pCloud` | Yes |
| Account email | ستاسو د pCloud login email | Yes |
| Password | ستاسو pCloud password | Yes |
| API host | د pCloud API host. Default یې `api.pcloud.com` دی. | No |
| Storage directory | د فایلونو د ساتلو directory. Default یې `imgbed` دی. | No |

د خپل account region له مخې API host وټاکئ:

| Account Region | API Host |
| --- | --- |
| Default / US | `api.pcloud.com` |
| Europe | `eapi.pcloud.com` |

## د تنظیم پړاوونه

1. Upload Settings پرانیزئ.
2. `Add Channel` کلیک کړئ.
3. `pCloud` وټاکئ.
4. داسې channel name ولیکئ چې وپېژندل شي.
5. د خپل pCloud account email ولیکئ.
6. خپل pCloud password ولیکئ.
7. API host پر `api.pcloud.com` پرېږدئ، یا د EU accounts لپاره `eapi.pcloud.com` وکاروئ.
8. storage directory پر `imgbed` پرېږدئ، یا یې خپلې خوښې folder ته بدل کړئ.
9. channel save کړئ.

![Configure channel](../../image/upload/pcloud/配置渠道.png)

## څنګه یې verify کړئ

| Check | Expected Result |
| --- | --- |
| Channel card | د save وروسته pCloud channel card ښکاره کېږي. |
| Channel switch | د card switch فعال پاتې کېږي. |
| Email display | card نښلول شوی pCloud email ښيي. |
| Quota query | له بریالۍ query وروسته used او total capacity ښکاره کېږي. |
| Upload test | test image په ټاکل شوي pCloud storage directory کې ښکاري. |

![Quota query success](../../image/upload/pcloud/查询额度成功.png)

## ستونزې او حل

### ولې OAuth2 نه؟

pCloud OAuth2 عموما په default ډول self-service نه دی. باید pCloud ته email وکړئ او ترې وغواړئ چې دا درته enable کړي.

د pCloud اوسنی OAuth2 flow هم هغه short-lived upload link workflow نه ملاتړوي چې ImgBed ورته اړتیا لري، نو دا channel د account email او password login کاروي.

### کوم API Host وکاروم؟

Default:

```text
api.pcloud.com
```

د EU accounts لپاره:

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
