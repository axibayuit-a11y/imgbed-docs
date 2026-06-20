# WebDAV-Kanal hinzufügen

## Geeignet für

Nutze den WebDAV-Kanal, wenn:

- du ein NAS, einen Cloudspeicher oder einen Objektspeicherdienst mit WebDAV-Endpunkt hast.
- hochgeladene Bilder in deinem eigenen WebDAV-Verzeichnis gespeichert werden sollen.
- Zugangsdaten in der D1-Tabelle `upload_channels` gespeichert werden sollen, statt dauerhaft im Frontend sichtbar zu sein.

## Was du vorher brauchst

| Voraussetzung | Zweck |
| --- | --- |
| WebDAV Endpoint | Serverseitige WebDAV-URL, z. B. `https://nas.example.com/dav`. |
| Benutzername | Für die Anmeldung am WebDAV-Dienst. |
| Passwort | Für die Anmeldung am WebDAV-Dienst. |
| Authentifizierungsmodus | Standard ist `Basic`. Nutze `Digest` oder automatische Aushandlung nur, wenn der Server es verlangt. |
| Speicherverzeichnis | Ordner, in dem Dateien gespeichert werden. Standard ist `imgbed`. |

## Wo hinzufügen

1. Öffne die Systemeinstellungen.
2. Gehe zu Upload-Einstellungen.
3. Klicke oben rechts auf Kanal hinzufügen.
4. Wähle `WebDAV`.

## Feldübersicht

| Feld | Funktion | Erforderlich |
| --- | --- | --- |
| Kanalname | Ein gut erkennbarer Name für diesen WebDAV-Kanal, z. B. `koofr` oder `nas`. | Ja |
| Endpoint | Vollständiger WebDAV-Endpunkt inklusive `https://`. | Ja |
| Benutzername | WebDAV-Anmeldename. | Ja |
| Passwort | WebDAV-Passwort. | Ja |
| Authentifizierungsmodus | Meist `Basic`; nutze `Digest`, wenn der Server Digest-Authentifizierung verlangt. | Ja |
| Speicherverzeichnis | Ordner, in dem Dateien abgelegt werden. Standard ist `imgbed`. | Nein |

## Beispiel: fie.nl.tab.digital

### 1. App-Passwort erstellen

Öffne die Sicherheitseinstellungen deines Kontos, suche die App-Passwörter und erstelle ein neues App-Passwort.

![App-Passwort erstellen](../../image/upload/webdav/创建应用密码.png)

Kopiere und speichere das neue App-Passwort direkt nach dem Erstellen. In der Regel wird es nur einmal angezeigt.

![Neues App-Passwort speichern](../../image/upload/webdav/记住新应用程序密码.png)

### 2. WebDAV-Konfiguration in ImgBed ausfüllen

Kehre zu ImgBed zurück und füge einen WebDAV-Kanal hinzu:

| UI-Feld | Wert |
| --- | --- |
| Endpoint | Die von `https://fie.nl.tab.digital/` bereitgestellte WebDAV-URL. |
| Benutzername | Dein WebDAV-Benutzername. |
| Passwort | Das gerade erstellte App-Passwort. |
| Authentifizierungsmodus | Starte in den meisten Fällen mit `Basic`. |
| Speicherverzeichnis | Standard ist `imgbed`; du kannst auch einen eigenen Ordner verwenden. |

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

1. Öffne die Upload-Einstellungen.
2. Klicke auf Kanal hinzufügen.
3. Wähle `WebDAV`.
4. Trage einen gut erkennbaren Kanalnamen ein, z. B. `koofr`.
5. Trage den WebDAV-Endpunkt ein, z. B. `https://app.koofr.net/dav/Koofr`.
6. Trage Benutzername und Passwort ein.
7. Lasse den Authentifizierungsmodus standardmäßig auf `Basic`.
8. Lasse das Speicherverzeichnis bei `imgbed` oder ändere es auf deinen eigenen Ordner.
9. Klicke auf Speichern.
10. Prüfe nach dem Speichern die Kanalkarte, frage bei Bedarf die Kapazität ab und lade eine Testdatei hoch.

## Prüfung

| Prüfung | So prüfst du es |
| --- | --- |
| Kanalkarte erscheint | Nach dem Speichern sollte in den Upload-Einstellungen eine WebDAV-Kanalkarte sichtbar sein. |
| Kanal ist aktiv | Der Schalter oben rechts auf der Karte bleibt eingeschaltet. |
| Zugangsdaten sind gespeichert | Die Detailansicht zeigt Endpoint, Benutzername, Authentifizierungsmodus und Speicherverzeichnis. |
| Kleine Datei lädt hoch | Lade ein Testbild hoch und prüfe, ob es im WebDAV-Verzeichnis erscheint. |
| Regel für große Dateien greift | Dateien über 64 MiB nutzen Chunk-Upload und erzeugen ein Remote-Chunk-Verzeichnis. |
| Kapazitätsabfrage funktioniert | Wenn der Server Kapazitätsinformationen unterstützt, werden belegter und gesamter Speicher angezeigt. |

![Quotenabfrage erfolgreich](../../image/upload/webdav/查询额度成功.png)

## FAQ

### Warum erzeugen große WebDAV-Dateien ein Chunk-Verzeichnis?

Das ist die aktuelle Speichermethode für große Dateien.

Dateien über 64 MiB werden nicht zu einer einzelnen großen Remote-Datei zusammengefügt. Sie werden als Chunk-Verzeichnis gespeichert. ImgBed merkt sich das Chunk-Manifest und gibt den vollständigen Inhalt zurück, indem die Teile der Reihe nach gelesen werden.

### Was sollte ich zuerst prüfen, wenn große Uploads fehlschlagen?

Prüfe zuerst Endpoint, Benutzername, Passwort und Speicherverzeichnis. Stelle danach sicher, dass der WebDAV-Dienst Ordner anlegen, Dateien schreiben und Dateien lesen darf.

Wenn die Kapazitätsabfrage fehlschlägt, kleine Uploads aber funktionieren, unterstützt der Server die Kapazitätsauskunft möglicherweise nicht oder schränkt sie ein. Das bedeutet nicht automatisch, dass Uploads unmöglich sind.

### Welchen Authentifizierungsmodus soll ich wählen?

Starte mit `Basic`.

Wenn der Server ausdrücklich Digest-Authentifizierung verlangt, nutze `Digest`.

Wenn du unsicher bist, nutze automatische Aushandlung.

## Kurzcheck

```text
WebDAV-Endpunkt, Benutzername und Passwort vorbereiten
-> Upload-Einstellungen öffnen
-> Kanal hinzufügen
-> WebDAV wählen
-> Endpoint / Benutzername / Passwort eintragen
-> Authentifizierungsmodus standardmäßig auf Basic lassen
-> Speicherverzeichnis standardmäßig auf imgbed lassen
-> Speichern
-> Kapazität abfragen
-> Testdatei hochladen
```
