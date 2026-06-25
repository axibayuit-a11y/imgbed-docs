# Transfer z linków magnet

Transfer z linków magnet pobiera pliki z linku magnet i automatycznie przesyła je do wybranego kanału przechowywania w chmurze.

Przydaje się do przenoszenia odcinków anime, wideo, archiwów i podobnych plików. Wklejasz link magnet, a ImgBed tworzy zadanie pobierania w tle. Po zakończeniu pobierania plik jest przesyłany do ImgBed, a finalny link pojawia się na liście przesłanych plików.

![Transfer z linków magnet](../../image/other/磁力链接/磁力链接.png)

## Gdzie używać

Wejście do transferu z linków magnet znajduje się w obszarze przesyłania na stronie głównej.

Wklej link magnet do pola, wybierz `Transfer`, a potem prześlij.

![Przesyłanie anime](../../image/other/磁力链接/上传番剧.png)

## Przed pierwszym użyciem

Najpierw skonfiguruj transfer z linków magnet w panelu administracyjnym.

Zwykle potrzebujesz:

1. Konta GitHub do uruchamiania zadania pobierania.
2. Kanału przesyłania do chmury, np. Google Drive lub OneDrive.
3. Docelowego katalogu przesyłania.
4. Limitu czasu zadania.

Po przygotowaniu ustawień wróć na stronę główną i wklej link magnet, aby rozpocząć transfer.

## Przesyłanie linku magnet

1. Wklej link magnet w polu przesyłania na stronie głównej.
2. Upewnij się, że tryb to `Transfer`.
3. Kliknij przycisk przesyłania.
4. Poczekaj, aż ImgBed utworzy zadanie magnet.
5. Po uruchomieniu zadania użyj pływającego panelu `Magnet Tasks` w prawym dolnym rogu, aby śledzić postęp.

Pobieranie i przesyłanie mogą zająć czas. Szybkość zależy od zasobu magnet, środowiska uruchomieniowego GitHub i wybranego kanału przechowywania w chmurze.

![Magnet w trakcie pobierania](../../image/other/磁力链接/磁力链接下载中.png)

## Po zakończeniu

Po ukończeniu zadania lista przesłanych plików pokazuje nazwę pliku i link.

Dla filmów wyświetlany jest podgląd wideo, dla obrazów podgląd obrazu, a dla innych plików zwykła ikona pliku.

![Pobrane wideo](../../image/other/磁力链接/下载好后的视频.png)

Możesz skopiować:

| Typ linku | Zastosowanie |
| --- | --- |
| Link oryginalny | Bezpośredni dostęp do pliku |
| Markdown | Wpisy lub notatki Markdown |
| HTML | Kod strony WWW |
| BBCode | Fora obsługujące BBCode |

## Panel zadań magnet

Panel w prawym dolnym rogu pokazuje liczbę zadań, nazwę zadania, postęp i status końcowy.

Typowe statusy:

| Status | Znaczenie |
| --- | --- |
| Oczekuje | Zadanie zostało utworzone i czeka na uruchomienie. |
| Pobieranie | Zasób magnet jest pobierany. |
| Przesyłanie | Plik został pobrany i jest przesyłany do chmury. |
| Ukończone | Przesyłanie się powiodło i link można skopiować. |
| Niepowodzenie | Zadanie nie zakończyło się poprawnie. Sprawdź komunikat i spróbuj ponownie. |

## Wskazówki

- Jeśli link magnet zawiera wiele plików, ImgBed priorytetowo pokazuje główny ukończony plik.
- Przetwarzanie dużych plików trwa dłużej. Poczekaj na zakończenie zadania przed odświeżeniem strony.
- Jeśli zasób magnet nie ma dostępnych peerów, może być bardzo wolny albo się nie udać.
- Jeśli limit konta chmurowego został wyczerpany, autoryzacja wygasła albo katalog przesyłania jest błędny, zadanie może się nie udać.
- Podgląd wideo może potrzebować kilku sekund po zakończeniu przesyłania.

## Najczęstsze pytania

### Nic się nie dzieje po wklejeniu linku magnet

Upewnij się, że transfer z linków magnet jest włączony w panelu administracyjnym oraz że wybrano działające konto GitHub i kanał chmurowy.

### Pobieranie zawsze jest wolne

Szybkość pobierania z linków magnet zależy od samego zasobu. Jeśli nie ma dostępnych peerów, pobieranie może być bardzo wolne albo niemożliwe.

### Po przesłaniu nie ma podglądu

Najpierw sprawdź, czy link pliku się otwiera. Pliki wideo mogą potrzebować chwili, aby załadować się w przeglądarce; możesz też otworzyć link bezpośrednio.

### Co sprawdzić, jeśli zadanie się nie uda?

Sprawdź, czy link magnet jest poprawny, czy kanał chmurowy działa i czy katalog przesyłania jest prawidłowy. Następnie wyślij zadanie ponownie.
