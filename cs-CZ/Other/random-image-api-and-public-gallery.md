# API náhodných obrázků a veřejná galerie

Obě funkce se nastavují zde:

```text
System Settings -> Other Settings
```

## API náhodných obrázků

API náhodných obrázků vrací jeden náhodný soubor z vybraných adresářů. Hodí se pro pozadí webu, rotaci avatarů nebo volání náhodných obrázků z externích stránek.

Po zapnutí použijte:

```text
https://your-domain.com/random
```

## Nastavení API náhodných obrázků

| Volba | Účel |
| --- | --- |
| Povolit | Zapne nebo vypne koncový bod `/random`. Když je vypnutý, přístup je zakázán. |
| Adresáře | Omezuje adresáře, které může náhodné API používat. Adresáře mimo tento seznam API použít nemůže. |
| Ukázka volání | Vygeneruje odkazy náhodného API, které můžete rovnou zkopírovat. |

Můžete vybrat více adresářů. Pokud jsou například povolené jen `/landscape/` a `/portrait/`, náhodné API může vybírat soubory jen z těchto adresářů a jejich podadresářů.

## Parametry API náhodných obrázků

| Parametr | Příklad | Účel |
| --- | --- | --- |
| `dir` | `/landscape/` | Určuje náhodný adresář. |
| `content` | `image` | Určuje typ média. Použijte `image`, `video`, `audio` nebo kombinace oddělené čárkou. |
| `orientation` | `auto` | Filtruje orientaci obrázku. Použijte `portrait`, `landscape` nebo `auto`. |
| `type` | `url` | Formát odpovědi. Prázdná hodnota znamená přesměrování, `url` vrátí textovou URL, `json` vrátí JSON. |
| `origin` | `1` | S `type=url` vrátí úplnou URL. |
| `age` | `all-ages,r12` | Filtruje podle věkového hodnocení. |
| `tag` | `wallpaper,sky` | Vrátí jen soubory obsahující tyto štítky. |
| `ex` | `private` | Vyloučí soubory obsahující tyto štítky. |

## Formáty odpovědi

Bez `type` API přesměruje přímo na URL náhodného souboru.

S `type=url` vrátí textovou URL.

S `type=json` vrátí informace o souboru včetně URL souboru, ID souboru, názvu souboru, typu souboru, štítků, hodnocení a souvisejících metadat.

## Pravidla přístupu

API náhodných obrázků dodržuje pravidla veřejného přístupu:

| Pravidlo | Dopad |
| --- | --- |
| Omezení adresářů | Vybrány mohou být jen soubory v povolených adresářích. |
| Seznam blokovaných | Soubory na seznamu blokovaných jsou z náhodného výběru vyloučeny. |
| Režim seznamu povolených | Po zapnutí se vracejí jen soubory povolené pro veřejný přístup. |
| Věkové hodnocení | R12, R16, R18 a podobný obsah se filtruje podle aktuálního režimu přístupu. |

Pokud po filtrování neodpovídá žádný soubor, API nevrátí žádný odpovídající výsledek.

## Mezipaměť

API náhodných obrázků ukládá kandidátní množiny adresářů do mezipaměti, aby zlepšilo rychlost.

Po změně souborů ImgBed aktualizuje verzi mezipaměti adresáře a další požadavky kandidátní množinu znovu sestaví. Prázdné adresáře se ukládají do mezipaměti krátce, aby se zamezilo opakovaným dotazům.

## Veřejná galerie

Veřejná galerie poskytuje veřejnou stránku jen pro čtení pro adresáře, které chcete návštěvníkům zpřístupnit.

Po zapnutí mohou návštěvníci otevřít:

```text
https://your-domain.com/browse/directory-name
```

## Nastavení veřejné galerie

| Volba | Účel |
| --- | --- |
| Povolit | Zapne nebo vypne veřejnou galerii. Když je vypnutá, návštěvníci ji nemohou procházet. |
| Režim načítání obrázků | Určuje, zda náhledy používají původní obrázky nebo miniatury. |
| Otevřené adresáře | Nastavuje, ke kterým adresářům mohou návštěvníci přistupovat. |

## Režim načítání obrázků

| Režim | Účel |
| --- | --- |
| Původní | Stránka návštěvníka načítá původní soubory přímo. |
| Miniatura | Stránka návštěvníka upřednostňuje miniatury pro rychlejší načítání. |

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

Otevřít lze i podadresáře, například `/2026/lucky/`. Adresáře, které nejsou otevřené, jsou pro návštěvníky blokované.

## Funkce veřejné galerie

| Funkce | Popis |
| --- | --- |
| Procházení adresářů | Zobrazení souborů a podadresářů v otevřených adresářích. |
| Vyhledávání | Hledání podle názvu souboru, ID souboru nebo štítků. |
| Filtr typu | Filtrování obrázků, videí, audia nebo jiných souborů. |
| Filtr štítků | Zahrnutí nebo vyloučení vybraných štítků. |
| Filtr orientace | Filtrování obrázků na šířku nebo na výšku. |
| Časový filtr | Filtrování podle rozsahu času nahrání. |
| Filtr přípony | Filtrování podle přípony souboru. |
| Kopírování odkazu | Kopírování přístupových odkazů k souborům. |
| Náhled médií | Zobrazení nebo přehrání obrázků, videí a audia na stránce návštěvníka. |

## Pravidla přístupu veřejné galerie

Veřejná galerie také dodržuje pravidla veřejného přístupu:

| Pravidlo | Dopad |
| --- | --- |
| Otevřené adresáře | Zobrazují se jen povolené adresáře. |
| Režim přístupu | Obsah se filtruje podle aktuálního režimu přístupu s věkovým hodnocením. |
| Režim seznamu povolených | Po zapnutí se zobrazují jen soubory povolené pro veřejný přístup. |
| Seznam blokovaných | Soubory na seznamu blokovaných jsou skryté. |
