# Auflisten und Filtern mit API Token

Das Listenskript mit API Token ist für Skripte, Automatisierungen und externe Programme gedacht, die Daten aus ImgBed lesen müssen. Es nutzt nur die Berechtigung `list`. Es lädt keine Dateien hoch, löscht keine Dateien, ändert keine Konfiguration und sperrt oder erlaubt keine Uploads für einzelne IP-Adressen.

![API Token bearbeiten](../../image/Safety/apitoken/编辑列出权限api.png)

Hauptzwecke:

| Funktion | Beschreibung |
| --- | --- |
| Dateiverwaltung auflisten | Liest die Dateiliste aus dem Administrationsbereich und unterstützt die erweiterten Filterparameter der Dateiverwaltung |
| Benutzerverwaltung auflisten | Liest Upload-Statistiken nach Benutzer oder IP und unterstützt die Filterparameter der Benutzerverwaltung |
| Hochladekanäle auflisten | Liest bereinigte Hochladekanäle, Unterkanäle, Kapazität und Lastverteilungsinformationen |
| Ordnerstatistiken | Liest Ordnerstatistiken und paginierte Ordnerinformationen |

## Vorbereitung

Öffne im Administrationsbereich:

```text
System Settings -> Security Settings -> API Token
```

Beim Erstellen oder Bearbeiten des API Token muss die Berechtigung zum Auflisten aktiv sein. Dieses Skript benötigt nur die Berechtigung `list`.

Der API Token kann auch als Umgebungsvariable gesetzt werden:

```powershell
$env:IMGBED_API_TOKEN="your API Token"
```

## Skript herunterladen

| Skript | Zweck |
| --- | --- |
| <a href="/tools/imgbed-token-list.mjs" download>Skript zum Auflisten und Filtern</a> | Dateiverwaltung auflisten, Benutzerverwaltung auflisten, Hochladekanäle auflisten und Ordnerstatistiken lesen |

Erforderlich ist Node.js 18 oder neuer.

## Allgemeine Parameter

| Parameter | Erforderlich | Beschreibung |
| --- | --- | --- |
| `--base-url <url>` | Ja | Adresse der ImgBed-Website, zum Beispiel `https://image.ai6.me` |
| `--token <token>` | Ja | API Token; alternativ kann `IMGBED_API_TOKEN` genutzt werden |
| `--retries <n>` | Nein | Wiederholungen bei vorübergehenden Fehlern; Standardwert `3` |
| `--timeout-ms <n>` | Nein | Zeitlimit einer Anfrage; Standardwert `180000` |
| `--output <pretty\|json>` | Nein | Ausgabeformat; Standardwert `pretty`; für Programmaufrufe empfiehlt sich `json` |
| `--save-response <path>` | Nein | Speichert das Endergebnis als JSON-Datei |
| `-h` / `--help` | Nein | Zeigt die Skripthilfe an |

## Dateiverwaltung auflisten

Dateien in der Dateiverwaltung auflisten:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --count 10
```

JSON ausgeben:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --count 10 `
  --output json
```

Nur die Anzahl unter den aktuellen Filterbedingungen lesen:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --file-summary `
  --dir "photos/2026" `
  --recursive
```

### Parameter der Dateiverwaltung

| Parameter | Beschreibung |
| --- | --- |
| `--files` | Listet Dateien auf |
| `--file-summary` | Liest nur die Anzahl |
| `--start <n>` | Seitenversatz |
| `--count <n>` | Anzahl der zurückgegebenen Einträge |
| `--dir <path>` | Angegebener Ordner |
| `--recursive` | Schließt Dateien in Unterordnern ein |
| `--search <text>` | Suchbegriff |
| `--channel <key>` | Filter nach Haupt-Hochladekanal, zum Beispiel `github`, `s3` oder `yandex` |
| `--channel-scope <primary\|backup\|all>` | Umfang des Kanalfilters: Hauptkanal, Sicherungskanal oder alle |
| `--channel-name-groups <value>` | Filter für Unterkanalgruppen; wird im bestehenden serverseitigen Format weitergegeben |
| `--list-type <csv>` | Listentyp, häufig `None,White,Block` |
| `--include-tags <csv>` | Diese Tags müssen enthalten sein |
| `--exclude-tags <csv>` | Diese Tags werden ausgeschlossen |
| `--time-start <ms>` | Startzeit des Uploads als Zeitstempel in Millisekunden |
| `--time-end <ms>` | Endzeit des Uploads als Zeitstempel in Millisekunden |
| `--file-exts <csv>` | Enthält nur bestimmte Erweiterungen, zum Beispiel `jpg,png,pdf` |
| `--exclude-file-exts <csv>` | Schließt bestimmte Erweiterungen aus |
| `--file-status-categories <csv>` | Dateikategorien: `image,audio,video,document,code,other` |
| `--upload-ip <ip>` | Filter nach Präfix der Upload-IP |
| `--age-ratings <csv>` | Altersfreigaben: `none,all-ages,r12,r16,r18` |
| `--orientation <csv>` | Orientierungsfilter; wird mit den bestehenden serverseitigen Werten weitergegeben |
| `--read-source <csv>` | Lesquellenfilter; wird mit den bestehenden serverseitigen Werten weitergegeben |
| `--access-status <normal\|blocked>` | Öffentlicher Zugriffsstatus |
| `--min-width <n>` | Mindestbreite |
| `--max-width <n>` | Höchstbreite |
| `--min-height <n>` | Mindesthöhe |
| `--max-height <n>` | Höchsthöhe |
| `--min-file-size <mb>` | Mindestdateigröße; nutzt den bestehenden MB-serverseitigen Parameter |
| `--max-file-size <mb>` | Höchstdateigröße; nutzt den bestehenden MB-serverseitigen Parameter |

### Beispiele für die Dateiverwaltung

PDF suchen:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --search "pdf" `
  --file-status-categories "document" `
  --count 20
```

Nach Upload-IP und Kanal filtern:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --upload-ip "103.62" `
  --channel yandex `
  --channel-scope primary
```

Vollständiges Ergebnis speichern:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --count 100 `
  --output json `
  --save-response ".\files.json"
```

## Benutzerverwaltung auflisten

Upload-Statistiken nach Benutzer oder IP auflisten:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --count 20
```

Nach einer IP oder Adresse suchen:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --search "43.198.183.56"
```

Dateien anzeigen, die von einer bestimmten IP hochgeladen wurden:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --user-detail `
  --ip "43.198.183.56" `
  --count 20
```

IP-Adressen mit Upload-Sperre auflisten:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --blocked-ips
```

### Parameter der Benutzerverwaltung

| Parameter | Beschreibung |
| --- | --- |
| `--users` | Listet Upload-Statistiken nach Benutzer oder IP auf |
| `--user-detail` | Zeigt Dateien an, die von einer bestimmten IP hochgeladen wurden |
| `--blocked-ips` | Listet IP-Adressen mit Upload-Sperre auf |
| `--ip <ip>` | Für `--user-detail` erforderlich |
| `--start <n>` | Seitenversatz |
| `--count <n>` | Anzahl der zurückgegebenen Einträge |
| `--sort <value>` | Sortierung: `timeDesc`, `timeAsc`, `countDesc`, `countAsc`, `totalSizeDesc`, `totalSizeAsc` |
| `--search <text>` | IP oder Adresse suchen |
| `--upload-status <allowed\|blocked>` | Ob Uploads erlaubt sind |
| `--start-time <ms>` | Startzeitraum der Statistik als Zeitstempel in Millisekunden |
| `--end-time <ms>` | Endzeitraum der Statistik als Zeitstempel in Millisekunden |
| `--file-status-categories <csv>` | Filter für Dateikategorien |
| `--age-ratings <csv>` | Filter für Altersfreigaben |
| `--min-file-size <mb>` | Mindestdateigröße |
| `--max-file-size <mb>` | Höchstdateigröße |
| `--list-type <csv>` | Listentyp, häufig `None,White,Block` |
| `--access-status <normal\|blocked>` | Öffentlicher Zugriffsstatus |

### Beispiele für die Benutzerverwaltung

Benutzer mit Upload-Sperre auflisten:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --upload-status blocked
```

Nach einem Adressbegriff suchen:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --search "Hong Kong"
```

Nach Upload-Anzahl sortieren:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --sort countDesc `
  --count 50
```

## Hochladekanäle auflisten

Bereinigte Konfiguration der Hochladekanäle auflisten:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --channels
```

Die zurückgegebenen Daten enthalten:

| Feld | Beschreibung |
| --- | --- |
| `type` | Typ des Haupt-Hochladekanals, zum Beispiel `github`, `s3` oder `yandex` |
| `name` | Name des Unterkanals oder Kontos |
| `enabled` | Ob er aktiviert ist |
| `load_balance_enabled` | Ob Lastverteilung für diesen Kanaltyp aktiviert ist |
| `quota_enabled` | Ob die Kapazitätsprüfung aktiviert ist |
| `quota_limit_bytes` | Kapazitätslimit |
| `quota_used_bytes` | Genutzte Kapazität |
| `quota_checked_at` | Zeitpunkt der Kapazitätsprüfung |
| `tag_json` | Nicht sensible Tags, zum Beispiel öffentliches Repository oder privates Repository |
| `created_at` / `updated_at` | Erstellungs- und Aktualisierungszeit |

Diese Schnittstelle gibt keine geheimen Schlüssel, Aktualisierungstoken, temporären Token, Passwörter oder andere sensible Konfiguration zurück.

## Ordnerstatistiken

Ordnerstatistiken auflisten:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --directories `
  --limit 20
```

Vollständige Ordnerpfade auflisten und nach Präfix suchen:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --directories `
  --scope full `
  --search-prefix "test" `
  --include-parents `
  --limit 10
```

### Parameter für Ordnerstatistiken

| Parameter | Beschreibung |
| --- | --- |
| `--directories` | Listet die Ordnerstatistik-Tabelle auf |
| `--dir <path>` | Ordner, ab dem aufgelistet wird |
| `--scope <direct\|full>` | `direct` listet nur direkte Unterordner, `full` listet vollständige Pfade |
| `--search-prefix <path>` | Suche nach Ordnerpräfix |
| `--include-parents` | Schließt im Modus `full` auch übergeordnete Ordner ein |
| `--limit <n>` | Anzahl der zurückgegebenen Einträge; serverseitiges Maximum `100` |
| `--cursor <path>` | Cursor für die nächste Seite |

## Ausgabeformat

Die Standardausgabe `pretty` eignet sich zum Lesen durch Menschen:

```powershell
node imgbed-token-list.mjs --base-url "https://your-domain" --token "your API Token" --users --count 5
```

Für die Verarbeitung durch andere Programme verwende `--output json`:

```powershell
node imgbed-token-list.mjs --base-url "https://your-domain" --token "your API Token" --users --count 5 --output json
```

Das vollständige Ergebnis kann ebenfalls gespeichert werden:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --count 5 `
  --output json `
  --save-response ".\users.json"
```

## Häufige Fragen

### Ändert dieses Skript Daten?

Nein. Dieses Skript ruft nur Leseschnittstellen auf. Es lädt nichts hoch, löscht nichts, verschiebt nichts, bearbeitet keine Konfiguration und sperrt oder erlaubt keine Uploads für einzelne IP-Adressen.

### Warum ist die Berechtigung `list` nötig?

Dateiverwaltung auflisten, Benutzerverwaltung auflisten, bereinigte Kanallisten und Ordnerstatistiken sind Lesefunktionen. Deshalb benötigt der API Token nur die Berechtigung `list`.

### Wie kann ich alle verfügbaren Parameter prüfen?

Führe aus:

```powershell
node imgbed-token-list.mjs --help
```

Das Skript listet alle Aktionen und Parameter auf.


