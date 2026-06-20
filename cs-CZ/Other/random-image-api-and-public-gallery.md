# Random Image API a veřejná galerie

Obě funkce se nastavují v:

```text
System Settings -> Other Settings
```

## Random Image API

Random Image API vrací jeden náhodný soubor z vybraných adresářů. Hodí se pro pozadí webu, rotaci avatarů nebo volání náhodných obrázků z externích stránek.

Po zapnutí použijte:

```text
https://your-domain.com/random
```

## Nastavení Random Image API

| Volba | Účel |
| --- | --- |
| Enable | Zapne nebo vypne endpoint `/random`. Při vypnutí je přístup zakázán. |
| Directories | Omezuje adresáře, které může random API používat. Adresáře mimo seznam API nepoužije. |
| Call demo | Vygeneruje odkazy random API, které můžete rovnou zkopírovat. |

Můžete vybrat více adresářů. Pokud jsou povolené jen `/landscape/` a `/portrait/`, random API vybírá soubory jen z těchto adresářů a jejich podadresářů.

## Parametry Random Image API

| Parametr | Příklad | Účel |
| --- | --- | --- |
| `dir` | `/landscape/` | Určuje náhodný adresář. |
| `content` | `image` | Určuje typ média. Použijte `image`, `video`, `audio` nebo kombinace oddělené čárkou. |
| `orientation` | `auto` | Filtruje orientaci obrázku. Použijte `portrait`, `landscape` nebo `auto`. |
| `type` | `url` | Formát odpovědi. Prázdné znamená redirect, `url` vrátí textový URL, `json` vrátí JSON. |
| `origin` | `1` | S `type=url` vrátí plný URL. |
| `age` | `all-ages,r12` | Filtruje podle věkového ratingu. |
| `tag` | `wallpaper,sky` | Vrátí jen soubory obsahující tyto tagy. |
| `ex` | `private` | Vyloučí soubory obsahující tyto tagy. |

## Formáty odpovědi

Bez `type` API přesměruje přímo na URL náhodného souboru.

S `type=url` vrátí textový URL.

S `type=json` vrátí informace o souboru včetně URL, ID souboru, názvu, typu, tagů, ratingu a metadat.

## Pravidla přístupu

Random Image API respektuje pravidla veřejného přístupu:

| Pravidlo | Dopad |
| --- | --- |
| Omezení adresáře | Vybrány mohou být jen soubory v povolených adresářích. |
| Blocklist | Soubory na blocklist jsou vyloučené z náhodné množiny. |
| Allowlist režim | Po zapnutí se vracejí jen soubory povolené pro veřejný přístup. |
| Věkový rating | R12, R16, R18 a podobný obsah se filtruje podle aktuálního režimu přístupu. |

Pokud po filtrování nezůstane žádný soubor, API nevrátí odpovídající výsledek.

## Cache

Random Image API cacheuje kandidátní množiny adresářů kvůli rychlosti.

Po změnách souborů ImgBed aktualizuje verzi cache adresáře a další požadavky množinu kandidátů znovu sestaví. Prázdné adresáře se cacheují krátce, aby se zamezilo opakovaným dotazům.

## Veřejná galerie

Veřejná galerie poskytuje návštěvníkům read-only stránku pro adresáře, které jim chcete zpřístupnit.

Po zapnutí mohou návštěvníci otevřít:

```text
https://your-domain.com/browse/directory-name
```

## Nastavení veřejné galerie

| Volba | Účel |
| --- | --- |
| Enable | Zapne nebo vypne veřejnou galerii. Při vypnutí ji návštěvníci nemohou procházet. |
| Image loading mode | Určuje, zda náhledy používají originály nebo miniatury. |
| Open directories | Nastavuje, které adresáře mohou návštěvníci otevřít. |

## Režim načítání obrázků

| Režim | Účel |
| --- | --- |
| Original | Stránka návštěvníka načítá přímo původní soubory. |
| Thumbnail | Stránka návštěvníka preferuje miniatury pro rychlejší načítání. |

## Otevřené adresáře

Otevřené adresáře určují, co návštěvníci uvidí.

Příklad:

```text
/1/,/2/,/landscape/,/portrait/
```

Návštěvníci pak mohou otevřít:

```text
https://your-domain.com/browse/1
https://your-domain.com/browse/2
https://your-domain.com/browse/landscape
https://your-domain.com/browse/portrait
```

Lze otevřít i podadresáře, například `/2026/lucky/`. Adresáře, které nejsou otevřené, jsou pro návštěvníky blokované.

## Funkce veřejné galerie

| Funkce | Popis |
| --- | --- |
| Procházení adresářů | Zobrazení souborů a podadresářů v otevřených adresářích. |
| Vyhledávání | Hledání podle názvu souboru, ID souboru nebo tagů. |
| Filtr typu | Filtrování obrázků, videí, audia nebo jiných souborů. |
| Filtr tagů | Zahrnutí nebo vyloučení vybraných tagů. |
| Filtr orientace | Filtrování obrázků na šířku nebo na výšku. |
| Časový filtr | Filtrování podle rozsahu času uploadu. |
| Filtr přípony | Filtrování podle přípony souboru. |
| Kopírování odkazu | Kopírování přístupových odkazů k souborům. |
| Náhled médií | Zobrazení nebo přehrání obrázků, videí a audia na stránce návštěvníka. |

## Pravidla přístupu veřejné galerie

Veřejná galerie také respektuje pravidla veřejného přístupu:

| Pravidlo | Dopad |
| --- | --- |
| Otevřené adresáře | Zobrazují se jen povolené adresáře. |
| Access mode | Obsah se filtruje podle aktuálního režimu věkového ratingu. |
| Allowlist režim | Po zapnutí se zobrazují jen soubory povolené pro veřejný přístup. |
| Blocklist | Soubory na blocklist jsou skryté. |
