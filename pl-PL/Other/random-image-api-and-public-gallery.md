# API losowych obrazów i publiczna galeria

Obie funkcje konfiguruje się w:

```text
System Settings -> Other Settings
```

## API losowych obrazów

API losowych obrazów zwraca jeden losowy plik z wybranych katalogów. Przydaje się do teł strony, rotacji awatarów albo losowych wywołań obrazów z zewnętrznych stron.

Po włączeniu użyj:

```text
https://your-domain.com/random
```

## Ustawienia API losowych obrazów

| Opcja | Cel |
| --- | --- |
| Włącz | Włącza lub wyłącza punkt końcowy `/random`. Po wyłączeniu dostęp jest zabroniony. |
| Katalogi | Ogranicza katalogi, z których API może korzystać. Katalogi spoza tej listy nie mogą być używane przez API. |
| Demo wywołania | Generuje linki API losowych obrazów gotowe do skopiowania. |

Możesz wybrać wiele katalogów. Jeśli dozwolone są tylko `/landscape/` i `/portrait/`, API losowych obrazów może wybierać pliki tylko z tych katalogów i ich podkatalogów.

## Parametry API losowych obrazów

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

Z `type=json` zwraca informacje o pliku, w tym URL, ID, nazwę, typ, tagi, klasyfikację i powiązane metadane.

## Reguły dostępu

API losowych obrazów przestrzega publicznych reguł dostępu:

| Reguła | Efekt |
| --- | --- |
| Ograniczenie katalogu | Wybrane mogą być tylko pliki w dozwolonych katalogach. |
| Lista blokowanych | Pliki z listy blokowanych są wykluczone z puli losowania. |
| Tryb listy dozwolonych | Po włączeniu zwracane są tylko pliki dopuszczone do publicznego dostępu. |
| Klasyfikacja wiekowa | R12, R16, R18 i podobne treści są filtrowane według bieżącego trybu dostępu. |

Jeśli po filtrowaniu nie ma pasującego pliku, API nie zwraca wyniku.

## Pamięć podręczna

API losowych obrazów przechowuje pule kandydatów katalogów w pamięci podręcznej, aby działać szybciej.

Po zmianach plików ImgBed aktualizuje wersję pamięci podręcznej katalogu, a kolejne żądania odbudowują pulę kandydatów. Puste katalogi są krótko przechowywane w pamięci podręcznej, aby uniknąć powtarzanych zapytań.

## Publiczna galeria

Publiczna galeria udostępnia odwiedzającym stronę tylko do odczytu dla katalogów, które udostępnisz im do przeglądania.

Po włączeniu odwiedzający mogą otworzyć:

```text
https://your-domain.com/browse/directory-name
```

## Ustawienia publicznej galerii

| Opcja | Cel |
| --- | --- |
| Włącz | Włącza lub wyłącza publiczną galerię. Po wyłączeniu odwiedzający nie mogą jej przeglądać. |
| Tryb ładowania obrazów | Określa, czy podglądy używają oryginalnych obrazów, czy miniatur. |
| Otwarte katalogi | Ustala, do których katalogów odwiedzający mają dostęp. |

## Tryb ładowania obrazów

| Tryb | Cel |
| --- | --- |
| Oryginał | Strona odwiedzającego ładuje bezpośrednio oryginalne pliki. |
| Miniatura | Strona odwiedzającego preferuje miniatury dla szybszego ładowania. |

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

Można też udostępniać podkatalogi, np. `/2026/lucky/`. Dostęp odwiedzających do katalogów, które nie są otwarte, jest blokowany.

## Funkcje publicznej galerii

| Funkcja | Opis |
| --- | --- |
| Przeglądanie katalogów | Oglądanie plików i podkatalogów w otwartych katalogach. |
| Wyszukiwanie | Szukanie po nazwie pliku, ID pliku lub tagach. |
| Filtr typu | Filtrowanie obrazów, wideo, audio lub innych plików. |
| Filtr tagów | Uwzględnianie lub wykluczanie wybranych tagów. |
| Filtr orientacji | Filtrowanie obrazów poziomych lub pionowych. |
| Filtr czasu | Filtrowanie według zakresu czasu przesłania. |
| Filtr rozszerzenia | Filtrowanie po rozszerzeniu pliku. |
| Kopiowanie linku | Kopiowanie linków dostępu do plików. |
| Podgląd mediów | Wyświetlanie obrazów oraz odtwarzanie wideo i audio na stronie odwiedzającego. |

## Reguły dostępu do publicznej galerii

Publiczna galeria również przestrzega publicznych reguł dostępu:

| Reguła | Efekt |
| --- | --- |
| Otwarte katalogi | Pokazywane są tylko dozwolone katalogi. |
| Tryb dostępu | Treści są filtrowane według bieżącego trybu dostępu opartego na klasyfikacji wiekowej. |
| Tryb listy dozwolonych | Po włączeniu pokazywane są tylko pliki dopuszczone do publicznego dostępu. |
| Lista blokowanych | Pliki z listy blokowanych są ukryte. |
