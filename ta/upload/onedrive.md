# OneDrive சேனல் சேர்க்கவும்

## தொடங்குவதற்கு முன் தேவையானவை

| தேவை | ஏன் தேவை |
| --- | --- |
| Microsoft கணக்கு | Microsoft admin pages அணுகவும் OneDrive authorize செய்யவும் |
| உங்கள் ImgBed டொமைன் | OAuth callback URL-க்கு |
| செயலி registration | `Client ID` மற்றும் `Client Secret` உருவாக்க |
| OneDrive கணக்கு | உண்மையான கோப்பு சேமிப்பு location ஆக |

## அமைப்பு படிகள்

### படி 1: Microsoft Entra ID திறக்கவும்

1. `portal.azure.com` திறக்கவும்.
2. மேலே search-ல் `Microsoft Entra ID` தேடவும்.
3. target page dropdown-ல் தெரியவில்லை என்றால்:

```text
Continue searching in Microsoft Entra ID
```

4. `Microsoft Entra ID` திறக்கவும்.
5. `App registrations` திறக்கவும்.
6. `New registration` கிளிக் செய்யவும்.

### படி 2: செயலி Register செய்யவும்

`New registration` page-ல்:

| புலம் | எதை உள்ளிட வேண்டும் |
| --- | --- |
| Name | அறியக்கூடிய பெயர், உதா. `imgbed-onedrive` |
| Supported கணக்கு types | கீழே உள்ள table படி தேர்வு செய்யவும் |
| Redirect URI type | `Web` |
| Redirect URI | `https://your-domain.com/api/oauth/onedrive/callback` |

கணக்கு type வழிகாட்டி:

| உங்கள் Scenario | Supported கணக்கு Types |
| --- | --- |
| Personal OneDrive மட்டும் | personal Microsoft கணக்கு option தேர்வு செய்யவும். |
| தனிப்பட்ட மற்றும் work/school கணக்குகள் இரண்டும் | இரண்டையும் support செய்யும் option-ஐத் தேர்வு செய்யவும். |
| நிறுவனம் அல்லது school OneDrive மட்டும் | organizational கணக்கு option-ஐத் தேர்வு செய்யவும். |

form நிரப்பிய பிறகு register என்பதைக் கிளிக் செய்யவும்.

![OneDrive செயலி உருவாக்கவும்](../../image/upload/onedrive/添加应用程序注册.png)

### படி 3: செயலி தகவலை நகலெடுக்கவும்

செயலி உருவான பிறகு overview page-ல் இருந்து:

| Microsoft புலம் | ImgBed புலம் |
| --- | --- |
| `Application (client) ID` | `Client ID` |
| `Directory (tenant) ID` | organizational கணக்குகளுக்கான `Tenant ID` |

![Application மற்றும் tenant IDs](../../image/upload/onedrive/应用程序ID和目录租户ID位.png)

### படி 4: Client Secret உருவாக்கவும்

1. `Certificates & secrets` திறக்கவும்.
2. `New client secret` கிளிக் செய்யவும்.
3. விரும்பிய விளக்கத்தை உள்ளிடவும்.
4. காலாவதி காலத்தைத் தேர்வு செய்யவும்.
5. உருவானதும் `Value`-ஐ உடனே நகலெடுக்கவும்.

![Client Secret மதிப்பைச் சேமிக்கவும்](../../image/upload/onedrive/保存客户端密码值.png)

### படி 5: API அனுமதிகளைச் சேர்க்கவும்

1. `API permissions` திறக்கவும்.
2. `Add a permission` கிளிக் செய்யவும்.
3. `Microsoft Graph` தேர்வு செய்யவும்.
4. `Delegated permissions` தேர்வு செய்யவும்.
5. இந்த permissions-ஐச் சேர்க்கவும்:

| அனுமதி | நோக்கம் |
| --- | --- |
| `Files.ReadWrite.All` | கோப்புகளைப் பதிவேற்ற, folders உருவாக்க, கோப்புகளை நீக்க |
| `offline_access` | ImgBed `Refresh Token` பெற அனுமதிக்கிறது |
| `User.Read` | கணக்கு மற்றும் quota தகவலைப் படிக்கிறது |

### படி 6: ImgBed-ல் OneDrive சேனல் நிரப்பவும்

பதிவேற்ற அமைப்புகள்-ல் `OneDrive` தேர்வு செய்து:

| ImgBed புலம் | எதை உள்ளிட வேண்டும் |
| --- | --- |
| சேனல் பெயர் | அறியக்கூடிய பெயர், உதா. `Main OneDrive` |
| Client ID | Microsoft `Application (client) ID` |
| Client Secret | நகலெடு செய்த `Client Secret Value` |
| Tenant ID | கீழே உள்ள table படி |
| Refresh டோக்கன் | இப்போது காலியாக விடவும் |
| வேர் அடைவு | விருப்பத்தேர்வு. இயல்புநிலை `imgbed`. |
| குறிப்பு | விருப்பத்தேர்வு |

![OneDrive சேனல் config-ஐ நிரப்பவும்](../../image/upload/onedrive/添加新渠道配置.png)

`Tenant ID` நிரப்புவது:

| நீங்கள் தேர்வு செய்த கணக்கு வகை | ImgBed `Tenant ID` |
| --- | --- |
| தனிப்பட்ட கணக்குகள் | `consumers` |
| தனிப்பட்ட + நிறுவனம் சார்ந்த கணக்குகள் | `common` |
| தற்போதைய நிறுவனம் மட்டும் | `Directory (tenant) ID` |

### படி 7: Refresh டோக்கன் பெறவும்

1. ImgBed-ல் `Get Token` கிளிக் செய்யவும்.
2. இணைக்க வேண்டிய Microsoft கணக்கில் உள்நுழையவும்.
3. authorization prompt-ஐ அனுமதிக்கவும்.
4. callback page `Refresh Token` காட்டும்.
5. அதை நகலெடுக்கவும்.
6. ImgBed-க்கு திரும்பி, அதை `Refresh Token` புலத்தில் ஒட்டவும்.

![நகலெடு refresh டோக்கன்](../../image/upload/onedrive/复制刷新令牌.png)

### படி 8: சேனல் சேமி செய்யவும்

அனைத்து புலங்களையும் நிரப்பிய பிறகு சேனலை சேமிக்கவும்.

## விரைவு ஓட்டம்

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

## மேற்கோள்கள்

1. Microsoft Entra செயலி registration: https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app
2. Microsoft identity platform authorization code flow: https://learn.microsoft.com/en-us/entra/identity-platform/v2-oauth2-auth-code-flow
3. Microsoft Graph user authentication: https://learn.microsoft.com/en-us/graph/auth-v2-user
