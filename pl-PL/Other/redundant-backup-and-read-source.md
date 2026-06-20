# Nadmiarowa kopia zapasowa i przełączanie źródła odczytu

Nadmiarowa kopia zapasowa zapisuje dodatkową kopię już przesłanego pliku.

Zarówno plik podstawowy, jak i plik kopii zapasowej mogą służyć jako źródła odczytu. Odwiedzający zwykle nie widzą różnicy. Zmienia się tylko kanał pamięci, który serwuje plik.

## Co potrafi nadmiarowa kopia zapasowa

| Funkcja | Opis |
| --- | --- |
| Zapis dodatkowej kopii | Tworzy kopię na innym kanale uploadu, aby zmniejszyć ryzyko awarii pojedynczego kanału. |
| Przełączanie źródła odczytu | Po udanej kopii pozwala przełączać odczyt między kanałem podstawowym i zapasowym. |
| Kopia jednego pliku | Tworzy kopię z poziomu szczegółów pliku. |
| Kopia zbiorcza | Zaznacz wiele plików w panelu administracyjnym i skopiuj je razem. |
| Globalna kopia nadmiarowa | Tworzy kopie według katalogu z Innych ustawień. |

## Wejście do nadmiarowej kopii

Otwórz:

```text
System Settings -> Other Settings -> Redundant Backup
```

![Nadmiarowa kopia zapasowa](../../image/other/冗余备份截图.png)

To wejście najlepiej sprawdza się do dodawania kopii dla katalogu lub wielu plików naraz.

Kanał kopii można wybrać ręcznie albo wybrać automatyczne przełączanie i pozwolić ImgBed znaleźć odpowiedni kanał zapasowy.

## Kopia ze szczegółów pliku

Otwórz stronę szczegółów pliku w panelu administracyjnym i kliknij backup.

![Kopia w szczegółach pliku](../../image/other/文件详情里文件备份.png)

To najlepsze rozwiązanie, gdy chcesz na żądanie zabezpieczyć jeden ważny plik.

Po udanej kopii strona szczegółów pokazuje dostępne źródła odczytu.

## Kopia zbiorcza z zaznaczenia

W panelu administracyjnym zaznacz kilka plików i uruchom kopię zbiorczą.

![Kopia zbiorcza](../../image/other/批量备份截图.png)

To dobre rozwiązanie dla grupy plików.

Kopia z zaznaczenia, kopia ze szczegółów pliku i nadmiarowa kopia z Innych ustawień używają tego samego systemu. To tylko różne punkty wejścia.

## Przełączanie źródła odczytu po kopii

Po zakończeniu kopii strona szczegółów pozwala przełączyć źródło odczytu:

| Źródło odczytu | Opis |
| --- | --- |
| Kanał podstawowy | Czyta z oryginalnego kanału uploadu. |
| Kanał zapasowy | Czyta z kanału, w którym znajduje się kopia nadmiarowa. |

![Przełączanie źródła po kopii](../../image/other/备份成功切换读取源.png)

Odwiedzający nie muszą wiedzieć, czy plik jest serwowany z kanału podstawowego, czy zapasowego.

Wybrane źródło staje się preferowanym źródłem dla późniejszego dostępu do pliku.

## Kiedy kopia jest pomijana

Poniższe przypadki są pomijane podczas tworzenia kopii. To nie są błędy.

| Przypadek | Dlaczego jest pomijany |
| --- | --- |
| Plik ma już kopię | Plik, który ma już kopię zapasową, nie jest kopiowany ponownie. |
| Kanał podstawowy i zapasowy są takie same | Kopia ma sens tylko w innym kanale. |
| Brak użytecznego kanału zapasowego | Nie ma odpowiedniego alternatywnego kanału. |

Krótko: kopie muszą trafiać do innego kanału, a pliki już skopiowane nie zużywają ponownie miejsca.

## Kanał podstawowy i kanał zapasowy

| Nazwa | Znaczenie |
| --- | --- |
| Kanał podstawowy | Kanał użyty przy pierwszym uploadzie pliku. |
| Kanał zapasowy | Kanał przechowujący kopię nadmiarową. |
| Podstawowe źródło odczytu | Plik jest obecnie czytany z kanału podstawowego. |
| Zapasowe źródło odczytu | Plik jest obecnie czytany z kanału zapasowego. |

Podstawowe i zapasowe źródło odczytu zachowują się tak samo dla użytkownika.

Dopóki plik zapasowy jest dostępny, obrazy, wideo i linki pobierania działają po przełączeniu na zapasowe źródło odczytu.

## Co się dzieje po usunięciu pliku

Po usunięciu pliku ImgBed usuwa zarówno plik podstawowy, jak i plik zapasowy.
