# IP Geolocation او User Management

IP geolocation د uploader records، login devices او ورته logs کې IP addresses تقریبي locations ته اړوي.

له تنظیم وروسته، admin panel د upload او access origins روښانه ښودلای شي. User Management هم تاسې ته اجازه درکوي چې د suspicious IP addresses upload access block یا restore کړئ.

## چېرته یې تنظیم کړئ

دا پرانیزئ:

```text
System Settings -> Other Settings -> IP Geolocation
```

![IP geolocation](../../image/other/ip定位/ip定位.png)

## شته Settings

نوی IP geolocation flow د یوې map service پر ځای څو sources ملاتړ کوي.

| Setting | موخه |
| --- | --- |
| IP geolocation language | display language ټاکي، لکه English، Simplified Chinese، Japanese، French او نور. |
| MaxMind Account ID | د MaxMind GeoLite Web Service لپاره MaxMind account ID. |
| MaxMind License Key | MaxMind License Key. |
| Tencent Map Key | Tencent Location Service key. د Chinese addresses او mainland China IPs لپاره ګټور دی. |
| ipapi Key | APILayer ipapi key. multilingual IP geolocation ملاتړ کوي. |

یوازې هغه services ډک کړئ چې اړتیا ورته لرئ. هر field تنظیمول اړین نه دي.

که key ورنه کړل شي، ImgBed لا هم built-in free sources هڅوي، خو stability، language support او precision ښايي له هغه service کم وي چې خپله یې configure کوئ.

## سپارښتل شوي انتخابونه

که تاسې عموما Chinese addresses ته اړتیا لرئ:

1. IP geolocation language پر Simplified Chinese وټاکئ.
2. Tencent Map Key تنظیم کړئ.
3. MaxMind یا ipapi د fallback sources په توګه optionally اضافه کړئ.

که English یا multilingual addresses ته اړتیا لرئ:

1. هغه language وټاکئ چې اړتیا ورته لرئ.
2. MaxMind Account ID او License Key تنظیم کړئ.
3. که ښه multilingual results غواړئ، ipapi Key اضافه کړئ.

## MaxMind Setup

MaxMind دې ته اړتیا لري:

```text
MaxMind Account ID
MaxMind License Key
```

account ID په MaxMind dashboard کې ومومئ او License Key د License Keys page څخه generate کړئ.

![MaxMind key config](../../image/other/ip定位/maxmind的key配置.png)

له generation وروسته، Account ID او License Key په ImgBed کې paste او save کړئ.

د MaxMind free plan د ورځني استعمال لپاره مناسب دی، خو request limits لري. که quota واوړي، ImgBed نور available sources هڅوي.

## ipapi Setup

ipapi د APILayer API Key کاروي.

ipapi console پرانیزئ او هلته ښکاره API Key copy کړئ.

![ipapi config](../../image/other/ip定位/ipapi配置.png)

په ImgBed کې یې د `ipapi Key` field ته paste او save کړئ.

ipapi multilingual IP geolocation ملاتړ کوي او هغه وخت ګټور دی چې addresses په ټاکلې language کې ښودل غواړئ. free plan یې هم request limits لري. که quota خلاصه شي، ImgBed نور available sources هڅوي.

## Tencent Map Key Setup

Tencent Map Key د Chinese addresses لپاره ګټور دی، په ځانګړي ډول mainland China IPs.

کله چې په Tencent Location Service کې key جوړوئ، دا enable کړئ:

```text
WebServiceAPI
```

له جوړېدو وروسته، key په `Tencent Map Key` کې paste او save کړئ.

که یوازې basic Chinese IP geolocation ته اړتیا لرئ، Tencent Map Key د پیل لپاره بس دی.

## په User Management کې څه وګورئ

User Management د admin panel له سر څخه available دی.

![User management](../../image/other/用户管理显示.png)

User Management د IP له مخې upload activity ښيي:

| Field | تشریح |
| --- | --- |
| IP source | د uploader source IP. |
| Address | له IP څخه resolved تقریبي location. |
| Total upload size | د دې IP له خوا uploaded ټول file size. |
| Upload count | له دې IP څخه د uploads شمېر. |
| Upload allowed | On یعنې uploads allowed دي. Off یعنې uploads blocked دي. |

د چپ arrow کلیک کړئ څو د هغه IP له خوا uploaded files list expand شي.

file list د file name، preview، file size، moderation result، file status او upload time ښيي. که uploads suspicious ښکاري، لومړی IP expand کړئ، files وګورئ، بیا پرېکړه وکړئ چې نور uploads block کړئ که نه.

که IP suspicious وي، `Upload allowed` off کړئ. راتلونکي uploads له هماغه IP څخه block کېږي.

## Search، Sort او Advanced Filters

د User Management په سر کې د IP source یا address له مخې search وکړئ.

د time، upload count یا total upload size له مخې sort وکړئ، څو recent uploaders، high-frequency uploaders یا high-usage IPs ومومئ.

د ژور investigation لپاره advanced filters پرانیزئ.

![Advanced filters](../../image/other/用户管理高级筛选.png)

Advanced filters ملاتړ کوي:

| Filter | کارونه |
| --- | --- |
| Time range | هغه IPs ښيي چې په ټاکلې موده کې یې files upload کړي وي. |
| Access status | د normal، blocked او ورته states له مخې filter کوي. |
| Allow/block list | د allowlist، blocklist یا unset له مخې filter کوي. |
| File type | هغه IPs ښيي چې images، videos، audio، documents، code یا نور files یې upload کړي وي. |
| File size | د uploaded file size range له مخې filter کوي. |
| Age rating | د unset، General، R12+، R16+، R18 او ورته ratings له مخې filter کوي. |
| File status | د اوسني file status له مخې filter کوي، څو abnormal files وڅېړئ. |

`Apply Filters` کلیک کړئ څو apply شي. `Reset` وکاروئ څو ټول data ته بېرته وګرځئ.

## Mobile View

په mobile کې User Management card layout ته بدلېږي.

![Mobile user management](../../image/other/手机端显示用户管理效果.png)

هر card IP، address، total upload size، upload count او upload allowed switch ښيي. د horizontal table scrolling پرته users manage کولای شئ.

## که Location غلط ښکاري

IP geolocation تقریبي دی. دا دقیق street address نه دی.

که user د proxy، data center، cloud server یا cross-border network تر شا وي، ښودل شوی location له اصلي location سره توپیر لرلای شي.

دا feature د rough origin درک، abnormal uploads موندلو او blocking decisions سره د مرستې لپاره وکاروئ. د precise tracking په توګه یې مه ګڼئ.

## Common Cases

| Case | معنا |
| --- | --- |
| Address تش دی | IP ښايي لا resolved نه وي، یا اوسنی source موقتا unavailable وي. |
| Address language غلطه ده | IP geolocation language وګورئ او ډاډه شئ داسې source configured دی چې هغه language ملاتړ کوي. |
| Address د data center ښيي | ډېر proxies، cloud servers او crawlers د data center یا ISP addresses په توګه ښکاري. |
| Upload count لوړ دی | دا IP په دقت وګورئ او د اړتیا پر وخت uploads block کړئ. |
| Total upload size لوی دی | sort یا filter وکړئ، IP expand کړئ او مشخص files inspect کړئ. |
| له blocking وروسته restore ته اړتیا ده | `Upload allowed` بېرته on کړئ. |

## چټک بهیر

```text
Open IP Geolocation in Other Settings
-> Choose IP geolocation language
-> Fill MaxMind, Tencent Map, or ipapi credentials as needed
-> Save settings
-> Open User Management
-> Review IP source, address, total upload size, and upload count
-> Use search, sort, or advanced filters to find abnormal IPs
-> Allow or block uploads as needed
```
