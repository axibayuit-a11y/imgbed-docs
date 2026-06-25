# Aggiungere un canale Telegram

## Prima di iniziare

| Requisito | A cosa serve |
| --- | --- |
| Account Telegram | Per creare il bot e il canale di archiviazione. |
| `@BotFather` | Per creare un bot Telegram. |
| Canale Telegram | Destinazione finale dei file. |
| `@userinfobot` | Per recuperare il `Chat ID` del canale. |

## Dove aggiungerlo

1. Apri Impostazioni di sistema.
2. Vai a Impostazioni di caricamento.
3. Clicca su Aggiungi canale in alto a destra.
4. Seleziona `Telegram`.

## Riferimento campi

| Campo | Funzione | Obbligatorio |
| --- | --- | --- |
| Nome canale | Nome riconoscibile, per esempio `Telegram Primary`. | Sì |
| Attivo | Abilita o disabilita il canale. | Consigliato |
| Bot Token | Token del bot Telegram. | Sì |
| Session ID (Chat ID) | ID del canale Telegram. | Sì |
| Relay Proxy URL (opzionale) | Da usare solo se l'accesso a Telegram è instabile. Inserisci l'URL completo con `https://`. | No |
| Nota | Appunti per manutenzione futura. | No |

## Configurazione

### 1. Crea un bot Telegram

1. Apri Telegram e cerca `@BotFather`.
2. Apri la chat e clicca su `Start`.
3. Invia `/newbot`.
4. Segui le istruzioni e inserisci il nome visualizzato del bot.
5. Inserisci poi lo username del bot. Di solito deve terminare con `bot`.
6. Dopo la creazione, `@BotFather` restituisce un bot token.

Questo token è il `Bot Token` da inserire in ImgBed.

![Salva Bot Token](../../image/upload/telegram/保存机器人令牌.png)

### 2. Crea un canale

1. In Telegram clicca su Nuovo canale.
2. Inserisci il nome del canale.
3. Completa la creazione.

Puoi usare sia canali pubblici sia privati.

![Crea canale](../../image/upload/telegram/新建频道.png)

### 3. Aggiungi il bot al canale

1. Apri il canale appena creato.
2. Apri le impostazioni del canale.
3. Aggiungi un membro o un amministratore.
4. Cerca lo username del bot creato.
5. Aggiungi il bot al canale.

Per caricamenti più affidabili, concedi al bot permessi di amministratore.

![Invita il bot nel canale](../../image/upload/telegram/邀请机器人进频道里.png)

### 4. Recupera Channel ID con User Info - Get ID - IDbot

1. Cerca `@userinfobot` in Telegram. Il nome visualizzato di solito è `User Info - Get ID - IDbot`.
2. Apri la chat e clicca su `Start`.
3. Scegli `Channel` tra le opzioni del bot.
4. Nel selettore messaggi, scegli il canale di destinazione e invialo a `@userinfobot`.
5. Quando `@userinfobot` restituisce il risultato, copia il numero indicato come `Id: -100...`.

Il numero che inizia con `-100` è la `Session ID (Chat ID)` richiesta da ImgBed.

![Recupera Channel ID](../../image/upload/telegram/获取频道id.png)

### 5. Compila il canale Telegram in ImgBed

Torna alla finestra di configurazione e compila:

| Campo UI | Valore |
| --- | --- |
| Channel Identifier | Nome personalizzato, per esempio `TelegramPrimary`. |
| Attivo | Consigliato. |
| Bot Token | Il token ottenuto da `@BotFather`. |
| Session ID (Chat ID) | Il numero `-100...` restituito da `@userinfobot`. |
| Relay Proxy URL (opzionale) | Solo se serve, per esempio `https://your-tg-proxy.example.com`. |
| Nota | Note opzionali. |

Quando hai finito, salva.

![Modifica configurazione](../../image/upload/telegram/编辑配置.png)

## Verifica

| Controllo | Come verificare |
| --- | --- |
| Scheda canale | Dopo il salvataggio compare una scheda Telegram. |
| Canale abilitabile | L'interruttore Attivo resta acceso. |
| Configurazione salvata | La vista dettaglio mostra Bot Token e Chat ID salvati. |
| Caricamento funzionante | Carica un'immagine di prova e verifica che compaia nel canale Telegram di destinazione. |

## Checklist rapida

```text
Create a bot with @BotFather
-> Save the Bot Token
-> Create a Telegram channel
-> Add the bot to the channel and grant administrator permissions
-> Search for @userinfobot and choose Channel
-> Forward any message from the channel to @userinfobot
-> Copy the returned Id: -100...
-> Enter the Bot Token and Chat ID in ImgBed
-> Save and upload a test image
```

## Riferimenti

1. Telegram bots: https://core.telegram.org/bots
2. Telegram Bot API: https://core.telegram.org/bots/api
