# Geolokalizacja IP i zarządzanie użytkownikami

Geolokalizacja IP zamienia adresy IP w rekordach uploaderów, urządzeniach logowania i podobnych logach na przybliżone lokalizacje.

Po konfiguracji panel administracyjny może czytelniej pokazywać źródła uploadów i dostępu. Zarządzanie użytkownikami pozwala też blokować lub przywracać upload dla podejrzanych adresów IP.

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
| MaxMind Account ID | Account ID MaxMind dla MaxMind GeoLite Web Service. |
| MaxMind License Key | License Key MaxMind. |
| Tencent Map Key | Klucz Tencent Location Service. Przydatny dla chińskich adresów i IP z kontynentalnych Chin. |
| ipapi Key | Klucz APILayer ipapi. Obsługuje wielojęzyczną geolokalizację IP. |

Wypełnij tylko usługi, których potrzebujesz. Nie trzeba konfigurować każdego pola.

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

Znajdź Account ID w panelu MaxMind i wygeneruj License Key na stronie License Keys.

![Konfiguracja klucza MaxMind](../../image/other/ip定位/maxmind的key配置.png)

Po wygenerowaniu wklej Account ID i License Key do ImgBed i zapisz.

Darmowy plan MaxMind nadaje się do codziennego użycia, ale ma limity zapytań. Po przekroczeniu limitu ImgBed próbuje innych dostępnych źródeł.

## Konfiguracja ipapi

ipapi używa API Key APILayer.

Otwórz konsolę ipapi i skopiuj widoczny tam API Key.

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

Pokazuje aktywność uploadu według IP:

| Pole | Opis |
| --- | --- |
| Źródło IP | Adres IP osoby przesyłającej. |
| Adres | Przybliżona lokalizacja ustalona z IP. |
| Łączny rozmiar uploadu | Łączny rozmiar plików przesłanych z tego IP. |
| Liczba uploadów | Liczba uploadów z tego IP. |
| Upload dozwolony | Włączone oznacza upload dozwolony. Wyłączone oznacza upload zablokowany. |

Kliknij strzałkę po lewej, aby rozwinąć listę plików przesłanych z tego IP.

Lista plików pokazuje nazwę, podgląd, rozmiar, wynik moderacji, status pliku i czas uploadu. Gdy uploady wyglądają podejrzanie, najpierw rozwiń IP, przejrzyj pliki, a potem zdecyduj, czy blokować dalsze uploady.

Jeśli IP jest podejrzany, wyłącz `Upload allowed`. Przyszłe uploady z tego IP będą blokowane.

## Wyszukiwanie, sortowanie i filtry zaawansowane

U góry Zarządzania użytkownikami możesz wyszukiwać po IP źródłowym lub adresie.

Sortuj po czasie, liczbie uploadów albo łącznym rozmiarze, aby znaleźć ostatnich uploaderów, częstych uploaderów albo IP o dużym użyciu.

Do głębszej analizy otwórz filtry zaawansowane.

![Filtry zaawansowane](../../image/other/用户管理高级筛选.png)

Filtry zaawansowane obsługują:

| Filtr | Zastosowanie |
| --- | --- |
| Zakres czasu | Pokazuje IP, które przesyłały pliki w wybranym okresie. |
| Status dostępu | Filtruje według normalnego, zablokowanego i podobnych statusów. |
| Allow/block list | Filtruje według allowlist, blocklist albo braku ustawienia. |
| Typ pliku | Pokazuje IP, które przesyłały obrazy, wideo, audio, dokumenty, kod lub inne pliki. |
| Rozmiar pliku | Filtruje według zakresu rozmiaru przesłanych plików. |
| Rating wiekowy | Filtruje według braku ustawienia, General, R12+, R16+, R18 i podobnych. |
| Status pliku | Filtruje według bieżącego statusu pliku, aby badać nietypowe pliki. |

Kliknij `Apply Filters`, aby zastosować. Użyj `Reset`, aby wrócić do wszystkich danych.

## Widok mobilny

Na telefonie Zarządzanie użytkownikami przełącza się na układ kart.

![Mobilne zarządzanie użytkownikami](../../image/other/手机端显示用户管理效果.png)

Każda karta pokazuje IP, adres, łączny rozmiar uploadu, liczbę uploadów i przełącznik zezwolenia na upload. Możesz zarządzać użytkownikami bez przewijania szerokiej tabeli.

## Jeśli lokalizacja wygląda niepoprawnie

Geolokalizacja IP jest przybliżona. To nie jest dokładny adres ulicy.

Jeśli użytkownik korzysta z proxy, data center, serwera chmurowego albo sieci transgranicznej, pokazywana lokalizacja może różnić się od rzeczywistej.

Używaj tej funkcji do orientacyjnego zrozumienia źródła, wykrywania nietypowych uploadów i wspierania decyzji o blokadzie. Nie traktuj jej jako precyzyjnego śledzenia.

## Typowe sytuacje

| Sytuacja | Znaczenie |
| --- | --- |
| Adres jest pusty | IP mogło jeszcze nie zostać rozwiązane albo bieżące źródło jest chwilowo niedostępne. |
| Język adresu jest zły | Sprawdź język geolokalizacji IP i czy skonfigurowane źródło obsługuje ten język. |
| Adres pokazuje data center | Wiele proxy, serwerów chmurowych i crawlerów wygląda jak data center lub adres ISP. |
| Liczba uploadów jest wysoka | Dokładnie sprawdź ten IP i zablokuj uploady, jeśli trzeba. |
| Łączny rozmiar jest duży | Posortuj lub przefiltruj, rozwiń IP i sprawdź konkretne pliki. |
| Trzeba przywrócić po blokadzie | Włącz ponownie `Upload allowed`. |

## Szybki przebieg

```text
Otwórz IP Geolocation w Other Settings
-> Wybierz język geolokalizacji IP
-> Wpisz dane MaxMind, Tencent Map lub ipapi według potrzeb
-> Zapisz ustawienia
-> Otwórz Zarządzanie użytkownikami
-> Sprawdź IP, adres, łączny rozmiar i liczbę uploadów
-> Użyj wyszukiwania, sortowania lub filtrów zaawansowanych, aby znaleźć nietypowe IP
-> Zezwól lub zablokuj uploady według potrzeb
```
