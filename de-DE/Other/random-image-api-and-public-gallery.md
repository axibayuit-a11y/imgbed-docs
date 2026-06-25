# Zufällige Bilder und öffentliche Galerie

Beide Funktionen werden hier konfiguriert:

```text
System Settings -> Other Settings
```

## API für zufällige Bilder

Die API für zufällige Bilder gibt eine zufällige Datei aus ausgewählten Verzeichnissen zurück. Sie eignet sich für Website-Hintergründe, Avatar-Rotation oder Aufrufe zufälliger Bilder von externen Seiten.

Nach der Aktivierung verwenden Sie:

```text
https://your-domain.com/random
```

## Einstellungen der API für zufällige Bilder

| Option | Zweck |
| --- | --- |
| Aktivieren | Schaltet den Endpunkt `/random` ein oder aus. Wenn er deaktiviert ist, wird der Zugriff verweigert. |
| Verzeichnisse | Begrenzt, welche Verzeichnisse die API für zufällige Bilder verwenden darf. Verzeichnisse, die hier nicht enthalten sind, können von der API nicht verwendet werden. |
| Aufrufdemo | Erzeugt Links für die API für zufällige Bilder, die Sie direkt kopieren können. |

Sie können mehrere Verzeichnisse auswählen. Wenn beispielsweise nur `/landscape/` und `/portrait/` erlaubt sind, kann die API für zufällige Bilder nur Dateien aus diesen Verzeichnissen und deren Unterverzeichnissen auswählen.

## Parameter der API für zufällige Bilder

| Parameter | Beispiel | Zweck |
| --- | --- | --- |
| `dir` | `/landscape/` | Gibt das Zufallsverzeichnis an. |
| `content` | `image` | Gibt den Medientyp an. Verwenden Sie `image`, `video`, `audio` oder durch Kommas getrennte Kombinationen. |
| `orientation` | `auto` | Filtert die Bildausrichtung. Verwenden Sie `portrait`, `landscape` oder `auto`. |
| `type` | `url` | Rückgabeformat. Leer bedeutet Weiterleitung, `url` gibt eine reine Text-URL zurück, `json` gibt JSON zurück. |
| `origin` | `1` | Wird mit `type=url` verwendet, um eine vollständige URL zurückzugeben. |
| `age` | `all-ages,r12` | Filtert nach Altersfreigabe. |
| `tag` | `wallpaper,sky` | Gibt nur Dateien zurück, die diese Tags enthalten. |
| `ex` | `private` | Schließt Dateien aus, die diese Tags enthalten. |

## Rückgabeformate

Ohne `type` leitet die API direkt zur URL der zufälligen Datei weiter.

Mit `type=url` gibt sie eine Text-URL zurück.

Mit `type=json` gibt sie Dateiinformationen zurück, einschließlich Datei-URL, Datei-ID, Dateiname, Dateityp, Tags, Altersfreigabe und zugehörigen Metadaten.

## Zugriffsregeln

Die API für zufällige Bilder folgt den Regeln für den öffentlichen Zugriff:

| Regel | Wirkung |
| --- | --- |
| Verzeichnisbeschränkung | Nur Dateien in erlaubten Verzeichnissen können ausgewählt werden. |
| Blocklist | Dateien auf der Blocklist werden aus dem Zufallspool ausgeschlossen. |
| Allowlist-Modus | Wenn aktiviert, werden nur Dateien zurückgegeben, die für den öffentlichen Zugriff erlaubt sind. |
| Altersfreigabe | R12, R16, R18 und ähnliche Inhalte werden nach dem aktuellen Zugriffsmodus gefiltert. |

Wenn nach dem Filtern keine Datei passt, gibt die API kein passendes Ergebnis zurück.

## Cache

Die API für zufällige Bilder speichert Kandidatenpools pro Verzeichnis im Cache, um die Geschwindigkeit zu verbessern.

Nach Dateiänderungen aktualisiert ImgBed die Cache-Version des Verzeichnisses, und spätere Anfragen bauen den Kandidatenpool neu auf. Leere Verzeichnisse werden kurz zwischengespeichert, um wiederholte Abfragen zu vermeiden.

## Öffentliche Galerie

Die öffentliche Galerie stellt eine öffentlich zugängliche, schreibgeschützte Seite zum Durchsuchen der Verzeichnisse bereit, die Besucher sehen dürfen.

Nach der Aktivierung können Besucher folgende Adresse aufrufen:

```text
https://your-domain.com/browse/directory-name
```

## Einstellungen der öffentlichen Galerie

| Option | Zweck |
| --- | --- |
| Aktivieren | Schaltet die öffentliche Galerie ein oder aus. Wenn sie deaktiviert ist, können Besucher nicht darin browsen. |
| Bildlademodus | Steuert, ob Vorschauen Originalbilder oder Thumbnails verwenden. |
| Freigegebene Verzeichnisse | Legt fest, auf welche Verzeichnisse Besucher zugreifen können. |

## Bildlademodus

| Modus | Zweck |
| --- | --- |
| Original | Die Besucherseite lädt Originaldateien direkt. |
| Thumbnail | Die Besucherseite bevorzugt Thumbnails für schnelleres Laden. |

## Freigegebene Verzeichnisse

Freigegebene Verzeichnisse bestimmen, was Besucher sehen können.

Beispiel:

```text
/1/,/2/,/landscape/,/portrait/
```

Besucher können dann aufrufen:

```text
https://your-domain.com/browse/1
https://your-domain.com/browse/2
https://your-domain.com/browse/landscape
https://your-domain.com/browse/portrait
```

Auch Unterverzeichnisse können freigegeben werden, zum Beispiel `/2026/lucky/`. Besucher werden für Verzeichnisse blockiert, die nicht freigegeben sind.

## Funktionen der öffentlichen Galerie

| Funktion | Beschreibung |
| --- | --- |
| Verzeichnisse durchsuchen | Dateien und Unterverzeichnisse in freigegebenen Verzeichnissen anzeigen. |
| Suche | Nach Dateiname, Datei-ID oder Tags suchen. |
| Typfilter | Bilder, Videos, Audiodateien oder andere Dateien filtern. |
| Tag-Filter | Ausgewählte Tags einschließen oder ausschließen. |
| Ausrichtungsfilter | Bilder im Quer- oder Hochformat filtern. |
| Zeitfilter | Nach Upload-Zeitraum filtern. |
| Erweiterungsfilter | Nach Dateierweiterung filtern. |
| Link kopieren | Dateizugriffslinks kopieren. |
| Medienvorschau | Bilder, Videos und Audiodateien auf der Besucherseite anzeigen oder abspielen. |

## Zugriffsregeln der öffentlichen Galerie

Auch die öffentliche Galerie folgt den Regeln für den öffentlichen Zugriff:

| Regel | Wirkung |
| --- | --- |
| Freigegebene Verzeichnisse | Nur erlaubte Verzeichnisse werden angezeigt. |
| Zugriffsmodus | Inhalte werden nach dem aktuellen Zugriffsmodus für Altersfreigaben gefiltert. |
| Allowlist-Modus | Wenn aktiviert, werden nur Dateien angezeigt, die für den öffentlichen Zugriff erlaubt sind. |
| Blocklist | Dateien auf der Blocklist werden ausgeblendet. |
