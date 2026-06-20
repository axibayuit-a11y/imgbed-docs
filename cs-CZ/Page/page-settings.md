# Nastavení stránky

Nastavení stránky řídí vzhled webu, výchozí nastavení upload stránky, obrázky pozadí a vzhled administrace.

## Globální nastavení

| Volba | Účel |
| --- | --- |
| Titulek webu | Titulek zobrazený na kartě prohlížeče. |
| Ikona webu | Malá ikona zobrazená na kartě prohlížeče. |
| Název ImgBed | Název zobrazený na frontendových stránkách. |
| Logo ImgBed | Obrázek loga zobrazený na frontendových stránkách. |
| Odkaz loga | URL otevřený po kliknutí na logo nebo avatar. |
| Interval střídání pozadí | Interval rotace více pozadí v milisekundách. `60000` znamená 60 sekund. |
| Průhlednost pozadí | Průhlednost obrázku pozadí od `0` do `1`. Nižší hodnoty jsou světlejší. |
| Výchozí URL prefix | Prefix používaný při generování odkazů obrázků. Prázdné znamená aktuální doménu webu. |

## Klientská nastavení

| Volba | Účel |
| --- | --- |
| Oznámení | Oznámení zobrazené nahoře na upload stránce. HTML je podporováno. |
| Výchozí upload kanál | Kanál vybraný ve výchozím stavu na upload stránce. Lze zvolit i Smart Dispatch. |
| Výchozí upload adresář | Výchozí adresář pro upload, například `/user/`. Prázdné nebo `/` znamená root. |
| Výchozí metoda pojmenování | Výchozí strategie generování názvu souboru po uploadu. Viz níže. |
| Výchozí převod na WebP | Před uploadem převádí obrázky na WebP. |
| Výchozí komprese | Před uploadem komprimuje obrázky lokálně v prohlížeči. |
| Výchozí práh komprese | Automaticky komprimuje, když obrázek překročí tuto velikost v MB. |
| Výchozí cílová velikost | Cílová velikost souboru po kompresi v MB. |
| Pozadí přihlašovací stránky | Obrázek pozadí pro přihlášení uživatele. |
| Pozadí upload stránky | Obrázek pozadí pro upload stránku. |
| Odkaz portálu v patičce | URL otevřený tlačítkem portálu v patičce. |
| Skrýt patičku | Po zapnutí skryje frontendovou patičku. |

## Nastavení administrace

| Volba | Účel |
| --- | --- |
| Pozadí přihlášení administrátora | Obrázek pozadí pro přihlášení administrátora. |
| Pozadí administrace | Obrázek pozadí pro administrační stránky. Použijte jeden URL obrázku nebo více URL. |
| Režim načítání obrázků | Režim náhledu v seznamu souborů administrace. Original načítá původní obrázky. Smart loading preferuje miniatury pro veřejné obrázky a originály pro omezené obrázky. |
| Zdroj miniatur | Služba pro generování miniatur: wsrv.nl, Cloudflare Image Resizing nebo WordPress Photon. Cloudflare Image Resizing musí být v Cloudflare zapnuté před výběrem. |
| Live2D widget | Zobrazí postavu Live2D v administraci. |
| Efekt ohňostroje při kliknutí | Zobrazí efekt ohňostroje při kliknutí na stránku. |
| Hvězdná stopa kurzoru | Zobrazí hvězdnou stopu při pohybu myši. |

## Formáty obrázků pozadí

Pozadí přihlašovací stránky, upload stránky a přihlášení administrátora podporují:

| Hodnota | Efekt |
| --- | --- |
| `bing` | Použije rotaci tapet Bing. |
| `["https://example.com/1.jpg","https://example.com/2.jpg"]` | Střídá více obrázků. |
| `["https://example.com/1.jpg"]` | Použije jeden obrázek pozadí. |
| `["https://your-domain.com/random?..."]` | Použije odkaz Random Image API. Vlastní Random Image API můžete nastavit v Dalších nastaveních a vložit sem vygenerovaný odkaz jako jedno pozadí. |

Pozadí administrace podporuje URL obrázků. Více URL lze oddělit anglickými čárkami podle nápovědy na stránce. Prázdné pole znamená výchozí pozadí.

## Výchozí metoda pojmenování

| Metoda | Výsledek |
| --- | --- |
| Default | Časově-náhodný prefix + původní název souboru, například `1760000000000_cat.png`. |
| Pouze prefix | Časově-náhodný prefix a přípona, například `1760000000000.png`. |
| Pouze původní název | Zachová původní název, například `cat.png`. Při duplicitě ImgBed přidá `(1)`, `(2)` a tak dále. |
| Krátký odkaz | Použije 8znakové krátké ID a příponu, například `a1b2c3d4.png`. |
