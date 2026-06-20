# Adding a OneDrive Channel

## What You Need First

| Requirement | Why You Need It |
| --- | --- |
| A Microsoft account | Used to access Microsoft admin pages and authorize OneDrive |
| Your ImgBed domain | Used for the OAuth callback URL |
| An app registration | Used to generate the `Client ID` and `Client Secret` |
| A OneDrive account | Used as the actual file storage location |

## Setup Steps

### Step 1: Open Microsoft Entra ID

1. Open `portal.azure.com`.
2. Search for `Microsoft Entra ID` at the top.
3. If the target page is not shown in the dropdown, choose:

```text
Continue searching in Microsoft Entra ID
```

4. Open `Microsoft Entra ID`.
5. Open `App registrations`.
6. Click `New registration`.

### Step 2: Register an App

On the `New registration` page, fill in:

| Field | What To Enter |
| --- | --- |
| Name | A recognizable name, such as `imgbed-onedrive` |
| Supported account types | Choose based on the table below |
| Redirect URI type | `Web` |
| Redirect URI | `https://your-domain.com/api/oauth/onedrive/callback` |

Account type guidance:

| Your Scenario | Supported Account Types |
| --- | --- |
| Personal OneDrive only | Choose the personal Microsoft account option. |
| Both personal and work/school accounts | Choose the option that supports both personal and organizational accounts. |
| Company or school OneDrive only | Choose the organizational account option. |

Click register after filling in the form.

![Create OneDrive app](../../image/upload/onedrive/添加应用程序注册.png)

### Step 3: Copy App Information

After the app is created, copy these values from the overview page:

| Microsoft Field | ImgBed Field |
| --- | --- |
| `Application (client) ID` | `Client ID` |
| `Directory (tenant) ID` | `Tenant ID` for organizational accounts |

![Application and tenant IDs](../../image/upload/onedrive/应用程序ID和目录租户ID位.png)

### Step 4: Create a Client Secret

1. Open `Certificates & secrets`.
2. Click `New client secret`.
3. Enter any description you prefer.
4. Choose an expiration period.
5. Copy the `Value` immediately after it is created.

![Save client secret value](../../image/upload/onedrive/保存客户端密码值.png)

### Step 5: Add API Permissions

1. Open `API permissions`.
2. Click `Add a permission`.
3. Choose `Microsoft Graph`.
4. Choose `Delegated permissions`.
5. Add these permissions:

| Permission | Purpose |
| --- | --- |
| `Files.ReadWrite.All` | Uploads files, creates folders, and deletes files |
| `offline_access` | Allows ImgBed to obtain a `Refresh Token` |
| `User.Read` | Reads account and quota information |

### Step 6: Fill in the OneDrive Channel

In Upload Settings, choose `OneDrive` and fill in:

| ImgBed Field | What To Enter |
| --- | --- |
| Channel name | A recognizable name, such as `Main OneDrive` |
| Client ID | The Microsoft `Application (client) ID` |
| Client Secret | The `Client Secret Value` you copied |
| Tenant ID | Use the table below |
| Refresh Token | Leave it empty for now |
| Root directory | Optional. Defaults to `imgbed`. |
| Note | Optional |

![Fill OneDrive channel config](../../image/upload/onedrive/添加新渠道配置.png)

How to fill `Tenant ID`:

| Account Type You Chose | ImgBed `Tenant ID` |
| --- | --- |
| Personal accounts | `consumers` |
| Personal + organizational accounts | `common` |
| Current organization only | The `Directory (tenant) ID` |

### Step 7: Get the Refresh Token

1. In ImgBed, click `Get Token`.
2. Sign in to the Microsoft account you want to connect.
3. Approve the authorization prompt.
4. The callback page will show a `Refresh Token`.
5. Copy it.
6. Return to ImgBed and paste it into the `Refresh Token` field.

![Copy refresh token](../../image/upload/onedrive/复制刷新令牌.png)

### Step 8: Save the Channel

After all fields are filled in, save the channel.

## Quick Flow

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

## References

1. Microsoft Entra app registration: https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app
2. Microsoft identity platform authorization code flow: https://learn.microsoft.com/en-us/entra/identity-platform/v2-oauth2-auth-code-flow
3. Microsoft Graph user authentication: https://learn.microsoft.com/en-us/graph/auth-v2-user
