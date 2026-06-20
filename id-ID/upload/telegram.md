# Menambahkan Telegram Channel

## Yang Perlu Disiapkan Sebelum Mulai

| Requirement | Purpose |
| --- | --- |
| Telegram account | Digunakan untuk membuat bot dan storage channel. |
| `@BotFather` | Digunakan untuk membuat Telegram bot. |
| Telegram channel | Tujuan akhir penyimpanan files. |
| `@userinfobot` | Digunakan untuk mencari `Chat ID` channel. |

## Di Mana Menambahkannya

1. Buka System Settings.
2. Masuk ke Upload Settings.
3. Klik Add Channel di kanan atas.
4. Pilih `Telegram`.

## Field Reference

| Field | Fungsi | Required |
| --- | --- | --- |
| Channel name | Nama yang mudah dikenali untuk channel ini, misalnya "Telegram Primary". | Required |
| Active | Mengaktifkan atau menonaktifkan channel ini. | Recommended |
| Bot Token | Token untuk Telegram bot Anda. | Required |
| Session ID (Chat ID) | ID Telegram channel. | Required |
| Relay Proxy URL (optional) | Gunakan hanya jika akses Telegram tidak stabil. Masukkan proxy URL lengkap, termasuk `https://`. | Optional |
| Remark | Catatan untuk maintenance di kemudian hari. | Optional |

## Langkah Setup

### 1. Buat Telegram Bot

1. Buka Telegram dan cari `@BotFather`.
2. Buka chat dan klik `Start`.
3. Kirim `/newbot`.
4. Ikuti prompt untuk memasukkan bot display name.
5. Ikuti prompt untuk memasukkan bot username. Biasanya username harus diakhiri dengan `bot`.
6. Setelah bot dibuat, `@BotFather` akan mengembalikan bot token.

Token ini adalah `Bot Token` yang perlu dimasukkan ke ImgBed.

![Save the bot token](../../image/upload/telegram/保存机器人令牌.png)

### 2. Buat Channel

1. Di Telegram, klik New Channel.
2. Masukkan channel name.
3. Selesaikan pembuatan channel.

Public dan private channel sama-sama bisa digunakan.

![Create a channel](../../image/upload/telegram/新建频道.png)

### 3. Tambahkan Bot ke Channel

1. Buka channel yang baru dibuat.
2. Buka channel settings.
3. Tambahkan member atau administrator.
4. Cari bot username yang Anda buat.
5. Tambahkan bot ke channel.

Agar upload lebih andal, berikan permission administrator kepada bot.

![Invite the bot to the channel](../../image/upload/telegram/邀请机器人进频道里.png)

### 4. Ambil Channel ID dengan User Info - Get ID - IDbot

1. Cari `@userinfobot` di Telegram. Display name biasanya `User Info - Get ID - IDbot`.
2. Buka chat dan klik `Start`.
3. Pilih `Channel` dari opsi yang diberikan bot.
4. Di message picker, pilih target channel lalu kirim ke `@userinfobot`.
5. Saat `@userinfobot` mengembalikan hasil, copy angka yang muncul sebagai `Id: -100...`.

Angka yang diawali `-100` adalah `Session ID (Chat ID)` yang diperlukan ImgBed.

![Get the channel ID](../../image/upload/telegram/获取频道id.png)

### 5. Isi Telegram Channel di ImgBed

Kembali ke channel configuration dialog dan isi field sebagai berikut:

| UI Field | Value |
| --- | --- |
| Channel Identifier | Nama channel kustom, misalnya `TelegramPrimary`. |
| Active | Recommended. |
| Bot Token | Bot token dari `@BotFather`. |
| Session ID (Chat ID) | Angka `-100...` yang dikembalikan oleh `@userinfobot`. |
| Relay Proxy URL (optional) | Hanya jika perlu, misalnya `https://your-tg-proxy.example.com`. |
| Remark | Catatan opsional. |

Klik Save setelah selesai.

![Edit the configuration](../../image/upload/telegram/编辑配置.png)

## Cara Memeriksa

| Check | Cara Memeriksa |
| --- | --- |
| Channel card muncul | Setelah save, halaman Upload Settings harus menampilkan Telegram channel card. |
| Channel bisa diaktifkan | Active switch seharusnya tetap on. |
| Configuration tersimpan | Detail view harus menunjukkan Bot Token dan Chat ID sudah tersimpan. |
| Upload berjalan | Upload test image dan pastikan muncul di Telegram channel tujuan. |

## Quick Checklist

```text
Buat bot dengan @BotFather
-> Simpan Bot Token
-> Buat Telegram channel
-> Tambahkan bot ke channel dan beri administrator permissions
-> Cari @userinfobot dan pilih Channel
-> Forward pesan apa pun dari channel ke @userinfobot
-> Copy Id: -100... yang dikembalikan
-> Masukkan Bot Token dan Chat ID di ImgBed
-> Save dan upload test image
```

## References

1. Telegram bots: https://core.telegram.org/bots
2. Telegram Bot API: https://core.telegram.org/bots/api
