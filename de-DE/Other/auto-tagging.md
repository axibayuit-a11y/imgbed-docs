# Automatische Tags

Automatische Tags werden hier konfiguriert:

```text
Systemeinstellungen -> Weitere Einstellungen -> Automatische Tags
```

Die Funktion erzeugt Tags für Bilder und erleichtert Suche, Filter der Zufallsbild-API, öffentliche Galerie und Zugriffskontrolle nach Altersfreigabe.

## Funktionen

| Funktion | Beschreibung |
| --- | --- |
| Inhaltstags | Tags für Personen, Szenen, Objekte, Stil und weitere visuelle Merkmale |
| Charakter-Tags | Nützlich für Anime-Bilder und Illustrationen |
| Ausrichtungstags | Ergänzt `landscape`, `portrait` oder `square` |
| Bildeinstufung | Speichert Ergebnisse `G/S/Q/E` |
| Tagging beim Upload | Verarbeitet neue Bilder automatisch |
| Stapel-Tagging | Ergänzt Tags für ältere Bilder in einem oder mehreren Ordnern |

## Vorbereitung

Du brauchst mindestens eine erreichbare Hugging Face Space-URL.

Empfohlen ist, den Space `wd-tagger` von SmilingWolf in dein eigenes Hugging Face-Konto zu duplizieren:

```text
https://huggingface.co/spaces/SmilingWolf/wd-tagger
```

Der öffentliche Space eignet sich zum Testen, wird aber von vielen Personen geteilt und kann langsam, ausgelastet oder zeitweise nicht verfügbar sein. Für dauerhafte Nutzung ist eine eigene Kopie stabiler.

## Space duplizieren

1. Melde dich bei Hugging Face an.
2. Öffne `https://huggingface.co/spaces/SmilingWolf/wd-tagger`.

![Öffentlicher SmilingWolf-Space](../../image/other/微笑狼的公开仓库.png)

3. Öffne das Menü oben rechts.
4. Wähle `Duplicate this Space`.
5. Behalte den Namen oder nutze einen klaren Namen wie `wd-tagger`.
6. Lass den Space auf `Public`, damit ImgBed ihn einfacher aufrufen kann.
7. Starte mit kostenloser Hardware.
8. Erstelle den Space und warte, bis der Build abgeschlossen ist.

Kopiere danach die Browser-URL und füge sie in ImgBed unter `Space URLs` ein.

## Empfohlene Einstellungen

| Option | Empfehlung |
| --- | --- |
| `Space URLs` | Eine URL pro Zeile |
| Zielordner | Leer für alle Dateien; Ordner wählen, wenn du begrenzen möchtest |
| Modell | Zuerst `wd-swinv2-tagger-v3` verwenden |
| Schwelle für allgemeine Tags | Etwa bei `0.35` beginnen |
| Schwelle für Charakter-Tags | Etwa `0.85`, um Fehlzuordnungen zu reduzieren |
| `MCut` | Anfangs deaktiviert lassen |
| Tagging beim Upload | Aktivieren, wenn neue Bilder automatisch verarbeitet werden sollen |

Bei zu vielen Tags erhöhe die allgemeine Schwelle leicht. Bei zu wenigen Tags senke sie etwas.

## Stapel-Tagging

1. Trage `Space URLs` ein.
2. Wähle einen Zielordner.
3. Starte das Tagging.
4. Warte, bis der Fortschritt abgeschlossen ist.

Ist der Zielordner leer, verarbeitet ImgBed alle Ordner.

## Tagging beim Upload

Wenn aktiv, rufen neue Bilder automatisch die konfigurierten `Space URLs` auf.

Ist der Space ausgelastet, kann der Upload zuerst fertig werden; das Tagging läuft anschließend im Hintergrund weiter.

## Häufige Fragen

### Warum einen eigenen Space duplizieren?

Öffentliche Spaces werden von vielen genutzt. Eine eigene Kopie ist für deine Seite meist schneller und stabiler.

### Warum sind Tags auf Englisch?

Das ist normal. SmilingWolf-Modelle liefern englische Tags. ImgBed nutzt sie für Suche, Filter, Zufallsbild-API und öffentliche Galerie.

### Wofür ist die Einstufung?

Die Einstufung arbeitet mit dem Sicherheits-Zugriffsmodus zusammen. Wenn Besucher nach Altersfreigabe eingeschränkt werden, folgen Galerie und Zufallsbild-API diesen Regeln.

## Schnellablauf

```text
Bei Hugging Face anmelden
-> SmilingWolf/wd-tagger öffnen
-> Space duplizieren
-> Build abwarten
-> Space-URL kopieren
-> In Space URLs eintragen
-> Modell und Schwellen setzen
-> Tagging starten oder Tagging beim Upload aktivieren
```
