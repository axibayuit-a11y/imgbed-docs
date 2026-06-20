# Image Moderation و Access Mode

Image moderation به uploaded images، age rating اختصاص می‌دهد. Access mode مشخص می‌کند کدام ratings از طریق public access قابل مشاهده باشند.

این تنظیم روی public gallery، public file URLs و random image API اثر دارد. admin panel را محدود نمی‌کند. Administrators همچنان می‌توانند همه files را ببینند و مدیریت کنند.

## کجا Configure کنیم

admin panel را باز کنید و بروید به:

```text
System Settings -> Security Settings -> Upload Management -> Image Moderation
```

تنظیمات اصلی:

- Access mode
- Enable moderation
- Moderation provider

## Access Mode چه می‌کند

Access mode مشخص می‌کند کدام age ratings به‌صورت public نمایش داده شوند.

modeهای فعلی:

| Access Mode | Publicly Visible Ratings |
| --- | --- |
| Adult mode | General, R12, R16, R18 |
| Youth mode | General, R12, R16 |
| Teen mode | General, R12 |
| Child mode | فقط General |

پیش‌فرض Adult mode است.

برای private sites یا سایت‌هایی با mature content، Adult mode ممکن است مناسب باشد. برای public gallery محافظه‌کارانه‌تر، Youth، Teen یا Child mode را انتخاب کنید.

## Enable کردن Moderation چه اثری دارد

وقتی moderation enabled باشد، ImgBed هنگام upload، moderation provider انتخاب‌شده را call می‌کند و detected age rating را ذخیره می‌کند.

ratings اصلی:

| Rating | Meaning |
| --- | --- |
| General | محتوای امن برای public |
| R12 | محتوای کمی حساس |
| R16 | محتوای نسبتاً حساس |
| R18 | محتوای adult |

moderation result هنگام تصمیم‌گیری برای public access استفاده می‌شود.

اگر moderation enabled نباشد، یا old files rating نداشته باشند، آن files به‌عنوان unrated در نظر گرفته می‌شوند. unrated files فقط به دلیل نداشتن rating به‌صورت خودکار از public gallery یا random image API حذف نمی‌شوند.

## انتخاب Moderation Provider

providers موجود:

- moderatecontent.com
- nsfwjs
- Sightengine

هر provider requirement متفاوتی دارد:

- moderatecontent.com معمولاً API Key لازم دارد.
- nsfwjs معمولاً API endpoint URL لازم دارد.
- Sightengine به API user و API secret نیاز دارد.

بر اساس account، availability و detection quality انتخاب کنید. وقتی moderation enabled و درست configured باشد، ImgBed هنگام upload تلاش می‌کند image rating را بنویسد.

## اثر روی Public Gallery

public gallery، files را بر اساس access mode filter می‌کند.

مثال‌ها:

- Adult mode: R18 images می‌توانند ظاهر شوند.
- Youth mode: R18 images پنهان می‌شوند.
- Teen mode: R16 و R18 images پنهان می‌شوند.
- Child mode: فقط General images نمایش داده می‌شود.

این فقط normal public access را تحت تأثیر قرار می‌دهد. admin panel همچنان همه files را نشان می‌دهد.

## اثر روی Public File URLs

Public file URLs همان direct image links هستند که visitors باز می‌کنند.

اگر file rating در current access mode مجاز باشد، ImgBed original image را برمی‌گرداند.

اگر rating بالاتر از سطح مجاز باشد، normal public access original image را برنمی‌گرداند. در عوض ImgBed configured blocked result یا تصویر جایگزین blocked را برمی‌گرداند.

مثال:

- current mode برابر Child mode است.
- یک image با R18 rated شده.
- visitor public URL را مستقیم باز می‌کند.
- ImgBed original image R18 را به آن visitor برنمی‌گرداند.

![Restricted file image](../../image/Safety/文件受限图.png)

Administrators که files را در admin panel می‌بینند، تحت تأثیر این محدودیت نیستند.

## اثر روی Random Image API

random image API هم candidate pool خود را بر اساس access mode filter می‌کند.

در Child mode، random images فقط از General-rated files انتخاب می‌شوند.

در Youth mode، random images می‌توانند از General، R12 و R16 باشند، اما R18 نه.

این باعث می‌شود random image API نتواند public gallery restrictions را دور بزند.

## ارتباط با List Rules

Access mode تنها public access rule نیست. همراه با allow/block list rules کار می‌کند.

به‌صورت ساده:

- Allowlisted content ابتدا public محسوب می‌شود.
- Blocklisted content برای regular visitors مستقیم قابل مشاهده نیست.
- محتوایی که در هیچ‌کدام نیست، سپس با access mode بررسی می‌شود.

اگر image هم با age rating و هم با list rules restricted باشد، regular visitors همچنان نمی‌توانند original file را مستقیم ببینند.

## Recommended Settings

برای public sites:

- moderation را enable کنید.
- access mode مناسب با audience سایت را انتخاب کنید.
- برای all-age visitors از Child mode یا Teen mode استفاده کنید.
- اگر نمی‌خواهید mature content عمومی نمایش داده شود، از Adult mode پرهیز کنید.
- file ratings را در admin panel review کنید و در صورت نیاز دستی adjust کنید.

برای private یا personal sites:

- Adult mode معمولاً مشکلی ندارد.
- اگر مفید است moderation را enable کنید.
- ratings را در admin panel review و adjust کنید.

## FAQ

### بعد از تغییر Access Mode، files از Admin Panel حذف می‌شوند؟

خیر.

Access mode فقط normal public access را تحت تأثیر قرار می‌دهد. admin panel تحت تأثیر نیست.

### چرا بعد از رفتن به Child Mode، Public Gallery تصاویر کمتری نشان می‌دهد؟

Child mode فقط General-rated files را public نشان می‌دهد. R12، R16 و R18 filter می‌شوند.

### آیا Public URLs هنوز Adult Images را باز می‌کنند؟

اگر current access mode آن rating را allow نکند، normal public URLs original image را برنمی‌گردانند.

### آیا Random Image API می‌تواند Restricted Images برگرداند؟

خیر.

random image API candidates را بر اساس current access mode filter می‌کند.

### Old Unrated Images چه می‌شوند؟

unrated images فقط به دلیل نداشتن moderation results به‌صورت خودکار hidden نمی‌شوند. می‌توانید بعداً ratings آن‌ها را در admin panel adjust کنید.
