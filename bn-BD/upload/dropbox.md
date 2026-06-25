# Dropbox চ্যানেল যোগ করা

## আগে যা লাগবে

| প্রয়োজনীয় তথ্য | কেন লাগবে |
| --- | --- |
| Dropbox অ্যাকাউন্ট | সাইন ইন এবং অ্যাপ অনুমোদনের জন্য। |
| Dropbox অ্যাপ | `App Key` এবং `App Secret` তৈরি করতে। |
| আপনার ImgBed ডোমেইন | OAuth redirect URI হিসেবে ব্যবহার করতে। |
| উপলব্ধ Dropbox সংরক্ষণ | প্রকৃত ফাইল সংরক্ষণস্থল হিসেবে ব্যবহার হবে। |

## সেটআপ ধাপ

### ধাপ 1: Dropbox অ্যাপ তৈরি করুন

1. Dropbox App Console খুলুন:

```text
https://www.dropbox.com/developers/apps
```

2. নতুন অ্যাপ তৈরি করুন।
3. access ধরন হিসেবে নির্বাচন করুন:

```text
App folder
```

4. অ্যাপটির সহজে চেনা যায় এমন নাম দিন, যেমন `imgbed-app`।
5. অ্যাপ তৈরি হলে অ্যাপের বিস্তারিত পৃষ্ঠা খুলুন।

প্রস্তাবিত access ধরন:

| Access ধরন | সুপারিশ |
| --- | --- |
| `App folder` | প্রস্তাবিত। ImgBed যেভাবে ফাইল সংরক্ষণ করে, তার সঙ্গে মেলে। |
| `Full Dropbox` | প্রস্তাবিত নয়। ImgBed-এর পুরো অ্যাকাউন্টে access দরকার নেই। |

![Dropbox অ্যাপ তৈরি করা](../../image/upload/dropbox/开发者创建应用.png)

### ধাপ 2: Redirect URI যোগ করুন

Dropbox অ্যাপের বিস্তারিত পৃষ্ঠা-এ OAuth অথবা Redirect URI সেটিংস খুঁজে যোগ করুন:

```text
https://your-domain.com/api/oauth/dropbox/callback
```

একাধিক ডোমেইন থেকে অ্যাডমিন প্যানেল ব্যবহার করলে প্রতিটি matching কলব্যাক URL যোগ করুন।

![redirect URI কনফিগার করা](../../image/upload/dropbox/配置回调地址.png)

### ধাপ 3: অ্যাপ অনুমতি কনফিগার করুন

`Permissions` tab খুলে অন্তত নিচের scopes চালু করুন:

| Scope | প্রয়োজনীয় | উদ্দেশ্য |
| --- | --- | --- |
| `account_info.read` | প্রয়োজনীয় | অ্যাকাউন্ট এবং quota information পড়ে। |
| `files.metadata.read` | প্রয়োজনীয় | path check-এর জন্য ফাইল এবং ফোল্ডার মেটাডেটা পড়ে। |
| `files.metadata.write` | প্রয়োজনীয় | ফোল্ডার তৈরি করে এবং মেটাডেটা লেখে। |
| `files.content.write` | প্রয়োজনীয় | ফাইল আপলোড করে। এই scope না থাকলে `required scope 'files.content.write'` error হয়। |
| `files.content.read` | প্রস্তাবিত | ডাউনলোড, প্রিভিউ এবং temporary ফাইল লিংকগুলো অনুমতি দেয়। |

scopes নির্বাচন করার পর পৃষ্ঠা-এর নিচে `Submit` ক্লিক করুন।

![অনুমতি যোগ করা](../../image/upload/dropbox/添加对应的权限.png)

গুরুত্বপূর্ণ:

| অবস্থা | কী করবেন |
| --- | --- |
| scopes বদলেছেন | টোকেন অনুমোদন প্রবাহ আবার চালিয়ে নতুন `Refresh Token` নিন। |
| আবার authorize করেননি | পুরোনো টোকেন নতুন অনুমতি পাবে না, তাই upload এখনও ব্যর্থ হতে পারে। |

### ধাপ 4: অ্যাপ পরিচয়পত্র কপি করুন

Dropbox অ্যাপ পৃষ্ঠা থেকে এই দুটি মান সংরক্ষণ করুন:

| Dropbox ক্ষেত্র | ImgBed ক্ষেত্র |
| --- | --- |
| `App key` | `App Key` |
| `App secret` | `App Secret` |

### ধাপ 5: Dropbox চ্যানেল পূরণ করুন

আপলোড সেটিংস-এ `Dropbox` নির্বাচন করে পূরণ করুন:

| ImgBed ক্ষেত্র | কী দেবেন |
| --- | --- |
| চ্যানেল নাম | সহজে চেনা যায় এমন নাম, যেমন `Main Dropbox`। |
| App Key | Dropbox `App key`। |
| App Secret | Dropbox `App secret`। |
| Refresh Token | আপাতত খালি রাখুন। |
| Root directory | ঐচ্ছিক। ডিফল্ট `imgbed`। |
| Note | ঐচ্ছিক। |

![টোকেন নেওয়া](../../image/upload/dropbox/获取令牌.png)

### ধাপ 6: Refresh Token নিন

1. ImgBed-এ `Get Token` ক্লিক করুন।
2. যে Dropbox অ্যাকাউন্ট যুক্ত করতে চান সেটিতে সাইন ইন করুন।
3. অনুমোদন বার্তা অনুমোদন করুন।
4. কলব্যাক পৃষ্ঠা একটি `Refresh Token` দেখাবে।
5. সেটি কপি করুন।
6. ImgBed-এ ফিরে `Refresh Token` ক্ষেত্র-এ paste করুন।

![টোকেন কপি করা](../../image/upload/dropbox/复制令牌.png)

## যাচাই করার পদ্ধতি

| পরীক্ষা | প্রত্যাশিত ফলাফল |
| --- | --- |
| চ্যানেল কার্ড | সংরক্ষণের পর Dropbox চ্যানেল দেখা যায়। |
| চ্যানেল সুইচ | চ্যানেল চালু করা যায়। |
| টোকেন সংরক্ষিত | বিস্তারিত পৃষ্ঠা-এ `Refresh Token` সংরক্ষিত দেখা যায়। |
| আপলোড পরীক্ষা | পরীক্ষামূলক ছবি Dropbox অ্যাপ ফোল্ডার-এ দেখা যায়। |

Quota limit চালু থাকলে quota query ক্লিক করুন। সফল query-এর পর চ্যানেল কার্ডে used space, total space এবং last update time দেখা যায়।

![কোটা কোয়েরি সফল](../../image/upload/dropbox/查询额度成功.png)

## সমস্যা সমাধান

| সমস্যা | সমাধান |
| --- | --- |
| ImgBed কনফিগারেশন incomplete বলছে | `App Key`, `App Secret` এবং `Refresh Token` সব পূরণ করা আছে কি না পরীক্ষা করুন। |
| অনুমোদন সফল কিন্তু `Refresh Token` দেখা যাচ্ছে না | আবার `Get Token` ক্লিক করুন এবং offline অনুমোদন প্রবাহ ব্যবহৃত হচ্ছে কি না নিশ্চিত করুন। |
| upload `required scope 'files.content.write'` দিয়ে ব্যর্থ হচ্ছে | `files.content.write` চালু করুন, `Submit` ক্লিক করুন, তারপর নতুন `Refresh Token` নিন। |
| কলব্যাক ব্যর্থ | Redirect URI `https://your-domain.com/api/oauth/dropbox/callback` কি না নিশ্চিত করুন। |
| ফাইল খুঁজে পাওয়া যাচ্ছে না | Dropbox অ্যাপ `App folder` মোড-এ তৈরি হয়েছে কি না নিশ্চিত করুন। |

## দ্রুত প্রবাহ

```text
Open Dropbox App Console
-> Create an app
-> Choose App folder access
-> Add https://your-domain.com/api/oauth/dropbox/callback
-> Enable account_info.read / files.metadata.read / files.metadata.write / files.content.write
-> Optionally enable files.content.read
-> Click Submit
-> Copy App Key and App Secret
-> Fill them into ImgBed
-> Click Get Token
-> Copy the Refresh Token from the callback page
-> Paste it back into ImgBed and save
```

## তথ্যসূত্র

1. Dropbox App Console: https://www.dropbox.com/developers/apps
2. Dropbox OAuth Guide: https://developers.dropbox.com/oauth-guide
3. Dropbox Developer Guide: https://www.dropbox.com/developers/reference/developer-guide
