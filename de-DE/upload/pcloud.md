# pCloud-Kanal hinzufügen

## Geeignet für

- Du hast ein pCloud-Konto und möchtest ImgBed-Bilder dort speichern.
- Es ist für dich in Ordnung, E-Mail-Adresse und Passwort deines pCloud-Kontos als Kanalzugangsdaten zu verwenden.

## Was du vorher brauchst

| Voraussetzung | Wofür sie gebraucht wird |
| --- | --- |
| pCloud-Konto-E-Mail | Für die Anmeldung an der pCloud API |
| pCloud-Passwort | Für die Anmeldung an der pCloud API |
| API-Host | Standard ist `api.pcloud.com`. EU-Konten können `eapi.pcloud.com` verwenden. |
| Speicherverzeichnis | Ordner für Dateien. Standard ist `imgbed`. |

## Wo hinzufügen

1. Öffne die Systemeinstellungen.
2. Öffne die Upload-Einstellungen.
3. Klicke oben rechts auf `Kanal hinzufügen`.
4. Wähle `pCloud`.

## Feldübersicht

| Feld | Zweck | Erforderlich |
| --- | --- | --- |
| Kanalname | Erkennbarer Name für diesen pCloud-Kanal, z. B. `Personal pCloud` | Ja |
| Konto-E-Mail | Deine pCloud-Anmelde-E-Mail | Ja |
| Passwort | Dein pCloud-Passwort | Ja |
| API-Host | pCloud-API-Host. Standard ist `api.pcloud.com`. | Nein |
| Speicherverzeichnis | Ordner zum Speichern der Dateien. Standard ist `imgbed`. | Nein |

Wähle den API-Host passend zur Kontoregion:

| Kontoregion | API-Host |
| --- | --- |
| Standard / USA | `api.pcloud.com` |
| Europa | `eapi.pcloud.com` |

## Einrichtungsschritte

1. Öffne die Upload-Einstellungen.
2. Klicke auf `Kanal hinzufügen`.
3. Wähle `pCloud`.
4. Gib einen Kanalnamen ein, den du wiedererkennst.
5. Trage die E-Mail-Adresse deines pCloud-Kontos ein.
6. Trage dein pCloud-Passwort ein.
7. Lasse den API-Host bei `api.pcloud.com` oder verwende `eapi.pcloud.com` für EU-Konten.
8. Lasse das Speicherverzeichnis bei `imgbed` oder ändere es auf den gewünschten Ordner.
9. Speichere den Kanal.

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

pCloud OAuth2 ist standardmäßig nicht zur Selbstbedienung freigeschaltet. Du musst pCloud per E-Mail bitten, es für dich zu aktivieren.

Der aktuelle pCloud-OAuth2-Ablauf unterstützt außerdem nicht den kurzlebigen Upload-Link-Ablauf, den ImgBed braucht. Deshalb nutzt dieser Kanal stattdessen Anmeldung per Konto-E-Mail und Passwort.

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
pCloud-E-Mail und Passwort vorbereiten
-> Upload-Einstellungen öffnen
-> Kanal hinzufügen
-> pCloud wählen
-> Kanalname / E-Mail / Passwort eintragen
-> API-Host bei api.pcloud.com lassen, außer dein Konto liegt in Europa
-> Speicherverzeichnis bei imgbed lassen, sofern du keinen anderen Ordner brauchst
-> Speichern
-> Quote abfragen
-> Testbild hochladen
```
