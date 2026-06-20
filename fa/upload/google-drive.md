# افزودن Google Drive Channel

## ابتدا چه چیزهایی لازم است

| مورد | چرا لازم است |
| --- | --- |
| Google account | برای دسترسی به Google Cloud و authorize کردن Google Drive |
| Google Cloud project | برای enable کردن Drive API و ساخت OAuth credentials |
| OAuth 2.0 client | برای گرفتن `Client ID`، `Client Secret` و `Refresh Token` توسط ImgBed |
| دامنه ImgBed شما | برای OAuth redirect URI. باید دقیقاً با دامنه‌ای که واقعاً استفاده می‌کنید match باشد. |

## مراحل setup

### Step 1: Enable کردن Google Drive API

1. Google Cloud Console را باز کنید.
2. یک project جدید بسازید یا project موجود را انتخاب کنید.
3. به `APIs & Services` بروید.
4. `Enable APIs and Services` را بزنید.
5. `Google Drive API` را جست‌وجو کنید.
6. آن را باز کنید و enable را بزنید.

### Step 2: Configure کردن OAuth Consent Screen

1. در Google Cloud، `Google Auth Platform` را باز کنید.
2. اطلاعات پایه `Branding` مثل app name، support email و developer contact email را کامل کنید.
3. `Audience` را باز کنید.
4. برای بیشتر self-hosted personal deployments، `External` را انتخاب کنید.
5. اگر `External` انتخاب کردید، Google account موردنظر برای authorization را در `Test users` اضافه کنید.
6. `Data Access` را باز کنید.
7. permissions موردنیاز Google Drive را اضافه کنید.

### Step 3: ساخت OAuth 2.0 Client

1. در `Google Auth Platform`، `Clients` را باز کنید.
2. یک client جدید بسازید.
3. application type را `Web application` بگذارید.
4. یک نام قابل‌تشخیص برای client وارد کنید.
5. برای authorized JavaScript origins، URL ImgBed را وارد کنید، مثلاً:

```text
https://img.example.com
```

6. برای authorized redirect URIs وارد کنید:

```text
https://img.example.com/api/oauth/google/callback
```

![Create OAuth client](../../image/upload/google-drive/oa客户端id创建.png)

![Enter domain and callback URL](../../image/upload/google-drive/填写oa客户端url信息.png)

پس از ساخت client، این values را copy کنید:

| Generated Value | ImgBed Field |
| --- | --- |
| Client ID | `Client ID` |
| Client Secret | `Client Secret` |

## Step 4: پر کردن Google Drive Channel در ImgBed

در Upload Settings، `Google Drive` را انتخاب کنید و پر کنید:

| ImgBed Field | What To Enter |
| --- | --- |
| Channel name | نام قابل‌تشخیص، مثل `Main Google Drive` |
| Client ID | Client ID از Google Cloud |
| Client Secret | Client Secret از Google Cloud |
| Refresh Token | فعلاً خالی بگذارید. در step بعدی می‌گیرید. |
| Root directory | اختیاری. پیش‌فرض `imgbed`. |

![Fill client details in ImgBed](../../image/upload/google-drive/粘贴回添加新渠道配置.png)

## Step 5: گرفتن Refresh Token

1. `Get Token` را بزنید.
2. Google account موردنظر برای اتصال را انتخاب کنید.
3. authorization prompts را کامل کنید.
4. callback page یک `Refresh Token` نشان می‌دهد.
5. آن را copy کنید.
6. به ImgBed برگردید و در `Refresh Token` paste کنید.

![Copy Refresh Token after authorization](../../image/upload/google-drive/授权完复制token.png)

اگر بعداً Google account را عوض کردید، OAuth client را تغییر دادید، یا authorization قبلی expire شد، لازم نیست channel را delete کنید. edit page را باز کنید و `Reauthorize` را بزنید.

## Step 6: Save کردن Channel

پس از پر کردن همه fields، channel را save کنید.

## Quick Flow

```text
Google Cloud را باز کنید
-> project بسازید یا انتخاب کنید
-> Google Drive API را enable کنید
-> Google Auth Platform را configure کنید
-> اگر Audience برابر External است، Google account را به Test users اضافه کنید
-> Web application OAuth client بسازید
-> https://your-domain.com/api/oauth/google/callback را به‌عنوان redirect URI بگذارید
-> Client ID و Client Secret را در ImgBed وارد کنید
-> Get Token را بزنید
-> با Google sign in و authorize کنید
-> Refresh Token را از callback page copy کنید
-> در ImgBed paste و save کنید
-> test image upload کنید
```

## References

1. Google OAuth Web Server Applications: https://developers.google.com/identity/protocols/oauth2/web-server
2. Google Workspace OAuth Consent Configuration: https://developers.google.com/workspace/guides/configure-oauth-consent
3. Google Drive API Auth Scopes: https://developers.google.com/workspace/drive/api/guides/api-specific-auth
