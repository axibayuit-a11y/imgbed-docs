# OCR

OCR získává text z obrázků, skenů a snímků dokumentů.

Po rozpoznání můžete výsledek zkopírovat, exportovat jako `Markdown`, `PDF` nebo `Word`, případně stáhnout více formátů společně jako balíček.

## Co OCR umí

| Funkce | Popis |
| --- | --- |
| Rozpoznávání textu v obrázku | Získává text z obrázků, screenshotů a skenů. |
| Rozpoznávání rozložení dokumentu | Vhodnější pro tabulky, vzorce, razítka a smíšená textově-obrazová rozložení. |
| Více služeb | Podporuje Baidu PaddleOCR, Microsoft Azure Vision a Google Vision. |
| Kopírování výsledků | Po zpracování lze zkopírovat rozpoznaný text. |
| Export souborů | Exportuje `Markdown`, `PDF` a `Word`. |
| Hromadné balení | Po rozpoznání více souborů stáhne výsledky jako balíček. |

## Nejdřív nastavte OCR služby

Otevřete:

```text
System Settings -> Other Settings -> OCR
```

![IP geolokace a OCR](../../image/other/ip定位和ocr文字识别.png)

Vyplňte přihlašovací údaje služeb, které chcete použít:

| Služba | Co zadat | Nejvhodnější pro |
| --- | --- | --- |
| Baidu PaddleOCR | `PaddleOCR Token` | Doporučená první volba. Dobré pro dokumenty, obrázky, tabulky a smíšená rozložení. |
| Microsoft Azure Vision | `Azure Vision Endpoint` a `Azure Vision API Key` | Užitečné, pokud už používáte cloudové služby Microsoft. |
| Google Vision | `Google Vision API Key`. Service account `JSON` slouží jen pro dotaz na kvótu. | Užitečné, pokud používáte Google Cloud. |

Po vyplnění údajů uložte.

Pro první test stačí nastavit jednu službu. Není nutné mít všechny tři.

## Nastavení Google Vision

Nastavení Google má dvě části:

| Cíl | Požadavek |
| --- | --- |
| Použít OCR | Zapnout `Cloud Vision API`, potom vytvořit `API Key`. |
| Dotaz na využití | Vytvořit service account, přidat roli `Monitoring Viewer`, potom stáhnout service account `JSON`. |

![Google API key a service account](../../image/other/谷歌api秘钥和服务账号截图.png)

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
3. Vytvořte service account, například `vision-monitor`.
4. Přidejte mu roli `Monitoring Viewer`.
5. Otevřete detail service account a vytvořte klíč.
6. Vyberte `JSON`.
7. Stáhněte vygenerovaný JSON soubor.
8. Vraťte se do ImgBed a importujte ho jako service account `JSON` (volitelné).
9. Po úspěšném importu klikněte na dotaz na kvótu.

Po importu ImgBed ukáže název projektu, ke kterému service account patří. Při dotazu na využití čte Google monitoring data a ukáže počet volání za tento měsíc.

Stručně:

| Položka | Účel |
| --- | --- |
| `Google Vision API Key` | Provádí OCR rozpoznávání. |
| Service account `JSON` | Dotazuje, kolik volání Google Vision bylo použito. |
| Role `Monitoring Viewer` | Umožní service account číst data využití. |

## Získání Baidu PaddleOCR tokenu

Baidu PaddleOCR vyžaduje access token.

![Získání PaddleOCR tokenu](../../image/other/获取飞浆令牌.png)

Na stránce Baidu PaddleOCR otevřete okno volání `API`, klikněte na získání tokenu a zkopírujte ho.

Vraťte se do ImgBed, vložte ho do `PaddleOCR Token` a uložte.

## Spuštění rozpoznávání

Ve Správě souborů vyberte obrázek nebo snímek dokumentu a klikněte na `OCR`.

![OCR rozpoznávání](../../image/other/ocr识别截图.png)

V dialogu vyberte službu a model rozpoznávání.

Běžné modely PaddleOCR:

| Model | Nejvhodnější pro |
| --- | --- |
| `PP-StructureV3` | Doporučený výchozí model. Dobré pro dokumenty, tabulky, vzorce, razítka a smíšená rozložení. |
| `PP-OCRv5` | Jednoduché obrázky, běžný text a lehké rozpoznávání. |
| `PaddleOCR-VL` | Vícejazyčné, složité obrázky a obsah podobný grafům. |
| `PaddleOCR-VL-1.5` | Složitější dokumentové stránky a obnovu rozložení. |

Pokud si nejste jistí, začněte s `PP-StructureV3`.

## Pokročilé volby

| Volba | Popis |
| --- | --- |
| Korekce orientace | Použijte, když je obrázek otočený nebo nakloněný. |
| Narovnání dokumentu | Použijte pro fotografované dokumenty se zakřivením nebo perspektivou. |
| Detekce rozložení | Použijte, když chcete zachovat nadpisy, odstavce, tabulky a strukturu obrázku. |
| Rozpoznávání grafů | Použijte, když obrázek obsahuje grafy nebo složité struktury. |
| Vylepšit `Markdown` | Zpřehlední exportovaný Markdown. |

U běžných screenshotů nechte voleb minimum. U skenů dokumentů zapněte víc dokumentových voleb.

## Zobrazení výsledků

Po dokončení rozpoznávání dialog ukáže výsledek.

Můžete ho zkopírovat přímo nebo vybrat exportní formáty.

![Rozpoznávání PDF](../../image/other/pdf识别截图.png)

U dokumentových stránek může exportovaný `PDF` zachovat vzhled stránky a zároveň udržet text vyhledatelný. Hodí se to pro archivaci skenů a pozdější hledání obsahu.

## Výběr exportního formátu

| Formát | Nejvhodnější pro |
| --- | --- |
| `Markdown (.md)` | Poznámky, dokumentační systémy a pozdější úpravy. |
| `PDF (.pdf)` | Zachování vzhledu stránky a výsledků skenu. |
| `Word (.docx)` | Další úpravy rozložení, textu a předání ostatním. |
| Export všeho | Uloží více formátů a původní obrázek, vhodné pro důležité archivy. |

Pokud potřebujete jen text, exportujte Markdown.

Pokud potřebujete vzhled stránky, použijte PDF nebo Word.

## Výstup Word

Exportované dokumenty Word lze otevřít a upravovat v kancelářském softwaru.

![Výsledek Word](../../image/other/word识别结果.png)

Některé dokumenty ve výstupu Word obsahují rozpoznané obrázky, nadpisy a odstavce.

Kvalita závisí na čitelnosti originálu, volbě modelu a složitosti dokumentu.

## Nejlepší typy souborů pro OCR

| Typ souboru | Doporučení |
| --- | --- |
| Čitelné screenshoty | Rozpoznávejte přímo. |
| Skeny | Preferujte `PP-StructureV3`. |
| Fotografované dokumenty | Zapněte korekci orientace a narovnání dokumentu. |
| Tabulky, vzorce, razítka | Preferujte strukturované modely. |
| Jednoduché krátké textové obrázky | `PP-OCRv5` obvykle stačí. |

Čitelnější obrázky s rovnějším textem obvykle dávají lepší výsledky.

## Běžné případy

| Případ | Význam |
| --- | --- |
| Rozpoznávání selže | Zkontrolujte, že token nebo key služby jsou uložené. |
| Rozpoznávání je pomalé | Složité dokumenty a velké obrázky trvají déle. |
| Tabulka je neúplná | Zkuste strukturovaný model. |
| Text obsahuje chyby | Rozmazání, odlesky a naklonění zvyšují chybovost. Zkuste čitelnější obrázek. |
| Výstup Word obsahuje mnoho obrázků | Strukturované modely mohou zachovat některé rozpoznané obrázky. Je to normální. |

### Dotaz na kvótu Google selže

Zkontrolujte:

1. Service account `JSON` byl importován.
2. Service account má roli `Monitoring Viewer`.
3. `Cloud Vision API` je v projektu zapnutá.

Pokud potřebujete jen OCR a ne dotaz na využití, můžete service account JSON ignorovat a vyplnit jen `Google Vision API Key`.

## Rychlý postup

```text
Otevřete System Settings
-> Otevřete Other Settings
-> Vyplňte údaje OCR služby
-> Uložte
-> Vraťte se do Správy souborů
-> Vyberte soubor a klikněte OCR
-> Vyberte model
-> Počkejte na rozpoznání
-> Zkopírujte výsledky nebo exportujte Markdown / PDF / Word
```
