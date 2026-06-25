# Een GitHub Releases-kanaal toevoegen

## Wat je vooraf nodig hebt

Je hebt maar drie dingen nodig:

| Vereiste | Doel |
| --- | --- |
| GitHub-account | Voor het maken van een access token en als eigenaar van de repository. |
| GitHub Access Token | Hiermee kan ImgBed de GitHub API gebruiken, releases maken en bestanden uploaden. |
| Repositorynaam | Je kunt alleen de repositorynaam invullen, bijvoorbeeld `image`. |

## Instellen

### Stap 1: Log in bij GitHub en maak een Access Token

1. Log in bij GitHub.
2. Klik rechtsboven op je avatar en open `Settings`.
3. Open `Developer settings` in de linkerzijbalk.
4. Open `Personal access tokens`.
5. Open `Tokens (classic)`.
6. Klik op `Generate new token (classic)`.
7. Geef het token een herkenbare naam.
8. Kies een verloopdatum die past bij je beheerplanning.
9. Selecteer de scopes `repo` en `workflow`.
10. Kopieer en bewaar het token direct nadat het is aangemaakt.

![GitHub-rechten toevoegen](../../image/upload/github-releases/添加github权限.png)

## Stap 2: Vul het GitHub Releases-kanaal in ImgBed in

Nadat je in Uploadinstellingen `GitHub Releases` hebt gekozen, vul je in:

| UI-veld | Wat je invult |
| --- | --- |
| Kanaalnaam | Een naam naar keuze, bijvoorbeeld `GitHubPrimary`. |
| Access Token | Het GitHub Personal Access Token dat je net hebt gemaakt. |
| Repositorynaam | Een korte naam zoals `image`, of een volledig pad zoals `username/image`. |
| Privérepository | Zet aan of uit naar behoefte. |
| Opmerking | Optioneel, bijvoorbeeld `Primary upload channel`. |

![GitHub-kanaalconfiguratie invullen](../../image/upload/github-releases/填写github渠道配置.png)

## Stap 3: Sla het kanaal op

Klik na het invullen op Opslaan.

Het systeem handelt deze details af:

| Systeemgedrag | Beschrijving |
| --- | --- |
| Korte repositorynaam | ImgBed herkent het huidige GitHub-account en vult dit aan tot een volledig repositorypad. |
| Volledig repositorypad | ImgBed gebruikt `username/repository` exact zoals ingevoerd. |
| Repositorycontrole | Gebruik je het pad van je huidige persoonlijke account, dan maakt ImgBed de repository automatisch aan als die niet bestaat. Vul je handmatig een volledig pad in, dan gebruikt ImgBed dat pad direct. |
| Openbaar/privé | De zichtbaarheid van de repository wordt gesynchroniseerd met de huidige schakelaar. |

## Snelle checklist

GitHub Releases werkt zo:

```text
Sign in to GitHub
-> Create an Access Token
-> Return to ImgBed and enter the token and repository name
-> Save
-> If only a repo name is entered, ImgBed adds the current username automatically
-> If username/repo is entered, ImgBed uses it as-is
-> Upload a test image
```
