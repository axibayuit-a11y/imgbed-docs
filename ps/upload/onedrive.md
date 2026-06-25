# د OneDrive چینل اضافه کول

## مخکې څه ته اړتیا لرئ

| اړتیا | ولې ورته اړتیا ده |
| --- | --- |
| Microsoft حساب | د Microsoft د اداري پاڼو د خلاصولو او OneDrive د authorize کولو لپاره |
| ستاسو ImgBed ډومېن | د OAuth کالبک URL لپاره کارېږي |
| اپ registration | د `Client ID` او `Client Secret` جوړولو لپاره |
| OneDrive حساب | د فایلونو اصلي زېرمه ځای دی |

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

### 2 ګام: اپ ثبت کړئ

د `New registration` په پاڼه کې دا معلومات ډک کړئ:

| فیلډ | څه ولیکئ |
| --- | --- |
| Name | داسې نوم چې وروسته یې وپېژنئ، لکه `imgbed-onedrive` |
| Supported حساب types | د لاندې جدول له مخې یې وټاکئ |
| Redirect URI type | `Web` |
| Redirect URI | `https://your-domain.com/api/oauth/onedrive/callback` |

د حساب type لارښود:

| ستاسو حالت | Supported حساب Types |
| --- | --- |
| یوازې شخصي OneDrive | د شخصي Microsoft حساب اختیار وټاکئ. |
| شخصي او work/school حسابs دواړه | هغه اختیار وټاکئ چې personal او organizational حسابs دواړه ملاتړ کوي. |
| یوازې د شرکت یا ښوونځي OneDrive | د organizational حساب اختیار وټاکئ. |

له ډکولو وروسته register کلیک کړئ.

![Create OneDrive اپ](../../image/upload/onedrive/添加应用程序注册.png)

### 3 ګام: د اپ معلومات کاپي کړئ

کله چې اپ جوړ شو، له overview پاڼې څخه دا ارزښتونه کاپي کړئ:

| د Microsoft فیلډ | د ImgBed فیلډ |
| --- | --- |
| `Application (client) ID` | `Client ID` |
| `Directory (tenant) ID` | `Tenant ID` د organizational حسابs لپاره |

![اپlication and tenant IDs](../../image/upload/onedrive/应用程序ID和目录租户ID位.png)

### 4 ګام: Client Secret جوړ کړئ

1. `Certificates & secrets` پرانیزئ.
2. `New client secret` کلیک کړئ.
3. هره مناسبه توضیح ولیکئ.
4. د expiration موده وټاکئ.
5. له جوړېدو سره سم د `Value` برخه کاپي کړئ.

![خوندي client secret value](../../image/upload/onedrive/保存客户端密码值.png)

### 5 ګام: API اجازهs اضافه کړئ

1. `API permissions` پرانیزئ.
2. `Add a permission` کلیک کړئ.
3. `Microsoft Graph` وټاکئ.
4. `Delegated permissions` وټاکئ.
5. دا permissions اضافه کړئ:

| اجازه | موخه |
| --- | --- |
| `Files.ReadWrite.All` | فایلونه اپلوډ کوي، folders جوړوي او فایلونه ړنګوي |
| `offline_access` | ImgBed ته اجازه ورکوي چې `Refresh Token` واخلي |
| `User.Read` | د حساب او کوټه معلومات لولي |

### 6 ګام: د OneDrive چینل ډک کړئ

په د اپلوډ تنظیمات کې `OneDrive` وټاکئ او دا fields ډک کړئ:

| د ImgBed فیلډ | څه ولیکئ |
| --- | --- |
| د چینل نوم | داسې نوم چې وپېژندل شي، لکه `Main OneDrive` |
| Client ID | د Microsoft `Application (client) ID` |
| Client Secret | هغه `Client Secret Value` چې کاپي مو کړی |
| Tenant ID | لاندې جدول وکاروئ |
| Refresh ټوکن | اوس یې تش پرېږدئ |
| اصلي ډایرکټري | اختیاري. اصلي یې `imgbed` دی. |
| Note | اختیاري |

![Fill OneDrive چینل config](../../image/upload/onedrive/添加新渠道配置.png)

د `Tenant ID` ډکولو طریقه:

| ټاکل شوی حساب Type | د ImgBed `Tenant ID` |
| --- | --- |
| Personal حسابs | `consumers` |
| Personal + organizational حسابs | `common` |
| یوازې اوسنی organization | د `Directory (tenant) ID` |

### 7 ګام: Refresh ټوکن واخلئ

1. په ImgBed کې `Get Token` کلیک کړئ.
2. هغه Microsoft حساب ته ننوځئ وکړئ چې نښلول یې غواړئ.
3. د authorization غوښتنه اپrove کړئ.
4. کالبک page به `Refresh Token` ښکاره کړي.
5. هغه کاپي کړئ.
6. بېرته ImgBed ته راشئ او د `Refresh Token` فیلډ کې یې پیسټ کړئ.

![کاپي refresh ټوکن](../../image/upload/onedrive/复制刷新令牌.png)

### 8 ګام: چینل خوندي کړئ

کله چې ټول fields ډک شول، چینل خوندي کړئ.

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

1. Microsoft Entra اپ registration: https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app
2. Microsoft identity platform authorization code flow: https://learn.microsoft.com/en-us/entra/identity-platform/v2-oauth2-auth-code-flow
3. Microsoft Graph user authentication: https://learn.microsoft.com/en-us/graph/auth-v2-user
