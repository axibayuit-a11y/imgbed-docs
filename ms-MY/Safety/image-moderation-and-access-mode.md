# Moderasi Imej dan Mod Akses

Moderasi imej memberikan penarafan umur kepada imej yang dimuat naik. Mod akses mengawal penarafan mana yang kelihatan melalui akses awam.

Ini mempengaruhi galeri awam, URL fail awam dan API imej rawak. Ini tidak mengehadkan panel pentadbir. Pentadbir masih boleh melihat dan mengurus semua fail.

## Tempat Mengkonfigurasi

Buka panel pentadbir, kemudian pergi ke:

```text
System Settings -> Security Settings -> Upload Management -> Image Moderation
```

Tetapan utama:

- Mod akses
- Aktifkan moderasi
- Penyedia moderasi

## Fungsi Mod Akses

Mod akses menentukan penarafan umur mana yang boleh dipaparkan secara awam.

Mod semasa:

| Mod Akses | Penarafan yang Kelihatan Secara Awam |
| --- | --- |
| Mod dewasa | General, R12, R16, R18 |
| Mod belia | General, R12, R16 |
| Mod remaja | General, R12 |
| Mod kanak-kanak | General sahaja |

Lalai ialah mod dewasa.

Untuk tapak peribadi atau tapak dengan kandungan matang, mod dewasa mungkin sesuai. Untuk galeri awam yang lebih konservatif, pilih mod belia, remaja atau kanak-kanak.

## Apa yang Berlaku Apabila Moderasi Diaktifkan

Apabila moderasi aktif, ImgBed memanggil penyedia moderasi yang dipilih semasa muat naik dan menyimpan penarafan umur yang dikesan.

Penarafan utama:

| Penarafan | Maksud |
| --- | --- |
| General | Kandungan awam yang selamat |
| R12 | Kandungan sedikit sensitif |
| R16 | Kandungan agak sensitif |
| R18 | Kandungan dewasa |

Keputusan moderasi digunakan semasa menentukan akses awam.

Jika moderasi tidak aktif, atau fail lama tidak mempunyai penarafan, fail tersebut dianggap belum dinilai. Fail tanpa penarafan tidak akan dibuang secara automatik daripada galeri awam atau API imej rawak hanya kerana tiada penarafan.

## Memilih Penyedia Moderasi

Penyedia yang tersedia termasuk:

- moderatecontent.com
- nsfwjs
- Sightengine

Setiap penyedia mempunyai keperluan berbeza:

- moderatecontent.com biasanya memerlukan API Key.
- nsfwjs biasanya memerlukan URL titik akhir API.
- Sightengine memerlukan API user dan API secret.

Pilih berdasarkan akaun, ketersediaan dan kualiti pengesanan. Selagi moderasi diaktifkan dan dikonfigurasi dengan betul, ImgBed cuba menulis penarafan imej semasa muat naik.

## Kesan pada Galeri Awam

Galeri awam menapis fail mengikut mod akses.

Contoh:

- Mod dewasa: imej R18 boleh muncul.
- Mod belia: imej R18 disembunyikan.
- Mod remaja: imej R16 dan R18 disembunyikan.
- Mod kanak-kanak: hanya imej General dipaparkan.

Ini hanya mempengaruhi akses awam biasa. Panel pentadbir tetap memaparkan semua fail.

## Kesan pada URL Fail Awam

URL fail awam ialah pautan imej terus yang dibuka oleh pelawat.

Jika penarafan fail dibenarkan oleh mod akses semasa, ImgBed mengembalikan imej asal.

Jika penarafan lebih tinggi daripada tahap yang dibenarkan, akses awam biasa tidak mengembalikan imej asal. Sebaliknya, ImgBed mengembalikan hasil sekatan yang dikonfigurasi atau imej sandaran sekatan.

Contoh:

- Mod semasa ialah mod kanak-kanak.
- Satu imej mempunyai penarafan R18.
- Pelawat membuka URL awam secara terus.
- ImgBed tidak mengembalikan imej asal R18 kepada pelawat tersebut.

![Imej fail yang disekat](../../image/Safety/文件受限图.png)

Pentadbir yang melihat fail dalam panel pentadbir tidak terjejas oleh sekatan ini.

## Kesan pada API Imej Rawak

API imej rawak juga menapis kumpulan calon mengikut mod akses.

Dalam mod kanak-kanak, imej rawak hanya dipilih daripada fail berpenarafan General.

Dalam mod belia, imej rawak boleh datang daripada fail General, R12 dan R16, tetapi bukan fail R18.

Ini menghalang API imej rawak daripada memintas sekatan galeri awam.

## Hubungan Dengan Peraturan Senarai

Mod akses bukan satu-satunya peraturan akses awam. Ia berfungsi bersama peraturan senarai benarkan dan senarai sekat.

Secara ringkas:

- Kandungan dalam senarai benarkan diutamakan sebagai awam.
- Kandungan dalam senarai sekat tidak boleh dilihat secara terus oleh pelawat biasa.
- Kandungan yang tiada dalam mana-mana senarai kemudian diperiksa mengikut mod akses.

Jika imej disekat oleh penarafan umur dan peraturan senarai, pelawat biasa tetap tidak boleh melihat fail asal secara terus.

## Tetapan yang Disyorkan

Untuk tapak awam:

- Aktifkan moderasi.
- Pilih mod akses yang sesuai dengan khalayak tapak.
- Gunakan mod kanak-kanak atau mod remaja untuk pelawat semua peringkat umur.
- Elakkan mod dewasa jika anda tidak mahu kandungan matang dipaparkan secara awam.
- Semak penarafan fail dalam panel pentadbir dan laraskan secara manual jika perlu.

Untuk tapak peribadi atau persendirian:

- Mod dewasa biasanya mencukupi.
- Aktifkan moderasi jika berguna.
- Semak dan laraskan penarafan dalam panel pentadbir mengikut keperluan.

## FAQ

### Adakah Fail Hilang daripada Panel Pentadbir Selepas Menukar Mod Akses?

Tidak.

Mod akses hanya mempengaruhi akses awam biasa. Ia tidak mempengaruhi panel pentadbir.

### Mengapa Galeri Awam Memaparkan Imej Lebih Sedikit Selepas Bertukar kepada Mod Kanak-kanak?

Mod kanak-kanak hanya membenarkan fail berpenarafan General dipaparkan secara awam. Fail R12, R16 dan R18 akan ditapis keluar.

### Adakah URL Awam Masih Boleh Membuka Imej Dewasa?

Jika mod akses semasa tidak membenarkan penarafan tersebut, URL awam biasa tidak mengembalikan imej asal.

### Bolehkah API Imej Rawak Mengembalikan Imej yang Disekat?

Tidak.

API imej rawak menapis calon mengikut mod akses semasa.

### Bagaimana Dengan Imej Lama Tanpa Penarafan?

Imej tanpa penarafan tidak disembunyikan secara automatik hanya kerana tiada keputusan moderasi. Anda boleh melaraskan penarafannya kemudian dalam panel pentadbir.
