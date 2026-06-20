# Moderacja obrazów i tryb dostępu

Moderacja obrazów przypisuje przesłanym obrazom klasyfikację wiekową. Tryb dostępu określa, które klasyfikacje są widoczne publicznie.

Wpływa to na publiczną galerię, publiczne URL-e plików i Random Image API. Nie ogranicza panelu administracyjnego. Administratorzy nadal mogą widzieć i zarządzać wszystkimi plikami.

## Gdzie skonfigurować

Otwórz panel administracyjny, a następnie przejdź do:

```text
System Settings -> Security Settings -> Upload Management -> Image Moderation
```

Główne ustawienia to:

- Access mode
- Enable moderation
- Moderation provider

## Co robi Access Mode

Access mode określa, które klasyfikacje wiekowe mogą być pokazywane publicznie.

Aktualne tryby:

| Access Mode | Publicznie widoczne ratingi |
| --- | --- |
| Adult mode | General, R12, R16, R18 |
| Youth mode | General, R12, R16 |
| Teen mode | General, R12 |
| Child mode | Tylko General |

Domyślny tryb to Adult mode.

Dla stron prywatnych lub z treściami dla dorosłych Adult mode może być właściwy. Dla bardziej zachowawczej galerii publicznej wybierz Youth, Teen albo Child mode.

## Co daje włączenie moderacji

Po włączeniu moderacji ImgBed wywołuje wybranego dostawcę podczas uploadu i zapisuje wykrytą klasyfikację wiekową.

Główne ratingi:

| Rating | Znaczenie |
| --- | --- |
| General | Bezpieczna treść publiczna |
| R12 | Lekko wrażliwa treść |
| R16 | Umiarkowanie wrażliwa treść |
| R18 | Treść dla dorosłych |

Wynik moderacji jest używany przy decyzji o publicznym dostępie.

Jeśli moderacja nie jest włączona albo stare pliki nie mają ratingu, są traktowane jako niesklasyfikowane. Pliki bez ratingu nie są automatycznie usuwane z publicznej galerii ani Random Image API tylko dlatego, że nie mają wyniku moderacji.

## Wybór dostawcy moderacji

Dostępni dostawcy obejmują:

- moderatecontent.com
- nsfwjs
- Sightengine

Każdy dostawca ma inne wymagania:

- moderatecontent.com zwykle wymaga API Key.
- nsfwjs zwykle wymaga URL-a endpointu API.
- Sightengine wymaga API user i API secret.

Wybierz według konta, dostępności i jakości wykrywania. Jeśli moderacja jest włączona i poprawnie skonfigurowana, ImgBed próbuje zapisać rating obrazu podczas uploadu.

## Wpływ na publiczną galerię

Publiczna galeria filtruje pliki zgodnie z trybem dostępu.

Przykłady:

- Adult mode: obrazy R18 mogą się pojawić.
- Youth mode: obrazy R18 są ukryte.
- Teen mode: obrazy R16 i R18 są ukryte.
- Child mode: pokazywane są tylko obrazy General.

Dotyczy to tylko zwykłego publicznego dostępu. Panel administracyjny nadal pokazuje wszystkie pliki.

## Wpływ na publiczne URL-e plików

Publiczne URL-e plików to bezpośrednie linki obrazów otwierane przez odwiedzających.

Jeśli rating pliku jest dozwolony w bieżącym trybie, ImgBed zwraca oryginalny obraz.

Jeśli rating przekracza dozwolony poziom, zwykły publiczny dostęp nie zwraca oryginalnego obrazu. ImgBed zwraca skonfigurowany wynik blokady albo obraz zastępczy.

Przykład:

- Bieżący tryb to Child mode.
- Obraz ma rating R18.
- Odwiedzający otwiera publiczny URL bezpośrednio.
- ImgBed nie zwraca temu odwiedzającemu oryginalnego obrazu R18.

![Obraz pliku z ograniczeniem](../../image/Safety/文件受限图.png)

Administratorzy oglądający pliki w panelu administracyjnym nie są objęci tym ograniczeniem.

## Wpływ na Random Image API

Random Image API również filtruje pulę kandydatów według trybu dostępu.

W Child mode losowe obrazy są wybierane tylko z plików General.

W Youth mode losowe obrazy mogą pochodzić z General, R12 i R16, ale nie z R18.

Dzięki temu Random Image API nie omija ograniczeń publicznej galerii.

## Relacja z regułami list

Access mode nie jest jedyną regułą publicznego dostępu. Działa razem z allowlist i blocklist.

W skrócie:

- Treści z allowlist są publiczne w pierwszej kolejności.
- Treści z blocklist nie mogą być oglądane bezpośrednio przez zwykłych odwiedzających.
- Treści poza obiema listami są następnie sprawdzane według access mode.

Jeśli obraz jest ograniczony zarówno przez rating wiekowy, jak i reguły list, zwykli odwiedzający nadal nie mogą zobaczyć oryginalnego pliku bezpośrednio.

## Zalecane ustawienia

Dla stron publicznych:

- Włącz moderację.
- Wybierz tryb dostępu pasujący do odbiorców strony.
- Użyj Child mode albo Teen mode dla odwiedzających w każdym wieku.
- Unikaj Adult mode, jeśli nie chcesz pokazywać dojrzałych treści publicznie.
- Sprawdzaj ratingi w panelu administracyjnym i poprawiaj ręcznie, gdy trzeba.

Dla stron prywatnych lub osobistych:

- Adult mode zwykle jest wystarczający.
- Włącz moderację, jeśli jest przydatna.
- Sprawdzaj i poprawiaj ratingi w panelu administracyjnym według potrzeb.

## FAQ

### Czy pliki znikną z panelu administracyjnego po zmianie Access Mode?

Nie.

Access mode wpływa tylko na zwykły publiczny dostęp. Nie wpływa na panel administracyjny.

### Dlaczego publiczna galeria pokazuje mniej obrazów po przełączeniu na Child mode?

Child mode pozwala publicznie pokazywać tylko pliki General. R12, R16 i R18 są filtrowane.

### Czy publiczne URL-e mogą nadal otwierać obrazy dla dorosłych?

Jeśli bieżący tryb dostępu nie pozwala na dany rating, zwykłe publiczne URL-e nie zwracają oryginalnego obrazu.

### Czy Random Image API może zwrócić ograniczone obrazy?

Nie.

Random Image API filtruje kandydatów według bieżącego trybu dostępu.

### Co ze starymi obrazami bez ratingu?

Obrazy bez ratingu nie są automatycznie ukrywane tylko dlatego, że nie mają wyniku moderacji. Możesz później zmienić ich rating w panelu administracyjnym.
