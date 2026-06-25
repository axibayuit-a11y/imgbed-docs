# Automatisch taggen

Automatisch taggen stel je in onder:

```text
System Settings -> Other Settings -> Auto Tagging
```

De functie genereert automatisch tags voor afbeeldingen. Die tags zijn nuttig voor zoeken, filters in de API voor willekeurige afbeeldingen, filters in de openbare galerie en toegangscontrole op basis van leeftijdsrating.

## Wat automatisch taggen kan doen

| Functie | Beschrijving |
| --- | --- |
| Inhoudstags genereren | Voegt tags toe voor personen, scènes, objecten, kunststijl en vergelijkbare visuele inhoud. |
| Personagetags genereren | Handig voor anime-afbeeldingen en illustraties. |
| Oriëntatietags toevoegen | Voegt `landscape`, `portrait` of `square` toe. |
| Afbeeldingsrating toevoegen | Slaat `G/S/Q/E`-ratingresultaten op voor algemene, gevoelige, twijfelachtige of expliciete inhoud. |
| Automatisch taggen bij upload | Nieuw geüploade afbeeldingen gaan automatisch de taggingstroom in. |
| Batchtagging | Voegt tags toe aan oude afbeeldingen in alle mappen of in geselecteerde mappen. |

## Wat je eerst nodig hebt

Zorg voor ten minste één toegankelijke Hugging Face Space-URL.

De aanbevolen aanpak is om SmilingWolf's `wd-tagger` Space naar je eigen Hugging Face-account te dupliceren:

```text
https://huggingface.co/spaces/SmilingWolf/wd-tagger
```

Je kunt de openbare Space tijdelijk gebruiken, maar openbare Spaces worden door veel gebruikers gedeeld en kunnen in een wachtrij terechtkomen, trager worden of tijdelijk niet beschikbaar zijn. Een gedupliceerde Space onder je eigen account is stabieler voor langdurig automatisch taggen.

## SmilingWolf's Space dupliceren

1. Log in bij Hugging Face.
2. Open `https://huggingface.co/spaces/SmilingWolf/wd-tagger`.

![Openbare Space van SmilingWolf](../../image/other/微笑狼的公开仓库.png)

3. Klik rechtsboven op het menu met drie puntjes.
4. Kies `Duplicate this Space`.
5. Laat de standaardnaam van de Space staan of kies een eigen naam, zoals `wd-tagger`.
6. Zet de zichtbaarheid op `Public`. Openbare Spaces zijn eenvoudiger door ImgBed aan te roepen.
7. Gebruik in eerste instantie de gratis standaardhardware. Upgrade pas later als wachtrijen duidelijk merkbaar worden.
8. Maak de Space aan en wacht tot de build is voltooid.

Open na de build je Space-pagina. De URL ziet er meestal zo uit:

```text
https://huggingface.co/spaces/your-name/wd-tagger
```

Kopieer de URL uit de browser en plak deze in ImgBed bij `Space URLs`.

## Meerdere Space-URL's invullen

Voer één Space-URL per regel in.

Voorbeelden:

| Waarde | Beschrijving |
| --- | --- |
| `https://huggingface.co/spaces/SmilingWolf/wd-tagger` | Openbare Space van SmilingWolf. Geschikt voor tijdelijk testen. |
| `https://huggingface.co/spaces/lintonxue00/wd-tagger` | URL van een gekopieerde Space-pagina. |
| `https://huggingface.co/spaces/your-name/wd-tagger` | Je eigen gedupliceerde Space-pagina. |

Je kunt meerdere URL's invoeren. ImgBed gebruikt meerdere Spaces tegelijk, wat de snelheid kan verbeteren.

Als één Space tijdelijk niet beschikbaar is, kunnen de andere Spaces blijven verwerken.

## Instellingen

| Optie | Aanbeveling |
| --- | --- |
| `Space URLs` | Voer de voorbereide Space-URL's in. Gebruik er minstens één. |
| Doelmap | Laat leeg voor alle mappen. Selecteer alleen een map wanneer je een specifieke map wilt verwerken. |
| Herkenningsmodel | Laat standaard `wd-swinv2-tagger-v3` staan. |
| Drempel voor algemene tags | De standaardwaarde werkt voor de meeste afbeeldingen. Lagere waarden leveren meer tags op; hogere waarden leveren minder tags op. |
| Drempel voor personagetags | De standaardwaarde is conservatief en helpt onjuiste personagetags te voorkomen. |
| Automatische `MCut`-drempel | Laat eerst uit. Zet aan wanneer je het model automatisch het aantal tags wilt laten bepalen. |
| Automatisch taggen bij upload | Zet aan als nieuw geüploade afbeeldingen automatisch tags moeten krijgen. |
| Tagging starten | Tag oude afbeeldingen handmatig batchgewijs. |

## Aanbevolen startwaarden

| Optie | Aanbevolen waarde |
| --- | --- |
| Herkenningsmodel | `wd-swinv2-tagger-v3` |
| Drempel voor algemene tags | `0.35` |
| Drempel voor personagetags | `0.85` |
| `MCut` | Eerst uit |
| Automatisch taggen bij upload | Inschakelen indien nodig |

Als er te veel tags zijn, verhoog dan de algemene drempel iets.

Als er te weinig tags zijn, verlaag dan de algemene drempel iets.

## Batchtagging

1. Vul `Space URLs` in.
2. Selecteer een doelmap.
3. Klik op tagging starten.
4. Wacht tot de voortgang is voltooid.

Als de doelmap leeg is, verwerkt ImgBed alle mappen.

Batchtagging is vooral geschikt voor oude afbeeldingen. Schakel voor nieuwe afbeeldingen automatisch taggen bij upload in, zodat je dit niet telkens handmatig hoeft te starten.

## Automatisch taggen bij upload

Wanneer automatisch taggen bij upload is ingeschakeld, roepen nieuw geüploade afbeeldingen automatisch de geconfigureerde `Space URLs` aan.

Dit is geschikt voor langdurig gebruik.

Als je Space in de wachtrij staat, kan de upload zelf toch eerst worden afgerond. Het taggen gaat daarna verder.

## Welke afbeeldingen worden verwerkt

Automatisch taggen verwerkt vooral afbeeldingsbestanden.

Afbeeldingen die al volledige tags, oriëntatie, rating, breedte en hoogte hebben, worden overgeslagen om onnodige Space-aanroepen te voorkomen.

Waar mogelijk vult ImgBed alleen ontbrekende informatie aan. Als bijvoorbeeld alleen de oriëntatie ontbreekt, probeert ImgBed die toe te voegen zonder de volledige stroom voor inhoudstags aan te roepen.

## Veelgestelde vragen

### Waarom mijn eigen Space dupliceren?

Openbare Spaces worden door veel gebruikers gedeeld. Je eigen gedupliceerde Space wordt vooral door jouw ImgBed-site gebruikt en is daardoor meestal sneller en betrouwbaarder.

### De Space blijft opstarten

Na de eerste aanmaak of na een lange periode zonder gebruik kan een Space tijd nodig hebben om te starten.

Open eerst je Space-pagina. Zodra deze normaal een afbeelding kan herkennen, ga je terug naar ImgBed en start je het taggen.

### Hoe kopieer ik de Space-URL?

Open je Hugging Face Space-pagina en kopieer het browseradres.

Voorbeelden:

```text
https://huggingface.co/spaces/lintonxue00/wd-tagger
https://huggingface.co/spaces/SmilingWolf/wd-tagger
```

### Kan ik meerdere Spaces toevoegen?

Ja. Voer één Space-URL per regel in.

Meerdere Spaces verwerken afbeeldingen samen en zijn nuttig wanneer je veel afbeeldingen hebt.

### Waarom zijn tags in het Engels?

SmilingWolf-modellen geven Engelse tags terug. Dat is normaal.

De tags worden vooral gebruikt voor zoeken, filters, de API voor willekeurige afbeeldingen en filters in de openbare galerie.

### Waarvoor worden ratingtags gebruikt?

Ratingresultaten werken samen met de toegangsmodus in Beveiligingsinstellingen.

Als bezoekerstoegang bijvoorbeeld wordt beperkt op basis van leeftijdsrating, filteren openbaar bladeren en functies voor willekeurige afbeeldingen de afbeeldingen volgens die regels.

## Snelle workflow

```text
Sign in to Hugging Face
-> Open SmilingWolf/wd-tagger
-> Duplicate this Space
-> Wait for the Space to build
-> Copy your Space URL
-> Fill Space URLs in ImgBed
-> Choose model and thresholds
-> Start tagging or enable auto-tag on upload
```
