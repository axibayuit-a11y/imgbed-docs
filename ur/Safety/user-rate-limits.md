# User Rate Limits

User rate limits یہ کنٹرول کرتے ہیں کہ regular users یا visitors homepage سے کتنی بار files upload کر سکتے ہیں۔ اس سے public upload pages کے abuse کو کم کرنے میں مدد ملتی ہے۔

یہ feature صرف homepage uploads کو متاثر کرتا ہے۔ Admin uploads اور API Tokens کے ذریعے کیے گئے uploads پر user rate limits لاگو نہیں ہوتیں۔

## کہاں Configure کریں

admin panel کھولیں، پھر جائیں:

```text
System Settings -> Security Settings -> Upload Management -> User Rate Limits
```

![User rate limit settings](../../image/other/用户频控截图.png)

## Rate Limits Enable کرنا

`Enable Rate Limits` on ہونے کے بعد ImgBed uploader IP address کے حساب سے recent uploads track کرتا ہے۔

Default values:

| Setting | Default | Description |
| --- | --- | --- |
| Detection window | 1.5 hours | کتنے پیچھے تک upload records count ہوں گے۔ |
| Max file count | 20 | detection window میں allowed maximum files۔ |
| Single file size limit | 20 MB | ایک file کا maximum size۔ |
| Total upload size limit | 200 MB | detection window میں maximum total upload size۔ |

مثلاً 1.5 hour window، 20 files، ہر file 20 MB، اور total 200 MB کے ساتھ، same IP سے uploads تب block ہوں گے جب کوئی بھی configured limit exceed ہو جائے۔

## File Types Exclude کرنا

`Excluded upload file types` regular users یا visitors کو selected file categories upload کرنے سے روکتا ہے۔

Available categories:

| Type | Description |
| --- | --- |
| Images | jpg, png, webp, gif، اور اسی طرح کی image files |
| Videos | mp4, webm, mov، اور اسی طرح کی video files |
| Audio | mp3, flac, wav، اور اسی طرح کی audio files |
| Documents | pdf, txt, md, docx، اور اسی طرح کی document files |
| Other | اوپر والی categories سے باہر files، جیسے zip, rar, exe, apk |

default طور پر کوئی type selected نہیں ہوتا، یعنی وہ allowed ہے۔

کسی type پر کلک کرنے سے وہ highlight ہوتا ہے، یعنی وہ type blocked ہے۔

اگر `Other` selected ہو، تو zip یا rar files upload کرنے والے visitors block ہوں گے اور انہیں بتایا جائے گا کہ یہ file type supported نہیں۔

## Block Messages

limit trigger ہونے پر users کو matching message دکھتا ہے:

![Too frequent upload message](../../image/other/频繁报错提示.png)

| Scenario | Message Meaning |
| --- | --- |
| Single file too large | file بہت بڑی ہے اور upload سے پہلے compress کرنی چاہیے۔ |
| File type blocked | یہ file type supported نہیں۔ اسے remove کر کے دوبارہ کوشش کریں۔ |
| Uploads too frequent | recent uploads بہت frequent ہیں، retry time کے ساتھ message دکھتا ہے۔ |
| Total size too high | recent total upload size بہت زیادہ ہے، retry time کے ساتھ message دکھتا ہے۔ |

## کب Enable کریں

اگر آپ کا upload homepage public accessible ہے تو user rate limits enable کریں۔

عام وجوہات:

- آپ scripted bulk uploads کے بارے میں فکر مند ہیں۔
- آپ visitor uploads کا size limit کرنا چاہتے ہیں۔
- آپ چاہتے ہیں regular users صرف images upload کریں، archives یا installers نہیں۔
- آپ public upload available رکھنا چاہتے ہیں مگر resource usage control کرنا چاہتے ہیں۔

اگر site صرف آپ کے لیے ہے، یا صرف administrators upload کرتے ہیں، تو اسے disabled چھوڑ سکتے ہیں۔
