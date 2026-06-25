# Had Kekerapan Pengguna

Had kekerapan pengguna mengawal seberapa kerap pengguna biasa atau pelawat boleh memuat naik fail daripada halaman utama. Ini membantu mencegah halaman muat naik awam daripada disalahgunakan.

Ciri ini hanya mempengaruhi muat naik daripada halaman utama. Muat naik pentadbir dan muat naik menggunakan API Tokens tidak dihadkan oleh had kekerapan pengguna.

## Tempat Mengkonfigurasi

Buka panel pentadbir, kemudian pergi ke:

```text
System Settings -> Security Settings -> Upload Management -> User Rate Limits
```

![Tetapan had kekerapan pengguna](../../image/other/用户频控截图.png)

## Mengaktifkan Had Kekerapan

Selepas `Aktifkan Had Kekerapan` dihidupkan, ImgBed menjejaki muat naik terkini berdasarkan alamat IP pemuat naik.

Nilai lalai:

| Tetapan | Lalai | Penerangan |
| --- | --- | --- |
| Tetingkap pengesanan | 1.5 jam | Sejauh mana rekod muat naik dikira ke belakang. |
| Bilangan fail maksimum | 20 | Bilangan fail maksimum yang dibenarkan dalam tetingkap pengesanan. |
| Had saiz satu fail | 20 MB | Saiz maksimum untuk satu fail. |
| Had jumlah saiz muat naik | 200 MB | Jumlah saiz muat naik maksimum dalam tetingkap pengesanan. |

Contohnya, dengan tetingkap 1.5 jam, 20 fail, 20 MB setiap fail dan jumlah 200 MB, muat naik daripada IP yang sama akan disekat sebaik sahaja melebihi salah satu had yang dikonfigurasi.

## Mengecualikan Jenis Fail

`Jenis fail muat naik yang dikecualikan` menyekat pengguna biasa atau pelawat daripada memuat naik kategori fail yang dipilih.

Kategori yang tersedia:

| Jenis | Penerangan |
| --- | --- |
| Imej | jpg, png, webp, gif dan fail imej seumpamanya |
| Video | mp4, webm, mov dan fail video seumpamanya |
| Audio | mp3, flac, wav dan fail audio seumpamanya |
| Dokumen | pdf, txt, md, docx dan fail dokumen seumpamanya |
| Lain-lain | Fail di luar kategori di atas, seperti zip, rar, exe, apk |

Secara lalai, tiada jenis dipilih, yang bermaksud semuanya dibenarkan.

Mengklik satu jenis akan menyerlahkannya, bermaksud jenis tersebut disekat.

Jika `Lain-lain` dipilih, pelawat yang memuat naik fail zip atau rar akan disekat dan dimaklumkan bahawa jenis fail ini tidak disokong.

## Mesej Sekatan

Apabila had tercetus, pengguna akan melihat mesej yang sesuai:

![Mesej muat naik terlalu kerap](../../image/other/频繁报错提示.png)

| Senario | Maksud Mesej |
| --- | --- |
| Satu fail terlalu besar | Fail terlalu besar dan sepatutnya dimampatkan sebelum dimuat naik. |
| Jenis fail disekat | Jenis fail ini tidak disokong. Buang fail tersebut dan cuba lagi. |
| Muat naik terlalu kerap | Muat naik terkini terlalu kerap, dengan masa cuba semula dipaparkan. |
| Jumlah saiz terlalu tinggi | Jumlah saiz muat naik terkini terlalu tinggi, dengan masa cuba semula dipaparkan. |

## Bila Perlu Diaktifkan

Aktifkan had kekerapan pengguna jika halaman muat naik utama anda boleh diakses secara awam.

Sebab biasa:

- Anda bimbang tentang muat naik pukal melalui skrip.
- Anda mahu mengehadkan muat naik besar daripada pelawat.
- Anda hanya mahu pengguna biasa memuat naik imej, bukan arkib atau pemasang aplikasi.
- Anda mahu muat naik awam kekal tersedia sambil mengawal penggunaan sumber.

Jika tapak hanya untuk anda sendiri, atau hanya pentadbir boleh memuat naik, biarkan ciri ini dimatikan.
