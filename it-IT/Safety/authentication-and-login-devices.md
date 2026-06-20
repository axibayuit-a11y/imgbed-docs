# Autenticazione e gestione dei dispositivi di accesso

`Authentication Management` e `Login Device Management` proteggono il pannello admin di ImgBed, l'area pubblica di upload e l'accesso WebDAV.

Usa questa pagina per impostare le credenziali, controllare i dispositivi con sessione attiva e revocare vecchi accessi quando serve.

## Dove configurare

Apri il pannello admin e vai a:

```text
System Settings -> Security Settings
```

La pagina contiene due aree principali:

- Authentication Management
- Login Device Management

![Gestione autenticazione](../../image/Safety/认证管理界面.png)

## A cosa serve Authentication Management

Authentication Management conserva le credenziali di accesso.

Ci sono due tipi di autenticazione:

- Autenticazione lato utente
- Autenticazione lato admin

## Autenticazione lato utente

L'autenticazione lato utente è la password di upload.

Dopo aver impostato una password di upload, i visitatori devono inserirla prima di usare la pagina di caricamento. È utile quando non vuoi lasciare l'upload pubblico aperto a chiunque.

![Pagina login utente](../../image/Safety/用户端登录界面.png)

### Impostare la password di upload

Quando la password di upload è configurata:

- I visitatori devono inserirla prima di usare la pagina di upload.
- Il caricamento è disponibile solo dopo password accettata.
- Se le sessioni dispositivo lato utente sono abilitate, ImgBed registra quel dispositivo.

Se cambi la password di upload, le vecchie sessioni lato utente vengono invalidate. I visitatori dovranno inserire la nuova password.

## Autenticazione lato admin

L'autenticazione admin usa nome utente e password amministratore.

Protegge il pannello admin. In produzione è consigliato configurarla sempre.

![Pagina login admin](../../image/Safety/管理端登录界面.png)

### Impostare le credenziali admin

Quando nome utente e password admin sono configurati:

- L'apertura del pannello admin richiede il login.
- Ogni login riuscito crea un record dispositivo admin.
- Puoi rivedere, pulire o forzare offline i dispositivi in Login Device Management.

Se cambi nome utente o password admin, le vecchie sessioni admin vengono invalidate. Dovrai accedere di nuovo.

## A cosa serve Login Device Management

Login Device Management mostra i dispositivi che hanno effettuato l'accesso.

Ti aiuta a controllare:

- quali dispositivi hanno aperto il pannello admin.
- quali dispositivi hanno usato la pagina upload lato utente.
- quali client WebDAV si sono collegati.
- se una sessione dispositivo è ancora valida.
- se vecchi dispositivi devono essere forzati offline.

La pagina ha tre schede:

- Admin
- User
- WebDAV

## Sicurezza globale dei cookie

In alto in Login Device Management puoi configurare il comportamento globale dei cookie.

### Durata cookie utente

Definisce per quanti giorni un login lato utente resta valido.

Per esempio, con 14 giorni, di solito i visitatori non devono reinserire la password di upload per due settimane.

### Durata cookie admin

Definisce per quanti giorni un login admin resta valido.

Per esempio, con 14 giorni, gli amministratori di solito non devono riaccedere per due settimane.

### Modalità sicura

Con Secure mode attivo, il browser invia i cookie di login solo su HTTPS.

Attivalo sui siti HTTPS in produzione. Non attivarlo nei test locali HTTP, altrimenti potresti vedere il comportamento "login riuscito, ma al refresh sono di nuovo disconnesso".

## Dispositivi login admin

La scheda Admin mostra i dispositivi che hanno eseguito l'accesso al pannello admin.

I record compaiono solo dopo aver configurato le credenziali admin e aver aperto il pannello tramite login.

Ogni scheda dispositivo può mostrare:

- informazioni su dispositivo e browser
- IP del primo login
- IP dell'ultima attività
- ora di login
- ultima attività
- scadenza
- stato attuale

Se vedi un dispositivo sconosciuto, usa `Force Offline` per invalidarlo.

## Pulire vecchi dispositivi

`Clean Up Old Devices` rimuove in blocco i vecchi record di login nella scheda corrente.

Usalo quando sospetti che vecchie sessioni siano ancora attive su altri dispositivi.

## Forzare offline

`Force Offline` invalida una singola sessione dispositivo.

Dopo l'operazione:

- i dispositivi admin devono accedere di nuovo.
- i dispositivi lato utente devono reinserire la password di upload.
- i client WebDAV devono autenticarsi di nuovo.

Anche i dispositivi scaduti o non validi possono essere rimossi.

## Uscire dal dispositivo corrente

La scheda del dispositivo corrente è marcata come `Current Device`.

Dopo il logout del dispositivo corrente:

- la sessione admin corrente viene chiusa.
- la sessione lato utente corrente viene chiusa.

Devi accedere di nuovo prima di continuare a usare quell'area.
