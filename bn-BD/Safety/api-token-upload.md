# API Token দিয়ে ফাইল আপলোড

API Token আপলোড স্ক্রিপ্ট, স্বয়ংক্রিয় কাজ এবং তৃতীয় পক্ষের প্রোগ্রামের জন্য তৈরি. ওয়েব UI খুলতে হবে না. সাইটের URL, token, স্থানীয় ফাইলের পথ এবং একটি বাস্তব আপলোড চ্যানেল দিলেই ফাইল ImgBed-এ আপলোড করা যায় এবং প্রতিক্রিয়ায় ফাইলের URL পাওয়া যায়.

![API Token সম্পাদনা](../../image/Safety/apitoken/编辑api token.png)

## শুরু করার আগে

অ্যাডমিন প্যানেল খুলে যান:

```text
System Settings -> Security Settings -> API Token
```

API Token তৈরি বা সম্পাদনা করার সময় নিশ্চিত করুন এতে upload অনুমতি আছে এবং এটি বাস্তব ডিফল্ট আপলোড চ্যানেল ব্যবহার করছে. API Token আপলোড স্মার্ট ডিসপ্যাচ প্রবেশপথ ব্যবহার করে না, তাই স্ক্রিপ্টেও বাস্তব চ্যানেল দিতে হবে.

## আপলোড স্ক্রিপ্ট ডাউনলোড

ডকুমেন্টেশন প্যাকেজে দুটি Node.js স্ক্রিপ্ট আছে:

| স্ক্রিপ্ট | উদ্দেশ্য |
| --- | --- |
| <a href="/tools/imgbed-token-single-upload.mjs" download>একক অনুরোধের আপলোড স্ক্রিপ্ট ডাউনলোড</a> | একবার `/upload` ডাকে. ছোট ফাইল এবং সংযোগ পরীক্ষার জন্য উপযোগী. |
| <a href="/tools/imgbed-token-chunk-upload.mjs" download>খণ্ডভিত্তিক আপলোড স্ক্রিপ্ট ডাউনলোড</a> | API Token খণ্ডায়ন, সরাসরি আপলোড বা প্ল্যাটফর্মের আপলোড সেশন ব্যবহার করে. বড় ফাইলের জন্য সুপারিশকৃত. |

Node.js 18 বা তার নতুন সংস্করণ প্রয়োজন.

## উপলব্ধ চ্যানেল দেখা

দুটি স্ক্রিপ্টই বর্তমান API Token-এর জন্য উপলব্ধ আপলোড চ্যানেল দেখাতে পারে:

```powershell
node imgbed-token-single-upload.mjs --base-url "https://your-domain" --token "your API Token" --list-channels
node imgbed-token-chunk-upload.mjs --base-url "https://your-domain" --token "your API Token" --list-channels
```

চ্যানেল দেখানোর সময় `--file` এবং `--channel` প্রয়োজন নেই. প্রতিক্রিয়ায় ডিফল্ট আপলোড চ্যানেল, আপলোড চ্যানেলের key, উপ-চ্যানেলের নাম এবং লোড ব্যাল্যান্সিংয়ের অবস্থা থাকে. গোপন কী, রিফ্রেশ টোকেন এবং অন্যান্য সংবেদনশীল কনফিগারেশন মান ফেরত আসে না.

## আপলোড মোড বেছে নেওয়া

| মোড | উপযোগী ক্ষেত্র | বর্ণনা |
| --- | --- | --- |
| একক অনুরোধে আপলোড | ছোট ফাইল, সরল স্ক্রিপ্ট, সংযোগ পরীক্ষা | পুরো ফাইল এক অনুরোধে `/upload`-এ পাঠায়. |
| খণ্ডভিত্তিক আপলোড | বড় ফাইল বা timeout হওয়ার সম্ভাবনা আছে এমন ফাইল | স্ক্রিপ্ট চ্যানেল-নির্দিষ্ট খণ্ডভিত্তিক, সরাসরি বা upload-session প্রবাহ বেছে নেয়. |

বড় ফাইলের জন্য আগে খণ্ডভিত্তিক আপলোড স্ক্রিপ্ট ব্যবহার করুন. একক অনুরোধে আপলোড Cloudflare অনুরোধের আকার, Worker memory এবং প্রতিটি প্ল্যাটফর্মের নিজস্ব সীমায় প্রভাবিত হয়.

## একক অনুরোধে আপলোড

একক অনুরোধের স্ক্রিপ্ট `/upload`-এ একটি অনুরোধ পাঠায়.

```powershell
node imgbed-token-single-upload.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --file "D:\test\image.png" `
  --channel s3 `
  --folder "photos/2026"
```

token পরিবেশ চলকেও রাখা যায়:

```powershell
$env:IMGBED_API_TOKEN="your API Token"
node imgbed-token-single-upload.mjs --base-url "https://your-domain" --file "D:\test\image.png" --channel s3
```

### একক অনুরোধের পরামিতি

| পরামিতি | আবশ্যিক | বর্ণনা |
| --- | --- | --- |
| `--base-url <url>` | হ্যাঁ | ImgBed সাইটের URL, যেমন `https://image.ai6.me`. |
| `--token <token>` | হ্যাঁ | API Token. চাইলে `IMGBED_API_TOKEN` পরিবেশ চলক ব্যবহার করতে পারেন. |
| `--file <path>` | হ্যাঁ | স্থানীয় ফাইলের পথ. |
| `--channel <key>` | হ্যাঁ | আপলোড চ্যানেল. |
| `--folder <path>` | না | আপলোড ফোল্ডার, যেমন `photos/2026` বা `/user/`. |
| `--name-type <type>` | না | নামকরণ মোড, ব্যাকএন্ডের `uploadNameType`-এ মানচিত্রিত. ডিফল্ট `default`. |
| `--channel-name <name>` | না | উপ-চ্যানেল বা অ্যাকাউন্ট বেছে নেয়. না দিলে ব্যাকএন্ডের চ্যানেল কনফিগারেশন সিদ্ধান্ত নেয়. |
| `--retries <n>` | না | সাময়িক ব্যর্থতায় পুনরায় চেষ্টার সংখ্যা. ডিফল্ট `3`. |
| `--timeout-ms <n>` | না | অনুরোধের সময়সীমা. ডিফল্ট `180000`. |
| `--output <pretty\|json>` | না | আউটপুটের ধরন. ডিফল্ট `pretty`. |
| `--save-response <path>` | না | শেষ JSON প্রতিক্রিয়া ফাইলে সংরক্ষণ করে. |
| `--list-channels` | না | বর্তমান token-এর জন্য উপলব্ধ চ্যানেল দেখিয়ে বেরিয়ে যায়. |

### একক অনুরোধের চ্যানেল

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

### একক অনুরোধের আকারসীমা

সম্ভব হলে একক অনুরোধের ফাইল 100 MB-এর নিচে রাখুন.

নিচের চ্যানেলগুলোর জন্য একক অনুরোধ `/upload`-এ স্পষ্ট ব্লকিং সীমা আছে:

| চ্যানেল | একক অনুরোধের সীমা |
| --- | ---: |
| Telegram | 20 MiB |
| Discord | 10 MiB |
| S3 | 64 MiB |
| WebDAV | 64 MiB |
| GitHub Releases | 64 MiB |
| GitLab Packages | 64 MiB |

কোনো ফাইল এসব সীমা ছাড়ালে স্ক্রিপ্ট স্থানীয়ভাবে মিল থাকা ত্রুটি দেখায়. অন্য চ্যানেলগুলোর জন্য স্ক্রিপ্টে স্থিরভাবে লেখা 100 MB স্থানীয় পরীক্ষা নেই. অনুরোধের body Cloudflare বা প্ল্যাটফর্মের ক্ষমতা ছাড়ালে Cloudflare বা দূরবর্তী প্ল্যাটফর্ম ত্রুটি ফেরত দেবে.

## খণ্ডভিত্তিক আপলোড

খণ্ডভিত্তিক আপলোড স্ক্রিপ্ট আগে ব্যাকএন্ডকে লক্ষ্য ফাইল নির্ধারণ করতে বলে, তারপর নির্বাচিত চ্যানেলের বড় ফাইল প্রবাহ অনুসরণ করে. আপনাকে নিজে chunk session, merge বা completion অনুরোধ লিখতে হবে না.

```powershell
node imgbed-token-chunk-upload.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --file "D:\test\video.zip" `
  --channel github `
  --folder "photos/2026" `
  --concurrency 3
```

### খণ্ডভিত্তিক আপলোডের পরামিতি

| পরামিতি | আবশ্যিক | বর্ণনা |
| --- | --- | --- |
| `--base-url <url>` | হ্যাঁ | ImgBed সাইটের URL. |
| `--token <token>` | হ্যাঁ | API Token. চাইলে `IMGBED_API_TOKEN` পরিবেশ চলক ব্যবহার করতে পারেন. |
| `--file <path>` | হ্যাঁ | স্থানীয় ফাইলের পথ. |
| `--channel <key>` | হ্যাঁ | আপলোড চ্যানেল. |
| `--folder <path>` | না | আপলোড ফোল্ডার. |
| `--name-type <type>` | না | নামকরণ মোড, ব্যাকএন্ডের `uploadNameType`-এ মানচিত্রিত. ডিফল্ট `default`. |
| `--channel-name <name>` | না | উপ-চ্যানেল বা অ্যাকাউন্ট বেছে নেয়. না দিলে ব্যাকএন্ডের চ্যানেল কনফিগারেশন সিদ্ধান্ত নেয়. |
| `--concurrency <n>` | না | সমান্তরাল আপলোড. ডিফল্ট `1`, সর্বোচ্চ `3`. |
| `--retries <n>` | না | সাময়িক ব্যর্থতায় পুনরায় চেষ্টার সংখ্যা. ডিফল্ট `3`. |
| `--timeout-ms <n>` | না | প্রতি অনুরোধের সময়সীমা. ডিফল্ট `180000`. |
| `--output <pretty\|json>` | না | আউটপুটের ধরন. ডিফল্ট `pretty`. |
| `--save-response <path>` | না | শেষ JSON প্রতিক্রিয়া ফাইলে সংরক্ষণ করে. |
| `--list-channels` | না | বর্তমান token-এর জন্য উপলব্ধ চ্যানেল দেখিয়ে বেরিয়ে যায়. |

### খণ্ডভিত্তিক আপলোডের চ্যানেল

| চ্যানেল key | আপলোড প্রবাহ |
| --- | --- |
| `telegram` / `tg` | বাস্তব খণ্ডভিত্তিক `/upload` session |
| `discord` / `dc` | বাস্তব খণ্ডভিত্তিক `/upload` session |
| `cfr2` / `r2` | বাস্তব খণ্ডভিত্তিক `/upload` session |
| `github` / `gh` | বাস্তব খণ্ডভিত্তিক `/upload` session |
| `gitlab` / `gl` | বাস্তব খণ্ডভিত্তিক `/upload` session |
| `webdav` / `wd` | বাস্তব খণ্ডভিত্তিক `/upload` session |
| `s3` | S3 multipart upload |
| `onedrive` / `od` | OneDrive upload session |
| `googledrive` / `google` / `gd` | Google Drive resumable upload |
| `dropbox` / `db` | Dropbox upload session |
| `yandex` / `yx` | Yandex direct upload URL |
| `pcloud` / `pd` | pCloud upload link |
| `huggingface` / `hf` | Hugging Face LFS upload |

পরীক্ষায় Yandex-এ সংকুচিত ফাইলের নমুনা অস্থির ছিল. অসংকুচিত ফাইল সফলভাবে আপলোড হয়েছে বলে যাচাই করা হয়েছে.

## আপলোড প্রতিক্রিয়া

আপলোড সফল হলে স্ক্রিপ্ট ছাপে:

```text
success
src: /file/photos/2026/example.png
url: https://your-domain/file/photos/2026/example.png
fileId: photos/2026/example.png
```

| ক্ষেত্র | বর্ণনা |
| --- | --- |
| `src` | সাইটের অভ্যন্তরীণ ফাইল পথ. |
| `url` | পূর্ণ প্রকাশ্য URL, আপনার স্ক্রিপ্ট বা ডাটাবেস রেকর্ডের জন্য উপযোগী. |
| `fileId` | ফাইল ID, পরে অনুসন্ধান, ব্যবস্থাপনা বা লগের জন্য উপযোগী. |
| `channelName` | খণ্ডভিত্তিক স্ক্রিপ্ট বাস্তবে ব্যবহৃত উপ-চ্যানেল বা অ্যাকাউন্ট ফেরত দিতে পারে. |

`--output json` দিলে স্ক্রিপ্ট প্রোগ্রামগত ব্যবহারের জন্য পূর্ণ JSON প্রতিক্রিয়া ছাপে.

## সরাসরি একক অনুরোধের API ডাকা

স্ক্রিপ্ট ব্যবহার না করলে একক অনুরোধের আপলোড এন্ডপয়েন্ট সরাসরি ডাকতে পারেন:

```text
POST https://your-domain/upload?uploadChannel=s3&uploadFolder=photos/2026&uploadNameType=default
Authorization: Bearer your API Token
Content-Type: multipart/form-data
```

ফর্মের ক্ষেত্র:

| ক্ষেত্র | আবশ্যিক | বর্ণনা |
| --- | --- | --- |
| `file` | হ্যাঁ | আপলোড করার ফাইল. |

কুয়েরি পরামিতি:

| পরামিতি | আবশ্যিক | বর্ণনা |
| --- | --- | --- |
| `uploadChannel` | হ্যাঁ | বাস্তব আপলোড চ্যানেল. |
| `uploadFolder` | না | আপলোড ফোল্ডার. |
| `uploadNameType` | না | নামকরণ মোড. |
| `channelName` | না | উপ-চ্যানেল বা অ্যাকাউন্ট বেছে নেয়. |

সফল প্রতিক্রিয়া এরকম:

```json
{
  "success": true,
  "src": "/file/photos/2026/example.png",
  "url": "https://your-domain/file/photos/2026/example.png",
  "fileId": "photos/2026/example.png"
}
```

## সাধারণ প্রশ্ন

### বড় একক অনুরোধের আপলোড ব্যর্থ হয়

একক অনুরোধের `/upload` পুরো ফাইল এক অনুরোধে পাঠায়. বড় ফাইল Cloudflare বা দূরবর্তী প্ল্যাটফর্মে ব্লক হতে পারে. বড় ফাইলের জন্য খণ্ডভিত্তিক আপলোড স্ক্রিপ্ট ব্যবহার করুন.

### `--channel-name` সেট করা কিন্তু আপলোড এখনও ব্যর্থ

নির্বাচিত চ্যানেলে ওই নামে উপ-চ্যানেল আছে এবং সেটি চালু আছে কি না যাচাই করুন. `--channel-name` না দিলে ব্যাকএন্ড সেই চ্যানেলের কনফিগারেশন অনুযায়ী উপলব্ধ অ্যাকাউন্ট বেছে নেয়.

### ফলাফল অন্য প্রোগ্রামে ব্যবহার করতে চাই

`--output json` ব্যবহার করুন, অথবা `--save-response result.json` যোগ করুন. পূর্ণ ফাইল URL পেতে `url` ক্ষেত্র পড়ুন.

### Yandex আর্কাইভ আপলোড করতে পারে না

Yandex আর্কাইভ ফরম্যাট সমর্থন করে না. এটি তাদের প্ল্যাটফর্ম নীতির কারণে হতে পারে. Yandex ব্যবহার করলে সম্ভব হলে আর্কাইভ নয় এমন ফাইল আপলোড করুন.


