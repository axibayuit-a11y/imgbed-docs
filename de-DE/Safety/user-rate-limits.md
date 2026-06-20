# Benutzer-Frequenzlimits

Frequenzlimits begrenzen Aktionen, wenn eine IP oder ein Benutzer in kurzer Zeit zu viele Vorgänge ausführt.

Bei öffentlichen Uploads hilft das gegen Spam, Missbrauch und unerwünschte Massen-Uploads.

## Wo einstellen

```text
Systemeinstellungen -> Sicherheit -> Frequenzlimits
```

![Frequenzlimits](../../image/other/用户频控截图.png)

## Wichtige Optionen

| Option | Beschreibung |
| --- | --- |
| Aktivieren | Limit ein- oder ausschalten |
| Zeitfenster | Zeitraum, in dem Aktionen gezählt werden |
| Maximale Anzahl | Erlaubte Aktionen innerhalb des Zeitfensters |
| Zielaktion | Upload oder andere zu begrenzende Aktion |
| Sperrdauer | Dauer der Sperre nach Überschreitung |

## Sinnvoller Startwert

Bei öffentlichen Uploads beginne moderat und passe später anhand echter Nutzung an.

```text
30 Aktionen pro 10 Minuten
30 Minuten Sperre bei Überschreitung
```

Das erlaubt normalen Nutzern ausreichend Spielraum und bremst auffällige Muster.

## Hinweis bei Überschreitung

Wenn das Limit überschritten wird, sieht der Benutzer eine Meldung, dass die Aktion abgelehnt wurde.

![Häufige Fehlermeldung](../../image/other/频繁报错提示.png)

## Hinweise

- Zu strenge Limits können legitime Stapel-Uploads blockieren.
- Öffentliche Uploads sollten nicht komplett unbegrenzt bleiben.
- In Kombination mit IP-Geolokalisierung und Benutzerverwaltung lassen sich Missbrauchsmuster besser prüfen.
- Bei erwarteten Lastspitzen kannst du Limits vorübergehend lockern.
