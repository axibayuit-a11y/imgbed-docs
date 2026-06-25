# Zarządzanie konfiguracją za pomocą API Token

Zarządzanie konfiguracją za pomocą API Token jest przeznaczone dla skryptów automatyzacji, narzędzi operacyjnych i paneli sterowania innych firm. Pozwala odczytywać i aktualizować konfigurację kanałów przesyłania, ustawienia bezpieczeństwa, ustawienia stron, inne ustawienia oraz lekkie relacje federacji bez otwierania strony administracyjnej.

Uprawnienie do zarządzania udostępnia tylko lekkie operacje odpowiednie dla skryptów. Ciężkie operacje wymagające potwierdzenia w przeglądarce, zadań wsadowych interfejsu użytkownika albo czyszczenia indeksu federacji nadal trzeba obsługiwać w panelu administracyjnym w przeglądarce.

![Edycja API Token](../../image/Safety/apitoken/编辑管理权限api.png)

## Zanim zaczniesz

Otwórz panel administracyjny, a następnie przejdź do:

```text
System Settings -> Security Settings -> API Token
```

Podczas tworzenia lub edytowania API Token upewnij się, że ma uprawnienie do zarządzania. Uprawnienie do zarządzania może zmieniać konfigurację witryny, dlatego przyznawaj je tylko zaufanym skryptom lub zaufanym użytkownikom.

Wszystkie trzy skrypty zarządzania domyślnie używają trybu próbnego dla operacji zapisu. Po sprawdzeniu podglądu dodaj `--apply`, aby faktycznie zapisać zmiany.

Token możesz także umieścić w zmiennej środowiskowej:

```powershell
$env:IMGBED_API_TOKEN="your API Token"
```

## Pobieranie skryptów zarządzania

Pakiet dokumentacji udostępnia trzy skrypty Node.js:

| Skrypt | Przeznaczenie |
| --- | --- |
| <a href="/tools/imgbed-token-upload-settings.mjs" download>Pobierz skrypt zarządzania ustawieniami przesyłania</a> | Zarządza kanałami przesyłania, kanałami podrzędnymi i równoważeniem obciążenia. |
| <a href="/tools/imgbed-token-site-settings.mjs" download>Pobierz skrypt zarządzania ustawieniami witryny</a> | Zarządza ustawieniami bezpieczeństwa, ustawieniami stron i innymi ustawieniami. |
| <a href="/tools/imgbed-token-federation.mjs" download>Pobierz skrypt zarządzania relacjami federacji</a> | Zarządza lekkimi akcjami relacji federacji, żądaniami i wiadomościami. |

Wymagany jest Node.js 18 lub nowszy.

### Wspólne parametry

| Parametr | Wymagany | Opis |
| --- | --- | --- |
| `--base-url <url>` | Tak | Adres URL witryny ImgBed, na przykład `https://image.ai6.me`. |
| `--token <token>` | Tak | API Token. Możesz też użyć zmiennej środowiskowej `IMGBED_API_TOKEN`. |
| `--retries <n>` | Nie | Liczba ponowień przy błędach tymczasowych. Domyślnie `3`. |
| `--timeout-ms <n>` | Nie | Limit czasu żądania. Domyślnie `180000`. |
| `--output <pretty\|json>` | Nie | Format wyjścia. Domyślnie `pretty`; dla programów używaj `json`. |
| `--save-response <path>` | Nie | Zapisuje końcowy wynik JSON do pliku. |
| `--apply` | Nie | Faktycznie wykonuje zapisy. Bez tej opcji operacje zapisu pokazują tylko podgląd. |
| `-h` / `--help` | Nie | Wyświetla pomoc skryptu. |

## Ustawienia przesyłania

Skrypt ustawień przesyłania wyświetla, odczytuje, tworzy, edytuje i usuwa podrzędne kanały przesyłania. Może też przełączać równoważenie obciążenia dla jednego kanału przesyłania najwyższego poziomu.

```powershell
node imgbed-token-upload-settings.mjs --base-url "https://your-domain" --token "your API Token" --list
```

### Parametry ustawień przesyłania

| Parametr | Opis |
| --- | --- |
| `--list` | Wyświetla grupy ustawień przesyłania. |
| `--get` | Odczytuje kanał najwyższego poziomu albo jeden kanał podrzędny pod nim. |
| `--upsert` | Tworzy lub edytuje jeden kanał podrzędny. Tryb próbny, chyba że ustawiono `--apply`. |
| `--delete` | Usuwa jeden kanał podrzędny. Tryb próbny, chyba że ustawiono `--apply`. |
| `--load-balance <true\|false>` | Włącza lub wyłącza równoważenie obciążenia dla kanału najwyższego poziomu. |
| `--channel <key>` | Kanał przesyłania najwyższego poziomu, taki jak `s3`, `github` albo `telegram`. |
| `--channel-name <name>` | Kanał podrzędny lub nazwa konta. |
| `--set key=value` | Ustawia jedno pole. Można powtarzać. Obsługiwane są ścieżki z kropkami. |
| `--patch-json <path>` | Scala pola z pliku JSON. |
| `--apply` | Zapisuje wynik operacji zapisu. |

### Klucze kanałów

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

### Przykłady ustawień przesyłania

Wyświetlenie wszystkich ustawień przesyłania:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --list
```

Odczyt konfiguracji kanału S3:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get `
  --channel s3
```

Odczyt jednego kanału podrzędnego S3:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get `
  --channel s3 `
  --channel-name "backup-s3"
```

Tworzenie lub edycja jednego kanału podrzędnego. Najpierw uruchom bez `--apply`, aby zobaczyć podgląd:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --upsert `
  --channel webdav `
  --channel-name "backup-webdav" `
  --set enabled=false `
  --set remark="backup test"
```

Następnie zapisz po potwierdzeniu:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --upsert `
  --channel webdav `
  --channel-name "backup-webdav" `
  --set enabled=false `
  --set remark="backup test" `
  --apply
```

Usunięcie jednego kanału podrzędnego:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --delete `
  --channel webdav `
  --channel-name "backup-webdav" `
  --apply
```

Włączenie równoważenia obciążenia S3:

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --load-balance true `
  --channel s3 `
  --apply
```

W przypadku złożonych pól zapisz plik JSON i przekaż go przez `--patch-json`:

```json
{
  "enabled": true,
  "remark": "primary account"
}
```

```powershell
node imgbed-token-upload-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --upsert `
  --channel s3 `
  --channel-name "primary-s3" `
  --patch-json ".\s3-channel.json" `
  --apply
```

## Ustawienia witryny

Skrypt ustawień witryny zarządza trzema obszarami konfiguracji:

| Obszar | Parametr | Opis |
| --- | --- | --- |
| Ustawienia bezpieczeństwa | `security` | Uwierzytelnianie użytkowników, uwierzytelnianie administratorów, urządzenia logowania, API Token, moderacja obrazów, limity użytkowników, WebDAV i więcej. |
| Ustawienia stron | `page` | Strona globalna, strona użytkownika, strona administratora i powiązane ustawienia wyświetlania. |
| Inne ustawienia | `others` | API losowych obrazów, publiczne przeglądanie, lokalny węzeł federacji, automatyczne tagowanie, geolokalizacja IP, kanał kopii zapasowej, OCR i więcej. |

Najpierw użyj `--list-sections`, aby zobaczyć edytowalne obszary, sekcje i pola:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --list-sections
```

### Parametry ustawień witryny

| Parametr | Opis |
| --- | --- |
| `--list-sections` | Wyświetla edytowalne obszary, sekcje i pola. |
| `--get` | Odczytuje jedną sekcję ustawień. |
| `--area <security\|page\|others>` | Wybiera obszar konfiguracji. |
| `--section <name>` | Wybiera sekcję. Użyj nazw pokazanych przez `--list-sections`. |
| `--set key=value` | Ustawia jedno pole. Można powtarzać. |
| `--apply` | Zapisuje wynik operacji zapisu. |

Dla obszaru `page` parametr `--set` używa identyfikatorów elementów konfiguracji strony, na przykład `starsEffect=true`. Dla obszarów `security` i `others` parametr `--set` używa nazwy pola w danej sekcji, na przykład `email=admin@example.com`.

### Przykłady ustawień witryny

Odczyt ustawień powiadomień o aktualizacjach systemu:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get `
  --area security `
  --section systemUpdate
```

Zmiana adresu e-mail powiadomień o aktualizacjach systemu. Najpierw uruchom bez `--apply`, aby zobaczyć podgląd:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --area security `
  --section systemUpdate `
  --set email="admin@example.com"
```

Następnie zapisz po potwierdzeniu:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --area security `
  --section systemUpdate `
  --set email="admin@example.com" `
  --apply
```

Zmiana efektu gwiazd na stronie administratora:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --area page `
  --section adminSettings `
  --set starsEffect=true `
  --apply
```

Zmiana języka geolokalizacji IP:

```powershell
node imgbed-token-site-settings.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --area others `
  --section ipGeolocation `
  --set language="en" `
  --apply
```

Ustawienia lokalnego węzła federacji mogą odczytywać i aktualizować zwykłe pola, takie jak stan włączenia, katalog synchronizacji i kod zaproszenia. Potwierdzenie domeny nie jest obsługiwane przez API Token. Jeśli panel administracyjny zgłasza, że domena lokalnego węzła różni się od bieżącej domeny dostępu, dokończ potwierdzenie w panelu administracyjnym w przeglądarce.

## Relacje federacji

Skrypt federacji zarządza statusem lokalnego węzła, węzłami wychodzącymi, węzłami przychodzącymi, wiadomościami, żądaniami dołączenia, ponownymi zgłoszeniami bez rekordu, zatwierdzeniami, odmowami oraz lekkimi akcjami relacji, które nie wymagają czyszczenia indeksu.

Aktualizacja indeksu, usuwanie indeksu federacji i potwierdzenie zmiany domeny zależą od pełnego przepływu w przeglądarce. Skrypt nie obsługuje tych ciężkich operacji.

### Lekkie i ciężkie akcje federacji

| Akcja | Obsługa przez skrypt | Opis |
| --- | --- | --- |
| Wyświetlenie statusu lokalnego węzła i listy relacji | Obsługiwane | Odczytuje tylko rekordy relacji. |
| Odczyt wiadomości i wysyłanie wiadomości | Obsługiwane | Odczytuje lub zapisuje wiadomości relacji. |
| Żądanie dołączenia do innego węzła | Obsługiwane | Używa linku zaproszenia do wysłania żądania. |
| Ponowne zgłoszenie dla relacji bez rekordu | Obsługiwane | Tylko dla kart wychodzących z `lastResult=none`; wymaga 6-znakowego kodu zaproszenia. |
| Anulowanie wychodzącego oczekującego żądania | Obsługiwane | Anuluje tylko oczekujące żądanie. |
| Akceptacja lub odrzucenie żądania przychodzącego | Obsługiwane | Obsługuje żądania od węzłów dołączających do twojego węzła. |
| Usunięcie zaakceptowanej relacji przychodzącej | Obsługiwane | Aktualizuje rekord relacji przychodzącej i powiadamia partnera. |
| Usunięcie końcowego rekordu przychodzącego | Obsługiwane | Usuwa tylko końcowy rekord relacji przychodzącej. |
| Anulowanie zaakceptowanej subskrypcji wychodzącej | Tylko w przeglądarce | Wymaga usunięcia lokalnego indeksu federacji, które przeglądarka wykonuje partiami. |
| Usunięcie końcowego rekordu wychodzącego | Tylko w przeglądarce | Może najpierw wymagać czyszczenia indeksu federacji. |
| Potwierdzenie lub anulowanie zmiany domeny | Tylko w przeglądarce | Wymaga potwierdzenia bieżącej domeny i obsługi indeksu zmiany domeny. |
| Publikowanie, pobieranie lub masowe usuwanie indeksów | Tylko w przeglądarce | Są to zadania wsadowe interfejsu użytkownika. |

### Parametry federacji

| Parametr | Opis |
| --- | --- |
| `--status` | Wyświetla status lokalnego węzła federacji, węzły wychodzące i węzły przychodzące. |
| `--list` | Wyświetla relacje federacji. |
| `--chat` | Odczytuje zapisane w pamięci podręcznej wiadomości jednej relacji. |
| `--send-message` | Wysyła wiadomość do jednej ustanowionej relacji. |
| `--join` | Wysyła żądanie dołączenia do innego węzła przez link zaproszenia. |
| `--reapply` | Ponawia zgłoszenie dla relacji bez rekordu. Wymaga 6-znakowego kodu zaproszenia. |
| `--accept` | Akceptuje żądanie przychodzące. |
| `--deny` | Odrzuca żądanie przychodzące. |
| `--cancel` | Anuluje wychodzące oczekujące żądanie albo usuwa zaakceptowaną relację przychodzącą. |
| `--delete` | Usuwa końcowy rekord relacji przychodzącej. |
| `--direction <outgoing\|incoming\|all>` | Kierunek relacji. `outgoing` oznacza węzły, do których dołączono; `incoming` oznacza węzły dołączające do twojego węzła. |
| `--domain <url>` | Domena węzła relacji. |
| `--invite-link <url>` | Link zaproszenia od węzła partnerskiego. |
| `--invite-code <code>` | 6-znakowy kod zaproszenia używany przy ponownym zgłoszeniu. |
| `--text <message>` | Treść wiadomości. |
| `--apply` | Zapisuje wynik operacji zapisu. |

### Przykłady federacji

Wyświetlenie statusu lokalnego węzła i obu list relacji:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --status
```

Wyświetlenie tylko węzłów wychodzących:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --list `
  --direction outgoing
```

Wyświetlenie tylko węzłów przychodzących:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --list `
  --direction incoming
```

Żądanie dołączenia do innego węzła. Najpierw uruchom bez `--apply`, aby zobaczyć podgląd:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --join `
  --invite-link "https://peer-domain/federation/invite/abcdef"
```

Następnie zapisz po potwierdzeniu:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --join `
  --invite-link "https://peer-domain/federation/invite/abcdef" `
  --apply
```

Ponowne zgłoszenie dla relacji bez rekordu:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --reapply `
  --domain "https://peer-domain" `
  --invite-code "abc123" `
  --apply
```

Akceptacja żądania przychodzącego:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --accept `
  --domain "https://peer-domain" `
  --apply
```

Odrzucenie żądania przychodzącego:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --deny `
  --domain "https://peer-domain" `
  --apply
```

Wysłanie wiadomości do ustanowionej relacji:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --send-message `
  --direction outgoing `
  --domain "https://peer-domain" `
  --text "Hello, this is a test message." `
  --apply
```

Anulowanie wychodzącego oczekującego żądania:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --cancel `
  --direction outgoing `
  --domain "https://peer-domain" `
  --apply
```

Usunięcie zaakceptowanej relacji przychodzącej:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --cancel `
  --direction incoming `
  --domain "https://peer-domain" `
  --apply
```

Usunięcie końcowego rekordu przychodzącego:

```powershell
node imgbed-token-federation.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --delete `
  --direction incoming `
  --domain "https://peer-domain" `
  --apply
```

Anulowanie zaakceptowanej subskrypcji wychodzącej i usunięcie rekordu wychodzącego trzeba obsłużyć w panelu administracyjnym w przeglądarce, ponieważ te akcje mogą najpierw wymagać wyczyszczenia lokalnego indeksu federacji.

### Niezgodność domeny

Jeśli domena lokalnego węzła i oczekująca domena w relacji się nie zgadzają, skrypt zgłasza błąd z `currentDomain` i `pendingDomain`. Obsłuż to w panelu administracyjnym w przeglądarce, ponieważ zmiany domeny obejmują także czyszczenie i potwierdzenie indeksów wychodzących.

Jeśli żądanie dołączenia zwraca `FEDERATION_NODE_DOMAIN_MISMATCH`, domena użyta przez link zaproszenia nie zgadza się z zapisaną domeną lokalną węzła partnerskiego. Odpowiedź zawiera `currentOrigin` i `detectedOrigin`. Użyj aktualnie potwierdzonej domeny partnera albo poproś partnera, aby najpierw potwierdził domenę w swoim panelu administracyjnym w przeglądarce.

## FAQ

### Dlaczego moja zmiana nie zaczęła działać?

Polecenia zapisu domyślnie działają w trybie podglądu. Po sprawdzeniu podglądu dodaj `--apply`, aby faktycznie zapisać zmianę.

### Skąd mam wiedzieć, które pola można zmieniać?

Dla ustawień przesyłania użyj `--get`, aby sprawdzić istniejącą strukturę kanału podrzędnego. Dla ustawień bezpieczeństwa, ustawień stron i innych ustawień użyj `--list-sections`, aby zobaczyć obszary, sekcje i pola, które skrypt może edytować.

### Chcę użyć wyniku w innym programie

Użyj `--output json` albo dodaj `--save-response result.json`. Program może bezpośrednio odczytać zapisany plik JSON.



