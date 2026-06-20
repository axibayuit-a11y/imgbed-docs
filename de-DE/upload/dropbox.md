# Dropbox-Kanal hinzufügen

## Was du vorher brauchst

| Voraussetzung | Wofür sie gebraucht wird |
| --- | --- |
| Dropbox-Konto | Zum Anmelden und Autorisieren der App |
| Dropbox-App | Erstellt `App Key` und `App Secret` |
| Deine ImgBed-Domain | Für die OAuth-Redirect-URI |
| Freier Dropbox-Speicher | Dient als eigentlicher Speicherort |

## Einrichtung

### Schritt 1: Dropbox-App erstellen

1. Öffne die Dropbox App Console:

```text
https://www.dropbox.com/developers/apps
```

2. Erstelle eine neue App.
3. Wähle als Zugriffstyp:

```text
App folder
```

4. Gib der App einen Namen, den du wiedererkennst, z. B. `imgbed-app`.
5. Öffne nach dem Erstellen die Detailseite der App.

Empfohlener Zugriffstyp:

| Zugriffstyp | Empfehlung |
| --- | --- |
| `App folder` | Empfohlen. Das passt dazu, wie ImgBed Dateien ablegt. |
| `Full Dropbox` | Nicht empfohlen. ImgBed braucht keinen Vollzugriff auf das ganze Konto. |

![Dropbox-App erstellen](../../image/upload/dropbox/开发者创建应用.png)

### Schritt 2: Redirect URI eintragen

Suche auf der Detailseite der Dropbox-App die OAuth- oder Redirect-URI-Einstellungen und füge hinzu:

```text
https://your-domain.com/api/oauth/dropbox/callback
```

Wenn du den Adminbereich über mehrere Domains nutzt, trage jede passende Callback-URL ein.

![Redirect URI konfigurieren](../../image/upload/dropbox/配置回调地址.png)

### Schritt 3: App-Berechtigungen konfigurieren

Öffne den Tab `Permissions` und aktiviere mindestens diese Scopes:

| Scope | Erforderlich | Zweck |
| --- | --- | --- |
| `account_info.read` | Erforderlich | Liest Konto- und Quoteninformationen |
| `files.metadata.read` | Erforderlich | Liest Datei- und Ordnermetadaten für Pfadprüfungen |
| `files.metadata.write` | Erforderlich | Erstellt Ordner und schreibt Metadaten |
| `files.content.write` | Erforderlich | Lädt Dateien hoch. Ohne diesen Scope erscheint `required scope 'files.content.write'`. |
| `files.content.read` | Empfohlen | Erlaubt Download, Vorschau und temporäre Dateilinks |

Klicke nach dem Auswählen unten auf `Submit`.

![Berechtigungen hinzufügen](../../image/upload/dropbox/添加对应的权限.png)

Wichtig:

| Situation | Was zu tun ist |
| --- | --- |
| Du hast Scopes geändert | Starte die Token-Autorisierung erneut und hole ein neues `Refresh Token`. |
| Du hast nicht erneut autorisiert | Das alte Token bekommt die neuen Rechte nicht automatisch; Uploads können weiter fehlschlagen. |

### Schritt 4: App-Zugangsdaten kopieren

Speichere diese beiden Werte von der Dropbox-App-Seite:

| Dropbox-Feld | ImgBed-Feld |
| --- | --- |
| `App key` | `App Key` |
| `App secret` | `App Secret` |

### Schritt 5: Dropbox-Kanal ausfüllen

Wähle in den Upload-Einstellungen `Dropbox` und fülle aus:

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

1. Klicke in ImgBed auf `Get Token`.
2. Melde dich mit dem Dropbox-Konto an, das du verbinden möchtest.
3. Bestätige die Autorisierung.
4. Die Callback-Seite zeigt ein `Refresh Token`.
5. Kopiere es.
6. Kehre zu ImgBed zurück und füge es in das Feld `Refresh Token` ein.

![Token kopieren](../../image/upload/dropbox/复制令牌.png)

## Prüfung

| Prüfung | Erwartetes Ergebnis |
| --- | --- |
| Kanalkarte | Der Dropbox-Kanal erscheint nach dem Speichern. |
| Kanalschalter | Der Kanal lässt sich aktivieren. |
| Token gespeichert | Die Detailseite zeigt, dass das `Refresh Token` gespeichert wurde. |
| Testupload | Ein Testbild erscheint im App-Ordner von Dropbox. |

Wenn Quotenlimits aktiviert sind, klicke auf die Quotenabfrage. Nach erfolgreicher Abfrage zeigt die Kanalkarte belegten Speicher, Gesamtspeicher und die letzte Aktualisierung an.

![Quotenabfrage erfolgreich](../../image/upload/dropbox/查询额度成功.png)

## Fehlersuche

| Problem | Lösung |
| --- | --- |
| ImgBed meldet, dass die Konfiguration unvollständig ist | Prüfe, ob `App Key`, `App Secret` und `Refresh Token` alle ausgefüllt sind. |
| Autorisierung klappt, aber es erscheint kein `Refresh Token` | Klicke erneut auf `Get Token` und achte darauf, dass der Offline-Autorisierungsablauf verwendet wird. |
| Upload schlägt mit `required scope 'files.content.write'` fehl | Aktiviere `files.content.write`, klicke auf `Submit` und hole danach ein neues `Refresh Token`. |
| Callback schlägt fehl | Prüfe, ob die Redirect URI `https://your-domain.com/api/oauth/dropbox/callback` lautet. |
| Dateien werden nicht gefunden | Prüfe, ob die Dropbox-App im Modus `App folder` erstellt wurde. |

## Kurzablauf

```text
Dropbox App Console öffnen
-> App erstellen
-> Zugriffstyp App folder wählen
-> https://your-domain.com/api/oauth/dropbox/callback eintragen
-> account_info.read / files.metadata.read / files.metadata.write / files.content.write aktivieren
-> Optional files.content.read aktivieren
-> Submit klicken
-> App Key und App Secret kopieren
-> In ImgBed eintragen
-> Get Token klicken
-> Refresh Token von der Callback-Seite kopieren
-> In ImgBed einfügen und speichern
```

## Referenzen

1. Dropbox App Console: https://www.dropbox.com/developers/apps
2. Dropbox OAuth Guide: https://developers.dropbox.com/oauth-guide
3. Dropbox Developer Guide: https://www.dropbox.com/developers/reference/developer-guide
