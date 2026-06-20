# Redundant Backup மற்றும் Read Source Switching

Redundant backup ஏற்கனவே uploaded file-க்கு கூடுதல் copy சேமிக்கும்.

primary file மற்றும் backup file இரண்டும் read sources ஆக பயன்படுத்தலாம். visitors-க்கு பொதுவாக வேறுபாடு தெரியாது. வேறுபாடு file எந்த storage channel-ல் இருந்து serve ஆகிறது என்பதே.

## Redundant Backup என்ன செய்ய முடியும்

| Feature | Description |
| --- | --- |
| extra copy சேமித்தல் | single channel failure risk குறைக்க files-ஐ மற்ற upload channel-க்கு backup. |
| read source switch | backup வெற்றி பிறகு file reads primary channel மற்றும் backup channel இடையே switch. |
| single-file backup | file details page-ல் இருந்து ஒரு file backup. |
| batch backup | admin page-ல் multiple files select செய்து ஒன்றாக backup. |
| global redundant backup | Other Settings-ல் folder அடிப்படையில் files backup. |

## Redundant Backup Entry

திறக்கவும்:

```text
System Settings -> Other Settings -> Redundant Backup
```

![Redundant backup](../../image/other/冗余备份截图.png)

folder அல்லது all files-க்கு bulk backup சேர்க்க இதுவே சிறந்த entry.

backup channel manually தேர்வு செய்யலாம், அல்லது automatic switching தேர்வு செய்து ImgBed suitable backup channel கண்டுபிடிக்க விடலாம்.

## File Details-ல் இருந்து Backup

admin panel-ல் file details page திறந்து backup கிளிக் செய்யவும்.

![Backup in file details](../../image/other/文件详情里文件备份.png)

ஒரு முக்கிய file-ஐ on demand backup செய்ய இது பொருத்தம்.

backup வெற்றி பிறகு file details page available read sources காட்டும்.

## Selection மூலம் Batch Backup

admin panel-ல் multiple files select செய்து batch backup run செய்யவும்.

![Batch backup](../../image/other/批量备份截图.png)

ஒரு file group process செய்ய இது பொருத்தம்.

Selection backup, file details backup, Other Settings-ல் redundant backup அனைத்தும் ஒரே backup system பயன்படுத்தும். entry points மட்டும் வேறு.

## Backup பிறகு Read Source Switch

backup complete ஆன பிறகு file details page read source switch செய்ய விடும்:

| Read Source | Description |
| --- | --- |
| Primary channel | original upload channel-ல் இருந்து read. |
| Backup channel | backup channel-ல் இருந்து read. |

![Switch read source after backup](../../image/other/备份成功切换读取源.png)

file primary channel அல்லது backup channel-ல் இருந்து serve ஆகிறதா என்பதை visitors அறிய தேவையில்லை.

நீங்கள் தேர்வு செய்யும் read source, later file access-க்கு preferred source ஆகும்.

## Backup எப்போது Skip ஆகும்

backup போது இவை skip ஆகும். இவை errors அல்ல.

| Case | Why It Is Skipped |
| --- | --- |
| Already backed up | ஏற்கனவே backup உள்ள file மீண்டும் backup ஆகாது. |
| Primary and backup channels are the same | meaningful backup-க்கு copy வேறு channel-ல் இருக்க வேண்டும். |
| No usable backup channel | பொருத்தமான alternative channel இல்லை. |

சுருக்கம்: backups வேறு channel-க்கு போக வேண்டும்; ஏற்கனவே backed-up files extra space மீண்டும் பயன்படுத்தாது.

## Primary Channel vs Backup Channel

| Name | Meaning |
| --- | --- |
| Primary channel | file முதலில் upload ஆன channel. |
| Backup channel | redundant copy சேமிக்கும் channel. |
| Primary read source | file தற்போது primary channel-ல் இருந்து read ஆகிறது. |
| Backup read source | file தற்போது backup channel-ல் இருந்து read ஆகிறது. |

Primary மற்றும் backup read sources user-facing behavior ஒரே மாதிரி.

backup file available என்றால் backup read source-க்கு switch செய்த பிறகும் images, videos, download links இயங்கும்.

## File Delete செய்தால் என்ன ஆகும்

file delete செய்யும்போது ImgBed primary file மற்றும் backup file இரண்டையும் delete செய்யும்.
