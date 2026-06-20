# Moderace obrázků a režim přístupu

Moderace obrázků přiřazuje nahraným obrázkům věkové hodnocení. Režim přístupu určuje, která hodnocení jsou veřejně viditelná.

Ovlivňuje to veřejnou galerii, veřejné URL souborů a Random Image API. Neomezuje administraci. Administrátoři mohou stále vidět a spravovat všechny soubory.

## Kde nastavit

Otevřete administraci a přejděte na:

```text
System Settings -> Security Settings -> Upload Management -> Image Moderation
```

Hlavní nastavení jsou:

- Access mode
- Enable moderation
- Moderation provider

## Co dělá Access Mode

Access mode určuje, která věková hodnocení mohou být veřejně zobrazena.

Aktuální režimy:

| Access Mode | Veřejně viditelná hodnocení |
| --- | --- |
| Adult mode | General, R12, R16, R18 |
| Youth mode | General, R12, R16 |
| Teen mode | General, R12 |
| Child mode | Pouze General |

Výchozí je Adult mode.

Pro soukromé weby nebo weby s dospělým obsahem může být Adult mode vhodný. Pro opatrnější veřejnou galerii zvolte Youth, Teen nebo Child mode.

## Co znamená zapnutí moderace

Když je moderace zapnutá, ImgBed při uploadu zavolá vybraného poskytovatele moderace a uloží zjištěné věkové hodnocení.

Hlavní hodnocení:

| Rating | Význam |
| --- | --- |
| General | Bezpečný veřejný obsah |
| R12 | Mírně citlivý obsah |
| R16 | Středně citlivý obsah |
| R18 | Obsah pro dospělé |

Výsledek moderace se používá při rozhodování o veřejném přístupu.

Pokud moderace není zapnutá nebo staré soubory nemají rating, považují se za neohodnocené. Neohodnocené soubory nejsou automaticky odstraněny z veřejné galerie ani Random Image API jen proto, že nemají výsledek moderace.

## Výběr poskytovatele moderace

Dostupní poskytovatelé zahrnují:

- moderatecontent.com
- nsfwjs
- Sightengine

Každý poskytovatel má jiné požadavky:

- moderatecontent.com obvykle vyžaduje API Key.
- nsfwjs obvykle vyžaduje URL API endpointu.
- Sightengine vyžaduje API user a API secret.

Vyberte podle účtu, dostupnosti a kvality detekce. Pokud je moderace zapnutá a správně nastavená, ImgBed se pokusí při uploadu zapsat rating obrázku.

## Vliv na veřejnou galerii

Veřejná galerie filtruje soubory podle režimu přístupu.

Příklady:

- Adult mode: obrázky R18 se mohou zobrazit.
- Youth mode: obrázky R18 jsou skryté.
- Teen mode: obrázky R16 a R18 jsou skryté.
- Child mode: zobrazují se pouze obrázky General.

Týká se to jen běžného veřejného přístupu. Administrace stále zobrazuje všechny soubory.

## Vliv na veřejné URL souborů

Veřejné URL souborů jsou přímé odkazy, které otevírají návštěvníci.

Pokud je rating souboru povolen aktuálním režimem, ImgBed vrátí původní obrázek.

Pokud je rating nad povolenou úrovní, běžný veřejný přístup nevrátí původní obrázek. ImgBed místo toho vrátí nastavený blokovaný výsledek nebo náhradní obrázek.

Příklad:

- Aktuální režim je Child mode.
- Obrázek má rating R18.
- Návštěvník otevře veřejný URL přímo.
- ImgBed tomuto návštěvníkovi nevrátí původní R18 obrázek.

![Omezený obrázek souboru](../../image/Safety/文件受限图.png)

Administrátorů při prohlížení souborů v administraci se toto omezení netýká.

## Vliv na Random Image API

Random Image API také filtruje svůj výběr kandidátů podle režimu přístupu.

V Child mode se náhodné obrázky vybírají jen ze souborů s hodnocením General.

V Youth mode mohou náhodné obrázky pocházet z General, R12 a R16, ale ne z R18.

Tím se zabrání tomu, aby Random Image API obcházelo omezení veřejné galerie.

## Vztah k pravidlům seznamů

Access mode není jediné pravidlo veřejného přístupu. Funguje společně s allowlist a blocklist.

Stručně:

- Obsah na allowlist je veřejný jako první.
- Obsah na blocklist nelze běžnými návštěvníky zobrazit přímo.
- Obsah, který není na žádném seznamu, se následně kontroluje podle access mode.

Pokud je obrázek omezený ratingem i pravidly seznamů, běžní návštěvníci stále nemohou přímo zobrazit původní soubor.

## Doporučená nastavení

Pro veřejné weby:

- Zapněte moderaci.
- Vyberte režim přístupu odpovídající publiku webu.
- Pro návštěvníky všech věkových skupin použijte Child mode nebo Teen mode.
- Vyhněte se Adult mode, pokud nechcete veřejně zobrazovat dospělý obsah.
- Kontrolujte ratingy v administraci a podle potřeby je upravujte ručně.

Pro soukromé nebo osobní weby:

- Adult mode je obvykle v pořádku.
- Zapněte moderaci, pokud je užitečná.
- Ratingy kontrolujte a upravujte v administraci podle potřeby.

## FAQ

### Zmizí soubory z administrace po změně Access Mode?

Ne.

Access mode ovlivňuje jen běžný veřejný přístup. Administraci neovlivňuje.

### Proč veřejná galerie po přepnutí na Child mode ukazuje méně obrázků?

Child mode dovoluje veřejně zobrazit pouze soubory General. R12, R16 a R18 se filtrují.

### Mohou veřejné URL stále otevřít obrázky pro dospělé?

Pokud aktuální režim takový rating nepovoluje, běžné veřejné URL nevrátí původní obrázek.

### Může Random Image API vrátit omezené obrázky?

Ne.

Random Image API filtruje kandidáty podle aktuálního režimu přístupu.

### Co se stane se starými neohodnocenými obrázky?

Neohodnocené obrázky nejsou automaticky skryté jen proto, že nemají výsledek moderace. Rating jim můžete později upravit v administraci.
