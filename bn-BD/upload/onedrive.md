# OneDrive Channel যোগ করা

## আগে যা লাগবে

| Requirement | কেন লাগবে |
| --- | --- |
| Microsoft account | Microsoft admin pages access এবং OneDrive authorize করতে লাগে |
| আপনার ImgBed domain | OAuth callback URL-এর জন্য লাগে |
| App registration | `Client ID` এবং `Client Secret` generate করতে লাগে |
| OneDrive account | Actual file storage location হিসেবে ব্যবহৃত হবে |

## Setup Steps

### Step 1: Microsoft Entra ID খুলুন

1. `portal.azure.com` খুলুন।
2. উপরে `Microsoft Entra ID` search করুন।
3. Dropdown-এ target page না দেখালে নির্বাচন করুন:

```text
Continue searching in Microsoft Entra ID
```

4. `Microsoft Entra ID` খুলুন।
5. `App registrations` খুলুন।
6. `New registration` ক্লিক করুন।

### Step 2: App Register করুন

`New registration` page-এ পূরণ করুন:

| Field | কী দেবেন |
| --- | --- |
| Name | চেনা যায় এমন নাম, যেমন `imgbed-onedrive` |
| Supported account types | নিচের table অনুযায়ী নির্বাচন করুন |
| Redirect URI type | `Web` |
| Redirect URI | `https://your-domain.com/api/oauth/onedrive/callback` |

Account type guidance:

| আপনার Scenario | Supported Account Types |
| --- | --- |
| শুধু personal OneDrive | Personal Microsoft account option নির্বাচন করুন। |
| Personal এবং work/school দুটোই | Personal এবং organizational accounts দুটো support করে এমন option নির্বাচন করুন। |
| শুধু company বা school OneDrive | Organizational account option নির্বাচন করুন। |

Form পূরণ শেষে register ক্লিক করুন।

![Create OneDrive app](../../image/upload/onedrive/添加应用程序注册.png)

### Step 3: App Information Copy করুন

App তৈরি হলে overview page থেকে এগুলো copy করুন:

| Microsoft Field | ImgBed Field |
| --- | --- |
| `Application (client) ID` | `Client ID` |
| `Directory (tenant) ID` | Organizational accounts-এর জন্য `Tenant ID` |

![Application and tenant IDs](../../image/upload/onedrive/应用程序ID和目录租户ID位.png)

### Step 4: Client Secret তৈরি করুন

1. `Certificates & secrets` খুলুন।
2. `New client secret` ক্লিক করুন।
3. নিজের পছন্দমতো description দিন।
4. Expiration period নির্বাচন করুন।
5. তৈরি হওয়ার সঙ্গে সঙ্গে `Value` copy করুন।

![Save client secret value](../../image/upload/onedrive/保存客户端密码值.png)

### Step 5: API Permissions যোগ করুন

1. `API permissions` খুলুন।
2. `Add a permission` ক্লিক করুন।
3. `Microsoft Graph` নির্বাচন করুন।
4. `Delegated permissions` নির্বাচন করুন।
5. এই permissions যোগ করুন:

| Permission | Purpose |
| --- | --- |
| `Files.ReadWrite.All` | Files upload, folders create এবং files delete করে |
| `offline_access` | ImgBed-কে `Refresh Token` নিতে দেয় |
| `User.Read` | Account এবং quota information পড়ে |

### Step 6: OneDrive Channel পূরণ করুন

Upload Settings-এ `OneDrive` নির্বাচন করে পূরণ করুন:

| ImgBed Field | কী দেবেন |
| --- | --- |
| Channel name | চেনা যায় এমন নাম, যেমন `Main OneDrive` |
| Client ID | Microsoft `Application (client) ID` |
| Client Secret | Copy করা `Client Secret Value` |
| Tenant ID | নিচের table অনুযায়ী |
| Refresh Token | আপাতত empty রাখুন |
| Root directory | Optional। Default `imgbed`। |
| Note | Optional |

![Fill OneDrive channel config](../../image/upload/onedrive/添加新渠道配置.png)

`Tenant ID` কীভাবে দেবেন:

| Account Type You Chose | ImgBed `Tenant ID` |
| --- | --- |
| Personal accounts | `consumers` |
| Personal + organizational accounts | `common` |
| Current organization only | `Directory (tenant) ID` |

### Step 7: Refresh Token নিন

1. ImgBed-এ `Get Token` ক্লিক করুন।
2. যে Microsoft account connect করতে চান সেটিতে sign in করুন।
3. Authorization prompt approve করুন।
4. Callback page একটি `Refresh Token` দেখাবে।
5. সেটি copy করুন।
6. ImgBed-এ ফিরে `Refresh Token` field-এ paste করুন।

![Copy refresh token](../../image/upload/onedrive/复制刷新令牌.png)

### Step 8: Channel Save করুন

সব fields পূরণ হলে channel save করুন।

## Quick Flow

```text
portal.azure.com খুলুন
-> Microsoft Entra ID search করুন
-> App registrations খুলুন
-> নতুন app register করুন
-> Name / Supported account types / Web redirect URI পূরণ করুন
-> Register
-> Application (client) ID copy করুন
-> Authentication-এ callback URL check করুন
-> Certificates & secrets-এ Client Secret তৈরি করুন
-> API permissions যোগ করুন
-> ImgBed-এ Client ID / Client Secret / Tenant ID পূরণ করুন
-> Get Token ক্লিক করুন
-> Callback page থেকে Refresh Token copy করুন
-> ImgBed-এ paste করে save করুন
```

## References

1. Microsoft Entra app registration: https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app
2. Microsoft identity platform authorization code flow: https://learn.microsoft.com/en-us/entra/identity-platform/v2-oauth2-auth-code-flow
3. Microsoft Graph user authentication: https://learn.microsoft.com/en-us/graph/auth-v2-user
