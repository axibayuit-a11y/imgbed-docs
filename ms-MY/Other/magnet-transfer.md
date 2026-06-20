# Magnet Transfer

Magnet transfer memuat turun files daripada magnet link dan meng-uploadnya secara automatik ke cloud storage channel yang anda pilih.

Ia berguna untuk memindahkan anime episodes, videos, archives dan files seumpamanya. Paste magnet link, ImgBed mencipta background download task. Selepas download selesai, file di-upload ke ImgBed dan final link muncul dalam upload list.

![Magnet transfer](../../image/other/磁力链接/磁力链接.png)

## Di Mana Untuk Menggunakannya

Magnet transfer entry berada dalam homepage upload area.

Paste magnet link ke input box, pilih `Transfer`, kemudian upload.

![Upload anime](../../image/other/磁力链接/上传番剧.png)

## Sebelum Penggunaan Pertama

Configure magnet transfer dalam admin panel dahulu.

Biasanya anda perlukan:

1. GitHub account untuk menjalankan download task.
2. Cloud upload channel, seperti Google Drive atau OneDrive.
3. Target upload directory.
4. Task timeout.

Selepas settings sedia, kembali ke homepage dan paste magnet link untuk memulakan transfer.

## Upload Magnet Link

1. Paste magnet link ke homepage upload box.
2. Pastikan mode ditetapkan kepada `Transfer`.
3. Klik upload.
4. Tunggu ImgBed mencipta magnet task.
5. Selepas task bermula, gunakan floating panel `Magnet Tasks` di penjuru kanan bawah untuk menyemak progress.

Download dan upload boleh mengambil masa. Speed bergantung pada magnet resource, GitHub runtime environment dan selected cloud storage channel.

![Magnet downloading](../../image/other/磁力链接/磁力链接下载中.png)

## Selepas Completion

Selepas task complete, upload list menunjukkan file name dan link.

Videos menunjukkan video preview, images menunjukkan image preview, dan other files menunjukkan regular file icon.

![Downloaded video](../../image/other/磁力链接/下载好后的视频.png)

Anda boleh copy:

| Link Type | Use Case |
| --- | --- |
| Original link | Direct file access |
| Markdown | Markdown posts atau notes |
| HTML | Web page code |
| BBCode | Forums yang menyokong BBCode |

## Magnet Task Panel

Magnet task panel di penjuru kanan bawah menunjukkan task count, task name, progress dan final status.

Common states:

| Status | Meaning |
| --- | --- |
| Waiting | Task telah dicipta dan menunggu untuk run. |
| Downloading | Magnet resource sedang dimuat turun. |
| Uploading | File telah download dan sedang di-upload ke cloud storage. |
| Completed | Upload berjaya dan link boleh disalin. |
| Failed | Task tidak selesai dengan berjaya. Semak message dan cuba lagi. |

## Tips

- Jika magnet link mengandungi multiple files, ImgBed mengutamakan main completed file untuk display.
- Large files mengambil masa lebih lama. Tunggu task selesai sebelum refresh page.
- Jika magnet resource tiada available peers, ia mungkin sangat perlahan atau gagal.
- Jika cloud account kehabisan quota, authorization expired, atau upload directory salah, task boleh gagal.
- Video preview mungkin mengambil beberapa saat selepas upload complete.

## FAQ

### Tiada Apa Bermula Selepas Paste Magnet Link

Pastikan magnet transfer enabled dalam admin panel dan GitHub account serta cloud channel yang boleh digunakan telah dipilih.

### Download Sentiasa Perlahan

Magnet speed bergantung pada resource itu sendiri. Jika tiada available peers, download mungkin sangat perlahan atau mustahil.

### Tiada Preview Selepas Upload

Mula-mula pastikan file link boleh dibuka. Video files mungkin memerlukan sedikit masa untuk load dalam browser, atau anda boleh buka link secara langsung.

### Apa Perlu Disemak Jika Task Gagal?

Semak sama ada magnet link valid, cloud channel berfungsi dan upload directory betul. Kemudian submit task semula.
