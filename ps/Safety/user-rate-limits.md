# د User Rate Limits

User rate limits کنټرولوي چې عادي users یا visitors له homepage څخه څو ځله files upload کولای شي. دا د public upload pages د ناوړه کارونې مخنیوي کې مرسته کوي.

دا feature یوازې homepage uploads اغېزمنوي. Admin uploads او د API Tokens له لارې uploads د user rate limits له خوا نه محدودېږي.

## چېرته یې تنظیم کړئ

admin panel پرانیزئ، بیا دې ځای ته لاړ شئ:

```text
System Settings -> Security Settings -> Upload Management -> User Rate Limits
```

![User rate limit settings](../../image/other/用户频控截图.png)

## Rate Limits فعالول

کله چې `Enable Rate Limits` فعال شي، ImgBed وروستي uploads د uploader IP address له مخې track کوي.

Default values:

| Setting | Default | تشریح |
| --- | --- | --- |
| Detection window | 1.5 hours | upload records څو شاته وخت پورې شمېرل کېږي. |
| Max file count | 20 | په detection window کې د allowed files اعظمي شمېر. |
| Single file size limit | 20 MB | د یوه file اعظمي size. |
| Total upload size limit | 200 MB | په detection window کې د upload ټول اعظمي size. |

د بېلګې په توګه، که window 1.5 hours وي، 20 files، هر file 20 MB، او total 200 MB وي، له هماغه IP څخه uploads هغه وخت block کېږي چې له ټاکل شوو limits څخه کوم یو واوړي.

## د File Types منع کول

`Excluded upload file types` عادي users یا visitors له ټاکلو file categories upload کولو منع کوي.

شته categories:

| Type | تشریح |
| --- | --- |
| Images | jpg, png, webp, gif او ورته image files |
| Videos | mp4, webm, mov او ورته video files |
| Audio | mp3, flac, wav او ورته audio files |
| Documents | pdf, txt, md, docx او ورته document files |
| Other | له پورته categories بهر files، لکه zip, rar, exe, apk |

په default ډول type نه وي selected، یعنې allowed دی.

پر type کلیک کول یې highlight کوي، یعنې هغه type block شوی دی.

که `Other` selected وي، visitors چې zip یا rar files upload کوي block کېږي او ورته ویل کېږي چې دا file type supported نه دی.

## Block Messages

کله چې limit trigger شي، users ورته مناسب message ویني:

![Too frequent upload message](../../image/other/频繁报错提示.png)

| Scenario | د message معنا |
| --- | --- |
| Single file too large | file ډېر لوی دی او له upload مخکې باید compressed شي. |
| File type blocked | دا file type supported نه دی. لرې یې کړئ او بیا هڅه وکړئ. |
| Uploads too frequent | وروستي uploads ډېر frequent دي، retry time هم ښکاره کېږي. |
| Total size too high | د وروستیو uploads ټول size ډېر لوړ دی، retry time هم ښکاره کېږي. |

## کله یې فعال کړئ

که ستاسو upload homepage public access ولري، user rate limits فعال کړئ.

عام دلیلونه:

- د scripted bulk uploads په اړه اندېښنه لرئ.
- غواړئ د visitors لوی uploads محدود کړئ.
- غواړئ عادي users یوازې images upload کړي، archives یا installers نه.
- غواړئ public upload فعال پاتې شي خو resource usage کنټرول شي.

که site یوازې ستاسو لپاره وي، یا یوازې administrators upload کوي، دا disabled پرېښودلای شئ.
