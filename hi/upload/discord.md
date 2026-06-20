# Discord चैनल जोड़ना

## शुरू करने से पहले क्या चाहिए

| ज़रूरत | उपयोग |
| --- | --- |
| Discord account | server, channel और developer application बनाने के लिए। |
| Discord server | bot को channel access करने से पहले server में join करना होता है। |
| Text channel | images और files इसी channel में भेजी जाएँगी। |
| Discord Developer Portal | application, bot और `Bot Token` बनाने के लिए। |

## कहाँ जोड़ें

1. System Settings खोलें।
2. Upload Settings पर जाएँ।
3. ऊपर दाएँ कोने में Add Channel पर क्लिक करें।
4. `Discord` चुनें।

## फ़ील्ड संदर्भ

| Field | क्या करता है | आवश्यक |
| --- | --- | --- |
| Channel name | इस channel का आसान नाम, जैसे "Discord Primary"। | हाँ |
| Bot Token | Discord bot token। | हाँ |
| Channel ID | target text channel का ID। | हाँ |
| Proxy URL (optional) | केवल तब use करें जब Discord CDN access अस्थिर हो। `https://` सहित पूरा URL डालें। | नहीं |

## Setup Steps

### 1. Discord server और text channel बनाएँ

1. Discord खोलें।
2. नया server बनाएँ या अपने existing server का उपयोग करें।
3. उस server में text channel बनाएँ।

![Server बनाएँ](../../image/upload/discord/创建服务器.png)

### 2. Discord Developer Portal में bot बनाएँ

1. Discord Developer Portal खोलें: `https://discord.com/developers/applications`
2. `New Application` पर क्लिक करें।
3. application name डालकर create करें।
4. left sidebar से `Bot` page खोलें।
5. `Bot` page पर token generate या reset करें।
6. token save करें।

यही token ImgBed में `Bot Token` field में डालना है।

![Bot token देखें](../../image/upload/discord/查看机器人令牌.png)

### 3. OAuth2 invite link बनाएँ और bot install करें

1. left sidebar से `OAuth2` page खोलें।
2. scopes में `bot` चुनें।
3. permission area में ये permissions enable करें:

| Permission | Required |
| --- | --- |
| View Channels | हाँ |
| Send Messages | हाँ |
| Attach Files | हाँ |
| Read Message History | हाँ |

4. page के नीचे confirm करें कि integration type `Guild Install` है।
5. generated URL copy करें।
6. उस URL को browser में खोलें।
7. target server चुनें।
8. authorization flow पूरा करें।

![OAuth2 में bot permissions चुनें](../../image/upload/discord/在oa2勾选机器人权限.png)

![Bot को channel में invite करें](../../image/upload/discord/邀请机器人到频道.png)

### 4. Developer Mode enable करें और Channel ID copy करें

1. Discord के नीचे बाएँ अपने avatar के पास gear icon पर क्लिक करें।
2. left sidebar से Advanced खोलें।
3. Developer Mode enable करें।
4. target text channel पर लौटें।
5. channel name पर right-click करें।
6. Copy Channel ID पर क्लिक करें।

copy किया गया number ImgBed के लिए required `Channel ID` है।

![Developer mode enable करें](../../image/upload/discord/开启开发者权限.png)

![Channel ID copy करें](../../image/upload/discord/复制群频道id.png)

### 5. ImgBed में Discord channel भरें

channel configuration dialog पर लौटें और fields ऐसे भरें:

| UI Field | Value |
| --- | --- |
| Channel name | custom channel name, जैसे `DiscordPrimary`। |
| Bot Token | Discord Developer Portal के `Bot` page से save किया token। |
| Channel ID | Discord से copy किया गया channel ID। |
| Proxy URL (optional) | ज़रूरत होने पर ही, जैसे `https://your-proxy.example.com`। |

सब भरने के बाद Save पर क्लिक करें।

![Discord channel configuration जोड़ें](../../image/upload/discord/添加dc新渠道配置.png)

## कैसे जाँचें

| जाँच | कैसे verify करें |
| --- | --- |
| Channel card दिखता है | save करने के बाद Upload Settings page में Discord channel card दिखना चाहिए। |
| Channel enable रह सकता है | Active switch on रहना चाहिए। |
| Configuration save हुई | detail view में Bot Token और Channel ID saved दिखने चाहिए। |
| Upload काम करता है | test image upload करें और target Discord text channel में उसके आने की पुष्टि करें। |

## Quick Checklist

```text
Discord server बनाएँ
-> text channel बनाएँ
-> Discord Developer Portal में bot बनाएँ
-> Bot page से Bot Token save करें
-> OAuth2 में bot, View Channels, Send Messages, Attach Files और Read Message History चुनें
-> generated URL copy करें और target server के लिए bot authorize करें
-> target text channel में वही permissions confirm करें
-> Developer Mode enable करें
-> target text channel पर right-click करके Channel ID copy करें
-> ImgBed में Bot Token और Channel ID डालें
-> save करें और test image upload करें
```

## References

1. Discord Developers Getting Started: https://docs.discord.com/developers/quick-start/getting-started
2. Discord Help - Where can I find my User/Server/Message ID: https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID
