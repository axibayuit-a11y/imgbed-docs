# Dropbox-Kanal hinzufügen

## Was Sie vorher benötigen

| Voraussetzung | Wofür sie gebraucht wird |
| --- | --- |
| Dropbox-Konto | Zum Anmelden und Autorisieren der App |
| Dropbox-App | Erstellt `App Key` und `App Secret` |
| Ihre ImgBed-Domain | Für die OAuth-Redirect-URI |
| Freier Dropbox-Speicher | Dient als eigentlicher Speicherort |

## Einrichtung

### Schritt 1: Dropbox-App erstellen

1. Öffnen Sie die Dropbox App Console:

```text
https://www.dropbox.com/developers/apps
```

2. Erstellen Sie eine neue App.
3. Wählen Sie als Zugriffstyp:

```text
App folder
```

4. Geben Sie der App einen Namen, den Sie wiedererkennen, z. B. `imgbed-app`.
5. Öffnen Sie nach dem Erstellen die Detailseite der App.

Empfohlener Zugriffstyp:

| Zugriffstyp | Empfehlung |
| --- | --- |
| `App folder` | Empfohlen. Das passt dazu, wie ImgBed Dateien ablegt. |
| `Full Dropbox` | Nicht empfohlen. ImgBed braucht keinen Vollzugriff auf das ganze Konto. |

![Dropbox-App erstellen](../../image/upload/dropbox/开发者创建应用.png)

### Schritt 2: Redirect URI eintragen

Suchen Sie auf der Detailseite der Dropbox-App die OAuth- oder Redirect-URI-Einstellungen und fügen Sie hinzu:

```text
https://your-domain.com/api/oauth/dropbox/callback
```

Wenn Sie den Adminbereich über mehrere Domains nutzen, tragen Sie jede passende Callback-URL ein.

![Redirect URI konfigurieren](../../image/upload/dropbox/配置回调地址.png)

### Schritt 3: App-Berechtigungen konfigurieren

Öffnen Sie den Tab `Permissions` und aktivieren Sie mindestens diese Scopes:

| Scope | Erforderlich | Zweck |
| --- | --- | --- |
| `account_info.read` | Erforderlich | Liest Konto- und Quoteninformationen |
| `files.metadata.read` | Erforderlich | Liest Datei- und Ordnermetadaten für Pfadprüfungen |
| `files.metadata.write` | Erforderlich | Erstellt Ordner und schreibt Metadaten |
| `files.content.write` | Erforderlich | Lädt Dateien hoch. Ohne diesen Scope erscheint `required scope 'files.content.write'`. |
| `files.content.read` | Empfohlen | Erlaubt Download, Vorschau und temporäre Dateilinks |

Klicken Sie nach dem Auswählen unten auf `Submit`.

![Berechtigungen hinzufügen](../../image/upload/dropbox/添加对应的权限.png)

Wichtig:

| Situation | Was zu tun ist |
| --- | --- |
| Scopes wurden geändert | Starten Sie die Token-Autorisierung erneut und holen Sie ein neues `Refresh Token`. |
| Keine erneute Autorisierung | Das alte Token bekommt die neuen Rechte nicht automatisch; Uploads können weiter fehlschlagen. |

### Schritt 4: App-Zugangsdaten kopieren

Speichern Sie diese beiden Werte von der Dropbox-App-Seite:

| Dropbox-Feld | ImgBed-Feld |
| --- | --- |
| `App key` | `App Key` |
| `App secret` | `App Secret` |

### Schritt 5: Dropbox-Kanal ausfüllen

Wählen Sie in den Upload-Einstellungen `Dropbox` und füllen Sie die Felder aus:

| ImgBed-Feld | Eingabe |
| --- | --- |
| Kanalname | Ein gut erkennbarer Name, z. B. `Main Dropbox` |
| App Key | Der Dropbox-`App key` |
| App Secret | Das Dropbox-`App secret` |
| Refresh Token | Erst einmal leer lassen |
| Stammverzeichnis | Optional. Standard ist `imgbed`. |
| Notiz | Optional |

![Token abrufen](../../image/upload/dropbox/获取令牌.png)

### Schritt 6: Refresh Token abrufen

1. Klicken Sie in ImgBed auf `Get Token`.
2. Melden Sie sich mit dem Dropbox-Konto an, das Sie verbinden möchten.
3. Bestätigen Sie die Autorisierung.
4. Die Callback-Seite zeigt ein `Refresh Token`.
5. Kopieren Sie es.
6. Kehren Sie zu ImgBed zurück und fügen Sie es in das Feld `Refresh Token` ein.

![Token kopieren](../../image/upload/dropbox/复制令牌.png)

## Prüfung

| Prüfung | Erwartetes Ergebnis |
| --- | --- |
| Kanalkarte | Der Dropbox-Kanal erscheint nach dem Speichern. |
| Kanalschalter | Der Kanal lässt sich aktivieren. |
| Token gespeichert | Die Detailseite zeigt, dass das `Refresh Token` gespeichert wurde. |
| Testupload | Ein Testbild erscheint im App-Ordner von Dropbox. |

Wenn Quotenlimits aktiviert sind, klicken Sie auf die Quotenabfrage. Nach erfolgreicher Abfrage zeigt die Kanalkarte belegten Speicher, Gesamtspeicher und die letzte Aktualisierung an.

![Quotenabfrage erfolgreich](../../image/upload/dropbox/查询额度成功.png)

## Fehlersuche

| Problem | Lösung |
| --- | --- |
| ImgBed meldet, dass die Konfiguration unvollständig ist | Prüfen Sie, ob `App Key`, `App Secret` und `Refresh Token` alle ausgefüllt sind. |
| Autorisierung klappt, aber es erscheint kein `Refresh Token` | Klicken Sie erneut auf `Get Token` und achten Sie darauf, dass der Offline-Autorisierungsablauf verwendet wird. |
| Upload schlägt mit `required scope 'files.content.write'` fehl | Aktivieren Sie `files.content.write`, klicken Sie auf `Submit` und holen Sie danach ein neues `Refresh Token`. |
| Callback schlägt fehl | Prüfen Sie, ob die Redirect URI `https://your-domain.com/api/oauth/dropbox/callback` lautet. |
| Dateien werden nicht gefunden | Prüfen Sie, ob die Dropbox-App im Modus `App folder` erstellt wurde. |

## Kurzablauf

```text
Open Dropbox App Console
-> Create an app
-> Choose App folder access
-> Add https://your-domain.com/api/oauth/dropbox/callback
-> Enable account_info.read / files.metadata.read / files.metadata.write / files.content.write
-> Optionally enable files.content.read
-> Click Submit
-> Copy App Key and App Secret
-> Fill them into ImgBed
-> Click Get Token
-> Copy the Refresh Token from the callback page
-> Paste it back into ImgBed and save
```

## Referenzen

1. Dropbox App Console: https://www.dropbox.com/developers/apps
2. Dropbox OAuth Guide: https://developers.dropbox.com/oauth-guide
3. Dropbox Developer Guide: https://www.dropbox.com/developers/reference/developer-guide
