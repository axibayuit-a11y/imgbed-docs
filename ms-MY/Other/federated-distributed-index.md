# Indeks Teragih Bersekutu

Indeks teragih bersekutu membolehkan beberapa laman ImgBed berkongsi senarai fail antara satu sama lain.

Secara ringkas:

- Anda boleh berkongsi folder terpilih daripada laman anda dengan orang lain.
- Anda boleh menyertai nod lain dan menyegerakkan senarai fail yang dikongsi oleh nod tersebut ke panel pentadbir anda.
- Fail bersekutu digunakan terutamanya untuk melayari, mencari dan membuka pautan. Fail tersebut tidak dimuat naik semula ke storan anda sendiri.

## Tempat Mengkonfigurasikannya

Buka:

```text
System Settings -> Other Settings -> Federated Distributed Index
```

![Nod bersekutu setempat](../../image/other/联盟图/联盟分布式索引本地节点.png)

Halaman ini mempunyai tiga tab:

| Tab | Tujuan |
| --- | --- |
| Nod Setempat | Mengaktifkan nod anda, mengesahkan domain awam, memilih folder kongsi dan mengemas kini indeks keluar |
| Nod Yang Saya Sertai | Mengurus nod ImgBed lain yang telah anda sertai |
| Nod Yang Menyertai Saya | Mengurus permintaan daripada orang lain yang mahu menyertai nod anda |

## Persediaan Kali Pertama

1. Buka `Local Node`.
2. Hidupkan `Enable`.
3. Pilih folder untuk dikongsi di bawah `Sync folders`.
4. Klik `Update Outbound Index`.
5. Jika ImgBed mengesan perubahan domain, sahkan bahawa domain semasa betul sebelum meneruskan.

Anda boleh memilih berbilang folder segerak.

Jika senarai folder segerak kosong, semua folder akan dikongsi.

## Nod Setempat

### Domain Awam

Domain awam ialah URL laman yang digunakan oleh nod lain untuk mengakses nod anda.

ImgBed mengesannya secara automatik. Anda tidak perlu menaipnya secara manual. Kali pertama anda mengemas kini indeks, ImgBed meminta anda mengesahkan sama ada URL akses semasa ialah domain produksi.

Jika anda menukar domain kemudian, kemas kini indeks akan meminta pengesahan sekali lagi.

### Folder Segerak

Folder segerak menentukan fail mana yang dikongsi dengan nod bersekutu.

Contohnya, jika anda hanya memilih:

```text
/1/
/2/
```

Nod lain hanya boleh melihat fail dalam dua direktori tersebut.

### Kemas Kini Indeks Keluar

Ini mengemas kini senarai fail yang boleh disegerakkan oleh nod lain daripada anda.

Gunakan apabila:

- Anda mengaktifkan fungsi bersekutu buat kali pertama.
- Anda memuat naik fail yang mahu dikongsi.
- Anda menukar folder segerak.
- Anda menukar domain awam dan perlu mengesahkannya.

## Nod Yang Saya Sertai

`Nodes I Joined` ialah tempat anda melanggan nod lain.

![Nod yang saya sertai](../../image/other/联盟图/我加入的节点.png)

### Memohon Untuk Menyertai Nod Lain

1. Minta pautan jemputan daripada pemilik nod tersebut.
2. Tampalkannya ke dalam kotak input.
3. Klik `Request to Join`.
4. Tunggu pemilik nod tersebut meluluskannya dalam panel pentadbir mereka.

Selepas diluluskan, status nod menjadi diluluskan.

### Kemas Kini Indeks Masuk

`Update Inbound Index` menyegerakkan senarai fail daripada nod yang telah anda sertai.

Gunakan apabila:

- Pemilik nod tersebut baru sahaja meluluskan permintaan anda.
- Pemilik nod tersebut memberitahu bahawa kandungan kongsi telah dikemas kini.
- Anda mahu menyegarkan semua senarai fail bersekutu yang disertai.

Untuk mengemas kini satu nod sahaja, klik `Update Index` pada kad nod tersebut.

![Kemas kini indeks](../../image/other/联盟图/更新索引.png)

### Berhenti Melanggan

Jika anda tidak lagi mahu menyegerakkan suatu nod, klik `Unsubscribe`.

Selepas berhenti melanggan, indeks bersekutu nod tersebut dikeluarkan daripada laman setempat anda.

## Nod Yang Menyertai Saya

`Nodes Joining Me` ialah tempat anda mengendalikan permintaan daripada orang lain.

![Nod yang menyertai saya](../../image/other/联盟图/加入我的节点.png)

### Menjana Pautan Jemputan

1. Pastikan nod setempat telah diaktifkan.
2. Klik `Update Outbound Index` sekurang-kurangnya sekali supaya ImgBed mengesahkan domain awam.
3. Buka `Nodes Joining Me`.
4. Klik `Reset Invitation Link`.
5. Salin pautan jemputan dan hantar kepada pemilik nod tersebut.

Jika pautan jemputan kosong, biasanya domain awam belum disahkan. Kembali ke `Local Node` dan klik `Update Outbound Index`.

### Mengendalikan Permintaan Sertai

Apabila seseorang menghantar permintaan, ia muncul dalam senarai `Nodes Joining Me`.

| Tindakan | Maksud |
| --- | --- |
| Luluskan | Membenarkan nod pihak lain menyegerakkan senarai fail kongsi anda |
| Tolak | Menolak permintaan sertai |
| Padam | Membuang rekod yang telah selesai |
| Semak Status | Menyemak sama ada pihak satu lagi masih mengekalkan hubungan ini |

Selepas diluluskan, pihak lain masih perlu mengklik `Update Inbound Index` sebelum fail kongsi anda muncul di sana.

![Luluskan nod yang dijemput](../../image/other/联盟图/邀请节点同意.png)

## Mesej

Selepas hubungan diluluskan, klik `Message` pada kad nod.

Mesej hanya digunakan untuk komunikasi tentang hubungan bersekutu. Ia tidak mengubah fail, tag, direktori atau kebenaran.

![Mesej](../../image/other/联盟图/留言功能.png)

## Melihat Fail Bersekutu

Selepas penyegerakan selesai, kembali ke senarai fail pentadbir.

Di bahagian atas halaman, tukar antara fail setempat dan fail bersekutu. Dalam fail bersekutu, anda boleh melayari kandungan yang telah disegerakkan.

Fail bersekutu digunakan terutamanya untuk melihat, mencari, pratonton dan menyalin pautan. Ia bukan fail setempat, jadi anda tidak boleh memindahkan, memadam, menandai semula atau menyandarkannya daripada laman anda sendiri.

![Fail bersekutu dalam pentadbir](../../image/other/联盟图/联盟管理显示效果图.png)

## Soalan Lazim

### Mengapa Ia Meminta Saya Memohon Semula Kerana Tiada Rekod Hubungan?

Ini biasanya bermaksud pihak satu lagi telah memadam anda dan membuang rekod tersebut, jadi hubungan anda tidak lagi dapat ditemui. Hantar permintaan sertai baharu.

![Mohon semula apabila tiada rekod hubungan](../../image/other/联盟图/无关系记录重新申请.png)

### Mengapa Saya Tidak Nampak Fail Selepas Menyertai?

Semak:

1. Pemilik nod tersebut telah meluluskan permintaan anda.
2. Pemilik nod tersebut telah mengklik `Update Outbound Index`.
3. Anda telah mengklik `Update Inbound Index`.
4. Folder segerak pemilik nod tersebut memang mengandungi direktori yang mahu mereka kongsi.

### Apa Yang Perlu Dibuat Apabila Perubahan Domain Dikesan?

Jika anda sedang membuka panel pentadbir melalui domain produksi, sahkan dan teruskan.

Jika anda menggunakan alamat sementara, batalkan, buka semula panel pentadbir menggunakan domain produksi, kemudian cuba lagi.

### Apa Maksud Senarai Folder Segerak Kosong?

Senarai folder segerak kosong bermaksud semua folder dikongsi.

Untuk berkongsi hanya direktori tertentu, pilih folder tersebut secara manual.

### Perbezaan Antara Kemas Kini Indeks Keluar dan Masuk

| Butang | Maksud Ringkas |
| --- | --- |
| Update Outbound Index | Mengemas kini perkara yang boleh disegerakkan oleh orang lain daripada saya |
| Update Inbound Index | Mengemas kini perkara yang telah saya segerakkan daripada orang lain |
