# د WebDAV Site Access (Beta)

په Security Settings کې WebDAV setting ستاسو ImgBed site د WebDAV endpoint په توګه وړاندې کوي.

له فعالېدو وروسته، Windows، macOS، mobile file managers یا هر WebDAV-compatible client کارولای شئ، څو د ImgBed files لکه remote folder browse، upload، delete او manage کړئ.

دا د site WebDAV access entry دی. دا له Upload Settings کې WebDAV storage channel سره توپیر لري. upload channel files په third-party WebDAV service کې ساتي. دا setting ستاسو ImgBed site ته اجازه ورکوي چې clients ته WebDAV access ورکړي.

## چېرته یې تنظیم کړئ

admin panel پرانیزئ، بیا دې ځای ته لاړ شئ:

```text
System Settings -> Security Settings -> WebDAV
```

شته settings:

- Enable
- Username
- Password
- Image loading mode
- Default channel

## دا Feature څه کوي

کله چې WebDAV فعال شي، ImgBed یو ثابت access URL ورکوي:

```text
https://your-domain.com/dav
```

دا URL د خپل ImgBed file directory سره د connect لپاره وکاروئ.

ښه use cases:

- د خپل computer file manager څخه ImgBed files مستقیم browse کړئ.
- images د WebDAV folder ته drag کړئ او upload یې کړئ.
- د local file manager څخه ImgBed folders organize کړئ.
- WebDAV-compatible software د images sync یا manage لپاره وکاروئ.
- admin panel له پرانیستلو پرته ImgBed content ته access وکړئ.

## Settings

### Enable

WebDAV endpoint فعالوي.

کله چې disabled وي، clients د WebDAV له لارې connect نه شي کېدای.

### Username او Password

دا credentials د connect پر وخت WebDAV clients کاروي.

جلا WebDAV username او password وکاروئ. admin password یا upload password مه reuse کوئ.

که username یا password تش وي، WebDAV clients سم connect نه شي کېدای.

### Image Loading Mode

Image loading mode ټاکي چې WebDAV clients د images د لوستلو پر وخت کوم image URL ته ترجیح ورکړي.

عام options:

| Mode | تشریح |
| --- | --- |
| Smart loading | ImgBed د context له مخې انتخاب کوي. د عادي کارونې لپاره سپارښتنه کېږي. |
| Original | original images ته ترجیح ورکوي. |
| Thumbnail | thumbnails ته ترجیح ورکوي. د چټک preview لپاره ګټور دی. |

که ډاډه نه یاست، `Smart loading` وساتئ.

### Default Channel

Default channel د WebDAV uploads لپاره کارېږي.

کله چې له Windows یا بل client څخه files د WebDAV directory ته copy کوئ، ImgBed یې د ټاکل شوي default upload channel له لارې upload کوي.

که default channel ټاکل شوی نه وي، browsing ښايي کار وکړي، خو uploads ناکامېدای شي.

## په Windows 11 کې WebDAV ته Access

Windows 11 کولای شي WebDAV د network location په توګه اضافه کړي.

1. `This PC` پرانیزئ.
2. `Add a network location` وټاکئ.
3. `https://your-domain.com/dav` ولیکئ.
4. د غوښتنې پر وخت خپل WebDAV username او password ولیکئ.
5. wizard بشپړ کړئ. وروسته WebDAV directory په File Explorer کې پرانیستل کېدای شي.

![Add WebDAV in Windows 11](../../image/Safety/webdav在win11配置.png)

له اضافه کېدو وروسته، WebDAV directory په Windows File Explorer کې ښکاري. د عادي folder په څېر files پرانیستل، copy او manage کولای شئ.

![WebDAV in Windows](../../image/Safety/webdav在win显示效果.png)

## Supported Operations

له بریالي WebDAV connection وروسته، عموما دا کارونه کولای شئ:

- files او folders وګورئ.
- files upload کړئ.
- folders جوړ کړئ.
- files یا folders rename کړئ.
- files move کړئ.
- files delete کړئ.

WebDAV د ورځني access او کوچني file management لپاره مناسب دی. د لویو moves، bulk deletes یا پېچلي organization لپاره admin panel وکاروئ.

## Login Device Management

بریالي WebDAV connections د Login Device Management په WebDAV tab کې هم ښکاري.

هلته WebDAV clients کتلای شئ او د اړتیا پر وخت زاړه devices force offline کولای شئ.

که WebDAV username یا password بدل کړئ، زاړه clients باید بیا sign in وکړي.

## FAQ

### Windows بیا بیا Username او Password غواړي

وګورئ:

- URL دا دی: `https://your-domain.com/dav`.
- username او password له WebDAV settings سره برابر دي.
- WebDAV فعال دی.
- site د HTTPS له لارې access کېدای شي.

### Browsing کار کوي، خو Upload ناکامېږي

`Default channel` وګورئ.

WebDAV uploads default upload channel غواړي. که missing، disabled یا misconfigured وي، uploads ناکامېدای شي.

### Access Speed بې ثباته دی

د WebDAV performance پر client، network، file count او default upload channel پورې تړلی دی.

که directory ډېر files ولري، files په folders کې organize کړئ او ټول په یوه directory کې مه ساتئ.

## Security Recommendations

- د WebDAV access لپاره HTTPS وکاروئ.
- strong password وټاکئ.
- WebDAV password له نابلدو خلکو سره مه شریکوئ.
- چې WebDAV نه کاروئ، بند یې کړئ.
- په Login Device Management کې unused WebDAV devices وخت په وخت پاک کړئ.

## د WebDAV Upload File Size

WebDAV clients د browser upload page د large-file chunking flow نه کاروي. د لاندې سپارښتل شوو limits څخه لوړو files لپاره web upload page وکاروئ.

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
