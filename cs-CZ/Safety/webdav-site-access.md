# WebDAV přístup k webu (Beta)

Nastavení WebDAV v Bezpečnostních nastaveních zpřístupní váš web ImgBed jako WebDAV endpoint.

Po zapnutí můžete pomocí Windows, macOS, mobilních správců souborů nebo libovolného WebDAV kompatibilního klienta procházet, nahrávat, mazat a spravovat soubory ImgBed jako vzdálenou složku.

Toto je WebDAV přístup k samotnému webu. Liší se od WebDAV úložného kanálu v Nastavení nahrávání. Upload kanál ukládá soubory do externí WebDAV služby. Toto nastavení naopak umožní, aby váš web ImgBed poskytoval WebDAV přístup klientům.

## Kde nastavit

Otevřete administraci a přejděte na:

```text
System Settings -> Security Settings -> WebDAV
```

Dostupná nastavení:

- Enable
- Username
- Password
- Image loading mode
- Default channel

## Co tato funkce dělá

Po zapnutí WebDAV poskytuje ImgBed pevný přístupový URL:

```text
https://your-domain.com/dav
```

Tento URL použijte k připojení ke katalogu souborů ImgBed.

Vhodné použití:

- procházení souborů ImgBed přímo ze správce souborů v počítači.
- přetažení obrázků do WebDAV složky pro upload.
- organizace složek ImgBed z lokálního správce souborů.
- použití WebDAV kompatibilního softwaru pro synchronizaci nebo správu obrázků.
- přístup k obsahu ImgBed bez otevírání administrace.

## Nastavení

### Enable

Zapne WebDAV endpoint.

Když je vypnutý, klienti se přes WebDAV nepřipojí.

### Username a Password

Tyto údaje používají WebDAV klienti při připojení.

Použijte samostatné uživatelské jméno a heslo pro WebDAV. Nepoužívejte znovu administrátorské heslo ani heslo pro upload.

Pokud je uživatelské jméno nebo heslo prázdné, WebDAV klienti se nepřipojí správně.

### Image Loading Mode

Image loading mode určuje, jaký URL obrázku WebDAV klienti preferují při čtení.

Běžné volby:

| Režim | Popis |
| --- | --- |
| Smart loading | ImgBed vybere podle kontextu. Doporučeno pro běžné použití. |
| Original | Preferuje původní obrázky. |
| Thumbnail | Preferuje miniatury. Užitečné pro rychlý náhled. |

Pokud si nejste jistí, ponechte `Smart loading`.

### Default Channel

Výchozí kanál se používá pro WebDAV uploady.

Když z Windows nebo jiného klienta kopírujete soubory do WebDAV adresáře, ImgBed je nahraje přes vybraný výchozí upload kanál.

Pokud není vybraný výchozí kanál, procházení může fungovat, ale uploady mohou selhat.

## Přístup přes WebDAV ve Windows 11

Windows 11 umí WebDAV přidat jako síťové umístění.

1. Otevřete `This PC`.
2. Vyberte `Add a network location`.
3. Zadejte `https://your-domain.com/dav`.
4. Po výzvě zadejte uživatelské jméno a heslo WebDAV.
5. Dokončete průvodce. WebDAV adresář pak půjde otevřít v File Explorer.

![Přidání WebDAV ve Windows 11](../../image/Safety/webdav在win11配置.png)

Po přidání se WebDAV adresář zobrazí v Průzkumníku souborů Windows. Soubory můžete otevírat, kopírovat a spravovat jako běžnou složku.

![WebDAV ve Windows](../../image/Safety/webdav在win显示效果.png)

## Podporované operace

Po úspěšném WebDAV připojení obvykle můžete:

- zobrazovat soubory a složky.
- nahrávat soubory.
- vytvářet složky.
- přejmenovávat soubory nebo složky.
- přesouvat soubory.
- mazat soubory.

WebDAV je vhodný pro každodenní přístup a menší správu souborů. Pro velké přesuny, hromadné mazání nebo složitou organizaci použijte administraci.

## Login Device Management

Úspěšná WebDAV připojení se zobrazují také na kartě WebDAV v Login Device Management.

Můžete tam kontrolovat WebDAV klienty a podle potřeby vynutit stará zařízení offline.

Pokud změníte WebDAV uživatelské jméno nebo heslo, staří klienti se musí přihlásit znovu.

## FAQ

### Windows stále žádá uživatelské jméno a heslo

Zkontrolujte:

- URL je `https://your-domain.com/dav`.
- Uživatelské jméno a heslo odpovídají nastavení WebDAV.
- WebDAV je zapnutý.
- Web je dostupný přes HTTPS.

### Procházení funguje, ale upload ne

Zkontrolujte `Default channel`.

WebDAV uploady potřebují výchozí upload kanál. Pokud chybí, je vypnutý nebo špatně nastavený, uploady mohou selhat.

### Rychlost přístupu je nestabilní

Výkon WebDAV závisí na klientovi, síti, počtu souborů a výchozím upload kanálu.

Pokud má adresář mnoho souborů, uspořádejte je do složek místo uložení příliš mnoha souborů na jednom místě.

## Bezpečnostní doporučení

- Pro WebDAV přístup používejte HTTPS.
- Nastavte silné heslo.
- Nesdílejte WebDAV heslo s nedůvěryhodnými lidmi.
- WebDAV vypněte, když ho nepoužíváte.
- Pravidelně čistěte nepoužívaná WebDAV zařízení v Login Device Management.

## Velikost souboru při WebDAV uploadu

WebDAV klienti nepoužívají prohlížečový chunk upload ze stránky uploadu. Pro soubory nad doporučené limity níže použijte webovou upload stránku.

| Výchozí upload kanál | Doporučený limit jednoho WebDAV souboru |
| --- | ---: |
| Telegram | 20 MB |
| Discord | 10 MB |
| Cloudflare R2 | 30 MB |
| S3 | 30 MB |
| GitHub Releases | 64 MB |
| GitLab Packages | 64 MB |
| Hugging Face | 20 MB |
| OneDrive | 30 MB |
| Google Drive | 30 MB |
| Dropbox | 30 MB |
| Yandex Disk | 30 MB |
| pCloud | 30 MB |
| WebDAV | 64 MB |
