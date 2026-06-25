# Dodawanie kanału Yandex

## Co przygotować przed rozpoczęciem

| Wymaganie | Dlaczego jest potrzebne |
| --- | --- |
| Konto Yandex | Do logowania i autoryzacji Yandex Disk |
| Aplikacja OAuth Yandex | Do wygenerowania `Client ID` i `Client Secret` |
| Domena ImgBed | Do URI przekierowania OAuth |
| Dostępne miejsce Yandex Disk | Właściwe miejsce przechowywania plików |

## Konfiguracja

### Krok 1: Utwórz aplikację OAuth Yandex

1. Otwórz stronę tworzenia aplikacji OAuth Yandex:

```text
https://oauth.yandex.com/client/new
```

2. Jeśli zostaniesz przekierowany do logowania, najpierw zaloguj się kontem Yandex.
3. Utwórz nową aplikację.
4. Nadaj aplikacji rozpoznawalną nazwę, np. `imgbed-yandex`.
5. Znajdź ustawienia callback lub redirect URL.
6. Wpisz:

```text
https://your-domain.com/api/oauth/yandex/callback
```

### Krok 2: Potwierdź uprawnienia

Dla obecnej integracji Yandex w ImgBed zachowaj te cztery uprawnienia pod `Yandex.Disk REST API`:

| Uprawnienie | Cel |
| --- | --- |
| `cloud_api:disk.app_folder` | Pozwala ImgBed zapisywać pliki w folderze aplikacji |
| `cloud_api:disk.read` | Czyta pliki i linki pobierania |
| `cloud_api:disk.write` | Przesyła pliki, tworzy katalogi i usuwa pliki |
| `Access to information about Yandex.Disk` | Czyta limit dysku i użyte miejsce |

Jeśli pod `Yandex ID API` widzisz też te uprawnienia, są opcjonalne:

| Tekst uprawnienia | Rekomendacja |
| --- | --- |
| `Access to username, first name and surname, gender` | Opcjonalne |
| `Access to email address` | Opcjonalne |

Upload, pobieranie, usuwanie i limity zależą głównie od czterech uprawnień `Yandex.Disk REST API` powyżej.

![Konfiguracja uprawnień Yandex Disk](../../image/upload/yandex/dataaccess配置软盘权限.png)

### Krok 3: Skopiuj dane aplikacji

Po utworzeniu aplikacji skopiuj:

| Pole Yandex | Pole ImgBed |
| --- | --- |
| `Client ID` | `Client ID` |
| `Client Secret` | `Client Secret` |

![Zapisz Client ID i Secret](../../image/upload/yandex/记录客户端id和secret.png)

### Krok 4: Wypełnij kanał Yandex

W Ustawieniach przesyłania wybierz `Yandex` i wypełnij:

| Pole ImgBed | Co wpisać |
| --- | --- |
| Nazwa kanału | Czytelna nazwa, np. `Main Yandex` |
| Client ID | `Client ID` aplikacji Yandex |
| Client Secret | `Client Secret` aplikacji Yandex |
| Refresh Token | Na razie zostaw puste |
| Katalog główny | Opcjonalnie. Domyślnie `imgbed`. |

![Edycja konfiguracji kanału](../../image/upload/yandex/编辑配置渠道.png)

### Krok 5: Pobierz Refresh Token

1. W ImgBed kliknij `Get Token`.
2. Zaloguj się na konto Yandex, które chcesz podłączyć.
3. Zatwierdź autoryzację.
4. Strona callback pokaże `Refresh Token`.
5. Skopiuj go.
6. Wróć do ImgBed i wklej go w polu `Refresh Token`.

![Kopiowanie Refresh Token po autoryzacji](../../image/upload/yandex/授权后复制刷新令牌.png)

### Krok 6: Zapisz kanał

Po wypełnieniu wszystkich pól zapisz kanał.

## Szybki przebieg

```text
Open Yandex OAuth Console
-> Create an app
-> Add https://your-domain.com/api/oauth/yandex/callback
-> Confirm Yandex Disk permissions
-> Copy Client ID and Client Secret
-> Fill Client ID / Client Secret into ImgBed
-> Click Get Token
-> Copy the Refresh Token from the callback page
-> Paste it back into ImgBed and save
```

## Referencje

1. Rejestracja aplikacji Yandex: https://yandex.com/dev/id/doc/en/register-client
2. Pobranie authorization code przez URL: https://yandex.com/dev/id/doc/en/codes/code-url
3. Endpoint tokenu OAuth Yandex: https://yandex.com/dev/id/doc/en/tokens/token
