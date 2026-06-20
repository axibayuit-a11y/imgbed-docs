# Přidání kanálu Discord

## Co potřebujete před začátkem

| Požadavek | Účel |
| --- | --- |
| Účet Discord | Pro vytvoření serveru, kanálu a vývojářské aplikace. |
| Discord server | Bot musí být na serveru, než může přistupovat ke kanálu. |
| Textový kanál | Obrázky a soubory se budou posílat do tohoto kanálu. |
| Discord Developer Portal | Pro vytvoření aplikace, bota a získání `Bot Token`. |

## Kde ho přidat

1. Otevřete Nastavení systému.
2. Přejděte do Nastavení nahrávání.
3. Klikněte vpravo nahoře na Přidat kanál.
4. Vyberte `Discord`.

## Přehled polí

| Pole | Co dělá | Povinné |
| --- | --- | --- |
| Název kanálu | Srozumitelný název, například `Discord Primary`. | Ano |
| Bot Token | Token Discord bota. | Ano |
| Channel ID | ID cílového textového kanálu. | Ano |
| Proxy URL (volitelné) | Použijte jen při nestabilním přístupu k Discord CDN. Zadejte celý URL včetně `https://`. | Ne |

## Postup nastavení

### 1. Vytvořte Discord server a textový kanál

1. Otevřete Discord.
2. Vytvořte nový server nebo použijte existující server, který vlastníte.
3. Na serveru vytvořte textový kanál.

![Vytvoření serveru](../../image/upload/discord/创建服务器.png)

### 2. Vytvořte bota v Discord Developer Portal

1. Otevřete Discord Developer Portal: `https://discord.com/developers/applications`
2. Klikněte na `New Application`.
3. Zadejte název aplikace a vytvořte ji.
4. V levém panelu otevřete stránku `Bot`.
5. Na stránce `Bot` vygenerujte nebo resetujte token.
6. Token uložte.

Tento token zadáte v ImgBed jako `Bot Token`.

![Zobrazení tokenu bota](../../image/upload/discord/查看机器人令牌.png)

### 3. Vygenerujte OAuth2 pozvánku a nainstalujte bota

1. V levém panelu otevřete stránku `OAuth2`.
2. V scopes vyberte `bot`.
3. V části oprávnění zapněte:

| Oprávnění | Povinné |
| --- | --- |
| View Channels | Ano |
| Send Messages | Ano |
| Attach Files | Ano |
| Read Message History | Ano |

4. Dole na stránce potvrďte, že typ integrace je `Guild Install`.
5. Zkopírujte vygenerovaný URL.
6. Otevřete ho v prohlížeči.
7. Vyberte cílový server.
8. Dokončete autorizaci.

![Výběr oprávnění bota v OAuth2](../../image/upload/discord/在oa2勾选机器人权限.png)

![Pozvání bota do kanálu](../../image/upload/discord/邀请机器人到频道.png)

### 4. Zapněte vývojářský režim a zkopírujte Channel ID

1. Klikněte na ozubené kolo vedle avatara vlevo dole.
2. V levém panelu otevřete Advanced.
3. Zapněte Developer Mode.
4. Vraťte se do cílového textového kanálu.
5. Klikněte pravým tlačítkem na název kanálu.
6. Klikněte na Copy Channel ID.

Zkopírované číslo je `Channel ID` požadované ImgBed.

![Zapnutí vývojářského režimu](../../image/upload/discord/开启开发者权限.png)

![Kopírování Channel ID](../../image/upload/discord/复制群频道id.png)

### 5. Vyplňte Discord kanál v ImgBed

Vraťte se do konfiguračního dialogu a vyplňte:

| Pole UI | Hodnota |
| --- | --- |
| Název kanálu | Vlastní název, například `DiscordPrimary`. |
| Bot Token | Token ze stránky `Bot` v Discord Developer Portal. |
| Channel ID | Channel ID zkopírované z Discordu. |
| Proxy URL (volitelné) | Jen pokud je potřeba, například `https://your-proxy.example.com`. |

Po dokončení klikněte na Uložit.

![Přidání konfigurace Discord](../../image/upload/discord/添加dc新渠道配置.png)

## Ověření

| Kontrola | Jak ověřit |
| --- | --- |
| Karta kanálu se zobrazuje | Po uložení by se v Nastavení nahrávání měla zobrazit karta Discord. |
| Kanál lze zapnout | Přepínač Aktivní zůstane zapnutý. |
| Konfigurace je uložena | Detail ukazuje uložený Bot Token a Channel ID. |
| Upload funguje | Nahrajte testovací obrázek a ověřte, že se objevil v cílovém textovém kanálu Discord. |

## Rychlý checklist

```text
Vytvořte Discord server
-> Vytvořte textový kanál
-> Vytvořte bota v Discord Developer Portal
-> Uložte Bot Token ze stránky Bot
-> V OAuth2 vyberte bot, View Channels, Send Messages, Attach Files a Read Message History
-> Zkopírujte vygenerovaný URL a autorizujte bota na cílovém serveru
-> Ověřte, že cílový textový kanál povoluje stejná oprávnění
-> Zapněte Developer Mode
-> Klikněte pravým tlačítkem na cílový textový kanál a zkopírujte Channel ID
-> Zadejte Bot Token a Channel ID do ImgBed
-> Uložte a nahrajte testovací obrázek
```

## Reference

1. Discord Developers Getting Started: https://docs.discord.com/developers/quick-start/getting-started
2. Discord Help - Where can I find my User/Server/Message ID: https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID
