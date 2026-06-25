# Redundantní záloha a přepínání zdroje čtení

Redundantní záloha uloží dodatečnou kopii souboru, který už byl nahrán.

Primární soubor i záložní soubor mohou sloužit jako zdroje čtení. Návštěvníci obvykle nepoznají rozdíl. Liší se jen úložný kanál, který soubor obsluhuje.

## Co redundantní záloha umí

| Funkce | Popis |
| --- | --- |
| Uložit dodatečnou kopii | Zálohuje soubory do jiného kanálu nahrávání a snižuje riziko selhání jediného kanálu. |
| Přepnout zdroj čtení | Po úspěšné záloze přepíná čtení souboru mezi primárním kanálem a záložním kanálem. |
| Záloha jednoho souboru | Zálohuje jeden soubor ze stránky detailu souboru. |
| Hromadná záloha | Vybere více souborů v administrační stránce a zálohuje je společně. |
| Globální redundantní záloha | Zálohuje soubory podle složky z dalších nastavení. |

## Vstup pro redundantní zálohu

Otevřete:

```text
System Settings -> Other Settings -> Redundant Backup
```

![Redundantní záloha](../../image/other/冗余备份截图.png)

Tento vstup je nejvhodnější pro hromadné přidání záloh ke složce nebo ke všem souborům.

Záložní kanál můžete vybrat ručně, nebo zvolit automatické přepínání a nechat ImgBed najít vhodný záložní kanál.

## Záloha z detailu souboru

Otevřete stránku detailu souboru v administračním panelu a klikněte na zálohu.

![Záloha v detailu souboru](../../image/other/文件详情里文件备份.png)

To je nejvhodnější pro zálohování jednoho důležitého souboru na vyžádání.

Po úspěšné záloze stránka detailu souboru zobrazí dostupné zdroje čtení.

## Hromadná záloha výběrem

V administračním panelu vyberte více souborů a spusťte hromadnou zálohu.

![Hromadná záloha](../../image/other/批量备份截图.png)

To je nejvhodnější pro zpracování skupiny souborů.

Záloha z výběru, záloha z detailu souboru a redundantní záloha v dalších nastaveních používají stejný zálohovací systém. Jsou to jen různé vstupní body.

## Přepnutí zdroje čtení po záloze

Po dokončení zálohy stránka detailu souboru umožní přepnout zdroj čtení:

| Zdroj čtení | Popis |
| --- | --- |
| Primární kanál | Čte z původního kanálu nahrávání. |
| Záložní kanál | Čte ze záložního kanálu. |

![Přepnutí zdroje čtení po záloze](../../image/other/备份成功切换读取源.png)

Návštěvníci nemusí vědět, zda je soubor obsluhován z primárního nebo záložního kanálu.

Zvolený zdroj čtení se stane preferovaným zdrojem pro pozdější přístup k souboru.

## Kdy se záloha přeskočí

Následující situace se při zálohování přeskočí. Nejde o chyby.

| Situace | Proč se přeskočí |
| --- | --- |
| Už je zálohováno | Soubor, který už má zálohu, se nezálohuje znovu. |
| Primární a záložní kanál jsou stejné | Aby měla záloha smysl, musí být uložená v jiném kanálu. |
| Není použitelný záložní kanál | Není dostupný vhodný alternativní kanál. |

Stručně: zálohy musí jít do jiného kanálu a už zálohované soubory znovu nespotřebují další místo.

## Primární kanál vs. záložní kanál

| Název | Význam |
| --- | --- |
| Primární kanál | Kanál použitý při prvním nahrání souboru. |
| Záložní kanál | Kanál, který ukládá redundantní kopii. |
| Primární zdroj čtení | Soubor se aktuálně čte z primárního kanálu. |
| Záložní zdroj čtení | Soubor se aktuálně čte ze záložního kanálu. |

Primární i záložní zdroj čtení se pro uživatele chovají stejně.

Dokud je záložní soubor dostupný, obrázky, videa a odkazy ke stažení fungují i po přepnutí na záložní zdroj čtení.

## Co se stane při smazání souboru

Když se soubor smaže, ImgBed smaže primární soubor i záložní soubor.
