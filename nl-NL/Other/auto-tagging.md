# Automatische tags

Automatische tags stel je in onder:

```text
System Settings -> Other Settings -> Auto Tagging
```

Deze functie genereert automatisch afbeeldingstags. Die zijn handig voor zoeken, filters in de Random Image API, filtering in de openbare gallery en toegangscontrole op basis van leeftijdsrating.

## Wat automatische tags kunnen doen

| Functie | Beschrijving |
| --- | --- |
| Contenttags genereren | Voegt tags toe voor personen, scènes, objecten, kunststijl en vergelijkbare visuele inhoud. |
| Personagetags genereren | Handig voor anime-afbeeldingen en illustraties. |
| Oriëntatietags toevoegen | Voegt `landscape`, `portrait` of `square` toe. |
| Afbeeldingsrating toevoegen | Slaat `G/S/Q/E`-resultaten op voor algemeen, gevoelig, twijfelachtig of expliciet materiaal. |
| Automatisch taggen bij upload | Nieuwe afbeeldingen gaan automatisch door de taggingflow. |
| Batchtagging | Voegt tags toe aan oude afbeeldingen in alle mappen of geselecteerde mappen. |

## Wat je vooraf nodig hebt

Bereid minstens één toegankelijke Hugging Face Space-URL voor.

De aanbevolen aanpak is om SmilingWolfs `wd-tagger` Space naar je eigen Hugging Face-account te dupliceren:

```text
https://huggingface.co/spaces/SmilingWolf/wd-tagger
```

Je kunt tijdelijk de openbare Space gebruiken, maar openbare Spaces worden door veel gebruikers gedeeld en kunnen wachtrijen, vertraging of uitval hebben. Een gedupliceerde Space onder je eigen account is stabieler voor langdurig automatisch taggen.

## SmilingWolfs Space dupliceren

1. Log in bij Hugging Face.
2. Open `https://huggingface.co/spaces/SmilingWolf/wd-tagger`.

![Openbare Space van SmilingWolf](../../image/other/微笑狼的公开仓库.png)

3. Klik rechtsboven op het menu met drie puntjes.
4. Kies `Duplicate this Space`.
5. Laat de standaardnaam staan of kies een eigen naam, zoals `wd-tagger`.
6. Zet zichtbaarheid op `Public`. Openbare Spaces zijn makkelijker door ImgBed aan te roepen.
7. Laat eerst de gratis standaardhardware staan. Upgrade later alleen als wachtrijen duidelijk een probleem worden.
8. Maak de Space aan en wacht tot de build klaar is.

Na de build open je je Space-pagina. De URL ziet er meestal zo uit:

```text
https://huggingface.co/spaces/your-name/wd-tagger
```

Kopieer de browser-URL en plak deze in ImgBeds `Space URLs`.

## Meerdere Space URL's invullen

Vul één Space-URL per regel in.

Voorbeelden:

| Waarde | Beschrijving |
| --- | --- |
| `https://huggingface.co/spaces/SmilingWolf/wd-tagger` | Openbare SmilingWolf Space. Goed voor tijdelijk testen. |
| `https://huggingface.co/spaces/lintonxue00/wd-tagger` | URL van een gekopieerde Space-pagina. |
| `https://huggingface.co/spaces/your-name/wd-tagger` | Je eigen gedupliceerde Space-pagina. |

Je kunt meerdere URL's invoeren. ImgBed gebruikt meerdere Spaces samen, wat de snelheid kan verbeteren.

Als één Space tijdelijk niet beschikbaar is, kunnen de andere doorgaan.

## Instellingen

| Optie | Aanbeveling |
| --- | --- |
| `Space URLs` | Vul de voorbereide Space-URL's in. Gebruik er minstens één. |
| Doelmap | Laat leeg voor alle mappen. Selecteer alleen een map als je een specifieke directory wilt verwerken. |
| Herkenningsmodel | Laat standaard `wd-swinv2-tagger-v3` staan. |
| Drempel algemene tags | De standaardwaarde werkt voor de meeste afbeeldingen. Lagere waarden geven meer tags, hogere waarden minder. |
| Drempel personagetags | Standaard conservatief, zodat verkeerde personagetags worden beperkt. |
| Automatische `MCut`-drempel | Laat eerst uit. Zet aan als het model zelf het aantal tags moet bepalen. |
| Automatisch taggen bij upload | Zet aan als nieuwe uploads automatisch tags moeten krijgen. |
| Tagging starten | Start handmatig batchtagging voor oude afbeeldingen. |

## Aanbevolen startwaarden

| Optie | Aanbevolen waarde |
| --- | --- |
| Herkenningsmodel | `wd-swinv2-tagger-v3` |
| Drempel algemene tags | `0.35` |
| Drempel personagetags | `0.85` |
| `MCut` | Eerst uit |
| Automatisch taggen bij upload | Inschakelen indien nodig |

Krijg je te veel tags, verhoog dan de algemene drempel iets.

Krijg je te weinig tags, verlaag dan de algemene drempel iets.

## Batchtagging

1. Vul `Space URLs` in.
2. Selecteer een doelmap.
3. Klik op tagging starten.
4. Wacht tot de voortgang klaar is.

Als de doelmap leeg is, verwerkt ImgBed alle mappen.

Batchtagging is vooral geschikt voor oude afbeeldingen. Voor nieuwe afbeeldingen schakel je automatisch taggen bij upload in, zodat je dit niet telkens handmatig hoeft te starten.

## Automatisch taggen bij upload

Wanneer dit is ingeschakeld, roepen nieuw geüploade afbeeldingen automatisch de ingestelde `Space URLs` aan.

Dit is geschikt voor langdurig gebruik.

Als je Space in de wachtrij staat, kan de upload zelf toch eerst afronden en loopt tagging daarna door.

## Welke afbeeldingen worden verwerkt

Automatische tagging verwerkt vooral afbeeldingsbestanden.

Afbeeldingen die al volledige tags, oriëntatie, rating, breedte en hoogte hebben, worden overgeslagen om onnodige Space-aanroepen te voorkomen.

ImgBed vult waar mogelijk alleen ontbrekende informatie aan. Ontbreekt bijvoorbeeld alleen oriëntatie, dan probeert het die toe te voegen zonder de volledige contenttagflow aan te roepen.

## FAQ

### Waarom mijn eigen Space dupliceren?

Openbare Spaces worden door veel gebruikers gedeeld. Je eigen gedupliceerde Space wordt vooral door jouw ImgBed-site gebruikt en is daardoor meestal sneller en betrouwbaarder.

### De Space blijft opstarten

Na de eerste aanmaak of na een lange periode zonder gebruik kan een Space tijd nodig hebben om te starten.

Open eerst je Space-pagina. Zodra deze normaal een afbeelding kan herkennen, ga je terug naar ImgBed en start je tagging.

### Hoe kopieer ik de Space-URL?

Open je Hugging Face Space-pagina en kopieer het browseradres.

Voorbeelden:

```text
https://huggingface.co/spaces/lintonxue00/wd-tagger
https://huggingface.co/spaces/SmilingWolf/wd-tagger
```

### Kan ik meerdere Spaces toevoegen?

Ja. Vul één Space-URL per regel in.

Meerdere Spaces verwerken afbeeldingen samen en zijn handig wanneer je veel afbeeldingen hebt.

### Waarom zijn tags in het Engels?

SmilingWolf-modellen geven Engelse tags terug. Dat is normaal.

De tags worden vooral gebruikt voor zoeken, filtering, de Random Image API en openbare galleryfilters.

### Waarvoor worden ratingtags gebruikt?

Ratingresultaten werken samen met de toegangsmodus in Beveiligingsinstellingen.

Wanneer bezoekerstoegang bijvoorbeeld op leeftijdsrating is beperkt, filteren openbare browsefuncties en random image-functies afbeeldingen volgens die regels.

## Snelle flow

```text
Log in bij Hugging Face
-> Open SmilingWolf/wd-tagger
-> Duplicate this Space
-> Wacht tot de Space is gebouwd
-> Kopieer je Space-URL
-> Vul Space URLs in ImgBed in
-> Kies model en drempels
-> Start tagging of schakel automatisch taggen bij upload in
```
