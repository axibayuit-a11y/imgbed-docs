# GitHub-Releases-Kanal hinzufügen

## Was Sie vorher benötigen

Sie benötigen nur drei Dinge:

| Voraussetzung | Zweck |
| --- | --- |
| GitHub-Konto | Zum Erstellen eines Access Tokens und als Besitzer des Repositories. |
| GitHub Access Token | Damit ImgBed auf die GitHub API zugreifen, Releases erstellen und Dateien hochladen kann. |
| Repository-Name | Sie können nur den Repository-Namen eintragen, z. B. `image`. |

## Einrichtung

### Schritt 1: Bei GitHub anmelden und Access Token erstellen

1. Melden Sie sich bei GitHub an.
2. Klicken Sie oben rechts auf Ihren Avatar und öffnen Sie `Settings`.
3. Öffnen Sie links `Developer settings`.
4. Öffnen Sie `Personal access tokens`.
5. Öffnen Sie `Tokens (classic)`.
6. Klicken Sie auf `Generate new token (classic)`.
7. Geben Sie dem Token einen gut erkennbaren Namen.
8. Wählen Sie eine Laufzeit, die zu Ihrem Wartungsrhythmus passt.
9. Aktivieren Sie die Scopes `repo` und `workflow`.
10. Kopieren Sie und speichern Sie das Token direkt nach dem Erstellen.

![GitHub-Berechtigungen hinzufügen](../../image/upload/github-releases/添加github权限.png)

## Schritt 2: GitHub-Releases-Kanal in ImgBed ausfüllen

Nachdem Sie in den Upload-Einstellungen `GitHub Releases` gewählt haben, füllen Sie diese Felder aus:

| UI-Feld | Eingabe |
| --- | --- |
| Kanalname | Ein frei gewählter Name, z. B. `GitHubPrimary`. |
| Access Token | Das gerade erstellte GitHub Personal Access Token. |
| Repository-Name | Entweder ein kurzer Name wie `image` oder ein vollständiger Pfad wie `username/image`. |
| Privates Repository | Je nach Bedarf ein- oder ausschalten. |
| Bemerkung | Optional, z. B. `Primary upload channel`. |

![GitHub-Kanalkonfiguration ausfüllen](../../image/upload/github-releases/填写github渠道配置.png)

## Schritt 3: Kanal speichern

Klicken Sie nach dem Ausfüllen auf Speichern.

Das System übernimmt dann diese Details:

| Systemverhalten | Beschreibung |
| --- | --- |
| Kurzer Repository-Name | ImgBed erkennt das aktuelle GitHub-Konto und erweitert den Wert zu einem vollständigen Repository-Pfad. |
| Vollständiger Repository-Pfad | ImgBed verwendet `username/repository` genau so, wie Sie es eingetragen haben. |
| Repository-Prüfung | Wenn Sie den Pfad Ihres aktuellen persönlichen Kontos nutzen, erstellt ImgBed das Repository automatisch, falls es noch nicht existiert. Wenn Sie manuell einen vollständigen Pfad einträgst, wird dieser direkt verwendet. |
| Öffentlich/privat | Die Repository-Sichtbarkeit wird entsprechend dem aktuellen Schalter synchronisiert. |

## Kurzcheck

GitHub Releases funktioniert so:

```text
Sign in to GitHub
-> Create an Access Token
-> Return to ImgBed and enter the token and repository name
-> Save
-> If only a repo name is entered, ImgBed adds the current username automatically
-> If username/repo is entered, ImgBed uses it as-is
-> Upload a test image
```
