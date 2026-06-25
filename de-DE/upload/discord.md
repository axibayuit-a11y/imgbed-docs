# Discord-Kanal hinzufügen

## Was Sie vorher benötigen

| Voraussetzung | Zweck |
| --- | --- |
| Discord-Konto | Zum Erstellen von Server, Kanal und Entwickleranwendung. |
| Discord-Server | Der Bot muss einem Server beitreten, bevor er auf einen Kanal zugreifen kann. |
| Textkanal | Bilder und Dateien werden in diesen Kanal gesendet. |
| Discord Developer Portal | Zum Erstellen der Anwendung, des Bots und des `Bot Token`. |

## Wo hinzufügen

1. Öffnen Sie die Systemeinstellungen.
2. Gehen Sie zu Upload-Einstellungen.
3. Klicken Sie oben rechts auf Kanal hinzufügen.
4. Wählen Sie `Discord`.

## Feldübersicht

| Feld | Funktion | Erforderlich |
| --- | --- | --- |
| Kanalname | Ein gut erkennbarer Name für diesen Kanal, z. B. `Discord Primary`. | Erforderlich |
| Bot Token | Token des Discord-Bots. | Erforderlich |
| Channel ID | ID des Ziel-Textkanals. | Erforderlich |
| Proxy URL (optional) | Nur verwenden, wenn der Zugriff auf das Discord CDN instabil ist. Vollständige URL inklusive `https://` eintragen. | Optional |

## Einrichtungsschritte

### 1. Discord-Server und Textkanal erstellen

1. Öffnen Sie Discord.
2. Erstellen Sie einen neuen Server oder verwenden Sie einen bestehenden Server, den Sie besitzt.
3. Erstellen Sie in diesem Server einen Textkanal.

![Server erstellen](../../image/upload/discord/创建服务器.png)

### 2. Bot im Discord Developer Portal erstellen

1. Öffnen Sie das Discord Developer Portal: `https://discord.com/developers/applications`
2. Klicken Sie auf `New Application`.
3. Geben Sie einen Anwendungsnamen ein und erstellen Sie sie.
4. Öffnen Sie links die Seite `Bot`.
5. Erzeuge oder setzen Sie das Token auf der `Bot`-Seite zurück.
6. Speichern Sie das Token.

Dieses Token tragen Sie in ImgBed als `Bot Token` ein.

![Bot-Token ansehen](../../image/upload/discord/查看机器人令牌.png)

### 3. OAuth2-Einladungslink erstellen und Bot installieren

1. Öffnen Sie links die Seite `OAuth2`.
2. Wählen Sie unter Scopes `bot`.
3. Aktivieren Sie im Berechtigungsbereich diese Rechte:

| Berechtigung | Erforderlich |
| --- | --- |
| View Channels | Ja |
| Send Messages | Ja |
| Attach Files | Ja |
| Read Message History | Ja |

4. Prüfen Sie unten auf der Seite, dass der Integrationstyp `Guild Install` ist.
5. Kopieren Sie die generierte URL.
6. Öffnen Sie diese URL im Browser.
7. Wählen Sie den Zielserver aus.
8. Schließe die Autorisierung ab.

![Bot-Berechtigungen in OAuth2 auswählen](../../image/upload/discord/在oa2勾选机器人权限.png)

![Bot in den Kanal einladen](../../image/upload/discord/邀请机器人到频道.png)

### 4. Entwicklermodus aktivieren und Channel ID kopieren

1. Klicken Sie unten links neben Ihrem Avatar auf das Zahnrad.
2. Öffnen Sie links `Advanced`.
3. Aktivieren Sie den Entwicklermodus.
4. Gehen Sie zurück zum Ziel-Textkanal.
5. Klicken Sie mit der rechten Maustaste auf den Kanalnamen.
6. Klicken Sie auf Copy Channel ID.

Die kopierte Zahl ist die `Channel ID`, die ImgBed braucht.

![Entwicklermodus aktivieren](../../image/upload/discord/开启开发者权限.png)

![Channel ID kopieren](../../image/upload/discord/复制群频道id.png)

### 5. Discord-Kanal in ImgBed ausfüllen

Kehren Sie zum Konfigurationsdialog zurück und füllen Sie die Felder aus:

| UI-Feld | Wert |
| --- | --- |
| Kanalname | Eigener Kanalname, z. B. `DiscordPrimary`. |
| Bot Token | Das Token von der `Bot`-Seite im Discord Developer Portal. |
| Channel ID | Die aus Discord kopierte Channel ID. |
| Proxy URL (optional) | Nur bei Bedarf, z. B. `https://your-proxy.example.com`. |

Klicken Sie anschließend auf Speichern.

![Discord-Kanalkonfiguration hinzufügen](../../image/upload/discord/添加dc新渠道配置.png)

## Prüfung

| Prüfung | So prüfen Sie es |
| --- | --- |
| Kanalkarte erscheint | Nach dem Speichern sollte in den Upload-Einstellungen eine Discord-Kanalkarte sichtbar sein. |
| Kanal lässt sich aktivieren | Der Aktiv-Schalter bleibt eingeschaltet. |
| Konfiguration ist gespeichert | Die Detailansicht zeigt, dass Bot Token und Channel ID gespeichert wurden. |
| Upload funktioniert | Laden Sie ein Testbild hoch und prüfen Sie, ob es im Ziel-Textkanal von Discord erscheint. |

## Kurzcheck

```text
Create a Discord server
-> Create a text channel
-> Create a bot in the Discord Developer Portal
-> Save the Bot Token from the Bot page
-> In OAuth2, select bot, View Channels, Send Messages, Attach Files, and Read Message History
-> Copy the generated URL and authorize the bot for the target server
-> Make sure the target text channel grants the same permissions
-> Enable Developer Mode
-> Right-click the target text channel and copy the Channel ID
-> Enter the Bot Token and Channel ID in ImgBed
-> Save and upload a test image
```

## Referenzen

1. Discord Developers Getting Started: https://docs.discord.com/developers/quick-start/getting-started
2. Discord Help - Where can I find my User/Server/Message ID: https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID
