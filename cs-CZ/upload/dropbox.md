# Přidání kanálu Dropbox

## Co potřebujete před začátkem

| Požadavek | Proč je potřeba |
| --- | --- |
| Účet Dropbox | Pro přihlášení a autorizaci aplikace |
| Aplikace Dropbox | Pro vygenerování `App Key` a `App Secret` |
| Vaše doména ImgBed | Pro OAuth redirect URI |
| Dostupné místo v Dropboxu | Skutečné úložiště pro soubory |

## Nastavení

### Krok 1: Vytvořte aplikaci Dropbox

1. Otevřete Dropbox App Console:

```text
https://www.dropbox.com/developers/apps
```

2. Vytvořte novou aplikaci.
3. Jako typ přístupu zvolte:

```text
App folder
```

4. Dejte aplikaci rozpoznatelný název, například `imgbed-app`.
5. Po vytvoření otevřete detail aplikace.

Doporučený typ přístupu:

| Typ přístupu | Doporučení |
| --- | --- |
| `App folder` | Doporučeno. Odpovídá tomu, jak ImgBed ukládá soubory. |
| `Full Dropbox` | Nedoporučeno. ImgBed nepotřebuje plný přístup k celému účtu. |

![Vytvoření aplikace Dropbox](../../image/upload/dropbox/开发者创建应用.png)

### Krok 2: Přidejte Redirect URI

V detailu aplikace Dropbox najděte nastavení OAuth nebo Redirect URI a přidejte:

```text
https://your-domain.com/api/oauth/dropbox/callback
```

Pokud administraci používáte z více domén, přidejte každou odpovídající callback URL.

![Nastavení Redirect URI](../../image/upload/dropbox/配置回调地址.png)

### Krok 3: Nastavte oprávnění aplikace

Otevřete kartu `Permissions` a zapněte alespoň tyto scope:

| Scope | Povinné | Účel |
| --- | --- | --- |
| `account_info.read` | Povinné | Čte informace o účtu a kvótě |
| `files.metadata.read` | Povinné | Čte metadata souborů a složek pro kontroly cest |
| `files.metadata.write` | Povinné | Vytváří složky a zapisuje metadata |
| `files.content.write` | Povinné | Nahrává soubory. Bez tohoto scope se objeví `required scope 'files.content.write'`. |
| `files.content.read` | Doporučeno | Umožňuje stažení, náhled a dočasné odkazy souborů |

Po výběru scope klikněte dole na `Submit`.

![Přidání oprávnění](../../image/upload/dropbox/添加对应的权限.png)

Důležité:

| Situace | Co udělat |
| --- | --- |
| Změnili jste scope | Spusťte autorizaci tokenu znovu a získejte nový `Refresh Token`. |
| Neprovedli jste novou autorizaci | Starý token nezíská nová oprávnění, takže nahrávání může stále selhávat. |

### Krok 4: Zkopírujte údaje aplikace

Uložte tyto dvě hodnoty ze stránky aplikace Dropbox:

| Pole Dropbox | Pole ImgBed |
| --- | --- |
| `App key` | `App Key` |
| `App secret` | `App Secret` |

### Krok 5: Vyplňte kanál Dropbox

V Nastavení nahrávání zvolte `Dropbox` a vyplňte:

| Pole ImgBed | Co zadat |
| --- | --- |
| Název kanálu | Srozumitelný název, například `Main Dropbox` |
| App Key | Dropbox `App key` |
| App Secret | Dropbox `App secret` |
| Refresh Token | Zatím nechte prázdné |
| Kořenový adresář | Volitelné. Výchozí je `imgbed`. |
| Poznámka | Volitelné |

![Získání tokenu](../../image/upload/dropbox/获取令牌.png)

### Krok 6: Získejte Refresh Token

1. V ImgBed klikněte na `Get Token`.
2. Přihlaste se k účtu Dropbox, který chcete připojit.
3. Potvrďte autorizaci.
4. Stránka callbacku zobrazí `Refresh Token`.
5. Zkopírujte ho.
6. Vraťte se do ImgBed a vložte ho do pole `Refresh Token`.

![Kopírování tokenu](../../image/upload/dropbox/复制令牌.png)

## Ověření

| Kontrola | Očekávaný výsledek |
| --- | --- |
| Karta kanálu | Kanál Dropbox se po uložení zobrazí. |
| Přepínač kanálu | Kanál lze zapnout. |
| Token je uložen | Detail ukazuje, že `Refresh Token` byl uložen. |
| Testovací nahrání | Testovací obrázek se objeví v aplikační složce Dropboxu. |

Pokud jsou zapnuté limity kapacity, spusťte dotaz na kvótu. Po úspěšném dotazu karta ukáže použité místo, celkové místo a čas poslední aktualizace.

![Dotaz na kvótu úspěšný](../../image/upload/dropbox/查询额度成功.png)

## Řešení problémů

| Problém | Řešení |
| --- | --- |
| ImgBed hlásí neúplnou konfiguraci | Zkontrolujte, že jsou vyplněné `App Key`, `App Secret` i `Refresh Token`. |
| Autorizace proběhne, ale nezobrazí se `Refresh Token` | Klikněte znovu na `Get Token` a ujistěte se, že se používá offline autorizační tok. |
| Nahrání selže s `required scope 'files.content.write'` | Zapněte `files.content.write`, klikněte na `Submit` a získejte nový `Refresh Token`. |
| Callback selže | Ověřte, že redirect URI je `https://your-domain.com/api/oauth/dropbox/callback`. |
| Soubory nelze najít | Zkontrolujte, že aplikace Dropbox byla vytvořena v režimu `App folder`. |

## Rychlý postup

```text
Open Dropbox App Console
-> Create an app
-> Choose App folder access
-> Add https://your-domain.com/api/oauth/dropbox/callback
-> Enable account_info.read / files.metadata.read / files.metadata.write / files.content.write
-> Optionally enable files.content.read
-> Click Submit
-> Copy App Key and App Secret
-> Fill them into ImgBed
-> Click Get Token
-> Copy the Refresh Token from the callback page
-> Paste it back into ImgBed and save
```

## Odkazy

1. Dropbox App Console: https://www.dropbox.com/developers/apps
2. Dropbox OAuth Guide: https://developers.dropbox.com/oauth-guide
3. Dropbox Developer Guide: https://www.dropbox.com/developers/reference/developer-guide
