# WebDAV-Zugriff einrichten

ImgBed kann WebDAV-Zugriff bereitstellen, damit Dateien über den Dateimanager oder kompatible Clients geprüft werden können.

## Einsatzfälle

- Dateien unter Windows oder macOS ansehen.
- Dateien mit einem WebDAV-Client organisieren.
- Auf gespeicherte Dateien außerhalb des Adminbereichs zugreifen.

## Verbindung unter Windows 11

1. Öffne den Datei-Explorer.
2. Klicke mit der rechten Maustaste auf `Dieser PC`.
3. Wähle `Netzwerkadresse hinzufügen`.
4. Gib die WebDAV-URL ein.
5. Trage Benutzername und Passwort ein.
6. Prüfe, ob der Inhalt wie ein Ordner geöffnet wird.

![WebDAV unter Windows 11](../../image/Safety/webdav在win11配置.png)

Bei erfolgreicher Verbindung erscheint der Inhalt im Explorer.

![WebDAV-Anzeige unter Windows](../../image/Safety/webdav在win显示效果.png)

## Zugangsdaten

Verwende die in ImgBed konfigurierten WebDAV-Zugangsdaten. Für mehr Sicherheit ist ein Konto mit eingeschränkten Rechten besser als ein gemeinsam genutztes Hauptkonto.

## Wenn die Verbindung fehlschlägt

| Punkt | Prüfung |
| --- | --- |
| URL | Enthält `https://` und ist die korrekte WebDAV-Adresse |
| Zugangsdaten | Benutzername und Passwort stimmen |
| Rechte | Lesen und Schreiben im Zielordner erlaubt |
| Client | Windows oder WebDAV-Client blockiert die Verbindung nicht |

Wenn nur die Kapazitätsabfrage fehlschlägt, Uploads aber funktionieren, liefert der WebDAV-Server möglicherweise keine Quota-Informationen.
