# OCR und Texterkennung

OCR erkennt Text in Bildern, PDFs und Word-Dokumenten und macht Inhalte leichter durchsuchbar und prüfbar.

## Wo einstellen

```text
Systemeinstellungen -> Weitere Einstellungen -> OCR
```

![OCR-Einstellungen](../../image/other/ip定位和ocr文字识别.png)

## Möglichkeiten

| Funktion | Beschreibung |
| --- | --- |
| Bild-OCR | Liest Text in Screenshots und Fotos |
| PDF-OCR | Extrahiert Text aus PDF-Dateien |
| Word-OCR | Liest Inhalte aus Word-Dokumenten |
| Suchhilfe | Macht erkannten Text für die Suche nutzbar |
| Stapelverarbeitung | Verarbeitet vorhandene Dateien in großer Menge |

![OCR-Ergebnis](../../image/other/ocr识别截图.png)

## Vorbereitung

Je nach OCR-Dienst brauchst du einen API-Schlüssel oder Token. Trage die Zugangsdaten in der Oberfläche ein.

Wenn du externe Dienste wie PaddleOCR nutzt, prüfe, ob die Zugangsdaten stimmen und noch Quota verfügbar ist.

![Token abrufen](../../image/other/获取飞浆令牌.png)

## Verwendung

1. Aktiviere OCR.
2. Trage den Schlüssel des gewünschten Dienstes ein.
3. Speichere die Konfiguration.
4. Lade neue Dateien hoch oder starte OCR für vorhandene Dateien.
5. Prüfe die Ergebnisse in den Dateidetails oder über die Suche.

![Word-Ergebnis](../../image/other/word识别结果.png)

![PDF-Erkennung](../../image/other/pdf识别截图.png)

## Hinweise

- Kleine, unscharfe oder schiefe Bilder verringern die Genauigkeit.
- Große PDFs und Word-Dateien benötigen mehr Zeit.
- Ist die API-Quota aufgebraucht, kann die Erkennung fehlschlagen.
- Nutze OCR als Hilfe; wichtige Inhalte solltest du zusätzlich in der Originaldatei prüfen.
