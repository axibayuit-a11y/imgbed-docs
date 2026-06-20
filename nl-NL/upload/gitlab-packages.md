# Een GitLab Packages-kanaal toevoegen

## Wat je vooraf nodig hebt

Je hebt maar drie dingen nodig:

| Vereiste | Doel |
| --- | --- |
| GitLab-account | Voor het maken van een access token en als eigenaar van het project. |
| GitLab Personal Access Token | Hiermee kan ImgBed de GitLab API gebruiken, projecten maken en bestanden uploaden naar Generic Packages. |
| Projectnaam | Je kunt alleen de projectnaam invullen, bijvoorbeeld `imgbed`. |

## Instellen

### Stap 1: Log in bij GitLab en maak een Access Token

1. Log in bij GitLab.
2. Klik rechtsboven op je avatar en open `Preferences`.
3. Open `Access Tokens` in de linkerzijbalk.
4. Geef het token een herkenbare naam.
5. Kies een verloopdatum die past bij je beheerplanning.
6. Selecteer de scope `api`.
7. Kopieer en bewaar het token direct nadat het is aangemaakt.

![Legacy-token maken](../../image/upload/gitlab-packages/点击生成旧版令牌.png)

![Tokenrechten selecteren](../../image/upload/gitlab-packages/勾选令牌权限.png)

## Stap 2: Vul het GitLab Packages-kanaal in ImgBed in

Nadat je in Uploadinstellingen `GitLab Packages` hebt gekozen, vul je in:

| UI-veld | Wat je invult |
| --- | --- |
| Kanaalnaam | Een naam naar keuze, bijvoorbeeld `GitLabPrimary`. |
| Access Token | Het GitLab Personal Access Token dat je net hebt gemaakt. |
| Projectnaam | Een korte projectnaam zoals `imgbed`, of een volledig pad zoals `username/imgbed`. |
| Privérepository | Zet aan of uit naar behoefte. |
| Opmerking | Optioneel, bijvoorbeeld `Primary upload channel`. |

![Kanaal configureren](../../image/upload/gitlab-packages/配置渠道内容.png)

## Stap 3: Sla het kanaal op

Klik na het invullen op Opslaan.

Het systeem handelt deze details af:

| Systeemgedrag | Beschrijving |
| --- | --- |
| Korte projectnaam | ImgBed herkent het huidige GitLab-account en vult dit aan tot een volledig projectpad. |
| Volledig projectpad | ImgBed gebruikt `username/project` exact zoals ingevoerd. |
| Projectcontrole | Gebruik je het pad van je huidige persoonlijke account, dan maakt ImgBed het project automatisch aan als het niet bestaat. Vul je handmatig een volledig pad in, dan gebruikt ImgBed dat pad direct. |
| Openbaar/privé | De zichtbaarheid van het project wordt gesynchroniseerd met de huidige schakelaar. |

## Snelle checklist

```text
Log in bij GitLab
-> Maak een Access Token
-> Selecteer alleen de api-scope
-> Ga terug naar ImgBed en vul token en projectnaam in
-> Sla op
-> Als alleen een projectnaam is ingevuld, voegt ImgBed automatisch de huidige gebruikersnaam toe
-> Als username/project is ingevuld, gebruikt ImgBed dit zoals het is
-> Upload een testafbeelding
```
