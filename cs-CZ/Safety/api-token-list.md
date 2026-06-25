# Výpis a filtrování pomocí API Token

Skript pro výpis pomocí API Token se hodí pro skripty, automatizaci a externí programy, které potřebují číst data z ImgBed. Používá pouze oprávnění `list`. Nenahrává soubory, nemaže soubory, nemění konfiguraci a nezakazuje ani nepovoluje nahrávání z žádné IP adresy.

Hlavní použití:

| Funkce | Popis |
| --- | --- |
| Výpis správy souborů | Čte seznam souborů z administrace a podporuje pokročilé filtrovací parametry ze správy souborů |
| Výpis správy uživatelů | Čte statistiky nahrávání podle uživatele nebo IP a podporuje parametry ze správy uživatelů |
| Seznam nahrávacích kanálů | Čte nahrávací kanály, podkanály, kapacitu a stav vyvažování zátěže bez citlivých údajů |
| Tabulka statistik složek | Čte statistiky složek a stránkované informace o složkách |

## Příprava

V administraci otevřete:

```text
System Settings -> Security Settings -> API Token
```

Při vytvoření nebo úpravě API Token zkontrolujte, že má povolený výpis. Tento skript potřebuje pouze oprávnění `list`.

API Token lze zadat také proměnnou prostředí:

```powershell
$env:IMGBED_API_TOKEN="your API Token"
```

## Stažení skriptu

| Skript | Účel |
| --- | --- |
| <a href="/tools/imgbed-token-list.mjs" download>Stáhnout skript pro výpis a filtrování</a> | Výpis správy souborů, výpis správy uživatelů, seznam nahrávacích kanálů a tabulka statistik složek |

Na místním počítači je potřeba Node.js 18 nebo novější.

## Obecné parametry

| Parametr | Povinné | Popis |
| --- | --- | --- |
| `--base-url <url>` | Ano | Adresa webu ImgBed, například `https://image.ai6.me` |
| `--token <token>` | Ano | API Token; lze použít také proměnnou prostředí `IMGBED_API_TOKEN` |
| `--retries <n>` | Ne | Počet opakování při dočasné chybě; výchozí hodnota `3` |
| `--timeout-ms <n>` | Ne | Časový limit jednoho požadavku; výchozí hodnota `180000` |
| `--output <pretty\|json>` | Ne | Formát výstupu; výchozí hodnota `pretty`; pro zpracování programem použijte `json` |
| `--save-response <path>` | Ne | Uloží konečný výsledek do souboru JSON |
| `-h` / `--help` | Ne | Zobrazí nápovědu skriptu |

## Výpis správy souborů

Výpis souborů ve správě souborů:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --count 10
```

Výstup JSON:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --count 10 `
  --output json
```

Načtení pouze počtu podle aktuálních filtrů:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --file-summary `
  --dir "photos/2026" `
  --recursive
```

### Parametry správy souborů

| Parametr | Popis |
| --- | --- |
| `--files` | Vypíše soubory |
| `--file-summary` | Načte pouze počet |
| `--start <n>` | Posun stránkování |
| `--count <n>` | Počet vrácených záznamů |
| `--dir <path>` | Určená složka |
| `--recursive` | Zahrne soubory v podsložkách |
| `--search <text>` | Hledaný výraz |
| `--channel <key>` | Filtr podle hlavního nahrávacího kanálu, například `github`, `s3` nebo `yandex` |
| `--channel-scope <primary\|backup\|all>` | Rozsah filtru kanálu: hlavní kanál, záložní kanál nebo vše |
| `--channel-name-groups <value>` | Filtr skupin podkanálů; předává se serveru v jeho stávajícím formátu |
| `--list-type <csv>` | Typ seznamu, běžně `None,White,Block` |
| `--include-tags <csv>` | Vyžaduje tyto štítky |
| `--exclude-tags <csv>` | Vyloučí tyto štítky |
| `--time-start <ms>` | Začátek času nahrání jako časové razítko v milisekundách |
| `--time-end <ms>` | Konec času nahrání jako časové razítko v milisekundách |
| `--file-exts <csv>` | Zahrne pouze konkrétní přípony, například `jpg,png,pdf` |
| `--exclude-file-exts <csv>` | Vyloučí konkrétní přípony |
| `--file-status-categories <csv>` | Kategorie souborů: `image,audio,video,document,code,other` |
| `--upload-ip <ip>` | Filtr podle začátku nahrávací IP adresy |
| `--age-ratings <csv>` | Věkové hodnocení: `none,all-ages,r12,r16,r18` |
| `--orientation <csv>` | Filtr orientace; předává se serveru ve stávajících hodnotách |
| `--read-source <csv>` | Filtr zdroje čtení; předává se serveru ve stávajících hodnotách |
| `--access-status <normal\|blocked>` | Stav veřejného přístupu |
| `--min-width <n>` | Minimální šířka |
| `--max-width <n>` | Maximální šířka |
| `--min-height <n>` | Minimální výška |
| `--max-height <n>` | Maximální výška |
| `--min-file-size <mb>` | Minimální velikost souboru; používá stávající serverový parametr v MB |
| `--max-file-size <mb>` | Maximální velikost souboru; používá stávající serverový parametr v MB |

### Příklady správy souborů

Hledání PDF:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --search "pdf" `
  --file-status-categories "document" `
  --count 20
```

Filtrování podle nahrávací IP adresy a kanálu:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --upload-ip "103.62" `
  --channel yandex `
  --channel-scope primary
```

Uložení úplného výsledku:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --count 100 `
  --output json `
  --save-response ".\files.json"
```

## Výpis správy uživatelů

Výpis statistik nahrávání podle uživatele nebo IP:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --count 20
```

Hledání IP adresy nebo adresy:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --search "43.198.183.56"
```

Zobrazení souborů nahraných z konkrétní IP adresy:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --user-detail `
  --ip "43.198.183.56" `
  --count 20
```

Výpis IP adres se zakázaným nahráváním:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --blocked-ips
```

### Parametry správy uživatelů

| Parametr | Popis |
| --- | --- |
| `--users` | Vypíše statistiky nahrávání podle uživatele nebo IP |
| `--user-detail` | Zobrazí soubory nahrané z konkrétní IP adresy |
| `--blocked-ips` | Vypíše IP adresy se zakázaným nahráváním |
| `--ip <ip>` | Povinné pro `--user-detail` |
| `--start <n>` | Posun stránkování |
| `--count <n>` | Počet vrácených záznamů |
| `--sort <value>` | Řazení: `timeDesc`, `timeAsc`, `countDesc`, `countAsc`, `totalSizeDesc`, `totalSizeAsc` |
| `--search <text>` | Hledání IP adresy nebo adresy |
| `--upload-status <allowed\|blocked>` | Zda je nahrávání povolené |
| `--start-time <ms>` | Začátek statistického období jako časové razítko v milisekundách |
| `--end-time <ms>` | Konec statistického období jako časové razítko v milisekundách |
| `--file-status-categories <csv>` | Filtr kategorie souborů |
| `--age-ratings <csv>` | Filtr věkového hodnocení |
| `--min-file-size <mb>` | Minimální velikost souboru |
| `--max-file-size <mb>` | Maximální velikost souboru |
| `--list-type <csv>` | Typ seznamu, běžně `None,White,Block` |
| `--access-status <normal\|blocked>` | Stav veřejného přístupu |

### Příklady správy uživatelů

Výpis uživatelů se zakázaným nahráváním:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --upload-status blocked
```

Hledání podle slova v adrese:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --search "Hong Kong"
```

Řazení podle počtu nahrání:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --sort countDesc `
  --count 50
```

## Seznam nahrávacích kanálů

Výpis konfigurace nahrávacích kanálů bez citlivých údajů:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --channels
```

Vrácená data obsahují:

| Pole | Popis |
| --- | --- |
| `type` | Typ hlavního nahrávacího kanálu, například `github`, `s3` nebo `yandex` |
| `name` | Název podkanálu nebo účtu |
| `enabled` | Zda je povolený |
| `load_balance_enabled` | Zda je pro tento typ kanálu zapnuté vyvažování zátěže |
| `quota_enabled` | Zda je zapnutá kontrola kapacity |
| `quota_limit_bytes` | Limit kapacity |
| `quota_used_bytes` | Použitá kapacita |
| `quota_checked_at` | Čas kontroly kapacity |
| `tag_json` | Necitlivé štítky, například veřejný repozitář nebo soukromý repozitář |
| `created_at` / `updated_at` | Čas vytvoření a aktualizace |

Toto rozhraní nevrací tajné klíče, obnovovací tokeny, dočasné tokeny, hesla ani jinou citlivou konfiguraci.

## Tabulka statistik složek

Výpis statistik složek:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --directories `
  --limit 20
```

Výpis úplných cest složek a hledání podle předpony:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --directories `
  --scope full `
  --search-prefix "test" `
  --include-parents `
  --limit 10
```

### Parametry statistik složek

| Parametr | Popis |
| --- | --- |
| `--directories` | Vypíše tabulku statistik složek |
| `--dir <path>` | Složka, od které výpis začne |
| `--scope <direct\|full>` | `direct` vypíše jen přímé podsložky, `full` vypíše úplné cesty |
| `--search-prefix <path>` | Hledání podle předpony složky |
| `--include-parents` | V režimu `full` zahrne také nadřazené složky |
| `--limit <n>` | Počet vrácených záznamů; serverové maximum je `100` |
| `--cursor <path>` | Kurzor další stránky |

## Formát výstupu

Výchozí výstup `pretty` se hodí pro ruční čtení:

```powershell
node imgbed-token-list.mjs --base-url "https://your-domain" --token "your API Token" --users --count 5
```

Pro zpracování jiným programem použijte `--output json`:

```powershell
node imgbed-token-list.mjs --base-url "https://your-domain" --token "your API Token" --users --count 5 --output json
```

Lze uložit také úplný výsledek:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --count 5 `
  --output json `
  --save-response ".\users.json"
```

## Časté otázky

### Mění tento skript data?

Ne. Tento skript volá pouze čtecí rozhraní. Nenahrává, nemaže, nepřesouvá, neupravuje konfiguraci a nezakazuje ani nepovoluje nahrávání z žádné IP adresy.

### Proč je potřeba oprávnění `list`?

Výpis správy souborů, výpis správy uživatelů, seznamy kanálů bez citlivých údajů i statistiky složek jsou čtecí funkce, takže stačí oprávnění `list` v API Token.

### Jak zjistit všechny dostupné parametry?

Spusťte:

```powershell
node imgbed-token-list.mjs --help
```

Skript vypíše všechny akce a parametry.


