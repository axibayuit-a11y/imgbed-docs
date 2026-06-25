# Ustawienia strony

Ustawienia strony kontrolują wygląd witryny, domyślne ustawienia strony przesyłania, obrazy tła i wygląd panelu administracyjnego.

## Ustawienia globalne

| Opcja | Cel |
| --- | --- |
| Tytuł strony | Tytuł widoczny na karcie przeglądarki. |
| Ikona strony | Mała ikona widoczna na karcie przeglądarki. |
| Nazwa ImgBed | Nazwa widoczna na stronach interfejsu publicznego. |
| Logo ImgBed | Obraz logo widoczny na stronach interfejsu publicznego. |
| Link logo | URL otwierany po kliknięciu logo lub avatara. |
| Interwał zmiany tła | Czas rotacji wielu teł w milisekundach. `60000` oznacza 60 sekund. |
| Przezroczystość tła | Przezroczystość obrazu tła od `0` do `1`. Niższe wartości są jaśniejsze. |
| Domyślny prefiks URL | Prefiks używany przy generowaniu linków obrazów. Puste pole oznacza bieżącą domenę strony. |

## Ustawienia klienta

| Opcja | Cel |
| --- | --- |
| Ogłoszenie | Komunikat widoczny u góry strony przesyłania. HTML jest obsługiwany. |
| Domyślny kanał przesyłania | Kanał domyślnie wybrany na stronie przesyłania. Możesz też wybrać Smart Dispatch. |
| Domyślny katalog przesyłania | Domyślny katalog przesyłania, np. `/user/`. Puste lub `/` oznacza katalog główny. |
| Domyślna metoda nazewnictwa | Strategia generowania nazwy pliku po przesłaniu. Patrz niżej. |
| Domyślna konwersja do WebP | Konwertuje obrazy do WebP przed przesłaniem. |
| Domyślna kompresja | Kompresuje obrazy lokalnie w przeglądarce przed przesłaniem. |
| Domyślny próg kompresji | Automatycznie kompresuje obraz, gdy przekroczy ten rozmiar w MB. |
| Domyślny rozmiar docelowy | Docelowy rozmiar pliku po kompresji, w MB. |
| Tło strony logowania | Obraz tła dla strony logowania użytkownika. |
| Tło strony przesyłania | Obraz tła dla strony przesyłania. |
| Link portalu w stopce | URL otwierany przez przycisk portalu w stopce. |
| Ukryj stopkę | Ukrywa stopkę interfejsu publicznego po włączeniu. |

## Ustawienia administratora

| Opcja | Cel |
| --- | --- |
| Tło logowania administratora | Obraz tła dla strony logowania administratora. |
| Tło administratora | Obraz tła dla stron administracyjnych. Można użyć jednego URL-a obrazu albo wielu URL-i. |
| Tryb ładowania obrazów | Tryb ładowania podglądu na liście plików administratora. Tryb oryginalnych obrazów ładuje oryginalne obrazy. Inteligentne ładowanie preferuje miniatury dla obrazów publicznych i oryginały dla obrazów z ograniczonym dostępem. |
| Źródło miniatur | Usługa generowania miniatur: wsrv.nl, Cloudflare Image Resizing albo WordPress Photon. Cloudflare Image Resizing musi być włączone w Cloudflare przed wyborem. |
| Widget Live2D | Pokazuje postać Live2D w panelu administracyjnym. |
| Efekt fajerwerków po kliknięciu | Pokazuje efekt fajerwerków po kliknięciu strony. |
| Gwiezdny ślad kursora | Pokazuje ślad gwiazd podczas poruszania myszą. |

## Formaty obrazów tła

Tło strony logowania, tło strony przesyłania i tło logowania administratora obsługują te formaty:

| Wartość | Efekt |
| --- | --- |
| `bing` | Używa rotacji tapet Bing. |
| `["https://example.com/1.jpg","https://example.com/2.jpg"]` | Rotuje wiele obrazów. |
| `["https://example.com/1.jpg"]` | Używa jednego obrazu tła. |
| `["https://your-domain.com/random?..."]` | Używa linku API losowego obrazu. Możesz skonfigurować własne API losowego obrazu w Innych ustawieniach, a potem wkleić tu wygenerowany link jako wpis pojedynczego tła. |

Tło administratora obsługuje URL-e obrazów. Wiele URL-i można oddzielić angielskimi przecinkami, zgodnie z podpowiedzią na stronie. Puste pole oznacza użycie domyślnego tła.

## Domyślna metoda nazewnictwa

| Metoda | Wynik |
| --- | --- |
| Domyślnie | Prefiks losowy oparty na czasie + oryginalna nazwa pliku, np. `1760000000000_cat.png`. |
| Tylko prefiks | Prefiks losowy oparty na czasie i rozszerzenie, np. `1760000000000.png`. |
| Tylko oryginalna nazwa | Zachowuje oryginalną nazwę pliku, np. `cat.png`. Przy duplikatach ImgBed dodaje `(1)`, `(2)` itd. |
| Krótki link | Używa 8-znakowego krótkiego ID i rozszerzenia, np. `a1b2c3d4.png`. |
