# OneDrive Channel شامل کریں

## شروع کرنے سے پہلے کیا چاہیے

| ضرورت | وجہ |
| --- | --- |
| Microsoft account | Microsoft admin pages تک access اور OneDrive authorize کرنے کے لیے |
| آپ کا ImgBed domain | OAuth callback URL کے لیے |
| App registration | `Client ID` اور `Client Secret` بنانے کے لیے |
| OneDrive account | اصل file storage location کے طور پر |

## Setup Steps

### Step 1: Microsoft Entra ID کھولیں

1. `portal.azure.com` کھولیں۔
2. اوپر search میں `Microsoft Entra ID` تلاش کریں۔
3. اگر target page dropdown میں نہ آئے تو یہ منتخب کریں:

```text
Continue searching in Microsoft Entra ID
```

4. `Microsoft Entra ID` کھولیں۔
5. `App registrations` کھولیں۔
6. `New registration` پر کلک کریں۔

### Step 2: App Register کریں

`New registration` page پر یہ fields بھریں:

| Field | What To Enter |
| --- | --- |
| Name | قابل شناخت نام، مثلاً `imgbed-onedrive` |
| Supported account types | نیچے دی گئی table کے مطابق منتخب کریں |
| Redirect URI type | `Web` |
| Redirect URI | `https://your-domain.com/api/oauth/onedrive/callback` |

Account type guidance:

| آپ کا Scenario | Supported Account Types |
| --- | --- |
| صرف personal OneDrive | personal Microsoft account option منتخب کریں۔ |
| personal اور work/school دونوں accounts | وہ option منتخب کریں جو personal اور organizational accounts دونوں support کرے۔ |
| صرف company یا school OneDrive | organizational account option منتخب کریں۔ |

form بھرنے کے بعد register پر کلک کریں۔

![Create OneDrive app](../../image/upload/onedrive/添加应用程序注册.png)

### Step 3: App Information Copy کریں

app بننے کے بعد overview page سے یہ values copy کریں:

| Microsoft Field | ImgBed Field |
| --- | --- |
| `Application (client) ID` | `Client ID` |
| `Directory (tenant) ID` | organizational accounts کے لیے `Tenant ID` |

![Application and tenant IDs](../../image/upload/onedrive/应用程序ID和目录租户ID位.png)

### Step 4: Client Secret بنائیں

1. `Certificates & secrets` کھولیں۔
2. `New client secret` پر کلک کریں۔
3. اپنی پسند کی description درج کریں۔
4. expiration period منتخب کریں۔
5. بنتے ہی `Value` فوراً copy کریں۔

![Save client secret value](../../image/upload/onedrive/保存客户端密码值.png)

### Step 5: API Permissions شامل کریں

1. `API permissions` کھولیں۔
2. `Add a permission` پر کلک کریں۔
3. `Microsoft Graph` منتخب کریں۔
4. `Delegated permissions` منتخب کریں۔
5. یہ permissions شامل کریں:

| Permission | Purpose |
| --- | --- |
| `Files.ReadWrite.All` | files upload کرنے، folders بنانے، اور files delete کرنے کے لیے |
| `offline_access` | ImgBed کو `Refresh Token` حاصل کرنے کی اجازت دیتا ہے |
| `User.Read` | account اور quota information پڑھنے کے لیے |

### Step 6: ImgBed میں OneDrive Channel بھریں

Upload Settings میں `OneDrive` منتخب کریں اور یہ fields بھریں:

| ImgBed Field | What To Enter |
| --- | --- |
| Channel name | قابل شناخت نام، مثلاً `Main OneDrive` |
| Client ID | Microsoft `Application (client) ID` |
| Client Secret | copy کیا ہوا `Client Secret Value` |
| Tenant ID | نیچے دی گئی table کے مطابق |
| Refresh Token | ابھی خالی چھوڑ دیں |
| Root directory | Optional۔ default `imgbed` ہے۔ |
| Note | Optional |

![Fill OneDrive channel config](../../image/upload/onedrive/添加新渠道配置.png)

`Tenant ID` کیسے بھریں:

| منتخب Account Type | ImgBed `Tenant ID` |
| --- | --- |
| Personal accounts | `consumers` |
| Personal + organizational accounts | `common` |
| صرف current organization | `Directory (tenant) ID` |

### Step 7: Refresh Token حاصل کریں

1. ImgBed میں `Get Token` پر کلک کریں۔
2. جس Microsoft account کو connect کرنا ہے اس میں sign in کریں۔
3. authorization prompt approve کریں۔
4. callback page ایک `Refresh Token` دکھائے گا۔
5. اسے copy کریں۔
6. ImgBed پر واپس آ کر `Refresh Token` field میں paste کریں۔

![Copy refresh token](../../image/upload/onedrive/复制刷新令牌.png)

### Step 8: Channel Save کریں

تمام fields بھرنے کے بعد channel save کریں۔

## Quick Flow

```text
portal.azure.com کھولیں
-> Microsoft Entra ID تلاش کریں
-> App registrations کھولیں
-> نیا app register کریں
-> Name / Supported account types / Web redirect URI بھریں
-> Register
-> Application (client) ID copy کریں
-> Authentication میں callback URL چیک کریں
-> Certificates & secrets میں Client Secret بنائیں
-> API permissions میں permissions شامل کریں
-> ImgBed میں Client ID / Client Secret / Tenant ID بھریں
-> Get Token پر کلک کریں
-> callback page سے Refresh Token copy کریں
-> اسے ImgBed میں paste کر کے save کریں
```

## References

1. Microsoft Entra app registration: https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app
2. Microsoft identity platform authorization code flow: https://learn.microsoft.com/en-us/entra/identity-platform/v2-oauth2-auth-code-flow
3. Microsoft Graph user authentication: https://learn.microsoft.com/en-us/graph/auth-v2-user
