# Pagina-instellingen

Pagina-instellingen regelen de weergave van de site, standaardwaarden van de uploadpagina, achtergrondafbeeldingen en het uiterlijk van het beheerpaneel.

## Algemene instellingen

| Optie | Doel |
| --- | --- |
| Sitetitel | Titel die in het browsertabblad wordt getoond. |
| Site-icoon | Klein icoon in het browsertabblad. |
| ImgBed-naam | Naam die op de pagina's van de publieke interface wordt getoond. |
| ImgBed-logo | Logo-afbeelding die op de pagina's van de publieke interface wordt getoond. |
| Logolink | URL die opent wanneer je op logo of avatar klikt. |
| Wisselinterval achtergrond | Rotatie-interval voor meerdere achtergronden, in milliseconden. `60000` betekent 60 seconden. |
| Achtergronddekking | Dekking van de achtergrondafbeelding van `0` tot `1`. Lagere waarden zijn lichter. |
| Standaard URL-voorvoegsel | Voorvoegsel voor gegenereerde afbeeldingslinks. Leeg betekent dat het huidige sitedomein wordt gebruikt. |

## Clientinstellingen

| Optie | Doel |
| --- | --- |
| Aankondiging | Bericht bovenaan de uploadpagina. HTML wordt ondersteund. |
| Standaard uploadkanaal | Kanaal dat standaard op de uploadpagina is geselecteerd. Je kunt ook Smart Dispatch kiezen. |
| Standaard uploadmap | Standaard uploadmap, bijvoorbeeld `/user/`. Leeg of `/` betekent root. |
| Standaard naamgevingsmethode | Strategie voor het genereren van bestandsnamen na upload. Zie hieronder. |
| Standaard naar WebP converteren | Zet afbeeldingen vóór upload om naar WebP. |
| Standaard compressie inschakelen | Comprimeert afbeeldingen lokaal in de browser vóór upload. |
| Standaard compressiedrempel | Comprimeert automatisch wanneer een afbeelding groter is dan deze waarde, in MB. |
| Standaard doelgrootte | Gewenste bestandsgrootte na compressie, in MB. |
| Achtergrond loginpagina | Achtergrondafbeelding voor de gebruikersloginpagina. |
| Achtergrond uploadpagina | Achtergrondafbeelding voor de uploadpagina. |
| Portaallink in de voettekst | URL die opent via de portaalknop in de voettekst. |
| Voettekst verbergen | Verbergt de voettekst van de publieke interface wanneer ingeschakeld. |

## Beheerinstellingen

| Optie | Doel |
| --- | --- |
| Achtergrond beheerlogin | Achtergrondafbeelding voor de beheerloginpagina. |
| Beheerachtergrond | Achtergrondafbeelding voor beheerpagina's. Gebruik één afbeeldings-URL of meerdere URL's. |
| Afbeeldingslaadmodus | Laadmodus voor voorbeelden in de bestandslijst van beheer. De modus voor originele afbeeldingen laadt originele afbeeldingen. Slim laden gebruikt miniaturen voor openbare afbeeldingen en originelen voor beperkte afbeeldingen. |
| Miniatuurbron | Dienst voor het genereren van miniaturen: wsrv.nl, Cloudflare Image Resizing of WordPress Photon. Cloudflare Image Resizing moet in Cloudflare zijn ingeschakeld voordat je dit kiest. |
| Live2D-widget | Toont een Live2D-personage in het beheerpaneel. |
| Vuurwerk bij klikken | Toont een vuurwerkeffect wanneer je op de pagina klikt. |
| Sterrenspoor cursor | Toont een sterrenspoor wanneer je de muis beweegt. |

## Formaten voor achtergrondafbeeldingen

Achtergrond van loginpagina, uploadpagina en beheerlogin ondersteunen deze waarden:

| Waarde | Effect |
| --- | --- |
| `bing` | Gebruikt de Bing-achtergrondrotatie. |
| `["https://example.com/1.jpg","https://example.com/2.jpg"]` | Roteert meerdere afbeeldingen. |
| `["https://example.com/1.jpg"]` | Gebruikt één achtergrondafbeelding. |
| `["https://your-domain.com/random?..."]` | Gebruikt een API-link voor willekeurige afbeeldingen. Je kunt je eigen API voor willekeurige afbeeldingen instellen onder Andere instellingen en de gegenereerde link hier als enkele achtergrond gebruiken. |

De beheerachtergrond ondersteunt afbeeldings-URL's. Meerdere URL's kunnen met Engelse komma's worden gescheiden, zoals op de pagina wordt aangegeven. Leeg betekent dat de standaardachtergrond wordt gebruikt.

## Standaard naamgevingsmethode

| Methode | Resultaat |
| --- | --- |
| Standaard | Tijdgebonden willekeurig voorvoegsel + oorspronkelijke bestandsnaam, bijvoorbeeld `1760000000000_cat.png`. |
| Alleen voorvoegsel | Tijdgebonden willekeurig voorvoegsel en extensie, bijvoorbeeld `1760000000000.png`. |
| Alleen oorspronkelijke naam | Houdt de oorspronkelijke bestandsnaam, bijvoorbeeld `cat.png`. Bij duplicaten voegt ImgBed `(1)`, `(2)` enzovoort toe. |
| Korte link | Gebruikt een korte ID van 8 tekens en extensie, bijvoorbeeld `a1b2c3d4.png`. |
