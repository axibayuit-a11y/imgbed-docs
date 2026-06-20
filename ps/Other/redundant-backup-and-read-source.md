# Redundant Backup او Read Source Switching

Redundant backup د مخکې upload شوي file اضافي copy ساتي.

primary file او backup file دواړه د read sources په توګه کارېدای شي. visitors عموما توپیر نه ویني. یوازینی توپیر دا دی چې file له کوم storage channel څخه serve کېږي.

## Redundant Backup څه کولای شي

| Feature | تشریح |
| --- | --- |
| Store an extra copy | files بل upload channel ته backup کوي، څو د یوه channel failure خطر کم شي. |
| Switch read source | له backup بریا وروسته، file reads د primary channel او backup channel تر منځ switch کوي. |
| Single-file backup | یو file د file details page څخه backup کوي. |
| Batch backup | په admin page کې څو files وټاکئ او یو ځای یې backup کړئ. |
| Global redundant backup | د Other Settings څخه files د folder له مخې backup کوي. |

## د Redundant Backup Entry

دا پرانیزئ:

```text
System Settings -> Other Settings -> Redundant Backup
```

![Redundant backup](../../image/other/冗余备份截图.png)

دا entry folder یا ټولو files ته په bulk کې backups اضافه کولو لپاره مناسب دی.

backup channel manually ټاکل کېدای شي، یا automatic switching انتخابولای شئ او ImgBed پرېږدئ چې مناسب backup channel ومومي.

## له File Details څخه Backup

په admin panel کې د file details page پرانیزئ او backup کلیک کړئ.

![Backup in file details](../../image/other/文件详情里文件备份.png)

دا د یوه مهم file د on demand backup لپاره مناسب دی.

له backup بریا وروسته، file details page available read sources ښيي.

## Batch Backup by Selection

په admin panel کې څو files وټاکئ او batch backup اجرا کړئ.

![Batch backup](../../image/other/批量备份截图.png)

دا د یوې ډلې files د processing لپاره مناسب دی.

Selection backup، file details backup او د Other Settings لاندې redundant backup ټول هماغه backup system کاروي. یوازې entry points یې بېلابېل دي.

## له Backup وروسته Read Source بدلول

کله چې backup بشپړ شي، file details page د read source بدلولو اجازه درکوي:

| Read Source | تشریح |
| --- | --- |
| Primary channel | له original upload channel څخه read کوي. |
| Backup channel | له backup channel څخه read کوي. |

![Switch read source after backup](../../image/other/备份成功切换读取源.png)

visitors ته اړتیا نشته پوه شي file له primary channel څخه serve کېږي که backup channel څخه.

هر read source چې وټاکئ، د راتلونکي file access لپاره preferred source کېږي.

## کله Backup Skip کېږي

لاندې cases د backup پر وخت skipped کېږي. دا errors نه دي.

| Case | ولې skipped کېږي |
| --- | --- |
| Already backed up | هغه file چې backup لري، بیا backup نه کېږي. |
| Primary and backup channels are the same | backup باید په بل channel کې وساتل شي څو معنا ولري. |
| No usable backup channel | مناسب alternative channel نشته. |

په لنډه توګه: backups باید بل channel ته لاړ شي، او already backed-up files بیا extra space نه مصرفوي.

## Primary Channel vs Backup Channel

| Name | معنا |
| --- | --- |
| Primary channel | هغه channel چې file لومړی پرې upload شوی و. |
| Backup channel | هغه channel چې redundant copy ساتي. |
| Primary read source | file اوس له primary channel څخه read کېږي. |
| Backup read source | file اوس له backup channel څخه read کېږي. |

Primary او backup read sources د user-facing behavior له مخې یو شان دي.

تر څو backup file available وي، images، videos او download links د backup read source ته له switch وروسته هم کار کوي.

## کله File Delete شي څه کېږي

کله چې file delete شي، ImgBed primary file او backup file دواړه delete کوي.
