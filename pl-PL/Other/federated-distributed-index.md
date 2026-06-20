# Federacyjny indeks rozproszony

Federacyjny indeks rozproszony pozwala wielu stronom ImgBed udostępniać sobie listy plików.

W prostych słowach:

- Możesz udostępnić wybrane katalogi ze swojej strony innym.
- Możesz dołączyć do innego węzła i zsynchronizować jego udostępnioną listę plików do swojego panelu administracyjnego.
- Pliki federacyjne służą głównie do przeglądania, wyszukiwania i otwierania linków. Nie są ponownie przesyłane do Twojej pamięci.

## Gdzie skonfigurować

Otwórz:

```text
System Settings -> Other Settings -> Federated Distributed Index
```

![Lokalny węzeł federacji](../../image/other/联盟图/联盟分布式索引本地节点.png)

Strona ma trzy karty:

| Karta | Cel |
| --- | --- |
| Local Node | Włącz własny węzeł, potwierdź publiczną domenę, wybierz katalogi współdzielone i zaktualizuj indeks wychodzący |
| Nodes I Joined | Zarządzaj innymi węzłami ImgBed, do których dołączono |
| Nodes Joining Me | Zarządzaj prośbami innych osób o dołączenie do Twojego węzła |

## Pierwsza konfiguracja

1. Otwórz `Local Node`.
2. Włącz `Enable`.
3. Wybierz katalogi do udostępnienia w `Sync folders`.
4. Kliknij `Update Outbound Index`.
5. Jeśli ImgBed wykryje zmianę domeny, potwierdź, że bieżąca domena jest poprawna przed kontynuacją.

Możesz wybrać wiele katalogów synchronizacji.

Jeśli lista katalogów synchronizacji jest pusta, udostępniane są wszystkie katalogi.

## Local Node

### Publiczna domena

Publiczna domena to URL strony, którego inne węzły używają, aby uzyskać dostęp do Twojego węzła.

ImgBed wykrywa ją automatycznie. Nie trzeba wpisywać ręcznie. Przy pierwszej aktualizacji indeksu ImgBed zapyta, czy bieżący URL dostępu jest domeną produkcyjną.

Jeśli później zmienisz domenę, aktualizacja indeksu ponownie poprosi o potwierdzenie.

### Sync Folders

Sync folders określają, które pliki są udostępniane węzłom federacji.

Na przykład jeśli wybierzesz tylko:

```text
/1/
/2/
```

inne węzły zobaczą tylko pliki w tych dwóch katalogach.

### Update Outbound Index

Aktualizuje listę plików, którą inne węzły mogą synchronizować od Ciebie.

Użyj tego, gdy:

- włączasz federację po raz pierwszy.
- przesyłasz pliki, które chcesz udostępnić.
- zmieniasz katalogi synchronizacji.
- zmieniasz publiczną domenę i musisz ją potwierdzić.

## Nodes I Joined

`Nodes I Joined` to miejsce subskrybowania innych węzłów.

![Węzły, do których dołączono](../../image/other/联盟图/我加入的节点.png)

### Prośba o dołączenie do innego węzła

1. Poproś drugiego właściciela o link zaproszenia.
2. Wklej go w polu wejściowym.
3. Kliknij `Request to Join`.
4. Poczekaj, aż drugi właściciel zatwierdzi prośbę w swoim panelu administracyjnym.

Po zatwierdzeniu status węzła zmieni się na approved.

### Update Inbound Index

`Update Inbound Index` synchronizuje listy plików z węzłów, do których dołączono.

Użyj tego, gdy:

- drugi właściciel właśnie zatwierdził Twoją prośbę.
- drugi właściciel informuje, że udostępniona zawartość została zaktualizowana.
- chcesz odświeżyć wszystkie listy plików z dołączonych węzłów.

Aby zaktualizować tylko jeden węzeł, kliknij `Update Index` na jego karcie.

![Aktualizacja indeksu](../../image/other/联盟图/更新索引.png)

### Rezygnacja z subskrypcji

Jeśli nie chcesz już synchronizować węzła, kliknij `Unsubscribe`.

Po rezygnacji indeks federacyjny tego węzła zostanie usunięty z Twojej lokalnej strony.

## Nodes Joining Me

`Nodes Joining Me` to miejsce obsługi próśb od innych.

![Węzły dołączające do mnie](../../image/other/联盟图/加入我的节点.png)

### Generowanie linku zaproszenia

1. Upewnij się, że lokalny węzeł jest włączony.
2. Kliknij `Update Outbound Index` co najmniej raz, aby ImgBed potwierdził publiczną domenę.
3. Otwórz `Nodes Joining Me`.
4. Kliknij `Reset Invitation Link`.
5. Skopiuj link zaproszenia i wyślij go drugiemu właścicielowi.

Jeśli link zaproszenia jest pusty, publiczna domena zwykle nie została jeszcze potwierdzona. Wróć do `Local Node` i kliknij `Update Outbound Index`.

### Obsługa próśb o dołączenie

Gdy ktoś wyśle prośbę, pojawi się ona na liście `Nodes Joining Me`.

| Akcja | Znaczenie |
| --- | --- |
| Approve | Pozwala drugiemu węzłowi synchronizować Twoją udostępnioną listę plików |
| Reject | Odrzuca prośbę |
| Delete | Usuwa zakończony rekord |
| Check Status | Sprawdza, czy druga strona nadal utrzymuje tę relację |

Po zatwierdzeniu druga strona nadal musi kliknąć `Update Inbound Index`, zanim Twoje udostępnione pliki się tam pojawią.

![Zatwierdzanie zaproszonego węzła](../../image/other/联盟图/邀请节点同意.png)

## Wiadomości

Po zatwierdzeniu relacji kliknij `Message` na karcie węzła.

Wiadomości służą tylko do komunikacji o relacji federacyjnej. Nie zmieniają plików, tagów, katalogów ani uprawnień.

![Wiadomości](../../image/other/联盟图/留言功能.png)

## Oglądanie plików federacyjnych

Po zakończeniu synchronizacji wróć do listy plików w panelu administracyjnym.

Na górze strony przełączaj się między plikami lokalnymi i federacyjnymi. W plikach federacyjnych możesz przeglądać zsynchronizowaną zawartość.

Pliki federacyjne służą głównie do oglądania, wyszukiwania, podglądu i kopiowania linków. Nie są lokalnymi plikami, więc nie możesz ich przenosić, usuwać, ponownie tagować ani tworzyć ich kopii z własnej strony.

![Pliki federacyjne w panelu administracyjnym](../../image/other/联盟图/联盟管理显示效果图.png)

## FAQ

### Dlaczego prosi o ponowne zgłoszenie, bo nie ma rekordu relacji?

Zwykle oznacza to, że druga strona usunęła Cię i skasowała rekord, więc relacja nie może zostać znaleziona. Wyślij nową prośbę o dołączenie.

![Ponowne zgłoszenie bez rekordu relacji](../../image/other/联盟图/无关系记录重新申请.png)

### Dlaczego nie widzę plików po dołączeniu?

Sprawdź:

1. Drugi właściciel zatwierdził Twoją prośbę.
2. Drugi właściciel kliknął `Update Outbound Index`.
3. Ty kliknąłeś `Update Inbound Index`.
4. Katalogi synchronizacji drugiego właściciela obejmują katalogi, które chce udostępnić.

### Co zrobić po wykryciu zmiany domeny?

Jeśli aktualnie otwierasz panel administracyjny przez domenę produkcyjną, potwierdź i kontynuuj.

Jeśli używasz tymczasowego adresu, anuluj, otwórz panel przez domenę produkcyjną i spróbuj ponownie.

### Co oznacza pusta lista Sync Folder?

Pusta lista Sync Folder oznacza, że udostępniane są wszystkie katalogi.

Aby udostępnić tylko wybrane katalogi, zaznacz je ręcznie.

### Różnica między aktualizacją outbound i inbound

| Przycisk | Proste znaczenie |
| --- | --- |
| Update Outbound Index | Aktualizuje to, co inni mogą synchronizować ode mnie |
| Update Inbound Index | Aktualizuje to, co ja zsynchronizowałem od innych |
