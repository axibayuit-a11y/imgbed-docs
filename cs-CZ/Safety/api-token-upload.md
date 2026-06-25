# Nahrávání souborů pomocí API Token

Nahrávání přes API Token je určené pro skripty, automatizaci a externí programy. Není nutné otevírat ImgBed v prohlížeči; stačí zadat adresu webu, API Token, cestu k místnímu souboru a skutečný nahrávací kanál. Po úspěšném nahrání skript vrátí odkaz na soubor.

![Upravit API Token](../../image/Safety/apitoken/编辑上传权限api.png)

## Příprava

V administraci otevřete:

```text
System Settings -> Security Settings -> API Token
```

Při vytvoření nebo úpravě API Token zapněte oprávnění k nahrávání a vyberte skutečný výchozí kanál. Nahrávání přes API Token nepoužívá chytré rozdělování, proto ve skriptech neposílejte `__smart__`. Použijte skutečný klíč kanálu, například `s3`, `github` nebo `telegram`.

## Stažení nahrávacích skriptů

Dokumentace ImgBed obsahuje dva skripty pro Node.js:

| Skript | Účel |
| --- | --- |
| <a href="/tools/imgbed-token-single-upload.mjs" download>Stáhnout skript pro nahrání jedním požadavkem</a> | Zavolá `/upload` pouze jednou; hodí se pro malé soubory a zkoušku rozhraní |
| <a href="/tools/imgbed-token-chunk-upload.mjs" download>Stáhnout skript pro nahrávání po částech</a> | Podle kanálu použije nahrávání po částech, přímé nahrávání nebo relaci dané platformy; hodí se pro velké soubory |

Na místním počítači je potřeba Node.js 18 nebo novější.

## Výpis dostupných kanálů

Oba skripty umějí před nahráváním vypsat kanály dostupné pro aktuální API Token:

```powershell
node imgbed-token-single-upload.mjs --base-url "https://your-domain" --token "your API Token" --list-channels
node imgbed-token-chunk-upload.mjs --base-url "https://your-domain" --token "your API Token" --list-channels
```

V tomto režimu není potřeba zadávat `--file` ani `--channel`. Výsledek obsahuje výchozí nahrávací kanál, klíč hlavního kanálu, názvy podkanálů a stav vyvažování zátěže. Tajné klíče, obnovovací tokeny ani citlivá konfigurace se nevracejí.

## Jak zvolit způsob nahrání

| Způsob | Kdy ho použít | Chování |
| --- | --- | --- |
| Nahrání jedním požadavkem | Malý soubor, jednoduchý skript, zkouška rozhraní | Pošle celý soubor jedním požadavkem na `/upload` |
| Nahrávání po částech | Velký soubor nebo soubor náchylný k vypršení času | Podle kanálu použije části, přímé nahrávání nebo relaci platformy |

U velkých souborů nejdříve použijte skript pro nahrávání po částech. Nahrání jedním požadavkem naráží na limit těla požadavku v Cloudflare, paměť Workeru a limity vzdálené platformy.

## Nahrání jedním požadavkem

Tento skript pošle celý soubor do `/upload` v jednom požadavku:

```powershell
node imgbed-token-single-upload.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --file "D:\test\image.png" `
  --channel s3 `
  --folder "photos/2026"
```

API Token lze zadat také proměnnou prostředí:

```powershell
$env:IMGBED_API_TOKEN="your API Token"
node imgbed-token-single-upload.mjs --base-url "https://your-domain" --file "D:\test\image.png" --channel s3
```

### Parametry nahrání jedním požadavkem

| Parametr | Povinné | Popis |
| --- | --- | --- |
| `--base-url <url>` | Ano | Adresa webu ImgBed, například `https://image.ai6.me` |
| `--token <token>` | Ano | API Token; lze použít také proměnnou prostředí `IMGBED_API_TOKEN` |
| `--file <path>` | Ano | Cesta k místnímu souboru |
| `--channel <key>` | Ano | Skutečný nahrávací kanál |
| `--folder <path>` | Ne | Cílová složka, například `photos/2026` nebo `/user/` |
| `--name-type <type>` | Ne | Způsob pojmenování; odpovídá `uploadNameType` na serverové straně, výchozí hodnota je `default` |
| `--channel-name <name>` | Ne | Konkrétní podkanál nebo účet; bez něj server vybere účet podle konfigurace kanálu |
| `--retries <n>` | Ne | Počet opakování při dočasné chybě; výchozí hodnota `3` |
| `--timeout-ms <n>` | Ne | Časový limit jednoho požadavku v milisekundách; výchozí hodnota `180000` |
| `--output <pretty\|json>` | Ne | Formát výstupu; výchozí hodnota `pretty` |
| `--save-response <path>` | Ne | Uloží konečný výsledek do souboru JSON |
| `--list-channels` | Ne | Pouze vypíše kanály, soubor nenahrává |

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

### Velikostní limity pro nahrání jedním požadavkem

U nahrání jedním požadavkem je vhodné držet soubor pod 100 MB. Následující kanály mají ve skriptu pevnou místní kontrolu:

| Kanál | Horní limit |
| --- | ---: |
| Telegram | 20 MiB |
| Discord | 10 MiB |
| S3 | 64 MiB |
| WebDAV | 64 MiB |
| GitHub Releases | 64 MiB |
| GitLab Packages | 64 MiB |

Při překročení limitu skript vypíše místní chybu ještě před odesláním. Ostatní kanály nemají ve skriptu pevný místní limit 100 MB; příliš velký požadavek může odmítnout Cloudflare nebo vzdálená platforma.

## Nahrávání po částech

Skript pro nahrávání po částech nejprve pomocí API Token požádá serverovou stranu o určení cíle nahrání a potom použije cestu pro velké soubory daného kanálu. Uživatel nemusí ručně vytvářet relaci, posílat části, spojovat soubor ani posílat dokončovací požadavek.

```powershell
node imgbed-token-chunk-upload.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --file "D:\test\video.zip" `
  --channel github `
  --folder "photos/2026" `
  --concurrency 3
```

### Parametry nahrávání po částech

| Parametr | Povinné | Popis |
| --- | --- | --- |
| `--base-url <url>` | Ano | Adresa webu ImgBed |
| `--token <token>` | Ano | API Token; lze použít také proměnnou prostředí `IMGBED_API_TOKEN` |
| `--file <path>` | Ano | Cesta k místnímu souboru |
| `--channel <key>` | Ano | Skutečný nahrávací kanál |
| `--folder <path>` | Ne | Cílová složka |
| `--name-type <type>` | Ne | Způsob pojmenování; odpovídá `uploadNameType` na serverové straně, výchozí hodnota je `default` |
| `--channel-name <name>` | Ne | Konkrétní podkanál nebo účet |
| `--concurrency <n>` | Ne | Počet souběžných nahrávání; výchozí hodnota `1`, maximum `3` |
| `--retries <n>` | Ne | Počet opakování při dočasné chybě; výchozí hodnota `3` |
| `--timeout-ms <n>` | Ne | Časový limit každého požadavku v milisekundách; výchozí hodnota `180000` |
| `--output <pretty\|json>` | Ne | Formát výstupu; výchozí hodnota `pretty` |
| `--save-response <path>` | Ne | Uloží konečný výsledek do souboru JSON |
| `--list-channels` | Ne | Pouze vypíše kanály, soubor nenahrává |

### Cesty nahrávání po částech

| Klíč kanálu | Cesta nahrání |
| --- | --- |
| `telegram` / `tg` | Skutečná relace po částech přes `/upload` |
| `discord` / `dc` | Skutečná relace po částech přes `/upload` |
| `cfr2` / `r2` | Skutečná relace po částech přes `/upload` |
| `github` / `gh` | Skutečná relace po částech přes `/upload` |
| `gitlab` / `gl` | Skutečná relace po částech přes `/upload` |
| `webdav` / `wd` | Skutečná relace po částech přes `/upload` |
| `s3` | Vícedílné nahrávání S3 |
| `onedrive` / `od` | Nahrávací relace OneDrive |
| `googledrive` / `google` / `gd` | Obnovitelné nahrávání Google Drive |
| `dropbox` / `db` | Nahrávací relace Dropbox |
| `yandex` / `yx` | Přímý nahrávací odkaz Yandex |
| `pcloud` / `pd` | Nahrávací odkaz pCloud |
| `huggingface` / `hf` | Nahrávání Hugging Face LFS |

Při testech byly archivní a komprimované soubory na Yandexu nespolehlivé. Pro kanál Yandex používejte nekomprimované soubory.

## Výsledek

Po úspěšném nahrání skript zobrazí podobný výsledek:

```text
success
src: /file/photos/2026/example.png
url: https://your-domain/file/photos/2026/example.png
fileId: photos/2026/example.png
```

| Pole | Popis |
| --- | --- |
| `src` | Cesta souboru uvnitř webu |
| `url` | Úplný přístupový odkaz vhodný k uložení ve skriptu nebo databázi |
| `fileId` | Identifikátor souboru pro pozdější dotazy, správu nebo záznamy |
| `channelName` | U nahrávání po částech může uvádět skutečně použitý podkanál nebo účet |

S volbou `--output json` skript vypíše úplný JSON vhodný pro další zpracování.

## Přímé volání rozhraní pro nahrání jedním požadavkem

Rozhraní lze volat i bez skriptu:

```text
POST https://your-domain/upload?uploadChannel=s3&uploadFolder=photos/2026&uploadNameType=default
Authorization: Bearer your API Token
Content-Type: multipart/form-data
```

Pole formuláře:

| Pole | Povinné | Popis |
| --- | --- | --- |
| `file` | Ano | Soubor k nahrání |

Parametry dotazu:

| Parametr | Povinné | Popis |
| --- | --- | --- |
| `uploadChannel` | Ano | Skutečný nahrávací kanál |
| `uploadFolder` | Ne | Cílová složka |
| `uploadNameType` | Ne | Způsob pojmenování |
| `channelName` | Ne | Konkrétní podkanál nebo účet |

Při úspěchu rozhraní vrátí podobný výsledek:

```json
{
  "success": true,
  "src": "/file/photos/2026/example.png",
  "url": "https://your-domain/file/photos/2026/example.png",
  "fileId": "photos/2026/example.png"
}
```

## Časté otázky

### Velký soubor selže při nahrání jedním požadavkem

Jedno volání `/upload` posílá celý soubor v jednom požadavku. Velký soubor může narazit na limit Cloudflare, paměť Workeru nebo limit vzdálené platformy. Pro velké soubory použijte skript pro nahrávání po částech.

### `--channel-name` je zadané, ale nahrání stále selže

Ověřte, že ve zvoleném kanálu existuje podkanál se stejným názvem a že je zapnutý. Bez `--channel-name` vybere serverová strana dostupný účet podle konfigurace kanálu.

### Chci výsledek použít v jiném programu

Použijte `--output json`, nebo přidejte `--save-response result.json`. Program může z JSON přečíst pole `url` a získat úplný odkaz na soubor.

### Yandex odmítá archiv

Yandex nepodporuje archivní a komprimované formáty spolehlivě; může to souviset s pravidly platformy. Pro kanál Yandex použijte nekomprimovaný soubor.



