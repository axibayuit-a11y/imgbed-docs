# Redundant Backup dan Read Source Switching

Redundant backup menyimpan extra copy untuk file yang sudah di-upload.

Kedua-dua primary file dan backup file boleh digunakan sebagai read sources. Visitors biasanya tidak melihat perbezaan. Perbezaannya hanya storage channel mana yang serve file.

## Fungsi Redundant Backup

| Feature | Description |
| --- | --- |
| Store an extra copy | Back up files ke upload channel lain untuk mengurangkan risiko single channel failure. |
| Switch read source | Selepas backup berjaya, switch file reads antara primary channel dan backup channel. |
| Single-file backup | Back up satu file dari file details page. |
| Batch backup | Pilih beberapa files dalam admin page dan back up bersama. |
| Global redundant backup | Back up files mengikut folder dari Other Settings. |

## Redundant Backup Entry

Buka:

```text
System Settings -> Other Settings -> Redundant Backup
```

![Redundant backup](../../image/other/冗余备份截图.png)

Entry ini paling sesuai untuk menambah backups kepada folder atau semua files secara bulk.

Backup channel boleh dipilih secara manual, atau anda boleh memilih automatic switching dan membiarkan ImgBed mencari backup channel yang sesuai.

## Backup Dari File Details

Buka file details page dalam admin panel dan klik backup.

![Backup in file details](../../image/other/文件详情里文件备份.png)

Ini paling sesuai untuk back up satu important file on demand.

Selepas backup berjaya, file details page menunjukkan available read sources.

## Batch Backup Mengikut Selection

Dalam admin panel, pilih beberapa files dan run batch backup.

![Batch backup](../../image/other/批量备份截图.png)

Ini sesuai untuk memproses sekumpulan files.

Selection backup, file details backup dan redundant backup di bawah Other Settings semuanya menggunakan backup system yang sama. Ia cuma entry points yang berbeza.

## Switching Read Source Selepas Backup

Selepas backup complete, file details page membolehkan anda switch read source:

| Read Source | Description |
| --- | --- |
| Primary channel | Read dari original upload channel. |
| Backup channel | Read dari backup channel. |

![Switch read source after backup](../../image/other/备份成功切换读取源.png)

Visitors tidak perlu tahu sama ada file served dari primary atau backup channel.

Read source yang anda pilih menjadi preferred source untuk file access selepas itu.

## Bila Backup Diskip

Kes berikut akan diskip semasa backup. Ia bukan errors.

| Case | Why It Is Skipped |
| --- | --- |
| Already backed up | File yang sudah ada backup tidak akan dibackup sekali lagi. |
| Primary dan backup channels sama | Backup mesti disimpan dalam channel lain untuk bermakna. |
| No usable backup channel | Tiada alternative channel yang sesuai. |

Ringkasnya: backups mesti pergi ke channel lain, dan files yang sudah backed-up tidak menggunakan extra space lagi.

## Primary Channel vs Backup Channel

| Name | Meaning |
| --- | --- |
| Primary channel | Channel yang digunakan semasa file pertama kali di-upload. |
| Backup channel | Channel yang menyimpan redundant copy. |
| Primary read source | File sedang dibaca dari primary channel. |
| Backup read source | File sedang dibaca dari backup channel. |

Primary dan backup read sources mempunyai user-facing behavior yang sama.

Selagi backup file tersedia, images, videos dan download links terus berfungsi selepas switch ke backup read source.

## Apa Berlaku Apabila File Dipadam

Apabila file dipadam, ImgBed delete primary file dan backup file.
