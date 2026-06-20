# Dostęp WebDAV do strony (Beta)

Ustawienie WebDAV w Ustawieniach bezpieczeństwa udostępnia Twoją stronę ImgBed jako endpoint WebDAV.

Po włączeniu możesz używać Windows, macOS, mobilnych menedżerów plików lub dowolnego klienta zgodnego z WebDAV do przeglądania, przesyłania, usuwania i zarządzania plikami ImgBed jak zdalnym katalogiem.

To wejście WebDAV strony. Różni się od kanału przechowywania WebDAV w Ustawieniach przesyłania. Kanał uploadu zapisuje pliki w zewnętrznej usłudze WebDAV. To ustawienie sprawia, że Twoja strona ImgBed sama udostępnia dostęp WebDAV klientom.

## Gdzie skonfigurować

Otwórz panel administracyjny, a następnie przejdź do:

```text
System Settings -> Security Settings -> WebDAV
```

Dostępne ustawienia:

- Enable
- Username
- Password
- Image loading mode
- Default channel

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

### Enable

Włącza endpoint WebDAV.

Gdy jest wyłączony, klienci nie mogą łączyć się przez WebDAV.

### Username i Password

Tych danych używają klienci WebDAV podczas połączenia.

Użyj osobnej nazwy użytkownika i hasła dla WebDAV. Nie używaj ponownie hasła administratora ani hasła uploadu.

Jeśli nazwa użytkownika lub hasło są puste, klienci WebDAV nie połączą się poprawnie.

### Image Loading Mode

Image loading mode określa, który URL obrazu preferują klienci WebDAV przy odczycie.

Typowe opcje:

| Tryb | Opis |
| --- | --- |
| Smart loading | ImgBed wybiera według kontekstu. Zalecane do normalnego użycia. |
| Original | Preferuje oryginalne obrazy. |
| Thumbnail | Preferuje miniatury. Przydatne do szybkiego podglądu. |

Jeśli nie masz pewności, zostaw `Smart loading`.

### Default Channel

Domyślny kanał jest używany do uploadów WebDAV.

Gdy kopiujesz pliki do katalogu WebDAV z Windows lub innego klienta, ImgBed przesyła je przez wybrany domyślny kanał uploadu.

Jeśli domyślny kanał nie jest wybrany, przeglądanie może działać, ale upload może się nie udać.

## Dostęp WebDAV w Windows 11

Windows 11 może dodać WebDAV jako lokalizację sieciową.

1. Otwórz `This PC`.
2. Wybierz `Add a network location`.
3. Wpisz `https://your-domain.com/dav`.
4. Po wyświetleniu prośby wpisz nazwę użytkownika i hasło WebDAV.
5. Zakończ kreatora. Katalog WebDAV będzie można otworzyć w File Explorer.

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

## Login Device Management

Udane połączenia WebDAV pojawiają się też na karcie WebDAV w Login Device Management.

Możesz tam sprawdzać klientów WebDAV i wymuszać wylogowanie starych urządzeń.

Jeśli zmienisz nazwę użytkownika lub hasło WebDAV, stare klienty muszą zalogować się ponownie.

## FAQ

### Windows ciągle pyta o nazwę użytkownika i hasło

Sprawdź:

- URL to `https://your-domain.com/dav`.
- Nazwa użytkownika i hasło zgadzają się z ustawieniami WebDAV.
- WebDAV jest włączony.
- Strona jest dostępna przez HTTPS.

### Przeglądanie działa, ale upload nie

Sprawdź `Default channel`.

Upload WebDAV wymaga domyślnego kanału przesyłania. Jeśli go nie ma, jest wyłączony lub źle skonfigurowany, upload może się nie udać.

### Szybkość dostępu jest niestabilna

Wydajność WebDAV zależy od klienta, sieci, liczby plików i domyślnego kanału uploadu.

Jeśli katalog ma dużo plików, uporządkuj je w podkatalogach zamiast trzymać zbyt wiele w jednym miejscu.

## Zalecenia bezpieczeństwa

- Używaj HTTPS dla dostępu WebDAV.
- Ustaw silne hasło.
- Nie udostępniaj hasła WebDAV osobom niezaufanym.
- Wyłącz WebDAV, gdy go nie używasz.
- Okresowo czyść nieużywane urządzenia WebDAV w Login Device Management.

## Rozmiar pliku przy uploadzie WebDAV

Klienci WebDAV nie używają przeglądarkowego mechanizmu uploadu częściowego ze strony uploadu. Dla plików powyżej poniższych zalecanych limitów użyj strony web uploadu.

| Domyślny kanał uploadu | Zalecany limit jednego pliku WebDAV |
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
