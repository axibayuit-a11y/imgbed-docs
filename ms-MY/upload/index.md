# Tetapan muat naik

Tetapan muat naik menghubungkan ImgBed kepada saluran storan anda sendiri. Selepas saluran dikonfigurasi, imej dan fail yang dimuat naik akan disimpan dalam perkhidmatan yang anda pilih. ImgBed mengurus pautan akses, rekod fail, pratonton, galeri awam, API imej rawak, akses WebDAV dan aliran berkaitan.

Setiap pengguna mungkin sesuai dengan saluran yang berbeza. Untuk permulaan yang mudah, Telegram, Discord atau GitHub Releases boleh digunakan. Jika anda lebih mementingkan kapasiti, kelajuan dan kestabilan jangka panjang, pertimbangkan Cloudflare R2, S3, OneDrive, Google Drive, Dropbox, Yandex, pCloud atau perkhidmatan WebDAV sendiri.

## Sebelum bermula

- Sediakan akaun storan atau API credentials yang ingin digunakan.
- Pastikan domain ImgBed boleh diakses, kerana saluran OAuth memerlukan callback URL.
- Selepas menambah saluran, muat naik imej ujian dahulu untuk memastikan fail boleh disimpan dan dibuka.

## Senarai saluran

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

## Perkara yang diterangkan

- Maklumat yang diperlukan sebelum menyediakan setiap saluran muat naik.
- Cara mencipta aplikasi, menyalin key atau membenarkan Token di platform pihak ketiga.
- Cara mengisi konfigurasi saluran dalam ImgBed dan mengesahkan muat naik berfungsi.
