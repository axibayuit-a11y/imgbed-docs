# Dateiverwaltung mit API Token

Die Dateiverwaltung per API Token ist für Skripte, Automatisierungsaufgaben und externe Verwaltungsoberflächen gedacht. Sie nutzt die Berechtigung `manage`, um ohne Öffnen des Administrationsbereichs Dateiinformationen zu bearbeiten, Dateien zu verschieben, Dateien umzubenennen, Platzhalterdateien für Verzeichnisse zu erstellen, Dateitags und Listenstatus anzupassen, eine Upload-IP zu sperren oder wieder freizugeben sowie kurzlebige Upload-Tokens zu erstellen oder zu löschen.

Dieses Skript behandelt nur leichte Verwaltungsaktionen in der Datei- und Benutzerverwaltung. Uploads, Auflistung, Löschung, Upload-Einstellungen, Website-Einstellungen und Föderationsbeziehungen verwenden weiterhin ihre jeweiligen Spezialskripte.

![API Token bearbeiten](../../image/Safety/apitoken/编辑管理权限api.png)

## Vorbereitung

Öffnen Sie nach dem Aufruf des Administrationsbereichs:

Systemeinstellungen -> Sicherheitseinstellungen -> API Token

Achten Sie beim Erstellen oder Bearbeiten eines API Token darauf, dass dieser Token die Verwaltung erlaubt. Die Berechtigung `manage` kann Dateistatus, Upload-Status von Benutzern und kurzlebige Upload-Tokens ändern oder erstellen. Sie sollte nur vertrauenswürdigen Skripten oder Personen gegeben werden.

Schreiboperationen im Dateiverwaltungsskript laufen standardmäßig im Vorschaumodus und werden nicht wirklich gespeichert. Prüfen Sie die Vorschau und fügen Sie anschließend `--apply` hinzu, um die Änderung auszuführen.

Der Token kann auch in einer Umgebungsvariable abgelegt werden:

```powershell
$env:IMGBED_API_TOKEN="your API Token"
```

## Skript herunterladen

| Skript | Zweck |
| --- | --- |
| <a href="/tools/imgbed-token-manage.mjs" download>Dateiverwaltungsskript herunterladen</a> | Dateimetadaten, Moderationslabels, Dateitags, Listenstatus, Verschieben, Umbenennen, Ordnererstellung, IP-Sperre/-Freigabe sowie Erstellung und Löschung kurzlebiger Upload-Tokens |

Zum Ausführen des Skripts ist lokal Node.js 18 oder neuer erforderlich.

## Funktionsumfang

| Fähigkeit | Skript | Berechtigung |
| --- | --- | --- |
| Dateien hochladen | `imgbed-token-single-upload.mjs` / `imgbed-token-chunk-upload.mjs` | `upload` |
| Dateien auflisten, Dateien filtern, Benutzerstatistiken lesen | `imgbed-token-list.mjs` | `list` |
| Eindeutig angegebene Dateien löschen | `imgbed-token-delete.mjs` | `delete` |
| Dateiinformationen, Tags, Listen, Verschieben, Umbenennen, Ordnererstellung, IP-Sperre, Erstellung oder Löschung kurzlebiger Upload-Tokens | `imgbed-token-manage.mjs` | `manage` |
| Upload-Kanäle, Sicherheitseinstellungen, Seiteneinstellungen, weitere Einstellungen und Föderationsbeziehungen bearbeiten | Skripte zur Konfigurationsverwaltung | `manage` |

`imgbed-token-manage.mjs` lädt keine Dateien hoch, listet keine Dateien auf und löscht keine Dateien. Wenn Sie eine `fileId` suchen müssen, filtern Sie die Dateien zuerst mit dem Listenskript. Wenn eine Datei gelöscht werden soll, übergeben Sie die eindeutige `fileId` an das Löschskript.

## Allgemeine Parameter

| Parameter | Erforderlich | Beschreibung |
| --- | --- | --- |
| `--base-url <url>` | Ja | URL der ImgBed-Website, zum Beispiel `https://image.ai6.me` |
| `--token <token>` | Ja | API Token. Alternativ kann die Umgebungsvariable `IMGBED_API_TOKEN` verwendet werden |
| `--retries <n>` | Nein | Anzahl der Wiederholungen bei vorübergehenden Fehlern. Standardwert `3` |
| `--timeout-ms <n>` | Nein | Zeitlimit für eine einzelne Anfrage. Standardwert `180000` |
| `--output <pretty\|json>` | Nein | Ausgabeformat. Standard ist `pretty`; für Programmanbindungen wird `json` empfohlen |
| `--save-response <path>` | Nein | Speichert das Endergebnis als JSON-Datei |
| `--batch-size <n>` | Nein | Anzahl der Elemente pro Anfrage bei Batch-Aktionen. Standard `15`, Maximum `15` |
| `--apply` | Nein | Führt Schreibvorgänge wirklich aus. Ohne diese Option wird nur eine Vorschau erzeugt |
| `-h` / `--help` | Nein | Zeigt die Hilfe des Skripts an |

## Zuerst fileId prüfen

Die meisten Aktionen des Dateiverwaltungsskripts benötigen eine `fileId`. Sie können diese zuerst mit dem Listenskript ermitteln:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --dir "test4" `
  --count 10 `
  --output json
```

Der Wert `name` in der Antwort ist in der Regel die `fileId`, die an das Dateiverwaltungsskript übergeben werden kann.

## Dateimetadaten

Dateimetadaten dienen dazu, den im Administrationsbereich angezeigten Dateinamen und die Lesequelle zu ändern.

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-metadata `
  --file-id "photos/2026/a.jpg" `
  --file-name "cover.jpg" `
  --read-source backup
```

Speichern Sie erst, nachdem die Vorschau korrekt ist:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-metadata `
  --file-id "photos/2026/a.jpg" `
  --file-name "cover.jpg" `
  --read-source backup `
  --apply
```

### Parameter für Dateimetadaten

| Parameter | Beschreibung |
| --- | --- |
| `--set-metadata` | Ändert die Metadaten einer einzelnen Datei |
| `--file-id <id>` | ID der zu ändernden Datei |
| `--file-name <name>` | Neuer Anzeigename im Administrationsbereich |
| `--read-source <primary\|backup>` | Lesequelle. `primary` ist die Primärquelle, `backup` die Ersatzquelle |

Mindestens einer der Parameter `--file-name` oder `--read-source` muss angegeben werden.

## Moderationslabels

Moderationslabels entsprechen der Altersfreigabe einer Datei. Sie können das aktuelle Label zuerst lesen und danach ändern.

Moderationslabel lesen:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-label `
  --file-id "photos/2026/a.jpg"
```

Moderationslabel setzen:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-label `
  --file-id "photos/2026/a.jpg" `
  --label r12 `
  --apply
```

### Parameter für Moderationslabels

| Parameter | Beschreibung |
| --- | --- |
| `--get-label` | Liest das Moderationslabel einer einzelnen Datei |
| `--set-label` | Ändert das Moderationslabel einer einzelnen Datei |
| `--file-id <id>` | Datei-ID |
| `--label <value>` | Labelwert: `all-ages`, `r12`, `r16`, `r18`, `None` |

## Dateitags

Dateitags fügen Dateien durchsuchbare fachliche Tags hinzu. Das Skript unterstützt Lesen, Ersetzen, Hinzufügen und Entfernen sowie Batch-Verarbeitung für mehrere Dateien.

Dateitags lesen:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-tags `
  --file-id "photos/2026/a.jpg"
```

Tags hinzufügen:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --add-tags `
  --file-id "photos/2026/a.jpg" `
  --tag "cover" `
  --tag "2026" `
  --apply
```

Tags entfernen:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --remove-tags `
  --file-id "photos/2026/a.jpg" `
  --tag "cover" `
  --apply
```

Tags ersetzen:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-tags `
  --file-id "photos/2026/a.jpg" `
  --tag "archive" `
  --tag "public" `
  --apply
```

Tags per Batch hinzufügen:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --batch-tags `
  --file-id "photos/2026/a.jpg" `
  --file-id "photos/2026/b.jpg" `
  --tag-action add `
  --tag "batch-test" `
  --apply
```

### Parameter für Dateitags

| Parameter | Beschreibung |
| --- | --- |
| `--get-tags` | Liest Tags einer einzelnen Datei |
| `--set-tags` | Ersetzt Tags einer einzelnen Datei |
| `--add-tags` | Fügt einer einzelnen Datei Tags hinzu |
| `--remove-tags` | Entfernt Tags von einer einzelnen Datei |
| `--batch-tags` | Setzt, fügt hinzu oder entfernt Tags per Batch |
| `--file-id <id>` | Datei-ID. Bei Batch-Aktionen mehrfach anzugeben |
| `--tag <tag>` | Tagwert, kann mehrfach angegeben werden |
| `--tags-json <path>` | Liest ein Tag-Array aus einer JSON-Datei |
| `--tag-action <set\|add\|remove>` | Tag-Aktion für Batch-Verarbeitung |

Beispielinhalt für die Datei `--tags-json`:

```json
["cover", "2026", "public"]
```

## Status für Sperr- und Freigabeliste

Der Listenstatus steuert das Zugriffsverhalten einer Datei im öffentlichen Zugriffsmodus. Er kann für einzelne Dateien oder per Batch geändert werden.

Eine einzelne Datei auf die Freigabeliste setzen:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-list-type `
  --file-id "photos/2026/a.jpg" `
  --list-type White `
  --apply
```

Mehrere Dateien zur Sperrliste hinzufügen:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --batch-list-type `
  --file-id "photos/2026/a.jpg" `
  --file-id "photos/2026/b.jpg" `
  --list-type Block `
  --apply
```

Standardstatus wiederherstellen:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-list-type `
  --file-id "photos/2026/a.jpg" `
  --list-type None `
  --apply
```

### Parameter für Sperr- und Freigabeliste

| Parameter | Beschreibung |
| --- | --- |
| `--set-list-type` | Ändert den Listenstatus einer einzelnen Datei |
| `--batch-list-type` | Ändert den Listenstatus von Dateien per Batch. Eine Anfrage verarbeitet höchstens `15` Dateien |
| `--file-id <id>` | Datei-ID. Bei Batch-Aktionen mehrfach anzugeben |
| `--list-type <None\|White\|Block>` | `None` ist der Standardstatus, `White` die Freigabeliste, `Block` die Sperrliste |

## Dateien verschieben

Beim Verschieben werden eine oder mehrere Dateien in ein Zielverzeichnis verschoben. Das Backend verarbeitet pro Anfrage höchstens `15` Dateien. Das Skript teilt die Arbeit nach `--batch-size` automatisch in mehrere Anfragen auf und führt sie nacheinander aus.

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --move `
  --file-id "photos/2026/a.jpg" `
  --file-id "photos/2026/b.jpg" `
  --target-path "archive/2026" `
  --apply
```

### Verschiebeparameter

| Parameter | Beschreibung |
| --- | --- |
| `--move` | Verschiebt Dateien |
| `--file-id <id>` | ID der zu verschiebenden Datei, kann mehrfach angegeben werden |
| `--target-path <dir>` | Zielverzeichnis |
| `--batch-size <n>` | Anzahl der pro Anfrage verschobenen Dateien. Standard `15`, Maximum `15` |

## Umbenennen oder Pfad ändern

Beim Umbenennen werden die alte Datei-ID und die neue Datei-ID eindeutig angegeben. Die neue Datei-ID kann nur den Dateinamen ändern oder gleichzeitig das Verzeichnis wechseln.

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --rename `
  --old-file-id "photos/2026/a.jpg" `
  --new-file-id "photos/2026/a-renamed.jpg" `
  --apply
```

Für Batch-Umbenennungen können `--old-file-id` und `--new-file-id` mehrfach angegeben werden:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --rename `
  --old-file-id "photos/2026/a.jpg" `
  --new-file-id "archive/2026/a.jpg" `
  --old-file-id "photos/2026/b.jpg" `
  --new-file-id "archive/2026/b.jpg" `
  --apply
```

Die Zuordnung kann auch in eine JSON-Datei geschrieben werden:

```json
[
  {
    "oldFileId": "photos/2026/a.jpg",
    "newFileId": "archive/2026/a.jpg"
  },
  {
    "oldFileId": "photos/2026/b.jpg",
    "newFileId": "archive/2026/b.jpg"
  }
]
```

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --rename `
  --items-json ".\rename-items.json" `
  --apply
```

### Parameter zum Umbenennen

| Parameter | Beschreibung |
| --- | --- |
| `--rename` | Benennt um oder ändert Pfade anhand einer eindeutigen Zuordnung |
| `--old-file-id <id>` | Ursprüngliche Datei-ID, kann mehrfach angegeben werden |
| `--new-file-id <id>` | Neue Datei-ID, kann mehrfach angegeben werden. Die Anzahl muss zu `--old-file-id` passen |
| `--items-json <path>` | JSON-Array mit Elementen der Form `{ "oldFileId": "...", "newFileId": "..." }` |
| `--batch-size <n>` | Anzahl der Umbenennungen pro Anfrage. Standard `15`, Maximum `15` |

## Ordner erstellen

ImgBed-Verzeichnisse ergeben sich aus Dateipfaden; echte leere Verzeichnisse gibt es nicht. Wenn das Skript einen Ordner erstellt, legt es im Zielverzeichnis eine Platzhalterdatei `0.md` an. Dadurch erscheint das Verzeichnis in der Dateiverwaltung und in den Verzeichnisstatistiken.

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --create-folder `
  --parent-directory "photos" `
  --folder-name "2026" `
  --apply
```

### Parameter zur Ordnererstellung

| Parameter | Beschreibung |
| --- | --- |
| `--create-folder` | Erstellt eine Platzhalterdatei für ein Verzeichnis |
| `--parent-directory <dir>` | Übergeordnetes Verzeichnis. Für das Stammverzeichnis kann eine leere Zeichenfolge übergeben werden |
| `--folder-name <name>` | Name des neuen Ordners |

## Upload-IP sperren und freigeben

Mit der Verwaltungsberechtigung kann eine IP zur Upload-Sperrliste hinzugefügt oder daraus entfernt werden. Diese Aktion betrifft zukünftige Uploads von dieser IP. Dateien, die diese IP bereits hochgeladen hat, werden nicht gelöscht.

Eine Upload-IP sperren:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --block-ip "67.159.48.149" `
  --apply
```

Eine Upload-IP wieder freigeben:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --allow-ip "67.159.48.149" `
  --apply
```

Aktuelle Upload-Sperrliste anzeigen:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --blocked-ips
```

### IP-Verwaltungsparameter

| Parameter | Beschreibung |
| --- | --- |
| `--block-ip <ip>` | Fügt eine IP zur Upload-Sperrliste hinzu |
| `--allow-ip <ip>` | Entfernt eine IP aus der Upload-Sperrliste |

## Kurzlebige Upload-Tokens erstellen und löschen

Die Verwaltungsberechtigung kann kurzlebige reine Upload-Tokens erstellen. Dieser Token hat fest nur die Berechtigung `upload`, `autoDelete` ist fest `true`, und die maximale Ablaufzeit beträgt `1` Tag.

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --create-upload-token `
  --name "Temporary Upload Token" `
  --owner "upload-bot" `
  --default-upload-channel telegram `
  --expires-in-minutes 20 `
  --apply `
  --output json
```

Alternativ kann direkt ein Millisekunden-Zeitstempel übergeben werden:

```powershell
$expiresAt = [DateTimeOffset]::UtcNow.AddHours(12).ToUnixTimeMilliseconds()

node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --create-upload-token `
  --name "Upload Token valid for one day" `
  --owner "upload-bot" `
  --default-upload-channel telegram `
  --expires-at $expiresAt `
  --apply
```

Beim Löschen eines kurzlebigen Upload-Tokens muss die von der Erstellungs-API zurückgegebene `id` übergeben werden. Ein Verwaltungstoken kann nur Tokens löschen, die folgende Bedingungen erfüllen:

| Bedingung | Anforderung |
| --- | --- |
| Berechtigung | `permissions` enthält nur `upload` |
| Automatische Löschung | `autoDelete=true` |
| Gültigkeitsdauer | `expiresAt - createdAt <= 24` Stunden |

Kurzlebigen Upload-Token löschen:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --delete-upload-token `
  --token-id "mqt4jqokc85be80d1f0f47078e848a77d6c1aa6e" `
  --apply
```

Ein Verwaltungstoken kann keine normalen Tokens, Langzeit-Tokens, Tokens mit `list` / `delete` / `manage`-Berechtigungen oder Upload-Tokens mit einer Gültigkeit von mehr als `1` Tag löschen. Diese Tokens müssen weiterhin im Administrationsbereich des Browsers verwaltet werden.

### Parameter für kurzlebige Upload-Tokens

| Parameter | Beschreibung |
| --- | --- |
| `--create-upload-token` | Erstellt einen kurzlebigen reinen Upload-Token |
| `--delete-upload-token` | Löscht einen zulässigen kurzlebigen reinen Upload-Token |
| `--name <name>` | Token-Name |
| `--owner <owner>` | Beschreibung des Token-Eigentümers |
| `--default-upload-channel <key>` | Standard-Upload-Kanal. Es muss ein echter Kanal sein, zum Beispiel `telegram`, `s3`, `github` |
| `--expires-in-minutes <n>` | Ablaufzeit in Minuten ab jetzt, maximal `1440` |
| `--expires-at <ms>` | Absolute Ablaufzeit als Millisekunden-Zeitstempel, maximal `24` Stunden ab jetzt |
| `--token-id <id>` | ID des zu löschenden kurzlebigen Upload-Tokens |

Kurzlebige Upload-Tokens erlauben nur Uploads. In Tests wurden kurzlebige Tokens mit `permissions=["upload"]` beim Zugriff auf Listen-, Dateiverwaltungs- und Lösch-APIs abgewiesen.

Nach Ablauf werden Tokens mit `autoDelete=true` bereinigt, wenn das Backend bei einer Prüfung erkennt, dass sie abgelaufen sind. Beim Lesen der API-Token-Liste werden ebenfalls abgelaufene automatisch löschbare Tokens bereinigt.

## API-Zuordnung

| Aktion | Methode | API |
| --- | --- | --- |
| Dateimetadaten ändern | `PATCH` | `/api/manage/metadata/{fileId}` |
| Moderationslabel lesen | `GET` | `/api/manage/label/{fileId}` |
| Moderationslabel ändern | `POST` | `/api/manage/label/{fileId}` |
| Dateitags lesen | `GET` | `/api/manage/tags/{fileId}` |
| Dateitags ändern | `POST` | `/api/manage/tags/{fileId}` |
| Dateitags per Batch ändern | `POST` | `/api/manage/tags/batch` |
| Listenstatus ändern | `POST` | `/api/manage/listType/{fileId}` |
| Listenstatus per Batch ändern | `POST` | `/api/manage/listType/batch` |
| Verschieben oder umbenennen | `POST` | `/api/manage/relocate/batch` |
| Ordner erstellen | `POST` | `/api/manage/folder/create` |
| Upload-IP sperren | `POST` | `/api/manage/cusConfig/blockip` |
| Upload-IP freigeben | `POST` | `/api/manage/cusConfig/whiteip` |
| Kurzlebigen Upload-Token erstellen | `POST` | `/api/manage/apiTokens` |
| Kurzlebigen Upload-Token löschen | `DELETE` | `/api/manage/apiTokens?id={tokenId}` |

Das Skript fügt automatisch hinzu:

```text
Authorization: Bearer your API Token
```

## Ausgabeformat

Die Standardausgabe `pretty` eignet sich für die manuelle Prüfung. Wenn ein anderes Programm das Ergebnis weiterverarbeiten soll, verwenden Sie `--output json`:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-tags `
  --file-id "photos/2026/a.jpg" `
  --output json
```

Das vollständige Ergebnis kann ebenfalls gespeichert werden:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-tags `
  --file-id "photos/2026/a.jpg" `
  --output json `
  --save-response ".\manage-result.json"
```

Batch-Verschiebungen, Batch-Umbenennungen und Batch-Listenaktionen werten den vom Backend zurückgegebenen NDJSON-Fortschrittsstream aus und fassen Ereignisanzahl, Abschlussstatus und Fehlerdetails zusammen.

## FAQ

### Warum hat der Befehl nichts geändert?

Schreibaktionen laufen standardmäßig im Vorschaumodus. Prüfen Sie die Vorschau und fügen Sie danach `--apply` hinzu, damit die Änderung wirklich gespeichert wird.

### Kann dieses Skript Dateien hochladen, auflisten oder löschen?

Nein. Für Uploads werden Upload-Skripte verwendet, für Auflistung und Filterung das Listenskript, und für das Löschen eindeutig angegebener Dateien das Löschskript. Das Dateiverwaltungsskript behandelt nur leichte Verwaltungsaktionen unter der Berechtigung `manage`.

### Wie finde ich heraus, welche fileId ich übergeben muss?

Fragen Sie Dateien zuerst mit `imgbed-token-list.mjs --files` ab. Der Wert `name` in der Antwort ist in der Regel die Datei-ID und damit der Wert für `--file-id`.

### Wie viele Dateien kann eine Batch-Operation auf einmal verarbeiten?

Das Backend verarbeitet pro Anfrage höchstens `15` Dateien. Das Skript verwendet standardmäßig `--batch-size 15`; bei einem kleineren Wert teilt es die Arbeit automatisch in mehrere aufeinanderfolgende Anfragen auf.

### Kann ein wirklich leerer Ordner erstellt werden?

ImgBed-Verzeichnisse werden aus Dateipfaden abgeleitet; echte leere Verzeichnisse gibt es nicht. `--create-folder` erstellt die Platzhalterdatei `0.md`, damit das Verzeichnis in der Dateiverwaltung und in den Verzeichnisstatistiken sichtbar wird.

### Wie lange kann ein kurzlebiger Upload-Token maximal gültig sein?

Maximal `1` Tag, also `1440` Minuten. Bei einer längeren Dauer lehnt das Skript lokal ab; das Backend gibt außerdem `API_TOKEN_MANAGE_CREATE_EXPIRES_AT_TOO_LONG` zurück.

### Wird ein kurzlebiger Upload-Token nach Ablauf automatisch gelöscht?

Er wird automatisch bereinigt, aber nicht durch eine sofortige geplante Aufgabe. Ein abgelaufener Token wird bereinigt, wenn er erneut geprüft wird. Beim Lesen der API-Token-Liste werden ebenfalls abgelaufene Tokens mit `autoDelete=true` bereinigt.
