# Blog

Funkce blogu přidá na váš web ImgBed samostatnou blogovou stránku.

Po zapnutí ji návštěvníci mohou otevřít na:

```text
https://your-domain.com/blog/
```

![Domovská stránka blogu](../../image/other/博客/博客首页.png)

Blog je upravený podle otevřeného projektu [LyraVoid/Mizuki](https://github.com/LyraVoid/Mizuki). ImgBed ho přepsal a integroval s Vue, aby mohl běžet jako součást webu pro hosting obrázků.

## Kde ho nastavit

Nastavení blogu najdete zde:

```text
System Settings -> Other Settings -> Blog
```

![Nastavení blogu](../../image/other/博客/QQ20260611-221702.png)

## První nastavení

1. Zapněte `Enable`.
2. Vyberte účet GitHub, který se použije k uložení konfigurace blogu.
3. Klikněte na `Update Blog`.
4. Počkejte na zprávu o úspěchu.
5. Otevřete `https://your-domain.com/blog/` a blog zkontrolujte.

Při prvním použití ImgBed připraví ve vybraném účtu soukromý repozitář GitHub:

```text
imgbed-blog-config
```

Tento repozitář ukládá nastavení blogu a obsah článků.

## Psaní článků

Články upravujte ve svém soukromém repozitáři GitHub:

```text
imgbed-blog-config
```

Běžný postup:

1. Otevřete GitHub.
2. Přejděte do soukromého repozitáře `imgbed-blog-config`.
3. Upravte soubory článků nebo přidejte nové.
4. Potvrďte změny.
5. Vraťte se do administračního panelu ImgBed a klikněte na `Update Blog`, nebo třikrát klikněte na logo v levém horním rohu domovské stránky blogu, čímž spustíte aktualizaci blogu.

`Update Blog` nepřepisuje obsah, který jste napsali. V případě potřeby inicializuje repozitář a obnoví mezipaměť blogu.

## Podporované funkce

Blog podporuje běžné funkce, jako jsou seznamy článků, kategorie, štítky, archiv, vyhledávání, tmavý režim a přepínání jazyků.

Podporuje také komentáře a statistiky návštěv.

![Komentáře blogu](../../image/other/博客/支持留言.png)

Komentáře se zobrazují pod články. Návštěvníci mohou odeslat profilový obrázek, přezdívku, e-mail a text komentáře.

Statistiky návštěv zobrazují zobrazení článků a návštěvy webu, což vám pomůže porozumět návštěvnosti blogu.

## URL

Blog je vždy dostupný pod cestou `/blog/`.

Například pokud je doména ImgBed:

```text
https://image.example.com
```

URL blogu bude:

```text
https://image.example.com/blog/
```

Po vypnutí blogu už návštěvníci blogovou stránku neotevřou.
