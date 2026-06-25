# Správa souborů pomocí API Token

Správa souborů pomocí API Token je určená pro skripty, automatizační úlohy a externí administrační panely. Používá oprávnění `manage` a bez otevření administrace umožňuje upravit informace o souborech, přesouvat soubory, přejmenovávat soubory, vytvářet zástupné soubory složek, upravovat tagy a stav seznamu, zablokovat nebo znovu povolit nahrávací IP adresu a vytvářet nebo mazat krátkodobé nahrávací Tokeny.

Tento skript řeší jen lehké akce ve správě souborů a správě uživatelů. Nahrávání, výpis, mazání, nastavení nahrávání, nastavení webu a federační vztahy dál používají vlastní specializované skripty.

![Upravit API Token](../../image/Safety/apitoken/编辑管理权限api.png)

## Příprava

V administraci otevřete:

System Settings -> Security Settings -> API Token

Při vytvoření nebo úpravě API Token zkontrolujte, že Token má povolenou správu. Oprávnění `manage` může měnit stav souborů, stav nahrávání uživatelů a vytvářet krátkodobé nahrávací Tokeny, proto ho dávejte jen důvěryhodným skriptům nebo uživatelům.

Zápisové operace ve skriptu pro správu souborů jsou ve výchozím stavu jen náhled a nic se skutečně neuloží. Po kontrole náhledu přidejte `--apply`, aby se zápis provedl.

Token lze zadat také proměnnou prostředí:

```powershell
$env:IMGBED_API_TOKEN="your API Token"
```

## Stažení skriptu

| Skript | Účel |
| --- | --- |
| <a href="/tools/imgbed-token-manage.mjs" download>Stáhnout skript pro správu souborů</a> | Metadata souborů, moderační štítky, tagy souborů, stav seznamu, přesun, přejmenování, vytváření složek, blokování/obnovení IP a vytváření nebo mazání krátkodobých nahrávacích Tokenů |

Na místním počítači je potřeba Node.js 18 nebo novější.

## Hranice funkcí

| Možnost | Skript | Oprávnění |
| --- | --- | --- |
| Nahrávání souborů | `imgbed-token-single-upload.mjs` / `imgbed-token-chunk-upload.mjs` | `upload` |
| Výpis souborů, filtrování souborů a čtení statistik uživatelů | `imgbed-token-list.mjs` | `list` |
| Mazání výslovně určených souborů | `imgbed-token-delete.mjs` | `delete` |
| Úprava informací o souborech, tagů a seznamů, přesun, přejmenování, vytváření složek, blokování IP a vytváření nebo mazání krátkodobých nahrávacích Tokenů | `imgbed-token-manage.mjs` | `manage` |
| Úprava nahrávacích kanálů, zabezpečení, nastavení stránek, dalších nastavení a federačních vztahů | Skripty pro správu konfigurace | `manage` |

`imgbed-token-manage.mjs` nenahrává soubory, nevypisuje soubory a nemaže soubory. Pokud potřebujete najít `fileId`, nejprve použijte skript pro výpis a soubory vyfiltrujte. Pokud potřebujete soubor smazat, předejte konkrétní `fileId` skriptu pro mazání.

## Obecné parametry

| Parametr | Povinné | Popis |
| --- | --- | --- |
| `--base-url <url>` | Ano | Adresa webu ImgBed, například `https://image.ai6.me` |
| `--token <token>` | Ano | API Token; lze použít také proměnnou prostředí `IMGBED_API_TOKEN` |
| `--retries <n>` | Ne | Počet opakování při dočasné chybě; výchozí hodnota `3` |
| `--timeout-ms <n>` | Ne | Časový limit jednoho požadavku; výchozí hodnota `180000` |
| `--output <pretty\|json>` | Ne | Formát výstupu; výchozí hodnota `pretty`; pro zpracování programem použijte `json` |
| `--save-response <path>` | Ne | Uloží konečný výsledek do souboru JSON |
| `--batch-size <n>` | Ne | Počet položek zpracovaných jedním dávkovým požadavkem; výchozí hodnota `15`, maximum `15` |
| `--apply` | Ne | Skutečně provede zápis; bez něj se zobrazí jen náhled |
| `-h` / `--help` | Ne | Zobrazí nápovědu skriptu |

## Nejprve ověřte fileId

Většina akcí ve skriptu pro správu souborů vyžaduje `fileId`. Nejprve ho můžete zjistit skriptem pro výpis:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --dir "test4" `
  --count 10 `
  --output json
```

Pole `name` ve vráceném výsledku je obvykle `fileId`, které lze předat skriptu pro správu souborů.

## Metadata souboru

Metadata souboru slouží ke změně zobrazovaného názvu souboru a zdroje čtení ve správě souborů v administraci.

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-metadata `
  --file-id "photos/2026/a.jpg" `
  --file-name "cover.jpg" `
  --read-source backup
```

Po kontrole náhledu změnu uložte:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-metadata `
  --file-id "photos/2026/a.jpg" `
  --file-name "cover.jpg" `
  --read-source backup `
  --apply
```

### Parametry metadat souboru

| Parametr | Popis |
| --- | --- |
| `--set-metadata` | Změní metadata jednoho souboru |
| `--file-id <id>` | ID souboru, který se má změnit |
| `--file-name <name>` | Nový zobrazovaný název v administraci |
| `--read-source <primary\|backup>` | Zdroj čtení. `primary` je hlavní zdroj, `backup` je záložní zdroj |

Zadejte alespoň jeden parametr: `--file-name` nebo `--read-source`.

## Moderační štítky

Moderační štítky odpovídají věkovému hodnocení souboru. Aktuální štítek můžete nejprve přečíst a potom ho změnit.

Přečtení moderačního štítku:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-label `
  --file-id "photos/2026/a.jpg"
```

Nastavení moderačního štítku:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-label `
  --file-id "photos/2026/a.jpg" `
  --label r12 `
  --apply
```

### Parametry moderačních štítků

| Parametr | Popis |
| --- | --- |
| `--get-label` | Přečte moderační štítek jednoho souboru |
| `--set-label` | Změní moderační štítek jednoho souboru |
| `--file-id <id>` | ID souboru |
| `--label <value>` | Hodnota štítku: `all-ages`, `r12`, `r16`, `r18`, `None` |

## Tagy souborů

Tagy souborů slouží k přidání vyhledatelných pracovních značek k souborům. Skript podporuje čtení, přepsání, přidání a odebrání tagů a také dávkové zpracování více souborů.

Přečtení tagů souboru:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-tags `
  --file-id "photos/2026/a.jpg"
```

Přidání tagů:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --add-tags `
  --file-id "photos/2026/a.jpg" `
  --tag "cover" `
  --tag "2026" `
  --apply
```

Odebrání tagů:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --remove-tags `
  --file-id "photos/2026/a.jpg" `
  --tag "cover" `
  --apply
```

Přepsání tagů:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-tags `
  --file-id "photos/2026/a.jpg" `
  --tag "archive" `
  --tag "public" `
  --apply
```

Dávkové přidání tagů:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --batch-tags `
  --file-id "photos/2026/a.jpg" `
  --file-id "photos/2026/b.jpg" `
  --tag-action add `
  --tag "batch-test" `
  --apply
```

### Parametry tagů souborů

| Parametr | Popis |
| --- | --- |
| `--get-tags` | Přečte tagy jednoho souboru |
| `--set-tags` | Přepíše tagy jednoho souboru |
| `--add-tags` | Přidá tagy k jednomu souboru |
| `--remove-tags` | Odebere tagy z jednoho souboru |
| `--batch-tags` | Nastaví, přidá nebo odebere tagy dávkově |
| `--file-id <id>` | ID souboru; u dávkových akcí lze předat vícekrát |
| `--tag <tag>` | Hodnota tagu; lze předat vícekrát |
| `--tags-json <path>` | Přečte pole tagů ze souboru JSON |
| `--tag-action <set\|add\|remove>` | Dávková akce pro tagy |

Příklad obsahu souboru `--tags-json`:

```json
["cover", "2026", "public"]
```

## Stav černé a bílé listiny

Stav seznamu určuje chování řízení přístupu k souboru v režimu veřejného přístupu. Lze ho změnit pro jeden soubor nebo dávkově.

Nastavení jednoho souboru na bílou listinu:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-list-type `
  --file-id "photos/2026/a.jpg" `
  --list-type White `
  --apply
```

Dávkové přidání na černou listinu:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --batch-list-type `
  --file-id "photos/2026/a.jpg" `
  --file-id "photos/2026/b.jpg" `
  --list-type Block `
  --apply
```

Obnovení výchozího stavu seznamu:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-list-type `
  --file-id "photos/2026/a.jpg" `
  --list-type None `
  --apply
```

### Parametry černé a bílé listiny

| Parametr | Popis |
| --- | --- |
| `--set-list-type` | Změní stav seznamu jednoho souboru |
| `--batch-list-type` | Dávkově změní stav seznamu souborů. Jeden požadavek zpracuje nejvýše `15` souborů |
| `--file-id <id>` | ID souboru; u dávkových akcí lze předat vícekrát |
| `--list-type <None\|White\|Block>` | `None` je výchozí stav, `White` je bílá listina a `Block` je černá listina |

## Přesouvání souborů

Přesun souborů přesune jeden nebo více souborů do cílové složky. Backend zpracuje nejvýše `15` souborů v jednom požadavku. Skript práci automaticky rozdělí podle `--batch-size` a požadavky provede postupně.

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --move `
  --file-id "photos/2026/a.jpg" `
  --file-id "photos/2026/b.jpg" `
  --target-path "archive/2026" `
  --apply
```

### Parametry přesunu

| Parametr | Popis |
| --- | --- |
| `--move` | Přesune soubory |
| `--file-id <id>` | ID souboru k přesunu; lze předat vícekrát |
| `--target-path <dir>` | Cílová složka |
| `--batch-size <n>` | Počet souborů přesunutých jedním požadavkem; výchozí hodnota `15`, maximum `15` |

## Přejmenování nebo změna cesty

Přejmenování používá výslovné staré ID souboru a nové ID souboru. Nové ID může změnit jen název souboru nebo současně změnit i složku.

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --rename `
  --old-file-id "photos/2026/a.jpg" `
  --new-file-id "photos/2026/a-renamed.jpg" `
  --apply
```

Při dávkovém přejmenování opakovaně předávejte `--old-file-id` a `--new-file-id`:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --rename `
  --old-file-id "photos/2026/a.jpg" `
  --new-file-id "archive/2026/a.jpg" `
  --old-file-id "photos/2026/b.jpg" `
  --new-file-id "archive/2026/b.jpg" `
  --apply
```

Mapování lze zapsat také do souboru JSON:

```json
[
  {
    "oldFileId": "photos/2026/a.jpg",
    "newFileId": "archive/2026/a.jpg"
  },
  {
    "oldFileId": "photos/2026/b.jpg",
    "newFileId": "archive/2026/b.jpg"
  }
]
```

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --rename `
  --items-json ".\rename-items.json" `
  --apply
```

### Parametry přejmenování

| Parametr | Popis |
| --- | --- |
| `--rename` | Přejmenuje nebo změní cesty podle výslovného mapování |
| `--old-file-id <id>` | Původní ID souboru; lze předat vícekrát |
| `--new-file-id <id>` | Nové ID souboru; lze předat vícekrát a počet musí odpovídat `--old-file-id` |
| `--items-json <path>` | Pole JSON. Každá položka má tvar `{ "oldFileId": "...", "newFileId": "..." }` |
| `--batch-size <n>` | Počet přejmenování zpracovaných jedním požadavkem; výchozí hodnota `15`, maximum `15` |

## Vytváření složek

Složky v ImgBed vycházejí z cest souborů, takže skutečné prázdné složky neexistují. Když skript vytvoří složku, vytvoří v cílové složce zástupný soubor `0.md`, aby se složka zobrazila ve správě souborů a ve statistikách složek.

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --create-folder `
  --parent-directory "photos" `
  --folder-name "2026" `
  --apply
```

### Parametry vytvoření složky

| Parametr | Popis |
| --- | --- |
| `--create-folder` | Vytvoří zástupný soubor složky |
| `--parent-directory <dir>` | Nadřazená složka; pro kořenovou složku předejte prázdný řetězec |
| `--folder-name <name>` | Název nové složky |

## Blokování a obnovení nahrávací IP adresy

Oprávnění ke správě může přidat IP adresu na seznam zakázaného nahrávání nebo ji ze seznamu odebrat. Tato akce ovlivní budoucí nahrávání z dané IP adresy, ale nesmaže soubory, které už z této IP adresy byly nahrány.

Zablokování nahrávací IP adresy:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --block-ip "67.159.48.149" `
  --apply
```

Obnovení nahrávací IP adresy:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --allow-ip "67.159.48.149" `
  --apply
```

Zobrazení aktuálního seznamu IP adres se zakázaným nahráváním:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --blocked-ips
```

### Parametry správy IP

| Parametr | Popis |
| --- | --- |
| `--block-ip <ip>` | Přidá IP adresu na seznam zakázaného nahrávání |
| `--allow-ip <ip>` | Odebere IP adresu ze seznamu zakázaného nahrávání |

## Vytváření a mazání krátkodobých nahrávacích Tokenů

Oprávnění ke správě může vytvářet krátkodobé Tokeny určené pouze pro nahrávání. Takový Token má vždy jen oprávnění `upload`, `autoDelete` je vždy `true` a nejdelší doba platnosti je `1` den.

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --create-upload-token `
  --name "Temporary Upload Token" `
  --owner "upload-bot" `
  --default-upload-channel telegram `
  --expires-in-minutes 20 `
  --apply `
  --output json
```

Lze také předat přímo časové razítko v milisekundách:

```powershell
$expiresAt = [DateTimeOffset]::UtcNow.AddHours(12).ToUnixTimeMilliseconds()

node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --create-upload-token `
  --name "Upload Token valid for one day" `
  --owner "upload-bot" `
  --default-upload-channel telegram `
  --expires-at $expiresAt `
  --apply
```

Při mazání krátkodobého nahrávacího Tokenu je nutné předat `id` vrácené rozhraním pro vytvoření. Správcovský Token může smazat jen Tokeny splňující tyto podmínky:

| Podmínka | Požadavek |
| --- | --- |
| Oprávnění | `permissions` obsahuje jen `upload` |
| Automatické smazání | `autoDelete=true` |
| Doba platnosti | `expiresAt - createdAt <= 24` hodin |

Smazání krátkodobého nahrávacího Tokenu:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --delete-upload-token `
  --token-id "mqt4jqokc85be80d1f0f47078e848a77d6c1aa6e" `
  --apply
```

Správcovský Token nemůže mazat běžné Tokeny, dlouhodobé Tokeny, Tokeny obsahující oprávnění `list` / `delete` / `manage` ani nahrávací Tokeny s platností delší než `1` den. Tyto Tokeny je stále potřeba spravovat v administraci v prohlížeči.

### Parametry krátkodobého nahrávacího Tokenu

| Parametr | Popis |
| --- | --- |
| `--create-upload-token` | Vytvoří krátkodobý Token jen pro nahrávání |
| `--delete-upload-token` | Smaže vyhovující krátkodobý Token jen pro nahrávání |
| `--name <name>` | Název Tokenu |
| `--owner <owner>` | Poznámka k vlastníkovi Tokenu |
| `--default-upload-channel <key>` | Výchozí nahrávací kanál. Musí jít o skutečný kanál, například `telegram`, `s3` nebo `github` |
| `--expires-in-minutes <n>` | Počet minut do vypršení od aktuálního času. Maximum `1440` |
| `--expires-at <ms>` | Absolutní čas vypršení jako časové razítko v milisekundách. Maximum je `24` hodin od aktuálního času |
| `--token-id <id>` | ID krátkodobého nahrávacího Tokenu, který se má smazat |

Krátkodobé nahrávací Tokeny mohou jen nahrávat. V testech byl krátkodobý Token s `permissions=["upload"]` odmítnut při přístupu k rozhraním pro výpis, správu souborů a mazání.

Po vypršení se Tokeny s `autoDelete=true` vyčistí ve chvíli, kdy backend zjistí, že už vypršely. Čtení seznamu API Tokenů také vyčistí vypršelé Tokeny, jejichž `autoDelete` je `true`.

## Přehled rozhraní API

| Akce | Metoda | API |
| --- | --- | --- |
| Změna metadat souboru | `PATCH` | `/api/manage/metadata/{fileId}` |
| Přečtení moderačního štítku | `GET` | `/api/manage/label/{fileId}` |
| Změna moderačního štítku | `POST` | `/api/manage/label/{fileId}` |
| Přečtení tagů souboru | `GET` | `/api/manage/tags/{fileId}` |
| Změna tagů souboru | `POST` | `/api/manage/tags/{fileId}` |
| Dávková změna tagů souboru | `POST` | `/api/manage/tags/batch` |
| Změna stavu seznamu | `POST` | `/api/manage/listType/{fileId}` |
| Dávková změna stavu seznamu | `POST` | `/api/manage/listType/batch` |
| Přesun nebo přejmenování | `POST` | `/api/manage/relocate/batch` |
| Vytvoření složky | `POST` | `/api/manage/folder/create` |
| Zablokování nahrávací IP adresy | `POST` | `/api/manage/cusConfig/blockip` |
| Obnovení nahrávací IP adresy | `POST` | `/api/manage/cusConfig/whiteip` |
| Vytvoření krátkodobého nahrávacího Tokenu | `POST` | `/api/manage/apiTokens` |
| Smazání krátkodobého nahrávacího Tokenu | `DELETE` | `/api/manage/apiTokens?id={tokenId}` |

Skript automaticky přidá:

```text
Authorization: Bearer your API Token
```

## Formát výstupu

Výchozí výstup `pretty` je vhodný pro čtení člověkem. Pokud má výsledek zpracovat jiný program, použijte `--output json`:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-tags `
  --file-id "photos/2026/a.jpg" `
  --output json
```

Lze uložit také celý výsledek:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-tags `
  --file-id "photos/2026/a.jpg" `
  --output json `
  --save-response ".\manage-result.json"
```

Dávkový přesun, dávkové přejmenování a dávkové akce se seznamy zpracují proud průběhu NDJSON vrácený backendem a shrnou počet událostí, stav dokončení a podrobnosti o chybách.

## Časté otázky

### Proč příkaz nic nezměnil

Zápisové akce jsou ve výchozím stavu jen náhled. Po kontrole náhledu přidejte `--apply`, aby se změna skutečně uložila.

### Může tento skript nahrávat, vypisovat nebo mazat soubory

Ne. Pro nahrávání použijte nahrávací skripty, pro výpis a filtrování skript pro výpis a pro mazání konkrétních souborů skript pro mazání. Skript pro správu souborů řeší jen lehké akce s oprávněním `manage`.

### Jak zjistím, které fileId mám předat

Nejprve vyhledejte soubory pomocí `imgbed-token-list.mjs --files`. Pole `name` ve výsledku je obvykle ID souboru, tedy hodnota pro `--file-id`.

### Kolik souborů může dávková operace zpracovat najednou

Backend zpracuje nejvýše `15` souborů v jednom požadavku. Skript má výchozí hodnotu `--batch-size 15`; pokud zadáte menší hodnotu, automaticky rozdělí práci do více po sobě jdoucích požadavků.

### Lze vytvořit skutečně prázdnou složku

Složky ImgBed jsou odvozené z cest souborů, takže skutečné prázdné složky neexistují. `--create-folder` vytvoří zástupný soubor složky `0.md`, aby se složka zobrazila ve správě souborů a ve statistikách složek.

### Jak dlouho může platit krátkodobý nahrávací Token

Nejvýše `1` den, tedy `1440` minut. Pokud čas překročí tento limit, skript ho odmítne lokálně a backend vrátí `API_TOKEN_MANAGE_CREATE_EXPIRES_AT_TOO_LONG`.

### Smaže se krátkodobý nahrávací Token po vypršení automaticky

Vyčistí se automaticky, ale nejde o okamžitou plánovanou úlohu. Vypršelý Token se vyčistí, když je znovu ověřen. Čtení seznamu API Tokenů také vyčistí vypršelé Tokeny s `autoDelete=true`.
