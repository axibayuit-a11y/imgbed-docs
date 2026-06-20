# Een Cloudflare R2-kanaal toevoegen

## Wanneer dit geschikt is

Gebruik Cloudflare R2 wanneer:

- je ImgBed-site al op Cloudflare draait en je bestanden wilt opslaan in een R2-bucket binnen hetzelfde Cloudflare-account.
- je geen losse S3-endpoint, access key en secret key wilt configureren.
- lezen en schrijven via de R2-binding van Worker of Pages moet lopen met zo weinig mogelijk instellingen.

Kort gezegd:

Het R2-kanaal maak je niet handmatig aan in het ImgBed-beheer. Je koppelt eerst een R2-bucket aan het Cloudflare-project. De naam van de bindingvariabele moet exact `img_r2` zijn.

## Wat je vooraf nodig hebt

- Een Cloudflare-account.
- Een bestaande R2-bucket.
- Rechten om het Cloudflare-project te beheren waarop ImgBed is gedeployed.

## Instellen in Cloudflare

### 1. Maak een R2-bucket

1. Log in op het Cloudflare Dashboard.
2. Open `R2 Object Storage`.
3. Klik op Create bucket.
4. Kies een bucketnaam, bijvoorbeeld `imgbed`.

In deze bucket worden de geuploade bestanden opgeslagen.

![R2-bucket maken](../../image/upload/cloudflare-r2/创建一个存储桶img-r2.png)

### 2. Koppel de bucket aan het ImgBed-project

Kies de bindinglocatie op basis van je deploymenttype:

| Deploymenttype | Bindinglocatie |
| --- | --- |
| Pages | Huidig Pages-project -> Settings -> Functions -> R2 bucket bindings |
| Worker | Huidige Worker -> Settings -> Bindings -> R2 bucket bindings |

Bij het toevoegen van de binding zijn deze velden belangrijk:

| Veld | Waarde |
| --- | --- |
| Variable name | `img_r2` |
| R2 bucket | Selecteer de bucket die je hebt gemaakt |

De variabelenaam moet exact `img_r2` zijn. Uploaden, lezen en verwijderen van R2-bestanden hangen allemaal van deze bindingnaam af.

### 3. Deploy het project opnieuw

Sla de binding op en deploy ImgBed daarna opnieuw, zodat de Worker- of Pages-runtime toegang krijgt tot `img_r2`.

## Wat je in ImgBed ziet

Zodra de R2-binding beschikbaar is, open je:

1. Systeeminstellingen.
2. Uploadinstellingen.
3. Het kanaal `Cloudflare R2`.

Het systeem maakt automatisch een vast kanaal aan:

| Veld | Vaste waarde |
| --- | --- |
| Kanaalnaam | `Cloudflare R2` |
| Kanaaltype | `cfr2` |
| Opslagmodus | `binding` |
| Configuratiebron | Omgevingsbinding |

Dit is een vast bindingkanaal. Je hoeft niet op Kanaal toevoegen te klikken om het aan te maken, en je kunt het niet verwijderen zoals een normaal kanaal.

## Bewerkbare velden in het beheer

| Veld | Functie | Verplicht |
| --- | --- | --- |
| Kanaal inschakelen | Bepaalt of R2 meedoet bij de uploadselectie. | Ja |
| Account ID | Alleen nodig als quotalimieten actief zijn en officieel R2-gebruik moet worden opgevraagd. | Aanbevolen bij quotalimieten |
| Bucketnaam | Alleen nodig als quotalimieten actief zijn en officieel R2-gebruik moet worden opgevraagd. | Aanbevolen bij quotalimieten |
| Quotalimiet | Bepaalt of dit R2-kanaal op basis van capaciteit wordt meegenomen bij uploads. | Nee |
| Drempel | Stopt schrijven naar dit kanaal zodra het opgegeven percentage is bereikt. | Verplicht bij quotalimieten |

De Account ID vind je in het accountinformatiepaneel van het Cloudflare Dashboard. Vul deze alleen in als ImgBed R2-quota moet opvragen en afdwingen.

![Account ID ophalen](../../image/upload/cloudflare-r2/获取账户id.png)

## Stappen

1. Maak een R2-bucket in Cloudflare.
2. Open de Cloudflare-instellingen van het ImgBed-project.
3. Voeg een R2-bucketbinding toe.
4. Zet `Variable name` op `img_r2`.
5. Selecteer de R2-bucket die je hebt gemaakt.
6. Sla de binding op en deploy ImgBed opnieuw.
7. Ga terug naar ImgBed -> Systeeminstellingen -> Uploadinstellingen.
8. Controleer of het kanaal `Cloudflare R2` verschijnt en ingeschakeld is.

Wil je R2 laten meedoen aan uploadselectie op basis van capaciteit, schakel dan de quotalimiet in en vul Account ID, bucketnaam, quotalimiet en drempel in voordat je opslaat.

![Quotalimieten instellen](../../image/upload/cloudflare-r2/配置容量限制.png)

## Controleren

- Het vaste kanaal `Cloudflare R2` verschijnt in Uploadinstellingen.
- De kanaalkaart laat zien dat het kanaal actief is.
- Een klein testbestand uploadt succesvol en de teruggegeven link opent normaal.
- Als bij het openen van een bestand `R2 database binding is not configured` verschijnt, heeft de runtime de binding `img_r2` niet ontvangen. Controleer de bindingnaam in Cloudflare en deploy het project opnieuw.
