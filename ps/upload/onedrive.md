# د OneDrive Channel اضافه کول

## مخکې څه ته اړتیا لرئ

| اړتیا | ولې ورته اړتیا ده |
| --- | --- |
| Microsoft account | د Microsoft د اداري پاڼو د خلاصولو او OneDrive د authorize کولو لپاره |
| ستاسو ImgBed domain | د OAuth callback URL لپاره کارېږي |
| App registration | د `Client ID` او `Client Secret` جوړولو لپاره |
| OneDrive account | د فایلونو اصلي storage ځای دی |

## د تنظیم پړاوونه

### 1 ګام: Microsoft Entra ID پرانیزئ

1. `portal.azure.com` پرانیزئ.
2. په پورتنۍ برخه کې `Microsoft Entra ID` ولټوئ.
3. که مطلوبه پاڼه په dropdown کې ښکاره نه شوه، دا انتخاب کړئ:

```text
Continue searching in Microsoft Entra ID
```

4. `Microsoft Entra ID` پرانیزئ.
5. `App registrations` ته لاړ شئ.
6. `New registration` کلیک کړئ.

### 2 ګام: App ثبت کړئ

د `New registration` په پاڼه کې دا معلومات ډک کړئ:

| Field | څه ولیکئ |
| --- | --- |
| Name | داسې نوم چې وروسته یې وپېژنئ، لکه `imgbed-onedrive` |
| Supported account types | د لاندې جدول له مخې یې وټاکئ |
| Redirect URI type | `Web` |
| Redirect URI | `https://your-domain.com/api/oauth/onedrive/callback` |

د account type لارښود:

| ستاسو حالت | Supported Account Types |
| --- | --- |
| یوازې شخصي OneDrive | د شخصي Microsoft account اختیار وټاکئ. |
| شخصي او work/school accounts دواړه | هغه اختیار وټاکئ چې personal او organizational accounts دواړه ملاتړ کوي. |
| یوازې د شرکت یا ښوونځي OneDrive | د organizational account اختیار وټاکئ. |

له ډکولو وروسته register کلیک کړئ.

![Create OneDrive app](../../image/upload/onedrive/添加应用程序注册.png)

### 3 ګام: د App معلومات copy کړئ

کله چې app جوړ شو، له overview پاڼې څخه دا ارزښتونه copy کړئ:

| Microsoft Field | ImgBed Field |
| --- | --- |
| `Application (client) ID` | `Client ID` |
| `Directory (tenant) ID` | `Tenant ID` د organizational accounts لپاره |

![Application and tenant IDs](../../image/upload/onedrive/应用程序ID和目录租户ID位.png)

### 4 ګام: Client Secret جوړ کړئ

1. `Certificates & secrets` پرانیزئ.
2. `New client secret` کلیک کړئ.
3. هر مناسب description ولیکئ.
4. د expiration موده وټاکئ.
5. له جوړېدو سره سم د `Value` برخه copy کړئ.

![Save client secret value](../../image/upload/onedrive/保存客户端密码值.png)

### 5 ګام: API Permissions اضافه کړئ

1. `API permissions` پرانیزئ.
2. `Add a permission` کلیک کړئ.
3. `Microsoft Graph` وټاکئ.
4. `Delegated permissions` وټاکئ.
5. دا permissions اضافه کړئ:

| Permission | موخه |
| --- | --- |
| `Files.ReadWrite.All` | فایلونه upload کوي، folders جوړوي او فایلونه ړنګوي |
| `offline_access` | ImgBed ته اجازه ورکوي چې `Refresh Token` واخلي |
| `User.Read` | د account او quota معلومات لولي |

### 6 ګام: د OneDrive Channel ډک کړئ

په Upload Settings کې `OneDrive` وټاکئ او دا fields ډک کړئ:

| ImgBed Field | څه ولیکئ |
| --- | --- |
| Channel name | داسې نوم چې وپېژندل شي، لکه `Main OneDrive` |
| Client ID | د Microsoft `Application (client) ID` |
| Client Secret | هغه `Client Secret Value` چې copy مو کړی |
| Tenant ID | لاندې جدول وکاروئ |
| Refresh Token | اوس یې تش پرېږدئ |
| Root directory | اختیاري. Default یې `imgbed` دی. |
| Note | اختیاري |

![Fill OneDrive channel config](../../image/upload/onedrive/添加新渠道配置.png)

د `Tenant ID` ډکولو طریقه:

| ټاکل شوی Account Type | د ImgBed `Tenant ID` |
| --- | --- |
| Personal accounts | `consumers` |
| Personal + organizational accounts | `common` |
| یوازې اوسنی organization | د `Directory (tenant) ID` |

### 7 ګام: Refresh Token واخلئ

1. په ImgBed کې `Get Token` کلیک کړئ.
2. هغه Microsoft account ته sign in وکړئ چې نښلول یې غواړئ.
3. د authorization غوښتنه approve کړئ.
4. callback page به `Refresh Token` ښکاره کړي.
5. هغه copy کړئ.
6. بېرته ImgBed ته راشئ او د `Refresh Token` field کې یې paste کړئ.

![Copy refresh token](../../image/upload/onedrive/复制刷新令牌.png)

### 8 ګام: Channel خوندي کړئ

کله چې ټول fields ډک شول، channel save کړئ.

## چټک بهیر

```text
Open portal.azure.com
-> Search for Microsoft Entra ID
-> Open App registrations
-> Register a new app
-> Fill Name / Supported account types / Web redirect URI
-> Register
-> Copy Application (client) ID
-> Check the callback URL in Authentication
-> Create a Client Secret in Certificates & secrets
-> Add permissions in API permissions
-> Fill Client ID / Client Secret / Tenant ID into ImgBed
-> Click Get Token
-> Copy the Refresh Token from the callback page
-> Paste it back into ImgBed and save
```

## ماخذونه

1. Microsoft Entra app registration: https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app
2. Microsoft identity platform authorization code flow: https://learn.microsoft.com/en-us/entra/identity-platform/v2-oauth2-auth-code-flow
3. Microsoft Graph user authentication: https://learn.microsoft.com/en-us/graph/auth-v2-user
