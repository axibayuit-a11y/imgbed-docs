# Listowanie i filtrowanie przez API Token

Skrypt listowania przez API Token jest przeznaczony dla skryptów, automatyzacji i programów zewnętrznych, które muszą odczytywać dane ImgBed. Używa wyłącznie uprawnienia `list`; nie przesyła plików, nie usuwa plików, nie zmienia konfiguracji ani nie blokuje i nie odblokowuje przesyłania z konkretnego IP.

Główne zastosowania:

| Funkcja | Opis |
| --- | --- |
| Lista w zarządzaniu plikami | Odczytuje listę plików z panelu administracyjnego i obsługuje zaawansowane parametry filtrowania z zarządzania plikami |
| Lista w zarządzaniu użytkownikami | Odczytuje statystyki przesyłania użytkowników/IP i obsługuje parametry filtrowania z zarządzania użytkownikami |
| Lista kanałów przesyłania | Odczytuje odtajnione kanały przesyłania, podkanały, pojemność i informacje o równoważeniu obciążenia |
| Tabela statystyk katalogów | Odczytuje statystyki katalogów i informacje o stronicowaniu katalogów |

## Przygotowanie

W panelu administracyjnym otwórz:

```text
System Settings -> Security Settings -> API Token
```

Podczas tworzenia lub edycji API Tokena upewnij się, że Token ma pozwolenie na listowanie. Ten skrypt potrzebuje tylko uprawnienia `list`.

Token można też przekazać przez zmienną środowiskową:

```powershell
$env:IMGBED_API_TOKEN="your API Token"
```

## Pobieranie skryptu

| Skrypt | Zastosowanie |
| --- | --- |
| <a href="/tools/imgbed-token-list.mjs" download>Pobierz skrypt listowania i filtrowania</a> | Lista w zarządzaniu plikami, lista w zarządzaniu użytkownikami, lista kanałów przesyłania, tabela statystyk katalogów |

Wymagany jest Node.js 18 lub nowszy.

## Parametry ogólne

| Parametr | Wymagany | Opis |
| --- | --- | --- |
| `--base-url <url>` | Tak | Adres ImgBed, np. `https://image.ai6.me` |
| `--token <token>` | Tak | API Token; można użyć `IMGBED_API_TOKEN` |
| `--retries <n>` | Nie | Próby ponowienia przy błędach tymczasowych; domyślnie `3` |
| `--timeout-ms <n>` | Nie | Timeout jednego requestu; domyślnie `180000` |
| `--output <pretty\|json>` | Nie | Format wyjścia; domyślnie `pretty`. Do wywołań programowych zalecany jest `json` |
| `--save-response <path>` | Nie | Zapisuje wynik końcowy jako JSON |
| `-h` / `--help` | Nie | Pokazuje pomoc skryptu |

## Lista w zarządzaniu plikami

Wyświetl pliki z zarządzania plikami:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --count 10
```

Wypisz JSON:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --count 10 `
  --output json
```

Odczytaj tylko liczbę w bieżących warunkach filtrowania:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --file-summary `
  --dir "photos/2026" `
  --recursive
```

### Parametry zarządzania plikami

| Parametr | Opis |
| --- | --- |
| `--files` | Wyświetla pliki |
| `--file-summary` | Odczytuje tylko statystykę liczby plików |
| `--start <n>` | Przesunięcie stronicowania |
| `--count <n>` | Liczba zwracanych wyników |
| `--dir <path>` | Wskazuje katalog |
| `--recursive` | Uwzględnia pliki z podkatalogów |
| `--search <text>` | Szuka słowa kluczowego |
| `--channel <key>` | Filtruje według głównego kanału przesyłania, np. `github`, `s3`, `yandex` |
| `--channel-scope <primary\|backup\|all>` | Zakres filtrowania kanału: kanał główny, zapasowy albo wszystkie |
| `--channel-name-groups <value>` | Filtr grup podkanałów; przekazywany bez zmian do istniejącego parametru serwera |
| `--list-type <csv>` | Typ listy; często używane wartości to `None,White,Block` |
| `--include-tags <csv>` | Tagi, które muszą wystąpić |
| `--exclude-tags <csv>` | Tagi do wykluczenia |
| `--time-start <ms>` | Początek czasu przesyłania, znacznik czasu w milisekundach |
| `--time-end <ms>` | Koniec czasu przesyłania, znacznik czasu w milisekundach |
| `--file-exts <csv>` | Uwzględnia tylko wskazane rozszerzenia, np. `jpg,png,pdf` |
| `--exclude-file-exts <csv>` | Wyklucza wskazane rozszerzenia |
| `--file-status-categories <csv>` | Kategorie plików: `image,audio,video,document,code,other` |
| `--upload-ip <ip>` | Filtruje według prefiksu IP przesyłania |
| `--age-ratings <csv>` | Klasyfikacja wiekowa: `none,all-ages,r12,r16,r18` |
| `--orientation <csv>` | Filtr orientacji; przekazywany bez zmian do istniejących wartości serwera |
| `--read-source <csv>` | Filtr źródła odczytu; przekazywany bez zmian do istniejących wartości serwera |
| `--access-status <normal\|blocked>` | Status publicznego dostępu |
| `--min-width <n>` | Minimalna szerokość |
| `--max-width <n>` | Maksymalna szerokość |
| `--min-height <n>` | Minimalna wysokość |
| `--max-height <n>` | Maksymalna wysokość |
| `--min-file-size <mb>` | Minimalny rozmiar pliku; jednostka używa istniejącego parametru MB serwera |
| `--max-file-size <mb>` | Maksymalny rozmiar pliku; jednostka używa istniejącego parametru MB serwera |

### Przykłady zarządzania plikami

Szukaj PDF:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --search "pdf" `
  --file-status-categories "document" `
  --count 20
```

Filtruj według IP przesyłania i kanału:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --upload-ip "103.62" `
  --channel yandex `
  --channel-scope primary
```

Zapisz pełny wynik:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --count 100 `
  --output json `
  --save-response ".\files.json"
```

## Lista w zarządzaniu użytkownikami

Wyświetl statystyki przesyłania użytkowników/IP:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --count 20
```

Szukaj konkretnego IP albo lokalizacji:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --search "43.198.183.56"
```

Zobacz szczegóły plików przesłanych przez konkretne IP:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --user-detail `
  --ip "43.198.183.56" `
  --count 20
```

Wyświetl IP z zablokowanym przesyłaniem:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --blocked-ips
```

### Parametry zarządzania użytkownikami

| Parametr | Opis |
| --- | --- |
| `--users` | Wyświetla statystyki przesyłania użytkowników/IP |
| `--user-detail` | Pokazuje szczegóły plików przesłanych przez konkretne IP |
| `--blocked-ips` | Wyświetla IP z zablokowanym przesyłaniem |
| `--ip <ip>` | Wymagany przy `--user-detail` |
| `--start <n>` | Przesunięcie stronicowania |
| `--count <n>` | Liczba zwracanych wyników |
| `--sort <value>` | Sortowanie: `timeDesc`, `timeAsc`, `countDesc`, `countAsc`, `totalSizeDesc`, `totalSizeAsc` |
| `--search <text>` | Szuka IP albo lokalizacji |
| `--upload-status <allowed\|blocked>` | Czy przesyłanie jest dozwolone |
| `--start-time <ms>` | Początek okresu statystyk, znacznik czasu w milisekundach |
| `--end-time <ms>` | Koniec okresu statystyk, znacznik czasu w milisekundach |
| `--file-status-categories <csv>` | Filtr kategorii plików |
| `--age-ratings <csv>` | Filtr klasyfikacji wiekowej |
| `--min-file-size <mb>` | Minimalny rozmiar pliku |
| `--max-file-size <mb>` | Maksymalny rozmiar pliku |
| `--list-type <csv>` | Typ listy; często używane wartości to `None,White,Block` |
| `--access-status <normal\|blocked>` | Status publicznego dostępu |

### Przykłady zarządzania użytkownikami

Wyświetl użytkowników z zablokowanym przesyłaniem:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --upload-status blocked
```

Szukaj po słowie kluczowym lokalizacji:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --search "Hong Kong"
```

Sortuj według liczby przesłań:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --sort countDesc `
  --count 50
```

## Lista kanałów przesyłania

Wyświetl odtajnioną konfigurację kanałów przesyłania:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --channels
```

Wynik zawiera:

| Pole | Opis |
| --- | --- |
| `type` | Główny kanał przesyłania, np. `github`, `s3`, `yandex` |
| `name` | Nazwa podkanału albo konta |
| `enabled` | Czy jest włączony |
| `load_balance_enabled` | Czy load balancing jest włączony dla tego głównego kanału |
| `quota_enabled` | Czy sprawdzanie pojemności jest włączone |
| `quota_limit_bytes` | Limit pojemności |
| `quota_used_bytes` | Użyta pojemność |
| `quota_checked_at` | Czas sprawdzenia pojemności |
| `tag_json` | Niewrażliwe tagi, np. publiczne albo prywatne repozytorium |
| `created_at` / `updated_at` | Czas utworzenia i aktualizacji |

To API nie zwraca kluczy, tokenów odświeżania, tokenów tymczasowych, haseł ani innej wrażliwej konfiguracji.

## Tabela statystyk katalogów

Wyświetl statystyki katalogów:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --directories `
  --limit 20
```

Wyświetl pełne ścieżki katalogów i szukaj po prefiksie:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --directories `
  --scope full `
  --search-prefix "test" `
  --include-parents `
  --limit 10
```

### Parametry statystyk katalogów

| Parametr | Opis |
| --- | --- |
| `--directories` | Wyświetla tabelę statystyk katalogów |
| `--dir <path>` | Katalog, od którego zacząć listowanie |
| `--scope <direct\|full>` | `direct` pokazuje tylko katalogi bezpośrednie, `full` pokazuje pełne ścieżki |
| `--search-prefix <path>` | Szuka po prefiksie katalogu |
| `--include-parents` | W trybie `full` dołącza także katalogi nadrzędne |
| `--limit <n>` | Liczba zwracanych wyników; serwer zwraca maksymalnie `100` |
| `--cursor <path>` | Kursor następnej strony |

## Format wyjścia

Domyślny format `pretty` nadaje się do czytania przez człowieka:

```powershell
node imgbed-token-list.mjs --base-url "https://your-domain" --token "your API Token" --users --count 5
```

Jeżeli wynik ma przetwarzać inny program, użyj `--output json`:

```powershell
node imgbed-token-list.mjs --base-url "https://your-domain" --token "your API Token" --users --count 5 --output json
```

Możesz też zapisać pełny wynik:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --users `
  --count 5 `
  --output json `
  --save-response ".\users.json"
```

## FAQ

### Czy ten skrypt zmienia dane?

Nie. Ten skrypt wywołuje tylko API odczytu. Nie przesyła, nie usuwa, nie przenosi plików, nie edytuje konfiguracji ani nie blokuje i nie odblokowuje przesyłania z konkretnego IP.

### Dlaczego potrzebne jest uprawnienie `list`?

Lista w zarządzaniu plikami, lista w zarządzaniu użytkownikami, odtajniona lista kanałów i statystyki katalogów to funkcje odczytu, więc wystarczy uprawnienie `list` dla API Tokena.

### Jak sprawdzić dostępne parametry?

Uruchom:

```powershell
node imgbed-token-list.mjs --help
```

Skrypt pokaże wszystkie akcje i parametry.


