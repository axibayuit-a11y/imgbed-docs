# Yandex Channel சேர்க்கவும்

## முதலில் தேவையானவை

| தேவை | ஏன் தேவை |
| --- | --- |
| Yandex account | sign in செய்து Yandex Disk authorize செய்ய |
| Yandex OAuth app | `Client ID` மற்றும் `Client Secret` உருவாக்க |
| உங்கள் ImgBed domain | OAuth redirect URI-க்கு |
| கிடைக்கும் Yandex Disk storage | உண்மையான file storage location ஆக |

## Setup Steps

### Step 1: Yandex OAuth App உருவாக்கவும்

1. Yandex OAuth app creation page திறக்கவும்:

```text
https://oauth.yandex.com/client/new
```

2. sign in page-க்கு redirect ஆனால் முதலில் Yandex account-ல் sign in செய்யவும்.
3. புதிய app உருவாக்கவும்.
4. app-க்கு அறியக்கூடிய பெயர் கொடுக்கவும், உதா. `imgbed-yandex`.
5. callback அல்லது redirect URL settings கண்டறியவும்.
6. உள்ளிடவும்:

```text
https://your-domain.com/api/oauth/yandex/callback
```

### Step 2: Permissions Confirm செய்யவும்

தற்போதைய ImgBed Yandex integration-க்கு `Yandex.Disk REST API` கீழ் இந்த permissions வேண்டும்:

| Permission | Purpose |
| --- | --- |
| `cloud_api:disk.app_folder` | ImgBed app folder-ல் files சேமிக்க அனுமதி |
| `cloud_api:disk.read` | files மற்றும் download links படிக்கும் |
| `cloud_api:disk.write` | files upload, folders create, files delete செய்யும் |
| `Access to information about Yandex.Disk` | disk quota மற்றும் used space படிக்கும் |

`Yandex ID API` கீழ் இவை தெரிந்தால் optional:

| Permission Text | Recommendation |
| --- | --- |
| `Access to username, first name and surname, gender` | Optional |
| `Access to email address` | Optional |

core upload, download, deletion, quota features மேலே உள்ள நான்கு `Yandex.Disk REST API` permissions-ஐ சார்ந்தவை.

![Configure Yandex Disk permissions](../../image/upload/yandex/dataaccess配置软盘权限.png)

### Step 3: App Credentials Copy செய்யவும்

app உருவான பிறகு:

| Yandex Field | ImgBed Field |
| --- | --- |
| `Client ID` | `Client ID` |
| `Client Secret` | `Client Secret` |

![Record Client ID and Secret](../../image/upload/yandex/记录客户端id和secret.png)

### Step 4: ImgBed-ல் Yandex Channel நிரப்பவும்

Upload Settings-ல் `Yandex` தேர்வு செய்து:

| ImgBed Field | What To Enter |
| --- | --- |
| Channel name | அறியக்கூடிய பெயர், உதா. `Main Yandex` |
| Client ID | Yandex app `Client ID` |
| Client Secret | Yandex app `Client Secret` |
| Refresh Token | இப்போது காலியாக விடவும் |
| Root directory | Optional. default `imgbed`. |

![Edit channel config](../../image/upload/yandex/编辑配置渠道.png)

### Step 5: Refresh Token பெறவும்

1. ImgBed-ல் `Get Token` கிளிக் செய்யவும்.
2. connect செய்ய வேண்டிய Yandex account-ல் sign in செய்யவும்.
3. authorization prompt approve செய்யவும்.
4. callback page `Refresh Token` காட்டும்.
5. அதை copy செய்யவும்.
6. ImgBed-க்கு திரும்பி `Refresh Token` field-ல் paste செய்யவும்.

![Copy refresh token after authorization](../../image/upload/yandex/授权后复制刷新令牌.png)

### Step 6: Channel Save செய்யவும்

அனைத்து fields நிரப்பிய பிறகு channel save செய்யவும்.

## Quick Flow

```text
Yandex OAuth Console திறக்கவும்
-> app உருவாக்கவும்
-> https://your-domain.com/api/oauth/yandex/callback சேர்க்கவும்
-> Yandex Disk permissions confirm செய்யவும்
-> Client ID மற்றும் Client Secret copy செய்யவும்
-> ImgBed-ல் Client ID / Client Secret நிரப்பவும்
-> Get Token கிளிக் செய்யவும்
-> callback page-ல் இருந்து Refresh Token copy செய்யவும்
-> ImgBed-ல் paste செய்து save செய்யவும்
```

## References

1. Register a Yandex app: https://yandex.com/dev/id/doc/en/register-client
2. Get an authorization code through URL: https://yandex.com/dev/id/doc/en/codes/code-url
3. Yandex OAuth token endpoint: https://yandex.com/dev/id/doc/en/tokens/token
