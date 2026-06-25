# GitLab-Packages-Kanal hinzufügen

## Was Sie vorher benötigen

Sie benötigen nur drei Dinge:

| Voraussetzung | Zweck |
| --- | --- |
| GitLab-Konto | Zum Erstellen eines Access Tokens und als Besitzer des Projekts. |
| GitLab Personal Access Token | Damit ImgBed auf die GitLab API zugreifen, Projekte erstellen und Dateien in Generic Packages hochladen kann. |
| Projektname | Sie können nur den Projektnamen eintragen, z. B. `imgbed`. |

## Einrichtung

### Schritt 1: Bei GitLab anmelden und Access Token erstellen

1. Melden Sie sich bei GitLab an.
2. Klicken Sie oben rechts auf Ihren Avatar und öffnen Sie `Preferences`.
3. Öffnen Sie links `Access Tokens`.
4. Geben Sie dem Token einen gut erkennbaren Namen.
5. Wählen Sie eine Laufzeit, die zu Ihrem Wartungsrhythmus passt.
6. Aktivieren Sie den Scope `api`.
7. Kopieren Sie und speichern Sie das Token direkt nach dem Erstellen.

![Legacy-Token erstellen](../../image/upload/gitlab-packages/点击生成旧版令牌.png)

![Token-Berechtigungen auswählen](../../image/upload/gitlab-packages/勾选令牌权限.png)

## Schritt 2: GitLab-Packages-Kanal in ImgBed ausfüllen

Nachdem Sie in den Upload-Einstellungen `GitLab Packages` gewählt haben, füllen Sie diese Felder aus:

| UI-Feld | Eingabe |
| --- | --- |
| Kanalname | Ein frei gewählter Name, z. B. `GitLabPrimary`. |
| Access Token | Das gerade erstellte GitLab Personal Access Token. |
| Projektname | Entweder ein kurzer Projektname wie `imgbed` oder ein vollständiger Pfad wie `username/imgbed`. |
| Privates Repository | Je nach Bedarf ein- oder ausschalten. |
| Bemerkung | Optional, z. B. `Primary upload channel`. |

![Kanal konfigurieren](../../image/upload/gitlab-packages/配置渠道内容.png)

## Schritt 3: Kanal speichern

Klicken Sie nach dem Ausfüllen auf Speichern.

Das System übernimmt dann diese Details:

| Systemverhalten | Beschreibung |
| --- | --- |
| Kurzer Projektname | ImgBed erkennt das aktuelle GitLab-Konto und erweitert den Wert zu einem vollständigen Projektpfad. |
| Vollständiger Projektpfad | ImgBed verwendet `username/project` genau so, wie Sie es eingetragen haben. |
| Projektprüfung | Wenn Sie den Pfad Ihres aktuellen persönlichen Kontos nutzen, erstellt ImgBed das Projekt automatisch, falls es noch nicht existiert. Wenn Sie manuell einen vollständigen Pfad einträgst, wird dieser direkt verwendet. |
| Öffentlich/privat | Die Projektsichtbarkeit wird entsprechend dem aktuellen Schalter synchronisiert. |

## Kurzcheck

```text
Sign in to GitLab
-> Create an Access Token
-> Select only the api scope
-> Return to ImgBed and enter the token and project name
-> Save
-> If only a project name is entered, ImgBed adds the current username automatically
-> If username/project is entered, ImgBed uses it as-is
-> Upload a test image
```
