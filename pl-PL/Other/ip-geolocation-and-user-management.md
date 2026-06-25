# Geolokalizacja IP i zarządzanie użytkownikami

Geolokalizacja IP zamienia adresy IP w rekordach osób przesyłających pliki, urządzeniach logowania i podobnych logach na przybliżone lokalizacje.

Po konfiguracji panel administracyjny może czytelniej pokazywać źródła przesyłania i dostępu. Zarządzanie użytkownikami pozwala też blokować lub przywracać możliwość przesyłania dla podejrzanych adresów IP.

## Gdzie skonfigurować

Otwórz:

```text
System Settings -> Other Settings -> IP Geolocation
```

![Geolokalizacja IP](../../image/other/ip定位/ip定位.png)

## Dostępne ustawienia

Nowszy przepływ geolokalizacji IP obsługuje wiele źródeł zamiast polegać na jednej usłudze map.

| Ustawienie | Cel |
| --- | --- |
| Język geolokalizacji IP | Wybiera język wyświetlania, np. angielski, chiński uproszczony, japoński, francuski i inne. |
| MaxMind Account ID | Identyfikator konta MaxMind dla MaxMind GeoLite Web Service. |
| MaxMind License Key | Klucz licencyjny MaxMind. |
| Tencent Map Key | Klucz Tencent Location Service. Przydatny dla chińskich adresów i IP z kontynentalnych Chin. |
| ipapi Key | Klucz APILayer ipapi. Obsługuje wielojęzyczną geolokalizację IP. |

Wypełnij dane tylko dla usług, których potrzebujesz. Nie trzeba konfigurować każdego pola.

Jeśli nie podasz żadnego klucza, ImgBed nadal spróbuje wbudowanych darmowych źródeł, ale stabilność, obsługa języków i dokładność mogą być niższe niż przy usłudze skonfigurowanej samodzielnie.

## Zalecane wybory

Jeśli potrzebujesz głównie chińskich adresów:

1. Ustaw język geolokalizacji IP na chiński uproszczony.
2. Skonfiguruj Tencent Map Key.
3. Opcjonalnie dodaj MaxMind lub ipapi jako źródła zapasowe.

Jeśli potrzebujesz głównie angielskich lub wielojęzycznych adresów:

1. Wybierz potrzebny język.
2. Skonfiguruj MaxMind Account ID i License Key.
3. Dodaj ipapi Key, jeśli potrzebujesz lepszych wyników wielojęzycznych.

## Konfiguracja MaxMind

MaxMind wymaga:

```text
MaxMind Account ID
MaxMind License Key
```

Znajdź identyfikator konta w panelu MaxMind i wygeneruj License Key na stronie License Keys.

![Konfiguracja klucza MaxMind](../../image/other/ip定位/maxmind的key配置.png)

Po wygenerowaniu wklej Account ID i License Key do ImgBed i zapisz.

Darmowy plan MaxMind nadaje się do codziennego użycia, ale ma limity zapytań. Po przekroczeniu limitu ImgBed próbuje innych dostępnych źródeł.

## Konfiguracja ipapi

ipapi używa klucza API APILayer.

Otwórz konsolę ipapi i skopiuj widoczny tam klucz API.

![Konfiguracja ipapi](../../image/other/ip定位/ipapi配置.png)

Wklej go w polu `ipapi Key` w ImgBed i zapisz.

ipapi obsługuje wielojęzyczną geolokalizację IP i jest przydatny, gdy chcesz pokazywać adresy w wybranym języku. Darmowy plan również ma limity. Gdy limit się skończy, ImgBed próbuje innych dostępnych źródeł.

## Konfiguracja Tencent Map Key

Tencent Map Key jest przydatny dla chińskich adresów, szczególnie IP z kontynentalnych Chin.

Podczas tworzenia klucza w Tencent Location Service włącz:

```text
WebServiceAPI
```

Po utworzeniu wklej klucz do `Tencent Map Key` i zapisz.

Jeśli potrzebujesz tylko podstawowej chińskiej geolokalizacji IP, Tencent Map Key wystarczy na start.

## Co sprawdzić w Zarządzaniu użytkownikami

Zarządzanie użytkownikami jest dostępne u góry panelu administracyjnego.

![Zarządzanie użytkownikami](../../image/other/用户管理显示.png)

Zarządzanie użytkownikami pokazuje aktywność przesyłania według adresu IP:

| Pole | Opis |
| --- | --- |
| Źródło IP | Adres IP osoby przesyłającej. |
| Adres | Przybliżona lokalizacja ustalona z IP. |
| Łączny rozmiar przesłanych plików | Łączny rozmiar plików przesłanych z tego adresu IP. |
| Liczba przesłań | Liczba przesłań z tego adresu IP. |
| Przesyłanie dozwolone | Włączone oznacza, że przesyłanie jest dozwolone. Wyłączone oznacza, że przesyłanie jest zablokowane. |

Kliknij strzałkę po lewej, aby rozwinąć listę plików przesłanych z tego IP.

Lista plików pokazuje nazwę, podgląd, rozmiar, wynik moderacji, status pliku i czas przesłania. Gdy przesłania wyglądają podejrzanie, najpierw rozwiń wpis IP, przejrzyj pliki, a potem zdecyduj, czy blokować dalsze przesyłanie.

Jeśli adres IP jest podejrzany, wyłącz `Upload allowed`. Przyszłe przesłania z tego adresu IP będą blokowane.

## Wyszukiwanie, sortowanie i filtry zaawansowane

U góry Zarządzania użytkownikami możesz wyszukiwać po IP źródłowym lub adresie.

Sortuj po czasie, liczbie przesłań albo łącznym rozmiarze, aby znaleźć ostatnie źródła przesyłania, adresy IP przesyłające często albo adresy IP o dużym wykorzystaniu.

Do głębszej analizy otwórz filtry zaawansowane.

![Filtry zaawansowane](../../image/other/用户管理高级筛选.png)

Filtry zaawansowane obsługują:

| Filtr | Zastosowanie |
| --- | --- |
| Zakres czasu | Pokazuje IP, które przesyłały pliki w wybranym okresie. |
| Status dostępu | Filtruje według normalnego, zablokowanego i podobnych statusów. |
| Lista dozwolonych/blokowanych | Filtruje według listy dozwolonych, listy blokowanych albo braku ustawienia. |
| Typ pliku | Pokazuje IP, które przesyłały obrazy, wideo, audio, dokumenty, kod lub inne pliki. |
| Rozmiar pliku | Filtruje według zakresu rozmiaru przesłanych plików. |
| Klasyfikacja wiekowa | Filtruje według braku ustawienia, General, R12+, R16+, R18 i podobnych. |
| Status pliku | Filtruje według bieżącego statusu pliku, aby badać nietypowe pliki. |

Kliknij `Apply Filters`, aby zastosować. Użyj `Reset`, aby wrócić do wszystkich danych.

## Widok mobilny

Na telefonie Zarządzanie użytkownikami przełącza się na układ kart.

![Mobilne zarządzanie użytkownikami](../../image/other/手机端显示用户管理效果.png)

Każda karta pokazuje IP, adres, łączny rozmiar przesłanych plików, liczbę przesłań i przełącznik zezwolenia na przesyłanie. Możesz zarządzać użytkownikami bez przewijania szerokiej tabeli.

## Jeśli lokalizacja wygląda niepoprawnie

Geolokalizacja IP jest przybliżona. To nie jest dokładny adres ulicy.

Jeśli użytkownik korzysta z proxy, centrum danych, serwera chmurowego albo sieci transgranicznej, pokazywana lokalizacja może różnić się od rzeczywistej.

Używaj tej funkcji do orientacyjnego zrozumienia źródła, wykrywania nietypowych przesłań i wspierania decyzji o blokadzie. Nie traktuj jej jako precyzyjnego śledzenia.

## Typowe sytuacje

| Sytuacja | Znaczenie |
| --- | --- |
| Adres jest pusty | Lokalizacja IP mogła jeszcze nie zostać ustalona albo bieżące źródło jest chwilowo niedostępne. |
| Język adresu jest zły | Sprawdź język geolokalizacji IP i czy skonfigurowane źródło obsługuje ten język. |
| Adres pokazuje centrum danych | Wiele proxy, serwerów chmurowych i robotów indeksujących wygląda jak centrum danych lub adres ISP. |
| Liczba przesłań jest wysoka | Dokładnie sprawdź ten adres IP i zablokuj przesyłanie, jeśli trzeba. |
| Łączny rozmiar jest duży | Posortuj lub przefiltruj, rozwiń wpis IP i sprawdź konkretne pliki. |
| Trzeba przywrócić po blokadzie | Włącz ponownie `Upload allowed`. |

## Szybki schemat

```text
Open IP Geolocation in Other Settings
-> Choose IP geolocation language
-> Fill MaxMind, Tencent Map, or ipapi credentials as needed
-> Save settings
-> Open User Management
-> Review IP source, address, total upload size, and upload count
-> Use search, sort, or advanced filters to find abnormal IPs
-> Allow or block uploads as needed
```
