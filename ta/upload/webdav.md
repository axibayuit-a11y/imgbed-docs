# WebDAV Channel சேர்க்கவும்

## எப்போது பயன்படுத்துவது

WebDAV channel பயன்படுத்தலாம், நீங்கள்:

- NAS, cloud drive, அல்லது WebDAV endpoint வழங்கும் object storage service வைத்திருந்தால்.
- uploaded images உங்கள் சொந்த WebDAV directory-ல் சேமிக்க வேண்டும் என்றால்.
- credentials-ஐ frontend-ல் நீண்ட நேரம் expose செய்யாமல் D1 `upload_channels` table-ல் சேமிக்க விரும்பினால்.

## தொடங்குவதற்கு முன் தேவையானவை

| தேவை | பயன்பாடு |
| --- | --- |
| WebDAV Endpoint | server-side WebDAV URL, உதா. `https://nas.example.com/dav`. |
| Username | WebDAV service-க்கு sign in செய்ய. |
| Password | WebDAV service-க்கு sign in செய்ய. |
| Authentication mode | default `Basic`. server கேட்கும் போது மட்டும் `Digest` அல்லது auto negotiation. |
| Storage directory | files சேமிக்கப்படும் directory. default `imgbed`. |

## எங்கு சேர்ப்பது

1. System Settings திறக்கவும்.
2. Upload Settings-க்கு செல்லவும்.
3. மேல் வலது மூலையில் Add Channel கிளிக் செய்யவும்.
4. `WebDAV` தேர்வு செய்யவும்.

## Field Reference

| Field | பயன்பாடு | Required |
| --- | --- | --- |
| Channel name | இந்த WebDAV channel-க்கு பெயர், உதா. `koofr` அல்லது `nas`. | Yes |
| Endpoint | முழு WebDAV endpoint, `https://` உடன். | Yes |
| Username | WebDAV login username. | Yes |
| Password | WebDAV login password. | Yes |
| Authentication mode | பொதுவாக `Basic`; server digest authentication கேட்கும் போது `Digest`. | Yes |
| Storage directory | files சேமிக்கப்படும் directory. default `imgbed`. | No |

## Example: fie.nl.tab.digital

### 1. App Password உருவாக்கவும்

account security settings திறந்து application passwords பகுதியைத் தேடி புதிய app password உருவாக்கவும்.

![Create an app password](../../image/upload/webdav/创建应用密码.png)

உருவானதும் app password-ஐ copy செய்து சேமிக்கவும். இது பொதுவாக ஒருமுறை மட்டுமே காட்டப்படும்.

![Save the new app password](../../image/upload/webdav/记住新应用程序密码.png)

### 2. ImgBed-ல் WebDAV Configuration நிரப்பவும்

ImgBed-க்கு திரும்பி WebDAV channel சேர்க்கவும்:

| UI Field | Value |
| --- | --- |
| Endpoint | `https://fie.nl.tab.digital/` வழங்கும் WebDAV URL. |
| Username | உங்கள் WebDAV username. |
| Password | நீங்கள் இப்போது உருவாக்கிய app password. |
| Authentication mode | அதிகப்படியான சந்தர்ப்பங்களில் `Basic`-இல் தொடங்கவும். |
| Storage directory | default `imgbed`; தேவையெனில் custom directory. |

![Fill in the configuration](../../image/upload/webdav/填写配置.png)

## Large File Upload Behavior

WebDAV channel இப்போது real session-based chunked upload பயன்படுத்துகிறது.

சிறிய files ஒரே complete file ஆக upload ஆகும். 64 MiB-ஐ விட பெரிய files தானாக சுமார் 10 MiB chunks ஆகப் பிரிந்து remote chunk directory-ல் upload ஆகும்.

WebDAV service `partial update` அல்லது offset-based writes support செய்ய வேண்டியதில்லை. ImgBed remote server-ல் chunks-ஐ ஒரு பெரிய file ஆக merge செய்யாது. அதற்கு பதில் chunk manifest சேமித்து, file request வரும் போது chunks-ஐ வரிசையாக படிக்கும்.

| File Size | Upload Method | Remote Storage Layout |
| --- | --- | --- |
| 64 MiB அல்லது குறைவு | Normal upload | ஒரு complete file |
| 64 MiB-ஐ விட பெரியது | Real session chunked upload | பல chunk files உள்ள chunk directory |

chunk directory remote storage layout-ஐ மட்டும் பாதிக்கும். ImgBed file URL மாறாது. users original `/file/...` link மூலமே file access செய்வார்கள்.

## Setup Steps

1. Upload Settings திறக்கவும்.
2. Add Channel கிளிக் செய்யவும்.
3. `WebDAV` தேர்வு செய்யவும்.
4. அறியக்கூடிய channel name உள்ளிடவும், உதா. `koofr`.
5. WebDAV endpoint உள்ளிடவும், உதா. `https://app.koofr.net/dav/Koofr`.
6. username மற்றும் password உள்ளிடவும்.
7. authentication mode-ஐ default `Basic` ஆக வைத்திருக்கவும்.
8. storage directory-ஐ `imgbed` ஆக வைத்திருக்கலாம்; இல்லையெனில் உங்கள் directory கொடுக்கலாம்.
9. Save கிளிக் செய்யவும்.
10. பிறகு channel card, capacity query, test file upload ஆகியவற்றைச் சரிபார்க்கவும்.

## Verify செய்வது

| Check | சரிபார்ப்பு |
| --- | --- |
| Channel card appears | Save செய்த பிறகு Upload Settings-ல் WebDAV channel card தெரியும். |
| Channel is enabled | card switch on ஆகவே இருக்கும். |
| Credentials are saved | detail view-ல் Endpoint, username, authentication mode, storage directory தெரியும். |
| Small file upload works | test image upload செய்து WebDAV directory-ல் file வந்ததா பார்க்கவும். |
| Large file rule works | 64 MiB-ஐ விட பெரிய files chunked upload பயன்படுத்தி remote chunk directory உருவாக்கும். |
| Capacity query works | server capacity information support செய்தால் used/total capacity தெரியும். |

![Quota query succeeded](../../image/upload/webdav/查询额度成功.png)

## FAQ

### பெரிய WebDAV files chunk directory ஏன் உருவாக்குகின்றன?

இது large files-க்கான தற்போதைய storage method.

64 MiB-ஐ விட பெரிய files remote side-ல் ஒரு பெரிய file ஆக merge ஆகாது. அவை chunk directory ஆக சேமிக்கப்படும். ImgBed chunk manifest record செய்து complete content-ஐ chunks-ஐ வரிசையாக படித்து தரும்.

### large file upload fail ஆனால் முதலில் என்ன பார்க்க வேண்டும்?

Endpoint, username, password, storage directory சரியா பார்க்கவும். WebDAV service directory creation, file writing, file reading allow செய்கிறதா உறுதிசெய்யவும்.

capacity query fail ஆனால் small file upload வேலை செய்கிறது என்றால், server capacity reporting support செய்யாமல் இருக்கலாம். அதனால் upload unavailable என்று அர்த்தமில்லை.

### எந்த authentication mode பயன்படுத்துவது?

`Basic`-இல் தொடங்கவும்.

server தெளிவாக digest authentication கேட்கின் `Digest` பயன்படுத்தவும்.

நிச்சயமில்லையெனில் automatic negotiation பயன்படுத்தவும்.

## Quick Checklist

```text
WebDAV endpoint, username, password தயார் செய்யவும்
-> Upload Settings திறக்கவும்
-> Add Channel
-> WebDAV தேர்வு செய்யவும்
-> Endpoint / username / password நிரப்பவும்
-> authentication mode default Basic வைத்திருக்கவும்
-> storage directory default imgbed வைத்திருக்கவும்
-> Save
-> capacity query
-> test file upload
```
