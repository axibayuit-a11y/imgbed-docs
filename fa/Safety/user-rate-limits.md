# User Rate Limits

User rate limits کنترل می‌کند regular users یا visitors هر چند وقت یک‌بار می‌توانند از homepage files upload کنند. این کار از abuse شدن public upload pages جلوگیری می‌کند.

این feature فقط homepage uploads را تحت تأثیر قرار می‌دهد. Admin uploads و uploads انجام‌شده با API Tokens محدود به user rate limits نیستند.

## کجا Configure کنیم

admin panel را باز کنید و بروید به:

```text
System Settings -> Security Settings -> Upload Management -> User Rate Limits
```

![User rate limit settings](../../image/other/用户频控截图.png)

## Enable کردن Rate Limits

بعد از روشن شدن `Enable Rate Limits`، ImgBed recent uploads را بر اساس uploader IP address track می‌کند.

Default values:

| Setting | Default | Description |
| --- | --- | --- |
| Detection window | 1.5 hours | upload records تا چه فاصله زمانی عقب‌تر شمرده شوند. |
| Max file count | 20 | بیشترین تعداد files مجاز در detection window. |
| Single file size limit | 20 MB | بیشترین اندازه یک file. |
| Total upload size limit | 200 MB | بیشترین total upload size در detection window. |

مثلاً با window برابر 1.5 hours، 20 files، 20 MB برای هر file و 200 MB total، upload از همان IP وقتی هر کدام از limits رد شود blocked خواهد شد.

## Excluding File Types

`Excluded upload file types` جلوی upload شدن دسته‌های انتخابی file توسط regular users یا visitors را می‌گیرد.

دسته‌های موجود:

| Type | Description |
| --- | --- |
| Images | jpg, png, webp, gif و image files مشابه |
| Videos | mp4, webm, mov و video files مشابه |
| Audio | mp3, flac, wav و audio files مشابه |
| Documents | pdf, txt, md, docx و document files مشابه |
| Other | files خارج از دسته‌های بالا، مثل zip, rar, exe, apk |

به‌صورت پیش‌فرض هیچ type انتخاب نشده، یعنی allowed است.

با click روی یک type، highlight می‌شود؛ یعنی آن type blocked است.

اگر `Other` انتخاب شود، visitors که zip یا rar upload می‌کنند blocked می‌شوند و پیام unsupported file type می‌بینند.

## Block Messages

وقتی limit فعال شود، users پیام متناظر می‌بینند:

![Too frequent upload message](../../image/other/频繁报错提示.png)

| Scenario | Message Meaning |
| --- | --- |
| Single file too large | file خیلی بزرگ است و باید قبل از upload فشرده شود. |
| File type blocked | این file type پشتیبانی نمی‌شود. آن را حذف کنید و دوباره تلاش کنید. |
| Uploads too frequent | recent uploads بیش از حد frequent است و retry time نمایش داده می‌شود. |
| Total size too high | recent total upload size زیاد است و retry time نمایش داده می‌شود. |

## چه زمانی Enable کنیم

اگر upload homepage شما public accessible است، user rate limits را enable کنید.

دلایل رایج:

- نگران scripted bulk uploads هستید.
- می‌خواهید visitor uploads بزرگ را محدود کنید.
- می‌خواهید regular users فقط images upload کنند، نه archives یا installers.
- می‌خواهید public upload باز بماند اما resource usage کنترل شود.

اگر site فقط برای خودتان است، یا فقط administrators upload می‌کنند، می‌توانید این گزینه را disabled بگذارید.
