# Dodawanie kanału OneDrive

## Co przygotować przed rozpoczęciem

| Wymaganie | Dlaczego jest potrzebne |
| --- | --- |
| Konto Microsoft | Do stron administracyjnych Microsoft i autoryzacji OneDrive |
| Domena ImgBed | Do URL-a callback OAuth |
| Rejestracja aplikacji | Do utworzenia `Client ID` i `Client Secret` |
| Konto OneDrive | Jako właściwe miejsce przechowywania plików |

## Konfiguracja

### Krok 1: Otwórz Microsoft Entra ID

1. Otwórz `portal.azure.com`.
2. Wyszukaj u góry `Microsoft Entra ID`.
3. Jeśli strona nie pojawia się w menu, wybierz:

```text
Continue searching in Microsoft Entra ID
```

4. Otwórz `Microsoft Entra ID`.
5. Otwórz `App registrations`.
6. Kliknij `New registration`.

### Krok 2: Zarejestruj aplikację

Na stronie `New registration` wypełnij:

| Pole | Co wpisać |
| --- | --- |
| Name | Czytelna nazwa, np. `imgbed-onedrive` |
| Supported account types | Wybierz według tabeli poniżej |
| Redirect URI type | `Web` |
| Redirect URI | `https://your-domain.com/api/oauth/onedrive/callback` |

Wskazówki dotyczące typu konta:

| Scenariusz | Supported Account Types |
| --- | --- |
| Tylko osobisty OneDrive | Wybierz opcję dla osobistych kont Microsoft. |
| Konta osobiste i firmowe/szkolne | Wybierz opcję obsługującą konta osobiste i organizacyjne. |
| Tylko firmowy lub szkolny OneDrive | Wybierz opcję dla kont organizacyjnych. |

Po wypełnieniu formularza kliknij rejestrację.

![Utwórz aplikację OneDrive](../../image/upload/onedrive/添加应用程序注册.png)

### Krok 3: Skopiuj informacje aplikacji

Po utworzeniu aplikacji skopiuj z widoku przeglądu:

| Pole Microsoft | Pole ImgBed |
| --- | --- |
| `Application (client) ID` | `Client ID` |
| `Directory (tenant) ID` | `Tenant ID` dla kont organizacyjnych |

![Application ID i Tenant ID](../../image/upload/onedrive/应用程序ID和目录租户ID位.png)

### Krok 4: Utwórz Client Secret

1. Otwórz `Certificates & secrets`.
2. Kliknij `New client secret`.
3. Wpisz dowolny, rozpoznawalny opis.
4. Wybierz okres ważności.
5. Od razu po utworzeniu skopiuj `Value`.

![Zapisz wartość Client Secret](../../image/upload/onedrive/保存客户端密码值.png)

### Krok 5: Dodaj uprawnienia API

1. Otwórz `API permissions`.
2. Kliknij `Add a permission`.
3. Wybierz `Microsoft Graph`.
4. Wybierz `Delegated permissions`.
5. Dodaj te uprawnienia:

| Uprawnienie | Cel |
| --- | --- |
| `Files.ReadWrite.All` | Przesyłanie plików, tworzenie katalogów i usuwanie plików |
| `offline_access` | Pozwala ImgBed uzyskać `Refresh Token` |
| `User.Read` | Czyta informacje o koncie i limicie |

### Krok 6: Wypełnij kanał OneDrive

W Ustawieniach przesyłania wybierz `OneDrive` i wypełnij:

| Pole ImgBed | Co wpisać |
| --- | --- |
| Nazwa kanału | Czytelna nazwa, np. `Main OneDrive` |
| Client ID | Microsoft `Application (client) ID` |
| Client Secret | Skopiowana wartość `Client Secret Value` |
| Tenant ID | Według tabeli poniżej |
| Refresh Token | Na razie zostaw puste |
| Katalog główny | Opcjonalnie. Domyślnie `imgbed`. |
| Notatka | Opcjonalnie |

![Konfiguracja kanału OneDrive](../../image/upload/onedrive/添加新渠道配置.png)

Jak wypełnić `Tenant ID`:

| Wybrany typ konta | ImgBed `Tenant ID` |
| --- | --- |
| Konta osobiste | `consumers` |
| Konta osobiste i organizacyjne | `common` |
| Tylko bieżąca organizacja | `Directory (tenant) ID` |

### Krok 7: Pobierz Refresh Token

1. W ImgBed kliknij `Get Token`.
2. Zaloguj się na konto Microsoft, które chcesz podłączyć.
3. Zatwierdź autoryzację.
4. Strona callback pokaże `Refresh Token`.
5. Skopiuj go.
6. Wróć do ImgBed i wklej go w polu `Refresh Token`.

![Kopiowanie Refresh Token](../../image/upload/onedrive/复制刷新令牌.png)

### Krok 8: Zapisz kanał

Po wypełnieniu wszystkich pól zapisz kanał.

## Szybki przebieg

```text
Otwórz portal.azure.com
-> Wyszukaj Microsoft Entra ID
-> Otwórz App registrations
-> Zarejestruj nową aplikację
-> Wypełnij Name / Supported account types / Web redirect URI
-> Zarejestruj
-> Skopiuj Application (client) ID
-> Sprawdź callback URL w Authentication
-> Utwórz Client Secret w Certificates & secrets
-> Dodaj uprawnienia w API permissions
-> Wpisz Client ID / Client Secret / Tenant ID w ImgBed
-> Kliknij Get Token
-> Skopiuj Refresh Token ze strony callback
-> Wklej go w ImgBed i zapisz
```

## Referencje

1. Rejestracja aplikacji Microsoft Entra: https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app
2. Microsoft identity platform authorization code flow: https://learn.microsoft.com/en-us/entra/identity-platform/v2-oauth2-auth-code-flow
3. Microsoft Graph user authentication: https://learn.microsoft.com/en-us/graph/auth-v2-user
