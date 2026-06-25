# Přidání kanálu OneDrive

## Co potřebujete před začátkem

| Požadavek | Proč je potřeba |
| --- | --- |
| Účet Microsoft | Pro přístup k administračním stránkám Microsoft a autorizaci OneDrive |
| Vaše doména ImgBed | Pro OAuth callback URL |
| Registrace aplikace | Pro vytvoření `Client ID` a `Client Secret` |
| Účet OneDrive | Skutečné úložiště pro soubory |

## Nastavení

### Krok 1: Otevřete Microsoft Entra ID

1. Otevřete `portal.azure.com`.
2. Nahoře vyhledejte `Microsoft Entra ID`.
3. Pokud se cílová stránka nezobrazí v nabídce, zvolte:

```text
Continue searching in Microsoft Entra ID
```

4. Otevřete `Microsoft Entra ID`.
5. Otevřete `App registrations`.
6. Klikněte na `New registration`.

### Krok 2: Zaregistrujte aplikaci

Na stránce `New registration` vyplňte:

| Pole | Co zadat |
| --- | --- |
| Name | Srozumitelný název, například `imgbed-onedrive` |
| Supported account types | Vyberte podle tabulky níže |
| Redirect URI type | `Web` |
| Redirect URI | `https://your-domain.com/api/oauth/onedrive/callback` |

Doporučení pro typ účtu:

| Váš scénář | Supported Account Types |
| --- | --- |
| Jen osobní OneDrive | Zvolte možnost pro osobní účty Microsoft. |
| Osobní i pracovní/školní účty | Zvolte možnost podporující osobní i organizační účty. |
| Jen firemní nebo školní OneDrive | Zvolte možnost pro organizační účty. |

Po vyplnění formuláře klikněte na registraci.

![Vytvoření aplikace OneDrive](../../image/upload/onedrive/添加应用程序注册.png)

### Krok 3: Zkopírujte údaje aplikace

Po vytvoření aplikace zkopírujte z přehledu tyto hodnoty:

| Pole Microsoft | Pole ImgBed |
| --- | --- |
| `Application (client) ID` | `Client ID` |
| `Directory (tenant) ID` | `Tenant ID` pro organizační účty |

![Application ID a Tenant ID](../../image/upload/onedrive/应用程序ID和目录租户ID位.png)

### Krok 4: Vytvořte Client Secret

1. Otevřete `Certificates & secrets`.
2. Klikněte na `New client secret`.
3. Zadejte libovolný, ale poznatelný popis.
4. Zvolte dobu platnosti.
5. Hodnotu `Value` zkopírujte hned po vytvoření.

![Uložení hodnoty Client Secret](../../image/upload/onedrive/保存客户端密码值.png)

### Krok 5: Přidejte API oprávnění

1. Otevřete `API permissions`.
2. Klikněte na `Add a permission`.
3. Vyberte `Microsoft Graph`.
4. Vyberte `Delegated permissions`.
5. Přidejte tato oprávnění:

| Oprávnění | Účel |
| --- | --- |
| `Files.ReadWrite.All` | Nahrávání souborů, vytváření složek a mazání souborů |
| `offline_access` | Umožní ImgBed získat `Refresh Token` |
| `User.Read` | Čte informace o účtu a kapacitě |

### Krok 6: Vyplňte kanál OneDrive

V Nastavení nahrávání zvolte `OneDrive` a vyplňte:

| Pole ImgBed | Co zadat |
| --- | --- |
| Název kanálu | Srozumitelný název, například `Main OneDrive` |
| Client ID | Microsoft `Application (client) ID` |
| Client Secret | Zkopírovaná hodnota `Client Secret Value` |
| Tenant ID | Použijte tabulku níže |
| Refresh Token | Zatím nechte prázdné |
| Kořenový adresář | Volitelné. Výchozí je `imgbed`. |
| Poznámka | Volitelné |

![Konfigurace kanálu OneDrive](../../image/upload/onedrive/添加新渠道配置.png)

Jak vyplnit `Tenant ID`:

| Zvolený typ účtu | ImgBed `Tenant ID` |
| --- | --- |
| Osobní účty | `consumers` |
| Osobní a organizační účty | `common` |
| Jen aktuální organizace | `Directory (tenant) ID` |

### Krok 7: Získejte Refresh Token

1. V ImgBed klikněte na `Get Token`.
2. Přihlaste se k účtu Microsoft, který chcete připojit.
3. Potvrďte autorizaci.
4. Stránka callbacku zobrazí `Refresh Token`.
5. Zkopírujte ho.
6. Vraťte se do ImgBed a vložte ho do pole `Refresh Token`.

![Kopírování Refresh Token](../../image/upload/onedrive/复制刷新令牌.png)

### Krok 8: Uložte kanál

Po vyplnění všech polí kanál uložte.

## Rychlý postup

```text
Open portal.azure.com
-> Search for Microsoft Entra ID
-> Open App registrations
-> Register a new app
-> Fill Name / Supported account types / Web redirect URI
-> Register
-> Copy Application (client) ID
-> Check the callback URL in Authentication
-> Create a Client Secret in Certificates & secrets
-> Add permissions in API permissions
-> Fill Client ID / Client Secret / Tenant ID into ImgBed
-> Click Get Token
-> Copy the Refresh Token from the callback page
-> Paste it back into ImgBed and save
```

## Odkazy

1. Registrace aplikace Microsoft Entra: https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app
2. Tok autorizačního kódu Microsoft identity platform: https://learn.microsoft.com/en-us/entra/identity-platform/v2-oauth2-auth-code-flow
3. Ověřování uživatele Microsoft Graph: https://learn.microsoft.com/en-us/graph/auth-v2-user
