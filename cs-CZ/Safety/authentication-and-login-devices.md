# Ověřování a správa přihlášených zařízení

`Authentication Management` a `Login Device Management` chrání administraci ImgBed, veřejný vstup pro nahrávání a přístup WebDAV.

Na této stránce nastavíte přístupové údaje, zkontrolujete přihlášená zařízení a podle potřeby zneplatníte staré relace.

## Kde nastavit

Otevřete administraci a přejděte na:

```text
System Settings -> Security Settings
```

Stránka obsahuje dvě hlavní části:

- Authentication Management
- Login Device Management

![Správa ověřování](../../image/Safety/认证管理界面.png)

## Co dělá Authentication Management

Authentication Management ukládá přístupové údaje.

Existují dva typy:

- Ověření na straně uživatele
- Ověření na straně administrátora

## Ověření na straně uživatele

Ověření na straně uživatele je heslo pro nahrávání.

Po nastavení hesla musí běžní návštěvníci zadat heslo před použitím stránky pro nahrávání. Hodí se to, když nechcete nechat veřejnou upload stránku otevřenou každému.

![Přihlášení uživatele](../../image/Safety/用户端登录界面.png)

### Nastavení hesla pro nahrávání

Když je heslo pro nahrávání nastavené:

- návštěvníci ho musí zadat před použitím upload stránky.
- nahrávání je dostupné až po přijetí hesla.
- pokud jsou zapnuté relace zařízení na straně uživatele, ImgBed toto zařízení zaznamená.

Změna hesla pro nahrávání zneplatní staré uživatelské relace. Návštěvníci musí zadat nové heslo znovu.

## Ověření administrátora

Ověření administrátora používá administrátorské uživatelské jméno a heslo.

Chrání administraci. V produkčním provozu by mělo být vždy nastavené.

![Přihlášení administrátora](../../image/Safety/管理端登录界面.png)

### Nastavení údajů administrátora

Když jsou nastavené administrátorské jméno a heslo:

- otevření administrace vyžaduje přihlášení.
- úspěšné přihlášení vytvoří záznam administrátorského zařízení.
- zařízení můžete kontrolovat, čistit nebo vynutit offline v Login Device Management.

Změna administrátorského jména nebo hesla zneplatní staré administrátorské relace. Musíte se přihlásit znovu.

## Co dělá Login Device Management

Login Device Management ukazuje zařízení, která se přihlásila.

Pomáhá zkontrolovat:

- která zařízení přistupovala do administrace.
- která zařízení používala upload stránku na straně uživatele.
- kteří WebDAV klienti se připojili.
- zda je relace zařízení stále platná.
- zda je potřeba stará zařízení vynutit offline.

Stránka má tři karty:

- Admin
- User
- WebDAV

## Globální zabezpečení cookies

V horní části Login Device Management můžete nastavit globální chování cookies.

### Životnost cookie uživatele

Určuje, kolik dní zůstane přihlášení na straně uživatele aktivní.

Například při nastavení na 14 dní návštěvníci obvykle nemusí znovu zadávat heslo pro nahrávání po dobu 14 dní.

### Životnost cookie administrátora

Určuje, kolik dní zůstane administrátorské přihlášení aktivní.

Například při nastavení na 14 dní se administrátoři obvykle nemusí znovu přihlašovat po dobu 14 dní.

### Secure Mode

Když je Secure mode zapnutý, prohlížeče posílají přihlašovací cookies pouze přes HTTPS.

Zapněte ho pro produkční HTTPS weby. Nezapínejte ho při lokálním HTTP testování, jinak můžete vidět chování typu „přihlášení proběhlo, ale po obnovení jsem odhlášený“.

## Administrátorská přihlášená zařízení

Karta Admin ukazuje zařízení, která se přihlásila do administrace.

Záznamy zařízení se zobrazují až po nastavení administrátorských údajů a po přístupu do administrace přes přihlášení.

Každá karta zařízení může ukazovat:

- informace o zařízení a prohlížeči
- IP prvního přihlášení
- IP poslední aktivity
- čas přihlášení
- čas poslední aktivity
- čas vypršení
- aktuální stav

Pokud vidíte neznámé zařízení, použijte `Force Offline` pro zneplatnění relace.

## Vyčištění starých zařízení

`Clean Up Old Devices` hromadně odstraní staré záznamy přihlášení na aktuální kartě.

Použijte to, když máte podezření, že staré relace mohou být stále aktivní na jiných zařízeních.

## Vynucení offline

`Force Offline` zneplatní jednu relaci zařízení.

Po vynucení offline:

- administrátorská zařízení se musí znovu přihlásit.
- uživatelská zařízení musí znovu zadat heslo pro nahrávání.
- WebDAV klienti se musí znovu ověřit.

Vypršená nebo neplatná zařízení lze také odstranit.

## Odhlášení aktuálního zařízení

Karta aktuálního zařízení je označená jako `Current Device`.

Po odhlášení aktuálního zařízení:

- aktuální administrátorská relace se odhlásí.
- aktuální uživatelská relace se odhlásí.

Před dalším používáním dané části je potřeba se znovu přihlásit.
