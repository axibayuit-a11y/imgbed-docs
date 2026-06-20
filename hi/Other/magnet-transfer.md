# Magnet Transfer

Magnet transfer magnet link से files download करता है और उन्हें आपके चुने हुए cloud storage channel पर automatically upload कर देता है।

यह anime episodes, videos, archives और similar files transfer करने के लिए उपयोगी है। Magnet link paste करें, ImgBed background download task बनाता है। Download पूरा होने के बाद file ImgBed पर upload होती है और final link upload list में दिखता है।

![Magnet transfer](../../image/other/磁力链接/磁力链接.png)

## कहाँ इस्तेमाल करें

Magnet transfer entry homepage upload area में होती है।

Magnet link input box में paste करें, `Transfer` चुनें, फिर upload करें।

![Upload anime](../../image/other/磁力链接/上传番剧.png)

## पहली बार इस्तेमाल से पहले

पहले admin panel में magnet transfer configure करें।

आम तौर पर आपको चाहिए:

1. Download task चलाने के लिए GitHub account।
2. Cloud upload channel, जैसे Google Drive या OneDrive।
3. Target upload directory।
4. Task timeout।

Settings ready होने के बाद homepage पर लौटें और transfer शुरू करने के लिए magnet link paste करें।

## Magnet Link Upload करना

1. Homepage upload box में magnet link paste करें।
2. Confirm करें कि mode `Transfer` है।
3. Upload click करें।
4. ImgBed द्वारा magnet task create करने का इंतज़ार करें।
5. Task start होने के बाद progress देखने के लिए bottom-right corner वाला `Magnet Tasks` floating panel इस्तेमाल करें।

Download और upload में समय लग सकता है। Speed magnet resource, GitHub runtime environment और selected cloud storage channel पर depend करती है।

![Magnet downloading](../../image/other/磁力链接/磁力链接下载中.png)

## Completion के बाद

Task complete होने पर upload list file name और link दिखाती है।

Videos में video preview, images में image preview, और other files में regular file icon दिखता है।

![Downloaded video](../../image/other/磁力链接/下载好后的视频.png)

आप copy कर सकते हैं:

| Link Type | Use Case |
| --- | --- |
| Original link | Direct file access |
| Markdown | Markdown posts या notes |
| HTML | Web page code |
| BBCode | BBCode support करने वाले forums |

## Magnet Task Panel

Bottom-right magnet task panel task count, task name, progress और final status दिखाता है।

Common states:

| Status | Meaning |
| --- | --- |
| Waiting | Task created है और run होने का इंतज़ार कर रहा है। |
| Downloading | Magnet resource download हो रहा है। |
| Uploading | File download हो चुकी है और cloud storage पर upload हो रही है। |
| Completed | Upload successful है और link copy किया जा सकता है। |
| Failed | Task successful finish नहीं हुआ। Message check करें और फिर कोशिश करें। |

## Tips

- अगर magnet link में multiple files हैं, तो ImgBed display के लिए मुख्य completed file को priority देता है।
- Large files में ज़्यादा समय लगेगा। Page refresh करने से पहले task finish होने दें।
- अगर magnet resource के available peers नहीं हैं, तो download बहुत slow हो सकता है या fail हो सकता है।
- Cloud account quota खत्म हो, authorization expired हो, या upload directory गलत हो, तो task fail हो सकता है।
- Upload complete होने के बाद video preview दिखने में कुछ seconds लग सकते हैं।

## FAQ

### Magnet Link paste करने के बाद कुछ start नहीं हो रहा

Confirm करें कि admin panel में magnet transfer enabled है और usable GitHub account तथा cloud channel selected हैं।

### Download हमेशा slow है

Magnet speed resource पर depend करती है। अगर available peers नहीं हैं, तो download बहुत slow या impossible हो सकता है।

### Upload के बाद Preview नहीं दिख रहा

पहले confirm करें कि file link खुल रहा है। Video files को browser में load होने में थोड़ा समय लग सकता है, या आप link direct खोल सकते हैं।

### Task fail हो तो क्या check करें?

Magnet link valid है या नहीं, cloud channel काम कर रहा है या नहीं, और upload directory सही है या नहीं, यह check करें। फिर task दोबारा submit करें।
