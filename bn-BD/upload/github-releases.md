# GitHub Releases চ্যানেল যোগ করা

## শুরু করার আগে যা লাগবে

আপনার শুধু তিনটি জিনিস লাগবে:

| প্রয়োজনীয় তথ্য | উদ্দেশ্য |
| --- | --- |
| GitHub অ্যাকাউন্ট | access token তৈরি করা এবং রিপোজিটরির মালিকানার জন্য। |
| GitHub Access Token | GitHub API-তে প্রবেশ, releases তৈরি এবং ফাইল আপলোড করতে ImgBed এটি ব্যবহার করে। |
| রিপোজিটরি নাম | শুধু রিপোজিটরি নাম দিলেই চলে, যেমন `image`। |

## সেটআপ ধাপ

### ধাপ 1: GitHub-এ সাইন ইন করে Access Token তৈরি করুন

1. GitHub-এ সাইন ইন করুন।
2. উপরের ডান পাশে অ্যাভাটার ক্লিক করে `Settings` খুলুন।
3. বাম পাশের সাইডবার থেকে `Developer settings` খুলুন।
4. `Personal access tokens` খুলুন।
5. `Tokens (classic)` খুলুন।
6. `Generate new token (classic)` ক্লিক করুন।
7. টোকেন-এর সহজে চেনা যায় এমন নাম দিন।
8. নিজের রক্ষণাবেক্ষণ পদ্ধতি অনুযায়ী মেয়াদ তারিখ নির্বাচন করুন।
9. `repo` এবং `workflow` scopes নির্বাচন করুন।
10. টোকেন তৈরি হওয়ার সঙ্গে সঙ্গে কপি করে সংরক্ষণ করুন।

![GitHub অনুমতি যোগ করা](../../image/upload/github-releases/添加github权限.png)

## ধাপ 2: ImgBed-এ GitHub Releases চ্যানেল পূরণ করুন

আপলোড সেটিংস-এ `GitHub Releases` নির্বাচন করার পর ক্ষেত্রগুলো এভাবে পূরণ করুন:

| UI ক্ষেত্র | কী দেবেন |
| --- | --- |
| চ্যানেল নাম | আপনার পছন্দের নাম, যেমন `GitHubPrimary`। |
| Access Token | সদ্য তৈরি করা GitHub Personal Access Token। |
| রিপোজিটরি নাম | short repo name যেমন `image`, অথবা full path যেমন `username/image`। |
| প্রাইভেট রিপোজিটরি | প্রয়োজন অনুযায়ী চালু বা বন্ধ করুন। |
| Remark | ঐচ্ছিক, যেমন `Primary upload channel`। |

![GitHub চ্যানেল কনফিগারেশন পূরণ করা](../../image/upload/github-releases/填写github渠道配置.png)

## ধাপ 3: চ্যানেল সংরক্ষণ করুন

ক্ষেত্রগুলো পূরণ করার পর সংরক্ষণ ক্লিক করুন।

সিস্টেম নিচের কাজগুলো করবে:

| সিস্টেমের আচরণ | বিবরণ |
| --- | --- |
| short repository name | ImgBed বর্তমান GitHub অ্যাকাউন্ট শনাক্ত করে মানটিকে full repository path-এ প্রসারিত করে। |
| full repository path | ImgBed `username/repository` path ঠিক যেমন দেওয়া হয়েছে তেমনই ব্যবহার করে। |
| রিপোজিটরি পরীক্ষা | বর্তমান personal account path হলে রিপোজিটরি না থাকলে ImgBed স্বয়ংক্রিয়ভাবে তৈরি করে। full path হাতে দিলে ImgBed সেটিই ব্যবহার করে। |
| public/private state | বর্তমান সুইচ অনুযায়ী রিপোজিটরি দৃশ্যমানতা সিঙ্ক হয়। |

## দ্রুত তালিকা

GitHub Releases এভাবে কাজ করে:

```text
Sign in to GitHub
-> Create an Access Token
-> Return to ImgBed and enter the token and repository name
-> Save
-> If only a repo name is entered, ImgBed adds the current username automatically
-> If username/repo is entered, ImgBed uses it as-is
-> Upload a test image
```
