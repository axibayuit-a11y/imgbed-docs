# Usuwanie plików przez API Token

Usuwanie przez API Token jest przeznaczone dla skryptów, automatyzacji i programów zewnętrznych. Nie trzeba otwierać panelu administracyjnego: wystarczy adres strony, Token i jednoznaczny ID pliku, aby usunąć jeden albo kilka plików z ImgBed.

Usuwanie jest operacją zapisu. Po wykonaniu polecenia pliki zostaną naprawdę usunięte. Najpierw sprawdź w `imgbed-token-list.mjs`, które `fileId` mają zostać usunięte, a dopiero potem przekaż te ID do skryptu usuwania.

![Edycja API Token](../../image/Safety/apitoken/编辑删除权限api.png)

## Przygotowanie

W panelu administracyjnym otwórz:

```text
System Settings -> Security Settings -> API Token
```

Podczas tworzenia lub edycji API Tokena upewnij się, że Token ma pozwolenie na usuwanie. Ten skrypt potrzebuje tylko uprawnienia `delete`.

Token można też przekazać przez zmienną środowiskową:

```powershell
$env:IMGBED_API_TOKEN="your API Token"
```

## Pobieranie skryptu

| Skrypt | Zastosowanie |
| --- | --- |
| <a href="/tools/imgbed-token-delete.mjs" download>skrypt usuwania plików</a> | Usuwa jeden lub kilka jednoznacznie wskazanych ID plików |

Wymagany jest Node.js 18 lub nowszy.

## Jak działa API usuwania

Skrypt usuwania wywołuje serwerowe API usuwania:

```text
POST /api/manage/delete/batch
```

Request musi zawierać API Token:

```text
Authorization: Bearer <token>
```

Przykładowe body requestu:

```json
{
  "fileIds": ["photos/2026/a.txt"],
  "deleteStrictness": "strict"
}
```

Jeżeli `fileIds` zawiera jeden plik, jest to usuwanie pojedynczego pliku. Jeżeli zawiera kilka plików, jest to usuwanie zbiorcze. Serwer obsługuje maksymalnie 15 plików w jednym żądaniu, a skrypt automatycznie dzieli żądania zgodnie z `--batch-size`.

API zwraca strumień postępu NDJSON. Typowe zdarzenia to `batch_start`, `file_step`, `file_done`, `batch_complete` i `batch_error`. Skrypt odczytuje te zdarzenia i zbiera je w czytelny wynik albo wynik JSON.

Po udanym usunięciu serwer automatycznie aktualizuje indeks plików, statystyki katalogów, statystyki zajętości oraz czyści pamięć podręczną.

## Parametry skryptu usuwania

| Parametr | Wymagany | Opis |
| --- | --- | --- |
| `--base-url <url>` | Tak | Adres ImgBed, np. `https://image.ai6.me` |
| `--token <token>` | Tak | API Token; można użyć `IMGBED_API_TOKEN` |
| `--file-id <id>` | Tak | ID pliku do usunięcia; można podać wiele razy |
| `--strictness <strict\|soft>` | Nie | Rygor usuwania; domyślnie `strict` |
| `--batch-size <n>` | Nie | Liczba plików w jednym żądaniu; domyślnie `15`, maksymalnie `15` |
| `--retries <n>` | Nie | Próby ponowienia przy błędach tymczasowych; domyślnie `3` |
| `--timeout-ms <n>` | Nie | Timeout jednego requestu; domyślnie `180000` |
| `--output <pretty\|json>` | Nie | Format wyjścia; domyślnie `pretty` |
| `--save-response <path>` | Nie | Zapisuje wynik końcowy jako JSON |
| `-h` / `--help` | Nie | Pokazuje pomoc skryptu |

Ten skrypt usuwa tylko pliki przekazane jawnie przez `--file-id`. Nie wykonuje wyszukiwania niejednoznacznego, nie czyści całych katalogów i nie czyta ID do usunięcia z listy rozdzielonej przecinkami ani z lokalnego pliku.

## Usuwanie rygorystyczne i miękkie

| Tryb | Opis |
| --- | --- |
| `strict` | Tryb domyślny. Jeżeli usunięcie w zdalnym magazynie się nie powiedzie, rekord ImgBed zostaje zachowany, aby można było ponowić próbę albo sprawdzić przyczynę. |
| `soft` | Jeżeli usunięcie w zdalnym magazynie się nie powiedzie, rekord ImgBed i tak zostanie wyczyszczony, a wynik zwróci ostrzeżenie. |

Jeśli zdalny plik musi zostać usunięty, aby operacja była uznana za udaną, użyj domyślnego `strict`. Jeśli zdalna platforma nie pozwala już usunąć pliku, ale chcesz tylko posprzątać rekord ImgBed, użyj `soft`.

## Przykłady użycia

Usuń jeden plik:

```powershell
node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --file-id "photos/2026/a.txt"
```

Użyj Tokena ze zmiennej środowiskowej:

```powershell
$env:IMGBED_API_TOKEN="your API Token"

node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --file-id "photos/2026/a.txt"
```

Usuń kilka plików:

```powershell
node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --file-id "photos/2026/a.txt" `
  --file-id "photos/2026/b.txt" `
  --file-id "photos/2026/c.txt"
```

Wyczyść rekord ImgBed mimo błędu usuwania zdalnego:

```powershell
node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --file-id "photos/2026/a.txt" `
  --strictness soft
```

Wypisz JSON i zapisz wynik:

```powershell
node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --file-id "photos/2026/a.txt" `
  --output json `
  --save-response ".\delete-result.json"
```

Ogranicz jeden request do 5 plików:

```powershell
node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --file-id "photos/2026/a.txt" `
  --file-id "photos/2026/b.txt" `
  --batch-size 5
```

## Sprawdź fileId przed usunięciem

Skrypt usuwania potrzebuje ID pliku z ImgBed. Możesz najpierw użyć skryptu listy, aby zobaczyć pliki w katalogu:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --dir "photos/2026" `
  --count 10 `
  --output json
```

Wartość `name` w wyniku zwykle jest `fileId`, które można przekazać do skryptu usuwania.

## FAQ

### Dlaczego usuwanie się nie powiodło, ale plik nadal jest na liście?

Przy domyślnym `strict` rekord ImgBed zostaje zachowany, jeżeli usunięcie w zdalnym magazynie się nie powiedzie. Zapobiega to sytuacji, w której znika tylko lokalny indeks, a zdalny plik nadal istnieje. Gdy masz pewność, że można wyczyścić sam rekord ImgBed, ponów próbę dla tego samego `fileId` z `soft`.

### Dlaczego w wyniku jest ostrzeżenie?

Ostrzeżenie zwykle oznacza niekrytyczny problem podczas usuwania zdalnego, czyszczenia pamięci podręcznej albo domykania statystyk. Skrypt zbiera ostrzeżenia, żeby łatwiej było ocenić, czy trzeba ponowić operację.

### Czy można usunąć cały katalog naraz?

Ten skrypt nie ma funkcji czyszczenia katalogu. Najpierw użyj skryptu listy, aby wybrać jednoznaczne `fileId`, a potem przekaż pliki pojedynczo do skryptu usuwania.



