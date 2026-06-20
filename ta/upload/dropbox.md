# Dropbox Channel சேர்க்கவும்

## முதலில் தேவையானவை

| தேவை | ஏன் தேவை |
| --- | --- |
| Dropbox account | sign in செய்து app authorize செய்ய |
| Dropbox app | `App Key` மற்றும் `App Secret` உருவாக்க |
| உங்கள் ImgBed domain | OAuth redirect URI-க்கு |
| கிடைக்கும் Dropbox storage | உண்மையான file storage location ஆக |

## Setup Steps

### Step 1: Dropbox App உருவாக்கவும்

1. Dropbox App Console திறக்கவும்:

```text
https://www.dropbox.com/developers/apps
```

2. புதிய app உருவாக்கவும்.
3. access type-க்கு தேர்வு செய்யவும்:

```text
App folder
```

4. app-க்கு அறியக்கூடிய பெயர் கொடுக்கவும், உதா. `imgbed-app`.
5. app உருவானதும் app details page திறக்கவும்.

Recommended access type:

| Access Type | Recommendation |
| --- | --- |
| `App folder` | Recommended. ImgBed files சேமிக்கும் முறைக்கு பொருந்தும். |
| `Full Dropbox` | பரிந்துரை இல்லை. ImgBed-க்கு full-account access தேவையில்லை. |

![Create Dropbox app](../../image/upload/dropbox/开发者创建应用.png)

### Step 2: Redirect URI சேர்க்கவும்

Dropbox app details page-ல் OAuth அல்லது Redirect URI settings-ஐ கண்டறிந்து சேர்க்கவும்:

```text
https://your-domain.com/api/oauth/dropbox/callback
```

admin panel-ஐ பல domains மூலம் பயன்படுத்தினால் ஒவ்வொரு matching callback URL-ஐயும் சேர்க்கவும்.

![Configure redirect URI](../../image/upload/dropbox/配置回调地址.png)

### Step 3: App Permissions Configure செய்யவும்

`Permissions` tab திறந்து குறைந்தபட்சம் இவை enable செய்யவும்:

| Scope | Required | Purpose |
| --- | --- | --- |
| `account_info.read` | Required | account மற்றும் quota information படிக்கும் |
| `files.metadata.read` | Required | path checks-க்கு file/folder metadata படிக்கும் |
| `files.metadata.write` | Required | folders உருவாக்கி metadata எழுதும் |
| `files.content.write` | Required | files upload செய்யும். இது இல்லையெனில் `required scope 'files.content.write'` வரும். |
| `files.content.read` | Recommended | download, preview, temporary file links அனுமதிக்கும் |

scopes தேர்வு செய்த பிறகு page கீழே `Submit` கிளிக் செய்யவும்.

![Add permissions](../../image/upload/dropbox/添加对应的权限.png)

Important:

| Situation | What To Do |
| --- | --- |
| scopes மாற்றினீர்கள் | token authorization flow மீண்டும் ஓட்டி புதிய `Refresh Token` பெறவும். |
| reauthorize செய்யவில்லை | பழைய token-க்கு புதிய permissions கிடைக்காது; uploads இன்னும் fail ஆகலாம். |

### Step 4: App Credentials Copy செய்யவும்

Dropbox app page-ல் இருந்து:

| Dropbox Field | ImgBed Field |
| --- | --- |
| `App key` | `App Key` |
| `App secret` | `App Secret` |

### Step 5: ImgBed-ல் Dropbox Channel நிரப்பவும்

Upload Settings-ல் `Dropbox` தேர்வு செய்து:

| ImgBed Field | What To Enter |
| --- | --- |
| Channel name | அறியக்கூடிய பெயர், உதா. `Main Dropbox` |
| App Key | Dropbox `App key` |
| App Secret | Dropbox `App secret` |
| Refresh Token | இப்போது காலியாக விடவும் |
| Root directory | Optional. default `imgbed`. |
| Note | Optional |

![Get token](../../image/upload/dropbox/获取令牌.png)

### Step 6: Refresh Token பெறவும்

1. ImgBed-ல் `Get Token` கிளிக் செய்யவும்.
2. connect செய்ய வேண்டிய Dropbox account-ல் sign in செய்யவும்.
3. authorization prompt approve செய்யவும்.
4. callback page `Refresh Token` காட்டும்.
5. அதை copy செய்யவும்.
6. ImgBed-க்கு திரும்பி `Refresh Token` field-ல் paste செய்யவும்.

![Copy token](../../image/upload/dropbox/复制令牌.png)

## Verify செய்வது

| Check | Expected Result |
| --- | --- |
| Channel card | Save செய்த பிறகு Dropbox channel தெரியும். |
| Channel switch | channel enable செய்ய முடியும். |
| Token saved | detail page `Refresh Token` saved என காட்டும். |
| Upload test | test image Dropbox app folder-ல் தெரியும். |

quota limits enabled என்றால் quota query கிளிக் செய்யவும். successful query-க்கு பிறகு channel card used space, total space, last update time காட்டும்.

![Quota query success](../../image/upload/dropbox/查询额度成功.png)

## Troubleshooting

| Problem | Fix |
| --- | --- |
| ImgBed configuration incomplete என கூறும் | `App Key`, `App Secret`, `Refresh Token` அனைத்தும் filled உள்ளதா பார்க்கவும். |
| Authorization வெற்றி, ஆனால் `Refresh Token` இல்லை | `Get Token` மீண்டும் கிளிக் செய்து offline authorization flow பயன்படுத்தப்படுகிறதா பார்க்கவும். |
| `required scope 'files.content.write'` error | `files.content.write` enable செய்து `Submit` கிளிக் செய்து புதிய `Refresh Token` பெறவும். |
| Callback fail | redirect URI `https://your-domain.com/api/oauth/dropbox/callback` என confirm செய்யவும். |
| Files கிடைக்கவில்லை | Dropbox app `App folder` mode-ல் உருவாக்கப்பட்டதா பார்க்கவும். |

## Quick Flow

```text
Dropbox App Console திறக்கவும்
-> app உருவாக்கவும்
-> App folder access தேர்வு செய்யவும்
-> https://your-domain.com/api/oauth/dropbox/callback சேர்க்கவும்
-> account_info.read / files.metadata.read / files.metadata.write / files.content.write enable செய்யவும்
-> optional ஆக files.content.read enable செய்யவும்
-> Submit
-> App Key மற்றும் App Secret copy செய்யவும்
-> ImgBed-ல் நிரப்பவும்
-> Get Token
-> callback page-ல் இருந்து Refresh Token copy செய்யவும்
-> ImgBed-ல் paste செய்து save செய்யவும்
```

## References

1. Dropbox App Console: https://www.dropbox.com/developers/apps
2. Dropbox OAuth Guide: https://developers.dropbox.com/oauth-guide
3. Dropbox Developer Guide: https://www.dropbox.com/developers/reference/developer-guide
