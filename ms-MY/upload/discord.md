# Tambah Discord Channel

## Perkara Yang Perlu Disediakan

| Requirement | Purpose |
| --- | --- |
| Discord account | Digunakan untuk mencipta server, channel dan developer application. |
| Discord server | Bot mesti join server sebelum boleh mengakses channel. |
| Text channel | Images dan files akan dihantar ke channel ini. |
| Discord Developer Portal | Digunakan untuk mencipta application, mencipta bot dan mendapatkan `Bot Token`. |

## Di Mana Untuk Menambahnya

1. Buka System Settings.
2. Pergi ke Upload Settings.
3. Klik Add Channel di penjuru kanan atas.
4. Pilih `Discord`.

## Field Reference

| Field | Fungsi | Required |
| --- | --- | --- |
| Channel name | Nama mesra untuk channel ini, contohnya "Discord Primary". | Required |
| Bot Token | Discord bot token. | Required |
| Channel ID | ID untuk target text channel. | Required |
| Proxy URL (optional) | Gunakan hanya jika akses Discord CDN tidak stabil. Masukkan full URL termasuk `https://`. | Optional |

## Langkah Setup

### 1. Cipta Discord Server dan Text Channel

1. Buka Discord.
2. Cipta server baharu, atau gunakan existing server milik anda.
3. Cipta text channel dalam server tersebut.

![Create a server](../../image/upload/discord/创建服务器.png)

### 2. Cipta Bot Dalam Discord Developer Portal

1. Buka Discord Developer Portal: `https://discord.com/developers/applications`
2. Klik `New Application`.
3. Masukkan application name dan cipta.
4. Buka halaman `Bot` dari left sidebar.
5. Generate atau reset token pada halaman `Bot`.
6. Simpan token.

Token ini ialah `Bot Token` yang perlu dimasukkan dalam ImgBed.

![View the bot token](../../image/upload/discord/查看机器人令牌.png)

### 3. Cipta OAuth2 Invite Link dan Install Bot

1. Buka halaman `OAuth2` dari left sidebar.
2. Di bawah scopes, pilih `bot`.
3. Dalam permission area, enable permissions ini:

| Permission | Required |
| --- | --- |
| View Channels | Yes |
| Send Messages | Yes |
| Attach Files | Yes |
| Read Message History | Yes |

4. Di bahagian bawah halaman, pastikan integration type ialah `Guild Install`.
5. Copy generated URL.
6. Buka URL itu dalam browser.
7. Pilih target server.
8. Lengkapkan authorization flow.

![Select bot permissions in OAuth2](../../image/upload/discord/在oa2勾选机器人权限.png)

![Invite the bot to the channel](../../image/upload/discord/邀请机器人到频道.png)

### 4. Enable Developer Mode dan Copy Channel ID

1. Klik gear icon di sebelah avatar anda di penjuru kiri bawah Discord.
2. Buka Advanced dari left sidebar.
3. Enable Developer Mode.
4. Kembali ke target text channel.
5. Right-click channel name.
6. Klik Copy Channel ID.

Nombor yang disalin ialah `Channel ID` yang diperlukan oleh ImgBed.

![Enable developer mode](../../image/upload/discord/开启开发者权限.png)

![Copy the channel ID](../../image/upload/discord/复制群频道id.png)

### 5. Isi Discord Channel Dalam ImgBed

Kembali ke channel configuration dialog dan isi seperti berikut:

| UI Field | Value |
| --- | --- |
| Channel name | Nama channel tersuai, contohnya `DiscordPrimary`. |
| Bot Token | Token yang disimpan dari halaman `Bot` dalam Discord Developer Portal. |
| Channel ID | Channel ID yang disalin dari Discord. |
| Proxy URL (optional) | Hanya jika perlu, contohnya `https://your-proxy.example.com`. |

Klik Save apabila selesai.

![Add the Discord channel configuration](../../image/upload/discord/添加dc新渠道配置.png)

## Cara Menyemak

| Check | Cara Menyemak |
| --- | --- |
| Channel card muncul | Selepas save, halaman Upload Settings patut memaparkan Discord channel card. |
| Channel boleh diaktifkan | Active switch patut kekal on. |
| Configuration disimpan | Detail view patut menunjukkan Bot Token dan Channel ID telah disimpan. |
| Upload berfungsi | Upload test image dan pastikan ia muncul dalam target Discord text channel. |

## Quick Checklist

```text
Cipta Discord server
-> Cipta text channel
-> Cipta bot dalam Discord Developer Portal
-> Simpan Bot Token dari halaman Bot
-> Dalam OAuth2, pilih bot, View Channels, Send Messages, Attach Files dan Read Message History
-> Copy generated URL dan authorize bot untuk target server
-> Pastikan target text channel memberikan permissions yang sama
-> Enable Developer Mode
-> Right-click target text channel dan copy Channel ID
-> Masukkan Bot Token dan Channel ID dalam ImgBed
-> Save dan upload test image
```

## References

1. Discord Developers Getting Started: https://docs.discord.com/developers/quick-start/getting-started
2. Discord Help - Where can I find my User/Server/Message ID: https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID
