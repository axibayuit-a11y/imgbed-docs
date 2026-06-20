# Magnet-transfer

Magnet-transfer downloadt bestanden vanaf een magnetlink en uploadt ze automatisch naar het cloudopslagkanaal dat je kiest.

Dit is handig voor anime-afleveringen, video's, archieven en vergelijkbare bestanden. Plak een magnetlink en ImgBed maakt een downloadtaak op de achtergrond. Wanneer de download klaar is, wordt het bestand naar ImgBed geüpload en verschijnt de uiteindelijke link in de uploadlijst.

![Magnet-transfer](../../image/other/磁力链接/磁力链接.png)

## Waar je dit gebruikt

De ingang voor magnet-transfer staat in het uploadgedeelte van de homepage.

Plak de magnetlink in het invoerveld, kies `Transfer` en upload.

![Anime uploaden](../../image/other/磁力链接/上传番剧.png)

## Voor het eerste gebruik

Configureer magnet-transfer eerst in het beheerpaneel.

Meestal heb je nodig:

1. Een GitHub-account om de downloadtaak uit te voeren.
2. Een cloud-uploadkanaal, zoals Google Drive of OneDrive.
3. De doelmap voor upload.
4. Een taak-time-out.

Wanneer de instellingen klaar zijn, ga je terug naar de homepage en plak je een magnetlink om de transfer te starten.

## Een magnetlink uploaden

1. Plak de magnetlink in het uploadveld op de homepage.
2. Controleer dat de modus op `Transfer` staat.
3. Klik op upload.
4. Wacht tot ImgBed de magnettaak aanmaakt.
5. Zodra de taak start, gebruik je het zwevende paneel `Magnet Tasks` rechtsonder om de voortgang te volgen.

Downloaden en uploaden kunnen tijd kosten. De snelheid hangt af van de magnetbron, de GitHub-runtimeomgeving en het gekozen cloudopslagkanaal.

![Magnet wordt gedownload](../../image/other/磁力链接/磁力链接下载中.png)

## Na voltooiing

Na afronding toont de uploadlijst de bestandsnaam en link.

Video's tonen een videopreview, afbeeldingen een afbeeldingspreview en andere bestanden een normaal bestandspictogram.

![Gedownloade video](../../image/other/磁力链接/下载好后的视频.png)

Je kunt kopiëren:

| Linktype | Gebruik |
| --- | --- |
| Originele link | Directe bestandstoegang |
| Markdown | Markdown-berichten of notities |
| HTML | Webpaginacode |
| BBCode | Forums die BBCode ondersteunen |

## Magnettakenpaneel

Het paneel rechtsonder toont aantal taken, taaknaam, voortgang en eindstatus.

Veelvoorkomende statussen:

| Status | Betekenis |
| --- | --- |
| Waiting | De taak is aangemaakt en wacht op uitvoering. |
| Downloading | De magnetbron wordt gedownload. |
| Uploading | Het bestand is gedownload en wordt naar cloudopslag geüpload. |
| Completed | Upload gelukt en de link kan worden gekopieerd. |
| Failed | De taak is niet succesvol afgerond. Controleer de melding en probeer opnieuw. |

## Tips

- Bevat een magnetlink meerdere bestanden, dan geeft ImgBed prioriteit aan het belangrijkste afgeronde bestand voor weergave.
- Grote bestanden duren langer. Wacht tot de taak klaar is voordat je de pagina ververst.
- Heeft de magnetbron geen beschikbare peers, dan kan de download erg langzaam zijn of mislukken.
- Is het cloudaccount vol, de autorisatie verlopen of de uploadmap verkeerd, dan kan de taak mislukken.
- Videopreview kan enkele seconden nodig hebben nadat uploaden klaar is.

## FAQ

### Er start niets nadat ik een magnetlink plak

Controleer of magnet-transfer in het beheer is ingeschakeld en of een bruikbaar GitHub-account en cloudkanaal zijn geselecteerd.

### Downloaden is altijd traag

Magnetsnelheid hangt af van de bron zelf. Zijn er geen beschikbare peers, dan kan downloaden heel traag of onmogelijk zijn.

### Er verschijnt geen preview na upload

Controleer eerst of de bestandslink opent. Videobestanden kunnen in de browser wat tijd nodig hebben om te laden, of je kunt de link direct openen.

### Wat controleer ik als een taak mislukt?

Controleer of de magnetlink geldig is, of het cloudkanaal werkt en of de uploadmap klopt. Dien de taak daarna opnieuw in.
