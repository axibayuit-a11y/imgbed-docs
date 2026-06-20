# Random Image API এবং Public Gallery

দুটি feature-ই এখানে configure করা হয়:

```text
System Settings -> Other Settings
```

## Random Image API

Random Image API selected directories থেকে একটি random file return করে। Site backgrounds, avatar rotation বা external pages থেকে random image calls-এর জন্য এটি useful।

Enable করার পর ব্যবহার করুন:

```text
https://your-domain.com/random
```

## Random Image API Settings

| Option | Purpose |
| --- | --- |
| Enable | `/random` endpoint on বা off করে। Disabled থাকলে access forbidden। |
| Directories | Random API কোন directories ব্যবহার করতে পারবে তা limit করে। এখানে না থাকা directories API ব্যবহার করতে পারবে না। |
| Call demo | Copy করার জন্য random API links generate করে। |

Multiple directories select করা যায়। যেমন, শুধু `/landscape/` এবং `/portrait/` allowed হলে random API শুধু ওই directories এবং subdirectories থেকে files নিতে পারবে।

## Random Image API Parameters

| Parameter | Example | Purpose |
| --- | --- | --- |
| `dir` | `/landscape/` | Random directory specify করে। |
| `content` | `image` | Media type specify করে। `image`, `video`, `audio` বা comma-separated combinations ব্যবহার করুন। |
| `orientation` | `auto` | Image orientation filter করে। `portrait`, `landscape` বা `auto` ব্যবহার করুন। |
| `type` | `url` | Return format। Empty মানে redirect, `url` plain text URL return করে, `json` JSON return করে। |
| `origin` | `1` | `type=url`-এর সঙ্গে full URL return করতে ব্যবহৃত হয়। |
| `age` | `all-ages,r12` | Age rating দিয়ে filter করে। |
| `tag` | `wallpaper,sky` | এই tags থাকা files-ই return করে। |
| `ex` | `private` | এই tags থাকা files exclude করে। |

## Return Formats

`type` না থাকলে API সরাসরি random file URL-এ redirect করে।

`type=url` থাকলে text URL return করে।

`type=json` থাকলে file information return করে, যার মধ্যে file URL, file ID, file name, file type, tags, rating এবং related metadata থাকে।

## Access Rules

Random Image API public access rules follow করে:

| Rule | Effect |
| --- | --- |
| Directory restriction | শুধু allowed directories-এর files select হতে পারে। |
| Blocklist | Blocklisted files random pool থেকে excluded হয়। |
| Allowlist mode | Enabled হলে শুধু public access-এর জন্য allowed files return হয়। |
| Age rating | R12, R16, R18 এবং similar content current access mode দিয়ে filter হয়। |

Filtering-এর পর কোনো file match না করলে API no matching result return করে।

## Cache

Speed বাড়াতে Random Image API directory candidate pools cache করে।

Files বদলালে ImgBed directory cache version update করে, এবং পরের requests candidate pool rebuild করে। Repeated queries এড়াতে empty directories সামান্য সময় cache করা হয়।

## Public Gallery

Public gallery visitors-কে দেখাতে চান এমন directories-এর জন্য read-only public browsing page দেয়।

Enable করার পর visitors খুলতে পারবে:

```text
https://your-domain.com/browse/directory-name
```

## Public Gallery Settings

| Option | Purpose |
| --- | --- |
| Enable | Public gallery on বা off করে। Disabled হলে visitors browse করতে পারে না। |
| Image loading mode | Previews original images ব্যবহার করবে নাকি thumbnails, তা control করে। |
| Open directories | Visitors কোন directories access করতে পারবে তা set করে। |

## Image Loading Mode

| Mode | Purpose |
| --- | --- |
| Original | Visitor page original files directly load করে। |
| Thumbnail | Faster loading-এর জন্য visitor page thumbnails prefer করে। |

## Open Directories

Open directories ঠিক করে visitors কী দেখতে পারবে।

Example:

```text
/1/,/2/,/landscape/,/portrait/
```

Visitors তখন access করতে পারবে:

```text
https://your-domain.com/browse/1
https://your-domain.com/browse/2
https://your-domain.com/browse/landscape
https://your-domain.com/browse/portrait
```

Subdirectories-ও open করা যায়, যেমন `/2026/lucky/`। Open নয় এমন directories visitors-এর জন্য blocked থাকে।

## Public Gallery Features

| Feature | Description |
| --- | --- |
| Browse directories | Open directories-এর files এবং subdirectories দেখুন। |
| Search | File name, file ID বা tags দিয়ে search করুন। |
| Type filter | Images, videos, audio বা other files filter করুন। |
| Tag filter | Selected tags include বা exclude করুন। |
| Orientation filter | Landscape বা portrait images filter করুন। |
| Time filter | Upload time range দিয়ে filter করুন। |
| Extension filter | File extension দিয়ে filter করুন। |
| Copy link | File access links copy করুন। |
| Media preview | Visitor page-এ images, videos এবং audio দেখুন বা play করুন। |

## Public Gallery Access Rules

Public gallery-ও public access rules follow করে:

| Rule | Effect |
| --- | --- |
| Open directories | শুধু allowed directories দেখায়। |
| Access mode | Content current age-rating access mode দিয়ে filter হয়। |
| Allowlist mode | Enabled হলে শুধু public access-এর জন্য allowed files দেখায়। |
| Blocklist | Blocklisted files hidden থাকে। |
