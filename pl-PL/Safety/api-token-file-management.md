# Zarządzanie plikami za pomocą API Token

Zarządzanie plikami za pomocą API Token jest przeznaczone dla skryptów, zadań automatyzacji i zewnętrznych paneli administracyjnych. Używa uprawnienia `manage`, aby bez otwierania panelu administracyjnego edytować informacje o plikach, przenosić pliki, zmieniać ich nazwy, tworzyć pliki zastępcze katalogów, dostosowywać tagi plików i status listy, blokować albo przywracać możliwość przesyłania z danego IP oraz tworzyć lub usuwać krótkoterminowe Tokeny przesyłania.

Ten skrypt obsługuje tylko lekkie działania w zarządzaniu plikami i zarządzaniu użytkownikami. Przesyłanie, listowanie, usuwanie, ustawienia przesyłania, ustawienia witryny i relacje federacji nadal korzystają z własnych skryptów.

![Edycja API Token](../../image/Safety/apitoken/编辑管理权限api.png)

## Przygotowanie

W panelu administracyjnym otwórz:

System Settings -> Security Settings -> API Token

Podczas tworzenia lub edycji API Token upewnij się, że Token ma pozwolenie na zarządzanie. Uprawnienie `manage` może zmieniać stan plików, stan przesyłania użytkowników i tworzyć krótkoterminowe Tokeny przesyłania, dlatego przyznawaj je tylko zaufanym skryptom lub zaufanym użytkownikom.

Operacje zapisu w skrypcie zarządzania plikami domyślnie działają w trybie podglądu i nie zapisują rzeczywistych zmian. Po sprawdzeniu podglądu dodaj `--apply`, aby wykonać zapis.

Token możesz także umieścić w zmiennej środowiskowej:

```powershell
$env:IMGBED_API_TOKEN="your API Token"
```

## Pobieranie skryptu

| Skrypt | Zastosowanie |
| --- | --- |
| <a href="/tools/imgbed-token-manage.mjs" download>skrypt zarządzania plikami</a> | Metadane plików, etykiety moderacji, tagi plików, status listy, przenoszenie, zmiana nazwy, tworzenie folderów, blokowanie/przywracanie IP oraz tworzenie i usuwanie krótkoterminowych Tokenów przesyłania |

Wymagany jest Node.js 18 lub nowszy zainstalowany lokalnie.

## Granice funkcji

| Możliwość | Skrypt | Uprawnienie |
| --- | --- | --- |
| Przesyłanie plików | `imgbed-token-single-upload.mjs` / `imgbed-token-chunk-upload.mjs` | `upload` |
| Listowanie plików, filtrowanie plików i odczyt statystyk użytkowników | `imgbed-token-list.mjs` | `list` |
| Usuwanie jednoznacznie wskazanych plików | `imgbed-token-delete.mjs` | `delete` |
| Edycja informacji o plikach, tagów i list, przenoszenie, zmiana nazwy, tworzenie folderów, blokowanie IP oraz tworzenie lub usuwanie krótkoterminowych Tokenów przesyłania | `imgbed-token-manage.mjs` | `manage` |
| Edycja kanałów przesyłania, ustawień bezpieczeństwa, ustawień stron, innych ustawień i relacji federacji | Skrypty zarządzania konfiguracją | `manage` |

`imgbed-token-manage.mjs` nie przesyła plików, nie listuje plików i nie usuwa plików. Jeśli musisz znaleźć `fileId`, najpierw użyj skryptu listowania do przefiltrowania plików. Jeśli musisz usunąć plik, przekaż konkretny `fileId` do skryptu usuwania.

## Parametry ogólne

| Parametr | Wymagany | Opis |
| --- | --- | --- |
| `--base-url <url>` | Tak | Adres ImgBed, np. `https://image.ai6.me` |
| `--token <token>` | Tak | API Token; można użyć zmiennej środowiskowej `IMGBED_API_TOKEN` |
| `--retries <n>` | Nie | Liczba ponowień przy błędach tymczasowych; domyślnie `3` |
| `--timeout-ms <n>` | Nie | Limit czasu jednego żądania; domyślnie `180000` |
| `--output <pretty\|json>` | Nie | Format wyjścia; domyślnie `pretty`. Do wywołań programowych zalecany jest `json` |
| `--save-response <path>` | Nie | Zapisuje końcowy wynik jako plik JSON |
| `--batch-size <n>` | Nie | Liczba elementów przetwarzanych w jednym żądaniu wsadowym; domyślnie `15`, maksymalnie `15` |
| `--apply` | Nie | Faktycznie wykonuje zapis; bez tej opcji pokazuje tylko podgląd |
| `-h` / `--help` | Nie | Pokazuje pomoc skryptu |

## Najpierw potwierdź fileId

Większość działań skryptu zarządzania plikami wymaga `fileId`. Możesz najpierw sprawdzić go skryptem listowania:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --dir "test4" `
  --count 10 `
  --output json
```

Pole `name` w wyniku zwykle jest `fileId`, który można przekazać do skryptu zarządzania plikami.

## Metadane pliku

Metadane pliku służą do zmiany nazwy wyświetlanej w zarządzaniu plikami panelu oraz źródła odczytu.

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-metadata `
  --file-id "photos/2026/a.jpg" `
  --file-name "cover.jpg" `
  --read-source backup
```

Po potwierdzeniu, że podgląd jest poprawny, zapisz zmianę:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-metadata `
  --file-id "photos/2026/a.jpg" `
  --file-name "cover.jpg" `
  --read-source backup `
  --apply
```

### Parametry metadanych pliku

| Parametr | Opis |
| --- | --- |
| `--set-metadata` | Zmienia metadane jednego pliku |
| `--file-id <id>` | ID pliku do zmiany |
| `--file-name <name>` | Nowa nazwa wyświetlana w panelu |
| `--read-source <primary\|backup>` | Źródło odczytu. `primary` oznacza źródło główne, a `backup` źródło zapasowe |

Podaj co najmniej jeden parametr: `--file-name` albo `--read-source`.

## Etykiety moderacji

Etykiety moderacji odpowiadają klasyfikacji wiekowej pliku. Możesz najpierw odczytać bieżącą etykietę, a następnie ją zmienić.

Odczyt etykiety moderacji:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-label `
  --file-id "photos/2026/a.jpg"
```

Ustawienie etykiety moderacji:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-label `
  --file-id "photos/2026/a.jpg" `
  --label r12 `
  --apply
```

### Parametry etykiet moderacji

| Parametr | Opis |
| --- | --- |
| `--get-label` | Odczytuje etykietę moderacji jednego pliku |
| `--set-label` | Zmienia etykietę moderacji jednego pliku |
| `--file-id <id>` | ID pliku |
| `--label <value>` | Wartość etykiety: `all-ages`, `r12`, `r16`, `r18`, `None` |

## Tagi plików

Tagi plików służą do dodawania wyszukiwalnych tagów biznesowych do plików. Skrypt obsługuje odczyt, nadpisanie, dodawanie i usuwanie tagów, a także przetwarzanie wielu plików wsadowo.

Odczyt tagów pliku:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-tags `
  --file-id "photos/2026/a.jpg"
```

Dodawanie tagów:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --add-tags `
  --file-id "photos/2026/a.jpg" `
  --tag "cover" `
  --tag "2026" `
  --apply
```

Usuwanie tagów:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --remove-tags `
  --file-id "photos/2026/a.jpg" `
  --tag "cover" `
  --apply
```

Nadpisanie tagów:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-tags `
  --file-id "photos/2026/a.jpg" `
  --tag "archive" `
  --tag "public" `
  --apply
```

Dodawanie tagów wsadowo:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --batch-tags `
  --file-id "photos/2026/a.jpg" `
  --file-id "photos/2026/b.jpg" `
  --tag-action add `
  --tag "batch-test" `
  --apply
```

### Parametry tagów plików

| Parametr | Opis |
| --- | --- |
| `--get-tags` | Odczytuje tagi jednego pliku |
| `--set-tags` | Nadpisuje tagi jednego pliku |
| `--add-tags` | Dodaje tagi do jednego pliku |
| `--remove-tags` | Usuwa tagi z jednego pliku |
| `--batch-tags` | Ustawia, dodaje albo usuwa tagi wsadowo |
| `--file-id <id>` | ID pliku; w działaniach wsadowych można przekazać wiele razy |
| `--tag <tag>` | Wartość tagu; można przekazać wiele razy |
| `--tags-json <path>` | Odczytuje tablicę tagów z pliku JSON |
| `--tag-action <set\|add\|remove>` | Akcja wsadowa dla tagów |

Przykładowa zawartość pliku `--tags-json`:

```json
["cover", "2026", "public"]
```

## Status czarnej i białej listy

Status listy określa zachowanie kontroli dostępu do pliku w trybie publicznego dostępu. Można zmienić go dla pojedynczego pliku albo wsadowo.

Ustawienie pojedynczego pliku na białą listę:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-list-type `
  --file-id "photos/2026/a.jpg" `
  --list-type White `
  --apply
```

Wsadowe dodanie plików do czarnej listy:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --batch-list-type `
  --file-id "photos/2026/a.jpg" `
  --file-id "photos/2026/b.jpg" `
  --list-type Block `
  --apply
```

Przywrócenie domyślnego statusu listy:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-list-type `
  --file-id "photos/2026/a.jpg" `
  --list-type None `
  --apply
```

### Parametry czarnej i białej listy

| Parametr | Opis |
| --- | --- |
| `--set-list-type` | Zmienia status listy jednego pliku |
| `--batch-list-type` | Zmienia status listy plików wsadowo. Jedno żądanie obsługuje maksymalnie `15` plików |
| `--file-id <id>` | ID pliku; w działaniach wsadowych można przekazać wiele razy |
| `--list-type <None\|White\|Block>` | `None` to status domyślny, `White` to biała lista, a `Block` to czarna lista |

## Przenoszenie plików

Przenoszenie plików przenosi jeden lub więcej plików do katalogu docelowego. Backend przetwarza maksymalnie `15` plików w jednym żądaniu. Skrypt automatycznie dzieli pracę według `--batch-size` i wykonuje żądania po kolei.

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --move `
  --file-id "photos/2026/a.jpg" `
  --file-id "photos/2026/b.jpg" `
  --target-path "archive/2026" `
  --apply
```

### Parametry przenoszenia

| Parametr | Opis |
| --- | --- |
| `--move` | Przenosi pliki |
| `--file-id <id>` | ID pliku do przeniesienia; można przekazać wiele razy |
| `--target-path <dir>` | Katalog docelowy |
| `--batch-size <n>` | Liczba plików przenoszonych w jednym żądaniu; domyślnie `15`, maksymalnie `15` |

## Zmiana nazwy albo ścieżki

Zmiana nazwy używa jednoznacznego starego ID pliku i nowego ID pliku. Nowy ID pliku może zmieniać tylko nazwę pliku albo jednocześnie zmieniać katalog.

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --rename `
  --old-file-id "photos/2026/a.jpg" `
  --new-file-id "photos/2026/a-renamed.jpg" `
  --apply
```

Przy wsadowej zmianie nazwy powtarzaj `--old-file-id` i `--new-file-id`:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --rename `
  --old-file-id "photos/2026/a.jpg" `
  --new-file-id "archive/2026/a.jpg" `
  --old-file-id "photos/2026/b.jpg" `
  --new-file-id "archive/2026/b.jpg" `
  --apply
```

Mapowanie można też zapisać w pliku JSON:

```json
[
  {
    "oldFileId": "photos/2026/a.jpg",
    "newFileId": "archive/2026/a.jpg"
  },
  {
    "oldFileId": "photos/2026/b.jpg",
    "newFileId": "archive/2026/b.jpg"
  }
]
```

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --rename `
  --items-json ".\rename-items.json" `
  --apply
```

### Parametry zmiany nazwy

| Parametr | Opis |
| --- | --- |
| `--rename` | Zmienia nazwę albo ścieżkę według jednoznacznego mapowania |
| `--old-file-id <id>` | Oryginalny ID pliku; można przekazać wiele razy |
| `--new-file-id <id>` | Nowy ID pliku; można przekazać wiele razy, a liczba musi odpowiadać `--old-file-id` |
| `--items-json <path>` | Tablica JSON. Każdy element ma postać `{ "oldFileId": "...", "newFileId": "..." }` |
| `--batch-size <n>` | Liczba zmian nazwy przetwarzanych w jednym żądaniu; domyślnie `15`, maksymalnie `15` |

## Tworzenie folderów

Katalogi w ImgBed wynikają ze ścieżek plików; nie ma prawdziwych pustych katalogów. Gdy skrypt tworzy folder, tworzy w katalogu docelowym plik zastępczy `0.md`, dzięki czemu folder jest widoczny w zarządzaniu plikami i statystykach katalogów.

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --create-folder `
  --parent-directory "photos" `
  --folder-name "2026" `
  --apply
```

### Parametry tworzenia folderów

| Parametr | Opis |
| --- | --- |
| `--create-folder` | Tworzy plik zastępczy katalogu |
| `--parent-directory <dir>` | Katalog nadrzędny; dla katalogu głównego przekaż pusty ciąg |
| `--folder-name <name>` | Nazwa nowego folderu |

## Blokowanie i przywracanie IP przesyłania

Za pomocą uprawnienia do zarządzania można dodać IP do listy zablokowanych przesyłań albo usunąć je z tej listy. To działanie wpływa na przyszłe przesyłanie z tego IP, ale nie usuwa plików już przesłanych z tego adresu.

Zablokowanie IP przesyłania:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --block-ip "67.159.48.149" `
  --apply
```

Przywrócenie IP przesyłania:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --allow-ip "67.159.48.149" `
  --apply
```

Wyświetlenie bieżącej listy IP zablokowanych dla przesyłania:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --blocked-ips
```

### Parametry zarządzania IP

| Parametr | Opis |
| --- | --- |
| `--block-ip <ip>` | Dodaje IP do listy zablokowanych przesyłań |
| `--allow-ip <ip>` | Usuwa IP z listy zablokowanych przesyłań |

## Tworzenie i usuwanie krótkoterminowych Tokenów przesyłania

Uprawnienie do zarządzania może tworzyć krótkoterminowe Tokeny przeznaczone wyłącznie do przesyłania. Taki Token zawsze ma tylko uprawnienie `upload`, `autoDelete` zawsze ma wartość `true`, a maksymalny czas wygaśnięcia wynosi `1` dzień.

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --create-upload-token `
  --name "Temporary Upload Token" `
  --owner "upload-bot" `
  --default-upload-channel telegram `
  --expires-in-minutes 20 `
  --apply `
  --output json
```

Możesz też przekazać bezpośrednio znacznik czasu w milisekundach:

```powershell
$expiresAt = [DateTimeOffset]::UtcNow.AddHours(12).ToUnixTimeMilliseconds()

node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --create-upload-token `
  --name "Upload Token valid for one day" `
  --owner "upload-bot" `
  --default-upload-channel telegram `
  --expires-at $expiresAt `
  --apply
```

Podczas usuwania krótkoterminowego Tokenu przesyłania trzeba przekazać `id` zwrócony przez interfejs tworzenia. Token zarządzania może usuwać tylko Tokeny spełniające poniższe warunki:

| Warunek | Wymaganie |
| --- | --- |
| Uprawnienie | `permissions` zawiera tylko `upload` |
| Automatyczne usuwanie | `autoDelete=true` |
| Okres ważności | `expiresAt - createdAt <= 24` godziny |

Usunięcie krótkoterminowego Tokenu przesyłania:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --delete-upload-token `
  --token-id "mqt4jqokc85be80d1f0f47078e848a77d6c1aa6e" `
  --apply
```

Token zarządzania nie może usuwać zwykłych Tokenów, Tokenów długoterminowych, Tokenów zawierających uprawnienia `list` / `delete` / `manage` ani Tokenów przesyłania ważnych dłużej niż `1` dzień. Takie Tokeny nadal trzeba obsługiwać w panelu administracyjnym w przeglądarce.

### Parametry krótkoterminowego Tokenu przesyłania

| Parametr | Opis |
| --- | --- |
| `--create-upload-token` | Tworzy krótkoterminowy Token tylko do przesyłania |
| `--delete-upload-token` | Usuwa kwalifikujący się krótkoterminowy Token tylko do przesyłania |
| `--name <name>` | Nazwa Tokenu |
| `--owner <owner>` | Opis właściciela Tokenu |
| `--default-upload-channel <key>` | Domyślny kanał przesyłania. Musi być prawdziwym kanałem, np. `telegram`, `s3` albo `github` |
| `--expires-in-minutes <n>` | Liczba minut do wygaśnięcia od bieżącej chwili. Maksymalnie `1440` |
| `--expires-at <ms>` | Bezwzględny czas wygaśnięcia jako znacznik czasu w milisekundach. Maksymalnie `24` godziny od bieżącej chwili |
| `--token-id <id>` | ID krótkoterminowego Tokenu przesyłania do usunięcia |

Krótkoterminowe Tokeny przesyłania pozwalają tylko przesyłać pliki. W testach krótkoterminowy Token z `permissions=["upload"]` był odrzucany przy dostępie do interfejsów listowania, zarządzania plikami i usuwania.

Po wygaśnięciu Tokeny z `autoDelete=true` są czyszczone, gdy backend sprawdzi, że wygasły. Odczyt listy API Tokenów także czyści wygasłe Tokeny, których `autoDelete` ma wartość `true`.

## Zestawienie interfejsów API

| Akcja | Metoda | API |
| --- | --- | --- |
| Zmiana metadanych pliku | `PATCH` | `/api/manage/metadata/{fileId}` |
| Odczyt etykiety moderacji | `GET` | `/api/manage/label/{fileId}` |
| Zmiana etykiety moderacji | `POST` | `/api/manage/label/{fileId}` |
| Odczyt tagów pliku | `GET` | `/api/manage/tags/{fileId}` |
| Zmiana tagów pliku | `POST` | `/api/manage/tags/{fileId}` |
| Wsadowa zmiana tagów pliku | `POST` | `/api/manage/tags/batch` |
| Zmiana statusu listy | `POST` | `/api/manage/listType/{fileId}` |
| Wsadowa zmiana statusu listy | `POST` | `/api/manage/listType/batch` |
| Przeniesienie albo zmiana nazwy | `POST` | `/api/manage/relocate/batch` |
| Utworzenie folderu | `POST` | `/api/manage/folder/create` |
| Zablokowanie IP przesyłania | `POST` | `/api/manage/cusConfig/blockip` |
| Przywrócenie IP przesyłania | `POST` | `/api/manage/cusConfig/whiteip` |
| Utworzenie krótkoterminowego Tokenu przesyłania | `POST` | `/api/manage/apiTokens` |
| Usunięcie krótkoterminowego Tokenu przesyłania | `DELETE` | `/api/manage/apiTokens?id={tokenId}` |

Skrypt automatycznie dodaje:

```text
Authorization: Bearer your API Token
```

## Format wyjścia

Domyślne wyjście `pretty` nadaje się do ręcznego odczytu. Jeśli wynik ma przetwarzać inny program, użyj `--output json`:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-tags `
  --file-id "photos/2026/a.jpg" `
  --output json
```

Możesz też zapisać pełny wynik:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-tags `
  --file-id "photos/2026/a.jpg" `
  --output json `
  --save-response ".\manage-result.json"
```

Wsadowe przenoszenie, wsadowa zmiana nazwy i wsadowe działania na listach analizują strumień postępu NDJSON zwracany przez backend oraz podsumowują liczbę zdarzeń, status ukończenia i szczegóły błędów.

## Częste pytania

### Dlaczego polecenie niczego nie zmieniło

Operacje zapisu domyślnie działają w trybie podglądu. Po potwierdzeniu, że podgląd jest poprawny, dodaj `--apply`, aby faktycznie zapisać zmianę.

### Czy ten skrypt może przesyłać, listować albo usuwać pliki

Nie. Do przesyłania używaj skryptów przesyłania, do listowania i filtrowania używaj skryptu listowania, a do usuwania konkretnych plików używaj skryptu usuwania. Skrypt zarządzania plikami obsługuje tylko lekkie działania w ramach uprawnienia `manage`.

### Skąd mam wiedzieć, który fileId przekazać

Najpierw wyszukaj pliki za pomocą `imgbed-token-list.mjs --files`. Pole `name` w wyniku zwykle jest ID pliku, czyli wartością przekazywaną tutaj jako `--file-id`.

### Ile plików może jednocześnie obsłużyć operacja wsadowa

Backend przetwarza maksymalnie `15` plików w jednym żądaniu. Skrypt domyślnie używa `--batch-size 15`; jeśli przekażesz mniejszą wartość, automatycznie podzieli pracę na kilka kolejnych żądań.

### Czy można utworzyć naprawdę pusty folder

Katalogi ImgBed są wyprowadzane ze ścieżek plików, więc prawdziwe puste foldery nie istnieją. `--create-folder` tworzy plik zastępczy katalogu `0.md`, dzięki czemu folder pojawia się w zarządzaniu plikami i statystykach katalogów.

### Jak długo może działać krótkoterminowy Token przesyłania

Maksymalnie `1` dzień, czyli `1440` minut. Po przekroczeniu tego czasu skrypt odrzuci wartość lokalnie, a backend zwróci `API_TOKEN_MANAGE_CREATE_EXPIRES_AT_TOO_LONG`.

### Czy krótkoterminowy Token przesyłania zostanie automatycznie usunięty po wygaśnięciu

Zostanie automatycznie wyczyszczony, ale nie przez natychmiastowe zadanie cykliczne. Wygasły Token jest czyszczony, gdy zostanie ponownie sprawdzony. Odczyt listy API Tokenów także czyści wygasłe Tokeny z `autoDelete=true`.
