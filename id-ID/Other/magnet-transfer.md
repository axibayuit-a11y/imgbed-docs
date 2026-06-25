# Transfer Magnet

Transfer magnet mengunduh file dari tautan magnet, lalu menguploadnya secara otomatis ke kanal penyimpanan cloud yang Anda pilih.

Fitur ini berguna untuk memindahkan episode anime, video, arsip, dan file sejenis. Tempelkan tautan magnet, lalu ImgBed membuat tugas unduhan di latar belakang. Setelah unduhan selesai, file diupload ke ImgBed dan tautan akhir muncul di daftar upload.

![Transfer magnet](../../image/other/磁力链接/磁力链接.png)

## Tempat Menggunakannya

Entri transfer magnet berada di area upload halaman beranda.

Tempelkan tautan magnet ke kotak input, pilih `Transfer`, lalu upload.

![Upload anime](../../image/other/磁力链接/上传番剧.png)

## Sebelum Penggunaan Pertama

Konfigurasikan transfer magnet di panel admin terlebih dahulu.

Biasanya Anda membutuhkan:

1. Akun GitHub untuk menjalankan tugas unduhan.
2. Kanal upload cloud, seperti Google Drive atau OneDrive.
3. Direktori upload tujuan.
4. Batas waktu tugas.

Setelah pengaturan siap, kembali ke halaman beranda dan tempelkan tautan magnet untuk memulai transfer.

## Mengupload Tautan Magnet

1. Tempelkan tautan magnet ke kotak upload halaman beranda.
2. Pastikan mode diatur ke `Transfer`.
3. Klik upload.
4. Tunggu ImgBed membuat tugas magnet.
5. Setelah tugas dimulai, gunakan panel mengambang `Magnet Tasks` di sudut kanan bawah untuk memeriksa progres.

Unduhan dan upload dapat memakan waktu. Kecepatan bergantung pada sumber magnet, lingkungan runtime GitHub, dan kanal penyimpanan cloud yang dipilih.

![Magnet sedang diunduh](../../image/other/磁力链接/磁力链接下载中.png)

## Setelah Selesai

Setelah tugas selesai, daftar upload menampilkan nama file dan tautan.

Video menampilkan pratinjau video, gambar menampilkan pratinjau gambar, dan file lain menampilkan ikon file biasa.

![Video yang sudah diunduh](../../image/other/磁力链接/下载好后的视频.png)

Anda dapat menyalin:

| Jenis Tautan | Kasus Penggunaan |
| --- | --- |
| Tautan asli | Akses file langsung |
| Markdown | Post atau catatan Markdown |
| HTML | Kode halaman web |
| BBCode | Forum yang mendukung BBCode |

## Panel Tugas Magnet

Panel tugas magnet di kanan bawah menampilkan jumlah tugas, nama tugas, progres, dan status akhir.

Status umum:

| Status | Arti |
| --- | --- |
| Menunggu | Tugas sudah dibuat dan menunggu dijalankan. |
| Mengunduh | Sumber magnet sedang diunduh. |
| Mengupload | File sudah selesai diunduh dan sedang diupload ke penyimpanan cloud. |
| Selesai | Upload berhasil dan tautan dapat disalin. |
| Gagal | Tugas tidak selesai dengan sukses. Periksa pesan yang muncul, lalu coba lagi. |

## Tips

- Jika satu tautan magnet berisi beberapa file, ImgBed memprioritaskan file utama yang sudah selesai untuk ditampilkan.
- File besar membutuhkan waktu lebih lama. Tunggu tugas selesai sebelum menyegarkan halaman.
- Jika sumber magnet tidak memiliki peer yang tersedia, proses dapat sangat lambat atau gagal.
- Jika kuota akun cloud habis, otorisasi kedaluwarsa, atau direktori upload salah, tugas dapat gagal.
- Pratinjau video mungkin membutuhkan beberapa detik setelah upload selesai.

## Pertanyaan Umum

### Tidak Ada yang Berjalan Setelah Tautan Magnet Ditempel

Pastikan transfer magnet sudah diaktifkan di panel admin, dan akun GitHub serta kanal cloud yang dapat digunakan sudah dipilih.

### Unduhan Selalu Lambat

Kecepatan magnet bergantung pada sumber itu sendiri. Jika tidak ada peer yang tersedia, unduhan dapat sangat lambat atau tidak mungkin dilakukan.

### Tidak Ada Pratinjau Setelah Upload

Pastikan tautan file dapat dibuka. File video mungkin membutuhkan waktu singkat untuk dimuat di browser, atau Anda dapat membuka tautan secara langsung.

### Apa yang Perlu Dicek Jika Tugas Gagal?

Periksa apakah tautan magnet valid, apakah kanal cloud berfungsi, dan apakah direktori upload sudah benar. Setelah itu kirim tugas lagi.
