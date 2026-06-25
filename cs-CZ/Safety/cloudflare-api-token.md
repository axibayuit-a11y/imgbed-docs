# Cloudflare API Token

Přihlašovací údaje Cloudflare API umožňují ImgBed vyčistit mezipaměť CDN Cloudflare po změnách souborů.

![Nastavení Cloudflare API Tokenu](../../image/Safety/cloudflare%20api%20token截图.png)

## Kde nastavit

Otevřete administraci a přejděte na:

```text
System Settings -> Security Settings -> Cloudflare API Token
```

Je potřeba vyplnit:

- Zone ID
- E-mail účtu
- API Key

## Co toto nastavení dělá

Cloudflare může ukládat do mezipaměti veřejné URL obrázků.

Mezipaměť zrychluje doručování obrázků, ale může také způsobit, že starý obsah bude ještě chvíli viditelný po smazání, zablokování, nahrazení nebo přesunutí souboru.

Po nastavení Cloudflare API údajů se ImgBed po těchto operacích pokusí vyčistit související mezipaměť Cloudflare.

Hodí se to, když:

- smažete obrázek a chcete, aby veřejný odkaz co nejrychleji přestal fungovat.
- zablokujete obrázek a chcete, aby návštěvníci neviděli původní soubor.
- nahradíte soubor se stejným názvem a chcete, aby návštěvníci dříve viděli novou verzi.
- přesunete nebo přejmenujete soubory a chcete rychle obnovit mezipaměť starých cest.
- změníte pravidla veřejného přístupu a chcete dříve aktualizovat veřejnou galerii nebo mezipaměť náhodných obrázků.

## Co když pole necháte prázdná

ImgBed funguje normálně i bez tohoto nastavení.

Jediný rozdíl je, že ImgBed nebude aktivně čistit mezipaměť CDN Cloudflare. Návštěvníci mohou vidět starý obsah, dokud mezipaměť Cloudflare přirozeně nevyprší.

## Jak najít Zone ID

Zone ID je Cloudflare Zone ID webu, který používá vaše doména ImgBed.

1. Přihlaste se do Cloudflare Dashboard.
2. Otevřete web, který obsahuje vaši doménu ImgBed.
3. Na přehledové stránce webu najděte `Zone ID`.
4. Zkopírujte ho do pole `Zone ID` v ImgBed.

Jde o Zone ID webu, ne account ID.

## E-mail účtu

Zadejte e-mailovou adresu, kterou používáte pro přihlášení do Cloudflare.

Musí odpovídat API Key zadanému níže.

## API Key

Zadejte Cloudflare Global API Key.

1. Přihlaste se do Cloudflare Dashboard.
2. Otevřete svůj profil.
3. Přejděte na stránku API Tokens.
4. Najděte `Global API Key`.
5. Zobrazte a zkopírujte ho.
6. Vložte ho do pole `API Key` v ImgBed.

![Zobrazení global API key](../../image/Safety/查看全局令牌.png)

## Kdy se projeví

Po vyplnění polí uložte nastavení.

Budoucí změny souborů se automaticky pokusí vyčistit mezipaměť Cloudflare. Dřívější operace se zpětně nečistí. Pokud jste soubor smazali nebo nahradili před tímto nastavením, počkejte na vypršení mezipaměť Cloudflare nebo ji vyčistěte ručně v Cloudflare.

## FAQ

### Je to povinné?

Ne.

Pokud vaše doména nepoužívá Cloudflare nebo vám nevadí zpoždění mezipaměť CDN, můžete pole nechat prázdná.

### Rozbije špatné nastavení upload?

Obvykle ne.

Špatné údaje jen zabrání čištění mezipaměť Cloudflare. Upload a běžný přístup k souborům by měly fungovat dál.

### Proč lze smazaný obrázek stále otevřít?

Nejčastější důvod je, že Cloudflare má starý soubor stále v mezipaměť.

Se správnými Cloudflare API údaji ImgBed při smazání souboru vyčistí mezipaměť příslušného URL.

### Proč po nahrazení souboru stále vidím starý obrázek?

I to obvykle způsobuje mezipaměť CDN.

Po nastavení této funkce se ImgBed pokusí vyčistit mezipaměť starého URL při přepsání souboru se stejným názvem.



