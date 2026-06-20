# Random Image API و Public Gallery

هر دو feature از این مسیر configure می‌شوند:

```text
System Settings -> Other Settings
```

## Random Image API

Random Image API یک file تصادفی از directories انتخاب‌شده برمی‌گرداند. برای site backgrounds، avatar rotation یا random image calls از external pages مفید است.

بعد از enable شدن، استفاده کنید:

```text
https://your-domain.com/random
```

## Random Image API Settings

| Option | Purpose |
| --- | --- |
| Enable | endpoint `/random` را on یا off می‌کند. وقتی disabled باشد، access ممنوع است. |
| Directories | مشخص می‌کند random API از کدام directories استفاده کند. directories خارج از این list توسط API استفاده نمی‌شوند. |
| Call demo | random API links قابل copy تولید می‌کند. |

می‌توانید چند directory انتخاب کنید. مثلاً اگر فقط `/landscape/` و `/portrait/` مجاز باشند، random API فقط از همان directories و subdirectories آن‌ها file انتخاب می‌کند.

## Random Image API Parameters

| Parameter | Example | Purpose |
| --- | --- | --- |
| `dir` | `/landscape/` | random directory را مشخص می‌کند. |
| `content` | `image` | media type را مشخص می‌کند. از `image`، `video`، `audio` یا ترکیب comma-separated استفاده کنید. |
| `orientation` | `auto` | image orientation را filter می‌کند. `portrait`، `landscape` یا `auto`. |
| `type` | `url` | return format. خالی یعنی redirect، `url` یعنی plain text URL، `json` یعنی JSON. |
| `origin` | `1` | همراه `type=url` برای return کردن full URL. |
| `age` | `all-ages,r12` | filter بر اساس age rating. |
| `tag` | `wallpaper,sky` | فقط files دارای این tags را برمی‌گرداند. |
| `ex` | `private` | files دارای این tags را exclude می‌کند. |

## Return Formats

بدون `type`، API مستقیم به random file URL redirect می‌کند.

با `type=url`، یک text URL برمی‌گرداند.

با `type=json`، file information شامل file URL، file ID، file name، file type، tags، rating و related metadata برمی‌گرداند.

## Access Rules

Random Image API از public access rules پیروی می‌کند:

| Rule | Effect |
| --- | --- |
| Directory restriction | فقط files داخل allowed directories قابل انتخاب هستند. |
| Blocklist | blocklisted files از random pool حذف می‌شوند. |
| Allowlist mode | اگر enabled باشد، فقط files مجاز برای public access برگشت داده می‌شوند. |
| Age rating | R12، R16، R18 و content مشابه بر اساس current access mode filter می‌شود. |

اگر پس از filtering هیچ fileای match نشود، API no matching result برمی‌گرداند.

## Cache

Random Image API برای سرعت بهتر، directory candidate pools را cache می‌کند.

پس از تغییر files، ImgBed directory cache version را update می‌کند و requests بعدی candidate pool را دوباره build می‌کنند. empty directories برای مدت کوتاه cache می‌شوند تا repeated queries کم شود.

## Public Gallery

Public gallery یک صفحه public browsing فقط‌خواندنی برای directoriesی فراهم می‌کند که اجازه می‌دهید visitors ببینند.

پس از enable شدن، visitors می‌توانند باز کنند:

```text
https://your-domain.com/browse/directory-name
```

## Public Gallery Settings

| Option | Purpose |
| --- | --- |
| Enable | public gallery را on یا off می‌کند. وقتی disabled باشد، visitors نمی‌توانند آن را browse کنند. |
| Image loading mode | مشخص می‌کند previews از original images استفاده کنند یا thumbnails. |
| Open directories | مشخص می‌کند visitors به کدام directories دسترسی داشته باشند. |

## Image Loading Mode

| Mode | Purpose |
| --- | --- |
| Original | visitor page، original files را مستقیم load می‌کند. |
| Thumbnail | visitor page برای سرعت بیشتر thumbnails را ترجیح می‌دهد. |

## Open Directories

Open directories مشخص می‌کند visitors چه چیزی ببینند.

مثال:

```text
/1/,/2/,/landscape/,/portrait/
```

Visitors سپس می‌توانند access کنند:

```text
https://your-domain.com/browse/1
https://your-domain.com/browse/2
https://your-domain.com/browse/landscape
https://your-domain.com/browse/portrait
```

Subdirectories هم قابل open شدن هستند، مثل `/2026/lucky/`. visitors از directories که open نیستند blocked می‌شوند.

## Public Gallery Features

| Feature | Description |
| --- | --- |
| Browse directories | دیدن files و subdirectories داخل open directories. |
| Search | search بر اساس file name، file ID یا tags. |
| Type filter | filter کردن images، videos، audio یا other files. |
| Tag filter | include یا exclude کردن selected tags. |
| Orientation filter | filter کردن landscape یا portrait images. |
| Time filter | filter بر اساس upload time range. |
| Extension filter | filter بر اساس file extension. |
| Copy link | copy کردن file access links. |
| Media preview | دیدن یا play کردن images، videos و audio در visitor page. |

## Public Gallery Access Rules

Public gallery هم از public access rules پیروی می‌کند:

| Rule | Effect |
| --- | --- |
| Open directories | فقط allowed directories نمایش داده می‌شوند. |
| Access mode | content بر اساس current age-rating access mode filter می‌شود. |
| Allowlist mode | اگر enabled باشد، فقط files مجاز برای public access نمایش داده می‌شوند. |
| Blocklist | blocklisted files پنهان می‌شوند. |
