# Přidání kanálu Hugging Face

## Co potřebujete před začátkem

Potřebujete jen tři věci:

| Požadavek | Účel |
| --- | --- |
| Účet Hugging Face | Pro vytvoření přístupového tokenu a vlastnictví repozitáře. |
| Hugging Face User Access Token | Umožní ImgBed používat Hugging Face API, vytvářet repozitáře a nahrávat soubory. |
| Název repozitáře | Můžete zadat jen název repozitáře, například `image`. |

## Nastavení

### Krok 1: Přihlaste se do Hugging Face a vytvořte Access Token

1. Přihlaste se do Hugging Face.
2. Klikněte vpravo nahoře na avatar a otevřete `Settings`.
3. V levém panelu otevřete `Access Tokens`.
4. Vytvořte nový token.
5. Dejte tokenu srozumitelný název.
6. Vyberte oprávnění `write`.
7. Token ihned po vytvoření zkopírujte a uložte.

![Vytvoření tokenu](../../image/upload/huggingface/创建令牌.png)

## Krok 2: Vyplňte kanál Hugging Face v ImgBed

Po výběru `Hugging Face` v Nastavení nahrávání vyplňte:

| Pole UI | Co zadat |
| --- | --- |
| Název kanálu | Název podle vás, například `hf-primary`. |
| Název repozitáře | Krátký název jako `image`, nebo plná cesta jako `username/image`. |
| Access Token | Hugging Face User Access Token, který jste právě vytvořili. |
| Soukromý repozitář | Zapněte nebo vypněte podle potřeby. |
| Poznámka | Volitelné, například `Primary upload channel`. |

![Přidání kanálu](../../image/upload/huggingface/添加渠道.png)

## Krok 3: Uložte kanál

Po vyplnění polí klikněte na Uložit.

Systém zařídí tyto detaily:

| Chování systému | Popis |
| --- | --- |
| Krátký název repozitáře | ImgBed rozpozná aktuální účet Hugging Face a rozšíří hodnotu na plnou cestu repozitáře. |
| Plná cesta repozitáře | ImgBed použije `username/repository` přesně tak, jak bylo zadáno. |
| Kontrola repozitáře | Pokud použijete cestu aktuálního osobního účtu, ImgBed se pokusí repozitář vytvořit, pokud neexistuje. Pokud zadáte plnou cestu ručně, použije ji přímo. |
| Typ repozitáře | Tento kanál používá repozitář `dataset`. |
| Veřejný/soukromý stav | Viditelnost repozitáře se synchronizuje podle aktuálního přepínače. |

## Rychlý kontrolní seznam

```text
Sign in to Hugging Face
-> Create an Access Token
-> Select write permission
-> Return to ImgBed and enter the token and repository name
-> Save
-> If only a repo name is entered, ImgBed adds the current username automatically
-> If username/repo is entered, ImgBed uses it as-is
-> ImgBed checks or creates the dataset repository
-> Upload a test image
```
