# Bestanden uploaden met API Token

Uploaden met een API Token is bedoeld voor scripts, automatisering en programma's van derden. Je hoeft de webpagina niet te openen: met het ImgBed-adres, het Token, het bestandspad en een echt uploadkanaal kan het bestand worden geüpload en krijg je na afloop de bestandslink terug.

![API Token bewerken](../../image/Safety/apitoken/编辑上传权限api.png)

## Voorbereiding

Open in het beheerpaneel:

```text
System Settings -> Security Settings -> API Token
```

Controleer bij het maken of bewerken van een API Token dat uploaden is toegestaan en kies een echt standaard uploadkanaal. Uploads via API Token gebruiken geen “slimme verdeling”; ook scripts moeten een echt kanaal doorgeven.

## Uploadscripts downloaden

De documentatie bevat twee Node.js-scripts:

| Script | Gebruik |
| --- | --- |
| <a href="/tools/imgbed-token-single-upload.mjs" download>Script voor enkele upload downloaden</a> | Roept één keer `/upload` aan; geschikt voor kleine bestanden en API-tests |
| <a href="/tools/imgbed-token-chunk-upload.mjs" download>Script voor upload in delen downloaden</a> | Gebruikt chunk-, direct-upload- of platformsessies; geschikt voor grote bestanden |

Je hebt lokaal Node.js 18 of hoger nodig.

## Beschikbare kanalen tonen

Beide scripts kunnen eerst tonen welke uploadkanalen het huidige API Token mag gebruiken:

```powershell
node imgbed-token-single-upload.mjs --base-url "https://your-domain" --token "your API Token" --list-channels
node imgbed-token-chunk-upload.mjs --base-url "https://your-domain" --token "your API Token" --list-channels
```

Voor deze modus zijn `--file` en `--channel` niet nodig. Het resultaat bevat het standaardkanaal, de parameter van het hoofdkanaal, namen van subkanalen en of load balancing is ingeschakeld. Sleutels, vernieuwingstokens en andere gevoelige configuratie worden niet teruggegeven.

## Welke uploadmethode kies je

| Methode | Geschikt voor | Uitleg |
| --- | --- | --- |
| Enkele upload | Kleine bestanden, eenvoudige scripts, API-tests | Het volledige bestand gaat in één verzoek naar `/upload` |
| Upload in delen | Grote bestanden of bestanden die snel time-out geven | Het script gebruikt per kanaal chunks, directe upload of een platformsessie |

Gebruik bij grotere bestanden bij voorkeur het script voor upload in delen. Een enkele upload wordt beperkt door de request body van Cloudflare, het geheugen van de Worker en de limieten van het doelkanaal.

## Enkele upload

Het script voor een enkele upload doet één verzoek naar `/upload`.

```powershell
node imgbed-token-single-upload.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --file "D:\test\image.png" `
  --channel s3 `
  --folder "photos/2026"
```

Je kunt het Token ook in een omgevingsvariabele zetten:

```powershell
$env:IMGBED_API_TOKEN="your API Token"
node imgbed-token-single-upload.mjs --base-url "https://your-domain" --file "D:\test\image.png" --channel s3
```

### Parameters voor enkele upload

| Parameter | Verplicht | Beschrijving |
| --- | --- | --- |
| `--base-url <url>` | Ja | Adres van de ImgBed-site, bijvoorbeeld `https://image.ai6.me` |
| `--token <token>` | Ja | API Token; kan ook via `IMGBED_API_TOKEN` |
| `--file <path>` | Ja | Pad naar het lokale bestand |
| `--channel <key>` | Ja | Uploadkanaal |
| `--folder <path>` | Nee | Doelmap, bijvoorbeeld `photos/2026` of `/user/` |
| `--name-type <type>` | Nee | Naamgevingsmethode, komt overeen met `uploadNameType`; standaard `default` |
| `--channel-name <name>` | Nee | Specifiek subkanaal of account; zonder deze optie kiest de server volgens kanaalconfiguratie |
| `--retries <n>` | Nee | Aantal pogingen bij tijdelijke fouten; standaard `3` |
| `--timeout-ms <n>` | Nee | Time-out van één verzoek; standaard `180000` |
| `--output <pretty\|json>` | Nee | Uitvoerformaat; standaard `pretty` |
| `--save-response <path>` | Nee | Slaat het eindresultaat op als JSON-bestand |
| `--list-channels` | Nee | Toont alleen beschikbare uploadkanalen voor het Token en uploadt niets |

### Kanalen voor enkele upload

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

### Limieten voor enkele upload, met het advies bestanden onder 100 MB te houden

Deze kanalen hebben een expliciete grens voor één `/upload`-verzoek:

| Kanaal | Limiet enkele upload |
| --- | ---: |
| Telegram | 20 MiB |
| Discord | 10 MiB |
| S3 | 64 MiB |
| WebDAV | 64 MiB |
| GitHub Releases | 64 MiB |
| GitLab Packages | 64 MiB |

Als het bestand groter is, toont het script lokaal de bijbehorende fout. Voor andere kanalen schrijft het script geen vaste lokale 100 MB-grens; als de request body boven de capaciteit van Cloudflare of het platform komt, komt de fout van Cloudflare of de externe dienst.

## Upload in delen

Het script voor upload in delen vraagt eerst met het API Token aan de server om het uploaddoel te bepalen. Daarna volgt het per kanaal het grote-bestandenproces. Je hoeft sessies, delen, samenvoegen of afronden niet zelf te schrijven.

```powershell
node imgbed-token-chunk-upload.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --file "D:\test\video.zip" `
  --channel github `
  --folder "photos/2026" `
  --concurrency 3
```

### Parameters voor upload in delen

| Parameter | Verplicht | Beschrijving |
| --- | --- | --- |
| `--base-url <url>` | Ja | Adres van de ImgBed-site |
| `--token <token>` | Ja | API Token; kan ook via `IMGBED_API_TOKEN` |
| `--file <path>` | Ja | Pad naar het lokale bestand |
| `--channel <key>` | Ja | Uploadkanaal |
| `--folder <path>` | Nee | Doelmap |
| `--name-type <type>` | Nee | Naamgevingsmethode, komt overeen met `uploadNameType`; standaard `default` |
| `--channel-name <name>` | Nee | Specifiek subkanaal of account; zonder deze optie kiest de server volgens kanaalconfiguratie |
| `--concurrency <n>` | Nee | Aantal gelijktijdige uploads; standaard `1`, maximaal `3` |
| `--retries <n>` | Nee | Aantal pogingen bij tijdelijke fouten; standaard `3` |
| `--timeout-ms <n>` | Nee | Time-out per verzoek; standaard `180000` |
| `--output <pretty\|json>` | Nee | Uitvoerformaat; standaard `pretty` |
| `--save-response <path>` | Nee | Slaat het eindresultaat op als JSON-bestand |
| `--list-channels` | Nee | Toont alleen beschikbare uploadkanalen voor het Token en uploadt niets |

### Kanalen voor upload in delen

| Parameter | Uploadroute |
| --- | --- |
| `telegram` / `tg` | Echte chunksessie via `/upload` |
| `discord` / `dc` | Echte chunksessie via `/upload` |
| `cfr2` / `r2` | Echte chunksessie via `/upload` |
| `github` / `gh` | Echte chunksessie via `/upload` |
| `gitlab` / `gl` | Echte chunksessie via `/upload` |
| `webdav` / `wd` | Echte chunksessie via `/upload` |
| `s3` | S3 multipart upload |
| `onedrive` / `od` | OneDrive uploadsessie |
| `googledrive` / `google` / `gd` | Hervatbare Google Drive-upload |
| `dropbox` / `db` | Dropbox uploadsessie |
| `yandex` / `yx` | Yandex direct-upload-URL |
| `pcloud` / `pd` | pCloud uploadlink |
| `huggingface` / `hf` | Hugging Face LFS-upload |

Bij tests bleken gecomprimeerde bestanden op Yandex instabiel; niet-gecomprimeerde bestanden zijn wel succesvol geüpload.

## Teruggegeven resultaat

Na een geslaagde upload print het script:

```text
success
src: /file/photos/2026/example.png
url: https://your-domain/file/photos/2026/example.png
fileId: photos/2026/example.png
```

| Veld | Beschrijving |
| --- | --- |
| `src` | Intern bestandspad binnen de site |
| `url` | Volledige toegangslink, geschikt voor scripts of databases |
| `fileId` | Bestands-ID voor latere query's, beheer of logging |
| `channelName` | Het chunk-script kan het werkelijk gebruikte subkanaal of account teruggeven |

Met `--output json` print het script de volledige JSON voor verdere verwerking.

## Enkele upload direct aanroepen

Zonder script kun je de enkele upload-API ook direct aanroepen:

```text
POST https://your-domain/upload?uploadChannel=s3&uploadFolder=photos/2026&uploadNameType=default
Authorization: Bearer your API Token
Content-Type: multipart/form-data
```

Formulierveld:

| Veld | Verplicht | Beschrijving |
| --- | --- | --- |
| `file` | Ja | Het te uploaden bestand |

Queryparameters:

| Parameter | Verplicht | Beschrijving |
| --- | --- | --- |
| `uploadChannel` | Ja | Echt uploadkanaal |
| `uploadFolder` | Nee | Doelmap |
| `uploadNameType` | Nee | Naamgevingsmethode |
| `channelName` | Nee | Specifiek subkanaal of account |

Bij succes krijg je ongeveer dit terug:

```json
{
  "success": true,
  "src": "/file/photos/2026/example.png",
  "url": "https://your-domain/file/photos/2026/example.png",
  "fileId": "photos/2026/example.png"
}
```

## Veelgestelde vragen

### Een groot bestand faalt bij enkele upload

Bij een enkel `/upload`-verzoek gaat het volledige bestand in één keer mee. Grote bestanden kunnen door Cloudflare of het externe platform worden geblokkeerd. Gebruik voor grote bestanden het chunk-script.

### `--channel-name` is meegegeven, maar het mislukt nog steeds

Controleer of er in het gekozen kanaal echt een subkanaal met die exacte naam bestaat en of het is ingeschakeld. Zonder `--channel-name` kiest de server een beschikbaar account volgens de kanaalconfiguratie.

### Ik wil het resultaat in een ander programma gebruiken

Gebruik `--output json` of `--save-response result.json`. Het programma kan het veld `url` lezen voor de volledige bestandslink.

### Upload van archieven naar Yandex faalt

Yandex ondersteunt gecomprimeerde formaten niet betrouwbaar; dit kan door platformbeleid komen. Gebruik bij Yandex bij voorkeur niet-gecomprimeerde bestanden.



