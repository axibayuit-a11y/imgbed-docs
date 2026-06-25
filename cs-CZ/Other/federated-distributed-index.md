# Federovaný distribuovaný index

Federovaný distribuovaný index umožňuje více webům ImgBed vzájemně sdílet seznamy souborů.

Jednoduše řečeno:

- Vybrané složky ze svého webu můžete sdílet s ostatními.
- Můžete se připojit k jinému uzlu a synchronizovat jeho sdílený seznam souborů do svého administračního panelu.
- Federované soubory slouží hlavně k procházení, vyhledávání a otevírání odkazů. Nenahrávají se znovu do vašeho vlastního úložiště.

## Kde ho nastavit

Otevřete:

```text
System Settings -> Other Settings -> Federated Distributed Index
```

![Místní federovaný uzel](../../image/other/联盟图/联盟分布式索引本地节点.png)

Stránka má tři karty:

| Karta | Účel |
| --- | --- |
| Místní uzel | Zapnout vlastní uzel, potvrdit veřejnou doménu, vybrat sdílené složky a aktualizovat odchozí index |
| Uzly, ke kterým jsem se připojil | Spravovat další uzly ImgBed, ke kterým jste se připojili |
| Uzly, které se připojují ke mně | Spravovat žádosti ostatních, kteří se chtějí připojit k vašemu uzlu |

## První nastavení

1. Otevřete `Local Node`.
2. Zapněte `Enable`.
3. V části `Sync folders` vyberte složky ke sdílení.
4. Klikněte na `Update Outbound Index`.
5. Pokud ImgBed zjistí změnu domény, před pokračováním potvrďte, že aktuální doména je správná.

Můžete vybrat více synchronizovaných složek.

Pokud je seznam synchronizovaných složek prázdný, sdílejí se všechny složky.

## Místní uzel

### Veřejná doména

Veřejná doména je URL webu, kterou ostatní uzly používají pro přístup k vašemu uzlu.

ImgBed ji zjistí automaticky. Nemusíte ji zadávat ručně. Při první aktualizaci indexu se ImgBed zeptá, zda je aktuální přístupová URL produkční doménou.

Pokud později doménu změníte, aktualizace indexu se znovu zeptá na potvrzení.

### Synchronizované složky

Synchronizované složky určují, které soubory se sdílejí s federovanými uzly.

Pokud například vyberete pouze:

```text
/1/
/2/
```

ostatní uzly uvidí jen soubory v těchto dvou adresářích.

### Aktualizovat odchozí index

Tím se aktualizuje seznam souborů, který od vás mohou ostatní uzly synchronizovat.

Použijte to, když:

- poprvé zapínáte federaci.
- jste nahráli soubory, které chcete sdílet.
- jste změnili synchronizované složky.
- jste změnili veřejnou doménu a potřebujete ji potvrdit.

## Uzly, ke kterým jsem se připojil

`Nodes I Joined` je místo, kde se přihlašujete k jiným uzlům.

![Uzly, ke kterým jsem se připojil](../../image/other/联盟图/我加入的节点.png)

### Žádost o připojení k jinému uzlu

1. Požádejte druhého vlastníka o pozvánkový odkaz.
2. Vložte ho do vstupního pole.
3. Klikněte na `Request to Join`.
4. Počkejte, až druhý vlastník žádost schválí ve svém administračním panelu.

Po schválení se stav uzlu změní na schválený.

### Aktualizovat příchozí index

`Update Inbound Index` synchronizuje seznamy souborů z uzlů, ke kterým jste se připojili.

Použijte to, když:

- druhý vlastník právě schválil vaši žádost.
- druhý vlastník oznámí, že sdílený obsah byl aktualizován.
- chcete obnovit všechny připojené federované seznamy souborů.

Chcete-li aktualizovat jen jeden uzel, klikněte na jeho kartě na `Update Index`.

![Aktualizace indexu](../../image/other/联盟图/更新索引.png)

### Odhlášení

Pokud už nechcete uzel synchronizovat, klikněte na `Unsubscribe`.

Po odhlášení se federovaný index tohoto uzlu odstraní z vašeho místního webu.

## Uzly, které se připojují ke mně

`Nodes Joining Me` je místo, kde zpracováváte žádosti ostatních.

![Uzly, které se připojují ke mně](../../image/other/联盟图/加入我的节点.png)

### Vygenerování pozvánkového odkazu

1. Ujistěte se, že je místní uzel zapnutý.
2. Klikněte alespoň jednou na `Update Outbound Index`, aby ImgBed potvrdil veřejnou doménu.
3. Otevřete `Nodes Joining Me`.
4. Klikněte na `Reset Invitation Link`.
5. Zkopírujte pozvánkový odkaz a pošlete ho druhému vlastníkovi.

Pokud je pozvánkový odkaz prázdný, veřejná doména obvykle ještě nebyla potvrzená. Vraťte se do `Local Node` a klikněte na `Update Outbound Index`.

### Zpracování žádostí o připojení

Když někdo odešle žádost, zobrazí se v seznamu `Nodes Joining Me`.

| Akce | Význam |
| --- | --- |
| Schválit | Umožní druhému uzlu synchronizovat váš sdílený seznam souborů |
| Odmítnout | Odmítne žádost o připojení |
| Smazat | Odstraní dokončený záznam |
| Zkontrolovat stav | Zkontroluje, zda druhá strana tento vztah stále udržuje |

Po schválení musí druhá strana ještě kliknout na `Update Inbound Index`, než se u ní vaše sdílené soubory zobrazí.

![Schválení pozvaného uzlu](../../image/other/联盟图/邀请节点同意.png)

## Zprávy

Po schválení vztahu klikněte na kartě uzlu na `Message`.

Zprávy slouží pouze ke komunikaci o federovaném vztahu. Nemění soubory, štítky, adresáře ani oprávnění.

![Zprávy](../../image/other/联盟图/留言功能.png)

## Prohlížení federovaných souborů

Po dokončení synchronizace se vraťte do seznamu souborů v administraci.

V horní části stránky můžete přepínat mezi místními soubory a federovanými soubory. Ve federovaných souborech lze procházet synchronizovaný obsah.

Federované soubory slouží hlavně k prohlížení, vyhledávání, náhledu a kopírování odkazů. Nejsou to místní soubory, takže je z vlastního webu nemůžete přesouvat, mazat, znovu štítkovat ani zálohovat.

![Federované soubory v administraci](../../image/other/联盟图/联盟管理显示效果图.png)

## FAQ

### Proč mě systém žádá o novou žádost, protože neexistuje záznam vztahu?

Obvykle to znamená, že vás druhá strana odstranila a záznam smazala, takže vztah už nelze najít. Odešlete novou žádost o připojení.

![Nová žádost při neexistujícím záznamu vztahu](../../image/other/联盟图/无关系记录重新申请.png)

### Proč po připojení nevidím soubory?

Zkontrolujte:

1. Druhý vlastník vaši žádost schválil.
2. Druhý vlastník klikl na `Update Outbound Index`.
3. Vy jste klikli na `Update Inbound Index`.
4. Synchronizované složky druhého vlastníka obsahují adresáře, které chce sdílet.

### Co dělat při zjištění změny domény?

Pokud administrační panel právě otevíráte přes produkční doménu, potvrďte a pokračujte.

Pokud používáte dočasnou adresu, akci zrušte, otevřete administrační panel přes produkční doménu a zkuste to znovu.

### Co znamená prázdný seznam synchronizovaných složek?

Prázdný seznam synchronizovaných složek znamená, že se sdílejí všechny složky.

Pokud chcete sdílet jen některé adresáře, vyberte je ručně.

### Rozdíl mezi aktualizací odchozího a příchozího indexu

| Tlačítko | Jednoduchý význam |
| --- | --- |
| Aktualizovat odchozí index | Aktualizuje to, co ode mě mohou ostatní synchronizovat |
| Aktualizovat příchozí index | Aktualizuje to, co jsem synchronizoval od ostatních |
