# Menambahkan Kanal Discord

## Yang Diperlukan Sebelum Memulai

| Kebutuhan | Tujuan |
| --- | --- |
| Akun Discord | Digunakan untuk membuat server, kanal, dan aplikasi pengembang. |
| Server Discord | Bot harus bergabung ke server sebelum dapat mengakses kanal. |
| Kanal teks | Gambar dan berkas akan dikirim ke kanal ini. |
| Discord Developer Portal | Digunakan untuk membuat aplikasi, membuat bot, dan memperoleh `Bot Token`. |

## Di Mana Menambahkannya

1. Buka pengaturan sistem.
2. Masuk ke pengaturan unggah.
3. Klik Tambah kanal di kanan atas.
4. Pilih `Discord`.

## Referensi Kolom

| Kolom | Fungsi | Wajib |
| --- | --- | --- |
| Nama kanal | Nama yang mudah dikenali untuk kanal ini, misalnya `Discord Primary`. | Wajib |
| Bot Token | Token bot Discord. | Wajib |
| Channel ID | ID kanal teks target. | Wajib |
| URL proksi (opsional) | Gunakan hanya jika akses ke Discord CDN tidak stabil. Masukkan URL lengkap, termasuk `https://`. | Opsional |

## Langkah Konfigurasi

### 1. Membuat Server Discord dan Kanal Teks

1. Buka Discord.
2. Buat server baru atau gunakan server yang sudah ada dan Anda miliki.
3. Buat kanal teks di server tersebut.

![Membuat server](../../image/upload/discord/创建服务器.png)

### 2. Membuat Bot di Discord Developer Portal

1. Buka Discord Developer Portal: `https://discord.com/developers/applications`
2. Klik `New Application`.
3. Masukkan nama aplikasi dan buat aplikasinya.
4. Buka halaman `Bot` dari bilah sisi kiri.
5. Buat atau reset token di halaman `Bot`.
6. Simpan token.

Token ini adalah `Bot Token` yang perlu dimasukkan ke ImgBed.

![Melihat token bot](../../image/upload/discord/查看机器人令牌.png)

### 3. Membuat Tautan Undangan OAuth2 dan Menginstal Bot

1. Buka halaman `OAuth2` dari bilah sisi kiri.
2. Pada bagian cakupan, pilih `bot`.
3. Di area izin, aktifkan izin berikut:

| Izin | Wajib |
| --- | --- |
| View Channels | Ya |
| Send Messages | Ya |
| Attach Files | Ya |
| Read Message History | Ya |

4. Di bagian bawah halaman, pastikan jenis integrasi adalah `Guild Install`.
5. Salin URL yang dibuat.
6. Buka URL tersebut di peramban.
7. Pilih server target.
8. Selesaikan alur otorisasi.

![Memilih izin bot di OAuth2](../../image/upload/discord/在oa2勾选机器人权限.png)

![Mengundang bot ke kanal](../../image/upload/discord/邀请机器人到频道.png)

### 4. Mengaktifkan Developer Mode dan Menyalin Channel ID

1. Di Discord, klik ikon roda gigi di sebelah avatar Anda di kiri bawah.
2. Buka `Advanced` dari bilah sisi kiri.
3. Aktifkan `Developer Mode`.
4. Kembali ke kanal teks target.
5. Klik kanan nama kanal.
6. Klik `Copy Channel ID`.

Angka yang disalin adalah `Channel ID` yang diperlukan ImgBed.

![Mengaktifkan Developer Mode](../../image/upload/discord/开启开发者权限.png)

![Menyalin Channel ID](../../image/upload/discord/复制群频道id.png)

### 5. Mengisi Kanal Discord di ImgBed

Kembali ke dialog konfigurasi kanal dan isi kolom sebagai berikut:

| Kolom UI | Nilai |
| --- | --- |
| Nama kanal | Nama kanal kustom, misalnya `DiscordPrimary`. |
| Bot Token | Token yang disimpan dari halaman `Bot` di Discord Developer Portal. |
| Channel ID | Channel ID yang Anda salin dari Discord. |
| URL proksi (opsional) | Hanya jika diperlukan, misalnya `https://your-proxy.example.com`. |

Setelah selesai, klik Simpan.

![Menambahkan konfigurasi kanal Discord](../../image/upload/discord/添加dc新渠道配置.png)

## Verifikasi

| Pemeriksaan | Cara memeriksa |
| --- | --- |
| Kartu kanal muncul | Setelah disimpan, halaman pengaturan unggah harus menampilkan kartu kanal Discord. |
| Kanal dapat diaktifkan | Sakelar Active harus tetap aktif. |
| Konfigurasi tersimpan | Tampilan detail harus menunjukkan bahwa Bot Token dan Channel ID sudah tersimpan. |
| Unggahan berjalan | Unggah gambar uji dan pastikan muncul di kanal teks Discord target. |

## Daftar Cepat

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

## Referensi

1. Panduan mulai Discord Developers: https://docs.discord.com/developers/quick-start/getting-started
2. Bantuan Discord: tempat menemukan User/Server/Message ID: https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID
