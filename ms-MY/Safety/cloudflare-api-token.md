# Cloudflare API Token

Cloudflare API credentials membolehkan ImgBed purge Cloudflare CDN cache selepas files berubah.

![Cloudflare API Token settings](../../image/Safety/cloudflare%20api%20token截图.png)

## Di Mana Untuk Configure

Buka admin panel, kemudian pergi ke:

```text
System Settings -> Security Settings -> Cloudflare API Token
```

Anda perlu mengisi:

- Zone ID
- Account email
- API Key

## Fungsi Setting Ini

Cloudflare mungkin cache public image URLs.

Caching membuatkan image delivery lebih laju, tetapi ia juga boleh menyebabkan content lama masih kelihatan seketika selepas anda delete, block, replace atau move file.

Selepas Cloudflare API credentials dikonfigurasi, ImgBed cuba purge Cloudflare cache yang berkaitan apabila operasi tersebut selesai.

Ini berguna apabila:

- Anda delete image dan mahu public link berhenti berfungsi secepat mungkin.
- Anda block image dan mahu visitors berhenti melihat original file.
- Anda replace file dengan nama yang sama dan mahu visitors melihat version baharu lebih cepat.
- Anda move atau rename files dan mahu old path cache refresh dengan cepat.
- Anda menukar public access rules dan mahu public gallery atau random image cache update lebih cepat.

## Jika Dibiarkan Kosong

ImgBed masih berfungsi secara normal tanpa setting ini.

Bezanya, ImgBed tidak akan actively purge Cloudflare CDN cache. Visitors mungkin terus melihat content lama sehingga Cloudflare cache expire secara semula jadi.

## Cara Mencari Zone ID

Zone ID ialah Cloudflare Zone ID untuk site yang digunakan oleh ImgBed domain anda.

1. Sign in ke Cloudflare dashboard.
2. Buka site yang mengandungi ImgBed domain anda.
3. Cari `Zone ID` pada site overview page.
4. Copy ke field `Zone ID` dalam ImgBed.

Ini ialah site Zone ID, bukan account ID.

## Account Email

Masukkan email address yang anda gunakan untuk sign in ke Cloudflare.

Ia mesti sepadan dengan API Key yang diberi di bawah.

## API Key

Masukkan Cloudflare Global API Key.

1. Sign in ke Cloudflare dashboard.
2. Buka profile anda.
3. Pergi ke API Tokens page.
4. Cari `Global API Key`.
5. View dan copy.
6. Paste ke field `API Key` dalam ImgBed.

![View global API key](../../image/Safety/查看全局令牌.png)

## Bila Ia Berkuat Kuasa

Selepas mengisi field, save settings.

Perubahan file selepas itu akan cuba purge Cloudflare cache secara automatik. Operasi lama tidak dipurge secara retroaktif. Jika anda delete atau replace file sebelum setup ini, tunggu Cloudflare cache expire atau purge secara manual dalam Cloudflare.

## FAQ

### Adakah Ini Wajib?

Tidak.

Jika domain anda tidak menggunakan Cloudflare, atau anda tidak kisah dengan CDN cache delay, anda boleh biarkan kosong.

### Adakah Wrong Credentials Akan Merosakkan Uploads?

Biasanya tidak.

Wrong credentials hanya menghalang ImgBed daripada purge Cloudflare cache. Upload dan normal file access sepatutnya terus berfungsi.

### Mengapa Deleted Image Masih Boleh Dibuka?

Sebab paling biasa ialah Cloudflare masih menyimpan file lama dalam cache.

Dengan Cloudflare API credentials yang betul, ImgBed purge related URL cache apabila file dipadam.

### Mengapa Masih Nampak Image Lama Selepas Replace File?

Ini juga biasanya disebabkan CDN cache.

Selepas setting ini dikonfigurasi, ImgBed cuba purge old URL cache apabila file dengan nama sama dioverwrite.
