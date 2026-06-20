# अपलोड सेटिंग्स

अपलोड सेटिंग्स ImgBed को आपके अपने storage channels से जोड़ती हैं। चैनल सेट होने के बाद अपलोड की गई images और files आपकी चुनी हुई service में सेव होती हैं। ImgBed access links, file records, previews, public gallery, random image API, WebDAV access और संबंधित workflows को संभालता है।

हर उपयोगकर्ता के लिए सही channel अलग हो सकता है। आसान शुरुआत के लिए Telegram, Discord या GitHub Releases अच्छे विकल्प हो सकते हैं। अगर capacity, speed और long-term stability ज्यादा महत्वपूर्ण हैं, तो Cloudflare R2, S3, OneDrive, Google Drive, Dropbox, Yandex, pCloud या अपना WebDAV service चुनें।

## शुरू करने से पहले

- जिस storage account या API credentials का उपयोग करना है, उन्हें तैयार रखें।
- सुनिश्चित करें कि आपका ImgBed domain खुल रहा है, क्योंकि OAuth channels को callback URL चाहिए।
- channel जोड़ने के बाद पहले एक test image upload करें, ताकि file save और open होना confirm हो सके।

## चैनल सूची

- [Telegram](./telegram.md)
- [Cloudflare R2](./cloudflare-r2.md)
- [S3](./s3.md)
- [WebDAV](./webdav.md)
- [Discord](./discord.md)
- [Hugging Face](./huggingface.md)
- [GitHub Releases](./github-releases.md)
- [GitLab Packages](./gitlab-packages.md)
- [OneDrive](./onedrive.md)
- [Google Drive](./google-drive.md)
- [Dropbox](./dropbox.md)
- [Yandex](./yandex.md)
- [pCloud](./pcloud.md)

## इस अध्याय में क्या है

- हर upload channel को setup से पहले किन जानकारी की जरूरत होती है।
- external platforms पर app बनाना, keys copy करना या Token authorize करना।
- ImgBed में channel configuration भरना और upload काम कर रहा है या नहीं जांचना।
