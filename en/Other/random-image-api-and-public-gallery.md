# Random Images and Public Gallery

Both features are configured under:

```text
System Settings -> Other Settings
```

## Random Image API

The Random Image API returns one random file from selected directories. It is useful for site backgrounds, avatar rotation, or random image calls from external pages.

After it is enabled, use:

```text
https://your-domain.com/random
```

## Random Image API Settings

| Option | Purpose |
| --- | --- |
| Enable | Turns the `/random` endpoint on or off. When disabled, access is forbidden. |
| Directories | Limits which directories the random API can use. Directories not included here cannot be used by the API. |
| Call demo | Generates random API links you can copy directly. |

You can select multiple directories. For example, if only `/landscape/` and `/portrait/` are allowed, the random API can only pick files from those directories and their subdirectories.

## Random Image API Parameters

| Parameter | Example | Purpose |
| --- | --- | --- |
| `dir` | `/landscape/` | Specifies the random directory. |
| `content` | `image` | Specifies media type. Use `image`, `video`, `audio`, or comma-separated combinations. |
| `orientation` | `auto` | Filters image orientation. Use `portrait`, `landscape`, or `auto`. |
| `type` | `url` | Return format. Empty means redirect, `url` returns plain text URL, `json` returns JSON. |
| `origin` | `1` | Used with `type=url` to return a full URL. |
| `age` | `all-ages,r12` | Filters by age rating. |
| `tag` | `wallpaper,sky` | Only returns files containing these tags. |
| `ex` | `private` | Excludes files containing these tags. |

## Return Formats

Without `type`, the API redirects directly to the random file URL.

With `type=url`, it returns a text URL.

With `type=json`, it returns file information, including file URL, file ID, file name, file type, tags, rating, and related metadata.

## Access Rules

The Random Image API follows public access rules:

| Rule | Effect |
| --- | --- |
| Directory restriction | Only files in allowed directories can be selected. |
| Blocklist | Blocklisted files are excluded from the random pool. |
| Allowlist mode | When enabled, only files allowed for public access are returned. |
| Age rating | R12, R16, R18, and similar content is filtered by the current access mode. |

If no file matches after filtering, the API returns no matching result.

## Cache

The Random Image API caches directory candidate pools to improve speed.

After files change, ImgBed updates the directory cache version, and later requests rebuild the candidate pool. Empty directories are cached briefly to avoid repeated queries.

## Public Gallery

The public gallery provides a read-only public browsing page for directories you allow visitors to see.

After it is enabled, visitors can open:

```text
https://your-domain.com/browse/directory-name
```

## Public Gallery Settings

| Option | Purpose |
| --- | --- |
| Enable | Turns the public gallery on or off. When disabled, visitors cannot browse it. |
| Image loading mode | Controls whether previews use original images or thumbnails. |
| Open directories | Sets which directories visitors can access. |

## Image Loading Mode

| Mode | Purpose |
| --- | --- |
| Original | The visitor page loads original files directly. |
| Thumbnail | The visitor page prefers thumbnails for faster loading. |

## Open Directories

Open directories decide what visitors can see.

For example:

```text
/1/,/2/,/landscape/,/portrait/
```

Visitors can then access:

```text
https://your-domain.com/browse/1
https://your-domain.com/browse/2
https://your-domain.com/browse/landscape
https://your-domain.com/browse/portrait
```

Subdirectories can also be opened, such as `/2026/lucky/`. Visitors are blocked from directories that are not open.

## Public Gallery Features

| Feature | Description |
| --- | --- |
| Browse directories | View files and subdirectories in open directories. |
| Search | Search by file name, file ID, or tags. |
| Type filter | Filter images, videos, audio, or other files. |
| Tag filter | Include or exclude selected tags. |
| Orientation filter | Filter landscape or portrait images. |
| Time filter | Filter by upload time range. |
| Extension filter | Filter by file extension. |
| Copy link | Copy file access links. |
| Media preview | View or play images, videos, and audio on the visitor page. |

## Public Gallery Access Rules

The public gallery also follows public access rules:

| Rule | Effect |
| --- | --- |
| Open directories | Only allowed directories are shown. |
| Access mode | Content is filtered by the current age-rating access mode. |
| Allowlist mode | When enabled, only files allowed for public access are shown. |
| Blocklist | Blocklisted files are hidden. |
