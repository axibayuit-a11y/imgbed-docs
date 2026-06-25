# Indeks Terdistribusi Federatif

Indeks terdistribusi federatif memungkinkan beberapa situs ImgBed saling berbagi daftar file.

Secara sederhana:

- Anda dapat membagikan folder tertentu dari situs Anda kepada orang lain.
- Anda dapat bergabung ke node lain dan menyinkronkan daftar file yang dibagikan node tersebut ke panel admin Anda.
- File federatif terutama digunakan untuk penelusuran, pencarian, dan pembukaan tautan. File tersebut tidak diupload ulang ke penyimpanan Anda sendiri.

## Tempat Mengonfigurasinya

Buka:

```text
System Settings -> Other Settings -> Federated Distributed Index
```

![Node federasi lokal](../../image/other/联盟图/联盟分布式索引本地节点.png)

Halaman ini memiliki tiga tab:

| Tab | Tujuan |
| --- | --- |
| Node Lokal | Mengaktifkan node Anda, mengonfirmasi domain publik, memilih folder yang dibagikan, dan memperbarui indeks keluar |
| Node yang Saya Ikuti | Mengelola node ImgBed lain yang sudah Anda ikuti |
| Node yang Bergabung ke Saya | Mengelola permintaan dari pihak lain yang ingin bergabung ke node Anda |

## Penyiapan Pertama Kali

1. Buka `Local Node`.
2. Aktifkan `Enable`.
3. Pilih folder yang akan dibagikan di `Sync folders`.
4. Klik `Update Outbound Index`.
5. Jika ImgBed mendeteksi perubahan domain, konfirmasikan bahwa domain saat ini sudah benar sebelum melanjutkan.

Anda dapat memilih beberapa folder sinkronisasi.

Jika daftar folder sinkronisasi kosong, semua folder akan dibagikan.

## Node Lokal

### Domain Publik

Domain publik adalah URL situs yang digunakan node lain untuk mengakses node Anda.

ImgBed mendeteksinya secara otomatis. Anda tidak perlu mengetiknya secara manual. Saat pertama kali memperbarui indeks, ImgBed meminta Anda mengonfirmasi apakah URL akses saat ini merupakan domain produksi.

Jika Anda mengganti domain di kemudian hari, pembaruan indeks akan meminta konfirmasi lagi.

### Folder Sinkronisasi

Folder sinkronisasi menentukan file mana yang dibagikan kepada node federasi.

Misalnya, jika Anda hanya memilih:

```text
/1/
/2/
```

Node lain hanya dapat melihat file di dua direktori tersebut.

### Memperbarui Indeks Keluar

Ini memperbarui daftar file yang dapat disinkronkan node lain dari Anda.

Gunakan saat:

- Anda mengaktifkan federasi untuk pertama kali.
- Anda mengupload file yang ingin dibagikan.
- Anda mengubah folder sinkronisasi.
- Anda mengubah domain publik dan perlu mengonfirmasinya.

## Node yang Saya Ikuti

`Nodes I Joined` adalah tempat Anda berlangganan ke node lain.

![Node yang saya ikuti](../../image/other/联盟图/我加入的节点.png)

### Meminta Bergabung ke Node Lain

1. Minta tautan undangan kepada pemilik lain.
2. Tempelkan tautan tersebut ke kotak input.
3. Klik `Request to Join`.
4. Tunggu pemilik lain menyetujuinya di panel admin mereka.

Setelah disetujui, status node menjadi disetujui.

### Memperbarui Indeks Masuk

`Update Inbound Index` menyinkronkan daftar file dari node yang sudah Anda ikuti.

Gunakan saat:

- Pemilik lain baru saja menyetujui permintaan Anda.
- Pemilik lain memberi tahu bahwa konten yang dibagikan sudah diperbarui.
- Anda ingin menyegarkan semua daftar file federatif dari node yang diikuti.

Untuk memperbarui satu node saja, klik `Update Index` pada kartu node tersebut.

![Memperbarui indeks](../../image/other/联盟图/更新索引.png)

### Berhenti Berlangganan

Jika Anda tidak ingin lagi menyinkronkan suatu node, klik `Unsubscribe`.

Setelah berhenti berlangganan, indeks federatif node tersebut dihapus dari situs lokal Anda.

## Node yang Bergabung ke Saya

`Nodes Joining Me` adalah tempat Anda menangani permintaan dari orang lain.

![Node yang bergabung ke saya](../../image/other/联盟图/加入我的节点.png)

### Membuat Tautan Undangan

1. Pastikan node lokal sudah diaktifkan.
2. Klik `Update Outbound Index` setidaknya sekali agar ImgBed mengonfirmasi domain publik.
3. Buka `Nodes Joining Me`.
4. Klik `Reset Invitation Link`.
5. Salin tautan undangan dan kirimkan kepada pemilik lain.

Jika tautan undangan kosong, biasanya domain publik belum dikonfirmasi. Kembali ke `Local Node` dan klik `Update Outbound Index`.

### Menangani Permintaan Bergabung

Saat seseorang mengirim permintaan, permintaan tersebut muncul di daftar `Nodes Joining Me`.

| Tindakan | Arti |
| --- | --- |
| Setujui | Mengizinkan node lain menyinkronkan daftar file yang Anda bagikan |
| Tolak | Menolak permintaan bergabung |
| Hapus | Menghapus catatan yang sudah selesai |
| Periksa Status | Memeriksa apakah pihak lain masih mempertahankan hubungan ini |

Setelah disetujui, pihak lain tetap perlu mengklik `Update Inbound Index` sebelum file yang Anda bagikan muncul di sisi mereka.

![Menyetujui node yang diundang](../../image/other/联盟图/邀请节点同意.png)

## Pesan

Setelah hubungan disetujui, klik `Message` pada kartu node.

Pesan hanya digunakan untuk komunikasi tentang hubungan federasi. Pesan tidak mengubah file, tag, direktori, atau izin.

![Pesan](../../image/other/联盟图/留言功能.png)

## Melihat File Federatif

Setelah sinkronisasi selesai, kembali ke daftar file admin.

Di bagian atas halaman, beralihlah antara file lokal dan file federatif. Pada file federatif, Anda dapat menelusuri konten yang sudah disinkronkan.

File federatif terutama digunakan untuk melihat, mencari, melakukan pratinjau, dan menyalin tautan. File tersebut bukan file lokal, sehingga Anda tidak dapat memindahkan, menghapus, mengganti tag, atau mencadangkannya dari situs Anda sendiri.

![File federatif di admin](../../image/other/联盟图/联盟管理显示效果图.png)

## Pertanyaan Umum

### Mengapa Saya Diminta Mengajukan Ulang Karena Tidak Ada Catatan Hubungan?

Ini biasanya berarti pihak lain telah menghapus Anda dan menghapus catatannya, sehingga hubungan Anda tidak lagi dapat ditemukan. Kirim permintaan bergabung baru.

![Ajukan ulang saat tidak ada catatan hubungan](../../image/other/联盟图/无关系记录重新申请.png)

### Mengapa Saya Tidak Melihat File Setelah Bergabung?

Periksa:

1. Pemilik lain sudah menyetujui permintaan Anda.
2. Pemilik lain sudah mengklik `Update Outbound Index`.
3. Anda sudah mengklik `Update Inbound Index`.
4. Folder sinkronisasi milik pemilik lain mencakup direktori yang ingin mereka bagikan.

### Apa yang Harus Dilakukan Saat Perubahan Domain Terdeteksi?

Jika Anda saat ini membuka panel admin melalui domain produksi, konfirmasikan dan lanjutkan.

Jika Anda menggunakan alamat sementara, batalkan, buka ulang panel admin menggunakan domain produksi, lalu coba lagi.

### Apa Arti Daftar Folder Sinkronisasi Kosong?

Daftar folder sinkronisasi kosong berarti semua folder dibagikan.

Untuk membagikan hanya sebagian direktori, pilih folder tersebut secara manual.

### Perbedaan Pembaruan Indeks Keluar dan Masuk

| Tombol | Arti Sederhana |
| --- | --- |
| Update Outbound Index | Memperbarui apa yang dapat disinkronkan orang lain dari saya |
| Update Inbound Index | Memperbarui apa yang sudah saya sinkronkan dari orang lain |
