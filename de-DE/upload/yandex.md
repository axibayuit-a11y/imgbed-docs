# Yandex-Kanal hinzufügen

## Was du vorher brauchst

| Voraussetzung | Wofür sie gebraucht wird |
| --- | --- |
| Yandex-Konto | Zum Anmelden und Autorisieren von Yandex Disk |
| Yandex-OAuth-App | Erstellt `Client ID` und `Client Secret` |
| Deine ImgBed-Domain | Für die OAuth-Redirect-URI |
| Freier Yandex-Disk-Speicher | Dient als eigentlicher Speicherort |

## Einrichtung

### Schritt 1: Yandex-OAuth-App erstellen

1. Öffne die Seite zum Erstellen einer Yandex-OAuth-App:

```text
https://oauth.yandex.com/client/new
```

2. Falls du zur Anmeldung weitergeleitet wirst, melde dich zuerst mit deinem Yandex-Konto an.
3. Erstelle eine neue App.
4. Gib der App einen gut erkennbaren Namen, z. B. `imgbed-yandex`.
5. Suche die Callback- oder Redirect-URL-Einstellungen.
6. Trage ein:

```text
https://your-domain.com/api/oauth/yandex/callback
```

### Schritt 2: Berechtigungen prüfen

Für die aktuelle Yandex-Integration von ImgBed bleiben unter `Yandex.Disk REST API` diese vier Berechtigungen wichtig:

| Berechtigung | Zweck |
| --- | --- |
| `cloud_api:disk.app_folder` | Erlaubt ImgBed, Dateien im App-Ordner zu speichern |
| `cloud_api:disk.read` | Liest Dateien und Download-Links |
| `cloud_api:disk.write` | Lädt Dateien hoch, erstellt Ordner und löscht Dateien |
| `Access to information about Yandex.Disk` | Liest Speicherquote und belegten Speicher |

Wenn du unter `Yandex ID API` zusätzlich diese Berechtigungen siehst, sind sie optional:

| Berechtigungstext | Empfehlung |
| --- | --- |
| `Access to username, first name and surname, gender` | Optional |
| `Access to email address` | Optional |

Upload, Download, Löschen und Quotenanzeige hängen hauptsächlich von den vier oben genannten Berechtigungen der `Yandex.Disk REST API` ab.

![Yandex-Disk-Berechtigungen konfigurieren](../../image/upload/yandex/dataaccess配置软盘权限.png)

### Schritt 3: App-Zugangsdaten kopieren

Nach dem Erstellen der App kopierst du:

| Yandex-Feld | ImgBed-Feld |
| --- | --- |
| `Client ID` | `Client ID` |
| `Client Secret` | `Client Secret` |

![Client ID und Secret notieren](../../image/upload/yandex/记录客户端id和secret.png)

### Schritt 4: Yandex-Kanal ausfüllen

Wähle in den Upload-Einstellungen `Yandex` und fülle aus:

| ImgBed-Feld | Eingabe |
| --- | --- |
| Kanalname | Ein gut erkennbarer Name, z. B. `Main Yandex` |
| Client ID | Die `Client ID` der Yandex-App |
| Client Secret | Das `Client Secret` der Yandex-App |
| Refresh Token | Erst einmal leer lassen |
| Stammverzeichnis | Optional. Standard ist `imgbed`. |

![Kanalkonfiguration bearbeiten](../../image/upload/yandex/编辑配置渠道.png)

### Schritt 5: Refresh Token abrufen

1. Klicke in ImgBed auf `Get Token`.
2. Melde dich mit dem Yandex-Konto an, das du verbinden möchtest.
3. Bestätige die Autorisierung.
4. Die Callback-Seite zeigt ein `Refresh Token`.
5. Kopiere es.
6. Kehre zu ImgBed zurück und füge es in das Feld `Refresh Token` ein.

![Refresh Token nach Autorisierung kopieren](../../image/upload/yandex/授权后复制刷新令牌.png)

### Schritt 6: Kanal speichern

Speichere den Kanal, sobald alle Felder ausgefüllt sind.

## Kurzablauf

```text
Yandex OAuth Console öffnen
-> App erstellen
-> https://your-domain.com/api/oauth/yandex/callback eintragen
-> Yandex-Disk-Berechtigungen prüfen
-> Client ID und Client Secret kopieren
-> Client ID / Client Secret in ImgBed eintragen
-> Get Token klicken
-> Refresh Token von der Callback-Seite kopieren
-> In ImgBed einfügen und speichern
```

## Referenzen

1. Yandex-App registrieren: https://yandex.com/dev/id/doc/en/register-client
2. Autorisierungscode per URL abrufen: https://yandex.com/dev/id/doc/en/codes/code-url
3. Yandex OAuth Token Endpoint: https://yandex.com/dev/id/doc/en/tokens/token
