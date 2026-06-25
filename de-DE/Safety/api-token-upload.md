# Dateien mit API Token hochladen

Das Hochladen per API Token ist für Skripte, Automatisierungen und externe Programme gedacht. Die Weboberfläche muss nicht geöffnet werden: Website-Adresse, API Token, lokaler Dateipfad und ein echter Hochladekanal reichen aus. Nach erfolgreichem Hochladen gibt das Skript den Dateilink zurück.

![API Token bearbeiten](../../image/Safety/apitoken/编辑上传权限api.png)

## Vorbereitung

Öffne im Administrationsbereich:

```text
System Settings -> Security Settings -> API Token
```

Beim Erstellen oder Bearbeiten des API Token muss die Berechtigung zum Hochladen aktiv sein. Wähle außerdem einen echten Standardkanal. Das Hochladen per API Token verwendet keine intelligente Verteilung; sende in Skripten daher nicht `__smart__`. Verwende einen echten Kanal wie `s3`, `github` oder `telegram`.

## Hochlade-Skripte herunterladen

Die ImgBed-Dokumentation enthält zwei Node.js-Skripte:

| Skript | Zweck |
| --- | --- |
| <a href="/tools/imgbed-token-single-upload.mjs" download>Skript für Hochladen mit einer Anfrage herunterladen</a> | Ruft `/upload` nur einmal auf; geeignet für kleine Dateien und Schnittstellentests |
| <a href="/tools/imgbed-token-chunk-upload.mjs" download>Skript für Hochladen in Teilen herunterladen</a> | Nutzt je nach Kanal Teilübertragung, direkte Übertragung oder eine Plattform-Sitzung; geeignet für große Dateien |

Erforderlich ist Node.js 18 oder neuer.

## Verfügbare Kanäle auflisten

Beide Skripte können zuerst die für den aktuellen API Token verfügbaren Hochladekanäle anzeigen:

```powershell
node imgbed-token-single-upload.mjs --base-url "https://your-domain" --token "your API Token" --list-channels
node imgbed-token-chunk-upload.mjs --base-url "https://your-domain" --token "your API Token" --list-channels
```

In diesem Modus sind `--file` und `--channel` nicht erforderlich. Die Ausgabe enthält den Standardkanal, den Schlüssel des Hauptkanals, die Namen der Unterkanäle und den Status der Lastverteilung. Geheime Schlüssel, Aktualisierungstoken und andere sensible Einstellungen werden nicht zurückgegeben.

## Hochladeart wählen

| Art | Geeignet für | Verhalten |
| --- | --- | --- |
| Hochladen mit einer Anfrage | Kleine Dateien, einfache Skripte, Schnittstellentests | Sendet die gesamte Datei in einer Anfrage an `/upload` |
| Hochladen in Teilen | Große Dateien oder Dateien mit Zeitüberschreitungsrisiko | Nutzt je nach Kanal Teilübertragung, direkte Übertragung oder eine Plattform-Sitzung |

Für große Dateien sollte zuerst das Skript für Hochladen in Teilen verwendet werden. Hochladen mit einer Anfrage wird durch die Anfragegröße bei Cloudflare, den Speicher des Worker und die Grenzen der Zielplattform beschränkt.

## Hochladen mit einer Anfrage

Dieses Skript sendet die vollständige Datei in einer Anfrage an `/upload`:

```powershell
node imgbed-token-single-upload.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --file "D:\test\image.png" `
  --channel s3 `
  --folder "photos/2026"
```

Der API Token kann auch als Umgebungsvariable gesetzt werden:

```powershell
$env:IMGBED_API_TOKEN="your API Token"
node imgbed-token-single-upload.mjs --base-url "https://your-domain" --file "D:\test\image.png" --channel s3
```

### Parameter für Hochladen mit einer Anfrage

| Parameter | Erforderlich | Beschreibung |
| --- | --- | --- |
| `--base-url <url>` | Ja | Adresse der ImgBed-Website, zum Beispiel `https://image.ai6.me` |
| `--token <token>` | Ja | API Token; alternativ kann `IMGBED_API_TOKEN` genutzt werden |
| `--file <path>` | Ja | Lokaler Dateipfad |
| `--channel <key>` | Ja | Echter Hochladekanal |
| `--folder <path>` | Nein | Zielordner, zum Beispiel `photos/2026` oder `/user/` |
| `--name-type <type>` | Nein | Benennungsart; entspricht `uploadNameType` auf der Serverseite, Standardwert `default` |
| `--channel-name <name>` | Nein | Bestimmter Unterkanal oder Account; ohne Angabe wählt die Serverseite anhand der Kanaleinstellungen |
| `--retries <n>` | Nein | Wiederholungen bei vorübergehenden Fehlern; Standardwert `3` |
| `--timeout-ms <n>` | Nein | Zeitlimit einer Anfrage in Millisekunden; Standardwert `180000` |
| `--output <pretty\|json>` | Nein | Ausgabeformat; Standardwert `pretty` |
| `--save-response <path>` | Nein | Speichert das Endergebnis als JSON-Datei |
| `--list-channels` | Nein | Listet nur die verfügbaren Kanäle auf und lädt keine Datei hoch |

### Kanalschlüssel

| Kanalschlüssel | Kanal |
| --- | --- |
| `telegram` / `tg` | Telegram |
| `discord` / `dc` | Discord |
| `cfr2` / `r2` | Cloudflare R2 |
| `s3` | S3 |
| `webdav` / `wd` | WebDAV-Speicherkanal |
| `github` / `gh` | GitHub Releases |
| `gitlab` / `gl` | GitLab Packages |
| `huggingface` / `hf` | Hugging Face |
| `onedrive` / `od` | OneDrive |
| `googledrive` / `google` / `gd` | Google Drive |
| `dropbox` / `db` | Dropbox |
| `yandex` / `yx` | Yandex Disk |
| `pcloud` / `pd` | pCloud |

### Größenlimits für Hochladen mit einer Anfrage

Für Hochladen mit einer Anfrage sollten Dateien möglichst unter 100 MB bleiben. Die folgenden Kanäle haben im Skript feste lokale Grenzen:

| Kanal | Grenze |
| --- | ---: |
| Telegram | 20 MiB |
| Discord | 10 MiB |
| S3 | 64 MiB |
| WebDAV | 64 MiB |
| GitHub Releases | 64 MiB |
| GitLab Packages | 64 MiB |

Bei Überschreitung zeigt das Skript lokal einen Fehler an. Für andere Kanäle ist im Skript keine feste lokale 100-MB-Grenze hinterlegt; ist die Anfrage zu groß, kommt der Fehler von Cloudflare oder von der Zielplattform.

## Hochladen in Teilen

Das Skript für Hochladen in Teilen lässt zunächst die Serverseite per API Token das Ziel bestimmen und nutzt danach den Großdateipfad des gewählten Kanals. Der Benutzer muss keine Sitzung erstellen, keine Teile selbst senden, nichts zusammenführen und keinen Abschlussaufruf schreiben.

```powershell
node imgbed-token-chunk-upload.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --file "D:\test\video.zip" `
  --channel github `
  --folder "photos/2026" `
  --concurrency 3
```

### Parameter für Hochladen in Teilen

| Parameter | Erforderlich | Beschreibung |
| --- | --- | --- |
| `--base-url <url>` | Ja | Adresse der ImgBed-Website |
| `--token <token>` | Ja | API Token; alternativ kann `IMGBED_API_TOKEN` genutzt werden |
| `--file <path>` | Ja | Lokaler Dateipfad |
| `--channel <key>` | Ja | Echter Hochladekanal |
| `--folder <path>` | Nein | Zielordner |
| `--name-type <type>` | Nein | Benennungsart; entspricht `uploadNameType` auf der Serverseite, Standardwert `default` |
| `--channel-name <name>` | Nein | Bestimmter Unterkanal oder Account |
| `--concurrency <n>` | Nein | Anzahl gleichzeitiger Übertragungen; Standardwert `1`, höchstens `3` |
| `--retries <n>` | Nein | Wiederholungen bei vorübergehenden Fehlern; Standardwert `3` |
| `--timeout-ms <n>` | Nein | Zeitlimit jeder Anfrage in Millisekunden; Standardwert `180000` |
| `--output <pretty\|json>` | Nein | Ausgabeformat; Standardwert `pretty` |
| `--save-response <path>` | Nein | Speichert das Endergebnis als JSON-Datei |
| `--list-channels` | Nein | Listet nur die verfügbaren Kanäle auf und lädt keine Datei hoch |

### Pfade für Hochladen in Teilen

| Kanalschlüssel | Übertragungspfad |
| --- | --- |
| `telegram` / `tg` | Echte Teilsitzung über `/upload` |
| `discord` / `dc` | Echte Teilsitzung über `/upload` |
| `cfr2` / `r2` | Echte Teilsitzung über `/upload` |
| `github` / `gh` | Echte Teilsitzung über `/upload` |
| `gitlab` / `gl` | Echte Teilsitzung über `/upload` |
| `webdav` / `wd` | Echte Teilsitzung über `/upload` |
| `s3` | Mehrteilige S3-Übertragung |
| `onedrive` / `od` | OneDrive-Übertragungssitzung |
| `googledrive` / `google` / `gd` | Fortsetzbare Google-Drive-Übertragung |
| `dropbox` / `db` | Dropbox-Übertragungssitzung |
| `yandex` / `yx` | Direkter Yandex-Übertragungslink |
| `pcloud` / `pd` | pCloud-Übertragungslink |
| `huggingface` / `hf` | Hugging Face LFS-Übertragung |

Yandex verhielt sich bei Archivdateien und komprimierten Dateien in Tests unzuverlässig. Für den Yandex-Kanal sollten nicht komprimierte Dateien verwendet werden.

## Rückgabe

Nach erfolgreichem Hochladen gibt das Skript ein Ergebnis ähnlich diesem aus:

```text
success
src: /file/photos/2026/example.png
url: https://your-domain/file/photos/2026/example.png
fileId: photos/2026/example.png
```

| Feld | Beschreibung |
| --- | --- |
| `src` | Interner Dateipfad der Website |
| `url` | Vollständiger Zugriffslink, geeignet für eigene Skripte oder Datenbanken |
| `fileId` | Datei-ID für spätere Abfragen, Verwaltung oder Protokolle |
| `channelName` | Beim Hochladen in Teilen kann der tatsächlich genutzte Unterkanal oder Account zurückgegeben werden |

Mit `--output json` gibt das Skript die vollständige JSON-Antwort aus.

## Direkter Aufruf der Schnittstelle für eine Anfrage

Ohne Skript kann die Schnittstelle für Hochladen mit einer Anfrage direkt aufgerufen werden:

```text
POST https://your-domain/upload?uploadChannel=s3&uploadFolder=photos/2026&uploadNameType=default
Authorization: Bearer your API Token
Content-Type: multipart/form-data
```

Formularfeld:

| Feld | Erforderlich | Beschreibung |
| --- | --- | --- |
| `file` | Ja | Datei, die hochgeladen werden soll |

Abfrageparameter:

| Parameter | Erforderlich | Beschreibung |
| --- | --- | --- |
| `uploadChannel` | Ja | Echter Hochladekanal |
| `uploadFolder` | Nein | Zielordner |
| `uploadNameType` | Nein | Benennungsart |
| `channelName` | Nein | Unterkanal oder Account |

Bei Erfolg gibt die Schnittstelle ein ähnliches Ergebnis zurück:

```json
{
  "success": true,
  "src": "/file/photos/2026/example.png",
  "url": "https://your-domain/file/photos/2026/example.png",
  "fileId": "photos/2026/example.png"
}
```

## Häufige Fragen

### Große Dateien schlagen beim Hochladen mit einer Anfrage fehl

Bei `/upload` in einer Anfrage wird die gesamte Datei auf einmal gesendet. Große Dateien können an Cloudflare, am Speicher des Worker oder an der Zielplattform scheitern. Verwende für große Dateien das Skript für Hochladen in Teilen.

### `--channel-name` ist gesetzt, aber das Hochladen schlägt fehl

Prüfe, ob im gewählten Kanal ein Unterkanal mit genau diesem Namen existiert und aktiviert ist. Ohne `--channel-name` wählt die Serverseite anhand der Kanaleinstellungen einen verfügbaren Account.

### Ergebnis in einem anderen Programm verwenden

Nutze `--output json` oder `--save-response result.json`. Das Programm kann aus dem Feld `url` den vollständigen Dateilink lesen.

### Yandex lädt Archive nicht hoch

Yandex unterstützt Archivformate und komprimierte Formate nicht zuverlässig. Das kann an den Plattformrichtlinien liegen. Für Yandex sollten nicht komprimierte Dateien verwendet werden.


