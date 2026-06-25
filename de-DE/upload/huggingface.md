# Hugging-Face-Kanal hinzufügen

## Was Sie vorher benötigen

Sie benötigen nur drei Dinge:

| Voraussetzung | Zweck |
| --- | --- |
| Hugging-Face-Konto | Zum Erstellen eines Access Tokens und als Besitzer des Repositories. |
| Hugging Face User Access Token | Damit ImgBed auf die Hugging-Face-API zugreifen, Repositories erstellen und Dateien hochladen kann. |
| Repository-Name | Sie können nur den Repository-Namen eintragen, z. B. `image`. |

## Einrichtung

### Schritt 1: Bei Hugging Face anmelden und Access Token erstellen

1. Melden Sie sich bei Hugging Face an.
2. Klicken Sie oben rechts auf Ihren Avatar und öffnen Sie `Settings`.
3. Öffnen Sie links `Access Tokens`.
4. Erstellen Sie ein neues Token.
5. Geben Sie dem Token einen gut erkennbaren Namen.
6. Wählen Sie die Berechtigung `write`.
7. Kopieren Sie und speichern Sie das Token direkt nach dem Erstellen.

![Token erstellen](../../image/upload/huggingface/创建令牌.png)

## Schritt 2: Hugging-Face-Kanal in ImgBed ausfüllen

Nachdem Sie in den Upload-Einstellungen `Hugging Face` gewählt haben, füllen Sie diese Felder aus:

| UI-Feld | Eingabe |
| --- | --- |
| Kanalname | Ein frei gewählter Name, z. B. `hf-primary`. |
| Repository-Name | Entweder ein kurzer Repo-Name wie `image` oder ein vollständiger Pfad wie `username/image`. |
| Access Token | Das gerade erstellte Hugging Face User Access Token. |
| Privates Repository | Je nach Bedarf ein- oder ausschalten. |
| Bemerkung | Optional, z. B. `Primary upload channel`. |

![Kanal hinzufügen](../../image/upload/huggingface/添加渠道.png)

## Schritt 3: Kanal speichern

Klicken Sie nach dem Ausfüllen auf Speichern.

Das System übernimmt dann diese Details:

| Systemverhalten | Beschreibung |
| --- | --- |
| Kurzer Repository-Name | ImgBed erkennt das aktuelle Hugging-Face-Konto und erweitert den Wert zu einem vollständigen Repository-Pfad. |
| Vollständiger Repository-Pfad | ImgBed verwendet `username/repository` genau so, wie Sie es eingetragen haben. |
| Repository-Prüfung | Wenn Sie den Pfad Ihres aktuellen persönlichen Kontos nutzen, versucht ImgBed das Repository zu erstellen, falls es noch nicht existiert. Wenn Sie manuell einen vollständigen Pfad einträgst, wird dieser direkt verwendet. |
| Repository-Typ | Dieser Kanal verwendet ein `dataset`-Repository. |
| Öffentlich/privat | Die Repository-Sichtbarkeit wird entsprechend dem aktuellen Schalter synchronisiert. |

## Kurzcheck

```text
Sign in to Hugging Face
-> Create an Access Token
-> Select write permission
-> Return to ImgBed and enter the token and repository name
-> Save
-> If only a repo name is entered, ImgBed adds the current username automatically
-> If username/repo is entered, ImgBed uses it as-is
-> ImgBed checks or creates the dataset repository
-> Upload a test image
```
