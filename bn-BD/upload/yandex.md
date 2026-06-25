# Yandex চ্যানেল যোগ করা

## আগে যা লাগবে

| প্রয়োজনীয় তথ্য | কেন লাগবে |
| --- | --- |
| Yandex অ্যাকাউন্ট | সাইন ইন এবং Yandex Disk অনুমোদনের জন্য। |
| Yandex OAuth অ্যাপ | `Client ID` এবং `Client Secret` তৈরি করতে। |
| আপনার ImgBed ডোমেইন | OAuth redirect URI হিসেবে ব্যবহার করতে। |
| উপলব্ধ Yandex Disk সংরক্ষণ | প্রকৃত ফাইল সংরক্ষণস্থল হিসেবে ব্যবহার হবে। |

## সেটআপ ধাপ

### ধাপ 1: Yandex OAuth অ্যাপ তৈরি করুন

1. Yandex OAuth app creation পৃষ্ঠা খুলুন:

```text
https://oauth.yandex.com/client/new
```

2. সাইন ইন পৃষ্ঠায় redirect হলে আগে Yandex অ্যাকাউন্ট দিয়ে সাইন ইন করুন।
3. নতুন অ্যাপ তৈরি করুন।
4. অ্যাপ-এর সহজে চেনা যায় এমন নাম দিন, যেমন `imgbed-yandex`।
5. কলব্যাক অথবা redirect URL সেটিংস খুঁজুন।
6. দিন:

```text
https://your-domain.com/api/oauth/yandex/callback
```

### ধাপ 2: অনুমতি নিশ্চিত করুন

বর্তমান ImgBed Yandex integration-এর জন্য `Yandex.Disk REST API`-এর নিচে এই চারটি অনুমতি রাখুন:

| অনুমতি | উদ্দেশ্য |
| --- | --- |
| `cloud_api:disk.app_folder` | ImgBed-কে অ্যাপ ফোল্ডার-এ ফাইল সংরক্ষণ করতে দেয়। |
| `cloud_api:disk.read` | ফাইল এবং ডাউনলোড লিংকগুলো পড়ে। |
| `cloud_api:disk.write` | ফাইল আপলোড, ফোল্ডার তৈরি এবং ফাইল মুছে ফেলে। |
| `Access to information about Yandex.Disk` | disk কোটা এবং used space পড়ে। |

`Yandex ID API`-এর নিচে এগুলো দেখলে ঐচ্ছিক:

| Permission Text | সুপারিশ |
| --- | --- |
| `Access to username, first name and surname, gender` | ঐচ্ছিক |
| `Access to email address` | ঐচ্ছিক |

মূল upload, download, deletion এবং quota features মূলত উপরের চারটি `Yandex.Disk REST API` অনুমতির ওপর নির্ভর করে।

![Yandex Disk অনুমতি কনফিগার করা](../../image/upload/yandex/dataaccess配置软盘权限.png)

### ধাপ 3: অ্যাপ পরিচয়পত্র কপি করুন

অ্যাপ তৈরি হলে কপি করুন:

| Yandex ক্ষেত্র | ImgBed ক্ষেত্র |
| --- | --- |
| `Client ID` | `Client ID` |
| `Client Secret` | `Client Secret` |

![Client ID এবং Secret লিখে রাখা](../../image/upload/yandex/记录客户端id和secret.png)

### ধাপ 4: Yandex চ্যানেল পূরণ করুন

আপলোড সেটিংস-এ `Yandex` নির্বাচন করে পূরণ করুন:

| ImgBed ক্ষেত্র | কী দেবেন |
| --- | --- |
| চ্যানেল নাম | সহজে চেনা যায় এমন নাম, যেমন `Main Yandex`। |
| Client ID | Yandex অ্যাপ-এর `Client ID`। |
| Client Secret | Yandex অ্যাপ-এর `Client Secret`। |
| Refresh Token | আপাতত খালি রাখুন। |
| Root directory | ঐচ্ছিক। ডিফল্ট `imgbed`। |

![চ্যানেল কনফিগারেশন সম্পাদনা করা](../../image/upload/yandex/编辑配置渠道.png)

### ধাপ 5: Refresh Token নিন

1. ImgBed-এ `Get Token` ক্লিক করুন।
2. যে Yandex অ্যাকাউন্ট যুক্ত করতে চান, সেটিতে সাইন ইন করুন।
3. অনুমোদন বার্তা অনুমোদন করুন।
4. কলব্যাক পৃষ্ঠা একটি `Refresh Token` দেখাবে।
5. সেটি কপি করুন।
6. ImgBed-এ ফিরে `Refresh Token` ক্ষেত্র-এ paste করুন।

![অনুমোদনের পর refresh token কপি করা](../../image/upload/yandex/授权后复制刷新令牌.png)

### ধাপ 6: চ্যানেল সংরক্ষণ করুন

সব ক্ষেত্রগুলো পূরণ হলে চ্যানেল সংরক্ষণ করুন।

## দ্রুত প্রবাহ

```text
Open Yandex OAuth Console
-> Create an app
-> Add https://your-domain.com/api/oauth/yandex/callback
-> Confirm Yandex Disk permissions
-> Copy Client ID and Client Secret
-> Fill Client ID / Client Secret into ImgBed
-> Click Get Token
-> Copy the Refresh Token from the callback page
-> Paste it back into ImgBed and save
```

## তথ্যসূত্র

1. Register a Yandex app: https://yandex.com/dev/id/doc/en/register-client
2. Get an authorization code through URL: https://yandex.com/dev/id/doc/en/codes/code-url
3. Yandex OAuth token endpoint: https://yandex.com/dev/id/doc/en/tokens/token
