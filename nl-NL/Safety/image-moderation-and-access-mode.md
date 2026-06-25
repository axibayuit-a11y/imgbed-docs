# Afbeeldingsmoderatie en toegangsmodus

Afbeeldingsmoderatie geeft geüploade afbeeldingen een leeftijdsclassificatie. De toegangsmodus bepaalt welke classificaties openbaar zichtbaar zijn.

Dit beïnvloedt de openbare galerij, openbare bestands-URL's en de API voor willekeurige afbeeldingen. Het beperkt het beheerpaneel niet. Beheerders kunnen alle bestanden blijven bekijken en beheren.

## Waar je dit configureert

Open het beheer en ga naar:

```text
System Settings -> Security Settings -> Upload Management -> Image Moderation
```

De belangrijkste instellingen zijn:

- Toegangsmodus
- Moderatie inschakelen
- Moderatieprovider

## Wat toegangsmodus doet

De toegangsmodus bepaalt welke leeftijdsclassificaties openbaar getoond mogen worden.

Huidige modi:

| Toegangsmodus | Openbaar zichtbare classificaties |
| --- | --- |
| Volwassenenmodus | General, R12, R16, R18 |
| Jongerenmodus | General, R12, R16 |
| Tienermodus | General, R12 |
| Kindmodus | Alleen General |

De standaardmodus is de volwassenenmodus.

Voor privésites of sites met volwassen inhoud kan de volwassenenmodus passend zijn. Voor een voorzichtiger openbare galerij kies je de jongeren-, tiener- of kindmodus.

## Wat moderatie inschakelen doet

Wanneer moderatie is ingeschakeld, roept ImgBed tijdens upload de gekozen provider aan en slaat de gevonden leeftijdsclassificatie op.

Belangrijkste classificaties:

| Classificatie | Betekenis |
| --- | --- |
| General | Veilige openbare inhoud |
| R12 | Licht gevoelige inhoud |
| R16 | Matig gevoelige inhoud |
| R18 | Volwassen inhoud |

Het moderatieresultaat wordt gebruikt bij het bepalen van openbare toegang.

Als moderatie niet is ingeschakeld, of oude bestanden geen classificatie hebben, worden die bestanden als niet-geclassificeerd behandeld. Niet-geclassificeerde bestanden worden niet automatisch uit de openbare galerij of de API voor willekeurige afbeeldingen verwijderd alleen omdat er geen classificatie bestaat.

## Een moderatieprovider kiezen

Beschikbare providers zijn onder meer:

- moderatecontent.com
- nsfwjs
- Sightengine

Elke provider heeft eigen vereisten:

- moderatecontent.com vraagt meestal om een API Key.
- nsfwjs vraagt meestal om een URL van een API-eindpunt.
- Sightengine vereist een API user en API secret.

Kies op basis van je account, beschikbaarheid en detectiekwaliteit. Zolang moderatie ingeschakeld en correct ingesteld is, probeert ImgBed tijdens upload een classificatie op te slaan.

## Effect op de openbare galerij

De openbare galerij filtert bestanden volgens de toegangsmodus.

Voorbeelden:

- Volwassenenmodus: R18-afbeeldingen kunnen verschijnen.
- Jongerenmodus: R18-afbeeldingen worden verborgen.
- Tienermodus: R16- en R18-afbeeldingen worden verborgen.
- Kindmodus: alleen General-afbeeldingen worden getoond.

Dit geldt alleen voor normale openbare toegang. Het beheerpaneel toont nog steeds alle bestanden.

## Effect op openbare bestands-URL's

Openbare bestands-URL's zijn directe afbeeldingslinks die bezoekers openen.

Als de classificatie van het bestand is toegestaan door de huidige toegangsmodus, geeft ImgBed de oorspronkelijke afbeelding terug.

Is de classificatie hoger dan toegestaan, dan geeft normale openbare toegang niet de oorspronkelijke afbeelding terug. ImgBed geeft dan de ingestelde geblokkeerde uitvoer of vervangende afbeelding terug.

Voorbeeld:

- De huidige modus is kindmodus.
- Een afbeelding heeft classificatie R18.
- Een bezoeker opent de openbare URL direct.
- ImgBed geeft de oorspronkelijke R18-afbeelding niet terug aan die bezoeker.

![Beperkte bestandsafbeelding](../../image/Safety/文件受限图.png)

Beheerders die bestanden in het beheerpaneel bekijken, worden niet door deze beperking geraakt.

## Effect op de API voor willekeurige afbeeldingen

De API voor willekeurige afbeeldingen filtert de kandidaatpool ook volgens de toegangsmodus.

In de kindmodus worden willekeurige afbeeldingen alleen gekozen uit General-bestanden.

In de jongerenmodus kunnen willekeurige afbeeldingen uit General, R12 en R16 komen, maar niet uit R18.

Zo kan de API voor willekeurige afbeeldingen de regels van de openbare galerij niet omzeilen.

## Samenhang met lijstregels

De toegangsmodus is niet de enige openbare toegangsregel. Deze werkt samen met allowlist- en blocklistregels.

Kort gezegd:

- Inhoud op de allowlist is eerst openbaar.
- Inhoud op de blocklist kan niet direct door gewone bezoekers worden bekeken.
- Inhoud die op geen van beide lijsten staat, wordt daarna gecontroleerd tegen de toegangsmodus.

Als een afbeelding zowel door leeftijdsclassificatie als door lijstregels wordt beperkt, kunnen gewone bezoekers het oorspronkelijke bestand nog steeds niet direct bekijken.

## Aanbevolen instellingen

Voor openbare sites:

- Schakel moderatie in.
- Kies een toegangsmodus die past bij het publiek van de site.
- Gebruik de kindmodus of tienermodus voor bezoekers van alle leeftijden.
- Vermijd de volwassenenmodus als je volwassen inhoud niet openbaar wilt tonen.
- Controleer classificaties in het beheerpaneel en pas ze handmatig aan wanneer nodig.

Voor privé- of persoonlijke sites:

- De volwassenenmodus is meestal prima.
- Schakel moderatie in als het nuttig is.
- Controleer en pas classificaties in het beheerpaneel aan wanneer nodig.

## FAQ

### Verdwijnen bestanden uit het beheerpaneel als ik de toegangsmodus wijzig?

Nee.

De toegangsmodus beïnvloedt alleen normale openbare toegang. Deze heeft geen effect op het beheerpaneel.

### Waarom toont de openbare galerij minder afbeeldingen na wisselen naar de kindmodus?

De kindmodus staat alleen General-bestanden openbaar toe. R12, R16 en R18 worden weggefilterd.

### Kunnen openbare URL's nog volwassen afbeeldingen openen?

Als de huidige toegangsmodus die classificatie niet toestaat, geven normale openbare URL's de oorspronkelijke afbeelding niet terug.

### Kan de API voor willekeurige afbeeldingen beperkte afbeeldingen teruggeven?

Nee.

De API voor willekeurige afbeeldingen filtert kandidaten volgens de huidige toegangsmodus.

### Wat gebeurt er met oude afbeeldingen zonder classificatie?

Afbeeldingen zonder classificatie worden niet automatisch verborgen alleen omdat ze geen moderatieresultaat hebben. Je kunt hun classificatie later aanpassen in het beheerpaneel.
