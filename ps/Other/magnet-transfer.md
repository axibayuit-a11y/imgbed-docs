# Magnet Transfer

Magnet transfer له magnet link څخه files download کوي او په اتومات ډول یې هغه cloud storage channel ته upload کوي چې تاسې ټاکلی وي.

دا د anime episodes، videos، archives او ورته files د transfer لپاره ګټور دی. magnet link paste کړئ، ImgBed background download task جوړوي. کله چې download بشپړ شي، file ImgBed ته upload کېږي او final link د upload list کې ښکاري.

![Magnet transfer](../../image/other/磁力链接/磁力链接.png)

## چېرته یې وکاروئ

د magnet transfer entry د homepage upload area کې دی.

magnet link input box ته paste کړئ، `Transfer` وټاکئ، بیا upload وکړئ.

![Upload anime](../../image/other/磁力链接/上传番剧.png)

## له لومړي استعمال مخکې

لومړی په admin panel کې magnet transfer تنظیم کړئ.

عموما دې ته اړتیا لرئ:

1. د download task چلولو لپاره GitHub account.
2. cloud upload channel، لکه Google Drive یا OneDrive.
3. target upload directory.
4. task timeout.

کله چې settings تیار شول، homepage ته راشئ او د transfer پیل لپاره magnet link paste کړئ.

## Magnet Link Upload کول

1. magnet link د homepage upload box ته paste کړئ.
2. ډاډه شئ mode پر `Transfer` ټاکل شوی دی.
3. upload کلیک کړئ.
4. انتظار وکړئ چې ImgBed magnet task جوړ کړي.
5. کله چې task پیل شي، د progress کتلو لپاره په ښي ښکته کونج کې `Magnet Tasks` floating panel وکاروئ.

Download او upload وخت نیولای شي. speed د magnet resource، GitHub runtime environment او ټاکل شوي cloud storage channel پورې تړلی دی.

![Magnet downloading](../../image/other/磁力链接/磁力链接下载中.png)

## له بشپړېدو وروسته

کله چې task بشپړ شي، upload list د file name او link ښيي.

videos د video preview ښيي، images د image preview، او نور files عادي file icon ښيي.

![Downloaded video](../../image/other/磁力链接/下载好后的视频.png)

دا copy کولای شئ:

| Link Type | Use Case |
| --- | --- |
| Original link | مستقیم file access |
| Markdown | Markdown posts یا notes |
| HTML | Web page code |
| BBCode | هغه forums چې BBCode ملاتړ کوي |

## Magnet Task Panel

د ښي ښکته magnet task panel د task count، task name، progress او final status ښيي.

عام states:

| Status | معنا |
| --- | --- |
| Waiting | task جوړ شوی او د چلولو انتظار کوي. |
| Downloading | magnet resource download کېږي. |
| Uploading | file download شوی او cloud storage ته upload کېږي. |
| Completed | upload بریالی دی او link copy کېدای شي. |
| Failed | task بریالی بشپړ نه شو. message وګورئ او بیا هڅه وکړئ. |

## Tips

- که magnet link څو files ولري، ImgBed د display لپاره اصلي completed file ته priority ورکوي.
- لوی files ډېر وخت نیسي. د task تر بشپړېدو مخکې page refresh مه کوئ.
- که magnet resource available peers ونه لري، ډېر slow یا fail کېدای شي.
- که cloud account quota نه لري، authorization expire شوی وي، یا upload directory غلط وي، task fail کېدای شي.
- Video preview د upload تر بشپړېدو وروسته څو ثانیې وخت نیولای شي.

## FAQ

### له Magnet Link Paste وروسته هېڅ نه پیلېږي

ډاډه شئ magnet transfer په admin panel کې enabled دی او usable GitHub account او cloud channel ټاکل شوي دي.

### Download تل Slow دی

Magnet speed پخپله resource پورې تړلی دی. که available peers نه وي، download ډېر slow یا ناشونی کېدای شي.

### له Upload وروسته Preview نه ښکاري

لومړی وګورئ file link پرانیستل کېږي. Video files ښايي په browser کې د load لپاره لږ وخت وغواړي، یا link مستقیم پرانیزئ.

### که Task Fail شي څه وګورم؟

وګورئ magnet link valid دی، cloud channel کار کوي، او upload directory سمه ده. بیا task submit کړئ.
