# Random Image API i publiczna galeria

Obie funkcje konfiguruje się w:

```text
System Settings -> Other Settings
```

## Random Image API

Random Image API zwraca jeden losowy plik z wybranych katalogów. Przydaje się do teł strony, rotacji avatarów albo losowych obrazów wywoływanych z zewnętrznych stron.

Po włączeniu użyj:

```text
https://your-domain.com/random
```

## Ustawienia Random Image API

| Opcja | Cel |
| --- | --- |
| Enable | Włącza lub wyłącza endpoint `/random`. Po wyłączeniu dostęp jest zabroniony. |
| Directories | Ogranicza katalogi, z których API może korzystać. Katalogi spoza tej listy nie mogą być używane. |
| Call demo | Generuje linki random API gotowe do skopiowania. |

Możesz wybrać wiele katalogów. Jeśli dozwolone są tylko `/landscape/` i `/portrait/`, random API może wybierać pliki tylko z tych katalogów i ich podkatalogów.

## Parametry Random Image API

| Parametr | Przykład | Cel |
| --- | --- | --- |
| `dir` | `/landscape/` | Określa losowany katalog. |
| `content` | `image` | Określa typ mediów. Użyj `image`, `video`, `audio` albo kombinacji oddzielonych przecinkami. |
| `orientation` | `auto` | Filtruje orientację obrazu. Użyj `portrait`, `landscape` albo `auto`. |
| `type` | `url` | Format odpowiedzi. Puste oznacza przekierowanie, `url` zwraca tekstowy URL, `json` zwraca JSON. |
| `origin` | `1` | Z `type=url` zwraca pełny URL. |
| `age` | `all-ages,r12` | Filtruje według klasyfikacji wiekowej. |
| `tag` | `wallpaper,sky` | Zwraca tylko pliki zawierające te tagi. |
| `ex` | `private` | Wyklucza pliki zawierające te tagi. |

## Formaty odpowiedzi

Bez `type` API przekierowuje bezpośrednio do URL-a losowego pliku.

Z `type=url` zwraca URL jako tekst.

Z `type=json` zwraca informacje o pliku, w tym URL, ID, nazwę, typ, tagi, rating i powiązane metadane.

## Reguły dostępu

Random Image API przestrzega publicznych reguł dostępu:

| Reguła | Efekt |
| --- | --- |
| Ograniczenie katalogu | Wybrane mogą być tylko pliki w dozwolonych katalogach. |
| Blocklist | Pliki z blocklist są wykluczone z puli losowania. |
| Tryb allowlist | Po włączeniu zwracane są tylko pliki dopuszczone do publicznego dostępu. |
| Klasyfikacja wiekowa | R12, R16, R18 i podobne treści są filtrowane według bieżącego trybu dostępu. |

Jeśli po filtrowaniu nie ma pasującego pliku, API nie zwraca wyniku.

## Cache

Random Image API cache'uje pule kandydatów katalogów, aby działać szybciej.

Po zmianach plików ImgBed aktualizuje wersję cache katalogu, a kolejne żądania odbudowują pulę kandydatów. Puste katalogi są cache'owane krótko, aby uniknąć powtarzanych zapytań.

## Publiczna galeria

Publiczna galeria udostępnia odwiedzającym stronę tylko do odczytu dla katalogów, które pozwolisz im oglądać.

Po włączeniu odwiedzający mogą otworzyć:

```text
https://your-domain.com/browse/directory-name
```

## Ustawienia publicznej galerii

| Opcja | Cel |
| --- | --- |
| Enable | Włącza lub wyłącza publiczną galerię. Po wyłączeniu odwiedzający nie mogą jej przeglądać. |
| Image loading mode | Określa, czy podglądy używają oryginalnych obrazów, czy miniatur. |
| Open directories | Ustala, do których katalogów odwiedzający mają dostęp. |

## Tryb ładowania obrazów

| Tryb | Cel |
| --- | --- |
| Original | Strona odwiedzającego ładuje bezpośrednio oryginalne pliki. |
| Thumbnail | Strona odwiedzającego preferuje miniatury dla szybszego ładowania. |

## Otwarte katalogi

Otwarte katalogi określają, co widzą odwiedzający.

Przykład:

```text
/1/,/2/,/landscape/,/portrait/
```

Odwiedzający mogą wtedy otworzyć:

```text
https://your-domain.com/browse/1
https://your-domain.com/browse/2
https://your-domain.com/browse/landscape
https://your-domain.com/browse/portrait
```

Można też otwierać podkatalogi, np. `/2026/lucky/`. Odwiedzający są blokowani w katalogach, które nie są otwarte.

## Funkcje publicznej galerii

| Funkcja | Opis |
| --- | --- |
| Przeglądanie katalogów | Oglądanie plików i podkatalogów w otwartych katalogach. |
| Wyszukiwanie | Szukanie po nazwie pliku, ID pliku lub tagach. |
| Filtr typu | Filtrowanie obrazów, wideo, audio lub innych plików. |
| Filtr tagów | Uwzględnianie lub wykluczanie wybranych tagów. |
| Filtr orientacji | Filtrowanie obrazów poziomych lub pionowych. |
| Filtr czasu | Filtrowanie według zakresu czasu uploadu. |
| Filtr rozszerzenia | Filtrowanie po rozszerzeniu pliku. |
| Kopiowanie linku | Kopiowanie linków dostępu do plików. |
| Podgląd mediów | Oglądanie lub odtwarzanie obrazów, wideo i audio na stronie odwiedzającego. |

## Reguły dostępu publicznej galerii

Publiczna galeria również przestrzega publicznych reguł dostępu:

| Reguła | Efekt |
| --- | --- |
| Otwarte katalogi | Pokazywane są tylko dozwolone katalogi. |
| Access mode | Treści są filtrowane według bieżącego trybu klasyfikacji wiekowej. |
| Tryb allowlist | Po włączeniu pokazywane są tylko pliki dopuszczone do publicznego dostępu. |
| Blocklist | Pliki z blocklist są ukryte. |
