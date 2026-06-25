# د WebDAV چینل اضافه کول

## کله مناسب دی

WebDAV چینل هغه وخت وکاروئ چې:

- NAS، cloud drive یا object زېرمه خدمت لرئ چې WebDAV endpoint ورکوي.
- غواړئ اپلوډ شوي انځورونه په خپل WebDAV directory کې وساتئ.
- غواړئ اعتبارلیکونه د فرنټ‌اېنډ پر ځای په D1 `upload_channels` table کې خوندي شي.

## د پیل مخکې اړتیاوې

| اړتیا | موخه |
| --- | --- |
| WebDAV Endpoint | سرور-side WebDAV URL، لکه `https://nas.example.com/dav`. |
| کارن نوم | WebDAV خدمت ته د ننوځئ لپاره. |
| پټنوم | WebDAV خدمت ته د ننوځئ لپاره. |
| د تصدیق حالت | اصلي `Basic` دی. `Digest` یا auto negotiation یوازې هغه وخت وکاروئ چې سرور یې وغواړي. |
| د زېرمه کولو ډایرکټري | هغه directory چې فایلونه پکې ساتل کېږي. اصلي `imgbed`. |

## چېرته یې اضافه کړو

1. د سیسټم تنظیمات پرانیزئ.
2. د اپلوډ تنظیمات ته ولاړ شئ.
3. په پورته ښي لوري کې چینل اضافه کړئ کلیک کړئ.
4. `WebDAV` وټاکئ.

## د فیلډونو لارښود

| فیلډ | څه کوي | اړین |
| --- | --- | --- |
| د چینل نوم | د دې WebDAV چینل لپاره نوم، لکه `koofr` یا `nas`. | Yes |
| Endpoint | بشپړ WebDAV endpoint د `https://` سره. | Yes |
| کارن نوم | WebDAV login username. | Yes |
| پټنوم | WebDAV login password. | Yes |
| د تصدیق حالت | عموماً `Basic`; که سرور digest authentication غواړي، `Digest` وکاروئ. | Yes |
| د زېرمه کولو ډایرکټري | هغه directory چې فایلونه پکې ساتل کېږي. اصلي `imgbed`. | No |

## مثال: fie.nl.tab.digital

### 1. اپ پټنوم جوړ کړئ

د حساب security settings پرانیزئ، اپlication passwords ومومئ او اپ password نوی جوړ کړئ.

![Create an اپ password](../../image/upload/webdav/创建应用密码.png)

له جوړېدو وروسته اپ password کاپي او خوندي کړئ. عموماً یوازې یو ځل ښودل کېږي.

![خوندي the new اپ password](../../image/upload/webdav/记住新应用程序密码.png)

### 2. په ImgBed کې WebDAV تنظیمات ډک کړئ

ImgBed ته بېرته ولاړ شئ او WebDAV چینل اضافه کړئ:

| د UI فیلډ | ارزښت |
| --- | --- |
| Endpoint | هغه WebDAV URL چې `https://fie.nl.tab.digital/` یې درکوي. |
| کارن نوم | ستاسې WebDAV username. |
| پټنوم | همدا اپ password چې تازه مو جوړ کړی. |
| د تصدیق حالت | په ډېرو حالتونو کې له `Basic` څخه پیل کړئ. |
| د زېرمه کولو ډایرکټري | اصلي `imgbed`; custom directory هم کارولای شئ. |

![Fill in the تنظیمات](../../image/upload/webdav/填写配置.png)

## د لویو فایلونه د اپلوډ چلند

WebDAV چینل اوس real session-based chunked اپلوډ کاروي.

کوچني فایلونه د یو complete فایل په توګه اپلوډ کېږي. له 64 MiB څخه لوی فایلونه په اتومات ډول د شاوخوا 10 MiB chunks ته وېشل کېږي او remote chunk directory ته اپلوډ کېږي.

WebDAV خدمت ته اړتیا نشته چې `partial update` یا offset-based writes support کړي. ImgBed chunks په remote سرور کې یو لوی فایل ته merge نه کوي. پر ځای یې chunk manifest ساتي او د فایل request پر وخت chunks په ترتیب لولي.

| فایل Size | اپلوډ Method | Remote زېرمه Layout |
| --- | --- | --- |
| 64 MiB یا کم | Normal اپلوډ | یو complete فایل |
| له 64 MiB څخه لوی | Real session chunked اپلوډ | chunk directory چې څو chunk فایلونه لري |

chunk directory یوازې remote زېرمه layout اغېزمنوي. په ImgBed کې فایل URL نه بدلېږي. users لا هم د اصلي `/file/...` link له لارې فایل لاسرسی کوي.

## د تنظیم ګامونه

1. د اپلوډ تنظیمات پرانیزئ.
2. چینل اضافه کړئ کلیک کړئ.
3. `WebDAV` وټاکئ.
4. یو پېژندل کېدونکی چینل name ولیکئ، لکه `koofr`.
5. WebDAV endpoint ولیکئ، لکه `https://app.koofr.net/dav/Koofr`.
6. username او password ولیکئ.
7. authentication mode عموماً `Basic` پرېږدئ.
8. زېرمه directory `imgbed` پرېږدئ، یا خپل directory ولیکئ.
9. خوندي کلیک کړئ.
10. له خوندي وروسته چینل card وګورئ، که capacity query available وي اجرا یې کړئ، او test فایل اپلوډ کړئ.

## څنګه یې Verify کړو

| کتنه | د verify طریقه |
| --- | --- |
| چینل card اپears | له خوندي وروسته باید WebDAV چینل card په د اپلوډ تنظیمات کې ښکاره شي. |
| چینل is enabled | د card په پورته ښي لوري کې switch باید on پاتې شي. |
| اعتبارلیکونه are خونديd | detail view باید Endpoint، username، authentication mode او زېرمه directory وښيي. |
| Small فایل اپلوډ works | test image اپلوډ کړئ او وګورئ چې فایل په WebDAV directory کې ښکاري. |
| Large فایل rule works | له 64 MiB څخه لوی فایلونه chunked اپلوډ کاروي او remote chunk directory جوړوي. |
| Capacity query works | که سرور capacity information support کړي، query به used او total capacity وښيي. |

![Quota query succeeded](../../image/upload/webdav/查询额度成功.png)

## FAQ

### ولې لوی WebDAV فایلونه chunk directory جوړوي؟

دا د لویو فایلونه لپاره اوسنی زېرمه method دی.

له 64 MiB څخه لوی فایلونه په remote side کې یو لوی فایل ته merge نه کېږي. د chunk directory په بڼه ساتل کېږي. ImgBed chunk manifest record کوي او complete content د chunks په ترتیب لوستلو سره برابروي.

### که large فایل اپلوډ fail شي، لومړی څه وګورم؟

Endpoint، username، password او زېرمه directory لومړی وګورئ. بیا confirm کړئ چې WebDAV خدمت directory creation، فایل writing او فایل reading allow کوي.

که capacity query fail شي خو small فایل اپلوډ کار کوي، ښايي سرور capacity reporting support نه کړي یا یې محدود کړی وي. دا لازماً د اپلوډ unavailable معنا نه لري.

### کوم authentication mode وکاروم؟

له `Basic` څخه پیل کړئ.

که سرور صریحاً digest authentication غواړي، `Digest` وکاروئ.

که ډاډه نه یاست، automatic negotiation وکاروئ.

## چټک چک‌لېست

```text
Prepare WebDAV endpoint, username, and password
-> Open Upload Settings
-> Add Channel
-> Select WebDAV
-> Enter Endpoint / username / password
-> Keep authentication mode as Basic by default
-> Keep storage directory as imgbed by default
-> Save
-> Query capacity
-> Upload a test file
```
