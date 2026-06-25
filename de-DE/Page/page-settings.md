# Seiteneinstellungen

Die Seiteneinstellungen steuern die Darstellung der Website, die Standardwerte der Hochladeseite, Hintergrundbilder und das Erscheinungsbild des Administrationsbereichs.

## Globale Einstellungen

| Option | Zweck |
| --- | --- |
| Website-Titel | Titel, der im Browser-Tab angezeigt wird. |
| Website-Symbol | Kleines Symbol, das im Browser-Tab angezeigt wird. |
| ImgBed-Name | Name, der auf den öffentlichen Seiten angezeigt wird. |
| ImgBed-Logo | Logo-Bild, das auf den öffentlichen Seiten angezeigt wird. |
| Logo-Link | URL, die beim Klicken auf das Logo oder das Profilbild geöffnet wird. |
| Wechselintervall für Hintergrundbilder | Rotationsintervall für mehrere Hintergrundbilder in Millisekunden. `60000` bedeutet 60 Sekunden. |
| Deckkraft des Hintergrunds | Deckkraft des Hintergrundbilds von `0` bis `1`. Niedrigere Werte wirken heller. |
| Standard-URL-Präfix | Präfix, das beim Erzeugen von Bildlinks verwendet wird. Leer bedeutet, dass die aktuelle Website-Domain verwendet wird. |

## Client-Einstellungen

| Option | Zweck |
| --- | --- |
| Ankündigung | Ankündigung, die oben auf der Hochladeseite angezeigt wird. HTML wird unterstützt. |
| Standardkanal für das Hochladen | Kanal, der auf der Hochladeseite standardmäßig ausgewählt ist. Smart Dispatch kann ebenfalls ausgewählt werden. |
| Standardverzeichnis für das Hochladen | Standardverzeichnis für das Hochladen, z. B. `/user/`. Leer oder `/` bedeutet Stammverzeichnis. |
| Standardmethode für Dateinamen | Standardstrategie zum Erzeugen des Dateinamens nach dem Hochladen. Siehe unten. |
| Standardmäßig in WebP konvertieren | Konvertiert Bilder vor dem Hochladen in WebP. |
| Komprimierung standardmäßig aktivieren | Komprimiert Bilder vor dem Hochladen lokal im Browser. |
| Standardschwelle für Komprimierung | Komprimiert automatisch, wenn ein Bild diese Größe in MB überschreitet. |
| Standard-Zielgröße | Zielgröße der Datei nach der Komprimierung in MB. |
| Hintergrund der Anmeldeseite | Hintergrundbild für die Benutzeranmeldung. |
| Hintergrund der Hochladeseite | Hintergrundbild für die Hochladeseite. |
| Portal-Link in der Fußzeile | URL, die über die Portal-Schaltfläche in der Fußzeile geöffnet wird. |
| Fußzeile ausblenden | Blendet die Fußzeile der öffentlichen Seiten aus, wenn diese Option aktiviert ist. |

## Admin-Einstellungen

| Option | Zweck |
| --- | --- |
| Hintergrund der Administratoranmeldung | Hintergrundbild für die Administratoranmeldung. |
| Administrationshintergrund | Hintergrundbild für Administrationsseiten. Verwenden Sie eine Bild-URL oder mehrere URLs. |
| Bildlademodus | Lademodus für Vorschauen in der Dateiliste der Administration. Der Originalmodus lädt Originalbilder. Intelligentes Laden bevorzugt Miniaturen für öffentliche Bilder und Originale für eingeschränkte Bilder. |
| Miniaturbildquelle | Dienst zum Erzeugen von Miniaturbildern: wsrv.nl, Cloudflare Image Resizing oder WordPress Photon. Cloudflare Image Resizing muss in Cloudflare aktiviert sein, bevor es ausgewählt wird. |
| Live2D-Widget | Zeigt eine Live2D-Figur im Administrationsbereich an. |
| Feuerwerk-Klickeffekt | Zeigt beim Klicken auf die Seite einen Feuerwerkseffekt an. |
| Sternspur des Cursors | Zeigt beim Bewegen der Maus eine Sternspur an. |

## Formate für Hintergrundbilder

Der Hintergrund der Anmeldeseite, der Hintergrund der Hochladeseite und der Hintergrund der Administratoranmeldung unterstützen diese Formate:

| Wert | Wirkung |
| --- | --- |
| `bing` | Verwendet eine Rotation von Bing-Hintergrundbildern. |
| `["https://example.com/1.jpg","https://example.com/2.jpg"]` | Rotiert mehrere Bilder. |
| `["https://example.com/1.jpg"]` | Verwendet ein einzelnes Hintergrundbild. |
| `["https://your-domain.com/random?..."]` | Verwendet einen Link zur API für Zufallsbilder. Sie können Ihre eigene API für Zufallsbilder in den weiteren Einstellungen konfigurieren und den erzeugten Zufallsbild-Link hier als Eintrag für ein einzelnes Hintergrundbild einfügen. |

Der Administrationshintergrund unterstützt Bild-URLs. Mehrere URLs können wie auf der Seite angegeben durch englische Kommas getrennt werden. Leer bedeutet, dass der Standardhintergrund verwendet wird.

## Standardmethode für Dateinamen

| Methode | Ergebnis |
| --- | --- |
| Standard | Zeitbasierter Zufallspräfix + ursprünglicher Dateiname, z. B. `1760000000000_cat.png`. |
| Nur Präfix | Nur zeitbasierter Zufallspräfix und Erweiterung, z. B. `1760000000000.png`. |
| Nur ursprünglicher Name | Behält den ursprünglichen Dateinamen bei, z. B. `cat.png`. Bei Duplikaten fügt ImgBed `(1)`, `(2)` usw. hinzu. |
| Kurzlink | Verwendet eine 8-stellige Kurz-ID mit Erweiterung, z. B. `a1b2c3d4.png`. |
