# Magnet-Links verwenden

Mit der Magnet-Funktion lädt ImgBed Dateien aus einem Magnet-Link herunter und lädt sie anschließend automatisch in den gewählten Speicherkanal hoch.

Das eignet sich für Videos, Serienfolgen, Archive und ähnliche Dateien. Du fügst nur den Magnet-Link ein; ImgBed erstellt im Hintergrund eine Aufgabe und zeigt nach Abschluss den fertigen Link in der Upload-Liste.

![Magnet-Link](../../image/other/磁力链接/磁力链接.png)

## Wo verwenden

Die Eingabe befindet sich im Upload-Bereich der Startseite.

Füge den Magnet-Link in das Feld ein, wähle den Modus `Übertragen` und starte den Upload.

![Magnet übertragen](../../image/other/磁力链接/上传番剧.png)

## Vor der ersten Nutzung

Richte zuerst die Magnet-Übertragung im Adminbereich ein.

Üblicherweise brauchst du:

| Voraussetzung | Zweck |
| --- | --- |
| GitHub-Konto | Führt die Download-Aufgabe aus |
| Upload-Kanal | Ziel wie Google Drive, OneDrive oder ein anderer Speicher |
| Zielordner | Ordner, in dem die übertragene Datei landet |
| Zeitlimit | Grenze für lange Aufgaben |

## Magnet übertragen

1. Füge den Magnet-Link in das Upload-Feld ein.
2. Prüfe, dass der Modus `Übertragen` gewählt ist.
3. Klicke auf Upload.
4. Warte, bis ImgBed die Aufgabe erstellt.
5. Verfolge den Fortschritt im Fenster `Magnet-Aufgaben` unten rechts.

Download und Upload können dauern. Die Geschwindigkeit hängt von der Verfügbarkeit des Magnets, der GitHub-Ausführungsumgebung und dem gewählten Speicherkanal ab.

![Download läuft](../../image/other/磁力链接/磁力链接下载中.png)

## Nach Abschluss

Nach Abschluss zeigt die Upload-Liste Dateiname und Links.

Videos erhalten eine Videovorschau, Bilder eine Bildvorschau, andere Dateien ein normales Dateisymbol.

![Übertragenes Video](../../image/other/磁力链接/下载好后的视频.png)

Diese Formate kannst du kopieren:

| Format | Verwendung |
| --- | --- |
| Originallink | Datei direkt öffnen |
| Markdown | In Markdown-Beiträge oder Dokumentation einfügen |
| HTML | In Webseitencode einfügen |
| BBCode | In Foren mit BBCode-Unterstützung verwenden |

## Aufgabenstatus

| Status | Bedeutung |
| --- | --- |
| Wartend | Aufgabe wurde erstellt und wartet auf Ausführung |
| Lädt herunter | Magnet-Ressource wird heruntergeladen |
| Lädt hoch | Datei wurde geladen und wird in den Kanal hochgeladen |
| Abgeschlossen | Upload ist fertig, Link kann kopiert werden |
| Fehlgeschlagen | Hinweis prüfen und erneut versuchen |

## Hinweise

- Enthält ein Magnet mehrere Dateien, zeigt ImgBed bevorzugt die wichtigste abgeschlossene Datei.
- Große Dateien brauchen mehr Zeit; lade die Seite erst nach Abschluss neu.
- Hat die Ressource keine verfügbaren Quellen, kann der Download sehr langsam sein oder scheitern.
- Fehlende Quota, abgelaufene Berechtigungen oder falsche Zielordner können den Upload ebenfalls scheitern lassen.
- Videovorschauen benötigen manchmal ein paar Sekunden.
