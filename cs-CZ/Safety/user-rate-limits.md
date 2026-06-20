# Limity nahrávání pro uživatele

Limity nahrávání určují, jak často mohou běžní uživatelé nebo návštěvníci nahrávat soubory z domovské stránky. Pomáhají zabránit zneužití veřejné upload stránky.

Tato funkce ovlivňuje pouze uploady z domovské stránky. Uploady administrátora a uploady provedené přes API Tokens těmito limity omezené nejsou.

## Kde nastavit

Otevřete administraci a přejděte na:

```text
System Settings -> Security Settings -> Upload Management -> User Rate Limits
```

![Nastavení limitů uživatele](../../image/other/用户频控截图.png)

## Zapnutí limitů

Po zapnutí `Enable Rate Limits` ImgBed sleduje nedávné uploady podle IP adresy nahrávajícího.

Výchozí hodnoty:

| Nastavení | Výchozí | Popis |
| --- | --- | --- |
| Detekční okno | 1,5 hodiny | Jak daleko zpětně se počítají záznamy uploadu. |
| Maximální počet souborů | 20 | Nejvyšší počet souborů povolený v detekčním okně. |
| Limit jednoho souboru | 20 MB | Maximální velikost jednoho souboru. |
| Celkový limit uploadu | 200 MB | Maximální celková velikost uploadu v detekčním okně. |

Například při okně 1,5 hodiny, 20 souborech, 20 MB na soubor a 200 MB celkem se uploady ze stejné IP zablokují, jakmile je překročen kterýkoli nastavený limit.

## Vyloučení typů souborů

`Excluded upload file types` blokuje běžným uživatelům nebo návštěvníkům nahrávání vybraných kategorií souborů.

Dostupné kategorie:

| Typ | Popis |
| --- | --- |
| Images | jpg, png, webp, gif a podobné obrazové soubory |
| Videos | mp4, webm, mov a podobné video soubory |
| Audio | mp3, flac, wav a podobné audio soubory |
| Documents | pdf, txt, md, docx a podobné dokumenty |
| Other | Soubory mimo uvedené kategorie, například zip, rar, exe, apk |

Ve výchozím stavu není typ vybraný, což znamená, že je povolený.

Kliknutím se typ zvýrazní, což znamená, že je blokovaný.

Pokud je vybráno `Other`, návštěvníci nahrávající zip nebo rar budou zablokováni a uvidí zprávu, že tento typ souboru není podporován.

## Blokovací zprávy

Když se spustí limit, uživatelé uvidí odpovídající zprávu:

![Zpráva o příliš častém uploadu](../../image/other/频繁报错提示.png)

| Situace | Význam zprávy |
| --- | --- |
| Jeden soubor je příliš velký | Soubor je příliš velký a měl by se před nahráním zkomprimovat. |
| Typ souboru je blokovaný | Tento typ souboru není podporován. Odstraňte ho a zkuste to znovu. |
| Uploady jsou příliš časté | Nedávné uploady jsou příliš časté, zobrazí se čas dalšího pokusu. |
| Celková velikost je příliš vysoká | Nedávná celková velikost uploadu je příliš vysoká, zobrazí se čas dalšího pokusu. |

## Kdy zapnout

Zapněte limity uživatele, pokud je upload stránka veřejně dostupná.

Časté důvody:

- obáváte se skriptovaných hromadných uploadů.
- chcete omezit velké uploady návštěvníků.
- chcete, aby běžní uživatelé nahrávali jen obrázky, ne archivy nebo instalátory.
- chcete ponechat veřejný upload dostupný, ale mít pod kontrolou využití zdrojů.

Pokud je web jen pro vás nebo mohou nahrávat jen administrátoři, můžete funkci nechat vypnutou.
