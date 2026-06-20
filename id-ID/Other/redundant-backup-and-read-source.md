# Redundant Backup dan Read Source Switching

Redundant backup menyimpan salinan tambahan dari file yang sudah diupload.

File utama dan file backup sama-sama bisa dipakai sebagai read source. Bagi pengunjung, biasanya tidak ada perbedaan. Satu-satunya perbedaan adalah storage channel mana yang menyajikan file tersebut.

## Yang Bisa Dilakukan Redundant Backup

| Fitur | Keterangan |
| --- | --- |
| Menyimpan salinan tambahan | Membackup file ke upload channel lain untuk mengurangi risiko jika satu channel bermasalah. |
| Mengganti read source | Setelah backup berhasil, pembacaan file bisa dipindah antara primary channel dan backup channel. |
| Backup satu file | Membackup satu file dari halaman detail file. |
| Batch backup | Memilih beberapa file di halaman admin lalu membackupnya bersama-sama. |
| Global redundant backup | Membackup file berdasarkan folder dari Other Settings. |

## Entry Redundant Backup

Buka:

```text
System Settings -> Other Settings -> Redundant Backup
```

![Redundant backup](../../image/other/冗余备份截图.png)

Entry ini paling cocok untuk menambahkan backup ke satu folder atau ke semua file secara massal.

Backup channel bisa dipilih manual, atau Anda bisa memilih automatic switching agar ImgBed mencari backup channel yang sesuai.

## Backup dari File Details

Buka halaman detail file di panel admin, lalu klik backup.

![Backup in file details](../../image/other/文件详情里文件备份.png)

Cara ini paling cocok untuk membackup satu file penting sesuai kebutuhan.

Setelah backup berhasil, halaman detail file menampilkan read source yang tersedia.

## Batch Backup dari Pilihan File

Di panel admin, pilih beberapa file dan jalankan batch backup.

![Batch backup](../../image/other/批量备份截图.png)

Cara ini cocok untuk memproses sekumpulan file.

Backup berdasarkan pilihan, backup dari file details, dan redundant backup di Other Settings semuanya memakai sistem backup yang sama. Bedanya hanya titik masuknya.

## Mengganti Read Source Setelah Backup

Setelah backup selesai, halaman detail file memungkinkan Anda mengganti read source:

| Read Source | Keterangan |
| --- | --- |
| Primary channel | Membaca dari upload channel asli. |
| Backup channel | Membaca dari backup channel. |

![Switch read source after backup](../../image/other/备份成功切换读取源.png)

Pengunjung tidak perlu tahu apakah file disajikan dari primary channel atau backup channel.

Read source yang Anda pilih akan menjadi sumber utama untuk akses file berikutnya.

## Kapan Backup Dilewati

Kasus berikut akan dilewati saat backup. Ini bukan error.

| Kasus | Kenapa Dilewati |
| --- | --- |
| Sudah memiliki backup | File yang sudah punya backup tidak dibackup ulang. |
| Primary dan backup channel sama | Backup harus disimpan di channel lain agar bermakna. |
| Tidak ada backup channel yang bisa dipakai | Tidak ada channel alternatif yang sesuai. |

Singkatnya: backup harus masuk ke channel lain, dan file yang sudah dibackup tidak memakai ruang tambahan lagi.

## Primary Channel vs Backup Channel

| Nama | Arti |
| --- | --- |
| Primary channel | Channel yang dipakai saat file pertama kali diupload. |
| Backup channel | Channel yang menyimpan salinan redundant. |
| Primary read source | File saat ini dibaca dari primary channel. |
| Backup read source | File saat ini dibaca dari backup channel. |

Primary dan backup read source memiliki perilaku yang sama bagi pengguna.

Selama file backup masih tersedia, gambar, video, dan link download tetap berjalan setelah read source dipindah ke backup.

## Apa yang Terjadi Saat File Dihapus

Saat file dihapus, ImgBed akan menghapus file utama dan file backup.
