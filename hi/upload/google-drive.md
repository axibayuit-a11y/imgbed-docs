# Google Drive चैनल जोड़ना

## पहले क्या चाहिए

शुरू करने से पहले ये चीज़ें तैयार रखें:

| आवश्यकता | क्यों चाहिए |
| --- | --- |
| Google खाता | Google Cloud तक पहुँचने और Google Drive को अधिकृत करने के लिए |
| Google Cloud प्रोजेक्ट | Drive API सक्षम करने और OAuth क्रेडेंशियल बनाने के लिए |
| OAuth 2.0 क्लाइंट | ImgBed इससे `Client ID`, `Client Secret` और `Refresh Token` प्राप्त करता है |
| आपका ImgBed डोमेन | OAuth redirect URI के रूप में। यह आपके वास्तविक उपयोग वाले डोमेन से मेल खाना चाहिए। |

## कॉन्फ़िगरेशन चरण

### चरण 1: Google Drive API सक्षम करें

1. Google Cloud Console खोलें।
2. नया प्रोजेक्ट बनाएँ या मौजूदा प्रोजेक्ट चुनें।
3. `APIs & Services` पर जाएँ।
4. `Enable APIs and Services` पर क्लिक करें।
5. `Google Drive API` खोजें।
6. इसे खोलें और सक्षम करें पर क्लिक करें।

### चरण 2: OAuth consent screen कॉन्फ़िगर करें

1. Google Cloud में `Google Auth Platform` खोलें।
2. `Branding` की मूल जानकारी पूरी करें, जैसे ऐप्लिकेशन नाम, सहायता ईमेल और डेवलपर संपर्क ईमेल।
3. `Audience` खोलें।
4. अधिकांश व्यक्तिगत स्वयं-होस्टेड डिप्लॉयमेंट के लिए `External` चुनें।
5. यदि `External` चुनते हैं, तो जिस Google खाते को अधिकृत करना है उसे `Test users` में जोड़ें।
6. `Data Access` खोलें।
7. आवश्यक Google Drive अनुमतियाँ जोड़ें।

### चरण 3: OAuth 2.0 क्लाइंट बनाएँ

1. `Google Auth Platform` में `Clients` खोलें।
2. नया क्लाइंट बनाएँ।
3. ऐप्लिकेशन प्रकार `Web application` रखें।
4. क्लाइंट को पहचानने योग्य नाम दें।
5. authorized JavaScript origins में ImgBed URL दर्ज करें, उदाहरण के लिए:

```text
https://img.example.com
```

6. authorized redirect URIs में दर्ज करें:

```text
https://img.example.com/api/oauth/google/callback
```

![OAuth क्लाइंट बनाएँ](../../image/upload/google-drive/oa客户端id创建.png)

![डोमेन और कॉलबैक URL दर्ज करें](../../image/upload/google-drive/填写oa客户端url信息.png)

क्लाइंट बनने के बाद ये मान कॉपी करें:

| बनाया गया मान | ImgBed फ़ील्ड |
| --- | --- |
| Client ID | `Client ID` |
| Client Secret | `Client Secret` |

## चरण 4: Google Drive चैनल भरें

अपलोड सेटिंग्स में `Google Drive` चुनें और भरें:

| ImgBed फ़ील्ड | क्या दर्ज करें |
| --- | --- |
| चैनल नाम | पहचानने योग्य नाम, जैसे `Main Google Drive` |
| Client ID | Google Cloud का `Client ID` |
| Client Secret | Google Cloud का `Client Secret` |
| Refresh Token | अभी खाली छोड़ें। इसे अगले चरण में प्राप्त करेंगे। |
| रूट डायरेक्टरी | वैकल्पिक। डिफ़ॉल्ट `imgbed` है। |

![ImgBed में क्लाइंट विवरण भरें](../../image/upload/google-drive/粘贴回添加新渠道配置.png)

## चरण 5: Refresh Token प्राप्त करें

1. `Get Token` पर क्लिक करें।
2. जोड़ने वाला Google खाता चुनें।
3. अधिकरण अनुरोध पूरे करें।
4. कॉलबैक पेज `Refresh Token` दिखाएगा।
5. इसे कॉपी करें।
6. ImgBed में लौटकर `Refresh Token` फ़ील्ड में पेस्ट करें।

![अधिकरण के बाद Refresh Token कॉपी करें](../../image/upload/google-drive/授权完复制token.png)

यदि बाद में Google खाता बदलें, OAuth क्लाइंट बदलें या पिछला अधिकरण समाप्त हो जाए, तो चैनल हटाने की आवश्यकता नहीं है। संपादन पेज खोलें और `Reauthorize` पर क्लिक करें।

## चरण 6: चैनल सहेजें

सभी फ़ील्ड भरने के बाद चैनल सहेजें।

## त्वरित प्रवाह

```text
Open Google Cloud
-> Create or select a project
-> Enable Google Drive API
-> Configure Google Auth Platform
-> If Audience is External, add your Google account to Test users
-> Create a Web application OAuth client
-> Use https://your-domain.com/api/oauth/google/callback as the redirect URI
-> Fill Client ID and Client Secret into ImgBed
-> Click Get Token
-> Sign in with Google and authorize
-> Copy the Refresh Token from the callback page
-> Paste it back into ImgBed and save
-> Upload a test image
```

## संदर्भ

1. Google OAuth वेब सर्वर ऐप्लिकेशन: https://developers.google.com/identity/protocols/oauth2/web-server
2. Google Workspace OAuth consent कॉन्फ़िगरेशन: https://developers.google.com/workspace/guides/configure-oauth-consent
3. Google Drive API प्रमाणीकरण स्कोप: https://developers.google.com/workspace/drive/api/guides/api-specific-auth
