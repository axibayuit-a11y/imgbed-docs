# Redundante Sicherung und Wechsel der Lesequelle

Eine redundante Sicherung speichert eine zusätzliche Kopie einer bereits hochgeladenen Datei.

Sowohl die primäre Datei als auch die Sicherungsdatei können als Lesequellen verwendet werden. Besucher sehen normalerweise keinen Unterschied. Der einzige Unterschied ist, welcher Speicherkanal die Datei bereitstellt.

## Was die redundante Sicherung kann

| Funktion | Beschreibung |
| --- | --- |
| Zusätzliche Kopie speichern | Sichert Dateien in einem anderen Hochladekanal, um das Risiko eines Ausfalls eines einzelnen Kanals zu verringern. |
| Lesequelle wechseln | Nach erfolgreicher Sicherung zwischen primärem Kanal und Sicherungskanal für Dateizugriffe wechseln. |
| Sicherung einzelner Dateien | Eine Datei von ihrer Detailseite aus sichern. |
| Stapelsicherung | Mehrere Dateien im Adminbereich auswählen und gemeinsam sichern. |
| Globale redundante Sicherung | Dateien unter Weitere Einstellungen ordnerweise sichern. |

## Einstieg für redundante Sicherung

Öffnen Sie:

```text
System Settings -> Other Settings -> Redundant Backup
```

![Redundante Sicherung](../../image/other/冗余备份截图.png)

Dieser Einstieg eignet sich am besten, um Sicherungen für einen Ordner oder für alle Dateien gesammelt hinzuzufügen.

Der Sicherungskanal kann manuell ausgewählt werden. Alternativ können Sie die automatische Umschaltung wählen und ImgBed einen passenden Sicherungskanal finden lassen.

## Sicherung aus den Dateidetails

Öffnen Sie eine Dateidetailseite im Adminbereich und klicken Sie auf Sicherung.

![Sicherung in den Dateidetails](../../image/other/文件详情里文件备份.png)

Dies eignet sich am besten, um eine wichtige Datei bei Bedarf zu sichern.

Nach erfolgreicher Sicherung zeigt die Dateidetailseite die verfügbaren Lesequellen an.

## Stapelsicherung nach Auswahl

Wählen Sie im Adminbereich mehrere Dateien aus und führen Sie eine Stapelsicherung aus.

![Stapelsicherung](../../image/other/批量备份截图.png)

Dies eignet sich am besten, um eine Gruppe von Dateien zu verarbeiten.

Sicherung per Auswahl, Sicherung aus Dateidetails und redundante Sicherung unter Weitere Einstellungen verwenden dasselbe Sicherungssystem. Es sind nur unterschiedliche Einstiegspunkte.

## Lesequelle nach der Sicherung wechseln

Nach Abschluss der Sicherung können Sie auf der Dateidetailseite die Lesequelle wechseln:

| Lesequelle | Beschreibung |
| --- | --- |
| Primärer Kanal | Liest aus dem ursprünglichen Hochladekanal. |
| Sicherungskanal | Liest aus dem Sicherungskanal. |

![Lesequelle nach Sicherung wechseln](../../image/other/备份成功切换读取源.png)

Besucher müssen nicht wissen, ob die Datei vom primären oder vom Sicherungskanal bereitgestellt wird.

Die gewählte Lesequelle wird zur bevorzugten Quelle für spätere Dateizugriffe.

## Wann Sicherung übersprungen wird

Die folgenden Fälle werden bei der Sicherung übersprungen. Es handelt sich nicht um Fehler.

| Fall | Warum übersprungen wird |
| --- | --- |
| Bereits gesichert | Eine Datei, die bereits eine Sicherung hat, wird nicht erneut gesichert. |
| Primär- und Sicherungskanal sind identisch | Eine Sicherung muss in einem anderen Kanal gespeichert werden, damit sie sinnvoll ist. |
| Kein verwendbarer Sicherungskanal | Es ist kein geeigneter alternativer Kanal verfügbar. |

Kurz gesagt: Sicherungen müssen in einem anderen Kanal gespeichert werden, und bereits gesicherte Dateien verbrauchen nicht noch einmal zusätzlichen Speicherplatz.

## Primärer Kanal vs. Sicherungskanal

| Name | Bedeutung |
| --- | --- |
| Primärer Kanal | Der Kanal, der beim ersten Hochladen der Datei verwendet wurde. |
| Sicherungskanal | Der Kanal, der die redundante Kopie speichert. |
| Primäre Lesequelle | Die Datei wird aktuell aus dem primären Kanal gelesen. |
| Sicherungs-Lesequelle | Die Datei wird aktuell aus dem Sicherungskanal gelesen. |

Primäre und Sicherungs-Lesequellen verhalten sich für Nutzer gleich.

Solange die Sicherungsdatei verfügbar ist, funktionieren Bilder, Videos und Download-Links nach dem Wechsel zur Sicherungs-Lesequelle weiterhin.

## Was beim Löschen einer Datei passiert

Wenn eine Datei gelöscht wird, löscht ImgBed sowohl die primäre Datei als auch die Sicherungsdatei.
