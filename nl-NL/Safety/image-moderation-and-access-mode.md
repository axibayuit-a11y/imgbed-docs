# Afbeeldingsmoderatie en toegangsmodus

Afbeeldingsmoderatie geeft geüploade afbeeldingen een leeftijdsclassificatie. De toegangsmodus bepaalt welke classificaties openbaar zichtbaar zijn.

Dit beïnvloedt de openbare gallery, openbare bestands-URL's en de Random Image API. Het beperkt het beheerpaneel niet. Beheerders kunnen alle bestanden blijven bekijken en beheren.

## Waar je dit configureert

Open het beheer en ga naar:

```text
System Settings -> Security Settings -> Upload Management -> Image Moderation
```

De belangrijkste instellingen zijn:

- Access mode
- Enable moderation
- Moderation provider

## Wat Access Mode doet

Access mode bepaalt welke leeftijdsclassificaties openbaar getoond mogen worden.

Huidige modi:

| Access Mode | Openbaar zichtbare ratings |
| --- | --- |
| Adult mode | General, R12, R16, R18 |
| Youth mode | General, R12, R16 |
| Teen mode | General, R12 |
| Child mode | Alleen General |

De standaardmodus is Adult mode.

Voor privésites of sites met volwassen inhoud kan Adult mode passend zijn. Voor een voorzichtiger openbare gallery kies je Youth, Teen of Child mode.

## Wat moderatie inschakelen doet

Wanneer moderatie is ingeschakeld, roept ImgBed tijdens upload de gekozen provider aan en slaat de gevonden leeftijdsclassificatie op.

Belangrijkste ratings:

| Rating | Betekenis |
| --- | --- |
| General | Veilige openbare inhoud |
| R12 | Licht gevoelige inhoud |
| R16 | Matig gevoelige inhoud |
| R18 | Volwassen inhoud |

Het moderatieresultaat wordt gebruikt bij het bepalen van openbare toegang.

Als moderatie niet is ingeschakeld, of oude bestanden geen rating hebben, worden die bestanden als niet-geclassificeerd behandeld. Niet-geclassificeerde bestanden worden niet automatisch uit de openbare gallery of Random Image API verwijderd alleen omdat er geen rating bestaat.

## Een moderatieprovider kiezen

Beschikbare providers zijn onder meer:

- moderatecontent.com
- nsfwjs
- Sightengine

Elke provider heeft eigen vereisten:

- moderatecontent.com vraagt meestal om een API Key.
- nsfwjs vraagt meestal om een API-endpoint-URL.
- Sightengine vereist een API user en API secret.

Kies op basis van je account, beschikbaarheid en detectiekwaliteit. Zolang moderatie ingeschakeld en correct ingesteld is, probeert ImgBed tijdens upload een rating op te slaan.

## Effect op de openbare gallery

De openbare gallery filtert bestanden volgens de toegangsmodus.

Voorbeelden:

- Adult mode: R18-afbeeldingen kunnen verschijnen.
- Youth mode: R18-afbeeldingen worden verborgen.
- Teen mode: R16- en R18-afbeeldingen worden verborgen.
- Child mode: alleen General-afbeeldingen worden getoond.

Dit geldt alleen voor normale openbare toegang. Het beheerpaneel toont nog steeds alle bestanden.

## Effect op openbare bestands-URL's

Openbare bestands-URL's zijn directe afbeeldingslinks die bezoekers openen.

Als de rating van het bestand is toegestaan door de huidige toegangsmodus, geeft ImgBed de oorspronkelijke afbeelding terug.

Is de rating hoger dan toegestaan, dan geeft normale openbare toegang niet de oorspronkelijke afbeelding terug. ImgBed geeft dan de ingestelde geblokkeerde uitvoer of vervangende afbeelding terug.

Voorbeeld:

- De huidige modus is Child mode.
- Een afbeelding heeft rating R18.
- Een bezoeker opent de openbare URL direct.
- ImgBed geeft de oorspronkelijke R18-afbeelding niet terug aan die bezoeker.

![Beperkte bestandsafbeelding](../../image/Safety/文件受限图.png)

Beheerders die bestanden in het beheerpaneel bekijken, worden niet door deze beperking geraakt.

## Effect op de Random Image API

De Random Image API filtert de kandidaatpool ook volgens de toegangsmodus.

In Child mode worden willekeurige afbeeldingen alleen gekozen uit General-bestanden.

In Youth mode kunnen willekeurige afbeeldingen uit General, R12 en R16 komen, maar niet uit R18.

Zo kan de Random Image API de regels van de openbare gallery niet omzeilen.

## Samenhang met lijstregels

Access mode is niet de enige openbare toegangsregel. Het werkt samen met allowlist- en blocklistregels.

Kort gezegd:

- Inhoud op de allowlist is eerst openbaar.
- Inhoud op de blocklist kan niet direct door gewone bezoekers worden bekeken.
- Inhoud die op geen van beide lijsten staat, wordt daarna gecontroleerd tegen access mode.

Als een afbeelding zowel door leeftijdsrating als door lijstregels wordt beperkt, kunnen gewone bezoekers het oorspronkelijke bestand nog steeds niet direct bekijken.

## Aanbevolen instellingen

Voor openbare sites:

- Schakel moderatie in.
- Kies een toegangsmodus die past bij het publiek van de site.
- Gebruik Child mode of Teen mode voor bezoekers van alle leeftijden.
- Vermijd Adult mode als je volwassen inhoud niet openbaar wilt tonen.
- Controleer ratings in het beheerpaneel en pas ze handmatig aan wanneer nodig.

Voor privé- of persoonlijke sites:

- Adult mode is meestal prima.
- Schakel moderatie in als het nuttig is.
- Controleer en pas ratings in het beheerpaneel aan wanneer nodig.

## FAQ

### Verdwijnen bestanden uit het beheerpaneel als ik Access Mode wijzig?

Nee.

Access mode beïnvloedt alleen normale openbare toegang. Het heeft geen effect op het beheerpaneel.

### Waarom toont de openbare gallery minder afbeeldingen na wisselen naar Child mode?

Child mode staat alleen General-bestanden openbaar toe. R12, R16 en R18 worden weggefilterd.

### Kunnen openbare URL's nog volwassen afbeeldingen openen?

Als de huidige toegangsmodus die rating niet toestaat, geven normale openbare URL's de oorspronkelijke afbeelding niet terug.

### Kan de Random Image API beperkte afbeeldingen teruggeven?

Nee.

De Random Image API filtert kandidaten volgens de huidige toegangsmodus.

### Wat gebeurt er met oude afbeeldingen zonder rating?

Afbeeldingen zonder rating worden niet automatisch verborgen alleen omdat ze geen moderatieresultaat hebben. Je kunt hun rating later aanpassen in het beheerpaneel.
