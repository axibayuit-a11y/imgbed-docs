# Redundant Backup এবং Read Source Switching

Redundant backup already uploaded file-এর একটি extra copy store করে।

Primary file এবং backup file দুটিই read sources হিসেবে ব্যবহার করা যায়। Visitors সাধারণত কোনো পার্থক্য দেখে না। পার্থক্য শুধু কোন storage channel file serve করছে।

## Redundant Backup কী করতে পারে

| Feature | Description |
| --- | --- |
| Extra copy store | Single channel failure-এর risk কমাতে files অন্য upload channel-এ back up করে। |
| Read source switch | Backup সফল হলে file reads primary channel এবং backup channel-এর মধ্যে switch করে। |
| Single-file backup | File details page থেকে একটি file back up করুন। |
| Batch backup | Admin page-এ multiple files select করে একসঙ্গে back up করুন। |
| Global redundant backup | Other Settings থেকে folder অনুযায়ী files back up করুন। |

## Redundant Backup Entry

খুলুন:

```text
System Settings -> Other Settings -> Redundant Backup
```

![Redundant backup](../../image/other/冗余备份截图.png)

Folder বা সব files-এ bulk backup যোগ করার জন্য এই entry ভালো।

Backup channel manually select করা যায়, অথবা automatic switching বেছে নিয়ে ImgBed-কে suitable backup channel খুঁজতে দিতে পারেন।

## File Details থেকে Backup

Admin panel-এ file details page খুলে backup ক্লিক করুন।

![Backup in file details](../../image/other/文件详情里文件备份.png)

একটি important file on demand back up করার জন্য এটি সবচেয়ে ভালো।

Backup successful হলে file details page available read sources দেখায়।

## Selection দিয়ে Batch Backup

Admin panel-এ multiple files select করে batch backup run করুন।

![Batch backup](../../image/other/批量备份截图.png)

Files-এর একটি group process করার জন্য এটি ভালো।

Selection backup, file details backup এবং Other Settings-এর redundant backup একই backup system ব্যবহার করে। এগুলো শুধু আলাদা entry points।

## Backup-এর পর Read Source Switch

Backup complete হলে file details page read source switch করতে দেয়:

| Read Source | Description |
| --- | --- |
| Primary channel | Original upload channel থেকে read করে। |
| Backup channel | Backup channel থেকে read করে। |

![Switch read source after backup](../../image/other/备份成功切换读取源.png)

Visitors-কে file primary channel নাকি backup channel থেকে serve হচ্ছে জানতে হয় না।

আপনি যে read source নির্বাচন করেন সেটিই পরে file access-এর preferred source হয়।

## Backup কখন Skip হয়

নিচের cases backup-এর সময় skip হয়। এগুলো errors নয়।

| Case | Why It Is Skipped |
| --- | --- |
| Already backed up | যে file-এর backup আগে থেকেই আছে সেটি আবার back up করা হয় না। |
| Primary এবং backup channels একই | Meaningful backup-এর জন্য copy অন্য channel-এ store হতে হবে। |
| No usable backup channel | Suitable alternative channel available নেই। |

সংক্ষেপে: backups অন্য channel-এ যেতে হবে, এবং already backed-up files আবার extra space consume করে না।

## Primary Channel vs Backup Channel

| Name | Meaning |
| --- | --- |
| Primary channel | File প্রথম upload হওয়ার সময় যে channel ব্যবহার হয়েছে। |
| Backup channel | Redundant copy যেখানে stored। |
| Primary read source | File currently primary channel থেকে read হচ্ছে। |
| Backup read source | File currently backup channel থেকে read হচ্ছে। |

Primary এবং backup read sources-এর user-facing behavior একই।

Backup file available থাকলে backup read source-এ switch করার পর images, videos এবং download links কাজ করতে থাকে।

## File Delete হলে কী হয়

File delete করলে ImgBed primary file এবং backup file দুটোই delete করে।
