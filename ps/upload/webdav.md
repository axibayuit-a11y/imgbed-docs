# د WebDAV Channel اضافه کول

## کله مناسب دی

WebDAV channel هغه وخت وکاروئ چې:

- NAS، cloud drive یا object storage service لرئ چې WebDAV endpoint ورکوي.
- غواړئ uploaded images په خپل WebDAV directory کې وساتئ.
- غواړئ credentials د frontend پر ځای په D1 `upload_channels` table کې خوندي شي.

## د پیل مخکې اړتیاوې

| اړتیا | موخه |
| --- | --- |
| WebDAV Endpoint | server-side WebDAV URL، لکه `https://nas.example.com/dav`. |
| Username | WebDAV service ته د sign in لپاره. |
| Password | WebDAV service ته د sign in لپاره. |
| Authentication mode | default `Basic` دی. `Digest` یا auto negotiation یوازې هغه وخت وکاروئ چې server یې وغواړي. |
| Storage directory | هغه directory چې files پکې ساتل کېږي. default `imgbed`. |

## چېرته یې اضافه کړو

1. System Settings پرانیزئ.
2. Upload Settings ته ولاړ شئ.
3. په پورته ښي لوري کې Add Channel کلیک کړئ.
4. `WebDAV` وټاکئ.

## Field Reference

| Field | څه کوي | Required |
| --- | --- | --- |
| Channel name | د دې WebDAV channel لپاره نوم، لکه `koofr` یا `nas`. | Yes |
| Endpoint | بشپړ WebDAV endpoint د `https://` سره. | Yes |
| Username | WebDAV login username. | Yes |
| Password | WebDAV login password. | Yes |
| Authentication mode | عموماً `Basic`; که server digest authentication غواړي، `Digest` وکاروئ. | Yes |
| Storage directory | هغه directory چې files پکې ساتل کېږي. default `imgbed`. | No |

## مثال: fie.nl.tab.digital

### 1. App Password جوړ کړئ

د account security settings پرانیزئ، application passwords ومومئ او app password نوی جوړ کړئ.

![Create an app password](../../image/upload/webdav/创建应用密码.png)

له جوړېدو وروسته app password copy او خوندي کړئ. عموماً یوازې یو ځل ښودل کېږي.

![Save the new app password](../../image/upload/webdav/记住新应用程序密码.png)

### 2. په ImgBed کې WebDAV Configuration ډک کړئ

ImgBed ته بېرته ولاړ شئ او WebDAV channel اضافه کړئ:

| UI Field | Value |
| --- | --- |
| Endpoint | هغه WebDAV URL چې `https://fie.nl.tab.digital/` یې درکوي. |
| Username | ستاسې WebDAV username. |
| Password | همدا app password چې تازه مو جوړ کړی. |
| Authentication mode | په ډېرو حالتونو کې له `Basic` څخه پیل کړئ. |
| Storage directory | default `imgbed`; custom directory هم کارولای شئ. |

![Fill in the configuration](../../image/upload/webdav/填写配置.png)

## د لویو Files د Upload چلند

WebDAV channel اوس real session-based chunked upload کاروي.

کوچني files د یو complete file په توګه upload کېږي. له 64 MiB څخه لوی files په اتومات ډول د شاوخوا 10 MiB chunks ته وېشل کېږي او remote chunk directory ته upload کېږي.

WebDAV service ته اړتیا نشته چې `partial update` یا offset-based writes support کړي. ImgBed chunks په remote server کې یو لوی file ته merge نه کوي. پر ځای یې chunk manifest ساتي او د file request پر وخت chunks په ترتیب لولي.

| File Size | Upload Method | Remote Storage Layout |
| --- | --- | --- |
| 64 MiB یا کم | Normal upload | یو complete file |
| له 64 MiB څخه لوی | Real session chunked upload | chunk directory چې څو chunk files لري |

chunk directory یوازې remote storage layout اغېزمنوي. په ImgBed کې file URL نه بدلېږي. users لا هم د اصلي `/file/...` link له لارې file access کوي.

## Setup Steps

1. Upload Settings پرانیزئ.
2. Add Channel کلیک کړئ.
3. `WebDAV` وټاکئ.
4. یو پېژندل کېدونکی channel name ولیکئ، لکه `koofr`.
5. WebDAV endpoint ولیکئ، لکه `https://app.koofr.net/dav/Koofr`.
6. username او password ولیکئ.
7. authentication mode عموماً `Basic` پرېږدئ.
8. storage directory `imgbed` پرېږدئ، یا خپل directory ولیکئ.
9. Save کلیک کړئ.
10. له save وروسته channel card وګورئ، که capacity query available وي اجرا یې کړئ، او test file upload کړئ.

## څنګه یې Verify کړو

| Check | د verify طریقه |
| --- | --- |
| Channel card appears | له Save وروسته باید WebDAV channel card په Upload Settings کې ښکاره شي. |
| Channel is enabled | د card په پورته ښي لوري کې switch باید on پاتې شي. |
| Credentials are saved | detail view باید Endpoint، username، authentication mode او storage directory وښيي. |
| Small file upload works | test image upload کړئ او وګورئ چې file په WebDAV directory کې ښکاري. |
| Large file rule works | له 64 MiB څخه لوی files chunked upload کاروي او remote chunk directory جوړوي. |
| Capacity query works | که server capacity information support کړي، query به used او total capacity وښيي. |

![Quota query succeeded](../../image/upload/webdav/查询额度成功.png)

## FAQ

### ولې لوی WebDAV files chunk directory جوړوي؟

دا د لویو files لپاره اوسنی storage method دی.

له 64 MiB څخه لوی files په remote side کې یو لوی file ته merge نه کېږي. د chunk directory په بڼه ساتل کېږي. ImgBed chunk manifest record کوي او complete content د chunks په ترتیب لوستلو سره برابروي.

### که large file upload fail شي، لومړی څه وګورم؟

Endpoint، username، password او storage directory لومړی وګورئ. بیا confirm کړئ چې WebDAV service directory creation، file writing او file reading allow کوي.

که capacity query fail شي خو small file upload کار کوي، ښايي server capacity reporting support نه کړي یا یې محدود کړی وي. دا لازماً د upload unavailable معنا نه لري.

### کوم authentication mode وکاروم؟

له `Basic` څخه پیل کړئ.

که server صریحاً digest authentication غواړي، `Digest` وکاروئ.

که ډاډه نه یاست، automatic negotiation وکاروئ.

## Quick Checklist

```text
WebDAV endpoint, username او password چمتو کړئ
-> Upload Settings پرانیزئ
-> Add Channel
-> WebDAV وټاکئ
-> Endpoint / username / password ولیکئ
-> authentication mode default Basic پرېږدئ
-> storage directory default imgbed پرېږدئ
-> Save
-> capacity query
-> test file upload
```
