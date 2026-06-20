# Tambah Telegram Channel

## Perkara Yang Perlu Disediakan

| Requirement | Purpose |
| --- | --- |
| Telegram account | Digunakan untuk mencipta bot dan storage channel. |
| `@BotFather` | Digunakan untuk mencipta Telegram bot. |
| Telegram channel | Destinasi akhir untuk menyimpan files. |
| `@userinfobot` | Digunakan untuk mendapatkan `Chat ID` channel. |

## Di Mana Untuk Menambahnya

1. Buka System Settings.
2. Pergi ke Upload Settings.
3. Klik Add Channel di penjuru kanan atas.
4. Pilih `Telegram`.

## Field Reference

| Field | Fungsi | Required |
| --- | --- | --- |
| Channel name | Nama mesra untuk channel ini, contohnya "Telegram Primary". | Required |
| Active | Mengaktifkan atau menyahaktifkan channel ini. | Recommended |
| Bot Token | Token untuk Telegram bot anda. | Required |
| Session ID (Chat ID) | ID untuk Telegram channel. | Required |
| Relay Proxy URL (optional) | Gunakan hanya jika akses Telegram tidak stabil. Masukkan proxy URL penuh termasuk `https://`. | Optional |
| Remark | Nota untuk penyelenggaraan kemudian. | Optional |

## Langkah Setup

### 1. Cipta Telegram Bot

1. Buka Telegram dan cari `@BotFather`.
2. Buka chat dan klik `Start`.
3. Hantar `/newbot`.
4. Ikut prompt untuk masukkan bot display name.
5. Ikut prompt untuk masukkan bot username. Biasanya username perlu berakhir dengan `bot`.
6. Selepas bot dicipta, `@BotFather` akan memberi bot token.

Token ini ialah `Bot Token` yang perlu dimasukkan dalam ImgBed.

![Save the bot token](../../image/upload/telegram/保存机器人令牌.png)

### 2. Cipta Channel

1. Dalam Telegram, klik New Channel.
2. Masukkan channel name.
3. Selesaikan proses mencipta channel.

Public dan private channel kedua-duanya boleh digunakan.

![Create a channel](../../image/upload/telegram/新建频道.png)

### 3. Tambah Bot Ke Channel

1. Buka channel yang baru dicipta.
2. Buka channel settings.
3. Tambah member atau administrator.
4. Cari bot username yang anda cipta.
5. Tambah bot ke channel.

Untuk upload yang paling stabil, berikan bot permission administrator.

![Invite the bot to the channel](../../image/upload/telegram/邀请机器人进频道里.png)

### 4. Dapatkan Channel ID Dengan User Info - Get ID - IDbot

1. Cari `@userinfobot` dalam Telegram. Display name biasanya `User Info - Get ID - IDbot`.
2. Buka chat dan klik `Start`.
3. Pilih `Channel` daripada pilihan yang diberi oleh bot.
4. Dalam message picker, pilih target channel dan hantar kepada `@userinfobot`.
5. Apabila `@userinfobot` memberi hasil, copy nombor yang ditunjukkan sebagai `Id: -100...`.

Nombor yang bermula dengan `-100` ialah `Session ID (Chat ID)` yang diperlukan oleh ImgBed.

![Get the channel ID](../../image/upload/telegram/获取频道id.png)

### 5. Isi Telegram Channel Dalam ImgBed

Kembali ke channel configuration dialog dan isi seperti berikut:

| UI Field | Value |
| --- | --- |
| Channel Identifier | Nama channel tersuai, contohnya `TelegramPrimary`. |
| Active | Recommended. |
| Bot Token | Bot token daripada `@BotFather`. |
| Session ID (Chat ID) | Nombor `-100...` yang diberi oleh `@userinfobot`. |
| Relay Proxy URL (optional) | Hanya jika perlu, contohnya `https://your-tg-proxy.example.com`. |
| Remark | Nota pilihan. |

Klik Save apabila selesai.

![Edit the configuration](../../image/upload/telegram/编辑配置.png)

## Cara Menyemak

| Check | Cara Menyemak |
| --- | --- |
| Channel card muncul | Selepas save, halaman Upload Settings patut memaparkan Telegram channel card. |
| Channel boleh diaktifkan | Active switch patut kekal on. |
| Configuration disimpan | Detail view patut menunjukkan Bot Token dan Chat ID telah disimpan. |
| Upload berfungsi | Upload test image dan pastikan ia muncul dalam Telegram channel sasaran. |

## Quick Checklist

```text
Cipta bot dengan @BotFather
-> Simpan Bot Token
-> Cipta Telegram channel
-> Tambah bot ke channel dan beri administrator permissions
-> Cari @userinfobot dan pilih Channel
-> Forward mana-mana message daripada channel kepada @userinfobot
-> Copy Id: -100... yang dipulangkan
-> Masukkan Bot Token dan Chat ID dalam ImgBed
-> Save dan upload test image
```

## References

1. Telegram bots: https://core.telegram.org/bots
2. Telegram Bot API: https://core.telegram.org/bots/api
