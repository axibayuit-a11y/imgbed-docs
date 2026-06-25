# Penandaan Automatik

Penandaan automatik dikonfigurasikan di bawah:

```text
System Settings -> Other Settings -> Auto Tagging
```

Fungsi ini menjana tag imej secara automatik. Tag ini berguna untuk carian, penapisan imej rawak, penapisan galeri awam dan kawalan akses berdasarkan penarafan umur.

## Perkara Yang Boleh Dilakukan Oleh Penandaan Automatik

| Ciri | Penerangan |
| --- | --- |
| Menjana tag kandungan | Menambah tag untuk orang, pemandangan, objek, gaya seni dan kandungan visual yang seumpamanya. |
| Menjana tag watak | Berguna untuk imej anime dan ilustrasi. |
| Menambah tag orientasi | Menambah `landscape`, `portrait` atau `square`. |
| Menambah penarafan imej | Menyimpan hasil penarafan `G/S/Q/E` untuk kandungan umum, sensitif, meragukan atau eksplisit. |
| Penandaan automatik semasa muat naik | Imej yang baru dimuat naik masuk ke aliran penandaan secara automatik. |
| Penandaan kelompok | Menambah tag pada imej lama dalam semua folder atau folder yang dipilih. |

## Perkara Yang Diperlukan Dahulu

Sediakan sekurang-kurangnya satu URL Hugging Face Space yang boleh diakses.

Kaedah yang disyorkan ialah menduplikasi Space `wd-tagger` milik SmilingWolf ke akaun Hugging Face anda sendiri:

```text
https://huggingface.co/spaces/SmilingWolf/wd-tagger
```

Anda boleh menggunakan Space awam buat sementara waktu, tetapi Space awam dikongsi oleh ramai pengguna dan mungkin beratur, menjadi perlahan atau tidak tersedia. Space yang diduplikasi di bawah akaun anda sendiri lebih stabil untuk penandaan automatik jangka panjang.

## Menduplikasi Space SmilingWolf

1. Log masuk ke Hugging Face.
2. Buka `https://huggingface.co/spaces/SmilingWolf/wd-tagger`.

![Space awam SmilingWolf](../../image/other/微笑狼的公开仓库.png)

3. Klik menu tiga titik di penjuru kanan atas.
4. Pilih `Duplicate this Space`.
5. Kekalkan nama Space lalai atau pilih nama sendiri, seperti `wd-tagger`.
6. Tetapkan keterlihatan kepada `Public`. Public Space lebih mudah dipanggil oleh ImgBed.
7. Mulakan dengan perkakasan percuma lalai dahulu. Naik taraf kemudian hanya jika baris giliran menjadi jelas.
8. Cipta Space dan tunggu binaan selesai.

Selepas binaan selesai, buka halaman Space anda. URL biasanya kelihatan seperti:

```text
https://huggingface.co/spaces/your-name/wd-tagger
```

Salin URL pelayar dan tampalkannya ke `Space URLs` dalam ImgBed.

## Mengisi Berbilang Space URL

Masukkan satu Space URL bagi setiap baris.

Contoh:

| Nilai | Penerangan |
| --- | --- |
| `https://huggingface.co/spaces/SmilingWolf/wd-tagger` | Space awam SmilingWolf. Sesuai untuk ujian sementara. |
| `https://huggingface.co/spaces/lintonxue00/wd-tagger` | URL halaman Space yang disalin. |
| `https://huggingface.co/spaces/your-name/wd-tagger` | URL halaman Space yang anda duplikasi sendiri. |

Anda boleh memasukkan berbilang URL. ImgBed menggunakan beberapa Space bersama-sama, yang boleh meningkatkan kelajuan.

Jika satu Space tidak tersedia buat sementara waktu, Space lain masih boleh meneruskan pemprosesan.

## Tetapan

| Pilihan | Cadangan |
| --- | --- |
| `Space URLs` | Masukkan Space URL yang telah anda sediakan. Gunakan sekurang-kurangnya satu. |
| Folder sasaran | Biarkan kosong untuk semua folder. Pilih folder hanya apabila anda mahu memproses direktori tertentu. |
| Model pengecaman | Kekalkan `wd-swinv2-tagger-v3` sebagai lalai. |
| Ambang tag umum | Nilai lalai sesuai untuk kebanyakan imej. Nilai lebih rendah menghasilkan lebih banyak tag; nilai lebih tinggi menghasilkan lebih sedikit tag. |
| Ambang tag watak | Nilai lalai lebih berhati-hati dan membantu mengelakkan tag watak yang salah. |
| Ambang automatik `MCut` | Biarkan tidak aktif pada permulaan. Hidupkan apabila anda mahu model menentukan bilangan tag secara automatik. |
| Penandaan automatik semasa muat naik | Hidupkan jika imej yang baru dimuat naik perlu mendapat tag secara automatik. |
| Mulakan penandaan | Menandakan imej lama secara kelompok secara manual. |

## Nilai Permulaan Yang Disyorkan

| Pilihan | Nilai Yang Disyorkan |
| --- | --- |
| Model pengecaman | `wd-swinv2-tagger-v3` |
| Ambang tag umum | `0.35` |
| Ambang tag watak | `0.85` |
| `MCut` | Tidak aktif pada permulaan |
| Penandaan automatik semasa muat naik | Aktifkan jika perlu |

Jika tag terlalu banyak, naikkan sedikit ambang umum.

Jika tag terlalu sedikit, turunkan sedikit ambang umum.

## Penandaan Kelompok

1. Isi `Space URLs`.
2. Pilih folder sasaran.
3. Klik mulakan penandaan.
4. Tunggu sehingga kemajuan selesai.

Jika folder sasaran kosong, ImgBed memproses semua folder.

Penandaan kelompok paling sesuai untuk imej lama. Untuk imej baharu, aktifkan penandaan automatik semasa muat naik supaya anda tidak perlu menjalankannya secara manual setiap kali.

## Penandaan Automatik Semasa Muat Naik

Selepas penandaan automatik semasa muat naik diaktifkan, ImgBed akan memanggil `Space URLs` yang dikonfigurasikan secara automatik untuk imej yang baru dimuat naik.

Ini sesuai untuk penggunaan jangka panjang.

Jika Space anda sedang beratur, muat naik itu sendiri masih boleh selesai dahulu dan penandaan diteruskan selepas itu.

## Imej Yang Diproses

Penandaan automatik terutamanya memproses fail imej.

Imej yang sudah mempunyai tag, orientasi, penarafan, lebar dan tinggi yang lengkap akan dilangkau untuk mengelakkan panggilan Space yang tidak perlu.

Jika boleh, ImgBed hanya mengisi maklumat yang hilang. Contohnya, jika hanya orientasi yang hilang, ia cuba menambah orientasi tanpa memanggil keseluruhan aliran tag kandungan.

## Soalan Lazim

### Mengapa Perlu Menduplikasi Space Sendiri?

Space awam dikongsi oleh ramai pengguna. Space yang anda duplikasi sendiri digunakan terutamanya oleh laman ImgBed anda, jadi biasanya lebih pantas dan lebih boleh dipercayai.

### Space Terus Dimulakan

Selepas penciptaan pertama, atau selepas tempoh melahu yang panjang, Space mungkin memerlukan masa untuk bermula.

Buka halaman Space anda dahulu. Selepas ia boleh mengecam imej secara normal, kembali ke ImgBed dan mulakan penandaan.

### Bagaimana Saya Menyalin Space URL?

Buka halaman Hugging Face Space anda dan salin alamat pelayar.

Contoh:

```text
https://huggingface.co/spaces/lintonxue00/wd-tagger
https://huggingface.co/spaces/SmilingWolf/wd-tagger
```

### Bolehkah Saya Menambah Berbilang Space?

Boleh. Masukkan satu Space URL bagi setiap baris.

Berbilang Space memproses imej bersama-sama dan berguna apabila anda mempunyai banyak imej.

### Mengapa Tag Dalam Bahasa Inggeris?

Model SmilingWolf menghasilkan tag dalam bahasa Inggeris. Ini memang dijangka.

Tag digunakan terutamanya untuk carian, penapisan, API imej rawak dan penapis galeri awam.

### Untuk Apa Tag Penarafan Digunakan?

Hasil penarafan berfungsi bersama mod akses dalam Security Settings.

Contohnya, apabila akses pelawat dihadkan mengikut penarafan umur, fungsi pelayaran awam dan imej rawak akan menapis imej mengikut peraturan tersebut.

## Aliran Pantas

```text
Sign in to Hugging Face
-> Open SmilingWolf/wd-tagger
-> Duplicate this Space
-> Wait for the Space to build
-> Copy your Space URL
-> Fill Space URLs in ImgBed
-> Choose model and thresholds
-> Start tagging or enable auto-tag on upload
```
