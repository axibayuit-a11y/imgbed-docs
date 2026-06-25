# Uploadlimieten voor gebruikers

Uploadlimieten bepalen hoe vaak gewone gebruikers of bezoekers vanaf de startpagina bestanden mogen uploaden. Dit helpt misbruik van openbare uploadpagina's voorkomen.

Deze functie geldt alleen voor uploads vanaf de startpagina. Beheerdersuploads en uploads met API Tokens worden niet door deze gebruikerslimieten beperkt.

## Waar je dit configureert

Open het beheer en ga naar:

```text
System Settings -> Security Settings -> Upload Management -> User Rate Limits
```

![Instellingen gebruikerslimieten](../../image/other/用户频控截图.png)

## Limieten inschakelen

Nadat `Enable Rate Limits` is ingeschakeld, houdt ImgBed recente uploads bij op basis van het IP-adres van de uploader.

Standaardwaarden:

| Instelling | Standaard | Beschrijving |
| --- | --- | --- |
| Detectievenster | 1,5 uur | Hoe ver terug uploadrecords worden meegeteld. |
| Maximaal aantal bestanden | 20 | Maximum aantal bestanden binnen het detectievenster. |
| Limiet per bestand | 20 MB | Maximale grootte van één bestand. |
| Totale uploadlimiet | 200 MB | Maximale totale uploadgrootte binnen het detectievenster. |

Bijvoorbeeld: met een venster van 1,5 uur, 20 bestanden, 20 MB per bestand en 200 MB totaal worden uploads vanaf hetzelfde IP geblokkeerd zodra één ingestelde limiet wordt overschreden.

## Bestandstypen uitsluiten

`Excluded upload file types` blokkeert gewone gebruikers of bezoekers voor geselecteerde bestandscategorieën.

Beschikbare categorieën:

| Type | Beschrijving |
| --- | --- |
| Images | jpg, png, webp, gif en vergelijkbare afbeeldingsbestanden |
| Videos | mp4, webm, mov en vergelijkbare videobestanden |
| Audio | mp3, flac, wav en vergelijkbare audiobestanden |
| Documents | pdf, txt, md, docx en vergelijkbare documentbestanden |
| Other | Bestanden buiten de bovenstaande categorieën, zoals zip, rar, exe, apk |

Standaard is een type niet geselecteerd, wat betekent dat het is toegestaan.

Klik je op een type en wordt het gemarkeerd, dan is dat type geblokkeerd.

Als `Other` is geselecteerd, worden bezoekers die zip- of rar-bestanden uploaden geblokkeerd en krijgen ze te zien dat dit bestandstype niet wordt ondersteund.

## Blokkeermeldingen

Wanneer een limiet wordt geraakt, zien gebruikers een passende melding:

![Melding te vaak uploaden](../../image/other/频繁报错提示.png)

| Situatie | Betekenis van de melding |
| --- | --- |
| Eén bestand te groot | Het bestand is te groot en moet vóór upload worden gecomprimeerd. |
| Bestandstype geblokkeerd | Dit bestandstype wordt niet ondersteund. Verwijder het en probeer opnieuw. |
| Uploads te vaak | Recente uploads zijn te frequent; er wordt een retrytijd getoond. |
| Totale grootte te hoog | De recente totale uploadgrootte is te hoog; er wordt een retrytijd getoond. |

## Wanneer inschakelen

Schakel gebruikerslimieten in als je uploadstartpagina openbaar bereikbaar is.

Veelvoorkomende redenen:

- je maakt je zorgen over geautomatiseerde bulkuploads.
- je wilt grote uploads van bezoekers beperken.
- je wilt dat gewone gebruikers alleen afbeeldingen uploaden, geen archieven of installers.
- je wilt openbare upload beschikbaar houden, maar resourcegebruik beheersen.

Als de site alleen voor jezelf is, of alleen beheerders kunnen uploaden, kun je dit uit laten.
