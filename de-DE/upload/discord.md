# Discord-Kanal hinzufügen

## Was du vorher brauchst

| Voraussetzung | Zweck |
| --- | --- |
| Discord-Konto | Zum Erstellen von Server, Kanal und Entwickleranwendung. |
| Discord-Server | Der Bot muss einem Server beitreten, bevor er auf einen Kanal zugreifen kann. |
| Textkanal | Bilder und Dateien werden in diesen Kanal gesendet. |
| Discord Developer Portal | Zum Erstellen der Anwendung, des Bots und des `Bot Token`. |

## Wo hinzufügen

1. Öffne die Systemeinstellungen.
2. Gehe zu Upload-Einstellungen.
3. Klicke oben rechts auf Kanal hinzufügen.
4. Wähle `Discord`.

## Feldübersicht

| Feld | Funktion | Erforderlich |
| --- | --- | --- |
| Kanalname | Ein gut erkennbarer Name für diesen Kanal, z. B. `Discord Primary`. | Erforderlich |
| Bot Token | Token des Discord-Bots. | Erforderlich |
| Channel ID | ID des Ziel-Textkanals. | Erforderlich |
| Proxy URL (optional) | Nur verwenden, wenn der Zugriff auf das Discord CDN instabil ist. Vollständige URL inklusive `https://` eintragen. | Optional |

## Einrichtungsschritte

### 1. Discord-Server und Textkanal erstellen

1. Öffne Discord.
2. Erstelle einen neuen Server oder verwende einen bestehenden Server, den du besitzt.
3. Erstelle in diesem Server einen Textkanal.

![Server erstellen](../../image/upload/discord/创建服务器.png)

### 2. Bot im Discord Developer Portal erstellen

1. Öffne das Discord Developer Portal: `https://discord.com/developers/applications`
2. Klicke auf `New Application`.
3. Gib einen Anwendungsnamen ein und erstelle sie.
4. Öffne links die Seite `Bot`.
5. Erzeuge oder setze das Token auf der `Bot`-Seite zurück.
6. Speichere das Token.

Dieses Token trägst du in ImgBed als `Bot Token` ein.

![Bot-Token ansehen](../../image/upload/discord/查看机器人令牌.png)

### 3. OAuth2-Einladungslink erstellen und Bot installieren

1. Öffne links die Seite `OAuth2`.
2. Wähle unter Scopes `bot`.
3. Aktiviere im Berechtigungsbereich diese Rechte:

| Berechtigung | Erforderlich |
| --- | --- |
| View Channels | Ja |
| Send Messages | Ja |
| Attach Files | Ja |
| Read Message History | Ja |

4. Prüfe unten auf der Seite, dass der Integrationstyp `Guild Install` ist.
5. Kopiere die generierte URL.
6. Öffne diese URL im Browser.
7. Wähle den Zielserver aus.
8. Schließe die Autorisierung ab.

![Bot-Berechtigungen in OAuth2 auswählen](../../image/upload/discord/在oa2勾选机器人权限.png)

![Bot in den Kanal einladen](../../image/upload/discord/邀请机器人到频道.png)

### 4. Entwicklermodus aktivieren und Channel ID kopieren

1. Klicke unten links neben deinem Avatar auf das Zahnrad.
2. Öffne links `Advanced`.
3. Aktiviere den Entwicklermodus.
4. Gehe zurück zum Ziel-Textkanal.
5. Klicke mit der rechten Maustaste auf den Kanalnamen.
6. Klicke auf Copy Channel ID.

Die kopierte Zahl ist die `Channel ID`, die ImgBed braucht.

![Entwicklermodus aktivieren](../../image/upload/discord/开启开发者权限.png)

![Channel ID kopieren](../../image/upload/discord/复制群频道id.png)

### 5. Discord-Kanal in ImgBed ausfüllen

Kehre zum Konfigurationsdialog zurück und fülle die Felder aus:

| UI-Feld | Wert |
| --- | --- |
| Kanalname | Eigener Kanalname, z. B. `DiscordPrimary`. |
| Bot Token | Das Token von der `Bot`-Seite im Discord Developer Portal. |
| Channel ID | Die aus Discord kopierte Channel ID. |
| Proxy URL (optional) | Nur bei Bedarf, z. B. `https://your-proxy.example.com`. |

Klicke anschließend auf Speichern.

![Discord-Kanalkonfiguration hinzufügen](../../image/upload/discord/添加dc新渠道配置.png)

## Prüfung

| Prüfung | So prüfst du es |
| --- | --- |
| Kanalkarte erscheint | Nach dem Speichern sollte in den Upload-Einstellungen eine Discord-Kanalkarte sichtbar sein. |
| Kanal lässt sich aktivieren | Der Aktiv-Schalter bleibt eingeschaltet. |
| Konfiguration ist gespeichert | Die Detailansicht zeigt, dass Bot Token und Channel ID gespeichert wurden. |
| Upload funktioniert | Lade ein Testbild hoch und prüfe, ob es im Ziel-Textkanal von Discord erscheint. |

## Kurzcheck

```text
Discord-Server erstellen
-> Textkanal erstellen
-> Bot im Discord Developer Portal erstellen
-> Bot Token von der Bot-Seite speichern
-> In OAuth2 bot, View Channels, Send Messages, Attach Files und Read Message History auswählen
-> Generierte URL kopieren und Bot für den Zielserver autorisieren
-> Sicherstellen, dass der Ziel-Textkanal dieselben Berechtigungen erlaubt
-> Entwicklermodus aktivieren
-> Ziel-Textkanal rechtsklicken und Channel ID kopieren
-> Bot Token und Channel ID in ImgBed eintragen
-> Speichern und Testbild hochladen
```

## Referenzen

1. Discord Developers Getting Started: https://docs.discord.com/developers/quick-start/getting-started
2. Discord Help - Where can I find my User/Server/Message ID: https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID
