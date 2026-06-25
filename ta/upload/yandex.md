# Yandex சேனல் சேர்க்கவும்

## முதலில் தேவையானவை

| தேவை | ஏன் தேவை |
| --- | --- |
| Yandex கணக்கு | உள்நுழைய செய்து Yandex Disk authorize செய்ய |
| Yandex OAuth செயலி | `Client ID` மற்றும் `Client Secret` உருவாக்க |
| உங்கள் ImgBed டொமைன் | OAuth redirect URI-க்கு |
| கிடைக்கும் Yandex Disk சேமிப்பு | உண்மையான கோப்பு சேமிப்பு location ஆக |

## அமைப்பு படிகள்

### படி 1: Yandex OAuth செயலி உருவாக்கவும்

1. Yandex OAuth செயலி creation page திறக்கவும்:

```text
https://oauth.yandex.com/client/new
```

2. உள்நுழைய page-க்கு redirect ஆனால் முதலில் Yandex கணக்கு-ல் உள்நுழைய செய்யவும்.
3. புதிய செயலி உருவாக்கவும்.
4. செயலி-க்கு அறியக்கூடிய பெயர் கொடுக்கவும், உதா. `imgbed-yandex`.
5. callback அல்லது redirect URL settings கண்டறியவும்.
6. உள்ளிடவும்:

```text
https://your-domain.com/api/oauth/yandex/callback
```

### படி 2: அனுமதிகளை உறுதிப்படுத்தவும்

தற்போதைய ImgBed Yandex integration-க்கு `Yandex.Disk REST API` கீழ் இந்த permissions வேண்டும்:

| அனுமதி | நோக்கம் |
| --- | --- |
| `cloud_api:disk.app_folder` | ImgBed செயலி folder-ல் கோப்புகள் சேமிக்க அனுமதிக்கிறது |
| `cloud_api:disk.read` | கோப்புகள் மற்றும் download links படிக்கிறது |
| `cloud_api:disk.write` | கோப்புகளைப் பதிவேற்ற, folders உருவாக்க, கோப்புகளை நீக்க அனுமதிக்கிறது |
| `Access to information about Yandex.Disk` | disk quota மற்றும் used space படிக்கிறது |

`Yandex ID API` கீழ் இவை தெரிந்தால் விருப்பமான:

| அனுமதி உரை | பரிந்துரை |
| --- | --- |
| `Access to username, first name and surname, gender` | விருப்பத்தேர்வு |
| `Access to email address` | விருப்பத்தேர்வு |

core பதிவேற்றம், download, deletion, quota அம்சங்கள் மேலே உள்ள நான்கு `Yandex.Disk REST API` permissions-ஐ சார்ந்தவை.

![Yandex Disk permissions-ஐ கட்டமைக்கவும்](../../image/upload/yandex/dataaccess配置软盘权限.png)

### படி 3: செயலி சான்றுகளை நகலெடுக்கவும்

செயலி உருவான பிறகு:

| Yandex புலம் | ImgBed புலம் |
| --- | --- |
| `Client ID` | `Client ID` |
| `Client Secret` | `Client Secret` |

![Client ID மற்றும் Secret-ஐ பதிவு செய்யவும்](../../image/upload/yandex/记录客户端id和secret.png)

### படி 4: ImgBed-ல் Yandex சேனல் நிரப்பவும்

பதிவேற்ற அமைப்புகள்-ல் `Yandex` தேர்வு செய்து:

| ImgBed புலம் | எதை உள்ளிட வேண்டும் |
| --- | --- |
| சேனல் பெயர் | அறியக்கூடிய பெயர், உதா. `Main Yandex` |
| Client ID | Yandex செயலி `Client ID` |
| Client Secret | Yandex செயலி `Client Secret` |
| Refresh டோக்கன் | இப்போது காலியாக விடவும் |
| வேர் அடைவு | விருப்பத்தேர்வு. இயல்புநிலை `imgbed`. |

![சேனல் config-ஐ திருத்தவும்](../../image/upload/yandex/编辑配置渠道.png)

### படி 5: Refresh டோக்கன் பெறவும்

1. ImgBed-ல் `Get Token` கிளிக் செய்யவும்.
2. இணைக்க வேண்டிய Yandex கணக்கில் உள்நுழையவும்.
3. authorization prompt-ஐ அனுமதிக்கவும்.
4. callback பக்கம் `Refresh Token` காட்டும்.
5. அதை நகலெடுக்கவும்.
6. ImgBed-க்கு திரும்பி, அதை `Refresh Token` புலத்தில் ஒட்டவும்.

![authorization முடிந்த பிறகு refresh டோக்கனை நகலெடுக்கவும்](../../image/upload/yandex/授权后复制刷新令牌.png)

### படி 6: சேனல் சேமி செய்யவும்

அனைத்து புலங்களையும் நிரப்பிய பிறகு சேனலை சேமிக்கவும்.

## விரைவு ஓட்டம்

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

## மேற்கோள்கள்

1. Yandex செயலியை பதிவு செய்யவும்: https://yandex.com/dev/id/doc/en/register-client
2. URL மூலம் authorization code பெறவும்: https://yandex.com/dev/id/doc/en/codes/code-url
3. Yandex OAuth டோக்கன் endpoint: https://yandex.com/dev/id/doc/en/tokens/token
