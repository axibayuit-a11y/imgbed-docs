# Moderace obrázků a režim přístupu

Moderace obrázků přiřazuje nahraným obrázkům věkové hodnocení. Režim přístupu určuje, která hodnocení jsou veřejně viditelná.

Ovlivňuje to veřejnou galerii, veřejné URL souborů a API pro náhodné obrázky. Neomezuje administraci. Administrátoři mohou stále vidět a spravovat všechny soubory.

## Kde nastavit

Otevřete administraci a přejděte na:

```text
System Settings -> Security Settings -> Upload Management -> Image Moderation
```

Hlavní nastavení jsou:

- Režim přístupu
- Zapnout moderaci
- Poskytovatel moderace

## Co dělá režim přístupu

Režim přístupu určuje, která věková hodnocení mohou být veřejně zobrazena.

Aktuální režimy:

| Režim přístupu | Veřejně viditelná hodnocení |
| --- | --- |
| Režim pro dospělé | Obecné, R12, R16, R18 |
| Režim pro mládež | Obecné, R12, R16 |
| Režim pro dospívající | Obecné, R12 |
| Režim pro děti | Pouze Obecné |

Výchozí je režim pro dospělé.

Pro soukromé weby nebo weby s obsahem pro dospělé může být vhodný režim pro dospělé. Pro opatrnější veřejnou galerii zvolte režim pro mládež, režim pro dospívající nebo režim pro děti.

## Co znamená zapnutí moderace

Když je moderace zapnutá, ImgBed při uploadu zavolá vybraného poskytovatele moderace a uloží zjištěné věkové hodnocení.

Hlavní hodnocení:

| Hodnocení | Význam |
| --- | --- |
| Obecné | Bezpečný veřejný obsah |
| R12 | Mírně citlivý obsah |
| R16 | Středně citlivý obsah |
| R18 | Obsah pro dospělé |

Výsledek moderace se používá při rozhodování o veřejném přístupu.

Pokud moderace není zapnutá nebo staré soubory nemají hodnocení, považují se za neohodnocené. Neohodnocené soubory nejsou automaticky odstraněny z veřejné galerie ani API pro náhodné obrázky jen proto, že nemají výsledek moderace.

## Výběr poskytovatele moderace

Dostupní poskytovatelé zahrnují:

- moderatecontent.com
- nsfwjs
- Sightengine

Každý poskytovatel má jiné požadavky:

- moderatecontent.com obvykle vyžaduje API Key.
- nsfwjs obvykle vyžaduje URL koncového bodu API.
- Sightengine vyžaduje API user a API secret.

Vyberte podle účtu, dostupnosti a kvality detekce. Pokud je moderace zapnutá a správně nastavená, ImgBed se pokusí při nahrávání zapsat hodnocení obrázku.

## Vliv na veřejnou galerii

Veřejná galerie filtruje soubory podle režimu přístupu.

Příklady:

- Režim pro dospělé: obrázky R18 se mohou zobrazit.
- Režim pro mládež: obrázky R18 jsou skryté.
- Režim pro dospívající: obrázky R16 a R18 jsou skryté.
- Režim pro děti: zobrazují se pouze obrázky s hodnocením Obecné.

Týká se to jen běžného veřejného přístupu. Administrace stále zobrazuje všechny soubory.

## Vliv na veřejné URL souborů

Veřejné URL souborů jsou přímé odkazy, které otevírají návštěvníci.

Pokud je hodnocení souboru povoleno aktuálním režimem, ImgBed vrátí původní obrázek.

Pokud je hodnocení nad povolenou úrovní, běžný veřejný přístup nevrátí původní obrázek. ImgBed místo toho vrátí nastavený blokovaný výsledek nebo náhradní obrázek.

Příklad:

- Aktuální režim je režim pro děti.
- Obrázek má hodnocení R18.
- Návštěvník otevře veřejný URL přímo.
- ImgBed tomuto návštěvníkovi nevrátí původní R18 obrázek.

![Omezený obrázek souboru](../../image/Safety/文件受限图.png)

Administrátorů při prohlížení souborů v administraci se toto omezení netýká.

## Vliv na API pro náhodné obrázky

API pro náhodné obrázky také filtruje svůj výběr kandidátů podle režimu přístupu.

V režimu pro děti se náhodné obrázky vybírají jen ze souborů s hodnocením Obecné.

V režimu pro mládež mohou náhodné obrázky pocházet ze souborů s hodnocením Obecné, R12 a R16, ale ne z R18.

Tím se zabrání tomu, aby API pro náhodné obrázky obcházelo omezení veřejné galerie.

## Vztah k pravidlům seznamů

Režim přístupu není jediné pravidlo veřejného přístupu. Funguje společně s pravidly seznamu povolených a blokovaných položek.

Stručně:

- Obsah na seznamu povolených položek je veřejný jako první.
- Obsah na seznamu blokovaných položek nelze běžnými návštěvníky zobrazit přímo.
- Obsah, který není na žádném seznamu, se následně kontroluje podle režimu přístupu.

Pokud je obrázek omezený hodnocením i pravidly seznamů, běžní návštěvníci stále nemohou přímo zobrazit původní soubor.

## Doporučená nastavení

Pro veřejné weby:

- Zapněte moderaci.
- Vyberte režim přístupu odpovídající publiku webu.
- Pro návštěvníky všech věkových skupin použijte režim pro děti nebo režim pro dospívající.
- Vyhněte se režimu pro dospělé, pokud nechcete veřejně zobrazovat obsah pro dospělé.
- Kontrolujte hodnocení v administraci a podle potřeby je upravujte ručně.

Pro soukromé nebo osobní weby:

- Režim pro dospělé je obvykle v pořádku.
- Zapněte moderaci, pokud je užitečná.
- Hodnocení kontrolujte a upravujte v administraci podle potřeby.

## FAQ

### Zmizí soubory z administrace po změně režimu přístupu?

Ne.

Režim přístupu ovlivňuje jen běžný veřejný přístup. Administraci neovlivňuje.

### Proč veřejná galerie po přepnutí na režim pro děti ukazuje méně obrázků?

Režim pro děti dovoluje veřejně zobrazit pouze soubory s hodnocením Obecné. R12, R16 a R18 se filtrují.

### Mohou veřejné URL stále otevřít obrázky pro dospělé?

Pokud aktuální režim takové hodnocení nepovoluje, běžné veřejné URL nevrátí původní obrázek.

### Může API pro náhodné obrázky vrátit omezené obrázky?

Ne.

API pro náhodné obrázky filtruje kandidáty podle aktuálního režimu přístupu.

### Co se stane se starými neohodnocenými obrázky?

Neohodnocené obrázky nejsou automaticky skryté jen proto, že nemají výsledek moderace. Hodnocení jim můžete později upravit v administraci.



