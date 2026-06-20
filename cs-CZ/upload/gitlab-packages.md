# Přidání kanálu GitLab Packages

## Co potřebujete před začátkem

Potřebujete jen tři věci:

| Požadavek | Účel |
| --- | --- |
| Účet GitLab | Pro vytvoření access tokenu a vlastnictví projektu. |
| GitLab Personal Access Token | Umožní ImgBed používat GitLab API, vytvářet projekty a nahrávat soubory do Generic Packages. |
| Název projektu | Můžete zadat jen název projektu, například `imgbed`. |

## Nastavení

### Krok 1: Přihlaste se do GitLab a vytvořte Access Token

1. Přihlaste se do GitLab.
2. Klikněte vpravo nahoře na avatar a otevřete `Preferences`.
3. V levém panelu otevřete `Access Tokens`.
4. Dejte tokenu srozumitelný název.
5. Zvolte expiraci podle vlastních potřeb údržby.
6. Vyberte scope `api`.
7. Token ihned po vytvoření zkopírujte a uložte.

![Vytvoření legacy tokenu](../../image/upload/gitlab-packages/点击生成旧版令牌.png)

![Výběr oprávnění tokenu](../../image/upload/gitlab-packages/勾选令牌权限.png)

## Krok 2: Vyplňte kanál GitLab Packages v ImgBed

Po výběru `GitLab Packages` v Nastavení nahrávání vyplňte:

| Pole UI | Co zadat |
| --- | --- |
| Název kanálu | Název podle vás, například `GitLabPrimary`. |
| Access Token | GitLab Personal Access Token, který jste právě vytvořili. |
| Název projektu | Krátký název jako `imgbed`, nebo plná cesta jako `username/imgbed`. |
| Soukromý repozitář | Zapněte nebo vypněte podle potřeby. |
| Poznámka | Volitelné, například `Primary upload channel`. |

![Konfigurace kanálu](../../image/upload/gitlab-packages/配置渠道内容.png)

## Krok 3: Uložte kanál

Po vyplnění polí klikněte na Uložit.

Systém zařídí tyto detaily:

| Chování systému | Popis |
| --- | --- |
| Krátký název projektu | ImgBed rozpozná aktuální účet GitLab a rozšíří hodnotu na plnou cestu projektu. |
| Plná cesta projektu | ImgBed použije `username/project` přesně tak, jak bylo zadáno. |
| Kontrola projektu | Pokud použijete cestu aktuálního osobního účtu, ImgBed projekt automaticky vytvoří, pokud neexistuje. Pokud zadáte plnou cestu ručně, použije ji přímo. |
| Veřejný/soukromý stav | Viditelnost projektu se synchronizuje podle aktuálního přepínače. |

## Rychlý checklist

```text
Přihlaste se do GitLab
-> Vytvořte Access Token
-> Vyberte jen scope api
-> Vraťte se do ImgBed a zadejte token i název projektu
-> Uložte
-> Pokud je zadán jen název projektu, ImgBed automaticky přidá aktuální uživatelské jméno
-> Pokud je zadáno username/project, ImgBed ho použije beze změny
-> Nahrajte testovací obrázek
```
