# IP geolokace a správa uživatelů

IP geolokace převádí IP adresy v záznamech nahrávajících uživatelů, přihlášených zařízeních a podobných protokolech na přibližné polohy.

Po nastavení může administrační panel jasněji zobrazovat původ nahrání a přístupů. Správa uživatelů zároveň umožňuje blokovat nebo obnovit možnost nahrávání pro podezřelé IP adresy.

## Kde ji nastavit

Otevřete:

```text
System Settings -> Other Settings -> IP Geolocation
```

![IP geolokace](../../image/other/ip定位/ip定位.png)

## Dostupná nastavení

Novější tok IP geolokace podporuje více zdrojů, místo aby se spoléhal na jednu mapovou službu.

| Nastavení | Účel |
| --- | --- |
| Jazyk IP geolokace | Vybere jazyk zobrazení, například angličtinu, zjednodušenou čínštinu, japonštinu, francouzštinu a další. |
| ID účtu MaxMind | ID účtu MaxMind pro MaxMind GeoLite Web Service. |
| Licenční klíč MaxMind | Licenční klíč MaxMind. |
| Klíč Tencent Map | Klíč Tencent Location Service. Užitečný pro čínské adresy a IP adresy z pevninské Číny. |
| Klíč ipapi | Klíč APILayer ipapi. Podporuje vícejazyčnou IP geolokaci. |

Vyplňte jen služby, které potřebujete. Není nutné nastavovat každé pole.

Pokud nezadáte žádný klíč, ImgBed se stále pokusí použít vestavěné bezplatné zdroje, ale stabilita, jazyková podpora a přesnost mohou být nižší než u služby, kterou nastavíte sami.

## Doporučené volby

Pokud potřebujete hlavně čínské adresy:

1. Nastavte jazyk IP geolokace na zjednodušenou čínštinu.
2. Nastavte klíč Tencent Map.
3. Volitelně přidejte MaxMind nebo ipapi jako záložní zdroje.

Pokud potřebujete hlavně anglické nebo vícejazyčné adresy:

1. Vyberte potřebný jazyk.
2. Nastavte ID účtu MaxMind a licenční klíč.
3. Pokud potřebujete lepší vícejazyčné výsledky, přidejte klíč ipapi.

## Nastavení MaxMind

MaxMind potřebuje:

```text
MaxMind Account ID
MaxMind License Key
```

ID účtu najdete v ovládacím panelu MaxMind a licenční klíč vygenerujete na stránce License Keys.

![Konfigurace klíče MaxMind](../../image/other/ip定位/maxmind的key配置.png)

Po vygenerování vložte ID účtu a licenční klíč do ImgBed a uložte.

Bezplatný plán MaxMind stačí pro běžné používání, ale má limity požadavků. Pokud je kvóta překročena, ImgBed pokračuje ve zkoušení dalších dostupných zdrojů.

## Nastavení ipapi

ipapi používá APILayer API Key.

Otevřete konzoli ipapi a zkopírujte zobrazený API Key.

![Konfigurace ipapi](../../image/other/ip定位/ipapi配置.png)

Vložte ho do pole `ipapi Key` v ImgBed a uložte.

ipapi podporuje vícejazyčnou IP geolokaci a hodí se, když chcete zobrazovat adresy ve vybraném jazyce. Jeho bezplatný plán má také limity požadavků. Po vyčerpání kvóty ImgBed pokračuje ve zkoušení dalších dostupných zdrojů.

## Nastavení klíče Tencent Map

Klíč Tencent Map je užitečný pro čínské adresy, zejména pro IP adresy z pevninské Číny.

Při vytváření klíče v Tencent Location Service zapněte:

```text
WebServiceAPI
```

Po vytvoření vložte klíč do `Tencent Map Key` a uložte.

Pokud potřebujete jen základní čínskou IP geolokaci, klíč Tencent Map stačí pro začátek.

## Co kontrolovat ve správě uživatelů

Správa uživatelů je dostupná v horní části administračního panelu.

![Správa uživatelů](../../image/other/用户管理显示.png)

Správa uživatelů zobrazuje aktivitu nahrávání podle IP:

| Pole | Popis |
| --- | --- |
| Zdroj IP | Zdrojová IP adresa nahrávajícího uživatele. |
| Adresa | Přibližná poloha určená z IP. |
| Celková velikost nahrání | Celková velikost souborů nahraných z této IP. |
| Počet nahrání | Počet nahrání z této IP. |
| Nahrávání povoleno | Zapnuto znamená, že nahrávání je povoleno. Vypnuto znamená, že nahrávání je blokováno. |

Kliknutím na šipku vlevo rozbalíte seznam souborů nahraných z dané IP.

Seznam souborů zobrazuje název souboru, náhled, velikost souboru, výsledek moderace, stav souboru a čas nahrání. Pokud nahrání vypadají podezřele, nejprve IP rozbalte, zkontrolujte soubory a potom rozhodněte, zda blokovat další nahrávání.

Pokud je IP podezřelá, vypněte `Upload allowed`. Budoucí nahrání z této IP budou blokována.

## Vyhledávání, řazení a pokročilé filtry

V horní části správy uživatelů můžete hledat podle zdrojové IP nebo adresy.

Řaďte podle času, počtu nahrání nebo celkové velikosti nahrání, abyste našli nedávné nahrávající, časté nahrávající nebo IP s vysokým využitím.

Pro hlubší kontrolu otevřete pokročilé filtry.

![Pokročilé filtry](../../image/other/用户管理高级筛选.png)

Pokročilé filtry podporují:

| Filtr | Použití |
| --- | --- |
| Časový rozsah | Zobrazí IP adresy, které nahrály soubory ve vybraném období. |
| Stav přístupu | Filtruje podle normálních, blokovaných a podobných stavů. |
| Seznam povolení/blokování | Filtruje podle seznamu povolení, seznamu blokování nebo nenastaveného stavu. |
| Typ souboru | Zobrazí IP adresy, které nahrály obrázky, videa, audio, dokumenty, kód nebo jiné soubory. |
| Velikost souboru | Filtruje podle rozsahu velikosti nahraného souboru. |
| Věkové hodnocení | Filtruje podle nenastaveného stavu, General, R12+, R16+, R18 a podobných hodnocení. |
| Stav souboru | Filtruje podle aktuálního stavu souboru pro vyšetření neobvyklých souborů. |

Kliknutím na `Apply Filters` je použijete. Pomocí `Reset` se vrátíte ke všem datům.

## Mobilní zobrazení

Na mobilu se správa uživatelů přepne do rozložení karet.

![Mobilní správa uživatelů](../../image/other/手机端显示用户管理效果.png)

Každá karta zobrazuje IP, adresu, celkovou velikost nahrání, počet nahrání a přepínač povolení nahrávání. Uživatelé se dají spravovat bez vodorovného posouvání tabulky.

## Pokud poloha vypadá špatně

IP geolokace je přibližná. Není to přesná adresa ulice.

Pokud je uživatel za proxy, datovým centrem, cloudovým serverem nebo přeshraniční sítí, zobrazená poloha se může lišit od skutečné.

Používejte tuto funkci k hrubému pochopení původu, hledání neobvyklých nahrání a podpoře rozhodování o blokování. Nepovažujte ji za přesné sledování.

## Běžné situace

| Situace | Význam |
| --- | --- |
| Adresa je prázdná | IP se možná ještě nepodařilo vyhodnotit nebo je aktuální zdroj dočasně nedostupný. |
| Jazyk adresy je špatný | Zkontrolujte jazyk IP geolokace a zda je nastaven zdroj podporující tento jazyk. |
| Adresa ukazuje datové centrum | Mnoho proxy, cloudových serverů a crawlerů se zobrazuje jako adresy datových center nebo ISP. |
| Počet nahrání je vysoký | Tuto IP pečlivě zkontrolujte a v případě potřeby nahrávání zablokujte. |
| Celková velikost nahrání je velká | Seřaďte nebo filtrujte, rozbalte IP a zkontrolujte konkrétní soubory. |
| Je potřeba obnovit přístup po blokaci | Znovu zapněte `Upload allowed`. |

## Rychlý postup

```text
Open IP Geolocation in Other Settings
-> Choose IP geolocation language
-> Fill MaxMind, Tencent Map, or ipapi credentials as needed
-> Save settings
-> Open User Management
-> Review IP source, address, total upload size, and upload count
-> Use search, sort, or advanced filters to find abnormal IPs
-> Allow or block uploads as needed
```
