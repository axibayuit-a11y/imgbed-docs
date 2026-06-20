# افزودن Yandex Channel

## ابتدا چه چیزهایی لازم است

| مورد | چرا لازم است |
| --- | --- |
| Yandex account | برای sign in و authorize کردن Yandex Disk |
| Yandex OAuth app | برای ساخت `Client ID` و `Client Secret` |
| دامنه ImgBed شما | برای OAuth redirect URI |
| فضای Yandex Disk در دسترس | به‌عنوان محل واقعی ذخیره files |

## مراحل setup

### Step 1: ساخت Yandex OAuth App

1. صفحه ساخت Yandex OAuth app را باز کنید:

```text
https://oauth.yandex.com/client/new
```

2. اگر به sign in هدایت شدید، ابتدا با Yandex account وارد شوید.
3. app جدید بسازید.
4. یک نام قابل‌تشخیص بگذارید، مثل `imgbed-yandex`.
5. تنظیمات callback یا redirect URL را پیدا کنید.
6. وارد کنید:

```text
https://your-domain.com/api/oauth/yandex/callback
```

### Step 2: Confirm کردن Permissions

برای integration فعلی ImgBed با Yandex، این چهار permission زیر `Yandex.Disk REST API` را نگه دارید:

| Permission | Purpose |
| --- | --- |
| `cloud_api:disk.app_folder` | اجازه می‌دهد ImgBed files را در app folder ذخیره کند |
| `cloud_api:disk.read` | خواندن files و download links |
| `cloud_api:disk.write` | upload files، ساخت folders و delete files |
| `Access to information about Yandex.Disk` | خواندن disk quota و used space |

اگر این permissions را زیر `Yandex ID API` هم دیدید، اختیاری هستند:

| Permission Text | Recommendation |
| --- | --- |
| `Access to username, first name and surname, gender` | Optional |
| `Access to email address` | Optional |

قابلیت‌های اصلی upload، download، deletion و quota عمدتاً به چهار permission مربوط به `Yandex.Disk REST API` بالا وابسته‌اند.

![Configure Yandex Disk permissions](../../image/upload/yandex/dataaccess配置软盘权限.png)

### Step 3: Copy کردن App Credentials

پس از ساخت app، copy کنید:

| Yandex Field | ImgBed Field |
| --- | --- |
| `Client ID` | `Client ID` |
| `Client Secret` | `Client Secret` |

![Record Client ID and Secret](../../image/upload/yandex/记录客户端id和secret.png)

### Step 4: پر کردن Yandex Channel

در Upload Settings، `Yandex` را انتخاب کنید و پر کنید:

| ImgBed Field | What To Enter |
| --- | --- |
| Channel name | نام قابل‌تشخیص، مثل `Main Yandex` |
| Client ID | `Client ID` مربوط به Yandex app |
| Client Secret | `Client Secret` مربوط به Yandex app |
| Refresh Token | فعلاً خالی بگذارید |
| Root directory | اختیاری. پیش‌فرض `imgbed`. |

![Edit channel config](../../image/upload/yandex/编辑配置渠道.png)

### Step 5: گرفتن Refresh Token

1. در ImgBed، `Get Token` را بزنید.
2. وارد Yandex account موردنظر شوید.
3. authorization prompt را approve کنید.
4. callback page یک `Refresh Token` نشان می‌دهد.
5. آن را copy کنید.
6. به ImgBed برگردید و در `Refresh Token` paste کنید.

![Copy refresh token after authorization](../../image/upload/yandex/授权后复制刷新令牌.png)

### Step 6: Save کردن Channel

پس از پر کردن همه fields، channel را save کنید.

## Quick Flow

```text
Yandex OAuth Console را باز کنید
-> app بسازید
-> https://your-domain.com/api/oauth/yandex/callback را اضافه کنید
-> Yandex Disk permissions را confirm کنید
-> Client ID و Client Secret را copy کنید
-> Client ID / Client Secret را در ImgBed وارد کنید
-> Get Token را بزنید
-> Refresh Token را از callback page copy کنید
-> در ImgBed paste و save کنید
```

## References

1. Register a Yandex app: https://yandex.com/dev/id/doc/en/register-client
2. Get an authorization code through URL: https://yandex.com/dev/id/doc/en/codes/code-url
3. Yandex OAuth token endpoint: https://yandex.com/dev/id/doc/en/tokens/token
