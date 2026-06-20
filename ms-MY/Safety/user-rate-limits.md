# User Rate Limits

User rate limits mengawal berapa kerap regular users atau visitors boleh upload files dari homepage. Ini membantu mengelakkan public upload pages daripada disalahgunakan.

Feature ini hanya mempengaruhi homepage uploads. Admin uploads dan uploads menggunakan API Tokens tidak dihadkan oleh user rate limits.

## Di Mana Untuk Configure

Buka admin panel, kemudian pergi ke:

```text
System Settings -> Security Settings -> Upload Management -> User Rate Limits
```

![User rate limit settings](../../image/other/用户频控截图.png)

## Mengaktifkan Rate Limits

Selepas `Enable Rate Limits` dihidupkan, ImgBed track recent uploads berdasarkan uploader IP address.

Default values:

| Setting | Default | Description |
| --- | --- | --- |
| Detection window | 1.5 hours | Sejauh mana upload records ke belakang akan dikira. |
| Max file count | 20 | Jumlah files maksimum yang dibenarkan dalam detection window. |
| Single file size limit | 20 MB | Saiz maksimum untuk satu file. |
| Total upload size limit | 200 MB | Jumlah upload size maksimum dalam detection window. |

Contohnya, dengan 1.5 hour window, 20 files, 20 MB setiap file dan 200 MB total, uploads dari IP yang sama akan diblock apabila mana-mana configured limit dilebihi.

## Excluding File Types

`Excluded upload file types` menghalang regular users atau visitors daripada upload file categories yang dipilih.

Available categories:

| Type | Description |
| --- | --- |
| Images | jpg, png, webp, gif dan image files seumpamanya |
| Videos | mp4, webm, mov dan video files seumpamanya |
| Audio | mp3, flac, wav dan audio files seumpamanya |
| Documents | pdf, txt, md, docx dan document files seumpamanya |
| Other | Files di luar categories di atas, seperti zip, rar, exe, apk |

Secara default, tiada type dipilih, bermaksud ia allowed.

Klik type akan highlight type tersebut, bermaksud type itu blocked.

Jika `Other` dipilih, visitors yang upload zip atau rar files akan diblock dan diberitahu bahawa file type ini tidak disokong.

## Block Messages

Apabila limit dicetuskan, users melihat message yang sepadan:

![Too frequent upload message](../../image/other/频繁报错提示.png)

| Scenario | Message Meaning |
| --- | --- |
| Single file too large | File terlalu besar dan patut dicompress sebelum upload. |
| File type blocked | File type ini tidak disokong. Buang file tersebut dan cuba lagi. |
| Uploads too frequent | Recent uploads terlalu kerap, dengan retry time dipaparkan. |
| Total size too high | Recent total upload size terlalu tinggi, dengan retry time dipaparkan. |

## Bila Patut Enable

Enable user rate limits jika upload homepage anda boleh diakses secara public.

Sebab biasa:

- Anda risau tentang scripted bulk uploads.
- Anda mahu mengehadkan large visitor uploads.
- Anda hanya mahu regular users upload images, bukan archives atau installers.
- Anda mahu public upload kekal tersedia sambil mengawal resource usage.

Jika site hanya untuk diri sendiri, atau hanya administrators boleh upload, anda boleh biarkan disabled.
