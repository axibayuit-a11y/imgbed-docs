# Een Discord-kanaal toevoegen

## Wat je vooraf nodig hebt

| Vereiste | Doel |
| --- | --- |
| Discord-account | Voor het maken van server, kanaal en ontwikkelaarsapp. |
| Discord-server | De bot moet in een server zitten voordat hij een kanaal kan gebruiken. |
| Tekstkanaal | Afbeeldingen en bestanden worden naar dit kanaal gestuurd. |
| Discord Developer Portal | Voor het maken van een app, een bot en het ophalen van het `Bot Token`. |

## Waar je het toevoegt

1. Open Systeeminstellingen.
2. Ga naar Uploadinstellingen.
3. Klik rechtsboven op Kanaal toevoegen.
4. Selecteer `Discord`.

## Veldreferentie

| Veld | Functie | Verplicht |
| --- | --- | --- |
| Kanaalnaam | Een herkenbare naam, bijvoorbeeld `Discord Primary`. | Ja |
| Bot Token | Het token van de Discord-bot. | Ja |
| Channel ID | De ID van het doeltekstkanaal. | Ja |
| Proxy URL (optioneel) | Alleen gebruiken als toegang tot de Discord CDN instabiel is. Vul de volledige URL in, inclusief `https://`. | Nee |

## Instelstappen

### 1. Maak een Discord-server en tekstkanaal

1. Open Discord.
2. Maak een nieuwe server of gebruik een bestaande server waarvan je eigenaar bent.
3. Maak in die server een tekstkanaal.

![Server maken](../../image/upload/discord/创建服务器.png)

### 2. Maak een bot in Discord Developer Portal

1. Open Discord Developer Portal: `https://discord.com/developers/applications`
2. Klik op `New Application`.
3. Vul een appnaam in en maak de app aan.
4. Open links de pagina `Bot`.
5. Genereer of reset het token op de `Bot`-pagina.
6. Bewaar het token.

Dit token vul je in ImgBed in als `Bot Token`.

![Bot token bekijken](../../image/upload/discord/查看机器人令牌.png)

### 3. Maak een OAuth2-uitnodigingslink en installeer de bot

1. Open links de pagina `OAuth2`.
2. Selecteer onder scopes `bot`.
3. Schakel in het permissiegedeelte deze rechten in:

| Recht | Verplicht |
| --- | --- |
| View Channels | Ja |
| Send Messages | Ja |
| Attach Files | Ja |
| Read Message History | Ja |

4. Controleer onderaan de pagina dat het integratietype `Guild Install` is.
5. Kopieer de gegenereerde URL.
6. Open die URL in je browser.
7. Selecteer de doelserver.
8. Rond de autorisatie af.

![Botrechten kiezen in OAuth2](../../image/upload/discord/在oa2勾选机器人权限.png)

![Bot uitnodigen naar het kanaal](../../image/upload/discord/邀请机器人到频道.png)

### 4. Schakel ontwikkelaarsmodus in en kopieer de Channel ID

1. Klik linksonder naast je avatar op het tandwiel.
2. Open Advanced in de zijbalk.
3. Schakel Developer Mode in.
4. Ga terug naar het doeltekstkanaal.
5. Klik met de rechtermuisknop op de kanaalnaam.
6. Klik op Copy Channel ID.

Het gekopieerde nummer is de `Channel ID` die ImgBed nodig heeft.

![Ontwikkelaarsmodus inschakelen](../../image/upload/discord/开启开发者权限.png)

![Channel ID kopiëren](../../image/upload/discord/复制群频道id.png)

### 5. Vul het Discord-kanaal in ImgBed in

Ga terug naar het configuratievenster en vul in:

| UI-veld | Waarde |
| --- | --- |
| Kanaalnaam | Een eigen kanaalnaam, bijvoorbeeld `DiscordPrimary`. |
| Bot Token | Het token van de `Bot`-pagina in Discord Developer Portal. |
| Channel ID | De Channel ID die je uit Discord hebt gekopieerd. |
| Proxy URL (optioneel) | Alleen indien nodig, bijvoorbeeld `https://your-proxy.example.com`. |

Klik op Opslaan wanneer je klaar bent.

![Discord-kanaalconfiguratie toevoegen](../../image/upload/discord/添加dc新渠道配置.png)

## Controleren

| Controle | Hoe je controleert |
| --- | --- |
| Kanaalkaart verschijnt | Na opslaan moet in Uploadinstellingen een Discord-kanaalkaart zichtbaar zijn. |
| Kanaal kan aan | De Actief-schakelaar blijft ingeschakeld. |
| Configuratie is opgeslagen | De detailweergave toont dat Bot Token en Channel ID zijn opgeslagen. |
| Upload werkt | Upload een testafbeelding en controleer of die in het doeltekstkanaal van Discord verschijnt. |

## Snelle checklist

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

## Referenties

1. Discord Developers Getting Started: https://docs.discord.com/developers/quick-start/getting-started
2. Discord Help - Where can I find my User/Server/Message ID: https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID
