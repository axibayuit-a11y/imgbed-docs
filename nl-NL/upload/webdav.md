# Een WebDAV-kanaal toevoegen

## Wanneer dit geschikt is

Gebruik het WebDAV-kanaal wanneer:

- je een NAS, cloudschijf of opslagdienst hebt die een WebDAV-endpoint aanbiedt.
- geuploade afbeeldingen in je eigen WebDAV-map moeten worden opgeslagen.
- je inloggegevens in de D1-tabel `upload_channels` wilt bewaren in plaats van ze langdurig in de frontend bloot te stellen.

## Wat je vooraf nodig hebt

| Vereiste | Doel |
| --- | --- |
| WebDAV Endpoint | Server-side WebDAV-URL, bijvoorbeeld `https://nas.example.com/dav`. |
| Gebruikersnaam | Voor aanmelden bij de WebDAV-dienst. |
| Wachtwoord | Voor aanmelden bij de WebDAV-dienst. |
| Authenticatiemodus | Standaard `Basic`. Gebruik `Digest` of automatische onderhandeling alleen als de server dat vereist. |
| Opslagmap | Map waarin bestanden worden opgeslagen. Standaard `imgbed`. |

## Waar je het toevoegt

1. Open Systeeminstellingen.
2. Ga naar Uploadinstellingen.
3. Klik rechtsboven op Kanaal toevoegen.
4. Selecteer `WebDAV`.

## Veldreferentie

| Veld | Functie | Verplicht |
| --- | --- | --- |
| Kanaalnaam | Een herkenbare naam, bijvoorbeeld `koofr` of `nas`. | Ja |
| Endpoint | Volledige WebDAV-endpoint, inclusief `https://`. | Ja |
| Gebruikersnaam | WebDAV-loginnaam. | Ja |
| Wachtwoord | WebDAV-wachtwoord. | Ja |
| Authenticatiemodus | Meestal `Basic`; gebruik `Digest` als de server digest-authenticatie vereist. | Ja |
| Opslagmap | Map waarin bestanden worden opgeslagen. Standaard `imgbed`. | Nee |

## Voorbeeld: fie.nl.tab.digital

### 1. Maak een app-wachtwoord

Open de beveiligingsinstellingen van je account, zoek app-wachtwoorden en maak een nieuw app-wachtwoord.

![App-wachtwoord maken](../../image/upload/webdav/创建应用密码.png)

Kopieer en bewaar het nieuwe app-wachtwoord direct na het aanmaken. Meestal wordt het maar één keer getoond.

![Nieuw app-wachtwoord bewaren](../../image/upload/webdav/记住新应用程序密码.png)

### 2. Vul de WebDAV-configuratie in ImgBed in

Ga terug naar ImgBed en voeg een WebDAV-kanaal toe:

| UI-veld | Waarde |
| --- | --- |
| Endpoint | De WebDAV-URL van `https://fie.nl.tab.digital/`. |
| Gebruikersnaam | Je WebDAV-gebruikersnaam. |
| Wachtwoord | Het app-wachtwoord dat je net hebt gemaakt. |
| Authenticatiemodus | Begin in de meeste gevallen met `Basic`. |
| Opslagmap | Standaard `imgbed`; je kunt ook een eigen map gebruiken. |

![Configuratie invullen](../../image/upload/webdav/填写配置.png)

## Gedrag bij grote bestanden

Het WebDAV-kanaal gebruikt nu echte sessiegebaseerde chunk-upload.

Kleine bestanden worden als één volledig bestand geüpload. Bestanden groter dan 64 MiB worden automatisch in delen van ongeveer 10 MiB gesplitst en naar een externe chunkmap geüpload.

De WebDAV-dienst hoeft geen `partial update` of offset-gebaseerde schrijfacties te ondersteunen. ImgBed voegt de chunks op de externe server niet samen tot één groot bestand. In plaats daarvan bewaart ImgBed een chunkmanifest en leest het de chunks in volgorde wanneer het bestand wordt opgevraagd.

In de praktijk:

| Bestandsgrootte | Uploadmethode | Externe opslagstructuur |
| --- | --- | --- |
| 64 MiB of kleiner | Normale upload | Eén volledig bestand |
| Groter dan 64 MiB | Echte sessiegebaseerde chunk-upload | Een chunkmap met meerdere deelbestanden |

De chunkmap beïnvloedt alleen de structuur in de externe opslag. De bestands-URL in ImgBed verandert niet. Gebruikers blijven het bestand openen via de oorspronkelijke `/file/...`-link.

## Instelstappen

1. Open Uploadinstellingen.
2. Klik op Kanaal toevoegen.
3. Selecteer `WebDAV`.
4. Vul een herkenbare kanaalnaam in, bijvoorbeeld `koofr`.
5. Vul de WebDAV-endpoint in, bijvoorbeeld `https://app.koofr.net/dav/Koofr`.
6. Vul gebruikersnaam en wachtwoord in.
7. Laat authenticatiemodus standaard op `Basic`.
8. Laat de opslagmap op `imgbed`, of verander deze naar je eigen map.
9. Klik op Opslaan.
10. Controleer na opslaan de kanaalkaart, vraag capaciteit op als dat beschikbaar is en upload een testbestand.

## Controleren

| Controle | Hoe je controleert |
| --- | --- |
| Kanaalkaart verschijnt | Na opslaan moet in Uploadinstellingen een WebDAV-kanaalkaart zichtbaar zijn. |
| Kanaal is actief | De schakelaar rechtsboven op de kaart blijft aan. |
| Inloggegevens zijn opgeslagen | De detailweergave toont Endpoint, gebruikersnaam, authenticatiemodus en opslagmap. |
| Klein bestand uploadt | Upload een testafbeelding en controleer of die in de WebDAV-map verschijnt. |
| Regel voor grote bestanden werkt | Bestanden groter dan 64 MiB gebruiken chunk-upload en maken een externe chunkmap. |
| Capaciteitsopvraag werkt | Als de server capaciteitsinformatie ondersteunt, worden gebruikt en totaal weergegeven. |

![Quota-opvraag gelukt](../../image/upload/webdav/查询额度成功.png)

## FAQ

### Waarom maken grote WebDAV-bestanden een chunkmap?

Dit is de huidige opslagmethode voor grote bestanden.

Bestanden groter dan 64 MiB worden niet samengevoegd tot één groot extern bestand. Ze worden opgeslagen als chunkmap. ImgBed bewaart het chunkmanifest en levert de volledige inhoud door de delen in volgorde te lezen.

### Wat controleer ik eerst als upload van grote bestanden mislukt?

Controleer eerst Endpoint, gebruikersnaam, wachtwoord en opslagmap. Controleer daarna of de WebDAV-dienst mappen mag maken, bestanden mag schrijven en bestanden mag lezen.

Als de capaciteitsopvraag mislukt maar kleine uploads werken, ondersteunt de server mogelijk geen capaciteitsrapportage of beperkt hij deze. Dat betekent niet automatisch dat uploaden niet beschikbaar is.

### Welke authenticatiemodus moet ik kiezen?

Begin met `Basic`.

Als de server expliciet digest-authenticatie vereist, gebruik dan `Digest`.

Als je het niet zeker weet, gebruik automatische onderhandeling.

## Snelle checklist

```text
Prepare WebDAV endpoint, username, and password
-> Open Upload Settings
-> Add Channel
-> Select WebDAV
-> Enter Endpoint / username / password
-> Keep authentication mode as Basic by default
-> Keep storage directory as imgbed by default
-> Save
-> Query capacity
-> Upload a test file
```
