# பதிவேற்ற அமைப்புகள்

பதிவேற்ற அமைப்புகள் ImgBed-ஐ உங்கள் சேமிப்பு சேனல்s உடன் இணைக்கின்றன. சேனல் கட்டமை செய்யப்பட்ட பிறகு, பதிவேற்றப்பட்ட படங்கள் மற்றும் கோப்புகள் நீங்கள் தேர்ந்தெடுத்த சேவை-ல் சேமிக்கப்படும். ImgBed அணுகல் links, கோப்பு records, previews, public gallery, random image API, WebDAV அணுகல் மற்றும் தொடர்புடைய workflows-ஐ நிர்வகிக்கும்.

ஒவ்வொரு user-க்கும் ஏற்ற சேனல் வேறுபடும். எளிதாக தொடங்க Telegram, Discord அல்லது GitHub Releases நல்ல தேர்வுகள். capacity, speed மற்றும் long-term stability முக்கியமானால் Cloudflare R2, S3, OneDrive, Google Drive, Dropbox, Yandex, pCloud அல்லது உங்கள் WebDAV சேவை-ஐ தேர்வு செய்யலாம்.

## தொடங்குவதற்கு முன்

- பயன்படுத்த வேண்டிய சேமிப்பு கணக்கு அல்லது API சான்றுகள் தயார் வைத்துக் கொள்ளுங்கள்.
- உங்கள் ImgBed டொமைன் அணுகக்கூடியதாக உள்ளதா உறுதி செய்யுங்கள்; OAuth சேனல்s callback URL தேவைப்படும்.
- சேனல் சேர்த்த பிறகு முதலில் test image ஒன்றை பதிவேற்றம் செய்து கோப்பு சேமி மற்றும் open ஆகிறதா பார்க்கவும்.

## சேனல் பட்டியல்

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

- ஒவ்வொரு பதிவேற்றம் சேனல்-க்கும் setup முன் தேவையான தகவல்கள்.
- third-party platforms-ல் செயலி உருவாக்குவது, keys நகலெடு செய்வது அல்லது டோக்கன் authorize செய்வது.
- ImgBed-ல் சேனல் கட்டமைப்பு நிரப்பி பதிவேற்றம் வேலை செய்கிறதா உறுதி செய்வது.
