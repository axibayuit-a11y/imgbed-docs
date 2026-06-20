# Dodawanie kanału Telegram

## Co przygotować przed rozpoczęciem

| Wymaganie | Cel |
| --- | --- |
| Konto Telegram | Do utworzenia bota i kanału przechowywania. |
| `@BotFather` | Do utworzenia bota Telegram. |
| Kanał Telegram | Docelowe miejsce przechowywania plików. |
| `@userinfobot` | Do sprawdzenia `Chat ID` kanału. |

## Gdzie dodać kanał

1. Otwórz Ustawienia systemowe.
2. Przejdź do Ustawień przesyłania.
3. Kliknij Dodaj kanał w prawym górnym rogu.
4. Wybierz `Telegram`.

## Opis pól

| Pole | Działanie | Wymagane |
| --- | --- | --- |
| Nazwa kanału | Czytelna nazwa, np. `Telegram Primary`. | Tak |
| Aktywny | Włącza lub wyłącza kanał. | Zalecane |
| Bot Token | Token bota Telegram. | Tak |
| Session ID (Chat ID) | ID kanału Telegram. | Tak |
| Relay Proxy URL (opcjonalnie) | Używaj tylko, gdy dostęp do Telegram jest niestabilny. Wpisz pełny URL proxy z `https://`. | Nie |
| Uwaga | Notatki do późniejszego utrzymania. | Nie |

## Kroki konfiguracji

### 1. Utwórz bota Telegram

1. Otwórz Telegram i wyszukaj `@BotFather`.
2. Otwórz czat i kliknij `Start`.
3. Wyślij `/newbot`.
4. Postępuj zgodnie z instrukcjami i wpisz nazwę wyświetlaną bota.
5. Następnie wpisz nazwę użytkownika bota. Zwykle musi kończyć się na `bot`.
6. Po utworzeniu `@BotFather` zwróci token bota.

Ten token wpisujesz w ImgBed jako `Bot Token`.

![Zapisz token bota](../../image/upload/telegram/保存机器人令牌.png)

### 2. Utwórz kanał

1. W Telegram kliknij Nowy kanał.
2. Wpisz nazwę kanału.
3. Dokończ tworzenie kanału.

Możesz użyć kanału publicznego lub prywatnego.

![Utwórz kanał](../../image/upload/telegram/新建频道.png)

### 3. Dodaj bota do kanału

1. Otwórz utworzony kanał.
2. Otwórz ustawienia kanału.
3. Dodaj członka lub administratora.
4. Wyszukaj nazwę użytkownika utworzonego bota.
5. Dodaj bota do kanału.

Dla najbardziej niezawodnych uploadów nadaj botowi uprawnienia administratora.

![Zaproś bota do kanału](../../image/upload/telegram/邀请机器人进频道里.png)

### 4. Pobierz Channel ID przez User Info - Get ID - IDbot

1. Wyszukaj w Telegram `@userinfobot`. Jego nazwa wyświetlana to zwykle `User Info - Get ID - IDbot`.
2. Otwórz czat i kliknij `Start`.
3. Wybierz `Channel` z opcji bota.
4. W selektorze wiadomości wybierz kanał docelowy i wyślij go do `@userinfobot`.
5. Gdy `@userinfobot` zwróci wynik, skopiuj numer przy `Id: -100...`.

Numer zaczynający się od `-100` to `Session ID (Chat ID)` wymagane przez ImgBed.

![Pobierz Channel ID](../../image/upload/telegram/获取频道id.png)

### 5. Wypełnij kanał Telegram w ImgBed

Wróć do okna konfiguracji i wypełnij:

| Pole UI | Wartość |
| --- | --- |
| Channel Identifier | Własna nazwa kanału, np. `TelegramPrimary`. |
| Aktywny | Zalecane. |
| Bot Token | Token od `@BotFather`. |
| Session ID (Chat ID) | Numer `-100...` zwrócony przez `@userinfobot`. |
| Relay Proxy URL (opcjonalnie) | Tylko gdy potrzeba, np. `https://your-tg-proxy.example.com`. |
| Uwaga | Opcjonalne notatki. |

Po zakończeniu kliknij Zapisz.

![Edycja konfiguracji](../../image/upload/telegram/编辑配置.png)

## Jak sprawdzić

| Kontrola | Jak sprawdzić |
| --- | --- |
| Karta kanału jest widoczna | Po zapisaniu w Ustawieniach przesyłania powinna pojawić się karta Telegram. |
| Kanał można włączyć | Przełącznik Aktywny pozostaje włączony. |
| Konfiguracja jest zapisana | Widok szczegółów pokazuje zapisany Bot Token i Chat ID. |
| Upload działa | Prześlij obraz testowy i sprawdź, czy pojawił się w docelowym kanale Telegram. |

## Szybka lista

```text
Utwórz bota przez @BotFather
-> Zapisz Bot Token
-> Utwórz kanał Telegram
-> Dodaj bota do kanału i nadaj uprawnienia administratora
-> Wyszukaj @userinfobot i wybierz Channel
-> Przekaż dowolną wiadomość z kanału do @userinfobot
-> Skopiuj zwrócone Id: -100...
-> Wpisz Bot Token i Chat ID w ImgBed
-> Zapisz i prześlij obraz testowy
```

## Referencje

1. Telegram bots: https://core.telegram.org/bots
2. Telegram Bot API: https://core.telegram.org/bots/api
