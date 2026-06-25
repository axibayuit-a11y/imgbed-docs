# Lijsten en filteren met API Token

Het lijstscript voor API Token is bedoeld voor scripts, automatisering en programma's van derden die ImgBed-gegevens moeten lezen. Het gebruikt alleen de machtiging `list`; het uploadt geen bestanden, verwijdert geen bestanden, wijzigt geen configuratie en blokkeert of staat uploads vanaf een bepaald IP-adres niet toe.

Belangrijkste toepassingen:

| Functie | Beschrijving |
| --- | --- |
| Lijst in bestandsbeheer | Leest de bestandslijst uit het beheerpaneel en ondersteunt de geavanceerde filterparameters van bestandsbeheer |
| Lijst in gebruikersbeheer | Leest uploadstatistieken van gebruikers/IP-adressen en ondersteunt de filterparameters van gebruikersbeheer |
| Lijst met uploadkanalen | Leest afgeschermde uploadkanalen, subkanalen, opslagruimte en load-balancinginformatie |
| Mapstatistiektabel | Leest mapstatistieken en paginagegevens voor mappen |

## Voorbereiding

Open in het beheerpaneel:

```text
System Settings -> Security Settings -> API Token
```

Controleer bij het maken of bewerken van een API Token dat lijsten lezen is toegestaan. Dit script heeft alleen de machtiging `list` nodig.

Je kunt het Token ook in een omgevingsvariabele zetten:

```powershell
$env:IMGBED_API_TOKEN="your API Token"
```

## Script downloaden

| Script | Gebruik |
| --- | --- |
| <a href="/tools/imgbed-token-list.mjs" download>Script voor lijsten en filteren downloaden</a> | Lijst in bestandsbeheer, lijst in gebruikersbeheer, lijst met uploadkanalen, mapstatistiektabel |

Je hebt lokaal Node.js 18 of hoger nodig.

## Algemene parameters

| Parameter | Verplicht | Beschrijving |
| --- | --- | --- |
| `--base-url <url>` | Ja | Adres van de ImgBed-site, bijvoorbeeld `https://image.ai6.me` |
| `--token <token>` | Ja | API Token; kan ook via `IMGBED_API_TOKEN` |
| `--retries <n>` | Nee | Aantal pogingen bij tijdelijke fouten; standaard `3` |
| `--timeout-ms <n>` | Nee | Time-out van één verzoek; standaard `180000` |
| `--output <pretty\|json>` | Nee | Uitvoerformaat; standaard `pretty`. Gebruik voor programmatische verwerking bij voorkeur `json` |
| `--save-response <path>` | Nee | Slaat het eindresultaat op als JSON-bestand |
| `-h` / `--help` | Nee | Toont hulp voor het script |

## Lijst in bestandsbeheer

Bestanden uit bestandsbeheer tonen:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --count 10
```

Uitvoeren als JSON:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --count 10 `
  --output json
```

Alleen het aantal binnen de huidige filters lezen:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --file-summary `
  --dir "photos/2026" `
  --recursive
```

### Parameters voor bestandsbeheer

| Parameter | Beschrijving |
| --- | --- |
| `--files` | Toont bestanden |
| `--file-summary` | Leest alleen aantallen |
| `--start <n>` | Offset voor paginering |
| `--count <n>` | Aantal resultaten |
| `--dir <path>` | Geeft een map op |
| `--recursive` | Neemt bestanden in submappen mee |
| `--search <text>` | Zoekt op trefwoord |
| `--channel <key>` | Filtert op hoofduploadkanaal, bijvoorbeeld `github`, `s3`, `yandex` |
| `--channel-scope <primary\|backup\|all>` | Bereik van het kanaalfilter: hoofdkanaal, back-upkanaal of alles |
| `--channel-name-groups <value>` | Filter voor subkanaalgroepen; wordt rechtstreeks doorgegeven aan de bestaande serverparameter |
| `--list-type <csv>` | Lijsttype; veelgebruikte waarden zijn `None,White,Block` |
| `--include-tags <csv>` | Tags die aanwezig moeten zijn |
| `--exclude-tags <csv>` | Tags die worden uitgesloten |
| `--time-start <ms>` | Begintijd van upload, als milliseconde-tijdstempel |
| `--time-end <ms>` | Eindtijd van upload, als milliseconde-tijdstempel |
| `--file-exts <csv>` | Neemt alleen opgegeven extensies mee, bijvoorbeeld `jpg,png,pdf` |
| `--exclude-file-exts <csv>` | Sluit opgegeven extensies uit |
| `--file-status-categories <csv>` | Bestandscategorie: `image,audio,video,document,code,other` |
| `--upload-ip <ip>` | Filtert op voorvoegsel van upload-IP |
| `--age-ratings <csv>` | Leeftijdsclassificatie: `none,all-ages,r12,r16,r18` |
| `--orientation <csv>` | Filter voor beeldrichting; wordt rechtstreeks doorgegeven aan bestaande serverwaarden |
| `--read-source <csv>` | Filter voor leesbron; wordt rechtstreeks doorgegeven aan bestaande serverwaarden |
| `--access-status <normal\|blocked>` | Status van openbare toegang |
| `--min-width <n>` | Minimale breedte |
| `--max-width <n>` | Maximale breedte |
| `--min-height <n>` | Minimale hoogte |
| `--max-height <n>` | Maximale hoogte |
| `--min-file-size <mb>` | Minimale bestandsgrootte; gebruikt de bestaande MB-parameter van de server |
| `--max-file-size <mb>` | Maximale bestandsgrootte; gebruikt de bestaande MB-parameter van de server |

### Voorbeelden voor bestandsbeheer

PDF zoeken:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --search "pdf" `
  --file-status-categories "document" `
  --count 20
```

Filteren op upload-IP en kanaal:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --upload-ip "103.62" `
  --channel yandex `
  --channel-scope primary
```

Volledig resultaat opslaan:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --count 100 `
  --output json `
  --save-response ".\files.json"
```

## Lijst in gebruikersbeheer

Uploadstatistieken van gebruikers/IP-adressen tonen:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --count 20
```

Een IP-adres of locatie zoeken:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --search "43.198.183.56"
```

Details bekijken van bestanden die door een bepaald IP-adres zijn geüpload:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --user-detail `
  --ip "43.198.183.56" `
  --count 20
```

Geblokkeerde upload-IP-adressen tonen:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --blocked-ips
```

### Parameters voor gebruikersbeheer

| Parameter | Beschrijving |
| --- | --- |
| `--users` | Toont uploadstatistieken van gebruikers/IP-adressen |
| `--user-detail` | Toont bestanden die door een bepaald IP-adres zijn geüpload |
| `--blocked-ips` | Toont geblokkeerde upload-IP-adressen |
| `--ip <ip>` | Verplicht bij `--user-detail` |
| `--start <n>` | Offset voor paginering |
| `--count <n>` | Aantal resultaten |
| `--sort <value>` | Sortering: `timeDesc`, `timeAsc`, `countDesc`, `countAsc`, `totalSizeDesc`, `totalSizeAsc` |
| `--search <text>` | Zoekt op IP-adres of locatie |
| `--upload-status <allowed\|blocked>` | Of uploaden is toegestaan |
| `--start-time <ms>` | Start van de statistiekperiode, als milliseconde-tijdstempel |
| `--end-time <ms>` | Einde van de statistiekperiode, als milliseconde-tijdstempel |
| `--file-status-categories <csv>` | Filter op bestandscategorie |
| `--age-ratings <csv>` | Filter op leeftijdsclassificatie |
| `--min-file-size <mb>` | Minimale bestandsgrootte |
| `--max-file-size <mb>` | Maximale bestandsgrootte |
| `--list-type <csv>` | Lijsttype; veelgebruikte waarden zijn `None,White,Block` |
| `--access-status <normal\|blocked>` | Status van openbare toegang |

### Voorbeelden voor gebruikersbeheer

Gebruikers tonen die niet mogen uploaden:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --upload-status blocked
```

Zoeken op locatietrefwoord:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --search "Hong Kong"
```

Sorteren op aantal uploads:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --sort countDesc `
  --count 50
```

## Lijst met uploadkanalen

Afgeschermde configuratie van uploadkanalen tonen:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --channels
```

Het resultaat bevat:

| Veld | Beschrijving |
| --- | --- |
| `type` | Hoofduploadkanaal, bijvoorbeeld `github`, `s3`, `yandex` |
| `name` | Naam van subkanaal of account |
| `enabled` | Of het is ingeschakeld |
| `load_balance_enabled` | Of load balancing voor dit hoofdkanaal is ingeschakeld |
| `quota_enabled` | Of opslagcontrole is ingeschakeld |
| `quota_limit_bytes` | Opslaglimiet |
| `quota_used_bytes` | Gebruikte opslag |
| `quota_checked_at` | Tijdstip van opslagcontrole |
| `tag_json` | Niet-gevoelige tags, zoals openbare repository of privérepository |
| `created_at` / `updated_at` | Aanmaak- en bijwerktijd |

Deze API geeft geen sleutels, vernieuwingstokens, tijdelijke tokens, wachtwoorden of andere gevoelige configuratie terug.

## Mapstatistiektabel

Mapstatistieken tonen:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --directories `
  --limit 20
```

Volledige mappaden tonen en zoeken op voorvoegsel:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --directories `
  --scope full `
  --search-prefix "test" `
  --include-parents `
  --limit 10
```

### Parameters voor mapstatistieken

| Parameter | Beschrijving |
| --- | --- |
| `--directories` | Toont de mapstatistiektabel |
| `--dir <path>` | Map waar de lijst moet beginnen |
| `--scope <direct\|full>` | `direct` toont alleen directe submappen, `full` toont volledige paden |
| `--search-prefix <path>` | Zoekt op mapvoorvoegsel |
| `--include-parents` | Neemt in de modus `full` ook bovenliggende mappen mee |
| `--limit <n>` | Aantal resultaten; de server geeft maximaal `100` terug |
| `--cursor <path>` | Cursor voor de volgende pagina |

## Uitvoerformaat

De standaarduitvoer `pretty` is geschikt om handmatig te lezen:

```powershell
node imgbed-token-list.mjs --base-url "https://your-domain" --token "your API Token" --users --count 5
```

Gebruik `--output json` als een ander programma het resultaat moet verwerken:

```powershell
node imgbed-token-list.mjs --base-url "https://your-domain" --token "your API Token" --users --count 5 --output json
```

Je kunt het volledige resultaat ook opslaan:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --count 5 `
  --output json `
  --save-response ".\users.json"
```

## Veelgestelde vragen

### Wijzigt dit script gegevens?

Nee. Dit script roept alleen lees-API's aan. Het uploadt niet, verwijdert niet, verplaatst niets, bewerkt geen configuratie en blokkeert of staat uploads vanaf een bepaald IP-adres niet toe.

### Waarom is de machtiging `list` nodig?

De lijst in bestandsbeheer, de lijst in gebruikersbeheer, de afgeschermde kanaallijst en mapstatistieken zijn allemaal leesfuncties. Daarom is alleen de machtiging `list` op het API Token nodig.

### Hoe controleer ik welke parameters beschikbaar zijn?

Voer dit uit:

```powershell
node imgbed-token-list.mjs --help
```

Het script toont alle acties en parameters.


