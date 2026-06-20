# Image Moderation dan Access Mode

Image moderation memberi age rating pada uploaded images. Access mode mengontrol rating mana yang terlihat melalui public access.

Ini memengaruhi public gallery, public file URLs, dan random image API. Ini tidak membatasi admin panel. Administrators tetap dapat melihat dan manage semua files.

## Di Mana Mengonfigurasinya

Buka admin panel, lalu masuk ke:

```text
System Settings -> Security Settings -> Upload Management -> Image Moderation
```

Settings utama:

- Access mode
- Enable moderation
- Moderation provider

## Fungsi Access Mode

Access mode menentukan age ratings mana yang dapat ditampilkan secara public.

Current modes:

| Access Mode | Publicly Visible Ratings |
| --- | --- |
| Adult mode | General, R12, R16, R18 |
| Youth mode | General, R12, R16 |
| Teen mode | General, R12 |
| Child mode | Hanya General |

Default adalah Adult mode.

Untuk private sites atau sites dengan mature content, Adult mode mungkin sesuai. Untuk public gallery yang lebih konservatif, pilih Youth, Teen, atau Child mode.

## Apa yang Terjadi Saat Moderation Diaktifkan

Saat moderation aktif, ImgBed memanggil selected moderation provider saat upload dan menyimpan age rating yang terdeteksi.

Ratings utama:

| Rating | Meaning |
| --- | --- |
| General | Safe public content |
| R12 | Content agak sensitif |
| R16 | Content cukup sensitif |
| R18 | Adult content |

Moderation result dipakai saat menentukan public access.

Jika moderation tidak aktif, atau old files tidak memiliki rating, files tersebut dianggap unrated. Unrated files tidak otomatis dihapus dari public gallery atau random image API hanya karena tidak memiliki rating.

## Memilih Moderation Provider

Available providers meliputi:

- moderatecontent.com
- nsfwjs
- Sightengine

Setiap provider memiliki requirements berbeda:

- moderatecontent.com biasanya memerlukan API Key.
- nsfwjs biasanya memerlukan API endpoint URL.
- Sightengine memerlukan API user dan API secret.

Pilih berdasarkan account, availability, dan detection quality. Selama moderation enabled dan dikonfigurasi benar, ImgBed mencoba menulis image rating saat upload.

## Dampak pada Public Gallery

Public gallery filter files sesuai access mode.

Examples:

- Adult mode: R18 images dapat muncul.
- Youth mode: R18 images disembunyikan.
- Teen mode: R16 dan R18 images disembunyikan.
- Child mode: hanya General images yang ditampilkan.

Ini hanya memengaruhi normal public access. Admin panel tetap menampilkan semua files.

## Dampak pada Public File URLs

Public file URLs adalah direct image links yang dibuka visitors.

Jika file rating diizinkan oleh current access mode, ImgBed return original image.

Jika rating lebih tinggi dari allowed level, normal public access tidak return original image. Sebagai gantinya, ImgBed return configured blocked result atau blocked fallback image.

Example:

- Current mode adalah Child mode.
- Sebuah image memiliki rating R18.
- Visitor membuka public URL langsung.
- ImgBed tidak return R18 original image ke visitor tersebut.

![Restricted file image](../../image/Safety/文件受限图.png)

Administrators yang melihat files di admin panel tidak terpengaruh restriction ini.

## Dampak pada Random Image API

Random image API juga filter candidate pool sesuai access mode.

Di Child mode, random images hanya dipilih dari General-rated files.

Di Youth mode, random images dapat berasal dari General, R12, dan R16 files, tetapi bukan R18 files.

Ini mencegah random image API bypass public gallery restrictions.

## Hubungan Dengan List Rules

Access mode bukan satu-satunya public access rule. Ia bekerja bersama allow/block list rules.

Secara sederhana:

- Allowlisted content diprioritaskan sebagai public.
- Blocklisted content tidak bisa dilihat langsung oleh regular visitors.
- Content yang tidak ada di list mana pun kemudian diperiksa menurut access mode.

Jika image dibatasi oleh age rating dan list rules, regular visitors tetap tidak bisa melihat original file langsung.

## Recommended Settings

Untuk public sites:

- Enable moderation.
- Pilih access mode yang sesuai dengan audience site.
- Gunakan Child mode atau Teen mode untuk visitors semua umur.
- Hindari Adult mode jika tidak ingin mature content tampil secara public.
- Review file ratings di admin panel dan adjust manually jika perlu.

Untuk private atau personal sites:

- Adult mode biasanya cukup.
- Enable moderation jika berguna.
- Review dan adjust ratings di admin panel sesuai kebutuhan.

## FAQ

### Apakah Files Hilang dari Admin Panel Setelah Mengubah Access Mode?

Tidak.

Access mode hanya memengaruhi normal public access. Tidak memengaruhi admin panel.

### Mengapa Public Gallery Menampilkan Lebih Sedikit Images Setelah Pindah ke Child Mode?

Child mode hanya mengizinkan General-rated files tampil secara public. R12, R16, dan R18 files akan difilter keluar.

### Apakah Public URLs Masih Bisa Membuka Adult Images?

Jika current access mode tidak mengizinkan rating tersebut, normal public URLs tidak return original image.

### Apakah Random Image API Bisa Return Restricted Images?

Tidak.

Random image API filter candidates sesuai current access mode.

### Bagaimana Dengan Old Unrated Images?

Unrated images tidak otomatis disembunyikan hanya karena tidak memiliki moderation results. Anda dapat adjust ratings nanti di admin panel.
