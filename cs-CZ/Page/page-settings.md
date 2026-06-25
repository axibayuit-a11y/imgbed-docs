# Nastavení stránky

Nastavení stránky řídí vzhled webu, výchozí nastavení stránky pro nahrávání, obrázky pozadí a vzhled administrace.

## Globální nastavení

| Volba | Účel |
| --- | --- |
| Titulek webu | Titulek zobrazený na kartě prohlížeče. |
| Ikona webu | Malá ikona zobrazená na kartě prohlížeče. |
| Název ImgBed | Název zobrazený na frontendových stránkách. |
| Logo ImgBed | Obrázek loga zobrazený na frontendových stránkách. |
| Odkaz loga | URL adresa otevřená po kliknutí na logo nebo profilový obrázek. |
| Interval střídání pozadí | Interval rotace více pozadí v milisekundách. `60000` znamená 60 sekund. |
| Průhlednost pozadí | Průhlednost obrázku pozadí od `0` do `1`. Nižší hodnoty jsou světlejší. |
| Výchozí předpona URL | Předpona používaná při generování odkazů na obrázky. Prázdná hodnota znamená použití aktuální domény webu. |

## Klientská nastavení

| Volba | Účel |
| --- | --- |
| Oznámení | Oznámení zobrazené nahoře na stránce pro nahrávání. HTML je podporováno. |
| Výchozí kanál nahrávání | Kanál vybraný ve výchozím stavu na stránce pro nahrávání. Lze zvolit i Smart Dispatch. |
| Výchozí adresář pro nahrávání | Výchozí adresář pro nahrávání, například `/user/`. Prázdná hodnota nebo `/` znamená kořenový adresář. |
| Výchozí metoda pojmenování | Výchozí strategie generování názvu souboru po nahrání. Viz níže. |
| Výchozí převod na WebP | Před nahráním převádí obrázky na WebP. |
| Výchozí komprese | Před nahráním komprimuje obrázky lokálně v prohlížeči. |
| Výchozí práh komprese | Automaticky komprimuje, když obrázek překročí tuto velikost v MB. |
| Výchozí cílová velikost | Cílová velikost souboru po kompresi v MB. |
| Pozadí přihlašovací stránky | Obrázek pozadí pro přihlášení uživatele. |
| Pozadí stránky pro nahrávání | Obrázek pozadí pro stránku pro nahrávání. |
| Odkaz portálu v patičce | URL adresa otevřená tlačítkem portálu v patičce. |
| Skrýt patičku | Po zapnutí skryje frontendovou patičku. |

## Nastavení administrace

| Volba | Účel |
| --- | --- |
| Pozadí přihlášení administrátora | Obrázek pozadí pro přihlášení administrátora. |
| Pozadí administrace | Obrázek pozadí pro administrační stránky. Použijte jednu URL adresu obrázku nebo více URL adres. |
| Režim načítání obrázků | Režim načítání náhledů v seznamu souborů administrace. Režim původního obrázku načítá původní obrázky. Chytré načítání upřednostňuje miniatury pro veřejné obrázky a originály pro obrázky s omezeným přístupem. |
| Zdroj miniatur | Služba pro generování miniatur: wsrv.nl, Cloudflare Image Resizing nebo WordPress Photon. Cloudflare Image Resizing musí být v Cloudflare zapnuté před výběrem. |
| Live2D widget | Zobrazí postavu Live2D v administraci. |
| Efekt ohňostroje při kliknutí | Zobrazí efekt ohňostroje při kliknutí na stránku. |
| Hvězdná stopa kurzoru | Zobrazí hvězdnou stopu při pohybu myši. |

## Formáty obrázků pozadí

Pozadí přihlašovací stránky, stránky pro nahrávání a přihlášení administrátora podporují tyto formáty:

| Hodnota | Efekt |
| --- | --- |
| `bing` | Použije rotaci tapet Bing. |
| `["https://example.com/1.jpg","https://example.com/2.jpg"]` | Střídá více obrázků. |
| `["https://example.com/1.jpg"]` | Použije jeden obrázek pozadí. |
| `["https://your-domain.com/random?..."]` | Použije odkaz API pro náhodné obrázky. Vlastní API pro náhodné obrázky můžete nastavit v dalších nastaveních a vložit sem vygenerovaný odkaz jako položku jednoho pozadí. |

Pozadí administrace podporuje URL adresy obrázků. Více URL adres lze oddělit anglickými čárkami podle nápovědy na stránce. Prázdné pole znamená použití výchozího pozadí.

## Výchozí metoda pojmenování

| Metoda | Výsledek |
| --- | --- |
| Výchozí | Časově náhodná předpona + původní název souboru, například `1760000000000_cat.png`. |
| Pouze předpona | Časově náhodná předpona a přípona, například `1760000000000.png`. |
| Pouze původní název | Zachová původní název, například `cat.png`. Při duplicitě ImgBed přidá `(1)`, `(2)` a tak dále. |
| Krátký odkaz | Použije 8znakové krátké ID a příponu, například `a1b2c3d4.png`. |
