# API Token سے فائلوں کا انتظام

API Token سے فائلوں کا انتظام اسکرپٹس، خودکار کاموں اور بیرونی انتظامی پینلز کے لیے ہے۔ یہ `manage` اجازت استعمال کرتا ہے، جس سے ایڈمن صفحہ کھولے بغیر فائل کی معلومات میں ترمیم، فائلوں کی منتقلی، فائلوں کے نام بدلنا، فولڈر کے لیے placeholder فائل بنانا، فائل کے ٹیگز اور فہرست کی حالت بدلنا، کسی اپ لوڈ IP کو بند یا بحال کرنا، اور عارضی اپ لوڈ Token بنانا یا حذف کرنا ممکن ہے۔

یہ اسکرپٹ صرف فائل مینجمنٹ اور صارف مینجمنٹ کے ہلکے انتظامی کام سنبھالتا ہے۔ اپ لوڈ، فہرست بنانا، حذف کرنا، اپ لوڈ ترتیبات، سائٹ ترتیبات اور federation تعلقات کے لیے اب بھی ان کے مخصوص اسکرپٹس استعمال ہوں گے۔

![API Token میں ترمیم](../../image/Safety/apitoken/编辑管理权限api.png)

## تیاری

ایڈمن پینل میں داخل ہونے کے بعد یہ کھولیں:

System Settings → Security Settings → API Token

API Token بناتے یا ترمیم کرتے وقت یقین کر لیں کہ اس Token کو انتظام کی اجازت دی گئی ہے۔ `manage` اجازت فائل کی حالت، صارف کی اپ لوڈ حالت اور عارضی اپ لوڈ Token بدل سکتی ہے، اس لیے اسے صرف قابل اعتماد اسکرپٹس یا قابل اعتماد صارفین کو دیں۔

فائل مینجمنٹ اسکرپٹ میں لکھنے والے کام پہلے سے preview mode میں ہوتے ہیں اور واقعی محفوظ نہیں ہوتے۔ preview درست ہونے کی تصدیق کے بعد `--apply` شامل کریں تاکہ لکھائی انجام دی جائے۔

Token کو ماحول کے متغیر میں بھی رکھا جا سکتا ہے:

```powershell
$env:IMGBED_API_TOKEN="your API Token"
```

## اسکرپٹ ڈاؤن لوڈ کریں

| اسکرپٹ | استعمال |
| --- | --- |
| <a href="/tools/imgbed-token-manage.mjs" download>فائل مینجمنٹ اسکرپٹ ڈاؤن لوڈ کریں</a> | فائل metadata، moderation labels، فائل ٹیگز، فہرست کی حالت، منتقلی، نام بدلنا، فولڈر بنانا، IP بند/بحال کرنا، عارضی اپ لوڈ Token بنانا اور حذف کرنا |

اسکرپٹ چلانے کے لیے مقامی مشین پر Node.js 18 یا اس سے نیا ورژن درکار ہے۔

## قابلیت کی حدیں

| قابلیت | اسکرپٹ | اجازت |
| --- | --- | --- |
| فائل اپ لوڈ کرنا | `imgbed-token-single-upload.mjs` / `imgbed-token-chunk-upload.mjs` | `upload` |
| فائلیں دکھانا، فائلیں فلٹر کرنا، صارف کے اعداد و شمار پڑھنا | `imgbed-token-list.mjs` | `list` |
| واضح طور پر دی گئی فائلیں حذف کرنا | `imgbed-token-delete.mjs` | `delete` |
| فائل معلومات، ٹیگز، فہرست، منتقلی، نام بدلنا، فولڈر بنانا، IP بند کرنا، عارضی اپ لوڈ Token بنانا یا حذف کرنا | `imgbed-token-manage.mjs` | `manage` |
| اپ لوڈ چینلز، سیکیورٹی ترتیبات، صفحہ ترتیبات، دیگر ترتیبات اور federation تعلقات میں ترمیم | ترتیب مینجمنٹ کے متعلقہ اسکرپٹس | `manage` |

`imgbed-token-manage.mjs` فائل اپ لوڈ نہیں کرتا، فائلوں کی فہرست نہیں بناتا اور فائل حذف نہیں کرتا۔ اگر `fileId` تلاش کرنا ہو تو پہلے فہرست والے اسکرپٹ سے فائلیں فلٹر کریں؛ اگر فائل حذف کرنی ہو تو واضح `fileId` حذف کرنے والے اسکرپٹ کو دیں۔

## عام پیرامیٹرز

| پیرامیٹر | ضروری | وضاحت |
| --- | --- | --- |
| `--base-url <url>` | ہاں | ImgBed سائٹ کا پتہ، مثلاً `https://image.ai6.me` |
| `--token <token>` | ہاں | API Token؛ `IMGBED_API_TOKEN` ماحول متغیر بھی استعمال کیا جا سکتا ہے |
| `--retries <n>` | نہیں | عارضی ناکامی پر دوبارہ کوششوں کی تعداد؛ طے شدہ قدر `3` |
| `--timeout-ms <n>` | نہیں | ایک درخواست کی وقت حد؛ طے شدہ قدر `180000` |
| `--output <pretty\|json>` | نہیں | output format؛ طے شدہ قدر `pretty` ہے۔ پروگرام سے استعمال کے لیے `json` بہتر ہے |
| `--save-response <path>` | نہیں | آخری نتیجہ JSON فائل میں محفوظ کرتا ہے |
| `--batch-size <n>` | نہیں | batch کاموں میں ہر درخواست کے اندر عمل ہونے والی تعداد؛ طے شدہ قدر `15`، زیادہ سے زیادہ `15` |
| `--apply` | نہیں | لکھائی واقعی انجام دیتا ہے؛ اس کے بغیر صرف preview ہوتا ہے |
| `-h` / `--help` | نہیں | اسکرپٹ کی مدد دکھاتا ہے |

## پہلے fileId کی تصدیق کریں

فائل مینجمنٹ اسکرپٹ کے زیادہ تر کاموں کے لیے `fileId` چاہیے۔ پہلے فہرست والے اسکرپٹ سے تلاش کر سکتے ہیں:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --dir "test4" `
  --count 10 `
  --output json
```

واپس آنے والے نتیجے میں `name` عموماً وہی `fileId` ہوتا ہے جسے فائل مینجمنٹ اسکرپٹ کو دیا جا سکتا ہے۔

## فائل metadata

فائل metadata سے ایڈمن فائل مینجمنٹ میں دکھنے والا فائل نام اور read source بدلا جاتا ہے۔

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-metadata `
  --file-id "photos/2026/a.jpg" `
  --file-name "cover.jpg" `
  --read-source backup
```

preview درست ہونے کے بعد محفوظ کریں:

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

### فائل metadata کے پیرامیٹرز

| پیرامیٹر | وضاحت |
| --- | --- |
| `--set-metadata` | ایک فائل کا metadata بدلتا ہے |
| `--file-id <id>` | جس فائل میں تبدیلی کرنی ہے اس کا ID |
| `--file-name <name>` | ایڈمن پینل میں دکھنے والا نیا نام |
| `--read-source <primary\|backup>` | پڑھنے کا ذریعہ؛ `primary` اصل ذریعہ ہے اور `backup` بیک اپ ذریعہ |

`--file-name` اور `--read-source` میں سے کم از کم ایک دینا ضروری ہے۔

## moderation labels

moderation labels فائل کی عمر کی درجہ بندی سے متعلق ہیں۔ پہلے موجودہ label پڑھا جا سکتا ہے، پھر تبدیلی کی جا سکتی ہے۔

moderation label پڑھیں:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-label `
  --file-id "photos/2026/a.jpg"
```

moderation label مقرر کریں:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-label `
  --file-id "photos/2026/a.jpg" `
  --label r12 `
  --apply
```

### moderation label کے پیرامیٹرز

| پیرامیٹر | وضاحت |
| --- | --- |
| `--get-label` | ایک فائل کا moderation label پڑھتا ہے |
| `--set-label` | ایک فائل کا moderation label بدلتا ہے |
| `--file-id <id>` | فائل ID |
| `--label <value>` | label value: `all-ages`، `r12`، `r16`، `r18`، `None` |

## فائل ٹیگز

فائل ٹیگز فائلوں کے ساتھ قابل تلاش کاروباری ٹیگز جوڑنے کے لیے استعمال ہوتے ہیں۔ اسکرپٹ پڑھنے، بدلنے، شامل کرنے اور ہٹانے کی سہولت دیتا ہے، اور کئی فائلوں پر batch عمل بھی کر سکتا ہے۔

فائل ٹیگز پڑھیں:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-tags `
  --file-id "photos/2026/a.jpg"
```

ٹیگز شامل کریں:

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

ٹیگز ہٹائیں:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --remove-tags `
  --file-id "photos/2026/a.jpg" `
  --tag "cover" `
  --apply
```

ٹیگز بدل دیں:

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

batch میں ٹیگز شامل کریں:

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

### فائل ٹیگز کے پیرامیٹرز

| پیرامیٹر | وضاحت |
| --- | --- |
| `--get-tags` | ایک فائل کے ٹیگز پڑھتا ہے |
| `--set-tags` | ایک فائل کے ٹیگز بدل دیتا ہے |
| `--add-tags` | ایک فائل میں ٹیگز شامل کرتا ہے |
| `--remove-tags` | ایک فائل سے ٹیگز ہٹاتا ہے |
| `--batch-tags` | batch میں ٹیگز مقرر، شامل یا حذف کرتا ہے |
| `--file-id <id>` | فائل ID؛ batch کاموں میں کئی بار دیا جا سکتا ہے |
| `--tag <tag>` | ٹیگ کی قدر؛ کئی بار دی جا سکتی ہے |
| `--tags-json <path>` | JSON فائل سے ٹیگز کی array پڑھتا ہے |
| `--tag-action <set\|add\|remove>` | batch ٹیگ کارروائی |

`--tags-json` فائل کے مواد کی مثال:

```json
["cover", "2026", "public"]
```

## blacklist اور whitelist کی حالت

فہرست کی حالت public access mode میں فائل کے access control کا رویہ طے کرتی ہے۔ اسے ایک فائل کے لیے بھی بدلا جا سکتا ہے اور batch میں بھی۔

ایک فائل کو whitelist میں رکھیں:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-list-type `
  --file-id "photos/2026/a.jpg" `
  --list-type White `
  --apply
```

batch میں blacklist میں شامل کریں:

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

فہرست کی طے شدہ حالت بحال کریں:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-list-type `
  --file-id "photos/2026/a.jpg" `
  --list-type None `
  --apply
```

### blacklist اور whitelist کے پیرامیٹرز

| پیرامیٹر | وضاحت |
| --- | --- |
| `--set-list-type` | ایک فائل کی فہرست حالت بدلتا ہے |
| `--batch-list-type` | فائلوں کی فہرست حالت batch میں بدلتا ہے؛ ایک درخواست زیادہ سے زیادہ `15` فائلیں سنبھالتی ہے |
| `--file-id <id>` | فائل ID؛ batch کاموں میں کئی بار دیا جا سکتا ہے |
| `--list-type <None\|White\|Block>` | `None` طے شدہ حالت ہے، `White` whitelist ہے، اور `Block` blacklist ہے |

## فائلیں منتقل کرنا

منتقلی ایک یا زیادہ فائلوں کو ہدف فولڈر میں لے جاتی ہے۔ backend ایک درخواست میں زیادہ سے زیادہ `15` فائلیں سنبھالتا ہے، اور اسکرپٹ `--batch-size` کے مطابق کام کو خودکار طور پر کئی درخواستوں میں تقسیم کر کے ترتیب سے چلاتا ہے۔

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

### منتقلی کے پیرامیٹرز

| پیرامیٹر | وضاحت |
| --- | --- |
| `--move` | فائلیں منتقل کرتا ہے |
| `--file-id <id>` | منتقل ہونے والی فائل ID؛ کئی بار دی جا سکتی ہے |
| `--target-path <dir>` | ہدف فولڈر |
| `--batch-size <n>` | ہر درخواست میں منتقل ہونے والی فائلوں کی تعداد؛ طے شدہ `15`، زیادہ سے زیادہ `15` |

## نام بدلنا یا راستہ بدلنا

نام بدلنے کے لیے پرانی فائل ID اور نئی فائل ID واضح طور پر دی جاتی ہیں۔ نئی فائل ID صرف فائل نام بھی بدل سکتی ہے اور ساتھ ہی فولڈر بھی بدل سکتی ہے۔

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --rename `
  --old-file-id "photos/2026/a.jpg" `
  --new-file-id "photos/2026/a-renamed.jpg" `
  --apply
```

batch نام بدلنے کے لیے `--old-file-id` اور `--new-file-id` کو بار بار دے سکتے ہیں:

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

mapping کو JSON فائل میں بھی لکھا جا سکتا ہے:

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

### نام بدلنے کے پیرامیٹرز

| پیرامیٹر | وضاحت |
| --- | --- |
| `--rename` | واضح mapping کے مطابق نام یا راستہ بدلتا ہے |
| `--old-file-id <id>` | اصل فائل ID؛ کئی بار دی جا سکتی ہے |
| `--new-file-id <id>` | نئی فائل ID؛ کئی بار دی جا سکتی ہے، تعداد `--old-file-id` کے برابر ہونی چاہیے |
| `--items-json <path>` | JSON array، جس کے عناصر `{ "oldFileId": "...", "newFileId": "..." }` ہوں |
| `--batch-size <n>` | ہر درخواست میں نام بدلنے والی items کی تعداد؛ طے شدہ `15`، زیادہ سے زیادہ `15` |

## فولڈر بنانا

ImgBed میں فولڈر فائل path سے بنتے ہیں؛ حقیقی خالی فولڈر موجود نہیں ہوتا۔ اسکرپٹ فولڈر بناتے وقت ہدف فولڈر میں `0.md` نام کی placeholder فائل بناتا ہے، تاکہ یہ فولڈر فائل مینجمنٹ اور فولڈر statistics میں دکھ سکے۔

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --create-folder `
  --parent-directory "photos" `
  --folder-name "2026" `
  --apply
```

### فولڈر بنانے کے پیرامیٹرز

| پیرامیٹر | وضاحت |
| --- | --- |
| `--create-folder` | فولڈر placeholder فائل بناتا ہے |
| `--parent-directory <dir>` | parent folder؛ root folder کے لیے خالی string دی جا سکتی ہے |
| `--folder-name <name>` | نئے فولڈر کا نام |

## اپ لوڈ IP بند اور بحال کرنا

انتظامی اجازت سے کسی IP کو upload block list میں شامل کیا جا سکتا ہے، اور اسے اس فہرست سے نکالا بھی جا سکتا ہے۔ یہ کام اس IP کی آئندہ اپ لوڈز پر اثر ڈالتا ہے؛ اس IP سے پہلے اپ لوڈ کی گئی فائلیں حذف نہیں ہوتیں۔

کسی اپ لوڈ IP کو بند کریں:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --block-ip "67.159.48.149" `
  --apply
```

کسی اپ لوڈ IP کو بحال کریں:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --allow-ip "67.159.48.149" `
  --apply
```

موجودہ upload block IP list دیکھیں:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --blocked-ips
```

### IP مینجمنٹ کے پیرامیٹرز

| پیرامیٹر | وضاحت |
| --- | --- |
| `--block-ip <ip>` | upload block list میں شامل کرتا ہے |
| `--allow-ip <ip>` | upload block list سے ہٹاتا ہے |

## عارضی اپ لوڈ Token بنانا اور حذف کرنا

انتظامی اجازت مختصر مدت کے upload-only Token بنا سکتی ہے۔ اس Token کے پاس ہمیشہ صرف `upload` اجازت ہوتی ہے، `autoDelete` ہمیشہ `true` ہوتا ہے، اور ختم ہونے کی زیادہ سے زیادہ مدت `1` دن ہے۔

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

millisecond timestamp براہ راست بھی دیا جا سکتا ہے:

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

عارضی اپ لوڈ Token حذف کرتے وقت، create API سے واپس آنے والا `id` دینا ضروری ہے۔ Management Token صرف وہ Token حذف کر سکتا ہے جو درج ذیل شرائط پوری کرتے ہوں:

| شرط | تقاضا |
| --- | --- |
| اجازت | `permissions` صرف `upload` ہو |
| خودکار حذف | `autoDelete=true` |
| مدت اعتبار | `expiresAt - createdAt <= 24` گھنٹے |

عارضی اپ لوڈ Token حذف کریں:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --delete-upload-token `
  --token-id "mqt4jqokc85be80d1f0f47078e848a77d6c1aa6e" `
  --apply
```

Management Token عام Token، طویل مدت Token، `list` / `delete` / `manage` اجازت رکھنے والے Token، یا `1` دن سے زیادہ مدت والے اپ لوڈ Token حذف نہیں کر سکتا۔ ایسے Token اب بھی براؤزر کے ایڈمن پینل سے سنبھالنے ہوں گے۔

### عارضی اپ لوڈ Token کے پیرامیٹرز

| پیرامیٹر | وضاحت |
| --- | --- |
| `--create-upload-token` | مختصر مدت کا upload-only Token بناتا ہے |
| `--delete-upload-token` | شرائط پوری کرنے والا مختصر مدت upload-only Token حذف کرتا ہے |
| `--name <name>` | Token کا نام |
| `--owner <owner>` | Token کی ملکیت کی وضاحت |
| `--default-upload-channel <key>` | default upload channel؛ یہ حقیقی چینل ہونا چاہیے، جیسے `telegram`، `s3`، `github` |
| `--expires-in-minutes <n>` | موجودہ وقت سے نسبتاً ختم ہونے کے منٹ؛ زیادہ سے زیادہ `1440` |
| `--expires-at <ms>` | absolute expiry time، millisecond timestamp؛ زیادہ سے زیادہ موجودہ وقت سے `24` گھنٹے |
| `--token-id <id>` | حذف کیے جانے والے عارضی اپ لوڈ Token کا ID |

عارضی اپ لوڈ Token صرف اپ لوڈ کر سکتا ہے۔ ٹیسٹ میں، `permissions=["upload"]` والے عارضی Token سے list، file management اور delete APIs تک رسائی مسترد ہوئی۔

مدت ختم ہونے کے بعد `autoDelete=true` والے Token اس وقت صاف ہوتے ہیں جب backend ان کی مدت ختم ہونے کی تصدیق کرتا ہے۔ API Token list پڑھنے پر بھی ختم شدہ auto-delete Token صاف ہو جاتے ہیں۔

## API mapping

| عمل | طریقہ | API |
| --- | --- | --- |
| فائل metadata بدلنا | `PATCH` | `/api/manage/metadata/{fileId}` |
| moderation label پڑھنا | `GET` | `/api/manage/label/{fileId}` |
| moderation label بدلنا | `POST` | `/api/manage/label/{fileId}` |
| فائل ٹیگز پڑھنا | `GET` | `/api/manage/tags/{fileId}` |
| فائل ٹیگز بدلنا | `POST` | `/api/manage/tags/{fileId}` |
| فائل ٹیگز batch میں بدلنا | `POST` | `/api/manage/tags/batch` |
| فہرست حالت بدلنا | `POST` | `/api/manage/listType/{fileId}` |
| فہرست حالت batch میں بدلنا | `POST` | `/api/manage/listType/batch` |
| منتقل کرنا یا نام بدلنا | `POST` | `/api/manage/relocate/batch` |
| فولڈر بنانا | `POST` | `/api/manage/folder/create` |
| اپ لوڈ IP بند کرنا | `POST` | `/api/manage/cusConfig/blockip` |
| اپ لوڈ IP بحال کرنا | `POST` | `/api/manage/cusConfig/whiteip` |
| عارضی اپ لوڈ Token بنانا | `POST` | `/api/manage/apiTokens` |
| عارضی اپ لوڈ Token حذف کرنا | `DELETE` | `/api/manage/apiTokens?id={tokenId}` |

اسکرپٹ خودکار طور پر یہ شامل کرتا ہے:

```text
Authorization: Bearer your API Token
```

## output format

طے شدہ `pretty` output انسان کے پڑھنے کے لیے مناسب ہے۔ اگر نتیجہ کسی دوسرے پروگرام کو دینا ہو تو `--output json` استعمال کریں:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-tags `
  --file-id "photos/2026/a.jpg" `
  --output json
```

مکمل نتیجہ محفوظ بھی کیا جا سکتا ہے:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-tags `
  --file-id "photos/2026/a.jpg" `
  --output json `
  --save-response ".\manage-result.json"
```

batch move، batch rename اور batch list کارروائیاں backend سے واپس آنے والی NDJSON progress stream کو parse کرتی ہیں، اور event count، completion status اور failure details کا خلاصہ بناتی ہیں۔

## عام سوالات

### command چلانے کے بعد تبدیلی کیوں نہیں ہوئی؟

لکھنے والے کام default طور پر preview mode میں ہوتے ہیں۔ preview درست ہونے کی تصدیق کے بعد `--apply` شامل کریں، تب تبدیلی واقعی محفوظ ہو گی۔

### کیا یہ اسکرپٹ فائل اپ لوڈ، list یا delete کر سکتا ہے؟

نہیں۔ اپ لوڈ کے لیے اپ لوڈ اسکرپٹس، list اور filter کے لیے list اسکرپٹ، اور واضح فائل حذف کرنے کے لیے delete اسکرپٹ استعمال کریں۔ فائل مینجمنٹ اسکرپٹ صرف `manage` اجازت کے تحت ہلکے انتظامی کام سنبھالتا ہے۔

### کیسے معلوم ہو کہ کون سا fileId دینا ہے؟

پہلے `imgbed-token-list.mjs --files` سے فائلیں تلاش کریں۔ واپس آنے والے نتیجے میں `name` عموماً file ID ہوتا ہے، یعنی وہی قدر جو یہاں `--file-id` کے طور پر دی جاتی ہے۔

### batch operation میں ایک بار زیادہ سے زیادہ کتنی فائلیں ہو سکتی ہیں؟

backend ایک درخواست میں زیادہ سے زیادہ `15` فائلیں سنبھالتا ہے۔ اسکرپٹ کی طے شدہ قدر `--batch-size 15` ہے؛ اس سے چھوٹی قدر دینے پر اسکرپٹ اسی تعداد کے مطابق کام کو کئی sequential requests میں تقسیم کر دے گا۔

### کیا حقیقی خالی فولڈر بنایا جا سکتا ہے؟

ImgBed میں فولڈر فائل paths سے اخذ ہوتے ہیں، اس لیے حقیقی خالی فولڈر نہیں ہوتا۔ `--create-folder` ایک `0.md` placeholder فائل بناتا ہے، جس سے فولڈر فائل مینجمنٹ اور فولڈر statistics میں دکھائی دیتا ہے۔

### عارضی اپ لوڈ Token زیادہ سے زیادہ کتنی دیر چل سکتا ہے؟

زیادہ سے زیادہ `1` دن، یعنی `1440` منٹ۔ اس سے زیادہ وقت دینے پر اسکرپٹ مقامی طور پر رد کر دے گا؛ backend بھی `API_TOKEN_MANAGE_CREATE_EXPIRES_AT_TOO_LONG` واپس کرے گا۔

### کیا عارضی اپ لوڈ Token مدت ختم ہونے کے بعد خودکار حذف ہو جاتا ہے؟

یہ خودکار طور پر صاف ہو جاتا ہے، مگر فوراً چلنے والی scheduled task کے ذریعے نہیں۔ مدت ختم شدہ Token دوبارہ check ہونے پر صاف ہوتا ہے؛ API Token list پڑھنے پر بھی `autoDelete=true` والے ختم شدہ Token صاف ہو جاتے ہیں۔
