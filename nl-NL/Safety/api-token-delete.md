# Bestanden verwijderen met API Token

Verwijderen met een API Token is bedoeld voor scripts, automatisering en programma's van derden. Je hoeft het beheerpaneel niet te openen: met het siteadres, het Token en duidelijke bestands-ID's kun je één of meerdere bestanden uit ImgBed verwijderen.

Verwijderen is een schrijfactie. Nadat de opdracht is uitgevoerd, worden de bestanden echt verwijderd. Controleer daarom eerst met `imgbed-token-list.mjs` welke `fileId` je wilt verwijderen en geef die ID's daarna door aan het verwijderingsscript.

![API Token bewerken](../../image/Safety/apitoken/编辑删除权限api.png)

## Voorbereiding

Open in het beheerpaneel:

```text
System Settings -> Security Settings -> API Token
```

Controleer bij het maken of bewerken van een API Token dat verwijderen is toegestaan. Dit script heeft alleen de machtiging `delete` nodig.

Je kunt het Token ook in een omgevingsvariabele zetten:

```powershell
$env:IMGBED_API_TOKEN="your API Token"
```

## Script downloaden

| Script | Gebruik |
| --- | --- |
| <a href="/tools/imgbed-token-delete.mjs" download>Script voor bestanden verwijderen downloaden</a> | Verwijdert één of meerdere expliciet opgegeven bestands-ID's |

Je hebt lokaal Node.js 18 of hoger nodig.

## Gedrag van de verwijder-API

Het verwijderingsscript roept de verwijder-API van de server aan:

```text
POST /api/manage/delete/batch
```

Het verzoek moet een API Token bevatten:

```text
Authorization: Bearer <token>
```

Voorbeeld van de request body:

```json
{
  "fileIds": ["photos/2026/a.txt"],
  "deleteStrictness": "strict"
}
```

Als `fileIds` één bestand bevat, gaat het om één verwijdering. Bij meerdere bestanden gaat het om batchverwijdering. De server verwerkt maximaal 15 bestanden per verzoek; het script splitst verzoeken automatisch volgens `--batch-size`.

De API geeft een NDJSON-voortgangsstroom terug. Veelvoorkomende events zijn `batch_start`, `file_step`, `file_done`, `batch_complete` en `batch_error`. Het script leest deze events en vat ze samen als een leesbaar resultaat of als JSON.

Na een geslaagde verwijdering werkt de server automatisch de bestandsindex, mapstatistieken, opslagstatistieken en tijdelijke opslag op.

## Parameters van het verwijderingsscript

| Parameter | Verplicht | Beschrijving |
| --- | --- | --- |
| `--base-url <url>` | Ja | Adres van de ImgBed-site, bijvoorbeeld `https://image.ai6.me` |
| `--token <token>` | Ja | API Token; kan ook via `IMGBED_API_TOKEN` |
| `--file-id <id>` | Ja | Bestands-ID dat je wilt verwijderen; kan meerdere keren worden opgegeven |
| `--strictness <strict\|soft>` | Nee | Striktheid van de verwijdering; standaard `strict` |
| `--batch-size <n>` | Nee | Aantal bestanden per verzoek; standaard `15`, maximaal `15` |
| `--retries <n>` | Nee | Aantal pogingen bij tijdelijke fouten; standaard `3` |
| `--timeout-ms <n>` | Nee | Time-out van één verzoek; standaard `180000` |
| `--output <pretty\|json>` | Nee | Uitvoerformaat; standaard `pretty` |
| `--save-response <path>` | Nee | Slaat het eindresultaat op als JSON-bestand |
| `-h` / `--help` | Nee | Toont hulp voor het script |

Dit script verwijdert alleen bestanden die expliciet via `--file-id` zijn opgegeven. Het doet geen vage zoekopdrachten, maakt geen volledige map leeg en leest geen te verwijderen ID's uit een kommagescheiden lijst of lokaal bestand.

## Strikt verwijderen en zacht verwijderen

| Modus | Beschrijving |
| --- | --- |
| `strict` | Standaardmodus. Als verwijderen op de externe opslag mislukt, blijft de ImgBed-record bestaan, zodat je later opnieuw kunt proberen of onderzoek kunt doen. |
| `soft` | Als verwijderen op de externe opslag mislukt, wordt de ImgBed-record toch opgeschoond en komt er een waarschuwing in het resultaat. |

Wil je dat de actie alleen slaagt wanneer het externe bestand ook echt is verwijderd, gebruik dan de standaardmodus `strict`. Als een extern platform niet meer kan verwijderen maar je alleen de ImgBed-record wilt opschonen, kun je `soft` gebruiken.

## Voorbeelden

Eén bestand verwijderen:

```powershell
node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --file-id "photos/2026/a.txt"
```

Token uit de omgevingsvariabele gebruiken:

```powershell
$env:IMGBED_API_TOKEN="your API Token"

node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --file-id "photos/2026/a.txt"
```

Meerdere bestanden verwijderen:

```powershell
node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --file-id "photos/2026/a.txt" `
  --file-id "photos/2026/b.txt" `
  --file-id "photos/2026/c.txt"
```

ImgBed-record opschonen ook als externe verwijdering mislukt:

```powershell
node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --file-id "photos/2026/a.txt" `
  --strictness soft
```

JSON uitvoeren en het resultaat opslaan:

```powershell
node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --file-id "photos/2026/a.txt" `
  --output json `
  --save-response ".\delete-result.json"
```

Per verzoek maximaal 5 bestanden verwijderen:

```powershell
node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --file-id "photos/2026/a.txt" `
  --file-id "photos/2026/b.txt" `
  --batch-size 5
```

## Controleer fileId voor het verwijderen

Het verwijderingsscript heeft de ImgBed-bestands-ID nodig. Je kunt eerst met het lijstscript de bestanden in een map bekijken:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --dir "photos/2026" `
  --count 10 `
  --output json
```

De waarde `name` in het resultaat is meestal de `fileId` die je aan het verwijderingsscript kunt doorgeven.

## Veelgestelde vragen

### Waarom is verwijderen mislukt, maar staat het bestand nog in de lijst?

Bij de standaardmodus `strict` blijft de ImgBed-record bestaan wanneer verwijderen op de externe opslag mislukt. Zo voorkom je dat alleen de lokale index verdwijnt terwijl het externe bestand blijft bestaan. Als je zeker weet dat alleen de ImgBed-record mag worden opgeschoond, probeer dezelfde `fileId` dan opnieuw met `soft`.

### Waarom bevat het resultaat een waarschuwing?

Een waarschuwing betekent meestal dat er een niet-kritiek probleem was bij externe verwijdering, het opschonen van de tijdelijke opslag of het afronden van statistieken. Het script bundelt waarschuwingen zodat je kunt beoordelen of opnieuw proberen nodig is.

### Kan ik in één keer per map verwijderen?

Dit script heeft geen functie om een map in één keer leeg te maken. Gebruik eerst het lijstscript om duidelijke `fileId`-waarden te vinden en geef de bestanden daarna één voor één door aan het verwijderingsscript.



