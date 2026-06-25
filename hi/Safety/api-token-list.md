# API Token से सूची देखना और फ़िल्टर करना

API Token से सूची देखने वाली स्क्रिप्ट स्वचालन कार्यों और बाहरी प्रोग्रामों के लिए उपयुक्त है, जब ImgBed का डेटा पढ़ना हो। यह केवल `list` अनुमति उपयोग करती है। यह फ़ाइल अपलोड नहीं करती, फ़ाइल हटाती नहीं, कॉन्फ़िगरेशन नहीं बदलती, और किसी IP को अपलोड से न तो रोकती है न अनुमति देती है।

![API Token संपादित करें](../../image/Safety/apitoken/编辑列出权限api.png)

मुख्य उपयोग:

| कार्य | विवरण |
| --- | --- |
| फ़ाइल प्रबंधन सूची | प्रशासन पैनल की फ़ाइल सूची पढ़ती है और फ़ाइल प्रबंधन के उन्नत फ़िल्टर पैरामीटरों का समर्थन करती है |
| उपयोगकर्ता प्रबंधन सूची | उपयोगकर्ता/IP अपलोड आँकड़े पढ़ती है और उपयोगकर्ता प्रबंधन के फ़िल्टर पैरामीटरों का समर्थन करती है |
| अपलोड चैनल सूची | संवेदनशील जानकारी छिपाकर अपलोड चैनल, उप-चैनल, क्षमता और भार संतुलन जानकारी पढ़ती है |
| फ़ोल्डर आँकड़े तालिका | फ़ोल्डर आँकड़े और फ़ोल्डर पृष्ठ जानकारी पढ़ती है |

## तैयारी

प्रशासन पैनल में खोलें:

```text
System Settings -> Security Settings -> API Token
```

API Token बनाते या संपादित करते समय पक्का करें कि इस Token में सूची देखने की अनुमति है। इस स्क्रिप्ट को केवल `list` अनुमति चाहिए।

API Token को परिवेश चर में भी रखा जा सकता है:

```powershell
$env:IMGBED_API_TOKEN="your API Token"
```

## स्क्रिप्ट डाउनलोड करें

| स्क्रिप्ट | उपयोग |
| --- | --- |
| <a href="/tools/imgbed-token-list.mjs" download>सूची देखने और फ़िल्टर करने वाली स्क्रिप्ट डाउनलोड करें</a> | फ़ाइल प्रबंधन सूची, उपयोगकर्ता प्रबंधन सूची, अपलोड चैनल सूची और फ़ोल्डर आँकड़े तालिका |

स्क्रिप्ट चलाने के लिए स्थानीय मशीन पर Node.js 18 या उससे नया संस्करण चाहिए।

## सामान्य पैरामीटर

| पैरामीटर | आवश्यक | विवरण |
| --- | --- | --- |
| `--base-url <url>` | हाँ | ImgBed साइट का पता, जैसे `https://image.ai6.me` |
| `--token <token>` | हाँ | API Token; `IMGBED_API_TOKEN` परिवेश चर भी उपयोग कर सकते हैं |
| `--retries <n>` | नहीं | अस्थायी त्रुटि पर दोबारा प्रयासों की संख्या; डिफ़ॉल्ट `3` |
| `--timeout-ms <n>` | नहीं | एक अनुरोध की समयसीमा; डिफ़ॉल्ट `180000` |
| `--output <pretty\|json>` | नहीं | आउटपुट का रूप; डिफ़ॉल्ट `pretty`; प्रोग्राम से उपयोग के लिए `json` बेहतर है |
| `--save-response <path>` | नहीं | अंतिम परिणाम JSON फ़ाइल में सहेजता है |
| `-h` / `--help` | नहीं | स्क्रिप्ट की सहायता दिखाता है |

## फ़ाइल प्रबंधन सूची

फ़ाइल प्रबंधन में फ़ाइलें दिखाना:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --count 10
```

JSON आउटपुट:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --count 10 `
  --output json
```

मौजूदा फ़िल्टर शर्तों में केवल संख्या पढ़ना:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --file-summary `
  --dir "photos/2026" `
  --recursive
```

### फ़ाइल प्रबंधन पैरामीटर

| पैरामीटर | विवरण |
| --- | --- |
| `--files` | फ़ाइलें सूचीबद्ध करता है |
| `--file-summary` | केवल संख्या आँकड़ा पढ़ता है |
| `--start <n>` | पृष्ठांकन सरकाव |
| `--count <n>` | लौटाए जाने वाले रिकॉर्ड की संख्या |
| `--dir <path>` | निर्दिष्ट फ़ोल्डर |
| `--recursive` | उप-फ़ोल्डरों की फ़ाइलें भी शामिल करता है |
| `--search <text>` | खोज शब्द |
| `--channel <key>` | मुख्य अपलोड चैनल से फ़िल्टर, जैसे `github`, `s3`, `yandex` |
| `--channel-scope <primary\|backup\|all>` | चैनल फ़िल्टर की सीमा: मुख्य चैनल, बैकअप चैनल या सभी |
| `--channel-name-groups <value>` | उप-चैनल समूह फ़िल्टर; सर्वर के मौजूदा पैरामीटर के रूप में भेजा जाता है |
| `--list-type <csv>` | सूची प्रकार, आम तौर पर `None,White,Block` |
| `--include-tags <csv>` | ये टैग मौजूद होने चाहिए |
| `--exclude-tags <csv>` | ये टैग बाहर रखे जाते हैं |
| `--time-start <ms>` | अपलोड समय की शुरुआत, मिलीसेकंड टाइमस्टैम्प |
| `--time-end <ms>` | अपलोड समय का अंत, मिलीसेकंड टाइमस्टैम्प |
| `--file-exts <csv>` | केवल निर्दिष्ट एक्सटेंशन शामिल करता है, जैसे `jpg,png,pdf` |
| `--exclude-file-exts <csv>` | निर्दिष्ट एक्सटेंशन बाहर रखता है |
| `--file-status-categories <csv>` | फ़ाइल श्रेणियाँ: `image,audio,video,document,code,other` |
| `--upload-ip <ip>` | अपलोड IP के आरंभिक भाग से फ़िल्टर |
| `--age-ratings <csv>` | आयु रेटिंग: `none,all-ages,r12,r16,r18` |
| `--orientation <csv>` | दिशा फ़िल्टर; सर्वर के मौजूदा मानों के रूप में भेजा जाता है |
| `--read-source <csv>` | पढ़ने के स्रोत का फ़िल्टर; सर्वर के मौजूदा मानों के रूप में भेजा जाता है |
| `--access-status <normal\|blocked>` | सार्वजनिक पहुँच स्थिति |
| `--min-width <n>` | न्यूनतम चौड़ाई |
| `--max-width <n>` | अधिकतम चौड़ाई |
| `--min-height <n>` | न्यूनतम ऊँचाई |
| `--max-height <n>` | अधिकतम ऊँचाई |
| `--min-file-size <mb>` | न्यूनतम फ़ाइल आकार; सर्वर के मौजूदा MB पैरामीटर का उपयोग करता है |
| `--max-file-size <mb>` | अधिकतम फ़ाइल आकार; सर्वर के मौजूदा MB पैरामीटर का उपयोग करता है |

### फ़ाइल प्रबंधन उदाहरण

PDF खोजना:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --search "pdf" `
  --file-status-categories "document" `
  --count 20
```

अपलोड IP और चैनल से फ़िल्टर करना:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --upload-ip "103.62" `
  --channel yandex `
  --channel-scope primary
```

पूरा परिणाम सहेजना:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --count 100 `
  --output json `
  --save-response ".\files.json"
```

## उपयोगकर्ता प्रबंधन सूची

उपयोगकर्ता/IP अपलोड आँकड़े दिखाना:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --count 20
```

किसी IP या पते को खोजना:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --search "43.198.183.56"
```

किसी IP से अपलोड की गई फ़ाइलों का विवरण देखना:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --user-detail `
  --ip "43.198.183.56" `
  --count 20
```

अपलोड से रोके गए IP दिखाना:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --blocked-ips
```

### उपयोगकर्ता प्रबंधन पैरामीटर

| पैरामीटर | विवरण |
| --- | --- |
| `--users` | उपयोगकर्ता/IP अपलोड आँकड़े सूचीबद्ध करता है |
| `--user-detail` | किसी खास IP से अपलोड की गई फ़ाइलों का विवरण दिखाता है |
| `--blocked-ips` | अपलोड से रोके गए IP सूचीबद्ध करता है |
| `--ip <ip>` | `--user-detail` के साथ आवश्यक |
| `--start <n>` | पृष्ठांकन सरकाव |
| `--count <n>` | लौटाए जाने वाले रिकॉर्ड की संख्या |
| `--sort <value>` | क्रम: `timeDesc`, `timeAsc`, `countDesc`, `countAsc`, `totalSizeDesc`, `totalSizeAsc` |
| `--search <text>` | IP या पता खोजें |
| `--upload-status <allowed\|blocked>` | अपलोड की अनुमति है या नहीं |
| `--start-time <ms>` | आँकड़ों का प्रारंभ समय, मिलीसेकंड टाइमस्टैम्प |
| `--end-time <ms>` | आँकड़ों का अंत समय, मिलीसेकंड टाइमस्टैम्प |
| `--file-status-categories <csv>` | फ़ाइल श्रेणी फ़िल्टर |
| `--age-ratings <csv>` | आयु रेटिंग फ़िल्टर |
| `--min-file-size <mb>` | न्यूनतम फ़ाइल आकार |
| `--max-file-size <mb>` | अधिकतम फ़ाइल आकार |
| `--list-type <csv>` | सूची प्रकार, आम तौर पर `None,White,Block` |
| `--access-status <normal\|blocked>` | सार्वजनिक पहुँच स्थिति |

### उपयोगकर्ता प्रबंधन उदाहरण

अपलोड से रोके गए उपयोगकर्ता दिखाना:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --upload-status blocked
```

पते के शब्द से खोजना:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --search "Hong Kong"
```

अपलोड संख्या के अनुसार क्रमबद्ध करना:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --sort countDesc `
  --count 50
```

## अपलोड चैनल सूची

संवेदनशील जानकारी छिपाई गई अपलोड चैनल कॉन्फ़िगरेशन दिखाना:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --channels
```

लौटे हुए डेटा में शामिल होता है:

| फ़ील्ड | विवरण |
| --- | --- |
| `type` | मुख्य अपलोड चैनल का प्रकार, जैसे `github`, `s3`, `yandex` |
| `name` | उप-चैनल या खाते का नाम |
| `enabled` | चालू है या नहीं |
| `load_balance_enabled` | इस चैनल प्रकार के लिए भार संतुलन चालू है या नहीं |
| `quota_enabled` | क्षमता जाँच चालू है या नहीं |
| `quota_limit_bytes` | क्षमता सीमा |
| `quota_used_bytes` | उपयोग की गई क्षमता |
| `quota_checked_at` | क्षमता जाँच का समय |
| `tag_json` | गैर-संवेदनशील टैग, जैसे सार्वजनिक रिपॉज़िटरी या निजी रिपॉज़िटरी |
| `created_at` / `updated_at` | बनाने और अपडेट करने का समय |

यह इंटरफ़ेस गुप्त कुंजियाँ, रीफ़्रेश टोकन, अस्थायी टोकन, पासवर्ड या अन्य संवेदनशील कॉन्फ़िगरेशन वापस नहीं करता।

## फ़ोल्डर आँकड़े तालिका

फ़ोल्डर आँकड़े दिखाना:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --directories `
  --limit 20
```

पूरा फ़ोल्डर मार्ग दिखाना और उपसर्ग से खोजना:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --directories `
  --scope full `
  --search-prefix "test" `
  --include-parents `
  --limit 10
```

### फ़ोल्डर आँकड़ों के पैरामीटर

| पैरामीटर | विवरण |
| --- | --- |
| `--directories` | फ़ोल्डर आँकड़े तालिका सूचीबद्ध करता है |
| `--dir <path>` | सूची किस फ़ोल्डर से शुरू हो |
| `--scope <direct\|full>` | `direct` केवल सीधे अधीन फ़ोल्डर दिखाता है, `full` पूरा मार्ग दिखाता है |
| `--search-prefix <path>` | फ़ोल्डर उपसर्ग से खोज |
| `--include-parents` | `full` मोड में मूल फ़ोल्डरों को भी शामिल करता है |
| `--limit <n>` | लौटाए जाने वाले रिकॉर्ड की संख्या; सर्वर पर अधिकतम `100` |
| `--cursor <path>` | अगले पृष्ठ का कर्सर |

## आउटपुट रूप

डिफ़ॉल्ट `pretty` आउटपुट मनुष्यों के पढ़ने के लिए उपयुक्त है:

```powershell
node imgbed-token-list.mjs --base-url "https://your-domain" --token "your API Token" --users --count 5
```

अगर परिणाम को किसी दूसरे प्रोग्राम से संसाधित करना है, तो `--output json` उपयोग करें:

```powershell
node imgbed-token-list.mjs --base-url "https://your-domain" --token "your API Token" --users --count 5 --output json
```

पूरा परिणाम भी सहेजा जा सकता है:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --count 5 `
  --output json `
  --save-response ".\users.json"
```

## सामान्य प्रश्न

### क्या यह स्क्रिप्ट डेटा बदलती है?

नहीं। यह स्क्रिप्ट केवल पढ़ने वाले इंटरफ़ेस बुलाती है। यह अपलोड, हटाना, स्थानांतरण, कॉन्फ़िगरेशन संपादन या किसी IP को अपलोड से रोकने या अनुमति देने का काम नहीं करती।

### `list` अनुमति क्यों चाहिए?

फ़ाइल प्रबंधन सूची, उपयोगकर्ता प्रबंधन सूची, संवेदनशील जानकारी छिपाई गई चैनल सूचियाँ और फ़ोल्डर आँकड़े सभी पढ़ने की क्षमताएँ हैं, इसलिए API Token को केवल `list` अनुमति चाहिए।

### सभी उपलब्ध पैरामीटर कैसे देखें?

चलाएँ:

```powershell
node imgbed-token-list.mjs --help
```

स्क्रिप्ट सभी क्रियाएँ और पैरामीटर दिखाएगी।

