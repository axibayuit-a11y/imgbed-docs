# API Token से कॉन्फ़िगरेशन प्रबंधन

API Token से कॉन्फ़िगरेशन प्रबंधन उन स्वचालन स्क्रिप्टों, संचालन उपकरणों और बाहरी नियंत्रण पैनलों के लिए है जिन्हें प्रशासन पैनल खोले बिना सेटिंग्स पढ़नी या बदलनी होती हैं। `manage` अनुमति वाला API Token अपलोड चैनल सेटिंग्स, सुरक्षा सेटिंग्स, पृष्ठ सेटिंग्स, अन्य सेटिंग्स और कुछ हल्के फ़ेडरेशन संबंध पढ़ या बदल सकता है।

यह प्रबंधन अनुमति केवल स्क्रिप्ट के लिए उपयुक्त हल्के काम खोलती है। जिन भारी कामों में ब्राउज़र में पुष्टि, वेब इंटरफ़ेस की बैच प्रक्रिया या फ़ेडरेशन सूचकांक की सफ़ाई चाहिए, वे अब भी ब्राउज़र के प्रशासन पैनल से ही किए जाने चाहिए।

![API Token संपादित करें](../../image/Safety/apitoken/编辑api token.png)

## तैयारी

प्रशासन पैनल में खोलें:

```text
System Settings -> Security Settings -> API Token
```

API Token बनाते या संपादित करते समय प्रबंधन अनुमति चालू करें। यह अनुमति साइट सेटिंग्स बदल सकती है, इसलिए इसे केवल भरोसेमंद स्क्रिप्ट या भरोसेमंद उपयोगकर्ताओं को दें।

तीनों प्रबंधन स्क्रिप्टों में लिखने वाले काम डिफ़ॉल्ट रूप से केवल पूर्वावलोकन दिखाते हैं। पूर्वावलोकन जाँचने के बाद `--apply` जोड़ने पर ही बदलाव सच में सहेजा जाता है।

API Token को परिवेश चर में भी रखा जा सकता है:

```powershell
$env:IMGBED_API_TOKEN="your API Token"
```

## प्रबंधन स्क्रिप्ट डाउनलोड करें

ImgBed दस्तावेज़ में Node.js पर आधारित तीन स्क्रिप्ट दी गई हैं:

| स्क्रिप्ट | उपयोग |
| --- | --- |
| <a href="/tools/imgbed-token-upload-settings.mjs" download>अपलोड सेटिंग्स प्रबंधन स्क्रिप्ट डाउनलोड करें</a> | अपलोड चैनल, उप-चैनल और भार संतुलन प्रबंधित करती है |
| <a href="/tools/imgbed-token-site-settings.mjs" download>साइट सेटिंग्स प्रबंधन स्क्रिप्ट डाउनलोड करें</a> | सुरक्षा सेटिंग्स, पृष्ठ सेटिंग्स और अन्य सेटिंग्स प्रबंधित करती है |
| <a href="/tools/imgbed-token-federation.mjs" download>फ़ेडरेशन संबंध प्रबंधन स्क्रिप्ट डाउनलोड करें</a> | हल्के संबंध कार्य, जुड़ने के अनुरोध और संदेश प्रबंधित करती है |

स्क्रिप्ट चलाने के लिए स्थानीय मशीन पर Node.js 18 या उससे नया संस्करण चाहिए।

### सामान्य पैरामीटर

| पैरामीटर | आवश्यक | विवरण |
| --- | --- | --- |
| `--base-url <url>` | हाँ | ImgBed साइट का पता, जैसे `https://image.ai6.me` |
| `--token <token>` | हाँ | API Token; `IMGBED_API_TOKEN` परिवेश चर भी उपयोग कर सकते हैं |
| `--retries <n>` | नहीं | अस्थायी त्रुटि पर दोबारा प्रयासों की संख्या; डिफ़ॉल्ट `3` |
| `--timeout-ms <n>` | नहीं | हर अनुरोध की समयसीमा, मिलीसेकंड में; डिफ़ॉल्ट `180000` |
| `--output <pretty\|json>` | नहीं | आउटपुट का रूप; डिफ़ॉल्ट `pretty`, प्रोग्राम के लिए `json` उपयोग करें |
| `--save-response <path>` | नहीं | अंतिम परिणाम JSON फ़ाइल में सहेजता है |
| `--apply` | नहीं | लिखने का काम सच में करता है; इसके बिना केवल पूर्वावलोकन दिखता है |
| `-h` / `--help` | नहीं | स्क्रिप्ट की सहायता दिखाता है |

## अपलोड सेटिंग्स

अपलोड सेटिंग्स स्क्रिप्ट उप-चैनल सूचीबद्ध कर सकती है, पढ़ सकती है, बना या संपादित कर सकती है, हटा सकती है और किसी मुख्य चैनल का भार संतुलन चालू या बंद कर सकती है।

```powershell
node imgbed-token-upload-settings.mjs --base-url "https://your-domain" --token "your API Token" --list
```

### अपलोड सेटिंग्स के पैरामीटर

| पैरामीटर | विवरण |
| --- | --- |
| `--list` | अपलोड सेटिंग्स के समूह दिखाता है |
| `--get` | मुख्य चैनल या उसके नीचे का खास उप-चैनल पढ़ता है |
| `--upsert` | उप-चैनल बनाता या संपादित करता है; `--apply` न हो तो केवल पूर्वावलोकन |
| `--delete` | उप-चैनल हटाता है; `--apply` न हो तो केवल पूर्वावलोकन |
| `--load-balance <true\|false>` | मुख्य चैनल का भार संतुलन चालू या बंद करता है |
| `--channel <key>` | मुख्य अपलोड चैनल, जैसे `s3`, `github`, `telegram` |
| `--channel-name <name>` | उप-चैनल या खाते का नाम |
| `--set key=value` | एक फ़ील्ड सेट करता है; बार-बार उपयोग किया जा सकता है और बिंदु-पथ का समर्थन करता है |
| `--patch-json <path>` | JSON फ़ाइल से कई फ़ील्ड मिलाता है |
| `--apply` | बदलाव सच में सहेजता है |

### चैनल कुंजियाँ

| चैनल कुंजी | चैनल |
| --- | --- |
| `telegram` / `tg` | Telegram |
| `discord` / `dc` | Discord |
| `cfr2` / `r2` | Cloudflare R2 |
| `s3` | S3 |
| `webdav` / `wd` | WebDAV संग्रहण चैनल |
| `github` / `gh` | GitHub Releases |
| `gitlab` / `gl` | GitLab Packages |
| `huggingface` / `hf` | Hugging Face |
| `onedrive` / `od` | OneDrive |
| `googledrive` / `google` / `gd` | Google Drive |
| `dropbox` / `db` | Dropbox |
| `yandex` / `yx` | Yandex Disk |
| `pcloud` / `pd` | pCloud |

### अपलोड सेटिंग्स के उदाहरण

सभी अपलोड सेटिंग्स देखना:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --list
```

S3 चैनल सेटिंग्स पढ़ना:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get `
  --channel s3
```

S3 के नीचे किसी खास उप-चैनल को पढ़ना:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get `
  --channel s3 `
  --channel-name "backup-s3"
```

WebDAV उप-चैनल बनाना या संपादित करना। पहले `--apply` के बिना चलाकर पूर्वावलोकन देखें:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --upsert `
  --channel webdav `
  --channel-name "backup-webdav" `
  --set enabled=false `
  --set remark="backup test"
```

सही लगे तो वही आदेश `--apply` के साथ चलाएँ:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --upsert `
  --channel webdav `
  --channel-name "backup-webdav" `
  --set enabled=false `
  --set remark="backup test" `
  --apply
```

उप-चैनल हटाना:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --delete `
  --channel webdav `
  --channel-name "backup-webdav" `
  --apply
```

S3 का भार संतुलन चालू करना:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --load-balance true `
  --channel s3 `
  --apply
```

कई जटिल फ़ील्ड बदलने हों तो पहले JSON फ़ाइल बनाकर `--patch-json` से दें:

```json
{
  "enabled": true,
  "remark": "primary account"
}
```

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --upsert `
  --channel s3 `
  --channel-name "primary-s3" `
  --patch-json ".\s3-channel.json" `
  --apply
```

## साइट की अन्य सेटिंग्स

साइट सेटिंग्स स्क्रिप्ट तीन क्षेत्रों को प्रबंधित करती है:

| क्षेत्र | `--area` मान | विवरण |
| --- | --- | --- |
| सुरक्षा सेटिंग्स | `security` | उपयोगकर्ता और व्यवस्थापक प्रमाणीकरण, लॉगिन डिवाइस, API Token, चित्र समीक्षा, उपयोगकर्ता दर सीमा, WebDAV |
| पृष्ठ सेटिंग्स | `page` | वैश्विक पृष्ठ, उपयोगकर्ता पृष्ठ, व्यवस्थापक पृष्ठ और दृश्य प्रभाव |
| अन्य सेटिंग्स | `others` | यादृच्छिक चित्र API, सार्वजनिक गैलरी, स्थानीय फ़ेडरेशन नोड, स्वचालित टैग, IP स्थान, बैकअप, OCR |

पहले समर्थित क्षेत्र, अनुभाग और फ़ील्ड देखें:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --list-sections
```

### साइट सेटिंग्स के पैरामीटर

| पैरामीटर | विवरण |
| --- | --- |
| `--list-sections` | संपादन योग्य क्षेत्र, अनुभाग और फ़ील्ड दिखाता है |
| `--get` | एक सेटिंग अनुभाग पढ़ता है |
| `--area <security\|page\|others>` | सेटिंग क्षेत्र चुनता है |
| `--section <name>` | अनुभाग चुनता है; नाम `--list-sections` के परिणाम जैसा दें |
| `--set key=value` | एक फ़ील्ड सेट करता है; बार-बार उपयोग किया जा सकता है |
| `--apply` | बदलाव सच में सहेजता है |

`page` क्षेत्र में `--set` पृष्ठ सेटिंग की आईडी लेता है, जैसे `starsEffect=true`। `security` और `others` क्षेत्रों में अनुभाग के फ़ील्ड का नाम दिया जाता है, जैसे `email=admin@example.com`।

### साइट सेटिंग्स के उदाहरण

सिस्टम अपडेट सूचना सेटिंग पढ़ना:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get `
  --area security `
  --section systemUpdate
```

सिस्टम अपडेट सूचना ईमेल बदलना। पहले `--apply` के बिना चलाएँ:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --area security `
  --section systemUpdate `
  --set email="admin@example.com"
```

फिर `--apply` के साथ सहेजें:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --area security `
  --section systemUpdate `
  --set email="admin@example.com" `
  --apply
```

व्यवस्थापक पृष्ठ का तारों वाला प्रभाव बदलना:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --area page `
  --section adminSettings `
  --set starsEffect=true `
  --apply
```

IP स्थान की भाषा बदलना:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --area others `
  --section ipGeolocation `
  --set language="en" `
  --apply
```

स्थानीय फ़ेडरेशन नोड के सामान्य फ़ील्ड, जैसे चालू स्थिति, सिंक फ़ोल्डर और निमंत्रण कोड, पढ़े या बदले जा सकते हैं। डोमेन पुष्टि API Token से नहीं होती। यदि प्रशासन पैनल बताए कि स्थानीय नोड का डोमेन वर्तमान पहुँच डोमेन से अलग है, तो पुष्टि ब्राउज़र में पूरी करें।

## फ़ेडरेशन संबंध

फ़ेडरेशन स्क्रिप्ट स्थानीय नोड की स्थिति, वे नोड जिनसे आप जुड़े हैं, वे नोड जो आपके नोड से जुड़े हैं, संदेश, जुड़ने के अनुरोध, बिना संबंध वाली स्थिति में फिर से अनुरोध, स्वीकार, अस्वीकार और ऐसे हल्के संबंध कार्य संभालती है जिन्हें सूचकांक सफ़ाई की ज़रूरत नहीं होती।

सूचकांक प्रकाशित करना, सूचकांक खींचना, सूचकांक को बैच में हटाना और डोमेन परिवर्तन की पुष्टि ब्राउज़र की पूरी प्रक्रिया पर निर्भर हैं। स्क्रिप्ट ये भारी काम नहीं करती।

### हल्के और भारी कार्यों की सीमा

| कार्य | स्क्रिप्ट समर्थन | विवरण |
| --- | --- | --- |
| स्थानीय नोड स्थिति और संबंध सूची देखना | समर्थित | केवल संबंध बही पढ़ता है |
| संदेश पढ़ना और भेजना | समर्थित | संबंध संदेश पढ़ता या लिखता है |
| दूसरे नोड से जुड़ने का अनुरोध | समर्थित | निमंत्रण लिंक से अनुरोध भेजता है |
| बिना संबंध वाले रिकॉर्ड पर फिर से अनुरोध | समर्थित | केवल `lastResult=none` वाली `outgoing` कार्ड के लिए; 6 अक्षर का निमंत्रण कोड चाहिए |
| प्रतीक्षारत `outgoing` अनुरोध रद्द करना | समर्थित | केवल प्रतीक्षारत अनुरोध रद्द करता है |
| `incoming` अनुरोध स्वीकार या अस्वीकार करना | समर्थित | आपके नोड पर आए अनुरोधों को संभालता है |
| स्वीकार किया गया `incoming` संबंध हटाना | समर्थित | आने वाले संबंध की बही बदलता है और दूसरी तरफ़ को सूचित करता है |
| अंतिम अवस्था वाला `incoming` रिकॉर्ड हटाना | समर्थित | अंतिम अवस्था वाला आने वाला रिकॉर्ड हटाता है |
| स्वीकार किया गया `outgoing` सदस्यता रद्द करना | केवल ब्राउज़र | स्थानीय फ़ेडरेशन सूचकांक सफ़ाई की ज़रूरत हो सकती है |
| अंतिम अवस्था वाला `outgoing` रिकॉर्ड हटाना | केवल ब्राउज़र | पहले सूचकांक सफ़ाई की ज़रूरत हो सकती है |
| डोमेन परिवर्तन की पुष्टि या रद्द करना | केवल ब्राउज़र | वर्तमान डोमेन पुष्टि और सूचकांक संबंध प्रबंधन चाहिए |
| सूचकांक प्रकाशित, खींचना या बैच में हटाना | केवल ब्राउज़र | वेब इंटरफ़ेस की बैच प्रक्रिया है |

### फ़ेडरेशन संबंधों के पैरामीटर

| पैरामीटर | विवरण |
| --- | --- |
| `--status` | स्थानीय फ़ेडरेशन नोड स्थिति, `outgoing` और `incoming` संबंध दिखाता है |
| `--list` | फ़ेडरेशन संबंधों की सूची दिखाता है |
| `--chat` | किसी संबंध के संग्रहित संदेश पढ़ता है |
| `--send-message` | स्थापित संबंध वाले नोड को संदेश भेजता है |
| `--join` | निमंत्रण लिंक से दूसरे नोड से जुड़ने का अनुरोध करता है |
| `--reapply` | बिना रिकॉर्ड वाले संबंध के लिए फिर से अनुरोध करता है; 6 अक्षर का कोड चाहिए |
| `--accept` | `incoming` अनुरोध स्वीकार करता है |
| `--deny` | `incoming` अनुरोध अस्वीकार करता है |
| `--cancel` | प्रतीक्षारत `outgoing` अनुरोध रद्द करता है या स्वीकार किया गया `incoming` संबंध हटाता है |
| `--delete` | अंतिम अवस्था वाला `incoming` रिकॉर्ड हटाता है |
| `--direction <outgoing\|incoming\|all>` | संबंध दिशा; `outgoing` वे नोड हैं जिनसे आप जुड़े हैं, `incoming` वे नोड हैं जो आपके नोड से जुड़े हैं |
| `--domain <url>` | संबंध नोड का डोमेन |
| `--invite-link <url>` | दूसरे नोड का निमंत्रण लिंक |
| `--invite-code <code>` | फिर से अनुरोध के लिए 6 अक्षर का निमंत्रण कोड |
| `--text <message>` | संदेश का पाठ |
| `--apply` | बदलाव सच में सहेजता है |

### फ़ेडरेशन संबंधों के उदाहरण

स्थानीय नोड स्थिति और दोनों संबंध सूचियाँ देखना:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --status
```

केवल वे नोड देखना जिनसे आप जुड़े हैं:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --list `
  --direction outgoing
```

केवल वे नोड देखना जो आपके नोड से जुड़े हैं:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --list `
  --direction incoming
```

निमंत्रण लिंक से जुड़ने का अनुरोध। पहले `--apply` के बिना चलाएँ:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --join `
  --invite-link "https://peer-domain/federation/invite/abcdef"
```

जाँच के बाद सहेजें:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --join `
  --invite-link "https://peer-domain/federation/invite/abcdef" `
  --apply
```

बिना संबंध वाले रिकॉर्ड पर फिर से अनुरोध:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --reapply `
  --domain "https://peer-domain" `
  --invite-code "abc123" `
  --apply
```

`incoming` अनुरोध स्वीकार करना:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --accept `
  --domain "https://peer-domain" `
  --apply
```

`incoming` अनुरोध अस्वीकार करना:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --deny `
  --domain "https://peer-domain" `
  --apply
```

स्थापित संबंध वाले नोड को संदेश भेजना:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --send-message `
  --direction outgoing `
  --domain "https://peer-domain" `
  --text "Hello, this is a test message." `
  --apply
```

प्रतीक्षारत `outgoing` अनुरोध रद्द करना:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --cancel `
  --direction outgoing `
  --domain "https://peer-domain" `
  --apply
```

स्वीकार किया गया `incoming` संबंध हटाना:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --cancel `
  --direction incoming `
  --domain "https://peer-domain" `
  --apply
```

अंतिम अवस्था वाला `incoming` रिकॉर्ड हटाना:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --delete `
  --direction incoming `
  --domain "https://peer-domain" `
  --apply
```

स्वीकार की गई `outgoing` सदस्यता रद्द करना और `outgoing` रिकॉर्ड हटाना ब्राउज़र के प्रशासन पैनल से करना चाहिए, क्योंकि पहले स्थानीय फ़ेडरेशन सूचकांक साफ़ करना पड़ सकता है।

### डोमेन मेल नहीं खाता

यदि स्थानीय नोड में सहेजा गया डोमेन संबंध में प्रतीक्षारत डोमेन से अलग है, तो स्क्रिप्ट तुरंत त्रुटि देती है और `currentDomain` तथा `pendingDomain` दिखाती है। यह स्थिति ब्राउज़र के प्रशासन पैनल में संभालनी चाहिए, क्योंकि डोमेन बदलने पर बाहर जाने वाले सूचकांक की सफ़ाई और पुष्टि भी जुड़ी होती है।

यदि जुड़ने का अनुरोध `FEDERATION_NODE_DOMAIN_MISMATCH` लौटाता है, तो निमंत्रण लिंक का डोमेन दूरस्थ नोड में सहेजे गए डोमेन से मेल नहीं खाता। जवाब में `currentOrigin` और `detectedOrigin` होंगे। दूसरे नोड के पुष्टि किए गए डोमेन का उपयोग करें या उससे ब्राउज़र के प्रशासन पैनल में डोमेन पुष्टि करवाएँ।

## सामान्य प्रश्न

### बदलाव का आदेश चलाने पर भी कुछ लागू नहीं हुआ

लिखने वाले आदेश डिफ़ॉल्ट रूप से केवल पूर्वावलोकन दिखाते हैं। पूर्वावलोकन जाँचने के बाद `--apply` जोड़ें।

### कौन से फ़ील्ड बदले जा सकते हैं

अपलोड सेटिंग्स के लिए पहले `--get` चलाकर मौजूदा उप-चैनल की संरचना देखें। सुरक्षा, पृष्ठ और अन्य सेटिंग्स के लिए `--list-sections` चलाकर अनुमत क्षेत्र, अनुभाग और फ़ील्ड देखें।

### परिणाम किसी दूसरे प्रोग्राम में उपयोग करना है

`--output json` या `--save-response result.json` उपयोग करें। प्रोग्राम सहेजी गई JSON फ़ाइल सीधे पढ़ सकता है।

