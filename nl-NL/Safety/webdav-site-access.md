# WebDAV-toegang tot de site
De WebDAV-instelling onder Beveiliging stelt je ImgBed-site beschikbaar als WebDAV-eindpunt.

Na inschakelen kun je Windows, macOS, mobiele bestandsbeheerders of elke WebDAV-compatibele client gebruiken om ImgBed-bestanden te bekijken, uploaden, verwijderen en beheren alsof het een externe map is.

Dit is de WebDAV-toegang van de site zelf. Het is iets anders dan het WebDAV-opslagkanaal in Uploadinstellingen. Het uploadkanaal slaat bestanden op in een WebDAV-dienst van derden. Deze instelling laat je ImgBed-site WebDAV-toegang aanbieden aan clients.

## Waar je dit configureert

Open het beheer en ga naar:

```text
System Settings -> Security Settings -> WebDAV
```

Beschikbare instellingen:

- Inschakelen
- Gebruikersnaam
- Wachtwoord
- Afbeeldingslaadmodus
- Standaardkanaal

## Wat deze functie doet

Na inschakelen biedt ImgBed een vaste toegangs-URL:

```text
https://your-domain.com/dav
```

Gebruik deze URL om verbinding te maken met je ImgBed-bestandsmap.

Goede gebruikssituaties:

- ImgBed-bestanden direct vanuit de bestandsbeheerder van je computer bekijken.
- Afbeeldingen naar de WebDAV-map slepen om ze te uploaden.
- ImgBed-mappen ordenen vanuit je lokale bestandsbeheerder.
- WebDAV-compatibele software gebruiken om afbeeldingen te synchroniseren of beheren.
- ImgBed-inhoud openen zonder het beheerpaneel te gebruiken.

## Instellingen

### Inschakelen

Schakelt het WebDAV-eindpunt in.

Wanneer dit uit staat, kunnen clients niet via WebDAV verbinden.

### Gebruikersnaam en wachtwoord

Deze gegevens gebruiken WebDAV-clients bij het verbinden.

Gebruik een aparte WebDAV-gebruikersnaam en wachtwoord. Hergebruik niet je beheerderswachtwoord of uploadwachtwoord.

Als gebruikersnaam of wachtwoord leeg is, kunnen WebDAV-clients niet goed verbinden.

### Afbeeldingslaadmodus

De afbeeldingslaadmodus bepaalt welke afbeeldings-URL WebDAV-clients bij het lezen gebruiken.

Veelgebruikte keuzes:

| Modus | Beschrijving |
| --- | --- |
| Slim laden | ImgBed kiest op basis van context. Aanbevolen voor normaal gebruik. |
| Origineel | Geeft voorkeur aan originele afbeeldingen. |
| Miniatuur | Geeft voorkeur aan miniaturen. Handig voor snelle voorvertoning. |

Weet je het niet zeker, laat dan `Slim laden` staan.

### Standaardkanaal

Het standaardkanaal wordt gebruikt voor WebDAV-uploads.

Wanneer je vanuit Windows of een andere client bestanden naar de WebDAV-map kopieert, uploadt ImgBed ze via het geselecteerde standaard uploadkanaal.

Als er geen standaardkanaal is gekozen, kan bladeren werken, maar uploaden mislukken.

## WebDAV gebruiken in Windows 11

Windows 11 kan WebDAV toevoegen als netwerklocatie.

1. Open `Deze pc`.
2. Kies `Een netwerklocatie toevoegen`.
3. Vul `https://your-domain.com/dav` in.
4. Vul je WebDAV-gebruikersnaam en wachtwoord in wanneer daarom wordt gevraagd.
5. Rond de wizard af. De WebDAV-map kan daarna in Verkenner worden geopend.

![WebDAV toevoegen in Windows 11](../../image/Safety/webdav在win11配置.png)

Na toevoegen verschijnt de WebDAV-map in Windows Verkenner. Je kunt bestanden openen, kopiëren en beheren zoals in een normale map.

![WebDAV in Windows](../../image/Safety/webdav在win显示效果.png)

## Ondersteunde acties

Na een succesvolle WebDAV-verbinding kun je meestal:

- bestanden en mappen bekijken.
- bestanden uploaden.
- mappen maken.
- bestanden of mappen hernoemen.
- bestanden verplaatsen.
- bestanden verwijderen.

WebDAV is geschikt voor dagelijkse toegang en kleinschalig bestandsbeheer. Gebruik voor grote verplaatsingen, bulkverwijderingen of complexe ordening het beheerpaneel.

## Beheer van aanmeldapparaten

Succesvolle WebDAV-verbindingen verschijnen ook onder het WebDAV-tabblad in Beheer van aanmeldapparaten.

Je kunt WebDAV-clients daar bekijken en oude apparaten offline forceren wanneer nodig.

Als je de WebDAV-gebruikersnaam of het wachtwoord wijzigt, moeten oude clients opnieuw inloggen.

## FAQ

### Windows blijft vragen om gebruikersnaam en wachtwoord

Controleer:

- De URL is `https://your-domain.com/dav`.
- Gebruikersnaam en wachtwoord komen overeen met de WebDAV-instellingen.
- WebDAV is ingeschakeld.
- De site is bereikbaar via HTTPS.

### Bladeren werkt, maar uploaden mislukt

Controleer `Standaardkanaal`.

WebDAV-uploads hebben een standaard uploadkanaal nodig. Als dit ontbreekt, uitgeschakeld is of verkeerd is ingesteld, kunnen uploads mislukken.

### Toegangssnelheid is instabiel

WebDAV-prestaties hangen af van client, netwerk, aantal bestanden en standaard uploadkanaal.

Heeft een map veel bestanden, organiseer ze dan in submappen in plaats van te veel bestanden in één map te bewaren.

## Beveiligingsadvies

- Gebruik HTTPS voor WebDAV-toegang.
- Stel een sterk wachtwoord in.
- Deel het WebDAV-wachtwoord niet met mensen die je niet vertrouwt.
- Zet WebDAV uit wanneer je het niet gebruikt.
- Schoon ongebruikte WebDAV-apparaten regelmatig op in Beheer van aanmeldapparaten.

## Bestandsgrootte bij WebDAV-upload

WebDAV-clients gebruiken niet de chunk-uploadflow van de uploadpagina in de webinterface. Gebruik voor bestanden boven de onderstaande aanbevolen limieten liever de webuploadpagina.

| Standaard uploadkanaal | Aanbevolen limiet per WebDAV-bestand |
| --- | ---: |
| Telegram | 20 MB |
| Discord | 10 MB |
| Cloudflare R2 | 30 MB |
| S3 | 30 MB |
| GitHub Releases | 64 MB |
| GitLab Packages | 64 MB |
| Hugging Face | 20 MB |
| OneDrive | 30 MB |
| Google Drive | 30 MB |
| Dropbox | 30 MB |
| Yandex Disk | 30 MB |
| pCloud | 30 MB |
| WebDAV | 64 MB |

