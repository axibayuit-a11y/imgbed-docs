# Random Image API và Public Gallery

Cả hai features được cấu hình tại:

```text
System Settings -> Other Settings
```

## Random Image API

Random Image API trả về một random file từ selected directories. Hữu ích cho site backgrounds, avatar rotation hoặc random image calls từ external pages.

Sau khi bật, dùng:

```text
https://your-domain.com/random
```

## Random Image API Settings

| Option | Purpose |
| --- | --- |
| Enable | Bật hoặc tắt endpoint `/random`. Khi disabled, access bị forbidden. |
| Directories | Giới hạn directories mà random API được dùng. Directories không nằm ở đây sẽ không được API dùng. |
| Call demo | Generate random API links để bạn copy trực tiếp. |

Bạn có thể chọn nhiều directories. Ví dụ, nếu chỉ allow `/landscape/` và `/portrait/`, random API chỉ chọn files từ các directories đó và subdirectories của chúng.

## Random Image API Parameters

| Parameter | Example | Purpose |
| --- | --- | --- |
| `dir` | `/landscape/` | Chỉ định random directory. |
| `content` | `image` | Chỉ định media type. Dùng `image`, `video`, `audio` hoặc comma-separated combinations. |
| `orientation` | `auto` | Filter image orientation. Dùng `portrait`, `landscape` hoặc `auto`. |
| `type` | `url` | Return format. Để trống nghĩa là redirect, `url` trả plain text URL, `json` trả JSON. |
| `origin` | `1` | Dùng với `type=url` để trả full URL. |
| `age` | `all-ages,r12` | Filter theo age rating. |
| `tag` | `wallpaper,sky` | Chỉ trả files chứa các tags này. |
| `ex` | `private` | Exclude files chứa các tags này. |

## Return Formats

Không có `type`, API redirect trực tiếp tới random file URL.

Với `type=url`, API trả text URL.

Với `type=json`, API trả file information, gồm file URL, file ID, file name, file type, tags, rating và metadata liên quan.

## Access Rules

Random Image API tuân theo public access rules:

| Rule | Effect |
| --- | --- |
| Directory restriction | Chỉ files trong allowed directories mới được chọn. |
| Blocklist | Blocklisted files bị loại khỏi random pool. |
| Allowlist mode | Khi enabled, chỉ files allowed cho public access được return. |
| Age rating | R12, R16, R18 và content tương tự được filter theo current access mode. |

Nếu sau filtering không có file match, API trả no matching result.

## Cache

Random Image API cache directory candidate pools để tăng speed.

Sau khi files thay đổi, ImgBed update directory cache version, và requests sau đó rebuild candidate pool. Empty directories được cache ngắn để tránh repeated queries.

## Public Gallery

Public gallery cung cấp read-only public browsing page cho directories bạn cho phép visitors xem.

Sau khi bật, visitors có thể mở:

```text
https://your-domain.com/browse/directory-name
```

## Public Gallery Settings

| Option | Purpose |
| --- | --- |
| Enable | Bật hoặc tắt public gallery. Khi disabled, visitors không thể browse. |
| Image loading mode | Kiểm soát previews dùng original images hay thumbnails. |
| Open directories | Đặt directories visitors được access. |

## Image Loading Mode

| Mode | Purpose |
| --- | --- |
| Original | Visitor page load original files trực tiếp. |
| Thumbnail | Visitor page ưu tiên thumbnails để tải nhanh hơn. |

## Open Directories

Open directories quyết định visitors thấy được gì.

Ví dụ:

```text
/1/,/2/,/landscape/,/portrait/
```

Visitors sau đó có thể access:

```text
https://your-domain.com/browse/1
https://your-domain.com/browse/2
https://your-domain.com/browse/landscape
https://your-domain.com/browse/portrait
```

Subdirectories cũng có thể được mở, ví dụ `/2026/lucky/`. Visitors bị block khỏi directories không được open.

## Public Gallery Features

| Feature | Description |
| --- | --- |
| Browse directories | Xem files và subdirectories trong open directories. |
| Search | Search theo file name, file ID hoặc tags. |
| Type filter | Filter images, videos, audio hoặc other files. |
| Tag filter | Include hoặc exclude selected tags. |
| Orientation filter | Filter landscape hoặc portrait images. |
| Time filter | Filter theo upload time range. |
| Extension filter | Filter theo file extension. |
| Copy link | Copy file access links. |
| Media preview | Xem hoặc phát images, videos và audio trên visitor page. |

## Public Gallery Access Rules

Public gallery cũng tuân theo public access rules:

| Rule | Effect |
| --- | --- |
| Open directories | Chỉ allowed directories được hiển thị. |
| Access mode | Content được filter theo current age-rating access mode. |
| Allowlist mode | Khi enabled, chỉ files allowed cho public access được hiển thị. |
| Blocklist | Blocklisted files bị ẩn. |
