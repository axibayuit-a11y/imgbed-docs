# Cadangan Redundan dan Pengalihan Sumber Baca

Cadangan redundan menyimpan salinan tambahan dari file yang sudah diupload.

File utama dan file cadangan sama-sama dapat digunakan sebagai sumber baca. Pengunjung biasanya tidak melihat perbedaan. Satu-satunya perbedaan adalah kanal penyimpanan yang menyajikan file tersebut.

## Yang Dapat Dilakukan Cadangan Redundan

| Fitur | Deskripsi |
| --- | --- |
| Menyimpan salinan tambahan | Mencadangkan file ke kanal upload lain untuk mengurangi risiko kegagalan pada satu kanal. |
| Mengalihkan sumber baca | Setelah cadangan berhasil, pembacaan file dapat dialihkan antara kanal utama dan kanal cadangan. |
| Cadangan satu file | Mencadangkan satu file dari halaman detail file. |
| Cadangan batch | Memilih beberapa file di halaman admin dan mencadangkannya bersama-sama. |
| Cadangan redundan global | Mencadangkan file berdasarkan folder dari Pengaturan Lainnya. |

## Entri Cadangan Redundan

Buka:

```text
System Settings -> Other Settings -> Redundant Backup
```

![Cadangan redundan](../../image/other/冗余备份截图.png)

Entri ini paling cocok untuk menambahkan cadangan ke satu folder atau ke semua file secara massal.

Kanal cadangan dapat dipilih secara manual, atau Anda dapat memilih pengalihan otomatis dan membiarkan ImgBed mencari kanal cadangan yang sesuai.

## Cadangan dari Detail File

Buka halaman detail file di panel admin, lalu klik cadangkan.

![Cadangan di detail file](../../image/other/文件详情里文件备份.png)

Cara ini paling cocok untuk mencadangkan satu file penting sesuai kebutuhan.

Setelah cadangan berhasil, halaman detail file menampilkan sumber baca yang tersedia.

## Cadangan Batch Berdasarkan Pilihan

Di panel admin, pilih beberapa file dan jalankan cadangan batch.

![Cadangan batch](../../image/other/批量备份截图.png)

Cara ini paling cocok untuk memproses sekumpulan file.

Cadangan berdasarkan pilihan, cadangan dari detail file, dan cadangan redundan di Pengaturan Lainnya semuanya menggunakan sistem cadangan yang sama. Perbedaannya hanya pada titik masuk.

## Mengalihkan Sumber Baca Setelah Cadangan

Setelah cadangan selesai, halaman detail file memungkinkan Anda mengalihkan sumber baca:

| Sumber Baca | Deskripsi |
| --- | --- |
| Kanal utama | Membaca dari kanal upload asli. |
| Kanal cadangan | Membaca dari kanal cadangan. |

![Mengalihkan sumber baca setelah cadangan](../../image/other/备份成功切换读取源.png)

Pengunjung tidak perlu tahu apakah file disajikan dari kanal utama atau kanal cadangan.

Sumber baca yang Anda pilih menjadi sumber pilihan untuk akses file berikutnya.

## Kapan Cadangan Dilewati

Kasus berikut dilewati saat pencadangan. Ini bukan kesalahan.

| Kasus | Mengapa Dilewati |
| --- | --- |
| Sudah dicadangkan | File yang sudah memiliki cadangan tidak dicadangkan ulang. |
| Kanal utama dan kanal cadangan sama | Cadangan harus disimpan di kanal lain agar bermakna. |
| Tidak ada kanal cadangan yang dapat digunakan | Tidak ada kanal alternatif yang sesuai. |

Singkatnya: cadangan harus disimpan di kanal lain, dan file yang sudah dicadangkan tidak menggunakan ruang tambahan lagi.

## Kanal Utama vs Kanal Cadangan

| Nama | Arti |
| --- | --- |
| Kanal utama | Kanal yang digunakan saat file pertama kali diupload. |
| Kanal cadangan | Kanal yang menyimpan salinan redundan. |
| Sumber baca utama | File saat ini dibaca dari kanal utama. |
| Sumber baca cadangan | File saat ini dibaca dari kanal cadangan. |

Sumber baca utama dan cadangan memiliki perilaku yang sama bagi pengguna.

Selama file cadangan masih tersedia, gambar, video, dan tautan unduhan tetap berfungsi setelah sumber baca dialihkan ke sumber baca cadangan.

## Apa yang Terjadi Saat File Dihapus

Saat file dihapus, ImgBed menghapus file utama dan file cadangan.
