# Discord Channel شامل کریں

## شروع کرنے سے پہلے کیا چاہیے

| ضرورت | مقصد |
| --- | --- |
| Discord account | server، channel، اور developer application بنانے کے لیے۔ |
| Discord server | bot کو channel تک access سے پہلے server join کرنا ہوگا۔ |
| Text channel | images اور files اسی channel میں بھیجی جائیں گی۔ |
| Discord Developer Portal | application بنانے، bot بنانے، اور `Bot Token` لینے کے لیے۔ |

## کہاں شامل کریں

1. System Settings کھولیں۔
2. Upload Settings میں جائیں۔
3. اوپر دائیں طرف Add Channel پر کلک کریں۔
4. `Discord` منتخب کریں۔

## Field Reference

| Field | کام | Required |
| --- | --- | --- |
| Channel name | اس channel کا واضح نام، مثلاً "Discord Primary"۔ | Required |
| Bot Token | Discord bot token۔ | Required |
| Channel ID | target text channel کی ID۔ | Required |
| Proxy URL (optional) | صرف اس وقت استعمال کریں جب Discord CDN access unstable ہو۔ مکمل URL درج کریں، `https://` سمیت۔ | Optional |

## Setup Steps

### 1. Discord Server اور Text Channel بنائیں

1. Discord کھولیں۔
2. نیا server بنائیں، یا اپنی ownership والا existing server استعمال کریں۔
3. اسی server میں text channel بنائیں۔

![Create a server](../../image/upload/discord/创建服务器.png)

### 2. Discord Developer Portal میں Bot بنائیں

1. Discord Developer Portal کھولیں: `https://discord.com/developers/applications`
2. `New Application` پر کلک کریں۔
3. application name درج کریں اور create کریں۔
4. left sidebar سے `Bot` page کھولیں۔
5. `Bot` page پر token generate یا reset کریں۔
6. token محفوظ کریں۔

یہ token ImgBed میں `Bot Token` کے طور پر درج کرنا ہے۔

![View the bot token](../../image/upload/discord/查看机器人令牌.png)

### 3. OAuth2 Invite Link بنائیں اور Bot Install کریں

1. left sidebar سے `OAuth2` page کھولیں۔
2. scopes کے تحت `bot` منتخب کریں۔
3. permission area میں یہ permissions enable کریں:

| Permission | Required |
| --- | --- |
| View Channels | Yes |
| Send Messages | Yes |
| Attach Files | Yes |
| Read Message History | Yes |

4. page کے نیچے confirm کریں کہ integration type `Guild Install` ہے۔
5. generated URL copy کریں۔
6. اسے browser میں کھولیں۔
7. target server منتخب کریں۔
8. authorization flow مکمل کریں۔

![Select bot permissions in OAuth2](../../image/upload/discord/在oa2勾选机器人权限.png)

![Invite the bot to the channel](../../image/upload/discord/邀请机器人到频道.png)

### 4. Developer Mode Enable کریں اور Channel ID Copy کریں

1. Discord کے نیچے بائیں corner میں avatar کے پاس gear icon پر کلک کریں۔
2. left sidebar سے Advanced کھولیں۔
3. Developer Mode enable کریں۔
4. target text channel پر واپس جائیں۔
5. channel name پر right-click کریں۔
6. Copy Channel ID پر کلک کریں۔

copy کیا گیا number ImgBed کے لیے درکار `Channel ID` ہے۔

![Enable developer mode](../../image/upload/discord/开启开发者权限.png)

![Copy the channel ID](../../image/upload/discord/复制群频道id.png)

### 5. ImgBed میں Discord Channel بھریں

channel configuration dialog پر واپس آ کر fields یوں بھریں:

| UI Field | Value |
| --- | --- |
| Channel name | custom channel name، مثلاً `DiscordPrimary`۔ |
| Bot Token | Discord Developer Portal کے `Bot` page سے محفوظ token۔ |
| Channel ID | Discord سے copy کی گئی channel ID۔ |
| Proxy URL (optional) | صرف ضرورت ہو تو، مثلاً `https://your-proxy.example.com`۔ |

کام مکمل ہو جائے تو Save پر کلک کریں۔

![Add the Discord channel configuration](../../image/upload/discord/添加dc新渠道配置.png)

## Verify کیسے کریں

| Check | Verify کرنے کا طریقہ |
| --- | --- |
| Channel card appears | Save کے بعد Upload Settings page پر Discord channel card دکھائی دینا چاہیے۔ |
| Channel can be enabled | Active switch on رہنا چاہیے۔ |
| Configuration is saved | detail view میں Bot Token اور Channel ID محفوظ دکھنے چاہئیں۔ |
| Upload works | test image upload کریں اور confirm کریں کہ وہ target Discord text channel میں آتی ہے۔ |

## Quick Checklist

```text
Discord server بنائیں
-> text channel بنائیں
-> Discord Developer Portal میں bot بنائیں
-> Bot page سے Bot Token محفوظ کریں
-> OAuth2 میں bot, View Channels, Send Messages, Attach Files, اور Read Message History منتخب کریں
-> generated URL copy کریں اور target server کے لیے bot authorize کریں
-> target text channel میں یہی permissions موجود ہونے کی تصدیق کریں
-> Developer Mode enable کریں
-> target text channel پر right-click کر کے Channel ID copy کریں
-> ImgBed میں Bot Token اور Channel ID درج کریں
-> Save کریں اور test image upload کریں
```

## References

1. Discord Developers Getting Started: https://docs.discord.com/developers/quick-start/getting-started
2. Discord Help - Where can I find my User/Server/Message ID: https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID
