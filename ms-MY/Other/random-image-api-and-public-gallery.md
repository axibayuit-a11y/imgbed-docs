# Random Image API dan Public Gallery

Kedua-dua features dikonfigurasi di bawah:

```text
System Settings -> Other Settings
```

## Random Image API

Random Image API return satu random file daripada selected directories. Ia berguna untuk site backgrounds, avatar rotation atau random image calls dari external pages.

Selepas diaktifkan, gunakan:

```text
https://your-domain.com/random
```

## Random Image API Settings

| Option | Purpose |
| --- | --- |
| Enable | Menghidupkan atau mematikan endpoint `/random`. Apabila disabled, access forbidden. |
| Directories | Mengehadkan directories yang boleh digunakan oleh random API. Directories yang tidak termasuk di sini tidak boleh digunakan oleh API. |
| Call demo | Menjana random API links yang boleh dicopy terus. |

Anda boleh memilih beberapa directories. Contohnya, jika hanya `/landscape/` dan `/portrait/` dibenarkan, random API hanya boleh memilih files daripada directories tersebut dan subdirectories.

## Random Image API Parameters

| Parameter | Example | Purpose |
| --- | --- | --- |
| `dir` | `/landscape/` | Menentukan random directory. |
| `content` | `image` | Menentukan media type. Gunakan `image`, `video`, `audio` atau comma-separated combinations. |
| `orientation` | `auto` | Filter image orientation. Gunakan `portrait`, `landscape` atau `auto`. |
| `type` | `url` | Return format. Kosong bermaksud redirect, `url` return plain text URL, `json` return JSON. |
| `origin` | `1` | Digunakan dengan `type=url` untuk return full URL. |
| `age` | `all-ages,r12` | Filter mengikut age rating. |
| `tag` | `wallpaper,sky` | Hanya return files yang mengandungi tags ini. |
| `ex` | `private` | Exclude files yang mengandungi tags ini. |

## Return Formats

Tanpa `type`, API redirect terus ke random file URL.

Dengan `type=url`, ia return text URL.

Dengan `type=json`, ia return file information, termasuk file URL, file ID, file name, file type, tags, rating dan metadata berkaitan.

## Access Rules

Random Image API mengikut public access rules:

| Rule | Effect |
| --- | --- |
| Directory restriction | Hanya files dalam allowed directories boleh dipilih. |
| Blocklist | Blocklisted files dikeluarkan daripada random pool. |
| Allowlist mode | Apabila enabled, hanya files yang allowed untuk public access akan return. |
| Age rating | R12, R16, R18 dan content seumpamanya difilter mengikut current access mode. |

Jika tiada file match selepas filtering, API return no matching result.

## Cache

Random Image API cache directory candidate pools untuk meningkatkan speed.

Selepas files berubah, ImgBed update directory cache version, dan requests kemudian rebuild candidate pool. Empty directories dicache seketika untuk mengelakkan repeated queries.

## Public Gallery

Public gallery menyediakan read-only public browsing page untuk directories yang anda benarkan visitors lihat.

Selepas diaktifkan, visitors boleh membuka:

```text
https://your-domain.com/browse/directory-name
```

## Public Gallery Settings

| Option | Purpose |
| --- | --- |
| Enable | Menghidupkan atau mematikan public gallery. Apabila disabled, visitors tidak boleh browse. |
| Image loading mode | Mengawal sama ada previews menggunakan original images atau thumbnails. |
| Open directories | Menetapkan directories yang boleh diakses oleh visitors. |

## Image Loading Mode

| Mode | Purpose |
| --- | --- |
| Original | Visitor page load original files secara langsung. |
| Thumbnail | Visitor page mengutamakan thumbnails untuk loading lebih laju. |

## Open Directories

Open directories menentukan apa yang visitors boleh lihat.

Contoh:

```text
/1/,/2/,/landscape/,/portrait/
```

Visitors kemudian boleh mengakses:

```text
https://your-domain.com/browse/1
https://your-domain.com/browse/2
https://your-domain.com/browse/landscape
https://your-domain.com/browse/portrait
```

Subdirectories juga boleh dibuka, seperti `/2026/lucky/`. Visitors diblock daripada directories yang tidak open.

## Public Gallery Features

| Feature | Description |
| --- | --- |
| Browse directories | Lihat files dan subdirectories dalam open directories. |
| Search | Search mengikut file name, file ID atau tags. |
| Type filter | Filter images, videos, audio atau other files. |
| Tag filter | Include atau exclude selected tags. |
| Orientation filter | Filter landscape atau portrait images. |
| Time filter | Filter mengikut upload time range. |
| Extension filter | Filter mengikut file extension. |
| Copy link | Copy file access links. |
| Media preview | Lihat atau mainkan images, videos dan audio pada visitor page. |

## Public Gallery Access Rules

Public gallery juga mengikut public access rules:

| Rule | Effect |
| --- | --- |
| Open directories | Hanya allowed directories dipaparkan. |
| Access mode | Content difilter mengikut current age-rating access mode. |
| Allowlist mode | Apabila enabled, hanya files yang allowed untuk public access dipaparkan. |
| Blocklist | Blocklisted files disembunyikan. |
