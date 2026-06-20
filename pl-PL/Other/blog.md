# Blog

Funkcja Blog dodaje do strony ImgBed osobną stronę bloga.

Po włączeniu odwiedzający mogą otworzyć:

```text
https://your-domain.com/blog/
```

![Strona główna bloga](../../image/other/博客/博客首页.png)

Blog został zaadaptowany z projektu open source [LyraVoid/Mizuki](https://github.com/LyraVoid/Mizuki). ImgBed przepisał i zintegrował go z Vue, aby mógł działać jako część strony hostingu obrazów.

## Gdzie skonfigurować

Ustawienia bloga znajdują się w:

```text
System Settings -> Other Settings -> Blog
```

![Ustawienia bloga](../../image/other/博客/QQ20260611-221702.png)

## Pierwsza konfiguracja

1. Włącz `Enable`.
2. Wybierz konto GitHub, na którym ma być przechowywana konfiguracja bloga.
3. Kliknij `Update Blog`.
4. Poczekaj na komunikat powodzenia.
5. Otwórz `https://your-domain.com/blog/`, aby zobaczyć blog.

Przy pierwszym użyciu ImgBed przygotowuje prywatne repozytorium GitHub na wybranym koncie:

```text
imgbed-blog-config
```

Repozytorium przechowuje ustawienia bloga i treść artykułów.

## Pisanie wpisów

Wpisy blogowe edytuje się w prywatnym repozytorium GitHub:

```text
imgbed-blog-config
```

Typowy przebieg:

1. Otwórz GitHub.
2. Wejdź do prywatnego repozytorium `imgbed-blog-config`.
3. Edytuj lub dodaj pliki wpisów.
4. Zacommituj zmiany.
5. Wróć do panelu administracyjnego ImgBed i kliknij `Update Blog`, albo kliknij logo w lewym górnym rogu strony głównej bloga trzy razy, aby uruchomić aktualizację.

`Update Blog` nie nadpisuje treści, które napisałeś. Ta akcja służy głównie do inicjalizacji repozytorium i odświeżenia cache bloga.

## Obsługiwane funkcje

Blog obsługuje typowe funkcje: listę wpisów, kategorie, tagi, archiwum, wyszukiwanie, tryb ciemny i zmianę języka.

Obsługuje też komentarze i statystyki odwiedzin.

![Komentarze bloga](../../image/other/博客/支持留言.png)

Komentarze pojawiają się pod wpisami. Odwiedzający mogą podać avatar, pseudonim, e-mail i treść komentarza.

Statystyki pokazują wyświetlenia wpisów i odwiedziny strony, co pomaga zrozumieć ruch na blogu.

## URL

Blog zawsze działa pod `/blog/`.

Jeśli domena ImgBed wygląda tak:

```text
https://image.example.com
```

adres bloga to:

```text
https://image.example.com/blog/
```

Po wyłączeniu bloga odwiedzający nie mogą już otworzyć strony bloga.
