# Dodawanie kanału Google Drive

## Co przygotować przed rozpoczęciem

Przygotuj te elementy:

| Wymaganie | Dlaczego jest potrzebne |
| --- | --- |
| Konto Google | Do Google Cloud i autoryzacji Google Drive |
| Projekt Google Cloud | Do włączenia Drive API i utworzenia danych OAuth |
| Klient OAuth 2.0 | Pozwala ImgBed uzyskać `Client ID`, `Client Secret` i `Refresh Token` |
| Domena ImgBed | Do URI przekierowania OAuth. Musi odpowiadać faktycznie używanej domenie. |

## Konfiguracja

### Krok 1: Włącz Google Drive API

1. Otwórz Google Cloud Console.
2. Utwórz nowy projekt albo wybierz istniejący.
3. Przejdź do `APIs & Services`.
4. Kliknij `Enable APIs and Services`.
5. Wyszukaj `Google Drive API`.
6. Otwórz i włącz API.

### Krok 2: Skonfiguruj ekran zgody OAuth

1. W Google Cloud otwórz `Google Auth Platform`.
2. Uzupełnij podstawowe informacje w `Branding`, takie jak nazwa aplikacji, e-mail pomocy i kontakt deweloperski.
3. Otwórz `Audience`.
4. Dla większości prywatnych instalacji self-hosted wybierz `External`.
5. Jeśli wybierasz `External`, dodaj konto Google do autoryzacji w `Test users`.
6. Otwórz `Data Access`.
7. Dodaj wymagane uprawnienia Google Drive.

### Krok 3: Utwórz klienta OAuth 2.0

1. W `Google Auth Platform` otwórz `Clients`.
2. Utwórz nowego klienta.
3. Ustaw typ aplikacji na `Web application`.
4. Nadaj klientowi czytelną nazwę.
5. W authorized JavaScript origins wpisz URL ImgBed, na przykład:

```text
https://img.example.com
```

6. W authorized redirect URIs wpisz:

```text
https://img.example.com/api/oauth/google/callback
```

![Tworzenie klienta OAuth](../../image/upload/google-drive/oa客户端id创建.png)

![Wpisywanie domeny i callback URL](../../image/upload/google-drive/填写oa客户端url信息.png)

Po utworzeniu skopiuj:

| Wygenerowana wartość | Pole ImgBed |
| --- | --- |
| Client ID | `Client ID` |
| Client Secret | `Client Secret` |

## Krok 4: Wypełnij kanał Google Drive

W Ustawieniach przesyłania wybierz `Google Drive` i wypełnij:

| Pole ImgBed | Co wpisać |
| --- | --- |
| Nazwa kanału | Czytelna nazwa, np. `Main Google Drive` |
| Client ID | Client ID z Google Cloud |
| Client Secret | Client Secret z Google Cloud |
| Refresh Token | Na razie zostaw puste. Pobierzesz je w kolejnym kroku. |
| Katalog główny | Opcjonalnie. Domyślnie `imgbed`. |

![Wklej dane klienta w ImgBed](../../image/upload/google-drive/粘贴回添加新渠道配置.png)

## Krok 5: Pobierz Refresh Token

1. Kliknij `Get Token`.
2. Wybierz konto Google, które chcesz podłączyć.
3. Przejdź przez autoryzację.
4. Strona callback pokaże `Refresh Token`.
5. Skopiuj go.
6. Wróć do ImgBed i wklej go w polu `Refresh Token`.

![Kopiowanie Refresh Token po autoryzacji](../../image/upload/google-drive/授权完复制token.png)

Jeśli później zmienisz konto Google, klienta OAuth albo stara autoryzacja wygaśnie, nie musisz usuwać kanału. Otwórz stronę edycji i kliknij `Reauthorize`.

## Krok 6: Zapisz kanał

Po wypełnieniu wszystkich pól zapisz kanał.

## Szybki przebieg

```text
Otwórz Google Cloud
-> Utwórz lub wybierz projekt
-> Włącz Google Drive API
-> Skonfiguruj Google Auth Platform
-> Jeśli Audience to External, dodaj swoje konto Google do Test users
-> Utwórz klienta OAuth typu Web application
-> Użyj https://your-domain.com/api/oauth/google/callback jako redirect URI
-> Wpisz Client ID i Client Secret w ImgBed
-> Kliknij Get Token
-> Zaloguj się przez Google i autoryzuj
-> Skopiuj Refresh Token ze strony callback
-> Wklej go w ImgBed i zapisz
-> Prześlij obraz testowy
```

## Referencje

1. Google OAuth Web Server Applications: https://developers.google.com/identity/protocols/oauth2/web-server
2. Google Workspace OAuth Consent Configuration: https://developers.google.com/workspace/guides/configure-oauth-consent
3. Google Drive API Auth Scopes: https://developers.google.com/workspace/drive/api/guides/api-specific-auth
