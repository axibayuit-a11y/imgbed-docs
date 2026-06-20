# Cloudflare API Token

Cloudflare API credentials से ImgBed files बदलने के बाद Cloudflare CDN cache purge कर सकता है।

![Cloudflare API Token settings](../../image/Safety/cloudflare%20api%20token截图.png)

## कहाँ सेट करें

Admin panel खोलें, फिर यहाँ जाएँ:

```text
System Settings -> Security Settings -> Cloudflare API Token
```

आपको ये fields भरने होंगे:

- Zone ID
- Account email
- API Key

## यह Setting क्या करती है

Cloudflare public image URLs को cache कर सकता है।

Cache की वजह से images तेज़ खुलती हैं, लेकिन file delete, block, replace या move करने के बाद भी पुराना content कुछ समय तक दिख सकता है।

Cloudflare API credentials configure होने के बाद ImgBed उन operations के पूरा होते ही related Cloudflare cache purge करने की कोशिश करता है।

यह इन स्थितियों में उपयोगी है:

- आपने image delete की है और चाहते हैं कि public link जल्द से जल्द काम करना बंद कर दे।
- आपने image block की है और चाहते हैं कि visitors original file न देखें।
- आपने same name से file replace की है और चाहते हैं कि visitors जल्दी नया version देखें।
- आपने files move या rename की हैं और चाहते हैं कि पुराने path का cache जल्दी refresh हो।
- आपने public access rules बदले हैं और चाहते हैं कि public gallery या random image cache जल्दी update हो।

## खाली छोड़ने पर क्या होगा

इस setting के बिना भी ImgBed सामान्य रूप से काम करता रहेगा।

फर्क सिर्फ इतना है कि ImgBed Cloudflare CDN cache को actively purge नहीं करेगा। Visitors को पुराना content तब तक दिख सकता है जब तक Cloudflare cache अपने आप expire न हो जाए।

## Zone ID कैसे खोजें

Zone ID उस site का Cloudflare Zone ID है जिसका इस्तेमाल आपके ImgBed domain में हो रहा है।

1. Cloudflare dashboard में sign in करें।
2. वह site खोलें जिसमें आपका ImgBed domain है।
3. Site overview page पर `Zone ID` ढूँढें।
4. उसे ImgBed के `Zone ID` field में copy करें।

यह site Zone ID है, account ID नहीं।

## Account Email

वही email address डालें जिससे आप Cloudflare में sign in करते हैं।

यह नीचे दिए गए API Key से match करना चाहिए।

## API Key

अपना Cloudflare Global API Key डालें।

1. Cloudflare dashboard में sign in करें।
2. अपना profile खोलें।
3. API Tokens page पर जाएँ।
4. `Global API Key` ढूँढें।
5. उसे view करके copy करें।
6. ImgBed के `API Key` field में paste करें।

![View global API key](../../image/Safety/查看全局令牌.png)

## कब लागू होता है

Fields भरने के बाद settings save करें।

इसके बाद future file changes पर ImgBed automatically Cloudflare cache purge करने की कोशिश करेगा। पुराने operations retroactively purge नहीं होते। अगर आपने setup से पहले कोई file delete या replace की है, तो Cloudflare cache expire होने का इंतज़ार करें या Cloudflare में manually purge करें।

## FAQ

### क्या यह ज़रूरी है?

नहीं।

अगर आपका domain Cloudflare इस्तेमाल नहीं करता, या CDN cache delay से आपको दिक्कत नहीं है, तो इसे खाली छोड़ सकते हैं।

### क्या गलत Credentials uploads तोड़ देंगे?

आम तौर पर नहीं।

गलत credentials केवल ImgBed को Cloudflare cache purge करने से रोकेंगे। Upload और normal file access चलते रहने चाहिए।

### Deleted Image फिर भी क्यों खुल रही है?

सबसे आम वजह है कि Cloudflare के पास अभी भी पुरानी file cached है।

सही Cloudflare API credentials होने पर ImgBed file delete करते समय related URL cache purge करता है।

### File replace करने के बाद भी पुरानी Image क्यों दिख रही है?

यह भी आम तौर पर CDN cache की वजह से होता है।

यह setting configure होने के बाद, same name वाली file overwrite होने पर ImgBed पुराने URL cache को purge करने की कोशिश करता है।
