# Discord Channel شامل کریں

## شروع کرنے سے پہلے کیا چاہیے

| ضرورت | مقصد |
| --- | --- |
| Discord account | server، channel، اور developer application بنانے کے لیے۔ |
| Discord server | bot کو channel تک access سے پہلے server join کرنا ہوگا۔ |
| Text channel | images اور files اسی channel میں بھیجی جائیں گی۔ |
| Discord Developer Portal | application بنانے، bot بنانے، اور `Bot Token` لینے کے لیے۔ |

## کہاں شامل کریں

1. سسٹم سیٹنگز کھولیں۔
2. اپ لوڈ سیٹنگز میں جائیں۔
3. اوپر دائیں طرف چینل شامل کریں پر کلک کریں۔
4. `Discord` منتخب کریں۔

## فیلڈز کی تفصیل

| فیلڈ | کام | ضروری |
| --- | --- | --- |
| Channel name | اس channel کا واضح نام، مثلاً "Discord Primary"۔ | ضروری |
| Bot Token | Discord bot token۔ | ضروری |
| Channel ID | target text channel کی ID۔ | ضروری |
| Proxy URL (اختیاری) | صرف اس وقت استعمال کریں جب Discord CDN access unstable ہو۔ مکمل URL درج کریں، `https://` سمیت۔ | اختیاری |

## سیٹ اپ کے مراحل

### 1. Discord Server اور Text Channel بنائیں

1. Discord کھولیں۔
2. نیا server بنائیں، یا اپنی ownership والا موجودہ server استعمال کریں۔
3. اسی server میں text channel بنائیں۔

![server بنائیں](../../image/upload/discord/创建服务器.png)

### 2. Discord Developer Portal میں Bot بنائیں

1. Discord Developer Portal کھولیں: `https://discord.com/developers/applications`
2. `New Application` پر کلک کریں۔
3. application کا نام درج کریں اور بنائیں کریں۔
4. left sidebar سے `Bot` صفحہ کھولیں۔
5. `Bot` صفحہ پر token generate یا reset کریں۔
6. token محفوظ کریں۔

یہ token ImgBed میں `Bot Token` کے طور پر درج کرنا ہے۔

![View the bot token](../../image/upload/discord/查看机器人令牌.png)

### 3. OAuth2 Invite Link بنائیں اور Bot Install کریں

1. left sidebar سے `OAuth2` صفحہ کھولیں۔
2. scopes کے تحت `bot` منتخب کریں۔
3. permission area میں یہ permissions فعال کریں:

| اجازت | ضروری |
| --- | --- |
| View Channels | ہاں |
| Send Messages | ہاں |
| Attach Files | ہاں |
| Read Message History | ہاں |

4. صفحہ کے نیچے تصدیق کریں کہ integration type `Guild Install` ہے۔
5. بنایا گیا URL کاپی کریں۔
6. اسے browser میں کھولیں۔
7. target server منتخب کریں۔
8. authorization flow مکمل کریں۔

![Select bot permissions in OAuth2](../../image/upload/discord/在oa2勾选机器人权限.png)

![Invite the bot to the channel](../../image/upload/discord/邀请机器人到频道.png)

### 4. Developer Mode Enable کریں اور Channel ID کاپی کریں

1. Discord کے نیچے بائیں corner میں avatar کے پاس gear icon پر کلک کریں۔
2. left sidebar سے Advanced کھولیں۔
3. Developer Mode فعال کریں۔
4. target text channel پر واپس جائیں۔
5. channel name پر right-click کریں۔
6. کاپی Channel ID پر کلک کریں۔

کاپی کیا گیا number ImgBed کے لیے درکار `Channel ID` ہے۔

![Enable developer mode](../../image/upload/discord/开启开发者权限.png)

![channel ID کاپی کریں](../../image/upload/discord/复制群频道id.png)

### 5. ImgBed میں Discord Channel بھریں

channel configuration dialog پر واپس آ کر فیلڈز یوں بھریں:

| UI فیلڈ | قدر |
| --- | --- |
| Channel name | custom channel name، مثلاً `DiscordPrimary`۔ |
| Bot Token | Discord Developer Portal کے `Bot` صفحہ سے محفوظ token۔ |
| Channel ID | Discord سے کاپی کی گئی channel ID۔ |
| Proxy URL (اختیاری) | صرف ضرورت ہو تو، مثلاً `https://your-proxy.example.com`. |

کام مکمل ہو جائے تو Save پر کلک کریں۔

![Discord چینل کی configuration شامل کریں](../../image/upload/discord/添加dc新渠道配置.png)

## Verify کیسے کریں

| جانچ | Verify کرنے کا طریقہ |
| --- | --- |
| چینل card ظاہر ہوتا ہے | محفوظ کرنے کے بعد اپ لوڈ سیٹنگز صفحہ پر Discord چینل card دکھائی دینا چاہیے۔ |
| Channel can be فعال | Active switch on رہنا چاہیے۔ |
| configuration محفوظ ہے | تفصیلی منظر میں Bot Token اور Channel ID محفوظ دکھنے چاہئیں۔ |
| Upload کام کرتا ہے | test image upload کریں اور تصدیق کریں کہ وہ target Discord text channel میں آتی ہے۔ |

## فوری چیک لسٹ

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

## حوالہ جات

1. Discord Developers Getting Started: https://docs.discord.com/developers/quick-start/getting-started
2. Discord Help - Where can I find my User/Server/Message ID: https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID
