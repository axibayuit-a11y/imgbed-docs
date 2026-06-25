# Automatyczne tagowanie

Automatyczne tagowanie konfiguruje się w:

```text
System Settings -> Other Settings -> Auto Tagging
```

Funkcja automatycznie generuje tagi obrazów. Są przydatne w wyszukiwaniu, filtrowaniu w API losowych obrazów, filtrowaniu publicznej galerii i kontroli dostępu według klasyfikacji wiekowej.

## Co potrafi automatyczne tagowanie

| Funkcja | Opis |
| --- | --- |
| Generowanie tagów treści | Dodaje tagi dla osób, scen, obiektów, stylu artystycznego i podobnej zawartości wizualnej. |
| Generowanie tagów postaci | Przydatne dla obrazów anime i ilustracji. |
| Dodawanie tagów orientacji | Dodaje `landscape`, `portrait` albo `square`. |
| Dodawanie klasyfikacji obrazu | Zapisuje wyniki `G/S/Q/E` dla treści ogólnej, wrażliwej, wątpliwej lub jawnie seksualnej. |
| Automatyczne tagowanie przy przesyłaniu | Nowo przesłane obrazy automatycznie trafiają do procesu tagowania. |
| Tagowanie zbiorcze | Dodaje tagi do starych obrazów we wszystkich katalogach lub wybranych katalogach. |

## Co przygotować przed rozpoczęciem

Przygotuj co najmniej jeden dostępny URL Hugging Face Space.

Zalecane podejście to zduplikowanie Space `wd-tagger` od SmilingWolf na własne konto Hugging Face:

```text
https://huggingface.co/spaces/SmilingWolf/wd-tagger
```

Możesz tymczasowo użyć publicznego Space, ale publiczne instancje Space są współdzielone przez wielu użytkowników i mogą mieć kolejki, spowolnienia albo przerwy. Zduplikowany Space na własnym koncie jest stabilniejszy przy długoterminowym automatycznym tagowaniu.

## Duplikowanie Space SmilingWolf

1. Zaloguj się do Hugging Face.
2. Otwórz `https://huggingface.co/spaces/SmilingWolf/wd-tagger`.

![Publiczny Space SmilingWolf](../../image/other/微笑狼的公开仓库.png)

3. Kliknij menu z trzema kropkami w prawym górnym rogu.
4. Wybierz `Duplicate this Space`.
5. Zostaw domyślną nazwę Space albo wybierz własną, np. `wd-tagger`.
6. Ustaw widoczność na `Public`. Publiczne Spaces są łatwiejsze do wywołania przez ImgBed.
7. Na początku zostaw domyślny darmowy sprzęt. Zmień go później tylko wtedy, gdy kolejki będą wyraźnym problemem.
8. Utwórz Space i poczekaj na zakończenie procesu budowania.

Po zakończeniu budowania otwórz stronę swojego Space. URL zwykle wygląda tak:

```text
https://huggingface.co/spaces/your-name/wd-tagger
```

Skopiuj adres z przeglądarki i wklej go do `Space URLs` w ImgBed.

## Wpisywanie wielu adresów Space URL

Wpisuj jeden Space URL w każdym wierszu.

Przykłady:

| Wartość | Opis |
| --- | --- |
| `https://huggingface.co/spaces/SmilingWolf/wd-tagger` | Publiczny Space SmilingWolf. Dobry do tymczasowych testów. |
| `https://huggingface.co/spaces/lintonxue00/wd-tagger` | URL strony skopiowanego Space. |
| `https://huggingface.co/spaces/your-name/wd-tagger` | Twój zduplikowany Space. |

Możesz wpisać wiele adresów URL. ImgBed używa wielu instancji Space jednocześnie, co może poprawić szybkość.

Jeśli jeden Space jest tymczasowo niedostępny, pozostałe mogą nadal przetwarzać obrazy.

## Ustawienia

| Opcja | Rekomendacja |
| --- | --- |
| `Space URLs` | Wpisz przygotowane URL-e Space. Użyj co najmniej jednego. |
| Katalog docelowy | Zostaw puste dla wszystkich katalogów. Wybierz katalog tylko wtedy, gdy chcesz przetworzyć konkretny katalog. |
| Model rozpoznawania | Domyślnie zostaw `wd-swinv2-tagger-v3`. |
| Próg tagów ogólnych | Domyślna wartość działa dla większości obrazów. Niższa daje więcej tagów, wyższa mniej. |
| Próg tagów postaci | Domyślnie konserwatywny, pomaga unikać błędnych tagów postaci. |
| Automatyczny próg `MCut` | Na początku zostaw wyłączony. Włącz, jeśli model ma sam zdecydować o liczbie tagów. |
| Automatyczne tagowanie przy przesyłaniu | Włącz, jeśli nowe obrazy mają automatycznie otrzymywać tagi. |
| Rozpocznij tagowanie | Ręczne tagowanie zbiorcze starych obrazów. |

## Zalecane wartości początkowe

| Opcja | Zalecana wartość |
| --- | --- |
| Model rozpoznawania | `wd-swinv2-tagger-v3` |
| Próg tagów ogólnych | `0.35` |
| Próg tagów postaci | `0.85` |
| `MCut` | Na początku wyłączony |
| Automatyczne tagowanie przy przesyłaniu | Włącz w razie potrzeby |

Jeśli tagów jest za dużo, lekko zwiększ próg ogólny.

Jeśli tagów jest za mało, lekko zmniejsz próg ogólny.

## Tagowanie zbiorcze

1. Wypełnij `Space URLs`.
2. Wybierz katalog docelowy.
3. Kliknij rozpoczęcie tagowania.
4. Poczekaj na zakończenie procesu.

Jeśli katalog docelowy jest pusty, ImgBed przetwarza wszystkie katalogi.

Tagowanie zbiorcze jest najlepsze dla starych obrazów. Dla nowych obrazów włącz automatyczne tagowanie przy przesyłaniu, aby nie uruchamiać go ręcznie za każdym razem.

## Automatyczne tagowanie przy przesyłaniu

Po włączeniu tej opcji nowo przesłane obrazy automatycznie wywołują skonfigurowane `Space URLs`.

Nadaje się to do długotrwałego użycia.

Jeśli Twoja instancja Space ma kolejkę, samo przesyłanie może zakończyć się najpierw, a tagowanie będzie kontynuowane później.

## Które obrazy są przetwarzane

Automatyczne tagowanie przetwarza głównie pliki obrazów.

Obrazy, które mają już kompletne tagi, orientację, klasyfikację, szerokość i wysokość, są pomijane, aby nie wykonywać niepotrzebnych wywołań Space.

ImgBed w miarę możliwości uzupełnia tylko brakujące informacje. Na przykład jeśli brakuje tylko orientacji, próbuje ją dodać bez pełnego procesu tagowania treści.

## Najczęstsze pytania

### Dlaczego duplikować własny Space?

Publiczne instancje Space są współdzielone przez wielu użytkowników. Własny zduplikowany Space jest używany głównie przez Twoją stronę ImgBed, więc zwykle działa szybciej i stabilniej.

### Space ciągle się uruchamia

Po pierwszym utworzeniu albo po długim okresie bezczynności Space może potrzebować czasu na start.

Najpierw otwórz stronę swojego Space. Gdy normalnie rozpozna obraz, wróć do ImgBed i rozpocznij tagowanie.

### Jak skopiować URL Space?

Otwórz stronę Hugging Face Space i skopiuj adres z przeglądarki.

Przykłady:

```text
https://huggingface.co/spaces/lintonxue00/wd-tagger
https://huggingface.co/spaces/SmilingWolf/wd-tagger
```

### Czy mogę dodać wiele Spaces?

Tak. Wpisz jeden adres Space URL w każdym wierszu.

Wiele instancji Space przetwarza obrazy razem i jest przydatne przy dużej liczbie obrazów.

### Dlaczego tagi są po angielsku?

Modele SmilingWolf zwracają tagi po angielsku. To normalne.

Tagi służą głównie do wyszukiwania, filtrowania, API losowych obrazów i filtrów publicznej galerii.

### Do czego służą tagi klasyfikacji?

Wyniki klasyfikacji współpracują z trybem dostępu w Ustawieniach bezpieczeństwa.

Na przykład gdy dostęp odwiedzających jest ograniczony według wieku, publiczne przeglądanie i funkcje losowych obrazów filtrują obrazy według tych reguł.

## Szybki schemat

```text
Sign in to Hugging Face
-> Open SmilingWolf/wd-tagger
-> Duplicate this Space
-> Wait for the Space to build
-> Copy your Space URL
-> Fill Space URLs in ImgBed
-> Choose model and thresholds
-> Start tagging or enable auto-tag on upload
```
