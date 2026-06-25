# API Token কনফিগারেশন ব্যবস্থাপনা

API Token কনফিগারেশন ব্যবস্থাপনা স্বয়ংক্রিয় স্ক্রিপ্ট, অপারেশন টুল বা তৃতীয় পক্ষের কন্ট্রোল প্যানেলের জন্য তৈরি. অ্যাডমিন পাতা না খুলেই এটি আপলোড চ্যানেল কনফিগারেশন, নিরাপত্তা সেটিংস, পাতা সেটিংস, অন্যান্য সেটিংস এবং হালকা ফেডারেশন সম্পর্ক পড়তে ও হালনাগাদ করতে পারে.

ব্যবস্থাপনা অনুমতি শুধু স্ক্রিপ্টের উপযোগী হালকা কাজ প্রকাশ করে. ব্রাউজার নিশ্চিতকরণ, ফ্রন্টএন্ড ব্যাচ কাজ বা ফেডারেশন সূচি পরিষ্কার দরকার এমন ভারী কাজ এখনও ব্রাউজারের অ্যাডমিন প্যানেল থেকে করতে হবে.

![API Token সম্পাদনা](../../image/Safety/apitoken/编辑api token.png)

## শুরু করার আগে

অ্যাডমিন প্যানেল খুলে যান:

```text
System Settings -> Security Settings -> API Token
```

API Token তৈরি বা সম্পাদনা করার সময় নিশ্চিত করুন এতে ব্যবস্থাপনা অনুমতি আছে. ব্যবস্থাপনা অনুমতি সাইট কনফিগারেশন বদলাতে পারে, তাই শুধু বিশ্বস্ত স্ক্রিপ্ট বা বিশ্বস্ত ব্যবহারকারীকে দিন.

তিনটি ব্যবস্থাপনা স্ক্রিপ্টই লেখার কাজের জন্য ডিফল্টভাবে dry-run মোড ব্যবহার করে. পূর্বরূপ দেখে নেওয়ার পর পরিবর্তন সত্যিই সংরক্ষণ করতে `--apply` যোগ করুন.

token পরিবেশ চলকেও রাখা যায়:

```powershell
$env:IMGBED_API_TOKEN="your API Token"
```

## ব্যবস্থাপনা স্ক্রিপ্ট ডাউনলোড

ডকুমেন্টেশন প্যাকেজে তিনটি Node.js স্ক্রিপ্ট আছে:

| স্ক্রিপ্ট | উদ্দেশ্য |
| --- | --- |
| <a href="/tools/imgbed-token-upload-settings.mjs" download>আপলোড সেটিংস ব্যবস্থাপনা স্ক্রিপ্ট ডাউনলোড</a> | আপলোড চ্যানেল, উপ-চ্যানেল এবং লোড ব্যাল্যান্সিং পরিচালনা. |
| <a href="/tools/imgbed-token-site-settings.mjs" download>সাইট সেটিংস ব্যবস্থাপনা স্ক্রিপ্ট ডাউনলোড</a> | নিরাপত্তা সেটিংস, পাতা সেটিংস এবং অন্যান্য সেটিংস পরিচালনা. |
| <a href="/tools/imgbed-token-federation.mjs" download>ফেডারেশন সম্পর্ক ব্যবস্থাপনা স্ক্রিপ্ট ডাউনলোড</a> | হালকা ফেডারেশন সম্পর্কের কাজ, অনুরোধ এবং বার্তা পরিচালনা. |

Node.js 18 বা তার নতুন সংস্করণ প্রয়োজন.

### সাধারণ পরামিতি

| পরামিতি | আবশ্যিক | বর্ণনা |
| --- | --- | --- |
| `--base-url <url>` | হ্যাঁ | ImgBed সাইটের URL, যেমন `https://image.ai6.me`. |
| `--token <token>` | হ্যাঁ | API Token. চাইলে `IMGBED_API_TOKEN` পরিবেশ চলক ব্যবহার করতে পারেন. |
| `--retries <n>` | না | সাময়িক ব্যর্থতায় পুনরায় চেষ্টার সংখ্যা. ডিফল্ট `3`. |
| `--timeout-ms <n>` | না | অনুরোধের সময়সীমা. ডিফল্ট `180000`. |
| `--output <pretty\|json>` | না | আউটপুটের ধরন. ডিফল্ট `pretty`; প্রোগ্রামের জন্য `json` ব্যবহার করুন. |
| `--save-response <path>` | না | শেষ JSON ফলাফল ফাইলে সংরক্ষণ করে. |
| `--apply` | না | লেখার কাজ সত্যিই চালায়. না দিলে লেখার কাজ শুধু পূর্বরূপ দেখায়. |
| `-h` / `--help` | না | স্ক্রিপ্টের সাহায্য দেখায়. |

## আপলোড সেটিংস

আপলোড সেটিংস স্ক্রিপ্ট আপলোড উপ-চ্যানেলের তালিকা দেখায়, পড়ে, তৈরি করে, সম্পাদনা করে এবং মুছে ফেলে. এটি একটি শীর্ষ-স্তরের আপলোড চ্যানেলের লোড ব্যাল্যান্সিং চালু বা বন্ধও করতে পারে.

```powershell
node imgbed-token-upload-settings.mjs --base-url "https://your-domain" --token "your API Token" --list
```

### আপলোড সেটিংসের পরামিতি

| পরামিতি | বর্ণনা |
| --- | --- |
| `--list` | আপলোড সেটিংসের group তালিকা করে. |
| `--get` | একটি শীর্ষ-স্তরের চ্যানেল, অথবা তার অধীনে একটি উপ-চ্যানেল পড়ে. |
| `--upsert` | একটি উপ-চ্যানেল তৈরি বা সম্পাদনা করে. `--apply` না দিলে শুধু পূর্বরূপ দেখায়. |
| `--delete` | একটি উপ-চ্যানেল মুছে ফেলে. `--apply` না দিলে শুধু পূর্বরূপ দেখায়. |
| `--load-balance <true\|false>` | শীর্ষ-স্তরের চ্যানেলের load balancing চালু বা বন্ধ করে. |
| `--channel <key>` | শীর্ষ-স্তরের আপলোড চ্যানেল, যেমন `s3`, `github` বা `telegram`. |
| `--channel-name <name>` | উপ-চ্যানেল বা অ্যাকাউন্টের নাম. |
| `--set key=value` | একটি ক্ষেত্র সেট করে. পুনরাবৃত্তিযোগ্য. dot path সমর্থিত. |
| `--patch-json <path>` | JSON ফাইল থেকে ক্ষেত্র merge করে. |
| `--apply` | লেখার ফলাফল সংরক্ষণ করে. |

### চ্যানেল key

| চ্যানেল key | চ্যানেল |
| --- | --- |
| `telegram` / `tg` | Telegram |
| `discord` / `dc` | Discord |
| `cfr2` / `r2` | Cloudflare R2 |
| `s3` | S3 |
| `webdav` / `wd` | WebDAV সংরক্ষণ চ্যানেল |
| `github` / `gh` | GitHub Releases |
| `gitlab` / `gl` | GitLab Packages |
| `huggingface` / `hf` | Hugging Face |
| `onedrive` / `od` | OneDrive |
| `googledrive` / `google` / `gd` | Google Drive |
| `dropbox` / `db` | Dropbox |
| `yandex` / `yx` | Yandex Disk |
| `pcloud` / `pd` | pCloud |

### আপলোড সেটিংসের উদাহরণ

সব আপলোড সেটিংস তালিকা করা:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --list
```

S3 চ্যানেল কনফিগারেশন পড়া:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get `
  --channel s3
```

একটি S3 উপ-চ্যানেল পড়া:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get `
  --channel s3 `
  --channel-name "backup-s3"
```

একটি উপ-চ্যানেল তৈরি বা সম্পাদনা করা. পূর্বরূপ দেখতে আগে `--apply` ছাড়া চালান:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --upsert `
  --channel webdav `
  --channel-name "backup-webdav" `
  --set enabled=false `
  --set remark="backup test"
```

নিশ্চিত হলে সংরক্ষণ করুন:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --upsert `
  --channel webdav `
  --channel-name "backup-webdav" `
  --set enabled=false `
  --set remark="backup test" `
  --apply
```

একটি উপ-চ্যানেল মুছে ফেলা:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --delete `
  --channel webdav `
  --channel-name "backup-webdav" `
  --apply
```

S3 load balancing চালু করা:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --load-balance true `
  --channel s3 `
  --apply
```

জটিল ক্ষেত্রের জন্য একটি JSON ফাইল লিখে `--patch-json` দিয়ে দিন:

```json
{
  "enabled": true,
  "remark": "primary account"
}
```

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --upsert `
  --channel s3 `
  --channel-name "primary-s3" `
  --patch-json ".\s3-channel.json" `
  --apply
```

## সাইট সেটিংস

সাইট সেটিংস স্ক্রিপ্ট তিনটি কনফিগারেশন এলাকা পরিচালনা করে:

| এলাকা | পরামিতি | বর্ণনা |
| --- | --- | --- |
| নিরাপত্তা সেটিংস | `security` | ব্যবহারকারী প্রমাণীকরণ, অ্যাডমিন প্রমাণীকরণ, লগইন ডিভাইস, API Token, ছবি পর্যালোচনা, ব্যবহারকারীর হারসীমা, WebDAV এবং আরও. |
| পাতা সেটিংস | `page` | গ্লোবাল পাতা, ব্যবহারকারী-পক্ষের পাতা, অ্যাডমিন পাতা এবং সংশ্লিষ্ট প্রদর্শন সেটিংস. |
| অন্যান্য সেটিংস | `others` | র‍্যান্ডম ছবি API, প্রকাশ্য ব্রাউজিং, স্থানীয় ফেডারেশন নোড, auto tagging, IP geolocation, backup channel, OCR এবং আরও. |

সম্পাদনাযোগ্য এলাকা, বিভাগ এবং ক্ষেত্র দেখতে আগে `--list-sections` ব্যবহার করুন:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --list-sections
```

### সাইট সেটিংসের পরামিতি

| পরামিতি | বর্ণনা |
| --- | --- |
| `--list-sections` | সম্পাদনাযোগ্য এলাকা, বিভাগ এবং ক্ষেত্র তালিকা করে. |
| `--get` | একটি সেটিংস বিভাগ পড়ে. |
| `--area <security\|page\|others>` | কনফিগারেশন এলাকা বেছে নেয়. |
| `--section <name>` | বিভাগ বেছে নেয়. `--list-sections` দেখানো নাম ব্যবহার করুন. |
| `--set key=value` | একটি ক্ষেত্র সেট করে. পুনরাবৃত্তিযোগ্য. |
| `--apply` | লেখার ফলাফল সংরক্ষণ করে. |

`page` এলাকার জন্য `--set` পাতা কনফিগারেশন item ID ব্যবহার করে, যেমন `starsEffect=true`. `security` এবং `others` এলাকার জন্য `--set` ওই বিভাগের ক্ষেত্রের নাম ব্যবহার করে, যেমন `email=admin@example.com`.

### সাইট সেটিংসের উদাহরণ

system update notification সেটিংস পড়া:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get `
  --area security `
  --section systemUpdate
```

system update notification ইমেল বদলানো. পূর্বরূপ দেখতে আগে `--apply` ছাড়া চালান:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --area security `
  --section systemUpdate `
  --set email="admin@example.com"
```

নিশ্চিত হলে সংরক্ষণ করুন:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --area security `
  --section systemUpdate `
  --set email="admin@example.com" `
  --apply
```

অ্যাডমিন পৃষ্ঠার star effect বদলানো:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --area page `
  --section adminSettings `
  --set starsEffect=true `
  --apply
```

IP geolocation ভাষা বদলানো:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --area others `
  --section ipGeolocation `
  --set language="en" `
  --apply
```

স্থানীয় ফেডারেশন নোড সেটিংস চালু অবস্থা, sync directory এবং invite code-এর মতো সাধারণ ক্ষেত্র পড়তে ও হালনাগাদ করতে পারে. ডোমেইন নিশ্চিতকরণ API Token দিয়ে করা হয় না. অ্যাডমিন প্যানেল যদি জানায় যে স্থানীয় নোডের ডোমেইন বর্তমান প্রবেশ ডোমেইন থেকে আলাদা, তাহলে ব্রাউজারের অ্যাডমিন প্যানেলে নিশ্চিতকরণ সম্পন্ন করুন.

## ফেডারেশন সম্পর্ক

ফেডারেশন স্ক্রিপ্ট স্থানীয় নোডের অবস্থা, outgoing নোড, incoming নোড, বার্তা, join request, no-record reapply কাজ, অনুমোদন, প্রত্যাখ্যান এবং সূচি পরিষ্কার দরকার নেই এমন হালকা সম্পর্কের কাজ পরিচালনা করে.

সূচি হালনাগাদ, ফেডারেশন সূচি মুছে ফেলা এবং ডোমেইন পরিবর্তন নিশ্চিতকরণ পূর্ণ ব্রাউজার কর্মপ্রবাহের ওপর নির্ভর করে. স্ক্রিপ্ট এসব ভারী কাজ করে না.

### হালকা ও ভারী ফেডারেশন কাজ

| কাজ | স্ক্রিপ্ট সমর্থন | বর্ণনা |
| --- | --- | --- |
| স্থানীয় নোডের অবস্থা দেখা এবং সম্পর্ক তালিকা করা | সমর্থিত | শুধু সম্পর্কের রেকর্ড পড়ে. |
| বার্তা পড়া এবং বার্তা পাঠানো | সমর্থিত | সম্পর্কের বার্তা পড়ে বা লেখে. |
| অন্য নোডে যোগদানের অনুরোধ করা | সমর্থিত | invite link ব্যবহার করে অনুরোধ জমা দেয়. |
| রেকর্ডবিহীন সম্পর্কের জন্য reapply | সমর্থিত | শুধু `lastResult=none` থাকা outgoing card-এর জন্য; 6-character invite code দরকার. |
| outgoing pending request বাতিল করা | সমর্থিত | শুধু pending request বাতিল করে. |
| incoming request accept বা deny করা | সমর্থিত | আপনার নোডে যোগ দিতে চাওয়া নোডের অনুরোধ প্রক্রিয়া করে. |
| accepted incoming relation সরানো | সমর্থিত | incoming relation record হালনাগাদ করে এবং peer-কে জানায়. |
| incoming terminal record মুছে ফেলা | সমর্থিত | শুধু incoming terminal relation record মুছে ফেলে. |
| accepted outgoing subscription বাতিল করা | শুধু ব্রাউজারে | local federation index deletion দরকার, যা ব্রাউজার ব্যাচ আকারে চালায়. |
| outgoing terminal record মুছে ফেলা | শুধু ব্রাউজারে | আগে federation index cleanup লাগতে পারে. |
| domain change confirm বা cancel করা | শুধু ব্রাউজারে | current-domain confirmation এবং domain-change index handling দরকার. |
| index publish, pull বা batch-delete করা | শুধু ব্রাউজারে | এগুলো ফ্রন্টএন্ড ব্যাচ কাজ. |

### ফেডারেশন পরামিতি

| পরামিতি | বর্ণনা |
| --- | --- |
| `--status` | স্থানীয় ফেডারেশন নোডের অবস্থা, outgoing নোড এবং incoming নোড দেখা. |
| `--list` | ফেডারেশন সম্পর্ক তালিকা করা. |
| `--chat` | একটি সম্পর্কের ক্যাশে থাকা বার্তা পড়া. |
| `--send-message` | একটি প্রতিষ্ঠিত সম্পর্কে বার্তা পাঠানো. |
| `--join` | invite link দিয়ে অন্য নোডে যোগদানের অনুরোধ করা. |
| `--reapply` | রেকর্ডবিহীন সম্পর্কের জন্য reapply করা. 6-character invite code দরকার. |
| `--accept` | incoming request গ্রহণ করা. |
| `--deny` | incoming request প্রত্যাখ্যান করা. |
| `--cancel` | outgoing pending request বাতিল করা, অথবা accepted incoming relation সরানো. |
| `--delete` | incoming terminal relation record মুছে ফেলা. |
| `--direction <outgoing\|incoming\|all>` | সম্পর্কের দিক. `outgoing` মানে আপনি যেসব নোডে যোগ দিয়েছেন; `incoming` মানে যেসব নোড আপনারটিতে যোগ দিচ্ছে. |
| `--domain <url>` | সম্পর্কিত নোডের ডোমেইন. |
| `--invite-link <url>` | peer node-এর invite link. |
| `--invite-code <code>` | reapply-এর জন্য ব্যবহৃত 6-character invite code. |
| `--text <message>` | বার্তার text. |
| `--apply` | লেখার ফলাফল সংরক্ষণ করে. |

### Federation উদাহরণ

local node status এবং দুই relation তালিকা দেখা:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --status
```

শুধু outgoing nodes তালিকা:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --list `
  --direction outgoing
```

শুধু incoming nodes তালিকা:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --list `
  --direction incoming
```

অন্য নোডে join request করা. পূর্বরূপ দেখতে আগে `--apply` ছাড়া চালান:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --join `
  --invite-link "https://peer-domain/federation/invite/abcdef"
```

নিশ্চিত হলে সংরক্ষণ করুন:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --join `
  --invite-link "https://peer-domain/federation/invite/abcdef" `
  --apply
```

no-record relation-এর জন্য reapply:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --reapply `
  --domain "https://peer-domain" `
  --invite-code "abc123" `
  --apply
```

incoming request গ্রহণ:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --accept `
  --domain "https://peer-domain" `
  --apply
```

incoming request প্রত্যাখ্যান:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --deny `
  --domain "https://peer-domain" `
  --apply
```

প্রতিষ্ঠিত relation-এ message পাঠানো:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --send-message `
  --direction outgoing `
  --domain "https://peer-domain" `
  --text "Hello, this is a test message." `
  --apply
```

outgoing pending request বাতিল:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --cancel `
  --direction outgoing `
  --domain "https://peer-domain" `
  --apply
```

accepted incoming relation সরানো:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --cancel `
  --direction incoming `
  --domain "https://peer-domain" `
  --apply
```

incoming terminal record মুছে ফেলা:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --delete `
  --direction incoming `
  --domain "https://peer-domain" `
  --apply
```

Accepted outgoing subscription cancellation এবং outgoing record deletion ব্রাউজারের অ্যাডমিন প্যানেলে করতে হবে, কারণ এসব কাজের আগে local federation index cleanup লাগতে পারে.

### ডোমেইন অমিল

local node domain এবং কোনো সম্পর্কের pending domain না মিললে স্ক্রিপ্ট `currentDomain` এবং `pendingDomain` সহ ত্রুটি জানায়. এটি ব্রাউজারের অ্যাডমিন প্যানেলে সমাধান করুন, কারণ domain change-এ outgoing index cleanup এবং confirmation-ও জড়িত.

join request `FEDERATION_NODE_DOMAIN_MISMATCH` ফেরত দিলে invite link-এ ব্যবহৃত domain peer node-এর সংরক্ষিত local domain-এর সঙ্গে মেলে না. প্রতিক্রিয়ায় `currentOrigin` এবং `detectedOrigin` থাকে. peer-এর বর্তমানে confirmed domain ব্যবহার করুন, অথবা peer-কে আগে তাদের ব্রাউজার অ্যাডমিন প্যানেলে domain confirm করতে বলুন.

## সাধারণ প্রশ্ন

### আমার পরিবর্তন কার্যকর হলো না কেন?

লেখার কমান্ড ডিফল্টভাবে পূর্বরূপ মোডে চলে. পূর্বরূপ দেখে নেওয়ার পর পরিবর্তন সত্যিই সংরক্ষণ করতে `--apply` যোগ করুন.

### কোন ক্ষেত্র বদলানো যায় কীভাবে জানব?

আপলোড সেটিংসের ক্ষেত্রে বর্তমান উপ-চ্যানেলের গঠন দেখতে `--get` ব্যবহার করুন. নিরাপত্তা সেটিংস, পৃষ্ঠা সেটিংস এবং অন্যান্য সেটিংসের ক্ষেত্রে স্ক্রিপ্ট যে এলাকা, বিভাগ এবং ক্ষেত্র সম্পাদনা করতে পারে তা দেখতে `--list-sections` ব্যবহার করুন.

### ফলাফল অন্য প্রোগ্রামে ব্যবহার করতে চাই

`--output json` ব্যবহার করুন, অথবা `--save-response result.json` যোগ করুন. আপনার প্রোগ্রাম সংরক্ষিত JSON ফাইল সরাসরি পড়তে পারবে.


