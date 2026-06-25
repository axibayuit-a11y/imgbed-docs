# Discord சேனல் சேர்க்கவும்

## தொடங்குவதற்கு முன் தேவையானவை

| தேவை | பயன்பாடு |
| --- | --- |
| Discord கணக்கு | சேவையகம், சேனல், developer செயலிlication உருவாக்க |
| Discord சேவையகம் | போட் சேனல் அணுகுவதற்கு முன் சேவையகம்-ல் join ஆக வேண்டும் |
| Text சேனல் | படங்கள் மற்றும் கோப்புகள் இந்த சேனல்-க்கு அனுப்பப்படும் |
| Discord Developer Portal | செயலிlication, போட் உருவாக்கி `Bot Token` பெற |

## எங்கு சேர்ப்பது

1. அமைப்பு அமைப்புகள் திறக்கவும்.
2. பதிவேற்ற அமைப்புகள்-க்கு செல்லவும்.
3. மேல் வலது மூலையில் சேனல் சேர்க்கவும் கிளிக் செய்யவும்.
4. `Discord` தேர்வு செய்யவும்.

## புல விவரம்

| புலம் | பயன்பாடு | அவசியம் |
| --- | --- | --- |
| சேனல் பெயர் | இந்த சேனல்-க்கு பெயர், உதா. `Discord Primary`. | அவசியம் |
| போட் டோக்கன் | Discord போட் டோக்கன். | அவசியம் |
| சேனல் ID | target text சேனல் ID. | அவசியம் |
| Proxy URL (விருப்பத்தேர்வு) | Discord CDN அணுகல் unstable என்றால் மட்டும். `https://` உடன் full URL. | விருப்பத்தேர்வு |

## அமைப்பு படிகள்

### 1. Discord சேவையகம் மற்றும் Text சேனல் உருவாக்கவும்

1. Discord திறக்கவும்.
2. புதிய சேவையகம் உருவாக்கவும், அல்லது உங்களிடம் ஏற்கனவே உள்ள சேவையகத்தை பயன்படுத்தவும்.
3. அந்த சேவையகத்தில் text சேனல் உருவாக்கவும்.

![சேவையகம் உருவாக்கவும்](../../image/upload/discord/创建服务器.png)

### 2. Discord Developer Portal-ல் போட் உருவாக்கவும்

1. Discord Developer Portal திறக்கவும்: `https://discord.com/developers/applications`
2. `New Application` கிளிக் செய்யவும்.
3. application name-ஐ உள்ளிட்டு உருவாக்கவும்.
4. இடது பக்கப்பட்டியில் `Bot` page திறக்கவும்.
5. `Bot` page-ல் டோக்கனை generate அல்லது reset செய்யவும்.
6. டோக்கன் சேமிக்கவும்.

இந்த டோக்கன் தான் ImgBed-ல் `Bot Token`.

![View the போட் டோக்கன்](../../image/upload/discord/查看机器人令牌.png)

### 3. OAuth2 Invite Link உருவாக்கி போட் Install செய்யவும்

1. இடது பக்கப்பட்டி-ல் `OAuth2` page திறக்கவும்.
2. scopes பகுதியில் `bot` தேர்வு செய்யவும்.
3. permission பகுதியில் இவற்றை enable செய்யவும்:

| அனுமதி | அவசியம் |
| --- | --- |
| சேனல்களைப் பார்க்குதல் | ஆம் |
| செய்திகளை அனுப்புதல் | ஆம் |
| கோப்புகளை இணைத்தல் | ஆம் |
| செய்தி வரலாற்றைப் படித்தல் | ஆம் |

4. page கீழே integration type `Guild Install` என்பதை உறுதிப்படுத்தவும்.
5. உருவாக்கப்பட்ட URL-ஐ நகலெடுக்கவும்.
6. browser-ல் அந்த URL-ஐ திறக்கவும்.
7. இலக்கு சேவையகத்தைத் தேர்வு செய்யவும்.
8. authorization flow-ஐ முடிக்கவும்.

![OAuth2-ல் போட் permissions-ஐ தேர்வு செய்யவும்](../../image/upload/discord/在oa2勾选机器人权限.png)

![போட்டை சேனலுக்கு அழைக்கவும்](../../image/upload/discord/邀请机器人到频道.png)

### 4. Developer Mode Enable செய்து சேனல் ID நகலெடு செய்யவும்

1. Discord கீழ் இடது பகுதியில் avatar அருகிலுள்ள gear icon-ஐ கிளிக் செய்யவும்.
2. இடது பக்கப்பட்டியில் Advanced திறக்கவும்.
3. Developer Mode-ஐ enable செய்யவும்.
4. இலக்கு text சேனலுக்கு திரும்பவும்.
5. சேனல் பெயர் மீது right-click செய்யவும்.
6. சேனல் ID-ஐ நகலெடுக்கவும் என்பதைக் கிளிக் செய்யவும்.

நகலெடுக்கப்பட்ட எண் தான் ImgBed-க்கு தேவையான `Channel ID`.

![developer mode-ஐ enable செய்யவும்](../../image/upload/discord/开启开发者权限.png)

![சேனல் ID-ஐ நகலெடுக்கவும்](../../image/upload/discord/复制群频道id.png)

### 5. ImgBed-ல் Discord சேனல் நிரப்பவும்

கட்டமைப்பு dialog-க்கு திரும்பி:

| UI புலம் | மதிப்பு |
| --- | --- |
| சேனல் பெயர் | custom சேனல் பெயர், உதா. `DiscordPrimary`. |
| போட் டோக்கன் | Discord Developer Portal `Bot` page-ல் சேமித்த டோக்கன். |
| சேனல் ID | Discord-ல் நகலெடுத்த சேனல் ID. |
| Proxy URL (விருப்பத்தேர்வு) | தேவைப்பட்டால் மட்டும், உதா. `https://your-proxy.example.com`. |

முடிந்ததும் சேமி என்பதைக் கிளிக் செய்யவும்.

![Discord சேனல் கட்டமைப்பை சேர்க்கவும்](../../image/upload/discord/添加dc新渠道配置.png)

## சரிபார்ப்பது

| சரிபார்ப்பு | சரிபார்ப்பு |
| --- | --- |
| சேனல் card தெரிகிறது | சேமித்த பிறகு Discord சேனல் card தெரியும். |
| சேனலை இயக்க முடியும் | Active switch on ஆக இருக்கும். |
| கட்டமைப்பு சேமிக்கப்பட்டுள்ளது | detail view-ல் போட் டோக்கன் மற்றும் சேனல் ID சேமிக்கப்பட்டுள்ளன என தெரியும். |
| பதிவேற்றம் செயல்படுகிறது | test image பதிவேற்றி இலக்கு Discord text சேனலில் வந்ததா பார்க்கவும். |

## விரைவு சரிபார்ப்பு பட்டியல்

```text
Create a Discord server
-> Create a text channel
-> Create a bot in the Discord Developer Portal
-> Save the Bot Token from the Bot page
-> In OAuth2, select bot, View Channels, Send Messages, Attach Files, and Read Message History
-> Copy the generated URL and authorize the bot for the target server
-> Make sure the target text channel grants the same permissions
-> Enable Developer Mode
-> Right-click the target text channel and copy the Channel ID
-> Enter the Bot Token and Channel ID in ImgBed
-> Save and upload a test image
```

## மேற்கோள்கள்

1. Discord Developers Getting Started: https://docs.discord.com/developers/quick-start/getting-started
2. Discord Help - Where can I find my User/சேவையகம்/Message ID: https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID
