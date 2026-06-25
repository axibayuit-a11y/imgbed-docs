# pCloud-Kanal hinzufügen

## Geeignet für

- Sie haben ein pCloud-Konto und möchten ImgBed-Bilder dort speichern.
- Es ist für sich in Ordnung, E-Mail-Adresse und Passwort Ihres pCloud-Kontos als Kanalzugangsdaten zu verwenden.

## Was Sie vorher benötigen

| Voraussetzung | Wofür sie gebraucht wird |
| --- | --- |
| pCloud-Konto-E-Mail | Für die Anmeldung an der pCloud API |
| pCloud-Passwort | Für die Anmeldung an der pCloud API |
| API-Host | Standard ist `api.pcloud.com`. EU-Konten können `eapi.pcloud.com` verwenden. |
| Speicherverzeichnis | Ordner für Dateien. Standard ist `imgbed`. |

## Wo hinzufügen

1. Öffnen Sie die Systemeinstellungen.
2. Öffnen Sie die Upload-Einstellungen.
3. Klicken Sie oben rechts auf `Kanal hinzufügen`.
4. Wählen Sie `pCloud`.

## Feldübersicht

| Feld | Zweck | Erforderlich |
| --- | --- | --- |
| Kanalname | Erkennbarer Name für diesen pCloud-Kanal, z. B. `Personal pCloud` | Ja |
| Konto-E-Mail | Ihre pCloud-Anmelde-E-Mail | Ja |
| Passwort | Ihr pCloud-Passwort | Ja |
| API-Host | pCloud-API-Host. Standard ist `api.pcloud.com`. | Nein |
| Speicherverzeichnis | Ordner zum Speichern der Dateien. Standard ist `imgbed`. | Nein |

Wählen Sie den API-Host passend zur Kontoregion:

| Kontoregion | API-Host |
| --- | --- |
| Standard / USA | `api.pcloud.com` |
| Europa | `eapi.pcloud.com` |

## Einrichtungsschritte

1. Öffnen Sie die Upload-Einstellungen.
2. Klicken Sie auf `Kanal hinzufügen`.
3. Wählen Sie `pCloud`.
4. Geben Sie einen Kanalnamen ein, den Sie wiedererkennen.
5. Tragen Sie die E-Mail-Adresse Ihres pCloud-Kontos ein.
6. Tragen Sie Ihr pCloud-Passwort ein.
7. Lassen Sie den API-Host bei `api.pcloud.com` oder verwenden Sie `eapi.pcloud.com` für EU-Konten.
8. Lassen Sie das Speicherverzeichnis bei `imgbed` oder ändern Sie es auf den gewünschten Ordner.
9. Speichern Sie den Kanal.

![Kanal konfigurieren](../../image/upload/pcloud/配置渠道.png)

## Prüfung

| Prüfung | Erwartetes Ergebnis |
| --- | --- |
| Kanalkarte | Die pCloud-Kanalkarte erscheint nach dem Speichern. |
| Kanalschalter | Der Schalter auf der Karte bleibt aktiviert. |
| E-Mail-Anzeige | Die Karte zeigt die verbundene pCloud-E-Mail. |
| Quotenabfrage | Nach erfolgreicher Abfrage werden belegter und gesamter Speicher angezeigt. |
| Testupload | Ein Testbild erscheint im konfigurierten pCloud-Speicherverzeichnis. |

![Quotenabfrage erfolgreich](../../image/upload/pcloud/查询额度成功.png)

## Fehlersuche

### Warum kein OAuth2?

pCloud OAuth2 ist standardmäßig nicht zur Selbstbedienung freigeschaltet. Sie müssen pCloud per E-Mail bitten, es für sich zu aktivieren.

Der aktuelle pCloud-OAuth2-Ablauf unterstützt außerdem nicht den kurzlebigen Upload-Link-Ablauf, den ImgBed braucht. Deshalb nutzen dieser Kanal stattdessen Anmeldung per Konto-E-Mail und Passwort.

### Welchen API-Host soll ich verwenden?

Standard:

```text
api.pcloud.com
```

Für EU-Konten:

```text
eapi.pcloud.com
```

## Kurzablauf

```text
Prepare your pCloud email and password
-> Open Upload Settings
-> Add Channel
-> Choose pCloud
-> Fill channel name / email / password
-> Keep API host as api.pcloud.com unless your account is in Europe
-> Keep storage directory as imgbed unless you need another folder
-> Save
-> Query quota
-> Upload a test image
```
