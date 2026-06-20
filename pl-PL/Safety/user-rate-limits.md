# Limity uploadu dla użytkowników

Limity uploadu kontrolują, jak często zwykli użytkownicy lub odwiedzający mogą przesyłać pliki ze strony głównej. Pomaga to zapobiegać nadużyciom publicznych stron uploadu.

Ta funkcja dotyczy tylko uploadów ze strony głównej. Uploady administratora i uploady przez API Tokens nie są ograniczane tymi limitami.

## Gdzie skonfigurować

Otwórz panel administracyjny, a następnie przejdź do:

```text
System Settings -> Security Settings -> Upload Management -> User Rate Limits
```

![Ustawienia limitów użytkownika](../../image/other/用户频控截图.png)

## Włączanie limitów

Po włączeniu `Enable Rate Limits` ImgBed śledzi ostatnie uploady według adresu IP osoby przesyłającej.

Wartości domyślne:

| Ustawienie | Domyślnie | Opis |
| --- | --- | --- |
| Okno wykrywania | 1,5 godziny | Jak daleko wstecz liczone są rekordy uploadu. |
| Maksymalna liczba plików | 20 | Maksymalna liczba plików w oknie wykrywania. |
| Limit pojedynczego pliku | 20 MB | Maksymalny rozmiar jednego pliku. |
| Limit łącznego uploadu | 200 MB | Maksymalny łączny rozmiar uploadu w oknie wykrywania. |

Na przykład przy oknie 1,5 godziny, 20 plikach, 20 MB na plik i 200 MB łącznie, uploady z tego samego IP zostaną zablokowane po przekroczeniu dowolnego ustawionego limitu.

## Wykluczanie typów plików

`Excluded upload file types` blokuje zwykłym użytkownikom lub odwiedzającym przesyłanie wybranych kategorii plików.

Dostępne kategorie:

| Typ | Opis |
| --- | --- |
| Images | jpg, png, webp, gif i podobne pliki obrazów |
| Videos | mp4, webm, mov i podobne pliki wideo |
| Audio | mp3, flac, wav i podobne pliki audio |
| Documents | pdf, txt, md, docx i podobne dokumenty |
| Other | Pliki spoza powyższych kategorii, np. zip, rar, exe, apk |

Domyślnie typ niezaznaczony jest dozwolony.

Kliknięcie typu podświetla go, co oznacza blokadę tego typu.

Jeśli `Other` jest zaznaczone, odwiedzający przesyłający zip lub rar zostaną zablokowani i zobaczą informację, że ten typ pliku nie jest obsługiwany.

## Komunikaty blokady

Po uruchomieniu limitu użytkownik widzi odpowiedni komunikat:

![Komunikat zbyt częstego uploadu](../../image/other/频繁报错提示.png)

| Sytuacja | Znaczenie komunikatu |
| --- | --- |
| Pojedynczy plik za duży | Plik jest za duży i powinien zostać skompresowany przed uploadem. |
| Typ pliku zablokowany | Ten typ pliku nie jest obsługiwany. Usuń go i spróbuj ponownie. |
| Uploady zbyt częste | Ostatnie uploady są zbyt częste; pokazany jest czas ponownej próby. |
| Łączny rozmiar za duży | Ostatni łączny rozmiar uploadu jest za duży; pokazany jest czas ponownej próby. |

## Kiedy włączyć

Włącz limity użytkownika, jeśli strona uploadu jest publicznie dostępna.

Typowe powody:

- obawiasz się skryptowych uploadów masowych.
- chcesz ograniczyć duże uploady od odwiedzających.
- chcesz, aby zwykli użytkownicy przesyłali tylko obrazy, a nie archiwa lub instalatory.
- chcesz zachować publiczny upload, ale kontrolować zużycie zasobów.

Jeśli strona jest tylko dla Ciebie albo uploadować mogą tylko administratorzy, możesz zostawić tę funkcję wyłączoną.
