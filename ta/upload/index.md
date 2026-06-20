# பதிவேற்ற அமைப்புகள்

பதிவேற்ற அமைப்புகள் ImgBed-ஐ உங்கள் storage channels உடன் இணைக்கின்றன. channel configure செய்யப்பட்ட பிறகு, uploaded images மற்றும் files நீங்கள் தேர்ந்தெடுத்த service-ல் சேமிக்கப்படும். ImgBed access links, file records, previews, public gallery, random image API, WebDAV access மற்றும் தொடர்புடைய workflows-ஐ நிர்வகிக்கும்.

ஒவ்வொரு user-க்கும் ஏற்ற channel வேறுபடும். எளிதாக தொடங்க Telegram, Discord அல்லது GitHub Releases நல்ல தேர்வுகள். capacity, speed மற்றும் long-term stability முக்கியமானால் Cloudflare R2, S3, OneDrive, Google Drive, Dropbox, Yandex, pCloud அல்லது உங்கள் WebDAV service-ஐ தேர்வு செய்யலாம்.

## தொடங்குவதற்கு முன்

- பயன்படுத்த வேண்டிய storage account அல்லது API credentials தயார் வைத்துக் கொள்ளுங்கள்.
- உங்கள் ImgBed domain அணுகக்கூடியதாக உள்ளதா உறுதி செய்யுங்கள்; OAuth channels callback URL தேவைப்படும்.
- channel சேர்த்த பிறகு முதலில் test image ஒன்றை upload செய்து file save மற்றும் open ஆகிறதா பார்க்கவும்.

## Channel பட்டியல்

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

## இந்த அத்தியாயம் விளக்கும் விஷயங்கள்

- ஒவ்வொரு upload channel-க்கும் setup முன் தேவையான தகவல்கள்.
- third-party platforms-ல் app உருவாக்குவது, keys copy செய்வது அல்லது Token authorize செய்வது.
- ImgBed-ல் channel configuration நிரப்பி upload வேலை செய்கிறதா உறுதி செய்வது.
