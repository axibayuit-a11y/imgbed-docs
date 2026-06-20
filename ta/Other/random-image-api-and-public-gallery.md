# Random Image API மற்றும் Public Gallery

இரண்டு features-மும் இங்கு configure செய்யப்படுகின்றன:

```text
System Settings -> Other Settings
```

## Random Image API

Random Image API selected directories-இல் இருந்து ஒரு random file திரும்ப தரும். site backgrounds, avatar rotation, external pages-இல் random image calls போன்றவற்றுக்கு useful.

enable செய்த பிறகு:

```text
https://your-domain.com/random
```

## Random Image API Settings

| Option | Purpose |
| --- | --- |
| Enable | `/random` endpoint on/off. disabled என்றால் access forbidden. |
| Directories | random API பயன்படுத்தக்கூடிய directories limit. இங்கு இல்லாத directories API-க்கு கிடையாது. |
| Call demo | copy செய்யக்கூடிய random API links generate. |

multiple directories தேர்வு செய்யலாம். உதாரணமாக `/landscape/` மற்றும் `/portrait/` மட்டும் allowed என்றால் random API அந்த directories மற்றும் subdirectories-இல் இருந்து மட்டும் files pick செய்யும்.

## Random Image API Parameters

| Parameter | Example | Purpose |
| --- | --- | --- |
| `dir` | `/landscape/` | random directory specify. |
| `content` | `image` | media type. `image`, `video`, `audio`, அல்லது comma-separated combinations. |
| `orientation` | `auto` | image orientation filter. `portrait`, `landscape`, அல்லது `auto`. |
| `type` | `url` | return format. empty என்றால் redirect, `url` text URL, `json` JSON. |
| `origin` | `1` | `type=url` உடன் full URL return. |
| `age` | `all-ages,r12` | age rating filter. |
| `tag` | `wallpaper,sky` | இந்த tags உள்ள files மட்டும் return. |
| `ex` | `private` | இந்த tags உள்ள files exclude. |

## Return Formats

`type` இல்லாமல் API random file URL-க்கு direct redirect செய்கிறது.

`type=url` என்றால் text URL தரும்.

`type=json` என்றால் file URL, file ID, file name, file type, tags, rating, related metadata உடன் file information தரும்.

## Access Rules

Random Image API public access rules follow செய்கிறது:

| Rule | Effect |
| --- | --- |
| Directory restriction | allowed directories உள்ள files மட்டும் தேர்வு. |
| Blocklist | blocklisted files random pool-ல் இருந்து exclude. |
| Allowlist mode | enabled என்றால் public access allowed files மட்டும் return. |
| Age rating | R12, R16, R18 போன்ற content current access mode படி filter. |

filter பிறகு matching file இல்லை என்றால் API no matching result தரும்.

## Cache

Random Image API speed மேம்பட directory candidate pools cache செய்கிறது.

files மாறிய பிறகு ImgBed directory cache version update செய்கிறது; பின்னர் requests candidate pool மீண்டும் build செய்யும். empty directories repeated queries தவிர்க்க குறுகிய நேரம் cache செய்யப்படும்.

## Public Gallery

Public gallery visitors பார்க்க அனுமதிக்கும் directories-க்கு read-only public browsing page தரும்.

enable செய்த பிறகு visitors திறக்கலாம்:

```text
https://your-domain.com/browse/directory-name
```

## Public Gallery Settings

| Option | Purpose |
| --- | --- |
| Enable | public gallery on/off. disabled என்றால் visitors browse செய்ய முடியாது. |
| Image loading mode | previews original images அல்லது thumbnails பயன்படுத்துமா என்பதை கட்டுப்படுத்தும். |
| Open directories | visitors access செய்யக்கூடிய directories. |

## Image Loading Mode

| Mode | Purpose |
| --- | --- |
| Original | visitor page original files நேரடியாக load செய்யும். |
| Thumbnail | faster loading-க்கு thumbnails முன்னுரிமை. |

## Open Directories

Open directories visitors என்ன பார்க்கலாம் என்பதை முடிவு செய்கிறது.

உதாரணம்:

```text
/1/,/2/,/landscape/,/portrait/
```

Visitors access செய்யலாம்:

```text
https://your-domain.com/browse/1
https://your-domain.com/browse/2
https://your-domain.com/browse/landscape
https://your-domain.com/browse/portrait
```

Subdirectories-யும் open செய்யலாம், உதா. `/2026/lucky/`. open செய்யாத directories-க்கு visitors blocked.

## Public Gallery Features

| Feature | Description |
| --- | --- |
| Browse directories | open directories-ல் files மற்றும் subdirectories பார்க்க. |
| Search | file name, file ID, tags மூலம் search. |
| Type filter | images, videos, audio, other files filter. |
| Tag filter | selected tags include/exclude. |
| Orientation filter | landscape அல்லது portrait images filter. |
| Time filter | upload time range filter. |
| Extension filter | file extension filter. |
| Copy link | file access links copy. |
| Media preview | visitor page-ல் images, videos, audio பார்க்க/play. |

## Public Gallery Access Rules

Public gallery-யும் public access rules follow செய்கிறது:

| Rule | Effect |
| --- | --- |
| Open directories | allowed directories மட்டும் காட்டப்படும். |
| Access mode | current age-rating access mode படி content filter. |
| Allowlist mode | enabled என்றால் public access allowed files மட்டும் காட்டப்படும். |
| Blocklist | blocklisted files hidden. |
