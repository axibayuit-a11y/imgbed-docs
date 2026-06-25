# Bildmoderation und Zugriffsmodus

Die Bildmoderation weist hochgeladenen Bildern Altersbewertungen zu. Der Zugriffsmodus steuert, welche Bewertungen über den öffentlichen Zugriff sichtbar sind.

Das betrifft die öffentliche Galerie, öffentliche Datei-URLs und die API für zufällige Bilder. Der Administrationsbereich wird dadurch nicht eingeschränkt. Administratoren können weiterhin alle Dateien sehen und verwalten.

## Wo Sie es konfigurieren

Öffnen Sie den Administrationsbereich und gehen Sie zu:

```text
System Settings -> Security Settings -> Upload Management -> Image Moderation
```

Die wichtigsten Einstellungen sind:

- Zugriffsmodus
- Moderation aktivieren
- Moderationsanbieter

## Was der Zugriffsmodus macht

Der Zugriffsmodus legt fest, welche Altersbewertungen öffentlich angezeigt werden dürfen.

Aktuelle Modi:

| Zugriffsmodus | Öffentlich sichtbare Bewertungen |
| --- | --- |
| Erwachsenenmodus | Allgemein, R12, R16, R18 |
| Jugendmodus | Allgemein, R12, R16 |
| Teenager-Modus | Allgemein, R12 |
| Kindermodus | Nur Allgemein |

Standard ist der Erwachsenenmodus.

Für private Websites oder Websites mit Inhalten für Erwachsene kann der Erwachsenenmodus passend sein. Für eine konservativere öffentliche Galerie wählen Sie den Jugendmodus, Teenager-Modus oder Kindermodus.

## Was das Aktivieren der Moderation macht

Wenn die Moderation aktiviert ist, ruft ImgBed beim Upload den ausgewählten Moderationsanbieter auf und speichert die erkannte Altersbewertung.

Hauptbewertungen:

| Bewertung | Bedeutung |
| --- | --- |
| Allgemein | Sicherer öffentlicher Inhalt |
| R12 | Leicht sensibler Inhalt |
| R16 | Mäßig sensibler Inhalt |
| R18 | Inhalt für Erwachsene |

Das Moderationsergebnis wird bei der Entscheidung über den öffentlichen Zugriff verwendet.

Wenn die Moderation nicht aktiviert ist oder alte Dateien keine Bewertung haben, werden diese Dateien als unbewertet behandelt. Unbewertete Dateien werden nicht automatisch aus der öffentlichen Galerie oder der API für zufällige Bilder entfernt, nur weil keine Bewertung vorhanden ist.

## Einen Moderationsanbieter auswählen

Verfügbare Anbieter sind:

- moderatecontent.com
- nsfwjs
- Sightengine

Jeder Anbieter hat unterschiedliche Anforderungen:

- moderatecontent.com benötigt normalerweise einen API Key.
- nsfwjs benötigt normalerweise eine API-Endpunkt-URL.
- Sightengine benötigt einen API user und ein API secret.

Wählen Sie je nach Konto, Verfügbarkeit und Erkennungsqualität. Solange die Moderation aktiviert und korrekt konfiguriert ist, versucht ImgBed beim Upload eine Bildbewertung zu speichern.

## Auswirkung auf die öffentliche Galerie

Die öffentliche Galerie filtert Dateien nach dem Zugriffsmodus.

Beispiele:

- Erwachsenenmodus: R18-Bilder können erscheinen.
- Jugendmodus: R18-Bilder werden ausgeblendet.
- Teenager-Modus: R16- und R18-Bilder werden ausgeblendet.
- Kindermodus: Nur Bilder mit Bewertung Allgemein werden angezeigt.

Das betrifft nur den normalen öffentlichen Zugriff. Der Administrationsbereich zeigt weiterhin alle Dateien.

## Auswirkung auf öffentliche Datei-URLs

Öffentliche Datei-URLs sind direkte Bildlinks, die von Besuchern geöffnet werden.

Wenn die Dateibewertung im aktuellen Zugriffsmodus erlaubt ist, gibt ImgBed das Quellbild zurück.

Wenn die Bewertung über der erlaubten Stufe liegt, gibt der normale öffentliche Zugriff das Quellbild nicht zurück. Stattdessen gibt ImgBed das konfigurierte blockierte Ergebnis oder ein Platzhalterbild zurück.

Beispiel:

- Der aktuelle Modus ist der Kindermodus.
- Ein Bild ist mit R18 bewertet.
- Ein Besucher öffnet die öffentliche URL direkt.
- ImgBed gibt diesem Besucher das ursprüngliche R18-Bild nicht zurück.

![Eingeschränktes Dateibild](../../image/Safety/文件受限图.png)

Administratoren, die Dateien im Administrationsbereich ansehen, sind von dieser Einschränkung nicht betroffen.

## Auswirkung auf die API für zufällige Bilder

Auch die API für zufällige Bilder filtert ihren Kandidatenpool nach dem Zugriffsmodus.

Im Kindermodus werden zufällige Bilder nur aus Dateien mit Bewertung Allgemein ausgewählt.

Im Jugendmodus können zufällige Bilder aus Dateien mit Allgemein, R12 und R16 stammen, aber nicht aus R18-Dateien.

So wird verhindert, dass die API für zufällige Bilder die Einschränkungen der öffentlichen Galerie umgeht.

## Beziehung zu Listenregeln

Der Zugriffsmodus ist nicht die einzige Regel für öffentlichen Zugriff. Er arbeitet mit Regeln für Erlaubnis- und Sperrlisten zusammen.

Vereinfacht:

- Inhalte auf der Erlaubnisliste sind zuerst öffentlich.
- Inhalte auf der Sperrliste können von normalen Besuchern nicht direkt angesehen werden.
- Inhalte auf keiner der beiden Listen werden anschließend nach dem Zugriffsmodus geprüft.

Wenn ein Bild sowohl durch Altersbewertung als auch durch Listenregeln eingeschränkt ist, können normale Besucher die Quelldatei weiterhin nicht direkt ansehen.

## Empfohlene Einstellungen

Für öffentliche Websites:

- Aktivieren Sie die Moderation.
- Wählen Sie einen Zugriffsmodus, der zum Publikum der Website passt.
- Verwenden Sie den Kindermodus oder Teenager-Modus für Besucher aller Altersgruppen.
- Vermeiden Sie den Erwachsenenmodus, wenn Inhalte für Erwachsene nicht öffentlich angezeigt werden sollen.
- Prüfen Sie Dateibewertungen im Administrationsbereich und passen Sie sie bei Bedarf manuell an.

Für private oder persönliche Websites:

- Der Erwachsenenmodus ist normalerweise in Ordnung.
- Aktivieren Sie die Moderation, wenn sie nützlich ist.
- Prüfen und ändern Sie Bewertungen im Administrationsbereich nach Bedarf.

## FAQ

### Verschwinden Dateien aus dem Administrationsbereich, nachdem ich den Zugriffsmodus ändere?

Nein.

Der Zugriffsmodus betrifft nur den normalen öffentlichen Zugriff. Er betrifft nicht den Administrationsbereich.

### Warum zeigt die öffentliche Galerie nach dem Wechsel in den Kindermodus weniger Bilder?

Der Kindermodus erlaubt nur Dateien mit Bewertung Allgemein im öffentlichen Zugriff. R12-, R16- und R18-Dateien werden herausgefiltert.

### Können öffentliche URLs weiterhin Erwachsenenbilder öffnen?

Wenn der aktuelle Zugriffsmodus diese Bewertung nicht erlaubt, geben normale öffentliche URLs das Quellbild nicht zurück.

### Kann die API für zufällige Bilder eingeschränkte Bilder zurückgeben?

Nein.

Die API für zufällige Bilder filtert Kandidaten nach dem aktuellen Zugriffsmodus.

### Was passiert mit alten unbewerteten Bildern?

Unbewertete Bilder werden nicht automatisch ausgeblendet, nur weil sie keine Moderationsergebnisse haben. Sie können ihre Bewertungen später im Administrationsbereich anpassen.

