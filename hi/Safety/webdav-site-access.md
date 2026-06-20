# WebDAV Site Access (Beta)

Security Settings में WebDAV setting आपके ImgBed site को WebDAV endpoint के रूप में उपलब्ध कराती है।

Enable करने के बाद आप Windows, macOS, mobile file managers या किसी भी WebDAV-compatible client से ImgBed files को remote folder की तरह browse, upload, delete और manage कर सकते हैं।

यह site का WebDAV access entry है। यह Upload Settings वाले WebDAV storage channel से अलग है। Upload channel files को third-party WebDAV service में store करता है। यह setting आपके ImgBed site को clients के लिए WebDAV access provide करने देती है।

## कहाँ सेट करें

Admin panel खोलें, फिर यहाँ जाएँ:

```text
System Settings -> Security Settings -> WebDAV
```

Available settings:

- Enable
- Username
- Password
- Image loading mode
- Default channel

## यह Feature क्या करता है

WebDAV enabled होने के बाद ImgBed एक fixed access URL provide करता है:

```text
https://your-domain.com/dav
```

अपने ImgBed file directory से connect करने के लिए यही URL इस्तेमाल करें।

अच्छे use cases:

- Computer file manager से ImgBed files सीधे browse करें।
- Images को WebDAV folder में drag करके upload करें।
- Local file manager से ImgBed folders organize करें।
- WebDAV-compatible software से images sync या manage करें।
- Admin panel खोले बिना ImgBed content access करें।

## Settings

### Enable

WebDAV endpoint चालू करता है।

Disabled होने पर clients WebDAV के ज़रिए connect नहीं कर सकते।

### Username और Password

Clients WebDAV से connect करते समय ये credentials इस्तेमाल करते हैं।

Dedicated WebDAV username और password इस्तेमाल करें। Admin password या upload password reuse न करें।

अगर username या password में से कोई भी खाली है, तो WebDAV clients ठीक से connect नहीं कर पाएँगे।

### Image Loading Mode

Image loading mode तय करता है कि images पढ़ते समय WebDAV clients कौन सा image URL prefer करें।

Common choices:

| Mode | Description |
| --- | --- |
| Smart loading | ImgBed context के आधार पर चुनता है। Normal use के लिए recommended। |
| Original | Original images prefer करता है। |
| Thumbnail | Thumbnails prefer करता है। Fast preview के लिए useful। |

अगर आप unsure हैं, तो `Smart loading` रखें।

### Default Channel

Default channel WebDAV uploads के लिए इस्तेमाल होता है।

जब आप Windows या किसी दूसरे client से WebDAV directory में files copy करते हैं, तो ImgBed उन्हें selected default upload channel के ज़रिए upload करता है।

अगर default channel selected नहीं है, तो browsing काम कर सकती है, लेकिन uploads fail हो सकते हैं।

## Windows 11 में WebDAV Access करना

Windows 11 WebDAV को network location के रूप में add कर सकता है।

1. `This PC` खोलें।
2. `Add a network location` चुनें।
3. `https://your-domain.com/dav` डालें।
4. Prompt आने पर अपना WebDAV username और password डालें।
5. Wizard finish करें। इसके बाद WebDAV directory File Explorer में खुल सकेगी।

![Add WebDAV in Windows 11](../../image/Safety/webdav在win11配置.png)

Add होने के बाद WebDAV directory Windows File Explorer में दिखती है। आप normal folder की तरह files open, copy और manage कर सकते हैं।

![WebDAV in Windows](../../image/Safety/webdav在win显示效果.png)

## Supported Operations

Successful WebDAV connection के बाद आप आम तौर पर ये कर सकते हैं:

- Files और folders देखें।
- Files upload करें।
- Folders create करें।
- Files या folders rename करें।
- Files move करें।
- Files delete करें।

WebDAV रोज़मर्रा के access और छोटे file management के लिए बेहतर है। बड़े moves, bulk deletes या complex organization के लिए admin panel इस्तेमाल करें।

## Login Device Management

Successful WebDAV connections Login Device Management के WebDAV tab में भी दिखते हैं।

आप वहाँ WebDAV clients review कर सकते हैं और ज़रूरत पड़ने पर पुराने devices force offline कर सकते हैं।

अगर आप WebDAV username या password बदलते हैं, तो पुराने clients को फिर से sign in करना होगा।

## FAQ

### Windows बार-बार Username और Password क्यों पूछ रहा है?

जाँचें:

- URL `https://your-domain.com/dav` है।
- Username और password WebDAV settings से match करते हैं।
- WebDAV enabled है।
- Site HTTPS पर accessible है।

### Browsing चल रही है, लेकिन Upload fail हो रहा है

`Default channel` check करें।

WebDAV uploads को default upload channel चाहिए। अगर वह missing, disabled या misconfigured है, तो uploads fail हो सकते हैं।

### Access Speed unstable है

WebDAV performance client, network, file count और default upload channel पर depend करती है।

अगर किसी directory में बहुत files हैं, तो उन्हें एक ही directory में रखने के बजाय folders में organize करें।

## Security Recommendations

- WebDAV access के लिए HTTPS इस्तेमाल करें।
- Strong password set करें।
- WebDAV password untrusted लोगों से share न करें।
- इस्तेमाल न कर रहे हों तो WebDAV बंद रखें।
- Login Device Management में unused WebDAV devices periodically clean up करें।

## WebDAV Upload File Size

WebDAV clients browser upload page वाले large-file chunking flow का इस्तेमाल नहीं करते। नीचे दिए गए suggested limits से बड़ी files के लिए web upload page इस्तेमाल करें।

| Default Upload Channel | Suggested Single-File Limit for WebDAV |
| --- | ---: |
| Telegram | 20 MB |
| Discord | 10 MB |
| Cloudflare R2 | 30 MB |
| S3 | 30 MB |
| GitHub Releases | 64 MB |
| GitLab Packages | 64 MB |
| Hugging Face | 20 MB |
| OneDrive | 30 MB |
| Google Drive | 30 MB |
| Dropbox | 30 MB |
| Yandex Disk | 30 MB |
| pCloud | 30 MB |
| WebDAV | 64 MB |
