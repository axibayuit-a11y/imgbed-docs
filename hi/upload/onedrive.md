# OneDrive चैनल जोड़ना

## पहले क्या चाहिए

| ज़रूरत | क्यों चाहिए |
| --- | --- |
| Microsoft account | Microsoft admin pages access करने और OneDrive authorize करने के लिए |
| आपका ImgBed domain | OAuth callback URL के लिए |
| App registration | `Client ID` और `Client Secret` generate करने के लिए |
| OneDrive account | असली file storage location |

## Setup Steps

### Step 1: Microsoft Entra ID खोलें

1. `portal.azure.com` खोलें।
2. ऊपर `Microsoft Entra ID` search करें।
3. अगर target page dropdown में न दिखे, तो चुनें:

```text
Continue searching in Microsoft Entra ID
```

4. `Microsoft Entra ID` खोलें।
5. `App registrations` खोलें।
6. `New registration` पर क्लिक करें।

### Step 2: App register करें

`New registration` page पर भरें:

| Field | क्या डालें |
| --- | --- |
| Name | पहचानने लायक नाम, जैसे `imgbed-onedrive` |
| Supported account types | नीचे दी गई table के अनुसार चुनें |
| Redirect URI type | `Web` |
| Redirect URI | `https://your-domain.com/api/oauth/onedrive/callback` |

Account type guidance:

| आपका Scenario | Supported Account Types |
| --- | --- |
| केवल personal OneDrive | personal Microsoft account option चुनें। |
| personal और work/school accounts दोनों | personal और organizational accounts दोनों support करने वाला option चुनें। |
| केवल company या school OneDrive | organizational account option चुनें। |

form भरने के बाद register पर क्लिक करें।

![OneDrive app बनाएँ](../../image/upload/onedrive/添加应用程序注册.png)

### Step 3: App information copy करें

app बन जाने के बाद overview page से ये values copy करें:

| Microsoft Field | ImgBed Field |
| --- | --- |
| `Application (client) ID` | `Client ID` |
| `Directory (tenant) ID` | organizational accounts के लिए `Tenant ID` |

![Application और tenant IDs](../../image/upload/onedrive/应用程序ID和目录租户ID位.png)

### Step 4: Client Secret बनाएँ

1. `Certificates & secrets` खोलें।
2. `New client secret` पर क्लिक करें।
3. अपनी पसंद का description डालें।
4. expiration period चुनें।
5. बनते ही `Value` copy करें।

![Client secret value save करें](../../image/upload/onedrive/保存客户端密码值.png)

### Step 5: API Permissions जोड़ें

1. `API permissions` खोलें।
2. `Add a permission` पर क्लिक करें।
3. `Microsoft Graph` चुनें।
4. `Delegated permissions` चुनें।
5. ये permissions जोड़ें:

| Permission | Purpose |
| --- | --- |
| `Files.ReadWrite.All` | files upload, folders create और files delete करने के लिए |
| `offline_access` | ImgBed को `Refresh Token` पाने देता है |
| `User.Read` | account और quota information पढ़ने के लिए |

### Step 6: OneDrive channel भरें

Upload Settings में `OneDrive` चुनें और भरें:

| ImgBed Field | क्या डालें |
| --- | --- |
| Channel name | पहचानने लायक नाम, जैसे `Main OneDrive` |
| Client ID | Microsoft `Application (client) ID` |
| Client Secret | copy किया हुआ `Client Secret Value` |
| Tenant ID | नीचे वाली table के अनुसार |
| Refresh Token | अभी खाली छोड़ें |
| Root directory | optional। default `imgbed`। |
| Note | optional |

![OneDrive channel config भरें](../../image/upload/onedrive/添加新渠道配置.png)

`Tenant ID` कैसे भरें:

| चुना गया Account Type | ImgBed `Tenant ID` |
| --- | --- |
| Personal accounts | `consumers` |
| Personal + organizational accounts | `common` |
| Current organization only | `Directory (tenant) ID` |

### Step 7: Refresh Token लें

1. ImgBed में `Get Token` पर क्लिक करें।
2. उस Microsoft account से sign in करें जिसे connect करना है।
3. authorization prompt approve करें।
4. callback page `Refresh Token` दिखाएगा।
5. इसे copy करें।
6. ImgBed में लौटकर `Refresh Token` field में paste करें।

![Refresh token copy करें](../../image/upload/onedrive/复制刷新令牌.png)

### Step 8: Channel save करें

सभी fields भरने के बाद channel save करें।

## Quick Flow

```text
portal.azure.com खोलें
-> Microsoft Entra ID search करें
-> App registrations खोलें
-> नया app register करें
-> Name / Supported account types / Web redirect URI भरें
-> Register
-> Application (client) ID copy करें
-> Authentication में callback URL check करें
-> Certificates & secrets में Client Secret बनाएँ
-> API permissions में permissions जोड़ें
-> ImgBed में Client ID / Client Secret / Tenant ID भरें
-> Get Token क्लिक करें
-> callback page से Refresh Token copy करें
-> ImgBed में paste करके save करें
```

## References

1. Microsoft Entra app registration: https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app
2. Microsoft identity platform authorization code flow: https://learn.microsoft.com/en-us/entra/identity-platform/v2-oauth2-auth-code-flow
3. Microsoft Graph user authentication: https://learn.microsoft.com/en-us/graph/auth-v2-user
