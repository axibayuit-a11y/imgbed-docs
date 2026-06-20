# Blog

De blogfunctie voegt een zelfstandige blogpagina toe aan je ImgBed-site.

Na inschakelen kunnen bezoekers openen:

```text
https://your-domain.com/blog/
```

![Bloghomepage](../../image/other/博客/博客首页.png)

De blog is gebaseerd op het open-sourceproject [LyraVoid/Mizuki](https://github.com/LyraVoid/Mizuki). ImgBed heeft deze opnieuw geïntegreerd met Vue, zodat hij als onderdeel van de image-hosting-site kan draaien.

## Waar je dit configureert

Bloginstellingen staan onder:

```text
System Settings -> Other Settings -> Blog
```

![Bloginstellingen](../../image/other/博客/QQ20260611-221702.png)

## Eerste installatie

1. Schakel `Enable` in.
2. Selecteer het GitHub-account waarin de blogconfiguratie wordt opgeslagen.
3. Klik op `Update Blog`.
4. Wacht op de succesmelding.
5. Open `https://your-domain.com/blog/` om de blog te bekijken.

Bij het eerste gebruik maakt ImgBed een privé GitHub-repository aan onder het gekozen account:

```text
imgbed-blog-config
```

Deze repository bewaart bloginstellingen en artikelinhoud.

## Berichten schrijven

Blogberichten bewerk je in je privé GitHub-repository:

```text
imgbed-blog-config
```

Typische werkwijze:

1. Open GitHub.
2. Ga naar de privérepository `imgbed-blog-config`.
3. Bewerk of voeg berichtbestanden toe.
4. Commit de wijzigingen.
5. Ga terug naar het ImgBed-beheer en klik op `Update Blog`, of klik drie keer op het logo linksboven op de bloghomepage om een update te starten.

`Update Blog` overschrijft geen inhoud die je hebt geschreven. De actie is vooral bedoeld om de repository te initialiseren en de blogcache te verversen.

## Ondersteunde functies

De blog ondersteunt gebruikelijke blogfuncties zoals berichtenlijsten, categorieën, tags, archieven, zoeken, dark mode en taalwisseling.

Ook reacties en bezoekstatistieken worden ondersteund.

![Blogreacties](../../image/other/博客/支持留言.png)

Reacties verschijnen onder berichten. Bezoekers kunnen avatar, nickname, e-mailadres en reactie invullen.

Bezoekstatistieken tonen artikelweergaven en sitebezoeken, zodat je blogverkeer beter kunt volgen.

## URL

De blog staat altijd onder `/blog/`.

Als je ImgBed-domein bijvoorbeeld is:

```text
https://image.example.com
```

dan is de blog-URL:

```text
https://image.example.com/blog/
```

Wanneer je de blog uitschakelt, kunnen bezoekers de blogpagina niet meer openen.
