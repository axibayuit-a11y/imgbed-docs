# Federated Distributed Index

Federated distributed index memungkinkan beberapa situs ImgBed saling berbagi daftar file.

Sederhananya:

- Anda bisa membagikan folder tertentu dari situs Anda ke pemilik node lain.
- Anda bisa bergabung ke node lain dan menyinkronkan daftar file yang mereka bagikan ke panel admin Anda.
- File federated terutama dipakai untuk dilihat, dicari, dan dibuka linknya. File tersebut tidak diupload ulang ke storage Anda sendiri.

## Lokasi Pengaturan

Buka:

```text
System Settings -> Other Settings -> Federated Distributed Index
```

![Local federation node](../../image/other/联盟图/联盟分布式索引本地节点.png)

Halaman ini memiliki tiga tab:

| Tab | Fungsi |
| --- | --- |
| Local Node | Mengaktifkan node Anda, memastikan domain publik, memilih folder yang dibagikan, dan memperbarui outbound index |
| Nodes I Joined | Mengelola node ImgBed lain yang Anda ikuti |
| Nodes Joining Me | Mengelola permintaan dari pemilik lain yang ingin bergabung ke node Anda |

## Setup Pertama Kali

1. Buka `Local Node`.
2. Aktifkan `Enable`.
3. Pilih folder yang ingin dibagikan di `Sync folders`.
4. Klik `Update Outbound Index`.
5. Jika ImgBed mendeteksi perubahan domain, pastikan domain saat ini sudah benar sebelum lanjut.

Anda bisa memilih beberapa sync folder.

Jika daftar sync folder kosong, semua folder akan dibagikan.

## Local Node

### Public Domain

Public domain adalah URL situs yang dipakai node lain untuk mengakses node Anda.

ImgBed mendeteksinya otomatis. Anda tidak perlu mengetiknya manual. Saat pertama kali memperbarui index, ImgBed akan meminta konfirmasi apakah URL akses saat ini adalah domain produksi.

Jika domain berubah di kemudian hari, proses update index akan meminta konfirmasi lagi.

### Sync Folders

Sync folders menentukan file mana yang dibagikan ke federation nodes.

Misalnya Anda hanya memilih:

```text
/1/
/2/
```

Maka node lain hanya bisa melihat file di dua direktori tersebut.

### Update Outbound Index

Tombol ini memperbarui daftar file yang bisa disinkronkan node lain dari Anda.

Gunakan saat:

- Anda pertama kali mengaktifkan federation.
- Anda mengupload file baru yang ingin dibagikan.
- Anda mengubah sync folders.
- Anda mengubah public domain dan perlu mengonfirmasinya.

## Nodes I Joined

`Nodes I Joined` adalah tempat Anda berlangganan ke node lain.

![Nodes I joined](../../image/other/联盟图/我加入的节点.png)

### Meminta Bergabung ke Node Lain

1. Minta invitation link kepada pemilik node tersebut.
2. Tempelkan link ke kotak input.
3. Klik `Request to Join`.
4. Tunggu pemilik node menyetujui permintaan di panel admin mereka.

Setelah disetujui, status node akan menjadi approved.

### Update Inbound Index

`Update Inbound Index` menyinkronkan daftar file dari node yang Anda ikuti.

Gunakan saat:

- Pemilik node baru saja menyetujui permintaan Anda.
- Pemilik node memberi tahu bahwa konten yang dibagikan sudah diperbarui.
- Anda ingin menyegarkan semua daftar file federation yang diikuti.

Untuk memperbarui satu node saja, klik `Update Index` pada card node tersebut.

![Update index](../../image/other/联盟图/更新索引.png)

### Unsubscribe

Jika tidak ingin lagi menyinkronkan node tertentu, klik `Unsubscribe`.

Setelah unsubscribe, federated index dari node tersebut akan dihapus dari situs lokal Anda.

## Nodes Joining Me

`Nodes Joining Me` adalah tempat menangani permintaan dari pemilik lain.

![Nodes joining me](../../image/other/联盟图/加入我的节点.png)

### Membuat Invitation Link

1. Pastikan local node sudah aktif.
2. Klik `Update Outbound Index` setidaknya sekali agar ImgBed mengonfirmasi public domain.
3. Buka `Nodes Joining Me`.
4. Klik `Reset Invitation Link`.
5. Salin invitation link dan kirim ke pemilik node lain.

Jika invitation link kosong, biasanya public domain belum dikonfirmasi. Kembali ke `Local Node`, lalu klik `Update Outbound Index`.

### Menangani Permintaan Bergabung

Saat seseorang mengirim permintaan, permintaan tersebut muncul di daftar `Nodes Joining Me`.

| Aksi | Arti |
| --- | --- |
| Approve | Mengizinkan node lain menyinkronkan daftar file yang Anda bagikan |
| Reject | Menolak permintaan bergabung |
| Delete | Menghapus catatan yang sudah selesai |
| Check Status | Mengecek apakah pihak lain masih mempertahankan hubungan ini |

Setelah Anda menyetujui, pihak lain tetap perlu mengklik `Update Inbound Index` sebelum file yang Anda bagikan muncul di sisi mereka.

![Approve invited node](../../image/other/联盟图/邀请节点同意.png)

## Messages

Setelah hubungan disetujui, klik `Message` pada card node.

Pesan hanya dipakai untuk komunikasi tentang hubungan federation. Pesan tidak mengubah file, tag, direktori, atau permission.

![Messages](../../image/other/联盟图/留言功能.png)

## Melihat Federated Files

Setelah sinkronisasi selesai, kembali ke daftar file di admin.

Di bagian atas halaman, pindah antara local files dan federated files. Pada federated files, Anda bisa melihat konten yang sudah disinkronkan.

Federated files terutama dipakai untuk melihat, mencari, preview, dan menyalin link. Karena bukan file lokal, Anda tidak bisa memindahkan, menghapus, mengganti tag, atau membackupnya dari situs sendiri.

![Federated files in admin](../../image/other/联盟图/联盟管理显示效果图.png)

## FAQ

### Kenapa Diminta Mengajukan Ulang Karena Tidak Ada Relationship Record?

Biasanya ini berarti pihak lain sudah menghapus Anda beserta catatannya, sehingga hubungan tidak lagi ditemukan. Kirim permintaan bergabung baru.

![Reapply when no relationship record exists](../../image/other/联盟图/无关系记录重新申请.png)

### Kenapa File Tidak Terlihat Setelah Bergabung?

Periksa:

1. Pemilik node lain sudah menyetujui permintaan Anda.
2. Pemilik node lain sudah mengklik `Update Outbound Index`.
3. Anda sudah mengklik `Update Inbound Index`.
4. Sync folders milik pemilik node lain memang mencakup direktori yang ingin mereka bagikan.

### Apa yang Harus Dilakukan Jika Terdeteksi Perubahan Domain?

Jika Anda sedang membuka panel admin melalui domain produksi, konfirmasi dan lanjutkan.

Jika memakai alamat sementara, batalkan dulu, buka ulang panel admin dengan domain produksi, lalu coba lagi.

### Apa Arti Daftar Sync Folder Kosong?

Daftar sync folder kosong berarti semua folder dibagikan.

Untuk membagikan hanya sebagian direktori, pilih folder tersebut secara manual.

### Perbedaan Outbound dan Inbound Index Update

| Tombol | Arti Sederhana |
| --- | --- |
| Update Outbound Index | Memperbarui data yang bisa disinkronkan orang lain dari saya |
| Update Inbound Index | Memperbarui data yang saya sinkronkan dari orang lain |
