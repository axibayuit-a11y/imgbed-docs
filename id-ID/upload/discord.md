# Menambahkan Discord Channel

## Yang Perlu Disiapkan Sebelum Mulai

| Requirement | Purpose |
| --- | --- |
| Discord account | Digunakan untuk membuat server, channel, dan developer application. |
| Discord server | Bot harus join server sebelum bisa mengakses channel. |
| Text channel | Images dan files akan dikirim ke channel ini. |
| Discord Developer Portal | Digunakan untuk membuat application, membuat bot, dan mendapatkan `Bot Token`. |

## Di Mana Menambahkannya

1. Buka System Settings.
2. Masuk ke Upload Settings.
3. Klik Add Channel di kanan atas.
4. Pilih `Discord`.

## Field Reference

| Field | Fungsi | Required |
| --- | --- | --- |
| Channel name | Nama yang mudah dikenali untuk channel ini, misalnya "Discord Primary". | Required |
| Bot Token | Discord bot token. | Required |
| Channel ID | ID target text channel. | Required |
| Proxy URL (optional) | Gunakan hanya jika akses Discord CDN tidak stabil. Masukkan full URL, termasuk `https://`. | Optional |

## Langkah Setup

### 1. Buat Discord Server dan Text Channel

1. Buka Discord.
2. Buat server baru, atau gunakan existing server milik Anda.
3. Buat text channel di server tersebut.

![Create a server](../../image/upload/discord/创建服务器.png)

### 2. Buat Bot di Discord Developer Portal

1. Buka Discord Developer Portal: `https://discord.com/developers/applications`
2. Klik `New Application`.
3. Masukkan application name dan buat.
4. Buka halaman `Bot` dari left sidebar.
5. Generate atau reset token di halaman `Bot`.
6. Simpan token.

Token ini adalah `Bot Token` yang perlu dimasukkan ke ImgBed.

![View the bot token](../../image/upload/discord/查看机器人令牌.png)

### 3. Buat OAuth2 Invite Link dan Install Bot

1. Buka halaman `OAuth2` dari left sidebar.
2. Di bagian scopes, pilih `bot`.
3. Di area permission, enable permissions ini:

| Permission | Required |
| --- | --- |
| View Channels | Yes |
| Send Messages | Yes |
| Attach Files | Yes |
| Read Message History | Yes |

4. Di bagian bawah page, pastikan integration type adalah `Guild Install`.
5. Copy generated URL.
6. Buka URL tersebut di browser.
7. Pilih target server.
8. Selesaikan authorization flow.

![Select bot permissions in OAuth2](../../image/upload/discord/在oa2勾选机器人权限.png)

![Invite the bot to the channel](../../image/upload/discord/邀请机器人到频道.png)

### 4. Enable Developer Mode dan Copy Channel ID

1. Klik gear icon di sebelah avatar Anda di kiri bawah Discord.
2. Buka Advanced dari left sidebar.
3. Enable Developer Mode.
4. Kembali ke target text channel.
5. Right-click nama channel.
6. Klik Copy Channel ID.

Angka yang disalin adalah `Channel ID` yang diperlukan ImgBed.

![Enable developer mode](../../image/upload/discord/开启开发者权限.png)

![Copy the channel ID](../../image/upload/discord/复制群频道id.png)

### 5. Isi Discord Channel di ImgBed

Kembali ke channel configuration dialog dan isi field sebagai berikut:

| UI Field | Value |
| --- | --- |
| Channel name | Nama channel kustom, misalnya `DiscordPrimary`. |
| Bot Token | Token yang disimpan dari halaman `Bot` di Discord Developer Portal. |
| Channel ID | Channel ID yang Anda copy dari Discord. |
| Proxy URL (optional) | Hanya jika perlu, misalnya `https://your-proxy.example.com`. |

Klik Save setelah selesai.

![Add the Discord channel configuration](../../image/upload/discord/添加dc新渠道配置.png)

## Cara Memeriksa

| Check | Cara Memeriksa |
| --- | --- |
| Channel card muncul | Setelah save, halaman Upload Settings harus menampilkan Discord channel card. |
| Channel bisa diaktifkan | Active switch seharusnya tetap on. |
| Configuration tersimpan | Detail view harus menunjukkan Bot Token dan Channel ID sudah tersimpan. |
| Upload berjalan | Upload test image dan pastikan muncul di target Discord text channel. |

## Quick Checklist

```text
Buat Discord server
-> Buat text channel
-> Buat bot di Discord Developer Portal
-> Simpan Bot Token dari halaman Bot
-> Di OAuth2, pilih bot, View Channels, Send Messages, Attach Files, dan Read Message History
-> Copy generated URL dan authorize bot untuk target server
-> Pastikan target text channel memberikan permissions yang sama
-> Enable Developer Mode
-> Right-click target text channel dan copy Channel ID
-> Masukkan Bot Token dan Channel ID di ImgBed
-> Save dan upload test image
```

## References

1. Discord Developers Getting Started: https://docs.discord.com/developers/quick-start/getting-started
2. Discord Help - Where can I find my User/Server/Message ID: https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID
