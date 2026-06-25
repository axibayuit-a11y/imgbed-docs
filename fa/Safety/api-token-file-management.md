# مدیریت فایل با API Token

مدیریت فایل با API Token برای اسکریپت‌ها، کارهای خودکار و پنل‌های مدیریتی بیرونی مناسب است. این قابلیت از مجوز `manage` استفاده می‌کند تا بدون باز کردن پنل مدیریت بتوانید اطلاعات فایل را ویرایش کنید، فایل‌ها را جابه‌جا یا تغییرنام دهید، فایل جای‌نگهدار برای پوشه بسازید، برچسب‌ها و وضعیت فهرست فایل را تنظیم کنید، یک IP آپلود را مسدود یا دوباره مجاز کنید و Tokenهای آپلود کوتاه‌مدت بسازید یا حذف کنید.

این اسکریپت فقط کارهای مدیریتی سبک در مدیریت فایل و مدیریت کاربران را انجام می‌دهد. آپلود، فهرست‌گیری، حذف، تنظیمات آپلود، تنظیمات سایت و روابط فدراسیون همچنان اسکریپت‌های اختصاصی خود را دارند.

![ویرایش API Token](../../image/Safety/apitoken/编辑管理权限api.png)

## آماده‌سازی

پس از ورود به پنل مدیریت، باز کنید:

System Settings → Security Settings → API Token

هنگام ساخت یا ویرایش API Token، مطمئن شوید این Token اجازه مدیریت دارد. مجوز `manage` می‌تواند وضعیت فایل، وضعیت آپلود کاربر و Tokenهای آپلود کوتاه‌مدت را تغییر دهد؛ بنابراین بهتر است فقط به اسکریپت‌ها یا کاربران قابل اعتماد داده شود.

عملیات نوشتن در اسکریپت مدیریت فایل به‌صورت پیش‌فرض در حالت پیش‌نمایش اجرا می‌شود و واقعاً ذخیره نمی‌شود. پس از بررسی نتیجه پیش‌نمایش، `--apply` را اضافه کنید تا نوشتن انجام شود.

می‌توانید Token را در متغیر محیطی هم قرار دهید:

```powershell
$env:IMGBED_API_TOKEN="your API Token"
```

## دانلود اسکریپت

| اسکریپت | کاربرد |
| --- | --- |
| <a href="/tools/imgbed-token-manage.mjs" download>اسکریپت مدیریت فایل</a> | فراداده فایل، برچسب‌های بازبینی، برچسب‌های فایل، وضعیت فهرست، جابه‌جایی، تغییرنام، ساخت پوشه، مسدودسازی/رفع مسدودسازی IP، ساخت و حذف Token آپلود کوتاه‌مدت |

برای اجرای اسکریپت، Node.js 18 یا نسخه جدیدتر باید روی دستگاه نصب باشد.

## محدوده قابلیت‌ها

| قابلیت | اسکریپت | مجوز |
| --- | --- | --- |
| آپلود فایل | `imgbed-token-single-upload.mjs` / `imgbed-token-chunk-upload.mjs` | `upload` |
| فهرست‌گیری فایل‌ها، فیلتر کردن فایل‌ها و خواندن آمار کاربر | `imgbed-token-list.mjs` | `list` |
| حذف فایل‌هایی که به‌صورت مشخص تعیین شده‌اند | `imgbed-token-delete.mjs` | `delete` |
| ویرایش اطلاعات فایل، برچسب‌ها، فهرست‌ها، جابه‌جایی، تغییرنام، ساخت پوشه، مسدودسازی IP و ساخت یا حذف Token آپلود کوتاه‌مدت | `imgbed-token-manage.mjs` | `manage` |
| ویرایش کانال‌های آپلود، تنظیمات امنیتی، تنظیمات صفحه، تنظیمات دیگر و روابط فدراسیون | اسکریپت‌های مدیریت تنظیمات | `manage` |

`imgbed-token-manage.mjs` فایل آپلود نمی‌کند، فایل‌ها را فهرست نمی‌کند و فایل حذف نمی‌کند. اگر باید `fileId` را پیدا کنید، ابتدا با اسکریپت فهرست‌گیری فایل‌ها را فیلتر کنید؛ اگر باید فایلی را حذف کنید، `fileId` مشخص را به اسکریپت حذف بدهید.

## پارامترهای عمومی

| پارامتر | ضروری | توضیح |
| --- | --- | --- |
| `--base-url <url>` | بله | نشانی سایت ImgBed، مانند `https://image.ai6.me` |
| `--token <token>` | بله | API Token؛ می‌توان از متغیر محیطی `IMGBED_API_TOKEN` هم استفاده کرد |
| `--retries <n>` | خیر | تعداد تلاش دوباره هنگام خطای موقت؛ پیش‌فرض `3` |
| `--timeout-ms <n>` | خیر | زمان مجاز هر درخواست؛ پیش‌فرض `180000` |
| `--output <pretty\|json>` | خیر | قالب خروجی؛ پیش‌فرض `pretty` است. برای فراخوانی برنامه‌ای از `json` استفاده کنید |
| `--save-response <path>` | خیر | ذخیره نتیجه نهایی در فایل JSON |
| `--batch-size <n>` | خیر | تعداد مواردی که هر درخواست در عملیات دسته‌ای پردازش می‌کند؛ پیش‌فرض `15` و حداکثر `15` |
| `--apply` | خیر | نوشتن را واقعاً اجرا می‌کند؛ بدون آن فقط پیش‌نمایش انجام می‌شود |
| `-h` / `--help` | خیر | نمایش راهنمای اسکریپت |

## ابتدا fileId را مشخص کنید

بیشتر کارهای اسکریپت مدیریت فایل به `fileId` نیاز دارند. ابتدا می‌توانید با اسکریپت فهرست‌گیری جست‌وجو کنید:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --dir "test4" `
  --count 10 `
  --output json
```

در نتیجه برگشتی، مقدار `name` معمولاً همان `fileId` است که می‌توانید به اسکریپت مدیریت فایل بدهید.

## فراداده فایل

فراداده فایل برای تغییر نام نمایشی فایل در مدیریت فایل پنل مدیریت و تغییر منبع خواندن به کار می‌رود.

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-metadata `
  --file-id "photos/2026/a.jpg" `
  --file-name "cover.jpg" `
  --read-source backup
```

پس از بررسی پیش‌نمایش، تغییر را ذخیره کنید:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-metadata `
  --file-id "photos/2026/a.jpg" `
  --file-name "cover.jpg" `
  --read-source backup `
  --apply
```

### پارامترهای فراداده فایل

| پارامتر | توضیح |
| --- | --- |
| `--set-metadata` | فراداده یک فایل را تغییر می‌دهد |
| `--file-id <id>` | ID فایلی که باید تغییر کند |
| `--file-name <name>` | نام نمایشی جدید در پنل مدیریت |
| `--read-source <primary\|backup>` | منبع خواندن؛ `primary` منبع اصلی و `backup` منبع پشتیبان است |

حداقل یکی از `--file-name` و `--read-source` باید ارسال شود.

## برچسب‌های بازبینی

برچسب‌های بازبینی با رده‌بندی سنی فایل مرتبط هستند. می‌توانید ابتدا برچسب فعلی را بخوانید و سپس آن را تغییر دهید.

خواندن برچسب بازبینی:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-label `
  --file-id "photos/2026/a.jpg"
```

تنظیم برچسب بازبینی:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-label `
  --file-id "photos/2026/a.jpg" `
  --label r12 `
  --apply
```

### پارامترهای برچسب بازبینی

| پارامتر | توضیح |
| --- | --- |
| `--get-label` | برچسب بازبینی یک فایل را می‌خواند |
| `--set-label` | برچسب بازبینی یک فایل را تغییر می‌دهد |
| `--file-id <id>` | ID فایل |
| `--label <value>` | مقدار برچسب: `all-ages`، `r12`، `r16`، `r18`، `None` |

## برچسب‌های فایل

برچسب‌های فایل برای افزودن برچسب‌های کاری قابل جست‌وجو به فایل‌ها استفاده می‌شوند. اسکریپت از خواندن، جایگزینی، افزودن و حذف پشتیبانی می‌کند و می‌تواند چند فایل را به‌صورت دسته‌ای پردازش کند.

خواندن برچسب‌های فایل:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-tags `
  --file-id "photos/2026/a.jpg"
```

افزودن برچسب:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --add-tags `
  --file-id "photos/2026/a.jpg" `
  --tag "cover" `
  --tag "2026" `
  --apply
```

حذف برچسب:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --remove-tags `
  --file-id "photos/2026/a.jpg" `
  --tag "cover" `
  --apply
```

جایگزینی برچسب‌ها:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-tags `
  --file-id "photos/2026/a.jpg" `
  --tag "archive" `
  --tag "public" `
  --apply
```

افزودن دسته‌ای برچسب‌ها:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --batch-tags `
  --file-id "photos/2026/a.jpg" `
  --file-id "photos/2026/b.jpg" `
  --tag-action add `
  --tag "batch-test" `
  --apply
```

### پارامترهای برچسب فایل

| پارامتر | توضیح |
| --- | --- |
| `--get-tags` | برچسب‌های یک فایل را می‌خواند |
| `--set-tags` | برچسب‌های یک فایل را جایگزین می‌کند |
| `--add-tags` | به یک فایل برچسب اضافه می‌کند |
| `--remove-tags` | از یک فایل برچسب حذف می‌کند |
| `--batch-tags` | برچسب‌ها را به‌صورت دسته‌ای تنظیم، اضافه یا حذف می‌کند |
| `--file-id <id>` | ID فایل؛ در عملیات دسته‌ای می‌توان چند بار ارسال کرد |
| `--tag <tag>` | مقدار برچسب؛ می‌توان چند بار ارسال کرد |
| `--tags-json <path>` | آرایه برچسب‌ها را از فایل JSON می‌خواند |
| `--tag-action <set\|add\|remove>` | نوع عملیات دسته‌ای برچسب |

نمونه محتوای فایل `--tags-json`:

```json
["cover", "2026", "public"]
```

## وضعیت فهرست سیاه و سفید

وضعیت فهرست رفتار کنترل دسترسی فایل را در حالت دسترسی عمومی تعیین می‌کند. این وضعیت را می‌توان برای یک فایل یا به‌صورت دسته‌ای تغییر داد.

قرار دادن یک فایل در فهرست سفید:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-list-type `
  --file-id "photos/2026/a.jpg" `
  --list-type White `
  --apply
```

افزودن دسته‌ای به فهرست سیاه:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --batch-list-type `
  --file-id "photos/2026/a.jpg" `
  --file-id "photos/2026/b.jpg" `
  --list-type Block `
  --apply
```

بازگرداندن وضعیت پیش‌فرض فهرست:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-list-type `
  --file-id "photos/2026/a.jpg" `
  --list-type None `
  --apply
```

### پارامترهای فهرست سیاه و سفید

| پارامتر | توضیح |
| --- | --- |
| `--set-list-type` | وضعیت فهرست یک فایل را تغییر می‌دهد |
| `--batch-list-type` | وضعیت فهرست فایل‌ها را دسته‌ای تغییر می‌دهد؛ هر درخواست حداکثر `15` فایل را پردازش می‌کند |
| `--file-id <id>` | ID فایل؛ در عملیات دسته‌ای می‌توان چند بار ارسال کرد |
| `--list-type <None\|White\|Block>` | `None` وضعیت پیش‌فرض، `White` فهرست سفید و `Block` فهرست سیاه است |

## جابه‌جایی فایل‌ها

جابه‌جایی فایل، یک یا چند فایل را به پوشه مقصد منتقل می‌کند. سمت سرور در هر درخواست حداکثر `15` فایل را پردازش می‌کند و اسکریپت طبق `--batch-size` کار را خودکار به چند درخواست پشت‌سرهم تقسیم می‌کند.

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --move `
  --file-id "photos/2026/a.jpg" `
  --file-id "photos/2026/b.jpg" `
  --target-path "archive/2026" `
  --apply
```

### پارامترهای جابه‌جایی

| پارامتر | توضیح |
| --- | --- |
| `--move` | جابه‌جایی فایل‌ها |
| `--file-id <id>` | ID فایلی که باید جابه‌جا شود؛ می‌توان چند بار ارسال کرد |
| `--target-path <dir>` | پوشه مقصد |
| `--batch-size <n>` | تعداد فایل‌های جابه‌جا شده در هر درخواست؛ پیش‌فرض `15` و حداکثر `15` |

## تغییرنام یا تغییر مسیر

تغییرنام با ID فایل قدیمی و ID فایل جدید به‌صورت صریح انجام می‌شود. ID جدید می‌تواند فقط نام فایل را عوض کند یا هم‌زمان پوشه را هم تغییر دهد.

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --rename `
  --old-file-id "photos/2026/a.jpg" `
  --new-file-id "photos/2026/a-renamed.jpg" `
  --apply
```

برای تغییرنام دسته‌ای، می‌توانید `--old-file-id` و `--new-file-id` را چند بار ارسال کنید:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --rename `
  --old-file-id "photos/2026/a.jpg" `
  --new-file-id "archive/2026/a.jpg" `
  --old-file-id "photos/2026/b.jpg" `
  --new-file-id "archive/2026/b.jpg" `
  --apply
```

همچنین می‌توانید نگاشت را در فایل JSON بنویسید:

```json
[
  {
    "oldFileId": "photos/2026/a.jpg",
    "newFileId": "archive/2026/a.jpg"
  },
  {
    "oldFileId": "photos/2026/b.jpg",
    "newFileId": "archive/2026/b.jpg"
  }
]
```

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --rename `
  --items-json ".\rename-items.json" `
  --apply
```

### پارامترهای تغییرنام

| پارامتر | توضیح |
| --- | --- |
| `--rename` | تغییرنام یا تغییر مسیر بر پایه نگاشت صریح |
| `--old-file-id <id>` | ID فایل اصلی؛ می‌توان چند بار ارسال کرد |
| `--new-file-id <id>` | ID فایل جدید؛ می‌توان چند بار ارسال کرد و تعداد آن باید با `--old-file-id` برابر باشد |
| `--items-json <path>` | آرایه JSON؛ هر عضو به شکل `{ "oldFileId": "...", "newFileId": "..." }` است |
| `--batch-size <n>` | تعداد موارد تغییرنام در هر درخواست؛ پیش‌فرض `15` و حداکثر `15` |

## ساخت پوشه

پوشه‌های ImgBed از مسیر فایل‌ها به دست می‌آیند و پوشه خالی واقعی وجود ندارد. هنگام ساخت پوشه، اسکریپت در پوشه مقصد یک فایل جای‌نگهدار به نام `0.md` می‌سازد تا آن پوشه در مدیریت فایل و آمار پوشه‌ها نمایش داده شود.

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --create-folder `
  --parent-directory "photos" `
  --folder-name "2026" `
  --apply
```

### پارامترهای ساخت پوشه

| پارامتر | توضیح |
| --- | --- |
| `--create-folder` | ساخت فایل جای‌نگهدار پوشه |
| `--parent-directory <dir>` | پوشه مادر؛ برای پوشه ریشه می‌توان رشته خالی ارسال کرد |
| `--folder-name <name>` | نام پوشه جدید |

## مسدودسازی و رفع مسدودسازی IP آپلود

با مجوز مدیریت می‌توان یک IP را به فهرست ممنوعیت آپلود اضافه کرد یا از آن فهرست برداشت. این کار روی آپلودهای بعدی آن IP اثر می‌گذارد و فایل‌هایی را که آن IP قبلاً آپلود کرده است حذف نمی‌کند.

مسدود کردن یک IP آپلود:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --block-ip "67.159.48.149" `
  --apply
```

مجاز کردن دوباره یک IP آپلود:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --allow-ip "67.159.48.149" `
  --apply
```

دیدن فهرست فعلی IPهای ممنوع از آپلود:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --blocked-ips
```

### پارامترهای مدیریت IP

| پارامتر | توضیح |
| --- | --- |
| `--block-ip <ip>` | افزودن به فهرست ممنوعیت آپلود |
| `--allow-ip <ip>` | حذف از فهرست ممنوعیت آپلود |

## ساخت و حذف Token آپلود کوتاه‌مدت

مجوز مدیریت می‌تواند Token کوتاه‌مدت مخصوص آپلود بسازد. این Token همیشه فقط مجوز `upload` دارد، مقدار `autoDelete` همیشه `true` است و حداکثر زمان انقضا `1` روز است.

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --create-upload-token `
  --name "Temporary Upload Token" `
  --owner "upload-bot" `
  --default-upload-channel telegram `
  --expires-in-minutes 20 `
  --apply `
  --output json
```

همچنین می‌توانید زمان‌مهر میلی‌ثانیه‌ای را مستقیم ارسال کنید:

```powershell
$expiresAt = [DateTimeOffset]::UtcNow.AddHours(12).ToUnixTimeMilliseconds()

node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --create-upload-token `
  --name "Upload Token valid for one day" `
  --owner "upload-bot" `
  --default-upload-channel telegram `
  --expires-at $expiresAt `
  --apply
```

برای حذف Token آپلود کوتاه‌مدت، باید `id` برگشتی از رابط ساخت را ارسال کنید. Token مدیریت فقط می‌تواند Tokenهایی را حذف کند که شرایط زیر را دارند:

| شرط | الزام |
| --- | --- |
| مجوز | `permissions` فقط `upload` باشد |
| حذف خودکار | `autoDelete=true` |
| مدت اعتبار | `expiresAt - createdAt <= 24` ساعت |

حذف Token آپلود کوتاه‌مدت:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --delete-upload-token `
  --token-id "mqt4jqokc85be80d1f0f47078e848a77d6c1aa6e" `
  --apply
```

Token مدیریت نمی‌تواند Token معمولی، Token بلندمدت، Token دارای مجوزهای `list` / `delete` / `manage` یا Token آپلود با اعتبار بیش از `1` روز را حذف کند. این Tokenها همچنان باید در پنل مدیریت مرورگر رسیدگی شوند.

### پارامترهای Token آپلود کوتاه‌مدت

| پارامتر | توضیح |
| --- | --- |
| `--create-upload-token` | ساخت Token کوتاه‌مدت مخصوص آپلود |
| `--delete-upload-token` | حذف Token کوتاه‌مدت مخصوص آپلود که شرایط لازم را دارد |
| `--name <name>` | نام Token |
| `--owner <owner>` | توضیح مالک Token |
| `--default-upload-channel <key>` | کانال پیش‌فرض آپلود؛ باید کانال واقعی باشد، مانند `telegram`، `s3` یا `github` |
| `--expires-in-minutes <n>` | تعداد دقیقه تا انقضا نسبت به زمان فعلی؛ حداکثر `1440` |
| `--expires-at <ms>` | زمان انقضای مطلق به‌صورت زمان‌مهر میلی‌ثانیه‌ای؛ حداکثر `24` ساعت پس از زمان فعلی |
| `--token-id <id>` | ID Token آپلود کوتاه‌مدتی که باید حذف شود |

Token آپلود کوتاه‌مدت فقط اجازه آپلود دارد. در آزمون، Token کوتاه‌مدت با `permissions=["upload"]` هنگام دسترسی به رابط‌های فهرست‌گیری، مدیریت فایل و حذف رد می‌شود.

پس از انقضا، Tokenهایی که `autoDelete=true` دارند زمانی پاک می‌شوند که سمت سرور هنگام بررسی متوجه انقضای آن‌ها شود. خواندن فهرست API Token نیز Tokenهای منقضی‌شده دارای `autoDelete=true` را پاک می‌کند.

## تطبیق رابط‌ها

| عمل | روش | رابط |
| --- | --- | --- |
| تغییر فراداده فایل | `PATCH` | `/api/manage/metadata/{fileId}` |
| خواندن برچسب بازبینی | `GET` | `/api/manage/label/{fileId}` |
| تغییر برچسب بازبینی | `POST` | `/api/manage/label/{fileId}` |
| خواندن برچسب‌های فایل | `GET` | `/api/manage/tags/{fileId}` |
| تغییر برچسب‌های فایل | `POST` | `/api/manage/tags/{fileId}` |
| تغییر دسته‌ای برچسب‌های فایل | `POST` | `/api/manage/tags/batch` |
| تغییر وضعیت فهرست | `POST` | `/api/manage/listType/{fileId}` |
| تغییر دسته‌ای وضعیت فهرست | `POST` | `/api/manage/listType/batch` |
| جابه‌جایی یا تغییرنام | `POST` | `/api/manage/relocate/batch` |
| ساخت پوشه | `POST` | `/api/manage/folder/create` |
| مسدودسازی IP آپلود | `POST` | `/api/manage/cusConfig/blockip` |
| رفع مسدودسازی IP آپلود | `POST` | `/api/manage/cusConfig/whiteip` |
| ساخت Token آپلود کوتاه‌مدت | `POST` | `/api/manage/apiTokens` |
| حذف Token آپلود کوتاه‌مدت | `DELETE` | `/api/manage/apiTokens?id={tokenId}` |

اسکریپت به‌صورت خودکار این سربرگ را می‌فرستد:

```text
Authorization: Bearer your API Token
```

## قالب خروجی

خروجی پیش‌فرض `pretty` برای خواندن انسانی مناسب است. اگر برنامه دیگری باید نتیجه را پردازش کند، از `--output json` استفاده کنید:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-tags `
  --file-id "photos/2026/a.jpg" `
  --output json
```

می‌توانید نتیجه کامل را هم ذخیره کنید:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-tags `
  --file-id "photos/2026/a.jpg" `
  --output json `
  --save-response ".\manage-result.json"
```

جابه‌جایی دسته‌ای، تغییرنام دسته‌ای و عملیات دسته‌ای فهرست، جریان پیشرفت NDJSON برگشتی از سمت سرور را تحلیل می‌کنند و تعداد رویدادها، وضعیت تکمیل و جزئیات خطا را خلاصه می‌کنند.

## پرسش‌های متداول

### چرا پس از اجرای فرمان چیزی تغییر نکرد؟

عملیات نوشتن به‌صورت پیش‌فرض در حالت پیش‌نمایش است. پس از بررسی نتیجه پیش‌نمایش، `--apply` را اضافه کنید تا تغییر واقعاً ذخیره شود.

### آیا این اسکریپت می‌تواند فایل آپلود، فهرست یا حذف کند؟

خیر. برای آپلود از اسکریپت‌های آپلود، برای فهرست‌گیری و فیلتر کردن از اسکریپت فهرست‌گیری، و برای حذف فایل مشخص از اسکریپت حذف استفاده کنید. اسکریپت مدیریت فایل فقط کارهای مدیریتی سبک زیر مجوز `manage` را انجام می‌دهد.

### از کجا بدانم کدام fileId را ارسال کنم؟

ابتدا با `imgbed-token-list.mjs --files` فایل‌ها را جست‌وجو کنید. مقدار `name` در نتیجه برگشتی معمولاً همان ID فایل است؛ یعنی همان مقداری که اینجا به `--file-id` داده می‌شود.

### هر عملیات دسته‌ای حداکثر چند فایل را پردازش می‌کند؟

سمت سرور در هر درخواست حداکثر `15` فایل را پردازش می‌کند. مقدار پیش‌فرض اسکریپت `--batch-size 15` است؛ اگر مقدار کوچک‌تری بدهید، اسکریپت کار را بر اساس همان تعداد به چند درخواست پشت‌سرهم تقسیم می‌کند.

### آیا می‌توان پوشه خالی واقعی ساخت؟

پوشه‌های ImgBed از مسیر فایل‌ها به دست می‌آیند و پوشه خالی واقعی وجود ندارد. `--create-folder` یک فایل جای‌نگهدار به نام `0.md` می‌سازد تا آن پوشه در مدیریت فایل و آمار پوشه‌ها نمایش داده شود.

### Token آپلود کوتاه‌مدت حداکثر چقدر دوام دارد؟

حداکثر `1` روز، یعنی `1440` دقیقه. اگر زمان از این مقدار بیشتر باشد، اسکریپت آن را محلی رد می‌کند و سمت سرور نیز `API_TOKEN_MANAGE_CREATE_EXPIRES_AT_TOO_LONG` برمی‌گرداند.

### آیا Token آپلود کوتاه‌مدت پس از انقضا خودکار حذف می‌شود؟

به‌صورت خودکار پاک می‌شود، اما نه با یک کار زمان‌بندی‌شده فوری. Token منقضی هنگام بررسی دوباره پاک می‌شود؛ خواندن فهرست API Token نیز Tokenهای منقضی‌شده دارای `autoDelete=true` را پاک می‌کند.
