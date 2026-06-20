# Random Image API او Public Gallery

دواړه features دلته تنظیمېږي:

```text
System Settings -> Other Settings
```

## Random Image API

Random Image API له ټاکلو directories څخه یو random file راګرځوي. دا د site backgrounds، avatar rotation یا له external pages څخه random image calls لپاره ګټور دی.

له فعالېدو وروسته، دا وکاروئ:

```text
https://your-domain.com/random
```

## Random Image API Settings

| Option | موخه |
| --- | --- |
| Enable | د `/random` endpoint on یا off کوي. کله چې disabled وي، access منع وي. |
| Directories | محدودوي چې random API کوم directories کارولای شي. هغه directories چې دلته شامل نه وي، API یې نه شي کارولای. |
| Call demo | random API links جوړوي چې مستقیم یې copy کولای شئ. |

څو directories ټاکلای شئ. د بېلګې په توګه، که یوازې `/landscape/` او `/portrait/` allowed وي، random API یوازې له هغو directories او subdirectories څخه files ټاکلای شي.

## Random Image API Parameters

| Parameter | Example | موخه |
| --- | --- | --- |
| `dir` | `/landscape/` | random directory ټاکي. |
| `content` | `image` | media type ټاکي. `image`، `video`، `audio` یا comma-separated combinations وکاروئ. |
| `orientation` | `auto` | image orientation filter کوي. `portrait`، `landscape` یا `auto` وکاروئ. |
| `type` | `url` | return format. تش وي redirect کوي، `url` plain text URL ورکوي، `json` JSON ورکوي. |
| `origin` | `1` | له `type=url` سره د full URL ورکولو لپاره کارېږي. |
| `age` | `all-ages,r12` | د age rating له مخې filter کوي. |
| `tag` | `wallpaper,sky` | یوازې هغه files ورکوي چې دا tags ولري. |
| `ex` | `private` | هغه files exclude کوي چې دا tags ولري. |

## Return Formats

له `type` پرته، API مستقیم random file URL ته redirect کوي.

له `type=url` سره، text URL ورکوي.

له `type=json` سره، file information ورکوي، پکې file URL، file ID، file name، file type، tags، rating او related metadata شامل دي.

## Access Rules

Random Image API د public access rules تعقیبوي:

| Rule | اغېز |
| --- | --- |
| Directory restriction | یوازې په allowed directories کې files ټاکل کېدای شي. |
| Blocklist | blocklisted files له random pool څخه exclude کېږي. |
| Allowlist mode | کله چې enabled وي، یوازې هغه files راګرځي چې public access ته allowed وي. |
| Age rating | R12، R16، R18 او ورته content د اوسني access mode له مخې filter کېږي. |

که له filtering وروسته هېڅ file match نه شي، API no matching result ورکوي.

## Cache

Random Image API د speed ښه کولو لپاره directory candidate pools cache کوي.

له file changes وروسته، ImgBed د directory cache version update کوي، او وروسته requests candidate pool بیا جوړوي. Empty directories لنډ وخت cache کېږي، څو repeated queries کمې شي.

## Public Gallery

Public gallery د هغو directories لپاره read-only public browsing page ورکوي چې visitors ته یې اجازه ورکوئ.

له فعالېدو وروسته visitors دا پرانیستلای شي:

```text
https://your-domain.com/browse/directory-name
```

## Public Gallery Settings

| Option | موخه |
| --- | --- |
| Enable | public gallery on یا off کوي. کله چې disabled وي، visitors یې browse نه شي کولای. |
| Image loading mode | کنټرولوي چې previews original images کاروي که thumbnails. |
| Open directories | ټاکي چې visitors کوم directories ته access لري. |

## Image Loading Mode

| Mode | موخه |
| --- | --- |
| Original | visitor page original files مستقیم load کوي. |
| Thumbnail | visitor page د چټک loading لپاره thumbnails ته ترجیح ورکوي. |

## Open Directories

Open directories ټاکي چې visitors څه لیدلای شي.

د بېلګې په توګه:

```text
/1/,/2/,/landscape/,/portrait/
```

بیا visitors دا پرانیستلای شي:

```text
https://your-domain.com/browse/1
https://your-domain.com/browse/2
https://your-domain.com/browse/landscape
https://your-domain.com/browse/portrait
```

Subdirectories هم open کېدای شي، لکه `/2026/lucky/`. visitors له هغو directories څخه blocked وي چې open نه وي.

## Public Gallery Features

| Feature | تشریح |
| --- | --- |
| Browse directories | په open directories کې files او subdirectories کتل. |
| Search | د file name، file ID یا tags له مخې search. |
| Type filter | images، videos، audio یا نور files filter کول. |
| Tag filter | ټاکلي tags include یا exclude کول. |
| Orientation filter | landscape یا portrait images filter کول. |
| Time filter | د upload time range له مخې filter کول. |
| Extension filter | د file extension له مخې filter کول. |
| Copy link | د file access links copy کول. |
| Media preview | د visitor page پر images، videos او audio کتل یا play کول. |

## Public Gallery Access Rules

public gallery هم public access rules تعقیبوي:

| Rule | اغېز |
| --- | --- |
| Open directories | یوازې allowed directories ښودل کېږي. |
| Access mode | content د اوسني age-rating access mode له مخې filter کېږي. |
| Allowlist mode | کله چې enabled وي، یوازې public access ته allowed files ښودل کېږي. |
| Blocklist | blocklisted files پټېږي. |
