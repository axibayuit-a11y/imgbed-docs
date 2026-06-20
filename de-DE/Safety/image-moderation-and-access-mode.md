# Bildmoderation und Zugriffsmodus

Bildmoderation und Zugriffsmodus steuern, welche Dateien Besucher sehen dürfen, basierend auf öffentlichen Regeln, Listen und Altersfreigaben.

Sie wirken zusammen mit öffentlicher Galerie, Zufallsbild-API und externem Dateizugriff.

## Möglichkeiten

| Funktion | Beschreibung |
| --- | --- |
| Bildmoderation | Inhalts- oder Einstufungsinformationen speichern |
| Blacklist | Dateien ausschließen, die nicht öffentlich sein sollen |
| Whitelist-Modus | Nur ausdrücklich erlaubte Dateien veröffentlichen |
| Alterskontrolle | Sichtbarkeit von R12, R16, R18 und ähnlichen Stufen steuern |
| Zugriffsmodus | Sichtbaren Bereich für Besucher global ändern |

## Zugriffsmodus

Der Zugriffsmodus begrenzt, was öffentliche Seiten und die Zufallsbild-API zurückgeben dürfen.

Für eine allgemein zugängliche Seite kannst du nur unkritische Dateien ausgeben lassen. Für interne oder eingeschränkte Nutzung können Regeln flexibler gesetzt werden.

## Eingeschränkte Datei

Wenn eine Datei eingeschränkt ist, sieht der Besucher einen Hinweis statt des ursprünglichen Inhalts.

![Eingeschränkte Datei](../../image/Safety/文件受限图.png)

## Betriebsarten

| Ansatz | Geeignet für |
| --- | --- |
| Blacklist | Standardmäßig veröffentlichen und problematische Dateien ausschließen |
| Whitelist | Nur geprüfte und erlaubte Dateien veröffentlichen |
| Altersfreigabe | Sichtbarkeit nach Inhaltsstufe steuern |

Für öffentliche Seiten helfen Whitelist oder Altersfreigabe, ungewollte Veröffentlichungen zu vermeiden.

## Prüfpunkte

1. Prüfe, ob die Datei in der öffentlichen Galerie erscheint.
2. Prüfe, ob die Zufallsbild-API keine eingeschränkten Dateien zurückgibt.
3. Beachte nach Listenänderungen mögliche Caches.
4. Bei automatischer Einstufung sensible Dateien manuell prüfen, da Modelle Fehler machen können.
