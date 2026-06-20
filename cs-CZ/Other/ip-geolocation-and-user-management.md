# IP geolokace a správa uživatelů

IP geolokace převádí IP adresy v záznamech uploaderů, přihlášených zařízeních a podobných logách na přibližné lokace.

Po nastavení může administrace jasněji ukazovat původ uploadů a přístupů. Správa uživatelů zároveň umožňuje blokovat nebo obnovit upload pro podezřelé IP adresy.

## Kde nastavit

Otevřete:

```text
System Settings -> Other Settings -> IP Geolocation
```

![IP geolokace](../../image/other/ip定位/ip定位.png)

## Dostupná nastavení

Novější tok IP geolokace podporuje více zdrojů a nespoléhá jen na jednu mapovou službu.

| Nastavení | Účel |
| --- | --- |
| Jazyk IP geolokace | Vybere jazyk zobrazení, například angličtinu, zjednodušenou čínštinu, japonštinu, francouzštinu a další. |
| MaxMind Account ID | Account ID MaxMind pro MaxMind GeoLite Web Service. |
| MaxMind License Key | License Key MaxMind. |
| Tencent Map Key | Klíč Tencent Location Service. Užitečný pro čínské adresy a IP z pevninské Číny. |
| ipapi Key | Klíč APILayer ipapi. Podporuje vícejazyčnou IP geolokaci. |

Vyplňte jen služby, které potřebujete. Není nutné konfigurovat každé pole.

Pokud nezadáte žádný klíč, ImgBed se stále pokusí použít vestavěné bezplatné zdroje, ale stabilita, jazyková podpora a přesnost mohou být nižší než u služby nastavené vámi.

## Doporučené volby

Pokud potřebujete hlavně čínské adresy:

1. Nastavte jazyk IP geolokace na zjednodušenou čínštinu.
2. Nastavte Tencent Map Key.
3. Volitelně přidejte MaxMind nebo ipapi jako záložní zdroje.

Pokud potřebujete hlavně anglické nebo vícejazyčné adresy:

1. Vyberte požadovaný jazyk.
2. Nastavte MaxMind Account ID a License Key.
3. Přidejte ipapi Key, pokud chcete lepší vícejazyčné výsledky.

## Nastavení MaxMind

MaxMind potřebuje:

```text
MaxMind Account ID
MaxMind License Key
```

Account ID najdete v dashboardu MaxMind a License Key vygenerujete na stránce License Keys.

![Konfigurace klíče MaxMind](../../image/other/ip定位/maxmind的key配置.png)

Po vygenerování vložte Account ID a License Key do ImgBed a uložte.

Bezplatný plán MaxMind stačí pro běžné použití, ale má limity požadavků. Po vyčerpání limitu ImgBed zkusí další dostupné zdroje.

## Nastavení ipapi

ipapi používá APILayer API Key.

Otevřete konzoli ipapi a zkopírujte zobrazený API Key.

![Konfigurace ipapi](../../image/other/ip定位/ipapi配置.png)

Vložte ho do pole `ipapi Key` v ImgBed a uložte.

ipapi podporuje vícejazyčnou IP geolokaci a hodí se, když chcete zobrazovat adresy ve vybraném jazyce. Bezplatný plán má také limity. Po jejich vyčerpání ImgBed zkusí další dostupné zdroje.

## Nastavení Tencent Map Key

Tencent Map Key je užitečný pro čínské adresy, zejména IP z pevninské Číny.

Při vytváření klíče v Tencent Location Service zapněte:

```text
WebServiceAPI
```

Po vytvoření vložte klíč do `Tencent Map Key` a uložte.

Pokud potřebujete jen základní čínskou IP geolokaci, Tencent Map Key stačí pro začátek.

## Co kontrolovat ve Správě uživatelů

Správa uživatelů je dostupná nahoře v administraci.

![Správa uživatelů](../../image/other/用户管理显示.png)

Správa uživatelů ukazuje upload aktivitu podle IP:

| Pole | Popis |
| --- | --- |
| IP zdroj | Zdrojová IP adresa uploaderu. |
| Adresa | Přibližná lokace zjištěná z IP. |
| Celková velikost uploadu | Celková velikost souborů nahraných z této IP. |
| Počet uploadů | Počet uploadů z této IP. |
| Upload povolen | Zapnuto znamená povolené uploady. Vypnuto znamená blokované uploady. |

Klikněte na šipku vlevo pro rozbalení seznamu souborů nahraných z dané IP.

Seznam souborů ukazuje název, náhled, velikost, výsledek moderace, stav souboru a čas uploadu. Pokud uploady vypadají podezřele, nejprve rozbalte IP, zkontrolujte soubory a potom rozhodněte, zda blokovat další uploady.

Pokud je IP podezřelá, vypněte `Upload allowed`. Budoucí uploady z této IP budou blokované.

## Vyhledávání, řazení a pokročilé filtry

Nahoře ve Správě uživatelů můžete hledat podle zdrojové IP nebo adresy.

Řaďte podle času, počtu uploadů nebo celkové velikosti a najděte nedávné uploadery, časté uploadery nebo IP s vysokým využitím.

Pro hlubší kontrolu otevřete pokročilé filtry.

![Pokročilé filtry](../../image/other/用户管理高级筛选.png)

Pokročilé filtry podporují:

| Filtr | Použití |
| --- | --- |
| Časový rozsah | Zobrazí IP, které nahrávaly soubory ve vybraném období. |
| Stav přístupu | Filtruje podle normálních, blokovaných a podobných stavů. |
| Allow/block list | Filtruje podle allowlist, blocklist nebo nenastaveného stavu. |
| Typ souboru | Zobrazí IP, které nahrávaly obrázky, videa, audio, dokumenty, kód nebo jiné soubory. |
| Velikost souboru | Filtruje podle rozsahu velikosti nahraných souborů. |
| Věkový rating | Filtruje podle nenastaveného, General, R12+, R16+, R18 a podobných ratingů. |
| Stav souboru | Filtruje podle aktuálního stavu souboru pro vyšetření neobvyklých souborů. |

Klikněte na `Apply Filters` pro použití. `Reset` vrátí všechna data.

## Mobilní zobrazení

Na mobilu se Správa uživatelů přepne do kartového rozložení.

![Mobilní správa uživatelů](../../image/other/手机端显示用户管理效果.png)

Každá karta ukazuje IP, adresu, celkovou velikost uploadu, počet uploadů a přepínač povolení uploadu. Uživatelé se dají spravovat bez vodorovného posouvání tabulky.

## Pokud lokace vypadá špatně

IP geolokace je přibližná. Není to přesná adresa ulice.

Pokud uživatel používá proxy, datacentrum, cloudový server nebo přeshraniční síť, zobrazená lokace se může lišit od skutečné.

Používejte tuto funkci pro hrubé pochopení původu, hledání neobvyklých uploadů a podporu rozhodování o blokování. Nepovažujte ji za přesné sledování.

## Běžné situace

| Situace | Význam |
| --- | --- |
| Adresa je prázdná | IP se možná ještě nepodařilo vyřešit nebo je aktuální zdroj dočasně nedostupný. |
| Jazyk adresy je špatný | Zkontrolujte jazyk IP geolokace a zda je nastaven zdroj podporující tento jazyk. |
| Adresa ukazuje datacentrum | Mnoho proxy, cloudových serverů a crawlerů se zobrazuje jako datacentrum nebo ISP. |
| Počet uploadů je vysoký | Tuto IP pečlivě zkontrolujte a v případě potřeby blokujte uploady. |
| Celková velikost uploadu je velká | Seřaďte nebo filtrujte, rozbalte IP a zkontrolujte konkrétní soubory. |
| Obnova po blokaci | Znovu zapněte `Upload allowed`. |

## Rychlý postup

```text
Otevřete IP Geolocation v Other Settings
-> Vyberte jazyk IP geolokace
-> Podle potřeby vyplňte MaxMind, Tencent Map nebo ipapi
-> Uložte nastavení
-> Otevřete Správu uživatelů
-> Zkontrolujte IP zdroj, adresu, celkovou velikost a počet uploadů
-> Použijte vyhledávání, řazení nebo pokročilé filtry pro hledání neobvyklých IP
-> Podle potřeby povolte nebo blokujte uploady
```
