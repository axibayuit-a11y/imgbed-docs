# Přidání kanálu Cloudflare R2

## Kdy se hodí

Cloudflare R2 použijte, když:

- vaše stránka ImgBed už běží na Cloudflare a chcete soubory ukládat do R2 bucketu ve stejném účtu Cloudflare.
- nechcete nastavovat samostatný S3 endpoint, access key a secret key.
- chcete, aby čtení a zápis probíhaly přes R2 binding ve Workeru nebo Pages s minimální konfigurací.

Stručně:

Kanál R2 se nevytváří ručně v administraci ImgBed. Nejprve je potřeba připojit R2 bucket k projektu Cloudflare a název proměnné bindingu musí být přesně `img_r2`.

## Co potřebujete před začátkem

- Účet Cloudflare.
- Existující R2 bucket.
- Oprávnění spravovat projekt Cloudflare, na kterém je ImgBed nasazený.

## Nastavení v Cloudflare

### 1. Vytvořte R2 bucket

1. Přihlaste se do Cloudflare Dashboard.
2. Otevřete `R2 Object Storage`.
3. Klikněte na Create bucket.
4. Zvolte název bucketu, například `imgbed`.

Do tohoto bucketu se budou ukládat nahrané soubory.

![Vytvoření R2 bucketu](../../image/upload/cloudflare-r2/创建一个存储桶img-r2.png)

### 2. Připojte bucket k projektu ImgBed

Místo bindingu vyberte podle typu nasazení:

| Typ nasazení | Místo bindingu |
| --- | --- |
| Pages | Aktuální Pages projekt -> Settings -> Functions -> R2 bucket bindings |
| Worker | Aktuální Worker -> Settings -> Bindings -> R2 bucket bindings |

Při přidávání bindingu jsou důležitá tato pole:

| Pole | Hodnota |
| --- | --- |
| Variable name | `img_r2` |
| R2 bucket | Vyberte bucket, který jste vytvořili |

Název proměnné musí být přesně `img_r2`. Nahrávání, čtení i mazání souborů R2 závisí na tomto názvu bindingu.

### 3. Projekt znovu nasaďte

Po uložení bindingu znovu nasaďte ImgBed, aby runtime Workeru nebo Pages získal přístup k `img_r2`.

## Co uvidíte v ImgBed

Jakmile je binding R2 dostupný, otevřete:

1. Nastavení systému.
2. Nastavení nahrávání.
3. Kanál `Cloudflare R2`.

Systém automaticky vytvoří jeden pevný kanál:

| Pole | Pevná hodnota |
| --- | --- |
| Název kanálu | `Cloudflare R2` |
| Typ kanálu | `cfr2` |
| Režim úložiště | `binding` |
| Zdroj konfigurace | Environment binding |

Jde o pevný kanál bindingu. Nemusíte ho vytvářet přes Přidat kanál a nelze ho smazat jako běžný kanál.

## Upravitelná pole v administraci

| Pole | Co dělá | Povinné |
| --- | --- | --- |
| Povolit kanál | Určuje, zda se R2 účastní výběru kanálu při nahrávání. | Ano |
| Account ID | Používá se jen při zapnutých limitech kapacity, když je potřeba dotazovat oficiální využití R2. | Doporučeno při limitech |
| Název bucketu | Používá se jen při zapnutých limitech kapacity, když je potřeba dotazovat oficiální využití R2. | Doporučeno při limitech |
| Limit kapacity | Určuje, zda se tento R2 kanál vybírá podle dostupné kapacity. | Ne |
| Prahová hodnota | Zastaví zápis do kanálu po dosažení zadaného procenta využití. | Povinné při limitech |

Account ID najdete v informačním panelu účtu v Cloudflare Dashboard. Vyplňte ho jen tehdy, pokud má ImgBed dotazovat a vynucovat využití kvóty R2.

![Získání Account ID](../../image/upload/cloudflare-r2/获取账户id.png)

## Postup nastavení

1. Vytvořte R2 bucket v Cloudflare.
2. Otevřete nastavení Cloudflare pro projekt ImgBed.
3. Přidejte R2 bucket binding.
4. Nastavte `Variable name` na `img_r2`.
5. Vyberte vytvořený R2 bucket.
6. Uložte binding a znovu nasaďte ImgBed.
7. Vraťte se do ImgBed -> Nastavení systému -> Nastavení nahrávání.
8. Ověřte, že se kanál `Cloudflare R2` zobrazuje a je povolený.

Pokud chcete, aby se R2 vybíral podle kapacity, zapněte limit kapacity a před uložením vyplňte Account ID, název bucketu, limit a prahovou hodnotu.

![Nastavení limitů kapacity](../../image/upload/cloudflare-r2/配置容量限制.png)

## Ověření

- Pevný kanál `Cloudflare R2` se zobrazuje v Nastavení nahrávání.
- Karta kanálu ukazuje, že je kanál povolený.
- Malý testovací soubor se nahraje úspěšně a vrácený odkaz se normálně otevře.
- Pokud se při otevření souboru zobrazí `R2 database binding is not configured`, runtime nedostal binding `img_r2`. Zkontrolujte název bindingu v Cloudflare a projekt znovu nasaďte.
