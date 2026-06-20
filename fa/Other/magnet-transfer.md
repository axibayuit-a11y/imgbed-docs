# Magnet Transfer

Magnet transfer، files را از magnet link download می‌کند و به‌صورت خودکار در cloud storage channel انتخاب‌شده upload می‌کند.

برای transfer کردن anime episodes، videos، archives و files مشابه مفید است. magnet link را paste کنید؛ ImgBed یک background download task می‌سازد. پس از پایان download، file در ImgBed upload می‌شود و final link در upload list ظاهر می‌شود.

![Magnet transfer](../../image/other/磁力链接/磁力链接.png)

## کجا استفاده کنیم

entry مربوط به magnet transfer در homepage upload area است.

magnet link را در input box paste کنید، `Transfer` را انتخاب کنید و سپس upload کنید.

![Upload anime](../../image/other/磁力链接/上传番剧.png)

## پیش از اولین استفاده

ابتدا magnet transfer را در admin panel configure کنید.

معمولاً نیاز دارید به:

1. GitHub account برای اجرای download task.
2. cloud upload channel مثل Google Drive یا OneDrive.
3. target upload directory.
4. task timeout.

پس از آماده شدن settings، به homepage برگردید و magnet link را paste کنید تا transfer شروع شود.

## Upload کردن Magnet Link

1. magnet link را در homepage upload box paste کنید.
2. مطمئن شوید mode روی `Transfer` است.
3. upload را بزنید.
4. منتظر بمانید ImgBed magnet task را create کند.
5. پس از شروع task، از floating panel با نام `Magnet Tasks` در گوشه پایین راست، progress را بررسی کنید.

download و upload ممکن است زمان‌بر باشند. speed به magnet resource، GitHub runtime environment و cloud storage channel انتخاب‌شده بستگی دارد.

![Magnet downloading](../../image/other/磁力链接/磁力链接下载中.png)

## پس از Completion

پس از complete شدن task، upload list نام file و link را نشان می‌دهد.

videos، video preview نشان می‌دهند؛ images، image preview نشان می‌دهند؛ و other files با regular file icon نمایش داده می‌شوند.

![Downloaded video](../../image/other/磁力链接/下载好后的视频.png)

می‌توانید copy کنید:

| Link Type | Use Case |
| --- | --- |
| Original link | direct file access |
| Markdown | Markdown posts یا notes |
| HTML | web page code |
| BBCode | forums که BBCode پشتیبانی می‌کنند |

## Magnet Task Panel

magnet task panel در پایین راست، task count، task name، progress و final status را نشان می‌دهد.

وضعیت‌های رایج:

| Status | Meaning |
| --- | --- |
| Waiting | task ساخته شده و منتظر اجراست. |
| Downloading | magnet resource در حال download است. |
| Uploading | file download شده و در حال upload به cloud storage است. |
| Completed | upload موفق بوده و link قابل copy است. |
| Failed | task با موفقیت تمام نشده. message را بررسی کنید و دوباره تلاش کنید. |

## Tips

- اگر magnet link چند file داشته باشد، ImgBed برای display معمولاً main completed file را اولویت می‌دهد.
- large files زمان بیشتری می‌گیرند. پیش از refresh کردن page صبر کنید task تمام شود.
- اگر magnet resource peers در دسترس نداشته باشد، ممکن است بسیار کند یا fail شود.
- اگر cloud account quota تمام شده باشد، authorization expire شده باشد یا upload directory اشتباه باشد، task ممکن است fail شود.
- video preview ممکن است چند ثانیه بعد از upload complete طول بکشد.

## FAQ

### بعد از Paste کردن Magnet Link هیچ چیزی شروع نمی‌شود

مطمئن شوید magnet transfer در admin panel enabled است و GitHub account و cloud channel قابل استفاده انتخاب شده‌اند.

### Download همیشه کند است

magnet speed به خود resource بستگی دارد. اگر peers در دسترس نباشند، download بسیار کند یا غیرممکن می‌شود.

### بعد از Upload، Preview دیده نمی‌شود

اول مطمئن شوید file link باز می‌شود. video files ممکن است کمی زمان برای load شدن در browser بخواهند، یا می‌توانید link را مستقیم باز کنید.

### اگر Task Fail شد چه چیزهایی را بررسی کنم؟

valid بودن magnet link، درست کار کردن cloud channel و صحیح بودن upload directory را بررسی کنید. سپس task را دوباره submit کنید.
