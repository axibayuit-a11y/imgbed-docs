# Pembatasan Frekuensi Pengguna

Pembatasan frekuensi pengguna mengontrol seberapa sering pengguna biasa atau pengunjung dapat mengunggah berkas dari halaman utama. Ini membantu mencegah halaman unggah publik disalahgunakan.

Fitur ini hanya memengaruhi unggahan dari halaman utama. Unggahan admin dan unggahan yang memakai API Tokens tidak dibatasi oleh pembatasan frekuensi pengguna.

## Di Mana Mengonfigurasinya

Buka panel admin, lalu masuk ke:

```text
System Settings -> Security Settings -> Upload Management -> User Rate Limits
```

![Pengaturan pembatasan frekuensi pengguna](../../image/other/用户频控截图.png)

## Mengaktifkan Pembatasan Frekuensi

Setelah `Aktifkan Pembatasan Frekuensi` dinyalakan, ImgBed melacak unggahan terbaru berdasarkan alamat IP pengunggah.

Nilai bawaan:

| Pengaturan | Nilai Bawaan | Keterangan |
| --- | --- | --- |
| Jendela deteksi | 1.5 jam | Seberapa jauh catatan unggahan dihitung ke belakang. |
| Jumlah berkas maksimum | 20 | Jumlah berkas maksimum yang diizinkan dalam jendela deteksi. |
| Batas ukuran satu berkas | 20 MB | Ukuran maksimum untuk satu berkas. |
| Batas total ukuran unggahan | 200 MB | Total ukuran unggahan maksimum dalam jendela deteksi. |

Misalnya, dengan jendela 1.5 jam, 20 berkas, 20 MB per berkas, dan total 200 MB, unggahan dari IP yang sama akan diblokir begitu melewati salah satu batas yang dikonfigurasi.

## Mengecualikan Jenis Berkas

`Jenis berkas unggahan yang dikecualikan` memblokir pengguna biasa atau pengunjung agar tidak mengunggah kategori berkas yang dipilih.

Kategori yang tersedia:

| Jenis | Keterangan |
| --- | --- |
| Gambar | jpg, png, webp, gif, dan berkas gambar sejenis |
| Video | mp4, webm, mov, dan berkas video sejenis |
| Audio | mp3, flac, wav, dan berkas audio sejenis |
| Dokumen | pdf, txt, md, docx, dan berkas dokumen sejenis |
| Lainnya | Berkas di luar kategori di atas, seperti zip, rar, exe, apk |

Secara bawaan, tidak ada jenis yang dipilih, artinya semuanya diizinkan.

Mengklik satu jenis akan menyorotnya, yang berarti jenis tersebut diblokir.

Jika `Lainnya` dipilih, pengunjung yang mengunggah berkas zip atau rar akan diblokir dan diberi tahu bahwa jenis berkas ini tidak didukung.

## Pesan Pemblokiran

Saat batas terpicu, pengguna akan melihat pesan yang sesuai:

![Pesan unggahan terlalu sering](../../image/other/频繁报错提示.png)

| Skenario | Arti Pesan |
| --- | --- |
| Satu berkas terlalu besar | Berkas terlalu besar dan sebaiknya dikompresi sebelum diunggah. |
| Jenis berkas diblokir | Jenis berkas ini tidak didukung. Hapus berkas tersebut dan coba lagi. |
| Unggahan terlalu sering | Unggahan terbaru terlalu sering, dengan waktu coba lagi ditampilkan. |
| Total ukuran terlalu tinggi | Total ukuran unggahan terbaru terlalu tinggi, dengan waktu coba lagi ditampilkan. |

## Kapan Perlu Diaktifkan

Aktifkan pembatasan frekuensi pengguna jika halaman unggah utama Anda dapat diakses publik.

Alasan umum:

- Anda khawatir terhadap unggahan massal melalui skrip.
- Anda ingin membatasi unggahan besar dari pengunjung.
- Anda hanya ingin pengguna biasa mengunggah gambar, bukan arsip atau pemasang aplikasi.
- Anda ingin unggahan publik tetap tersedia sambil mengontrol penggunaan sumber daya.

Jika situs hanya digunakan oleh Anda sendiri, atau hanya administrator yang dapat mengunggah, biarkan nonaktif.
