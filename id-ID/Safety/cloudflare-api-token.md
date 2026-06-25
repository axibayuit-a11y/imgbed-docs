# Cloudflare API Token

Kredensial Cloudflare API memungkinkan ImgBed membersihkan tembolok CDN Cloudflare setelah berkas berubah.

![Pengaturan Cloudflare API Token](../../image/Safety/cloudflare%20api%20token截图.png)

## Di Mana Mengonfigurasinya

Buka panel admin, lalu masuk ke:

```text
System Settings -> Security Settings -> Cloudflare API Token
```

Anda perlu mengisi:

- Zone ID
- Email akun
- API Key

## Fungsi Pengaturan Ini

Cloudflare dapat menyimpan URL gambar publik di tembolok.

Tembolok membuat pengiriman gambar lebih cepat, tetapi juga dapat membuat konten lama tetap terlihat beberapa saat setelah Anda menghapus, memblokir, mengganti, atau memindahkan berkas.

Setelah kredensial Cloudflare API dikonfigurasi, ImgBed akan mencoba membersihkan tembolok Cloudflare terkait saat operasi tersebut selesai.

Ini berguna saat:

- Anda menghapus gambar dan ingin tautan publik berhenti bekerja secepat mungkin.
- Anda memblokir gambar dan ingin pengunjung berhenti melihat berkas asli.
- Anda mengganti berkas dengan nama yang sama dan ingin pengunjung melihat versi baru lebih cepat.
- Anda memindahkan atau mengganti nama berkas dan ingin tembolok jalur lama disegarkan lebih cepat.
- Anda mengubah aturan akses publik dan ingin tembolok galeri publik atau gambar acak diperbarui lebih cepat.

## Jika Dibiarkan Kosong

ImgBed tetap berjalan normal tanpa pengaturan ini.

Perbedaannya, ImgBed tidak akan secara aktif membersihkan tembolok CDN Cloudflare. Pengunjung mungkin tetap melihat konten lama sampai tembolok Cloudflare kedaluwarsa secara alami.

## Cara Menemukan Zone ID

Zone ID adalah Cloudflare Zone ID untuk situs yang dipakai oleh domain ImgBed Anda.

1. Login ke dashboard Cloudflare.
2. Buka situs yang berisi domain ImgBed Anda.
3. Cari `Zone ID` di halaman ringkasan situs.
4. Salin ke kolom `Zone ID` di ImgBed.

Ini adalah Zone ID situs, bukan account ID.

## Email Akun

Masukkan alamat email yang Anda gunakan untuk login ke Cloudflare.

Email ini harus cocok dengan API Key di bawah.

## API Key

Masukkan Cloudflare Global API Key.

1. Login ke dashboard Cloudflare.
2. Buka profil.
3. Masuk ke halaman API Tokens.
4. Cari `Global API Key`.
5. Lihat dan salin.
6. Tempel ke kolom `API Key` di ImgBed.

![Lihat global API key](../../image/Safety/查看全局令牌.png)

## Kapan Berlaku

Setelah kolom diisi, simpan pengaturan.

Perubahan berkas setelah itu akan otomatis mencoba membersihkan tembolok Cloudflare. Operasi sebelumnya tidak dibersihkan secara retroaktif. Jika Anda menghapus atau mengganti berkas sebelum pengaturan ini dibuat, tunggu tembolok Cloudflare kedaluwarsa atau bersihkan secara manual di Cloudflare.

## FAQ

### Apakah Ini Wajib?

Tidak.

Jika domain Anda tidak memakai Cloudflare, atau Anda tidak keberatan dengan jeda tembolok CDN, biarkan kosong.

### Apakah Kredensial yang Salah Akan Merusak Unggahan?

Biasanya tidak.

Kredensial yang salah hanya membuat ImgBed gagal membersihkan tembolok Cloudflare. Unggahan dan akses berkas normal seharusnya tetap berjalan.

### Mengapa Gambar yang Dihapus Masih Bisa Dibuka?

Penyebab paling umum adalah Cloudflare masih menyimpan berkas lama di tembolok.

Dengan kredensial Cloudflare API yang benar, ImgBed membersihkan tembolok URL terkait saat berkas dihapus.

### Mengapa Setelah Mengganti Berkas Saya Masih Melihat Gambar Lama?

Ini juga biasanya disebabkan oleh tembolok CDN.

Setelah pengaturan ini dikonfigurasi, ImgBed mencoba membersihkan tembolok URL lama saat berkas dengan nama yang sama ditimpa.

