# IP Geolocation और User Management

IP geolocation uploader records, login devices और इसी तरह के logs में IP addresses को approximate locations में बदलता है।

Configure होने के बाद admin panel upload और access origins को ज़्यादा साफ़ दिखा सकता है। User Management suspicious IP addresses के upload access को block या restore करने की सुविधा भी देता है।

## कहाँ सेट करें

खोलें:

```text
System Settings -> Other Settings -> IP Geolocation
```

![IP geolocation](../../image/other/ip定位/ip定位.png)

## Available Settings

नया IP geolocation flow किसी एक map service पर depend करने के बजाय multiple sources support करता है।

| Setting | Purpose |
| --- | --- |
| IP geolocation language | Display language चुनता है, जैसे English, Simplified Chinese, Japanese, French आदि। |
| MaxMind Account ID | MaxMind GeoLite Web Service के लिए MaxMind account ID। |
| MaxMind License Key | MaxMind License Key। |
| Tencent Map Key | Tencent Location Service key। Chinese addresses और mainland China IPs के लिए useful। |
| ipapi Key | APILayer ipapi key। Multilingual IP geolocation support करता है। |

केवल वही services भरें जिनकी आपको ज़रूरत है। हर field configure करना ज़रूरी नहीं।

अगर कोई key नहीं दी गई है, तो ImgBed built-in free sources try करता है, लेकिन stability, language support और precision आपके configured service जितनी अच्छी न हो सकती है।

## Recommended Choices

अगर आपको मुख्य रूप से Chinese addresses चाहिए:

1. IP geolocation language को Simplified Chinese पर set करें।
2. Tencent Map Key configure करें।
3. Optional fallback के रूप में MaxMind या ipapi जोड़ें।

अगर आपको मुख्य रूप से English या multilingual addresses चाहिए:

1. अपनी ज़रूरत की language चुनें।
2. MaxMind Account ID और License Key configure करें।
3. बेहतर multilingual results चाहिए तो ipapi Key जोड़ें।

## MaxMind Setup

MaxMind को चाहिए:

```text
MaxMind Account ID
MaxMind License Key
```

MaxMind dashboard में account ID ढूँढें और License Keys page से License Key generate करें।

![MaxMind key config](../../image/other/ip定位/maxmind的key配置.png)

Generate होने के बाद Account ID और License Key को ImgBed में paste करके save करें।

MaxMind का free plan everyday use के लिए ठीक है, लेकिन request limits हैं। Quota exceed होने पर ImgBed दूसरे available sources try करता रहेगा।

## ipapi Setup

ipapi APILayer API Key इस्तेमाल करता है।

ipapi console खोलें और वहाँ दिख रही API Key copy करें।

![ipapi config](../../image/other/ip定位/ipapi配置.png)

इसे ImgBed के `ipapi Key` field में paste करें और save करें।

ipapi multilingual IP geolocation support करता है और तब useful है जब आप selected language में addresses दिखाना चाहते हैं। इसके free plan में भी request limits हैं। Quota खत्म होने पर ImgBed दूसरे available sources try करता रहेगा।

## Tencent Map Key Setup

Tencent Map Key Chinese addresses, खासकर mainland China IPs के लिए useful है।

Tencent Location Service में key बनाते समय enable करें:

```text
WebServiceAPI
```

Creation के बाद key को `Tencent Map Key` में paste करें और save करें।

अगर आपको basic Chinese IP geolocation ही चाहिए, तो शुरुआत के लिए Tencent Map Key पर्याप्त है।

## User Management में क्या देखें

User Management admin panel के top से उपलब्ध है।

![User management](../../image/other/用户管理显示.png)

User Management IP के आधार पर upload activity दिखाता है:

| Field | Description |
| --- | --- |
| IP source | Uploader source IP। |
| Address | IP से resolve हुई approximate location। |
| Total upload size | इस IP से uploaded total file size। |
| Upload count | इस IP से uploads की संख्या। |
| Upload allowed | On मतलब uploads allowed हैं। Off मतलब uploads blocked हैं। |

उस IP द्वारा uploaded files की list खोलने के लिए left side का arrow click करें।

File list में file name, preview, file size, moderation result, file status और upload time दिखते हैं। Uploads suspicious लगें तो पहले IP expand करें, files review करें, फिर decide करें कि future uploads block करने हैं या नहीं।

अगर IP suspicious है, तो `Upload allowed` off करें। आगे के uploads उस IP से block हो जाएँगे।

## Search, Sort और Advanced Filters

User Management के top पर IP source या address से search करें।

Recent uploaders, high-frequency uploaders या high-usage IPs ढूँढने के लिए time, upload count या total upload size से sort करें।

ज़्यादा गहराई से जाँच करनी हो तो advanced filters खोलें।

![Advanced filters](../../image/other/用户管理高级筛选.png)

Advanced filters support करते हैं:

| Filter | Usage |
| --- | --- |
| Time range | Selected period में files upload करने वाले IPs दिखाता है। |
| Access status | Normal, blocked और similar states से filter करता है। |
| Allow/block list | Allowlist, blocklist या unset से filter करता है। |
| File type | Images, videos, audio, documents, code या other files upload करने वाले IPs दिखाता है। |
| File size | Uploaded file size range से filter करता है। |
| Age rating | Unset, General, R12+, R16+, R18 जैसी ratings से filter करता है। |
| File status | Abnormal files investigate करने के लिए current file status से filter करता है। |

Apply करने के लिए `Apply Filters` click करें। सभी data पर वापस जाने के लिए `Reset` इस्तेमाल करें।

## Mobile View

Mobile पर User Management card layout में switch हो जाता है।

![Mobile user management](../../image/other/手机端显示用户管理效果.png)

हर card में IP, address, total upload size, upload count और upload allowed switch दिखता है। Horizontal table scrolling के बिना users manage किए जा सकते हैं।

## अगर Location गलत लग रही है

IP geolocation approximate होती है। यह exact street address नहीं है।

अगर user proxy, data center, cloud server या cross-border network के पीछे है, तो displayed location real location से अलग हो सकती है।

इस feature का इस्तेमाल rough origin समझने, abnormal uploads ढूँढने और blocking decisions में मदद के लिए करें। इसे precise tracking न मानें।

## Common Cases

| Case | Meaning |
| --- | --- |
| Address empty है | IP अभी resolve नहीं हुआ हो सकता है, या current source temporarily unavailable है। |
| Address language गलत है | IP geolocation language और उस language को support करने वाले source की configuration check करें। |
| Address data center दिखाता है | कई proxies, cloud servers और crawlers data center या ISP addresses की तरह दिखते हैं। |
| Upload count high है | इस IP को ध्यान से review करें और ज़रूरत हो तो uploads block करें। |
| Total upload size बड़ा है | Sort या filter करें, IP expand करें और specific files inspect करें। |
| Blocking के बाद restore करना है | `Upload allowed` फिर से on करें। |

## Quick Flow

```text
Other Settings में IP Geolocation खोलें
-> IP geolocation language चुनें
-> ज़रूरत के अनुसार MaxMind, Tencent Map या ipapi credentials भरें
-> Settings save करें
-> User Management खोलें
-> IP source, address, total upload size और upload count review करें
-> Abnormal IPs ढूँढने के लिए search, sort या advanced filters इस्तेमाल करें
-> ज़रूरत के अनुसार uploads allow या block करें
```
