# فهرست‌گیری و فیلتر با API Token

اسکریپت فهرست‌گیری با API Token برای اسکریپت‌ها، کارهای خودکار و برنامه‌های بیرونی مناسب است که باید داده‌های ImgBed را بخوانند. این اسکریپت فقط از مجوز `list` استفاده می‌کند. فایل آپلود نمی‌کند، فایل حذف نمی‌کند، تنظیمات را تغییر نمی‌دهد و برای هیچ IP امکان آپلود را نمی‌بندد یا باز نمی‌کند.

![ویرایش API Token](../../image/Safety/apitoken/编辑列出权限api.png)

کاربردهای اصلی:

| قابلیت | توضیح |
| --- | --- |
| فهرست مدیریت فایل | فهرست فایل‌ها را از پنل مدیریت می‌خواند و از پارامترهای فیلتر پیشرفته در مدیریت فایل پشتیبانی می‌کند |
| فهرست مدیریت کاربران | آمار آپلود کاربر/IP را می‌خواند و از پارامترهای فیلتر در مدیریت کاربران پشتیبانی می‌کند |
| فهرست کانال‌های آپلود | کانال‌های آپلود، کانال‌های فرعی، ظرفیت و اطلاعات توازن بار را پس از حذف اطلاعات حساس می‌خواند |
| جدول آمار پوشه‌ها | آمار پوشه‌ها و اطلاعات صفحه‌بندی پوشه‌ها را می‌خواند |

## آماده‌سازی

در پنل مدیریت باز کنید:

```text
System Settings -> Security Settings -> API Token
```

هنگام ساخت یا ویرایش API Token، مطمئن شوید مجوز فهرست‌گیری فعال است. این اسکریپت فقط به مجوز `list` نیاز دارد.

API Token را می‌توان در متغیر محیطی هم قرار داد:

```powershell
$env:IMGBED_API_TOKEN="your API Token"
```

## دانلود اسکریپت

| اسکریپت | کاربرد |
| --- | --- |
| <a href="/tools/imgbed-token-list.mjs" download>اسکریپت فهرست‌گیری و فیلتر</a> | فهرست مدیریت فایل، فهرست مدیریت کاربران، فهرست کانال‌های آپلود و جدول آمار پوشه‌ها |

برای اجرا، Node.js 18 یا نسخه جدیدتر لازم است.

## پارامترهای عمومی

| پارامتر | ضروری | توضیح |
| --- | --- | --- |
| `--base-url <url>` | بله | نشانی سایت ImgBed، مانند `https://image.ai6.me` |
| `--token <token>` | بله | API Token؛ می‌توان از متغیر محیطی `IMGBED_API_TOKEN` هم استفاده کرد |
| `--retries <n>` | خیر | تعداد تلاش دوباره هنگام خطای موقت؛ پیش‌فرض `3` |
| `--timeout-ms <n>` | خیر | زمان مجاز یک درخواست؛ پیش‌فرض `180000` |
| `--output <pretty\|json>` | خیر | قالب خروجی؛ پیش‌فرض `pretty`؛ برای پردازش برنامه‌ای بهتر است `json` استفاده شود |
| `--save-response <path>` | خیر | نتیجه نهایی را در فایل JSON ذخیره می‌کند |
| `-h` / `--help` | خیر | راهنمای اسکریپت را نشان می‌دهد |

## فهرست مدیریت فایل

نمایش فایل‌های مدیریت فایل:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --count 10
```

خروجی JSON:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --count 10 `
  --output json
```

خواندن فقط تعداد در شرایط فیلتر فعلی:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --file-summary `
  --dir "photos/2026" `
  --recursive
```

### پارامترهای مدیریت فایل

| پارامتر | توضیح |
| --- | --- |
| `--files` | فایل‌ها را فهرست می‌کند |
| `--file-summary` | فقط آمار تعداد را می‌خواند |
| `--start <n>` | جابه‌جایی صفحه‌بندی |
| `--count <n>` | تعداد رکوردهای برگشتی |
| `--dir <path>` | پوشه مشخص |
| `--recursive` | فایل‌های داخل زیرپوشه‌ها را هم شامل می‌شود |
| `--search <text>` | کلیدواژه جست‌وجو |
| `--channel <key>` | فیلتر بر اساس کانال اصلی آپلود، مانند `github`، `s3` یا `yandex` |
| `--channel-scope <primary\|backup\|all>` | دامنه فیلتر کانال: کانال اصلی، کانال پشتیبان یا همه |
| `--channel-name-groups <value>` | فیلتر گروه‌های کانال فرعی؛ با قالب فعلی سمت سرور ارسال می‌شود |
| `--list-type <csv>` | نوع فهرست، معمولاً `None,White,Block` |
| `--include-tags <csv>` | باید این برچسب‌ها را داشته باشد |
| `--exclude-tags <csv>` | این برچسب‌ها را حذف می‌کند |
| `--time-start <ms>` | زمان شروع آپلود، به‌صورت برچسب زمانی میلی‌ثانیه |
| `--time-end <ms>` | زمان پایان آپلود، به‌صورت برچسب زمانی میلی‌ثانیه |
| `--file-exts <csv>` | فقط پسوندهای مشخص را شامل می‌کند، مانند `jpg,png,pdf` |
| `--exclude-file-exts <csv>` | پسوندهای مشخص را حذف می‌کند |
| `--file-status-categories <csv>` | دسته‌های فایل: `image,audio,video,document,code,other` |
| `--upload-ip <ip>` | فیلتر بر اساس پیشوند IP آپلود |
| `--age-ratings <csv>` | درجه‌بندی سنی: `none,all-ages,r12,r16,r18` |
| `--orientation <csv>` | فیلتر جهت تصویر؛ با مقدارهای فعلی سمت سرور ارسال می‌شود |
| `--read-source <csv>` | فیلتر منبع خواندن؛ با مقدارهای فعلی سمت سرور ارسال می‌شود |
| `--access-status <normal\|blocked>` | وضعیت دسترسی عمومی |
| `--min-width <n>` | کمترین عرض |
| `--max-width <n>` | بیشترین عرض |
| `--min-height <n>` | کمترین ارتفاع |
| `--max-height <n>` | بیشترین ارتفاع |
| `--min-file-size <mb>` | کمترین اندازه فایل؛ از پارامتر MB فعلی سمت سرور استفاده می‌کند |
| `--max-file-size <mb>` | بیشترین اندازه فایل؛ از پارامتر MB فعلی سمت سرور استفاده می‌کند |

### نمونه‌های مدیریت فایل

جست‌وجوی PDF:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --search "pdf" `
  --file-status-categories "document" `
  --count 20
```

فیلتر بر اساس IP آپلود و کانال:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --upload-ip "103.62" `
  --channel yandex `
  --channel-scope primary
```

ذخیره نتیجه کامل:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --count 100 `
  --output json `
  --save-response ".\files.json"
```

## فهرست مدیریت کاربران

نمایش آمار آپلود کاربر/IP:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --count 20
```

جست‌وجوی یک IP یا نشانی:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --search "43.198.183.56"
```

دیدن جزئیات فایل‌های آپلودشده از یک IP:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --user-detail `
  --ip "43.198.183.56" `
  --count 20
```

نمایش IPهای ممنوع از آپلود:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --blocked-ips
```

### پارامترهای مدیریت کاربران

| پارامتر | توضیح |
| --- | --- |
| `--users` | آمار آپلود کاربر/IP را فهرست می‌کند |
| `--user-detail` | جزئیات فایل‌های آپلودشده از یک IP مشخص را نشان می‌دهد |
| `--blocked-ips` | IPهای ممنوع از آپلود را فهرست می‌کند |
| `--ip <ip>` | همراه `--user-detail` ضروری است |
| `--start <n>` | جابه‌جایی صفحه‌بندی |
| `--count <n>` | تعداد رکوردهای برگشتی |
| `--sort <value>` | مرتب‌سازی: `timeDesc`، `timeAsc`، `countDesc`، `countAsc`، `totalSizeDesc`، `totalSizeAsc` |
| `--search <text>` | جست‌وجوی IP یا نشانی |
| `--upload-status <allowed\|blocked>` | آیا آپلود مجاز است |
| `--start-time <ms>` | زمان شروع آمار، به‌صورت برچسب زمانی میلی‌ثانیه |
| `--end-time <ms>` | زمان پایان آمار، به‌صورت برچسب زمانی میلی‌ثانیه |
| `--file-status-categories <csv>` | فیلتر دسته فایل |
| `--age-ratings <csv>` | فیلتر درجه‌بندی سنی |
| `--min-file-size <mb>` | کمترین اندازه فایل |
| `--max-file-size <mb>` | بیشترین اندازه فایل |
| `--list-type <csv>` | نوع فهرست، معمولاً `None,White,Block` |
| `--access-status <normal\|blocked>` | وضعیت دسترسی عمومی |

### نمونه‌های مدیریت کاربران

نمایش کاربران ممنوع از آپلود:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --upload-status blocked
```

جست‌وجو با کلیدواژه نشانی:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --search "Hong Kong"
```

مرتب‌سازی بر اساس تعداد آپلود:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --sort countDesc `
  --count 50
```

## فهرست کانال‌های آپلود

نمایش پیکربندی کانال‌های آپلود پس از حذف اطلاعات حساس:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --channels
```

داده‌های برگشتی شامل این موارد است:

| فیلد | توضیح |
| --- | --- |
| `type` | نوع کانال اصلی آپلود، مانند `github`، `s3` یا `yandex` |
| `name` | نام کانال فرعی یا حساب |
| `enabled` | آیا فعال است |
| `load_balance_enabled` | آیا توازن بار برای این نوع کانال فعال است |
| `quota_enabled` | آیا بررسی ظرفیت فعال است |
| `quota_limit_bytes` | سقف ظرفیت |
| `quota_used_bytes` | ظرفیت استفاده‌شده |
| `quota_checked_at` | زمان بررسی ظرفیت |
| `tag_json` | برچسب‌های غیرحساس، مانند مخزن عمومی یا مخزن خصوصی |
| `created_at` / `updated_at` | زمان ساخت و زمان به‌روزرسانی |

این رابط کلید محرمانه، توکن تازه‌سازی، توکن موقت، گذرواژه یا هیچ پیکربندی حساس دیگری را برنمی‌گرداند.

## جدول آمار پوشه‌ها

نمایش آمار پوشه‌ها:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --directories `
  --limit 20
```

نمایش مسیر کامل پوشه‌ها و جست‌وجو با پیشوند:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --directories `
  --scope full `
  --search-prefix "test" `
  --include-parents `
  --limit 10
```

### پارامترهای آمار پوشه‌ها

| پارامتر | توضیح |
| --- | --- |
| `--directories` | جدول آمار پوشه‌ها را فهرست می‌کند |
| `--dir <path>` | فهرست از کدام پوشه آغاز شود |
| `--scope <direct\|full>` | `direct` فقط پوشه‌های مستقیم را فهرست می‌کند، `full` مسیر کامل را فهرست می‌کند |
| `--search-prefix <path>` | جست‌وجو بر اساس پیشوند پوشه |
| `--include-parents` | در حالت `full` پوشه‌های بالادستی را هم می‌آورد |
| `--limit <n>` | تعداد رکوردهای برگشتی؛ بیشترین مقدار سمت سرور `100` است |
| `--cursor <path>` | نشانگر صفحه بعد |

## قالب خروجی

خروجی پیش‌فرض `pretty` برای خواندن دستی مناسب است:

```powershell
node imgbed-token-list.mjs --base-url "https://your-domain" --token "your API Token" --users --count 5
```

اگر می‌خواهید نتیجه را به برنامه دیگری بدهید، از `--output json` استفاده کنید:

```powershell
node imgbed-token-list.mjs --base-url "https://your-domain" --token "your API Token" --users --count 5 --output json
```

می‌توانید نتیجه کامل را هم ذخیره کنید:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --count 5 `
  --output json `
  --save-response ".\users.json"
```

## پرسش‌های رایج

### آیا این اسکریپت داده‌ها را تغییر می‌دهد؟

نه. این اسکریپت فقط رابط‌های خواندن را فراخوانی می‌کند. آپلود، حذف، جابه‌جایی، ویرایش تنظیمات یا بستن و باز کردن امکان آپلود برای هیچ IP انجام نمی‌دهد.

### چرا مجوز `list` لازم است؟

فهرست مدیریت فایل، فهرست مدیریت کاربران، فهرست کانال‌های بدون اطلاعات حساس و آمار پوشه‌ها همگی قابلیت خواندن هستند؛ بنابراین API Token فقط به مجوز `list` نیاز دارد.

### چگونه همه پارامترهای قابل استفاده را ببینم؟

اجرا کنید:

```powershell
node imgbed-token-list.mjs --help
```

اسکریپت همه عملیات و پارامترها را نشان می‌دهد.

