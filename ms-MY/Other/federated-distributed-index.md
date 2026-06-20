# Federated Distributed Index

Federated distributed index membolehkan beberapa ImgBed sites berkongsi file lists antara satu sama lain.

Secara ringkas:

- Anda boleh share selected folders daripada site anda dengan orang lain.
- Anda boleh join node lain dan sync shared file list node itu ke admin panel anda.
- Federated files terutama untuk browsing, searching dan membuka links. Ia tidak di-upload semula ke storage anda sendiri.

## Di Mana Untuk Configure

Buka:

```text
System Settings -> Other Settings -> Federated Distributed Index
```

![Local federation node](../../image/other/联盟图/联盟分布式索引本地节点.png)

Halaman ini mempunyai tiga tabs:

| Tab | Purpose |
| --- | --- |
| Local Node | Enable node anda, confirm public domain, pilih shared folders dan update outbound index |
| Nodes I Joined | Manage ImgBed nodes lain yang anda joined |
| Nodes Joining Me | Manage requests daripada orang lain yang mahu join node anda |

## First-Time Setup

1. Buka `Local Node`.
2. Hidupkan `Enable`.
3. Pilih folders untuk share di bawah `Sync folders`.
4. Klik `Update Outbound Index`.
5. Jika ImgBed detect domain change, confirm current domain betul sebelum meneruskan.

Anda boleh memilih beberapa sync folders.

Jika sync folder list kosong, semua folders akan dishare.

## Local Node

### Public Domain

Public domain ialah site URL yang digunakan oleh nodes lain untuk mengakses node anda.

ImgBed detect ini secara automatik. Anda tidak perlu menaip secara manual. Kali pertama update index, ImgBed bertanya sama ada current access URL ialah production domain.

Jika domain berubah kemudian, update index akan meminta confirmation sekali lagi.

### Sync Folders

Sync folders menentukan files mana yang dishare dengan federation nodes.

Contohnya, jika anda hanya memilih:

```text
/1/
/2/
```

Nodes lain hanya dapat melihat files dalam dua directories tersebut.

### Update Outbound Index

Ini update file list yang nodes lain boleh sync daripada anda.

Gunakan apabila:

- Anda enable federation buat kali pertama.
- Anda upload files yang mahu dishare.
- Anda menukar sync folders.
- Anda menukar public domain dan perlu confirm.

## Nodes I Joined

`Nodes I Joined` ialah tempat anda subscribe nodes lain.

![Nodes I joined](../../image/other/联盟图/我加入的节点.png)

### Request Untuk Join Node Lain

1. Minta invitation link daripada owner sebelah sana.
2. Paste ke input box.
3. Klik `Request to Join`.
4. Tunggu owner sebelah sana approve dalam admin panel mereka.

Selepas approval, node status menjadi approved.

### Update Inbound Index

`Update Inbound Index` sync file lists daripada nodes yang anda joined.

Gunakan apabila:

- Owner sebelah sana baru approve request anda.
- Owner sebelah sana memberitahu shared content telah update.
- Anda mahu refresh semua joined federation file lists.

Untuk update satu node sahaja, klik `Update Index` pada node card tersebut.

![Update index](../../image/other/联盟图/更新索引.png)

### Unsubscribe

Jika tidak mahu sync node lagi, klik `Unsubscribe`.

Selepas unsubscribe, federated index node itu dibuang daripada local site anda.

## Nodes Joining Me

`Nodes Joining Me` ialah tempat mengurus requests daripada orang lain.

![Nodes joining me](../../image/other/联盟图/加入我的节点.png)

### Generate Invitation Link

1. Pastikan local node enabled.
2. Klik `Update Outbound Index` sekurang-kurangnya sekali supaya ImgBed confirm public domain.
3. Buka `Nodes Joining Me`.
4. Klik `Reset Invitation Link`.
5. Copy invitation link dan hantar kepada owner sebelah sana.

Jika invitation link kosong, biasanya public domain belum disahkan. Kembali ke `Local Node` dan klik `Update Outbound Index`.

### Handle Join Requests

Apabila seseorang submit request, ia muncul dalam list `Nodes Joining Me`.

| Action | Meaning |
| --- | --- |
| Approve | Membenarkan node sebelah sana sync shared file list anda |
| Reject | Menolak join request |
| Delete | Membuang finished record |
| Check Status | Menyemak sama ada sebelah sana masih mengekalkan relationship ini |

Selepas approval, sebelah sana masih perlu klik `Update Inbound Index` sebelum shared files anda muncul di sana.

![Approve invited node](../../image/other/联盟图/邀请节点同意.png)

## Messages

Selepas relationship approved, klik `Message` pada node card.

Messages hanya untuk komunikasi tentang federation relationship. Ia tidak mengubah files, tags, directories atau permissions.

![Messages](../../image/other/联盟图/留言功能.png)

## Melihat Federated Files

Selepas sync selesai, kembali ke admin file list.

Di bahagian atas halaman, switch antara local files dan federated files. Dalam federated files, anda boleh browse synced content.

Federated files terutama untuk viewing, searching, previewing dan copying links. Ia bukan local files, jadi anda tidak boleh move, delete, retag atau back up daripada site anda sendiri.

![Federated files in admin](../../image/other/联盟图/联盟管理显示效果图.png)

## FAQ

### Mengapa Ia Meminta Reapply Kerana Tiada Relationship Record?

Ini biasanya bermaksud sebelah sana delete anda dan membuang record, jadi relationship tidak lagi ditemui. Submit join request baharu.

![Reapply when no relationship record exists](../../image/other/联盟图/无关系记录重新申请.png)

### Mengapa Saya Tidak Nampak Files Selepas Join?

Semak:

1. Owner sebelah sana telah approve request anda.
2. Owner sebelah sana telah klik `Update Outbound Index`.
3. Anda telah klik `Update Inbound Index`.
4. Sync folders owner sebelah sana termasuk directories yang mahu mereka share.

### Apa Perlu Dibuat Apabila Domain Change Dikesan?

Jika anda sedang membuka admin panel melalui production domain, confirm dan teruskan.

Jika menggunakan temporary address, cancel, buka semula admin panel menggunakan production domain, kemudian cuba lagi.

### Apa Maksud Empty Sync Folder List?

Empty sync folder list bermaksud semua folders dishare.

Untuk share directories tertentu sahaja, pilih folders tersebut secara manual.

### Perbezaan Outbound dan Inbound Index Updates

| Button | Simple Meaning |
| --- | --- |
| Update Outbound Index | Update apa yang orang lain boleh sync daripada saya |
| Update Inbound Index | Update apa yang saya sync daripada orang lain |
