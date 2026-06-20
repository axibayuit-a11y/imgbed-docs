# WebDAV Site Access (Beta)

Security Settings میں WebDAV setting آپ کی ImgBed site کو WebDAV endpoint کے طور پر expose کرتی ہے۔

enable ہونے کے بعد آپ Windows، macOS، mobile file managers، یا کوئی بھی WebDAV-compatible client استعمال کر کے ImgBed files کو remote folder کی طرح browse، upload، delete، اور manage کر سکتے ہیں۔

یہ site کا WebDAV access entry ہے۔ یہ Upload Settings کے WebDAV storage channel سے مختلف ہے۔ upload channel files کو third-party WebDAV service میں store کرتا ہے۔ یہ setting آپ کی ImgBed site کو clients کے لیے WebDAV access provide کرنے دیتی ہے۔

## کہاں Configure کریں

admin panel کھولیں، پھر جائیں:

```text
System Settings -> Security Settings -> WebDAV
```

Available settings:

- Enable
- Username
- Password
- Image loading mode
- Default channel

## یہ Feature کیا کرتا ہے

WebDAV enabled ہونے کے بعد ImgBed ایک fixed access URL فراہم کرتا ہے:

```text
https://your-domain.com/dav
```

اپنی ImgBed file directory سے connect کرنے کے لیے یہی URL استعمال کریں۔

اچھے use cases:

- computer file manager سے ImgBed files directly browse کرنا۔
- images کو WebDAV folder میں drag کر کے upload کرنا۔
- local file manager سے ImgBed folders organize کرنا۔
- WebDAV-compatible software سے images sync یا manage کرنا۔
- admin panel کھولے بغیر ImgBed content access کرنا۔

## Settings

### Enable

WebDAV endpoint on کرتا ہے۔

disabled ہو تو clients WebDAV کے ذریعے connect نہیں کر سکتے۔

### Username اور Password

WebDAV clients connect کرتے وقت یہی credentials استعمال کرتے ہیں۔

dedicated WebDAV username اور password استعمال کریں۔ admin password یا upload password دوبارہ استعمال نہ کریں۔

اگر username یا password میں سے کوئی بھی empty ہو، WebDAV clients صحیح connect نہیں کر پائیں گے۔

### Image Loading Mode

Image loading mode طے کرتا ہے کہ WebDAV clients images پڑھتے وقت کس image URL کو ترجیح دیں۔

Common choices:

| Mode | Description |
| --- | --- |
| Smart loading | ImgBed context کے مطابق انتخاب کرتا ہے۔ normal use کے لیے recommended۔ |
| Original | original images کو ترجیح دیتا ہے۔ |
| Thumbnail | thumbnails کو ترجیح دیتا ہے۔ fast preview کے لیے مفید۔ |

یقین نہ ہو تو `Smart loading` رکھیں۔

### Default Channel

default channel WebDAV uploads کے لیے استعمال ہوتا ہے۔

جب آپ Windows یا کسی client سے WebDAV directory میں files copy کرتے ہیں، ImgBed selected default upload channel کے ذریعے انہیں upload کرتا ہے۔

اگر default channel selected نہیں، browsing کام کر سکتی ہے، مگر uploads fail ہو سکتے ہیں۔

## Windows 11 میں WebDAV Access کرنا

Windows 11 WebDAV کو network location کے طور پر add کر سکتا ہے۔

1. `This PC` کھولیں۔
2. `Add a network location` منتخب کریں۔
3. `https://your-domain.com/dav` درج کریں۔
4. prompt آنے پر اپنا WebDAV username اور password درج کریں۔
5. wizard مکمل کریں۔ اس کے بعد WebDAV directory File Explorer میں کھل سکے گی۔

![Add WebDAV in Windows 11](../../image/Safety/webdav在win11配置.png)

add ہونے کے بعد WebDAV directory Windows File Explorer میں ظاہر ہوتی ہے۔ آپ normal folder کی طرح files open، copy، اور manage کر سکتے ہیں۔

![WebDAV in Windows](../../image/Safety/webdav在win显示效果.png)

## Supported Operations

successful WebDAV connection کے بعد عموماً آپ یہ کر سکتے ہیں:

- files اور folders دیکھنا۔
- files upload کرنا۔
- folders بنانا۔
- files یا folders rename کرنا۔
- files move کرنا۔
- files delete کرنا۔

WebDAV everyday access اور small-scale file management کے لیے بہتر ہے۔ بڑے moves، bulk deletes، یا complex organization کے لیے admin panel استعمال کریں۔

## Login Device Management

successful WebDAV connections Login Device Management کے WebDAV tab میں بھی ظاہر ہوتے ہیں۔

وہاں آپ WebDAV clients review کر سکتے ہیں اور ضرورت پڑنے پر old devices force offline کر سکتے ہیں۔

اگر WebDAV username یا password تبدیل کریں، تو old clients کو دوبارہ sign in کرنا ہوگا۔

## FAQ

### Windows بار بار Username اور Password مانگتا ہے

چیک کریں:

- URL `https://your-domain.com/dav` ہے۔
- username اور password WebDAV settings سے match کرتے ہیں۔
- WebDAV enabled ہے۔
- site HTTPS پر access ہو سکتی ہے۔

### Browsing کام کرتی ہے، مگر Uploading fail ہوتی ہے

`Default channel` چیک کریں۔

WebDAV uploads کو default upload channel چاہیے۔ اگر یہ missing، disabled، یا misconfigured ہو تو uploads fail ہو سکتے ہیں۔

### Access Speed غیر مستحکم ہے

WebDAV performance client، network، file count، اور default upload channel پر depend کرتی ہے۔

اگر کسی directory میں بہت زیادہ files ہیں، تو انہیں folders میں organize کریں، ایک ہی directory میں بہت زیادہ files نہ رکھیں۔

## Security Recommendations

- WebDAV access کے لیے HTTPS استعمال کریں۔
- strong password set کریں۔
- WebDAV password untrusted لوگوں کے ساتھ share نہ کریں۔
- استعمال نہ کر رہے ہوں تو WebDAV off کر دیں۔
- Login Device Management میں unused WebDAV devices وقتاً فوقتاً clean up کریں۔

## WebDAV Upload File Size

WebDAV clients browser upload page کا large-file chunking flow استعمال نہیں کرتے۔ نیچے دی گئی suggested limits سے بڑی files کے لیے web upload page استعمال کریں۔

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
