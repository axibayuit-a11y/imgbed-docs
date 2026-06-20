# Cloudflare API-token

Cloudflare API-gegevens laten ImgBed de Cloudflare CDN-cache opschonen nadat bestanden zijn gewijzigd.

![Cloudflare API-token instellingen](../../image/Safety/cloudflare%20api%20token截图.png)

## Waar je dit configureert

Open het beheer en ga naar:

```text
System Settings -> Security Settings -> Cloudflare API Token
```

Je moet invullen:

- Zone ID
- Account-e-mail
- API Key

## Wat deze instelling doet

Cloudflare kan openbare afbeeldings-URL's cachen.

Caching maakt levering sneller, maar kan er ook voor zorgen dat oude inhoud nog even zichtbaar blijft nadat je een bestand verwijdert, blokkeert, vervangt of verplaatst.

Nadat Cloudflare API-gegevens zijn ingesteld, probeert ImgBed de bijbehorende Cloudflare-cache te wissen zodra zulke acties klaar zijn.

Dit is nuttig wanneer:

- je een afbeelding verwijdert en wilt dat de openbare link zo snel mogelijk stopt met werken.
- je een afbeelding blokkeert en wilt dat bezoekers het oorspronkelijke bestand niet meer zien.
- je een bestand met dezelfde naam vervangt en wilt dat bezoekers sneller de nieuwe versie zien.
- je bestanden verplaatst of hernoemt en oude padcache snel wilt verversen.
- je openbare toegangsregels wijzigt en de openbare gallery of random image-cache sneller wilt bijwerken.

## Als je dit leeg laat

ImgBed werkt ook zonder deze instelling normaal.

Het enige verschil is dat ImgBed de Cloudflare CDN-cache niet actief wist. Bezoekers kunnen oude inhoud blijven zien totdat de Cloudflare-cache vanzelf verloopt.

## Zone ID vinden

De Zone ID is de Cloudflare Zone ID van de site die je ImgBed-domein gebruikt.

1. Log in op het Cloudflare Dashboard.
2. Open de site waarin je ImgBed-domein zit.
3. Zoek `Zone ID` op de overzichtspagina van de site.
4. Kopieer deze naar het veld `Zone ID` in ImgBed.

Dit is de Zone ID van de site, niet de account-ID.

## Account-e-mail

Vul het e-mailadres in waarmee je inlogt bij Cloudflare.

Dit moet passen bij de API Key die je hieronder invult.

## API Key

Vul je Cloudflare Global API Key in.

1. Log in op het Cloudflare Dashboard.
2. Open je profiel.
3. Ga naar de API Tokens-pagina.
4. Zoek `Global API Key`.
5. Bekijk en kopieer deze.
6. Plak deze in het veld `API Key` in ImgBed.

![Global API Key bekijken](../../image/Safety/查看全局令牌.png)

## Wanneer dit effect heeft

Vul de velden in en sla de instellingen op.

Toekomstige bestandswijzigingen proberen daarna automatisch Cloudflare-cache te wissen. Eerdere acties worden niet met terugwerkende kracht opgeschoond. Heb je vóór deze instelling een bestand verwijderd of vervangen, wacht dan tot Cloudflare-cache verloopt of wis die handmatig in Cloudflare.

## FAQ

### Is dit verplicht?

Nee.

Gebruik je domein geen Cloudflare, of vind je CDN-cachevertraging geen probleem, dan kun je dit leeg laten.

### Breken verkeerde gegevens uploads?

Meestal niet.

Verkeerde gegevens voorkomen alleen dat ImgBed Cloudflare-cache wist. Uploaden en normale bestandstoegang blijven normaal werken.

### Waarom kan een verwijderde afbeelding nog steeds worden geopend?

De meest voorkomende reden is dat Cloudflare het oude bestand nog in cache heeft.

Met correcte Cloudflare API-gegevens wist ImgBed de cache van de betreffende URL wanneer een bestand wordt verwijderd.

### Waarom zie ik nog de oude afbeelding na vervangen?

Ook dit komt meestal door CDN-cache.

Zodra deze instelling is geconfigureerd, probeert ImgBed de cache van de oude URL te wissen wanneer een bestand met dezelfde naam wordt overschreven.
