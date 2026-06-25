# Yandex-Kanal hinzufügen

## Was Sie vorher benötigen

| Voraussetzung | Wofür sie gebraucht wird |
| --- | --- |
| Yandex-Konto | Zum Anmelden und Autorisieren von Yandex Disk |
| Yandex-OAuth-App | Erstellt `Client ID` und `Client Secret` |
| Ihre ImgBed-Domain | Für die OAuth-Redirect-URI |
| Freier Yandex-Disk-Speicher | Dient als eigentlicher Speicherort |

## Einrichtung

### Schritt 1: Yandex-OAuth-App erstellen

1. Öffnen Sie die Seite zum Erstellen einer Yandex-OAuth-App:

```text
https://oauth.yandex.com/client/new
```

2. Falls Sie zur Anmeldung weitergeleitet wirst, melden Sie sich zuerst mit Ihrem Yandex-Konto an.
3. Erstellen Sie eine neue App.
4. Geben Sie der App einen gut erkennbaren Namen, z. B. `imgbed-yandex`.
5. Suchen Sie die Callback- oder Redirect-URL-Einstellungen.
6. Tragen Sie ein:

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

Wenn Sie unter `Yandex ID API` zusätzlich diese Berechtigungen sehen, sind sie optional:

| Berechtigungstext | Empfehlung |
| --- | --- |
| `Access to username, first name and surname, gender` | Optional |
| `Access to email address` | Optional |

Upload, Download, Löschen und Quotenanzeige hängen hauptsächlich von den vier oben genannten Berechtigungen der `Yandex.Disk REST API` ab.

![Yandex-Disk-Berechtigungen konfigurieren](../../image/upload/yandex/dataaccess配置软盘权限.png)

### Schritt 3: App-Zugangsdaten kopieren

Nach dem Erstellen der App kopieren Sie:

| Yandex-Feld | ImgBed-Feld |
| --- | --- |
| `Client ID` | `Client ID` |
| `Client Secret` | `Client Secret` |

![Client ID und Secret notieren](../../image/upload/yandex/记录客户端id和secret.png)

### Schritt 4: Yandex-Kanal ausfüllen

Wählen Sie in den Upload-Einstellungen `Yandex` und füllen Sie die Felder aus:

| ImgBed-Feld | Eingabe |
| --- | --- |
| Kanalname | Ein gut erkennbarer Name, z. B. `Main Yandex` |
| Client ID | Die `Client ID` der Yandex-App |
| Client Secret | Das `Client Secret` der Yandex-App |
| Refresh Token | Erst einmal leer lassen |
| Stammverzeichnis | Optional. Standard ist `imgbed`. |

![Kanalkonfiguration bearbeiten](../../image/upload/yandex/编辑配置渠道.png)

### Schritt 5: Refresh Token abrufen

1. Klicken Sie in ImgBed auf `Get Token`.
2. Melden Sie sich mit dem Yandex-Konto an, das Sie verbinden möchten.
3. Bestätigen Sie die Autorisierung.
4. Die Callback-Seite zeigt ein `Refresh Token`.
5. Kopieren Sie es.
6. Kehren Sie zu ImgBed zurück und fügen Sie es in das Feld `Refresh Token` ein.

![Refresh Token nach Autorisierung kopieren](../../image/upload/yandex/授权后复制刷新令牌.png)

### Schritt 6: Kanal speichern

Speichern Sie den Kanal, sobald alle Felder ausgefüllt sind.

## Kurzablauf

```text
Open Yandex OAuth Console
-> Create an app
-> Add https://your-domain.com/api/oauth/yandex/callback
-> Confirm Yandex Disk permissions
-> Copy Client ID and Client Secret
-> Fill Client ID / Client Secret into ImgBed
-> Click Get Token
-> Copy the Refresh Token from the callback page
-> Paste it back into ImgBed and save
```

## Referenzen

1. Yandex-App registrieren: https://yandex.com/dev/id/doc/en/register-client
2. Autorisierungscode per URL abrufen: https://yandex.com/dev/id/doc/en/codes/code-url
3. Yandex OAuth Token Endpoint: https://yandex.com/dev/id/doc/en/tokens/token
