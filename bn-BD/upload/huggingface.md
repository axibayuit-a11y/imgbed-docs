# Hugging Face চ্যানেল যোগ করা

## শুরু করার আগে যা লাগবে

আপনার শুধু তিনটি জিনিস লাগবে:

| প্রয়োজনীয় তথ্য | উদ্দেশ্য |
| --- | --- |
| Hugging Face অ্যাকাউন্ট | access token তৈরি করা এবং রিপোজিটরির মালিকানার জন্য। |
| Hugging Face User Access Token | Hugging Face API-তে প্রবেশ, রিপোজিটরি তৈরি এবং ফাইল আপলোড করতে ImgBed এটি ব্যবহার করে। |
| রিপোজিটরি নাম | শুধু রিপোজিটরি নাম দিলেই চলে, যেমন `image`। |

## সেটআপ ধাপ

### ধাপ 1: Hugging Face-এ সাইন ইন করে Access Token তৈরি করুন

1. Hugging Face-এ সাইন ইন করুন।
2. উপরের ডান পাশে অ্যাভাটার ক্লিক করে `Settings` খুলুন।
3. বাম পাশের সাইডবার থেকে `Access Tokens` খুলুন।
4. নতুন টোকেন তৈরি করুন।
5. টোকেন-এর সহজে চেনা যায় এমন নাম দিন।
6. `write` অনুমতি নির্বাচন করুন।
7. টোকেন তৈরি হওয়ার সঙ্গে সঙ্গে কপি করে সংরক্ষণ করুন।

![টোকেন তৈরি করা](../../image/upload/huggingface/创建令牌.png)

## ধাপ 2: ImgBed-এ Hugging Face চ্যানেল পূরণ করুন

আপলোড সেটিংস-এ `Hugging Face` নির্বাচন করার পর ক্ষেত্রগুলো এভাবে পূরণ করুন:

| UI ক্ষেত্র | কী দেবেন |
| --- | --- |
| চ্যানেল নাম | আপনার পছন্দের নাম, যেমন `hf-primary`। |
| রিপোজিটরি নাম | short repo name যেমন `image`, অথবা full path যেমন `username/image`। |
| Access Token | সদ্য তৈরি করা Hugging Face User Access Token। |
| প্রাইভেট রিপোজিটরি | প্রয়োজন অনুযায়ী চালু বা বন্ধ করুন। |
| Remark | ঐচ্ছিক, যেমন `Primary upload channel`। |

![চ্যানেল যোগ করা](../../image/upload/huggingface/添加渠道.png)

## ধাপ 3: চ্যানেল সংরক্ষণ করুন

ক্ষেত্রগুলো পূরণ করার পর সংরক্ষণ ক্লিক করুন।

সিস্টেম এরপর নিচের কাজগুলো করবে:

| সিস্টেমের আচরণ | বিবরণ |
| --- | --- |
| short repo name | ImgBed বর্তমান Hugging Face অ্যাকাউন্ট শনাক্ত করে মানটিকে full repository path-এ প্রসারিত করে। |
| full repository path | ImgBed `username/repository` path ঠিক যেমন দেওয়া হয়েছে তেমনই ব্যবহার করে। |
| রিপোজিটরি পরীক্ষা | বর্তমান personal account path হলে রিপোজিটরি না থাকলে ImgBed তৈরি করার চেষ্টা করে। full path হাতে দিলে ImgBed সেটিই ব্যবহার করে। |
| রিপোজিটরি ধরন | এই চ্যানেল `dataset` রিপোজিটরি ব্যবহার করে। |
| public/private state | বর্তমান সুইচ অনুযায়ী রিপোজিটরি দৃশ্যমানতা সিঙ্ক হয়। |

## দ্রুত তালিকা

```text
Sign in to Hugging Face
-> Create an Access Token
-> Select write permission
-> Return to ImgBed and enter the token and repository name
-> Save
-> If only a repo name is entered, ImgBed adds the current username automatically
-> If username/repo is entered, ImgBed uses it as-is
-> ImgBed checks or creates the dataset repository
-> Upload a test image
```
