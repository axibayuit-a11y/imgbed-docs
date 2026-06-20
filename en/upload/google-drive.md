# Adding a Google Drive Channel

## What You Need First

Before you start, prepare these items:

| Requirement | Why You Need It |
| --- | --- |
| A Google account | Used to access Google Cloud and authorize Google Drive |
| A Google Cloud project | Used to enable the Drive API and create OAuth credentials |
| An OAuth 2.0 client | Used by ImgBed to obtain the `Client ID`, `Client Secret`, and `Refresh Token` |
| Your ImgBed domain | Used for the OAuth redirect URI. It must match the domain you actually use. |

## Setup Steps

### Step 1: Enable the Google Drive API

1. Open Google Cloud Console.
2. Create a new project or select an existing one.
3. Go to `APIs & Services`.
4. Click `Enable APIs and Services`.
5. Search for `Google Drive API`.
6. Open it and click enable.

### Step 2: Configure the OAuth Consent Screen

1. In Google Cloud, open `Google Auth Platform`.
2. Complete the basic `Branding` information, such as app name, support email, and developer contact email.
3. Open `Audience`.
4. For most self-hosted personal deployments, choose `External`.
5. If you choose `External`, add the Google account you want to authorize under `Test users`.
6. Open `Data Access`.
7. Add the required Google Drive permissions.

### Step 3: Create an OAuth 2.0 Client

1. In `Google Auth Platform`, open `Clients`.
2. Create a new client.
3. Set the application type to `Web application`.
4. Give the client a recognizable name.
5. For authorized JavaScript origins, enter your ImgBed URL, for example:

```text
https://img.example.com
```

6. For authorized redirect URIs, enter:

```text
https://img.example.com/api/oauth/google/callback
```

![Create OAuth client](../../image/upload/google-drive/oa客户端id创建.png)

![Enter domain and callback URL](../../image/upload/google-drive/填写oa客户端url信息.png)

After the client is created, copy these values:

| Generated Value | ImgBed Field |
| --- | --- |
| Client ID | `Client ID` |
| Client Secret | `Client Secret` |

## Step 4: Fill in the Google Drive Channel

In Upload Settings, choose `Google Drive` and fill in:

| ImgBed Field | What To Enter |
| --- | --- |
| Channel name | A name you can recognize, such as `Main Google Drive` |
| Client ID | The Client ID from Google Cloud |
| Client Secret | The Client Secret from Google Cloud |
| Refresh Token | Leave it empty for now. Get it in the next step. |
| Root directory | Optional. Defaults to `imgbed`. |

![Fill client details in ImgBed](../../image/upload/google-drive/粘贴回添加新渠道配置.png)

## Step 5: Get the Refresh Token

1. Click `Get Token`.
2. Choose the Google account you want to connect.
3. Complete the authorization prompts.
4. The callback page will show a `Refresh Token`.
5. Copy it.
6. Return to ImgBed and paste it into the `Refresh Token` field.

![Copy Refresh Token after authorization](../../image/upload/google-drive/授权完复制token.png)

If you later switch Google accounts, change the OAuth client, or the old authorization expires, you do not need to delete the channel. Open the edit page and click `Reauthorize`.

## Step 6: Save the Channel

After all fields are filled in, save the channel.

## Quick Flow

```text
Open Google Cloud
-> Create or select a project
-> Enable Google Drive API
-> Configure Google Auth Platform
-> If Audience is External, add your Google account to Test users
-> Create a Web application OAuth client
-> Use https://your-domain.com/api/oauth/google/callback as the redirect URI
-> Fill Client ID and Client Secret into ImgBed
-> Click Get Token
-> Sign in with Google and authorize
-> Copy the Refresh Token from the callback page
-> Paste it back into ImgBed and save
-> Upload a test image
```

## References

1. Google OAuth Web Server Applications: https://developers.google.com/identity/protocols/oauth2/web-server
2. Google Workspace OAuth Consent Configuration: https://developers.google.com/workspace/guides/configure-oauth-consent
3. Google Drive API Auth Scopes: https://developers.google.com/workspace/drive/api/guides/api-specific-auth
