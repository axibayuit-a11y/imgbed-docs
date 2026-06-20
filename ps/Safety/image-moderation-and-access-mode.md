# Image Moderation او Access Mode

Image moderation upload شوو images ته age ratings ورکوي. Access mode کنټرولوي چې کوم ratings د public access له لارې ښکاره شي.

دا public gallery، public file URLs او random image API اغېزمنوي. admin panel نه محدودوي. administrators لا هم ټول files کتلی او manage کولی شي.

## چېرته یې تنظیم کړئ

admin panel پرانیزئ، بیا دې ځای ته لاړ شئ:

```text
System Settings -> Security Settings -> Upload Management -> Image Moderation
```

اصلي settings دا دي:

- Access mode
- Enable moderation
- Moderation provider

## Access Mode څه کوي

Access mode ټاکي چې کوم age ratings په public ډول ښکاره کېدای شي.

اوسني modes:

| Access Mode | په public ډول visible ratings |
| --- | --- |
| Adult mode | General, R12, R16, R18 |
| Youth mode | General, R12, R16 |
| Teen mode | General, R12 |
| Child mode | یوازې General |

Default یې Adult mode دی.

د private sites یا mature content لرونکو sites لپاره Adult mode مناسب کېدای شي. د لا محتاط public gallery لپاره Youth، Teen یا Child mode وټاکئ.

## Enable Moderation څه کوي

کله چې moderation فعال وي، ImgBed د upload پر وخت ټاکل شوی moderation provider غږوي او موندل شوی age rating خوندي کوي.

اصلي ratings:

| Rating | معنا |
| --- | --- |
| General | خوندي public content |
| R12 | لږ حساس content |
| R16 | منځنی حساس content |
| R18 | adult content |

moderation result د public access د پرېکړې پر وخت کارېږي.

که moderation فعال نه وي، یا زاړه files rating ونه لري، هغه files unrated ګڼل کېږي. unrated files یوازې د rating د نشتوالي له امله په اتومات ډول له public gallery یا random image API نه لرې کېږي.

## د Moderation Provider ټاکل

شته providers:

- moderatecontent.com
- nsfwjs
- Sightengine

هر provider بېلابېلې اړتیاوې لري:

- moderatecontent.com عموما API Key غواړي.
- nsfwjs عموما API endpoint URL غواړي.
- Sightengine API user او API secret غواړي.

د خپل account، availability او detection quality له مخې یې وټاکئ. که moderation فعال وي او سم تنظیم شوی وي، ImgBed د upload پر وخت د image rating لیکلو هڅه کوي.

## پر Public Gallery اغېز

public gallery د access mode له مخې files filter کوي.

بېلګې:

- Adult mode: R18 images ښکاره کېدای شي.
- Youth mode: R18 images پټېږي.
- Teen mode: R16 او R18 images پټېږي.
- Child mode: یوازې General images ښکاره کېږي.

دا یوازې عادي public access اغېزمنوي. admin panel لا هم ټول files ښيي.

## پر Public File URLs اغېز

Public file URLs هغه مستقیم image links دي چې visitors یې پرانیزي.

که د فایل rating د اوسني access mode له خوا allowed وي، ImgBed اصلي image ورکوي.

که rating له allowed level لوړ وي، عادي public access اصلي image نه ورکوي. پر ځای یې ImgBed configured blocked result یا د restricted access لپاره ټاکل شوی بدیل image ښکاره کوي.

بېلګه:

- اوسنی mode Child mode دی.
- یو image R18 rated دی.
- visitor public URL مستقیم پرانیزي.
- ImgBed هغه visitor ته اصلي R18 image نه ورکوي.

![Restricted file image](../../image/Safety/文件受限图.png)

administrators چې files په admin panel کې ګوري، له دې restriction نه اغېزمنېږي.

## پر Random Image API اغېز

random image API هم د access mode له مخې خپل candidate pool filter کوي.

په Child mode کې، random images یوازې له General-rated files څخه ټاکل کېږي.

په Youth mode کې، random images له General، R12 او R16 files څخه راتلای شي، خو له R18 files څخه نه.

دا random image API له دې منع کوي چې د public gallery restrictions bypass کړي.

## له List Rules سره اړیکه

Access mode یوازینی public access rule نه دی. دا د allow/block list rules سره یو ځای کار کوي.

په ساده ډول:

- Allowlisted content لومړی public ګڼل کېږي.
- Blocklisted content عادي visitors مستقیم نه شي کتلی.
- هغه content چې په هېڅ list کې نه وي، بیا د access mode له مخې check کېږي.

که image هم د age rating او هم د list rules له مخې restricted وي، عادي visitors لا هم اصلي فایل مستقیم نه شي کتلی.

## سپارښتل شوي Settings

د public sites لپاره:

- moderation فعال کړئ.
- داسې access mode وټاکئ چې د site له audience سره برابر وي.
- د all-age visitors لپاره Child mode یا Teen mode وکاروئ.
- که نه غواړئ mature content په public ډول ښکاره شي، Adult mode مه کاروئ.
- په admin panel کې file ratings وګورئ او د اړتیا پر وخت یې manually بدل کړئ.

د private یا personal sites لپاره:

- Adult mode عموما مناسب دی.
- که ګټور وي، moderation فعال کړئ.
- په admin panel کې ratings وګورئ او د اړتیا پر وخت یې adjust کړئ.

## FAQ

### د Access Mode له بدلولو وروسته Files له Admin Panel څخه ورکېږي؟

نه.

Access mode یوازې عادي public access اغېزمنوي. admin panel نه اغېزمنوي.

### ولې Public Gallery له Child Mode وروسته لږ Images وښودل؟

Child mode یوازې General-rated files ته public display اجازه ورکوي. R12، R16 او R18 files filter کېږي.

### Public URLs لا هم Adult Images پرانیستلی شي؟

که اوسنی access mode هغه rating ته اجازه ورنه کړي، عادي public URLs اصلي image نه ورکوي.

### Random Image API restricted images ورکولی شي؟

نه.

random image API candidates د اوسني access mode له مخې filter کوي.

### د زړو Unrated Images سره څه کېږي؟

unrated images یوازې د moderation results د نشتوالي له امله په اتومات ډول نه پټېږي. وروسته یې ratings په admin panel کې بدلولای شئ.
