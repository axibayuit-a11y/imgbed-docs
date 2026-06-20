# GitLab-Packages-Kanal hinzufügen

## Was du vorher brauchst

Du brauchst nur drei Dinge:

| Voraussetzung | Zweck |
| --- | --- |
| GitLab-Konto | Zum Erstellen eines Access Tokens und als Besitzer des Projekts. |
| GitLab Personal Access Token | Damit ImgBed auf die GitLab API zugreifen, Projekte erstellen und Dateien in Generic Packages hochladen kann. |
| Projektname | Du kannst nur den Projektnamen eintragen, z. B. `imgbed`. |

## Einrichtung

### Schritt 1: Bei GitLab anmelden und Access Token erstellen

1. Melde dich bei GitLab an.
2. Klicke oben rechts auf deinen Avatar und öffne `Preferences`.
3. Öffne links `Access Tokens`.
4. Gib dem Token einen gut erkennbaren Namen.
5. Wähle eine Laufzeit, die zu deinem Wartungsrhythmus passt.
6. Aktiviere den Scope `api`.
7. Kopiere und speichere das Token direkt nach dem Erstellen.

![Legacy-Token erstellen](../../image/upload/gitlab-packages/点击生成旧版令牌.png)

![Token-Berechtigungen auswählen](../../image/upload/gitlab-packages/勾选令牌权限.png)

## Schritt 2: GitLab-Packages-Kanal in ImgBed ausfüllen

Nachdem du in den Upload-Einstellungen `GitLab Packages` gewählt hast, fülle diese Felder aus:

| UI-Feld | Eingabe |
| --- | --- |
| Kanalname | Ein frei gewählter Name, z. B. `GitLabPrimary`. |
| Access Token | Das gerade erstellte GitLab Personal Access Token. |
| Projektname | Entweder ein kurzer Projektname wie `imgbed` oder ein vollständiger Pfad wie `username/imgbed`. |
| Privates Repository | Je nach Bedarf ein- oder ausschalten. |
| Bemerkung | Optional, z. B. `Primary upload channel`. |

![Kanal konfigurieren](../../image/upload/gitlab-packages/配置渠道内容.png)

## Schritt 3: Kanal speichern

Klicke nach dem Ausfüllen auf Speichern.

Das System übernimmt dann diese Details:

| Systemverhalten | Beschreibung |
| --- | --- |
| Kurzer Projektname | ImgBed erkennt das aktuelle GitLab-Konto und erweitert den Wert zu einem vollständigen Projektpfad. |
| Vollständiger Projektpfad | ImgBed verwendet `username/project` genau so, wie du es eingetragen hast. |
| Projektprüfung | Wenn du den Pfad deines aktuellen persönlichen Kontos nutzt, erstellt ImgBed das Projekt automatisch, falls es noch nicht existiert. Wenn du manuell einen vollständigen Pfad einträgst, wird dieser direkt verwendet. |
| Öffentlich/privat | Die Projektsichtbarkeit wird entsprechend dem aktuellen Schalter synchronisiert. |

## Kurzcheck

```text
Bei GitLab anmelden
-> Access Token erstellen
-> Nur den Scope api auswählen
-> Zu ImgBed zurückkehren und Token sowie Projektname eintragen
-> Speichern
-> Wenn nur ein Projektname eingetragen ist, ergänzt ImgBed automatisch den aktuellen Benutzernamen
-> Wenn username/project eingetragen ist, nutzt ImgBed den Wert unverändert
-> Testbild hochladen
```
