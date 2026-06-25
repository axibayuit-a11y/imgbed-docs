# API Token فائل حذف کاری

API Token فائل حذف کاری اسکرپٹس، خودکار کاموں، اور فریق ثالث پروگراموں کے لیے ہے۔ آپ کو ایڈمن صفحہ کھولنے کی ضرورت نہیں۔ جب تک آپ سائٹ URL، token، اور واضح file IDs فراہم کرتے ہیں، آپ ImgBed سے ایک یا زیادہ فائلیں حذف کر سکتے ہیں۔

حذف کاری ایک write operation ہے اور کمانڈ چلنے کے بعد واقعی ڈیٹا حذف کرتی ہے۔ پہلے `imgbed-token-list.mjs` استعمال کر کے ان `fileId` قدروں کی تصدیق کریں جنہیں آپ حذف کرنا چاہتے ہیں، پھر وہ IDs حذف کاری اسکرپٹ کو دیں۔

![API Token میں ترمیم](../../image/Safety/apitoken/编辑api%20token.png)

## شروع کرنے سے پہلے

ایڈمن پینل کھولیں، پھر یہاں جائیں:

```text
System Settings -> Security Settings -> API Token
```

API Token بناتے یا ترمیم کرتے وقت یقینی بنائیں کہ token حذف کاری کی اجازت دیتا ہے۔ اس اسکرپٹ کو صرف `delete` permission درکار ہے۔

آپ token کو environment variable میں بھی رکھ سکتے ہیں:

```powershell
$env:IMGBED_API_TOKEN="your API Token"
```

## اسکرپٹ ڈاؤن لوڈ کریں

| اسکرپٹ | مقصد |
| --- | --- |
| <a href="/tools/imgbed-token-delete.mjs" download>فائل حذف کاری اسکرپٹ ڈاؤن لوڈ کریں</a> | ایک یا زیادہ واضح طور پر دی گئی file IDs حذف کریں۔ |

Node.js 18 یا بعد کا ورژن درکار ہے۔

## حذف کاری API کا رویہ

حذف کاری اسکرپٹ بیک اینڈ حذف کاری API کو کال کرتا ہے:

```text
POST /api/manage/delete/batch
```

درخواست میں API Token شامل ہونا ضروری ہے:

```text
Authorization: Bearer <token>
```

درخواست body کی مثال:

```json
{
  "fileIds": ["photos/2026/a.txt"],
  "deleteStrictness": "strict"
}
```

اگر `fileIds` میں ایک فائل ہو تو یہ single-file deletion ہے۔ اگر اس میں ایک سے زیادہ فائلیں ہوں تو یہ batch deletion ہے۔ بیک اینڈ ایک درخواست میں زیادہ سے زیادہ 15 فائلیں process کرتا ہے، اور اسکرپٹ `--batch-size` کے مطابق کام کو خودکار طور پر متعدد درخواستوں میں تقسیم کر دیتا ہے۔

API ایک NDJSON progress stream واپس کرتا ہے۔ عام events میں `batch_start`، `file_step`، `file_done`، `batch_complete`، اور `batch_error` شامل ہیں۔ اسکرپٹ ان events کو parse کر کے readable output یا JSON output کے طور پر خلاصہ بناتا ہے۔

کامیاب حذف کاری کے بعد بیک اینڈ فائل indexes، ڈائریکٹری statistics، capacity statistics، اور کیش صفائی خودکار طور پر سنبھالتا ہے۔

## حذف کاری اسکرپٹ کے پیرامیٹرز

| پیرامیٹر | ضروری | وضاحت |
| --- | --- | --- |
| `--base-url <url>` | ہاں | ImgBed سائٹ URL، مثلاً `https://image.ai6.me`۔ |
| `--token <token>` | ہاں | API Token۔ آپ `IMGBED_API_TOKEN` environment variable بھی استعمال کر سکتے ہیں۔ |
| `--file-id <id>` | ہاں | حذف کرنے کے لیے file ID۔ آپ اسے کئی بار دے سکتے ہیں۔ |
| `--strictness <strict\|soft>` | نہیں | حذف کاری کی سختی۔ طے شدہ قدر `strict` ہے۔ |
| `--batch-size <n>` | نہیں | ہر درخواست میں فائلوں کی تعداد۔ طے شدہ قدر `15`، زیادہ سے زیادہ `15`۔ |
| `--retries <n>` | نہیں | عارضی ناکامی پر دوبارہ کوششوں کی تعداد۔ طے شدہ قدر `3`۔ |
| `--timeout-ms <n>` | نہیں | ہر درخواست کا timeout۔ طے شدہ قدر `180000`۔ |
| `--output <pretty\|json>` | نہیں | output format۔ طے شدہ قدر `pretty`۔ |
| `--save-response <path>` | نہیں | حتمی نتیجہ JSON فائل کے طور پر محفوظ کریں۔ |
| `-h` / `--help` | نہیں | اسکرپٹ help دکھائیں۔ |

یہ اسکرپٹ صرف وہی واضح `--file-id` قدریں حذف کرتا ہے جو آپ دیتے ہیں۔ یہ fuzzy matching نہیں کرتا، کسی directory کو bulk میں خالی نہیں کرتا، اور comma-separated lists یا local files سے حذف کاری IDs نہیں پڑھتا۔

## سخت حذف کاری اور نرم حذف کاری

| موڈ | وضاحت |
| --- | --- |
| `strict` | طے شدہ موڈ۔ اگر remote storage حذف کاری ناکام ہو تو ImgBed ریکارڈ برقرار رہتا ہے تاکہ آپ دوبارہ کوشش یا تحقیق کر سکیں۔ |
| `soft` | اگر remote storage حذف کاری ناکام ہو، تب بھی ImgBed ریکارڈ صاف کر دیا جاتا ہے، اور نتیجہ ایک تنبیہ واپس کرتا ہے۔ |

اگر command کو کامیاب شمار کرنے کے لیے remote file کا حذف ہونا لازمی ہے تو طے شدہ `strict` موڈ استعمال کریں۔ اگر remote platform اب object حذف نہیں کر سکتا اور آپ صرف ImgBed record صاف کرنا چاہتے ہیں تو `soft` استعمال کریں۔

## مثالیں

ایک فائل حذف کریں:

```powershell
node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --file-id "photos/2026/a.txt"
```

environment variable سے token استعمال کریں:

```powershell
$env:IMGBED_API_TOKEN="your API Token"

node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --file-id "photos/2026/a.txt"
```

متعدد فائلیں حذف کریں:

```powershell
node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --file-id "photos/2026/a.txt" `
  --file-id "photos/2026/b.txt" `
  --file-id "photos/2026/c.txt"
```

remote deletion ناکام ہونے پر بھی ImgBed record صاف کریں:

```powershell
node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --file-id "photos/2026/a.txt" `
  --strictness soft
```

JSON output دیں اور نتیجہ محفوظ کریں:

```powershell
node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --file-id "photos/2026/a.txt" `
  --output json `
  --save-response ".\delete-result.json"
```

ہر درخواست کو 5 فائلوں تک محدود کریں:

```powershell
node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --file-id "photos/2026/a.txt" `
  --file-id "photos/2026/b.txt" `
  --batch-size 5
```

## حذف کرنے سے پہلے `fileId` چیک کریں

حذف کاری اسکرپٹ کو ImgBed file IDs درکار ہوتی ہیں۔ آپ پہلے listing script سے کسی directory میں فائلیں دیکھ سکتے ہیں:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --dir "photos/2026" `
  --count 10 `
  --output json
```

واپس آنے والے نتیجے میں `name` field عموماً وہ `fileId` ہوتا ہے جسے آپ حذف کاری اسکرپٹ کو دے سکتے ہیں۔

## عمومی سوالات

### حذف کاری ناکام کیوں ہوئی لیکن فائل اب بھی فہرست میں ہے؟

طے شدہ `strict` موڈ استعمال کرتے وقت، اگر remote storage حذف کاری ناکام ہو تو ImgBed record برقرار رہتا ہے۔ اس سے صرف local index حذف ہونے جبکہ remote file موجود رہنے کی صورت سے بچا جاتا ہے۔ یہ تصدیق کرنے کے بعد کہ آپ صرف ImgBed record صاف کرنا چاہتے ہیں، اسی `fileId` کو `soft` کے ساتھ دوبارہ چلائیں۔

### نتیجے میں تنبیہیں کیوں ہیں؟

تنبیہیں عموماً remote deletion، کیش صفائی، یا statistics finalization کے دوران کسی non-fatal مسئلے کی نشاندہی کرتی ہیں۔ اسکرپٹ تنبیہوں کا خلاصہ بناتا ہے تاکہ آپ فیصلہ کر سکیں کہ دوبارہ کوشش کرنی ہے یا نہیں۔

### کیا میں پوری ڈائریکٹری ایک ساتھ حذف کر سکتا ہوں؟

یہ اسکرپٹ directory-emptying operation فراہم نہیں کرتا۔ پہلے listing script سے واضح `fileId` قدریں filter کریں، پھر جن فائلوں کو حذف کرنا چاہتے ہیں انہیں ایک ایک کر کے pass کریں۔
