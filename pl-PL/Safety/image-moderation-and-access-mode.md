# Moderacja obrazów i tryb dostępu

Moderacja obrazów przypisuje przesłanym obrazom klasyfikację wiekową. Tryb dostępu określa, które klasyfikacje są widoczne publicznie.

Wpływa to na publiczną galerię, publiczne adresy URL plików i API losowych obrazów. Nie ogranicza panelu administracyjnego. Administratorzy nadal mogą widzieć i zarządzać wszystkimi plikami.

## Gdzie skonfigurować

Otwórz panel administracyjny, a następnie przejdź do:

```text
System Settings -> Security Settings -> Upload Management -> Image Moderation
```

Główne ustawienia to:

- Tryb dostępu
- Włącz moderację
- Dostawca moderacji

## Co robi tryb dostępu

Tryb dostępu określa, które klasyfikacje wiekowe mogą być pokazywane publicznie.

Aktualne tryby:

| Tryb dostępu | Publicznie widoczne klasyfikacje |
| --- | --- |
| Tryb dla dorosłych | General, R12, R16, R18 |
| Tryb młodzieżowy | General, R12, R16 |
| Tryb nastoletni | General, R12 |
| Tryb dziecięcy | Tylko General |

Domyślny tryb to tryb dla dorosłych.

Dla stron prywatnych lub z treściami dla dorosłych tryb dla dorosłych może być właściwy. Dla bardziej zachowawczej galerii publicznej wybierz tryb młodzieżowy, nastoletni albo dziecięcy.

## Co daje włączenie moderacji

Po włączeniu moderacji ImgBed wywołuje wybranego dostawcę podczas przesyłania i zapisuje wykrytą klasyfikację wiekową.

Główne klasyfikacje:

| Klasyfikacja | Znaczenie |
| --- | --- |
| General | Bezpieczna treść publiczna |
| R12 | Lekko wrażliwa treść |
| R16 | Umiarkowanie wrażliwa treść |
| R18 | Treść dla dorosłych |

Wynik moderacji jest używany przy decyzji o publicznym dostępie.

Jeśli moderacja nie jest włączona albo stare pliki nie mają klasyfikacji, są traktowane jako niesklasyfikowane. Pliki bez klasyfikacji nie są automatycznie usuwane z publicznej galerii ani API losowych obrazów tylko dlatego, że nie mają wyniku moderacji.

## Wybór dostawcy moderacji

Dostępni dostawcy obejmują:

- moderatecontent.com
- nsfwjs
- Sightengine

Każdy dostawca ma inne wymagania:

- moderatecontent.com zwykle wymaga klucza API.
- nsfwjs zwykle wymaga adresu URL punktu końcowego API.
- Sightengine wymaga użytkownika API i sekretu API.

Wybierz według konta, dostępności i jakości wykrywania. Jeśli moderacja jest włączona i poprawnie skonfigurowana, ImgBed próbuje zapisać klasyfikację obrazu podczas przesyłania.

## Wpływ na publiczną galerię

Publiczna galeria filtruje pliki zgodnie z trybem dostępu.

Przykłady:

- Tryb dla dorosłych: obrazy R18 mogą się pojawić.
- Tryb młodzieżowy: obrazy R18 są ukryte.
- Tryb nastoletni: obrazy R16 i R18 są ukryte.
- Tryb dziecięcy: pokazywane są tylko obrazy General.

Dotyczy to tylko zwykłego publicznego dostępu. Panel administracyjny nadal pokazuje wszystkie pliki.

## Wpływ na publiczne URL-e plików

Publiczne URL-e plików to bezpośrednie linki obrazów otwierane przez odwiedzających.

Jeśli klasyfikacja pliku jest dozwolona w bieżącym trybie, ImgBed zwraca oryginalny obraz.

Jeśli klasyfikacja przekracza dozwolony poziom, zwykły publiczny dostęp nie zwraca oryginalnego obrazu. ImgBed zwraca skonfigurowany wynik blokady albo obraz zastępczy.

Przykład:

- Bieżący tryb to tryb dziecięcy.
- Obraz ma klasyfikację R18.
- Odwiedzający otwiera publiczny URL bezpośrednio.
- ImgBed nie zwraca temu odwiedzającemu oryginalnego obrazu R18.

![Obraz pliku z ograniczeniem](../../image/Safety/文件受限图.png)

Administratorzy oglądający pliki w panelu administracyjnym nie są objęci tym ograniczeniem.

## Wpływ na API losowych obrazów

API losowych obrazów również filtruje pulę kandydatów według trybu dostępu.

W trybie dziecięcym losowe obrazy są wybierane tylko z plików General.

W trybie młodzieżowym losowe obrazy mogą pochodzić z General, R12 i R16, ale nie z R18.

Dzięki temu API losowych obrazów nie omija ograniczeń publicznej galerii.

## Relacja z regułami list

Tryb dostępu nie jest jedyną regułą publicznego dostępu. Działa razem z listą dozwolonych i listą blokowanych.

W skrócie:

- Treści z listy dozwolonych są publiczne w pierwszej kolejności.
- Treści z listy blokowanych nie mogą być oglądane bezpośrednio przez zwykłych odwiedzających.
- Treści poza obiema listami są następnie sprawdzane według trybu dostępu.

Jeśli obraz jest ograniczony zarówno przez klasyfikację wiekową, jak i reguły list, zwykli odwiedzający nadal nie mogą zobaczyć oryginalnego pliku bezpośrednio.

## Zalecane ustawienia

Dla stron publicznych:

- Włącz moderację.
- Wybierz tryb dostępu pasujący do odbiorców strony.
- Użyj trybu dziecięcego albo nastoletniego dla odwiedzających w każdym wieku.
- Unikaj trybu dla dorosłych, jeśli nie chcesz pokazywać dojrzałych treści publicznie.
- Sprawdzaj klasyfikacje w panelu administracyjnym i poprawiaj je ręcznie, gdy trzeba.

Dla stron prywatnych lub osobistych:

- Tryb dla dorosłych zwykle jest wystarczający.
- Włącz moderację, jeśli jest przydatna.
- Sprawdzaj i poprawiaj klasyfikacje w panelu administracyjnym według potrzeb.

## FAQ

### Czy pliki znikną z panelu administracyjnego po zmianie trybu dostępu?

Nie.

Tryb dostępu wpływa tylko na zwykły publiczny dostęp. Nie wpływa na panel administracyjny.

### Dlaczego publiczna galeria pokazuje mniej obrazów po przełączeniu na tryb dziecięcy?

Tryb dziecięcy pozwala publicznie pokazywać tylko pliki General. R12, R16 i R18 są filtrowane.

### Czy publiczne URL-e mogą nadal otwierać obrazy dla dorosłych?

Jeśli bieżący tryb dostępu nie pozwala na daną klasyfikację, zwykłe publiczne adresy URL nie zwracają oryginalnego obrazu.

### Czy API losowych obrazów może zwrócić ograniczone obrazy?

Nie.

API losowych obrazów filtruje kandydatów według bieżącego trybu dostępu.

### Co ze starymi obrazami bez klasyfikacji?

Obrazy bez klasyfikacji nie są automatycznie ukrywane tylko dlatego, że nie mają wyniku moderacji. Możesz później zmienić ich klasyfikację w panelu administracyjnym.
