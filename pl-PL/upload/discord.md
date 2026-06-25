# Dodawanie kanału Discord

## Co przygotować przed rozpoczęciem

| Wymaganie | Cel |
| --- | --- |
| Konto Discord | Do utworzenia serwera, kanału i aplikacji deweloperskiej. |
| Serwer Discord | Bot musi dołączyć do serwera, zanim uzyska dostęp do kanału. |
| Kanał tekstowy | Obrazy i pliki będą wysyłane do tego kanału. |
| Discord Developer Portal | Do utworzenia aplikacji, bota i pobrania `Bot Token`. |

## Gdzie dodać kanał

1. Otwórz Ustawienia systemowe.
2. Przejdź do Ustawień przesyłania.
3. Kliknij Dodaj kanał w prawym górnym rogu.
4. Wybierz `Discord`.

## Opis pól

| Pole | Działanie | Wymagane |
| --- | --- | --- |
| Nazwa kanału | Czytelna nazwa, np. `Discord Primary`. | Tak |
| Bot Token | Token bota Discord. | Tak |
| Channel ID | ID docelowego kanału tekstowego. | Tak |
| Proxy URL (opcjonalnie) | Używaj tylko, gdy dostęp do Discord CDN jest niestabilny. Wpisz pełny URL z `https://`. | Nie |

## Kroki konfiguracji

### 1. Utwórz serwer Discord i kanał tekstowy

1. Otwórz Discord.
2. Utwórz nowy serwer albo użyj istniejącego serwera, którego jesteś właścicielem.
3. Utwórz kanał tekstowy na tym serwerze.

![Utwórz serwer](../../image/upload/discord/创建服务器.png)

### 2. Utwórz bota w Discord Developer Portal

1. Otwórz Discord Developer Portal: `https://discord.com/developers/applications`
2. Kliknij `New Application`.
3. Wpisz nazwę aplikacji i utwórz ją.
4. Otwórz stronę `Bot` z lewego panelu.
5. Wygeneruj lub zresetuj token na stronie `Bot`.
6. Zapisz token.

Ten token wpisujesz w ImgBed jako `Bot Token`.

![Zobacz token bota](../../image/upload/discord/查看机器人令牌.png)

### 3. Wygeneruj link OAuth2 i zainstaluj bota

1. Otwórz stronę `OAuth2` z lewego panelu.
2. W sekcji scopes wybierz `bot`.
3. W obszarze uprawnień włącz:

| Uprawnienie | Wymagane |
| --- | --- |
| View Channels | Tak |
| Send Messages | Tak |
| Attach Files | Tak |
| Read Message History | Tak |

4. Na dole strony potwierdź, że typ integracji to `Guild Install`.
5. Skopiuj wygenerowany URL.
6. Otwórz go w przeglądarce.
7. Wybierz serwer docelowy.
8. Dokończ autoryzację.

![Wybór uprawnień bota w OAuth2](../../image/upload/discord/在oa2勾选机器人权限.png)

![Zaproszenie bota do kanału](../../image/upload/discord/邀请机器人到频道.png)

### 4. Włącz tryb deweloperski i skopiuj Channel ID

1. Kliknij ikonę koła zębatego obok swojego avatara w lewym dolnym rogu.
2. Otwórz Advanced z lewego panelu.
3. Włącz Developer Mode.
4. Wróć do docelowego kanału tekstowego.
5. Kliknij prawym przyciskiem nazwę kanału.
6. Kliknij Copy Channel ID.

Skopiowany numer to `Channel ID` wymagany przez ImgBed.

![Włącz tryb deweloperski](../../image/upload/discord/开启开发者权限.png)

![Kopiowanie Channel ID](../../image/upload/discord/复制群频道id.png)

### 5. Wypełnij kanał Discord w ImgBed

Wróć do okna konfiguracji i wypełnij:

| Pole UI | Wartość |
| --- | --- |
| Nazwa kanału | Własna nazwa kanału, np. `DiscordPrimary`. |
| Bot Token | Token zapisany ze strony `Bot` w Discord Developer Portal. |
| Channel ID | Channel ID skopiowany z Discord. |
| Proxy URL (opcjonalnie) | Tylko gdy potrzeba, np. `https://your-proxy.example.com`. |

Po zakończeniu kliknij Zapisz.

![Dodanie konfiguracji Discord](../../image/upload/discord/添加dc新渠道配置.png)

## Jak sprawdzić

| Kontrola | Jak sprawdzić |
| --- | --- |
| Karta kanału jest widoczna | Po zapisaniu w Ustawieniach przesyłania powinna pojawić się karta Discord. |
| Kanał można włączyć | Przełącznik Aktywny pozostaje włączony. |
| Konfiguracja jest zapisana | Widok szczegółów pokazuje zapisany Bot Token i Channel ID. |
| Upload działa | Prześlij obraz testowy i sprawdź, czy pojawił się w docelowym kanale tekstowym Discord. |

## Szybka lista

```text
Create a Discord server
-> Create a text channel
-> Create a bot in the Discord Developer Portal
-> Save the Bot Token from the Bot page
-> In OAuth2, select bot, View Channels, Send Messages, Attach Files, and Read Message History
-> Copy the generated URL and authorize the bot for the target server
-> Make sure the target text channel grants the same permissions
-> Enable Developer Mode
-> Right-click the target text channel and copy the Channel ID
-> Enter the Bot Token and Channel ID in ImgBed
-> Save and upload a test image
```

## Referencje

1. Discord Developers Getting Started: https://docs.discord.com/developers/quick-start/getting-started
2. Discord Help - Where can I find my User/Server/Message ID: https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID
