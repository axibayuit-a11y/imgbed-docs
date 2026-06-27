# Ajustes de carga

Los ajustes de carga conectan ImgBed con sus propios canales de almacenamiento. Después de configurar un canal, las imágenes y los archivos cargados se guardan en el servicio que elija. ImgBed gestiona los registros de archivos, los enlaces de acceso, las vistas previas, las funciones de galería pública, el acceso a la API de imagen aleatoria, el acceso WebDAV y los flujos relacionados.

Cada usuario puede preferir canales distintos. Si desea una configuración sencilla, Telegram, Discord o GitHub Releases pueden ser buenos puntos de partida. Si le importan más la capacidad, la velocidad y la estabilidad a largo plazo, considere Cloudflare R2, S3, OneDrive, Google Drive, Dropbox, Yandex, pCloud o su propio servicio WebDAV.

## Antes de empezar

> Antes de usar ImgBed por primera vez, debe entrar en la página de inicialización y hacer clic en "Reconstruir índice" para completar las tablas D1 necesarias y evitar errores en funciones posteriores.
>
> ![Hacer clic en Reconstruir índice durante la inicialización](../../image/初始化点击重建索引.png)

- Prepare la cuenta de almacenamiento o las credenciales de API que quiera usar.
- Asegúrese de que su dominio de ImgBed sea accesible, porque los canales basados en OAuth necesitan URL de callback.
- Después de añadir un canal, cargue primero una imagen de prueba para confirmar que los archivos se guardan y se abren correctamente.

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

- Qué necesita cada canal de carga antes de configurarlo.
- Cómo crear aplicaciones, copiar claves o autorizar tokens en plataformas externas.
- Cómo completar la configuración del canal en ImgBed y confirmar que las cargas funcionan.
