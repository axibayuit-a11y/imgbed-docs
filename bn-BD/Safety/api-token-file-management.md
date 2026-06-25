# API Token দিয়ে ফাইল ব্যবস্থাপনা

API Token দিয়ে ফাইল ব্যবস্থাপনা স্ক্রিপ্ট, স্বয়ংক্রিয় কাজ এবং তৃতীয় পক্ষের ব্যবস্থাপনা প্যানেলের জন্য উপযোগী। এটি `manage` অনুমতি ব্যবহার করে, যাতে প্রশাসন পৃষ্ঠা না খুলেই ফাইলের তথ্য সম্পাদনা, ফাইল সরানো, ফাইলের নাম বদলানো, ডিরেক্টরির placeholder ফাইল তৈরি, ফাইলের ট্যাগ ও তালিকার অবস্থা পরিবর্তন, কোনো আপলোড IP নিষিদ্ধ বা পুনরায় অনুমোদন, এবং স্বল্পমেয়াদি আপলোড Token তৈরি বা মুছে ফেলা যায়।

এই স্ক্রিপ্ট শুধু ফাইল ব্যবস্থাপনা ও ব্যবহারকারী ব্যবস্থাপনার হালকা প্রশাসনিক কাজ করে। আপলোড, তালিকা দেখা, মুছে ফেলা, আপলোড সেটিংস, সাইট সেটিংস এবং federation সম্পর্কের জন্য এখনও নিজস্ব আলাদা স্ক্রিপ্ট ব্যবহার করতে হবে।

![API Token সম্পাদনা](../../image/Safety/apitoken/编辑管理权限api.png)

## প্রস্তুতি

প্রশাসন প্যানেলে প্রবেশ করার পর খুলুন:

System Settings → Security Settings → API Token

API Token তৈরি বা সম্পাদনা করার সময় নিশ্চিত করুন যে এই Token-এ ব্যবস্থাপনার অনুমতি আছে। `manage` অনুমতি ফাইলের অবস্থা, ব্যবহারকারীর আপলোড অবস্থা এবং স্বল্পমেয়াদি আপলোড Token পরিবর্তন করতে পারে। তাই এটি শুধু বিশ্বস্ত স্ক্রিপ্ট বা বিশ্বস্ত ব্যবহারকারীকে দিন।

ফাইল ব্যবস্থাপনা স্ক্রিপ্টের লিখন-সংক্রান্ত কাজ ডিফল্টভাবে preview mode-এ থাকে এবং আসলে সংরক্ষণ করা হয় না। preview ঠিক আছে নিশ্চিত করার পর `--apply` যোগ করলে লিখন কার্যকর হবে।

Token পরিবেশ চলকে রাখা যায়:

```powershell
$env:IMGBED_API_TOKEN="your API Token"
```

## স্ক্রিপ্ট ডাউনলোড

| স্ক্রিপ্ট | ব্যবহার |
| --- | --- |
| <a href="/tools/imgbed-token-manage.mjs" download>ফাইল ব্যবস্থাপনা স্ক্রিপ্ট ডাউনলোড করুন</a> | ফাইল metadata, moderation labels, ফাইল ট্যাগ, তালিকার অবস্থা, সরানো, নাম বদলানো, ফোল্ডার তৈরি, IP নিষিদ্ধ/পুনরুদ্ধার, স্বল্পমেয়াদি আপলোড Token তৈরি ও মুছে ফেলা |

স্ক্রিপ্ট চালাতে স্থানীয় মেশিনে Node.js 18 বা তার নতুন সংস্করণ থাকতে হবে।

## কার্যসীমা

| ক্ষমতা | স্ক্রিপ্ট | অনুমতি |
| --- | --- | --- |
| ফাইল আপলোড | `imgbed-token-single-upload.mjs` / `imgbed-token-chunk-upload.mjs` | `upload` |
| ফাইল তালিকাভুক্ত করা, ফাইল ফিল্টার করা, ব্যবহারকারীর পরিসংখ্যান পড়া | `imgbed-token-list.mjs` | `list` |
| স্পষ্টভাবে নির্দিষ্ট করা ফাইল মুছে ফেলা | `imgbed-token-delete.mjs` | `delete` |
| ফাইল তথ্য, ট্যাগ, তালিকা, সরানো, নাম বদলানো, ফোল্ডার তৈরি, IP নিষিদ্ধ করা, স্বল্পমেয়াদি আপলোড Token তৈরি বা মুছে ফেলা | `imgbed-token-manage.mjs` | `manage` |
| আপলোড চ্যানেল, নিরাপত্তা সেটিংস, পৃষ্ঠা সেটিংস, অন্যান্য সেটিংস এবং federation সম্পর্ক সম্পাদনা | কনফিগারেশন ব্যবস্থাপনার সংশ্লিষ্ট স্ক্রিপ্ট | `manage` |

`imgbed-token-manage.mjs` ফাইল আপলোড করে না, ফাইল তালিকাভুক্ত করে না এবং ফাইল মুছে ফেলে না। `fileId` খুঁজতে হলে আগে তালিকা স্ক্রিপ্ট দিয়ে ফাইল ফিল্টার করুন; ফাইল মুছতে হলে স্পষ্ট `fileId` মুছে ফেলার স্ক্রিপ্টে দিন।

## সাধারণ প্যারামিটার

| প্যারামিটার | আবশ্যক | বিবরণ |
| --- | --- | --- |
| `--base-url <url>` | হ্যাঁ | ImgBed সাইটের ঠিকানা, যেমন `https://image.ai6.me` |
| `--token <token>` | হ্যাঁ | API Token; `IMGBED_API_TOKEN` পরিবেশ চলকও ব্যবহার করা যায় |
| `--retries <n>` | না | সাময়িক ব্যর্থতায় পুনরায় চেষ্টা করার সংখ্যা; ডিফল্ট `3` |
| `--timeout-ms <n>` | না | একক অনুরোধের সময়সীমা; ডিফল্ট `180000` |
| `--output <pretty\|json>` | না | আউটপুট ফরম্যাট; ডিফল্ট `pretty`। প্রোগ্রাম থেকে ব্যবহারের জন্য `json` ব্যবহার করুন |
| `--save-response <path>` | না | চূড়ান্ত ফলাফল JSON ফাইলে সংরক্ষণ করে |
| `--batch-size <n>` | না | batch কাজের প্রতিটি অনুরোধে প্রক্রিয়াকৃত আইটেমের সংখ্যা; ডিফল্ট `15`, সর্বোচ্চ `15` |
| `--apply` | না | সত্যিকারের লিখন চালায়; এটি না দিলে শুধু preview হয় |
| `-h` / `--help` | না | স্ক্রিপ্টের সহায়তা দেখায় |

## আগে fileId নিশ্চিত করুন

ফাইল ব্যবস্থাপনা স্ক্রিপ্টের বেশিরভাগ কাজের জন্য `fileId` লাগে। আগে তালিকা স্ক্রিপ্ট দিয়ে খুঁজে নিতে পারেন:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --dir "test4" `
  --count 10 `
  --output json
```

ফেরত পাওয়া ফলাফলের `name` সাধারণত সেই `fileId`, যা ফাইল ব্যবস্থাপনা স্ক্রিপ্টে দেওয়া যায়।

## ফাইল metadata

ফাইল metadata ব্যবহার করে প্রশাসন প্যানেলের ফাইল ব্যবস্থাপনায় দেখানো ফাইলের নাম এবং read source পরিবর্তন করা যায়।

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-metadata `
  --file-id "photos/2026/a.jpg" `
  --file-name "cover.jpg" `
  --read-source backup
```

preview ঠিক আছে নিশ্চিত করার পর সংরক্ষণ করুন:

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

### ফাইল metadata প্যারামিটার

| প্যারামিটার | বিবরণ |
| --- | --- |
| `--set-metadata` | একক ফাইলের metadata পরিবর্তন করে |
| `--file-id <id>` | যে ফাইল পরিবর্তন করা হবে তার ID |
| `--file-name <name>` | প্রশাসন প্যানেলে দেখানো নতুন নাম |
| `--read-source <primary\|backup>` | পড়ার উৎস; `primary` প্রধান উৎস, `backup` ব্যাকআপ উৎস |

`--file-name` এবং `--read-source`-এর অন্তত একটি দিতে হবে।

## moderation labels

moderation labels ফাইলের বয়সভিত্তিক রেটিংয়ের সঙ্গে সম্পর্কিত। আগে বর্তমান label পড়া যায়, তারপর পরিবর্তন করা যায়।

moderation label পড়ুন:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-label `
  --file-id "photos/2026/a.jpg"
```

moderation label সেট করুন:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-label `
  --file-id "photos/2026/a.jpg" `
  --label r12 `
  --apply
```

### moderation label প্যারামিটার

| প্যারামিটার | বিবরণ |
| --- | --- |
| `--get-label` | একক ফাইলের moderation label পড়ে |
| `--set-label` | একক ফাইলের moderation label পরিবর্তন করে |
| `--file-id <id>` | ফাইল ID |
| `--label <value>` | label value: `all-ages`, `r12`, `r16`, `r18`, `None` |

## ফাইল ট্যাগ

ফাইল ট্যাগ ফাইলে অনুসন্ধানযোগ্য কাজের ট্যাগ যুক্ত করতে ব্যবহৃত হয়। স্ক্রিপ্ট পড়া, প্রতিস্থাপন, যোগ করা ও সরানো সমর্থন করে, এবং একাধিক ফাইল batch আকারে প্রক্রিয়া করতে পারে।

ফাইল ট্যাগ পড়ুন:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-tags `
  --file-id "photos/2026/a.jpg"
```

ট্যাগ যোগ করুন:

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

ট্যাগ সরান:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --remove-tags `
  --file-id "photos/2026/a.jpg" `
  --tag "cover" `
  --apply
```

ট্যাগ প্রতিস্থাপন করুন:

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

batch আকারে ট্যাগ যোগ করুন:

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

### ফাইল ট্যাগ প্যারামিটার

| প্যারামিটার | বিবরণ |
| --- | --- |
| `--get-tags` | একক ফাইলের ট্যাগ পড়ে |
| `--set-tags` | একক ফাইলের ট্যাগ প্রতিস্থাপন করে |
| `--add-tags` | একক ফাইলে ট্যাগ যোগ করে |
| `--remove-tags` | একক ফাইল থেকে ট্যাগ সরায় |
| `--batch-tags` | batch আকারে ট্যাগ সেট, যোগ বা সরায় |
| `--file-id <id>` | ফাইল ID; batch কাজে একাধিকবার দেওয়া যায় |
| `--tag <tag>` | ট্যাগের মান; একাধিকবার দেওয়া যায় |
| `--tags-json <path>` | JSON ফাইল থেকে ট্যাগ array পড়ে |
| `--tag-action <set\|add\|remove>` | batch ট্যাগ কাজ |

`--tags-json` ফাইলের উদাহরণ:

```json
["cover", "2026", "public"]
```

## কালো ও সাদা তালিকার অবস্থা

তালিকার অবস্থা public access mode-এ ফাইলের access control আচরণ নির্ধারণ করে। এটি একক ফাইলের জন্য বা batch আকারে পরিবর্তন করা যায়।

একটি ফাইল সাদা তালিকায় রাখুন:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-list-type `
  --file-id "photos/2026/a.jpg" `
  --list-type White `
  --apply
```

batch আকারে কালো তালিকায় যোগ করুন:

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

ডিফল্ট তালিকার অবস্থা ফিরিয়ে আনুন:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-list-type `
  --file-id "photos/2026/a.jpg" `
  --list-type None `
  --apply
```

### কালো ও সাদা তালিকা প্যারামিটার

| প্যারামিটার | বিবরণ |
| --- | --- |
| `--set-list-type` | একক ফাইলের তালিকার অবস্থা পরিবর্তন করে |
| `--batch-list-type` | ফাইলের তালিকার অবস্থা batch আকারে পরিবর্তন করে; এক অনুরোধে সর্বোচ্চ `15` ফাইল |
| `--file-id <id>` | ফাইল ID; batch কাজে একাধিকবার দেওয়া যায় |
| `--list-type <None\|White\|Block>` | `None` ডিফল্ট অবস্থা, `White` সাদা তালিকা, `Block` কালো তালিকা |

## ফাইল সরানো

ফাইল সরানো এক বা একাধিক ফাইলকে লক্ষ্য ডিরেক্টরিতে নিয়ে যায়। backend এক অনুরোধে সর্বোচ্চ `15` ফাইল প্রক্রিয়া করে, এবং স্ক্রিপ্ট `--batch-size` অনুযায়ী কাজকে একাধিক অনুরোধে ভাগ করে ক্রমানুসারে চালায়।

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

### সরানোর প্যারামিটার

| প্যারামিটার | বিবরণ |
| --- | --- |
| `--move` | ফাইল সরায় |
| `--file-id <id>` | যে ফাইল সরানো হবে তার ID; একাধিকবার দেওয়া যায় |
| `--target-path <dir>` | লক্ষ্য ডিরেক্টরি |
| `--batch-size <n>` | প্রতিটি অনুরোধে সরানো ফাইলের সংখ্যা; ডিফল্ট `15`, সর্বোচ্চ `15` |

## নাম বা পথ বদলানো

নাম বদলাতে পুরোনো ফাইল ID এবং নতুন ফাইল ID স্পষ্টভাবে দেওয়া হয়। নতুন ফাইল ID শুধু ফাইলের নাম বদলাতে পারে, অথবা একই সঙ্গে ডিরেক্টরিও বদলাতে পারে।

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --rename `
  --old-file-id "photos/2026/a.jpg" `
  --new-file-id "photos/2026/a-renamed.jpg" `
  --apply
```

batch আকারে নাম বদলাতে `--old-file-id` এবং `--new-file-id` বারবার দিতে পারেন:

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

mapping JSON ফাইলেও লেখা যায়:

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

### নাম বদলানোর প্যারামিটার

| প্যারামিটার | বিবরণ |
| --- | --- |
| `--rename` | স্পষ্ট mapping অনুযায়ী নাম বা পথ বদলায় |
| `--old-file-id <id>` | মূল ফাইল ID; একাধিকবার দেওয়া যায় |
| `--new-file-id <id>` | নতুন ফাইল ID; একাধিকবার দেওয়া যায়, সংখ্যা অবশ্যই `--old-file-id`-এর সমান হতে হবে |
| `--items-json <path>` | JSON array; প্রতিটি উপাদান `{ "oldFileId": "...", "newFileId": "..." }` |
| `--batch-size <n>` | প্রতিটি অনুরোধে নাম বদলানোর item সংখ্যা; ডিফল্ট `15`, সর্বোচ্চ `15` |

## ফোল্ডার তৈরি

ImgBed-এর ডিরেক্টরি ফাইল path থেকে তৈরি হয়; প্রকৃত খালি ডিরেক্টরি নেই। স্ক্রিপ্ট ফোল্ডার তৈরি করলে লক্ষ্য ডিরেক্টরির নিচে `0.md` নামে একটি placeholder ফাইল তৈরি করে, যাতে ফাইল ব্যবস্থাপনা ও ডিরেক্টরি পরিসংখ্যানে সেই ডিরেক্টরি দেখা যায়।

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --create-folder `
  --parent-directory "photos" `
  --folder-name "2026" `
  --apply
```

### ফোল্ডার তৈরির প্যারামিটার

| প্যারামিটার | বিবরণ |
| --- | --- |
| `--create-folder` | ডিরেক্টরি placeholder ফাইল তৈরি করে |
| `--parent-directory <dir>` | parent directory; root directory-এর জন্য খালি string দেওয়া যায় |
| `--folder-name <name>` | নতুন ফোল্ডারের নাম |

## আপলোড IP নিষিদ্ধ ও পুনরুদ্ধার

ব্যবস্থাপনা অনুমতি দিয়ে কোনো IP-কে আপলোড নিষিদ্ধ তালিকায় যোগ করা যায়, আবার সেই তালিকা থেকে সরানো যায়। এই কাজ ওই IP-এর পরবর্তী আপলোডে প্রভাব ফেলে; ওই IP থেকে আগে আপলোড করা ফাইল মুছে ফেলে না।

কোনো আপলোড IP নিষিদ্ধ করুন:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --block-ip "67.159.48.149" `
  --apply
```

কোনো আপলোড IP পুনরায় অনুমোদন করুন:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --allow-ip "67.159.48.149" `
  --apply
```

বর্তমান নিষিদ্ধ আপলোড IP তালিকা দেখুন:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --blocked-ips
```

### IP ব্যবস্থাপনা প্যারামিটার

| প্যারামিটার | বিবরণ |
| --- | --- |
| `--block-ip <ip>` | আপলোড নিষিদ্ধ তালিকায় যোগ করে |
| `--allow-ip <ip>` | আপলোড নিষিদ্ধ তালিকা থেকে সরায় |

## স্বল্পমেয়াদি আপলোড Token তৈরি ও মুছে ফেলা

ব্যবস্থাপনা অনুমতি স্বল্পমেয়াদি, শুধু-আপলোড Token তৈরি করতে পারে। এই Token সবসময় শুধু `upload` অনুমতি রাখে, `autoDelete` সবসময় `true`, এবং সর্বোচ্চ মেয়াদ `1` দিন।

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

millisecond timestamp সরাসরিও দেওয়া যায়:

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

স্বল্পমেয়াদি আপলোড Token মুছতে তৈরি API থেকে ফেরত পাওয়া `id` দিতে হবে। ব্যবস্থাপনা Token শুধু নিচের শর্ত পূরণ করা Token মুছতে পারে:

| শর্ত | প্রয়োজনীয়তা |
| --- | --- |
| অনুমতি | `permissions` শুধু `upload` |
| স্বয়ংক্রিয় মুছে ফেলা | `autoDelete=true` |
| মেয়াদ | `expiresAt - createdAt <= 24` ঘণ্টা |

স্বল্পমেয়াদি আপলোড Token মুছুন:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --delete-upload-token `
  --token-id "mqt4jqokc85be80d1f0f47078e848a77d6c1aa6e" `
  --apply
```

ব্যবস্থাপনা Token সাধারণ Token, দীর্ঘমেয়াদি Token, `list` / `delete` / `manage` অনুমতিযুক্ত Token, অথবা `1` দিনের বেশি মেয়াদের আপলোড Token মুছতে পারে না। এসব Token এখনও ব্রাউজারের প্রশাসন প্যানেল থেকে পরিচালনা করতে হবে।

### স্বল্পমেয়াদি আপলোড Token প্যারামিটার

| প্যারামিটার | বিবরণ |
| --- | --- |
| `--create-upload-token` | স্বল্পমেয়াদি, শুধু-আপলোড Token তৈরি করে |
| `--delete-upload-token` | শর্ত পূরণ করা স্বল্পমেয়াদি শুধু-আপলোড Token মুছে ফেলে |
| `--name <name>` | Token-এর নাম |
| `--owner <owner>` | Token মালিকানার বিবরণ |
| `--default-upload-channel <key>` | ডিফল্ট আপলোড চ্যানেল; বাস্তব চ্যানেল হতে হবে, যেমন `telegram`, `s3`, `github` |
| `--expires-in-minutes <n>` | বর্তমান সময় থেকে মেয়াদ শেষ হতে মিনিট; সর্বোচ্চ `1440` |
| `--expires-at <ms>` | millisecond timestamp হিসেবে পূর্ণ মেয়াদ শেষের সময়; বর্তমান সময় থেকে সর্বোচ্চ `24` ঘণ্টা |
| `--token-id <id>` | যে স্বল্পমেয়াদি আপলোড Token মুছতে হবে তার ID |

স্বল্পমেয়াদি আপলোড Token শুধু আপলোড করতে পারে। পরীক্ষায় `permissions=["upload"]` থাকা স্বল্পমেয়াদি Token দিয়ে তালিকা, ফাইল ব্যবস্থাপনা এবং মুছে ফেলার API-তে প্রবেশ প্রত্যাখ্যান করা হয়েছে।

মেয়াদ শেষ হলে `autoDelete=true` থাকা Token backend যাচাই করে মেয়াদোত্তীর্ণ দেখলে পরিষ্কার করে। API Token তালিকা পড়লেও মেয়াদোত্তীর্ণ auto-delete Token পরিষ্কার হয়।

## API মিল

| কাজ | পদ্ধতি | API |
| --- | --- | --- |
| ফাইল metadata পরিবর্তন | `PATCH` | `/api/manage/metadata/{fileId}` |
| moderation label পড়া | `GET` | `/api/manage/label/{fileId}` |
| moderation label পরিবর্তন | `POST` | `/api/manage/label/{fileId}` |
| ফাইল ট্যাগ পড়া | `GET` | `/api/manage/tags/{fileId}` |
| ফাইল ট্যাগ পরিবর্তন | `POST` | `/api/manage/tags/{fileId}` |
| batch আকারে ফাইল ট্যাগ পরিবর্তন | `POST` | `/api/manage/tags/batch` |
| তালিকার অবস্থা পরিবর্তন | `POST` | `/api/manage/listType/{fileId}` |
| batch আকারে তালিকার অবস্থা পরিবর্তন | `POST` | `/api/manage/listType/batch` |
| সরানো বা নাম বদলানো | `POST` | `/api/manage/relocate/batch` |
| ফোল্ডার তৈরি | `POST` | `/api/manage/folder/create` |
| আপলোড IP নিষিদ্ধ | `POST` | `/api/manage/cusConfig/blockip` |
| আপলোড IP পুনরুদ্ধার | `POST` | `/api/manage/cusConfig/whiteip` |
| স্বল্পমেয়াদি আপলোড Token তৈরি | `POST` | `/api/manage/apiTokens` |
| স্বল্পমেয়াদি আপলোড Token মুছে ফেলা | `DELETE` | `/api/manage/apiTokens?id={tokenId}` |

স্ক্রিপ্ট স্বয়ংক্রিয়ভাবে যোগ করে:

```text
Authorization: Bearer your API Token
```

## আউটপুট ফরম্যাট

ডিফল্ট `pretty` আউটপুট মানুষের পড়ার জন্য উপযোগী। অন্য প্রোগ্রাম দিয়ে প্রক্রিয়া করতে হলে `--output json` ব্যবহার করুন:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-tags `
  --file-id "photos/2026/a.jpg" `
  --output json
```

পূর্ণ ফলাফলও সংরক্ষণ করা যায়:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-tags `
  --file-id "photos/2026/a.jpg" `
  --output json `
  --save-response ".\manage-result.json"
```

batch move, batch rename এবং batch list কাজ backend থেকে ফেরত পাওয়া NDJSON progress stream বিশ্লেষণ করে এবং event count, completion status ও failure details সারসংক্ষেপ করে।

## সাধারণ প্রশ্ন

### command চালানোর পর পরিবর্তন হলো না কেন?

লিখন কাজ ডিফল্টভাবে preview mode-এ থাকে। preview ঠিক আছে নিশ্চিত করার পর `--apply` যোগ করলে পরিবর্তন সত্যিই সংরক্ষিত হবে।

### এই স্ক্রিপ্ট কি ফাইল আপলোড, তালিকা বা মুছে ফেলতে পারে?

না। আপলোডের জন্য আপলোড স্ক্রিপ্ট, তালিকা ও ফিল্টারের জন্য তালিকা স্ক্রিপ্ট, এবং স্পষ্ট ফাইল মুছতে delete স্ক্রিপ্ট ব্যবহার করুন। ফাইল ব্যবস্থাপনা স্ক্রিপ্ট শুধু `manage` অনুমতির অধীনে হালকা প্রশাসনিক কাজ করে।

### কোন fileId দিতে হবে কীভাবে জানব?

আগে `imgbed-token-list.mjs --files` দিয়ে ফাইল খুঁজুন। ফেরত পাওয়া ফলাফলের `name` সাধারণত ফাইল ID, অর্থাৎ এখানে `--file-id` হিসেবে দেওয়া মান।

### batch operation-এ একবারে সর্বোচ্চ কত ফাইল?

backend এক অনুরোধে সর্বোচ্চ `15` ফাইল প্রক্রিয়া করে। স্ক্রিপ্টের ডিফল্ট `--batch-size 15`; ছোট মান দিলে সেই সংখ্যার ভিত্তিতে কাজটি একাধিক ধারাবাহিক অনুরোধে ভাগ হবে।

### প্রকৃত খালি ফোল্ডার তৈরি করা যায়?

ImgBed ডিরেক্টরি ফাইল path থেকে নির্ণয় করে, তাই প্রকৃত খালি ডিরেক্টরি নেই। `--create-folder` `0.md` নামে একটি placeholder ফাইল তৈরি করে, যাতে ফোল্ডারটি ফাইল ব্যবস্থাপনা ও ডিরেক্টরি পরিসংখ্যানে দেখা যায়।

### স্বল্পমেয়াদি আপলোড Token সর্বোচ্চ কতক্ষণ থাকে?

সর্বোচ্চ `1` দিন, অর্থাৎ `1440` মিনিট। এর বেশি দিলে স্ক্রিপ্ট স্থানীয়ভাবে প্রত্যাখ্যান করবে; backend-ও `API_TOKEN_MANAGE_CREATE_EXPIRES_AT_TOO_LONG` ফেরত দেবে।

### স্বল্পমেয়াদি আপলোড Token মেয়াদ শেষে স্বয়ংক্রিয়ভাবে মুছে যায়?

স্বয়ংক্রিয়ভাবে পরিষ্কার হয়, তবে তা কোনো তাৎক্ষণিক scheduled task নয়। মেয়াদোত্তীর্ণ Token আবার যাচাই হলে পরিষ্কার হয়; API Token তালিকা পড়লেও `autoDelete=true` থাকা মেয়াদোত্তীর্ণ Token পরিষ্কার হয়।
