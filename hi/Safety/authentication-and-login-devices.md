# Authentication और Login Device Management

`Authentication Management` और `Login Device Management` आपके ImgBed admin panel, public upload entry और WebDAV access को सुरक्षित रखने के लिए हैं।

इस पेज से आप access credentials सेट कर सकते हैं, कौन-कौन से devices login हैं यह देख सकते हैं, और ज़रूरत पड़ने पर पुराने sessions revoke कर सकते हैं।

## कहाँ सेट करें

Admin panel खोलें, फिर यहाँ जाएँ:

```text
System Settings -> Security Settings
```

इस पेज में दो मुख्य हिस्से हैं:

- Authentication Management
- Login Device Management

![Authentication management](../../image/Safety/认证管理界面.png)

## Authentication Management क्या करता है

Authentication Management access credentials सेव करता है।

इसके दो प्रकार हैं:

- User-side authentication
- Admin-side authentication

## User-Side Authentication

User-side authentication यानी upload password।

Upload password सेट करने के बाद सामान्य visitors को upload page इस्तेमाल करने से पहले password डालना होगा। यह तब काम आता है जब आप public upload page को पूरी तरह open नहीं रखना चाहते।

![User login page](../../image/Safety/用户端登录界面.png)

### Upload Password सेट करना

Upload password सेट होने पर:

- Visitors को upload page इस्तेमाल करने से पहले password डालना होगा।
- Password सही होने के बाद ही upload उपलब्ध होगा।
- अगर user-side device sessions enabled हैं, तो ImgBed उस user-side device को record करेगा।

Upload password बदलने पर पुराने user-side sessions invalid हो जाते हैं। Visitors को नया password फिर से डालना होगा।

## Admin-Side Authentication

Admin-side authentication में admin username और password इस्तेमाल होते हैं।

यह admin panel की सुरक्षा करता है। Production use के लिए इसे हमेशा configure करना चाहिए।

![Admin login page](../../image/Safety/管理端登录界面.png)

### Admin Credentials सेट करना

Admin username और password सेट होने पर:

- Admin panel खोलने के लिए login करना होगा।
- Successful login के बाद एक admin device record बनता है।
- आप Login Device Management में devices review कर सकते हैं, cleanup कर सकते हैं या force offline कर सकते हैं।

Admin username या password बदलने पर पुराने admin sessions invalid हो जाते हैं। आपको फिर से sign in करना होगा।

## Login Device Management क्या करता है

Login Device Management उन devices को दिखाता है जिन्होंने sign in किया है।

इससे आप जाँच सकते हैं:

- किन devices ने admin panel access किया।
- किन devices ने user-side upload page access किया।
- कौन से WebDAV clients connect हुए।
- कोई device session अभी valid है या नहीं।
- पुराने devices को force offline करना चाहिए या नहीं।

इस पेज में तीन tabs हैं:

- Admin
- User
- WebDAV

## Global Cookie Security

Login Device Management के ऊपर global cookie behavior configure किया जा सकता है।

### User Cookie Lifetime

यह तय करता है कि user-side login कितने दिनों तक active रह सकता है।

उदाहरण के लिए, अगर आप इसे 14 days सेट करते हैं, तो visitors को आम तौर पर 14 दिनों तक upload password फिर से डालने की ज़रूरत नहीं होगी।

### Admin Cookie Lifetime

यह तय करता है कि admin login कितने दिनों तक active रह सकता है।

उदाहरण के लिए, अगर आप इसे 14 days सेट करते हैं, तो administrators को आम तौर पर 14 दिनों तक फिर से sign in नहीं करना पड़ेगा।

### Secure Mode

Secure mode enabled होने पर browser login cookies केवल HTTPS पर भेजता है।

Production HTTPS sites के लिए इसे enable करें। Local HTTP testing में इसे enable न करें, वरना "login successful है, लेकिन refresh करने पर logout हो जाता है" जैसा व्यवहार दिख सकता है।

## Admin Login Devices

Admin tab उन devices को दिखाता है जिन्होंने admin panel में sign in किया है।

Device records तभी दिखते हैं जब admin credentials configure हों और admin panel login के ज़रिए access किया गया हो।

हर device card में यह जानकारी दिख सकती है:

- Device और browser information
- First login IP
- Last active IP
- Login time
- Last active time
- Expiration time
- Current status

अगर कोई अनजान device दिखे, तो उसे invalid करने के लिए `Force Offline` इस्तेमाल करें।

## पुराने Devices Cleanup करना

`Clean Up Old Devices` current tab के पुराने login records को bulk में हटाता है।

जब आपको लगे कि पुराने sessions दूसरे devices पर अभी भी active हो सकते हैं, तब इसका इस्तेमाल करें।

## Force Offline

`Force Offline` किसी एक device session को invalid करता है।

Device force offline होने के बाद:

- Admin devices को फिर से sign in करना होगा।
- User-side devices को upload password फिर से डालना होगा।
- WebDAV clients को फिर से authenticate करना होगा।

Expired या invalid devices को हटाया भी जा सकता है।

## Current Device से Sign Out करना

Current device card पर `Current Device` mark लगा होता है।

Current device से sign out करने के बाद:

- Current admin session sign out हो जाता है।
- Current user-side session sign out हो जाता है।

उस area को आगे इस्तेमाल करने से पहले आपको फिर से sign in करना होगा।
