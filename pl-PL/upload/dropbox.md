# Dodawanie kanału Dropbox

## Co przygotować przed rozpoczęciem

| Wymaganie | Dlaczego jest potrzebne |
| --- | --- |
| Konto Dropbox | Do logowania i autoryzacji aplikacji |
| Aplikacja Dropbox | Do wygenerowania `App Key` i `App Secret` |
| Domena ImgBed | Do URI przekierowania OAuth |
| Dostępne miejsce Dropbox | Właściwe miejsce przechowywania plików |

## Konfiguracja

### Krok 1: Utwórz aplikację Dropbox

1. Otwórz Dropbox App Console:

```text
https://www.dropbox.com/developers/apps
```

2. Utwórz nową aplikację.
3. Jako typ dostępu wybierz:

```text
App folder
```

4. Nadaj aplikacji rozpoznawalną nazwę, np. `imgbed-app`.
5. Po utworzeniu otwórz stronę szczegółów aplikacji.

Zalecany typ dostępu:

| Typ dostępu | Rekomendacja |
| --- | --- |
| `App folder` | Zalecany. Pasuje do sposobu, w jaki ImgBed zapisuje pliki. |
| `Full Dropbox` | Niezalecany. ImgBed nie potrzebuje pełnego dostępu do konta. |

![Tworzenie aplikacji Dropbox](../../image/upload/dropbox/开发者创建应用.png)

### Krok 2: Dodaj Redirect URI

Na stronie szczegółów aplikacji Dropbox znajdź ustawienia OAuth lub Redirect URI i dodaj:

```text
https://your-domain.com/api/oauth/dropbox/callback
```

Jeśli używasz panelu administracyjnego z kilku domen, dodaj każdy pasujący callback URL.

![Konfiguracja Redirect URI](../../image/upload/dropbox/配置回调地址.png)

### Krok 3: Skonfiguruj uprawnienia aplikacji

Otwórz kartę `Permissions` i włącz co najmniej te scope:

| Scope | Wymagany | Cel |
| --- | --- | --- |
| `account_info.read` | Wymagany | Czyta informacje o koncie i limicie |
| `files.metadata.read` | Wymagany | Czyta metadane plików i katalogów do kontroli ścieżek |
| `files.metadata.write` | Wymagany | Tworzy katalogi i zapisuje metadane |
| `files.content.write` | Wymagany | Przesyła pliki. Brak tego scope powoduje `required scope 'files.content.write'`. |
| `files.content.read` | Zalecany | Pozwala pobierać, podglądać i tworzyć tymczasowe linki plików |

Po wybraniu scope kliknij `Submit` na dole strony.

![Dodawanie uprawnień](../../image/upload/dropbox/添加对应的权限.png)

Ważne:

| Sytuacja | Co zrobić |
| --- | --- |
| Zmieniono scope | Uruchom autoryzację tokenu ponownie i pobierz nowy `Refresh Token`. |
| Nie wykonano ponownej autoryzacji | Stary token nie dostanie nowych uprawnień, więc upload może nadal się nie udawać. |

### Krok 4: Skopiuj dane aplikacji

Zapisz te dwie wartości ze strony aplikacji Dropbox:

| Pole Dropbox | Pole ImgBed |
| --- | --- |
| `App key` | `App Key` |
| `App secret` | `App Secret` |

### Krok 5: Wypełnij kanał Dropbox

W Ustawieniach przesyłania wybierz `Dropbox` i wypełnij:

| Pole ImgBed | Co wpisać |
| --- | --- |
| Nazwa kanału | Czytelna nazwa, np. `Main Dropbox` |
| App Key | Dropbox `App key` |
| App Secret | Dropbox `App secret` |
| Refresh Token | Na razie zostaw puste |
| Katalog główny | Opcjonalnie. Domyślnie `imgbed`. |
| Notatka | Opcjonalnie |

![Pobieranie tokenu](../../image/upload/dropbox/获取令牌.png)

### Krok 6: Pobierz Refresh Token

1. W ImgBed kliknij `Get Token`.
2. Zaloguj się na konto Dropbox, które chcesz podłączyć.
3. Zatwierdź autoryzację.
4. Strona callback pokaże `Refresh Token`.
5. Skopiuj go.
6. Wróć do ImgBed i wklej go w polu `Refresh Token`.

![Kopiowanie tokenu](../../image/upload/dropbox/复制令牌.png)

## Jak sprawdzić

| Kontrola | Oczekiwany wynik |
| --- | --- |
| Karta kanału | Kanał Dropbox pojawia się po zapisaniu. |
| Przełącznik kanału | Kanał można włączyć. |
| Token zapisany | Strona szczegółów pokazuje, że `Refresh Token` został zapisany. |
| Upload testowy | Obraz testowy pojawia się w folderze aplikacji Dropbox. |

Jeśli limity pojemności są włączone, kliknij zapytanie o limit. Po udanym zapytaniu karta pokaże użyte miejsce, całkowite miejsce i czas ostatniej aktualizacji.

![Zapytanie o limit zakończone powodzeniem](../../image/upload/dropbox/查询额度成功.png)

## Rozwiązywanie problemów

| Problem | Rozwiązanie |
| --- | --- |
| ImgBed zgłasza niepełną konfigurację | Sprawdź, czy `App Key`, `App Secret` i `Refresh Token` są wypełnione. |
| Autoryzacja działa, ale nie pojawia się `Refresh Token` | Kliknij ponownie `Get Token` i upewnij się, że używany jest tryb offline. |
| Upload kończy się błędem `required scope 'files.content.write'` | Włącz `files.content.write`, kliknij `Submit`, a potem pobierz nowy `Refresh Token`. |
| Callback się nie udaje | Sprawdź, czy redirect URI to `https://your-domain.com/api/oauth/dropbox/callback`. |
| Pliki nie są znajdowane | Sprawdź, czy aplikacja Dropbox została utworzona w trybie `App folder`. |

## Szybki przebieg

```text
Open Dropbox App Console
-> Create an app
-> Choose App folder access
-> Add https://your-domain.com/api/oauth/dropbox/callback
-> Enable account_info.read / files.metadata.read / files.metadata.write / files.content.write
-> Optionally enable files.content.read
-> Click Submit
-> Copy App Key and App Secret
-> Fill them into ImgBed
-> Click Get Token
-> Copy the Refresh Token from the callback page
-> Paste it back into ImgBed and save
```

## Referencje

1. Dropbox App Console: https://www.dropbox.com/developers/apps
2. Dropbox OAuth Guide: https://developers.dropbox.com/oauth-guide
3. Dropbox Developer Guide: https://www.dropbox.com/developers/reference/developer-guide
