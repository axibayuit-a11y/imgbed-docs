# افزودن Cloudflare R2 Channel

## مناسب برای چه زمانی است

Cloudflare R2 را زمانی استفاده کنید که:

- ImgBed شما روی Cloudflare deploy شده و می‌خواهید files در R2 bucket همان Cloudflare account ذخیره شوند.
- نمی‌خواهید جداگانه S3 endpoint، access key و secret key تنظیم کنید.
- می‌خواهید read و write با setup کم از طریق Worker یا Pages R2 binding انجام شود.

خلاصه:

R2 channel به‌صورت manual داخل ImgBed admin panel ساخته نمی‌شود. ابتدا باید R2 bucket را به Cloudflare project bind کنید و نام binding variable دقیقاً `img_r2` باشد.

## پیش از شروع چه چیزهایی لازم است

- Cloudflare account.
- یک R2 bucket موجود.
- permission برای مدیریت Cloudflare project که ImgBed روی آن deploy شده است.

## Configure در Cloudflare

### 1. ساخت R2 Bucket

1. وارد Cloudflare Dashboard شوید.
2. `R2 Object Storage` را باز کنید.
3. Create bucket را بزنید.
4. یک bucket name انتخاب کنید، مثل `imgbed`.

uploaded files در همین bucket ذخیره می‌شوند.

![Create an R2 bucket](../../image/upload/cloudflare-r2/创建一个存储桶img-r2.png)

### 2. Bind کردن Bucket به ImgBed Project

بر اساس deployment type، محل binding را انتخاب کنید:

| Deployment Type | Binding Location |
| --- | --- |
| Pages | Current Pages project -> Settings -> Functions -> R2 bucket bindings |
| Worker | Current Worker -> Settings -> Bindings -> R2 bucket bindings |

هنگام افزودن binding، fields مهم:

| Field | Value |
| --- | --- |
| Variable name | `img_r2` |
| R2 bucket | bucket ساخته‌شده را انتخاب کنید. |

Variable name باید دقیقاً `img_r2` باشد. upload، read و delete فایل‌های R2 به همین binding name وابسته است.

### 3. Redeploy کردن Project

پس از save کردن binding، ImgBed را redeploy کنید تا Worker یا Pages runtime به `img_r2` دسترسی داشته باشد.

## در ImgBed چه می‌بینید

بعد از آماده شدن R2 binding، باز کنید:

1. System Settings.
2. Upload Settings.
3. channel با نام `Cloudflare R2`.

system به‌صورت خودکار یک fixed channel می‌سازد:

| Field | Fixed Value |
| --- | --- |
| Channel name | `Cloudflare R2` |
| Channel type | `cfr2` |
| Storage mode | `binding` |
| Configuration source | Environment binding |

این fixed binding channel است. لازم نیست برای ساخت آن Add Channel بزنید و مانند channel معمولی قابل delete نیست.

## Fields قابل ویرایش در Admin Panel

| Field | کاربرد | Required |
| --- | --- | --- |
| Enable channel | مشخص می‌کند R2 در upload selection شرکت کند یا نه. | Yes |
| Account ID | فقط وقتی quota limits enabled است و official R2 usage query لازم است. | Recommended when quota limits are enabled |
| Bucket name | فقط وقتی quota limits enabled است و official R2 usage query لازم است. | Recommended when quota limits are enabled |
| Quota limit | مشخص می‌کند این R2 channel بر اساس capacity در upload selection شرکت کند یا نه. | No |
| Threshold | وقتی usage به درصد مشخصی رسید، نوشتن روی این channel متوقف می‌شود. | Required when quota limits are enabled |

Account ID را از account information panel در Cloudflare dashboard copy کنید. فقط اگر می‌خواهید ImgBed R2 quota usage را query و enforce کند، آن را وارد کنید.

![Get the Account ID](../../image/upload/cloudflare-r2/获取账户id.png)

## مراحل setup

1. در Cloudflare یک R2 bucket بسازید.
2. Cloudflare settings مربوط به ImgBed project را باز کنید.
3. R2 bucket binding اضافه کنید.
4. `Variable name` را `img_r2` بگذارید.
5. R2 bucket ساخته‌شده را انتخاب کنید.
6. binding را save کنید و ImgBed را redeploy کنید.
7. به ImgBed -> System Settings -> Upload Settings برگردید.
8. بررسی کنید `Cloudflare R2` channel دیده می‌شود و enabled است.

اگر می‌خواهید R2 بر اساس capacity در upload selection شرکت کند، quota limit را enable کنید و سپس Account ID، bucket name، quota limit و threshold را وارد و save کنید.

![Configure quota limits](../../image/upload/cloudflare-r2/配置容量限制.png)

## روش بررسی

- fixed `Cloudflare R2` channel در Upload Settings دیده شود.
- channel card نشان دهد enabled است.
- یک test file کوچک upload شود و returned link باز شود.
- اگر هنگام باز کردن file پیام `R2 database binding is not configured` دیدید، runtime binding `img_r2` را دریافت نکرده است. binding name را در Cloudflare بررسی کنید و project را redeploy کنید.
