# User Rate Limits

User rate limits homepage-ல் இருந்து regular users அல்லது visitors எவ்வளவு அடிக்கடி files upload செய்யலாம் என்பதை கட்டுப்படுத்தும். public upload pages abuse ஆகாமல் இருக்க உதவும்.

இந்த feature homepage uploads-ஐ மட்டுமே பாதிக்கும். Admin uploads மற்றும் API Tokens மூலம் செய்யப்பட்ட uploads user rate limits-ல் கட்டுப்படாது.

## எங்கு Configure செய்வது

admin panel திறந்து செல்லவும்:

```text
System Settings -> Security Settings -> Upload Management -> User Rate Limits
```

![User rate limit settings](../../image/other/用户频控截图.png)

## Rate Limits Enable செய்தல்

`Enable Rate Limits` on செய்த பிறகு ImgBed uploader IP address அடிப்படையில் recent uploads track செய்யும்.

Default values:

| Setting | Default | Description |
| --- | --- | --- |
| Detection window | 1.5 hours | upload records எவ்வளவு பின்வரை எண்ணப்படும். |
| Max file count | 20 | detection window-ல் அனுமதிக்கப்படும் அதிகபட்ச files. |
| Single file size limit | 20 MB | ஒரு file-க்கான maximum size. |
| Total upload size limit | 200 MB | detection window-ல் maximum total upload size. |

உதாரணமாக 1.5 hour window, 20 files, file ஒன்றுக்கு 20 MB, total 200 MB என்றால் same IP-இல் இருந்து எந்த configured limit மீறினாலும் uploads blocked ஆகும்.

## File Types Exclude செய்தல்

`Excluded upload file types` regular users அல்லது visitors selected file categories upload செய்வதைத் தடுக்கிறது.

Available categories:

| Type | Description |
| --- | --- |
| Images | jpg, png, webp, gif போன்ற image files |
| Videos | mp4, webm, mov போன்ற video files |
| Audio | mp3, flac, wav போன்ற audio files |
| Documents | pdf, txt, md, docx போன்ற document files |
| Other | மேலுள்ள categories-க்கு வெளியான files, உதா. zip, rar, exe, apk |

default-ஆக type selected இருக்காது; அதாவது அது allowed.

ஒரு type-ஐ click செய்தால் அது highlighted ஆகும்; அதாவது அந்த type blocked.

`Other` selected என்றால் zip அல்லது rar upload செய்யும் visitors blocked ஆகி இந்த file type supported இல்லை என்று சொல்லப்படும்.

## Block Messages

limit trigger ஆகும்போது users-க்கு பொருந்தும் message தெரியும்:

![Too frequent upload message](../../image/other/频繁报错提示.png)

| Scenario | Message Meaning |
| --- | --- |
| Single file too large | file பெரியது; upload-க்கு முன் compress செய்ய வேண்டும். |
| File type blocked | இந்த file type supported இல்லை. அதை remove செய்து மீண்டும் முயற்சி செய்யவும். |
| Uploads too frequent | recent uploads மிக frequent; retry time காட்டப்படும். |
| Total size too high | recent total upload size அதிகம்; retry time காட்டப்படும். |

## எப்போது Enable செய்வது

உங்கள் upload homepage public accessible என்றால் user rate limits enable செய்யவும்.

பொதுவான காரணங்கள்:

- scripted bulk uploads பற்றி கவலை இருந்தால்.
- visitor uploads பெரியதாக இருக்காமல் limit செய்ய விரும்பினால்.
- regular users images மட்டும் upload செய்ய வேண்டும்; archives/installers வேண்டாம் என்றால்.
- public upload திறந்தே இருக்க வேண்டும், ஆனால் resource usage கட்டுப்பட வேண்டும் என்றால்.

site உங்களுக்காக மட்டும், அல்லது administrators மட்டும் upload செய்கிறார்கள் என்றால் disabled விடலாம்.
