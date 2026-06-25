# Telegram-Kanal hinzufügen

## Was Sie vorher benötigen

| Voraussetzung | Zweck |
| --- | --- |
| Telegram-Konto | Für Bot und Speicherkanal. |
| `@BotFather` | Erstellt den Telegram-Bot. |
| Telegram-Kanal | Zielort, in dem Dateien gespeichert werden. |
| `@userinfobot` | Hilft beim Ermitteln der Kanal-`Chat ID`. |

## Wo hinzufügen

1. Öffnen Sie die Systemeinstellungen.
2. Gehen Sie zu Upload-Einstellungen.
3. Klicken Sie oben rechts auf Kanal hinzufügen.
4. Wählen Sie `Telegram`.

## Feldübersicht

| Feld | Funktion | Erforderlich |
| --- | --- | --- |
| Kanalname | Ein gut erkennbarer Name für diesen Kanal, z. B. `Telegram Primary`. | Erforderlich |
| Aktiv | Aktiviert oder deaktiviert diesen Kanal. | Empfohlen |
| Bot Token | Token Ihres Telegram-Bots. | Erforderlich |
| Session ID (Chat ID) | ID des Telegram-Kanals. | Erforderlich |
| Relay Proxy URL (optional) | Nur verwenden, wenn Telegram-Zugriffe instabil sind. Vollständige Proxy-URL inklusive `https://` eintragen. | Optional |
| Bemerkung | Notizen für spätere Wartung. | Optional |

## Einrichtungsschritte

### 1. Telegram-Bot erstellen

1. Öffnen Sie Telegram und suchen Sie nach `@BotFather`.
2. Öffnen Sie den Chat und klicken Sie auf `Start`.
3. Sende `/newbot`.
4. Folge den Anweisungen und geben Sie einen Anzeigenamen für den Bot ein.
5. Geben Sie anschließend einen Bot-Benutzernamen ein. Der Name muss meistens auf `bot` enden.
6. Nach dem Erstellen gibt `@BotFather` ein Bot-Token zurück.

Dieses Token tragen Sie in ImgBed als `Bot Token` ein.

![Bot-Token speichern](../../image/upload/telegram/保存机器人令牌.png)

### 2. Kanal erstellen

1. Klicken Sie in Telegram auf Neuer Kanal.
2. Geben Sie einen Kanalnamen ein.
3. Schließe die Erstellung ab.

Öffentliche und private Kanäle funktionieren beide.

![Kanal erstellen](../../image/upload/telegram/新建频道.png)

### 3. Bot zum Kanal hinzufügen

1. Öffnen Sie den gerade erstellten Kanal.
2. Öffnen Sie die Kanaleinstellungen.
3. Fügen Sie ein Mitglied oder einen Administrator hinzu.
4. Suchen Sie nach dem Benutzernamen Ihres Bots.
5. Fügen Sie den Bot zum Kanal hinzu.

Für zuverlässige Uploads solltest Sie dem Bot Administratorrechte geben.

![Bot in den Kanal einladen](../../image/upload/telegram/邀请机器人进频道里.png)

### 4. Kanal-ID mit User Info - Get ID - IDbot abrufen

1. Suchen Sie in Telegram nach `@userinfobot`. Der Anzeigename lautet meist `User Info - Get ID - IDbot`.
2. Öffnen Sie den Chat und klicken Sie auf `Start`.
3. Wählen Sie in den Bot-Optionen `Channel`.
4. Wählen Sie im Nachrichtenpicker den Zielkanal aus und sende ihn an `@userinfobot`.
5. Wenn `@userinfobot` das Ergebnis zurückgibt, kopieren Sie die Zahl bei `Id: -100...`.

Die Zahl mit `-100` am Anfang ist die `Session ID (Chat ID)`, die ImgBed braucht.

![Kanal-ID abrufen](../../image/upload/telegram/获取频道id.png)

### 5. Telegram-Kanal in ImgBed ausfüllen

Kehren Sie zum Konfigurationsdialog zurück und tragen Sie die Werte ein:

| UI-Feld | Wert |
| --- | --- |
| Channel Identifier | Eigener Kanalname, z. B. `TelegramPrimary`. |
| Aktiv | Empfohlen. |
| Bot Token | Das Bot-Token von `@BotFather`. |
| Session ID (Chat ID) | Die von `@userinfobot` zurückgegebene Zahl `-100...`. |
| Relay Proxy URL (optional) | Nur bei Bedarf, z. B. `https://your-tg-proxy.example.com`. |
| Bemerkung | Optionale Notizen. |

Klicken Sie anschließend auf Speichern.

![Konfiguration bearbeiten](../../image/upload/telegram/编辑配置.png)

## Prüfung

| Prüfung | So prüfen Sie es |
| --- | --- |
| Kanalkarte erscheint | Nach dem Speichern sollte in den Upload-Einstellungen eine Telegram-Kanalkarte sichtbar sein. |
| Kanal lässt sich aktivieren | Der Aktiv-Schalter bleibt eingeschaltet. |
| Konfiguration ist gespeichert | Die Detailansicht zeigt, dass Bot Token und Chat ID gespeichert wurden. |
| Upload funktioniert | Laden Sie ein Testbild hoch und prüfen Sie, ob es im Zielkanal von Telegram erscheint. |

## Kurzcheck

```text
Create a bot with @BotFather
-> Save the Bot Token
-> Create a Telegram channel
-> Add the bot to the channel and grant administrator permissions
-> Search for @userinfobot and choose Channel
-> Forward any message from the channel to @userinfobot
-> Copy the returned Id: -100...
-> Enter the Bot Token and Chat ID in ImgBed
-> Save and upload a test image
```

## Referenzen

1. Telegram bots: https://core.telegram.org/bots
2. Telegram Bot API: https://core.telegram.org/bots/api
