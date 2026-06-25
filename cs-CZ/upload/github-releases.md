# Přidání kanálu GitHub Releases

## Co potřebujete před začátkem

Potřebujete jen tři věci:

| Požadavek | Účel |
| --- | --- |
| Účet GitHub | Pro vytvoření přístupového tokenu a vlastnictví repozitáře. |
| GitHub Access Token | Umožní ImgBed používat GitHub API, vytvářet releases a nahrávat soubory. |
| Název repozitáře | Můžete zadat jen název repozitáře, například `image`. |

## Nastavení

### Krok 1: Přihlaste se do GitHub a vytvořte Access Token

1. Přihlaste se do GitHub.
2. Klikněte vpravo nahoře na avatar a otevřete `Settings`.
3. V levém panelu otevřete `Developer settings`.
4. Otevřete `Personal access tokens`.
5. Otevřete `Tokens (classic)`.
6. Klikněte na `Generate new token (classic)`.
7. Dejte tokenu srozumitelný název.
8. Zvolte expiraci podle vlastních potřeb údržby.
9. Vyberte scope `repo` a `workflow`.
10. Token ihned po vytvoření zkopírujte a uložte.

![Přidání oprávnění GitHub](../../image/upload/github-releases/添加github权限.png)

## Krok 2: Vyplňte kanál GitHub Releases v ImgBed

Po výběru `GitHub Releases` v Nastavení nahrávání vyplňte:

| Pole UI | Co zadat |
| --- | --- |
| Název kanálu | Název podle vás, například `GitHubPrimary`. |
| Access Token | GitHub Personal Access Token, který jste právě vytvořili. |
| Název repozitáře | Krátký název jako `image`, nebo plná cesta jako `username/image`. |
| Soukromý repozitář | Zapněte nebo vypněte podle potřeby. |
| Poznámka | Volitelné, například `Primary upload channel`. |

![Vyplnění konfigurace GitHub kanálu](../../image/upload/github-releases/填写github渠道配置.png)

## Krok 3: Uložte kanál

Po vyplnění polí klikněte na Uložit.

Systém zařídí tyto detaily:

| Chování systému | Popis |
| --- | --- |
| Krátký název repozitáře | ImgBed rozpozná aktuální účet GitHub a rozšíří hodnotu na plnou cestu repozitáře. |
| Plná cesta repozitáře | ImgBed použije `username/repository` přesně tak, jak bylo zadáno. |
| Kontrola repozitáře | Pokud použijete cestu aktuálního osobního účtu, ImgBed repozitář automaticky vytvoří, pokud neexistuje. Pokud zadáte plnou cestu ručně, použije ji přímo. |
| Veřejný/soukromý stav | Viditelnost repozitáře se synchronizuje podle aktuálního přepínače. |

## Rychlý kontrolní seznam

GitHub Releases funguje takto:

```text
Sign in to GitHub
-> Create an Access Token
-> Return to ImgBed and enter the token and repository name
-> Save
-> If only a repo name is entered, ImgBed adds the current username automatically
-> If username/repo is entered, ImgBed uses it as-is
-> Upload a test image
```
