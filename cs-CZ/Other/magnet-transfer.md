# Magnet transfer

Magnet transfer stáhne soubory z magnet odkazu a automaticky je nahraje do vybraného cloudového kanálu.

Hodí se pro přesun anime epizod, videí, archivů a podobných souborů. Vložíte magnet odkaz a ImgBed vytvoří úlohu stahování na pozadí. Po dokončení stahování se soubor nahraje do ImgBed a finální odkaz se objeví v seznamu uploadů.

![Magnet transfer](../../image/other/磁力链接/磁力链接.png)

## Kde použít

Vstup Magnet transferu je v upload části domovské stránky.

Vložte magnet odkaz do pole, vyberte `Transfer` a nahrajte.

![Upload anime](../../image/other/磁力链接/上传番剧.png)

## Před prvním použitím

Nejprve nastavte Magnet transfer v administraci.

Obvykle potřebujete:

1. GitHub účet pro spuštění stahovací úlohy.
2. Cloudový upload kanál, například Google Drive nebo OneDrive.
3. Cílový upload adresář.
4. Timeout úlohy.

Po připravení nastavení se vraťte na domovskou stránku a vložte magnet odkaz pro spuštění transferu.

## Nahrání magnet odkazu

1. Vložte magnet odkaz do upload pole na domovské stránce.
2. Ověřte, že je režim nastavený na `Transfer`.
3. Klikněte na upload.
4. Počkejte, než ImgBed vytvoří magnet úlohu.
5. Po spuštění úlohy sledujte postup v plovoucím panelu `Magnet Tasks` vpravo dole.

Stahování a upload mohou trvat. Rychlost závisí na magnet zdroji, runtime prostředí GitHub a zvoleném cloudovém kanálu.

![Stahování magnetu](../../image/other/磁力链接/磁力链接下载中.png)

## Po dokončení

Po dokončení úlohy seznam uploadů ukáže název souboru a odkaz.

Videa zobrazují video náhled, obrázky náhled obrázku a ostatní soubory běžnou ikonu souboru.

![Stažené video](../../image/other/磁力链接/下载好后的视频.png)

Můžete zkopírovat:

| Typ odkazu | Použití |
| --- | --- |
| Původní odkaz | Přímý přístup k souboru |
| Markdown | Markdown příspěvky nebo poznámky |
| HTML | Kód webové stránky |
| BBCode | Fóra podporující BBCode |

## Panel magnet úloh

Panel vpravo dole ukazuje počet úloh, název úlohy, průběh a finální stav.

Běžné stavy:

| Stav | Význam |
| --- | --- |
| Waiting | Úloha je vytvořená a čeká na spuštění. |
| Downloading | Magnet zdroj se stahuje. |
| Uploading | Soubor je stažený a nahrává se do cloudového úložiště. |
| Completed | Upload byl úspěšný a odkaz lze zkopírovat. |
| Failed | Úloha se nedokončila úspěšně. Zkontrolujte zprávu a zkuste to znovu. |

## Tipy

- Pokud magnet odkaz obsahuje více souborů, ImgBed pro zobrazení upřednostní hlavní dokončený soubor.
- Velké soubory trvají déle. Před obnovením stránky počkejte na dokončení úlohy.
- Pokud magnet zdroj nemá dostupné peery, může být velmi pomalý nebo selhat.
- Pokud cloudový účet nemá místo, autorizace vypršela nebo je upload adresář špatný, úloha může selhat.
- Náhled videa může po dokončení uploadu trvat několik sekund.

## FAQ

### Po vložení magnet odkazu se nic nespustí

Ověřte, že je Magnet transfer zapnutý v administraci a že je vybraný použitelný GitHub účet i cloudový kanál.

### Stahování je vždy pomalé

Rychlost magnetu závisí na samotném zdroji. Pokud nejsou dostupní peeři, stahování může být velmi pomalé nebo nemožné.

### Po uploadu se nezobrazí náhled

Nejdřív ověřte, že se odkaz na soubor otevře. Video soubory mohou v prohlížeči potřebovat chvíli k načtení, případně otevřete odkaz přímo.

### Co zkontrolovat, když úloha selže?

Zkontrolujte, zda je magnet odkaz platný, cloudový kanál funkční a upload adresář správný. Potom úlohu odešlete znovu.
