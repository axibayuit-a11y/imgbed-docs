# Autenticazione e gestione dei dispositivi di accesso

`Gestione autenticazione` e `Gestione dispositivi di accesso` proteggono il pannello di amministrazione di ImgBed, l'area pubblica di caricamento e l'accesso WebDAV.

Usa questa pagina per impostare le credenziali, controllare i dispositivi con sessione attiva e revocare vecchie sessioni quando serve.

## Dove configurare

Apri il pannello admin e vai a:

```text
System Settings -> Security Settings
```

La pagina contiene due aree principali:

- Gestione autenticazione
- Gestione dispositivi di accesso

![Gestione autenticazione](../../image/Safety/认证管理界面.png)

## A cosa serve la gestione autenticazione

La gestione autenticazione conserva le credenziali di accesso.

Ci sono due tipi di autenticazione:

- Autenticazione lato utente
- Autenticazione lato admin

## Autenticazione lato utente

L'autenticazione lato utente è la parola d\'ordine di caricamento.

Dopo aver impostato una parola d\'ordine di caricamento, i visitatori devono inserirla prima di usare la pagina di caricamento. È utile quando non vuoi lasciare il caricamento pubblico aperto a chiunque.

![Pagina login utente](../../image/Safety/用户端登录界面.png)

### Impostare la parola d\'ordine di caricamento

Quando la parola d\'ordine di caricamento è configurata:

- I visitatori devono inserirla prima di usare la pagina di caricamento.
- Il caricamento è disponibile solo dopo parola d\'ordine accettata.
- Se le sessioni dispositivo lato utente sono abilitate, ImgBed registra quel dispositivo.

Se cambi la parola d\'ordine di caricamento, le vecchie sessioni lato utente vengono invalidate. I visitatori dovranno inserire la nuova parola d\'ordine.

## Autenticazione lato admin

L'autenticazione admin usa nome utente e parola d\'ordine amministratore.

Protegge il pannello di amministrazione. In produzione è consigliato configurarla sempre.

![Pagina login admin](../../image/Safety/管理端登录界面.png)

### Impostare le credenziali admin

Quando nome utente e parola d\'ordine admin sono configurati:

- L'apertura del pannello di amministrazione richiede il login.
- Ogni login riuscito crea un record dispositivo admin.
- Puoi rivedere, pulire o forzare offline i dispositivi in Gestione dispositivi di accesso.

Se cambi nome utente o parola d\'ordine admin, le vecchie sessioni admin vengono invalidate. Dovrai accedere di nuovo.

## A cosa serve la gestione dispositivi di accesso

La gestione dispositivi di accesso mostra i dispositivi che hanno effettuato l'accesso.

Ti aiuta a controllare:

- quali dispositivi hanno aperto il pannello di amministrazione.
- quali dispositivi hanno usato la pagina di caricamento lato utente.
- quali client WebDAV si sono collegati.
- se una sessione dispositivo è ancora valida.
- se vecchi dispositivi devono essere forzati offline.

La pagina ha tre schede:

- Amministratore
- Utente
- WebDAV

## Sicurezza globale dei cookie

In alto nella gestione dispositivi di accesso puoi configurare il comportamento globale dei cookie.

### Durata cookie utente

Definisce per quanti giorni un login lato utente resta valido.

Per esempio, con 14 giorni, di solito i visitatori non devono reinserire la parola d\'ordine di caricamento per due settimane.

### Durata cookie admin

Definisce per quanti giorni un login admin resta valido.

Per esempio, con 14 giorni, gli amministratori di solito non devono riaccedere per due settimane.

### Modalità sicura

Con la modalità sicura attiva, il programma di navigazione invia i cookie di login solo su HTTPS.

Attivalo sui siti HTTPS in produzione. Non attivarlo nei test locali HTTP, altrimenti potresti vedere il comportamento "login riuscito, ma al refresh sono di nuovo disconnesso".

## Dispositivi login admin

La scheda Amministratore mostra i dispositivi che hanno eseguito l'accesso al pannello di amministrazione.

I record compaiono solo dopo aver configurato le credenziali admin e aver aperto il pannello tramite login.

Ogni scheda dispositivo può mostrare:

- informazioni su dispositivo e programma di navigazione
- IP del primo login
- IP dell'ultima attività
- ora di login
- ultima attività
- scadenza
- stato attuale

Se vedi un dispositivo sconosciuto, usa `Forza offline` per invalidarlo.

## Pulire vecchi dispositivi

`Pulisci vecchi dispositivi` rimuove in blocco i vecchi record di login nella scheda corrente.

Usalo quando sospetti che vecchie sessioni siano ancora attive su altri dispositivi.

## Forzare offline

`Forza offline` invalida una singola sessione dispositivo.

Dopo l'operazione:

- i dispositivi admin devono accedere di nuovo.
- i dispositivi lato utente devono reinserire la parola d\'ordine di caricamento.
- i client WebDAV devono autenticarsi di nuovo.

Anche i dispositivi scaduti o non validi possono essere rimossi.

## Uscire dal dispositivo corrente

La scheda del dispositivo corrente è marcata come `Dispositivo corrente`.

Dopo il logout del dispositivo corrente:

- la sessione admin corrente viene chiusa.
- la sessione lato utente corrente viene chiusa.

Devi accedere di nuovo prima di continuare a usare quell'area.

