# API Imej Rawak dan Galeri Awam

Kedua-dua fungsi dikonfigurasikan di bawah:

```text
System Settings -> Other Settings
```

## API Imej Rawak

API Imej Rawak mengembalikan satu fail rawak daripada direktori yang dipilih. Ia berguna untuk latar belakang laman, putaran avatar atau panggilan imej rawak daripada halaman luaran.

Selepas diaktifkan, gunakan:

```text
https://your-domain.com/random
```

## Tetapan API Imej Rawak

| Pilihan | Tujuan |
| --- | --- |
| Aktifkan | Menghidupkan atau mematikan titik akhir `/random`. Apabila dimatikan, akses dilarang. |
| Direktori | Mengehadkan direktori yang boleh digunakan oleh API Imej Rawak. Direktori yang tidak termasuk di sini tidak boleh digunakan oleh API. |
| Demo panggilan | Menjana pautan API Imej Rawak yang boleh anda salin terus. |

Anda boleh memilih berbilang direktori. Contohnya, jika hanya `/landscape/` dan `/portrait/` dibenarkan, API Imej Rawak hanya boleh memilih fail daripada direktori tersebut dan subdirektorinya.

## Parameter API Imej Rawak

| Parameter | Contoh | Tujuan |
| --- | --- | --- |
| `dir` | `/landscape/` | Menentukan direktori rawak. |
| `content` | `image` | Menentukan jenis media. Gunakan `image`, `video`, `audio` atau gabungan yang dipisahkan dengan koma. |
| `orientation` | `auto` | Menapis orientasi imej. Gunakan `portrait`, `landscape` atau `auto`. |
| `type` | `url` | Format pulangan. Kosong bermaksud ubah hala, `url` mengembalikan URL teks biasa, `json` mengembalikan JSON. |
| `origin` | `1` | Digunakan dengan `type=url` untuk mengembalikan URL penuh. |
| `age` | `all-ages,r12` | Menapis mengikut penarafan umur. |
| `tag` | `wallpaper,sky` | Hanya mengembalikan fail yang mengandungi tag ini. |
| `ex` | `private` | Mengecualikan fail yang mengandungi tag ini. |

## Format Pulangan

Tanpa `type`, API akan terus mengubah hala ke URL fail rawak.

Dengan `type=url`, ia mengembalikan URL berbentuk teks.

Dengan `type=json`, ia mengembalikan maklumat fail, termasuk URL fail, ID fail, nama fail, jenis fail, tag, penarafan dan metadata berkaitan.

## Peraturan Akses

API Imej Rawak mengikut peraturan akses awam:

| Peraturan | Kesan |
| --- | --- |
| Sekatan direktori | Hanya fail dalam direktori yang dibenarkan boleh dipilih. |
| Senarai sekat | Fail dalam senarai sekat dikeluarkan daripada kumpulan rawak. |
| Mod senarai benarkan | Apabila diaktifkan, hanya fail yang dibenarkan untuk akses awam akan dikembalikan. |
| Penarafan umur | Kandungan R12, R16, R18 dan yang seumpamanya ditapis mengikut mod akses semasa. |

Jika tiada fail yang sepadan selepas penapisan, API mengembalikan tiada hasil yang sepadan.

## Cache

API Imej Rawak menyimpan cache kumpulan calon direktori untuk meningkatkan kelajuan.

Selepas fail berubah, ImgBed mengemas kini versi cache direktori, dan permintaan seterusnya membina semula kumpulan calon. Direktori kosong dicache seketika untuk mengelakkan pertanyaan berulang.

## Galeri Awam

Galeri awam menyediakan halaman pelayaran awam baca sahaja untuk direktori yang anda benarkan pelawat lihat.

Selepas diaktifkan, pelawat boleh membuka:

```text
https://your-domain.com/browse/directory-name
```

## Tetapan Galeri Awam

| Pilihan | Tujuan |
| --- | --- |
| Aktifkan | Menghidupkan atau mematikan galeri awam. Apabila dimatikan, pelawat tidak boleh melayarinya. |
| Mod pemuatan imej | Mengawal sama ada pratonton menggunakan imej asal atau imej kecil. |
| Direktori terbuka | Menetapkan direktori yang boleh diakses oleh pelawat. |

## Mod Pemuatan Imej

| Mod | Tujuan |
| --- | --- |
| Asal | Halaman pelawat memuatkan fail asal secara terus. |
| Imej kecil | Halaman pelawat mengutamakan imej kecil untuk pemuatan yang lebih pantas. |

## Direktori Terbuka

Direktori terbuka menentukan perkara yang boleh dilihat oleh pelawat.

Contoh:

```text
/1/,/2/,/landscape/,/portrait/
```

Pelawat kemudian boleh mengakses:

```text
https://your-domain.com/browse/1
https://your-domain.com/browse/2
https://your-domain.com/browse/landscape
https://your-domain.com/browse/portrait
```

Subdirektori juga boleh dibuka, seperti `/2026/lucky/`. Pelawat disekat daripada direktori yang tidak dibuka.

## Ciri Galeri Awam

| Ciri | Penerangan |
| --- | --- |
| Melayari direktori | Melihat fail dan subdirektori dalam direktori terbuka. |
| Carian | Mencari mengikut nama fail, ID fail atau tag. |
| Penapis jenis | Menapis imej, video, audio atau fail lain. |
| Penapis tag | Menyertakan atau mengecualikan tag yang dipilih. |
| Penapis orientasi | Menapis imej landskap atau potret. |
| Penapis masa | Menapis mengikut julat masa muat naik. |
| Penapis sambungan | Menapis mengikut sambungan fail. |
| Salin pautan | Menyalin pautan akses fail. |
| Pratonton media | Melihat atau memainkan imej, video dan audio pada halaman pelawat. |

## Peraturan Akses Galeri Awam

Galeri awam juga mengikut peraturan akses awam:

| Peraturan | Kesan |
| --- | --- |
| Direktori terbuka | Hanya direktori yang dibenarkan dipaparkan. |
| Mod akses | Kandungan ditapis mengikut mod akses penarafan umur semasa. |
| Mod senarai benarkan | Apabila diaktifkan, hanya fail yang dibenarkan untuk akses awam dipaparkan. |
| Senarai sekat | Fail dalam senarai sekat disembunyikan. |
