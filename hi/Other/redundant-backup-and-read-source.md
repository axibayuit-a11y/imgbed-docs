# Redundant Backup और Read Source Switching

Redundant backup already uploaded file की एक extra copy store करता है।

Primary file और backup file दोनों read sources के रूप में इस्तेमाल हो सकती हैं। Visitors को आम तौर पर कोई फर्क नहीं दिखता। फर्क सिर्फ इतना है कि file किस storage channel से serve हो रही है।

## Redundant Backup क्या कर सकता है

| Feature | Description |
| --- | --- |
| Extra copy store करना | Files को दूसरे upload channel पर back up करके single channel failure का risk कम करता है। |
| Read source switch करना | Backup successful होने के बाद file reads को primary channel और backup channel के बीच switch करता है। |
| Single-file backup | File details page से एक file back up करें। |
| Batch backup | Admin page में multiple files select करके साथ में back up करें। |
| Global redundant backup | Other Settings से folder के आधार पर files back up करें। |

## Redundant Backup Entry

खोलें:

```text
System Settings -> Other Settings -> Redundant Backup
```

![Redundant backup](../../image/other/冗余备份截图.png)

यह entry किसी folder या सभी files में bulk backup जोड़ने के लिए सबसे अच्छी है।

Backup channel manually select किया जा सकता है, या आप automatic switching चुनकर ImgBed को suitable backup channel खोजने दे सकते हैं।

## File Details से Backup

Admin panel में file details page खोलें और backup click करें।

![Backup in file details](../../image/other/文件详情里文件备份.png)

यह किसी एक important file को on demand back up करने के लिए best है।

Backup successful होने के बाद file details page available read sources दिखाता है।

## Selection से Batch Backup

Admin panel में multiple files select करें और batch backup run करें।

![Batch backup](../../image/other/批量备份截图.png)

यह files के group को process करने के लिए best है।

Selection backup, file details backup और Other Settings के तहत redundant backup एक ही backup system इस्तेमाल करते हैं। ये सिर्फ अलग entry points हैं।

## Backup के बाद Read Source Switch करना

Backup complete होने के बाद file details page read source switch करने देता है:

| Read Source | Description |
| --- | --- |
| Primary channel | Original upload channel से read करता है। |
| Backup channel | Backup channel से read करता है। |

![Switch read source after backup](../../image/other/备份成功切换读取源.png)

Visitors को यह जानने की ज़रूरत नहीं कि file primary channel से serve हो रही है या backup channel से।

आप जो read source चुनते हैं, वही बाद के file access के लिए preferred source बन जाता है।

## Backup कब Skip होता है

Backup के दौरान नीचे के cases skip होते हैं। ये errors नहीं हैं।

| Case | Why It Is Skipped |
| --- | --- |
| Already backed up | जिस file का backup पहले से है, उसका backup दोबारा नहीं बनाया जाता। |
| Primary और backup channels same हैं | Meaningful backup के लिए copy दूसरे channel में store होनी चाहिए। |
| No usable backup channel | कोई suitable alternative channel available नहीं है। |

संक्षेप में: backups दूसरे channel में जाने चाहिए, और already backed-up files फिर से extra space consume नहीं करतीं।

## Primary Channel vs Backup Channel

| Name | Meaning |
| --- | --- |
| Primary channel | वह channel जिससे file पहली बार upload हुई थी। |
| Backup channel | वह channel जिसमें redundant copy store है। |
| Primary read source | File अभी primary channel से read हो रही है। |
| Backup read source | File अभी backup channel से read हो रही है। |

Primary और backup read sources का user-facing behavior same है।

जब तक backup file available है, backup read source पर switch करने के बाद images, videos और download links काम करते रहते हैं।

## File Delete होने पर क्या होता है

File delete करने पर ImgBed primary file और backup file दोनों delete करता है।
