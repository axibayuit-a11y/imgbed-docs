# User Rate Limits

User rate limits यह control करते हैं कि regular users या visitors homepage से कितनी बार files upload कर सकते हैं। इससे public upload pages के misuse को रोकने में मदद मिलती है।

यह feature केवल homepage uploads पर लागू होता है। Admin uploads और API Tokens से किए गए uploads पर user rate limits लागू नहीं होते।

## कहाँ सेट करें

Admin panel खोलें, फिर यहाँ जाएँ:

```text
System Settings -> Security Settings -> Upload Management -> User Rate Limits
```

![User rate limit settings](../../image/other/用户频控截图.png)

## Rate Limits Enable करना

`Enable Rate Limits` चालू करने के बाद ImgBed uploader IP address के आधार पर recent uploads track करता है।

Default values:

| Setting | Default | Description |
| --- | --- | --- |
| Detection window | 1.5 hours | कितने समय पीछे तक upload records count होंगे। |
| Max file count | 20 | Detection window में allowed maximum file count। |
| Single file size limit | 20 MB | एक file का maximum size। |
| Total upload size limit | 200 MB | Detection window में maximum total upload size। |

उदाहरण के लिए, 1.5 hour window, 20 files, 20 MB per file और 200 MB total के साथ, same IP से uploads तब block हो जाएँगे जब कोई भी configured limit cross हो जाए।

## File Types Exclude करना

`Excluded upload file types` regular users या visitors को selected file categories upload करने से रोकता है।

Available categories:

| Type | Description |
| --- | --- |
| Images | jpg, png, webp, gif जैसी image files |
| Videos | mp4, webm, mov जैसी video files |
| Audio | mp3, flac, wav जैसी audio files |
| Documents | pdf, txt, md, docx जैसी document files |
| Other | ऊपर की categories से बाहर की files, जैसे zip, rar, exe, apk |

Default में कोई type selected नहीं होता, यानी वह allowed है।

किसी type पर click करने से वह highlight होता है, जिसका मतलब है कि वह type blocked है।

अगर `Other` selected है, तो zip या rar files upload करने वाले visitors block होंगे और उन्हें बताया जाएगा कि यह file type supported नहीं है।

## Block Messages

Limit trigger होने पर users को matching message दिखता है:

![Too frequent upload message](../../image/other/频繁报错提示.png)

| Scenario | Message Meaning |
| --- | --- |
| Single file too large | File बहुत बड़ी है, upload से पहले compress करें। |
| File type blocked | यह file type supported नहीं है। इसे हटाएँ और फिर कोशिश करें। |
| Uploads too frequent | Recent uploads बहुत frequent हैं, retry time दिखेगा। |
| Total size too high | Recent total upload size बहुत अधिक है, retry time दिखेगा। |

## कब Enable करें

अगर आपका upload homepage publicly accessible है, तो user rate limits enable करें।

Common reasons:

- आपको scripted bulk uploads की चिंता है।
- आप बड़े visitor uploads limit करना चाहते हैं।
- आप चाहते हैं कि regular users केवल images upload करें, archives या installers नहीं।
- आप public upload को available रखना चाहते हैं, लेकिन resource usage control में रखना चाहते हैं।

अगर site केवल आपके लिए है, या केवल administrators upload कर सकते हैं, तो इसे disabled छोड़ा जा सकता है।
