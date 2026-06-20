# Dropbox Channel যোগ করা

## আগে যা লাগবে

| Requirement | কেন লাগবে |
| --- | --- |
| Dropbox account | Sign in এবং app authorize করতে লাগে |
| Dropbox app | `App Key` এবং `App Secret` generate করতে লাগে |
| আপনার ImgBed domain | OAuth redirect URI-এর জন্য লাগে |
| Available Dropbox storage | Actual file storage location হিসেবে ব্যবহৃত হবে |

## Setup Steps

### Step 1: Dropbox App তৈরি করুন

1. Dropbox App Console খুলুন:

```text
https://www.dropbox.com/developers/apps
```

2. নতুন app তৈরি করুন।
3. Access type হিসেবে নির্বাচন করুন:

```text
App folder
```

4. App-এর চেনা যায় এমন নাম দিন, যেমন `imgbed-app`।
5. App তৈরি হলে app details page খুলুন।

Recommended access type:

| Access Type | Recommendation |
| --- | --- |
| `App folder` | Recommended। ImgBed যেভাবে files store করে তার সঙ্গে match করে। |
| `Full Dropbox` | Recommended নয়। ImgBed-এর full-account access দরকার নেই। |

![Create Dropbox app](../../image/upload/dropbox/开发者创建应用.png)

### Step 2: Redirect URI যোগ করুন

Dropbox app details page-এ OAuth বা Redirect URI settings খুঁজে যোগ করুন:

```text
https://your-domain.com/api/oauth/dropbox/callback
```

একাধিক domain থেকে admin panel ব্যবহার করলে প্রতিটি matching callback URL যোগ করুন।

![Configure redirect URI](../../image/upload/dropbox/配置回调地址.png)

### Step 3: App Permissions Configure করুন

`Permissions` tab খুলে অন্তত এই scopes enable করুন:

| Scope | Required | Purpose |
| --- | --- | --- |
| `account_info.read` | Required | Account এবং quota information পড়ে |
| `files.metadata.read` | Required | Path checks-এর জন্য file এবং folder metadata পড়ে |
| `files.metadata.write` | Required | Folders create এবং metadata write করে |
| `files.content.write` | Required | Files upload করে। এই scope না থাকলে `required scope 'files.content.write'` error হয়। |
| `files.content.read` | Recommended | Download, preview এবং temporary file links allow করে |

Scopes নির্বাচন করার পর page-এর bottom-এ `Submit` ক্লিক করুন।

![Add permissions](../../image/upload/dropbox/添加对应的权限.png)

Important:

| Situation | কী করবেন |
| --- | --- |
| Scopes বদলেছেন | Token authorization flow আবার চালিয়ে নতুন `Refresh Token` নিন। |
| Reauthorize করেননি | Old token নতুন permissions পাবে না, তাই uploads এখনও fail করতে পারে। |

### Step 4: App Credentials Copy করুন

Dropbox app page থেকে এই দুটো value save করুন:

| Dropbox Field | ImgBed Field |
| --- | --- |
| `App key` | `App Key` |
| `App secret` | `App Secret` |

### Step 5: Dropbox Channel পূরণ করুন

Upload Settings-এ `Dropbox` নির্বাচন করে পূরণ করুন:

| ImgBed Field | কী দেবেন |
| --- | --- |
| Channel name | চেনা যায় এমন নাম, যেমন `Main Dropbox` |
| App Key | Dropbox `App key` |
| App Secret | Dropbox `App secret` |
| Refresh Token | আপাতত empty রাখুন |
| Root directory | Optional। Default `imgbed`। |
| Note | Optional |

![Get token](../../image/upload/dropbox/获取令牌.png)

### Step 6: Refresh Token নিন

1. ImgBed-এ `Get Token` ক্লিক করুন।
2. যে Dropbox account connect করতে চান সেটিতে sign in করুন।
3. Authorization prompt approve করুন।
4. Callback page একটি `Refresh Token` দেখাবে।
5. সেটি copy করুন।
6. ImgBed-এ ফিরে `Refresh Token` field-এ paste করুন।

![Copy token](../../image/upload/dropbox/复制令牌.png)

## কীভাবে যাচাই করবেন

| Check | Expected Result |
| --- | --- |
| Channel card | Save করার পর Dropbox channel দেখা যায়। |
| Channel switch | Channel enable করা যায়। |
| Token saved | Detail page-এ `Refresh Token` save হয়েছে দেখা যায়। |
| Upload test | Test image Dropbox app folder-এ দেখা যায়। |

Quota limits enabled থাকলে quota query ক্লিক করুন। Successful query-এর পর channel card used space, total space এবং last update time দেখায়।

![Quota query success](../../image/upload/dropbox/查询额度成功.png)

## Troubleshooting

| Problem | Fix |
| --- | --- |
| ImgBed configuration incomplete বলছে | `App Key`, `App Secret` এবং `Refresh Token` সব পূরণ করা আছে কি না check করুন। |
| Authorization successful কিন্তু `Refresh Token` দেখাচ্ছে না | আবার `Get Token` ক্লিক করুন এবং offline authorization flow ব্যবহার হচ্ছে কি না নিশ্চিত করুন। |
| Upload `required scope 'files.content.write'` দিয়ে fail করছে | `files.content.write` enable করুন, `Submit` ক্লিক করুন, তারপর নতুন `Refresh Token` নিন। |
| Callback fail করছে | Redirect URI `https://your-domain.com/api/oauth/dropbox/callback` কি না confirm করুন। |
| Files খুঁজে পাওয়া যাচ্ছে না | Dropbox app `App folder` mode-এ তৈরি হয়েছে কি না confirm করুন। |

## Quick Flow

```text
Dropbox App Console খুলুন
-> App তৈরি করুন
-> App folder access নির্বাচন করুন
-> https://your-domain.com/api/oauth/dropbox/callback যোগ করুন
-> account_info.read / files.metadata.read / files.metadata.write / files.content.write enable করুন
-> চাইলে files.content.read enable করুন
-> Submit ক্লিক করুন
-> App Key এবং App Secret copy করুন
-> ImgBed-এ পূরণ করুন
-> Get Token ক্লিক করুন
-> Callback page থেকে Refresh Token copy করুন
-> ImgBed-এ paste করে save করুন
```

## References

1. Dropbox App Console: https://www.dropbox.com/developers/apps
2. Dropbox OAuth Guide: https://developers.dropbox.com/oauth-guide
3. Dropbox Developer Guide: https://www.dropbox.com/developers/reference/developer-guide
