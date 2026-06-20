# Redundantes Backup und Lesequelle wechseln

Das redundante Backup speichert eine zusätzliche Kopie bereits hochgeladener Dateien.

Für Besucher sehen Hauptdatei und Backup gleich aus. Der Unterschied liegt nur darin, aus welchem Speicherkanal die Datei gelesen wird.

## Möglichkeiten

| Funktion | Beschreibung |
| --- | --- |
| Zusätzliche Kopie speichern | Datei in einen anderen Kanal kopieren und Abhängigkeit von einem Speicher reduzieren |
| Lesequelle wechseln | Zwischen Hauptkanal und Backup-Kanal wechseln |
| Einzeldatei sichern | Backup aus der Dateidetailansicht erstellen |
| Stapel-Backup | Mehrere Dateien im Adminbereich auswählen und zusammen sichern |
| Globale Ergänzung | Fehlende Backups ordnerweise unter Weitere Einstellungen ergänzen |

## Wo einstellen

```text
Systemeinstellungen -> Weitere Einstellungen -> Redundantes Backup
```

![Redundantes Backup](../../image/other/冗余备份截图.png)

Hier kannst du Backups für einen bestimmten Ordner oder für alle Dateien ergänzen. Der Backup-Kanal kann manuell gewählt oder automatisch von ImgBed ausgewählt werden.

## Backup aus der Dateiansicht

Öffne im Adminbereich die Details einer Datei und starte dort das Backup.

![Backup in Dateidetails](../../image/other/文件详情里文件备份.png)

Das ist praktisch für einzelne wichtige Dateien. Nach erfolgreichem Backup zeigt die Detailansicht die verfügbaren Lesequellen.

## Backup per Auswahl

Im Adminbereich kannst du mehrere Dateien auswählen und ein Stapel-Backup starten.

![Stapel-Backup](../../image/other/批量备份截图.png)

Backup aus Details, Backup per Auswahl und redundantes Backup unter Weitere Einstellungen nutzen dieselbe Logik; nur der Einstieg ist anders.

## Lesequelle wechseln

| Quelle | Beschreibung |
| --- | --- |
| Hauptkanal | Liest aus dem ursprünglichen Upload-Kanal |
| Backup-Kanal | Liest aus dem Kanal, in dem die Kopie gespeichert wurde |

![Lesequelle wechseln](../../image/other/备份成功切换读取源.png)

Nach dem Wechsel funktionieren Bilder, Videos und Download-Links wie gewohnt mit der gewählten Quelle.

## Übersprungene Fälle

| Fall | Grund |
| --- | --- |
| Backup existiert bereits | Verhindert unnötige doppelte Speicherung |
| Haupt- und Backup-Kanal sind gleich | Kopie im selben Kanal bringt keine Redundanz |
| Kein Kanal verfügbar | Es wurde kein geeigneter anderer Kanal gefunden |

## Beim Löschen

Beim Löschen einer Datei entfernt ImgBed sowohl die Hauptdatei als auch die Backup-Kopie.
