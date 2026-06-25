# Správa konfigurace pomocí API Token

Správa přes API Token je určená pro automatizační skripty, provozní nástroje a externí ovládací panely. API Token s oprávněním `manage` může bez otevření administrace v prohlížeči číst a měnit konfiguraci nahrávacích kanálů, zabezpečení, stránek, dalších nastavení a některých lehkých federačních vztahů.

Toto oprávnění pokrývá jen lehké operace vhodné pro skripty. Operace vyžadující potvrzení v prohlížeči, dlouhé dávkové úlohy ve webovém rozhraní nebo čištění federačních indexů zůstávají v administraci v prohlížeči.

![Upravit API Token](../../image/Safety/apitoken/编辑api%20token.png)

## Příprava

V administraci otevřete:

```text
System Settings -> Security Settings -> API Token
```

Při vytvoření nebo úpravě API Token zapněte oprávnění ke správě. Toto oprávnění může měnit konfiguraci webu, proto ho dávejte jen důvěryhodným skriptům nebo uživatelům.

Všechny tři správcovské skripty zapisují ve výchozím stavu pouze jako náhled. Skutečné uložení proběhne až po přidání `--apply`.

API Token lze zadat také proměnnou prostředí:

```powershell
$env:IMGBED_API_TOKEN="your API Token"
```

## Stažení správcovských skriptů

Dokumentace ImgBed obsahuje tři skripty pro Node.js:

| Skript | Účel |
| --- | --- |
| <a href="/tools/imgbed-token-upload-settings.mjs" download>Stáhnout skript pro správu nahrávacích nastavení</a> | Správa nahrávacích kanálů, podkanálů a vyvažování zátěže |
| <a href="/tools/imgbed-token-site-settings.mjs" download>Stáhnout skript pro správu nastavení webu</a> | Správa zabezpečení, nastavení stránek a dalších nastavení |
| <a href="/tools/imgbed-token-federation.mjs" download>Stáhnout skript pro správu federačních vztahů</a> | Správa lehkých vztahových akcí, žádostí o připojení a zpráv |

Na místním počítači je potřeba Node.js 18 nebo novější.

### Společné parametry

| Parametr | Povinné | Popis |
| --- | --- | --- |
| `--base-url <url>` | Ano | Adresa webu ImgBed, například `https://image.ai6.me` |
| `--token <token>` | Ano | API Token; lze použít také proměnnou prostředí `IMGBED_API_TOKEN` |
| `--retries <n>` | Ne | Počet opakování při dočasné chybě; výchozí hodnota `3` |
| `--timeout-ms <n>` | Ne | Časový limit každého požadavku v milisekundách; výchozí hodnota `180000` |
| `--output <pretty\|json>` | Ne | Formát výstupu; výchozí hodnota `pretty`, pro zpracování programem použijte `json` |
| `--save-response <path>` | Ne | Uloží konečný výsledek do souboru JSON |
| `--apply` | Ne | Skutečně provede zápis; bez něj se zobrazí jen náhled |
| `-h` / `--help` | Ne | Zobrazí nápovědu skriptu |

## Nastavení nahrávání

Skript pro nastavení nahrávání umí vypsat, přečíst, vytvořit, upravit a smazat podkanál. Umí také zapnout nebo vypnout vyvažování zátěže pro hlavní kanál.

```powershell
node imgbed-token-upload-settings.mjs --base-url "https://your-domain" --token "your API Token" --list
```

### Parametry nastavení nahrávání

| Parametr | Popis |
| --- | --- |
| `--list` | Vypíše skupiny nastavení nahrávání |
| `--get` | Přečte hlavní kanál nebo konkrétní podkanál pod ním |
| `--upsert` | Vytvoří nebo upraví podkanál; bez `--apply` jen zobrazí náhled |
| `--delete` | Smaže podkanál; bez `--apply` jen zobrazí náhled |
| `--load-balance <true\|false>` | Zapne nebo vypne vyvažování zátěže pro hlavní kanál |
| `--channel <key>` | Hlavní nahrávací kanál, například `s3`, `github`, `telegram` |
| `--channel-name <name>` | Název podkanálu nebo účtu |
| `--set key=value` | Nastaví jedno pole; lze opakovat a podporuje tečkovanou cestu |
| `--patch-json <path>` | Sloučí více polí ze souboru JSON |
| `--apply` | Skutečně uloží změnu |

### Klíče kanálů

| Klíč kanálu | Kanál |
| --- | --- |
| `telegram` / `tg` | Telegram |
| `discord` / `dc` | Discord |
| `cfr2` / `r2` | Cloudflare R2 |
| `s3` | S3 |
| `webdav` / `wd` | Úložiště WebDAV |
| `github` / `gh` | GitHub Releases |
| `gitlab` / `gl` | GitLab Packages |
| `huggingface` / `hf` | Hugging Face |
| `onedrive` / `od` | OneDrive |
| `googledrive` / `google` / `gd` | Google Drive |
| `dropbox` / `db` | Dropbox |
| `yandex` / `yx` | Yandex Disk |
| `pcloud` / `pd` | pCloud |

### Příklady nastavení nahrávání

Vypsání všech nahrávacích nastavení:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --list
```

Přečtení konfigurace kanálu S3:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get `
  --channel s3
```

Přečtení konkrétního podkanálu pod S3:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get `
  --channel s3 `
  --channel-name "backup-s3"
```

Vytvoření nebo úprava podkanálu WebDAV. Nejprve spusťte bez `--apply` a zkontrolujte náhled:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --upsert `
  --channel webdav `
  --channel-name "backup-webdav" `
  --set enabled=false `
  --set remark="backup test"
```

Po kontrole spusťte stejný příkaz s `--apply`:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --upsert `
  --channel webdav `
  --channel-name "backup-webdav" `
  --set enabled=false `
  --set remark="backup test" `
  --apply
```

Smazání podkanálu:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --delete `
  --channel webdav `
  --channel-name "backup-webdav" `
  --apply
```

Zapnutí vyvažování zátěže pro S3:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --load-balance true `
  --channel s3 `
  --apply
```

U složitějších úprav můžete nejprve připravit soubor JSON a předat ho přes `--patch-json`:

```json
{
  "enabled": true,
  "remark": "primary account"
}
```

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --upsert `
  --channel s3 `
  --channel-name "primary-s3" `
  --patch-json ".\s3-channel.json" `
  --apply
```

## Ostatní nastavení webu

Skript pro nastavení webu spravuje tři oblasti:

| Oblast | Hodnota `--area` | Popis |
| --- | --- | --- |
| Zabezpečení | `security` | Ověření uživatele a administrátora, přihlašovací zařízení, API Token, kontrola obrázků, omezení četnosti požadavků, WebDAV |
| Stránky | `page` | Globální stránka, uživatelská stránka, administrační stránka a vizuální efekty |
| Další nastavení | `others` | Rozhraní náhodných obrázků, veřejná galerie, místní federační uzel, automatické štítky, poloha podle IP, zálohování, OCR |

Nejdříve si vypište podporované oblasti, sekce a pole:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --list-sections
```

### Parametry nastavení webu

| Parametr | Popis |
| --- | --- |
| `--list-sections` | Vypíše upravitelné oblasti, sekce a pole |
| `--get` | Přečte jednu sekci konfigurace |
| `--area <security\|page\|others>` | Vybere oblast konfigurace |
| `--section <name>` | Vybere sekci; použijte název uvedený ve výstupu `--list-sections` |
| `--set key=value` | Nastaví jedno pole; lze opakovat |
| `--apply` | Skutečně uloží změnu |

V oblasti `page` používá `--set` identifikátor položky stránky, například `starsEffect=true`. V oblastech `security` a `others` se používá název pole v dané sekci, například `email=admin@example.com`.

### Příklady nastavení webu

Přečtení nastavení oznámení o aktualizaci systému:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get `
  --area security `
  --section systemUpdate
```

Změna e-mailu pro oznámení o aktualizaci systému. Nejprve spusťte bez `--apply` a zkontrolujte náhled:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --area security `
  --section systemUpdate `
  --set email="admin@example.com"
```

Po kontrole spusťte s `--apply`:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --area security `
  --section systemUpdate `
  --set email="admin@example.com" `
  --apply
```

Zapnutí hvězdného efektu na administrační stránce:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --area page `
  --section adminSettings `
  --set starsEffect=true `
  --apply
```

Změna jazyka pro určování polohy podle IP:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --area others `
  --section ipGeolocation `
  --set language="en" `
  --apply
```

Běžná pole místního federačního uzlu, například stav zapnutí, synchronizační složky a pozvánkové kódy, lze číst a měnit. Potvrzení domény se přes API Token neprovádí; pokud uložená doména místního uzlu neodpovídá aktuální přístupové doméně, potvrďte ji v administraci v prohlížeči.

## Federační vztahy

Federační skript spravuje stav místního uzlu, uzly, ke kterým jste se připojili, uzly připojené k vám, zprávy, žádosti o připojení, opakovanou žádost u záznamu bez vztahu, přijetí, odmítnutí a lehké akce, které nepotřebují čištění indexů.

Publikování indexů, stahování indexů, hromadné mazání indexů a potvrzení změny domény závisí na úplném postupu v prohlížeči, proto je skript neprovádí.

### Co skript podporuje

| Operace | Podpora | Popis |
| --- | --- | --- |
| Zobrazení stavu místního uzlu a seznamu vztahů | Podporováno | Pouze čte záznam vztahů |
| Čtení zpráv a odeslání zprávy | Podporováno | Čte a zapisuje zprávy vztahu |
| Žádost o připojení k jinému uzlu | Podporováno | Odesílá žádost přes pozvánkový odkaz |
| Opakovaná žádost u záznamu bez vztahu | Podporováno | Pouze karta `outgoing` s `lastResult=none`; vyžaduje šestimístný pozvánkový kód |
| Zrušení čekající žádosti `outgoing` | Podporováno | Ruší jen čekající žádost |
| Přijetí nebo odmítnutí žádosti `incoming` | Podporováno | Zpracuje žádost doručenou vašemu uzlu |
| Odstranění přijatého vztahu `incoming` | Podporováno | Upraví příchozí záznam vztahu a upozorní druhou stranu |
| Smazání konečného záznamu `incoming` | Podporováno | Smaže příchozí záznam v konečném stavu |
| Zrušení přijatého odběru `outgoing` | Pouze v prohlížeči | Může vyžadovat vyčištění místního federačního indexu |
| Smazání konečného záznamu `outgoing` | Pouze v prohlížeči | Může vyžadovat nejprve vyčištění indexu |
| Potvrzení nebo zrušení změny domény | Pouze v prohlížeči | Vyžaduje potvrzení aktuální domény a práci s indexovými vztahy |
| Publikování, stažení nebo hromadné mazání indexů | Pouze v prohlížeči | Jde o dávkovou úlohu webového rozhraní |

### Parametry federačních vztahů

| Parametr | Popis |
| --- | --- |
| `--status` | Zobrazí stav místního federačního uzlu, uzly připojené vámi a uzly připojené k vám |
| `--list` | Vypíše seznam vztahů |
| `--chat` | Přečte uložené zprávy konkrétního vztahu |
| `--send-message` | Odešle zprávu uzlu s navázaným vztahem |
| `--join` | Požádá o připojení k jinému uzlu přes pozvánkový odkaz |
| `--reapply` | Znovu požádá u záznamu bez vztahu; vyžaduje šestimístný pozvánkový kód |
| `--accept` | Přijme žádost o připojení doručenou vašemu uzlu |
| `--deny` | Odmítne žádost o připojení doručenou vašemu uzlu |
| `--cancel` | Zruší čekající žádost `outgoing`, nebo odstraní přijatý vztah `incoming` |
| `--delete` | Smaže záznam `incoming` v konečném stavu |
| `--direction <outgoing\|incoming\|all>` | Směr vztahu; `outgoing` jsou uzly, ke kterým jste se připojili, `incoming` jsou uzly připojené k vám |
| `--domain <url>` | Doména uzlu ve vztahu |
| `--invite-link <url>` | Pozvánkový odkaz druhého uzlu |
| `--invite-code <code>` | Šestimístný pozvánkový kód pro opakovanou žádost |
| `--text <message>` | Text zprávy |
| `--apply` | Skutečně uloží změnu |

### Příklady federačních vztahů

Zobrazení stavu místního uzlu a obou seznamů vztahů:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --status
```

Zobrazení jen uzlů, ke kterým jste se připojili:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --list `
  --direction outgoing
```

Zobrazení jen uzlů připojených k vám:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --list `
  --direction incoming
```

Žádost o připojení přes pozvánkový odkaz. Nejprve spusťte bez `--apply` a zkontrolujte náhled:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --join `
  --invite-link "https://peer-domain/federation/invite/abcdef"
```

Po kontrole spusťte s `--apply`:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --join `
  --invite-link "https://peer-domain/federation/invite/abcdef" `
  --apply
```

Opakovaná žádost u záznamu bez vztahu:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --reapply `
  --domain "https://peer-domain" `
  --invite-code "abc123" `
  --apply
```

Přijetí žádosti doručené vašemu uzlu:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --accept `
  --domain "https://peer-domain" `
  --apply
```

Odmítnutí žádosti doručené vašemu uzlu:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --deny `
  --domain "https://peer-domain" `
  --apply
```

Odeslání zprávy uzlu s navázaným vztahem:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --send-message `
  --direction outgoing `
  --domain "https://peer-domain" `
  --text "Hello, this is a test message." `
  --apply
```

Zrušení čekající žádosti `outgoing`:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --cancel `
  --direction outgoing `
  --domain "https://peer-domain" `
  --apply
```

Odstranění přijatého vztahu `incoming`:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --cancel `
  --direction incoming `
  --domain "https://peer-domain" `
  --apply
```

Smazání konečného záznamu `incoming`:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --delete `
  --direction incoming `
  --domain "https://peer-domain" `
  --apply
```

Zrušení přijatého odběru `outgoing` a smazání záznamu `outgoing` proveďte v administraci v prohlížeči, protože před tím může být nutné vyčistit místní federační index.

### Neshoda domény

Pokud uložená doména místního uzlu neodpovídá doméně čekající ve vztahu, skript okamžitě vrátí chybu a zobrazí `currentDomain` a `pendingDomain`. Tuto situaci je nutné řešit v administraci v prohlížeči, protože změna domény souvisí s čištěním a potvrzením odchozích indexů.

Pokud druhá strana při žádosti o připojení vrátí `FEDERATION_NODE_DOMAIN_MISMATCH`, znamená to, že doména v pozvánkovém odkazu neodpovídá doméně uložené v jejím místním uzlu. Rozhraní vrátí `currentOrigin` a `detectedOrigin`. Použijte potvrzenou doménu druhé strany, nebo ji požádejte, aby doménu potvrdila v administraci v prohlížeči.

## Časté otázky

### Spustil jsem příkaz, ale změna se neprojevila

Příkazy pro zápis ve výchozím stavu jen zobrazují náhled. Po kontrole přidejte `--apply`, aby se změna skutečně uložila.

### Jak zjistím, která pole lze měnit

U nastavení nahrávání nejprve použijte `--get` a podívejte se na strukturu existujícího podkanálu. U zabezpečení, stránek a dalších nastavení použijte `--list-sections`, který vypíše povolené oblasti, sekce a pole.

### Chci výsledek použít v jiném programu

Použijte `--output json`, nebo přidejte `--save-response result.json`. Program může uložený soubor JSON přímo přečíst.


