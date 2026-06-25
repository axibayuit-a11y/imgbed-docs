# API Token से फ़ाइल प्रबंधन

API Token से फ़ाइल प्रबंधन स्क्रिप्टों, स्वचालित कार्यों और बाहरी प्रबंधन पैनलों के लिए है। यह `manage` अनुमति का उपयोग करता है, जिससे प्रशासन पैनल खोले बिना फ़ाइल जानकारी संपादित की जा सकती है, फ़ाइलें स्थानांतरित या नाम बदली जा सकती हैं, निर्देशिका placeholder फ़ाइल बनाई जा सकती है, फ़ाइल टैग और सूची स्थिति बदली जा सकती है, किसी अपलोड IP को बंद या फिर से चालू किया जा सकता है, और अल्पकालिक अपलोड Token बनाए या हटाए जा सकते हैं।

यह स्क्रिप्ट केवल फ़ाइल प्रबंधन और उपयोगकर्ता प्रबंधन के हल्के प्रशासनिक कार्य संभालती है। अपलोड, सूचीकरण, हटाना, अपलोड सेटिंग्स, साइट सेटिंग्स और फ़ेडरेशन संबंधों के लिए अब भी उनके अपने समर्पित स्क्रिप्ट उपयोग किए जाते हैं।

![API Token संपादित करें](../../image/Safety/apitoken/编辑管理权限api.png)

## तैयारी

प्रशासन पैनल में जाने के बाद खोलें:

System Settings → Security Settings → API Token

API Token बनाते या संपादित करते समय पुष्टि करें कि इस Token को प्रबंधन की अनुमति मिली है। `manage` अनुमति फ़ाइल स्थिति, उपयोगकर्ता अपलोड स्थिति और अल्पकालिक अपलोड Token बदल सकती है, इसलिए इसे केवल भरोसेमंद स्क्रिप्टों या भरोसेमंद उपयोगकर्ताओं को दें।

फ़ाइल प्रबंधन स्क्रिप्ट में लिखने वाले कार्य डिफ़ॉल्ट रूप से पूर्वावलोकन मोड में चलते हैं और सच में सहेजे नहीं जाते। पूर्वावलोकन सही होने की पुष्टि करने के बाद `--apply` जोड़ें, तभी लिखना होगा।

Token को परिवेश चर में भी रखा जा सकता है:

```powershell
$env:IMGBED_API_TOKEN="your API Token"
```

## स्क्रिप्ट डाउनलोड करें

| स्क्रिप्ट | उपयोग |
| --- | --- |
| <a href="/tools/imgbed-token-manage.mjs" download>फ़ाइल प्रबंधन स्क्रिप्ट</a> | फ़ाइल metadata, moderation labels, फ़ाइल टैग, सूची स्थिति, स्थानांतरण, नाम बदलना, फ़ोल्डर बनाना, IP बंद/बहाल करना, अल्पकालिक अपलोड Token बनाना और हटाना |

स्क्रिप्ट चलाने के लिए स्थानीय मशीन पर Node.js 18 या उससे नया संस्करण चाहिए।

## क्षमता की सीमाएँ

| क्षमता | स्क्रिप्ट | अनुमति |
| --- | --- | --- |
| फ़ाइल अपलोड करना | `imgbed-token-single-upload.mjs` / `imgbed-token-chunk-upload.mjs` | `upload` |
| फ़ाइलें सूचीबद्ध करना, फ़ाइलें छाँटना, उपयोगकर्ता आँकड़े पढ़ना | `imgbed-token-list.mjs` | `list` |
| स्पष्ट रूप से दी गई फ़ाइलें हटाना | `imgbed-token-delete.mjs` | `delete` |
| फ़ाइल जानकारी, टैग, सूचियाँ, स्थानांतरण, नाम बदलना, फ़ोल्डर बनाना, IP बंद करना, अल्पकालिक अपलोड Token बनाना या हटाना | `imgbed-token-manage.mjs` | `manage` |
| अपलोड चैनल, सुरक्षा सेटिंग्स, पृष्ठ सेटिंग्स, अन्य सेटिंग्स और फ़ेडरेशन संबंध संपादित करना | कॉन्फ़िगरेशन प्रबंधन से जुड़ी स्क्रिप्टें | `manage` |

`imgbed-token-manage.mjs` फ़ाइल अपलोड नहीं करता, फ़ाइलें सूचीबद्ध नहीं करता और फ़ाइलें हटाता नहीं है। जब `fileId` ढूँढना हो, पहले सूचीकरण स्क्रिप्ट से फ़ाइलें छाँटें; जब फ़ाइल हटानी हो, स्पष्ट `fileId` हटाने वाली स्क्रिप्ट को दें।

## सामान्य पैरामीटर

| पैरामीटर | आवश्यक | विवरण |
| --- | --- | --- |
| `--base-url <url>` | हाँ | ImgBed साइट का पता, जैसे `https://image.ai6.me` |
| `--token <token>` | हाँ | API Token; `IMGBED_API_TOKEN` परिवेश चर भी उपयोग किया जा सकता है |
| `--retries <n>` | नहीं | अस्थायी विफलता पर दोबारा प्रयासों की संख्या; डिफ़ॉल्ट `3` |
| `--timeout-ms <n>` | नहीं | एक अनुरोध की समयसीमा; डिफ़ॉल्ट `180000` |
| `--output <pretty\|json>` | नहीं | आउटपुट स्वरूप; डिफ़ॉल्ट `pretty` है। प्रोग्राम से उपयोग के लिए `json` बेहतर है |
| `--save-response <path>` | नहीं | अंतिम परिणाम JSON फ़ाइल में सहेजता है |
| `--batch-size <n>` | नहीं | बैच कार्यों में हर अनुरोध द्वारा संभाली जाने वाली संख्या; डिफ़ॉल्ट `15`, अधिकतम `15` |
| `--apply` | नहीं | सच में लिखता है; इसके बिना केवल पूर्वावलोकन होता है |
| `-h` / `--help` | नहीं | स्क्रिप्ट सहायता दिखाता है |

## पहले fileId की पुष्टि करें

फ़ाइल प्रबंधन स्क्रिप्ट के अधिकांश कार्यों के लिए `fileId` चाहिए। पहले सूचीकरण स्क्रिप्ट से पूछताछ कर सकते हैं:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --dir "test4" `
  --count 10 `
  --output json
```

लौटे हुए परिणाम में `name` सामान्यतः वही `fileId` होता है जिसे फ़ाइल प्रबंधन स्क्रिप्ट को दिया जा सकता है।

## फ़ाइल metadata

फ़ाइल metadata का उपयोग प्रशासन पैनल के फ़ाइल प्रबंधन में दिखने वाले फ़ाइल नाम और पढ़ने के स्रोत को बदलने के लिए किया जाता है।

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-metadata `
  --file-id "photos/2026/a.jpg" `
  --file-name "cover.jpg" `
  --read-source backup
```

पूर्वावलोकन सही होने के बाद सहेजें:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-metadata `
  --file-id "photos/2026/a.jpg" `
  --file-name "cover.jpg" `
  --read-source backup `
  --apply
```

### फ़ाइल metadata पैरामीटर

| पैरामीटर | विवरण |
| --- | --- |
| `--set-metadata` | एक फ़ाइल का metadata बदलता है |
| `--file-id <id>` | जिस फ़ाइल को बदलना है उसका ID |
| `--file-name <name>` | प्रशासन पैनल में दिखने वाला नया नाम |
| `--read-source <primary\|backup>` | पढ़ने का स्रोत; `primary` मुख्य स्रोत है और `backup` बैकअप स्रोत |

`--file-name` और `--read-source` में से कम से कम एक देना आवश्यक है।

## moderation labels

moderation labels फ़ाइल की आयु-श्रेणी से जुड़े होते हैं। पहले मौजूदा label पढ़ा जा सकता है, फिर उसे बदला जा सकता है।

moderation label पढ़ें:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-label `
  --file-id "photos/2026/a.jpg"
```

moderation label सेट करें:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-label `
  --file-id "photos/2026/a.jpg" `
  --label r12 `
  --apply
```

### moderation label पैरामीटर

| पैरामीटर | विवरण |
| --- | --- |
| `--get-label` | एक फ़ाइल का moderation label पढ़ता है |
| `--set-label` | एक फ़ाइल का moderation label बदलता है |
| `--file-id <id>` | फ़ाइल ID |
| `--label <value>` | label value: `all-ages`, `r12`, `r16`, `r18`, `None` |

## फ़ाइल टैग

फ़ाइल टैग फ़ाइलों में खोजे जा सकने वाले कार्य-टैग जोड़ने के लिए उपयोग होते हैं। स्क्रिप्ट पढ़ना, बदलना, जोड़ना और हटाना समर्थन करती है, और कई फ़ाइलों को बैच में भी संभाल सकती है।

फ़ाइल टैग पढ़ें:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-tags `
  --file-id "photos/2026/a.jpg"
```

टैग जोड़ें:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --add-tags `
  --file-id "photos/2026/a.jpg" `
  --tag "cover" `
  --tag "2026" `
  --apply
```

टैग हटाएँ:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --remove-tags `
  --file-id "photos/2026/a.jpg" `
  --tag "cover" `
  --apply
```

टैग बदलें:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-tags `
  --file-id "photos/2026/a.jpg" `
  --tag "archive" `
  --tag "public" `
  --apply
```

बैच में टैग जोड़ें:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --batch-tags `
  --file-id "photos/2026/a.jpg" `
  --file-id "photos/2026/b.jpg" `
  --tag-action add `
  --tag "batch-test" `
  --apply
```

### फ़ाइल टैग पैरामीटर

| पैरामीटर | विवरण |
| --- | --- |
| `--get-tags` | एक फ़ाइल के टैग पढ़ता है |
| `--set-tags` | एक फ़ाइल के टैग बदल देता है |
| `--add-tags` | एक फ़ाइल में टैग जोड़ता है |
| `--remove-tags` | एक फ़ाइल से टैग हटाता है |
| `--batch-tags` | बैच में टैग सेट, जोड़ या हटाता है |
| `--file-id <id>` | फ़ाइल ID; बैच कार्यों में कई बार दिया जा सकता है |
| `--tag <tag>` | टैग का मान; कई बार दिया जा सकता है |
| `--tags-json <path>` | JSON फ़ाइल से टैग array पढ़ता है |
| `--tag-action <set\|add\|remove>` | बैच टैग क्रिया |

`--tags-json` फ़ाइल की सामग्री का उदाहरण:

```json
["cover", "2026", "public"]
```

## काली और सफ़ेद सूची की स्थिति

सूची स्थिति सार्वजनिक पहुँच मोड में फ़ाइल के पहुँच-नियंत्रण व्यवहार को तय करती है। इसे एक फ़ाइल के लिए भी बदला जा सकता है और बैच में भी।

एक फ़ाइल को सफ़ेद सूची में रखें:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-list-type `
  --file-id "photos/2026/a.jpg" `
  --list-type White `
  --apply
```

बैच में काली सूची में जोड़ें:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --batch-list-type `
  --file-id "photos/2026/a.jpg" `
  --file-id "photos/2026/b.jpg" `
  --list-type Block `
  --apply
```

डिफ़ॉल्ट सूची स्थिति वापस लाएँ:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-list-type `
  --file-id "photos/2026/a.jpg" `
  --list-type None `
  --apply
```

### काली और सफ़ेद सूची पैरामीटर

| पैरामीटर | विवरण |
| --- | --- |
| `--set-list-type` | एक फ़ाइल की सूची स्थिति बदलता है |
| `--batch-list-type` | फ़ाइलों की सूची स्थिति बैच में बदलता है; एक अनुरोध में अधिकतम `15` फ़ाइलें |
| `--file-id <id>` | फ़ाइल ID; बैच कार्यों में कई बार दिया जा सकता है |
| `--list-type <None\|White\|Block>` | `None` डिफ़ॉल्ट स्थिति है, `White` सफ़ेद सूची है, और `Block` काली सूची है |

## फ़ाइलें स्थानांतरित करना

स्थानांतरण एक या अधिक फ़ाइलों को लक्ष्य निर्देशिका में ले जाता है। backend एक अनुरोध में अधिकतम `15` फ़ाइलें संभालता है, और स्क्रिप्ट `--batch-size` के अनुसार कार्य को कई अनुरोधों में बाँटकर क्रम से चलाती है।

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --move `
  --file-id "photos/2026/a.jpg" `
  --file-id "photos/2026/b.jpg" `
  --target-path "archive/2026" `
  --apply
```

### स्थानांतरण पैरामीटर

| पैरामीटर | विवरण |
| --- | --- |
| `--move` | फ़ाइलें स्थानांतरित करता है |
| `--file-id <id>` | स्थानांतरित की जाने वाली फ़ाइल ID; कई बार दी जा सकती है |
| `--target-path <dir>` | लक्ष्य निर्देशिका |
| `--batch-size <n>` | हर अनुरोध में स्थानांतरित फ़ाइलों की संख्या; डिफ़ॉल्ट `15`, अधिकतम `15` |

## नाम बदलना या पथ बदलना

नाम बदलना स्पष्ट पुराने फ़ाइल ID और नए फ़ाइल ID से किया जाता है। नया फ़ाइल ID केवल फ़ाइल नाम बदल सकता है, या साथ में निर्देशिका भी बदल सकता है।

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --rename `
  --old-file-id "photos/2026/a.jpg" `
  --new-file-id "photos/2026/a-renamed.jpg" `
  --apply
```

बैच नाम बदलने के लिए `--old-file-id` और `--new-file-id` को कई बार दें:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --rename `
  --old-file-id "photos/2026/a.jpg" `
  --new-file-id "archive/2026/a.jpg" `
  --old-file-id "photos/2026/b.jpg" `
  --new-file-id "archive/2026/b.jpg" `
  --apply
```

mapping को JSON फ़ाइल में भी लिखा जा सकता है:

```json
[
  {
    "oldFileId": "photos/2026/a.jpg",
    "newFileId": "archive/2026/a.jpg"
  },
  {
    "oldFileId": "photos/2026/b.jpg",
    "newFileId": "archive/2026/b.jpg"
  }
]
```

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --rename `
  --items-json ".\rename-items.json" `
  --apply
```

### नाम बदलने के पैरामीटर

| पैरामीटर | विवरण |
| --- | --- |
| `--rename` | स्पष्ट mapping के आधार पर नाम या पथ बदलता है |
| `--old-file-id <id>` | मूल फ़ाइल ID; कई बार दी जा सकती है |
| `--new-file-id <id>` | नई फ़ाइल ID; कई बार दी जा सकती है, संख्या `--old-file-id` के बराबर होनी चाहिए |
| `--items-json <path>` | JSON array; हर item `{ "oldFileId": "...", "newFileId": "..." }` रूप में होता है |
| `--batch-size <n>` | हर अनुरोध में नाम बदलने वाले items की संख्या; डिफ़ॉल्ट `15`, अधिकतम `15` |

## फ़ोल्डर बनाना

ImgBed में निर्देशिकाएँ फ़ाइल पथों से बनती हैं; असली खाली निर्देशिका नहीं होती। फ़ोल्डर बनाते समय स्क्रिप्ट लक्ष्य निर्देशिका में `0.md` नाम की placeholder फ़ाइल बनाती है, ताकि वह निर्देशिका फ़ाइल प्रबंधन और निर्देशिका आँकड़ों में दिखाई दे।

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --create-folder `
  --parent-directory "photos" `
  --folder-name "2026" `
  --apply
```

### फ़ोल्डर बनाने के पैरामीटर

| पैरामीटर | विवरण |
| --- | --- |
| `--create-folder` | निर्देशिका placeholder फ़ाइल बनाता है |
| `--parent-directory <dir>` | मूल निर्देशिका; root निर्देशिका के लिए खाली string दी जा सकती है |
| `--folder-name <name>` | नए फ़ोल्डर का नाम |

## अपलोड IP बंद और बहाल करना

प्रबंधन अनुमति से किसी IP को अपलोड रोक सूची में जोड़ा जा सकता है, और उसे उस सूची से हटाया भी जा सकता है। यह कार्य उस IP के आगे के अपलोड पर असर डालता है; उस IP से पहले अपलोड की गई फ़ाइलें नहीं हटाता।

किसी अपलोड IP को बंद करें:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --block-ip "67.159.48.149" `
  --apply
```

किसी अपलोड IP को बहाल करें:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --allow-ip "67.159.48.149" `
  --apply
```

मौजूदा बंद अपलोड IP सूची देखें:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --blocked-ips
```

### IP प्रबंधन पैरामीटर

| पैरामीटर | विवरण |
| --- | --- |
| `--block-ip <ip>` | अपलोड रोक सूची में जोड़ता है |
| `--allow-ip <ip>` | अपलोड रोक सूची से हटाता है |

## अल्पकालिक अपलोड Token बनाना और हटाना

प्रबंधन अनुमति अल्पकालिक, केवल-अपलोड Token बना सकती है। इस Token में हमेशा केवल `upload` अनुमति होती है, `autoDelete` हमेशा `true` रहता है, और अधिकतम समाप्ति समय `1` दिन है।

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --create-upload-token `
  --name "Temporary Upload Token" `
  --owner "upload-bot" `
  --default-upload-channel telegram `
  --expires-in-minutes 20 `
  --apply `
  --output json
```

मिलीसेकंड timestamp सीधे भी दिया जा सकता है:

```powershell
$expiresAt = [DateTimeOffset]::UtcNow.AddHours(12).ToUnixTimeMilliseconds()

node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --create-upload-token `
  --name "Upload Token valid for one day" `
  --owner "upload-bot" `
  --default-upload-channel telegram `
  --expires-at $expiresAt `
  --apply
```

अल्पकालिक अपलोड Token हटाते समय निर्माण API से लौटा `id` देना होगा। प्रबंधन Token केवल उन Token को हटा सकता है जो ये शर्तें पूरी करते हैं:

| शर्त | आवश्यकता |
| --- | --- |
| अनुमति | `permissions` केवल `upload` हो |
| स्वचालित हटाना | `autoDelete=true` |
| वैधता अवधि | `expiresAt - createdAt <= 24` घंटे |

अल्पकालिक अपलोड Token हटाएँ:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --delete-upload-token `
  --token-id "mqt4jqokc85be80d1f0f47078e848a77d6c1aa6e" `
  --apply
```

प्रबंधन Token सामान्य Token, दीर्घकालिक Token, `list` / `delete` / `manage` अनुमतियों वाले Token, या `1` दिन से अधिक वैधता वाले अपलोड Token नहीं हटा सकता। ऐसे Token अब भी ब्राउज़र के प्रशासन पैनल में संभालने होंगे।

### अल्पकालिक अपलोड Token पैरामीटर

| पैरामीटर | विवरण |
| --- | --- |
| `--create-upload-token` | अल्पकालिक, केवल-अपलोड Token बनाता है |
| `--delete-upload-token` | शर्तें पूरी करने वाला अल्पकालिक केवल-अपलोड Token हटाता है |
| `--name <name>` | Token का नाम |
| `--owner <owner>` | Token के स्वामित्व का विवरण |
| `--default-upload-channel <key>` | डिफ़ॉल्ट अपलोड चैनल; वास्तविक चैनल होना चाहिए, जैसे `telegram`, `s3`, `github` |
| `--expires-in-minutes <n>` | वर्तमान समय से समाप्ति तक मिनट; अधिकतम `1440` |
| `--expires-at <ms>` | मिलीसेकंड timestamp में पूर्ण समाप्ति समय; वर्तमान समय से अधिकतम `24` घंटे |
| `--token-id <id>` | हटाए जाने वाले अल्पकालिक अपलोड Token का ID |

अल्पकालिक अपलोड Token केवल अपलोड कर सकता है। परीक्षण में, `permissions=["upload"]` वाले अल्पकालिक Token से सूचीकरण, फ़ाइल प्रबंधन और हटाने वाले API तक पहुँच अस्वीकार हुई।

समाप्ति के बाद, `autoDelete=true` वाले Token तब साफ़ होते हैं जब backend उन्हें जाँचकर समाप्त पाता है। API Token सूची पढ़ने पर भी समाप्त हो चुके स्वचालित-हटाने वाले Token साफ़ हो जाते हैं।

## API मिलान

| कार्य | विधि | API |
| --- | --- | --- |
| फ़ाइल metadata बदलना | `PATCH` | `/api/manage/metadata/{fileId}` |
| moderation label पढ़ना | `GET` | `/api/manage/label/{fileId}` |
| moderation label बदलना | `POST` | `/api/manage/label/{fileId}` |
| फ़ाइल टैग पढ़ना | `GET` | `/api/manage/tags/{fileId}` |
| फ़ाइल टैग बदलना | `POST` | `/api/manage/tags/{fileId}` |
| फ़ाइल टैग बैच में बदलना | `POST` | `/api/manage/tags/batch` |
| सूची स्थिति बदलना | `POST` | `/api/manage/listType/{fileId}` |
| सूची स्थिति बैच में बदलना | `POST` | `/api/manage/listType/batch` |
| स्थानांतरण या नाम बदलना | `POST` | `/api/manage/relocate/batch` |
| फ़ोल्डर बनाना | `POST` | `/api/manage/folder/create` |
| अपलोड IP बंद करना | `POST` | `/api/manage/cusConfig/blockip` |
| अपलोड IP बहाल करना | `POST` | `/api/manage/cusConfig/whiteip` |
| अल्पकालिक अपलोड Token बनाना | `POST` | `/api/manage/apiTokens` |
| अल्पकालिक अपलोड Token हटाना | `DELETE` | `/api/manage/apiTokens?id={tokenId}` |

स्क्रिप्ट अपने आप यह जोड़ती है:

```text
Authorization: Bearer your API Token
```

## आउटपुट स्वरूप

डिफ़ॉल्ट `pretty` आउटपुट इंसान द्वारा पढ़ने के लिए उपयुक्त है। यदि परिणाम किसी अन्य प्रोग्राम को देना हो, तो `--output json` उपयोग करें:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-tags `
  --file-id "photos/2026/a.jpg" `
  --output json
```

पूरा परिणाम भी सहेजा जा सकता है:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-tags `
  --file-id "photos/2026/a.jpg" `
  --output json `
  --save-response ".\manage-result.json"
```

बैच स्थानांतरण, बैच नाम बदलना और बैच सूची कार्य backend से लौटने वाली NDJSON progress stream को पढ़ते हैं और event count, completion status तथा failure details का सार देते हैं।

## सामान्य प्रश्न

### आदेश चलाने के बाद बदलाव क्यों नहीं हुआ?

लिखने वाले कार्य डिफ़ॉल्ट रूप से पूर्वावलोकन मोड में होते हैं। पूर्वावलोकन सही होने की पुष्टि के बाद `--apply` जोड़ें, तभी बदलाव सच में सहेजा जाएगा।

### क्या यह स्क्रिप्ट फ़ाइल अपलोड, सूचीबद्ध या हटाती है?

नहीं। अपलोड के लिए अपलोड स्क्रिप्ट, सूचीकरण और छँटाई के लिए सूचीकरण स्क्रिप्ट, और स्पष्ट फ़ाइल हटाने के लिए हटाने वाली स्क्रिप्ट उपयोग करें। फ़ाइल प्रबंधन स्क्रिप्ट केवल `manage` अनुमति के अंतर्गत हल्के प्रशासनिक कार्य करती है।

### कौन सा fileId देना है, यह कैसे पता चले?

पहले `imgbed-token-list.mjs --files` से फ़ाइलें खोजें। लौटे हुए परिणाम में `name` सामान्यतः फ़ाइल ID होता है, यानी वही मान जो यहाँ `--file-id` में दिया जाता है।

### एक बैच कार्य में अधिकतम कितनी फ़ाइलें हो सकती हैं?

backend एक अनुरोध में अधिकतम `15` फ़ाइलें संभालता है। स्क्रिप्ट का डिफ़ॉल्ट `--batch-size 15` है; इससे छोटा मान देने पर स्क्रिप्ट उसी संख्या के आधार पर कार्य को कई क्रमिक अनुरोधों में बाँट देती है।

### क्या सचमुच खाली फ़ोल्डर बनाया जा सकता है?

ImgBed में निर्देशिकाएँ फ़ाइल पथों से निकाली जाती हैं, इसलिए असली खाली निर्देशिका नहीं होती। `--create-folder` `0.md` नाम की placeholder फ़ाइल बनाता है, जिससे वह निर्देशिका फ़ाइल प्रबंधन और निर्देशिका आँकड़ों में दिखाई देती है।

### अल्पकालिक अपलोड Token अधिकतम कितनी देर चलता है?

अधिकतम `1` दिन, यानी `1440` मिनट। इससे अधिक समय देने पर स्क्रिप्ट स्थानीय रूप से अस्वीकार कर देगी; backend भी `API_TOKEN_MANAGE_CREATE_EXPIRES_AT_TOO_LONG` लौटाएगा।

### क्या अल्पकालिक अपलोड Token समाप्त होने के बाद अपने आप हट जाता है?

यह अपने आप साफ़ होता है, लेकिन तुरंत चलने वाले निर्धारित कार्य से नहीं। समाप्त Token दोबारा जाँचे जाने पर साफ़ होता है; API Token सूची पढ़ने पर भी `autoDelete=true` वाले समाप्त Token साफ़ हो जाते हैं।
