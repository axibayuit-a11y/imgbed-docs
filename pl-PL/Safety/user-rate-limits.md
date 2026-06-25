# Limity przesyłania dla użytkowników

Limity przesyłania kontrolują, jak często zwykli użytkownicy lub odwiedzający mogą przesyłać pliki ze strony głównej. Pomaga to zapobiegać nadużyciom publicznych stron przesyłania.

Ta funkcja dotyczy tylko przesyłania ze strony głównej. Przesyłanie przez administratorów i przesyłanie przez API Tokens nie są ograniczane tymi limitami.

## Gdzie skonfigurować

Otwórz panel administracyjny, a następnie przejdź do:

```text
System Settings -> Security Settings -> Upload Management -> User Rate Limits
```

![Ustawienia limitów użytkownika](../../image/other/用户频控截图.png)

## Włączanie limitów

Po włączeniu `Włącz limity częstotliwości` ImgBed śledzi ostatnie przesłania według adresu IP osoby przesyłającej.

Wartości domyślne:

| Ustawienie | Domyślnie | Opis |
| --- | --- | --- |
| Okno wykrywania | 1,5 godziny | Jak daleko wstecz liczone są rekordy przesyłania. |
| Maksymalna liczba plików | 20 | Maksymalna liczba plików w oknie wykrywania. |
| Limit pojedynczego pliku | 20 MB | Maksymalny rozmiar jednego pliku. |
| Limit łącznego przesyłania | 200 MB | Maksymalny łączny rozmiar przesyłania w oknie wykrywania. |

Na przykład przy oknie 1,5 godziny, 20 plikach, 20 MB na plik i 200 MB łącznie, przesłania z tego samego IP zostaną zablokowane po przekroczeniu dowolnego ustawionego limitu.

## Wykluczanie typów plików

`Wykluczone typy przesyłanych plików` blokuje zwykłym użytkownikom lub odwiedzającym przesyłanie wybranych kategorii plików.

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

![Komunikat zbyt częstego przesyłania](../../image/other/频繁报错提示.png)

| Sytuacja | Znaczenie komunikatu |
| --- | --- |
| Pojedynczy plik za duży | Plik jest za duży i powinien zostać skompresowany przed przesłaniem. |
| Typ pliku zablokowany | Ten typ pliku nie jest obsługiwany. Usuń go i spróbuj ponownie. |
| Przesłania zbyt częste | Ostatnie przesłania są zbyt częste; pokazany jest czas ponownej próby. |
| Łączny rozmiar za duży | Ostatni łączny rozmiar przesyłania jest za duży; pokazany jest czas ponownej próby. |

## Kiedy włączyć

Włącz limity użytkownika, jeśli strona przesyłania jest publicznie dostępna.

Typowe powody:

- obawiasz się skryptowego przesyłania masowego.
- chcesz ograniczyć duże przesłania od odwiedzających.
- chcesz, aby zwykli użytkownicy przesyłali tylko obrazy, a nie archiwa lub instalatory.
- chcesz zachować publiczne przesyłanie, ale kontrolować zużycie zasobów.

Jeśli strona jest tylko dla Ciebie albo przesyłać mogą tylko administratorzy, możesz zostawić tę funkcję wyłączoną.
