# OCR

OCR získává text z obrázků, skenů a snímků obrazovky dokumentů.

Po rozpoznání můžete výsledek zkopírovat, exportovat jako `Markdown`, `PDF` nebo `Word`, případně více formátů zabalit dohromady ke stažení.

## Co OCR umí

| Funkce | Popis |
| --- | --- |
| Rozpoznávání textu v obrázcích | Získává text z obrázků, snímků obrazovky a skenů. |
| Rozpoznávání rozložení dokumentu | Vhodnější pro tabulky, vzorce, razítka a smíšená textově-obrazová rozložení. |
| Více služeb | Podporuje Baidu PaddleOCR, Microsoft Azure Vision a Google Vision. |
| Kopírování výsledků | Po zpracování zkopíruje rozpoznaný text. |
| Export souborů | Exportuje `Markdown`, `PDF` a `Word`. |
| Hromadné balení | Po rozpoznání více souborů stáhne výsledky jako balíček. |

## Nejdřív nastavte služby OCR

Otevřete:

```text
System Settings -> Other Settings -> OCR
```

![IP geolokace a OCR](../../image/other/ip定位和ocr文字识别.png)

Vyplňte přihlašovací údaje ke službám, které chcete použít:

| Služba | Co zadat | Nejvhodnější pro |
| --- | --- | --- |
| Baidu PaddleOCR | `PaddleOCR Token` | Doporučená první volba. Dobré pro dokumenty, obrázky, tabulky a smíšená rozložení. |
| Microsoft Azure Vision | `Azure Vision Endpoint` a `Azure Vision API Key` | Užitečné, pokud už používáte cloudové služby Microsoft. |
| Google Vision | `Google Vision API Key`. Servisní účet `JSON` slouží pouze k dotazu na kvótu. | Užitečné, pokud používáte služby Google Cloud. |

Po vyplnění přihlašovacích údajů uložte.

Pro první test stačí nastavit jednu službu. Není nutné mít všechny tři.

## Nastavení Google Vision

Nastavení Google má dvě části:

| Cíl | Požadavek |
| --- | --- |
| Použít OCR | Zapnout `Cloud Vision API`, potom vytvořit `API Key`. |
| Dotaz na využití | Vytvořit servisní účet, udělit roli `Monitoring Viewer`, potom stáhnout servisní účet `JSON`. |

![Google API key a servisní účet](../../image/other/谷歌api秘钥和服务账号截图.png)

### Použití Google pro OCR

1. Otevřete Google Cloud Console.
2. Přejděte do `APIs & Services`.
3. Otevřete `Library`, vyhledejte `Cloud Vision API` a zapněte ji.
4. Vraťte se do `Credentials`.
5. Vytvořte `API Key`.
6. Otevřete API Key a zkopírujte ho.
7. Vložte ho do `Google Vision API Key` v ImgBed.
8. Uložte.

Potom můžete v dialogu OCR zvolit Google Vision.

### Dotaz na využití Google

Dotaz na kvótu není nutný pro samotné rozpoznávání.

Pouze přibližně ukáže, kolik volání Google Vision bylo použito za posledních 30 dní.

1. V Google Cloud Console otevřete `IAM & Admin`.
2. Otevřete `Service Accounts`.
3. Vytvořte servisní účet, například `vision-monitor`.
4. Udělte mu roli `Monitoring Viewer`.
5. Otevřete detail servisního účtu a vytvořte klíč.
6. Vyberte `JSON`.
7. Stáhněte vygenerovaný soubor JSON.
8. Vraťte se do ImgBed a importujte ho jako servisní účet `JSON` (volitelné).
9. Po úspěšném importu klikněte na dotaz na kvótu.

Po importu ImgBed zobrazí název projektu, ke kterému servisní účet patří. Při dotazu na využití čte ImgBed data sledování Google a zobrazí počet volání za tento měsíc.

Stručně:

| Položka | Účel |
| --- | --- |
| `Google Vision API Key` | Provádí rozpoznávání OCR. |
| Servisní účet `JSON` | Dotazuje se, kolik volání Google Vision bylo použito. |
| Role `Monitoring Viewer` | Umožňuje servisnímu účtu číst data o využití. |

## Získání Baidu PaddleOCR Token

Baidu PaddleOCR vyžaduje přístupový token.

![Získání tokenu PaddleOCR](../../image/other/获取飞浆令牌.png)

Na stránce Baidu PaddleOCR otevřete okno volání `API`, klikněte na získání tokenu a zkopírujte ho.

Vraťte se do ImgBed, vložte ho do `PaddleOCR Token` a uložte.

## Spuštění rozpoznávání

Ve správě souborů vyberte obrázek nebo snímek obrazovky dokumentu a klikněte na `OCR`.

![Rozpoznávání OCR](../../image/other/ocr识别截图.png)

V dialogu vyberte službu rozpoznávání a model.

Běžné volby modelů PaddleOCR:

| Model | Nejvhodnější pro |
| --- | --- |
| `PP-StructureV3` | Doporučený výchozí model. Dobré pro dokumenty, tabulky, vzorce, razítka a smíšená rozložení. |
| `PP-OCRv5` | Jednoduché obrázky, běžný text a lehké rozpoznávání. |
| `PaddleOCR-VL` | Vícejazyčné, složité obrázky a obsah podobný grafům. |
| `PaddleOCR-VL-1.5` | Složitější stránky dokumentů a obnovu rozložení. |

Pokud si nejste jistí, začněte s `PP-StructureV3`.

## Pokročilé volby

| Volba | Popis |
| --- | --- |
| Korekce orientace | Použijte, když je obrázek otočený nebo nakloněný. |
| Narovnání dokumentu | Použijte pro fotografované dokumenty se zakřivením nebo sklonem. |
| Detekce rozložení | Použijte, když chcete zachovat nadpisy, odstavce, tabulky a strukturu obrázku. |
| Rozpoznávání grafů | Použijte, když obrázek obsahuje grafy nebo složité struktury. |
| Vylepšit `Markdown` | Zpřehlední exportovaný Markdown. |

U běžných snímků obrazovky ponechte voleb minimum. U skenů dokumentů zapněte více voleb souvisejících s dokumenty.

## Zobrazení výsledků

Po dokončení rozpoznávání dialog zobrazí výsledek.

Můžete ho zkopírovat přímo nebo vybrat exportní formáty.

![Rozpoznávání PDF](../../image/other/pdf识别截图.png)

U stránek dokumentů může exportovaný `PDF` zachovat vzhled stránky a zároveň udržet text vyhledatelný. To se hodí pro archivaci skenů a pozdější vyhledávání obsahu.

## Výběr exportního formátu

| Formát | Nejvhodnější pro |
| --- | --- |
| `Markdown (.md)` | Poznámky, dokumentační systémy a pozdější úpravy. |
| `PDF (.pdf)` | Zachování vzhledu stránky a výsledků skenovaných dokumentů. |
| `Word (.docx)` | Další úpravy rozložení, úpravy textu a předání ostatním. |
| Exportovat vše | Uloží více formátů a původní obrázek; vhodné pro důležité archivy. |

Pokud potřebujete jen text, exportujte Markdown.

Pokud potřebujete vzhled stránky, použijte PDF nebo Word.

## Výstup Word

Exportované dokumenty Word lze otevřít a upravovat v kancelářském softwaru.

![Výsledek Word](../../image/other/word识别结果.png)

Některé dokumenty ve výstupu Word obsahují rozpoznané obrázky, nadpisy a odstavce.

Kvalita rozpoznávání závisí na čitelnosti původního obrázku, volbě modelu a složitosti dokumentu.

## Nejlepší typy souborů pro OCR

| Typ souboru | Doporučení |
| --- | --- |
| Čitelné snímky obrazovky | Rozpoznávejte přímo. |
| Skeny | Preferujte `PP-StructureV3`. |
| Fotografované dokumenty | Zapněte korekci orientace a narovnání dokumentu. |
| Tabulky, vzorce, razítka | Preferujte strukturované modely. |
| Jednoduché obrázky s krátkým textem | `PP-OCRv5` obvykle stačí. |

Čitelnější obrázky s rovnějším textem obvykle dávají lepší výsledky.

## Běžné případy

| Případ | Význam |
| --- | --- |
| Rozpoznávání selže | Zkontrolujte, že je token nebo klíč služby uložený. |
| Rozpoznávání je pomalé | Složité dokumenty a velké obrázky trvají déle. |
| Tabulka je neúplná | Zkuste strukturovaný model. |
| Text obsahuje chyby | Rozmazání, odlesky a naklonění zvyšují chybovost rozpoznávání. Zkuste čitelnější obrázek. |
| Výstup Word obsahuje mnoho obrázků | Strukturované modely mohou zachovat některé rozpoznané obrázky. Je to normální. |

### Dotaz na kvótu Google selže

Zkontrolujte:

1. Servisní účet `JSON` byl importován.
2. Servisní účet má roli `Monitoring Viewer`.
3. `Cloud Vision API` je v projektu zapnutá.

Pokud potřebujete jen OCR a ne dotaz na využití, můžete JSON servisního účtu ignorovat a vyplnit jen `Google Vision API Key`.

## Rychlý postup

```text
Open System Settings
-> Open Other Settings
-> Fill OCR service credentials
-> Save
-> Return to File Management
-> Select a file and click OCR
-> Choose a model
-> Wait for recognition
-> Copy results or export Markdown / PDF / Word
```
