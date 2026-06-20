# Magnet Transfer

Magnet transfer mengunduh file dari magnet link, lalu otomatis menguploadnya ke cloud storage channel yang Anda pilih.

Fitur ini berguna untuk memindahkan episode anime, video, arsip, dan file sejenis. Tempelkan magnet link, lalu ImgBed membuat background download task. Setelah download selesai, file akan diupload ke ImgBed dan link akhir muncul di daftar upload.

![Magnet transfer](../../image/other/磁力链接/磁力链接.png)

## Lokasi Pemakaian

Entry magnet transfer ada di area upload homepage.

Tempelkan magnet link ke kotak input, pilih `Transfer`, lalu upload.

![Upload anime](../../image/other/磁力链接/上传番剧.png)

## Sebelum Pertama Kali Dipakai

Konfigurasikan magnet transfer di panel admin terlebih dahulu.

Biasanya Anda membutuhkan:

1. Akun GitHub untuk menjalankan download task.
2. Cloud upload channel, misalnya Google Drive atau OneDrive.
3. Direktori upload tujuan.
4. Task timeout.

Setelah pengaturan siap, kembali ke homepage dan tempelkan magnet link untuk mulai transfer.

## Mengupload Magnet Link

1. Tempelkan magnet link ke kotak upload di homepage.
2. Pastikan mode sudah diatur ke `Transfer`.
3. Klik upload.
4. Tunggu ImgBed membuat magnet task.
5. Setelah task dimulai, gunakan panel mengambang `Magnet Tasks` di kanan bawah untuk memeriksa progress.

Download dan upload bisa memakan waktu. Kecepatan bergantung pada resource magnet, runtime GitHub, dan cloud storage channel yang dipilih.

![Magnet downloading](../../image/other/磁力链接/磁力链接下载中.png)

## Setelah Selesai

Setelah task selesai, daftar upload menampilkan nama file dan link.

Video menampilkan preview video, gambar menampilkan preview gambar, dan file lain menampilkan ikon file biasa.

![Downloaded video](../../image/other/磁力链接/下载好后的视频.png)

Anda bisa menyalin:

| Jenis Link | Kegunaan |
| --- | --- |
| Original link | Akses file langsung |
| Markdown | Post Markdown atau catatan |
| HTML | Kode halaman web |
| BBCode | Forum yang mendukung BBCode |

## Panel Magnet Task

Panel magnet task di kanan bawah menampilkan jumlah task, nama task, progress, dan status akhir.

Status umum:

| Status | Arti |
| --- | --- |
| Waiting | Task sudah dibuat dan menunggu dijalankan. |
| Downloading | Resource magnet sedang diunduh. |
| Uploading | File sudah selesai diunduh dan sedang diupload ke cloud storage. |
| Completed | Upload berhasil dan link bisa disalin. |
| Failed | Task tidak selesai dengan sukses. Periksa pesan yang muncul, lalu coba lagi. |

## Tips

- Jika satu magnet link berisi beberapa file, ImgBed memprioritaskan file utama yang sudah selesai untuk ditampilkan.
- File besar membutuhkan waktu lebih lama. Tunggu task selesai sebelum refresh halaman.
- Jika resource magnet tidak memiliki peer yang tersedia, proses bisa sangat lambat atau gagal.
- Jika kuota cloud account habis, authorization kedaluwarsa, atau direktori upload salah, task bisa gagal.
- Preview video mungkin butuh beberapa detik setelah upload selesai.

## FAQ

### Tidak Ada yang Berjalan Setelah Magnet Link Ditempel

Pastikan magnet transfer sudah diaktifkan di panel admin, dan akun GitHub serta cloud channel yang dapat dipakai sudah dipilih.

### Download Selalu Lambat

Kecepatan magnet bergantung pada resource itu sendiri. Jika tidak ada peer yang tersedia, download bisa sangat lambat atau tidak mungkin dilakukan.

### Preview Tidak Muncul Setelah Upload

Pastikan link file bisa dibuka. Untuk file video, browser mungkin butuh waktu singkat untuk memuatnya, atau Anda bisa membuka link secara langsung.

### Apa yang Perlu Dicek Jika Task Gagal?

Periksa apakah magnet link valid, cloud channel berjalan normal, dan direktori upload sudah benar. Setelah itu kirim task lagi.
