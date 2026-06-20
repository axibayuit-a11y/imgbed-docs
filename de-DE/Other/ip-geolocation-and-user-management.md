# IP-Geolokalisierung und Benutzerverwaltung

Die IP-Geolokalisierung wandelt IP-Adressen aus Uploads, Login-Geräten und Protokollen in ungefähre Standorte um.

Nach der Einrichtung zeigt der Adminbereich Upload- und Zugriffsquellen verständlicher an. In der Benutzerverwaltung kannst du verdächtigen IPs Uploads sperren oder wieder erlauben.

## Wo einstellen

```text
Systemeinstellungen -> Weitere Einstellungen -> IP-Geolokalisierung
```

![IP-Geolokalisierung](../../image/other/ip定位/ip定位.png)

## Verfügbare Einstellungen

| Einstellung | Beschreibung |
| --- | --- |
| Sprache der IP-Ortung | Sprache der angezeigten Standorte |
| MaxMind Account ID | Konto-ID für MaxMind GeoLite Web Service |
| MaxMind License Key | Lizenzschlüssel von MaxMind |
| Tencent Map Key | Nützlich für Adressen in Festlandchina |
| ipapi Key | APILayer-ipapi-Schlüssel mit mehrsprachiger Unterstützung |

Trage nur die Dienste ein, die du brauchst. Ohne Schlüssel versucht ImgBed integrierte kostenlose Quellen, die aber weniger stabil oder genau sein können.

## Empfehlung für Deutsch

Für deutsche oder mehrsprachige Standortanzeigen richte MaxMind ein und ergänze bei Bedarf ipapi für bessere mehrsprachige Ergebnisse.

## MaxMind einrichten

MaxMind benötigt:

```text
MaxMind Account ID
MaxMind License Key
```

Suche die Account ID im MaxMind-Dashboard, erstelle einen License Key und trage beide Werte in ImgBed ein.

![MaxMind-Konfiguration](../../image/other/ip定位/maxmind的key配置.png)

## ipapi einrichten

Kopiere den API Key aus der ipapi-Konsole.

![ipapi-Konfiguration](../../image/other/ip定位/ipapi配置.png)

Füge ihn in ImgBed bei `ipapi Key` ein und speichere.

## Benutzerverwaltung

Die Benutzerverwaltung öffnest du oben im Adminbereich.

![Benutzerverwaltung](../../image/other/用户管理显示.png)

Sie gruppiert Aktivitäten nach IP.

| Feld | Beschreibung |
| --- | --- |
| IP | Quell-IP |
| Standort | Ungefährer Standort zur IP |
| Gesamte Upload-Größe | Summe der von dieser IP hochgeladenen Dateien |
| Anzahl Uploads | Anzahl der Uploads |
| Upload erlaubt | Deaktivieren, um neue Uploads dieser IP zu blockieren |

Öffne den Pfeil links, um Dateien dieser IP zu sehen: Name, Vorschau, Größe, Moderationsergebnis, Status und Upload-Zeit.

![Erweiterte Filter](../../image/other/用户管理高级筛选.png)

## Betriebshinweise

- Prüfe vor dem Sperren einer IP die hochgeladenen Dateien.
- Suche und Sortierung helfen, neue, sehr aktive oder speicherintensive IPs zu finden.
- IP-Standorte sind Schätzwerte. Nutze sie als Hinweis, nicht als Beweis.

![Mobile Ansicht](../../image/other/手机端显示用户管理效果.png)
