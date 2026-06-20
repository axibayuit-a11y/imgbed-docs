# د Cloudflare R2 Channel اضافه کول

## کله مناسب دی

Cloudflare R2 هغه وخت وکاروئ چې:

- ستاسې ImgBed site لا مخکې په Cloudflare کې deployed وي او files د هماغه Cloudflare account په R2 bucket کې ساتل غواړئ.
- نه غواړئ جلا S3 endpoint، access key او secret key configure کړئ.
- غواړئ reads او writes د Worker یا Pages R2 binding له لارې په لږ setup سره ترسره شي.

لنډه خبره:

R2 channel د ImgBed admin panel دننه manual نه جوړېږي. لومړی باید R2 bucket د Cloudflare project سره bind کړئ، او binding variable name باید دقیقاً `img_r2` وي.

## د پیل مخکې اړتیاوې

- Cloudflare account.
- یو موجود R2 bucket.
- د هغه Cloudflare project د مدیریت permission چې ImgBed پکې deployed دی.

## په Cloudflare کې Configure کول

### 1. R2 Bucket جوړ کړئ

1. Cloudflare Dashboard ته log in شئ.
2. `R2 Object Storage` پرانیزئ.
3. Create bucket کلیک کړئ.
4. bucket name وټاکئ، لکه `imgbed`.

uploaded files به په همدې bucket کې ساتل کېږي.

![Create an R2 bucket](../../image/upload/cloudflare-r2/创建一个存储桶img-r2.png)

### 2. Bucket د ImgBed Project سره Bind کړئ

د deployment type له مخې binding location وټاکئ:

| Deployment Type | Binding Location |
| --- | --- |
| Pages | Current Pages project -> Settings -> Functions -> R2 bucket bindings |
| Worker | Current Worker -> Settings -> Bindings -> R2 bucket bindings |

د binding اضافه کولو پر وخت مهم fields:

| Field | Value |
| --- | --- |
| Variable name | `img_r2` |
| R2 bucket | هغه bucket وټاکئ چې جوړ کړی مو دی. |

Variable name باید دقیقاً `img_r2` وي. د R2 files upload، read او delete ټول په همدې binding name پورې تړلي دي.

### 3. Project بیا Deploy کړئ

د binding له save وروسته ImgBed redeploy کړئ، څو Worker یا Pages runtime `img_r2` ته access ولري.

## په ImgBed کې به څه ووینئ

کله چې R2 binding available شي، دا پرانیزئ:

1. System Settings.
2. Upload Settings.
3. `Cloudflare R2` channel.

system په اتومات ډول یو fixed channel جوړوي:

| Field | Fixed Value |
| --- | --- |
| Channel name | `Cloudflare R2` |
| Channel type | `cfr2` |
| Storage mode | `binding` |
| Configuration source | Environment binding |

دا fixed binding channel دی. د جوړولو لپاره Add Channel ته اړتیا نشته، او د regular channel په څېر delete کېدای نه شي.

## په Admin Panel کې Editable Fields

| Field | څه کوي | Required |
| --- | --- | --- |
| Enable channel | کنټرولوي چې R2 په upload selection کې ګډون وکړي که نه. | Yes |
| Account ID | یوازې هغه وخت کارېږي چې quota limits enabled وي او official R2 usage query پکار وي. | Recommended when quota limits are enabled |
| Bucket name | یوازې هغه وخت کارېږي چې quota limits enabled وي او official R2 usage query پکار وي. | Recommended when quota limits are enabled |
| Quota limit | کنټرولوي چې دا R2 channel د capacity له مخې په upload selection کې ګډون وکړي که نه. | No |
| Threshold | کله چې usage ټاکلي percentage ته ورسېږي، په دې channel کې write بندوي. | Required when quota limits are enabled |

Account ID د Cloudflare dashboard د account information panel څخه copy کولی شئ. یوازې هغه وخت یې ډک کړئ چې غواړئ ImgBed R2 quota usage query او enforce کړي.

![Get the Account ID](../../image/upload/cloudflare-r2/获取账户id.png)

## Setup Steps

1. په Cloudflare کې R2 bucket جوړ کړئ.
2. د ImgBed project لپاره Cloudflare settings پرانیزئ.
3. R2 bucket binding اضافه کړئ.
4. `Variable name` ته `img_r2` ورکړئ.
5. هغه R2 bucket وټاکئ چې جوړ کړی مو دی.
6. binding save کړئ او ImgBed redeploy کړئ.
7. ImgBed -> System Settings -> Upload Settings ته بېرته ولاړ شئ.
8. وګورئ چې `Cloudflare R2` channel ښکاري او enabled دی.

که غواړئ R2 د capacity له مخې upload selection کې ګډون وکړي، quota limit enable کړئ، بیا Account ID، bucket name، quota limit او threshold ولیکئ او save یې کړئ.

![Configure quota limits](../../image/upload/cloudflare-r2/配置容量限制.png)

## څنګه یې Verify کړو

- fixed `Cloudflare R2` channel په Upload Settings کې ښکاري.
- channel card ښيي چې enabled دی.
- یو کوچنی test file upload شي او returned link عادي پرانستل شي.
- که د file پرانیستلو پر وخت `R2 database binding is not configured` راشي، runtime ته `img_r2` binding نه دی رسېدلی. په Cloudflare کې binding name وګورئ او project redeploy کړئ.
