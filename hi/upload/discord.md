# Discord चैनल जोड़ना

## शुरू करने से पहले क्या चाहिए

| आवश्यकता | उद्देश्य |
| --- | --- |
| Discord खाता | सर्वर, चैनल और डेवलपर ऐप्लिकेशन बनाने के लिए। |
| Discord सर्वर | चैनल तक पहुँचने से पहले बॉट को किसी सर्वर में शामिल होना चाहिए। |
| टेक्स्ट चैनल | छवियाँ और फ़ाइलें इसी चैनल में भेजी जाएँगी। |
| Discord Developer Portal | ऐप्लिकेशन बनाने, बॉट बनाने और `Bot Token` प्राप्त करने के लिए। |

## कहाँ जोड़ें

1. सिस्टम सेटिंग्स खोलें।
2. अपलोड सेटिंग्स पर जाएँ।
3. ऊपर दाएँ कोने में चैनल जोड़ें पर क्लिक करें।
4. `Discord` चुनें।

## फ़ील्ड संदर्भ

| फ़ील्ड | कार्य | आवश्यक |
| --- | --- | --- |
| चैनल नाम | इस चैनल का पहचानने योग्य नाम, जैसे `Discord Primary`। | आवश्यक |
| Bot Token | Discord बॉट का टोकन। | आवश्यक |
| Channel ID | लक्षित टेक्स्ट चैनल का ID। | आवश्यक |
| प्रॉक्सी URL (वैकल्पिक) | केवल तब उपयोग करें जब Discord CDN एक्सेस अस्थिर हो। `https://` सहित पूरा URL दर्ज करें। | वैकल्पिक |

## कॉन्फ़िगरेशन चरण

### 1. Discord सर्वर और टेक्स्ट चैनल बनाएँ

1. Discord खोलें।
2. नया सर्वर बनाएँ, या अपने मौजूदा सर्वर का उपयोग करें।
3. उस सर्वर में एक टेक्स्ट चैनल बनाएँ।

![सर्वर बनाएँ](../../image/upload/discord/创建服务器.png)

### 2. Discord Developer Portal में बॉट बनाएँ

1. Discord Developer Portal खोलें: `https://discord.com/developers/applications`
2. `New Application` पर क्लिक करें।
3. ऐप्लिकेशन नाम दर्ज करें और उसे बनाएँ।
4. बाएँ साइडबार से `Bot` पेज खोलें।
5. `Bot` पेज पर टोकन जनरेट या रीसेट करें।
6. टोकन सहेजें।

यही टोकन ImgBed में `Bot Token` के रूप में दर्ज करना है।

![बॉट टोकन देखें](../../image/upload/discord/查看机器人令牌.png)

### 3. OAuth2 आमंत्रण लिंक बनाएँ और बॉट इंस्टॉल करें

1. बाएँ साइडबार से `OAuth2` पेज खोलें।
2. स्कोप में `bot` चुनें।
3. अनुमति क्षेत्र में ये अनुमतियाँ सक्षम करें:

| अनुमति | आवश्यक |
| --- | --- |
| View Channels | हाँ |
| Send Messages | हाँ |
| Attach Files | हाँ |
| Read Message History | हाँ |

4. पेज के नीचे पुष्टि करें कि एकीकरण प्रकार `Guild Install` है।
5. जनरेट किया गया URL कॉपी करें।
6. उस URL को ब्राउज़र में खोलें।
7. लक्षित सर्वर चुनें।
8. अनुमति प्रवाह पूरा करें।

![OAuth2 में बॉट अनुमतियाँ चुनें](../../image/upload/discord/在oa2勾选机器人权限.png)

![बॉट को चैनल में आमंत्रित करें](../../image/upload/discord/邀请机器人到频道.png)

### 4. Developer Mode सक्षम करें और Channel ID कॉपी करें

1. Discord में, नीचे बाएँ अपने अवतार के पास गियर आइकन पर क्लिक करें।
2. बाएँ साइडबार से `Advanced` खोलें।
3. `Developer Mode` सक्षम करें।
4. लक्षित टेक्स्ट चैनल पर लौटें।
5. चैनल नाम पर दायाँ क्लिक करें।
6. `Copy Channel ID` पर क्लिक करें।

कॉपी किया गया नंबर ImgBed के लिए आवश्यक `Channel ID` है।

![Developer Mode सक्षम करें](../../image/upload/discord/开启开发者权限.png)

![Channel ID कॉपी करें](../../image/upload/discord/复制群频道id.png)

### 5. ImgBed में Discord चैनल भरें

चैनल कॉन्फ़िगरेशन संवाद पर लौटें और फ़ील्ड इस तरह भरें:

| UI फ़ील्ड | मान |
| --- | --- |
| चैनल नाम | कस्टम चैनल नाम, जैसे `DiscordPrimary`। |
| Bot Token | Discord Developer Portal के `Bot` पेज से सहेजा गया टोकन। |
| Channel ID | Discord से कॉपी किया गया चैनल ID। |
| प्रॉक्सी URL (वैकल्पिक) | केवल आवश्यकता होने पर, जैसे `https://your-proxy.example.com`. |

पूरा होने पर सहेजें पर क्लिक करें।

![Discord चैनल कॉन्फ़िगरेशन जोड़ें](../../image/upload/discord/添加dc新渠道配置.png)

## सत्यापन

| जाँच | जाँचने का तरीका |
| --- | --- |
| चैनल कार्ड दिखाई देता है | सहेजने के बाद अपलोड सेटिंग्स पेज पर Discord चैनल कार्ड दिखना चाहिए। |
| चैनल सक्षम हो सकता है | Active स्विच सक्षम रहना चाहिए। |
| कॉन्फ़िगरेशन सहेजा गया है | विवरण दृश्य में Bot Token और Channel ID सहेजे हुए दिखने चाहिए। |
| अपलोड काम करता है | परीक्षण छवि अपलोड करें और पुष्टि करें कि वह लक्षित Discord टेक्स्ट चैनल में दिखाई देती है। |

## त्वरित सूची

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

## संदर्भ

1. Discord डेवलपर आरंभ मार्गदर्शिका: https://docs.discord.com/developers/quick-start/getting-started
2. Discord सहायता: User/Server/Message ID कहाँ मिलेगा: https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID
