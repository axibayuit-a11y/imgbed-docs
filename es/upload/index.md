# Ajustes de subida

Los ajustes de subida conectan ImgBed con tus propios canales de almacenamiento. Después de configurar un canal, las imágenes y los archivos subidos se guardan en el servicio que elijas. ImgBed se encarga de los enlaces de acceso, los registros de archivos, las vistas previas, la galería pública, la API de imagen aleatoria, el acceso WebDAV y otros flujos relacionados.

Cada usuario puede preferir un canal distinto. Si quieres empezar de forma sencilla, Telegram, Discord o GitHub Releases son buenas opciones. Si te importan más la capacidad, la velocidad y la estabilidad a largo plazo, considera Cloudflare R2, S3, OneDrive, Google Drive, Dropbox, Yandex, pCloud o tu propio servicio WebDAV.

## Antes de empezar

- Prepara la cuenta de almacenamiento o las credenciales API que vas a usar.
- Comprueba que tu dominio de ImgBed esté disponible, porque los canales OAuth necesitan URL de callback.
- Después de añadir un canal, sube primero una imagen de prueba para confirmar que se guarda y se abre correctamente.

## Directorio de canales

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

## Qué cubre este capítulo

- Qué necesita cada canal antes de configurarlo.
- Cómo crear aplicaciones, copiar claves o autorizar tokens en plataformas externas.
- Cómo completar la configuración en ImgBed y comprobar que la subida funciona.
