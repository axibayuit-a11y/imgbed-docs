# Magnet Transfer

Magnet transfer magnet link سے files download کرتا ہے اور انہیں خودکار طور پر آپ کے منتخب کردہ cloud storage channel میں upload کرتا ہے۔

یہ anime episodes، videos، archives، اور ملتی جلتی files transfer کرنے کے لیے useful ہے۔ magnet link paste کریں، ImgBed background download task بناتا ہے۔ download مکمل ہونے کے بعد file ImgBed میں upload ہوتی ہے اور final link upload list میں دکھتا ہے۔

![Magnet transfer](../../image/other/磁力链接/磁力链接.png)

## کہاں استعمال کریں

magnet transfer entry homepage upload area میں ہے۔

magnet link input box میں paste کریں، `Transfer` منتخب کریں، پھر upload کریں۔

![Upload anime](../../image/other/磁力链接/上传番剧.png)

## First Use سے پہلے

پہلے admin panel میں magnet transfer configure کریں۔

عموماً آپ کو چاہیے:

1. download task چلانے کے لیے GitHub account۔
2. cloud upload channel، جیسے Google Drive یا OneDrive۔
3. target upload directory۔
4. task timeout۔

settings تیار ہونے کے بعد homepage پر واپس جائیں اور magnet link paste کر کے transfer شروع کریں۔

## Magnet Link Upload کرنا

1. homepage upload box میں magnet link paste کریں۔
2. confirm کریں کہ mode `Transfer` پر set ہے۔
3. upload پر کلک کریں۔
4. ImgBed کے magnet task create کرنے کا انتظار کریں۔
5. task شروع ہونے کے بعد bottom-right corner میں floating `Magnet Tasks` panel سے progress چیک کریں۔

download اور upload میں وقت لگ سکتا ہے۔ speed magnet resource، GitHub runtime environment، اور selected cloud storage channel پر depend کرتی ہے۔

![Magnet downloading](../../image/other/磁力链接/磁力链接下载中.png)

## Completion کے بعد

task complete ہونے کے بعد upload list file name اور link دکھاتی ہے۔

videos video preview دکھاتے ہیں، images image preview دکھاتی ہیں، اور other files regular file icon دکھاتی ہیں۔

![Downloaded video](../../image/other/磁力链接/下载好后的视频.png)

آپ copy کر سکتے ہیں:

| Link Type | Use Case |
| --- | --- |
| Original link | direct file access |
| Markdown | Markdown posts یا notes |
| HTML | web page code |
| BBCode | BBCode support کرنے والے forums |

## Magnet Task Panel

bottom-right magnet task panel task count، task name، progress، اور final status دکھاتا ہے۔

Common states:

| Status | Meaning |
| --- | --- |
| Waiting | task create ہو چکا ہے اور run ہونے کا انتظار کر رہا ہے۔ |
| Downloading | magnet resource download ہو رہا ہے۔ |
| Uploading | file download ہو چکی ہے اور cloud storage پر upload ہو رہی ہے۔ |
| Completed | upload کامیاب ہے اور link copy کیا جا سکتا ہے۔ |
| Failed | task کامیابی سے complete نہیں ہوا۔ message چیک کریں اور دوبارہ کوشش کریں۔ |

## Tips

- اگر magnet link میں multiple files ہوں تو ImgBed display کے لیے main completed file کو prioritize کرتا ہے۔
- large files زیادہ وقت لیتی ہیں۔ page refresh کرنے سے پہلے task finish ہونے دیں۔
- اگر magnet resource کے available peers نہ ہوں تو process بہت slow یا fail ہو سکتا ہے۔
- cloud account quota ختم ہو، authorization expire ہو، یا upload directory غلط ہو تو task fail ہو سکتا ہے۔
- upload complete ہونے کے بعد video preview چند seconds لے سکتی ہے۔

## FAQ

### Magnet Link Paste کرنے کے بعد کچھ Start نہیں ہوتا

confirm کریں کہ admin panel میں magnet transfer enabled ہے اور usable GitHub account / cloud channel selected ہے۔

### Download ہمیشہ Slow ہے

magnet speed resource پر depend کرتی ہے۔ available peers نہ ہوں تو download بہت slow یا impossible ہو سکتا ہے۔

### Upload کے بعد Preview نہیں آتا

پہلے confirm کریں کہ file link کھلتا ہے۔ video files browser میں load ہونے کے لیے تھوڑا وقت لے سکتی ہیں، یا آپ link directly کھول سکتے ہیں۔

### Task Fail ہو تو کیا چیک کریں؟

magnet link valid ہے یا نہیں، cloud channel کام کر رہا ہے یا نہیں، اور upload directory درست ہے یا نہیں چیک کریں۔ پھر task دوبارہ submit کریں۔
