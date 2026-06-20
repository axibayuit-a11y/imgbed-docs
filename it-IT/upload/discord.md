# Aggiungere un canale Discord

## Prima di iniziare

| Requisito | A cosa serve |
| --- | --- |
| Account Discord | Per creare server, canale e applicazione sviluppatore. |
| Server Discord | Il bot deve entrare in un server prima di accedere a un canale. |
| Canale testuale | Immagini e file verranno inviati qui. |
| Discord Developer Portal | Per creare applicazione, bot e ottenere il `Bot Token`. |

## Dove aggiungerlo

1. Apri Impostazioni di sistema.
2. Vai a Impostazioni di caricamento.
3. Clicca su Aggiungi canale in alto a destra.
4. Seleziona `Discord`.

## Riferimento campi

| Campo | Funzione | Obbligatorio |
| --- | --- | --- |
| Nome canale | Nome riconoscibile, per esempio `Discord Primary`. | Sì |
| Bot Token | Token del bot Discord. | Sì |
| Channel ID | ID del canale testuale di destinazione. | Sì |
| Proxy URL (opzionale) | Usalo solo se l'accesso al CDN Discord è instabile. Inserisci l'URL completo con `https://`. | No |

## Configurazione

### 1. Crea server e canale testuale

1. Apri Discord.
2. Crea un nuovo server o usa un server esistente di tua proprietà.
3. Crea un canale testuale nel server.

![Crea server](../../image/upload/discord/创建服务器.png)

### 2. Crea un bot nel Discord Developer Portal

1. Apri Discord Developer Portal: `https://discord.com/developers/applications`
2. Clicca su `New Application`.
3. Inserisci il nome dell'applicazione e creala.
4. Apri la pagina `Bot` dalla barra laterale.
5. Genera o resetta il token nella pagina `Bot`.
6. Salva il token.

Questo token è il `Bot Token` da inserire in ImgBed.

![Visualizza Bot Token](../../image/upload/discord/查看机器人令牌.png)

### 3. Genera un link OAuth2 e installa il bot

1. Apri `OAuth2` dalla barra laterale.
2. Sotto scopes seleziona `bot`.
3. Nell'area permessi abilita:

| Permesso | Obbligatorio |
| --- | --- |
| View Channels | Sì |
| Send Messages | Sì |
| Attach Files | Sì |
| Read Message History | Sì |

4. In fondo alla pagina controlla che il tipo di integrazione sia `Guild Install`.
5. Copia l'URL generato.
6. Aprilo nel browser.
7. Seleziona il server di destinazione.
8. Completa l'autorizzazione.

![Seleziona permessi bot in OAuth2](../../image/upload/discord/在oa2勾选机器人权限.png)

![Invita il bot nel canale](../../image/upload/discord/邀请机器人到频道.png)

### 4. Abilita modalità sviluppatore e copia Channel ID

1. Clicca sull'icona ingranaggio accanto al tuo avatar in basso a sinistra.
2. Apri Advanced dalla barra laterale.
3. Abilita Developer Mode.
4. Torna al canale testuale di destinazione.
5. Clicca con il tasto destro sul nome del canale.
6. Clicca su Copy Channel ID.

Il numero copiato è il `Channel ID` richiesto da ImgBed.

![Abilita modalità sviluppatore](../../image/upload/discord/开启开发者权限.png)

![Copia Channel ID](../../image/upload/discord/复制群频道id.png)

### 5. Compila il canale Discord in ImgBed

Torna alla finestra di configurazione e compila:

| Campo UI | Valore |
| --- | --- |
| Nome canale | Nome personalizzato, per esempio `DiscordPrimary`. |
| Bot Token | Token salvato dalla pagina `Bot` del Discord Developer Portal. |
| Channel ID | Channel ID copiato da Discord. |
| Proxy URL (opzionale) | Solo se serve, per esempio `https://your-proxy.example.com`. |

Quando hai finito, salva.

![Aggiungi configurazione Discord](../../image/upload/discord/添加dc新渠道配置.png)

## Verifica

| Controllo | Come verificare |
| --- | --- |
| Scheda canale | Dopo il salvataggio compare una scheda Discord. |
| Canale abilitabile | L'interruttore Attivo resta acceso. |
| Configurazione salvata | La vista dettaglio mostra Bot Token e Channel ID salvati. |
| Upload funzionante | Carica un'immagine di prova e verifica che compaia nel canale testuale Discord. |

## Checklist rapida

```text
Crea un server Discord
-> Crea un canale testuale
-> Crea un bot nel Discord Developer Portal
-> Salva il Bot Token dalla pagina Bot
-> In OAuth2 seleziona bot, View Channels, Send Messages, Attach Files e Read Message History
-> Copia l'URL generato e autorizza il bot nel server di destinazione
-> Verifica che il canale testuale conceda gli stessi permessi
-> Abilita Developer Mode
-> Clicca destro sul canale testuale e copia Channel ID
-> Inserisci Bot Token e Channel ID in ImgBed
-> Salva e carica un'immagine di prova
```

## Riferimenti

1. Discord Developers Getting Started: https://docs.discord.com/developers/quick-start/getting-started
2. Discord Help - Where can I find my User/Server/Message ID: https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID
