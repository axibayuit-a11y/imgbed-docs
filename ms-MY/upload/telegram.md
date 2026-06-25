# Tambah Saluran Telegram

## Perkara Yang Diperlukan Sebelum Bermula

| Keperluan | Tujuan |
| --- | --- |
| Akaun Telegram | Digunakan untuk membuat bot dan saluran storan. |
| `@BotFather` | Digunakan untuk membuat bot Telegram. |
| Saluran Telegram | Destinasi storan akhir untuk fail. |
| `@userinfobot` | Digunakan untuk mencari `Chat ID` saluran. |

## Tempat Menambahkannya

1. Buka Tetapan Sistem.
2. Pergi ke Tetapan Muat Naik.
3. Klik Tambah Saluran di penjuru kanan atas.
4. Pilih `Telegram`.

## Rujukan Medan

| Medan | Fungsi | Wajib |
| --- | --- | --- |
| Nama saluran | Nama mesra untuk saluran ini, seperti "Telegram Utama". | Wajib |
| Aktif | Mendayakan atau menyahdayakan saluran ini. | Disyorkan |
| Bot Token | Token bot Telegram anda. | Wajib |
| Session ID (Chat ID) | ID saluran Telegram. | Wajib |
| URL Proksi Relay (pilihan) | Gunakan hanya jika akses Telegram tidak stabil. Masukkan URL proksi penuh, termasuk `https://`. | Pilihan |
| Catatan | Nota untuk penyelenggaraan akan datang. | Pilihan |

## Langkah Persediaan

### 1. Buat Bot Telegram

1. Buka Telegram dan cari `@BotFather`.
2. Buka chat dan klik `Start`.
3. Hantar `/newbot`.
4. Ikut arahan untuk memasukkan nama paparan bot.
5. Ikut arahan untuk memasukkan nama pengguna bot. Biasanya nama pengguna perlu berakhir dengan `bot`.
6. Selepas bot dibuat, `@BotFather` akan mengembalikan bot token.

Token ini ialah `Bot Token` yang perlu anda masukkan dalam ImgBed.

![Simpan token bot](../../image/upload/telegram/保存机器人令牌.png)

### 2. Buat Saluran

1. Dalam Telegram, klik `New Channel`.
2. Masukkan nama saluran.
3. Selesaikan penciptaan saluran.

Saluran awam dan peribadi boleh digunakan.

![Buat saluran](../../image/upload/telegram/新建频道.png)

### 3. Tambah Bot Ke Saluran

1. Buka saluran yang baru dibuat.
2. Buka tetapan saluran.
3. Tambah ahli atau pentadbir.
4. Cari nama pengguna bot yang anda buat.
5. Tambah bot ke saluran.

Untuk muat naik yang paling boleh dipercayai, berikan kebenaran pentadbir kepada bot.

![Jemput bot ke saluran](../../image/upload/telegram/邀请机器人进频道里.png)

### 4. Dapatkan Channel ID Dengan User Info - Get ID - IDbot

1. Cari `@userinfobot` dalam Telegram. Nama paparannya biasanya `User Info - Get ID - IDbot`.
2. Buka chat dan klik `Start`.
3. Pilih `Channel` daripada pilihan yang diberikan oleh bot.
4. Dalam pemilih mesej, pilih saluran sasaran dan hantar kepada `@userinfobot`.
5. Apabila `@userinfobot` mengembalikan hasil, salin nombor yang ditunjukkan sebagai `Id: -100...`.

Nombor yang bermula dengan `-100` ialah `Session ID (Chat ID)` yang diperlukan oleh ImgBed.

![Dapatkan channel ID](../../image/upload/telegram/获取频道id.png)

### 5. Isi Saluran Telegram Dalam ImgBed

Kembali ke dialog konfigurasi saluran dan isi medan seperti berikut:

| Medan UI | Nilai |
| --- | --- |
| Pengecam saluran | Nama saluran tersuai, contohnya `TelegramPrimary`. |
| Aktif | Disyorkan. |
| Bot Token | Bot token daripada `@BotFather`. |
| Session ID (Chat ID) | Nombor `-100...` yang dikembalikan oleh `@userinfobot`. |
| URL Proksi Relay (pilihan) | Hanya jika diperlukan, contohnya `https://your-tg-proxy.example.com`. |
| Catatan | Nota pilihan. |

Klik Simpan apabila selesai.

![Edit konfigurasi](../../image/upload/telegram/编辑配置.png)

## Cara Mengesahkan

| Semakan | Cara Mengesahkan |
| --- | --- |
| Kad saluran muncul | Selepas menyimpan, halaman Tetapan Muat Naik sepatutnya memaparkan kad saluran Telegram. |
| Saluran boleh didayakan | Suis aktif sepatutnya kekal hidup. |
| Konfigurasi disimpan | Paparan butiran sepatutnya menunjukkan bahawa Bot Token dan Chat ID telah disimpan. |
| Muat naik berfungsi | Muat naik imej ujian dan sahkan imej itu muncul dalam saluran Telegram sasaran. |

## Senarai Semak Pantas

```text
Create a bot with @BotFather
-> Save the Bot Token
-> Create a Telegram channel
-> Add the bot to the channel and grant administrator permissions
-> Search for @userinfobot and choose Channel
-> Forward any message from the channel to @userinfobot
-> Copy the returned Id: -100...
-> Enter the Bot Token and Chat ID in ImgBed
-> Save and upload a test image
```

## Rujukan

1. Telegram bots: https://core.telegram.org/bots
2. Telegram Bot API: https://core.telegram.org/bots/api
