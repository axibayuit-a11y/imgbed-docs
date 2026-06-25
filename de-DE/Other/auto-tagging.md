# Automatisches Tagging

Automatisches Tagging wird hier konfiguriert:

```text
System Settings -> Other Settings -> Auto Tagging
```

Es erzeugt automatisch Bild-Tags. Diese sind nützlich für die Suche, die Filterung zufälliger Bilder, die Filterung der öffentlichen Galerie und die Zugriffskontrolle nach Altersfreigabe.

## Was automatisches Tagging leisten kann

| Funktion | Beschreibung |
| --- | --- |
| Inhalts-Tags erzeugen | Fügt Tags für Personen, Szenen, Objekte, Kunststil und ähnliche visuelle Inhalte hinzu. |
| Charakter-Tags erzeugen | Nützlich für Anime-Bilder und Illustrationen. |
| Ausrichtungs-Tags hinzufügen | Fügt `landscape`, `portrait` oder `square` hinzu. |
| Bildbewertung hinzufügen | Speichert Bewertungsergebnisse `G/S/Q/E` für allgemeine, sensible, fragwürdige oder explizite Inhalte. |
| Automatisch beim Hochladen taggen | Neu hochgeladene Bilder gelangen automatisch in den Tagging-Ablauf. |
| Stapel-Tagging | Fügt alten Bildern in allen Ordnern oder in ausgewählten Ordnern Tags hinzu. |

## Was Sie zuerst benötigen

Bereiten Sie mindestens eine erreichbare Hugging Face Space-URL vor.

Empfohlen wird, SmilingWolfs `wd-tagger` Space in Ihr eigenes Hugging Face-Konto zu duplizieren:

```text
https://huggingface.co/spaces/SmilingWolf/wd-tagger
```

Sie können vorübergehend den öffentlichen Space verwenden, aber öffentliche Spaces werden von vielen Nutzern geteilt und können Warteschlangen bilden, langsamer werden oder zeitweise nicht verfügbar sein. Ein duplizierter Space in Ihrem eigenen Konto ist für langfristiges automatisches Tagging stabiler.

## SmilingWolfs Space duplizieren

1. Melden Sie sich bei Hugging Face an.
2. Öffnen Sie `https://huggingface.co/spaces/SmilingWolf/wd-tagger`.

![Öffentlicher Space von SmilingWolf](../../image/other/微笑狼的公开仓库.png)

3. Klicken Sie oben rechts auf das Drei-Punkte-Menü.
4. Wählen Sie `Duplicate this Space`.
5. Behalten Sie den Standardnamen des Space bei oder wählen Sie einen eigenen Namen, zum Beispiel `wd-tagger`.
6. Setzen Sie die Sichtbarkeit auf `Public`. Öffentliche Spaces lassen sich für ImgBed leichter aufrufen.
7. Behalten Sie zunächst die kostenlose Standard-Hardware bei. Führen Sie ein Upgrade erst durch, wenn Warteschlangen deutlich erkennbar werden.
8. Erstellen Sie den Space und warten Sie, bis der Build abgeschlossen ist.

Nach Abschluss des Builds öffnen Sie die Seite Ihres Space. Die URL sieht normalerweise so aus:

```text
https://huggingface.co/spaces/your-name/wd-tagger
```

Kopieren Sie die Browser-URL und fügen Sie sie in ImgBed unter `Space URLs` ein.

## Mehrere Space URLs eintragen

Geben Sie pro Zeile eine Space-URL ein.

Beispiele:

| Wert | Beschreibung |
| --- | --- |
| `https://huggingface.co/spaces/SmilingWolf/wd-tagger` | Öffentlicher Space von SmilingWolf. Geeignet für vorübergehende Tests. |
| `https://huggingface.co/spaces/lintonxue00/wd-tagger` | URL einer kopierten Space-Seite. |
| `https://huggingface.co/spaces/your-name/wd-tagger` | Ihre eigene duplizierte Space-Seite. |

Sie können mehrere URLs eintragen. ImgBed nutzt mehrere Spaces gemeinsam, was die Geschwindigkeit verbessern kann.

Wenn ein Space vorübergehend nicht verfügbar ist, können die anderen mit der Verarbeitung fortfahren.

## Einstellungen

| Option | Empfehlung |
| --- | --- |
| `Space URLs` | Tragen Sie die vorbereiteten Space-URLs ein. Verwenden Sie mindestens eine. |
| Zielordner | Für alle Ordner leer lassen. Wählen Sie nur dann einen Ordner aus, wenn Sie ein bestimmtes Verzeichnis verarbeiten möchten. |
| Erkennungsmodell | Belassen Sie standardmäßig `wd-swinv2-tagger-v3`. |
| Schwellenwert für allgemeine Tags | Der Standardwert funktioniert für die meisten Bilder. Niedrigere Werte erzeugen mehr Tags, höhere Werte weniger. |
| Schwellenwert für Charakter-Tags | Der Standardwert ist konservativ und hilft, falsche Charakter-Tags zu vermeiden. |
| Automatischer Schwellenwert `MCut` | Zunächst ausgeschaltet lassen. Aktivieren Sie ihn, wenn das Modell die Tag-Anzahl automatisch bestimmen soll. |
| Automatisch beim Hochladen taggen | Aktivieren, wenn neu hochgeladene Bilder automatisch Tags erhalten sollen. |
| Tagging starten | Startet manuelles Stapel-Tagging für alte Bilder. |

## Empfohlene Startwerte

| Option | Empfohlener Wert |
| --- | --- |
| Erkennungsmodell | `wd-swinv2-tagger-v3` |
| Schwellenwert für allgemeine Tags | `0.35` |
| Schwellenwert für Charakter-Tags | `0.85` |
| `MCut` | Zunächst ausgeschaltet |
| Automatisch beim Hochladen taggen | Bei Bedarf aktivieren |

Wenn es zu viele Tags gibt, erhöhen Sie den allgemeinen Schwellenwert leicht.

Wenn es zu wenige Tags gibt, senken Sie den allgemeinen Schwellenwert leicht.

## Stapel-Tagging

1. Füllen Sie `Space URLs` aus.
2. Wählen Sie einen Zielordner.
3. Klicken Sie auf Tagging starten.
4. Warten Sie, bis der Fortschritt abgeschlossen ist.

Wenn der Zielordner leer ist, verarbeitet ImgBed alle Ordner.

Stapel-Tagging eignet sich besonders für alte Bilder. Für neue Bilder aktivieren Sie automatisches Tagging beim Hochladen, damit Sie es nicht jedes Mal manuell ausführen müssen.

## Automatisches Tagging beim Hochladen

Nach der Aktivierung des automatischen Taggings beim Hochladen rufen neu hochgeladene Bilder automatisch die konfigurierten `Space URLs` auf.

Dies ist für die langfristige Nutzung geeignet.

Wenn Ihr Space in einer Warteschlange steht, kann das Hochladen selbst trotzdem zuerst abgeschlossen werden; das Tagging läuft danach weiter.

## Welche Bilder verarbeitet werden

Automatisches Tagging verarbeitet hauptsächlich Bilddateien.

Bilder, die bereits vollständige Tags, Ausrichtung, Bewertung, Breite und Höhe haben, werden übersprungen, um unnötige Space-Aufrufe zu vermeiden.

ImgBed ergänzt nach Möglichkeit nur fehlende Informationen. Wenn beispielsweise nur die Ausrichtung fehlt, versucht es, diese zu ergänzen, ohne den vollständigen Inhalts-Tagging-Ablauf aufzurufen.

## FAQ

### Warum sollte ich meinen eigenen Space duplizieren?

Öffentliche Spaces werden von vielen Nutzern geteilt. Ihr eigener duplizierter Space wird hauptsächlich von Ihrer ImgBed-Seite verwendet und ist daher normalerweise schneller und zuverlässiger.

### Der Space startet immer wieder

Nach der ersten Erstellung oder nach einer langen Leerlaufzeit kann ein Space etwas Zeit zum Starten benötigen.

Öffnen Sie zuerst die Seite Ihres Space. Sobald er ein Bild normal erkennen kann, kehren Sie zu ImgBed zurück und starten Sie das Tagging.

### Wie kopiere ich die Space-URL?

Öffnen Sie Ihre Hugging Face Space-Seite und kopieren Sie die Adresse aus dem Browser.

Beispiele:

```text
https://huggingface.co/spaces/lintonxue00/wd-tagger
https://huggingface.co/spaces/SmilingWolf/wd-tagger
```

### Kann ich mehrere Spaces hinzufügen?

Ja. Geben Sie pro Zeile eine Space-URL ein.

Mehrere Spaces verarbeiten Bilder gemeinsam und sind nützlich, wenn Sie viele Bilder haben.

### Warum sind die Tags auf Englisch?

SmilingWolf-Modelle geben englische Tags aus. Das ist erwartetes Verhalten.

Die Tags werden hauptsächlich für Suche, Filterung, die API für zufällige Bilder und Filter der öffentlichen Galerie verwendet.

### Wofür werden Bewertungs-Tags verwendet?

Bewertungsergebnisse arbeiten mit dem Zugriffsmodus in den Sicherheitseinstellungen zusammen.

Wenn der Besucherzugriff beispielsweise nach Altersfreigabe eingeschränkt ist, filtern öffentliches Durchsuchen und Funktionen für zufällige Bilder die Bilder nach diesen Regeln.

## Schnellablauf

```text
Sign in to Hugging Face
-> Open SmilingWolf/wd-tagger
-> Duplicate this Space
-> Wait for the Space to build
-> Copy your Space URL
-> Fill Space URLs in ImgBed
-> Choose model and thresholds
-> Start tagging or enable auto-tag on upload
```
