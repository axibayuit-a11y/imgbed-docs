# Dostęp WebDAV do strony
Ustawienie WebDAV w Ustawieniach bezpieczeństwa udostępnia Twoją stronę ImgBed jako punkt końcowy WebDAV.

Po włączeniu możesz używać Windows, macOS, mobilnych menedżerów plików lub dowolnego klienta zgodnego z WebDAV do przeglądania, przesyłania, usuwania i zarządzania plikami ImgBed jak zdalnym katalogiem.

To wejście WebDAV strony. Różni się od kanału przechowywania WebDAV w Ustawieniach przesyłania. Kanał przesyłania zapisuje pliki w zewnętrznej usłudze WebDAV. To ustawienie sprawia, że Twoja strona ImgBed sama udostępnia dostęp WebDAV klientom.

## Gdzie skonfigurować

Otwórz panel administracyjny, a następnie przejdź do:

```text
System Settings -> Security Settings -> WebDAV
```

Dostępne ustawienia:

- Włącz
- Nazwa użytkownika
- Hasło
- Tryb ładowania obrazów
- Kanał domyślny

## Co robi ta funkcja

Po włączeniu WebDAV ImgBed udostępnia stały URL dostępu:

```text
https://your-domain.com/dav
```

Użyj tego URL-a, aby połączyć się z katalogiem plików ImgBed.

Dobre zastosowania:

- przeglądanie plików ImgBed bezpośrednio z menedżera plików komputera.
- przeciąganie obrazów do katalogu WebDAV, aby je przesłać.
- organizowanie katalogów ImgBed z lokalnego menedżera plików.
- użycie oprogramowania zgodnego z WebDAV do synchronizacji lub zarządzania obrazami.
- dostęp do treści ImgBed bez otwierania panelu administracyjnego.

## Ustawienia

### Włącz

Włącza punkt końcowy WebDAV.

Gdy jest wyłączony, klienci nie mogą łączyć się przez WebDAV.

### Nazwa użytkownika i hasło

Tych danych używają klienci WebDAV podczas połączenia.

Użyj osobnej nazwy użytkownika i hasła dla WebDAV. Nie używaj ponownie hasła administratora ani hasła do przesyłania.

Jeśli nazwa użytkownika lub hasło są puste, klienci WebDAV nie połączą się poprawnie.

### Tryb ładowania obrazów

Tryb ładowania obrazów określa, który adres URL obrazu preferują klienci WebDAV przy odczycie.

Typowe opcje:

| Tryb | Opis |
| --- | --- |
| Inteligentne ładowanie | ImgBed wybiera według kontekstu. Zalecane do normalnego użycia. |
| Oryginał | Preferuje oryginalne obrazy. |
| Miniatura | Preferuje miniatury. Przydatne do szybkiego podglądu. |

Jeśli nie masz pewności, zostaw `Inteligentne ładowanie`.

### Kanał domyślny

Domyślny kanał jest używany do przesyłania WebDAV.

Gdy kopiujesz pliki do katalogu WebDAV z Windows lub innego klienta, ImgBed przesyła je przez wybrany domyślny kanał przesyłania.

Jeśli domyślny kanał nie jest wybrany, przeglądanie może działać, ale przesyłanie może się nie udać.

## Dostęp WebDAV w Windows 11

Windows 11 może dodać WebDAV jako lokalizację sieciową.

1. Otwórz `Ten komputer`.
2. Wybierz `Dodaj lokalizację sieciową`.
3. Wpisz `https://your-domain.com/dav`.
4. Po wyświetleniu prośby wpisz nazwę użytkownika i hasło WebDAV.
5. Zakończ kreatora. Katalog WebDAV będzie można otworzyć w Eksploratorze plików.

![Dodawanie WebDAV w Windows 11](../../image/Safety/webdav在win11配置.png)

Po dodaniu katalog WebDAV pojawi się w Eksploratorze plików Windows. Możesz otwierać, kopiować i zarządzać plikami jak w zwykłym katalogu.

![WebDAV w Windows](../../image/Safety/webdav在win显示效果.png)

## Obsługiwane operacje

Po udanym połączeniu WebDAV zwykle możesz:

- przeglądać pliki i katalogi.
- przesyłać pliki.
- tworzyć katalogi.
- zmieniać nazwy plików lub katalogów.
- przenosić pliki.
- usuwać pliki.

WebDAV najlepiej sprawdza się do codziennego dostępu i lekkiego zarządzania plikami. Do dużych przenosin, masowego usuwania albo złożonej organizacji użyj panelu administracyjnego.

## Zarządzanie urządzeniami logowania

Udane połączenia WebDAV pojawiają się też na karcie WebDAV w Zarządzaniu urządzeniami logowania.

Możesz tam sprawdzać klientów WebDAV i wymuszać wylogowanie starych urządzeń.

Jeśli zmienisz nazwę użytkownika lub hasło WebDAV, stare klienty muszą zalogować się ponownie.

## FAQ

### Windows ciągle pyta o nazwę użytkownika i hasło

Sprawdź:

- URL to `https://your-domain.com/dav`.
- Nazwa użytkownika i hasło zgadzają się z ustawieniami WebDAV.
- WebDAV jest włączony.
- Strona jest dostępna przez HTTPS.

### Przeglądanie działa, ale przesyłanie nie

Sprawdź `Kanał domyślny`.

Przesyłanie WebDAV wymaga domyślnego kanału przesyłania. Jeśli go nie ma, jest wyłączony lub źle skonfigurowany, przesyłanie może się nie udać.

### Szybkość dostępu jest niestabilna

Wydajność WebDAV zależy od klienta, sieci, liczby plików i domyślnego kanału przesyłania.

Jeśli katalog ma dużo plików, uporządkuj je w podkatalogach zamiast trzymać zbyt wiele w jednym miejscu.

## Zalecenia bezpieczeństwa

- Używaj HTTPS dla dostępu WebDAV.
- Ustaw silne hasło.
- Nie udostępniaj hasła WebDAV osobom niezaufanym.
- Wyłącz WebDAV, gdy go nie używasz.
- Okresowo czyść nieużywane urządzenia WebDAV w Zarządzaniu urządzeniami logowania.

## Rozmiar pliku przy przesyłaniu WebDAV

Klienci WebDAV nie używają przeglądarkowego mechanizmu przesyłania częściowego ze strony przesyłania. Dla plików powyżej poniższych zalecanych limitów użyj strony przesyłania w przeglądarce.

| Domyślny kanał przesyłania | Zalecany limit jednego pliku WebDAV |
| --- | ---: |
| Telegram | 20 MB |
| Discord | 10 MB |
| Cloudflare R2 | 30 MB |
| S3 | 30 MB |
| GitHub Releases | 64 MB |
| GitLab Packages | 64 MB |
| Hugging Face | 20 MB |
| OneDrive | 30 MB |
| Google Drive | 30 MB |
| Dropbox | 30 MB |
| Yandex Disk | 30 MB |
| pCloud | 30 MB |
| WebDAV | 64 MB |

