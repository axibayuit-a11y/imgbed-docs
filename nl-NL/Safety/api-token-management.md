# Configuratie beheren met API Token

Configuratiebeheer met een API Token is bedoeld voor automatiseringsscripts, beheerhulpmiddelen en externe controlepanelen. Het kan uploadkanalen, beveiligingsinstellingen, pagina-instellingen, overige instellingen en lichte federatierelaties lezen en wijzigen zonder het beheerpaneel te openen.

De beheerrechten openen alleen lichte acties die geschikt zijn voor scripts. Zware acties waarvoor bevestiging in de webinterface, batches in de gebruikersinterface of het opschonen van federatie-indexen nodig zijn, blijven in het beheerpaneel.

![API Token bewerken](../../image/Safety/apitoken/编辑api token.png)

## Voorbereiding

Open in het beheerpaneel:

```text
System Settings -> Security Settings -> API Token
```

Controleer bij het maken of bewerken van een API Token dat beheer is toegestaan. Dit recht kan siteconfiguratie wijzigen, dus geef het alleen aan vertrouwde scripts of gebruikers.

Schrijfacties van de drie beheerscripts zijn standaard een preview en slaan niets op. Controleer de preview en voeg daarna `--apply` toe om echt te schrijven.

Je kunt het Token ook in een omgevingsvariabele zetten:

```powershell
$env:IMGBED_API_TOKEN="your API Token"
```

## Beheerscripts downloaden

De documentatie bevat drie Node.js-scripts:

| Script | Gebruik |
| --- | --- |
| <a href="/tools/imgbed-token-upload-settings.mjs" download>Script voor uploadinstellingen downloaden</a> | Beheert uploadkanalen, subkanalen en load balancing |
| <a href="/tools/imgbed-token-site-settings.mjs" download>Script voor site-instellingen downloaden</a> | Beheert beveiliging, pagina's en overige instellingen |
| <a href="/tools/imgbed-token-federation.mjs" download>Script voor federatierelaties downloaden</a> | Beheert lichte relatieacties, aanvragen en berichten |

Je hebt lokaal Node.js 18 of hoger nodig.

### Algemene parameters

| Parameter | Verplicht | Beschrijving |
| --- | --- | --- |
| `--base-url <url>` | Ja | Adres van de ImgBed-site, bijvoorbeeld `https://image.ai6.me` |
| `--token <token>` | Ja | API Token; kan ook via `IMGBED_API_TOKEN` |
| `--retries <n>` | Nee | Aantal pogingen bij tijdelijke fouten; standaard `3` |
| `--timeout-ms <n>` | Nee | Time-out per verzoek; standaard `180000` |
| `--output <pretty\|json>` | Nee | Uitvoerformaat; standaard `pretty`; gebruik `json` voor automatisering |
| `--save-response <path>` | Nee | Slaat het eindresultaat op als JSON-bestand |
| `--apply` | Nee | Voert de schrijfactie echt uit; zonder deze optie alleen preview |
| `-h` / `--help` | Nee | Toont de hulp van het script |

## Uploadinstellingen

Het script voor uploadinstellingen kan subkanalen tonen, lezen, maken of bewerken en verwijderen. Het kan ook load balancing voor een hoofdkanaal wijzigen.

```powershell
node imgbed-token-upload-settings.mjs --base-url "https://your-domain" --token "your API Token" --list
```

### Parameters voor uploadinstellingen

| Parameter | Beschrijving |
| --- | --- |
| `--list` | Toont groepen met uploadinstellingen |
| `--get` | Leest een hoofdkanaal of een specifiek subkanaal |
| `--upsert` | Maakt of bewerkt een subkanaal; zonder `--apply` alleen preview |
| `--delete` | Verwijdert een subkanaal; zonder `--apply` alleen preview |
| `--load-balance <true\|false>` | Zet load balancing voor een hoofdkanaal aan of uit |
| `--channel <key>` | Hoofdkanaal, bijvoorbeeld `s3`, `github`, `telegram` |
| `--channel-name <name>` | Naam van subkanaal of account |
| `--set key=value` | Stelt een veld in; kan herhaald worden en ondersteunt puntpaden |
| `--patch-json <path>` | Voegt velden in bulk samen vanuit een JSON-bestand |
| `--apply` | Slaat de wijziging echt op |

### Kanaalparameters

| Parameter | Kanaal |
| --- | --- |
| `telegram` / `tg` | Telegram |
| `discord` / `dc` | Discord |
| `cfr2` / `r2` | Cloudflare R2 |
| `s3` | S3 |
| `webdav` / `wd` | WebDAV-opslagkanaal |
| `github` / `gh` | GitHub Releases |
| `gitlab` / `gl` | GitLab Packages |
| `huggingface` / `hf` | Hugging Face |
| `onedrive` / `od` | OneDrive |
| `googledrive` / `google` / `gd` | Google Drive |
| `dropbox` / `db` | Dropbox |
| `yandex` / `yx` | Yandex Disk |
| `pcloud` / `pd` | pCloud |

### Voorbeelden voor uploadinstellingen

Alle uploadinstellingen tonen:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --list
```

S3-configuratie lezen:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get `
  --channel s3
```

Een specifiek S3-subkanaal lezen:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get `
  --channel s3 `
  --channel-name "backup-s3"
```

Een subkanaal maken of bewerken. Voer eerst zonder `--apply` uit om de preview te bekijken:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --upsert `
  --channel webdav `
  --channel-name "backup-webdav" `
  --set enabled=false `
  --set remark="backup test"
```

Sla daarna op:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --upsert `
  --channel webdav `
  --channel-name "backup-webdav" `
  --set enabled=false `
  --set remark="backup test" `
  --apply
```

Een subkanaal verwijderen:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --delete `
  --channel webdav `
  --channel-name "backup-webdav" `
  --apply
```

Load balancing voor S3 inschakelen:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --load-balance true `
  --channel s3 `
  --apply
```

Voor complexere bulkvelden kun je eerst een JSON-bestand maken en daarna `--patch-json` gebruiken:

```json
{
  "enabled": true,
  "remark": "primary account"
}
```

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --upsert `
  --channel s3 `
  --channel-name "primary-s3" `
  --patch-json ".\s3-channel.json" `
  --apply
```

## Site-instellingen

Het script voor site-instellingen beheert drie gebieden:

| Gebied | Parameter | Beschrijving |
| --- | --- | --- |
| Beveiliging | `security` | Gebruikersauthenticatie, beheerdersauthenticatie, loginapparaten, API Token, beeldmoderatie, gebruikerslimieten, WebDAV en meer |
| Pagina | `page` | Globale pagina, gebruikerspagina, beheerderspagina en visuele opties |
| Overig | `others` | API voor willekeurige afbeeldingen, openbare galerij, lokale federatienode, automatische tags, IP-geolocatie, back-up, OCR en meer |

Gebruik eerst `--list-sections` om te zien welke gebieden, secties en velden het script ondersteunt:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --list-sections
```

### Parameters voor site-instellingen

| Parameter | Beschrijving |
| --- | --- |
| `--list-sections` | Toont bewerkbare gebieden, secties en velden |
| `--get` | Leest een configuratiesectie |
| `--area <security\|page\|others>` | Kiest het configuratiegebied |
| `--section <name>` | Kiest de sectie; gebruik de naam uit `--list-sections` |
| `--set key=value` | Stelt een veld in; kan herhaald worden |
| `--apply` | Slaat de wijziging echt op |

In het gebied `page` gebruikt `--set` het id van de paginaoptie, bijvoorbeeld `starsEffect=true`. In `security` en `others` gebruikt `--set` de veldnaam binnen de sectie, bijvoorbeeld `email=admin@example.com`.

### Voorbeelden voor site-instellingen

Systeemupdate-meldingen lezen:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get `
  --area security `
  --section systemUpdate
```

Het e-mailadres voor systeemupdates wijzigen. Voer eerst zonder `--apply` uit:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --area security `
  --section systemUpdate `
  --set email="admin@example.com"
```

Sla daarna op:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --area security `
  --section systemUpdate `
  --set email="admin@example.com" `
  --apply
```

Sterreneffect op de beheerderspagina wijzigen:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --area page `
  --section adminSettings `
  --set starsEffect=true `
  --apply
```

Taal voor IP-geolocatie wijzigen:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --area others `
  --section ipGeolocation `
  --set language="en" `
  --apply
```

De lokale federatienode kan gewone velden lezen en wijzigen, zoals ingeschakeld, synchronisatiemappen en uitnodigingscodes. Domeinbevestiging loopt niet via API Token; als het beheerpaneel meldt dat het opgeslagen node-domein niet overeenkomt met het huidige domein, bevestig dit dan in het beheerpaneel.

## Federatierelaties

Het federatiescript beheert status van de lokale node, nodes waaraan ik deelneem, nodes die aan mijn node deelnemen, berichten, aanvragen, opnieuw aanvragen zonder relatie, accepteren, weigeren en lichte relatieacties zonder indexopruiming.

Indexen bijwerken, federatie-indexen verwijderen en domeinwijzigingen bevestigen hangen af van de volledige flow in de webinterface. Het script voert deze zware acties niet uit.

### Grens tussen lichte en zware federatieacties

| Actie | Ondersteund door script | Beschrijving |
| --- | --- | --- |
| Lokale nodestatus en relaties tonen | Ja | Alleen het relatielogboek lezen |
| Berichten bekijken en sturen | Ja | Relatieberichten lezen en schrijven |
| Aanvragen om lid te worden van andere node | Ja | Start aanvraag via uitnodigingslink |
| Opnieuw aanvragen bij record zonder relatie | Ja | Alleen voor `outgoing`-kaart met `lastResult=none`; vereist uitnodigingscode van 6 tekens |
| Pending `outgoing`-aanvraag annuleren | Ja | Annuleert alleen pending aanvragen |
| `incoming`-aanvraag accepteren of weigeren | Ja | Verwerkt alleen aanvragen naar jouw node |
| Geaccepteerde `incoming`-relatie verwijderen | Ja | Wijzigt het inkomende relatielogboek en meldt de andere kant |
| Afgesloten `incoming`-record verwijderen | Ja | Verwijdert alleen afgesloten inkomende records |
| Geaccepteerd `outgoing`-abonnement annuleren | Beheerpaneel | Vereist het lokaal verwijderen van federatie-indexen in batches |
| Afgesloten `outgoing`-record verwijderen | Beheerpaneel | Kan eerst indexopruiming vereisen |
| Domeinwijziging bevestigen of annuleren | Beheerpaneel | Vereist bevestiging van huidig domein en verwerking van indexrelaties |
| Index publiceren, ophalen of in bulk verwijderen | Beheerpaneel | Batchtaken in de gebruikersinterface |

### Federatieparameters

| Parameter | Beschrijving |
| --- | --- |
| `--status` | Toont lokale federatienode en relaties aan beide kanten |
| `--list` | Toont federatierelaties |
| `--chat` | Leest opgeslagen berichten van een relatie |
| `--send-message` | Stuurt een bericht naar een node met bestaande relatie |
| `--join` | Vraagt deelname aan via uitnodigingslink |
| `--reapply` | Vraagt opnieuw aan voor record zonder relatie; vereist uitnodigingscode van 6 tekens |
| `--accept` | Accepteert een aanvraag naar jouw node |
| `--deny` | Weigert een aanvraag naar jouw node |
| `--cancel` | Annuleert pending `outgoing`-aanvraag of verwijdert geaccepteerde `incoming`-relatie |
| `--delete` | Verwijdert afgesloten `incoming`-record |
| `--direction <outgoing\|incoming\|all>` | Richting; `outgoing` zijn nodes waaraan ik deelneem, `incoming` zijn nodes die aan mijn node deelnemen |
| `--domain <url>` | Domein van de relatienode |
| `--invite-link <url>` | Uitnodigingslink van de andere node |
| `--invite-code <code>` | Uitnodigingscode van 6 tekens voor opnieuw aanvragen |
| `--text <message>` | Berichttekst |
| `--apply` | Slaat de wijziging echt op |

### Federatievoorbeelden

Lokale status en relaties tonen:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --status
```

Alleen nodes waaraan ik deelneem tonen:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --list `
  --direction outgoing
```

Alleen nodes die aan mijn node deelnemen tonen:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --list `
  --direction incoming
```

Aanvragen via uitnodigingslink. Voer eerst zonder `--apply` uit:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --join `
  --invite-link "https://peer-domain/federation/invite/abcdef"
```

Sla daarna op:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --join `
  --invite-link "https://peer-domain/federation/invite/abcdef" `
  --apply
```

Opnieuw aanvragen voor een record zonder relatie:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --reapply `
  --domain "https://peer-domain" `
  --invite-code "abc123" `
  --apply
```

Een aanvraag naar jouw node accepteren:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --accept `
  --domain "https://peer-domain" `
  --apply
```

Een aanvraag naar jouw node weigeren:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --deny `
  --domain "https://peer-domain" `
  --apply
```

Een bericht sturen naar een node met bestaande relatie:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --send-message `
  --direction outgoing `
  --domain "https://peer-domain" `
  --text "Hello, this is a test message." `
  --apply
```

Een pending `outgoing`-aanvraag annuleren:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --cancel `
  --direction outgoing `
  --domain "https://peer-domain" `
  --apply
```

Een geaccepteerde `incoming`-relatie verwijderen:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --cancel `
  --direction incoming `
  --domain "https://peer-domain" `
  --apply
```

Een afgesloten `incoming`-record verwijderen:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --delete `
  --direction incoming `
  --domain "https://peer-domain" `
  --apply
```

Een geaccepteerd `outgoing`-abonnement annuleren en een `outgoing`-record verwijderen blijven acties in het beheerpaneel, omdat deze eerst lokale federatie-indexen kunnen moeten opruimen.

### Domein komt niet overeen

Als het opgeslagen lokale nodedomein en het pending domein in een relatie verschillen, geeft het script direct een fout en toont het `currentDomain` en `pendingDomain`. Dit moet in het beheerpaneel worden afgehandeld, omdat een domeinwijziging ook bevestiging en opruiming van uitgaande indexen raakt.

Als de andere kant bij een aanvraag `FEDERATION_NODE_DOMAIN_MISMATCH` teruggeeft, komt het domein van de uitnodigingslink niet overeen met het domein dat in de lokale node van de andere kant is opgeslagen. De API geeft `currentOrigin` en `detectedOrigin` terug; gebruik het door de andere kant bevestigde actuele domein of laat de andere kant het eerst in het beheerpaneel bevestigen.

## Veelgestelde vragen

### Waarom is mijn wijziging niet actief

Schrijfcommando's zijn standaard preview. Controleer de preview en voeg daarna `--apply` toe om echt op te slaan.

### Hoe weet ik welke velden ik kan wijzigen

Gebruik voor uploadinstellingen eerst `--get` om de structuur van een bestaand subkanaal te bekijken. Gebruik voor beveiliging, pagina en overige instellingen eerst `--list-sections` om toegestane gebieden, secties en velden te zien.

### Ik wil het resultaat in een ander programma gebruiken

Gebruik `--output json` of `--save-response result.json`. Het programma kan het opgeslagen JSON-bestand direct lezen.


