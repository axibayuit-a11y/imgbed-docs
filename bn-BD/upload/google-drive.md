# Google Drive চ্যানেল যোগ করা

## আগে যা লাগবে

শুরু করার আগে এগুলো প্রস্তুত রাখুন:

| প্রয়োজনীয় তথ্য | কেন লাগবে |
| --- | --- |
| Google অ্যাকাউন্ট | Google Cloud-এ প্রবেশ এবং Google Drive অনুমোদনের জন্য। |
| Google Cloud প্রকল্প | Drive API চালু করা এবং OAuth পরিচয়পত্র তৈরি করতে। |
| OAuth 2.0 client | ImgBed `Client ID`, `Client Secret` এবং `Refresh Token` পেতে এটি ব্যবহার করে। |
| আপনার ImgBed ডোমেইন | OAuth redirect URI হিসেবে ব্যবহার করতে। আপনি যে ডোমেইন ব্যবহার করেন, সেটির সঙ্গে মিলতে হবে। |

## সেটআপ ধাপ

### ধাপ 1: Google Drive API চালু করুন

1. Google Cloud Console খুলুন।
2. নতুন প্রকল্প তৈরি করুন অথবা বিদ্যমান প্রকল্প নির্বাচন করুন।
3. `APIs & Services`-এ যান।
4. `Enable APIs and Services` ক্লিক করুন।
5. `Google Drive API` খুঁজুন।
6. সেটি খুলে চালু ক্লিক করুন।

### ধাপ 2: OAuth Consent Screen কনফিগার করুন

1. Google Cloud-এ `Google Auth Platform` খুলুন।
2. অ্যাপের নাম, support email এবং developer contact email-এর মতো basic `Branding` information পূরণ করুন।
3. `Audience` খুলুন।
4. বেশিরভাগ self-hosted personal deployment-এর জন্য `External` নির্বাচন করুন।
5. `External` নির্বাচন করলে যে Google অ্যাকাউন্ট authorize করতে চান, সেটি `Test users`-এ যোগ করুন।
6. `Data Access` খুলুন।
7. প্রয়োজনীয় Google Drive অনুমতি যোগ করুন।

### ধাপ 3: OAuth 2.0 Client তৈরি করুন

1. `Google Auth Platform`-এ `Clients` খুলুন।
2. নতুন client তৈরি করুন।
3. অ্যাপ্লিকেশন ধরন `Web application` সেট করুন।
4. client-এর সহজে চেনা যায় এমন নাম দিন।
5. authorized JavaScript origins-এ আপনার ImgBed URL দিন, যেমন:

```text
https://img.example.com
```

6. authorized redirect URIs-এ দিন:

```text
https://img.example.com/api/oauth/google/callback
```

![OAuth client তৈরি করা](../../image/upload/google-drive/oa客户端id创建.png)

![ডোমেইন এবং কলব্যাক URL লেখা](../../image/upload/google-drive/填写oa客户端url信息.png)

client তৈরি হলে নিচের মানগুলো কপি করুন:

| তৈরি হওয়া মান | ImgBed ক্ষেত্র |
| --- | --- |
| Client ID | `Client ID` |
| Client Secret | `Client Secret` |

## ধাপ 4: Google Drive চ্যানেল পূরণ করুন

আপলোড সেটিংস-এ `Google Drive` নির্বাচন করে পূরণ করুন:

| ImgBed ক্ষেত্র | কী দেবেন |
| --- | --- |
| চ্যানেল নাম | সহজে চেনা যায় এমন নাম, যেমন `Main Google Drive`। |
| Client ID | Google Cloud থেকে পাওয়া Client ID। |
| Client Secret | Google Cloud থেকে পাওয়া Client Secret। |
| Refresh Token | আপাতত খালি রাখুন। পরের ধাপে নেবেন। |
| Root directory | ঐচ্ছিক। ডিফল্ট `imgbed`। |

![ImgBed-এ client details পূরণ করা](../../image/upload/google-drive/粘贴回添加新渠道配置.png)

## ধাপ 5: Refresh Token নিন

1. `Get Token` ক্লিক করুন।
2. যে Google অ্যাকাউন্ট যুক্ত করতে চান, সেটি নির্বাচন করুন।
3. অনুমোদন বার্তা সম্পন্ন করুন।
4. কলব্যাক পৃষ্ঠা একটি `Refresh Token` দেখাবে।
5. সেটি কপি করুন।
6. ImgBed-এ ফিরে `Refresh Token` ক্ষেত্র-এ paste করুন।

![অনুমোদনের পর Refresh Token কপি করা](../../image/upload/google-drive/授权完复制token.png)

পরে Google অ্যাকাউন্ট বদলালে, OAuth client বদলালে অথবা পুরোনো অনুমোদন expire হলে চ্যানেল মুছতে হবে না। edit পৃষ্ঠা খুলে `Reauthorize` ক্লিক করুন।

## ধাপ 6: চ্যানেল সংরক্ষণ করুন

সব ক্ষেত্রগুলো পূরণ হলে চ্যানেল সংরক্ষণ করুন।

## দ্রুত প্রবাহ

```text
Open Google Cloud
-> Create or select a project
-> Enable Google Drive API
-> Configure Google Auth Platform
-> If Audience is External, add your Google account to Test users
-> Create a Web application OAuth client
-> Use https://your-domain.com/api/oauth/google/callback as the redirect URI
-> Fill Client ID and Client Secret into ImgBed
-> Click Get Token
-> Sign in with Google and authorize
-> Copy the Refresh Token from the callback page
-> Paste it back into ImgBed and save
-> Upload a test image
```

## তথ্যসূত্র

1. Google OAuth Web Server Applications: https://developers.google.com/identity/protocols/oauth2/web-server
2. Google Workspace OAuth Consent কনফিগারেশন: https://developers.google.com/workspace/guides/configure-oauth-consent
3. Google Drive API Auth Scopes: https://developers.google.com/workspace/drive/api/guides/api-specific-auth
