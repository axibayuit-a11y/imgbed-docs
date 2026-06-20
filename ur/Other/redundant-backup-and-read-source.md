# Redundant Backup اور Read Source Switching

Redundant backup پہلے سے uploaded file کی ایک extra copy محفوظ کرتا ہے۔

primary file اور backup file دونوں read sources کے طور پر استعمال ہو سکتے ہیں۔ visitors کو عموماً کوئی فرق محسوس نہیں ہوتا۔ فرق صرف یہ ہے کہ file کس storage channel سے serve ہو رہی ہے۔

## Redundant Backup کیا کر سکتا ہے

| Feature | Description |
| --- | --- |
| extra copy store کرنا | files کو دوسرے upload channel پر backup کرتا ہے تاکہ single channel failure کا risk کم ہو۔ |
| read source switch کرنا | backup successful ہونے کے بعد file reads کو primary channel اور backup channel کے درمیان switch کریں۔ |
| single-file backup | file details page سے ایک file backup کریں۔ |
| batch backup | admin page میں multiple files select کر کے ساتھ backup کریں۔ |
| global redundant backup | Other Settings سے folder کے حساب سے files backup کریں۔ |

## Redundant Backup Entry

کھولیں:

```text
System Settings -> Other Settings -> Redundant Backup
```

![Redundant backup](../../image/other/冗余备份截图.png)

یہ entry folder یا تمام files میں bulk backup شامل کرنے کے لیے بہتر ہے۔

backup channel manually منتخب کیا جا سکتا ہے، یا automatic switching منتخب کر کے ImgBed کو suitable backup channel تلاش کرنے دیں۔

## File Details سے Backup

admin panel میں file details page کھولیں اور backup پر کلک کریں۔

![Backup in file details](../../image/other/文件详情里文件备份.png)

یہ ایک important file کو on demand backup کرنے کے لیے بہتر ہے۔

backup successful ہونے کے بعد file details page available read sources دکھاتا ہے۔

## Selection سے Batch Backup

admin panel میں multiple files select کریں اور batch backup چلائیں۔

![Batch backup](../../image/other/批量备份截图.png)

یہ files کے group کو process کرنے کے لیے بہتر ہے۔

Selection backup، file details backup، اور Other Settings کے تحت redundant backup سب ایک ہی backup system استعمال کرتے ہیں۔ فرق صرف entry points کا ہے۔

## Backup کے بعد Read Source Switch کرنا

backup complete ہونے کے بعد file details page read source switch کرنے دیتا ہے:

| Read Source | Description |
| --- | --- |
| Primary channel | original upload channel سے read کرتا ہے۔ |
| Backup channel | backup channel سے read کرتا ہے۔ |

![Switch read source after backup](../../image/other/备份成功切换读取源.png)

visitors کو یہ جاننے کی ضرورت نہیں کہ file primary channel سے serve ہو رہی ہے یا backup channel سے۔

آپ جو read source منتخب کریں گے وہ later file access کے لیے preferred source بن جائے گا۔

## Backup کب Skip ہوتا ہے

backup کے دوران یہ cases skip ہوتے ہیں۔ یہ errors نہیں۔

| Case | Why It Is Skipped |
| --- | --- |
| Already backed up | جس file کا backup پہلے سے ہو اسے دوبارہ backup نہیں کیا جاتا۔ |
| Primary and backup channels are the same | meaningful backup کے لیے copy دوسرے channel میں ہونی چاہیے۔ |
| No usable backup channel | کوئی suitable alternative channel available نہیں۔ |

مختصر بات: backups دوسرے channel میں جانے چاہئیں، اور already backed-up files دوبارہ extra space consume نہیں کرتیں۔

## Primary Channel vs Backup Channel

| Name | Meaning |
| --- | --- |
| Primary channel | وہ channel جو file کے first upload میں استعمال ہوا۔ |
| Backup channel | وہ channel جو redundant copy store کرتا ہے۔ |
| Primary read source | file currently primary channel سے read ہو رہی ہے۔ |
| Backup read source | file currently backup channel سے read ہو رہی ہے۔ |

Primary اور backup read sources کا user-facing behavior ایک جیسا ہے۔

جب تک backup file available ہے، backup read source پر switch کرنے کے بعد images، videos، اور download links کام کرتے رہتے ہیں۔

## File Delete ہونے پر کیا ہوتا ہے

file delete ہونے پر ImgBed primary file اور backup file دونوں delete کرتا ہے۔
