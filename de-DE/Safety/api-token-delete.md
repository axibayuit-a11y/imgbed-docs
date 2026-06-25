# Dateien mit API Token löschen

Das Löschen per API Token ist für Skripte, Automatisierungen und externe Programme gedacht. Der Administrationsbereich muss nicht geöffnet werden: Website-Adresse, API Token und konkrete Datei-IDs reichen aus, um eine oder mehrere Dateien aus ImgBed zu löschen.

Löschen ist eine schreibende Operation. Nach Ausführung des Befehls werden die Daten tatsächlich entfernt. Prüfe am besten zuerst mit `imgbed-token-list.mjs`, welche `fileId`-Werte gelöscht werden sollen, und übergib diese IDs danach an das Löschskript.

![API Token bearbeiten](../../image/Safety/apitoken/编辑删除权限api.png)

## Vorbereitung

Öffne im Administrationsbereich:

```text
System Settings -> Security Settings -> API Token
```

Beim Erstellen oder Bearbeiten des API Token muss die Berechtigung zum Löschen aktiv sein. Dieses Skript benötigt nur die Berechtigung `delete`.

Der API Token kann auch als Umgebungsvariable gesetzt werden:

```powershell
$env:IMGBED_API_TOKEN="your API Token"
```

## Skript herunterladen

| Skript | Zweck |
| --- | --- |
| <a href="/tools/imgbed-token-delete.mjs" download>Skript zum Löschen von Dateien</a> | Löscht eine oder mehrere ausdrücklich angegebene Datei-IDs |

Erforderlich ist Node.js 18 oder neuer.

## Verhalten der Lösch-API

Das Löschskript ruft die serverseitige Löschschnittstelle auf:

```text
POST /api/manage/delete/batch
```

Die Anfrage muss den API Token enthalten:

```text
Authorization: Bearer <token>
```

Beispiel für den Anfragekörper:

```json
{
  "fileIds": ["photos/2026/a.txt"],
  "deleteStrictness": "strict"
}
```

Wenn `fileIds` nur eine Datei enthält, wird eine einzelne Datei gelöscht. Bei mehreren Dateien handelt es sich um eine Batch-Löschung. Die Serverseite verarbeitet pro Anfrage höchstens 15 Dateien; das Skript teilt die Arbeit anhand von `--batch-size` automatisch in mehrere Anfragen auf.

Die Schnittstelle gibt einen NDJSON-Fortschrittsstrom zurück. Häufige Ereignisse sind `batch_start`, `file_step`, `file_done`, `batch_complete` und `batch_error`. Das Skript wertet diese Ereignisse aus und fasst sie als lesbares Ergebnis oder als JSON-Ergebnis zusammen.

Nach erfolgreichem Löschen verarbeitet die Serverseite automatisch Dateiindizes, Ordnerstatistiken, Kapazitätsstatistiken und das Leeren des Zwischenspeichers.

## Parameter des Löschskripts

| Parameter | Erforderlich | Beschreibung |
| --- | --- | --- |
| `--base-url <url>` | Ja | Adresse der ImgBed-Website, zum Beispiel `https://image.ai6.me` |
| `--token <token>` | Ja | API Token; alternativ kann `IMGBED_API_TOKEN` genutzt werden |
| `--file-id <id>` | Ja | Datei-ID, die gelöscht werden soll; kann mehrfach angegeben werden |
| `--strictness <strict\|soft>` | Nein | Löschstrenge; Standardwert `strict` |
| `--batch-size <n>` | Nein | Anzahl der Dateien pro Anfrage; Standardwert `15`, Maximum `15` |
| `--retries <n>` | Nein | Wiederholungen bei vorübergehenden Fehlern; Standardwert `3` |
| `--timeout-ms <n>` | Nein | Zeitlimit einer Anfrage; Standardwert `180000` |
| `--output <pretty\|json>` | Nein | Ausgabeformat; Standardwert `pretty` |
| `--save-response <path>` | Nein | Speichert das Endergebnis als JSON-Datei |
| `-h` / `--help` | Nein | Zeigt die Skripthilfe an |

Dieses Skript löscht nur die ausdrücklich übergebenen `--file-id`-Werte. Es führt keine unscharfe Suche aus, leert keine Ordner in einem Schritt und liest keine zu löschenden IDs aus kommagetrennten Listen oder lokalen Dateien.

## Striktes und weiches Löschen

| Modus | Beschreibung |
| --- | --- |
| `strict` | Standardmodus. Wenn das Löschen im entfernten Speicher fehlschlägt, bleibt der ImgBed-Eintrag erhalten, damit später erneut versucht oder geprüft werden kann |
| `soft` | Wenn das Löschen im entfernten Speicher fehlschlägt, wird der ImgBed-Eintrag trotzdem bereinigt und das Ergebnis enthält eine Warnung |

Wenn der entfernte Dateiinhalt zwingend gelöscht werden muss, damit die Aktion als erfolgreich gilt, verwende den Standardmodus `strict`. Wenn eine entfernte Plattform die Datei nicht mehr löschen kann und nur der ImgBed-Eintrag bereinigt werden soll, verwende `soft`.

## Beispiele

Eine Datei löschen:

```powershell
node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --file-id "photos/2026/a.txt"
```

API Token aus der Umgebungsvariable verwenden:

```powershell
$env:IMGBED_API_TOKEN="your API Token"

node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --file-id "photos/2026/a.txt"
```

Mehrere Dateien löschen:

```powershell
node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --file-id "photos/2026/a.txt" `
  --file-id "photos/2026/b.txt" `
  --file-id "photos/2026/c.txt"
```

ImgBed-Eintrag auch bei fehlgeschlagenem Löschen im entfernten Speicher bereinigen:

```powershell
node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --file-id "photos/2026/a.txt" `
  --strictness soft
```

JSON ausgeben und Ergebnis speichern:

```powershell
node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --file-id "photos/2026/a.txt" `
  --output json `
  --save-response ".\delete-result.json"
```

Pro Anfrage höchstens 5 Dateien löschen:

```powershell
node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --file-id "photos/2026/a.txt" `
  --file-id "photos/2026/b.txt" `
  --batch-size 5
```

## Vor dem Löschen `fileId` prüfen

Das Löschskript benötigt die ImgBed-Datei-ID. Mit dem Listenskript kannst du zuerst die Dateien in einem Ordner ansehen:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --dir "photos/2026" `
  --count 10 `
  --output json
```

Das Feld `name` im Ergebnis ist normalerweise die `fileId`, die an das Löschskript übergeben werden kann.

## Häufige Fragen

### Warum ist das Löschen fehlgeschlagen, aber die Datei steht noch in der Liste?

Im Standardmodus `strict` bleibt der ImgBed-Eintrag erhalten, wenn das Löschen im entfernten Speicher fehlschlägt. So wird vermieden, dass nur der lokale Index gelöscht wird, während die entfernte Datei weiter existiert. Wenn sicher ist, dass nur der ImgBed-Eintrag bereinigt werden soll, wiederhole denselben `fileId` mit `soft`.

### Warum enthält das Ergebnis Warnungen?

Warnungen bedeuten meist ein nicht kritisches Problem beim Löschen im entfernten Speicher, beim Leeren des Zwischenspeichers oder beim Abschließen der Statistiken. Das Skript fasst Warnungen zusammen, damit du entscheiden kannst, ob ein erneuter Versuch nötig ist.

### Kann ein ganzer Ordner auf einmal gelöscht werden?

Dieses Skript bietet keine Funktion zum Leeren eines ganzen Ordners. Filtere zuerst mit dem Listenskript die konkreten `fileId`-Werte heraus und übergib die zu löschenden Dateien dann einzeln an das Löschskript.



