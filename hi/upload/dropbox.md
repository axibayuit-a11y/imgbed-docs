# Dropbox चैनल जोड़ना

## पहले क्या चाहिए

| आवश्यकता | क्यों चाहिए |
| --- | --- |
| Dropbox खाता | साइन इन करने और ऐप्लिकेशन को अधिकृत करने के लिए |
| Dropbox ऐप्लिकेशन | `App Key` और `App Secret` बनाने के लिए |
| आपका ImgBed डोमेन | OAuth redirect URI के रूप में उपयोग करने के लिए |
| Dropbox में उपलब्ध स्टोरेज | फ़ाइलों के वास्तविक स्टोरेज स्थान के रूप में |

## कॉन्फ़िगरेशन चरण

### चरण 1: Dropbox ऐप्लिकेशन बनाएँ

1. Dropbox App Console खोलें:

```text
https://www.dropbox.com/developers/apps
```

2. नया ऐप्लिकेशन बनाएँ।
3. एक्सेस प्रकार के लिए चुनें:

```text
App folder
```

4. ऐप्लिकेशन को पहचानने योग्य नाम दें, जैसे `imgbed-app`।
5. बनने के बाद ऐप्लिकेशन का विवरण पेज खोलें।

सुझाया गया एक्सेस प्रकार:

| एक्सेस प्रकार | सुझाव |
| --- | --- |
| `App folder` | सुझाया गया। यह ImgBed के फ़ाइल स्टोरेज तरीके से मेल खाता है। |
| `Full Dropbox` | सुझाया नहीं गया। ImgBed को पूरे खाते की पूर्ण पहुँच की आवश्यकता नहीं है। |

![Dropbox ऐप्लिकेशन बनाएँ](../../image/upload/dropbox/开发者创建应用.png)

### चरण 2: Redirect URI जोड़ें

Dropbox ऐप्लिकेशन के विवरण पेज में OAuth या Redirect URI सेटिंग्स खोजें और जोड़ें:

```text
https://your-domain.com/api/oauth/dropbox/callback
```

यदि प्रशासन पैनल कई डोमेन से उपयोग होता है, तो हर संबंधित कॉलबैक URL जोड़ें।

![Redirect URI कॉन्फ़िगर करें](../../image/upload/dropbox/配置回调地址.png)

### चरण 3: ऐप्लिकेशन अनुमतियाँ कॉन्फ़िगर करें

`Permissions` टैब खोलें और कम से कम ये स्कोप सक्षम करें:

| स्कोप | आवश्यक | उद्देश्य |
| --- | --- | --- |
| `account_info.read` | आवश्यक | खाता और कोटा जानकारी पढ़ता है |
| `files.metadata.read` | आवश्यक | पथ जाँच के लिए फ़ाइल और फ़ोल्डर मेटाडेटा पढ़ता है |
| `files.metadata.write` | आवश्यक | फ़ोल्डर बनाता है और मेटाडेटा लिखता है |
| `files.content.write` | आवश्यक | फ़ाइलें अपलोड करता है। यह स्कोप न होने पर `required scope 'files.content.write'` दिखता है। |
| `files.content.read` | सुझाया गया | डाउनलोड, पूर्वावलोकन और अस्थायी फ़ाइल लिंक की अनुमति देता है |

स्कोप चुनने के बाद पेज के नीचे `Submit` पर क्लिक करें।

![अनुमतियाँ जोड़ें](../../image/upload/dropbox/添加对应的权限.png)

महत्वपूर्ण:

| स्थिति | क्या करें |
| --- | --- |
| आपने स्कोप बदले | टोकन अधिकरण प्रवाह फिर चलाएँ और नया `Refresh Token` प्राप्त करें। |
| आपने फिर से अधिकृत नहीं किया | पुराना टोकन नई अनुमतियाँ नहीं पाएगा, इसलिए अपलोड फिर भी विफल हो सकते हैं। |

### चरण 4: ऐप्लिकेशन क्रेडेंशियल कॉपी करें

Dropbox ऐप्लिकेशन पेज से ये दो मान सहेजें:

| Dropbox फ़ील्ड | ImgBed फ़ील्ड |
| --- | --- |
| `App key` | `App Key` |
| `App secret` | `App Secret` |

### चरण 5: Dropbox चैनल भरें

अपलोड सेटिंग्स में `Dropbox` चुनें और भरें:

| ImgBed फ़ील्ड | क्या दर्ज करें |
| --- | --- |
| चैनल नाम | पहचानने योग्य नाम, जैसे `Main Dropbox` |
| App Key | Dropbox `App key` |
| App Secret | Dropbox `App secret` |
| Refresh Token | अभी खाली छोड़ें |
| रूट डायरेक्टरी | वैकल्पिक। डिफ़ॉल्ट `imgbed` है। |
| नोट | वैकल्पिक |

![टोकन प्राप्त करें](../../image/upload/dropbox/获取令牌.png)

### चरण 6: Refresh Token प्राप्त करें

1. ImgBed में `Get Token` पर क्लिक करें।
2. जिस Dropbox खाते को जोड़ना है उससे साइन इन करें।
3. अधिकरण अनुरोध स्वीकार करें।
4. कॉलबैक पेज `Refresh Token` दिखाएगा।
5. इसे कॉपी करें।
6. ImgBed में लौटकर `Refresh Token` फ़ील्ड में पेस्ट करें।

![टोकन कॉपी करें](../../image/upload/dropbox/复制令牌.png)

## सत्यापन

| जाँच | अपेक्षित परिणाम |
| --- | --- |
| चैनल कार्ड | सहेजने के बाद Dropbox चैनल दिखाई देता है। |
| चैनल स्विच | चैनल सक्षम किया जा सकता है। |
| टोकन सहेजा गया | विवरण पेज दिखाता है कि `Refresh Token` सहेजा गया है। |
| अपलोड परीक्षण | परीक्षण छवि Dropbox ऐप फ़ोल्डर में दिखाई देती है। |

यदि कोटा सीमाएँ सक्षम हैं, तो कोटा क्वेरी पर क्लिक करें। सफल क्वेरी के बाद चैनल कार्ड उपयोग की गई जगह, कुल जगह और अंतिम अपडेट समय दिखाता है।

![सफल कोटा क्वेरी](../../image/upload/dropbox/查询额度成功.png)

## समस्या निवारण

| समस्या | समाधान |
| --- | --- |
| ImgBed बताता है कि कॉन्फ़िगरेशन अधूरा है | जाँचें कि `App Key`, `App Secret` और `Refresh Token` सभी भरे हुए हैं। |
| अधिकरण पूरा होता है लेकिन `Refresh Token` नहीं दिखता | `Get Token` फिर क्लिक करें और सुनिश्चित करें कि ऑफ़लाइन अधिकरण प्रवाह उपयोग हो रहा है। |
| अपलोड `required scope 'files.content.write'` के साथ विफल होता है | `files.content.write` सक्षम करें, `Submit` पर क्लिक करें, फिर नया `Refresh Token` लें। |
| कॉलबैक विफल होता है | पुष्टि करें कि रीडायरेक्ट URI `https://your-domain.com/api/oauth/dropbox/callback` है। |
| फ़ाइलें नहीं मिलतीं | पुष्टि करें कि Dropbox ऐप्लिकेशन `App folder` मोड में बनाया गया है। |

## त्वरित प्रवाह

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

## संदर्भ

1. Dropbox App Console: https://www.dropbox.com/developers/apps
2. Dropbox OAuth मार्गदर्शिका: https://developers.dropbox.com/oauth-guide
3. Dropbox डेवलपर मार्गदर्शिका: https://www.dropbox.com/developers/reference/developer-guide
