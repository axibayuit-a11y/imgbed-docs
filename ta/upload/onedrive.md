# OneDrive Channel சேர்க்கவும்

## தொடங்குவதற்கு முன் தேவையானவை

| தேவை | ஏன் தேவை |
| --- | --- |
| Microsoft account | Microsoft admin pages அணுகவும் OneDrive authorize செய்யவும் |
| உங்கள் ImgBed domain | OAuth callback URL-க்கு |
| App registration | `Client ID` மற்றும் `Client Secret` உருவாக்க |
| OneDrive account | உண்மையான file storage location ஆக |

## Setup Steps

### Step 1: Microsoft Entra ID திறக்கவும்

1. `portal.azure.com` திறக்கவும்.
2. மேலே search-ல் `Microsoft Entra ID` தேடவும்.
3. target page dropdown-ல் தெரியவில்லை என்றால்:

```text
Continue searching in Microsoft Entra ID
```

4. `Microsoft Entra ID` திறக்கவும்.
5. `App registrations` திறக்கவும்.
6. `New registration` கிளிக் செய்யவும்.

### Step 2: App Register செய்யவும்

`New registration` page-ல்:

| Field | What To Enter |
| --- | --- |
| Name | அறியக்கூடிய பெயர், உதா. `imgbed-onedrive` |
| Supported account types | கீழே உள்ள table படி தேர்வு செய்யவும் |
| Redirect URI type | `Web` |
| Redirect URI | `https://your-domain.com/api/oauth/onedrive/callback` |

Account type வழிகாட்டி:

| உங்கள் Scenario | Supported Account Types |
| --- | --- |
| Personal OneDrive மட்டும் | personal Microsoft account option தேர்வு செய்யவும். |
| personal மற்றும் work/school accounts இரண்டும் | இரண்டையும் support செய்யும் option தேர்வு செய்யவும். |
| Company அல்லது school OneDrive மட்டும் | organizational account option தேர்வு செய்யவும். |

form நிரப்பிய பிறகு register கிளிக் செய்யவும்.

![Create OneDrive app](../../image/upload/onedrive/添加应用程序注册.png)

### Step 3: App Information Copy செய்யவும்

app உருவான பிறகு overview page-ல் இருந்து:

| Microsoft Field | ImgBed Field |
| --- | --- |
| `Application (client) ID` | `Client ID` |
| `Directory (tenant) ID` | organizational accounts-க்கு `Tenant ID` |

![Application and tenant IDs](../../image/upload/onedrive/应用程序ID和目录租户ID位.png)

### Step 4: Client Secret உருவாக்கவும்

1. `Certificates & secrets` திறக்கவும்.
2. `New client secret` கிளிக் செய்யவும்.
3. description உள்ளிடவும்.
4. expiration period தேர்வு செய்யவும்.
5. உருவானதும் `Value` உடனே copy செய்யவும்.

![Save client secret value](../../image/upload/onedrive/保存客户端密码值.png)

### Step 5: API Permissions சேர்க்கவும்

1. `API permissions` திறக்கவும்.
2. `Add a permission` கிளிக் செய்யவும்.
3. `Microsoft Graph` தேர்வு செய்யவும்.
4. `Delegated permissions` தேர்வு செய்யவும்.
5. இந்த permissions சேர்க்கவும்:

| Permission | Purpose |
| --- | --- |
| `Files.ReadWrite.All` | files upload, folders create, files delete செய்ய |
| `offline_access` | ImgBed `Refresh Token` பெற அனுமதி |
| `User.Read` | account மற்றும் quota information படிக்க |

### Step 6: ImgBed-ல் OneDrive Channel நிரப்பவும்

Upload Settings-ல் `OneDrive` தேர்வு செய்து:

| ImgBed Field | What To Enter |
| --- | --- |
| Channel name | அறியக்கூடிய பெயர், உதா. `Main OneDrive` |
| Client ID | Microsoft `Application (client) ID` |
| Client Secret | copy செய்த `Client Secret Value` |
| Tenant ID | கீழே உள்ள table படி |
| Refresh Token | இப்போது காலியாக விடவும் |
| Root directory | Optional. default `imgbed`. |
| Note | Optional |

![Fill OneDrive channel config](../../image/upload/onedrive/添加新渠道配置.png)

`Tenant ID` நிரப்புவது:

| நீங்கள் தேர்வு செய்த Account Type | ImgBed `Tenant ID` |
| --- | --- |
| Personal accounts | `consumers` |
| Personal + organizational accounts | `common` |
| Current organization only | `Directory (tenant) ID` |

### Step 7: Refresh Token பெறவும்

1. ImgBed-ல் `Get Token` கிளிக் செய்யவும்.
2. connect செய்ய வேண்டிய Microsoft account-ல் sign in செய்யவும்.
3. authorization prompt approve செய்யவும்.
4. callback page `Refresh Token` காட்டும்.
5. அதை copy செய்யவும்.
6. ImgBed-க்கு திரும்பி `Refresh Token` field-ல் paste செய்யவும்.

![Copy refresh token](../../image/upload/onedrive/复制刷新令牌.png)

### Step 8: Channel Save செய்யவும்

அனைத்து fields நிரப்பிய பிறகு channel save செய்யவும்.

## Quick Flow

```text
portal.azure.com திறக்கவும்
-> Microsoft Entra ID தேடவும்
-> App registrations திறக்கவும்
-> புதிய app register செய்யவும்
-> Name / Supported account types / Web redirect URI நிரப்பவும்
-> Register
-> Application (client) ID copy செய்யவும்
-> Authentication-ல் callback URL சரிபார்க்கவும்
-> Certificates & secrets-ல் Client Secret உருவாக்கவும்
-> API permissions சேர்க்கவும்
-> ImgBed-ல் Client ID / Client Secret / Tenant ID நிரப்பவும்
-> Get Token கிளிக் செய்யவும்
-> callback page-ல் இருந்து Refresh Token copy செய்யவும்
-> ImgBed-ல் paste செய்து save செய்யவும்
```

## References

1. Microsoft Entra app registration: https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app
2. Microsoft identity platform authorization code flow: https://learn.microsoft.com/en-us/entra/identity-platform/v2-oauth2-auth-code-flow
3. Microsoft Graph user authentication: https://learn.microsoft.com/en-us/graph/auth-v2-user
