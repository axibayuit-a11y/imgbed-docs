# Federovaný distribuovaný index

Federovaný distribuovaný index umožňuje více webům ImgBed sdílet mezi sebou seznamy souborů.

Jednoduše:

- Můžete sdílet vybrané adresáře ze svého webu s ostatními.
- Můžete se připojit k jinému uzlu a synchronizovat jeho sdílený seznam souborů do své administrace.
- Federované soubory slouží hlavně k procházení, vyhledávání a otevírání odkazů. Nenahrávají se znovu do vašeho úložiště.

## Kde nastavit

Otevřete:

```text
System Settings -> Other Settings -> Federated Distributed Index
```

![Místní federovaný uzel](../../image/other/联盟图/联盟分布式索引本地节点.png)

Stránka má tři karty:

| Karta | Účel |
| --- | --- |
| Local Node | Zapnout vlastní uzel, potvrdit veřejnou doménu, vybrat sdílené adresáře a aktualizovat odchozí index |
| Nodes I Joined | Spravovat jiné uzly ImgBed, ke kterým jste se připojili |
| Nodes Joining Me | Spravovat žádosti ostatních, kteří se chtějí připojit k vašemu uzlu |

## První nastavení

1. Otevřete `Local Node`.
2. Zapněte `Enable`.
3. V `Sync folders` vyberte adresáře ke sdílení.
4. Klikněte na `Update Outbound Index`.
5. Pokud ImgBed zjistí změnu domény, před pokračováním potvrďte, že aktuální doména je správná.

Můžete vybrat více synchronizovaných adresářů.

Pokud je seznam synchronizovaných adresářů prázdný, sdílí se všechny adresáře.

## Local Node

### Veřejná doména

Veřejná doména je URL webu, který ostatní uzly používají pro přístup k vašemu uzlu.

ImgBed ji zjistí automaticky. Nemusíte ji psát ručně. Při první aktualizaci indexu se ImgBed zeptá, zda je aktuální přístupový URL produkční doména.

Pokud později doménu změníte, aktualizace indexu se znovu zeptá na potvrzení.

### Sync Folders

Sync folders určují, které soubory se sdílejí s federovanými uzly.

Pokud například vyberete jen:

```text
/1/
/2/
```

ostatní uzly uvidí pouze soubory v těchto dvou adresářích.

### Update Outbound Index

Aktualizuje seznam souborů, který od vás mohou ostatní uzly synchronizovat.

Použijte, když:

- poprvé zapínáte federaci.
- nahrajete soubory, které chcete sdílet.
- změníte synchronizované adresáře.
- změníte veřejnou doménu a je potřeba ji potvrdit.

## Nodes I Joined

`Nodes I Joined` slouží ke správě připojení k jiným uzlům.

![Uzly, ke kterým jsem se připojil](../../image/other/联盟图/我加入的节点.png)

### Žádost o připojení k jinému uzlu

1. Požádejte druhého vlastníka o pozvánkový odkaz.
2. Vložte ho do vstupního pole.
3. Klikněte na `Request to Join`.
4. Počkejte, až druhý vlastník žádost schválí ve své administraci.

Po schválení se stav uzlu změní na approved.

### Update Inbound Index

`Update Inbound Index` synchronizuje seznamy souborů z uzlů, ke kterým jste se připojili.

Použijte, když:

- druhý vlastník právě schválil vaši žádost.
- druhý vlastník oznámí, že sdílený obsah byl aktualizován.
- chcete obnovit všechny připojené federované seznamy souborů.

Pro aktualizaci jen jednoho uzlu klikněte na `Update Index` na jeho kartě.

![Aktualizace indexu](../../image/other/联盟图/更新索引.png)

### Odhlášení

Pokud už nechcete uzel synchronizovat, klikněte na `Unsubscribe`.

Po odhlášení se federovaný index tohoto uzlu odstraní z vašeho místního webu.

## Nodes Joining Me

`Nodes Joining Me` slouží ke zpracování žádostí od ostatních.

![Uzly připojující se ke mně](../../image/other/联盟图/加入我的节点.png)

### Vygenerování pozvánkového odkazu

1. Ujistěte se, že místní uzel je zapnutý.
2. Klikněte alespoň jednou na `Update Outbound Index`, aby ImgBed potvrdil veřejnou doménu.
3. Otevřete `Nodes Joining Me`.
4. Klikněte na `Reset Invitation Link`.
5. Zkopírujte pozvánkový odkaz a pošlete ho druhému vlastníkovi.

Pokud je pozvánkový odkaz prázdný, veřejná doména obvykle ještě nebyla potvrzená. Vraťte se do `Local Node` a klikněte na `Update Outbound Index`.

### Zpracování žádostí o připojení

Když někdo odešle žádost, objeví se v seznamu `Nodes Joining Me`.

| Akce | Význam |
| --- | --- |
| Approve | Umožní druhému uzlu synchronizovat váš sdílený seznam souborů |
| Reject | Odmítne žádost |
| Delete | Odstraní dokončený záznam |
| Check Status | Zkontroluje, zda druhá strana stále udržuje tento vztah |

Po schválení musí druhá strana ještě kliknout na `Update Inbound Index`, než se tam vaše sdílené soubory zobrazí.

![Schválení pozvaného uzlu](../../image/other/联盟图/邀请节点同意.png)

## Zprávy

Po schválení vztahu klikněte na kartě uzlu na `Message`.

Zprávy slouží jen pro komunikaci o federovaném vztahu. Nemění soubory, tagy, adresáře ani oprávnění.

![Zprávy](../../image/other/联盟图/留言功能.png)

## Prohlížení federovaných souborů

Po dokončení synchronizace se vraťte do seznamu souborů v administraci.

V horní části stránky můžete přepínat mezi místními soubory a federovanými soubory. Ve federovaných souborech lze procházet synchronizovaný obsah.

Federované soubory slouží hlavně k prohlížení, vyhledávání, náhledu a kopírování odkazů. Nejsou to místní soubory, takže je z vlastního webu nemůžete přesouvat, mazat, znovu tagovat ani zálohovat.

![Federované soubory v administraci](../../image/other/联盟图/联盟管理显示效果图.png)

## FAQ

### Proč mě to žádá o novou žádost, protože neexistuje záznam vztahu?

Obvykle to znamená, že vás druhá strana odstranila a záznam smazala, takže vztah už nelze najít. Odešlete novou žádost o připojení.

![Nová žádost bez záznamu vztahu](../../image/other/联盟图/无关系记录重新申请.png)

### Proč po připojení nevidím soubory?

Zkontrolujte:

1. Druhý vlastník vaši žádost schválil.
2. Druhý vlastník klikl na `Update Outbound Index`.
3. Vy jste klikli na `Update Inbound Index`.
4. Synchronizované adresáře druhého vlastníka obsahují adresáře, které chce sdílet.

### Co dělat při zjištění změny domény?

Pokud administraci právě otevíráte přes produkční doménu, potvrďte a pokračujte.

Pokud používáte dočasnou adresu, zrušte akci, otevřete administraci přes produkční doménu a zkuste to znovu.

### Co znamená prázdný seznam Sync Folder?

Prázdný seznam Sync Folder znamená, že se sdílejí všechny adresáře.

Pokud chcete sdílet jen některé adresáře, vyberte je ručně.

### Rozdíl mezi odchozí a příchozí aktualizací indexu

| Tlačítko | Jednoduchý význam |
| --- | --- |
| Update Outbound Index | Aktualizuje, co ode mě mohou ostatní synchronizovat |
| Update Inbound Index | Aktualizuje, co jsem synchronizoval od ostatních |
