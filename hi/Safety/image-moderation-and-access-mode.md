# Image Moderation और Access Mode

Image moderation uploaded images को age rating देता है। Access mode तय करता है कि public access में कौन सी ratings दिख सकती हैं।

यह public gallery, public file URLs और random image API पर असर डालता है। Admin panel पर restriction नहीं लगती। Administrators सभी files देख और manage कर सकते हैं।

## कहाँ सेट करें

Admin panel खोलें, फिर यहाँ जाएँ:

```text
System Settings -> Security Settings -> Upload Management -> Image Moderation
```

मुख्य settings हैं:

- Access mode
- Enable moderation
- Moderation provider

## Access Mode क्या करता है

Access mode तय करता है कि कौन सी age ratings publicly दिख सकती हैं।

Current modes:

| Access Mode | Publicly Visible Ratings |
| --- | --- |
| Adult mode | General, R12, R16, R18 |
| Youth mode | General, R12, R16 |
| Teen mode | General, R12 |
| Child mode | केवल General |

Default `Adult mode` है।

Private sites या mature content वाली sites के लिए Adult mode ठीक हो सकता है। अगर public gallery ज़्यादा conservative रखनी है, तो Youth, Teen या Child mode चुनें।

## Moderation Enable करने पर क्या होता है

Moderation enabled होने पर ImgBed upload के दौरान selected moderation provider को call करता है और detected age rating save करता है।

मुख्य ratings:

| Rating | Meaning |
| --- | --- |
| General | Safe public content |
| R12 | हल्का sensitive content |
| R16 | मध्यम sensitive content |
| R18 | Adult content |

Public access तय करते समय moderation result इस्तेमाल होता है।

अगर moderation enabled नहीं है, या पुरानी files में rating नहीं है, तो वे files unrated मानी जाती हैं। सिर्फ rating न होने की वजह से unrated files public gallery या random image API से automatically नहीं हटतीं।

## Moderation Provider चुनना

Available providers में शामिल हैं:

- moderatecontent.com
- nsfwjs
- Sightengine

हर provider की requirements अलग होती हैं:

- moderatecontent.com को आम तौर पर API Key चाहिए।
- nsfwjs को आम तौर पर API endpoint URL चाहिए।
- Sightengine को API user और API secret चाहिए।

अपने account, availability और detection quality के हिसाब से provider चुनें। जब moderation enabled और सही तरह configured हो, ImgBed upload के दौरान image rating लिखने की कोशिश करता है।

## Public Gallery पर असर

Public gallery access mode के हिसाब से files filter करती है।

उदाहरण:

- Adult mode: R18 images दिख सकती हैं।
- Youth mode: R18 images छिप जाती हैं।
- Teen mode: R16 और R18 images छिप जाती हैं।
- Child mode: केवल General images दिखती हैं।

यह सिर्फ normal public access पर असर डालता है। Admin panel सभी files दिखाता रहेगा।

## Public File URLs पर असर

Public file URLs वे direct image links हैं जिन्हें visitors खोलते हैं।

अगर file rating current access mode में allowed है, तो ImgBed original image return करता है।

अगर rating allowed level से ऊपर है, तो normal public access original image return नहीं करता। इसके बजाय ImgBed configured blocked result या blocked fallback image return करता है।

उदाहरण:

- Current mode `Child mode` है।
- एक image की rating R18 है।
- Visitor public URL direct खोलता है।
- ImgBed उस visitor को R18 original image return नहीं करता।

![Restricted file image](../../image/Safety/文件受限图.png)

Admin panel में files देखने वाले administrators पर यह restriction लागू नहीं होती।

## Random Image API पर असर

Random image API भी access mode के हिसाब से candidate pool filter करता है।

Child mode में random images केवल General-rated files से चुनी जाती हैं।

Youth mode में random images General, R12 और R16 files से आ सकती हैं, लेकिन R18 files से नहीं।

इससे random image API public gallery restrictions bypass नहीं कर पाता।

## List Rules से संबंध

Access mode अकेला public access rule नहीं है। यह allow/block list rules के साथ मिलकर काम करता है।

सरल रूप में:

- Allowlisted content पहले public माना जाता है।
- Blocklisted content regular visitors द्वारा सीधे नहीं देखा जा सकता।
- जो content किसी भी list में नहीं है, उसे फिर access mode के हिसाब से check किया जाता है।

अगर कोई image age rating और list rules दोनों से restricted है, तो regular visitors original file direct नहीं देख पाएँगे।

## Recommended Settings

Public sites के लिए:

- Moderation enable करें।
- Site audience के हिसाब से access mode चुनें।
- All-age visitors के लिए Child mode या Teen mode इस्तेमाल करें।
- अगर mature content publicly नहीं दिखाना चाहते, तो Adult mode से बचें।
- Admin panel में file ratings review करें और ज़रूरत पड़ने पर manually adjust करें।

Private या personal sites के लिए:

- Adult mode आम तौर पर ठीक रहता है।
- उपयोगी लगे तो moderation enable करें।
- Admin panel में ratings review और adjust करते रहें।

## FAQ

### Access Mode बदलने के बाद क्या files Admin Panel से गायब हो जाएँगी?

नहीं।

Access mode केवल normal public access पर असर डालता है। Admin panel पर इसका असर नहीं होता।

### Child Mode पर switch करने के बाद Public Gallery में कम Images क्यों दिखीं?

Child mode केवल General-rated files को publicly दिखाता है। R12, R16 और R18 files filter हो जाती हैं।

### क्या Public URLs अभी भी Adult Images खोल सकते हैं?

अगर current access mode उस rating को allow नहीं करता, तो normal public URLs original image return नहीं करते।

### क्या Random Image API Restricted Images return कर सकता है?

नहीं।

Random image API current access mode के हिसाब से candidates filter करता है।

### पुरानी Unrated Images का क्या होगा?

Unrated images सिर्फ moderation result न होने की वजह से automatically hidden नहीं होतीं। आप बाद में admin panel में उनकी ratings adjust कर सकते हैं।
