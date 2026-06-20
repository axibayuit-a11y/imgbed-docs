# Pengaturan unggahan

Pengaturan unggahan menghubungkan ImgBed dengan kanal penyimpanan milik Anda. Setelah kanal dikonfigurasi, gambar dan file yang diunggah akan disimpan ke layanan yang Anda pilih. ImgBed mengelola tautan akses, catatan file, pratinjau, galeri publik, Random Image API, akses WebDAV, dan alur terkait.

Setiap pengguna bisa cocok dengan kanal yang berbeda. Jika ingin mulai dengan sederhana, Telegram, Discord, atau GitHub Releases bisa menjadi pilihan awal. Jika kapasitas, kecepatan, dan stabilitas jangka panjang lebih penting, pertimbangkan Cloudflare R2, S3, OneDrive, Google Drive, Dropbox, Yandex, pCloud, atau layanan WebDAV sendiri.

## Sebelum mulai

- Siapkan akun penyimpanan atau API credentials yang akan digunakan.
- Pastikan domain ImgBed dapat diakses, karena kanal OAuth membutuhkan callback URL.
- Setelah menambahkan kanal, unggah gambar uji coba terlebih dahulu untuk memastikan file tersimpan dan dapat dibuka.

## Daftar kanal

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

## Isi bab ini

- Informasi yang perlu disiapkan sebelum mengatur setiap kanal unggahan.
- Cara membuat aplikasi, menyalin key, atau memberi otorisasi Token di platform pihak ketiga.
- Cara mengisi konfigurasi kanal di ImgBed dan memastikan unggahan berjalan.
