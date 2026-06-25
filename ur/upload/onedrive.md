# OneDrive Channel شامل کریں

## شروع کرنے سے پہلے کیا چاہیے

| ضرورت | وجہ |
| --- | --- |
| Microsoft account | Microsoft admin صفحہs تک access اور OneDrive authorize کرنے کے لیے |
| آپ کا ImgBed domain | OAuth callback URL کے لیے |
| App registration | `Client ID` اور `Client Secret` بنانے کے لیے |
| OneDrive account | اصل file storage location کے طور پر |

## سیٹ اپ کے مراحل

### مرحلہ 1: Microsoft Entra ID کھولیں

1. `portal.azure.com` کھولیں۔
2. اوپر search میں `Microsoft Entra ID` تلاش کریں۔
3. اگر target صفحہ dropdown میں نہ آئے تو یہ منتخب کریں:

```text
Continue searching in Microsoft Entra ID
```

4. `Microsoft Entra ID` کھولیں۔
5. `App registrations` کھولیں۔
6. `New registration` پر کلک کریں۔

### مرحلہ 2: App Register کریں

`New registration` صفحہ پر یہ فیلڈز بھریں:

| فیلڈ | کیا درج کریں |
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

![OneDrive app بنائیں](../../image/upload/onedrive/添加应用程序注册.png)

### مرحلہ 3: App Information کاپی کریں

app بننے کے بعد overview صفحہ سے یہ قدرs کاپی کریں:

| Microsoft فیلڈ | ImgBed فیلڈ |
| --- | --- |
| `Application (client) ID` | `Client ID` |
| `Directory (tenant) ID` | organizational accounts کے لیے `Tenant ID` |

![Application and tenant IDs](../../image/upload/onedrive/应用程序ID和目录租户ID位.png)

### مرحلہ 4: Client Secret بنائیں

1. `Certificates & secrets` کھولیں۔
2. `New client secret` پر کلک کریں۔
3. اپنی پسند کی وضاحت درج کریں۔
4. expiration period منتخب کریں۔
5. بنتے ہی `Value` فوراً کاپی کریں۔

![client secret قدر محفوظ کریں](../../image/upload/onedrive/保存客户端密码值.png)

### مرحلہ 5: API اجازتs شامل کریں

1. `API permissions` کھولیں۔
2. `Add a permission` پر کلک کریں۔
3. `Microsoft Graph` منتخب کریں۔
4. `Delegated permissions` منتخب کریں۔
5. یہ permissions شامل کریں:

| اجازت | مقصد |
| --- | --- |
| `Files.ReadWrite.All` | files upload کرنے، folders بنانے، اور files delete کرنے کے لیے |
| `offline_access` | ImgBed کو `Refresh Token` حاصل کرنے کی اجازت دیتا ہے |
| `User.Read` | account اور quota information پڑھنے کے لیے |

### مرحلہ 6: ImgBed میں OneDrive Channel بھریں

اپ لوڈ سیٹنگز میں `OneDrive` منتخب کریں اور یہ فیلڈز بھریں:

| ImgBed فیلڈ | کیا درج کریں |
| --- | --- |
| Channel name | قابل شناخت نام، مثلاً `Main OneDrive` |
| Client ID | Microsoft `Application (client) ID` |
| Client Secret | کاپی کیا ہوا `Client Secret Value` |
| Tenant ID | نیچے دی گئی table کے مطابق |
| Refresh Token | ابھی خالی چھوڑ دیں |
| Root directory | اختیاری۔ ڈیفالٹ `imgbed` ہے۔ |
| نہیںte | اختیاری |

![OneDrive چینل config بھریں](../../image/upload/onedrive/添加新渠道配置.png)

`Tenant ID` کیسے بھریں:

| منتخب Account Type | ImgBed `Tenant ID` |
| --- | --- |
| Personal accounts | `consumers` |
| Personal + organizational accounts | `common` |
| صرف موجودہ organization | `Directory (tenant) ID` |

### مرحلہ 7: Refresh Token حاصل کریں

1. ImgBed میں `Get Token` پر کلک کریں۔
2. جس Microsoft account کو منسلک کرنا ہے اس میں سائن ان کریں۔
3. authorization prompt منظور کریں۔
4. callback صفحہ ایک `Refresh Token` دکھائے گا۔
5. اسے کاپی کریں۔
6. ImgBed پر واپس آ کر `Refresh Token` فیلڈ میں چسپاں کریں۔

![refresh token کاپی کریں](../../image/upload/onedrive/复制刷新令牌.png)

### مرحلہ 8: چینل محفوظ کریں

تمام فیلڈز بھرنے کے بعد channel save کریں۔

## فوری بہاؤ

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

## حوالہ جات

1. Microsoft Entra app registration: https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app
2. Microsoft identity platform authorization code flow: https://learn.microsoft.com/en-us/entra/identity-platform/v2-oauth2-auth-code-flow
3. Microsoft Graph user authentication: https://learn.microsoft.com/en-us/graph/auth-v2-user
