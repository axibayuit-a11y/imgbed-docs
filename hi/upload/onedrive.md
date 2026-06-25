# OneDrive चैनल जोड़ना

## शुरू करने से पहले क्या चाहिए

| आवश्यकता | क्यों चाहिए |
| --- | --- |
| Microsoft खाता | Microsoft प्रशासन पेजों तक पहुँचने और OneDrive को अधिकृत करने के लिए |
| आपका ImgBed डोमेन | OAuth कॉलबैक URL के रूप में |
| ऐप्लिकेशन पंजीकरण | `Client ID` और `Client Secret` बनाने के लिए |
| OneDrive खाता | फ़ाइलों के वास्तविक स्टोरेज स्थान के रूप में |

## कॉन्फ़िगरेशन चरण

### चरण 1: Microsoft Entra ID खोलें

1. `portal.azure.com` खोलें।
2. पेज के ऊपर `Microsoft Entra ID` खोजें।
3. यदि लक्षित पेज ड्रॉपडाउन में न दिखे, तो चुनें:

```text
Continue searching in Microsoft Entra ID
```

4. `Microsoft Entra ID` खोलें।
5. `App registrations` खोलें।
6. `New registration` पर क्लिक करें।

### चरण 2: ऐप्लिकेशन पंजीकृत करें

`New registration` पेज पर भरें:

| फ़ील्ड | क्या दर्ज करें |
| --- | --- |
| Name | पहचानने योग्य नाम, जैसे `imgbed-onedrive` |
| Supported account types | नीचे की तालिका के अनुसार चुनें |
| Redirect URI type | `Web` |
| Redirect URI | `https://your-domain.com/api/oauth/onedrive/callback` |

खाता प्रकार मार्गदर्शिका:

| आपका परिदृश्य | Supported Account Types |
| --- | --- |
| केवल व्यक्तिगत OneDrive | व्यक्तिगत Microsoft खाते वाला विकल्प चुनें। |
| व्यक्तिगत और कार्य/विद्यालय खाते | ऐसा विकल्प चुनें जो व्यक्तिगत और संगठनात्मक दोनों खातों का समर्थन करे। |
| केवल कंपनी या विद्यालय OneDrive | संगठनात्मक खाते वाला विकल्प चुनें। |

फ़ॉर्म भरने के बाद register पर क्लिक करें।

![OneDrive ऐप बनाएँ](../../image/upload/onedrive/添加应用程序注册.png)

### चरण 3: ऐप्लिकेशन जानकारी कॉपी करें

ऐप बनने के बाद सारांश पेज से ये मान कॉपी करें:

| Microsoft फ़ील्ड | ImgBed फ़ील्ड |
| --- | --- |
| `Application (client) ID` | `Client ID` |
| `Directory (tenant) ID` | संगठनात्मक खातों के लिए `Tenant ID` |

![Application और tenant IDs](../../image/upload/onedrive/应用程序ID和目录租户ID位.png)

### चरण 4: Client Secret बनाएँ

1. `Certificates & secrets` खोलें।
2. `New client secret` पर क्लिक करें।
3. अपनी पसंद का विवरण दर्ज करें।
4. समाप्ति अवधि चुनें।
5. बनने के तुरंत बाद `Value` कॉपी करें।

![client secret value सहेजें](../../image/upload/onedrive/保存客户端密码值.png)

### चरण 5: API अनुमतियाँ जोड़ें

1. `API permissions` खोलें।
2. `Add a permission` पर क्लिक करें।
3. `Microsoft Graph` चुनें।
4. `Delegated permissions` चुनें।
5. ये अनुमतियाँ जोड़ें:

| अनुमति | उद्देश्य |
| --- | --- |
| `Files.ReadWrite.All` | फ़ाइलें अपलोड करना, फ़ोल्डर बनाना और फ़ाइलें हटाना |
| `offline_access` | ImgBed को `Refresh Token` प्राप्त करने देता है |
| `User.Read` | खाता और कोटा जानकारी पढ़ता है |

### चरण 6: OneDrive चैनल भरें

अपलोड सेटिंग्स में `OneDrive` चुनें और भरें:

| ImgBed फ़ील्ड | क्या दर्ज करें |
| --- | --- |
| चैनल नाम | पहचानने योग्य नाम, जैसे `Main OneDrive` |
| Client ID | Microsoft का `Application (client) ID` |
| Client Secret | आपने जो `Client Secret Value` कॉपी किया |
| Tenant ID | नीचे की तालिका के अनुसार |
| Refresh Token | अभी खाली छोड़ें |
| रूट डायरेक्टरी | वैकल्पिक। डिफ़ॉल्ट `imgbed` है। |
| नोट | वैकल्पिक |

![OneDrive चैनल कॉन्फ़िग भरें](../../image/upload/onedrive/添加新渠道配置.png)

`Tenant ID` कैसे भरें:

| चुना गया खाता प्रकार | ImgBed `Tenant ID` |
| --- | --- |
| व्यक्तिगत खाते | `consumers` |
| व्यक्तिगत + संगठनात्मक खाते | `common` |
| केवल वर्तमान संगठन | `Directory (tenant) ID` |

### चरण 7: Refresh Token प्राप्त करें

1. ImgBed में `Get Token` पर क्लिक करें।
2. जिस Microsoft खाते को जोड़ना है उससे साइन इन करें।
3. अधिकरण अनुरोध स्वीकार करें।
4. कॉलबैक पेज `Refresh Token` दिखाएगा।
5. इसे कॉपी करें।
6. ImgBed में लौटकर `Refresh Token` फ़ील्ड में पेस्ट करें।

![refresh token कॉपी करें](../../image/upload/onedrive/复制刷新令牌.png)

### चरण 8: चैनल सहेजें

सभी फ़ील्ड भरने के बाद चैनल सहेजें।

## त्वरित प्रवाह

```text
Open portal.azure.com
-> Search for Microsoft Entra ID
-> Open App registrations
-> Register a new app
-> Fill Name / Supported account types / Web redirect URI
-> Register
-> Copy Application (client) ID
-> Check the callback URL in Authentication
-> Create a Client Secret in Certificates & secrets
-> Add permissions in API permissions
-> Fill Client ID / Client Secret / Tenant ID into ImgBed
-> Click Get Token
-> Copy the Refresh Token from the callback page
-> Paste it back into ImgBed and save
```

## संदर्भ

1. Microsoft Entra ऐप पंजीकरण: https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app
2. Microsoft identity platform अधिकरण कोड प्रवाह: https://learn.microsoft.com/en-us/entra/identity-platform/v2-oauth2-auth-code-flow
3. Microsoft Graph उपयोगकर्ता प्रमाणीकरण: https://learn.microsoft.com/en-us/graph/auth-v2-user
