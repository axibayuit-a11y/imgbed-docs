# WebDAV চ্যানেল যোগ করা

## কখন সবচেয়ে উপযোগী

WebDAV চ্যানেল ব্যবহার করুন যখন:

- আপনার NAS, cloud drive অথবা object storage service WebDAV endpoint দেয়।
- আপলোড করা ছবিগুলো নিজের WebDAV ডিরেক্টরিতে সংরক্ষণ করতে চান।
- পরিচয়পত্র দীর্ঘমেয়াদে frontend-এ প্রকাশিত না রেখে D1 `upload_channels` table-এ সংরক্ষণ করতে চান।

## শুরু করার আগে যা লাগবে

| প্রয়োজনীয় তথ্য | উদ্দেশ্য |
| --- | --- |
| WebDAV Endpoint | server-side WebDAV URL, যেমন `https://nas.example.com/dav`. |
| Username | WebDAV পরিষেবায় সাইন ইন করতে লাগে। |
| পাসওয়ার্ড | WebDAV পরিষেবায় সাইন ইন করতে লাগে। |
| Authentication মোড | ডিফল্ট `Basic`। সার্ভার চাইলে শুধু `Digest` অথবা auto negotiation ব্যবহার করুন। |
| সংরক্ষণ ডিরেক্টরি | ফাইল সংরক্ষণের ডিরেক্টরি। ডিফল্ট `imgbed`। |

## কোথায় যোগ করবেন

1. সিস্টেম সেটিংস খুলুন।
2. আপলোড সেটিংসে যান।
3. উপরের ডান পাশে চ্যানেল যোগ করুন ক্লিক করুন।
4. `WebDAV` নির্বাচন করুন।

## ক্ষেত্রের বিবরণ

| ক্ষেত্র | কাজ | প্রয়োজনীয় |
| --- | --- | --- |
| চ্যানেলের নাম | WebDAV চ্যানেলের সহজে চেনা যায় এমন নাম, যেমন `koofr` বা `nas`। | হ্যাঁ |
| Endpoint | `https://`. পূর্ণ WebDAV endpoint। | হ্যাঁ |
| Username | WebDAV login username। | হ্যাঁ |
| পাসওয়ার্ড | WebDAV লগইন পাসওয়ার্ড। | হ্যাঁ |
| Authentication মোড | সাধারণত `Basic`; সার্ভার digest authentication চাইলে `Digest` ব্যবহার করুন। | হ্যাঁ |
| সংরক্ষণ ডিরেক্টরি | ফাইল যেখানে রাখা হবে। ডিফল্ট `imgbed`। | না |

## উদাহরণ: fie.nl.tab.digital

### 1. অ্যাপ পাসওয়ার্ড তৈরি করুন

আপনার অ্যাকাউন্ট security settings খুলুন, application passwords খুঁজুন, তারপর নতুন app password তৈরি করুন।

![অ্যাপ পাসওয়ার্ড তৈরি করা](../../image/upload/webdav/创建应用密码.png)

তৈরি হওয়ার পর নতুন অ্যাপ পাসওয়ার্ড কপি করে সংরক্ষণ করুন। সাধারণত এটি একবারই দেখানো হয়।

![নতুন অ্যাপ পাসওয়ার্ড সংরক্ষণ করা](../../image/upload/webdav/记住新应用程序密码.png)

### 2. ImgBed-এ WebDAV কনফিগারেশন পূরণ করুন

ImgBed-এ ফিরে WebDAV চ্যানেল যোগ করুন:

| UI ক্ষেত্র | মান |
| --- | --- |
| Endpoint | `https://fie.nl.tab.digital/` থেকে পাওয়া WebDAV URL। |
| Username | আপনার WebDAV username। |
| পাসওয়ার্ড | সদ্য তৈরি করা অ্যাপ পাসওয়ার্ড। |
| Authentication মোড | বেশিরভাগ ক্ষেত্রে `Basic` দিয়ে শুরু করুন। |
| সংরক্ষণ ডিরেক্টরি | ডিফল্ট `imgbed`; চাইলে কাস্টম ডিরেক্টরি ব্যবহার করতে পারেন। |

![কনফিগারেশন পূরণ করা](../../image/upload/webdav/填写配置.png)

## বড় ফাইল আপলোডের আচরণ

WebDAV চ্যানেল এখন বাস্তব session-based chunked upload ব্যবহার করে।

ছোট ফাইল একটি সম্পূর্ণ ফাইল হিসেবে আপলোড হয়। 64 MiB-এর বড় ফাইল স্বয়ংক্রিয়ভাবে প্রায় 10 MiB আকারের chunk-এ ভাগ হয়ে remote chunk ডিরেক্টরিতে আপলোড হয়।

WebDAV পরিষেবার `partial update` অথবা offset-based writes সমর্থনের দরকার নেই। ImgBed remote server-এ chunk মিলিয়ে একটি বড় ফাইল বানায় না। তার বদলে chunk manifest সংরক্ষণ করে এবং ফাইল চাইলে chunk-গুলো ক্রমানুসারে পড়ে।

বাস্তবে:

| ফাইলের আকার | আপলোড পদ্ধতি | remote storage layout |
| --- | --- | --- |
| 64 MiB বা কম | সাধারণ আপলোড | একটি সম্পূর্ণ ফাইল |
| 64 MiB-এর বেশি | বাস্তব session chunked upload | একাধিক chunk ফাইল থাকা chunk ডিরেক্টরি |

chunk ডিরেক্টরি শুধু remote storage layout-কে প্রভাবিত করে। ImgBed-এর ফাইল URL বদলায় না। ব্যবহারকারীরা আগের মতো original `/file/...` লিংক দিয়েই ফাইলে প্রবেশ করে।

## সেটআপ ধাপ

1. আপলোড সেটিংস খুলুন।
2. চ্যানেল যোগ করুন ক্লিক করুন।
3. `WebDAV` নির্বাচন করুন।
4. সহজে চেনা যায় এমন চ্যানেলের নাম দিন, যেমন `koofr`।
5. WebDAV endpoint দিন, যেমন `https://app.koofr.net/dav/Koofr`.
6. username এবং পাসওয়ার্ড দিন।
7. ডিফল্ট হিসেবে authentication mode `Basic` রাখুন।
8. সংরক্ষণ ডিরেক্টরি `imgbed` রাখুন, অথবা নিজের ডিরেক্টরি দিন।
9. সংরক্ষণ ক্লিক করুন।
10. সংরক্ষণের পর চ্যানেল কার্ড পরীক্ষা করুন, ধারণক্ষমতা উপলব্ধ হলে কোয়েরি করুন, এবং একটি পরীক্ষামূলক ফাইল আপলোড করুন।

## যাচাই করার পদ্ধতি

| পরীক্ষা | কীভাবে যাচাই করবেন |
| --- | --- |
| চ্যানেল কার্ড দেখা যায় | সংরক্ষণের পর আপলোড সেটিংস পৃষ্ঠায় WebDAV চ্যানেল কার্ড দেখা উচিত। |
| চ্যানেল চালু আছে | কার্ডের উপরের ডান পাশের সুইচ চালু থাকা উচিত। |
| পরিচয়পত্র সংরক্ষিত হয়েছে | বিস্তারিত দৃশ্যে Endpoint, username, authentication mode এবং সংরক্ষণ ডিরেক্টরি দেখা উচিত। |
| ছোট ফাইল আপলোড কাজ করছে | পরীক্ষামূলক ছবি আপলোড করে WebDAV ডিরেক্টরি-তে ফাইল এসেছে কি না নিশ্চিত করুন। |
| বড় ফাইলের নিয়ম কাজ করছে | 64 MiB-এর বড় ফাইল chunked upload ব্যবহার করে এবং remote chunk ডিরেক্টরি তৈরি করে। |
| ধারণক্ষমতা query কাজ করছে | server capacity information সমর্থন করলে query used এবং total capacity দেখাবে। |

![Quota query সফল হয়েছে](../../image/upload/webdav/查询额度成功.png)

## FAQ

### বড় WebDAV ফাইল কেন chunk ডিরেক্টরি তৈরি করে?

বড় ফাইলের জন্য এটিই বর্তমান storage method।

64 MiB-এর বড় ফাইল একটি বড় remote file-এ merge হয় না। এগুলো chunk ডিরেক্টরি হিসেবে সংরক্ষিত হয়। ImgBed chunk manifest record করে এবং সম্পূর্ণ content ফেরত দেওয়ার সময় chunk-গুলো ক্রমানুসারে পড়ে।

### বড় ফাইল আপলোড ব্যর্থ হলে আগে কী দেখব?

আগে Endpoint, username, পাসওয়ার্ড এবং সংরক্ষণ ডিরেক্টরি পরীক্ষা করুন। তারপর WebDAV পরিষেবা directory creation, file writing এবং file reading অনুমতি দেয় কি না নিশ্চিত করুন।

ধারণক্ষমতা query ব্যর্থ হলেও ছোট ফাইল আপলোড কাজ করলে server হয়তো capacity reporting সমর্থন করে না বা সীমিত করে। এর মানে upload unavailable, এমন নয়।

### কোন authentication মোড ব্যবহার করব?

`Basic` দিয়ে শুরু করুন।

সার্ভার স্পষ্টভাবে digest authentication চাইলে `Digest` ব্যবহার করুন।

নিশ্চিত না হলে automatic negotiation ব্যবহার করুন।

## দ্রুত তালিকা

```text
Prepare WebDAV endpoint, username, and password
-> Open Upload Settings
-> Add Channel
-> Select WebDAV
-> Enter Endpoint / username / password
-> Keep authentication mode as Basic by default
-> Keep storage directory as imgbed by default
-> Save
-> Query capacity
-> Upload a test file
```
