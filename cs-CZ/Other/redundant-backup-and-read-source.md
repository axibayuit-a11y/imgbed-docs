# Redundantní záloha a přepínání zdroje čtení

Redundantní záloha uloží extra kopii už nahraného souboru.

Primární soubor i záložní soubor mohou sloužit jako zdroje čtení. Návštěvníci obvykle nepoznají rozdíl. Liší se jen úložný kanál, který soubor obsluhuje.

## Co redundantní záloha umí

| Funkce | Popis |
| --- | --- |
| Uložit extra kopii | Zálohuje soubory do jiného upload kanálu a snižuje riziko výpadku jednoho kanálu. |
| Přepnout zdroj čtení | Po úspěšné záloze přepne čtení mezi primárním a záložním kanálem. |
| Záloha jednoho souboru | Zálohuje jeden soubor ze stránky detailu souboru. |
| Hromadná záloha | Vyberte více souborů v administraci a zálohujte je společně. |
| Globální redundantní záloha | Zálohuje soubory podle adresáře z Dalších nastavení. |

## Vstup pro redundantní zálohu

Otevřete:

```text
System Settings -> Other Settings -> Redundant Backup
```

![Redundantní záloha](../../image/other/冗余备份截图.png)

Tento vstup je vhodný pro přidání záloh adresáři nebo všem souborům hromadně.

Záložní kanál můžete vybrat ručně, nebo zvolit automatické přepínání a nechat ImgBed najít vhodný záložní kanál.

## Záloha z detailu souboru

Otevřete detail souboru v administraci a klikněte na zálohu.

![Záloha v detailu souboru](../../image/other/文件详情里文件备份.png)

Hodí se to pro okamžité zálohování jednoho důležitého souboru.

Po úspěšné záloze detail souboru zobrazí dostupné zdroje čtení.

## Hromadná záloha výběrem

V administraci vyberte více souborů a spusťte hromadnou zálohu.

![Hromadná záloha](../../image/other/批量备份截图.png)

Hodí se to pro zpracování skupiny souborů.

Záloha z výběru, záloha z detailu souboru a redundantní záloha v Dalších nastaveních používají stejný systém. Jsou to jen různé vstupy.

## Přepnutí zdroje čtení po záloze

Po dokončení zálohy umožní detail souboru přepnout zdroj čtení:

| Zdroj čtení | Popis |
| --- | --- |
| Primární kanál | Čte z původního upload kanálu. |
| Záložní kanál | Čte z kanálu, kde je redundantní kopie. |

![Přepnutí zdroje čtení po záloze](../../image/other/备份成功切换读取源.png)

Návštěvníci nemusí vědět, zda je soubor obsluhovaný z primárního nebo záložního kanálu.

Zvolený zdroj čtení se stane preferovaným zdrojem pro pozdější přístup k souboru.

## Kdy se záloha přeskočí

Následující situace se při zálohování přeskočí. Nejde o chyby.

| Situace | Proč se přeskočí |
| --- | --- |
| Už je zálohováno | Soubor, který už má zálohu, se nezálohuje znovu. |
| Primární a záložní kanál jsou stejné | Záloha má smysl jen v jiném kanálu. |
| Není použitelný záložní kanál | Není dostupný vhodný alternativní kanál. |

Stručně: zálohy musí jít do jiného kanálu a už zálohované soubory znovu nespotřebují další místo.

## Primární a záložní kanál

| Název | Význam |
| --- | --- |
| Primární kanál | Kanál použitý při prvním uploadu souboru. |
| Záložní kanál | Kanál, který ukládá redundantní kopii. |
| Primární zdroj čtení | Soubor se aktuálně čte z primárního kanálu. |
| Záložní zdroj čtení | Soubor se aktuálně čte ze záložního kanálu. |

Primární i záložní zdroj čtení se pro uživatele chovají stejně.

Dokud je záložní soubor dostupný, obrázky, videa a odkazy ke stažení fungují i po přepnutí na záložní zdroj čtení.

## Co se stane při smazání souboru

Když se soubor smaže, ImgBed smaže primární soubor i záložní soubor.
