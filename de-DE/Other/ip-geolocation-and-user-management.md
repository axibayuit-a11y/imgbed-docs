# IP-Geolokalisierung und Benutzerverwaltung

Die IP-Geolokalisierung wandelt IP-Adressen in Uploader-Datensätzen, Anmeldegeräten und ähnlichen Protokollen in ungefähre Standorte um.

Nach der Einrichtung kann der Adminbereich Hochlade- und Zugriffsquellen klarer anzeigen. Die Benutzerverwaltung ermöglicht außerdem, den Hochladezugriff für verdächtige IP-Adressen zu blockieren oder wiederherzustellen.

## Wo sie konfiguriert wird

Öffnen Sie:

```text
System Settings -> Other Settings -> IP Geolocation
```

![IP-Geolokalisierung](../../image/other/ip定位/ip定位.png)

## Verfügbare Einstellungen

Der neuere Ablauf für IP-Geolokalisierung unterstützt mehrere Quellen, statt sich nur auf einen Kartendienst zu verlassen.

| Einstellung | Zweck |
| --- | --- |
| Sprache der IP-Geolokalisierung | Wählt die Anzeigesprache, zum Beispiel Englisch, vereinfachtes Chinesisch, Japanisch, Französisch und weitere. |
| MaxMind Account ID | MaxMind-Konto-ID für den MaxMind GeoLite Web Service. |
| MaxMind License Key | MaxMind-Lizenzschlüssel. |
| Tencent Map Key | Schlüssel für Tencent Location Service. Nützlich für chinesische Adressen und IPs aus Festlandchina. |
| ipapi Key | APILayer-ipapi-Schlüssel. Unterstützt mehrsprachige IP-Geolokalisierung. |

Füllen Sie nur die Dienste aus, die Sie benötigen. Sie müssen nicht jedes Feld konfigurieren.

Wenn kein Schlüssel angegeben ist, versucht ImgBed weiterhin, integrierte kostenlose Quellen zu verwenden. Stabilität, Sprachunterstützung und Genauigkeit können jedoch geringer sein als bei einem Dienst, den Sie selbst konfigurieren.

## Empfohlene Optionen

Wenn Sie hauptsächlich chinesische Adressen benötigen:

1. Setzen Sie die Sprache der IP-Geolokalisierung auf vereinfachtes Chinesisch.
2. Konfigurieren Sie den Tencent Map Key.
3. Fügen Sie optional MaxMind oder ipapi als Ausweichquellen hinzu.

Wenn Sie hauptsächlich englische oder mehrsprachige Adressen benötigen:

1. Wählen Sie die benötigte Sprache.
2. Konfigurieren Sie MaxMind Account ID und License Key.
3. Fügen Sie einen ipapi Key hinzu, wenn Sie bessere mehrsprachige Ergebnisse benötigen.

## MaxMind einrichten

MaxMind benötigt:

```text
MaxMind Account ID
MaxMind License Key
```

Suchen Sie die Account ID im MaxMind-Dashboard und erzeugen Sie auf der Seite License Keys einen License Key.

![MaxMind-Schlüssel konfigurieren](../../image/other/ip定位/maxmind的key配置.png)

Fügen Sie nach dem Erzeugen Account ID und License Key in ImgBed ein und speichern Sie.

Der kostenlose MaxMind-Plan eignet sich für den Alltag, hat aber Anfragelimits. Wenn das Kontingent überschritten wird, versucht ImgBed weiterhin andere verfügbare Quellen.

## ipapi einrichten

ipapi verwendet einen APILayer API Key.

Öffnen Sie die ipapi-Konsole und kopieren Sie den dort angezeigten API Key.

![ipapi konfigurieren](../../image/other/ip定位/ipapi配置.png)

Fügen Sie ihn in ImgBed in das Feld `ipapi Key` ein und speichern Sie.

ipapi unterstützt mehrsprachige IP-Geolokalisierung und ist nützlich, wenn Adressen in einer ausgewählten Sprache angezeigt werden sollen. Auch der kostenlose Plan hat Anfragelimits. Wenn das Kontingent aufgebraucht ist, versucht ImgBed weiterhin andere verfügbare Quellen.

## Tencent Map Key einrichten

Der Tencent Map Key ist nützlich für chinesische Adressen, besonders für IPs aus Festlandchina.

Aktivieren Sie beim Erstellen eines Schlüssels in Tencent Location Service:

```text
WebServiceAPI
```

Fügen Sie den Schlüssel nach der Erstellung in `Tencent Map Key` ein und speichern Sie.

Wenn Sie nur eine einfache chinesische IP-Geolokalisierung benötigen, reicht der Tencent Map Key für den Einstieg.

## Was in der Benutzerverwaltung zu prüfen ist

Die Benutzerverwaltung ist oben im Adminbereich verfügbar.

![Benutzerverwaltung](../../image/other/用户管理显示.png)

Die Benutzerverwaltung zeigt Hochladeaktivität nach IP:

| Feld | Beschreibung |
| --- | --- |
| IP-Quelle | Quell-IP des Uploaders. |
| Adresse | Ungefährer Standort, der aus der IP aufgelöst wurde. |
| Gesamte Hochladegröße | Gesamtgröße der von dieser IP hochgeladenen Dateien. |
| Anzahl der Uploads | Anzahl der Uploads von dieser IP. |
| Hochladen erlaubt | Ein bedeutet, dass Uploads erlaubt sind. Aus bedeutet, dass Uploads blockiert sind. |

Klicken Sie links auf den Pfeil, um die Liste der von dieser IP hochgeladenen Dateien aufzuklappen.

Die Dateiliste zeigt Dateiname, Vorschau, Dateigröße, Moderationsergebnis, Dateistatus und Hochladezeit. Wenn Uploads verdächtig wirken, klappen Sie zuerst die IP auf, prüfen Sie die Dateien und entscheiden Sie dann, ob weitere Uploads blockiert werden sollen.

Wenn eine IP verdächtig ist, schalten Sie `Upload allowed` aus. Künftige Uploads von dieser IP werden blockiert.

## Suche, Sortierung und erweiterte Filter

Oben in der Benutzerverwaltung können Sie nach IP-Quelle oder Adresse suchen.

Sortieren Sie nach Zeit, Anzahl der Uploads oder gesamter Hochladegröße, um aktuelle Uploader, häufige Uploader oder IPs mit hohem Verbrauch zu finden.

Öffnen Sie für eine genauere Untersuchung die erweiterten Filter.

![Erweiterte Filter](../../image/other/用户管理高级筛选.png)

Erweiterte Filter unterstützen:

| Filter | Verwendung |
| --- | --- |
| Zeitraum | Zeigt IPs, die in einem ausgewählten Zeitraum Dateien hochgeladen haben. |
| Zugriffsstatus | Filtert nach normalen, blockierten und ähnlichen Zuständen. |
| Erlaubnis-/Sperrliste | Filtert nach Erlaubnisliste, Sperrliste oder nicht festgelegt. |
| Dateityp | Zeigt IPs, die Bilder, Videos, Audio, Dokumente, Code oder andere Dateien hochgeladen haben. |
| Dateigröße | Filtert nach Größenbereich der hochgeladenen Dateien. |
| Altersfreigabe | Filtert nach nicht festgelegt, General, R12+, R16+, R18 und ähnlichen Freigaben. |
| Dateistatus | Filtert nach aktuellem Dateistatus, um auffällige Dateien zu untersuchen. |

Klicken Sie auf `Apply Filters`, um die Filter anzuwenden. Verwenden Sie `Reset`, um zu allen Daten zurückzukehren.

## Mobile Ansicht

Auf Mobilgeräten wechselt die Benutzerverwaltung in ein Kartenlayout.

![Mobile Benutzerverwaltung](../../image/other/手机端显示用户管理效果.png)

Jede Karte zeigt IP, Adresse, gesamte Hochladegröße, Anzahl der Uploads und den Schalter für die Hochladeerlaubnis. Sie können Benutzer ohne horizontales Scrollen einer Tabelle verwalten.

## Wenn der Standort falsch aussieht

IP-Geolokalisierung ist ungefähr. Sie ist keine genaue Straßenadresse.

Wenn sich der Nutzer hinter einem Proxy, Rechenzentrum, Cloud-Server oder grenzüberschreitenden Netzwerk befindet, kann der angezeigte Standort vom tatsächlichen Standort abweichen.

Nutzen Sie diese Funktion, um die grobe Herkunft zu verstehen, auffällige Uploads zu finden und Blockierungsentscheidungen zu unterstützen. Behandeln Sie sie nicht als präzises Tracking.

## Häufige Fälle

| Fall | Bedeutung |
| --- | --- |
| Adresse ist leer | Die IP wurde möglicherweise noch nicht aufgelöst oder die aktuelle Quelle ist vorübergehend nicht verfügbar. |
| Sprache der Adresse ist falsch | Prüfen Sie die Sprache der IP-Geolokalisierung und ob eine Quelle konfiguriert ist, die diese Sprache unterstützt. |
| Adresse zeigt ein Rechenzentrum | Viele Proxys, Cloud-Server und Crawler erscheinen als Rechenzentrums- oder ISP-Adressen. |
| Anzahl der Uploads ist hoch | Prüfen Sie diese IP sorgfältig und blockieren Sie Uploads bei Bedarf. |
| Gesamte Hochladegröße ist groß | Sortieren oder filtern Sie, klappen Sie die IP auf und prüfen Sie konkrete Dateien. |
| Wiederherstellung nach Blockierung nötig | Schalten Sie `Upload allowed` wieder ein. |

## Schnellablauf

```text
Open IP Geolocation in Other Settings
-> Choose IP geolocation language
-> Fill MaxMind, Tencent Map, or ipapi credentials as needed
-> Save settings
-> Open User Management
-> Review IP source, address, total upload size, and upload count
-> Use search, sort, or advanced filters to find abnormal IPs
-> Allow or block uploads as needed
```
