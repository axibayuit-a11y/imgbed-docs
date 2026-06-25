# API Token দিয়ে তালিকা দেখা ও ফিল্টার করা

স্ক্রিপ্ট, স্বয়ংক্রিয় কাজ বা তৃতীয় পক্ষের প্রোগ্রামের ImgBed ডেটা পড়ার দরকার হলে API Token তালিকা স্ক্রিপ্ট উপযোগী. এগুলো শুধু `list` অনুমতি ব্যবহার করে. এগুলো ফাইল আপলোড করে না, ফাইল মুছে ফেলে না, কনফিগারেশন বদলায় না, এবং কোনো IP ঠিকানা ব্লক বা অনুমোদন করে না.

প্রধান ব্যবহার:

| সুবিধা | বর্ণনা |
| --- | --- |
| ফাইল ম্যানেজার তালিকা | অ্যাডমিন ফাইল তালিকা পড়া এবং ফাইল ব্যবস্থাপনায় থাকা একই উন্নত ফিল্টার ব্যবহার করা. |
| ব্যবহারকারী ব্যবস্থাপনা তালিকা | ব্যবহারকারী/IP আপলোড পরিসংখ্যান পড়া এবং ব্যবহারকারী ব্যবস্থাপনার ফিল্টার ব্যবহার করা. |
| আপলোড চ্যানেল তালিকা | সংবেদনশীল তথ্য সরানো আপলোড চ্যানেল, উপ-চ্যানেল, ধারণক্ষমতার ডেটা এবং লোড ব্যাল্যান্সিংয়ের অবস্থা পড়া. |
| ডিরেক্টরি পরিসংখ্যান | ডিরেক্টরি পরিসংখ্যান এবং পেজ করা ডিরেক্টরি তথ্য পড়া. |

## শুরু করার আগে

অ্যাডমিন প্যানেল খুলে যান:

```text
System Settings -> Security Settings -> API Token
```

API Token তৈরি বা সম্পাদনা করার সময় নিশ্চিত করুন token-টি তালিকা দেখার অনুমতি দেয়. এই স্ক্রিপ্টের শুধু `list` অনুমতি দরকার.

token পরিবেশ চলকেও রাখা যায়:

```powershell
$env:IMGBED_API_TOKEN="your API Token"
```

## স্ক্রিপ্ট ডাউনলোড

| স্ক্রিপ্ট | উদ্দেশ্য |
| --- | --- |
| <a href="/tools/imgbed-token-list.mjs" download>তালিকা ও ফিল্টার স্ক্রিপ্ট ডাউনলোড</a> | ফাইল ম্যানেজার তালিকা, ব্যবহারকারী ব্যবস্থাপনা তালিকা, আপলোড চ্যানেল তালিকা এবং ডিরেক্টরি পরিসংখ্যান. |

Node.js 18 বা তার নতুন সংস্করণ প্রয়োজন.

## সাধারণ পরামিতি

| পরামিতি | আবশ্যিক | বর্ণনা |
| --- | --- | --- |
| `--base-url <url>` | হ্যাঁ | ImgBed সাইটের URL, যেমন `https://image.ai6.me`. |
| `--token <token>` | হ্যাঁ | API Token. চাইলে `IMGBED_API_TOKEN` পরিবেশ চলক ব্যবহার করতে পারেন. |
| `--retries <n>` | না | সাময়িক ব্যর্থতায় পুনরায় চেষ্টার সংখ্যা. ডিফল্ট `3`. |
| `--timeout-ms <n>` | না | প্রতিটি অনুরোধের সময়সীমা. ডিফল্ট `180000`. |
| `--output <pretty\|json>` | না | আউটপুটের ধরন. ডিফল্ট `pretty`; প্রোগ্রামের জন্য `json` ব্যবহার করুন. |
| `--save-response <path>` | না | শেষ ফলাফল JSON ফাইল হিসেবে সংরক্ষণ করে. |
| `-h` / `--help` | না | স্ক্রিপ্টের সাহায্য দেখায়. |

## ফাইল ম্যানেজার তালিকা

ফাইল ব্যবস্থাপনার ফাইল তালিকা দেখা:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --count 10
```

JSON আউটপুট:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --count 10 `
  --output json
```

বর্তমান ফিল্টারের অধীনে শুধু সংখ্যা পড়া:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --file-summary `
  --dir "photos/2026" `
  --recursive
```

### ফাইল ম্যানেজারের পরামিতি

| পরামিতি | বর্ণনা |
| --- | --- |
| `--files` | ফাইল তালিকা দেখায়. |
| `--file-summary` | শুধু সংখ্যা পরিসংখ্যান পড়ে. |
| `--start <n>` | পেজিং সরণ. |
| `--count <n>` | ফেরত দেওয়ার রেকর্ড সংখ্যা. |
| `--dir <path>` | লক্ষ্য ডিরেক্টরি. |
| `--recursive` | উপ-ডিরেক্টরির ফাইলও অন্তর্ভুক্ত করে. |
| `--search <text>` | অনুসন্ধান শব্দ. |
| `--channel <key>` | আপলোড চ্যানেল দিয়ে ফিল্টার, যেমন `github`, `s3` বা `yandex`. |
| `--channel-scope <primary\|backup\|all>` | চ্যানেল ফিল্টারের পরিসর: primary channel, backup channel বা সব. |
| `--channel-name-groups <value>` | উপ-চ্যানেল গ্রুপ ফিল্টার, ব্যাকএন্ডে সরাসরি পাঠানো হয়. |
| `--list-type <csv>` | তালিকার ধরন, সাধারণত `None,White,Block`. |
| `--include-tags <csv>` | এসব ট্যাগ থাকতে হবে. |
| `--exclude-tags <csv>` | এসব ট্যাগ বাদ দেওয়া হবে. |
| `--time-start <ms>` | আপলোড সময়ের শুরু, মিলিসেকেন্ড সময়মুদ্রা. |
| `--time-end <ms>` | আপলোড সময়ের শেষ, মিলিসেকেন্ড সময়মুদ্রা. |
| `--file-exts <csv>` | শুধু নির্দিষ্ট extension অন্তর্ভুক্ত করে, যেমন `jpg,png,pdf`. |
| `--exclude-file-exts <csv>` | নির্দিষ্ট extension বাদ দেয়. |
| `--file-status-categories <csv>` | ফাইল শ্রেণি: `image,audio,video,document,code,other`. |
| `--upload-ip <ip>` | আপলোড IP prefix দিয়ে ফিল্টার. |
| `--age-ratings <csv>` | বয়সভিত্তিক রেটিং: `none,all-ages,r12,r16,r18`. |
| `--orientation <csv>` | দিকনির্দেশ ফিল্টার, ব্যাকএন্ডে সরাসরি পাঠানো হয়. |
| `--read-source <csv>` | পড়ার উৎস ফিল্টার, ব্যাকএন্ডে সরাসরি পাঠানো হয়. |
| `--access-status <normal\|blocked>` | প্রকাশ্য প্রবেশাধিকার অবস্থা. |
| `--min-width <n>` | ন্যূনতম প্রস্থ. |
| `--max-width <n>` | সর্বোচ্চ প্রস্থ. |
| `--min-height <n>` | ন্যূনতম উচ্চতা. |
| `--max-height <n>` | সর্বোচ্চ উচ্চতা. |
| `--min-file-size <mb>` | ন্যূনতম ফাইল আকার, ব্যাকএন্ডের বিদ্যমান MB পরামিতি ব্যবহার করে. |
| `--max-file-size <mb>` | সর্বোচ্চ ফাইল আকার, ব্যাকএন্ডের বিদ্যমান MB পরামিতি ব্যবহার করে. |

### ফাইল ম্যানেজার উদাহরণ

PDF খোঁজা:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --search "pdf" `
  --file-status-categories "document" `
  --count 20
```

আপলোড IP এবং চ্যানেল দিয়ে ফিল্টার:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --upload-ip "103.62" `
  --channel yandex `
  --channel-scope primary
```

পূর্ণ ফলাফল সংরক্ষণ:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --count 100 `
  --output json `
  --save-response ".\files.json"
```

## ব্যবহারকারী ব্যবস্থাপনা তালিকা

ব্যবহারকারী/IP আপলোড পরিসংখ্যান দেখা:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --count 20
```

কোনো IP বা ঠিকানা খোঁজা:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --search "43.198.183.56"
```

একটি IP থেকে আপলোড করা ফাইল দেখা:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --user-detail `
  --ip "43.198.183.56" `
  --count 20
```

ব্লক করা আপলোড IP তালিকা:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --blocked-ips
```

### ব্যবহারকারী ব্যবস্থাপনার পরামিতি

| পরামিতি | বর্ণনা |
| --- | --- |
| `--users` | ব্যবহারকারী/IP আপলোড পরিসংখ্যান দেখায়. |
| `--user-detail` | নির্দিষ্ট IP থেকে আপলোড করা ফাইল দেখায়. |
| `--blocked-ips` | ব্লক করা আপলোড IP দেখায়. |
| `--ip <ip>` | `--user-detail`-এর সঙ্গে আবশ্যিক. |
| `--start <n>` | পেজিং সরণ. |
| `--count <n>` | ফেরত দেওয়ার রেকর্ড সংখ্যা. |
| `--sort <value>` | সাজানোর ক্রম: `timeDesc`, `timeAsc`, `countDesc`, `countAsc`, `totalSizeDesc`, `totalSizeAsc`. |
| `--search <text>` | IP বা ঠিকানা খোঁজা. |
| `--upload-status <allowed\|blocked>` | আপলোড অনুমোদিত কি না. |
| `--start-time <ms>` | পরিসংখ্যানের শুরু সময়, মিলিসেকেন্ড সময়মুদ্রা. |
| `--end-time <ms>` | পরিসংখ্যানের শেষ সময়, মিলিসেকেন্ড সময়মুদ্রা. |
| `--file-status-categories <csv>` | ফাইল শ্রেণি ফিল্টার. |
| `--age-ratings <csv>` | বয়সভিত্তিক রেটিং ফিল্টার. |
| `--min-file-size <mb>` | ন্যূনতম ফাইল আকার. |
| `--max-file-size <mb>` | সর্বোচ্চ ফাইল আকার. |
| `--list-type <csv>` | তালিকার ধরন, সাধারণত `None,White,Block`. |
| `--access-status <normal\|blocked>` | প্রকাশ্য প্রবেশাধিকার অবস্থা. |

### ব্যবহারকারী ব্যবস্থাপনা উদাহরণ

আপলোড থেকে ব্লক করা ব্যবহারকারী দেখা:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --upload-status blocked
```

ঠিকানার কীওয়ার্ড দিয়ে খোঁজা:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --search "Hong Kong"
```

আপলোড সংখ্যা দিয়ে সাজানো:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --sort countDesc `
  --count 50
```

## আপলোড চ্যানেল তালিকা

সংবেদনশীল তথ্য সরানো আপলোড চ্যানেল কনফিগারেশন দেখা:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --channels
```

ফেরত আসা ডেটায় থাকে:

| ক্ষেত্র | বর্ণনা |
| --- | --- |
| `type` | আপলোড চ্যানেলের ধরন, যেমন `github`, `s3` বা `yandex`. |
| `name` | উপ-চ্যানেল বা অ্যাকাউন্টের নাম. |
| `enabled` | চালু আছে কি না. |
| `load_balance_enabled` | এই চ্যানেল ধরনের জন্য load balancing চালু আছে কি না. |
| `quota_enabled` | ধারণক্ষমতা পরীক্ষা চালু আছে কি না. |
| `quota_limit_bytes` | ধারণক্ষমতার সীমা. |
| `quota_used_bytes` | ব্যবহৃত ধারণক্ষমতা. |
| `quota_checked_at` | ধারণক্ষমতা পরীক্ষা করার সময়. |
| `tag_json` | অসংবেদনশীল ট্যাগ, যেমন public repository বা private repository. |
| `created_at` / `updated_at` | তৈরি এবং হালনাগাদের সময়. |

এই API গোপন কী, রিফ্রেশ টোকেন, access token, পাসওয়ার্ড বা অন্য সংবেদনশীল কনফিগারেশন ফেরত দেয় না.

## ডিরেক্টরি পরিসংখ্যান

ডিরেক্টরি পরিসংখ্যান দেখা:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --directories `
  --limit 20
```

পূর্ণ ডিরেক্টরি পথ দেখানো এবং prefix দিয়ে খোঁজা:

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

### ডিরেক্টরি পরিসংখ্যানের পরামিতি

| পরামিতি | বর্ণনা |
| --- | --- |
| `--directories` | ডিরেক্টরি পরিসংখ্যান দেখায়. |
| `--dir <path>` | কোন ডিরেক্টরি থেকে শুরু হবে. |
| `--scope <direct\|full>` | `direct` শুধু সরাসরি উপ-ডিরেক্টরি দেখায়; `full` পূর্ণ পথ দেখায়. |
| `--search-prefix <path>` | ডিরেক্টরি prefix দিয়ে খোঁজা. |
| `--include-parents` | `full` মোডে parent directory-ও অন্তর্ভুক্ত করে. |
| `--limit <n>` | ফেরত দেওয়ার রেকর্ড সংখ্যা. ব্যাকএন্ডের সর্বোচ্চ `100`. |
| `--cursor <path>` | পরের পৃষ্ঠার cursor. |

## আউটপুটের ধরন

ডিফল্ট `pretty` আউটপুট মানুষ পড়ে দেখার জন্য উপযোগী:

```powershell
node imgbed-token-list.mjs --base-url "https://your-domain" --token "your API Token" --users --count 5
```

অন্য প্রোগ্রামের জন্য `--output json` ব্যবহার করুন:

```powershell
node imgbed-token-list.mjs --base-url "https://your-domain" --token "your API Token" --users --count 5 --output json
```

পূর্ণ ফলাফলও সংরক্ষণ করা যায়:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --count 5 `
  --output json `
  --save-response ".\users.json"
```

## সাধারণ প্রশ্ন

### এই স্ক্রিপ্ট কি ডেটা বদলায়?

না. এই স্ক্রিপ্ট শুধু পড়ার API ডাকে. এটি আপলোড, মুছে ফেলা, সরানো, কনফিগারেশন সম্পাদনা, বা কোনো IP ঠিকানা ব্লক/অনুমোদন করে না.

### `list` অনুমতি কেন দরকার?

ফাইল ম্যানেজার তালিকা, ব্যবহারকারী ব্যবস্থাপনা তালিকা, সংবেদনশীল তথ্য সরানো চ্যানেল তালিকা এবং ডিরেক্টরি পরিসংখ্যান সবই পড়ার ক্ষমতা, তাই শুধু API Token-এর `list` অনুমতি দরকার.

### সব উপলব্ধ পরামিতি কীভাবে দেখব?

চালান:

```powershell
node imgbed-token-list.mjs --help
```

স্ক্রিপ্ট সব কাজ এবং পরামিতি দেখাবে.

