# WebDAV-Zugriff auf die Website (Beta)

Die WebDAV-Einstellung in den Sicherheitseinstellungen stellt Ihre ImgBed-Website als WebDAV-Endpunkt bereit.

Nach dem Aktivieren können Sie Windows, macOS, mobile Dateimanager oder jeden WebDAV-kompatiblen Client verwenden, um ImgBed-Dateien wie einen entfernten Ordner zu durchsuchen, hochzuladen, zu löschen und zu verwalten.

Dies ist der WebDAV-Zugriff der Website. Er unterscheidet sich vom WebDAV-Speicherkanal in den Upload-Einstellungen. Der Upload-Kanal speichert Dateien in einem externen WebDAV-Dienst. Diese Einstellung ermöglicht es Ihrer ImgBed-Website, Clients WebDAV-Zugriff bereitzustellen.

## Wo Sie es konfigurieren

Öffnen Sie den Administrationsbereich und gehen Sie zu:

```text
System Settings -> Security Settings -> WebDAV
```

Verfügbare Einstellungen:

- Aktivieren
- Benutzername
- Passwort
- Bildlademodus
- Standardkanal

## Was diese Funktion macht

Nachdem WebDAV aktiviert wurde, stellt ImgBed eine feste Zugriffs-URL bereit:

```text
https://your-domain.com/dav
```

Verwenden Sie diese URL, um sich mit Ihrem ImgBed-Dateiverzeichnis zu verbinden.

Geeignete Anwendungsfälle:

- ImgBed-Dateien direkt über den Dateimanager Ihres Computers durchsuchen.
- Bilder in den WebDAV-Ordner ziehen, um sie hochzuladen.
- ImgBed-Ordner im lokalen Dateimanager organisieren.
- WebDAV-kompatible Software zum Synchronisieren oder Verwalten von Bildern verwenden.
- Auf ImgBed-Inhalte zugreifen, ohne den Administrationsbereich zu öffnen.

## Einstellungen

### Aktivieren

Schaltet den WebDAV-Endpunkt ein.

Wenn er deaktiviert ist, können Clients keine Verbindung über WebDAV herstellen.

### Benutzername und Passwort

Diese Zugangsdaten werden von WebDAV-Clients beim Verbinden verwendet.

Verwenden Sie einen eigenen WebDAV-Benutzernamen und ein eigenes Passwort. Verwenden Sie nicht das Administratorpasswort oder Upload-Passwort erneut.

Wenn Benutzername oder Passwort leer sind, können WebDAV-Clients keine korrekte Verbindung herstellen.

### Bildlademodus

Der Bildlademodus entscheidet, welche Bild-URL WebDAV-Clients beim Lesen von Bildern bevorzugen.

Häufige Optionen:

| Modus | Beschreibung |
| --- | --- |
| Intelligentes Laden | ImgBed wählt anhand des Kontexts. Empfohlen für normale Nutzung. |
| Quelle | Bevorzugt Quellbilder. |
| Vorschaubild | Bevorzugt Vorschaubilder. Nützlich für schnelle Vorschau. |

Wenn Sie unsicher sind, behalten Sie "Intelligentes Laden" bei.

### Standardkanal

Der Standardkanal wird für WebDAV-Uploads verwendet.

Wenn Sie Dateien aus Windows oder einem anderen Client in das WebDAV-Verzeichnis kopieren, lädt ImgBed sie über den ausgewählten Standard-Upload-Kanal hoch.

Wenn kein Standardkanal ausgewählt ist, kann das Durchsuchen funktionieren, Uploads können jedoch fehlschlagen.

## WebDAV in Windows 11 einbinden

Windows 11 kann WebDAV als Netzwerkadresse hinzufügen.

1. Öffnen Sie "Dieser PC".
2. Wählen Sie "Netzwerkadresse hinzufügen".
3. Geben Sie `https://your-domain.com/dav` ein.
4. Geben Sie bei Aufforderung Ihren WebDAV-Benutzernamen und Ihr Passwort ein.
5. Schließen Sie den Assistenten ab. Danach kann das WebDAV-Verzeichnis im Datei-Explorer geöffnet werden.

![WebDAV in Windows 11 hinzufügen](../../image/Safety/webdav在win11配置.png)

Nach dem Hinzufügen erscheint das WebDAV-Verzeichnis im Windows-Datei-Explorer. Sie können Dateien wie in einem normalen Ordner öffnen, kopieren und verwalten.

![WebDAV in Windows](../../image/Safety/webdav在win显示效果.png)

## Unterstützte Vorgänge

Nach einer erfolgreichen WebDAV-Verbindung können Sie normalerweise:

- Dateien und Ordner anzeigen.
- Dateien hochladen.
- Ordner erstellen.
- Dateien oder Ordner umbenennen.
- Dateien verschieben.
- Dateien löschen.

WebDAV eignet sich am besten für alltäglichen Zugriff und Dateiverwaltung in kleinem Umfang. Für große Verschiebungen, Massenlöschungen oder komplexe Organisation verwenden Sie den Administrationsbereich.

## Verwaltung angemeldeter Geräte

Erfolgreiche WebDAV-Verbindungen erscheinen auch auf der Registerkarte WebDAV in der Verwaltung angemeldeter Geräte.

Dort können Sie WebDAV-Clients prüfen und alte Geräte bei Bedarf zwangsweise abmelden.

Wenn Sie WebDAV-Benutzername oder Passwort ändern, müssen alte Clients sich erneut anmelden.

## FAQ

### Windows fragt ständig nach Benutzername und Passwort

Prüfen Sie:

- Die URL ist `https://your-domain.com/dav`.
- Benutzername und Passwort entsprechen den WebDAV-Einstellungen.
- WebDAV ist aktiviert.
- Die Website ist über HTTPS erreichbar.

### Durchsuchen funktioniert, Uploads schlagen aber fehl

Prüfen Sie den "Standardkanal".

WebDAV-Uploads benötigen einen Standard-Upload-Kanal. Wenn er fehlt, deaktiviert ist oder falsch konfiguriert wurde, können Uploads fehlschlagen.

### Die Zugriffsgeschwindigkeit ist instabil

Die WebDAV-Leistung hängt von Client, Netzwerk, Dateianzahl und Standard-Upload-Kanal ab.

Wenn ein Verzeichnis viele Dateien enthält, organisieren Sie sie in Ordnern, anstatt zu viele Dateien in einem Verzeichnis zu behalten.

## Sicherheitsempfehlungen

- Verwenden Sie HTTPS für WebDAV-Zugriff.
- Setzen Sie ein starkes Passwort.
- Teilen Sie das WebDAV-Passwort nicht mit nicht vertrauenswürdigen Personen.
- Schalten Sie WebDAV aus, wenn Sie es nicht verwenden.
- Bereinigen Sie ungenutzte WebDAV-Geräte regelmäßig in der Verwaltung angemeldeter Geräte.

## Dateigröße für WebDAV-Uploads

WebDAV-Clients verwenden nicht den Chunking-Ablauf für große Dateien der Upload-Seite der Weboberfläche. Für Dateien über den unten empfohlenen Limits verwenden Sie stattdessen die Web-Upload-Seite.

| Standard-Upload-Kanal | Empfohlenes Limit pro Einzeldatei für WebDAV |
| --- | ---: |
| Telegram | 20 MB |
| Discord | 10 MB |
| Cloudflare R2 | 30 MB |
| S3 | 30 MB |
| GitHub Releases | 64 MB |
| GitLab Packages | 64 MB |
| Hugging Face | 20 MB |
| OneDrive | 30 MB |
| Google Drive | 30 MB |
| Dropbox | 30 MB |
| Yandex Disk | 30 MB |
| pCloud | 30 MB |
| WebDAV | 64 MB |

