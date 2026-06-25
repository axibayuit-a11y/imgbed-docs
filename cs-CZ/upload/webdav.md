# Přidání kanálu WebDAV

## Kdy se hodí

Kanál WebDAV použijte, když:

- máte NAS, cloudový disk nebo úložnou službu s WebDAV endpointem.
- chcete ukládat nahrané obrázky do vlastního WebDAV adresáře.
- chcete uložit přihlašovací údaje do D1 tabulky `upload_channels`, místo aby byly dlouhodobě vystavené ve frontendu.

## Co potřebujete před začátkem

| Požadavek | Účel |
| --- | --- |
| WebDAV Endpoint | Serverový WebDAV URL, například `https://nas.example.com/dav`. |
| Uživatelské jméno | Pro přihlášení ke službě WebDAV. |
| Heslo | Pro přihlášení ke službě WebDAV. |
| Režim ověřování | Výchozí je `Basic`. `Digest` nebo automatické vyjednání použijte jen tehdy, když to server vyžaduje. |
| Úložný adresář | Adresář pro ukládání souborů. Výchozí je `imgbed`. |

## Kde ho přidat

1. Otevřete Nastavení systému.
2. Přejděte do Nastavení nahrávání.
3. Klikněte vpravo nahoře na Přidat kanál.
4. Vyberte `WebDAV`.

## Přehled polí

| Pole | Co dělá | Povinné |
| --- | --- | --- |
| Název kanálu | Srozumitelný název, například `koofr` nebo `nas`. | Ano |
| Endpoint | Úplný WebDAV endpoint včetně `https://`. | Ano |
| Uživatelské jméno | Přihlašovací jméno WebDAV. | Ano |
| Heslo | Heslo WebDAV. | Ano |
| Režim ověřování | Obvykle `Basic`; `Digest` použijte, pokud server vyžaduje digest authentication. | Ano |
| Úložný adresář | Adresář, kam se soubory ukládají. Výchozí je `imgbed`. | Ne |

## Příklad: fie.nl.tab.digital

### 1. Vytvořte heslo aplikace

Otevřete nastavení zabezpečení účtu, najděte hesla aplikací a vytvořte nové heslo aplikace.

![Vytvoření hesla aplikace](../../image/upload/webdav/创建应用密码.png)

Po vytvoření nové heslo hned zkopírujte a uložte. Obvykle se zobrazí jen jednou.

![Uložení nového hesla aplikace](../../image/upload/webdav/记住新应用程序密码.png)

### 2. Vyplňte konfiguraci WebDAV v ImgBed

Vraťte se do ImgBed a přidejte kanál WebDAV:

| Pole UI | Hodnota |
| --- | --- |
| Endpoint | WebDAV URL poskytnutý službou `https://fie.nl.tab.digital/`. |
| Uživatelské jméno | Vaše WebDAV uživatelské jméno. |
| Heslo | Heslo aplikace, které jste právě vytvořili. |
| Režim ověřování | Ve většině případů začněte s `Basic`. |
| Úložný adresář | Výchozí je `imgbed`; můžete použít i vlastní adresář. |

![Vyplnění konfigurace](../../image/upload/webdav/填写配置.png)

## Chování při velkých souborech

Kanál WebDAV nyní používá skutečné nahrávání po částech řízené relací.

Malé soubory se nahrávají jako jeden celý soubor. Soubory větší než 64 MiB se automaticky rozdělí na části kolem 10 MiB a nahrají do vzdáleného adresáře s částmi.

Služba WebDAV nemusí podporovat `partial update` ani offsetové zápisy. ImgBed části na vzdáleném serveru neslučuje do jednoho velkého souboru. Místo toho uloží manifest částí a při požadavku čte části postupně.

Prakticky:

| Velikost souboru | Metoda nahrávání | Rozložení ve vzdáleném úložišti |
| --- | --- | --- |
| 64 MiB nebo méně | Běžné nahrání | Jeden celý soubor |
| Více než 64 MiB | Nahrávání po částech řízené relací | Adresář s více částmi |

Adresář s částmi ovlivňuje jen rozložení ve vzdáleném úložišti. URL souboru v ImgBed se nemění. Uživatelé k souboru stále přistupují přes původní odkaz `/file/...`.

## Postup nastavení

1. Otevřete Nastavení nahrávání.
2. Klikněte na Přidat kanál.
3. Vyberte `WebDAV`.
4. Zadejte srozumitelný název kanálu, například `koofr`.
5. Zadejte WebDAV endpoint, například `https://app.koofr.net/dav/Koofr`.
6. Zadejte uživatelské jméno a heslo.
7. Režim ověřování ponechte ve výchozím stavu `Basic`.
8. Úložný adresář ponechte `imgbed` nebo ho změňte na vlastní.
9. Klikněte na Uložit.
10. Po uložení zkontrolujte kartu kanálu, případně dotaz na kapacitu a nahrajte testovací soubor.

## Ověření

| Kontrola | Jak ověřit |
| --- | --- |
| Karta kanálu se zobrazuje | Po uložení by se v Nastavení nahrávání měla zobrazit karta WebDAV. |
| Kanál je zapnutý | Přepínač v pravém horním rohu karty zůstává zapnutý. |
| Přihlašovací údaje jsou uloženy | Detail ukazuje Endpoint, uživatelské jméno, režim ověřování a úložný adresář. |
| Malý soubor se nahraje | Nahrajte testovací obrázek a ověřte, že se objeví ve WebDAV adresáři. |
| Pravidlo pro velké soubory funguje | Soubory nad 64 MiB používají nahrávání po částech a vytvoří vzdálený adresář s částmi. |
| Dotaz na kapacitu funguje | Pokud server podporuje informace o kapacitě, dotaz ukáže použité a celkové místo. |

![Dotaz na kvótu byl úspěšný](../../image/upload/webdav/查询额度成功.png)

## FAQ

### Proč velké WebDAV soubory vytvářejí adresář s částmi?

Je to aktuální způsob ukládání velkých souborů.

Soubory větší než 64 MiB se neslučují do jednoho velkého vzdáleného souboru. Ukládají se jako adresář s částmi. ImgBed zaznamená manifest a vrací celý obsah čtením částí ve správném pořadí.

### Co zkontrolovat jako první, když selže nahrávání velkých souborů?

Nejdřív zkontrolujte Endpoint, uživatelské jméno, heslo a úložný adresář. Potom ověřte, že služba WebDAV dovoluje vytvářet adresáře, zapisovat soubory a číst soubory.

Pokud dotaz na kapacitu selže, ale malé soubory se nahrávají, server možná kapacitní informace nepodporuje nebo je omezuje. Neznamená to automaticky, že nahrávání nefunguje.

### Jaký režim ověřování zvolit?

Začněte s `Basic`.

Pokud server výslovně vyžaduje digest authentication, použijte `Digest`.

Pokud si nejste jistí, použijte automatické vyjednání.

## Rychlý kontrolní seznam

```text
Prepare WebDAV endpoint, username, and password
-> Open Upload Settings
-> Add Channel
-> Select WebDAV
-> Enter Endpoint / username / password
-> Keep authentication mode as Basic by default
-> Keep storage directory as imgbed by default
-> Save
-> Query capacity
-> Upload a test file
```
