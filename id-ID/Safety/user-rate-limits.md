# User Rate Limits

User rate limits mengontrol seberapa sering regular users atau visitors dapat upload files dari homepage. Ini membantu mencegah public upload pages disalahgunakan.

Feature ini hanya memengaruhi homepage uploads. Admin uploads dan uploads menggunakan API Tokens tidak dibatasi oleh user rate limits.

## Di Mana Mengonfigurasinya

Buka admin panel, lalu masuk ke:

```text
System Settings -> Security Settings -> Upload Management -> User Rate Limits
```

![User rate limit settings](../../image/other/用户频控截图.png)

## Mengaktifkan Rate Limits

Setelah `Enable Rate Limits` dinyalakan, ImgBed track recent uploads berdasarkan uploader IP address.

Default values:

| Setting | Default | Description |
| --- | --- | --- |
| Detection window | 1.5 hours | Seberapa jauh upload records dihitung ke belakang. |
| Max file count | 20 | Jumlah files maksimum yang diizinkan dalam detection window. |
| Single file size limit | 20 MB | Ukuran maksimum satu file. |
| Total upload size limit | 200 MB | Total upload size maksimum dalam detection window. |

Contohnya, dengan 1.5 hour window, 20 files, 20 MB per file, dan 200 MB total, uploads dari IP yang sama akan diblock begitu melewati salah satu configured limit.

## Excluding File Types

`Excluded upload file types` memblokir regular users atau visitors agar tidak upload file categories yang dipilih.

Available categories:

| Type | Description |
| --- | --- |
| Images | jpg, png, webp, gif, dan image files sejenis |
| Videos | mp4, webm, mov, dan video files sejenis |
| Audio | mp3, flac, wav, dan audio files sejenis |
| Documents | pdf, txt, md, docx, dan document files sejenis |
| Other | Files di luar categories di atas, seperti zip, rar, exe, apk |

Secara default, tidak ada type yang dipilih, artinya allowed.

Mengklik type akan membuatnya highlight, artinya type tersebut blocked.

Jika `Other` dipilih, visitors yang upload zip atau rar files akan diblock dan diberi tahu bahwa file type ini tidak didukung.

## Block Messages

Saat limit triggered, users melihat message yang sesuai:

![Too frequent upload message](../../image/other/频繁报错提示.png)

| Scenario | Message Meaning |
| --- | --- |
| Single file too large | File terlalu besar dan sebaiknya dicompress sebelum upload. |
| File type blocked | File type ini tidak didukung. Hapus file tersebut dan coba lagi. |
| Uploads too frequent | Recent uploads terlalu sering, dengan retry time ditampilkan. |
| Total size too high | Recent total upload size terlalu tinggi, dengan retry time ditampilkan. |

## Kapan Perlu Enable

Enable user rate limits jika upload homepage Anda publicly accessible.

Alasan umum:

- Anda khawatir dengan scripted bulk uploads.
- Anda ingin membatasi large visitor uploads.
- Anda hanya ingin regular users upload images, bukan archives atau installers.
- Anda ingin public upload tetap tersedia sambil mengontrol resource usage.

Jika site hanya untuk Anda sendiri, atau hanya administrators yang bisa upload, biarkan disabled.
