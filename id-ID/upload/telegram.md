# Menambahkan Kanal Telegram

## Yang Diperlukan Sebelum Memulai

| Kebutuhan | Tujuan |
| --- | --- |
| Akun Telegram | Digunakan untuk membuat bot dan kanal penyimpanan. |
| `@BotFather` | Digunakan untuk membuat bot Telegram. |
| Kanal Telegram | Tujuan akhir penyimpanan berkas. |
| `@userinfobot` | Digunakan untuk mencari `Chat ID` kanal. |

## Di Mana Menambahkannya

1. Buka pengaturan sistem.
2. Masuk ke pengaturan unggah.
3. Klik Tambah kanal di kanan atas.
4. Pilih `Telegram`.

## Referensi Kolom

| Kolom | Fungsi | Wajib |
| --- | --- | --- |
| Nama kanal | Nama yang mudah dikenali untuk kanal ini, misalnya `Telegram Primary`. | Wajib |
| Aktif | Mengaktifkan atau menonaktifkan kanal ini. | Disarankan |
| Bot Token | Token bot Telegram Anda. | Wajib |
| Session ID (Chat ID) | ID kanal Telegram. | Wajib |
| URL proksi relay (opsional) | Gunakan hanya jika akses Telegram tidak stabil. Masukkan URL proksi lengkap, termasuk `https://`. | Opsional |
| Catatan | Catatan untuk pemeliharaan berikutnya. | Opsional |

## Langkah Konfigurasi

### 1. Membuat Bot Telegram

1. Buka Telegram dan cari `@BotFather`.
2. Buka percakapan dan klik `Start`.
3. Kirim `/newbot`.
4. Ikuti instruksi untuk memasukkan nama tampilan bot.
5. Ikuti instruksi untuk memasukkan nama pengguna bot. Biasanya nama pengguna harus diakhiri dengan `bot`.
6. Setelah bot dibuat, `@BotFather` akan mengembalikan token bot.

Token ini adalah `Bot Token` yang perlu dimasukkan ke ImgBed.

![Menyimpan token bot](../../image/upload/telegram/保存机器人令牌.png)

### 2. Membuat Kanal

1. Di Telegram, klik Kanal baru.
2. Masukkan nama kanal.
3. Selesaikan pembuatan kanal.

Kanal publik dan privat sama-sama dapat digunakan.

![Membuat kanal](../../image/upload/telegram/新建频道.png)

### 3. Menambahkan Bot ke Kanal

1. Buka kanal yang baru dibuat.
2. Buka pengaturan kanal.
3. Tambahkan anggota atau administrator.
4. Cari nama pengguna bot yang Anda buat.
5. Tambahkan bot ke kanal.

Agar unggahan lebih andal, berikan izin administrator kepada bot.

![Mengundang bot ke kanal](../../image/upload/telegram/邀请机器人进频道里.png)

### 4. Mengambil Channel ID dengan User Info - Get ID - IDbot

1. Cari `@userinfobot` di Telegram. Nama tampilannya biasanya `User Info - Get ID - IDbot`.
2. Buka percakapan dan klik `Start`.
3. Pilih `Channel` dari opsi bot.
4. Di pemilih pesan, pilih kanal target lalu kirim ke `@userinfobot`.
5. Saat `@userinfobot` mengembalikan hasil, salin angka yang muncul sebagai `Id: -100...`.

Angka yang diawali `-100` adalah `Session ID (Chat ID)` yang diperlukan ImgBed.

![Mengambil Channel ID](../../image/upload/telegram/获取频道id.png)

### 5. Mengisi Kanal Telegram di ImgBed

Kembali ke dialog konfigurasi kanal dan isi kolom sebagai berikut:

| Kolom UI | Nilai |
| --- | --- |
| Pengidentifikasi kanal | Nama kanal kustom, misalnya `TelegramPrimary`. |
| Aktif | Disarankan. |
| Bot Token | Token bot dari `@BotFather`. |
| Session ID (Chat ID) | Angka `-100...` yang dikembalikan oleh `@userinfobot`. |
| URL proksi relay (opsional) | Hanya jika diperlukan, misalnya `https://your-tg-proxy.example.com`. |
| Catatan | Catatan opsional. |

Setelah selesai, klik Simpan.

![Mengedit konfigurasi](../../image/upload/telegram/编辑配置.png)

## Verifikasi

| Pemeriksaan | Cara memeriksa |
| --- | --- |
| Kartu kanal muncul | Setelah disimpan, halaman pengaturan unggah harus menampilkan kartu kanal Telegram. |
| Kanal dapat diaktifkan | Sakelar Active harus tetap aktif. |
| Konfigurasi tersimpan | Tampilan detail harus menunjukkan bahwa Bot Token dan Chat ID sudah tersimpan. |
| Unggahan berjalan | Unggah gambar uji dan pastikan muncul di kanal Telegram target. |

## Daftar Cepat

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

## Referensi

1. Bot Telegram: https://core.telegram.org/bots
2. Telegram Bot API: https://core.telegram.org/bots/api
