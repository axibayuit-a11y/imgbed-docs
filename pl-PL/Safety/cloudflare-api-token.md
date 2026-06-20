# Token API Cloudflare

Dane API Cloudflare pozwalają ImgBed czyścić cache CDN Cloudflare po zmianach plików.

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

Cloudflare może cache'ować publiczne URL-e obrazów.

Cache przyspiesza dostarczanie obrazów, ale może też sprawić, że stara treść będzie widoczna przez jakiś czas po usunięciu, zablokowaniu, zastąpieniu lub przeniesieniu pliku.

Po skonfigurowaniu danych API Cloudflare ImgBed próbuje wyczyścić powiązany cache Cloudflare po zakończeniu takich operacji.

Jest to przydatne, gdy:

- usuwasz obraz i chcesz, aby publiczny link przestał działać jak najszybciej.
- blokujesz obraz i chcesz, aby odwiedzający nie widzieli oryginalnego pliku.
- zastępujesz plik o tej samej nazwie i chcesz szybciej pokazać nową wersję.
- przenosisz lub zmieniasz nazwy plików i chcesz szybko odświeżyć cache starych ścieżek.
- zmieniasz reguły publicznego dostępu i chcesz szybciej odświeżyć publiczną galerię albo cache losowych obrazów.

## Co jeśli zostawisz puste

ImgBed działa normalnie bez tego ustawienia.

Jedyna różnica polega na tym, że ImgBed nie będzie aktywnie czyścił cache CDN Cloudflare. Odwiedzający mogą widzieć starą zawartość do momentu naturalnego wygaśnięcia cache Cloudflare.

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

Przyszłe zmiany plików będą automatycznie próbowały wyczyścić cache Cloudflare. Operacje wykonane wcześniej nie są czyszczone wstecznie. Jeśli usunięto lub zastąpiono plik przed konfiguracją, poczekaj na wygaśnięcie cache albo wyczyść go ręcznie w Cloudflare.

## FAQ

### Czy to jest wymagane?

Nie.

Jeśli domena nie używa Cloudflare albo opóźnienie cache CDN Ci nie przeszkadza, możesz zostawić to puste.

### Czy błędne dane zepsują upload?

Zwykle nie.

Błędne dane uniemożliwią tylko czyszczenie cache Cloudflare. Upload i zwykły dostęp do plików powinny nadal działać.

### Dlaczego usunięty obraz nadal się otwiera?

Najczęstsza przyczyna to stary plik nadal obecny w cache Cloudflare.

Przy poprawnych danych API Cloudflare ImgBed czyści cache powiązanego URL-a po usunięciu pliku.

### Dlaczego po zastąpieniu pliku nadal widzę stary obraz?

To również zwykle wynika z cache CDN.

Po skonfigurowaniu tego ustawienia ImgBed próbuje wyczyścić cache starego URL-a, gdy plik o tej samej nazwie zostanie nadpisany.
