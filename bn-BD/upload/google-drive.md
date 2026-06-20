# Google Drive Channel যোগ করা

## আগে যা লাগবে

শুরু করার আগে এগুলো প্রস্তুত রাখুন:

| Requirement | কেন লাগবে |
| --- | --- |
| Google account | Google Cloud access এবং Google Drive authorize করতে লাগে |
| Google Cloud project | Drive API enable এবং OAuth credentials তৈরি করতে লাগে |
| OAuth 2.0 client | ImgBed `Client ID`, `Client Secret` এবং `Refresh Token` নিতে এটি ব্যবহার করে |
| আপনার ImgBed domain | OAuth redirect URI-এর জন্য লাগে। আপনি যে domain ব্যবহার করেন সেটির সঙ্গে match করতে হবে। |

## Setup Steps

### Step 1: Google Drive API Enable করুন

1. Google Cloud Console খুলুন।
2. নতুন project তৈরি করুন অথবা existing project নির্বাচন করুন।
3. `APIs & Services`-এ যান।
4. `Enable APIs and Services` ক্লিক করুন।
5. `Google Drive API` search করুন।
6. খুলে enable ক্লিক করুন।

### Step 2: OAuth Consent Screen Configure করুন

1. Google Cloud-এ `Google Auth Platform` খুলুন।
2. App name, support email এবং developer contact email-এর মতো basic `Branding` information পূরণ করুন।
3. `Audience` খুলুন।
4. বেশিরভাগ self-hosted personal deployment-এর জন্য `External` নির্বাচন করুন।
5. `External` নির্বাচন করলে যে Google account authorize করতে চান সেটি `Test users`-এ যোগ করুন।
6. `Data Access` খুলুন।
7. প্রয়োজনীয় Google Drive permissions যোগ করুন।

### Step 3: OAuth 2.0 Client তৈরি করুন

1. `Google Auth Platform`-এ `Clients` খুলুন।
2. নতুন client তৈরি করুন।
3. Application type `Web application` সেট করুন।
4. Client-এর চেনা যায় এমন নাম দিন।
5. Authorized JavaScript origins-এ আপনার ImgBed URL দিন, যেমন:

```text
https://img.example.com
```

6. Authorized redirect URIs-এ দিন:

```text
https://img.example.com/api/oauth/google/callback
```

![Create OAuth client](../../image/upload/google-drive/oa客户端id创建.png)

![Enter domain and callback URL](../../image/upload/google-drive/填写oa客户端url信息.png)

Client তৈরি হলে এই values copy করুন:

| Generated Value | ImgBed Field |
| --- | --- |
| Client ID | `Client ID` |
| Client Secret | `Client Secret` |

## Step 4: Google Drive Channel পূরণ করুন

Upload Settings-এ `Google Drive` নির্বাচন করে পূরণ করুন:

| ImgBed Field | কী দেবেন |
| --- | --- |
| Channel name | চেনা যায় এমন নাম, যেমন `Main Google Drive` |
| Client ID | Google Cloud থেকে পাওয়া Client ID |
| Client Secret | Google Cloud থেকে পাওয়া Client Secret |
| Refresh Token | আপাতত empty রাখুন। পরের step-এ নেবেন। |
| Root directory | Optional। Default `imgbed`। |

![Fill client details in ImgBed](../../image/upload/google-drive/粘贴回添加新渠道配置.png)

## Step 5: Refresh Token নিন

1. `Get Token` ক্লিক করুন।
2. যে Google account connect করতে চান সেটি নির্বাচন করুন।
3. Authorization prompts complete করুন।
4. Callback page একটি `Refresh Token` দেখাবে।
5. সেটি copy করুন।
6. ImgBed-এ ফিরে `Refresh Token` field-এ paste করুন।

![Copy Refresh Token after authorization](../../image/upload/google-drive/授权完复制token.png)

পরে Google account বদলালে, OAuth client বদলালে, বা পুরোনো authorization expire হলে channel delete করার দরকার নেই। Edit page খুলে `Reauthorize` ক্লিক করুন।

## Step 6: Channel Save করুন

সব fields পূরণ হলে channel save করুন।

## Quick Flow

```text
Google Cloud খুলুন
-> Project create বা select করুন
-> Google Drive API enable করুন
-> Google Auth Platform configure করুন
-> Audience External হলে আপনার Google account Test users-এ যোগ করুন
-> Web application OAuth client তৈরি করুন
-> Redirect URI হিসেবে https://your-domain.com/api/oauth/google/callback ব্যবহার করুন
-> ImgBed-এ Client ID এবং Client Secret পূরণ করুন
-> Get Token ক্লিক করুন
-> Google দিয়ে sign in করে authorize করুন
-> Callback page থেকে Refresh Token copy করুন
-> ImgBed-এ paste করে save করুন
-> Test image upload করুন
```

## References

1. Google OAuth Web Server Applications: https://developers.google.com/identity/protocols/oauth2/web-server
2. Google Workspace OAuth Consent Configuration: https://developers.google.com/workspace/guides/configure-oauth-consent
3. Google Drive API Auth Scopes: https://developers.google.com/workspace/drive/api/guides/api-specific-auth
