# افزودن Dropbox Channel

## ابتدا چه چیزهایی لازم است

| مورد | چرا لازم است |
| --- | --- |
| Dropbox account | برای sign in و authorize کردن app |
| Dropbox app | برای ساخت `App Key` و `App Secret` |
| دامنه ImgBed شما | برای OAuth redirect URI |
| فضای Dropbox در دسترس | به‌عنوان محل واقعی ذخیره files |

## مراحل setup

### Step 1: ساخت Dropbox App

1. Dropbox App Console را باز کنید:

```text
https://www.dropbox.com/developers/apps
```

2. یک app جدید بسازید.
3. برای access type انتخاب کنید:

```text
App folder
```

4. یک نام قابل‌تشخیص برای app بگذارید، مثل `imgbed-app`.
5. بعد از ساخت، app details page را باز کنید.

access type پیشنهادی:

| Access Type | Recommendation |
| --- | --- |
| `App folder` | Recommended. با نحوه ذخیره files در ImgBed هماهنگ است. |
| `Full Dropbox` | توصیه نمی‌شود. ImgBed به access کامل account نیاز ندارد. |

![Create Dropbox app](../../image/upload/dropbox/开发者创建应用.png)

### Step 2: افزودن Redirect URI

در app details page مربوط به Dropbox، تنظیمات OAuth یا Redirect URI را پیدا کنید و اضافه کنید:

```text
https://your-domain.com/api/oauth/dropbox/callback
```

اگر admin panel را از چند domain استفاده می‌کنید، برای هر کدام callback URL متناظر را اضافه کنید.

![Configure redirect URI](../../image/upload/dropbox/配置回调地址.png)

### Step 3: Configure کردن App Permissions

tab `Permissions` را باز کنید و حداقل این scopes را enable کنید:

| Scope | Required | Purpose |
| --- | --- | --- |
| `account_info.read` | Required | خواندن account و quota information |
| `files.metadata.read` | Required | خواندن file و folder metadata برای path checks |
| `files.metadata.write` | Required | ساخت folders و نوشتن metadata |
| `files.content.write` | Required | upload files. نبودن این scope باعث `required scope 'files.content.write'` می‌شود. |
| `files.content.read` | Recommended | اجازه download، preview و temporary file links |

پس از انتخاب scopes، پایین page روی `Submit` بزنید.

![Add permissions](../../image/upload/dropbox/添加对应的权限.png)

Important:

| Situation | What To Do |
| --- | --- |
| scopes را تغییر دادید | token authorization flow را دوباره اجرا کنید و `Refresh Token` جدید بگیرید. |
| reauthorize نکردید | token قدیمی permissions جدید را نمی‌گیرد، پس uploads ممکن است همچنان fail شوند. |

### Step 4: Copy کردن App Credentials

این دو مقدار را از Dropbox app page ذخیره کنید:

| Dropbox Field | ImgBed Field |
| --- | --- |
| `App key` | `App Key` |
| `App secret` | `App Secret` |

### Step 5: پر کردن Dropbox Channel

در Upload Settings، `Dropbox` را انتخاب کنید و پر کنید:

| ImgBed Field | What To Enter |
| --- | --- |
| Channel name | نام قابل‌تشخیص، مثل `Main Dropbox` |
| App Key | Dropbox `App key` |
| App Secret | Dropbox `App secret` |
| Refresh Token | فعلاً خالی بگذارید |
| Root directory | اختیاری. پیش‌فرض `imgbed`. |
| Note | اختیاری |

![Get token](../../image/upload/dropbox/获取令牌.png)

### Step 6: گرفتن Refresh Token

1. در ImgBed، `Get Token` را بزنید.
2. وارد Dropbox account موردنظر شوید.
3. authorization prompt را approve کنید.
4. callback page یک `Refresh Token` نشان می‌دهد.
5. آن را copy کنید.
6. به ImgBed برگردید و داخل `Refresh Token` paste کنید.

![Copy token](../../image/upload/dropbox/复制令牌.png)

## روش بررسی

| Check | Expected Result |
| --- | --- |
| Channel card | پس از Save، Dropbox channel دیده شود. |
| Channel switch | channel قابل enable باشد. |
| Token saved | detail page نشان دهد `Refresh Token` ذخیره شده است. |
| Upload test | test image در Dropbox app folder دیده شود. |

اگر quota limits enabled است، quota query را بزنید. پس از query موفق، channel card مقدار used space، total space و last update time را نشان می‌دهد.

![Quota query success](../../image/upload/dropbox/查询额度成功.png)

## Troubleshooting

| Problem | Fix |
| --- | --- |
| ImgBed می‌گوید configuration incomplete است | بررسی کنید `App Key`، `App Secret` و `Refresh Token` همگی پر شده باشند. |
| Authorization موفق است ولی `Refresh Token` دیده نمی‌شود | دوباره `Get Token` را بزنید و مطمئن شوید offline authorization flow استفاده می‌شود. |
| Upload با `required scope 'files.content.write'` fail می‌شود | `files.content.write` را enable کنید، `Submit` را بزنید، سپس `Refresh Token` جدید بگیرید. |
| Callback fail می‌شود | مطمئن شوید redirect URI برابر `https://your-domain.com/api/oauth/dropbox/callback` است. |
| Files پیدا نمی‌شوند | مطمئن شوید Dropbox app با mode `App folder` ساخته شده است. |

## Quick Flow

```text
Dropbox App Console را باز کنید
-> app بسازید
-> App folder access را انتخاب کنید
-> https://your-domain.com/api/oauth/dropbox/callback را اضافه کنید
-> account_info.read / files.metadata.read / files.metadata.write / files.content.write را enable کنید
-> در صورت نیاز files.content.read را هم enable کنید
-> Submit
-> App Key و App Secret را copy کنید
-> در ImgBed وارد کنید
-> Get Token را بزنید
-> Refresh Token را از callback page copy کنید
-> در ImgBed paste و save کنید
```

## References

1. Dropbox App Console: https://www.dropbox.com/developers/apps
2. Dropbox OAuth Guide: https://developers.dropbox.com/oauth-guide
3. Dropbox Developer Guide: https://www.dropbox.com/developers/reference/developer-guide
