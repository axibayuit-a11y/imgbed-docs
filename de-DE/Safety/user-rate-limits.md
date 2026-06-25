# Upload-Limits für Benutzer

Upload-Limits für Benutzer steuern, wie oft normale Benutzer oder Besucher Dateien von der Startseite hochladen können. Das hilft, Missbrauch öffentlicher Upload-Seiten zu verhindern.

Diese Funktion betrifft nur Uploads von der Startseite. Administrator-Uploads und Uploads mit API Tokens werden durch Benutzerlimits nicht eingeschränkt.

## Wo Sie es konfigurieren

Öffnen Sie den Administrationsbereich und gehen Sie zu:

```text
System Settings -> Security Settings -> Upload Management -> User Rate Limits
```

![Einstellungen für Benutzer-Upload-Limits](../../image/other/用户频控截图.png)

## Limits aktivieren

Nachdem "Limits aktivieren" eingeschaltet wurde, verfolgt ImgBed aktuelle Uploads anhand der IP-Adresse des Uploaders.

Standardwerte:

| Einstellung | Standard | Beschreibung |
| --- | --- | --- |
| Erkennungsfenster | 1,5 Stunden | Wie weit zurück Upload-Einträge gezählt werden. |
| Maximale Dateianzahl | 20 | Maximale Anzahl von Dateien, die im Erkennungsfenster erlaubt ist. |
| Größenlimit für eine Datei | 20 MB | Maximale Größe einer einzelnen Datei. |
| Limit für gesamte Upload-Größe | 200 MB | Maximale gesamte Upload-Größe im Erkennungsfenster. |

Bei einem Fenster von 1,5 Stunden, 20 Dateien, 20 MB pro Datei und 200 MB insgesamt werden Uploads von derselben IP zum Beispiel blockiert, sobald ein konfiguriertes Limit überschritten wird.

## Dateitypen ausschließen

"Ausgeschlossene Upload-Dateitypen" blockiert normale Benutzer oder Besucher daran, ausgewählte Dateikategorien hochzuladen.

Verfügbare Kategorien:

| Typ | Beschreibung |
| --- | --- |
| Bilder | jpg, png, webp, gif und ähnliche Bilddateien |
| Videos | mp4, webm, mov und ähnliche Videodateien |
| Audio | mp3, flac, wav und ähnliche Audiodateien |
| Dokumente | pdf, txt, md, docx und ähnliche Dokumentdateien |
| Andere | Dateien außerhalb der oben genannten Kategorien, zum Beispiel zip, rar, exe, apk |

Standardmäßig ist kein Typ ausgewählt, was bedeutet, dass er erlaubt ist.

Wenn ein Typ angeklickt und hervorgehoben wird, ist dieser Typ blockiert.

Wenn "Andere" ausgewählt ist, werden Besucher beim Hochladen von zip- oder rar-Dateien blockiert und darüber informiert, dass dieser Dateityp nicht unterstützt wird.

## Blockiermeldungen

Wenn ein Limit ausgelöst wird, sehen Benutzer eine passende Meldung:

![Meldung zu zu häufigem Upload](../../image/other/频繁报错提示.png)

| Situation | Bedeutung der Meldung |
| --- | --- |
| Einzelne Datei zu groß | Die Datei ist zu groß und sollte vor dem Upload komprimiert werden. |
| Dateityp blockiert | Dieser Dateityp wird nicht unterstützt. Entfernen Sie ihn und versuchen Sie es erneut. |
| Uploads zu häufig | Aktuelle Uploads sind zu häufig, mit angezeigter Zeit bis zum erneuten Versuch. |
| Gesamtgröße zu hoch | Die aktuelle gesamte Upload-Größe ist zu hoch, mit angezeigter Zeit bis zum erneuten Versuch. |

## Wann Sie es aktivieren sollten

Aktivieren Sie Benutzer-Upload-Limits, wenn Ihre Upload-Startseite öffentlich zugänglich ist.

Häufige Gründe:

- Sie sorgen sich über skriptgesteuerte Massen-Uploads.
- Sie möchten große Besucher-Uploads begrenzen.
- Normale Benutzer sollen nur Bilder hochladen, keine Archive oder Installationsdateien.
- Öffentlicher Upload soll verfügbar bleiben, während die Ressourcennutzung kontrolliert wird.

Wenn die Website nur für Sie selbst gedacht ist oder nur Administratoren hochladen können, können Sie diese Funktion deaktiviert lassen.
