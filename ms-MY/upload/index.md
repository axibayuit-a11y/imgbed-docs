# Tetapan Muat Naik

Tetapan Muat Naik menghubungkan ImgBed dengan saluran storan milik anda sendiri. Selepas saluran dikonfigurasikan, imej dan fail yang dimuat naik akan disimpan dalam perkhidmatan yang anda pilih. ImgBed kemudian mengurus rekod fail, pautan akses, pratonton, ciri galeri awam, akses API imej rawak, akses WebDAV dan aliran kerja berkaitan.

Pengguna yang berbeza mungkin memilih saluran yang berbeza. Jika anda mahu persediaan yang ringkas, Telegram, Discord atau GitHub Releases boleh menjadi titik permulaan yang baik. Jika anda lebih mengutamakan kapasiti, kelajuan dan kestabilan jangka panjang, pertimbangkan Cloudflare R2, S3, OneDrive, Google Drive, Dropbox, Yandex, pCloud atau perkhidmatan WebDAV anda sendiri.

## Sebelum Bermula

> Sebelum menggunakan ImgBed buat kali pertama, anda mesti membuka halaman pemulaan dan klik "Bina Semula Indeks" untuk melengkapkan jadual D1 yang diperlukan serta mengelakkan ralat pada fungsi seterusnya.
>
> ![Klik Bina Semula Indeks semasa pemulaan](../../image/初始化点击重建索引.png)

- Sediakan akaun storan atau kelayakan API yang ingin digunakan.
- Pastikan domain ImgBed anda boleh dicapai, kerana saluran berasaskan OAuth memerlukan URL callback.
- Selepas menambah saluran, muat naik imej ujian terlebih dahulu untuk mengesahkan bahawa fail boleh disimpan dan dibuka dengan betul.

## Direktori Saluran

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

## Kandungan Bab Ini

- Perkara yang diperlukan oleh setiap saluran muat naik sebelum persediaan.
- Cara membuat app, menyalin kunci atau mengesahkan token pada platform pihak ketiga.
- Cara mengisi semula konfigurasi saluran dalam ImgBed dan mengesahkan muat naik berfungsi.
