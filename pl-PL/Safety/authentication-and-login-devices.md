# Uwierzytelnianie i zarządzanie urządzeniami logowania

`Zarządzanie uwierzytelnianiem` i `Zarządzanie urządzeniami logowania` chronią panel administracyjny ImgBed, publiczne wejście przesyłania i dostęp WebDAV.

Na tej stronie ustawiasz dane dostępu, sprawdzasz zalogowane urządzenia i unieważniasz stare sesje, gdy jest to potrzebne.

## Gdzie skonfigurować

Otwórz panel administracyjny, a następnie przejdź do:

```text
System Settings -> Security Settings
```

Strona zawiera dwa główne obszary:

- Zarządzanie uwierzytelnianiem
- Zarządzanie urządzeniami logowania

![Zarządzanie uwierzytelnianiem](../../image/Safety/认证管理界面.png)

## Do czego służy zarządzanie uwierzytelnianiem

Zarządzanie uwierzytelnianiem przechowuje dane dostępowe.

Są dwa typy:

- Uwierzytelnianie po stronie użytkownika
- Uwierzytelnianie po stronie administratora

## Uwierzytelnianie po stronie użytkownika

Uwierzytelnianie po stronie użytkownika to hasło do przesyłania.

Po ustawieniu hasła zwykli odwiedzający muszą je wpisać przed użyciem strony przesyłania. To przydatne, gdy nie chcesz zostawiać publicznej strony przesyłania otwartej dla wszystkich.

![Strona logowania użytkownika](../../image/Safety/用户端登录界面.png)

### Ustawianie hasła do przesyłania

Po skonfigurowaniu hasła do przesyłania:

- odwiedzający muszą wpisać hasło przed użyciem strony przesyłania.
- przesyłanie jest dostępne dopiero po zaakceptowaniu hasła.
- jeśli sesje urządzeń użytkownika są włączone, ImgBed zapisuje takie urządzenie.

Zmiana hasła do przesyłania unieważnia stare sesje użytkowników. Odwiedzający muszą wpisać nowe hasło ponownie.

## Uwierzytelnianie administratora

Uwierzytelnianie administratora używa nazwy użytkownika i hasła administratora.

Chroni panel administracyjny. W środowisku produkcyjnym warto zawsze je skonfigurować.

![Strona logowania administratora](../../image/Safety/管理端登录界面.png)

### Ustawianie danych administratora

Po skonfigurowaniu nazwy użytkownika i hasła administratora:

- otwarcie panelu administracyjnego wymaga logowania.
- udane logowanie tworzy rekord urządzenia administratora.
- możesz sprawdzać, czyścić lub wymuszać wylogowanie urządzeń w Zarządzaniu urządzeniami logowania.

Zmiana nazwy użytkownika albo hasła administratora unieważnia stare sesje administratora. Trzeba zalogować się ponownie.

## Do czego służy zarządzanie urządzeniami logowania

Zarządzanie urządzeniami logowania pokazuje urządzenia, które się zalogowały.

Pomaga sprawdzić:

- które urządzenia uzyskały dostęp do panelu administracyjnego.
- które urządzenia używały strony przesyłania po stronie użytkownika.
- które klienty WebDAV się połączyły.
- czy sesja urządzenia jest nadal ważna.
- czy stare urządzenia powinny zostać wylogowane.

Strona ma trzy karty:

- Admin
- User
- WebDAV

## Globalne bezpieczeństwo cookies

Na górze Zarządzania urządzeniami logowania możesz ustawić globalne zachowanie plików cookie.

### Czas życia cookie użytkownika

Określa, ile dni logowanie po stronie użytkownika pozostaje aktywne.

Na przykład przy 14 dniach odwiedzający zwykle nie muszą wpisywać hasła do przesyłania przez 14 dni.

### Czas życia cookie administratora

Określa, ile dni logowanie administratora pozostaje aktywne.

Na przykład przy 14 dniach administratorzy zwykle nie muszą logować się ponownie przez 14 dni.

### Tryb bezpieczny

Gdy tryb bezpieczny jest włączony, przeglądarki wysyłają pliki cookie logowania tylko przez HTTPS.

Włącz to dla produkcyjnych stron HTTPS. Nie włączaj przy lokalnych testach HTTP, bo możesz zobaczyć zachowanie typu "logowanie udane, ale po odświeżeniu jestem wylogowany".

## Urządzenia logowania administratora

Karta Admin pokazuje urządzenia zalogowane do panelu administracyjnego.

Rekordy urządzeń pojawiają się dopiero po skonfigurowaniu danych administratora i wejściu do panelu przez logowanie.

Każda karta urządzenia może pokazywać:

- informacje o urządzeniu i przeglądarce
- IP pierwszego logowania
- IP ostatniej aktywności
- czas logowania
- czas ostatniej aktywności
- czas wygaśnięcia
- aktualny status

Jeśli widzisz nieznane urządzenie, użyj `Wymuś offline`, aby unieważnić sesję.

## Czyszczenie starych urządzeń

`Wyczyść stare urządzenia` masowo usuwa stare rekordy logowania w bieżącej karcie.

Użyj tego, gdy podejrzewasz, że stare sesje mogą nadal być aktywne na innych urządzeniach.

## Wymuszenie offline

`Wymuś offline` unieważnia jedną sesję urządzenia.

Po wymuszeniu offline:

- urządzenia administratora muszą zalogować się ponownie.
- urządzenia użytkownika muszą ponownie wpisać hasło do przesyłania.
- klienty WebDAV muszą ponownie się uwierzytelnić.

Wygasłe lub nieważne urządzenia można też usunąć.

## Wylogowanie bieżącego urządzenia

Karta bieżącego urządzenia jest oznaczona jako `Bieżące urządzenie`.

Po wylogowaniu bieżącego urządzenia:

- bieżąca sesja administratora zostaje zakończona.
- bieżąca sesja użytkownika zostaje zakończona.

Przed dalszym użyciem tego obszaru trzeba zalogować się ponownie.
