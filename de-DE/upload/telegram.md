# Telegram-Kanal hinzufügen

## Was du vorher brauchst

| Voraussetzung | Zweck |
| --- | --- |
| Telegram-Konto | Für Bot und Speicherkanal. |
| `@BotFather` | Erstellt den Telegram-Bot. |
| Telegram-Kanal | Zielort, in dem Dateien gespeichert werden. |
| `@userinfobot` | Hilft beim Ermitteln der Kanal-`Chat ID`. |

## Wo hinzufügen

1. Öffne die Systemeinstellungen.
2. Gehe zu Upload-Einstellungen.
3. Klicke oben rechts auf Kanal hinzufügen.
4. Wähle `Telegram`.

## Feldübersicht

| Feld | Funktion | Erforderlich |
| --- | --- | --- |
| Kanalname | Ein gut erkennbarer Name für diesen Kanal, z. B. `Telegram Primary`. | Erforderlich |
| Aktiv | Aktiviert oder deaktiviert diesen Kanal. | Empfohlen |
| Bot Token | Token deines Telegram-Bots. | Erforderlich |
| Session ID (Chat ID) | ID des Telegram-Kanals. | Erforderlich |
| Relay Proxy URL (optional) | Nur verwenden, wenn Telegram-Zugriffe instabil sind. Vollständige Proxy-URL inklusive `https://` eintragen. | Optional |
| Bemerkung | Notizen für spätere Wartung. | Optional |

## Einrichtungsschritte

### 1. Telegram-Bot erstellen

1. Öffne Telegram und suche nach `@BotFather`.
2. Öffne den Chat und klicke auf `Start`.
3. Sende `/newbot`.
4. Folge den Anweisungen und gib einen Anzeigenamen für den Bot ein.
5. Gib anschließend einen Bot-Benutzernamen ein. Der Name muss meistens auf `bot` enden.
6. Nach dem Erstellen gibt `@BotFather` ein Bot-Token zurück.

Dieses Token trägst du in ImgBed als `Bot Token` ein.

![Bot-Token speichern](../../image/upload/telegram/保存机器人令牌.png)

### 2. Kanal erstellen

1. Klicke in Telegram auf Neuer Kanal.
2. Gib einen Kanalnamen ein.
3. Schließe die Erstellung ab.

Öffentliche und private Kanäle funktionieren beide.

![Kanal erstellen](../../image/upload/telegram/新建频道.png)

### 3. Bot zum Kanal hinzufügen

1. Öffne den gerade erstellten Kanal.
2. Öffne die Kanaleinstellungen.
3. Füge ein Mitglied oder einen Administrator hinzu.
4. Suche nach dem Benutzernamen deines Bots.
5. Füge den Bot zum Kanal hinzu.

Für zuverlässige Uploads solltest du dem Bot Administratorrechte geben.

![Bot in den Kanal einladen](../../image/upload/telegram/邀请机器人进频道里.png)

### 4. Kanal-ID mit User Info - Get ID - IDbot abrufen

1. Suche in Telegram nach `@userinfobot`. Der Anzeigename lautet meist `User Info - Get ID - IDbot`.
2. Öffne den Chat und klicke auf `Start`.
3. Wähle in den Bot-Optionen `Channel`.
4. Wähle im Nachrichtenpicker den Zielkanal aus und sende ihn an `@userinfobot`.
5. Wenn `@userinfobot` das Ergebnis zurückgibt, kopiere die Zahl bei `Id: -100...`.

Die Zahl mit `-100` am Anfang ist die `Session ID (Chat ID)`, die ImgBed braucht.

![Kanal-ID abrufen](../../image/upload/telegram/获取频道id.png)

### 5. Telegram-Kanal in ImgBed ausfüllen

Kehre zum Konfigurationsdialog zurück und trage die Werte ein:

| UI-Feld | Wert |
| --- | --- |
| Channel Identifier | Eigener Kanalname, z. B. `TelegramPrimary`. |
| Aktiv | Empfohlen. |
| Bot Token | Das Bot-Token von `@BotFather`. |
| Session ID (Chat ID) | Die von `@userinfobot` zurückgegebene Zahl `-100...`. |
| Relay Proxy URL (optional) | Nur bei Bedarf, z. B. `https://your-tg-proxy.example.com`. |
| Bemerkung | Optionale Notizen. |

Klicke anschließend auf Speichern.

![Konfiguration bearbeiten](../../image/upload/telegram/编辑配置.png)

## Prüfung

| Prüfung | So prüfst du es |
| --- | --- |
| Kanalkarte erscheint | Nach dem Speichern sollte in den Upload-Einstellungen eine Telegram-Kanalkarte sichtbar sein. |
| Kanal lässt sich aktivieren | Der Aktiv-Schalter bleibt eingeschaltet. |
| Konfiguration ist gespeichert | Die Detailansicht zeigt, dass Bot Token und Chat ID gespeichert wurden. |
| Upload funktioniert | Lade ein Testbild hoch und prüfe, ob es im Zielkanal von Telegram erscheint. |

## Kurzcheck

```text
Bot mit @BotFather erstellen
-> Bot Token speichern
-> Telegram-Kanal erstellen
-> Bot zum Kanal hinzufügen und Administratorrechte geben
-> @userinfobot suchen und Channel wählen
-> Eine Nachricht aus dem Kanal an @userinfobot weiterleiten
-> Zurückgegebene Id: -100... kopieren
-> Bot Token und Chat ID in ImgBed eintragen
-> Speichern und Testbild hochladen
```

## Referenzen

1. Telegram bots: https://core.telegram.org/bots
2. Telegram Bot API: https://core.telegram.org/bots/api
