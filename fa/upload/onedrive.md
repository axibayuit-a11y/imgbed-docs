# افزودن OneDrive Channel

## پیش از شروع چه چیزهایی لازم است

| مورد | چرا لازم است |
| --- | --- |
| Microsoft account | برای دسترسی به Microsoft admin pages و authorize کردن OneDrive |
| دامنه ImgBed شما | برای OAuth callback URL |
| App registration | برای ساخت `Client ID` و `Client Secret` |
| OneDrive account | به‌عنوان محل واقعی ذخیره files |

## مراحل setup

### Step 1: باز کردن Microsoft Entra ID

1. `portal.azure.com` را باز کنید.
2. بالای صفحه `Microsoft Entra ID` را جست‌وجو کنید.
3. اگر target page در dropdown دیده نشد، انتخاب کنید:

```text
Continue searching in Microsoft Entra ID
```

4. `Microsoft Entra ID` را باز کنید.
5. `App registrations` را باز کنید.
6. `New registration` را بزنید.

### Step 2: Register کردن App

در صفحه `New registration` این fields را پر کنید:

| Field | What To Enter |
| --- | --- |
| Name | نام قابل‌تشخیص، مثل `imgbed-onedrive` |
| Supported account types | بر اساس جدول پایین انتخاب کنید |
| Redirect URI type | `Web` |
| Redirect URI | `https://your-domain.com/api/oauth/onedrive/callback` |

راهنمای account type:

| سناریو شما | Supported Account Types |
| --- | --- |
| فقط personal OneDrive | گزینه personal Microsoft account را انتخاب کنید. |
| هم personal و هم work/school accounts | گزینه‌ای را انتخاب کنید که هر دو personal و organizational accounts را پشتیبانی کند. |
| فقط company یا school OneDrive | گزینه organizational account را انتخاب کنید. |

پس از پر کردن form، register را بزنید.

![Create OneDrive app](../../image/upload/onedrive/添加应用程序注册.png)

### Step 3: Copy کردن App Information

پس از ساخت app، این values را از overview page copy کنید:

| Microsoft Field | ImgBed Field |
| --- | --- |
| `Application (client) ID` | `Client ID` |
| `Directory (tenant) ID` | `Tenant ID` برای organizational accounts |

![Application and tenant IDs](../../image/upload/onedrive/应用程序ID和目录租户ID位.png)

### Step 4: ساخت Client Secret

1. `Certificates & secrets` را باز کنید.
2. `New client secret` را بزنید.
3. description دلخواه وارد کنید.
4. expiration period انتخاب کنید.
5. پس از ساخت، `Value` را بلافاصله copy کنید.

![Save client secret value](../../image/upload/onedrive/保存客户端密码值.png)

### Step 5: افزودن API Permissions

1. `API permissions` را باز کنید.
2. `Add a permission` را بزنید.
3. `Microsoft Graph` را انتخاب کنید.
4. `Delegated permissions` را انتخاب کنید.
5. این permissions را اضافه کنید:

| Permission | Purpose |
| --- | --- |
| `Files.ReadWrite.All` | upload files، ساخت folders و delete files |
| `offline_access` | اجازه می‌دهد ImgBed `Refresh Token` بگیرد |
| `User.Read` | خواندن account و quota information |

### Step 6: پر کردن OneDrive Channel در ImgBed

در Upload Settings، `OneDrive` را انتخاب کنید و این fields را پر کنید:

| ImgBed Field | What To Enter |
| --- | --- |
| Channel name | نام قابل‌تشخیص، مثل `Main OneDrive` |
| Client ID | Microsoft `Application (client) ID` |
| Client Secret | مقدار `Client Secret Value` که copy کردید |
| Tenant ID | بر اساس جدول پایین |
| Refresh Token | فعلاً خالی بگذارید |
| Root directory | اختیاری. پیش‌فرض `imgbed`. |
| Note | اختیاری |

![Fill OneDrive channel config](../../image/upload/onedrive/添加新渠道配置.png)

روش پر کردن `Tenant ID`:

| Account Type انتخاب‌شده | ImgBed `Tenant ID` |
| --- | --- |
| Personal accounts | `consumers` |
| Personal + organizational accounts | `common` |
| فقط current organization | `Directory (tenant) ID` |

### Step 7: گرفتن Refresh Token

1. در ImgBed، `Get Token` را بزنید.
2. وارد Microsoft account موردنظر شوید.
3. authorization prompt را approve کنید.
4. callback page یک `Refresh Token` نمایش می‌دهد.
5. آن را copy کنید.
6. به ImgBed برگردید و در field `Refresh Token` paste کنید.

![Copy refresh token](../../image/upload/onedrive/复制刷新令牌.png)

### Step 8: Save کردن Channel

بعد از پر شدن همه fields، channel را save کنید.

## Quick Flow

```text
portal.azure.com را باز کنید
-> Microsoft Entra ID را جست‌وجو کنید
-> App registrations را باز کنید
-> app جدید register کنید
-> Name / Supported account types / Web redirect URI را پر کنید
-> Register
-> Application (client) ID را copy کنید
-> callback URL را در Authentication بررسی کنید
-> در Certificates & secrets یک Client Secret بسازید
-> در API permissions دسترسی‌ها را اضافه کنید
-> Client ID / Client Secret / Tenant ID را در ImgBed وارد کنید
-> Get Token را بزنید
-> Refresh Token را از callback page copy کنید
-> در ImgBed paste و save کنید
```

## References

1. Microsoft Entra app registration: https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app
2. Microsoft identity platform authorization code flow: https://learn.microsoft.com/en-us/entra/identity-platform/v2-oauth2-auth-code-flow
3. Microsoft Graph user authentication: https://learn.microsoft.com/en-us/graph/auth-v2-user
