# Transfer magnet

Transfer magnet pobiera pliki z linku magnet i automatycznie przesyła je do wybranego kanału chmurowego.

Przydaje się do przenoszenia odcinków anime, wideo, archiwów i podobnych plików. Wklejasz link magnet, a ImgBed tworzy zadanie pobierania w tle. Po zakończeniu pobierania plik jest przesyłany do ImgBed, a finalny link pojawia się na liście uploadów.

![Transfer magnet](../../image/other/磁力链接/磁力链接.png)

## Gdzie używać

Wejście transferu magnet znajduje się w obszarze uploadu na stronie głównej.

Wklej link magnet do pola, wybierz `Transfer`, a potem prześlij.

![Upload anime](../../image/other/磁力链接/上传番剧.png)

## Przed pierwszym użyciem

Najpierw skonfiguruj transfer magnet w panelu administracyjnym.

Zwykle potrzebujesz:

1. Konta GitHub do uruchamiania zadania pobierania.
2. Kanału uploadu w chmurze, np. Google Drive lub OneDrive.
3. Docelowego katalogu uploadu.
4. Limitu czasu zadania.

Po przygotowaniu ustawień wróć na stronę główną i wklej link magnet, aby rozpocząć transfer.

## Przesyłanie linku magnet

1. Wklej link magnet w polu uploadu na stronie głównej.
2. Upewnij się, że tryb to `Transfer`.
3. Kliknij upload.
4. Poczekaj, aż ImgBed utworzy zadanie magnet.
5. Po uruchomieniu zadania użyj pływającego panelu `Magnet Tasks` w prawym dolnym rogu, aby śledzić postęp.

Pobieranie i upload mogą zająć czas. Szybkość zależy od zasobu magnet, środowiska runtime GitHub i wybranego kanału chmurowego.

![Magnet w trakcie pobierania](../../image/other/磁力链接/磁力链接下载中.png)

## Po zakończeniu

Po ukończeniu zadania lista uploadów pokazuje nazwę pliku i link.

Wideo pokazuje podgląd wideo, obrazy pokazują podgląd obrazu, a inne pliki zwykłą ikonę pliku.

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
| Waiting | Zadanie zostało utworzone i czeka na uruchomienie. |
| Downloading | Zasób magnet jest pobierany. |
| Uploading | Plik został pobrany i jest przesyłany do chmury. |
| Completed | Upload się udał i link można skopiować. |
| Failed | Zadanie nie zakończyło się poprawnie. Sprawdź komunikat i spróbuj ponownie. |

## Wskazówki

- Jeśli link magnet zawiera wiele plików, ImgBed priorytetowo pokazuje główny ukończony plik.
- Duże pliki trwają dłużej. Poczekaj na zakończenie zadania przed odświeżeniem strony.
- Jeśli zasób magnet nie ma dostępnych peerów, może być bardzo wolny albo się nie udać.
- Jeśli konto chmurowe nie ma miejsca, autoryzacja wygasła albo katalog uploadu jest błędny, zadanie może się nie udać.
- Podgląd wideo może potrzebować kilku sekund po zakończeniu uploadu.

## FAQ

### Nic się nie dzieje po wklejeniu linku magnet

Upewnij się, że transfer magnet jest włączony w panelu administracyjnym oraz że wybrano działające konto GitHub i kanał chmurowy.

### Pobieranie zawsze jest wolne

Szybkość magnet zależy od samego zasobu. Jeśli nie ma dostępnych peerów, pobieranie może być bardzo wolne albo niemożliwe.

### Po uploadzie nie ma podglądu

Najpierw sprawdź, czy link pliku się otwiera. Pliki wideo mogą potrzebować chwili, aby załadować się w przeglądarce; możesz też otworzyć link bezpośrednio.

### Co sprawdzić, jeśli zadanie się nie uda?

Sprawdź, czy link magnet jest poprawny, czy kanał chmurowy działa i czy katalog uploadu jest prawidłowy. Następnie wyślij zadanie ponownie.
