# Tambah Saluran Discord

## Perkara Yang Diperlukan Sebelum Bermula

| Keperluan | Tujuan |
| --- | --- |
| Akaun Discord | Digunakan untuk membuat server, saluran dan aplikasi pembangun. |
| Server Discord | Bot mesti menyertai server sebelum boleh mengakses saluran. |
| Saluran teks | Imej dan fail akan dihantar ke saluran ini. |
| Discord Developer Portal | Digunakan untuk membuat aplikasi, membuat bot dan mendapatkan `Bot Token`. |

## Tempat Menambahkannya

1. Buka Tetapan Sistem.
2. Pergi ke Tetapan Muat Naik.
3. Klik Tambah Saluran di penjuru kanan atas.
4. Pilih `Discord`.

## Rujukan Medan

| Medan | Fungsi | Wajib |
| --- | --- | --- |
| Nama saluran | Nama mesra untuk saluran ini, seperti "Discord Utama". | Wajib |
| Bot Token | Token bot Discord. | Wajib |
| Channel ID | ID saluran teks sasaran. | Wajib |
| URL proksi (pilihan) | Gunakan hanya jika akses CDN Discord tidak stabil. Masukkan URL penuh, termasuk `https://`. | Pilihan |

## Langkah Persediaan

### 1. Buat Server Discord dan Saluran Teks

1. Buka Discord.
2. Buat server baharu, atau gunakan server sedia ada yang anda miliki.
3. Buat saluran teks dalam server tersebut.

![Buat server](../../image/upload/discord/创建服务器.png)

### 2. Buat Bot Dalam Discord Developer Portal

1. Buka Discord Developer Portal: `https://discord.com/developers/applications`
2. Klik `New Application`.
3. Masukkan nama aplikasi dan buat aplikasi tersebut.
4. Buka halaman `Bot` daripada sidebar kiri.
5. Jana atau reset token pada halaman `Bot`.
6. Simpan token tersebut.

Token ini ialah `Bot Token` yang perlu anda masukkan dalam ImgBed.

![Lihat token bot](../../image/upload/discord/查看机器人令牌.png)

### 3. Jana Pautan Jemputan OAuth2 dan Pasang Bot

1. Buka halaman `OAuth2` daripada sidebar kiri.
2. Di bawah scopes, pilih `bot`.
3. Dalam kawasan kebenaran, dayakan kebenaran berikut:

| Kebenaran | Wajib |
| --- | --- |
| View Channels | Ya |
| Send Messages | Ya |
| Attach Files | Ya |
| Read Message History | Ya |

4. Di bahagian bawah halaman, sahkan bahawa jenis integrasi ialah `Guild Install`.
5. Salin URL yang dijana.
6. Buka URL tersebut dalam pelayar.
7. Pilih server sasaran.
8. Lengkapkan aliran kebenaran.

![Pilih kebenaran bot dalam OAuth2](../../image/upload/discord/在oa2勾选机器人权限.png)

![Jemput bot ke saluran](../../image/upload/discord/邀请机器人到频道.png)

### 4. Dayakan Developer Mode dan Salin Channel ID

1. Klik ikon gear di sebelah avatar anda di penjuru kiri bawah Discord.
2. Buka `Advanced` daripada sidebar kiri.
3. Dayakan `Developer Mode`.
4. Kembali ke saluran teks sasaran.
5. Klik kanan nama saluran.
6. Klik `Copy Channel ID`.

Nombor yang disalin ialah `Channel ID` yang diperlukan oleh ImgBed.

![Dayakan developer mode](../../image/upload/discord/开启开发者权限.png)

![Salin channel ID](../../image/upload/discord/复制群频道id.png)

### 5. Isi Saluran Discord Dalam ImgBed

Kembali ke dialog konfigurasi saluran dan isi medan seperti berikut:

| Medan UI | Nilai |
| --- | --- |
| Nama saluran | Nama saluran tersuai, contohnya `DiscordPrimary`. |
| Bot Token | Token yang disimpan daripada halaman `Bot` dalam Discord Developer Portal. |
| Channel ID | `Channel ID` yang anda salin daripada Discord. |
| URL proksi (pilihan) | Hanya jika diperlukan, contohnya `https://your-proxy.example.com`. |

Klik Simpan apabila selesai.

![Tambah konfigurasi saluran Discord](../../image/upload/discord/添加dc新渠道配置.png)

## Cara Mengesahkan

| Semakan | Cara Mengesahkan |
| --- | --- |
| Kad saluran muncul | Selepas menyimpan, halaman Tetapan Muat Naik sepatutnya memaparkan kad saluran Discord. |
| Saluran boleh didayakan | Suis aktif sepatutnya kekal hidup. |
| Konfigurasi disimpan | Paparan butiran sepatutnya menunjukkan bahawa Bot Token dan Channel ID telah disimpan. |
| Muat naik berfungsi | Muat naik imej ujian dan sahkan imej itu muncul dalam saluran teks Discord sasaran. |

## Senarai Semak Pantas

```text
Create a Discord server
-> Create a text channel
-> Create a bot in the Discord Developer Portal
-> Save the Bot Token from the Bot page
-> In OAuth2, select bot, View Channels, Send Messages, Attach Files, and Read Message History
-> Copy the generated URL and authorize the bot for the target server
-> Make sure the target text channel grants the same permissions
-> Enable Developer Mode
-> Right-click the target text channel and copy the Channel ID
-> Enter the Bot Token and Channel ID in ImgBed
-> Save and upload a test image
```

## Rujukan

1. Panduan mula Discord Developers: https://docs.discord.com/developers/quick-start/getting-started
2. Bantuan Discord - tempat mencari User/Server/Message ID: https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID
