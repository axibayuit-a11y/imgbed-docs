# Upload-Einstellungen

Die Upload-Einstellungen verbinden ImgBed mit Ihren eigenen Speicherkanälen. Nach der Einrichtung werden hochgeladene Bilder und Dateien im gewählten Dienst gespeichert. ImgBed verwaltet dazu Zugrifflinks, Dateieinträge, Vorschauen, öffentliche Galerien, die Zufallsbild-API, WebDAV-Zugriff und ähnliche Abläufe.

Je nach Nutzung passt ein anderer Kanal besser. Für einen einfachen Einstieg eignen sich Telegram, Discord oder GitHub Releases. Wenn Kapazität, Geschwindigkeit und langfristige Stabilität wichtiger sind, kommen Cloudflare R2, S3, OneDrive, Google Drive, Dropbox, Yandex, pCloud oder ein eigener WebDAV-Dienst infrage.

## Vor dem Start

> Vor der ersten Nutzung von ImgBed müssen Sie die Initialisierungsseite öffnen und auf "Index neu erstellen" klicken, damit die erforderlichen D1-Tabellen ergänzt werden und spätere Funktionsfehler vermieden werden.
>
> ![Bei der Initialisierung auf Index neu erstellen klicken](../../image/初始化点击重建索引.png)

- Bereiten Sie das Speicherkonto oder die API-Zugangsdaten vor.
- Stellen Sie sicher, dass Ihre ImgBed-Domain erreichbar ist, da OAuth-Kanäle Callback-URLs benötigen.
- Laden Sie nach dem Hinzufügen eines Kanals zuerst ein Testbild hoch, um Speichern und Öffnen zu prüfen.

## Kanalliste

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

## Was dieses Kapitel erklärt

- Welche Informationen jeder Upload-Kanal vor der Einrichtung benötigt.
- Wie Apps erstellt, Schlüssel kopiert oder Tokens auf externen Plattformen autorisiert werden.
- Wie die Kanalkonfiguration in ImgBed eingetragen und der Upload geprüft wird.
