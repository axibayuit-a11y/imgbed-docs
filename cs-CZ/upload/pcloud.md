# Přidání kanálu pCloud

## Kdy se hodí

- Máte účet pCloud a chcete ukládat obrázky ImgBed do pCloud.
- Nevadí vám použít e-mail a heslo účtu pCloud jako přihlašovací údaje kanálu.

## Co potřebujete před začátkem

| Požadavek | Proč je potřeba |
| --- | --- |
| E-mail účtu pCloud | Pro přihlášení k pCloud API |
| Heslo pCloud | Pro přihlášení k pCloud API |
| API host | Výchozí je `api.pcloud.com`. Evropské účty mohou použít `eapi.pcloud.com`. |
| Úložný adresář | Kam se soubory ukládají. Výchozí je `imgbed`. |

## Kde ho přidat

1. Otevřete Nastavení systému.
2. Otevřete Nastavení nahrávání.
3. Klikněte vpravo nahoře na `Přidat kanál`.
4. Vyberte `pCloud`.

## Přehled polí

| Pole | Účel | Povinné |
| --- | --- | --- |
| Název kanálu | Identifikuje kanál pCloud, například `Personal pCloud` | Ano |
| E-mail účtu | Přihlašovací e-mail pCloud | Ano |
| Heslo | Heslo pCloud | Ano |
| API host | Host pCloud API. Výchozí je `api.pcloud.com`. | Ne |
| Úložný adresář | Adresář pro ukládání souborů. Výchozí je `imgbed`. | Ne |

API host vyberte podle regionu účtu:

| Region účtu | API host |
| --- | --- |
| Výchozí / USA | `api.pcloud.com` |
| Evropa | `eapi.pcloud.com` |

## Postup nastavení

1. Otevřete Nastavení nahrávání.
2. Klikněte na `Přidat kanál`.
3. Vyberte `pCloud`.
4. Zadejte rozpoznatelný název kanálu.
5. Zadejte e-mail účtu pCloud.
6. Zadejte heslo pCloud.
7. API host nechte jako `api.pcloud.com`, nebo pro evropské účty použijte `eapi.pcloud.com`.
8. Úložný adresář nechte jako `imgbed`, nebo zvolte vlastní.
9. Kanál uložte.

![Konfigurace kanálu](../../image/upload/pcloud/配置渠道.png)

## Ověření

| Kontrola | Očekávaný výsledek |
| --- | --- |
| Karta kanálu | Karta pCloud se po uložení zobrazí. |
| Přepínač kanálu | Přepínač na kartě zůstane zapnutý. |
| Zobrazení e-mailu | Karta ukazuje připojený e-mail pCloud. |
| Dotaz na kvótu | Po úspěšném dotazu se zobrazí použité a celkové místo. |
| Testovací nahrání | Testovací obrázek se objeví v nastaveném adresáři pCloud. |

![Dotaz na kvótu úspěšný](../../image/upload/pcloud/查询额度成功.png)

## Řešení problémů

### Proč ne OAuth2?

pCloud OAuth2 není ve výchozím stavu samoobslužně dostupné. Je potřeba napsat pCloudu a požádat o zapnutí.

Aktuální tok pCloud OAuth2 navíc nepodporuje krátkodobý odkaz pro nahrávání, který ImgBed potřebuje. Proto tento kanál používá přihlášení e-mailem a heslem.

### Jaký API host použít?

Výchozí:

```text
api.pcloud.com
```

Pro evropské účty:

```text
eapi.pcloud.com
```

## Rychlý postup

```text
Prepare your pCloud email and password
-> Open Upload Settings
-> Add Channel
-> Choose pCloud
-> Fill channel name / email / password
-> Keep API host as api.pcloud.com unless your account is in Europe
-> Keep storage directory as imgbed unless you need another folder
-> Save
-> Query quota
-> Upload a test image
```
