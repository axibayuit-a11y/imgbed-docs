# pCloud চ্যানেল যোগ করা

## সবচেয়ে ভালো যখন

- আপনার pCloud অ্যাকাউন্ট আছে এবং ImgBed-কে pCloud-এ ছবি সংরক্ষণ করাতে চান।
- চ্যানেলের পরিচয়পত্র হিসেবে pCloud অ্যাকাউন্ট ইমেইল এবং পাসওয়ার্ড ব্যবহার করতে আপনার আপত্তি নেই।

## আগে যা লাগবে

| প্রয়োজনীয় তথ্য | কেন লাগবে |
| --- | --- |
| pCloud অ্যাকাউন্ট ইমেইল | pCloud API-তে সাইন ইন করতে। |
| pCloud পাসওয়ার্ড | pCloud API-তে সাইন ইন করতে। |
| API হোস্ট | ডিফল্ট `api.pcloud.com`। EU অ্যাকাউন্টগুলো `eapi.pcloud.com` ব্যবহার করতে পারে। |
| সংরক্ষণ ডিরেক্টরি | ফাইল যেখানে রাখা হবে। ডিফল্ট `imgbed`। |

## কোথায় যোগ করবেন

1. সিস্টেম সেটিংস খুলুন।
2. আপলোড সেটিংস খুলুন।
3. উপরের ডান পাশে `Add Channel` ক্লিক করুন।
4. `pCloud` নির্বাচন করুন।

## ক্ষেত্রের বিবরণ

| ক্ষেত্র | উদ্দেশ্য | প্রয়োজনীয় |
| --- | --- | --- |
| চ্যানেল নাম | এই pCloud চ্যানেল শনাক্ত করে, যেমন `Personal pCloud`। | হ্যাঁ |
| অ্যাকাউন্ট ইমেইল | আপনার pCloud লগইন ইমেইল। | হ্যাঁ |
| পাসওয়ার্ড | আপনার pCloud পাসওয়ার্ড। | হ্যাঁ |
| API হোস্ট | pCloud API হোস্ট। ডিফল্ট `api.pcloud.com`। | না |
| সংরক্ষণ ডিরেক্টরি | ফাইল সংরক্ষণের ডিরেক্টরি। ডিফল্ট `imgbed`। | না |

অ্যাকাউন্ট region অনুযায়ী API হোস্ট নির্বাচন করুন:

| Account region | API হোস্ট |
| --- | --- |
| ডিফল্ট / US | `api.pcloud.com` |
| Europe | `eapi.pcloud.com` |

## সেটআপ ধাপ

1. আপলোড সেটিংস খুলুন।
2. `Add Channel` ক্লিক করুন।
3. `pCloud` নির্বাচন করুন।
4. সহজে চেনা যায় এমন চ্যানেল নাম দিন।
5. আপনার pCloud অ্যাকাউন্ট ইমেইল দিন।
6. pCloud পাসওয়ার্ড দিন।
7. API হোস্ট `api.pcloud.com` রাখুন, অথবা EU অ্যাকাউন্ট হলে `eapi.pcloud.com` ব্যবহার করুন।
8. সংরক্ষণ ডিরেক্টরি `imgbed` রাখুন, অথবা আপনার পছন্দের ফোল্ডার দিন।
9. চ্যানেল সংরক্ষণ করুন।

![চ্যানেল কনফিগার করা](../../image/upload/pcloud/配置渠道.png)

## যাচাই করার পদ্ধতি

| পরীক্ষা | প্রত্যাশিত ফলাফল |
| --- | --- |
| চ্যানেল কার্ড | সংরক্ষণের পর pCloud চ্যানেল কার্ড দেখা যায়। |
| চ্যানেল সুইচ | কার্ডের সুইচ চালু থাকে। |
| ইমেইল display | কার্ডে যুক্ত pCloud ইমেইল দেখা যায়। |
| Quota query | সফল query-এর পর used এবং total ধারণক্ষমতা দেখা যায়। |
| Upload test | পরীক্ষামূলক ছবি কনফিগার করা pCloud সংরক্ষণ ডিরেক্টরিতে দেখা যায়। |

![কোটা কোয়েরি সফল](../../image/upload/pcloud/查询额度成功.png)

## সমস্যা সমাধান

### OAuth2 নয় কেন?

pCloud OAuth2 ডিফল্টভাবে self-service নয়। এটি চালু করতে pCloud-কে ইমেইল করতে হয়।

বর্তমান pCloud OAuth2 flow ImgBed-এর প্রয়োজনীয় short-lived upload link workflow-ও সমর্থন করে না। তাই এই চ্যানেল অ্যাকাউন্ট ইমেইল এবং পাসওয়ার্ড লগইন ব্যবহার করে।

### কোন API হোস্ট ব্যবহার করব?

ডিফল্ট:

```text
api.pcloud.com
```

EU অ্যাকাউন্টগুলোর জন্য:

```text
eapi.pcloud.com
```

## দ্রুত প্রবাহ

```text
Prepare your pCloud email and password
-> Open Upload Settings
-> Add Channel
-> Choose pCloud
-> Fill channel name / email / password
-> Keep API host as api.pcloud.com unless your account is in Europe
-> Keep storage directory as imgbed unless you need another folder
-> Save
-> Query quota
-> Upload a test image
```
