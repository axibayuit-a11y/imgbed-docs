# Telegram चैनल जोड़ना

## शुरू करने से पहले क्या चाहिए

| ज़रूरत | उपयोग |
| --- | --- |
| Telegram अकाउंट | bot और storage channel बनाने के लिए। |
| `@BotFather` | Telegram bot बनाने के लिए। |
| Telegram channel | फ़ाइलों की अंतिम storage destination। |
| `@userinfobot` | channel `Chat ID` पता करने के लिए। |

## कहाँ जोड़ें

1. System Settings खोलें।
2. Upload Settings पर जाएँ।
3. ऊपर दाएँ कोने में Add Channel पर क्लिक करें।
4. `Telegram` चुनें।

## फ़ील्ड संदर्भ

| फ़ील्ड | क्या करता है | आवश्यक |
| --- | --- | --- |
| Channel name | इस चैनल का आसान नाम, जैसे "Telegram Primary"। | हाँ |
| Active | इस चैनल को चालू या बंद करता है। | सुझाया गया |
| Bot Token | आपके Telegram bot का token। | हाँ |
| Session ID (Chat ID) | Telegram channel का ID। | हाँ |
| Relay Proxy URL (optional) | केवल तब उपयोग करें जब Telegram access अस्थिर हो। `https://` सहित पूरा proxy URL डालें। | नहीं |
| Remark | आगे की maintenance के लिए notes। | नहीं |

## सेटअप स्टेप्स

### 1. Telegram bot बनाएँ

1. Telegram खोलें और `@BotFather` खोजें।
2. chat खोलकर `Start` पर क्लिक करें।
3. `/newbot` भेजें।
4. prompts के अनुसार bot display name दर्ज करें।
5. prompts के अनुसार bot username दर्ज करें। आम तौर पर username का अंत `bot` से होना चाहिए।
6. bot बन जाने के बाद `@BotFather` एक bot token लौटाएगा।

यही token ImgBed में `Bot Token` फ़ील्ड में डालना है।

![Bot token सेव करें](../../image/upload/telegram/保存机器人令牌.png)

### 2. Channel बनाएँ

1. Telegram में New Channel पर क्लिक करें।
2. channel name दर्ज करें।
3. channel बनाना पूरा करें।

Public और private, दोनों तरह के channels इस्तेमाल किए जा सकते हैं।

![Channel बनाएँ](../../image/upload/telegram/新建频道.png)

### 3. Bot को channel में जोड़ें

1. अभी बनाया गया channel खोलें।
2. channel settings खोलें।
3. member या administrator जोड़ें।
4. अपने बनाए हुए bot username को खोजें।
5. bot को channel में जोड़ें।

सबसे भरोसेमंद uploads के लिए bot को administrator permissions देना बेहतर है।

![Bot को channel में invite करें](../../image/upload/telegram/邀请机器人进频道里.png)

### 4. User Info - Get ID - IDbot से Channel ID लें

1. Telegram में `@userinfobot` खोजें। इसका display name आम तौर पर `User Info - Get ID - IDbot` होता है।
2. chat खोलकर `Start` पर क्लिक करें।
3. bot के विकल्पों में से `Channel` चुनें।
4. message picker में target channel चुनकर `@userinfobot` को भेजें।
5. जब `@userinfobot` result लौटाए, तो `Id: -100...` में दिखा number copy करें।

`-100` से शुरू होने वाला number ImgBed के लिए ज़रूरी `Session ID (Chat ID)` है।

![Channel ID लें](../../image/upload/telegram/获取频道id.png)

### 5. ImgBed में Telegram channel भरें

channel configuration dialog पर लौटें और fields ऐसे भरें:

| UI Field | Value |
| --- | --- |
| Channel Identifier | custom channel name, जैसे `TelegramPrimary`। |
| Active | चालू रखना सुझाया गया है। |
| Bot Token | `@BotFather` से मिला bot token। |
| Session ID (Chat ID) | `@userinfobot` से मिला `-100...` number। |
| Relay Proxy URL (optional) | केवल ज़रूरत होने पर, जैसे `https://your-tg-proxy.example.com`। |
| Remark | वैकल्पिक notes। |

सब भरने के बाद Save पर क्लिक करें।

![Configuration edit करें](../../image/upload/telegram/编辑配置.png)

## कैसे जाँचें

| जाँच | कैसे verify करें |
| --- | --- |
| Channel card दिखता है | save करने के बाद Upload Settings page में Telegram channel card दिखना चाहिए। |
| Channel enable रह सकता है | Active switch चालू रहना चाहिए। |
| Configuration save हुई | detail view में Bot Token और Chat ID saved दिखने चाहिए। |
| Upload काम करता है | test image upload करें और target Telegram channel में उसके आने की पुष्टि करें। |

## Quick Checklist

```text
@BotFather से bot बनाएँ
-> Bot Token save करें
-> Telegram channel बनाएँ
-> bot को channel में जोड़ें और administrator permissions दें
-> @userinfobot खोजें और Channel चुनें
-> channel से कोई message @userinfobot को forward करें
-> लौटाया गया Id: -100... copy करें
-> ImgBed में Bot Token और Chat ID डालें
-> save करें और test image upload करें
```

## References

1. Telegram bots: https://core.telegram.org/bots
2. Telegram Bot API: https://core.telegram.org/bots/api
