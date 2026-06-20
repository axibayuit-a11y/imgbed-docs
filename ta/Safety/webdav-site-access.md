# WebDAV Site Access (Beta)

Security Settings-ல் உள்ள WebDAV setting உங்கள் ImgBed site-ஐ WebDAV endpoint ஆக வெளிப்படுத்தும்.

enable செய்த பிறகு Windows, macOS, mobile file managers, அல்லது WebDAV-compatible client மூலம் ImgBed files-ஐ remote folder போல browse, upload, delete, manage செய்யலாம்.

இது site-இன் WebDAV access entry. Upload Settings-ல் உள்ள WebDAV storage channel-இல் இருந்து வேறு. upload channel files-ஐ third-party WebDAV service-ல் store செய்கிறது. இந்த setting ImgBed site-ஐ clients-க்கு WebDAV access வழங்க செய்கிறது.

## எங்கு Configure செய்வது

admin panel திறந்து செல்லவும்:

```text
System Settings -> Security Settings -> WebDAV
```

Available settings:

- Enable
- Username
- Password
- Image loading mode
- Default channel

## இந்த Feature என்ன செய்கிறது

WebDAV enabled ஆன பிறகு ImgBed fixed access URL தரும்:

```text
https://your-domain.com/dav
```

ImgBed file directory-க்கு connect செய்ய இந்த URL பயன்படுத்தவும்.

சரியான use cases:

- computer file manager-ல் இருந்து ImgBed files நேரடியாக browse செய்ய.
- images-ஐ WebDAV folder-க்கு drag செய்து upload செய்ய.
- local file manager மூலம் ImgBed folders organize செய்ய.
- WebDAV-compatible software மூலம் images sync/manage செய்ய.
- admin panel திறக்காமல் ImgBed content access செய்ய.

## Settings

### Enable

WebDAV endpoint-ஐ on செய்கிறது.

disabled என்றால் clients WebDAV மூலம் connect செய்ய முடியாது.

### Username மற்றும் Password

WebDAV clients connect செய்யும்போது இந்த credentials பயன்படுத்தப்படும்.

Dedicated WebDAV username/password பயன்படுத்தவும். admin password அல்லது upload password மீண்டும் பயன்படுத்த வேண்டாம்.

username அல்லது password காலியாக இருந்தால் WebDAV clients சரியாக connect செய்ய முடியாது.

### Image Loading Mode

WebDAV clients images படிக்கும் போது எந்த image URL-ஐ prefer செய்ய வேண்டும் என்பதை image loading mode தீர்மானிக்கும்.

Common choices:

| Mode | Description |
| --- | --- |
| Smart loading | ImgBed context அடிப்படையில் தேர்வு செய்யும். normal use-க்கு recommended. |
| Original | original images-ஐ prefer செய்யும். |
| Thumbnail | thumbnails-ஐ prefer செய்யும். fast preview-க்கு useful. |

நிச்சயமில்லையெனில் `Smart loading` வைத்திருக்கவும்.

### Default Channel

default channel WebDAV uploads-க்கு பயன்படுத்தப்படும்.

Windows அல்லது வேறு client மூலம் WebDAV directory-க்கு files copy செய்தால், ImgBed selected default upload channel வழியாக upload செய்யும்.

default channel selected இல்லையெனில் browsing வேலை செய்யலாம், ஆனால் uploads fail ஆகலாம்.

## Windows 11-ல் WebDAV Access

Windows 11 WebDAV-ஐ network location ஆக add செய்யலாம்.

1. `This PC` திறக்கவும்.
2. `Add a network location` தேர்வு செய்யவும்.
3. `https://your-domain.com/dav` உள்ளிடவும்.
4. prompt வந்தால் WebDAV username/password உள்ளிடவும்.
5. wizard முடிக்கவும். WebDAV directory File Explorer-ல் திறக்கப்படும்.

![Add WebDAV in Windows 11](../../image/Safety/webdav在win11配置.png)

add செய்த பிறகு WebDAV directory Windows File Explorer-ல் தெரியும். normal folder போல files open, copy, manage செய்யலாம்.

![WebDAV in Windows](../../image/Safety/webdav在win显示效果.png)

## Supported Operations

successful WebDAV connection பிறகு பொதுவாக:

- files மற்றும் folders பார்க்கலாம்.
- files upload செய்யலாம்.
- folders உருவாக்கலாம்.
- files/folders rename செய்யலாம்.
- files move செய்யலாம்.
- files delete செய்யலாம்.

WebDAV everyday access மற்றும் சிறிய அளவிலான file management-க்கு நல்லது. பெரிய moves, bulk deletes, complex organization-க்கு admin panel பயன்படுத்தவும்.

## Login Device Management

successful WebDAV connections Login Device Management-இன் WebDAV tab-ல் தோன்றும்.

அங்கே WebDAV clients review செய்து தேவையானபோது old devices force offline செய்யலாம்.

WebDAV username அல்லது password மாற்றினால் old clients மீண்டும் sign in செய்ய வேண்டும்.

## FAQ

### Windows மீண்டும் மீண்டும் Username/Password கேட்கிறது

சரிபார்க்கவும்:

- URL `https://your-domain.com/dav`.
- username/password WebDAV settings-க்கு match ஆகிறது.
- WebDAV enabled.
- site HTTPS மூலம் access ஆகிறது.

### Browsing வேலை செய்கிறது, ஆனால் Uploading fail ஆகிறது

`Default channel` பார்க்கவும்.

WebDAV uploads-க்கு default upload channel தேவை. அது missing, disabled, அல்லது misconfigured என்றால் uploads fail ஆகலாம்.

### Access Speed நிலையாக இல்லை

WebDAV performance client, network, file count, default upload channel ஆகியவற்றை சார்ந்தது.

ஒரு directory-ல் நிறைய files இருந்தால், அவற்றை folders-ல் organize செய்யவும்.

## Security Recommendations

- WebDAV access-க்கு HTTPS பயன்படுத்தவும்.
- strong password அமைக்கவும்.
- WebDAV password-ஐ நம்ப முடியாதவர்களுடன் பகிர வேண்டாம்.
- பயன்படுத்தவில்லை என்றால் WebDAV off செய்யவும்.
- Login Device Management-ல் unused WebDAV devices அவ்வப்போது clean up செய்யவும்.

## WebDAV Upload File Size

WebDAV clients browser upload page-இன் large-file chunking flow பயன்படுத்தாது. கீழே உள்ள suggested limits-ஐ விட பெரிய files-க்கு web upload page பயன்படுத்தவும்.

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
