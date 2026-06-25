# OneDrive চ্যানেল যোগ করা

## আগে যা লাগবে

| প্রয়োজনীয় তথ্য | কেন লাগবে |
| --- | --- |
| Microsoft অ্যাকাউন্ট | Microsoft admin pages ব্যবহারের এবং OneDrive অনুমোদনের জন্য। |
| আপনার ImgBed ডোমেইন | OAuth কলব্যাক URL হিসেবে ব্যবহার করতে। |
| app registration | `Client ID` এবং `Client Secret` তৈরি করতে। |
| OneDrive অ্যাকাউন্ট | প্রকৃত ফাইল সংরক্ষণস্থল হিসেবে ব্যবহার হবে। |

## সেটআপ ধাপ

### ধাপ 1: Microsoft Entra ID খুলুন

1. `portal.azure.com` খুলুন।
2. উপরে `Microsoft Entra ID` খুঁজুন।
3. dropdown-এ target page না দেখালে নির্বাচন করুন:

```text
Continue searching in Microsoft Entra ID
```

4. `Microsoft Entra ID` খুলুন।
5. `App registrations` খুলুন।
6. `New registration` ক্লিক করুন।

### ধাপ 2: অ্যাপ Register করুন

`New registration` পৃষ্ঠায় পূরণ করুন:

| ক্ষেত্র | কী দেবেন |
| --- | --- |
| নাম | সহজে চেনা যায় এমন নাম, যেমন `imgbed-onedrive`। |
| Supported account types | নিচের table অনুযায়ী নির্বাচন করুন। |
| Redirect URI ধরন | `Web` |
| Redirect URI | `https://your-domain.com/api/oauth/onedrive/callback` |

অ্যাকাউন্ট ধরন guidance:

| আপনার scenario | Supported account types |
| --- | --- |
| শুধু personal OneDrive | personal Microsoft account option নির্বাচন করুন। |
| personal এবং work/school দুটোই | personal এবং organizational accounts দুটোই সমর্থন করে এমন option নির্বাচন করুন। |
| শুধু company বা school OneDrive | organizational account option নির্বাচন করুন। |

form পূরণ শেষে register ক্লিক করুন।

![OneDrive অ্যাপ তৈরি করা](../../image/upload/onedrive/添加应用程序注册.png)

### ধাপ 3: অ্যাপ Information কপি করুন

অ্যাপ তৈরি হলে overview পৃষ্ঠা থেকে এগুলো কপি করুন:

| Microsoft ক্ষেত্র | ImgBed ক্ষেত্র |
| --- | --- |
| `Application (client) ID` | `Client ID` |
| `Directory (tenant) ID` | organizational accounts-এর `Tenant ID` |

![অ্যাপ্লিকেশন এবং tenant IDs](../../image/upload/onedrive/应用程序ID和目录租户ID位.png)

### ধাপ 4: Client Secret তৈরি করুন

1. `Certificates & secrets` খুলুন।
2. `New client secret` ক্লিক করুন।
3. নিজের পছন্দমতো description দিন।
4. মেয়াদ period নির্বাচন করুন।
5. তৈরি হওয়ার সঙ্গে সঙ্গে `Value` কপি করুন।

![client secret মান সংরক্ষণ করা](../../image/upload/onedrive/保存客户端密码值.png)

### ধাপ 5: API অনুমতি যোগ করুন

1. `API permissions` খুলুন।
2. `Add a permission` ক্লিক করুন।
3. `Microsoft Graph` নির্বাচন করুন।
4. `Delegated permissions` নির্বাচন করুন।
5. নিচের অনুমতি যোগ করুন:

| অনুমতি | উদ্দেশ্য |
| --- | --- |
| `Files.ReadWrite.All` | ফাইল আপলোড, ফোল্ডার তৈরি এবং ফাইল মুছে ফেলে। |
| `offline_access` | ImgBed-কে `Refresh Token` নিতে দেয়। |
| `User.Read` | অ্যাকাউন্ট এবং quota information পড়ে। |

### ধাপ 6: OneDrive চ্যানেল পূরণ করুন

আপলোড সেটিংস-এ `OneDrive` নির্বাচন করে পূরণ করুন:

| ImgBed ক্ষেত্র | কী দেবেন |
| --- | --- |
| চ্যানেল নাম | সহজে চেনা যায় এমন নাম, যেমন `Main OneDrive`। |
| Client ID | Microsoft `Application (client) ID`। |
| Client Secret | কপি করা `Client Secret Value`। |
| Tenant ID | নিচের table অনুযায়ী। |
| Refresh Token | আপাতত খালি রাখুন। |
| Root directory | ঐচ্ছিক। ডিফল্ট `imgbed`। |
| Note | ঐচ্ছিক। |

![OneDrive চ্যানেল config পূরণ করা](../../image/upload/onedrive/添加新渠道配置.png)

`Tenant ID` কীভাবে দেবেন:

| নির্বাচিত অ্যাকাউন্ট ধরন | ImgBed `Tenant ID` |
| --- | --- |
| Personal accounts | `consumers` |
| Personal + organizational accounts | `common` |
| শুধু বর্তমান organization | `Directory (tenant) ID` |

### ধাপ 7: Refresh Token নিন

1. ImgBed-এ `Get Token` ক্লিক করুন।
2. যে Microsoft অ্যাকাউন্ট যুক্ত করতে চান, সেটিতে সাইন ইন করুন।
3. অনুমোদন বার্তা অনুমোদন করুন।
4. কলব্যাক পৃষ্ঠা একটি `Refresh Token` দেখাবে।
5. সেটি কপি করুন।
6. ImgBed-এ ফিরে `Refresh Token` ক্ষেত্র-এ paste করুন।

![refresh টোকেন কপি করা](../../image/upload/onedrive/复制刷新令牌.png)

### ধাপ 8: চ্যানেল সংরক্ষণ করুন

সব ক্ষেত্রগুলো পূরণ হলে চ্যানেল সংরক্ষণ করুন।

## দ্রুত প্রবাহ

```text
Open portal.azure.com
-> Search for Microsoft Entra ID
-> Open App registrations
-> Register a new app
-> Fill Name / Supported account types / Web redirect URI
-> Register
-> Copy Application (client) ID
-> Check the callback URL in Authentication
-> Create a Client Secret in Certificates & secrets
-> Add permissions in API permissions
-> Fill Client ID / Client Secret / Tenant ID into ImgBed
-> Click Get Token
-> Copy the Refresh Token from the callback page
-> Paste it back into ImgBed and save
```

## তথ্যসূত্র

1. Microsoft Entra app registration: https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app
2. Microsoft identity platform authorization code flow: https://learn.microsoft.com/en-us/entra/identity-platform/v2-oauth2-auth-code-flow
3. Microsoft Graph user authentication: https://learn.microsoft.com/en-us/graph/auth-v2-user
