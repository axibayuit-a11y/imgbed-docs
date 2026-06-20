# Cloudflare API Token

Cloudflare API credentials memungkinkan ImgBed purge Cloudflare CDN cache setelah files berubah.

![Cloudflare API Token settings](../../image/Safety/cloudflare%20api%20token截图.png)

## Di Mana Mengonfigurasinya

Buka admin panel, lalu masuk ke:

```text
System Settings -> Security Settings -> Cloudflare API Token
```

Anda perlu mengisi:

- Zone ID
- Account email
- API Key

## Fungsi Setting Ini

Cloudflare dapat cache public image URLs.

Caching membuat image delivery lebih cepat, tetapi juga bisa membuat content lama tetap terlihat beberapa saat setelah Anda delete, block, replace, atau move file.

Setelah Cloudflare API credentials dikonfigurasi, ImgBed mencoba purge Cloudflare cache terkait saat operasi tersebut selesai.

Ini berguna saat:

- Anda delete image dan ingin public link berhenti bekerja secepat mungkin.
- Anda block image dan ingin visitors berhenti melihat original file.
- Anda replace file dengan nama yang sama dan ingin visitors melihat versi baru lebih cepat.
- Anda move atau rename files dan ingin old path cache refresh lebih cepat.
- Anda mengubah public access rules dan ingin public gallery atau random image cache update lebih cepat.

## Jika Dibiarkan Kosong

ImgBed tetap berjalan normal tanpa setting ini.

Perbedaannya, ImgBed tidak akan actively purge Cloudflare CDN cache. Visitors mungkin tetap melihat content lama sampai Cloudflare cache expire secara alami.

## Cara Menemukan Zone ID

Zone ID adalah Cloudflare Zone ID dari site yang dipakai oleh ImgBed domain Anda.

1. Sign in ke Cloudflare dashboard.
2. Buka site yang berisi ImgBed domain Anda.
3. Cari `Zone ID` di site overview page.
4. Copy ke field `Zone ID` di ImgBed.

Ini adalah site Zone ID, bukan account ID.

## Account Email

Masukkan email address yang Anda gunakan untuk sign in ke Cloudflare.

Email ini harus cocok dengan API Key di bawah.

## API Key

Masukkan Cloudflare Global API Key.

1. Sign in ke Cloudflare dashboard.
2. Buka profile.
3. Masuk ke API Tokens page.
4. Cari `Global API Key`.
5. View dan copy.
6. Paste ke field `API Key` di ImgBed.

![View global API key](../../image/Safety/查看全局令牌.png)

## Kapan Berlaku

Setelah field diisi, save settings.

File changes setelah itu akan otomatis mencoba purge Cloudflare cache. Past operations tidak dipurge secara retroaktif. Jika Anda delete atau replace file sebelum setup ini, tunggu Cloudflare cache expire atau purge manual di Cloudflare.

## FAQ

### Apakah Ini Wajib?

Tidak.

Jika domain Anda tidak memakai Cloudflare, atau Anda tidak masalah dengan CDN cache delay, biarkan kosong.

### Apakah Credentials Salah Akan Merusak Uploads?

Biasanya tidak.

Credentials salah hanya membuat ImgBed gagal purge Cloudflare cache. Upload dan normal file access seharusnya tetap berjalan.

### Mengapa Deleted Image Masih Bisa Dibuka?

Penyebab paling umum adalah Cloudflare masih menyimpan file lama di cache.

Dengan Cloudflare API credentials yang benar, ImgBed purge related URL cache saat file dihapus.

### Mengapa Setelah Replace File Masih Melihat Image Lama?

Ini juga biasanya disebabkan CDN cache.

Setelah setting ini dikonfigurasi, ImgBed mencoba purge old URL cache saat file dengan nama yang sama dioverwrite.
