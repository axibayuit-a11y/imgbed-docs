# Random Image API और Public Gallery

दोनों features यहाँ configure होते हैं:

```text
System Settings -> Other Settings
```

## Random Image API

Random Image API selected directories से एक random file return करता है। यह site backgrounds, avatar rotation या external pages से random image calls के लिए उपयोगी है।

Enable करने के बाद यह इस्तेमाल करें:

```text
https://your-domain.com/random
```

## Random Image API Settings

| Option | Purpose |
| --- | --- |
| Enable | `/random` endpoint on या off करता है। Disabled होने पर access forbidden है। |
| Directories | Random API किन directories का इस्तेमाल कर सकता है, यह limit करता है। जो directories यहाँ शामिल नहीं हैं, API उन्हें इस्तेमाल नहीं कर सकता। |
| Call demo | Random API links generate करता है जिन्हें आप direct copy कर सकते हैं। |

आप multiple directories select कर सकते हैं। उदाहरण के लिए, अगर केवल `/landscape/` और `/portrait/` allowed हैं, तो random API सिर्फ उन directories और उनके subdirectories से files चुन सकता है।

## Random Image API Parameters

| Parameter | Example | Purpose |
| --- | --- | --- |
| `dir` | `/landscape/` | Random directory specify करता है। |
| `content` | `image` | Media type specify करता है। `image`, `video`, `audio` या comma-separated combinations इस्तेमाल करें। |
| `orientation` | `auto` | Image orientation filter करता है। `portrait`, `landscape` या `auto` इस्तेमाल करें। |
| `type` | `url` | Return format। Empty मतलब redirect, `url` plain text URL return करता है, `json` JSON return करता है। |
| `origin` | `1` | `type=url` के साथ full URL return करने के लिए इस्तेमाल होता है। |
| `age` | `all-ages,r12` | Age rating से filter करता है। |
| `tag` | `wallpaper,sky` | केवल वे files return करता है जिनमें ये tags हों। |
| `ex` | `private` | इन tags वाली files exclude करता है। |

## Return Formats

`type` के बिना API सीधे random file URL पर redirect करता है।

`type=url` के साथ text URL return होता है।

`type=json` के साथ file information return होती है, जिसमें file URL, file ID, file name, file type, tags, rating और related metadata शामिल होते हैं।

## Access Rules

Random Image API public access rules follow करता है:

| Rule | Effect |
| --- | --- |
| Directory restriction | केवल allowed directories की files select हो सकती हैं। |
| Blocklist | Blocklisted files random pool से exclude होती हैं। |
| Allowlist mode | Enabled होने पर केवल public access के लिए allowed files return होती हैं। |
| Age rating | R12, R16, R18 और similar content current access mode से filter होता है। |

Filtering के बाद कोई file match न हो, तो API no matching result return करता है।

## Cache

Random Image API speed बेहतर करने के लिए directory candidate pools cache करता है।

Files बदलने के बाद ImgBed directory cache version update करता है, और बाद की requests candidate pool rebuild करती हैं। Empty directories को repeated queries से बचाने के लिए थोड़े समय के लिए cache किया जाता है।

## Public Gallery

Public gallery उन directories के लिए read-only public browsing page देती है जिन्हें आप visitors को दिखाना चाहते हैं।

Enable करने के बाद visitors यह खोल सकते हैं:

```text
https://your-domain.com/browse/directory-name
```

## Public Gallery Settings

| Option | Purpose |
| --- | --- |
| Enable | Public gallery on या off करता है। Disabled होने पर visitors इसे browse नहीं कर सकते। |
| Image loading mode | Previews original images इस्तेमाल करें या thumbnails, यह control करता है। |
| Open directories | Visitors किन directories को access कर सकते हैं, यह set करता है। |

## Image Loading Mode

| Mode | Purpose |
| --- | --- |
| Original | Visitor page original files directly load करता है। |
| Thumbnail | Visitor page fast loading के लिए thumbnails prefer करता है। |

## Open Directories

Open directories तय करती हैं कि visitors क्या देख सकते हैं।

उदाहरण:

```text
/1/,/2/,/landscape/,/portrait/
```

Visitors फिर ये access कर सकते हैं:

```text
https://your-domain.com/browse/1
https://your-domain.com/browse/2
https://your-domain.com/browse/landscape
https://your-domain.com/browse/portrait
```

Subdirectories भी open की जा सकती हैं, जैसे `/2026/lucky/`। जो directories open नहीं हैं, visitors उनसे blocked रहेंगे।

## Public Gallery Features

| Feature | Description |
| --- | --- |
| Browse directories | Open directories में files और subdirectories देखें। |
| Search | File name, file ID या tags से search करें। |
| Type filter | Images, videos, audio या other files filter करें। |
| Tag filter | Selected tags include या exclude करें। |
| Orientation filter | Landscape या portrait images filter करें। |
| Time filter | Upload time range से filter करें। |
| Extension filter | File extension से filter करें। |
| Copy link | File access links copy करें। |
| Media preview | Visitor page पर images, videos और audio देखें या play करें। |

## Public Gallery Access Rules

Public gallery भी public access rules follow करती है:

| Rule | Effect |
| --- | --- |
| Open directories | केवल allowed directories दिखती हैं। |
| Access mode | Content current age-rating access mode से filter होता है। |
| Allowlist mode | Enabled होने पर केवल public access के लिए allowed files दिखती हैं। |
| Blocklist | Blocklisted files hidden रहती हैं। |
