# Blog

Blog feature आपके ImgBed site में एक standalone blog page जोड़ता है।

Enable करने के बाद visitors यह खोल सकते हैं:

```text
https://your-domain.com/blog/
```

![Blog homepage](../../image/other/博客/博客首页.png)

Blog open-source [LyraVoid/Mizuki](https://github.com/LyraVoid/Mizuki) project से adapted है। ImgBed इसे rewrite करके Vue के साथ integrate करता है, ताकि यह image hosting site का हिस्सा बनकर चल सके।

## कहाँ सेट करें

Blog settings यहाँ हैं:

```text
System Settings -> Other Settings -> Blog
```

![Blog settings](../../image/other/博客/QQ20260611-221702.png)

## First-Time Setup

1. `Enable` on करें।
2. Blog configuration store करने के लिए GitHub account select करें।
3. `Update Blog` पर click करें।
4. Success message आने तक इंतज़ार करें।
5. Blog देखने के लिए `https://your-domain.com/blog/` खोलें।

पहली बार इस्तेमाल करते समय ImgBed selected account के तहत एक private GitHub repository तैयार करता है:

```text
imgbed-blog-config
```

यह repository blog settings और article content store करती है।

## Posts लिखना

Blog posts अपनी private GitHub repository में edit करें:

```text
imgbed-blog-config
```

Typical workflow:

1. GitHub खोलें।
2. Private `imgbed-blog-config` repository में जाएँ।
3. Post files edit या add करें।
4. Changes commit करें।
5. ImgBed admin panel पर लौटकर `Update Blog` click करें, या blog homepage के upper-left corner में logo पर तीन बार click करके blog update trigger करें।

`Update Blog` आपके लिखे हुए content को overwrite नहीं करता। यह ज़रूरत पड़ने पर repository initialize करता है और blog cache refresh करता है।

## Supported Features

Blog में post lists, categories, tags, archives, search, dark mode और language switching जैसी common blog features supported हैं।

Comments और visit statistics भी supported हैं।

![Blog comments](../../image/other/博客/支持留言.png)

Comments posts के नीचे दिखते हैं। Visitors avatar, nickname, email और comment content submit कर सकते हैं।

Visit statistics post views और site visits दिखाते हैं, जिससे blog traffic समझने में मदद मिलती है।

## URL

Blog हमेशा `/blog/` के तहत serve होता है।

उदाहरण के लिए, अगर आपका ImgBed domain है:

```text
https://image.example.com
```

तो blog URL होगा:

```text
https://image.example.com/blog/
```

Blog disabled होने के बाद visitors blog page access नहीं कर पाएँगे।
