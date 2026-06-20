# GitHub-Releases-Kanal hinzufügen

## Was du vorher brauchst

Du brauchst nur drei Dinge:

| Voraussetzung | Zweck |
| --- | --- |
| GitHub-Konto | Zum Erstellen eines Access Tokens und als Besitzer des Repositories. |
| GitHub Access Token | Damit ImgBed auf die GitHub API zugreifen, Releases erstellen und Dateien hochladen kann. |
| Repository-Name | Du kannst nur den Repository-Namen eintragen, z. B. `image`. |

## Einrichtung

### Schritt 1: Bei GitHub anmelden und Access Token erstellen

1. Melde dich bei GitHub an.
2. Klicke oben rechts auf deinen Avatar und öffne `Settings`.
3. Öffne links `Developer settings`.
4. Öffne `Personal access tokens`.
5. Öffne `Tokens (classic)`.
6. Klicke auf `Generate new token (classic)`.
7. Gib dem Token einen gut erkennbaren Namen.
8. Wähle eine Laufzeit, die zu deinem Wartungsrhythmus passt.
9. Aktiviere die Scopes `repo` und `workflow`.
10. Kopiere und speichere das Token direkt nach dem Erstellen.

![GitHub-Berechtigungen hinzufügen](../../image/upload/github-releases/添加github权限.png)

## Schritt 2: GitHub-Releases-Kanal in ImgBed ausfüllen

Nachdem du in den Upload-Einstellungen `GitHub Releases` gewählt hast, fülle diese Felder aus:

| UI-Feld | Eingabe |
| --- | --- |
| Kanalname | Ein frei gewählter Name, z. B. `GitHubPrimary`. |
| Access Token | Das gerade erstellte GitHub Personal Access Token. |
| Repository-Name | Entweder ein kurzer Name wie `image` oder ein vollständiger Pfad wie `username/image`. |
| Privates Repository | Je nach Bedarf ein- oder ausschalten. |
| Bemerkung | Optional, z. B. `Primary upload channel`. |

![GitHub-Kanalkonfiguration ausfüllen](../../image/upload/github-releases/填写github渠道配置.png)

## Schritt 3: Kanal speichern

Klicke nach dem Ausfüllen auf Speichern.

Das System übernimmt dann diese Details:

| Systemverhalten | Beschreibung |
| --- | --- |
| Kurzer Repository-Name | ImgBed erkennt das aktuelle GitHub-Konto und erweitert den Wert zu einem vollständigen Repository-Pfad. |
| Vollständiger Repository-Pfad | ImgBed verwendet `username/repository` genau so, wie du es eingetragen hast. |
| Repository-Prüfung | Wenn du den Pfad deines aktuellen persönlichen Kontos nutzt, erstellt ImgBed das Repository automatisch, falls es noch nicht existiert. Wenn du manuell einen vollständigen Pfad einträgst, wird dieser direkt verwendet. |
| Öffentlich/privat | Die Repository-Sichtbarkeit wird entsprechend dem aktuellen Schalter synchronisiert. |

## Kurzcheck

GitHub Releases funktioniert so:

```text
Bei GitHub anmelden
-> Access Token erstellen
-> Zu ImgBed zurückkehren und Token sowie Repository-Name eintragen
-> Speichern
-> Wenn nur ein Repo-Name eingetragen ist, ergänzt ImgBed automatisch den aktuellen Benutzernamen
-> Wenn username/repo eingetragen ist, nutzt ImgBed den Wert unverändert
-> Testbild hochladen
```
