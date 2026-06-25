# Bestandsbeheer met API Token

Bestandsbeheer met API Token is bedoeld voor scripts, automatiseringstaken en externe beheerpanelen. Het gebruikt de machtiging `manage` om bestandsinformatie te bewerken, bestanden te verplaatsen, bestanden te hernoemen, tijdelijke mapmarkeerbestanden te maken, bestandstags en lijststatus aan te passen, een upload-IP te blokkeren of weer toe te staan, en kort geldige upload-Tokens te maken of te verwijderen zonder het beheerpaneel te openen.

Dit script behandelt alleen lichte beheeracties binnen bestandsbeheer en gebruikersbeheer. Uploaden, lijsten, verwijderen, uploadinstellingen, site-instellingen en federatierelaties gebruiken nog steeds hun eigen scripts.

![API Token bewerken](../../image/Safety/apitoken/编辑管理权限api.png)

## Voorbereiding

Open in het beheerpaneel:

System Settings -> Security Settings -> API Token

Controleer bij het maken of bewerken van een API Token dat beheer is toegestaan. De machtiging `manage` kan de status van bestanden wijzigen, de uploadstatus van gebruikers aanpassen en kort geldige upload-Tokens maken. Geef deze machtiging daarom alleen aan vertrouwde scripts of gebruikers.

Schrijfacties in het script voor bestandsbeheer zijn standaard een preview en worden niet echt opgeslagen. Controleer de preview en voeg daarna `--apply` toe om de schrijfactie uit te voeren.

Je kunt het Token ook in een omgevingsvariabele zetten:

```powershell
$env:IMGBED_API_TOKEN="your API Token"
```

## Script downloaden

| Script | Gebruik |
| --- | --- |
| <a href="/tools/imgbed-token-manage.mjs" download>Script voor bestandsbeheer downloaden</a> | Bestandsmetadata, moderatielabels, bestandstags, lijststatus, verplaatsen, hernoemen, mappen maken, IP blokkeren/toestaan en kort geldige upload-Tokens maken of verwijderen |

Je hebt lokaal Node.js 18 of hoger nodig.

## Functiegrenzen

| Mogelijkheid | Script | Machtiging |
| --- | --- | --- |
| Bestanden uploaden | `imgbed-token-single-upload.mjs` / `imgbed-token-chunk-upload.mjs` | `upload` |
| Bestanden tonen, bestanden filteren en gebruikersstatistieken lezen | `imgbed-token-list.mjs` | `list` |
| Expliciet opgegeven bestanden verwijderen | `imgbed-token-delete.mjs` | `delete` |
| Bestandsinformatie, tags en lijsten bewerken, verplaatsen, hernoemen, mappen maken, IP blokkeren en kort geldige upload-Tokens maken of verwijderen | `imgbed-token-manage.mjs` | `manage` |
| Uploadkanalen, beveiligingsinstellingen, pagina-instellingen, overige instellingen en federatierelaties bewerken | Scripts voor configuratiebeheer | `manage` |

`imgbed-token-manage.mjs` uploadt geen bestanden, toont geen bestandslijsten en verwijdert geen bestanden. Als je een `fileId` moet vinden, gebruik dan eerst het lijstscript om bestanden te filteren. Als je een bestand wilt verwijderen, geef het expliciete `fileId` door aan het verwijderingsscript.

## Algemene parameters

| Parameter | Verplicht | Beschrijving |
| --- | --- | --- |
| `--base-url <url>` | Ja | Adres van de ImgBed-site, bijvoorbeeld `https://image.ai6.me` |
| `--token <token>` | Ja | API Token; kan ook via de omgevingsvariabele `IMGBED_API_TOKEN` |
| `--retries <n>` | Nee | Aantal pogingen bij tijdelijke fouten; standaard `3` |
| `--timeout-ms <n>` | Nee | Time-out van één verzoek; standaard `180000` |
| `--output <pretty\|json>` | Nee | Uitvoerformaat; standaard `pretty`. Gebruik voor programmatische verwerking bij voorkeur `json` |
| `--save-response <path>` | Nee | Slaat het eindresultaat op als JSON-bestand |
| `--batch-size <n>` | Nee | Aantal items per verzoek bij batchacties; standaard `15`, maximaal `15` |
| `--apply` | Nee | Voert de schrijfactie echt uit; zonder deze optie alleen preview |
| `-h` / `--help` | Nee | Toont de hulp van het script |

## Eerst fileId controleren

De meeste acties in het script voor bestandsbeheer hebben een `fileId` nodig. Je kunt dit eerst opvragen met het lijstscript:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --dir "test4" `
  --count 10 `
  --output json
```

Het veld `name` in het resultaat is meestal het `fileId` dat je aan het script voor bestandsbeheer kunt doorgeven.

## Bestandsmetadata

Bestandsmetadata worden gebruikt om de weergegeven bestandsnaam en de leesbron in het bestandsbeheer van het paneel te wijzigen.

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-metadata `
  --file-id "photos/2026/a.jpg" `
  --file-name "cover.jpg" `
  --read-source backup
```

Sla pas op nadat de preview klopt:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-metadata `
  --file-id "photos/2026/a.jpg" `
  --file-name "cover.jpg" `
  --read-source backup `
  --apply
```

### Parameters voor bestandsmetadata

| Parameter | Beschrijving |
| --- | --- |
| `--set-metadata` | Wijzigt metadata van één bestand |
| `--file-id <id>` | ID van het bestand dat je wilt wijzigen |
| `--file-name <name>` | Nieuwe weergegeven naam in het paneel |
| `--read-source <primary\|backup>` | Leesbron. `primary` is de primaire bron en `backup` is de back-upbron |

Geef minstens één van deze parameters mee: `--file-name` of `--read-source`.

## Moderatielabels

Moderatielabels komen overeen met de leeftijdsclassificatie van het bestand. Je kunt eerst het huidige label lezen en het daarna wijzigen.

Moderatielabel lezen:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-label `
  --file-id "photos/2026/a.jpg"
```

Moderatielabel instellen:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-label `
  --file-id "photos/2026/a.jpg" `
  --label r12 `
  --apply
```

### Parameters voor moderatielabels

| Parameter | Beschrijving |
| --- | --- |
| `--get-label` | Leest het moderatielabel van één bestand |
| `--set-label` | Wijzigt het moderatielabel van één bestand |
| `--file-id <id>` | Bestands-ID |
| `--label <value>` | Labelwaarde: `all-ages`, `r12`, `r16`, `r18`, `None` |

## Bestandstags

Bestandstags voegen doorzoekbare zakelijke labels aan bestanden toe. Het script ondersteunt lezen, vervangen, toevoegen en verwijderen van tags, en kan ook meerdere bestanden in batches verwerken.

Bestandstags lezen:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-tags `
  --file-id "photos/2026/a.jpg"
```

Tags toevoegen:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --add-tags `
  --file-id "photos/2026/a.jpg" `
  --tag "cover" `
  --tag "2026" `
  --apply
```

Tags verwijderen:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --remove-tags `
  --file-id "photos/2026/a.jpg" `
  --tag "cover" `
  --apply
```

Tags vervangen:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-tags `
  --file-id "photos/2026/a.jpg" `
  --tag "archive" `
  --tag "public" `
  --apply
```

Tags in batch toevoegen:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --batch-tags `
  --file-id "photos/2026/a.jpg" `
  --file-id "photos/2026/b.jpg" `
  --tag-action add `
  --tag "batch-test" `
  --apply
```

### Parameters voor bestandstags

| Parameter | Beschrijving |
| --- | --- |
| `--get-tags` | Leest tags van één bestand |
| `--set-tags` | Vervangt tags van één bestand |
| `--add-tags` | Voegt tags toe aan één bestand |
| `--remove-tags` | Verwijdert tags van één bestand |
| `--batch-tags` | Stelt tags in, voegt ze toe of verwijdert ze in batch |
| `--file-id <id>` | Bestands-ID; bij batchacties kun je dit meerdere keren meegeven |
| `--tag <tag>` | Tagwaarde; kan meerdere keren worden meegegeven |
| `--tags-json <path>` | Leest een tagarray uit een JSON-bestand |
| `--tag-action <set\|add\|remove>` | Batchactie voor tags |

Voorbeeldinhoud voor het bestand `--tags-json`:

```json
["cover", "2026", "public"]
```

## Status van bloklijst en toestaanlijst

De lijststatus bepaalt het toegangscontrole-gedrag van een bestand in de openbare toegangsmodus. Je kunt dit per bestand of in batch wijzigen.

Eén bestand op de toestaanlijst zetten:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-list-type `
  --file-id "photos/2026/a.jpg" `
  --list-type White `
  --apply
```

Bestanden in batch aan de bloklijst toevoegen:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --batch-list-type `
  --file-id "photos/2026/a.jpg" `
  --file-id "photos/2026/b.jpg" `
  --list-type Block `
  --apply
```

Standaardlijststatus herstellen:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-list-type `
  --file-id "photos/2026/a.jpg" `
  --list-type None `
  --apply
```

### Parameters voor bloklijst en toestaanlijst

| Parameter | Beschrijving |
| --- | --- |
| `--set-list-type` | Wijzigt de lijststatus van één bestand |
| `--batch-list-type` | Wijzigt de lijststatus in batch. Eén verzoek verwerkt maximaal `15` bestanden |
| `--file-id <id>` | Bestands-ID; bij batchacties kun je dit meerdere keren meegeven |
| `--list-type <None\|White\|Block>` | `None` is de standaardstatus, `White` is de toestaanlijst en `Block` is de bloklijst |

## Bestanden verplaatsen

Bestanden verplaatsen zet één of meer bestanden in de doelmap. De backend verwerkt maximaal `15` bestanden per verzoek. Het script splitst het werk automatisch op basis van `--batch-size` en voert de verzoeken op volgorde uit.

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --move `
  --file-id "photos/2026/a.jpg" `
  --file-id "photos/2026/b.jpg" `
  --target-path "archive/2026" `
  --apply
```

### Verplaatsparameters

| Parameter | Beschrijving |
| --- | --- |
| `--move` | Verplaatst bestanden |
| `--file-id <id>` | ID van het bestand dat je wilt verplaatsen; kan meerdere keren worden meegegeven |
| `--target-path <dir>` | Doelmap |
| `--batch-size <n>` | Aantal bestanden dat per verzoek wordt verplaatst; standaard `15`, maximaal `15` |

## Hernoemen of pad wijzigen

Hernoemen gebruikt expliciete oude en nieuwe bestands-ID's. Het nieuwe bestands-ID kan alleen de bestandsnaam wijzigen, of tegelijk ook de map veranderen.

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --rename `
  --old-file-id "photos/2026/a.jpg" `
  --new-file-id "photos/2026/a-renamed.jpg" `
  --apply
```

Geef bij hernoemen in batch `--old-file-id` en `--new-file-id` herhaald mee:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --rename `
  --old-file-id "photos/2026/a.jpg" `
  --new-file-id "archive/2026/a.jpg" `
  --old-file-id "photos/2026/b.jpg" `
  --new-file-id "archive/2026/b.jpg" `
  --apply
```

Je kunt de mapping ook in een JSON-bestand zetten:

```json
[
  {
    "oldFileId": "photos/2026/a.jpg",
    "newFileId": "archive/2026/a.jpg"
  },
  {
    "oldFileId": "photos/2026/b.jpg",
    "newFileId": "archive/2026/b.jpg"
  }
]
```

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --rename `
  --items-json ".\rename-items.json" `
  --apply
```

### Hernoemparameters

| Parameter | Beschrijving |
| --- | --- |
| `--rename` | Hernoemt of wijzigt paden via een expliciete mapping |
| `--old-file-id <id>` | Oorspronkelijk bestands-ID; kan meerdere keren worden meegegeven |
| `--new-file-id <id>` | Nieuw bestands-ID; kan meerdere keren worden meegegeven en het aantal moet overeenkomen met `--old-file-id` |
| `--items-json <path>` | JSON-array. Elk item is `{ "oldFileId": "...", "newFileId": "..." }` |
| `--batch-size <n>` | Aantal hernoemingen per verzoek; standaard `15`, maximaal `15` |

## Mappen maken

ImgBed-mappen komen voort uit bestandspaden; echte lege mappen bestaan niet. Wanneer het script een map maakt, maakt het in de doelmap een markeerbestand `0.md`, zodat de map zichtbaar wordt in bestandsbeheer en mapstatistieken.

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --create-folder `
  --parent-directory "photos" `
  --folder-name "2026" `
  --apply
```

### Parameters voor mappen maken

| Parameter | Beschrijving |
| --- | --- |
| `--create-folder` | Maakt een markeerbestand voor een map |
| `--parent-directory <dir>` | Bovenliggende map; geef een lege tekenreeks door voor de hoofdmap |
| `--folder-name <name>` | Naam van de nieuwe map |

## Upload-IP blokkeren en toestaan

Met de beheermachtiging kun je een IP toevoegen aan de lijst met geblokkeerde uploads of het daaruit verwijderen. Deze actie beïnvloedt toekomstige uploads vanaf dat IP. Bestanden die al vanaf dat IP zijn geüpload, worden niet verwijderd.

Een upload-IP blokkeren:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --block-ip "67.159.48.149" `
  --apply
```

Een upload-IP weer toestaan:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --allow-ip "67.159.48.149" `
  --apply
```

De huidige lijst met geblokkeerde upload-IP's bekijken:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --blocked-ips
```

### Parameters voor IP-beheer

| Parameter | Beschrijving |
| --- | --- |
| `--block-ip <ip>` | Voegt een IP toe aan de lijst met geblokkeerde uploads |
| `--allow-ip <ip>` | Verwijdert een IP uit de lijst met geblokkeerde uploads |

## Kort geldige upload-Tokens maken en verwijderen

De beheermachtiging kan kort geldige Tokens maken die alleen voor upload zijn bedoeld. Dit Token heeft altijd alleen de machtiging `upload`, `autoDelete` is altijd `true` en de maximale vervaltijd is `1` dag.

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --create-upload-token `
  --name "Temporary Upload Token" `
  --owner "upload-bot" `
  --default-upload-channel telegram `
  --expires-in-minutes 20 `
  --apply `
  --output json
```

Je kunt ook direct een tijdstempel in milliseconden doorgeven:

```powershell
$expiresAt = [DateTimeOffset]::UtcNow.AddHours(12).ToUnixTimeMilliseconds()

node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --create-upload-token `
  --name "Upload Token valid for one day" `
  --owner "upload-bot" `
  --default-upload-channel telegram `
  --expires-at $expiresAt `
  --apply
```

Bij het verwijderen van een kort geldig upload-Token moet je de `id` doorgeven die de maak-API heeft teruggegeven. Een beheer-Token kan alleen Tokens verwijderen die aan deze voorwaarden voldoen:

| Voorwaarde | Vereiste |
| --- | --- |
| Machtiging | `permissions` bevat alleen `upload` |
| Automatisch verwijderen | `autoDelete=true` |
| Geldigheid | `expiresAt - createdAt <= 24` uur |

Een kort geldig upload-Token verwijderen:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --delete-upload-token `
  --token-id "mqt4jqokc85be80d1f0f47078e848a77d6c1aa6e" `
  --apply
```

Een beheer-Token kan geen gewone Tokens, lang geldige Tokens, Tokens met de machtigingen `list` / `delete` / `manage`, of upload-Tokens met een geldigheid van meer dan `1` dag verwijderen. Deze Tokens moeten nog steeds in het beheerpaneel in de browser worden afgehandeld.

### Parameters voor kort geldige upload-Tokens

| Parameter | Beschrijving |
| --- | --- |
| `--create-upload-token` | Maakt een kort geldig Token dat alleen voor upload is bedoeld |
| `--delete-upload-token` | Verwijdert een geschikt kort geldig Token dat alleen voor upload is bedoeld |
| `--name <name>` | Tokennaam |
| `--owner <owner>` | Omschrijving van de eigenaar van het Token |
| `--default-upload-channel <key>` | Standaard uploadkanaal. Dit moet een echt kanaal zijn, zoals `telegram`, `s3` of `github` |
| `--expires-in-minutes <n>` | Aantal minuten tot verval vanaf nu. Maximaal `1440` |
| `--expires-at <ms>` | Absolute vervaltijd als milliseconden-tijdstempel. Maximaal `24` uur vanaf nu |
| `--token-id <id>` | ID van het kort geldige upload-Token dat moet worden verwijderd |

Kort geldige upload-Tokens mogen alleen uploaden. In tests werd een kort geldig Token met `permissions=["upload"]` geweigerd bij toegang tot lijst-, bestandsbeheer- en verwijder-API's.

Na verval worden Tokens met `autoDelete=true` opgeruimd wanneer de backend vaststelt dat ze verlopen zijn. Het lezen van de API Token-lijst ruimt ook verlopen Tokens op waarvan `autoDelete` `true` is.

## API-overzicht

| Actie | Methode | API |
| --- | --- | --- |
| Bestandsmetadata wijzigen | `PATCH` | `/api/manage/metadata/{fileId}` |
| Moderatielabel lezen | `GET` | `/api/manage/label/{fileId}` |
| Moderatielabel wijzigen | `POST` | `/api/manage/label/{fileId}` |
| Bestandstags lezen | `GET` | `/api/manage/tags/{fileId}` |
| Bestandstags wijzigen | `POST` | `/api/manage/tags/{fileId}` |
| Bestandstags in batch wijzigen | `POST` | `/api/manage/tags/batch` |
| Lijststatus wijzigen | `POST` | `/api/manage/listType/{fileId}` |
| Lijststatus in batch wijzigen | `POST` | `/api/manage/listType/batch` |
| Verplaatsen of hernoemen | `POST` | `/api/manage/relocate/batch` |
| Map maken | `POST` | `/api/manage/folder/create` |
| Upload-IP blokkeren | `POST` | `/api/manage/cusConfig/blockip` |
| Upload-IP toestaan | `POST` | `/api/manage/cusConfig/whiteip` |
| Kort geldig upload-Token maken | `POST` | `/api/manage/apiTokens` |
| Kort geldig upload-Token verwijderen | `DELETE` | `/api/manage/apiTokens?id={tokenId}` |

Het script voegt automatisch toe:

```text
Authorization: Bearer your API Token
```

## Uitvoerformaat

De standaarduitvoer `pretty` is geschikt om handmatig te lezen. Gebruik `--output json` als een ander programma het resultaat moet verwerken:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-tags `
  --file-id "photos/2026/a.jpg" `
  --output json
```

Je kunt ook het volledige resultaat opslaan:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-tags `
  --file-id "photos/2026/a.jpg" `
  --output json `
  --save-response ".\manage-result.json"
```

Batchacties voor verplaatsen, hernoemen en lijststatus lezen de NDJSON-voortgangsstroom van de backend en vatten het aantal gebeurtenissen, de voltooiingsstatus en foutdetails samen.

## Veelgestelde vragen

### Waarom heeft de opdracht niets gewijzigd

Schrijfacties zijn standaard een preview. Controleer de preview en voeg daarna `--apply` toe om echt op te slaan.

### Kan dit script bestanden uploaden, tonen of verwijderen

Nee. Gebruik de uploadscripts om te uploaden, het lijstscript om te tonen en te filteren, en het verwijderingsscript om expliciete bestanden te verwijderen. Het script voor bestandsbeheer behandelt alleen lichte beheeracties onder de machtiging `manage`.

### Hoe weet ik welk fileId ik moet doorgeven

Vraag eerst bestanden op met `imgbed-token-list.mjs --files`. Het veld `name` in het resultaat is meestal het bestands-ID, dus de waarde voor `--file-id`.

### Hoeveel bestanden kan een batchactie tegelijk verwerken

De backend verwerkt maximaal `15` bestanden per verzoek. Het script gebruikt standaard `--batch-size 15`; geef je een lagere waarde door, dan splitst het script het werk automatisch in meerdere opeenvolgende verzoeken.

### Kan ik een echt lege map maken

ImgBed-mappen worden afgeleid van bestandspaden; echte lege mappen bestaan niet. `--create-folder` maakt een markeerbestand `0.md`, zodat de map zichtbaar wordt in bestandsbeheer en mapstatistieken.

### Hoe lang kan een kort geldig upload-Token maximaal geldig zijn

Maximaal `1` dag, oftewel `1440` minuten. Bij een langere duur weigert het script dit lokaal; de backend geeft ook `API_TOKEN_MANAGE_CREATE_EXPIRES_AT_TOO_LONG` terug.

### Wordt een kort geldig upload-Token automatisch verwijderd na verval

Het wordt automatisch opgeruimd, maar niet via een directe geplande taak. Een verlopen Token wordt opgeruimd wanneer het opnieuw wordt gecontroleerd. Het lezen van de API Token-lijst ruimt ook verlopen Tokens met `autoDelete=true` op.
