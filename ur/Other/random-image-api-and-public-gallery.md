# Random Image API اور Public Gallery

دونوں features یہاں configure ہوتے ہیں:

```text
System Settings -> Other Settings
```

## Random Image API

Random Image API selected directories سے ایک random file واپس کرتا ہے۔ یہ site backgrounds، avatar rotation، یا external pages سے random image calls کے لیے useful ہے۔

enable ہونے کے بعد استعمال کریں:

```text
https://your-domain.com/random
```

## Random Image API Settings

| Option | Purpose |
| --- | --- |
| Enable | `/random` endpoint on یا off کرتا ہے۔ disabled ہو تو access forbidden ہے۔ |
| Directories | random API کن directories کو استعمال کر سکتی ہے، یہ limit کرتا ہے۔ یہاں شامل نہ ہونے والی directories API استعمال نہیں کر سکتی۔ |
| Call demo | random API links generate کرتا ہے جنہیں آپ directly copy کر سکتے ہیں۔ |

آپ multiple directories منتخب کر سکتے ہیں۔ مثلاً اگر صرف `/landscape/` اور `/portrait/` allowed ہوں، random API صرف انہی directories اور ان کی subdirectories سے files pick کر سکتی ہے۔

## Random Image API Parameters

| Parameter | Example | Purpose |
| --- | --- | --- |
| `dir` | `/landscape/` | random directory specify کرتا ہے۔ |
| `content` | `image` | media type specify کرتا ہے۔ `image`، `video`، `audio`، یا comma-separated combinations استعمال کریں۔ |
| `orientation` | `auto` | image orientation filter کرتا ہے۔ `portrait`، `landscape`، یا `auto` استعمال کریں۔ |
| `type` | `url` | return format۔ empty کا مطلب redirect، `url` plain text URL دیتا ہے، `json` JSON دیتا ہے۔ |
| `origin` | `1` | `type=url` کے ساتھ full URL return کرنے کے لیے۔ |
| `age` | `all-ages,r12` | age rating سے filter کرتا ہے۔ |
| `tag` | `wallpaper,sky` | صرف وہ files return کرتا ہے جن میں یہ tags ہوں۔ |
| `ex` | `private` | ان tags والی files exclude کرتا ہے۔ |

## Return Formats

`type` کے بغیر API directly random file URL پر redirect کرتا ہے۔

`type=url` کے ساتھ text URL return ہوتا ہے۔

`type=json` کے ساتھ file information return ہوتی ہے، جس میں file URL، file ID، file name، file type، tags، rating، اور related metadata شامل ہیں۔

## Access Rules

Random Image API public access rules follow کرتی ہے:

| Rule | Effect |
| --- | --- |
| Directory restriction | صرف allowed directories کی files selected ہو سکتی ہیں۔ |
| Blocklist | blocklisted files random pool سے excluded ہوتی ہیں۔ |
| Allowlist mode | enabled ہو تو صرف public access کے لیے allowed files return ہوتی ہیں۔ |
| Age rating | R12، R16، R18، اور ملتا جلتا content current access mode کے مطابق filter ہوتا ہے۔ |

filtering کے بعد کوئی file match نہ ہو تو API no matching result return کرتی ہے۔

## Cache

Random Image API speed بہتر کرنے کے لیے directory candidate pools cache کرتی ہے۔

files بدلنے کے بعد ImgBed directory cache version update کرتا ہے، اور later requests candidate pool دوبارہ build کرتی ہیں۔ empty directories مختصر وقت کے لیے cache ہوتی ہیں تاکہ repeated queries نہ ہوں۔

## Public Gallery

Public gallery ان directories کے لیے read-only public browsing page دیتی ہے جنہیں آپ visitors کے لیے allow کرتے ہیں۔

enable ہونے کے بعد visitors کھول سکتے ہیں:

```text
https://your-domain.com/browse/directory-name
```

## Public Gallery Settings

| Option | Purpose |
| --- | --- |
| Enable | public gallery on یا off کرتا ہے۔ disabled ہو تو visitors browse نہیں کر سکتے۔ |
| Image loading mode | controls whether previews use original images or thumbnails۔ |
| Open directories | visitors کن directories تک access کر سکتے ہیں، یہ set کرتا ہے۔ |

## Image Loading Mode

| Mode | Purpose |
| --- | --- |
| Original | visitor page original files directly load کرتا ہے۔ |
| Thumbnail | visitor page faster loading کے لیے thumbnails کو prefer کرتا ہے۔ |

## Open Directories

Open directories فیصلہ کرتی ہیں کہ visitors کیا دیکھ سکتے ہیں۔

مثال:

```text
/1/,/2/,/landscape/,/portrait/
```

Visitors پھر access کر سکتے ہیں:

```text
https://your-domain.com/browse/1
https://your-domain.com/browse/2
https://your-domain.com/browse/landscape
https://your-domain.com/browse/portrait
```

Subdirectories بھی open کی جا سکتی ہیں، جیسے `/2026/lucky/`۔ جو directories open نہیں، visitors وہاں blocked ہوں گے۔

## Public Gallery Features

| Feature | Description |
| --- | --- |
| Browse directories | open directories میں files اور subdirectories دیکھیں۔ |
| Search | file name، file ID، یا tags سے search کریں۔ |
| Type filter | images، videos، audio، یا other files filter کریں۔ |
| Tag filter | selected tags include یا exclude کریں۔ |
| Orientation filter | landscape یا portrait images filter کریں۔ |
| Time filter | upload time range سے filter کریں۔ |
| Extension filter | file extension سے filter کریں۔ |
| Copy link | file access links copy کریں۔ |
| Media preview | visitor page پر images، videos، اور audio دیکھیں یا play کریں۔ |

## Public Gallery Access Rules

Public gallery بھی public access rules follow کرتی ہے:

| Rule | Effect |
| --- | --- |
| Open directories | صرف allowed directories دکھائی جاتی ہیں۔ |
| Access mode | content current age-rating access mode کے مطابق filter ہوتا ہے۔ |
| Allowlist mode | enabled ہو تو صرف public access کے لیے allowed files دکھائی جاتی ہیں۔ |
| Blocklist | blocklisted files hidden ہوتی ہیں۔ |
