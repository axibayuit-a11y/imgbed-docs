# OCR

OCR extrahiert Text aus Bildern, Scans und Screenshots von Dokumenten.

Nach der Erkennung können Sie das Ergebnis kopieren, als `Markdown`, `PDF` oder `Word` exportieren oder mehrere Formate zusammen als Paket herunterladen.

## Was OCR leisten kann

| Funktion | Beschreibung |
| --- | --- |
| Bildtexterkennung | Extrahiert Text aus Bildern, Screenshots und Scans. |
| Erkennung von Dokumentlayout | Besser geeignet für Tabellen, Formeln, Stempel und gemischte Text-Bild-Layouts. |
| Mehrere Dienste | Unterstützt Baidu PaddleOCR, Microsoft Azure Vision und Google Vision. |
| Ergebnisse kopieren | Kopiert den erkannten Text nach der Verarbeitung. |
| Dateien exportieren | Exportiert `Markdown`, `PDF` und `Word`. |
| Stapelpaket | Nach der Erkennung mehrerer Dateien können Ergebnisse als Paket heruntergeladen werden. |

## OCR-Dienste zuerst konfigurieren

Öffnen Sie:

```text
System Settings -> Other Settings -> OCR
```

![IP-Geolokalisierung und OCR](../../image/other/ip定位和ocr文字识别.png)

Füllen Sie die Zugangsdaten für die Dienste aus, die Sie verwenden möchten:

| Dienst | Was einzutragen ist | Am besten geeignet für |
| --- | --- | --- |
| Baidu PaddleOCR | `PaddleOCR Token` | Empfohlene erste Wahl. Gut für Dokumente, Bilder, Tabellen und gemischte Layouts. |
| Microsoft Azure Vision | `Azure Vision Endpoint` und `Azure Vision API Key` | Nützlich, wenn Sie bereits Microsoft-Clouddienste verwenden. |
| Google Vision | `Google Vision API Key`. Dienstkonto-`JSON` wird nur für die Kontingentabfrage verwendet. | Nützlich, wenn Sie Google Cloud-Dienste verwenden. |

Speichern Sie nach dem Eintragen der Zugangsdaten.

Für erste Tests reicht es, nur einen Dienst zu konfigurieren. Sie benötigen nicht alle drei.

## Google Vision einrichten

Die Google-Einrichtung besteht aus zwei Teilen:

| Ziel | Anforderung |
| --- | --- |
| OCR verwenden | `Cloud Vision API` aktivieren und anschließend einen `API Key` erstellen. |
| Nutzung abfragen | Dienstkonto erstellen, `Monitoring Viewer` zuweisen und anschließend das Dienstkonto-`JSON` herunterladen. |

![Google API Key und Dienstkonto](../../image/other/谷歌api秘钥和服务账号截图.png)

### Google für OCR verwenden

1. Öffnen Sie Google Cloud Console.
2. Wechseln Sie zu `APIs & Services`.
3. Öffnen Sie `Library`, suchen Sie nach `Cloud Vision API` und aktivieren Sie sie.
4. Kehren Sie zu `Credentials` zurück.
5. Erstellen Sie einen `API Key`.
6. Öffnen Sie den API Key und kopieren Sie ihn.
7. Fügen Sie ihn in ImgBed unter `Google Vision API Key` ein.
8. Speichern Sie.

Danach können Sie Google Vision im OCR-Dialog auswählen.

### Google-Nutzung abfragen

Die Kontingentabfrage ist für die Erkennung nicht erforderlich.

Sie zeigt nur grob an, wie viele Google Vision-Aufrufe in den letzten 30 Tagen verwendet wurden.

1. Öffnen Sie in Google Cloud Console `IAM & Admin`.
2. Öffnen Sie `Service Accounts`.
3. Erstellen Sie ein Dienstkonto, zum Beispiel `vision-monitor`.
4. Weisen Sie ihm die Rolle `Monitoring Viewer` zu.
5. Öffnen Sie die Details des Dienstkontos und erstellen Sie einen Schlüssel.
6. Wählen Sie `JSON`.
7. Laden Sie die erzeugte JSON-Datei herunter.
8. Kehren Sie zu ImgBed zurück und importieren Sie sie unter Dienstkonto-`JSON` (optional).
9. Klicken Sie nach erfolgreichem Import auf Kontingentabfrage.

Nach dem Import zeigt ImgBed den Projektnamen an, zu dem das Dienstkonto gehört. Bei der Nutzungsabfrage liest ImgBed Google-Monitoring-Daten und zeigt die Aufrufzahl dieses Monats an.

Kurz gesagt:

| Element | Zweck |
| --- | --- |
| `Google Vision API Key` | Führt OCR-Erkennung aus. |
| Dienstkonto-`JSON` | Fragt ab, wie viele Google Vision-Aufrufe verwendet wurden. |
| Rolle `Monitoring Viewer` | Erlaubt dem Dienstkonto, Nutzungsdaten zu lesen. |

## Baidu PaddleOCR Token abrufen

Baidu PaddleOCR benötigt ein Zugriffstoken.

![PaddleOCR-Token abrufen](../../image/other/获取飞浆令牌.png)

Öffnen Sie auf der Baidu PaddleOCR-Seite das `API`-Aufruffenster, klicken Sie zum Abrufen eines Tokens und kopieren Sie es.

Kehren Sie zu ImgBed zurück, fügen Sie es in `PaddleOCR Token` ein und speichern Sie.

## Erkennung starten

Wählen Sie in der Dateiverwaltung ein Bild oder einen Dokument-Screenshot aus und klicken Sie auf `OCR`.

![OCR-Erkennung](../../image/other/ocr识别截图.png)

Wählen Sie im Dialog den Erkennungsdienst und das Modell aus.

Häufige PaddleOCR-Modellauswahlen:

| Modell | Am besten geeignet für |
| --- | --- |
| `PP-StructureV3` | Empfohlener Standard. Gut für Dokumente, Tabellen, Formeln, Stempel und gemischte Layouts. |
| `PP-OCRv5` | Einfache Bilder, normaler Text und leichte Erkennung. |
| `PaddleOCR-VL` | Mehrsprachige, komplexe Bilder und diagrammartige Inhalte. |
| `PaddleOCR-VL-1.5` | Komplexere Dokumentseiten und Layout-Wiederherstellung. |

Wenn Sie unsicher sind, beginnen Sie mit `PP-StructureV3`.

## Erweiterte Optionen

| Option | Beschreibung |
| --- | --- |
| Ausrichtungskorrektur | Verwenden, wenn das Bild gedreht oder schief ist. |
| Dokumentglättung | Für fotografierte Dokumente mit Wölbung oder Neigung verwenden. |
| Layouterkennung | Verwenden, wenn Überschriften, Absätze, Tabellen und Bildstruktur erhalten bleiben sollen. |
| Diagrammerkennung | Verwenden, wenn das Bild Diagramme oder komplexe Strukturen enthält. |
| `Markdown` verschönern | Macht exportiertes Markdown leichter lesbar. |

Für normale Screenshots halten Sie die Optionen minimal. Für Dokumentenscans aktivieren Sie mehr dokumentbezogene Optionen.

## Ergebnisse anzeigen

Nach Abschluss der Erkennung zeigt der Dialog das Ergebnis.

Sie können es direkt kopieren oder Exportformate auswählen.

![PDF-Erkennung](../../image/other/pdf识别截图.png)

Bei Dokumentseiten kann das exportierte `PDF` das Erscheinungsbild der Seite bewahren und den Text zugleich durchsuchbar halten. Das ist nützlich zum Archivieren von Scans und zum späteren Auffinden von Inhalten.

## Exportformat auswählen

| Format | Am besten geeignet für |
| --- | --- |
| `Markdown (.md)` | Notizen, Dokumentationssysteme und spätere Bearbeitung. |
| `PDF (.pdf)` | Bewahrung des Seitenbilds und von Ergebnissen gescannter Dokumente. |
| `Word (.docx)` | Weitere Layoutbearbeitung, Textänderungen und Übergabe an andere. |
| Alles exportieren | Speichert mehrere Formate und das Originalbild, geeignet für wichtige Archive. |

Wenn Sie nur Text benötigen, exportieren Sie Markdown.

Wenn Sie das Seitenbild benötigen, verwenden Sie PDF oder Word.

## Word-Ausgabe

Exportierte Word-Dokumente können mit Office-Software geöffnet und bearbeitet werden.

![Word-Ergebnis](../../image/other/word识别结果.png)

Einige Dokumente enthalten in der Word-Ausgabe erkannte Bilder, Überschriften und Absätze.

Die Erkennungsqualität hängt von der Klarheit des Originalbilds, der Modellwahl und der Komplexität des Dokuments ab.

## Beste Dateitypen für OCR

| Dateityp | Empfehlung |
| --- | --- |
| Klare Screenshots | Direkt erkennen. |
| Scans | `PP-StructureV3` bevorzugen. |
| Fotografierte Dokumente | Ausrichtungskorrektur und Dokumentglättung aktivieren. |
| Tabellen, Formeln, Stempel | Strukturierte Modelle bevorzugen. |
| Einfache kurze Textbilder | `PP-OCRv5` reicht normalerweise aus. |

Klarere Bilder mit geraderem Text liefern normalerweise bessere Ergebnisse.

## Häufige Fälle

| Fall | Bedeutung |
| --- | --- |
| Erkennung schlägt fehl | Prüfen Sie, ob das Diensttoken oder der Schlüssel gespeichert wurde. |
| Erkennung ist langsam | Komplexe Dokumente und große Bilder benötigen mehr Zeit. |
| Tabelle ist unvollständig | Versuchen Sie ein strukturiertes Modell. |
| Text enthält Fehler | Unschärfe, Blendung und Schräglage erhöhen Erkennungsfehler. Versuchen Sie ein klareres Bild. |
| Word-Ausgabe enthält viele Bilder | Strukturierte Modelle können einige erkannte Bilder erhalten. Das ist normal. |

### Google-Kontingentabfrage schlägt fehl

Prüfen Sie:

1. Dienstkonto-`JSON` wurde importiert.
2. Das Dienstkonto hat die Rolle `Monitoring Viewer`.
3. `Cloud Vision API` ist für das Projekt aktiviert.

Wenn Sie nur OCR und keine Nutzungsabfrage benötigen, können Sie das Dienstkonto-JSON ignorieren und nur `Google Vision API Key` ausfüllen.

## Schnellablauf

```text
Open System Settings
-> Open Other Settings
-> Fill OCR service credentials
-> Save
-> Return to File Management
-> Select a file and click OCR
-> Choose a model
-> Wait for recognition
-> Copy results or export Markdown / PDF / Word
```
