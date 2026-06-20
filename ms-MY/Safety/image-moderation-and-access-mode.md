# Image Moderation dan Access Mode

Image moderation memberikan age rating kepada uploaded images. Access mode mengawal ratings mana yang boleh dilihat melalui public access.

Ini mempengaruhi public gallery, public file URLs dan random image API. Ia tidak mengehadkan admin panel. Administrators masih boleh melihat dan manage semua files.

## Di Mana Untuk Configure

Buka admin panel, kemudian pergi ke:

```text
System Settings -> Security Settings -> Upload Management -> Image Moderation
```

Settings utama:

- Access mode
- Enable moderation
- Moderation provider

## Fungsi Access Mode

Access mode menentukan age ratings mana boleh dipaparkan secara public.

Current modes:

| Access Mode | Publicly Visible Ratings |
| --- | --- |
| Adult mode | General, R12, R16, R18 |
| Youth mode | General, R12, R16 |
| Teen mode | General, R12 |
| Child mode | General sahaja |

Default ialah Adult mode.

Untuk private sites atau sites dengan mature content, Adult mode mungkin sesuai. Untuk public gallery yang lebih conservative, pilih Youth, Teen atau Child mode.

## Apa Berlaku Apabila Moderation Diaktifkan

Apabila moderation diaktifkan, ImgBed memanggil selected moderation provider semasa upload dan menyimpan age rating yang dikesan.

Ratings utama:

| Rating | Meaning |
| --- | --- |
| General | Safe public content |
| R12 | Content sedikit sensitive |
| R16 | Content moderately sensitive |
| R18 | Adult content |

Moderation result digunakan apabila menentukan public access.

Jika moderation tidak diaktifkan, atau old files tidak mempunyai rating, files tersebut dianggap unrated. Unrated files tidak dibuang secara automatik daripada public gallery atau random image API hanya kerana tiada rating.

## Memilih Moderation Provider

Available providers termasuk:

- moderatecontent.com
- nsfwjs
- Sightengine

Setiap provider mempunyai requirements berbeza:

- moderatecontent.com biasanya memerlukan API Key.
- nsfwjs biasanya memerlukan API endpoint URL.
- Sightengine memerlukan API user dan API secret.

Pilih berdasarkan account, availability dan detection quality. Selagi moderation enabled dan dikonfigurasi dengan betul, ImgBed cuba menulis image rating semasa upload.

## Kesan Pada Public Gallery

Public gallery filter files mengikut access mode.

Examples:

- Adult mode: R18 images boleh muncul.
- Youth mode: R18 images disembunyikan.
- Teen mode: R16 dan R18 images disembunyikan.
- Child mode: hanya General images ditunjukkan.

Ini hanya mempengaruhi normal public access. Admin panel masih menunjukkan semua files.

## Kesan Pada Public File URLs

Public file URLs ialah direct image links yang dibuka oleh visitors.

Jika file rating dibenarkan oleh current access mode, ImgBed return original image.

Jika rating melebihi allowed level, normal public access tidak return original image. Sebaliknya, ImgBed return configured blocked result atau blocked fallback image.

Example:

- Current mode ialah Child mode.
- Satu image mempunyai rating R18.
- Visitor membuka public URL secara langsung.
- ImgBed tidak return R18 original image kepada visitor tersebut.

![Restricted file image](../../image/Safety/文件受限图.png)

Administrators yang melihat files dalam admin panel tidak terjejas oleh restriction ini.

## Kesan Pada Random Image API

Random image API juga filter candidate pool mengikut access mode.

Dalam Child mode, random images dipilih hanya daripada General-rated files.

Dalam Youth mode, random images boleh datang daripada General, R12 dan R16 files, tetapi bukan R18 files.

Ini menghalang random image API daripada bypass public gallery restrictions.

## Hubungan Dengan List Rules

Access mode bukan satu-satunya public access rule. Ia berfungsi bersama allow/block list rules.

Secara ringkas:

- Allowlisted content diutamakan sebagai public.
- Blocklisted content tidak boleh dilihat terus oleh regular visitors.
- Content yang tidak berada dalam mana-mana list akan disemak mengikut access mode.

Jika image dihadkan oleh age rating dan list rules, regular visitors tetap tidak boleh melihat original file secara langsung.

## Recommended Settings

Untuk public sites:

- Enable moderation.
- Pilih access mode yang sesuai dengan audience site.
- Gunakan Child mode atau Teen mode untuk visitors semua umur.
- Elakkan Adult mode jika tidak mahu mature content dipaparkan secara public.
- Review file ratings dalam admin panel dan adjust manually apabila perlu.

Untuk private atau personal sites:

- Adult mode biasanya memadai.
- Enable moderation jika berguna.
- Review dan adjust ratings dalam admin panel jika perlu.

## FAQ

### Adakah Files Akan Hilang Dari Admin Panel Selepas Menukar Access Mode?

Tidak.

Access mode hanya mempengaruhi normal public access. Ia tidak mempengaruhi admin panel.

### Mengapa Public Gallery Menunjukkan Lebih Sedikit Images Selepas Bertukar Ke Child Mode?

Child mode hanya membenarkan General-rated files dipaparkan secara public. R12, R16 dan R18 files akan difilter keluar.

### Bolehkah Public URLs Masih Membuka Adult Images?

Jika current access mode tidak membenarkan rating tersebut, normal public URLs tidak return original image.

### Bolehkah Random Image API Return Restricted Images?

Tidak.

Random image API filter candidates mengikut current access mode.

### Apa Berlaku Kepada Old Unrated Images?

Unrated images tidak disembunyikan secara automatik hanya kerana tiada moderation results. Anda boleh adjust ratings kemudian dalam admin panel.
