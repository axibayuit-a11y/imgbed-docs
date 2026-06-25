# Mazání souborů pomocí API Token

Mazání souborů přes API Token je určené pro skripty, automatizaci a externí programy. Není nutné otevírat administraci; stačí zadat adresu webu, API Token a konkrétní ID souborů. Tak lze z ImgBed smazat jeden nebo více souborů.

Mazání je zápisová operace a po spuštění příkazu se data skutečně odstraní. Doporučuje se nejdříve pomocí `imgbed-token-list.mjs` ověřit, které hodnoty `fileId` chcete smazat, a teprve potom je předat mazacímu skriptu.

![Upravit API Token](../../image/Safety/apitoken/编辑api%20token.png)

## Příprava

V administraci otevřete:

```text
System Settings -> Security Settings -> API Token
```

Při vytvoření nebo úpravě API Token zkontrolujte, že má povolené mazání. Tento skript potřebuje pouze oprávnění `delete`.

API Token lze zadat také proměnnou prostředí:

```powershell
$env:IMGBED_API_TOKEN="your API Token"
```

## Stažení skriptu

| Skript | Účel |
| --- | --- |
| <a href="/tools/imgbed-token-delete.mjs" download>Stáhnout skript pro mazání souborů</a> | Smaže jedno nebo více výslovně zadaných ID souborů |

Na místním počítači je potřeba Node.js 18 nebo novější.

## Chování mazacího API

Mazací skript volá serverové rozhraní pro mazání:

```text
POST /api/manage/delete/batch
```

Požadavek musí obsahovat API Token:

```text
Authorization: Bearer <token>
```

Příklad těla požadavku:

```json
{
  "fileIds": ["photos/2026/a.txt"],
  "deleteStrictness": "strict"
}
```

Když `fileIds` obsahuje jeden soubor, jde o smazání jednoho souboru. Když obsahuje více souborů, jde o dávkové mazání. Server v jednom požadavku zpracuje nejvýše 15 souborů a skript práci automaticky rozdělí do více požadavků podle `--batch-size`.

Rozhraní vrací průběh jako proud NDJSON. Mezi běžné události patří `batch_start`, `file_step`, `file_done`, `batch_complete` a `batch_error`. Skript tyto události zpracuje a shrne je do čitelného výstupu nebo do výstupu JSON.

Po úspěšném smazání server automaticky zpracuje indexy souborů, statistiky složek, statistiky kapacity a vyčištění mezipaměti.

## Parametry mazacího skriptu

| Parametr | Povinné | Popis |
| --- | --- | --- |
| `--base-url <url>` | Ano | Adresa webu ImgBed, například `https://image.ai6.me` |
| `--token <token>` | Ano | API Token; lze použít také proměnnou prostředí `IMGBED_API_TOKEN` |
| `--file-id <id>` | Ano | ID souboru ke smazání; lze zadat opakovaně |
| `--strictness <strict\|soft>` | Ne | Přísnost mazání; výchozí hodnota je `strict` |
| `--batch-size <n>` | Ne | Počet mazaných souborů v jednom požadavku; výchozí hodnota `15`, maximum `15` |
| `--retries <n>` | Ne | Počet opakování při dočasné chybě; výchozí hodnota `3` |
| `--timeout-ms <n>` | Ne | Časový limit jednoho požadavku; výchozí hodnota `180000` |
| `--output <pretty\|json>` | Ne | Formát výstupu; výchozí hodnota `pretty` |
| `--save-response <path>` | Ne | Uloží konečný výsledek do souboru JSON |
| `-h` / `--help` | Ne | Zobrazí nápovědu skriptu |

Tento skript maže pouze hodnoty `--file-id`, které výslovně zadáte. Neprovádí přibližné vyhledávání, nemaže hromadně podle složky a nečte ID k mazání ze seznamu odděleného čárkami ani z místního souboru.

## Přísné a měkké mazání

| Režim | Popis |
| --- | --- |
| `strict` | Výchozí režim. Když se nepodaří smazat soubor ve vzdáleném úložišti, záznam v ImgBed zůstane zachovaný pro pozdější opakování nebo kontrolu |
| `soft` | Když se nepodaří smazat soubor ve vzdáleném úložišti, záznam v ImgBed se přesto vyčistí a výsledek vrátí varování |

Pokud má být operace úspěšná pouze tehdy, když se smaže i vzdálený soubor, použijte výchozí režim `strict`. Pokud už vzdálená platforma daný soubor smazat neumí a chcete jen vyčistit záznam v ImgBed, použijte `soft`.

## Příklady použití

Smazání jednoho souboru:

```powershell
node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --file-id "photos/2026/a.txt"
```

Použití API Token z proměnné prostředí:

```powershell
$env:IMGBED_API_TOKEN="your API Token"

node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --file-id "photos/2026/a.txt"
```

Smazání více souborů:

```powershell
node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --file-id "photos/2026/a.txt" `
  --file-id "photos/2026/b.txt" `
  --file-id "photos/2026/c.txt"
```

Vyčištění záznamu v ImgBed i při selhání mazání ve vzdáleném úložišti:

```powershell
node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --file-id "photos/2026/a.txt" `
  --strictness soft
```

Výstup JSON a uložení výsledku:

```powershell
node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --file-id "photos/2026/a.txt" `
  --output json `
  --save-response ".\delete-result.json"
```

Omezení jednoho požadavku na 5 souborů:

```powershell
node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --file-id "photos/2026/a.txt" `
  --file-id "photos/2026/b.txt" `
  --batch-size 5
```

## Před mazáním ověřte `fileId`

Mazací skript potřebuje ID souboru v ImgBed. Nejprve můžete pomocí vypisovacího skriptu zobrazit soubory ve složce:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --dir "photos/2026" `
  --count 10 `
  --output json
```

Pole `name` ve vráceném výsledku je obvykle hodnota `fileId`, kterou lze předat mazacímu skriptu.

## Časté otázky

### Proč mazání selhalo, ale soubor je pořád v seznamu?

Při použití výchozího režimu `strict` záznam v ImgBed zůstane zachovaný, pokud se nepodaří smazat soubor ve vzdáleném úložišti. Tím se zabrání situaci, kdy se smaže jen místní index, ale vzdálený soubor dál existuje. Až si ověříte, že chcete vyčistit pouze záznam v ImgBed, zopakujte akci pro stejné `fileId` s režimem `soft`.

### Proč jsou ve výsledku varování?

Varování obvykle znamenají nefatální problém při mazání ve vzdáleném úložišti, čištění mezipaměti nebo dokončování statistik. Skript varování shrne, abyste mohli posoudit, zda je potřeba akci zopakovat.

### Lze najednou smazat celou složku?

Tento skript neumí vyprázdnit složku najednou. Nejprve pomocí vypisovacího skriptu vyfiltrujte konkrétní hodnoty `fileId` a potom soubory, které chcete smazat, předejte mazacímu skriptu jednotlivě.



