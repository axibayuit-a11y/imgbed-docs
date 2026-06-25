# Przesyłanie plików za pomocą API Token

Przesyłanie za pomocą API Token jest przeznaczone dla skryptów, zadań automatyzacji i programów zewnętrznych. Nie trzeba otwierać interfejsu WWW. Jeśli podasz adres URL witryny, token, lokalną ścieżkę pliku oraz rzeczywisty kanał przesyłania, plik zostanie przesłany do ImgBed, a odpowiedź będzie zawierać jego adres URL.

![Edycja API Token](../../image/Safety/apitoken/编辑上传权限api.png)

## Zanim zaczniesz

Otwórz panel administracyjny, a następnie przejdź do:

```text
System Settings -> Security Settings -> API Token
```

Podczas tworzenia lub edytowania API Token upewnij się, że ma uprawnienie do przesyłania i używa rzeczywistego domyślnego kanału przesyłania. Przesyłanie przez API Token nie korzysta z wejścia inteligentnego rozdzielania, a skrypty również powinny przekazywać rzeczywisty kanał.

## Pobieranie skryptów przesyłania

Pakiet dokumentacji udostępnia dwa skrypty Node.js:

| Skrypt | Przeznaczenie |
| --- | --- |
| <a href="/tools/imgbed-token-single-upload.mjs" download>Pobierz skrypt przesyłania pojedynczym żądaniem</a> | Wywołuje `/upload` jeden raz. Przydatny przy małych plikach i testach łączności. |
| <a href="/tools/imgbed-token-chunk-upload.mjs" download>Pobierz skrypt przesyłania fragmentami</a> | Używa fragmentowania przez API Token, przesyłania bezpośredniego albo sesji przesyłania platformy. Zalecany dla dużych plików. |

Wymagany jest Node.js 18 lub nowszy.

## Lista dostępnych kanałów

Oba skrypty mogą wyświetlić kanały przesyłania dostępne dla bieżącego API Token:

```powershell
node imgbed-token-single-upload.mjs --base-url "https://your-domain" --token "your API Token" --list-channels
node imgbed-token-chunk-upload.mjs --base-url "https://your-domain" --token "your API Token" --list-channels
```

Podczas wyświetlania kanałów `--file` i `--channel` nie są wymagane. Odpowiedź zawiera domyślny kanał przesyłania, klucze kanałów przesyłania, nazwy kanałów podrzędnych oraz stan równoważenia obciążenia. Sekrety, tokeny odświeżania i inne poufne wartości konfiguracji nie są zwracane.

## Wybór trybu przesyłania

| Tryb | Najlepszy do | Opis |
| --- | --- | --- |
| Przesyłanie pojedynczym żądaniem | Małe pliki, proste skrypty, testy łączności | Wysyła cały plik do `/upload` w jednym żądaniu. |
| Przesyłanie fragmentami | Duże pliki lub pliki, przy których może wystąpić przekroczenie czasu | Skrypt wybiera przepływ fragmentowany, bezpośredni albo oparty na sesji przesyłania właściwy dla danego kanału. |

W przypadku większych plików w pierwszej kolejności używaj skryptu przesyłania fragmentami. Przesyłanie pojedynczym żądaniem ograniczają rozmiar żądania Cloudflare, pamięć Workera oraz limity poszczególnych platform.

## Przesyłanie pojedynczym żądaniem

Skrypt przesyłania pojedynczym żądaniem wysyła jedno żądanie do `/upload`.

```powershell
node imgbed-token-single-upload.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --file "D:\test\image.png" `
  --channel s3 `
  --folder "photos/2026"
```

Token możesz także umieścić w zmiennej środowiskowej:

```powershell
$env:IMGBED_API_TOKEN="your API Token"
node imgbed-token-single-upload.mjs --base-url "https://your-domain" --file "D:\test\image.png" --channel s3
```

### Parametry przesyłania pojedynczym żądaniem

| Parametr | Wymagany | Opis |
| --- | --- | --- |
| `--base-url <url>` | Tak | Adres URL witryny ImgBed, na przykład `https://image.ai6.me`. |
| `--token <token>` | Tak | API Token. Możesz też użyć zmiennej środowiskowej `IMGBED_API_TOKEN`. |
| `--file <path>` | Tak | Lokalna ścieżka pliku. |
| `--channel <key>` | Tak | Kanał przesyłania. |
| `--folder <path>` | Nie | Folder przesyłania, na przykład `photos/2026` albo `/user/`. |
| `--name-type <type>` | Nie | Tryb nazewnictwa mapowany na serwerowe `uploadNameType`. Domyślnie `default`. |
| `--channel-name <name>` | Nie | Wybiera kanał podrzędny lub konto. Jeśli zostanie pominięty, decyzję podejmuje konfiguracja kanału w serwerze. |
| `--retries <n>` | Nie | Liczba ponowień przy błędach tymczasowych. Domyślnie `3`. |
| `--timeout-ms <n>` | Nie | Limit czasu żądania. Domyślnie `180000`. |
| `--output <pretty\|json>` | Nie | Format wyjścia. Domyślnie `pretty`. |
| `--save-response <path>` | Nie | Zapisuje końcową odpowiedź JSON do pliku. |
| `--list-channels` | Nie | Wyświetla kanały dostępne dla bieżącego tokena i kończy działanie. |

### Kanały dla przesyłania pojedynczym żądaniem

| Klucz kanału | Kanał |
| --- | --- |
| `telegram` / `tg` | Telegram |
| `discord` / `dc` | Discord |
| `cfr2` / `r2` | Cloudflare R2 |
| `s3` | S3 |
| `webdav` / `wd` | Kanał magazynu WebDAV |
| `github` / `gh` | GitHub Releases |
| `gitlab` / `gl` | GitLab Packages |
| `huggingface` / `hf` | Hugging Face |
| `onedrive` / `od` | OneDrive |
| `googledrive` / `google` / `gd` | Google Drive |
| `dropbox` / `db` | Dropbox |
| `yandex` / `yx` | Yandex Disk |
| `pcloud` / `pd` | pCloud |

### Limity rozmiaru przy przesyłaniu pojedynczym żądaniem

W miarę możliwości przesyłaj pojedynczym żądaniem pliki mniejsze niż 100 MB.

Te kanały mają jawne progi blokowania dla pojedynczego żądania `/upload`:

| Kanał | Limit pojedynczego żądania |
| --- | ---: |
| Telegram | 20 MiB |
| Discord | 10 MiB |
| S3 | 64 MiB |
| WebDAV | 64 MiB |
| GitHub Releases | 64 MiB |
| GitLab Packages | 64 MiB |

Gdy plik przekroczy jeden z tych limitów, skrypt zgłosi odpowiedni błąd lokalnie. Inne kanały nie mają w skrypcie zakodowanej lokalnej kontroli 100 MB. Jeśli treść żądania przekroczy możliwości Cloudflare albo platformy docelowej, błąd zwróci Cloudflare lub zdalna platforma.

## Przesyłanie fragmentami

Skrypt przesyłania fragmentami najpierw prosi serwer o ustalenie pliku docelowego, a następnie wykonuje przepływ dużych plików dla wybranego kanału. Nie musisz samodzielnie pisać żądań sesji fragmentowania, scalania ani kończenia operacji.

```powershell
node imgbed-token-chunk-upload.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --file "D:\test\video.zip" `
  --channel github `
  --folder "photos/2026" `
  --concurrency 3
```

### Parametry przesyłania fragmentami

| Parametr | Wymagany | Opis |
| --- | --- | --- |
| `--base-url <url>` | Tak | Adres URL witryny ImgBed. |
| `--token <token>` | Tak | API Token. Możesz też użyć zmiennej środowiskowej `IMGBED_API_TOKEN`. |
| `--file <path>` | Tak | Lokalna ścieżka pliku. |
| `--channel <key>` | Tak | Kanał przesyłania. |
| `--folder <path>` | Nie | Folder przesyłania. |
| `--name-type <type>` | Nie | Tryb nazewnictwa mapowany na serwerowe `uploadNameType`. Domyślnie `default`. |
| `--channel-name <name>` | Nie | Wybiera kanał podrzędny lub konto. Jeśli zostanie pominięty, decyzję podejmuje konfiguracja kanału w serwerze. |
| `--concurrency <n>` | Nie | Liczba równoległych przesyłań. Domyślnie `1`, maksymalnie `3`. |
| `--retries <n>` | Nie | Liczba ponowień przy błędach tymczasowych. Domyślnie `3`. |
| `--timeout-ms <n>` | Nie | Limit czasu pojedynczego żądania. Domyślnie `180000`. |
| `--output <pretty\|json>` | Nie | Format wyjścia. Domyślnie `pretty`. |
| `--save-response <path>` | Nie | Zapisuje końcową odpowiedź JSON do pliku. |
| `--list-channels` | Nie | Wyświetla kanały dostępne dla bieżącego tokena i kończy działanie. |

### Kanały dla przesyłania fragmentami

| Klucz kanału | Przepływ przesyłania |
| --- | --- |
| `telegram` / `tg` | Rzeczywista sesja fragmentowanego `/upload` |
| `discord` / `dc` | Rzeczywista sesja fragmentowanego `/upload` |
| `cfr2` / `r2` | Rzeczywista sesja fragmentowanego `/upload` |
| `github` / `gh` | Rzeczywista sesja fragmentowanego `/upload` |
| `gitlab` / `gl` | Rzeczywista sesja fragmentowanego `/upload` |
| `webdav` / `wd` | Rzeczywista sesja fragmentowanego `/upload` |
| `s3` | Wieloczęściowe przesyłanie S3 |
| `onedrive` / `od` | Sesja przesyłania OneDrive |
| `googledrive` / `google` / `gd` | Wznawialne przesyłanie Google Drive |
| `dropbox` / `db` | Sesja przesyłania Dropbox |
| `yandex` / `yx` | Bezpośredni adres URL przesyłania Yandex |
| `pcloud` / `pd` | Link przesyłania pCloud |
| `huggingface` / `hf` | Przesyłanie Hugging Face LFS |

Próbki plików skompresowanych dla Yandex były niestabilne w testach. Potwierdzono, że pliki nieskompresowane przesyłają się poprawnie.

## Odpowiedź po przesłaniu

Po udanym przesłaniu skrypt wypisuje:

```text
success
src: /file/photos/2026/example.png
url: https://your-domain/file/photos/2026/example.png
fileId: photos/2026/example.png
```

| Pole | Opis |
| --- | --- |
| `src` | Wewnętrzna ścieżka pliku w witrynie. |
| `url` | Pełny publiczny adres URL, odpowiedni dla własnych skryptów lub rekordów w bazie danych. |
| `fileId` | ID pliku, przydatne przy późniejszych zapytaniach, zarządzaniu lub logach. |
| `channelName` | Skrypt przesyłania fragmentami może zwrócić faktycznie użyty kanał podrzędny lub konto. |

Przy `--output json` skrypt wypisuje pełną odpowiedź JSON do użycia programowego.

## Bezpośrednie wywołanie API pojedynczego żądania

Jeśli nie używasz skryptu, możesz bezpośrednio wywołać punkt końcowy przesyłania pojedynczym żądaniem:

```text
POST https://your-domain/upload?uploadChannel=s3&uploadFolder=photos/2026&uploadNameType=default
Authorization: Bearer your API Token
Content-Type: multipart/form-data
```

Pole formularza:

| Pole | Wymagane | Opis |
| --- | --- | --- |
| `file` | Tak | Plik do przesłania. |

Parametry query:

| Parametr | Wymagany | Opis |
| --- | --- | --- |
| `uploadChannel` | Tak | Rzeczywisty kanał przesyłania. |
| `uploadFolder` | Nie | Folder przesyłania. |
| `uploadNameType` | Nie | Tryb nazewnictwa. |
| `channelName` | Nie | Wybiera kanał podrzędny lub konto. |

Udane odpowiedzi wyglądają tak:

```json
{
  "success": true,
  "src": "/file/photos/2026/example.png",
  "url": "https://your-domain/file/photos/2026/example.png",
  "fileId": "photos/2026/example.png"
}
```

## FAQ

### Duże przesyłanie pojedynczym żądaniem kończy się niepowodzeniem

Pojedyncze żądanie `/upload` wysyła cały plik naraz. Duże pliki mogą zostać zablokowane przez Cloudflare albo zdalną platformę. Dla dużych plików używaj skryptu przesyłania fragmentami.

### `--channel-name` jest ustawione, ale przesyłanie nadal się nie udaje

Sprawdź, czy wybrany kanał rzeczywiście ma kanał podrzędny o tej nazwie i czy jest on włączony. Jeśli `--channel-name` zostanie pominięte, serwer wybiera dostępne konto zgodnie z konfiguracją danego kanału.

### Chcę użyć wyniku w innym programie

Użyj `--output json` albo dodaj `--save-response result.json`. Odczytaj pole `url`, aby uzyskać pełny adres URL pliku.

### Yandex nie może przesyłać archiwów

Yandex nie obsługuje formatów archiwów. Może to wynikać z zasad tej platformy. Przy korzystaniu z Yandex w miarę możliwości przesyłaj pliki niebędące archiwami.



