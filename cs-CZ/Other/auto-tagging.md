# Automatické štítkování

Automatické štítkování se nastavuje zde:

```text
System Settings -> Other Settings -> Auto Tagging
```

Automaticky vytváří štítky obrázků. Ty se hodí pro vyhledávání, filtrování náhodných obrázků, filtrování veřejné galerie a řízení přístupu podle věkového hodnocení.

## Co automatické štítkování umí

| Funkce | Popis |
| --- | --- |
| Vytváření štítků obsahu | Přidává štítky pro osoby, scény, objekty, výtvarný styl a podobný vizuální obsah. |
| Vytváření štítků postav | Užitečné pro anime obrázky a ilustrace. |
| Přidání štítků orientace | Přidá `landscape`, `portrait` nebo `square`. |
| Přidání hodnocení obrázku | Ukládá výsledky hodnocení `G/S/Q/E` pro obecný, citlivý, sporný nebo explicitní obsah. |
| Automatické štítkování při nahrání | Nově nahrané obrázky automaticky vstoupí do procesu štítkování. |
| Hromadné štítkování | Přidává štítky ke starším obrázkům ve všech složkách nebo ve vybraných složkách. |

## Co je potřeba připravit

Připravte alespoň jednu dostupnou adresu Hugging Face Space.

Doporučený postup je zduplikovat Space `wd-tagger` od SmilingWolf do vlastního účtu Hugging Face:

```text
https://huggingface.co/spaces/SmilingWolf/wd-tagger
```

Veřejný Space můžete dočasně použít, ale veřejné Spaces sdílí mnoho uživatelů. Mohou se tvořit fronty, služba se může zpomalit nebo být dočasně nedostupná. Space zduplikovaný pod vaším vlastním účtem je pro dlouhodobé automatické štítkování stabilnější.

## Duplikování Space od SmilingWolf

1. Přihlaste se do Hugging Face.
2. Otevřete `https://huggingface.co/spaces/SmilingWolf/wd-tagger`.

![Veřejný Space SmilingWolf](../../image/other/微笑狼的公开仓库.png)

3. Klikněte v pravém horním rohu na nabídku se třemi tečkami.
4. Vyberte `Duplicate this Space`.
5. Ponechte výchozí název Space nebo zvolte vlastní název, například `wd-tagger`.
6. Viditelnost nastavte na `Public`. Veřejné Spaces se z ImgBed volají snáz.
7. Zpočátku ponechte výchozí bezplatný hardware. Upgrade zvažte až tehdy, když jsou fronty zjevné.
8. Vytvořte Space a počkejte, až se dokončí sestavení.

Po dokončení sestavení otevřete stránku svého Space. URL obvykle vypadá takto:

```text
https://huggingface.co/spaces/your-name/wd-tagger
```

Zkopírujte URL z prohlížeče a vložte ji do pole `Space URLs` v ImgBed.

## Vyplnění více Space URL

Zadejte jednu adresu Space na každý řádek.

Příklady:

| Hodnota | Popis |
| --- | --- |
| `https://huggingface.co/spaces/SmilingWolf/wd-tagger` | Veřejný Space SmilingWolf. Vhodný pro dočasné testování. |
| `https://huggingface.co/spaces/lintonxue00/wd-tagger` | URL stránky zkopírovaného Space. |
| `https://huggingface.co/spaces/your-name/wd-tagger` | Stránka Space zduplikovaného do vašeho účtu. |

Můžete zadat více URL. ImgBed používá více Spaces společně, což může zlepšit rychlost.

Pokud je jeden Space dočasně nedostupný, ostatní mohou ve zpracování pokračovat.

## Nastavení

| Volba | Doporučení |
| --- | --- |
| `Space URLs` | Zadejte připravené adresy Space. Použijte alespoň jednu. |
| Cílová složka | Pro všechny složky ponechte prázdné. Složku vyberte jen tehdy, když chcete zpracovat konkrétní adresář. |
| Model rozpoznávání | Ve výchozím stavu ponechte `wd-swinv2-tagger-v3`. |
| Práh obecných štítků | Výchozí hodnota funguje pro většinu obrázků. Nižší hodnota vytváří více štítků; vyšší hodnota méně štítků. |
| Práh štítků postav | Výchozí hodnota je opatrná a pomáhá omezit chybné štítky postav. |
| Automatický práh `MCut` | Zpočátku ho nechte vypnutý. Zapněte ho, když chcete, aby počet štítků určoval model automaticky. |
| Automatické štítkování při nahrání | Zapněte, pokud mají nově nahrané obrázky automaticky dostávat štítky. |
| Spustit štítkování | Ručně hromadně oštítkuje starší obrázky. |

## Doporučené počáteční hodnoty

| Volba | Doporučená hodnota |
| --- | --- |
| Model rozpoznávání | `wd-swinv2-tagger-v3` |
| Práh obecných štítků | `0.35` |
| Práh štítků postav | `0.85` |
| `MCut` | Zpočátku vypnuto |
| Automatické štítkování při nahrání | Zapněte podle potřeby |

Pokud je štítků příliš mnoho, obecný práh mírně zvyšte.

Pokud je štítků příliš málo, obecný práh mírně snižte.

## Hromadné štítkování

1. Vyplňte `Space URLs`.
2. Vyberte cílovou složku.
3. Klikněte na spuštění štítkování.
4. Počkejte na dokončení průběhu.

Pokud je cílová složka prázdná, ImgBed zpracuje všechny složky.

Hromadné štítkování je nejvhodnější pro starší obrázky. Pro nové obrázky zapněte automatické štítkování při nahrání, abyste ho nemuseli pokaždé spouštět ručně.

## Automatické štítkování při nahrání

Po zapnutí automatického štítkování při nahrání nově nahrané obrázky automaticky volají nastavené `Space URLs`.

To je vhodné pro dlouhodobé používání.

Pokud je váš Space ve frontě, samotné nahrání se může dokončit dřív a štítkování bude pokračovat později.

## Které obrázky se zpracují

Automatické štítkování zpracovává hlavně obrazové soubory.

Obrázky, které už mají kompletní štítky, orientaci, hodnocení, šířku a výšku, se přeskočí, aby se zbytečně nevolal Space.

ImgBed doplňuje jen chybějící informace, kdykoli je to možné. Pokud například chybí pouze orientace, pokusí se ji doplnit bez volání celého procesu štítkování obsahu.

## FAQ

### Proč duplikovat vlastní Space?

Veřejné Spaces sdílí mnoho uživatelů. Váš vlastní zduplikovaný Space používá hlavně váš web ImgBed, takže je obvykle rychlejší a spolehlivější.

### Space se pořád spouští

Po prvním vytvoření nebo po dlouhé nečinnosti může Space potřebovat čas na spuštění.

Nejprve otevřete stránku svého Space. Jakmile dokáže normálně rozpoznat obrázek, vraťte se do ImgBed a spusťte štítkování.

### Jak zkopírovat Space URL?

Otevřete stránku Hugging Face Space a zkopírujte adresu z prohlížeče.

Příklady:

```text
https://huggingface.co/spaces/lintonxue00/wd-tagger
https://huggingface.co/spaces/SmilingWolf/wd-tagger
```

### Mohu přidat více Spaces?

Ano. Zadejte jednu adresu Space na každý řádek.

Více Spaces zpracovává obrázky společně a hodí se, když máte hodně obrázků.

### Proč jsou štítky v angličtině?

Modely SmilingWolf vracejí anglické štítky. To je očekávané.

Štítky se používají hlavně pro vyhledávání, filtrování, API náhodných obrázků a filtry veřejné galerie.

### K čemu jsou štítky hodnocení?

Výsledky hodnocení spolupracují s režimem přístupu v nastavení zabezpečení.

Když je například přístup návštěvníků omezen podle věkového hodnocení, veřejné procházení a funkce náhodných obrázků filtrují obrázky podle těchto pravidel.

## Rychlý postup

```text
Sign in to Hugging Face
-> Open SmilingWolf/wd-tagger
-> Duplicate this Space
-> Wait for the Space to build
-> Copy your Space URL
-> Fill Space URLs in ImgBed
-> Choose model and thresholds
-> Start tagging or enable auto-tag on upload
```
