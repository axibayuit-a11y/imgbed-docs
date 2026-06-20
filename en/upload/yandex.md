# Adding a Yandex Channel

## What You Need First

| Requirement | Why You Need It |
| --- | --- |
| A Yandex account | Used to sign in and authorize Yandex Disk |
| A Yandex OAuth app | Used to generate the `Client ID` and `Client Secret` |
| Your ImgBed domain | Used for the OAuth redirect URI |
| Available Yandex Disk storage | Used as the actual file storage location |

## Setup Steps

### Step 1: Create a Yandex OAuth App

1. Open the Yandex OAuth app creation page:

```text
https://oauth.yandex.com/client/new
```

2. If you are redirected to sign in, sign in with your Yandex account first.
3. Create a new app.
4. Give the app a recognizable name, such as `imgbed-yandex`.
5. Find the callback or redirect URL settings.
6. Enter:

```text
https://your-domain.com/api/oauth/yandex/callback
```

### Step 2: Confirm Permissions

For the current ImgBed Yandex integration, keep these four permissions under `Yandex.Disk REST API`:

| Permission | Purpose |
| --- | --- |
| `cloud_api:disk.app_folder` | Allows ImgBed to store files in the app folder |
| `cloud_api:disk.read` | Reads files and download links |
| `cloud_api:disk.write` | Uploads files, creates folders, and deletes files |
| `Access to information about Yandex.Disk` | Reads disk quota and used space |

If you also see these permissions under `Yandex ID API`, they are optional:

| Permission Text | Recommendation |
| --- | --- |
| `Access to username, first name and surname, gender` | Optional |
| `Access to email address` | Optional |

Core upload, download, deletion, and quota features mainly depend on the four `Yandex.Disk REST API` permissions above.

![Configure Yandex Disk permissions](../../image/upload/yandex/dataaccess配置软盘权限.png)

### Step 3: Copy App Credentials

After the app is created, copy:

| Yandex Field | ImgBed Field |
| --- | --- |
| `Client ID` | `Client ID` |
| `Client Secret` | `Client Secret` |

![Record Client ID and Secret](../../image/upload/yandex/记录客户端id和secret.png)

### Step 4: Fill in the Yandex Channel

In Upload Settings, choose `Yandex` and fill in:

| ImgBed Field | What To Enter |
| --- | --- |
| Channel name | A recognizable name, such as `Main Yandex` |
| Client ID | The Yandex app `Client ID` |
| Client Secret | The Yandex app `Client Secret` |
| Refresh Token | Leave it empty for now |
| Root directory | Optional. Defaults to `imgbed`. |

![Edit channel config](../../image/upload/yandex/编辑配置渠道.png)

### Step 5: Get the Refresh Token

1. In ImgBed, click `Get Token`.
2. Sign in to the Yandex account you want to connect.
3. Approve the authorization prompt.
4. The callback page will show a `Refresh Token`.
5. Copy it.
6. Return to ImgBed and paste it into the `Refresh Token` field.

![Copy refresh token after authorization](../../image/upload/yandex/授权后复制刷新令牌.png)

### Step 6: Save the Channel

After all fields are filled in, save the channel.

## Quick Flow

```text
Open Yandex OAuth Console
-> Create an app
-> Add https://your-domain.com/api/oauth/yandex/callback
-> Confirm Yandex Disk permissions
-> Copy Client ID and Client Secret
-> Fill Client ID / Client Secret into ImgBed
-> Click Get Token
-> Copy the Refresh Token from the callback page
-> Paste it back into ImgBed and save
```

## References

1. Register a Yandex app: https://yandex.com/dev/id/doc/en/register-client
2. Get an authorization code through URL: https://yandex.com/dev/id/doc/en/codes/code-url
3. Yandex OAuth token endpoint: https://yandex.com/dev/id/doc/en/tokens/token
