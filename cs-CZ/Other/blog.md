# Blog

Funkce Blog přidá na váš web ImgBed samostatnou blogovou stránku.

Po zapnutí ji návštěvníci otevřou na:

```text
https://your-domain.com/blog/
```

![Domovská stránka blogu](../../image/other/博客/博客首页.png)

Blog vychází z open-source projektu [LyraVoid/Mizuki](https://github.com/LyraVoid/Mizuki). ImgBed ho přepracoval a integroval pomocí Vue, aby mohl běžet jako součást image hosting webu.

## Kde nastavit

Nastavení blogu je v:

```text
System Settings -> Other Settings -> Blog
```

![Nastavení blogu](../../image/other/博客/QQ20260611-221702.png)

## První nastavení

1. Zapněte `Enable`.
2. Vyberte GitHub účet, do kterého se uloží konfigurace blogu.
3. Klikněte na `Update Blog`.
4. Počkejte na zprávu o úspěchu.
5. Otevřete `https://your-domain.com/blog/` a zkontrolujte blog.

Při prvním použití ImgBed připraví v vybraném účtu soukromý GitHub repozitář:

```text
imgbed-blog-config
```

Repozitář ukládá nastavení blogu a obsah článků.

## Psaní článků

Články upravujte v soukromém GitHub repozitáři:

```text
imgbed-blog-config
```

Typický postup:

1. Otevřete GitHub.
2. Přejděte do soukromého repozitáře `imgbed-blog-config`.
3. Upravte nebo přidejte soubory článků.
4. Commitněte změny.
5. Vraťte se do administrace ImgBed a klikněte na `Update Blog`, nebo na domovské stránce blogu třikrát klikněte na logo vlevo nahoře, čímž spustíte aktualizaci blogu.

`Update Blog` nepřepisuje obsah, který jste napsali. Slouží hlavně k inicializaci repozitáře a obnovení cache blogu.

## Podporované funkce

Blog podporuje běžné funkce jako seznam článků, kategorie, tagy, archiv, vyhledávání, tmavý režim a přepínání jazyků.

Podporuje také komentáře a statistiky návštěv.

![Komentáře blogu](../../image/other/博客/支持留言.png)

Komentáře se zobrazují pod články. Návštěvníci mohou zadat avatar, přezdívku, e-mail a text komentáře.

Statistiky ukazují zobrazení článků a návštěvy webu, což pomáhá sledovat provoz blogu.

## URL

Blog je vždy dostupný pod `/blog/`.

Pokud je doména ImgBed například:

```text
https://image.example.com
```

adresa blogu bude:

```text
https://image.example.com/blog/
```

Po vypnutí blogu už návštěvníci blogovou stránku neotevřou.
