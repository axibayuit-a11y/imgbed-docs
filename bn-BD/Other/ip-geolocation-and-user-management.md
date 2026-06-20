# IP Geolocation এবং User Management

IP geolocation uploader records, login devices এবং similar logs-এর IP addresses-কে approximate locations-এ রূপান্তর করে।

Configure করার পর admin panel upload এবং access origins আরও পরিষ্কারভাবে দেখাতে পারে। User Management suspicious IP addresses-এর upload access block বা restore করতেও সাহায্য করে।

## কোথায় Configure করবেন

খুলুন:

```text
System Settings -> Other Settings -> IP Geolocation
```

![IP geolocation](../../image/other/ip定位/ip定位.png)

## Available Settings

নতুন IP geolocation flow এক map service-এর ওপর নির্ভর না করে multiple sources support করে।

| Setting | Purpose |
| --- | --- |
| IP geolocation language | Display language নির্বাচন করে, যেমন English, Simplified Chinese, Japanese, French ইত্যাদি। |
| MaxMind Account ID | MaxMind GeoLite Web Service-এর জন্য MaxMind account ID। |
| MaxMind License Key | MaxMind License Key। |
| Tencent Map Key | Tencent Location Service key। Chinese addresses এবং mainland China IPs-এর জন্য useful। |
| ipapi Key | APILayer ipapi key। Multilingual IP geolocation support করে। |

শুধু প্রয়োজনীয় services পূরণ করুন। সব field configure করার দরকার নেই।

কোনো key না দিলে ImgBed built-in free sources try করে, তবে stability, language support এবং precision নিজের configured service-এর মতো ভালো নাও হতে পারে।

## Recommended Choices

মূলত Chinese addresses দরকার হলে:

1. IP geolocation language Simplified Chinese সেট করুন।
2. Tencent Map Key configure করুন।
3. Optional fallback হিসেবে MaxMind বা ipapi যোগ করুন।

মূলত English বা multilingual addresses দরকার হলে:

1. দরকারি language নির্বাচন করুন।
2. MaxMind Account ID এবং License Key configure করুন।
3. আরও ভালো multilingual results চাইলে ipapi Key যোগ করুন।

## MaxMind Setup

MaxMind-এর দরকার:

```text
MaxMind Account ID
MaxMind License Key
```

MaxMind dashboard থেকে account ID খুঁজুন এবং License Keys page থেকে License Key generate করুন।

![MaxMind key config](../../image/other/ip定位/maxmind的key配置.png)

Generate করার পর Account ID এবং License Key ImgBed-এ paste করে save করুন।

MaxMind free plan everyday use-এর জন্য যথেষ্ট, তবে request limits আছে। Quota exceed হলে ImgBed অন্য available sources try করবে।

## ipapi Setup

ipapi APILayer API Key ব্যবহার করে।

ipapi console খুলে সেখানে দেখানো API Key copy করুন।

![ipapi config](../../image/other/ip定位/ipapi配置.png)

ImgBed-এর `ipapi Key` field-এ paste করে save করুন।

ipapi multilingual IP geolocation support করে এবং selected language-এ addresses দেখাতে চাইলে useful। Free plan-এ request limits আছে। Quota শেষ হলে ImgBed অন্য available sources try করবে।

## Tencent Map Key Setup

Tencent Map Key Chinese addresses, বিশেষ করে mainland China IPs-এর জন্য useful।

Tencent Location Service-এ key তৈরি করার সময় enable করুন:

```text
WebServiceAPI
```

Creation-এর পর key `Tencent Map Key`-এ paste করে save করুন।

শুধু basic Chinese IP geolocation দরকার হলে Tencent Map Key দিয়ে শুরু করলেই হয়।

## User Management-এ কী দেখবেন

User Management admin panel-এর top থেকে পাওয়া যায়।

![User management](../../image/other/用户管理显示.png)

User Management IP অনুযায়ী upload activity দেখায়:

| Field | Description |
| --- | --- |
| IP source | Uploader source IP। |
| Address | IP থেকে resolved approximate location। |
| Total upload size | এই IP থেকে uploaded total file size। |
| Upload count | এই IP থেকে uploads সংখ্যা। |
| Upload allowed | On মানে uploads allowed। Off মানে uploads blocked। |

সেই IP থেকে uploaded files-এর list খুলতে left arrow ক্লিক করুন।

File list file name, preview, file size, moderation result, file status এবং upload time দেখায়। Uploads suspicious লাগলে আগে IP expand করে files review করুন, তারপর further uploads block করবেন কি না সিদ্ধান্ত নিন।

IP suspicious হলে `Upload allowed` off করুন। Future uploads সেই IP থেকে block হবে।

## Search, Sort এবং Advanced Filters

User Management-এর top-এ IP source বা address দিয়ে search করুন।

Recent uploaders, high-frequency uploaders বা high-usage IPs খুঁজতে time, upload count বা total upload size দিয়ে sort করুন।

আরও গভীর তদন্তের জন্য advanced filters খুলুন।

![Advanced filters](../../image/other/用户管理高级筛选.png)

Advanced filters support করে:

| Filter | Usage |
| --- | --- |
| Time range | Selected period-এ files upload করা IPs দেখায়। |
| Access status | Normal, blocked এবং similar states দিয়ে filter করে। |
| Allow/block list | Allowlist, blocklist বা unset দিয়ে filter করে। |
| File type | Images, videos, audio, documents, code বা other files upload করা IPs দেখায়। |
| File size | Uploaded file size range দিয়ে filter করে। |
| Age rating | Unset, General, R12+, R16+, R18 এবং similar ratings দিয়ে filter করে। |
| File status | Abnormal files investigate করতে current file status দিয়ে filter করে। |

Apply করতে `Apply Filters` ক্লিক করুন। সব data-তে ফিরতে `Reset` ব্যবহার করুন।

## Mobile View

Mobile-এ User Management card layout-এ switch করে।

![Mobile user management](../../image/other/手机端显示用户管理效果.png)

প্রতিটি card IP, address, total upload size, upload count এবং upload allowed switch দেখায়। Horizontal table scrolling ছাড়াই users manage করা যায়।

## Location ভুল মনে হলে

IP geolocation approximate। এটি precise street address নয়।

User proxy, data center, cloud server বা cross-border network-এর পেছনে থাকলে displayed location real location থেকে আলাদা হতে পারে।

এই feature rough origin বোঝা, abnormal uploads খোঁজা এবং blocking decisions-এ সহায়তার জন্য ব্যবহার করুন। Precise tracking হিসেবে ধরবেন না।

## Common Cases

| Case | Meaning |
| --- | --- |
| Address empty | IP এখনও resolve হয়নি, বা current source temporarily unavailable। |
| Address language ভুল | IP geolocation language এবং সেই language support করা source configured কি না check করুন। |
| Address data center দেখাচ্ছে | অনেক proxies, cloud servers এবং crawlers data center বা ISP addresses হিসেবে দেখা যায়। |
| Upload count high | IP ভালোভাবে review করুন এবং দরকার হলে uploads block করুন। |
| Total upload size বড় | Sort বা filter করুন, IP expand করে specific files inspect করুন। |
| Blocking-এর পর restore দরকার | `Upload allowed` আবার on করুন। |

## Quick Flow

```text
Other Settings-এ IP Geolocation খুলুন
-> IP geolocation language নির্বাচন করুন
-> দরকার অনুযায়ী MaxMind, Tencent Map বা ipapi credentials পূরণ করুন
-> Settings save করুন
-> User Management খুলুন
-> IP source, address, total upload size এবং upload count review করুন
-> Abnormal IPs খুঁজতে search, sort বা advanced filters ব্যবহার করুন
-> প্রয়োজন অনুযায়ী uploads allow বা block করুন
```
