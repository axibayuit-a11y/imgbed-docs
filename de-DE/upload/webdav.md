# WebDAV-Kanal hinzufügen

## Geeignet für

Verwenden Sie den WebDAV-Kanal, wenn:

- Sie ein NAS, einen Cloudspeicher oder einen Objektspeicherdienst mit WebDAV-Endpunkt haben.
- hochgeladene Bilder in Ihrem eigenen WebDAV-Verzeichnis gespeichert werden sollen.
- Zugangsdaten in der D1-Tabelle `upload_channels` gespeichert werden sollen, statt dauerhaft im Frontend sichtbar zu sein.

## Was Sie vorher benötigen

| Voraussetzung | Zweck |
| --- | --- |
| WebDAV Endpoint | Serverseitige WebDAV-URL, z. B. `https://nas.example.com/dav`. |
| Benutzername | Für die Anmeldung am WebDAV-Dienst. |
| Passwort | Für die Anmeldung am WebDAV-Dienst. |
| Authentifizierungsmodus | Standard ist `Basic`. Verwenden Sie `Digest` oder automatische Aushandlung nur, wenn der Server es verlangt. |
| Speicherverzeichnis | Ordner, in dem Dateien gespeichert werden. Standard ist `imgbed`. |

## Wo hinzufügen

1. Öffnen Sie die Systemeinstellungen.
2. Gehen Sie zu Upload-Einstellungen.
3. Klicken Sie oben rechts auf Kanal hinzufügen.
4. Wählen Sie `WebDAV`.

## Feldübersicht

| Feld | Funktion | Erforderlich |
| --- | --- | --- |
| Kanalname | Ein gut erkennbarer Name für diesen WebDAV-Kanal, z. B. `koofr` oder `nas`. | Ja |
| Endpoint | Vollständiger WebDAV-Endpunkt inklusive `https://`. | Ja |
| Benutzername | WebDAV-Anmeldename. | Ja |
| Passwort | WebDAV-Passwort. | Ja |
| Authentifizierungsmodus | Meist `Basic`; verwenden Sie `Digest`, wenn der Server Digest-Authentifizierung verlangt. | Ja |
| Speicherverzeichnis | Ordner, in dem Dateien abgelegt werden. Standard ist `imgbed`. | Nein |

## Beispiel: fie.nl.tab.digital

### 1. App-Passwort erstellen

Öffnen Sie die Sicherheitseinstellungen Ihres Kontos, suchen Sie die App-Passwörter und erstellen Sie ein neues App-Passwort.

![App-Passwort erstellen](../../image/upload/webdav/创建应用密码.png)

Kopieren Sie und speichern Sie das neue App-Passwort direkt nach dem Erstellen. In der Regel wird es nur einmal angezeigt.

![Neues App-Passwort speichern](../../image/upload/webdav/记住新应用程序密码.png)

### 2. WebDAV-Konfiguration in ImgBed ausfüllen

Kehren Sie zu ImgBed zurück und fügen Sie einen WebDAV-Kanal hinzu:

| UI-Feld | Wert |
| --- | --- |
| Endpoint | Die von `https://fie.nl.tab.digital/` bereitgestellte WebDAV-URL. |
| Benutzername | Ihr WebDAV-Benutzername. |
| Passwort | Das gerade erstellte App-Passwort. |
| Authentifizierungsmodus | Starten Sie in den meisten Fällen mit `Basic`. |
| Speicherverzeichnis | Standard ist `imgbed`; Sie können auch einen eigenen Ordner verwenden. |

![Konfiguration ausfüllen](../../image/upload/webdav/填写配置.png)

## Verhalten bei großen Dateien

Der WebDAV-Kanal verwendet inzwischen echtes sitzungsbasiertes Chunk-Upload.

Kleine Dateien werden als vollständige Einzeldatei hochgeladen. Dateien größer als 64 MiB werden automatisch in etwa 10 MiB große Teile aufgeteilt und in ein Remote-Chunk-Verzeichnis hochgeladen.

Der WebDAV-Dienst muss keine `partial update`- oder Offset-basierten Schreibvorgänge unterstützen. ImgBed setzt die Chunks auf dem Remote-Server nicht wieder zu einer großen Datei zusammen. Stattdessen speichert ImgBed ein Chunk-Manifest und liest die Teile bei einem Dateiaufruf der Reihe nach aus.

Praktisch bedeutet das:

| Dateigröße | Upload-Methode | Remote-Speicherlayout |
| --- | --- | --- |
| 64 MiB oder kleiner | Normaler Upload | Eine vollständige Datei |
| Größer als 64 MiB | Echtes sitzungsbasiertes Chunk-Upload | Ein Chunk-Verzeichnis mit mehreren Teil-Dateien |

Das Chunk-Verzeichnis betrifft nur die Ablage im entfernten Speicher. Die Datei-URL in ImgBed ändert sich dadurch nicht. Nutzer öffnen die Datei weiterhin über den ursprünglichen `/file/...`-Link.

## Einrichtungsschritte

1. Öffnen Sie die Upload-Einstellungen.
2. Klicken Sie auf Kanal hinzufügen.
3. Wählen Sie `WebDAV`.
4. Tragen Sie einen gut erkennbaren Kanalnamen ein, z. B. `koofr`.
5. Tragen Sie den WebDAV-Endpunkt ein, z. B. `https://app.koofr.net/dav/Koofr`.
6. Tragen Sie Benutzername und Passwort ein.
7. Lassen Sie den Authentifizierungsmodus standardmäßig auf `Basic`.
8. Lassen Sie das Speicherverzeichnis bei `imgbed` oder ändern Sie es auf Ihren eigenen Ordner.
9. Klicken Sie auf Speichern.
10. Prüfen Sie nach dem Speichern die Kanalkarte, fragen Sie bei Bedarf die Kapazität ab und laden Sie eine Testdatei hoch.

## Prüfung

| Prüfung | So prüfen Sie es |
| --- | --- |
| Kanalkarte erscheint | Nach dem Speichern sollte in den Upload-Einstellungen eine WebDAV-Kanalkarte sichtbar sein. |
| Kanal ist aktiv | Der Schalter oben rechts auf der Karte bleibt eingeschaltet. |
| Zugangsdaten sind gespeichert | Die Detailansicht zeigt Endpoint, Benutzername, Authentifizierungsmodus und Speicherverzeichnis. |
| Kleine Datei lädt hoch | Laden Sie ein Testbild hoch und prüfen Sie, ob es im WebDAV-Verzeichnis erscheint. |
| Regel für große Dateien greift | Dateien über 64 MiB nutzen Chunk-Upload und erzeugen ein Remote-Chunk-Verzeichnis. |
| Kapazitätsabfrage funktioniert | Wenn der Server Kapazitätsinformationen unterstützt, werden belegter und gesamter Speicher angezeigt. |

![Quotenabfrage erfolgreich](../../image/upload/webdav/查询额度成功.png)

## FAQ

### Warum erzeugen große WebDAV-Dateien ein Chunk-Verzeichnis?

Das ist die aktuelle Speichermethode für große Dateien.

Dateien über 64 MiB werden nicht zu einer einzelnen großen Remote-Datei zusammengefügt. Sie werden als Chunk-Verzeichnis gespeichert. ImgBed merkt sich das Chunk-Manifest und gibt den vollständigen Inhalt zurück, indem die Teile der Reihe nach gelesen werden.

### Was sollte ich zuerst prüfen, wenn große Uploads fehlschlagen?

Prüfen Sie zuerst Endpoint, Benutzername, Passwort und Speicherverzeichnis. Stellen Sie danach sicher, dass der WebDAV-Dienst Ordner anlegen, Dateien schreiben und Dateien lesen darf.

Wenn die Kapazitätsabfrage fehlschlägt, kleine Uploads aber funktionieren, unterstützt der Server die Kapazitätsauskunft möglicherweise nicht oder schränkt sie ein. Das bedeutet nicht automatisch, dass Uploads unmöglich sind.

### Welchen Authentifizierungsmodus soll ich wählen?

Starten Sie mit `Basic`.

Wenn der Server ausdrücklich Digest-Authentifizierung verlangt, verwenden Sie `Digest`.

Wenn Sie unsicher sind, verwenden Sie automatische Aushandlung.

## Kurzcheck

```text
Prepare WebDAV endpoint, username, and password
-> Open Upload Settings
-> Add Channel
-> Select WebDAV
-> Enter Endpoint / username / password
-> Keep authentication mode as Basic by default
-> Keep storage directory as imgbed by default
-> Save
-> Query capacity
-> Upload a test file
```
