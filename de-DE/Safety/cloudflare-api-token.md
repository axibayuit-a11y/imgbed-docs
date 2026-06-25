# Cloudflare API Token

Cloudflare-API-Zugangsdaten ermöglichen ImgBed, den Cloudflare-CDN-Zwischenspeicher nach Dateiänderungen zu leeren.

![Cloudflare API Token-Einstellungen](../../image/Safety/cloudflare%20api%20token截图.png)

## Wo Sie es konfigurieren

Öffnen Sie den Administrationsbereich und gehen Sie zu:

```text
System Settings -> Security Settings -> Cloudflare API Token
```

Sie müssen Folgendes ausfüllen:

- Zone ID
- Konto-E-Mail
- API Key

## Was diese Einstellung macht

Cloudflare kann öffentliche Bild-URLs zwischenspeichern.

Caching macht die Bildauslieferung schneller, kann aber auch dazu führen, dass veraltete Inhalte eine Zeit lang sichtbar bleiben, nachdem Sie eine Datei gelöscht, blockiert, ersetzt oder verschoben haben.

Nachdem Cloudflare-API-Zugangsdaten konfiguriert wurden, versucht ImgBed, den zugehörigen Cloudflare-Zwischenspeicher zu leeren, wenn diese Vorgänge abgeschlossen sind.

Das ist nützlich, wenn:

- Sie ein Bild löschen und möchten, dass der öffentliche Link so schnell wie möglich nicht mehr funktioniert.
- Sie ein Bild blockieren und Besucher die Quelldatei nicht mehr sehen sollen.
- Sie eine Datei mit demselben Namen ersetzen und Besucher schneller die neue Version sehen sollen.
- Sie Dateien verschieben oder umbenennen und der Zwischenspeicher alter Pfade schnell aktualisiert werden soll.
- Sie Regeln für den öffentlichen Zugriff ändern und der Zwischenspeicher der öffentlichen Galerie oder zufälliger Bilder schneller aktualisiert werden soll.

## Was passiert, wenn Sie es leer lassen

ImgBed funktioniert auch ohne diese Einstellung normal.

Der einzige Unterschied ist, dass ImgBed den Cloudflare-CDN-Zwischenspeicher nicht aktiv leert. Besucher können alte Inhalte weiter sehen, bis der Cloudflare-Zwischenspeicher natürlich abläuft.

## So finden Sie die Zone ID

Die Zone ID ist die Cloudflare-Zone-ID der Website, die von Ihrer ImgBed-Domain verwendet wird.

1. Melden Sie sich im Cloudflare-Dashboard an.
2. Öffnen Sie die Website, die Ihre ImgBed-Domain enthält.
3. Suchen Sie `Zone ID` auf der Übersichtsseite der Website.
4. Kopieren Sie sie in das Feld `Zone ID` in ImgBed.

Dies ist die Zone ID der Website, nicht die Konto-ID.

## Konto-E-Mail

Geben Sie die E-Mail-Adresse ein, mit der Sie sich bei Cloudflare anmelden.

Sie muss zum unten angegebenen API Key passen.

## API Key

Geben Sie Ihren Cloudflare Global API Key ein.

1. Melden Sie sich im Cloudflare-Dashboard an.
2. Öffnen Sie Ihr Profil.
3. Wechseln Sie zur Seite API Tokens.
4. Suchen Sie `Global API Key`.
5. Zeigen Sie ihn an und kopieren Sie ihn.
6. Fügen Sie ihn in ImgBed in das Feld `API Key` ein.

![Global API Key anzeigen](../../image/Safety/查看全局令牌.png)

## Wann es wirksam wird

Speichern Sie die Einstellungen, nachdem Sie die Felder ausgefüllt haben.

Bei zukünftigen Dateiänderungen wird automatisch versucht, den Cloudflare-Zwischenspeicher zu leeren. Frühere Vorgänge werden nicht rückwirkend bereinigt. Wenn Sie eine Datei vor der Einrichtung gelöscht oder ersetzt haben, warten Sie, bis der Cloudflare-Zwischenspeicher abläuft, oder leeren Sie ihn manuell in Cloudflare.

## FAQ

### Ist das erforderlich?

Nein.

Wenn Ihre Domain Cloudflare nicht verwendet oder Sie Verzögerungen durch den CDN-Zwischenspeicher nicht stören, können Sie die Felder leer lassen.

### Unterbrechen falsche Zugangsdaten Uploads?

Normalerweise nicht.

Falsche Zugangsdaten verhindern nur, dass ImgBed den Cloudflare-Zwischenspeicher leert. Uploads und normaler Dateizugriff sollten weiter funktionieren.

### Warum kann ein gelöschtes Bild noch geöffnet werden?

Der häufigste Grund ist, dass Cloudflare die alte Datei noch im Zwischenspeicher hat.

Mit korrekten Cloudflare-API-Zugangsdaten leert ImgBed beim Löschen einer Datei den Zwischenspeicher der zugehörigen URL.

### Warum sehe ich nach dem Ersetzen einer Datei noch das alte Bild?

Auch das wird in der Regel durch den CDN-Zwischenspeicher verursacht.

Nachdem diese Einstellung konfiguriert wurde, versucht ImgBed beim Überschreiben einer Datei mit demselben Namen, den Zwischenspeicher der alten URL zu leeren.

