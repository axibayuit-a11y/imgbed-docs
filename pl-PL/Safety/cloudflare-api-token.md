# Token API Cloudflare

Dane API Cloudflare pozwalają ImgBed czyścić pamięć podręczną CDN Cloudflare po zmianach plików.

![Ustawienia tokenu API Cloudflare](../../image/Safety/cloudflare%20api%20token截图.png)

## Gdzie skonfigurować

Otwórz panel administracyjny, a następnie przejdź do:

```text
System Settings -> Security Settings -> Cloudflare API Token
```

Trzeba wypełnić:

- Zone ID
- E-mail konta
- API Key

## Co robi to ustawienie

Cloudflare może przechowywać publiczne adresy URL obrazów w pamięci podręcznej.

Pamięć podręczna przyspiesza dostarczanie obrazów, ale może też sprawić, że stara treść będzie widoczna przez jakiś czas po usunięciu, zablokowaniu, zastąpieniu lub przeniesieniu pliku.

Po skonfigurowaniu danych API Cloudflare ImgBed próbuje wyczyścić powiązaną pamięć podręczną Cloudflare po zakończeniu takich operacji.

Jest to przydatne, gdy:

- usuwasz obraz i chcesz, aby publiczny link przestał działać jak najszybciej.
- blokujesz obraz i chcesz, aby odwiedzający nie widzieli oryginalnego pliku.
- zastępujesz plik o tej samej nazwie i chcesz szybciej pokazać nową wersję.
- przenosisz lub zmieniasz nazwy plików i chcesz szybko odświeżyć pamięć podręczną starych ścieżek.
- zmieniasz reguły publicznego dostępu i chcesz szybciej odświeżyć publiczną galerię albo pamięć podręczną losowych obrazów.

## Co jeśli zostawisz puste

ImgBed działa normalnie bez tego ustawienia.

Jedyna różnica polega na tym, że ImgBed nie będzie aktywnie czyścił pamięci podręcznej CDN Cloudflare. Odwiedzający mogą widzieć starą zawartość do momentu naturalnego wygaśnięcia pamięci podręcznej Cloudflare.

## Jak znaleźć Zone ID

Zone ID to Cloudflare Zone ID strony używanej przez domenę ImgBed.

1. Zaloguj się do Cloudflare Dashboard.
2. Otwórz stronę, która zawiera domenę ImgBed.
3. Znajdź `Zone ID` na stronie przeglądu.
4. Skopiuj je do pola `Zone ID` w ImgBed.

To Zone ID strony, nie Account ID.

## E-mail konta

Wpisz adres e-mail używany do logowania w Cloudflare.

Musi odpowiadać API Key podanemu poniżej.

## API Key

Wpisz Cloudflare Global API Key.

1. Zaloguj się do Cloudflare Dashboard.
2. Otwórz swój profil.
3. Przejdź do strony API Tokens.
4. Znajdź `Global API Key`.
5. Wyświetl i skopiuj.
6. Wklej do pola `API Key` w ImgBed.

![Wyświetl globalny API key](../../image/Safety/查看全局令牌.png)

## Kiedy zaczyna działać

Po wypełnieniu pól zapisz ustawienia.

Przyszłe zmiany plików będą automatycznie próbowały wyczyścić pamięć podręczną Cloudflare. Operacje wykonane wcześniej nie są czyszczone wstecznie. Jeśli usunięto lub zastąpiono plik przed konfiguracją, poczekaj na wygaśnięcie pamięci podręcznej albo wyczyść ją ręcznie w Cloudflare.

## FAQ

### Czy to jest wymagane?

Nie.

Jeśli domena nie używa Cloudflare albo opóźnienie pamięci podręcznej CDN Ci nie przeszkadza, możesz zostawić to puste.

### Czy błędne dane zepsują przesyłanie?

Zwykle nie.

Błędne dane uniemożliwią tylko czyszczenie pamięci podręcznej Cloudflare. Przesyłanie i zwykły dostęp do plików powinny nadal działać.

### Dlaczego usunięty obraz nadal się otwiera?

Najczęstsza przyczyna to stary plik nadal obecny w pamięci podręcznej Cloudflare.

Przy poprawnych danych API Cloudflare ImgBed czyści pamięć podręczną powiązanego adresu URL po usunięciu pliku.

### Dlaczego po zastąpieniu pliku nadal widzę stary obraz?

To również zwykle wynika z pamięci podręcznej CDN.

Po skonfigurowaniu tego ustawienia ImgBed próbuje wyczyścić pamięć podręczną starego adresu URL, gdy plik o tej samej nazwie zostanie nadpisany.
