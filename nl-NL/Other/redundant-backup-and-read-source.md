# Redundante back-up en wisselen van leesbron

Redundante back-up bewaart een extra kopie van een al geüpload bestand.

Zowel het primaire bestand als het back-upbestand kunnen als leesbron worden gebruikt. Bezoekers merken normaal geen verschil. Het enige verschil is welk opslagkanaal het bestand levert.

## Wat redundante back-up kan doen

| Functie | Beschrijving |
| --- | --- |
| Extra kopie bewaren | Maakt een back-up naar een ander uploadkanaal om het risico van uitval van één kanaal te verkleinen. |
| Leesbron wisselen | Na een geslaagde back-up kun je de leesbron wisselen tussen het primaire kanaal en het back-upkanaal. |
| Back-up per bestand | Maak een back-up van één bestand vanaf de detailpagina. |
| Back-up in batch | Selecteer meerdere bestanden in het beheer en maak tegelijk een back-up. |
| Globale redundante back-up | Maak back-ups per map vanuit Andere instellingen. |

## Ingang voor redundante back-up

Open:

```text
System Settings -> Other Settings -> Redundant Backup
```

![Redundante back-up](../../image/other/冗余备份截图.png)

Deze ingang is vooral handig om back-ups toe te voegen aan een map of aan alle bestanden in één keer.

Het back-upkanaal kan handmatig worden gekozen, of je kiest automatische selectie en laat ImgBed een geschikt back-upkanaal zoeken.

## Back-up vanuit bestandsdetails

Open de detailpagina van een bestand in het beheer en klik op back-up.

![Back-up in bestandsdetails](../../image/other/文件详情里文件备份.png)

Dit is handig voor één belangrijk bestand dat je direct wilt beveiligen.

Na een geslaagde back-up toont de detailpagina beschikbare leesbronnen.

## Batchback-up via selectie

Selecteer meerdere bestanden in het beheer en voer batchback-up uit.

![Batchback-up](../../image/other/批量备份截图.png)

Dit is geschikt voor een groep bestanden.

Back-up via selectie, back-up vanuit bestandsdetails en redundante back-up onder Andere instellingen gebruiken hetzelfde back-upsysteem. Het zijn alleen verschillende ingangen.

## Leesbron wisselen na back-up

Na afronding van de back-up kun je op de detailpagina de leesbron wisselen:

| Leesbron | Beschrijving |
| --- | --- |
| Primair kanaal | Leest vanaf het oorspronkelijke uploadkanaal. |
| Back-upkanaal | Leest vanaf het kanaal waar de redundante kopie staat. |

![Leesbron wisselen na back-up](../../image/other/备份成功切换读取源.png)

Bezoekers hoeven niet te weten of een bestand vanuit het primaire kanaal of het back-upkanaal komt.

De leesbron die je kiest, wordt de voorkeursbron voor latere bestandstoegang.

## Wanneer back-up wordt overgeslagen

Deze situaties worden tijdens back-up overgeslagen. Het zijn geen fouten.

| Situatie | Waarom overgeslagen |
| --- | --- |
| Back-up bestaat al | Een bestand dat al een back-up heeft, wordt niet opnieuw als back-up opgeslagen. |
| Primair en back-upkanaal zijn hetzelfde | Een back-up moet op een ander kanaal staan om zinvol te zijn. |
| Geen bruikbaar back-upkanaal | Er is geen geschikt alternatief kanaal beschikbaar. |

Kort gezegd: back-ups moeten naar een ander kanaal, en bestanden waarvoor al een back-up bestaat, verbruiken niet opnieuw extra ruimte.

## Primair kanaal en back-upkanaal

| Naam | Betekenis |
| --- | --- |
| Primair kanaal | Het kanaal dat werd gebruikt toen het bestand voor het eerst werd geüpload. |
| Back-upkanaal | Het kanaal waarin de redundante kopie staat. |
| Primaire leesbron | Het bestand wordt momenteel gelezen vanaf het primaire kanaal. |
| Back-up-leesbron | Het bestand wordt momenteel gelezen vanaf het back-upkanaal. |

Primaire en back-up-leesbronnen gedragen zich voor gebruikers hetzelfde.

Zolang het back-upbestand beschikbaar is, blijven afbeeldingen, video's en downloadlinks werken nadat je naar de back-up-leesbron wisselt.

## Wat gebeurt er wanneer een bestand wordt verwijderd

Wanneer een bestand wordt verwijderd, verwijdert ImgBed zowel het primaire bestand als het back-upbestand.
