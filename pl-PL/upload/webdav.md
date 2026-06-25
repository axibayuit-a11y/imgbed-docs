# Dodawanie kanału WebDAV

## Kiedy warto go użyć

Użyj kanału WebDAV, gdy:

- masz NAS, dysk chmurowy lub usługę pamięci z endpointem WebDAV.
- chcesz zapisywać przesłane obrazy w swoim katalogu WebDAV.
- chcesz, aby dane logowania były zapisane w tabeli D1 `upload_channels`, zamiast pozostawać długo widoczne w frontendzie.

## Co przygotować przed rozpoczęciem

| Wymaganie | Cel |
| --- | --- |
| WebDAV Endpoint | Serwerowy URL WebDAV, np. `https://nas.example.com/dav`. |
| Nazwa użytkownika | Do logowania w usłudze WebDAV. |
| Hasło | Do logowania w usłudze WebDAV. |
| Tryb uwierzytelniania | Domyślnie `Basic`. Użyj `Digest` albo automatycznej negocjacji tylko wtedy, gdy wymaga tego serwer. |
| Katalog przechowywania | Katalog na pliki. Domyślnie `imgbed`. |

## Gdzie dodać kanał

1. Otwórz Ustawienia systemowe.
2. Przejdź do Ustawień przesyłania.
3. Kliknij Dodaj kanał w prawym górnym rogu.
4. Wybierz `WebDAV`.

## Opis pól

| Pole | Działanie | Wymagane |
| --- | --- | --- |
| Nazwa kanału | Czytelna nazwa kanału WebDAV, np. `koofr` lub `nas`. | Tak |
| Endpoint | Pełny endpoint WebDAV, z `https://`. | Tak |
| Nazwa użytkownika | Login WebDAV. | Tak |
| Hasło | Hasło WebDAV. | Tak |
| Tryb uwierzytelniania | Zwykle `Basic`; użyj `Digest`, jeśli serwer wymaga digest authentication. | Tak |
| Katalog przechowywania | Katalog, w którym zapisywane są pliki. Domyślnie `imgbed`. | Nie |

## Przykład: fie.nl.tab.digital

### 1. Utwórz hasło aplikacji

Otwórz ustawienia bezpieczeństwa konta, znajdź hasła aplikacji i utwórz nowe hasło aplikacji.

![Utwórz hasło aplikacji](../../image/upload/webdav/创建应用密码.png)

Po utworzeniu od razu skopiuj i zapisz nowe hasło aplikacji. Zwykle jest pokazywane tylko raz.

![Zapisz nowe hasło aplikacji](../../image/upload/webdav/记住新应用程序密码.png)

### 2. Wypełnij konfigurację WebDAV w ImgBed

Wróć do ImgBed i dodaj kanał WebDAV:

| Pole UI | Wartość |
| --- | --- |
| Endpoint | URL WebDAV podany przez `https://fie.nl.tab.digital/`. |
| Nazwa użytkownika | Twoja nazwa użytkownika WebDAV. |
| Hasło | Hasło aplikacji utworzone przed chwilą. |
| Tryb uwierzytelniania | W większości przypadków zacznij od `Basic`. |
| Katalog przechowywania | Domyślnie `imgbed`; możesz też użyć własnego katalogu. |

![Wypełnianie konfiguracji](../../image/upload/webdav/填写配置.png)

## Zachowanie przy dużych plikach

Kanał WebDAV używa teraz prawdziwego przesyłania częściowego opartego na sesji.

Małe pliki są przesyłane jako jeden pełny plik. Pliki większe niż 64 MiB są automatycznie dzielone na części po około 10 MiB i przesyłane do zdalnego katalogu chunków.

Usługa WebDAV nie musi obsługiwać `partial update` ani zapisu opartego na offsetach. ImgBed nie scala chunków na zdalnym serwerze w jeden duży plik. Zamiast tego zapisuje manifest chunków i podczas odczytu pliku czyta je po kolei.

W praktyce:

| Rozmiar pliku | Metoda uploadu | Układ w zdalnej pamięci |
| --- | --- | --- |
| 64 MiB lub mniej | Normalny upload | Jeden pełny plik |
| Więcej niż 64 MiB | Sesyjny upload częściowy | Katalog chunków z wieloma częściami |

Katalog chunków wpływa tylko na układ w zdalnej pamięci. URL pliku w ImgBed się nie zmienia. Użytkownicy nadal otwierają plik przez oryginalny link `/file/...`.

## Kroki konfiguracji

1. Otwórz Ustawienia przesyłania.
2. Kliknij Dodaj kanał.
3. Wybierz `WebDAV`.
4. Wpisz rozpoznawalną nazwę kanału, np. `koofr`.
5. Wpisz endpoint WebDAV, np. `https://app.koofr.net/dav/Koofr`.
6. Wpisz nazwę użytkownika i hasło.
7. Domyślnie zostaw tryb uwierzytelniania `Basic`.
8. Zostaw katalog przechowywania jako `imgbed` albo zmień na własny.
9. Kliknij Zapisz.
10. Po zapisaniu sprawdź kartę kanału, odpytaj pojemność, jeśli jest dostępna, i prześlij plik testowy.

## Jak sprawdzić

| Kontrola | Jak sprawdzić |
| --- | --- |
| Karta kanału jest widoczna | Po zapisaniu w Ustawieniach przesyłania powinna pojawić się karta WebDAV. |
| Kanał jest włączony | Przełącznik w prawym górnym rogu karty pozostaje włączony. |
| Dane są zapisane | Widok szczegółów pokazuje Endpoint, nazwę użytkownika, tryb uwierzytelniania i katalog. |
| Mały plik uploaduje się | Prześlij obraz testowy i sprawdź, czy plik pojawia się w katalogu WebDAV. |
| Reguła dużych plików działa | Pliki powyżej 64 MiB używają uploadu częściowego i tworzą zdalny katalog chunków. |
| Zapytanie o pojemność działa | Jeśli serwer wspiera informacje o pojemności, zapytanie pokaże użycie i całkowity rozmiar. |

![Zapytanie o limit zakończone powodzeniem](../../image/upload/webdav/查询额度成功.png)

## FAQ

### Dlaczego duże pliki WebDAV tworzą katalog chunków?

To obecna metoda przechowywania dużych plików.

Pliki większe niż 64 MiB nie są scalane w jeden duży plik zdalny. Są zapisywane jako katalog chunków. ImgBed zapisuje manifest i zwraca pełną zawartość, czytając części po kolei.

### Co najpierw sprawdzić, jeśli upload dużych plików się nie udaje?

Najpierw sprawdź Endpoint, nazwę użytkownika, hasło i katalog przechowywania. Potem upewnij się, że usługa WebDAV pozwala tworzyć katalogi, zapisywać pliki i je czytać.

Jeśli zapytanie o pojemność się nie udaje, ale mały upload działa, serwer może po prostu nie wspierać raportowania pojemności albo je ograniczać. Nie musi to oznaczać, że upload nie działa.

### Jaki tryb uwierzytelniania wybrać?

Zacznij od `Basic`.

Jeśli serwer wyraźnie wymaga digest authentication, użyj `Digest`.

Jeśli nie masz pewności, użyj automatycznej negocjacji.

## Szybka lista

```text
Prepare WebDAV endpoint, username, and password
-> Open Upload Settings
-> Add Channel
-> Select WebDAV
-> Enter Endpoint / username / password
-> Keep authentication mode as Basic by default
-> Keep storage directory as imgbed by default
-> Save
-> Query capacity
-> Upload a test file
```
