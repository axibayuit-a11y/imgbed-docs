# Konfiguration mit API Token verwalten

Die Konfigurationsverwaltung per API Token ist für Automatisierungsskripte, Betriebswerkzeuge und externe Kontrolloberflächen gedacht. Ein API Token mit der Berechtigung `manage` kann ohne Öffnen des Administrationsbereichs Hochladekanäle, Sicherheitseinstellungen, Seiteneinstellungen, weitere Einstellungen und leichte Föderationsbeziehungen lesen und ändern.

Die Verwaltungsberechtigung ist nur für leichte, skriptgeeignete Operationen vorgesehen. Schwere Operationen mit Bestätigung in der Weboberfläche, stapelweiser Verarbeitung im Weboberfläche oder Bereinigung von Föderationsindizes bleiben im Administrationsbereich der Weboberfläche.

![API Token bearbeiten](../../image/Safety/apitoken/编辑管理权限api.png)

## Vorbereitung

Öffne im Administrationsbereich:

```text
System Settings -> Security Settings -> API Token
```

Beim Erstellen oder Bearbeiten des API Token muss die Verwaltungsberechtigung aktiv sein. Diese Berechtigung kann Website-Einstellungen ändern und sollte nur vertrauenswürdigen Skripten oder Personen gegeben werden.

Alle drei Verwaltungsskripte führen Schreiboperationen standardmäßig nur als Vorschau aus. Erst mit `--apply` wird wirklich gespeichert.

Der API Token kann auch als Umgebungsvariable gesetzt werden:

```powershell
$env:IMGBED_API_TOKEN="your API Token"
```

## Verwaltungsskripte herunterladen

Die ImgBed-Dokumentation enthält drei Node.js-Skripte:

| Skript | Zweck |
| --- | --- |
| <a href="/tools/imgbed-token-upload-settings.mjs" download>Skript für Hochladeeinstellungen</a> | Verwaltet Hochladekanäle, Unterkanäle und Lastverteilung |
| <a href="/tools/imgbed-token-site-settings.mjs" download>Skript für Website-Einstellungen</a> | Verwaltet Sicherheits-, Seiten- und weitere Einstellungen |
| <a href="/tools/imgbed-token-federation.mjs" download>Skript für Föderationsbeziehungen</a> | Verwaltet leichte Beziehungsaktionen, Beitrittsanfragen und Nachrichten |

Erforderlich ist Node.js 18 oder neuer.

### Gemeinsame Parameter

| Parameter | Erforderlich | Beschreibung |
| --- | --- | --- |
| `--base-url <url>` | Ja | Adresse der ImgBed-Website, zum Beispiel `https://image.ai6.me` |
| `--token <token>` | Ja | API Token; alternativ kann `IMGBED_API_TOKEN` genutzt werden |
| `--retries <n>` | Nein | Wiederholungen bei vorübergehenden Fehlern; Standardwert `3` |
| `--timeout-ms <n>` | Nein | Zeitlimit jeder Anfrage in Millisekunden; Standardwert `180000` |
| `--output <pretty\|json>` | Nein | Ausgabeformat; Standardwert `pretty`, für Programme ist `json` geeignet |
| `--save-response <path>` | Nein | Speichert das Endergebnis als JSON-Datei |
| `--apply` | Nein | Führt den Schreibvorgang wirklich aus; ohne diesen Parameter wird nur eine Vorschau angezeigt |
| `-h` / `--help` | Nein | Zeigt die Hilfe des Skripts an |

## Hochladeeinstellungen

Das Skript für Hochladeeinstellungen listet, liest, erstellt, bearbeitet und löscht Unterkanäle. Außerdem kann es die Lastverteilung für einen Hauptkanal ein- oder ausschalten.

```powershell
node imgbed-token-upload-settings.mjs --base-url "https://your-domain" --token "your API Token" --list
```

### Parameter für Hochladeeinstellungen

| Parameter | Beschreibung |
| --- | --- |
| `--list` | Listet Gruppen der Hochladeeinstellungen |
| `--get` | Liest einen Hauptkanal oder einen bestimmten Unterkanal |
| `--upsert` | Erstellt oder bearbeitet einen Unterkanal; ohne `--apply` nur Vorschau |
| `--delete` | Löscht einen Unterkanal; ohne `--apply` nur Vorschau |
| `--load-balance <true\|false>` | Aktiviert oder deaktiviert die Lastverteilung eines Hauptkanals |
| `--channel <key>` | Hauptkanal, zum Beispiel `s3`, `github`, `telegram` |
| `--channel-name <name>` | Name des Unterkanals oder Accounts |
| `--set key=value` | Setzt ein Feld; kann wiederholt werden und unterstützt Punktpfade |
| `--patch-json <path>` | Übernimmt mehrere Felder aus einer JSON-Datei |
| `--apply` | Speichert die Änderung wirklich |

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

### Beispiele für Hochladeeinstellungen

Alle Hochladeeinstellungen auflisten:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --list
```

S3-Konfiguration lesen:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get `
  --channel s3
```

Einen S3-Unterkanal lesen:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get `
  --channel s3 `
  --channel-name "backup-s3"
```

Einen WebDAV-Unterkanal erstellen oder bearbeiten. Zuerst ohne `--apply` ausführen und die Vorschau prüfen:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --upsert `
  --channel webdav `
  --channel-name "backup-webdav" `
  --set enabled=false `
  --set remark="backup test"
```

Nach der Prüfung speichern:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --upsert `
  --channel webdav `
  --channel-name "backup-webdav" `
  --set enabled=false `
  --set remark="backup test" `
  --apply
```

Einen Unterkanal löschen:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --delete `
  --channel webdav `
  --channel-name "backup-webdav" `
  --apply
```

Lastverteilung für S3 aktivieren:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --load-balance true `
  --channel s3 `
  --apply
```

Komplexe Felder können in einer JSON-Datei stehen und mit `--patch-json` übergeben werden:

```json
{
  "enabled": true,
  "remark": "primary account"
}
```

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --upsert `
  --channel s3 `
  --channel-name "primary-s3" `
  --patch-json ".\s3-channel.json" `
  --apply
```

## Weitere Website-Einstellungen

Das Skript für Website-Einstellungen verwaltet drei Bereiche:

| Bereich | Wert für `--area` | Beschreibung |
| --- | --- | --- |
| Sicherheit | `security` | Benutzer- und Admin-Authentifizierung, angemeldete Geräte, API Token, Bildmoderation, Benutzerlimits, WebDAV |
| Seiten | `page` | Globale Seite, Benutzerseite, Administrationsseite und Anzeigeeffekte |
| Weitere Einstellungen | `others` | Zufallsbild-Schnittstelle, öffentliche Galerie, lokaler Föderationsknoten, automatische Schlagwörter, IP-Geolokalisierung, Sicherung, OCR |

Mit `--list-sections` werden verfügbare Bereiche, Abschnitte und Felder angezeigt:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --list-sections
```

### Parameter für Website-Einstellungen

| Parameter | Beschreibung |
| --- | --- |
| `--list-sections` | Listet editierbare Bereiche, Abschnitte und Felder |
| `--get` | Liest einen Einstellungsabschnitt |
| `--area <security\|page\|others>` | Wählt den Einstellungsbereich |
| `--section <name>` | Wählt den Abschnitt; die Namen stammen aus `--list-sections` |
| `--set key=value` | Setzt ein Feld; kann wiederholt werden |
| `--apply` | Speichert die Änderung wirklich |

Im Bereich `page` verwendet `--set` die Kennung der Seiteneinstellung, zum Beispiel `starsEffect=true`. In `security` und `others` wird der Feldname des Abschnitts genutzt, zum Beispiel `email=admin@example.com`.

### Beispiele für Website-Einstellungen

Benachrichtigung zu Systemaktualisierungen lesen:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get `
  --area security `
  --section systemUpdate
```

E-Mail für Aktualisierungsbenachrichtigungen ändern. Zuerst ohne `--apply` prüfen:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --area security `
  --section systemUpdate `
  --set email="admin@example.com"
```

Danach speichern:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --area security `
  --section systemUpdate `
  --set email="admin@example.com" `
  --apply
```

Sterneffekt im Administrationsbereich ändern:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --area page `
  --section adminSettings `
  --set starsEffect=true `
  --apply
```

Sprache der IP-Geolokalisierung ändern:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --area others `
  --section ipGeolocation `
  --set language="en" `
  --apply
```

Beim lokalen Föderationsknoten können normale Felder wie Aktivierung, Synchronisationsverzeichnis oder Einladungscode gelesen und geändert werden. Die Domainbestätigung läuft nicht über API Token. Wenn der Administrationsbereich meldet, dass die lokale Knotendomain nicht zur aktuellen Zugriffsdomain passt, muss die Bestätigung in der Weboberfläche abgeschlossen werden.

## Föderationsbeziehungen

Das Föderationsskript verwaltet den lokalen Knotenstatus, die Knoten, denen du beigetreten bist, die Knoten, die deinem Knoten beigetreten sind, Nachrichten, Beitrittsanfragen, erneute Anfragen ohne bestehende Beziehung, Annahme, Ablehnung und leichte Beziehungsaktionen ohne Indexbereinigung.

Indexaktualisierung, Löschung von Föderationsindizes und Bestätigung von Domainänderungen hängen vom vollständigen Ablauf in der Weboberfläche ab. Das Skript behandelt diese schweren Operationen nicht.

### Grenze zwischen leichten und schweren Aktionen

| Aktion | Unterstützung im Skript | Beschreibung |
| --- | --- | --- |
| Lokalen Knotenstatus anzeigen und Beziehungen auflisten | Unterstützt | Liest nur Beziehungsdatensätze |
| Nachrichten lesen und senden | Unterstützt | Liest oder schreibt Beziehungsnachrichten |
| Beitritt zu anderem Knoten beantragen | Unterstützt | Nutzt einen Einladungslink |
| Beziehung ohne Datensatz erneut beantragen | Unterstützt | Nur für `outgoing`-Karten mit `lastResult=none`; benötigt 6-stelligen Einladungscode |
| Ausstehende `outgoing`-Anfrage abbrechen | Unterstützt | Bricht nur eine wartende Anfrage ab |
| `incoming`-Anfrage annehmen oder ablehnen | Unterstützt | Behandelt Anfragen von Knoten, die deinem Knoten beitreten möchten |
| Akzeptierte `incoming`-Beziehung entfernen | Unterstützt | Aktualisiert den eingehenden Datensatz und benachrichtigt die andere Seite |
| Terminalen `incoming`-Datensatz löschen | Unterstützt | Löscht nur terminale eingehende Datensätze |
| Akzeptiertes `outgoing`-Abonnement kündigen | Nur in der Weboberfläche | Benötigt möglicherweise die Bereinigung des lokalen Föderationsindex |
| Terminalen `outgoing`-Datensatz löschen | Nur in der Weboberfläche | Kann zuerst Indexbereinigung erfordern |
| Domainänderung bestätigen oder abbrechen | Nur in der Weboberfläche | Benötigt Bestätigung der aktuellen Domain und Behandlung der Indexbeziehungen |
| Indizes veröffentlichen, abrufen oder stapelweise löschen | Nur in der Weboberfläche | Dient der stapelweiser Verarbeitung in der Weboberfläche |

### Föderationsparameter

| Parameter | Beschreibung |
| --- | --- |
| `--status` | Zeigt lokalen Knotenstatus sowie `outgoing`- und `incoming`-Beziehungen |
| `--list` | Listet Föderationsbeziehungen |
| `--chat` | Liest zwischengespeicherte Nachrichten einer Beziehung |
| `--send-message` | Sendet eine Nachricht an eine bestehende Beziehung |
| `--join` | Beantragt Beitritt über Einladungslink |
| `--reapply` | Beantragt erneut, wenn keine Beziehung besteht; benötigt 6-stelligen Code |
| `--accept` | Nimmt eine `incoming`-Anfrage an |
| `--deny` | Lehnt eine `incoming`-Anfrage ab |
| `--cancel` | Bricht eine ausstehende `outgoing`-Anfrage ab oder entfernt eine akzeptierte `incoming`-Beziehung |
| `--delete` | Löscht einen terminalen `incoming`-Datensatz |
| `--direction <outgoing\|incoming\|all>` | Richtung; `outgoing` sind Knoten, denen du beigetreten bist, `incoming` sind Knoten, die deinem Knoten beigetreten sind |
| `--domain <url>` | Domain des Beziehungsknotens |
| `--invite-link <url>` | Einladungslink des anderen Knotens |
| `--invite-code <code>` | 6-stelliger Code für erneute Anfragen |
| `--text <message>` | Nachrichtentext |
| `--apply` | Speichert die Änderung wirklich |

### Beispiele für Föderation

Lokalen Knotenstatus und beide Beziehungslisten anzeigen:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --status
```

Nur Knoten anzeigen, denen du beigetreten bist:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --list `
  --direction outgoing
```

Nur Knoten anzeigen, die deinem Knoten beigetreten sind:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --list `
  --direction incoming
```

Beitritt über Einladungslink beantragen. Zuerst ohne `--apply` ausführen:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --join `
  --invite-link "https://peer-domain/federation/invite/abcdef"
```

Nach Prüfung speichern:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --join `
  --invite-link "https://peer-domain/federation/invite/abcdef" `
  --apply
```

Beziehung ohne Datensatz erneut beantragen:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --reapply `
  --domain "https://peer-domain" `
  --invite-code "abc123" `
  --apply
```

`incoming`-Anfrage annehmen:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --accept `
  --domain "https://peer-domain" `
  --apply
```

`incoming`-Anfrage ablehnen:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --deny `
  --domain "https://peer-domain" `
  --apply
```

Nachricht an bestehende Beziehung senden:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --send-message `
  --direction outgoing `
  --domain "https://peer-domain" `
  --text "Hello, this is a test message." `
  --apply
```

Ausstehende `outgoing`-Anfrage abbrechen:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --cancel `
  --direction outgoing `
  --domain "https://peer-domain" `
  --apply
```

Akzeptierte `incoming`-Beziehung entfernen:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --cancel `
  --direction incoming `
  --domain "https://peer-domain" `
  --apply
```

Terminalen `incoming`-Datensatz löschen:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --delete `
  --direction incoming `
  --domain "https://peer-domain" `
  --apply
```

Akzeptierte `outgoing`-Abonnements kündigen und `outgoing`-Datensätze löschen muss in der Weboberfläche-Adminbereich erfolgen, weil zuvor eventuell der lokale Föderationsindex bereinigt werden muss.

### Domain stimmt nicht überein

Wenn die gespeicherte Domain des lokalen Knotens nicht zur ausstehenden Domain in der Beziehung passt, meldet das Skript einen Fehler mit `currentDomain` und `pendingDomain`. Dieser Fall muss im Administrationsbereich der Weboberfläche behandelt werden, weil Domainänderungen auch die Bereinigung und Bestätigung ausgehender Indizes erfordern.

Wenn eine Beitrittsanfrage `FEDERATION_NODE_DOMAIN_MISMATCH` zurückgibt, passt die Domain im Einladungslink nicht zur gespeicherten Domain des entfernten Knotens. Die Antwort enthält `currentOrigin` und `detectedOrigin`. Nutze die bestätigte Domain des anderen Knotens oder bitte ihn, die Domain zuerst im Administrationsbereich der Weboberfläche zu bestätigen.

## Häufige Fragen

### Änderung wurde nicht übernommen

Schreibbefehle laufen standardmäßig als Vorschau. Füge nach Prüfung `--apply` hinzu, um wirklich zu speichern.

### Welche Felder können geändert werden

Für Hochladeeinstellungen zuerst mit `--get` die Struktur des Unterkanals prüfen. Für Sicherheits-, Seiten- und weitere Einstellungen zeigt `--list-sections` alle editierbaren Bereiche, Abschnitte und Felder.

### Ergebnis in anderem Programm verwenden

Nutze `--output json` oder `--save-response result.json`. Das Programm kann die gespeicherte JSON-Datei direkt lesen.



