# Redundant Backup و Read Source Switching

Redundant backup یک copy اضافه از fileای که قبلاً upload شده ذخیره می‌کند.

هم primary file و هم backup file می‌توانند به‌عنوان read source استفاده شوند. visitors معمولاً تفاوتی حس نمی‌کنند. تنها تفاوت این است که file از کدام storage channel serve می‌شود.

## Redundant Backup چه کارهایی می‌تواند انجام دهد

| Feature | Description |
| --- | --- |
| ذخیره copy اضافه | files را در upload channel دیگری backup می‌کند تا risk خرابی یک channel کم شود. |
| switch کردن read source | پس از موفق شدن backup، file reads را بین primary channel و backup channel جابه‌جا می‌کند. |
| single-file backup | backup گرفتن از یک file در file details page. |
| batch backup | انتخاب چند file در admin page و backup گرفتن هم‌زمان. |
| global redundant backup | backup گرفتن از files بر اساس folder از Other Settings. |

## Redundant Backup Entry

باز کنید:

```text
System Settings -> Other Settings -> Redundant Backup
```

![Redundant backup](../../image/other/冗余备份截图.png)

این entry برای اضافه کردن backups به یک folder یا همه files به‌صورت bulk مناسب است.

backup channel را می‌توانید manual انتخاب کنید، یا automatic switching را انتخاب کنید تا ImgBed خودش suitable backup channel پیدا کند.

## Backup از File Details

در admin panel، file details page را باز کنید و backup را بزنید.

![Backup in file details](../../image/other/文件详情里文件备份.png)

این روش برای backup گرفتن از یک file مهم به‌صورت on demand مناسب است.

پس از موفق شدن backup، file details page read sources موجود را نشان می‌دهد.

## Batch Backup با Selection

در admin panel چند file را انتخاب کنید و batch backup اجرا کنید.

![Batch backup](../../image/other/批量备份截图.png)

این روش برای پردازش یک گروه file مناسب است.

Selection backup، file details backup و redundant backup زیر Other Settings همگی از یک backup system استفاده می‌کنند. فقط entry pointهایشان فرق دارد.

## Switch کردن Read Source پس از Backup

پس از complete شدن backup، file details page اجازه می‌دهد read source را switch کنید:

| Read Source | Description |
| --- | --- |
| Primary channel | از original upload channel می‌خواند. |
| Backup channel | از backup channel می‌خواند. |

![Switch read source after backup](../../image/other/备份成功切换读取源.png)

visitors لازم نیست بدانند file از primary channel serve می‌شود یا backup channel.

هر read source که انتخاب کنید، برای later file access به preferred source تبدیل می‌شود.

## چه زمانی Backup Skip می‌شود

موارد زیر هنگام backup skip می‌شوند. این‌ها error نیستند.

| Case | Why It Is Skipped |
| --- | --- |
| Already backed up | file که قبلاً backup دارد دوباره backup نمی‌شود. |
| Primary and backup channels are the same | برای معنی‌دار بودن backup، copy باید در channel دیگری باشد. |
| No usable backup channel | alternative channel مناسبی وجود ندارد. |

خلاصه: backups باید به channel دیگری بروند و filesی که already backed-up هستند دوباره extra space مصرف نمی‌کنند.

## Primary Channel vs Backup Channel

| Name | Meaning |
| --- | --- |
| Primary channel | channelی که file اولین بار با آن upload شده. |
| Backup channel | channelی که redundant copy را ذخیره می‌کند. |
| Primary read source | file در حال حاضر از primary channel خوانده می‌شود. |
| Backup read source | file در حال حاضر از backup channel خوانده می‌شود. |

Primary و backup read sources از نظر user-facing behavior یکسان هستند.

تا وقتی backup file available باشد، پس از switch به backup read source، images، videos و download links همچنان کار می‌کنند.

## هنگام Delete شدن File چه می‌شود

وقتی file delete شود، ImgBed هم primary file و هم backup file را delete می‌کند.
