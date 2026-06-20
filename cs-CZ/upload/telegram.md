# Přidání kanálu Telegram

## Co potřebujete před začátkem

| Požadavek | Účel |
| --- | --- |
| Účet Telegram | Pro vytvoření bota a úložného kanálu. |
| `@BotFather` | Pro vytvoření Telegram bota. |
| Telegram kanál | Cílové místo pro ukládání souborů. |
| `@userinfobot` | Pro zjištění `Chat ID` kanálu. |

## Kde ho přidat

1. Otevřete Nastavení systému.
2. Přejděte do Nastavení nahrávání.
3. Klikněte vpravo nahoře na Přidat kanál.
4. Vyberte `Telegram`.

## Přehled polí

| Pole | Co dělá | Povinné |
| --- | --- | --- |
| Název kanálu | Srozumitelný název, například `Telegram Primary`. | Ano |
| Aktivní | Zapíná nebo vypíná kanál. | Doporučeno |
| Bot Token | Token vašeho Telegram bota. | Ano |
| Session ID (Chat ID) | ID Telegram kanálu. | Ano |
| Relay Proxy URL (volitelné) | Použijte jen při nestabilním přístupu k Telegramu. Zadejte celý proxy URL včetně `https://`. | Ne |
| Poznámka | Poznámky pro pozdější údržbu. | Ne |

## Postup nastavení

### 1. Vytvořte Telegram bota

1. Otevřete Telegram a vyhledejte `@BotFather`.
2. Otevřete chat a klikněte na `Start`.
3. Pošlete `/newbot`.
4. Podle pokynů zadejte zobrazovaný název bota.
5. Potom zadejte uživatelské jméno bota. Obvykle musí končit na `bot`.
6. Po vytvoření `@BotFather` vrátí token bota.

Tento token zadáte v ImgBed jako `Bot Token`.

![Uložení tokenu bota](../../image/upload/telegram/保存机器人令牌.png)

### 2. Vytvořte kanál

1. V Telegramu klikněte na Nový kanál.
2. Zadejte název kanálu.
3. Dokončete vytvoření kanálu.

Lze použít veřejné i soukromé kanály.

![Vytvoření kanálu](../../image/upload/telegram/新建频道.png)

### 3. Přidejte bota do kanálu

1. Otevřete právě vytvořený kanál.
2. Otevřete nastavení kanálu.
3. Přidejte člena nebo správce.
4. Vyhledejte uživatelské jméno vytvořeného bota.
5. Přidejte bota do kanálu.

Pro nejspolehlivější uploady dejte botovi oprávnění správce.

![Pozvání bota do kanálu](../../image/upload/telegram/邀请机器人进频道里.png)

### 4. Získejte Channel ID přes User Info - Get ID - IDbot

1. V Telegramu vyhledejte `@userinfobot`. Zobrazovaný název bývá `User Info - Get ID - IDbot`.
2. Otevřete chat a klikněte na `Start`.
3. V možnostech bota vyberte `Channel`.
4. Ve výběru zprávy zvolte cílový kanál a pošlete ho na `@userinfobot`.
5. Až `@userinfobot` vrátí výsledek, zkopírujte číslo u `Id: -100...`.

Číslo začínající `-100` je `Session ID (Chat ID)`, které ImgBed potřebuje.

![Získání Channel ID](../../image/upload/telegram/获取频道id.png)

### 5. Vyplňte Telegram kanál v ImgBed

Vraťte se do konfiguračního dialogu a vyplňte:

| Pole UI | Hodnota |
| --- | --- |
| Channel Identifier | Vlastní název kanálu, například `TelegramPrimary`. |
| Aktivní | Doporučeno. |
| Bot Token | Token od `@BotFather`. |
| Session ID (Chat ID) | Číslo `-100...` vrácené `@userinfobot`. |
| Relay Proxy URL (volitelné) | Jen pokud je potřeba, například `https://your-tg-proxy.example.com`. |
| Poznámka | Volitelné poznámky. |

Po dokončení klikněte na Uložit.

![Úprava konfigurace](../../image/upload/telegram/编辑配置.png)

## Ověření

| Kontrola | Jak ověřit |
| --- | --- |
| Karta kanálu se zobrazuje | Po uložení by se v Nastavení nahrávání měla zobrazit karta Telegram. |
| Kanál lze zapnout | Přepínač Aktivní zůstane zapnutý. |
| Konfigurace je uložena | Detail ukazuje uložený Bot Token a Chat ID. |
| Upload funguje | Nahrajte testovací obrázek a ověřte, že se objevil v cílovém kanálu Telegram. |

## Rychlý checklist

```text
Vytvořte bota pomocí @BotFather
-> Uložte Bot Token
-> Vytvořte Telegram kanál
-> Přidejte bota do kanálu a dejte mu oprávnění správce
-> Vyhledejte @userinfobot a zvolte Channel
-> Přepošlete libovolnou zprávu z kanálu do @userinfobot
-> Zkopírujte vrácené Id: -100...
-> Zadejte Bot Token a Chat ID do ImgBed
-> Uložte a nahrajte testovací obrázek
```

## Reference

1. Telegram bots: https://core.telegram.org/bots
2. Telegram Bot API: https://core.telegram.org/bots/api
