# Nadmiarowa kopia zapasowa i przełączanie źródła odczytu

Nadmiarowa kopia zapasowa zapisuje dodatkową kopię pliku, który został już przesłany.

Zarówno plik podstawowy, jak i plik kopii zapasowej mogą służyć jako źródła odczytu. Odwiedzający zwykle nie widzą różnicy. Zmienia się tylko kanał przechowywania, z którego plik jest udostępniany.

## Co potrafi nadmiarowa kopia zapasowa

| Funkcja | Opis |
| --- | --- |
| Zapis dodatkowej kopii | Tworzy kopię zapasową w innym kanale przesyłania, aby zmniejszyć ryzyko awarii pojedynczego kanału. |
| Przełączanie źródła odczytu | Po udanym utworzeniu kopii zapasowej pozwala przełączać odczyt między kanałem podstawowym i zapasowym. |
| Kopia zapasowa jednego pliku | Tworzy kopię zapasową jednego pliku z poziomu strony szczegółów pliku. |
| Zbiorcza kopia zapasowa | Pozwala zaznaczyć wiele plików w panelu administracyjnym i utworzyć ich kopie zapasowe razem. |
| Globalna nadmiarowa kopia zapasowa | Tworzy kopie zapasowe plików według katalogu z poziomu Innych ustawień. |

## Wejście do nadmiarowej kopii zapasowej

Otwórz:

```text
System Settings -> Other Settings -> Redundant Backup
```

![Nadmiarowa kopia zapasowa](../../image/other/冗余备份截图.png)

To wejście najlepiej sprawdza się do dodawania kopii zapasowych dla katalogu lub dla wszystkich plików zbiorczo.

Kanał kopii zapasowej można wybrać ręcznie. Możesz też wybrać automatyczne przełączanie i pozwolić ImgBed znaleźć odpowiedni kanał zapasowy.

## Kopia zapasowa ze szczegółów pliku

Otwórz stronę szczegółów pliku w panelu administracyjnym i kliknij przycisk kopii zapasowej.

![Kopia zapasowa w szczegółach pliku](../../image/other/文件详情里文件备份.png)

To najlepsze rozwiązanie, gdy chcesz na żądanie utworzyć kopię zapasową jednego ważnego pliku.

Po udanym utworzeniu kopii zapasowej strona szczegółów pliku pokazuje dostępne źródła odczytu.

## Zbiorcza kopia zapasowa z zaznaczenia

W panelu administracyjnym zaznacz kilka plików i uruchom zbiorczą kopię zapasową.

![Zbiorcza kopia zapasowa](../../image/other/批量备份截图.png)

To najlepsze rozwiązanie do przetworzenia grupy plików.

Kopia zapasowa z zaznaczenia, kopia zapasowa ze szczegółów pliku i nadmiarowa kopia zapasowa w Innych ustawieniach używają tego samego systemu kopii zapasowych. Różnią się tylko punktem wejścia.

## Przełączanie źródła odczytu po utworzeniu kopii zapasowej

Po zakończeniu tworzenia kopii zapasowej strona szczegółów pliku pozwala przełączyć źródło odczytu:

| Źródło odczytu | Opis |
| --- | --- |
| Kanał podstawowy | Odczytuje plik z pierwotnego kanału przesyłania. |
| Kanał zapasowy | Odczytuje plik z kanału kopii zapasowej. |

![Przełączanie źródła odczytu po kopii zapasowej](../../image/other/备份成功切换读取源.png)

Odwiedzający nie muszą wiedzieć, czy plik jest udostępniany z kanału podstawowego, czy zapasowego.

Wybrane źródło odczytu staje się preferowanym źródłem przy późniejszym dostępie do pliku.

## Kiedy kopia zapasowa jest pomijana

Poniższe przypadki są pomijane podczas tworzenia kopii zapasowej. To nie są błędy.

| Przypadek | Dlaczego jest pomijany |
| --- | --- |
| Kopia zapasowa już istnieje | Plik, który ma już kopię zapasową, nie jest kopiowany ponownie. |
| Kanał podstawowy i zapasowy są takie same | Kopia zapasowa ma sens tylko wtedy, gdy jest przechowywana w innym kanale. |
| Brak dostępnego kanału zapasowego | Nie ma odpowiedniego alternatywnego kanału. |

Krótko: kopie zapasowe muszą trafiać do innego kanału, a pliki z istniejącą kopią zapasową nie zużywają ponownie dodatkowego miejsca.

## Kanał podstawowy i kanał zapasowy

| Nazwa | Znaczenie |
| --- | --- |
| Kanał podstawowy | Kanał użyty przy pierwszym przesłaniu pliku. |
| Kanał zapasowy | Kanał przechowujący nadmiarową kopię. |
| Podstawowe źródło odczytu | Plik jest obecnie odczytywany z kanału podstawowego. |
| Zapasowe źródło odczytu | Plik jest obecnie odczytywany z kanału zapasowego. |

Podstawowe i zapasowe źródło odczytu zachowują się tak samo z perspektywy użytkownika.

Dopóki plik zapasowy jest dostępny, obrazy, wideo i linki pobierania działają po przełączeniu na zapasowe źródło odczytu.

## Co się dzieje po usunięciu pliku

Po usunięciu pliku ImgBed usuwa zarówno plik podstawowy, jak i plik zapasowy.
