# Zufallsbild-API und öffentliche Galerie

Beide Funktionen werden hier eingestellt:

```text
Systemeinstellungen -> Weitere Einstellungen
```

## Zufallsbild-API

Die Zufallsbild-API wählt zufällig eine Datei aus den konfigurierten Ordnern. Sie eignet sich für Seitenhintergründe, Avatar-Rotation oder externe Aufrufe zufälliger Bilder.

Nach dem Aktivieren nutzt du:

```text
https://deine-domain/random
```

## API-Einstellungen

| Option | Beschreibung |
| --- | --- |
| Aktivieren | Schaltet `/random` ein oder aus; ausgeschaltet wird der Zugriff verweigert |
| Ordner | Begrenzen, aus welchen Ordnern Dateien gewählt werden |
| Aufrufbeispiel | Erzeugt einen kopierbaren API-Link |

Du kannst mehrere Ordner auswählen. Wenn nur `/landscape/` und `/portrait/` erlaubt sind, wählt die API nur Dateien aus diesen Ordnern oder deren Unterordnern.

## Wichtige Parameter

| Parameter | Beispiel | Beschreibung |
| --- | --- | --- |
| `dir` | `/landscape/` | Zielordner |
| `content` | `image` | Medientyp: `image`, `video`, `audio` oder Kombination |
| `orientation` | `auto` | `portrait`, `landscape` oder `auto` |
| `type` | `url` | Leer leitet weiter; `url` gibt Text zurück; `json` gibt JSON zurück |
| `origin` | `1` | Gibt mit `type=url` einen vollständigen Link zurück |
| `age` | `all-ages,r12` | Filter nach Altersfreigabe |
| `tag` | `wallpaper,sky` | Nur Dateien mit diesen Tags |
| `ex` | `private` | Dateien mit diesen Tags ausschließen |

## Antwortformate

Ohne `type` leitet die API direkt zur zufälligen Datei weiter.

`type=url` gibt einen reinen Textlink zurück.

`type=json` gibt Dateiinformationen zurück: Link, ID, Name, Typ, Tags, Einstufung und weitere Daten.

## Zugriffsbeschränkungen

Die API folgt den öffentlichen Regeln im Adminbereich.

| Regel | Auswirkung |
| --- | --- |
| Ordnerbeschränkung | Wählt nur aus erlaubten Ordnern |
| Blacklist | Gesperrte Dateien werden nicht berücksichtigt |
| Whitelist-Modus | Nur ausdrücklich erlaubte Dateien werden zurückgegeben |
| Altersfreigabe | Filtert R12, R16, R18 je nach Zugriffsmodus |

Wenn keine Datei passt, meldet die API kein Ergebnis.

## Öffentliche Galerie

Die öffentliche Galerie stellt eine schreibgeschützte Seite bereit, auf der Besucher freigegebene Ordner durchsuchen können.

```text
https://deine-domain/browse/ordnername
```

## Galerie-Einstellungen

| Option | Beschreibung |
| --- | --- |
| Aktivieren | Öffentliche Galerie ein- oder ausschalten |
| Lademodus | Originaldatei oder Thumbnail verwenden |
| Öffentliche Ordner | Festlegen, welche Ordner Besucher öffnen dürfen |

Beispiel:

```text
/1/,/2/,/landscape/,/portrait/
```

Damit können Besucher öffnen:

```text
https://deine-domain/browse/1
https://deine-domain/browse/2
https://deine-domain/browse/landscape
https://deine-domain/browse/portrait
```

Nicht freigegebene Ordner werden abgelehnt.

## Funktionen der Galerie

| Funktion | Beschreibung |
| --- | --- |
| Ordner durchsuchen | Freigegebene Dateien und Unterordner anzeigen |
| Suche | Nach Name, Datei-ID oder Tag suchen |
| Typfilter | Bild, Video, Audio oder andere Dateien filtern |
| Tagfilter | Tags einschließen oder ausschließen |
| Ausrichtungsfilter | Querformat, Hochformat und weitere Kriterien |
| Link kopieren | Öffentlichen Link der Datei kopieren |
| Medienvorschau | Bilder, Videos und Audio direkt ansehen |
