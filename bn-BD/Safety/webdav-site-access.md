# WebDAV Site Access (Beta)

Security Settings-এর WebDAV setting আপনার ImgBed site-কে WebDAV endpoint হিসেবে expose করে।

Enable করার পর Windows, macOS, mobile file managers বা যেকোনো WebDAV-compatible client দিয়ে ImgBed files remote folder-এর মতো browse, upload, delete এবং manage করা যায়।

এটি site-এর WebDAV access entry। Upload Settings-এর WebDAV storage channel থেকে এটি আলাদা। Upload channel third-party WebDAV service-এ files store করে। এই setting আপনার ImgBed site-কে clients-এর জন্য WebDAV access দিতে সাহায্য করে।

## কোথায় Configure করবেন

Admin panel খুলে যান:

```text
System Settings -> Security Settings -> WebDAV
```

Available settings:

- Enable
- Username
- Password
- Image loading mode
- Default channel

## এই Feature কী করে

WebDAV enabled হলে ImgBed একটি fixed access URL দেয়:

```text
https://your-domain.com/dav
```

আপনার ImgBed file directory-তে connect করতে এই URL ব্যবহার করুন।

ভালো use cases:

- Computer file manager থেকে সরাসরি ImgBed files browse করা।
- Images WebDAV folder-এ drag করে upload করা।
- Local file manager থেকে ImgBed folders organize করা।
- WebDAV-compatible software দিয়ে images sync বা manage করা।
- Admin panel না খুলে ImgBed content access করা।

## Settings

### Enable

WebDAV endpoint চালু করে।

Disabled থাকলে clients WebDAV দিয়ে connect করতে পারবে না।

### Username এবং Password

WebDAV clients connect করার সময় এই credentials ব্যবহার করে।

Dedicated WebDAV username এবং password ব্যবহার করুন। Admin password বা upload password reuse করবেন না।

Username বা password empty হলে WebDAV clients ঠিকভাবে connect করতে পারবে না।

### Image Loading Mode

Image loading mode ঠিক করে WebDAV clients images পড়ার সময় কোন image URL prefer করবে।

Common choices:

| Mode | Description |
| --- | --- |
| Smart loading | ImgBed context অনুযায়ী নির্বাচন করে। Normal use-এর জন্য recommended। |
| Original | Original images prefer করে। |
| Thumbnail | Thumbnails prefer করে। Fast preview-এর জন্য useful। |

নিশ্চিত না হলে `Smart loading` রাখুন।

### Default Channel

Default channel WebDAV uploads-এর জন্য ব্যবহার হয়।

Windows বা অন্য client থেকে WebDAV directory-তে files copy করলে ImgBed selected default upload channel দিয়ে সেগুলো upload করে।

Default channel selected না থাকলে browsing কাজ করতে পারে, কিন্তু uploads fail করতে পারে।

## Windows 11-এ WebDAV Access করা

Windows 11 WebDAV-কে network location হিসেবে add করতে পারে।

1. `This PC` খুলুন।
2. `Add a network location` নির্বাচন করুন।
3. `https://your-domain.com/dav` দিন।
4. Prompt এলে WebDAV username এবং password দিন।
5. Wizard finish করুন। এরপর WebDAV directory File Explorer-এ খোলা যাবে।

![Add WebDAV in Windows 11](../../image/Safety/webdav在win11配置.png)

Add করার পর WebDAV directory Windows File Explorer-এ দেখা যায়। Normal folder-এর মতো files open, copy এবং manage করতে পারবেন।

![WebDAV in Windows](../../image/Safety/webdav在win显示效果.png)

## Supported Operations

Successful WebDAV connection-এর পর সাধারণত করতে পারবেন:

- Files এবং folders দেখা।
- Files upload করা।
- Folders create করা।
- Files বা folders rename করা।
- Files move করা।
- Files delete করা।

WebDAV everyday access এবং small-scale file management-এর জন্য ভালো। Large moves, bulk deletes বা complex organization-এর জন্য admin panel ব্যবহার করুন।

## Login Device Management

Successful WebDAV connections Login Device Management-এর WebDAV tab-এও দেখা যায়।

সেখানে WebDAV clients review করতে এবং দরকার হলে পুরোনো devices force offline করতে পারেন।

WebDAV username বা password বদলালে পুরোনো clients-কে আবার sign in করতে হবে।

## FAQ

### Windows বারবার Username এবং Password চাইছে

Check করুন:

- URL `https://your-domain.com/dav`।
- Username এবং password WebDAV settings-এর সঙ্গে match করছে।
- WebDAV enabled।
- Site HTTPS দিয়ে access করা যায়।

### Browsing কাজ করছে, কিন্তু Upload fail হচ্ছে

`Default channel` check করুন।

WebDAV uploads-এর জন্য default upload channel দরকার। সেটি missing, disabled বা misconfigured হলে uploads fail করতে পারে।

### Access Speed unstable

WebDAV performance client, network, file count এবং default upload channel-এর ওপর depend করে।

Directory-তে অনেক files থাকলে এক directory-তে সব না রেখে folders-এ organize করুন।

## Security Recommendations

- WebDAV access-এর জন্য HTTPS ব্যবহার করুন।
- Strong password set করুন।
- WebDAV password untrusted মানুষের সঙ্গে share করবেন না।
- ব্যবহার না করলে WebDAV বন্ধ রাখুন।
- Login Device Management-এ unused WebDAV devices periodically clean up করুন।

## WebDAV Upload File Size

WebDAV clients browser upload page-এর large-file chunking flow ব্যবহার করে না। নিচের suggested limits-এর বেশি files হলে web upload page ব্যবহার করুন।

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
