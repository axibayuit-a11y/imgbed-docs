# Hugging Face Channel যোগ করা

## শুরু করার আগে যা লাগবে

আপনার শুধু তিনটি জিনিস লাগবে:

| Requirement | Purpose |
| --- | --- |
| Hugging Face account | Access token generate করা এবং repository ownership-এর জন্য। |
| Hugging Face User Access Token | Hugging Face API access, repository create এবং files upload করতে ImgBed এটি ব্যবহার করে। |
| Repository name | শুধু repository name দিলেই চলে, যেমন `image`। |

## Setup Steps

### Step 1: Hugging Face-এ Sign in করে Access Token তৈরি করুন

1. Hugging Face-এ sign in করুন।
2. Upper-right corner-এ avatar ক্লিক করে `Settings` খুলুন।
3. Left sidebar থেকে `Access Tokens` খুলুন।
4. নতুন token তৈরি করুন।
5. Token-এর সহজে চেনা যায় এমন নাম দিন।
6. `write` permission নির্বাচন করুন।
7. Token তৈরি হওয়ার সঙ্গে সঙ্গে copy করে save করুন।

![Create a token](../../image/upload/huggingface/创建令牌.png)

## Step 2: ImgBed-এ Hugging Face Channel পূরণ করুন

Upload Settings-এ `Hugging Face` নির্বাচন করার পর fields এভাবে পূরণ করুন:

| UI Field | কী দেবেন |
| --- | --- |
| Channel name | আপনার পছন্দের নাম, যেমন `hf-primary`। |
| Repository name | Short repo name যেমন `image`, অথবা full path যেমন `username/image`। |
| Access Token | সদ্য তৈরি করা Hugging Face User Access Token। |
| Private repository | প্রয়োজন অনুযায়ী on বা off করুন। |
| Remark | Optional, যেমন `Primary upload channel`। |

![Add the channel](../../image/upload/huggingface/添加渠道.png)

## Step 3: Channel Save করুন

Fields পূরণ করার পর Save ক্লিক করুন।

System এরপর এই কাজগুলো handle করবে:

| System Behavior | Description |
| --- | --- |
| Short repository name | ImgBed current Hugging Face account identify করে value-টিকে full repository path বানায়। |
| Full repository path | ImgBed `username/repository` path ঠিক যেমন দেওয়া হয়েছে তেমনই ব্যবহার করে। |
| Repository check | Current personal account path হলে repository না থাকলে ImgBed তৈরি করার চেষ্টা করে। Full path manually দিলে ImgBed সেটিই ব্যবহার করে। |
| Repository type | এই channel `dataset` repository ব্যবহার করে। |
| Public/private state | Current switch অনুযায়ী repository visibility sync হয়। |

## Quick Checklist

```text
Hugging Face-এ sign in করুন
-> Access Token তৈরি করুন
-> write permission নির্বাচন করুন
-> ImgBed-এ ফিরে token এবং repository name দিন
-> Save
-> শুধু repo name দিলে ImgBed current username automatically যোগ করবে
-> username/repo দিলে ImgBed সেটিই ব্যবহার করবে
-> ImgBed dataset repository check বা create করবে
-> Test image upload করুন
```
