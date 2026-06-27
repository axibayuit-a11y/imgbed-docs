# Impostazioni di caricamento

Le impostazioni di caricamento collegano ImgBed ai tuoi canali di archiviazione. Dopo la configurazione, immagini e file caricati vengono salvati nel servizio scelto. ImgBed gestisce poi link di accesso, record dei file, anteprime, galleria pubblica, API immagine casuale, accesso WebDAV e flussi collegati.

Il canale migliore dipende dall'uso. Per iniziare in modo semplice, Telegram, Discord o GitHub Releases possono andare bene. Se contano di più capacità, velocità e stabilità nel tempo, valuta Cloudflare R2, S3, OneDrive, Google Drive, Dropbox, Yandex, pCloud o un tuo servizio WebDAV.

## Prima di iniziare

> Prima di usare ImgBed per la prima volta, devi aprire la pagina di inizializzazione e fare clic su "Ricostruisci indice" per completare le tabelle D1 necessarie ed evitare errori nelle funzioni successive.
>
> ![Fare clic su Ricostruisci indice durante l’inizializzazione](../../image/初始化点击重建索引.png)

- Prepara l'account di archiviazione o le credenziali API da usare.
- Verifica che il dominio ImgBed sia raggiungibile, perché i canali OAuth richiedono URL di callback.
- Dopo aver aggiunto un canale, carica prima un'immagine di prova per controllare che salvataggio e apertura funzionino.

## Elenco canali

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

## Cosa spiega questo capitolo

- Quali informazioni servono prima di configurare ogni canale.
- Come creare app, copiare chiavi o autorizzare token su piattaforme esterne.
- Come inserire la configurazione in ImgBed e verificare che il caricamento funzioni.
