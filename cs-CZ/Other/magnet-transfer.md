# Přenos magnet odkazů

Přenos magnet odkazů stáhne soubory z magnet odkazu a automaticky je nahraje do zvoleného cloudového úložného kanálu.

Hodí se pro přenos anime epizod, videí, archivů a podobných souborů. Vložte magnet odkaz a ImgBed vytvoří úlohu stahování na pozadí. Po dokončení stahování se soubor nahraje do ImgBed a výsledný odkaz se zobrazí v seznamu nahrání.

![Přenos magnet odkazů](../../image/other/磁力链接/磁力链接.png)

## Kde ho použít

Vstup pro přenos magnet odkazů je v oblasti nahrávání na domovské stránce.

Vložte magnet odkaz do vstupního pole, vyberte `Transfer` a nahrajte.

![Nahrání anime](../../image/other/磁力链接/上传番剧.png)

## Před prvním použitím

Nejprve nastavte přenos magnet odkazů v administračním panelu.

Obvykle potřebujete:

1. Účet GitHub pro spuštění úlohy stahování.
2. Cloudový kanál nahrávání, například Google Drive nebo OneDrive.
3. Cílový adresář nahrání.
4. Časový limit úlohy.

Jakmile jsou nastavení připravená, vraťte se na domovskou stránku a vložte magnet odkaz pro spuštění přenosu.

## Nahrání magnet odkazu

1. Vložte magnet odkaz do pole nahrávání na domovské stránce.
2. Ujistěte se, že je režim nastavený na `Transfer`.
3. Klikněte na nahrání.
4. Počkejte, než ImgBed vytvoří magnet úlohu.
5. Po spuštění úlohy sledujte průběh v plovoucím panelu `Magnet Tasks` vpravo dole.

Stahování a nahrávání mohou trvat. Rychlost závisí na magnet zdroji, běhovém prostředí GitHub a vybraném cloudovém úložném kanálu.

![Stahování magnet odkazu](../../image/other/磁力链接/磁力链接下载中.png)

## Po dokončení

Po dokončení úlohy seznam nahrání zobrazí název souboru a odkaz.

Videa zobrazují náhled videa, obrázky náhled obrázku a ostatní soubory běžnou ikonu souboru.

![Stažené video](../../image/other/磁力链接/下载好后的视频.png)

Můžete zkopírovat:

| Typ odkazu | Použití |
| --- | --- |
| Původní odkaz | Přímý přístup k souboru |
| Markdown | Příspěvky nebo poznámky Markdown |
| HTML | Kód webové stránky |
| BBCode | Fóra podporující BBCode |

## Panel magnet úloh

Panel magnet úloh vpravo dole zobrazuje počet úloh, název úlohy, průběh a konečný stav.

Běžné stavy:

| Stav | Význam |
| --- | --- |
| Čeká | Úloha je vytvořená a čeká na spuštění. |
| Stahuje se | Magnet zdroj se stahuje. |
| Nahrává se | Soubor byl stažen a nahrává se do cloudového úložiště. |
| Dokončeno | Nahrání bylo úspěšné a odkaz lze zkopírovat. |
| Selhalo | Úloha se nedokončila úspěšně. Zkontrolujte zprávu a zkuste to znovu. |

## Tipy

- Pokud magnet odkaz obsahuje více souborů, ImgBed pro zobrazení upřednostní hlavní dokončený soubor.
- Velké soubory trvají déle. Před obnovením stránky počkejte na dokončení úlohy.
- Pokud magnet zdroj nemá dostupné peery, může být velmi pomalý nebo selhat.
- Pokud cloudový účet vyčerpal kvótu, vypršelo oprávnění nebo je adresář nahrání nesprávný, úloha může selhat.
- Náhled videa se může po dokončení nahrání zobrazit až za několik sekund.

## FAQ

### Po vložení magnet odkazu se nic nespustí

Ověřte, že je přenos magnet odkazů zapnutý v administračním panelu a že je vybraný použitelný účet GitHub i cloudový kanál.

### Stahování je vždy pomalé

Rychlost magnet odkazu závisí na samotném zdroji. Pokud nejsou dostupné peery, stahování může být velmi pomalé nebo nemožné.

### Po nahrání se nezobrazí náhled

Nejdříve ověřte, že se odkaz na soubor otevře. Video soubory mohou v prohlížeči potřebovat chvíli k načtení, případně otevřete odkaz přímo.

### Co zkontrolovat, když úloha selže?

Zkontrolujte, zda je magnet odkaz platný, cloudový kanál funguje a adresář nahrání je správný. Potom úlohu odešlete znovu.
