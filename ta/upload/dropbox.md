# Dropbox சேனல் சேர்க்கவும்

## முதலில் தேவையானவை

| தேவை | ஏன் தேவை |
| --- | --- |
| Dropbox கணக்கு | உள்நுழைய செய்து செயலி authorize செய்ய |
| Dropbox செயலி | `App Key` மற்றும் `App Secret` உருவாக்க |
| உங்கள் ImgBed டொமைன் | OAuth redirect URI-க்கு |
| கிடைக்கும் Dropbox சேமிப்பு | உண்மையான கோப்பு சேமிப்பு location ஆக |

## அமைப்பு படிகள்

### படி 1: Dropbox செயலி உருவாக்கவும்

1. Dropbox செயலி Console திறக்கவும்:

```text
https://www.dropbox.com/developers/apps
```

2. புதிய செயலி உருவாக்கவும்.
3. அணுகல் type-க்கு தேர்வு செய்யவும்:

```text
App folder
```

4. செயலி-க்கு அறியக்கூடிய பெயர் கொடுக்கவும், உதா. `imgbed-app`.
5. செயலி உருவானதும் அதன் details page-ஐ திறக்கவும்.

பரிந்துரைக்கப்படும் அணுகல் வகை:

| அணுகல் வகை | பரிந்துரை |
| --- | --- |
| `App folder` | பரிந்துரைக்கப்படுகிறது. ImgBed கோப்புகள் சேமிக்கும் முறைக்கு பொருந்தும். |
| `Full Dropbox` | பரிந்துரை இல்லை. ImgBed-க்கு முழு கணக்கு அணுகல் தேவையில்லை. |

![Dropbox செயலி உருவாக்கவும்](../../image/upload/dropbox/开发者创建应用.png)

### படி 2: Redirect URI சேர்க்கவும்

Dropbox செயலி details page-ல் OAuth அல்லது Redirect URI settings-ஐ கண்டறிந்து சேர்க்கவும்:

```text
https://your-domain.com/api/oauth/dropbox/callback
```

admin panel-ஐ பல டொமைன்கள் மூலம் பயன்படுத்தினால் ஒவ்வொரு பொருந்தும் callback URL-ஐயும் சேர்க்கவும்.

![கட்டமை redirect URI](../../image/upload/dropbox/配置回调地址.png)

### படி 3: செயலி அனுமதிகளை கட்டமைக்கவும்

`Permissions` tab திறந்து குறைந்தபட்சம் இவை enable செய்யவும்:

| Scope | அவசியம் | நோக்கம் |
| --- | --- | --- |
| `account_info.read` | அவசியம் | கணக்கு மற்றும் quota தகவலைப் படிக்கும் |
| `files.metadata.read` | அவசியம் | path checks-க்கு கோப்பு/folder metadata-ஐப் படிக்கும் |
| `files.metadata.write` | அவசியம் | folders உருவாக்கி metadata எழுதும் |
| `files.content.write` | அவசியம் | கோப்புகளைப் பதிவேற்றும். இது இல்லையெனில் `required scope 'files.content.write'` வரும். |
| `files.content.read` | பரிந்துரைக்கப்படுகிறது | download, preview, temporary கோப்பு links-ஐ அனுமதிக்கும் |

scopes தேர்வு செய்த பிறகு page கீழே `Submit` கிளிக் செய்யவும்.

![permissions-ஐ சேர்க்கவும்](../../image/upload/dropbox/添加对应的权限.png)

முக்கியம்:

| நிலைமை | செய்ய வேண்டியது |
| --- | --- |
| scopes மாற்றினீர்கள் | டோக்கன் authorization flow மீண்டும் ஓட்டி புதிய `Refresh Token` பெறவும். |
| reauthorize செய்யவில்லை | பழைய டோக்கனுக்கு புதிய permissions கிடைக்காது; பதிவேற்றங்கள் இன்னும் தோல்வியடையலாம். |

### படி 4: செயலி சான்றுகளை நகலெடுக்கவும்

Dropbox செயலி page-ல் இருந்து:

| Dropbox புலம் | ImgBed புலம் |
| --- | --- |
| `App key` | `App Key` |
| `App secret` | `App Secret` |

### படி 5: ImgBed-ல் Dropbox சேனல் நிரப்பவும்

பதிவேற்ற அமைப்புகள்-ல் `Dropbox` தேர்வு செய்து:

| ImgBed புலம் | எதை உள்ளிட வேண்டும் |
| --- | --- |
| சேனல் பெயர் | அறியக்கூடிய பெயர், உதா. `Main Dropbox` |
| செயலி Key | Dropbox `App key` |
| செயலி Secret | Dropbox `App secret` |
| Refresh டோக்கன் | இப்போது காலியாக விடவும் |
| வேர் அடைவு | விருப்பத்தேர்வு. இயல்புநிலை `imgbed`. |
| Note | விருப்பத்தேர்வு |

![டோக்கன் பெறவும்](../../image/upload/dropbox/获取令牌.png)

### படி 6: Refresh டோக்கன் பெறவும்

1. ImgBed-ல் `Get Token` கிளிக் செய்யவும்.
2. இணைக்க வேண்டிய Dropbox கணக்கில் உள்நுழையவும்.
3. authorization prompt-ஐ அனுமதிக்கவும்.
4. callback page `Refresh Token` காட்டும்.
5. அதை நகலெடுக்கவும்.
6. ImgBed-க்கு திரும்பி, அதை `Refresh Token` புலத்தில் ஒட்டவும்.

![நகலெடு டோக்கன்](../../image/upload/dropbox/复制令牌.png)

## Verify செய்வது

| சரிபார்ப்பு | எதிர்பார்க்கப்படும் முடிவு |
| --- | --- |
| சேனல் card | சேமி செய்த பிறகு Dropbox சேனல் தெரியும். |
| சேனல் switch | சேனல் enable செய்ய முடியும். |
| டோக்கன் சேமிக்கப்பட்டுள்ளது | detail page `Refresh Token` சேமிக்கப்பட்டுள்ளது என காட்டும். |
| பதிவேற்றச் சோதனை | test image Dropbox செயலி folder-ல் தெரியும். |

quota limits இயக்கப்பட்டிருந்தால் quota query கிளிக் செய்யவும். வெற்றிகரமான query-க்கு பிறகு சேனல் card used space, total space, last update time காட்டும்.

![Quota query வெற்றி](../../image/upload/dropbox/查询额度成功.png)

## சிக்கல் தீர்வு

| சிக்கல் | தீர்வு |
| --- | --- |
| ImgBed கட்டமைப்பு முழுமையில்லை என கூறும் | `App Key`, `App Secret`, `Refresh Token` அனைத்தும் நிரப்பப்பட்டுள்ளதா பார்க்கவும். |
| Authorization வெற்றி, ஆனால் `Refresh Token` இல்லை | `Get Token` மீண்டும் கிளிக் செய்து offline authorization flow பயன்படுத்தப்படுகிறதா பார்க்கவும். |
| `required scope 'files.content.write'` பிழை | `files.content.write` enable செய்து `Submit` கிளிக் செய்து புதிய `Refresh Token` பெறவும். |
| Callback தோல்வி | redirect URI `https://your-domain.com/api/oauth/dropbox/callback` என உறுதிப்படுத்தவும். |
| கோப்புகள் கிடைக்கவில்லை | Dropbox செயலி `App folder` mode-ல் உருவாக்கப்பட்டதா பார்க்கவும். |

## விரைவு ஓட்டம்

```text
Open Dropbox App Console
-> Create an app
-> Choose App folder access
-> Add https://your-domain.com/api/oauth/dropbox/callback
-> Enable account_info.read / files.metadata.read / files.metadata.write / files.content.write
-> Optionally enable files.content.read
-> Click Submit
-> Copy App Key and App Secret
-> Fill them into ImgBed
-> Click Get Token
-> Copy the Refresh Token from the callback page
-> Paste it back into ImgBed and save
```

## மேற்கோள்கள்

1. Dropbox செயலி Console: https://www.dropbox.com/developers/apps
2. Dropbox OAuth Guide: https://developers.dropbox.com/oauth-guide
3. Dropbox Developer Guide: https://www.dropbox.com/developers/reference/developer-guide
