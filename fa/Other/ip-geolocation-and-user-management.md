# IP Geolocation و User Management

IP geolocation، IP addresses موجود در uploader records، login devices و logs مشابه را به approximate locations تبدیل می‌کند.

پس از configure شدن، admin panel می‌تواند origin مربوط به upload و access را واضح‌تر نشان دهد. User Management همچنین اجازه می‌دهد upload access مربوط به IP addresses مشکوک را block یا restore کنید.

## کجا Configure کنیم

باز کنید:

```text
System Settings -> Other Settings -> IP Geolocation
```

![IP geolocation](../../image/other/ip定位/ip定位.png)

## Available Settings

flow جدید IP geolocation به‌جای تکیه روی یک map service، چند source را پشتیبانی می‌کند.

| Setting | Purpose |
| --- | --- |
| IP geolocation language | انتخاب display language، مثل English، Simplified Chinese، Japanese، French و غیره. |
| MaxMind Account ID | MaxMind account ID برای MaxMind GeoLite Web Service. |
| MaxMind License Key | MaxMind License Key. |
| Tencent Map Key | Tencent Location Service key. برای Chinese addresses و mainland China IPs مفید است. |
| ipapi Key | APILayer ipapi key. IP geolocation چندزبانه را پشتیبانی می‌کند. |

فقط services موردنیازتان را پر کنید. لازم نیست همه fields configure شوند.

اگر هیچ key وارد نشود، ImgBed همچنان built-in free sources را امتحان می‌کند، اما stability، language support و precision ممکن است پایین‌تر از serviceهایی باشد که خودتان configure کرده‌اید.

## انتخاب‌های پیشنهادی

اگر بیشتر به Chinese addresses نیاز دارید:

1. IP geolocation language را روی Simplified Chinese بگذارید.
2. Tencent Map Key را configure کنید.
3. در صورت نیاز MaxMind یا ipapi را به‌عنوان fallback source اضافه کنید.

اگر بیشتر به English یا multilingual addresses نیاز دارید:

1. language موردنیاز را انتخاب کنید.
2. MaxMind Account ID و License Key را configure کنید.
3. اگر results چندزبانه بهتر می‌خواهید، ipapi Key اضافه کنید.

## MaxMind Setup

MaxMind نیاز دارد به:

```text
MaxMind Account ID
MaxMind License Key
```

Account ID را در MaxMind dashboard پیدا کنید و از License Keys page یک License Key بسازید.

![MaxMind key config](../../image/other/ip定位/maxmind的key配置.png)

پس از generation، Account ID و License Key را در ImgBed paste و save کنید.

پلن رایگان MaxMind برای استفاده روزمره مناسب است، اما request limits دارد. اگر quota تمام شود، ImgBed sources موجود دیگر را امتحان می‌کند.

## ipapi Setup

ipapi از APILayer API Key استفاده می‌کند.

ipapi console را باز کنید و API Key نمایش‌داده‌شده را copy کنید.

![ipapi config](../../image/other/ip定位/ipapi配置.png)

آن را در field `ipapi Key` داخل ImgBed paste و save کنید.

ipapi IP geolocation چندزبانه را پشتیبانی می‌کند و وقتی می‌خواهید addresses به language انتخاب‌شده نمایش داده شوند مفید است. پلن رایگان آن هم request limits دارد. اگر quota تمام شود، ImgBed sources دیگر را امتحان می‌کند.

## Tencent Map Key Setup

Tencent Map Key برای Chinese addresses، به‌خصوص mainland China IPs، مفید است.

هنگام ساخت key در Tencent Location Service، enable کنید:

```text
WebServiceAPI
```

پس از ساخت، key را در `Tencent Map Key` paste و save کنید.

اگر فقط basic Chinese IP geolocation می‌خواهید، Tencent Map Key برای شروع کافی است.

## در User Management چه چیزهایی را بررسی کنیم

User Management از بالای admin panel در دسترس است.

![User management](../../image/other/用户管理显示.png)

User Management فعالیت upload را بر اساس IP نشان می‌دهد:

| Field | Description |
| --- | --- |
| IP source | source IP مربوط به uploader. |
| Address | approximate location به‌دست‌آمده از IP. |
| Total upload size | total file size آپلودشده توسط این IP. |
| Upload count | تعداد uploads از این IP. |
| Upload allowed | On یعنی uploads مجاز است. Off یعنی uploads blocked است. |

روی arrow سمت چپ کلیک کنید تا list مربوط به files upload شده توسط آن IP باز شود.

file list شامل file name، preview، file size، moderation result، file status و upload time است. اگر uploads مشکوک هستند، ابتدا IP را expand کنید، files را review کنید، سپس تصمیم بگیرید uploads بعدی block شوند یا نه.

اگر IP مشکوک است، `Upload allowed` را off کنید. uploads آینده از آن IP blocked خواهند شد.

## Search، Sort و Advanced Filters

بالای User Management می‌توانید بر اساس IP source یا address جست‌وجو کنید.

برای پیدا کردن recent uploaders، high-frequency uploaders یا high-usage IPs، بر اساس time، upload count یا total upload size sort کنید.

برای بررسی دقیق‌تر، advanced filters را باز کنید.

![Advanced filters](../../image/other/用户管理高级筛选.png)

Advanced filters این موارد را پشتیبانی می‌کند:

| Filter | Usage |
| --- | --- |
| Time range | IPهایی را نشان می‌دهد که در period انتخاب‌شده files upload کرده‌اند. |
| Access status | بر اساس normal، blocked و states مشابه filter می‌کند. |
| Allow/block list | بر اساس allowlist، blocklist یا unset filter می‌کند. |
| File type | IPهایی را نشان می‌دهد که images، videos، audio، documents، code یا other files upload کرده‌اند. |
| File size | بر اساس uploaded file size range filter می‌کند. |
| Age rating | بر اساس unset، General، R12+، R16+، R18 و ratings مشابه filter می‌کند. |
| File status | برای بررسی abnormal files بر اساس current file status filter می‌کند. |

برای apply کردن، `Apply Filters` را بزنید. برای برگشت به همه data از `Reset` استفاده کنید.

## Mobile View

در mobile، User Management به card layout تبدیل می‌شود.

![Mobile user management](../../image/other/手机端显示用户管理效果.png)

هر card شامل IP، address، total upload size، upload count و upload allowed switch است. بدون horizontal table scrolling می‌توانید users را manage کنید.

## اگر Location اشتباه به نظر می‌رسد

IP geolocation تقریبی است. آدرس دقیق خیابان نیست.

اگر user پشت proxy، data center، cloud server یا cross-border network باشد، location نمایش‌داده‌شده ممکن است با location واقعی متفاوت باشد.

از این feature برای فهم rough origin، پیدا کردن abnormal uploads و کمک به blocking decisions استفاده کنید. آن را tracking دقیق در نظر نگیرید.

## Common Cases

| Case | Meaning |
| --- | --- |
| Address خالی است | IP شاید هنوز resolve نشده، یا source فعلی موقتاً unavailable است. |
| Address language اشتباه است | IP geolocation language و source پشتیبان آن language را بررسی کنید. |
| Address یک data center نشان می‌دهد | بسیاری از proxies، cloud servers و crawlers به‌صورت data center یا ISP addresses دیده می‌شوند. |
| Upload count بالاست | این IP را با دقت review کنید و در صورت نیاز uploads را block کنید. |
| Total upload size زیاد است | sort یا filter کنید، IP را expand کنید و specific files را inspect کنید. |
| نیاز به restore پس از blocking | `Upload allowed` را دوباره on کنید. |

## Quick Flow

```text
IP Geolocation را در Other Settings باز کنید
-> IP geolocation language را انتخاب کنید
-> credentials مربوط به MaxMind, Tencent Map یا ipapi را در صورت نیاز وارد کنید
-> settings را save کنید
-> User Management را باز کنید
-> IP source, address, total upload size و upload count را review کنید
-> برای پیدا کردن abnormal IPs از search, sort یا advanced filters استفاده کنید
-> uploads را در صورت نیاز allow یا block کنید
```
