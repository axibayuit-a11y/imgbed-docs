# Magnet Transfer

Magnet transfer magnet link-இல் இருந்து files download செய்து, நீங்கள் தேர்வு செய்த cloud storage channel-க்கு தானாக upload செய்கிறது.

anime episodes, videos, archives போன்ற files transfer செய்ய இது உதவும். magnet link paste செய்தால் ImgBed background download task உருவாக்கும். download முடிந்ததும் file ImgBed-க்கு upload ஆகி final link upload list-ல் தெரியும்.

![Magnet transfer](../../image/other/磁力链接/磁力链接.png)

## எங்கு பயன்படுத்துவது

magnet transfer entry homepage upload area-ல் உள்ளது.

magnet link input box-ல் paste செய்து `Transfer` தேர்வு செய்து upload செய்யவும்.

![Upload anime](../../image/other/磁力链接/上传番剧.png)

## முதல் பயன்பாட்டுக்கு முன்

முதலில் admin panel-ல் magnet transfer configure செய்யவும்.

பொதுவாக தேவை:

1. download task run செய்ய GitHub account.
2. Google Drive அல்லது OneDrive போன்ற cloud upload channel.
3. target upload directory.
4. task timeout.

settings தயாரான பிறகு homepage-க்கு திரும்பி magnet link paste செய்து transfer தொடங்கலாம்.

## Magnet Link Upload செய்வது

1. homepage upload box-ல் magnet link paste செய்யவும்.
2. mode `Transfer` என confirm செய்யவும்.
3. upload கிளிக் செய்யவும்.
4. ImgBed magnet task create செய்ய காத்திருக்கவும்.
5. task தொடங்கியதும் bottom-right `Magnet Tasks` floating panel மூலம் progress பார்க்கவும்.

download மற்றும் upload நேரம் எடுக்கலாம். speed magnet resource, GitHub runtime environment, selected cloud storage channel ஆகியவற்றை சார்ந்தது.

![Magnet downloading](../../image/other/磁力链接/磁力链接下载中.png)

## Completion பிறகு

task complete ஆன பிறகு upload list file name மற்றும் link காட்டும்.

videos video preview, images image preview, மற்ற files regular file icon காட்டும்.

![Downloaded video](../../image/other/磁力链接/下载好后的视频.png)

copy செய்யக்கூடிய link types:

| Link Type | Use Case |
| --- | --- |
| Original link | direct file access |
| Markdown | Markdown posts அல்லது notes |
| HTML | web page code |
| BBCode | BBCode support forums |

## Magnet Task Panel

bottom-right magnet task panel task count, task name, progress, final status காட்டும்.

Common states:

| Status | Meaning |
| --- | --- |
| Waiting | task create ஆகி run காத்திருக்கிறது. |
| Downloading | magnet resource download ஆகிறது. |
| Uploading | file download முடிந்து cloud storage-க்கு upload ஆகிறது. |
| Completed | upload வெற்றி; link copy செய்யலாம். |
| Failed | task வெற்றிகரமாக முடியவில்லை. message பார்த்து மீண்டும் முயற்சி செய்யவும். |

## Tips

- magnet link multiple files கொண்டிருந்தால் ImgBed display-க்கு main completed file முன்னுரிமை தரும்.
- large files அதிக நேரம் எடுக்கும். page refresh செய்வதற்கு முன் task முடியும் வரை காத்திருக்கவும்.
- magnet resource-க்கு available peers இல்லாவிட்டால் மிகவும் slow அல்லது fail ஆகலாம்.
- cloud account quota முடிந்தால், authorization expired என்றால், அல்லது upload directory தவறாக இருந்தால் task fail ஆகலாம்.
- upload complete ஆன பிறகு video preview சில seconds எடுக்கலாம்.

## FAQ

### Magnet Link Paste செய்த பிறகு எதுவும் தொடங்கவில்லை

admin panel-ல் magnet transfer enabled உள்ளதா, usable GitHub account மற்றும் cloud channel selected உள்ளதா confirm செய்யவும்.

### Download எப்போதும் Slow

magnet speed resource-ஐ சார்ந்தது. available peers இல்லையெனில் download மிகவும் slow அல்லது முடியாததாக இருக்கலாம்.

### Upload பிறகு Preview இல்லை

முதலில் file link திறக்கிறதா confirm செய்யவும். video files browser-ல் load ஆக சிறிது நேரம் எடுக்கலாம்; அல்லது link நேரடியாக திறக்கலாம்.

### Task Fail ஆனால் என்ன பார்க்க வேண்டும்?

magnet link valid ஆ, cloud channel வேலை செய்கிறதா, upload directory சரியா என்று பார்க்கவும். பிறகு task மீண்டும் submit செய்யவும்.
