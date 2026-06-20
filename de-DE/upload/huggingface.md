# Hugging-Face-Kanal hinzufügen

## Was du vorher brauchst

Du brauchst nur drei Dinge:

| Voraussetzung | Zweck |
| --- | --- |
| Hugging-Face-Konto | Zum Erstellen eines Access Tokens und als Besitzer des Repositories. |
| Hugging Face User Access Token | Damit ImgBed auf die Hugging-Face-API zugreifen, Repositories erstellen und Dateien hochladen kann. |
| Repository-Name | Du kannst nur den Repository-Namen eintragen, z. B. `image`. |

## Einrichtung

### Schritt 1: Bei Hugging Face anmelden und Access Token erstellen

1. Melde dich bei Hugging Face an.
2. Klicke oben rechts auf deinen Avatar und öffne `Settings`.
3. Öffne links `Access Tokens`.
4. Erstelle ein neues Token.
5. Gib dem Token einen gut erkennbaren Namen.
6. Wähle die Berechtigung `write`.
7. Kopiere und speichere das Token direkt nach dem Erstellen.

![Token erstellen](../../image/upload/huggingface/创建令牌.png)

## Schritt 2: Hugging-Face-Kanal in ImgBed ausfüllen

Nachdem du in den Upload-Einstellungen `Hugging Face` gewählt hast, fülle diese Felder aus:

| UI-Feld | Eingabe |
| --- | --- |
| Kanalname | Ein frei gewählter Name, z. B. `hf-primary`. |
| Repository-Name | Entweder ein kurzer Repo-Name wie `image` oder ein vollständiger Pfad wie `username/image`. |
| Access Token | Das gerade erstellte Hugging Face User Access Token. |
| Privates Repository | Je nach Bedarf ein- oder ausschalten. |
| Bemerkung | Optional, z. B. `Primary upload channel`. |

![Kanal hinzufügen](../../image/upload/huggingface/添加渠道.png)

## Schritt 3: Kanal speichern

Klicke nach dem Ausfüllen auf Speichern.

Das System übernimmt dann diese Details:

| Systemverhalten | Beschreibung |
| --- | --- |
| Kurzer Repository-Name | ImgBed erkennt das aktuelle Hugging-Face-Konto und erweitert den Wert zu einem vollständigen Repository-Pfad. |
| Vollständiger Repository-Pfad | ImgBed verwendet `username/repository` genau so, wie du es eingetragen hast. |
| Repository-Prüfung | Wenn du den Pfad deines aktuellen persönlichen Kontos nutzt, versucht ImgBed das Repository zu erstellen, falls es noch nicht existiert. Wenn du manuell einen vollständigen Pfad einträgst, wird dieser direkt verwendet. |
| Repository-Typ | Dieser Kanal verwendet ein `dataset`-Repository. |
| Öffentlich/privat | Die Repository-Sichtbarkeit wird entsprechend dem aktuellen Schalter synchronisiert. |

## Kurzcheck

```text
Bei Hugging Face anmelden
-> Access Token erstellen
-> Berechtigung write auswählen
-> Zu ImgBed zurückkehren und Token sowie Repository-Name eintragen
-> Speichern
-> Wenn nur ein Repo-Name eingetragen ist, ergänzt ImgBed automatisch den aktuellen Benutzernamen
-> Wenn username/repo eingetragen ist, nutzt ImgBed den Wert unverändert
-> ImgBed prüft oder erstellt das dataset-Repository
-> Testbild hochladen
```
