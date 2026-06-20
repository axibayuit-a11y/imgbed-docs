# IP Geolocation dan User Management

IP geolocation menukar IP addresses dalam uploader records, login devices dan logs seumpamanya kepada locations anggaran.

Selepas dikonfigurasi, admin panel boleh menunjukkan asal upload dan access dengan lebih jelas. User Management juga membolehkan anda block atau restore upload access untuk IP addresses yang mencurigakan.

## Di Mana Untuk Configure

Buka:

```text
System Settings -> Other Settings -> IP Geolocation
```

![IP geolocation](../../image/other/ip定位/ip定位.png)

## Available Settings

Flow IP geolocation baharu menyokong beberapa sources, bukan bergantung kepada satu map service sahaja.

| Setting | Purpose |
| --- | --- |
| IP geolocation language | Memilih display language, seperti English, Simplified Chinese, Japanese, French dan lain-lain. |
| MaxMind Account ID | MaxMind account ID untuk MaxMind GeoLite Web Service. |
| MaxMind License Key | MaxMind License Key. |
| Tencent Map Key | Tencent Location Service key. Berguna untuk Chinese addresses dan mainland China IPs. |
| ipapi Key | APILayer ipapi key. Menyokong multilingual IP geolocation. |

Isi hanya services yang anda perlukan. Anda tidak perlu configure semua field.

Jika tiada key diberi, ImgBed masih cuba built-in free sources, tetapi stability, language support dan precision mungkin lebih rendah daripada service yang anda configure sendiri.

## Recommended Choices

Jika anda terutama memerlukan Chinese addresses:

1. Tetapkan IP geolocation language kepada Simplified Chinese.
2. Configure Tencent Map Key.
3. Optional: tambah MaxMind atau ipapi sebagai fallback sources.

Jika anda terutama memerlukan English atau multilingual addresses:

1. Pilih language yang diperlukan.
2. Configure MaxMind Account ID dan License Key.
3. Tambah ipapi Key jika mahu multilingual results yang lebih baik.

## MaxMind Setup

MaxMind memerlukan:

```text
MaxMind Account ID
MaxMind License Key
```

Dapatkan account ID dalam MaxMind dashboard dan generate License Key dari License Keys page.

![MaxMind key config](../../image/other/ip定位/maxmind的key配置.png)

Selepas dijana, paste Account ID dan License Key ke ImgBed dan save.

Free plan MaxMind sesuai untuk everyday use, tetapi ada request limits. Jika quota exceeded, ImgBed terus mencuba sources lain yang available.

## ipapi Setup

ipapi menggunakan APILayer API Key.

Buka ipapi console dan copy API Key yang ditunjukkan.

![ipapi config](../../image/other/ip定位/ipapi配置.png)

Paste ke field `ipapi Key` dalam ImgBed dan save.

ipapi menyokong multilingual IP geolocation dan berguna apabila anda mahu addresses dipaparkan dalam selected language. Free plan juga ada request limits. Jika quota habis, ImgBed terus mencuba sources lain yang available.

## Tencent Map Key Setup

Tencent Map Key berguna untuk Chinese addresses, terutama mainland China IPs.

Semasa mencipta key dalam Tencent Location Service, enable:

```text
WebServiceAPI
```

Selepas creation, paste key ke `Tencent Map Key` dan save.

Jika anda hanya perlukan basic Chinese IP geolocation, Tencent Map Key sudah cukup untuk bermula.

## Apa Yang Perlu Disemak Dalam User Management

User Management tersedia dari bahagian atas admin panel.

![User management](../../image/other/用户管理显示.png)

User Management memaparkan upload activity mengikut IP:

| Field | Description |
| --- | --- |
| IP source | Uploader source IP. |
| Address | Location anggaran yang resolved daripada IP. |
| Total upload size | Jumlah file size yang di-upload oleh IP ini. |
| Upload count | Bilangan uploads daripada IP ini. |
| Upload allowed | On bermaksud uploads dibenarkan. Off bermaksud uploads diblock. |

Klik arrow di kiri untuk expand list files yang di-upload oleh IP tersebut.

File list menunjukkan file name, preview, file size, moderation result, file status dan upload time. Jika uploads kelihatan mencurigakan, expand IP dahulu, review files, kemudian tentukan sama ada perlu block uploads seterusnya.

Jika IP mencurigakan, matikan `Upload allowed`. Future uploads daripada IP tersebut akan diblock.

## Search, Sort dan Advanced Filters

Di bahagian atas User Management, search menggunakan IP source atau address.

Sort mengikut time, upload count atau total upload size untuk mencari recent uploaders, high-frequency uploaders atau high-usage IPs.

Untuk siasatan lebih mendalam, buka advanced filters.

![Advanced filters](../../image/other/用户管理高级筛选.png)

Advanced filters menyokong:

| Filter | Usage |
| --- | --- |
| Time range | Menunjukkan IPs yang upload files dalam tempoh dipilih. |
| Access status | Filter mengikut normal, blocked dan states seumpamanya. |
| Allow/block list | Filter mengikut allowlist, blocklist atau unset. |
| File type | Menunjukkan IPs yang upload images, videos, audio, documents, code atau other files. |
| File size | Filter mengikut uploaded file size range. |
| Age rating | Filter mengikut unset, General, R12+, R16+, R18 dan ratings seumpamanya. |
| File status | Filter mengikut current file status untuk menyiasat abnormal files. |

Klik `Apply Filters` untuk apply. Gunakan `Reset` untuk kembali kepada semua data.

## Mobile View

Pada mobile, User Management bertukar kepada card layout.

![Mobile user management](../../image/other/手机端显示用户管理效果.png)

Setiap card menunjukkan IP, address, total upload size, upload count dan upload allowed switch. Anda boleh manage users tanpa horizontal table scrolling.

## Jika Location Kelihatan Salah

IP geolocation adalah anggaran. Ia bukan street address yang tepat.

Jika user berada di belakang proxy, data center, cloud server atau cross-border network, location yang dipaparkan mungkin berbeza daripada location sebenar.

Gunakan feature ini untuk memahami rough origin, mencari abnormal uploads dan membantu blocking decisions. Jangan anggap ia sebagai precise tracking.

## Common Cases

| Case | Meaning |
| --- | --- |
| Address kosong | IP mungkin belum resolved, atau current source temporarily unavailable. |
| Address language salah | Semak IP geolocation language dan sama ada source yang menyokong language itu telah dikonfigurasi. |
| Address menunjukkan data center | Banyak proxies, cloud servers dan crawlers muncul sebagai data center atau ISP addresses. |
| Upload count tinggi | Review IP ini dengan teliti dan block uploads jika perlu. |
| Total upload size besar | Sort atau filter, expand IP dan inspect specific files. |
| Perlu restore selepas blocking | Hidupkan semula `Upload allowed`. |

## Quick Flow

```text
Buka IP Geolocation dalam Other Settings
-> Pilih IP geolocation language
-> Isi MaxMind, Tencent Map atau ipapi credentials jika perlu
-> Save settings
-> Buka User Management
-> Review IP source, address, total upload size dan upload count
-> Gunakan search, sort atau advanced filters untuk mencari abnormal IPs
-> Allow atau block uploads mengikut keperluan
```
