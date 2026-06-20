# Ustawienia strony

Ustawienia strony kontrolują wygląd witryny, domyślne ustawienia strony uploadu, obrazy tła i wygląd panelu administracyjnego.

## Ustawienia globalne

| Opcja | Cel |
| --- | --- |
| Tytuł strony | Tytuł widoczny na karcie przeglądarki. |
| Ikona strony | Mała ikona widoczna na karcie przeglądarki. |
| Nazwa ImgBed | Nazwa widoczna na stronach frontendu. |
| Logo ImgBed | Obraz logo widoczny na stronach frontendu. |
| Link logo | URL otwierany po kliknięciu logo lub avatara. |
| Interwał zmiany tła | Czas rotacji wielu teł w milisekundach. `60000` oznacza 60 sekund. |
| Przezroczystość tła | Przezroczystość obrazu tła od `0` do `1`. Niższe wartości są jaśniejsze. |
| Domyślny prefiks URL | Prefiks używany przy generowaniu linków obrazów. Puste pole oznacza bieżącą domenę strony. |

## Ustawienia klienta

| Opcja | Cel |
| --- | --- |
| Ogłoszenie | Komunikat widoczny u góry strony uploadu. HTML jest obsługiwany. |
| Domyślny kanał uploadu | Kanał domyślnie wybrany na stronie uploadu. Możesz też wybrać Smart Dispatch. |
| Domyślny katalog uploadu | Domyślny katalog, np. `/user/`. Puste lub `/` oznacza katalog główny. |
| Domyślna metoda nazewnictwa | Strategia generowania nazwy pliku po uploadzie. Patrz niżej. |
| Domyślna konwersja do WebP | Konwertuje obrazy do WebP przed uploadem. |
| Domyślna kompresja | Kompresuje obrazy lokalnie w przeglądarce przed uploadem. |
| Domyślny próg kompresji | Automatycznie kompresuje obraz, gdy przekroczy ten rozmiar w MB. |
| Domyślny rozmiar docelowy | Docelowy rozmiar pliku po kompresji, w MB. |
| Tło strony logowania | Obraz tła dla strony logowania użytkownika. |
| Tło strony uploadu | Obraz tła dla strony uploadu. |
| Link portalu w stopce | URL otwierany przez przycisk portalu w stopce. |
| Ukryj stopkę | Ukrywa stopkę frontendu po włączeniu. |

## Ustawienia administratora

| Opcja | Cel |
| --- | --- |
| Tło logowania administratora | Obraz tła dla strony logowania administratora. |
| Tło administratora | Obraz tła dla stron administracyjnych. Można użyć jednego URL-a obrazu albo wielu URL-i. |
| Tryb ładowania obrazów | Tryb podglądu na liście plików administratora. Original ładuje oryginalne obrazy. Smart loading preferuje miniatury dla publicznych obrazów i oryginały dla ograniczonych obrazów. |
| Źródło miniatur | Usługa generowania miniatur: wsrv.nl, Cloudflare Image Resizing albo WordPress Photon. Cloudflare Image Resizing musi być włączone w Cloudflare przed wyborem. |
| Widget Live2D | Pokazuje postać Live2D w panelu administracyjnym. |
| Efekt fajerwerków po kliknięciu | Pokazuje efekt fajerwerków po kliknięciu strony. |
| Gwiezdny ślad kursora | Pokazuje ślad gwiazd podczas poruszania myszą. |

## Formaty obrazów tła

Tło strony logowania, tło strony uploadu i tło logowania administratora obsługują:

| Wartość | Efekt |
| --- | --- |
| `bing` | Używa rotacji tapet Bing. |
| `["https://example.com/1.jpg","https://example.com/2.jpg"]` | Rotuje wiele obrazów. |
| `["https://example.com/1.jpg"]` | Używa jednego obrazu tła. |
| `["https://your-domain.com/random?..."]` | Używa linku Random Image API. Możesz skonfigurować własne Random Image API w Innych ustawieniach, a potem wkleić tu wygenerowany link jako pojedyncze tło. |

Tło administratora obsługuje URL-e obrazów. Wiele URL-i można oddzielić angielskimi przecinkami, zgodnie z podpowiedzią na stronie. Puste pole oznacza użycie domyślnego tła.

## Domyślna metoda nazewnictwa

| Metoda | Wynik |
| --- | --- |
| Default | Prefiks czasowo-losowy + oryginalna nazwa pliku, np. `1760000000000_cat.png`. |
| Tylko prefiks | Prefiks czasowo-losowy i rozszerzenie, np. `1760000000000.png`. |
| Tylko oryginalna nazwa | Zachowuje oryginalną nazwę pliku, np. `cat.png`. Przy duplikatach ImgBed dodaje `(1)`, `(2)` itd. |
| Krótki link | Używa 8-znakowego krótkiego ID i rozszerzenia, np. `a1b2c3d4.png`. |
