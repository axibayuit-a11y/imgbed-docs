# Aggiungere un canale Yandex

## Prima di iniziare

| Requisito | A cosa serve |
| --- | --- |
| Account Yandex | Per accedere e autorizzare Yandex Disk |
| App OAuth Yandex | Per generare `Client ID` e `Client Secret` |
| Dominio ImgBed | Per l'URI di redirect OAuth |
| Spazio Yandex Disk disponibile | Archivio effettivo dei file |

## Configurazione

### Passaggio 1: crea un'app OAuth Yandex

1. Apri la pagina di creazione app OAuth Yandex:

```text
https://oauth.yandex.com/client/new
```

2. Se vieni reindirizzato al login, accedi prima con il tuo account Yandex.
3. Crea una nuova app.
4. Dai all'app un nome riconoscibile, per esempio `imgbed-yandex`.
5. Trova le impostazioni callback o redirect URL.
6. Inserisci:

```text
https://your-domain.com/api/oauth/yandex/callback
```

### Passaggio 2: conferma i permessi

Per l'attuale integrazione Yandex di ImgBed, mantieni questi quattro permessi sotto `Yandex.Disk REST API`:

| Permesso | Scopo |
| --- | --- |
| `cloud_api:disk.app_folder` | Permette a ImgBed di salvare file nella cartella dell'app |
| `cloud_api:disk.read` | Legge file e link di download |
| `cloud_api:disk.write` | Carica file, crea cartelle ed elimina file |
| `Access to information about Yandex.Disk` | Legge quota disco e spazio usato |

Se sotto `Yandex ID API` vedi anche questi permessi, sono opzionali:

| Testo permesso | Consiglio |
| --- | --- |
| `Access to username, first name and surname, gender` | Opzionale |
| `Access to email address` | Opzionale |

Upload, download, eliminazione e quote dipendono soprattutto dai quattro permessi `Yandex.Disk REST API` indicati sopra.

![Configura permessi Yandex Disk](../../image/upload/yandex/dataaccess配置软盘权限.png)

### Passaggio 3: copia le credenziali dell'app

Dopo aver creato l'app, copia:

| Campo Yandex | Campo ImgBed |
| --- | --- |
| `Client ID` | `Client ID` |
| `Client Secret` | `Client Secret` |

![Annota Client ID e Secret](../../image/upload/yandex/记录客户端id和secret.png)

### Passaggio 4: compila il canale Yandex

In Impostazioni di caricamento scegli `Yandex` e compila:

| Campo ImgBed | Cosa inserire |
| --- | --- |
| Nome canale | Un nome riconoscibile, per esempio `Main Yandex` |
| Client ID | `Client ID` dell'app Yandex |
| Client Secret | `Client Secret` dell'app Yandex |
| Refresh Token | Lascialo vuoto per ora |
| Directory radice | Opzionale. Default `imgbed`. |

![Modifica configurazione canale](../../image/upload/yandex/编辑配置渠道.png)

### Passaggio 5: ottieni il Refresh Token

1. In ImgBed clicca su `Get Token`.
2. Accedi con l'account Yandex da collegare.
3. Approva la richiesta di autorizzazione.
4. La pagina di callback mostrerà un `Refresh Token`.
5. Copialo.
6. Torna in ImgBed e incollalo nel campo `Refresh Token`.

![Copia Refresh Token dopo l'autorizzazione](../../image/upload/yandex/授权后复制刷新令牌.png)

### Passaggio 6: salva il canale

Quando tutti i campi sono compilati, salva il canale.

## Flusso rapido

```text
Apri Yandex OAuth Console
-> Crea un'app
-> Aggiungi https://your-domain.com/api/oauth/yandex/callback
-> Conferma i permessi Yandex Disk
-> Copia Client ID e Client Secret
-> Inserisci Client ID / Client Secret in ImgBed
-> Clicca Get Token
-> Copia il Refresh Token dalla pagina di callback
-> Incollalo in ImgBed e salva
```

## Riferimenti

1. Registrare un'app Yandex: https://yandex.com/dev/id/doc/en/register-client
2. Ottenere un authorization code via URL: https://yandex.com/dev/id/doc/en/codes/code-url
3. Endpoint token OAuth Yandex: https://yandex.com/dev/id/doc/en/tokens/token
