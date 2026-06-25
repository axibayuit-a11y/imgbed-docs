# Een Hugging Face-kanaal toevoegen

## Wat je vooraf nodig hebt

Je hebt maar drie dingen nodig:

| Vereiste | Doel |
| --- | --- |
| Hugging Face-account | Voor het maken van een access token en als eigenaar van de repository. |
| Hugging Face User Access Token | Hiermee kan ImgBed de Hugging Face API gebruiken, repositories maken en bestanden uploaden. |
| Repositorynaam | Je kunt alleen de repositorynaam invullen, bijvoorbeeld `image`. |

## Instellen

### Stap 1: Log in bij Hugging Face en maak een Access Token

1. Log in bij Hugging Face.
2. Klik rechtsboven op je avatar en open `Settings`.
3. Open `Access Tokens` in de linkerzijbalk.
4. Maak een nieuw token.
5. Geef het token een herkenbare naam.
6. Selecteer de machtiging `write`.
7. Kopieer en bewaar het token direct nadat het is aangemaakt.

![Token maken](../../image/upload/huggingface/创建令牌.png)

## Stap 2: Vul het Hugging Face-kanaal in ImgBed in

Nadat je in Uploadinstellingen `Hugging Face` hebt gekozen, vul je in:

| UI-veld | Wat je invult |
| --- | --- |
| Kanaalnaam | Een naam naar keuze, bijvoorbeeld `hf-primary`. |
| Repositorynaam | Een korte repo-naam zoals `image`, of een volledig pad zoals `username/image`. |
| Access Token | Het Hugging Face User Access Token dat je net hebt gemaakt. |
| Privérepository | Zet aan of uit naar behoefte. |
| Opmerking | Optioneel, bijvoorbeeld `Primary upload channel`. |

![Kanaal toevoegen](../../image/upload/huggingface/添加渠道.png)

## Stap 3: Sla het kanaal op

Klik na het invullen op Opslaan.

Het systeem handelt deze details af:

| Systeemgedrag | Beschrijving |
| --- | --- |
| Korte repositorynaam | ImgBed herkent het huidige Hugging Face-account en vult dit aan tot een volledig repositorypad. |
| Volledig repositorypad | ImgBed gebruikt `username/repository` exact zoals ingevoerd. |
| Repositorycontrole | Gebruik je het pad van je huidige persoonlijke account, dan probeert ImgBed de repository aan te maken als die niet bestaat. Vul je handmatig een volledig pad in, dan gebruikt ImgBed dat pad direct. |
| Repositorytype | Dit kanaal gebruikt een `dataset`-repository. |
| Openbaar/privé | De zichtbaarheid van de repository wordt gesynchroniseerd met de huidige schakelaar. |

## Snelle checklist

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
