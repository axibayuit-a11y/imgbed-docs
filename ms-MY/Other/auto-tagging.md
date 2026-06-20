# Auto Tagging

Auto tagging dikonfigurasi di bawah:

```text
System Settings -> Other Settings -> Auto Tagging
```

Ia menjana image tags secara automatik. Tags ini berguna untuk search, random image filtering, public gallery filtering dan age-rating access control.

## Fungsi Auto Tagging

| Feature | Description |
| --- | --- |
| Generate content tags | Menambah tags untuk people, scenes, objects, art style dan visual content yang seumpamanya. |
| Generate character tags | Berguna untuk anime images dan illustrations. |
| Add orientation tags | Menambah `landscape`, `portrait` atau `square`. |
| Add image rating | Menyimpan rating results `G/S/Q/E` untuk general, sensitive, questionable atau explicit content. |
| Auto-tag on upload | Newly uploaded images masuk ke tagging flow secara automatik. |
| Batch tagging | Menambah tags kepada old images dalam semua folders atau selected folders. |

## Perkara Yang Diperlukan Dahulu

Sediakan sekurang-kurangnya satu Hugging Face Space URL yang boleh diakses.

Cara recommended ialah duplicate Space `wd-tagger` milik SmilingWolf ke Hugging Face account anda sendiri:

```text
https://huggingface.co/spaces/SmilingWolf/wd-tagger
```

Anda boleh menggunakan public Space sementara, tetapi public Spaces dikongsi oleh ramai users dan mungkin queue, perlahan atau unavailable. Space yang diduplicate di bawah account anda sendiri lebih stabil untuk auto tagging jangka panjang.

## Duplicate Space SmilingWolf

1. Sign in ke Hugging Face.
2. Buka `https://huggingface.co/spaces/SmilingWolf/wd-tagger`.

![SmilingWolf public Space](../../image/other/微笑狼的公开仓库.png)

3. Klik menu tiga titik di penjuru kanan atas.
4. Pilih `Duplicate this Space`.
5. Kekalkan Space name default atau pilih nama sendiri, contohnya `wd-tagger`.
6. Tetapkan visibility kepada `Public`. Public Spaces lebih mudah dipanggil oleh ImgBed.
7. Mulakan dengan default free hardware dahulu. Upgrade kemudian hanya jika queueing jelas berlaku.
8. Cipta Space dan tunggu build selesai.

Selepas build selesai, buka Space page anda. URL biasanya kelihatan seperti:

```text
https://huggingface.co/spaces/your-name/wd-tagger
```

Copy browser URL dan paste ke `Space URLs` dalam ImgBed.

## Mengisi Multiple Space URLs

Masukkan satu Space URL setiap baris.

Examples:

| Value | Description |
| --- | --- |
| `https://huggingface.co/spaces/SmilingWolf/wd-tagger` | SmilingWolf public Space. Baik untuk temporary testing. |
| `https://huggingface.co/spaces/lintonxue00/wd-tagger` | Copied Space page URL. |
| `https://huggingface.co/spaces/your-name/wd-tagger` | Space yang anda duplicate sendiri. |

Anda boleh masukkan beberapa URLs. ImgBed menggunakan beberapa Spaces bersama-sama, yang boleh meningkatkan speed.

Jika satu Space temporarily unavailable, Space lain masih boleh terus processing.

## Settings

| Option | Recommendation |
| --- | --- |
| `Space URLs` | Masukkan Space URLs yang disediakan. Gunakan sekurang-kurangnya satu. |
| Target folder | Biarkan kosong untuk semua folders. Pilih folder hanya jika mahu process directory tertentu. |
| Recognition model | Kekalkan `wd-swinv2-tagger-v3` secara default. |
| General tag threshold | Default sesuai untuk kebanyakan images. Nilai lebih rendah menghasilkan lebih banyak tags; nilai lebih tinggi menghasilkan kurang tags. |
| Character tag threshold | Default lebih conservative dan membantu mengelakkan character tags yang salah. |
| `MCut` automatic threshold | Biarkan off pada permulaan. Hidupkan apabila mahu model menentukan jumlah tags secara automatik. |
| Auto-tag on upload | Hidupkan jika newly uploaded images patut mendapat tags secara automatik. |
| Start tagging | Batch-tag old images secara manual. |

## Recommended Starting Values

| Option | Recommended Value |
| --- | --- |
| Recognition model | `wd-swinv2-tagger-v3` |
| General tag threshold | `0.35` |
| Character tag threshold | `0.85` |
| `MCut` | Off pada permulaan |
| Auto-tag on upload | Enable jika perlu |

Jika tags terlalu banyak, naikkan general threshold sedikit.

Jika tags terlalu sedikit, turunkan general threshold sedikit.

## Batch Tagging

1. Isi `Space URLs`.
2. Pilih target folder.
3. Klik start tagging.
4. Tunggu progress selesai.

Jika target folder kosong, ImgBed process semua folders.

Batch tagging paling sesuai untuk old images. Untuk new images, enable auto-tag on upload supaya tidak perlu run secara manual setiap kali.

## Auto-Tag on Upload

Selepas auto-tag on upload diaktifkan, newly uploaded images memanggil `Space URLs` yang dikonfigurasi secara automatik.

Ini sesuai untuk penggunaan jangka panjang.

Jika Space sedang queueing, upload masih boleh selesai dahulu dan tagging diteruskan selepas itu.

## Images Yang Diproses

Auto tagging terutama memproses image files.

Images yang sudah mempunyai tags, orientation, rating, width dan height lengkap akan diskip untuk mengelakkan Space calls yang tidak perlu.

ImgBed hanya mengisi maklumat yang hilang apabila boleh. Contohnya, jika hanya orientation hilang, ia cuba menambah orientation tanpa memanggil full content tag flow.

## FAQ

### Mengapa Perlu Duplicate Space Sendiri?

Public Spaces dikongsi oleh ramai users. Space duplicate anda digunakan terutamanya oleh ImgBed site anda, jadi biasanya lebih laju dan reliable.

### Space Asyik Starting Up

Selepas creation pertama, atau selepas idle lama, Space mungkin memerlukan masa untuk start.

Buka Space page anda dahulu. Selepas ia boleh recognize image secara normal, kembali ke ImgBed dan start tagging.

### Bagaimana Copy Space URL?

Buka Hugging Face Space page anda dan copy browser address.

Examples:

```text
https://huggingface.co/spaces/lintonxue00/wd-tagger
https://huggingface.co/spaces/SmilingWolf/wd-tagger
```

### Bolehkah Tambah Multiple Spaces?

Boleh. Masukkan satu Space URL setiap baris.

Multiple Spaces process images bersama-sama dan berguna apabila anda mempunyai banyak images.

### Mengapa Tags Dalam English?

SmilingWolf models output English tags. Ini normal.

Tags digunakan terutamanya untuk search, filtering, random image API dan public gallery filters.

### Rating Tags Digunakan Untuk Apa?

Rating results berfungsi bersama access mode dalam Security Settings.

Contohnya, apabila visitor access dihadkan oleh age rating, public browsing dan random image features akan filter images mengikut rules tersebut.

## Quick Flow

```text
Sign in ke Hugging Face
-> Buka SmilingWolf/wd-tagger
-> Duplicate this Space
-> Tunggu Space selesai build
-> Copy Space URL anda
-> Isi Space URLs dalam ImgBed
-> Pilih model dan thresholds
-> Start tagging atau enable auto-tag on upload
```
