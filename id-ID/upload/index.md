# Pengaturan Unggah

Pengaturan unggah menghubungkan ImgBed dengan kanal penyimpanan Anda sendiri. Setelah sebuah kanal dikonfigurasi, gambar dan berkas yang diunggah akan disimpan di layanan yang Anda pilih. ImgBed mengelola catatan berkas, tautan akses, pratinjau, fitur galeri publik, akses API gambar acak, akses WebDAV, dan alur terkait.

Setiap pengguna dapat memilih kanal yang berbeda. Jika Anda menginginkan konfigurasi sederhana, Telegram, Discord, atau GitHub Releases dapat menjadi titik awal yang baik. Jika kapasitas, kecepatan, dan stabilitas jangka panjang lebih penting, pertimbangkan Cloudflare R2, S3, OneDrive, Google Drive, Dropbox, Yandex, pCloud, atau layanan WebDAV milik Anda sendiri.

## Sebelum Memulai

- Siapkan akun penyimpanan atau kredensial API yang diperlukan.
- Pastikan domain ImgBed Anda dapat diakses, karena kanal berbasis OAuth memerlukan URL callback.
- Setelah menambahkan kanal, unggah gambar uji terlebih dahulu untuk memastikan berkas tersimpan dan dapat dibuka dengan benar.

## Daftar Kanal

- [Telegram](./telegram.md)
- [Cloudflare R2](./cloudflare-r2.md)
- [S3](./s3.md)
- [WebDAV](./webdav.md)
- [Discord](./discord.md)
- [Hugging Face](./huggingface.md)
- [GitHub Releases](./github-releases.md)
- [GitLab Packages](./gitlab-packages.md)
- [OneDrive](./onedrive.md)
- [Google Drive](./google-drive.md)
- [Dropbox](./dropbox.md)
- [Yandex](./yandex.md)
- [pCloud](./pcloud.md)

## Yang Dibahas dalam Bab Ini

- Hal yang dibutuhkan setiap kanal unggah sebelum dikonfigurasi.
- Cara membuat aplikasi, menyalin kunci, atau mengotorisasi token di platform eksternal.
- Cara mengisi konfigurasi kanal di ImgBed dan memastikan unggahan berjalan dengan benar.
