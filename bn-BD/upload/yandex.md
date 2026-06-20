# Yandex Channel যোগ করা

## আগে যা লাগবে

| Requirement | কেন লাগবে |
| --- | --- |
| Yandex account | Sign in এবং Yandex Disk authorize করতে লাগে |
| Yandex OAuth app | `Client ID` এবং `Client Secret` generate করতে লাগে |
| আপনার ImgBed domain | OAuth redirect URI-এর জন্য লাগে |
| Available Yandex Disk storage | Actual file storage location হিসেবে ব্যবহৃত হবে |

## Setup Steps

### Step 1: Yandex OAuth App তৈরি করুন

1. Yandex OAuth app creation page খুলুন:

```text
https://oauth.yandex.com/client/new
```

2. Sign in page-এ redirect হলে আগে Yandex account দিয়ে sign in করুন।
3. নতুন app তৈরি করুন।
4. App-এর চেনা যায় এমন নাম দিন, যেমন `imgbed-yandex`।
5. Callback বা redirect URL settings খুঁজুন।
6. দিন:

```text
https://your-domain.com/api/oauth/yandex/callback
```

### Step 2: Permissions Confirm করুন

বর্তমান ImgBed Yandex integration-এর জন্য `Yandex.Disk REST API`-এর নিচে এই চারটি permissions রাখুন:

| Permission | Purpose |
| --- | --- |
| `cloud_api:disk.app_folder` | ImgBed-কে app folder-এ files store করতে দেয় |
| `cloud_api:disk.read` | Files এবং download links পড়ে |
| `cloud_api:disk.write` | Files upload, folders create এবং files delete করে |
| `Access to information about Yandex.Disk` | Disk quota এবং used space পড়ে |

`Yandex ID API`-এর নিচে এগুলো দেখলে optional:

| Permission Text | Recommendation |
| --- | --- |
| `Access to username, first name and surname, gender` | Optional |
| `Access to email address` | Optional |

Core upload, download, deletion এবং quota features মূলত উপরের চারটি `Yandex.Disk REST API` permissions-এর ওপর নির্ভর করে।

![Configure Yandex Disk permissions](../../image/upload/yandex/dataaccess配置软盘权限.png)

### Step 3: App Credentials Copy করুন

App তৈরি হলে copy করুন:

| Yandex Field | ImgBed Field |
| --- | --- |
| `Client ID` | `Client ID` |
| `Client Secret` | `Client Secret` |

![Record Client ID and Secret](../../image/upload/yandex/记录客户端id和secret.png)

### Step 4: Yandex Channel পূরণ করুন

Upload Settings-এ `Yandex` নির্বাচন করে পূরণ করুন:

| ImgBed Field | কী দেবেন |
| --- | --- |
| Channel name | চেনা যায় এমন নাম, যেমন `Main Yandex` |
| Client ID | Yandex app `Client ID` |
| Client Secret | Yandex app `Client Secret` |
| Refresh Token | আপাতত empty রাখুন |
| Root directory | Optional। Default `imgbed`। |

![Edit channel config](../../image/upload/yandex/编辑配置渠道.png)

### Step 5: Refresh Token নিন

1. ImgBed-এ `Get Token` ক্লিক করুন।
2. যে Yandex account connect করতে চান সেটিতে sign in করুন।
3. Authorization prompt approve করুন।
4. Callback page একটি `Refresh Token` দেখাবে।
5. সেটি copy করুন।
6. ImgBed-এ ফিরে `Refresh Token` field-এ paste করুন।

![Copy refresh token after authorization](../../image/upload/yandex/授权后复制刷新令牌.png)

### Step 6: Channel Save করুন

সব fields পূরণ হলে channel save করুন।

## Quick Flow

```text
Yandex OAuth Console খুলুন
-> App তৈরি করুন
-> https://your-domain.com/api/oauth/yandex/callback যোগ করুন
-> Yandex Disk permissions confirm করুন
-> Client ID এবং Client Secret copy করুন
-> ImgBed-এ Client ID / Client Secret পূরণ করুন
-> Get Token ক্লিক করুন
-> Callback page থেকে Refresh Token copy করুন
-> ImgBed-এ paste করে save করুন
```

## References

1. Register a Yandex app: https://yandex.com/dev/id/doc/en/register-client
2. Get an authorization code through URL: https://yandex.com/dev/id/doc/en/codes/code-url
3. Yandex OAuth token endpoint: https://yandex.com/dev/id/doc/en/tokens/token
