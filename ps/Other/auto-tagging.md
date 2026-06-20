# Auto Tagging

Auto tagging دلته تنظیمېږي:

```text
System Settings -> Other Settings -> Auto Tagging
```

دا په اتومات ډول image tags جوړوي، چې د search، random image filtering، public gallery filtering او age-rating access control لپاره ګټور دي.

## Auto Tagging څه کولای شي

| Feature | تشریح |
| --- | --- |
| Generate content tags | د people، scenes، objects، art style او ورته visual content لپاره tags اضافه کوي. |
| Generate character tags | د anime images او illustrations لپاره ګټور دی. |
| Add orientation tags | `landscape`، `portrait` یا `square` اضافه کوي. |
| Add image rating | د general، sensitive، questionable یا explicit content لپاره `G/S/Q/E` rating results خوندي کوي. |
| Auto-tag on upload | نوي uploaded images په اتومات ډول tagging flow ته داخلېږي. |
| Batch tagging | زړو images ته په ټولو folders یا ټاکلو folders کې tags اضافه کوي. |

## مخکې څه ته اړتیا لرئ

لږ تر لږه یو accessible Hugging Face Space URL برابر کړئ.

سپارښتنه دا ده چې د SmilingWolf `wd-tagger` Space خپل Hugging Face account ته duplicate کړئ:

```text
https://huggingface.co/spaces/SmilingWolf/wd-tagger
```

د لنډې ازموینې لپاره public Space کارولای شئ، خو public Spaces ډېر users شریکوي او ممکن queue، slow down یا unavailable شي. ستاسو په خپل account کې duplicated Space د اوږدمهاله auto tagging لپاره عموما ثابت وي.

## د SmilingWolf Space Duplicate کول

1. Hugging Face ته sign in وکړئ.
2. `https://huggingface.co/spaces/SmilingWolf/wd-tagger` پرانیزئ.

![SmilingWolf public Space](../../image/other/微笑狼的公开仓库.png)

3. په ښي پورتني کونج کې three-dot menu کلیک کړئ.
4. `Duplicate this Space` وټاکئ.
5. default Space name وساتئ یا خپل نوم ورکړئ، لکه `wd-tagger`.
6. visibility پر `Public` وټاکئ. Public Spaces د ImgBed لپاره call کول اسانه وي.
7. په پیل کې default free hardware وساتئ. یوازې هغه وخت upgrade وکړئ چې queueing څرګند شي.
8. Space جوړ کړئ او د build تر بشپړېدو انتظار وکړئ.

کله چې build بشپړ شو، خپل Space page پرانیزئ. URL عموما داسې ښکاري:

```text
https://huggingface.co/spaces/your-name/wd-tagger
```

browser URL copy کړئ او د ImgBed په `Space URLs` کې یې paste کړئ.

## څو Space URLs ډکول

په هر line کې یو Space URL ولیکئ.

بېلګې:

| Value | تشریح |
| --- | --- |
| `https://huggingface.co/spaces/SmilingWolf/wd-tagger` | SmilingWolf public Space. د لنډې ازموینې لپاره ښه دی. |
| `https://huggingface.co/spaces/lintonxue00/wd-tagger` | د copied Space page URL. |
| `https://huggingface.co/spaces/your-name/wd-tagger` | ستاسو خپل duplicated Space page URL. |

څو URLs داخلولای شئ. ImgBed څو Spaces یو ځای کاروي، چې speed ښه کولای شي.

که یو Space موقتا unavailable شي، نور Spaces processing ته دوام ورکولای شي.

## Settings

| Option | سپارښتنه |
| --- | --- |
| `Space URLs` | هغه Space URLs ولیکئ چې برابر کړي مو دي. لږ تر لږه یو وکاروئ. |
| Target folder | د ټولو folders لپاره تش پرېږدئ. یوازې هغه وخت folder وټاکئ چې ځانګړی directory process کوئ. |
| Recognition model | default `wd-swinv2-tagger-v3` وساتئ. |
| General tag threshold | default د ډېرو images لپاره ښه کار کوي. ټیټ values ډېر tags جوړوي؛ لوړ values لږ tags جوړوي. |
| Character tag threshold | default محافظه کار دی او د غلط character tags کمولو کې مرسته کوي. |
| `MCut` automatic threshold | په پیل کې off پرېږدئ. هغه وخت یې on کړئ چې غواړئ model په اتومات ډول tag count وټاکي. |
| Auto-tag on upload | که نوي uploaded images باید په اتومات ډول tags واخلي، on یې کړئ. |
| Start tagging | زاړه images manually batch-tag کوي. |

## سپارښتل شوي پیل values

| Option | Recommended Value |
| --- | --- |
| Recognition model | `wd-swinv2-tagger-v3` |
| General tag threshold | `0.35` |
| Character tag threshold | `0.85` |
| `MCut` | په پیل کې Off |
| Auto-tag on upload | د اړتیا پر وخت Enable |

که tags ډېر وي، general threshold لږ لوړ کړئ.

که tags کم وي، general threshold لږ ټیټ کړئ.

## Batch Tagging

1. `Space URLs` ډک کړئ.
2. target folder وټاکئ.
3. start tagging کلیک کړئ.
4. د progress تر بشپړېدو انتظار وکړئ.

که target folder تش وي، ImgBed ټول folders process کوي.

Batch tagging د زړو images لپاره ښه دی. د نویو images لپاره auto-tag on upload فعال کړئ، څو هر ځل یې manually ونه چلوئ.

## Auto-Tag on Upload

کله چې auto-tag on upload فعال شي، نوي uploaded images په اتومات ډول configured `Space URLs` call کوي.

دا د اوږدمهاله کارونې لپاره مناسب دی.

که ستاسو Space queue ولري، upload پخپله مخکې بشپړېدای شي او tagging وروسته دوام کوي.

## کوم Images Process کېږي

Auto tagging عموما image files process کوي.

هغه images چې complete tags، orientation، rating، width او height لا لري، skipped کېږي څو unnecessary Space calls ونه شي.

ImgBed د امکان تر حده یوازې missing information ډکوي. د بېلګې په توګه، که یوازې orientation missing وي، هڅه کوي orientation اضافه کړي، پرته له دې چې full content tag flow call کړي.

## FAQ

### ولې خپل Space Duplicate کړم؟

Public Spaces ډېر users شریکوي. ستاسو خپل duplicated Space عموما یوازې ستاسو ImgBed site کاروي، نو معمولا چټک او reliable وي.

### Space تل Starting Up ښيي

له لومړي جوړېدو وروسته، یا له اوږده idle وخت وروسته، Space ښايي د start لپاره وخت وغواړي.

لومړی خپل Space page پرانیزئ. کله چې image عادي recognize کړي، بېرته ImgBed ته راشئ او tagging پیل کړئ.

### Space URL څنګه Copy کړم؟

خپل Hugging Face Space page پرانیزئ او browser address copy کړئ.

بېلګې:

```text
https://huggingface.co/spaces/lintonxue00/wd-tagger
https://huggingface.co/spaces/SmilingWolf/wd-tagger
```

### څو Spaces اضافه کولای شم؟

هو. په هر line کې یو Space URL ولیکئ.

څو Spaces images یو ځای process کوي او هغه وخت ګټور دي چې ډېر images لرئ.

### ولې Tags په English دي؟

SmilingWolf models English tags output کوي. دا عادي خبره ده.

tags عموما د search، filtering، random image API او public gallery filters لپاره کارېږي.

### Rating Tags د څه لپاره کارېږي؟

rating results د Security Settings له access mode سره کار کوي.

د بېلګې په توګه، که visitor access د age rating له مخې محدود وي، public browsing او random image features د هماغو rules له مخې images filter کوي.

## چټک بهیر

```text
Sign in to Hugging Face
-> Open SmilingWolf/wd-tagger
-> Duplicate this Space
-> Wait for the Space to build
-> Copy your Space URL
-> Fill Space URLs in ImgBed
-> Choose model and thresholds
-> Start tagging or enable auto-tag on upload
```
