# Dodawanie kanału pCloud

## Najlepsze zastosowanie

- Masz konto pCloud i chcesz przechowywać obrazy ImgBed w pCloud.
- Akceptujesz użycie adresu e-mail i hasła konta pCloud jako danych kanału.

## Co przygotować przed rozpoczęciem

| Wymaganie | Dlaczego jest potrzebne |
| --- | --- |
| E-mail konta pCloud | Do logowania w API pCloud |
| Hasło pCloud | Do logowania w API pCloud |
| API host | Domyślnie `api.pcloud.com`. Konta europejskie mogą użyć `eapi.pcloud.com`. |
| Katalog przechowywania | Miejsce zapisu plików. Domyślnie `imgbed`. |

## Gdzie dodać kanał

1. Otwórz Ustawienia systemowe.
2. Otwórz Ustawienia przesyłania.
3. Kliknij `Dodaj kanał` w prawym górnym rogu.
4. Wybierz `pCloud`.

## Opis pól

| Pole | Cel | Wymagane |
| --- | --- | --- |
| Nazwa kanału | Identyfikuje kanał pCloud, np. `Personal pCloud` | Tak |
| E-mail konta | E-mail logowania do pCloud | Tak |
| Hasło | Hasło pCloud | Tak |
| API host | Host API pCloud. Domyślnie `api.pcloud.com`. | Nie |
| Katalog przechowywania | Katalog na pliki. Domyślnie `imgbed`. | Nie |

Wybierz API host według regionu konta:

| Region konta | API host |
| --- | --- |
| Domyślny / USA | `api.pcloud.com` |
| Europa | `eapi.pcloud.com` |

## Kroki konfiguracji

1. Otwórz Ustawienia przesyłania.
2. Kliknij `Dodaj kanał`.
3. Wybierz `pCloud`.
4. Wpisz rozpoznawalną nazwę kanału.
5. Wpisz e-mail konta pCloud.
6. Wpisz hasło pCloud.
7. Zostaw API host jako `api.pcloud.com` albo użyj `eapi.pcloud.com` dla kont europejskich.
8. Zostaw katalog przechowywania jako `imgbed` albo zmień na własny.
9. Zapisz kanał.

![Konfiguracja kanału](../../image/upload/pcloud/配置渠道.png)

## Jak sprawdzić

| Kontrola | Oczekiwany wynik |
| --- | --- |
| Karta kanału | Karta pCloud pojawia się po zapisaniu. |
| Przełącznik kanału | Przełącznik na karcie pozostaje włączony. |
| Wyświetlanie e-maila | Karta pokazuje podłączony e-mail pCloud. |
| Zapytanie o limit | Po udanym zapytaniu widać użyte i całkowite miejsce. |
| Upload testowy | Obraz testowy pojawia się w ustawionym katalogu pCloud. |

![Zapytanie o limit zakończone powodzeniem](../../image/upload/pcloud/查询额度成功.png)

## Rozwiązywanie problemów

### Dlaczego nie OAuth2?

pCloud OAuth2 domyślnie nie jest dostępny samoobsługowo. Trzeba napisać do pCloud i poprosić o włączenie.

Obecny przepływ pCloud OAuth2 nie obsługuje też krótkotrwałego linku uploadu, którego potrzebuje ImgBed. Dlatego ten kanał używa logowania e-mailem i hasłem.

### Jakiego API host użyć?

Domyślnie:

```text
api.pcloud.com
```

Dla kont europejskich:

```text
eapi.pcloud.com
```

## Szybki przebieg

```text
Przygotuj e-mail i hasło pCloud
-> Otwórz Ustawienia przesyłania
-> Dodaj kanał
-> Wybierz pCloud
-> Wpisz nazwę kanału / e-mail / hasło
-> Zostaw API host jako api.pcloud.com, chyba że konto jest w Europie
-> Zostaw katalog jako imgbed, chyba że potrzebujesz innego
-> Zapisz
-> Odpytaj limit
-> Prześlij obraz testowy
```
