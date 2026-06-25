# د Cloudflare R2 چینل اضافه کول

## کله مناسب دی

Cloudflare R2 هغه وخت وکاروئ چې:

- ستاسې ImgBed site لا مخکې په Cloudflare کې deployed وي او فایلونه د هماغه Cloudflare حساب په R2 bucket کې ساتل غواړئ.
- نه غواړئ جلا S3 endpoint، لاسرسی key او secret key تنظیم کړئ.
- غواړئ reads او writes د Worker یا Pages R2 binding له لارې په لږ setup سره ترسره شي.

لنډه خبره:

R2 چینل د ImgBed د اډمین پینل دننه په لاسي ډول نه جوړېږي. لومړی باید R2 bucket د Cloudflare پروژه سره bind کړئ، او binding variable name باید دقیقاً `img_r2` وي.

## د پیل مخکې اړتیاوې

- Cloudflare حساب.
- یو موجود R2 bucket.
- د هغه Cloudflare پروژه د مدیریت permission چې ImgBed پکې deployed دی.

## په Cloudflare کې تنظیم کول

### 1. R2 Bucket جوړ کړئ

1. Cloudflare Dashboard ته log in شئ.
2. `R2 Object Storage` پرانیزئ.
3. Create bucket کلیک کړئ.
4. bucket name وټاکئ، لکه `imgbed`.

اپلوډ شوي فایلونه به په همدې bucket کې ساتل کېږي.

![Create an R2 bucket](../../image/upload/cloudflare-r2/创建一个存储桶img-r2.png)

### 2. Bucket د ImgBed پروژه سره Bind کړئ

د deployment type له مخې binding location وټاکئ:

| Deployment Type | Binding Location |
| --- | --- |
| Pages | `Current Pages project -> Settings -> Functions -> R2 bucket bindings` |
| Worker | `Current Worker -> Settings -> Bindings -> R2 bucket bindings` |

د binding اضافه کولو پر وخت مهم fields:

| فیلډ | ارزښت |
| --- | --- |
| Variable name | `img_r2` |
| R2 bucket | هغه bucket وټاکئ چې جوړ کړی مو دی. |

Variable name باید دقیقاً `img_r2` وي. د R2 فایلونه اپلوډ، read او delete ټول په همدې binding name پورې تړلي دي.

### 3. پروژه بیا Deploy کړئ

د binding له خوندي وروسته ImgBed redeploy کړئ، څو Worker یا Pages runtime `img_r2` ته لاسرسی ولري.

## په ImgBed کې به څه ووینئ

کله چې R2 binding available شي، دا پرانیزئ:

1. د سیسټم تنظیمات.
2. د اپلوډ تنظیمات.
3. `Cloudflare R2` چینل.

system په اتومات ډول یو fixed چینل جوړوي:

| فیلډ | حلed ارزښت |
| --- | --- |
| د چینل نوم | `Cloudflare R2` |
| چینل type | `cfr2` |
| زېرمه mode | `binding` |
| تنظیمات source | Environment binding |

دا fixed binding چینل دی. د جوړولو لپاره چینل اضافه کړئ ته اړتیا نشته، او د regular چینل په څېر delete کېدای نه شي.

## په Admin Panel کې Editable فیلډs

| فیلډ | څه کوي | اړین |
| --- | --- | --- |
| Enable چینل | کنټرولوي چې R2 په اپلوډ selection کې ګډون وکړي که نه. | Yes |
| حساب ID | یوازې هغه وخت کارېږي چې کوټه limits enabled وي او official R2 usage query پکار وي. | سپارښتنه کېږي when کوټه limits are enabled |
| Bucket name | یوازې هغه وخت کارېږي چې کوټه limits enabled وي او official R2 usage query پکار وي. | سپارښتنه کېږي when کوټه limits are enabled |
| Quota limit | کنټرولوي چې دا R2 چینل د capacity له مخې په اپلوډ selection کې ګډون وکړي که نه. | No |
| Threshold | کله چې usage ټاکلي percentage ته ورسېږي، په دې چینل کې write بندوي. | اړین دی کله چې د کوټې محدودیتونه فعال وي |

حساب ID د Cloudflare dashboard د حساب information panel څخه کاپي کولی شئ. یوازې هغه وخت یې ډک کړئ چې غواړئ ImgBed R2 کوټه usage query او enforce کړي.

![Get the حساب ID](../../image/upload/cloudflare-r2/获取账户id.png)

## د تنظیم ګامونه

1. په Cloudflare کې R2 bucket جوړ کړئ.
2. د ImgBed پروژه لپاره Cloudflare settings پرانیزئ.
3. R2 bucket binding اضافه کړئ.
4. `Variable name` ته `img_r2` ورکړئ.
5. هغه R2 bucket وټاکئ چې جوړ کړی مو دی.
6. binding خوندي کړئ او ImgBed redeploy کړئ.
7. ImgBed -> د سیسټم تنظیمات -> د اپلوډ تنظیمات ته بېرته ولاړ شئ.
8. وګورئ چې `Cloudflare R2` چینل ښکاري او enabled دی.

که غواړئ R2 د capacity له مخې اپلوډ selection کې ګډون وکړي، کوټه limit enable کړئ، بیا حساب ID، bucket name، کوټه limit او threshold ولیکئ او خوندي یې کړئ.

![تنظیم کوټه limits](../../image/upload/cloudflare-r2/配置容量限制.png)

## څنګه یې Verify کړو

- fixed `Cloudflare R2` چینل په د اپلوډ تنظیمات کې ښکاري.
- چینل card ښيي چې enabled دی.
- یو کوچنی test فایل اپلوډ شي او returned link عادي پرانستل شي.
- که د فایل پرانیستلو پر وخت `R2 database binding is not configured` راشي، runtime ته `img_r2` binding نه دی رسېدلی. په Cloudflare کې binding name وګورئ او پروژه redeploy کړئ.
