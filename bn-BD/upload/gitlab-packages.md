# GitLab Packages চ্যানেল যোগ করা

## শুরু করার আগে যা লাগবে

আপনার শুধু তিনটি জিনিস লাগবে:

| প্রয়োজনীয় তথ্য | উদ্দেশ্য |
| --- | --- |
| GitLab অ্যাকাউন্ট | access token তৈরি করা এবং প্রকল্পের মালিকানার জন্য। |
| GitLab Personal Access Token | GitLab API-তে প্রবেশ, প্রকল্প তৈরি এবং Generic Packages-এ ফাইল আপলোড করতে ImgBed এটি ব্যবহার করে। |
| প্রকল্প নাম | শুধু প্রকল্প নাম দিলেই চলে, যেমন `imgbed`। |

## সেটআপ ধাপ

### ধাপ 1: GitLab-এ সাইন ইন করে Access Token তৈরি করুন

1. GitLab-এ সাইন ইন করুন।
2. উপরের ডান পাশে অ্যাভাটার ক্লিক করে `Preferences` খুলুন।
3. বাম পাশের সাইডবার থেকে `Access Tokens` খুলুন।
4. টোকেন-এর সহজে চেনা যায় এমন নাম দিন।
5. নিজের রক্ষণাবেক্ষণ পদ্ধতি অনুযায়ী মেয়াদ তারিখ নির্বাচন করুন।
6. `api` scope নির্বাচন করুন।
7. টোকেন তৈরি হওয়ার সঙ্গে সঙ্গে কপি করে সংরক্ষণ করুন।

![legacy টোকেন তৈরি করা](../../image/upload/gitlab-packages/点击生成旧版令牌.png)

![টোকেন অনুমতি নির্বাচন করা](../../image/upload/gitlab-packages/勾选令牌权限.png)

## ধাপ 2: ImgBed-এ GitLab Packages চ্যানেল পূরণ করুন

আপলোড সেটিংস-এ `GitLab Packages` নির্বাচন করার পর ক্ষেত্রগুলো এভাবে পূরণ করুন:

| UI ক্ষেত্র | কী দেবেন |
| --- | --- |
| চ্যানেল নাম | আপনার পছন্দের নাম, যেমন `GitLabPrimary`। |
| Access Token | সদ্য তৈরি করা GitLab Personal Access Token। |
| প্রকল্প নাম | short project name যেমন `imgbed`, অথবা full path যেমন `username/imgbed`। |
| প্রাইভেট রিপোজিটরি | প্রয়োজন অনুযায়ী চালু বা বন্ধ করুন। |
| Remark | ঐচ্ছিক, যেমন `Primary upload channel`। |

![চ্যানেল কনফিগার করা](../../image/upload/gitlab-packages/配置渠道内容.png)

## ধাপ 3: চ্যানেল সংরক্ষণ করুন

ক্ষেত্রগুলো পূরণ করার পর সংরক্ষণ ক্লিক করুন।

সিস্টেম নিচের কাজগুলো করবে:

| সিস্টেমের আচরণ | বিবরণ |
| --- | --- |
| short project name | ImgBed বর্তমান GitLab অ্যাকাউন্ট শনাক্ত করে মানটিকে full project path-এ প্রসারিত করে। |
| full project path | ImgBed `username/project` path ঠিক যেমন দেওয়া হয়েছে তেমনই ব্যবহার করে। |
| প্রকল্প পরীক্ষা | বর্তমান personal account path হলে প্রকল্প না থাকলে ImgBed স্বয়ংক্রিয়ভাবে তৈরি করে। full path হাতে দিলে ImgBed সেটিই ব্যবহার করে। |
| public/private state | বর্তমান সুইচ অনুযায়ী প্রকল্প দৃশ্যমানতা সিঙ্ক হয়। |

## দ্রুত তালিকা

```text
Sign in to GitLab
-> Create an Access Token
-> Select only the api scope
-> Return to ImgBed and enter the token and project name
-> Save
-> If only a project name is entered, ImgBed adds the current username automatically
-> If username/project is entered, ImgBed uses it as-is
-> Upload a test image
```
