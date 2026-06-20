# Automatické tagování

Automatické tagování se nastavuje v:

```text
System Settings -> Other Settings -> Auto Tagging
```

Automaticky generuje tagy obrázků. Hodí se pro vyhledávání, filtrování Random Image API, filtrování veřejné galerie a řízení přístupu podle věkového ratingu.

## Co automatické tagování umí

| Funkce | Popis |
| --- | --- |
| Generovat tagy obsahu | Přidává tagy pro osoby, scény, objekty, výtvarný styl a podobný vizuální obsah. |
| Generovat tagy postav | Užitečné pro anime obrázky a ilustrace. |
| Přidat tagy orientace | Přidá `landscape`, `portrait` nebo `square`. |
| Přidat rating obrázku | Ukládá výsledky `G/S/Q/E` pro obecný, citlivý, sporný nebo explicitní obsah. |
| Automatické tagování při uploadu | Nově nahrané obrázky automaticky projdou tagovacím tokem. |
| Hromadné tagování | Přidá tagy starším obrázkům ve všech adresářích nebo vybraných adresářích. |

## Co připravit předem

Připravte alespoň jeden dostupný Hugging Face Space URL.

Doporučený postup je zduplikovat SmilingWolfův Space `wd-tagger` do vlastního účtu Hugging Face:

```text
https://huggingface.co/spaces/SmilingWolf/wd-tagger
```

Veřejný Space můžete dočasně použít, ale veřejné Spaces sdílí mnoho uživatelů a mohou mít frontu, zpomalovat se nebo být nedostupné. Vlastní zduplikovaný Space je pro dlouhodobé automatické tagování stabilnější.

## Duplikování SmilingWolf Space

1. Přihlaste se do Hugging Face.
2. Otevřete `https://huggingface.co/spaces/SmilingWolf/wd-tagger`.

![Veřejný Space SmilingWolf](../../image/other/微笑狼的公开仓库.png)

3. Klikněte vpravo nahoře na menu se třemi tečkami.
4. Vyberte `Duplicate this Space`.
5. Nechte výchozí název Space nebo zvolte vlastní, například `wd-tagger`.
6. Viditelnost nastavte na `Public`. Veřejné Spaces se ImgBed volají jednodušeji.
7. Nejprve ponechte výchozí bezplatný hardware. Upgrade řešte až tehdy, když je fronta zjevný problém.
8. Vytvořte Space a počkejte na dokončení buildu.

Po dokončení buildu otevřete stránku svého Space. URL obvykle vypadá takto:

```text
https://huggingface.co/spaces/your-name/wd-tagger
```

Zkopírujte URL z prohlížeče a vložte ho do `Space URLs` v ImgBed.

## Vyplnění více Space URL

Zadávejte jeden Space URL na řádek.

Příklady:

| Hodnota | Popis |
| --- | --- |
| `https://huggingface.co/spaces/SmilingWolf/wd-tagger` | Veřejný Space SmilingWolf. Vhodné pro dočasné testy. |
| `https://huggingface.co/spaces/lintonxue00/wd-tagger` | URL stránky zkopírovaného Space. |
| `https://huggingface.co/spaces/your-name/wd-tagger` | Váš vlastní zduplikovaný Space. |

Můžete zadat více URL. ImgBed používá více Spaces společně, což může zlepšit rychlost.

Pokud je jeden Space dočasně nedostupný, ostatní mohou pokračovat ve zpracování.

## Nastavení

| Volba | Doporučení |
| --- | --- |
| `Space URLs` | Zadejte připravené Space URL. Použijte alespoň jeden. |
| Cílový adresář | Nechte prázdné pro všechny adresáře. Adresář vyberte jen tehdy, když chcete zpracovat konkrétní složku. |
| Model rozpoznávání | Ve výchozím stavu ponechte `wd-swinv2-tagger-v3`. |
| Práh obecných tagů | Výchozí hodnota funguje pro většinu obrázků. Nižší hodnota vytvoří víc tagů, vyšší méně. |
| Práh tagů postav | Výchozí hodnota je opatrná a pomáhá omezit chybné tagy postav. |
| Automatický práh `MCut` | Na začátku nechte vypnuté. Zapněte, když chcete, aby model sám rozhodoval o počtu tagů. |
| Automaticky tagovat při uploadu | Zapněte, pokud mají nové obrázky automaticky dostávat tagy. |
| Spustit tagování | Ruční hromadné tagování starších obrázků. |

## Doporučené počáteční hodnoty

| Volba | Doporučená hodnota |
| --- | --- |
| Model rozpoznávání | `wd-swinv2-tagger-v3` |
| Práh obecných tagů | `0.35` |
| Práh tagů postav | `0.85` |
| `MCut` | Na začátku vypnuto |
| Automatické tagování při uploadu | Zapnout podle potřeby |

Pokud je tagů příliš mnoho, lehce zvyšte obecný práh.

Pokud je tagů příliš málo, lehce ho snižte.

## Hromadné tagování

1. Vyplňte `Space URLs`.
2. Vyberte cílový adresář.
3. Klikněte na spuštění tagování.
4. Počkejte na dokončení.

Pokud je cílový adresář prázdný, ImgBed zpracuje všechny adresáře.

Hromadné tagování je nejlepší pro staré obrázky. Pro nové obrázky zapněte automatické tagování při uploadu, abyste ho nemuseli spouštět ručně.

## Automatické tagování při uploadu

Po zapnutí se u nově nahraných obrázků automaticky volají nastavené `Space URLs`.

Je to vhodné pro dlouhodobé používání.

Pokud má Space frontu, samotný upload může skončit dřív a tagování pokračuje potom.

## Které obrázky se zpracují

Automatické tagování zpracovává hlavně obrazové soubory.

Obrázky, které už mají kompletní tagy, orientaci, rating, šířku a výšku, se přeskočí, aby se zbytečně nevolal Space.

ImgBed doplňuje jen chybějící informace, kdykoli je to možné. Pokud chybí například jen orientace, pokusí se ji doplnit bez celého toku tagování obsahu.

## FAQ

### Proč duplikovat vlastní Space?

Veřejné Spaces sdílí mnoho uživatelů. Váš zduplikovaný Space používá hlavně váš web ImgBed, takže je obvykle rychlejší a spolehlivější.

### Space se pořád spouští

Po prvním vytvoření nebo po dlouhé nečinnosti může Space potřebovat čas na start.

Nejprve otevřete stránku Space. Jakmile normálně rozpozná obrázek, vraťte se do ImgBed a spusťte tagování.

### Jak zkopírovat Space URL?

Otevřete stránku Hugging Face Space a zkopírujte adresu z prohlížeče.

Příklady:

```text
https://huggingface.co/spaces/lintonxue00/wd-tagger
https://huggingface.co/spaces/SmilingWolf/wd-tagger
```

### Mohu přidat více Spaces?

Ano. Zadejte jeden Space URL na řádek.

Více Spaces zpracovává obrázky společně a hodí se při velkém množství obrázků.

### Proč jsou tagy anglicky?

Modely SmilingWolf vracejí tagy v angličtině. Je to očekávané.

Tagy slouží hlavně pro vyhledávání, filtrování, Random Image API a filtry veřejné galerie.

### K čemu jsou rating tagy?

Výsledky ratingu spolupracují s režimem přístupu v Bezpečnostních nastaveních.

Když je například přístup návštěvníků omezený podle věku, veřejné procházení a funkce náhodných obrázků filtrují obrázky podle těchto pravidel.

## Rychlý postup

```text
Přihlaste se do Hugging Face
-> Otevřete SmilingWolf/wd-tagger
-> Duplicate this Space
-> Počkejte na build Space
-> Zkopírujte URL svého Space
-> Vyplňte Space URLs v ImgBed
-> Vyberte model a prahy
-> Spusťte tagování nebo zapněte automatické tagování při uploadu
```
