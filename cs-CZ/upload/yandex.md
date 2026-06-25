# Přidání kanálu Yandex

## Co potřebujete před začátkem

| Požadavek | Proč je potřeba |
| --- | --- |
| Účet Yandex | Pro přihlášení a autorizaci Yandex Disk |
| OAuth aplikace Yandex | Pro vytvoření `Client ID` a `Client Secret` |
| Vaše doména ImgBed | Pro OAuth redirect URI |
| Dostupné místo v Yandex Disk | Skutečné úložiště pro soubory |

## Nastavení

### Krok 1: Vytvořte OAuth aplikaci Yandex

1. Otevřete stránku pro vytvoření OAuth aplikace Yandex:

```text
https://oauth.yandex.com/client/new
```

2. Pokud budete přesměrováni k přihlášení, nejdřív se přihlaste účtem Yandex.
3. Vytvořte novou aplikaci.
4. Dejte aplikaci srozumitelný název, například `imgbed-yandex`.
5. Najděte nastavení callback nebo redirect URL.
6. Zadejte:

```text
https://your-domain.com/api/oauth/yandex/callback
```

### Krok 2: Potvrďte oprávnění

Pro aktuální integraci Yandex v ImgBed ponechte pod `Yandex.Disk REST API` tato čtyři oprávnění:

| Oprávnění | Účel |
| --- | --- |
| `cloud_api:disk.app_folder` | Umožní ImgBed ukládat soubory do složky aplikace |
| `cloud_api:disk.read` | Čte soubory a odkazy ke stažení |
| `cloud_api:disk.write` | Nahrává soubory, vytváří složky a maže soubory |
| `Access to information about Yandex.Disk` | Čte kapacitu disku a využité místo |

Pokud pod `Yandex ID API` vidíte i tato oprávnění, jsou volitelná:

| Text oprávnění | Doporučení |
| --- | --- |
| `Access to username, first name and surname, gender` | Volitelné |
| `Access to email address` | Volitelné |

Nahrávání, stahování, mazání a kapacita závisejí hlavně na čtyřech oprávněních `Yandex.Disk REST API` výše.

![Nastavení oprávnění Yandex Disk](../../image/upload/yandex/dataaccess配置软盘权限.png)

### Krok 3: Zkopírujte údaje aplikace

Po vytvoření aplikace zkopírujte:

| Pole Yandex | Pole ImgBed |
| --- | --- |
| `Client ID` | `Client ID` |
| `Client Secret` | `Client Secret` |

![Zapsání Client ID a Secret](../../image/upload/yandex/记录客户端id和secret.png)

### Krok 4: Vyplňte kanál Yandex

V Nastavení nahrávání vyberte `Yandex` a vyplňte:

| Pole ImgBed | Co zadat |
| --- | --- |
| Název kanálu | Srozumitelný název, například `Main Yandex` |
| Client ID | `Client ID` aplikace Yandex |
| Client Secret | `Client Secret` aplikace Yandex |
| Refresh Token | Zatím nechte prázdné |
| Kořenový adresář | Volitelné. Výchozí je `imgbed`. |

![Úprava konfigurace kanálu](../../image/upload/yandex/编辑配置渠道.png)

### Krok 5: Získejte Refresh Token

1. V ImgBed klikněte na `Get Token`.
2. Přihlaste se k účtu Yandex, který chcete připojit.
3. Potvrďte autorizaci.
4. Stránka callbacku zobrazí `Refresh Token`.
5. Zkopírujte ho.
6. Vraťte se do ImgBed a vložte ho do pole `Refresh Token`.

![Kopírování Refresh Token po autorizaci](../../image/upload/yandex/授权后复制刷新令牌.png)

### Krok 6: Uložte kanál

Po vyplnění všech polí kanál uložte.

## Rychlý postup

```text
Open Yandex OAuth Console
-> Create an app
-> Add https://your-domain.com/api/oauth/yandex/callback
-> Confirm Yandex Disk permissions
-> Copy Client ID and Client Secret
-> Fill Client ID / Client Secret into ImgBed
-> Click Get Token
-> Copy the Refresh Token from the callback page
-> Paste it back into ImgBed and save
```

## Odkazy

1. Registrace aplikace Yandex: https://yandex.com/dev/id/doc/en/register-client
2. Získání autorizačního kódu přes URL: https://yandex.com/dev/id/doc/en/codes/code-url
3. Endpoint tokenu Yandex OAuth: https://yandex.com/dev/id/doc/en/tokens/token
