# Aggiungere un canale WebDAV

## Quando usarlo

Usa il canale WebDAV quando:

- hai un NAS, un cloud drive o un servizio storage con endpoint WebDAV.
- vuoi salvare le immagini caricate in una tua cartella WebDAV.
- vuoi che le credenziali restino nella tabella D1 `upload_channels`, senza esporle a lungo nel frontend.

## Prima di iniziare

| Requisito | A cosa serve |
| --- | --- |
| WebDAV Endpoint | URL WebDAV lato server, per esempio `https://nas.example.com/dav`. |
| Nome utente | Per accedere al servizio WebDAV. |
| Password | Per accedere al servizio WebDAV. |
| Modalità di autenticazione | Di default `Basic`. Usa `Digest` o negoziazione automatica solo se richiesto dal server. |
| Cartella di archiviazione | Cartella usata per salvare i file. Default `imgbed`. |

## Dove aggiungerlo

1. Apri Impostazioni di sistema.
2. Vai a Impostazioni di caricamento.
3. Clicca su Aggiungi canale in alto a destra.
4. Seleziona `WebDAV`.

## Riferimento campi

| Campo | Funzione | Obbligatorio |
| --- | --- | --- |
| Nome canale | Nome riconoscibile, per esempio `koofr` o `nas`. | Sì |
| Endpoint | Endpoint WebDAV completo, incluso `https://`. | Sì |
| Nome utente | Utente di accesso WebDAV. | Sì |
| Password | Password WebDAV. | Sì |
| Modalità di autenticazione | Di solito `Basic`; usa `Digest` se il server richiede digest authentication. | Sì |
| Cartella di archiviazione | Cartella dove salvare i file. Default `imgbed`. | No |

## Esempio: fie.nl.tab.digital

### 1. Crea una password per app

Apri le impostazioni di sicurezza dell'account, trova le password applicative e crea una nuova password.

![Crea password app](../../image/upload/webdav/创建应用密码.png)

Dopo la creazione, copiala e salvala subito. Di norma viene mostrata una sola volta.

![Salva la nuova password app](../../image/upload/webdav/记住新应用程序密码.png)

### 2. Compila WebDAV in ImgBed

Torna in ImgBed e aggiungi un canale WebDAV:

| Campo UI | Valore |
| --- | --- |
| Endpoint | URL WebDAV fornito da `https://fie.nl.tab.digital/`. |
| Nome utente | Il tuo nome utente WebDAV. |
| Password | La password app appena creata. |
| Modalità di autenticazione | Inizia con `Basic` nella maggior parte dei casi. |
| Cartella di archiviazione | Default `imgbed`; puoi usare anche una cartella personalizzata. |

![Compila configurazione](../../image/upload/webdav/填写配置.png)

## File grandi e upload a chunk

Il canale WebDAV usa un vero upload a chunk basato su sessione.

I file piccoli vengono caricati come un unico file completo. I file oltre 64 MiB vengono divisi automaticamente in parti da circa 10 MiB e caricati in una cartella remota dedicata ai chunk.

Il servizio WebDAV non deve supportare `partial update` né scritture basate su offset. ImgBed non unisce i chunk in un unico file remoto: salva un manifest e, quando il file viene richiesto, legge i chunk in ordine.

In pratica:

| Dimensione file | Metodo di upload | Struttura remota |
| --- | --- | --- |
| 64 MiB o meno | Upload normale | Un file completo |
| Oltre 64 MiB | Upload a chunk basato su sessione | Cartella con più file chunk |

La cartella dei chunk riguarda solo il layout sullo storage remoto. L'URL in ImgBed non cambia: gli utenti continuano ad aprire il file tramite il link originale `/file/...`.

## Passaggi di configurazione

1. Apri Impostazioni di caricamento.
2. Clicca su Aggiungi canale.
3. Seleziona `WebDAV`.
4. Inserisci un nome canale chiaro, per esempio `koofr`.
5. Inserisci l'endpoint WebDAV, per esempio `https://app.koofr.net/dav/Koofr`.
6. Inserisci nome utente e password.
7. Lascia la modalità di autenticazione su `Basic` di default.
8. Lascia la cartella su `imgbed` o cambiala con una tua.
9. Salva.
10. Dopo il salvataggio controlla la scheda, interroga la capacità se disponibile e carica un file di prova.

## Verifica

| Controllo | Come verificare |
| --- | --- |
| Scheda canale | Dopo il salvataggio compare una scheda WebDAV. |
| Canale attivo | L'interruttore sulla scheda resta acceso. |
| Credenziali salvate | La vista dettaglio mostra Endpoint, nome utente, modalità di autenticazione e cartella. |
| Upload piccolo | Carica un'immagine di prova e verifica che compaia nella cartella WebDAV. |
| Regola file grandi | I file sopra 64 MiB usano l'upload a chunk e creano una cartella chunk remota. |
| Quota | Se il server supporta le informazioni di capacità, la query mostra spazio usato e totale. |

![Quota interrogata correttamente](../../image/upload/webdav/查询额度成功.png)

## FAQ

### Perché i file WebDAV grandi creano una cartella chunk?

È l'attuale metodo di archiviazione dei file grandi.

I file oltre 64 MiB non vengono uniti in un unico file remoto. Sono salvati come cartella di chunk. ImgBed registra il manifest e restituisce il contenuto completo leggendo i chunk in ordine.

### Cosa controllo se l'upload di file grandi fallisce?

Controlla prima Endpoint, nome utente, password e cartella di archiviazione. Poi verifica che il servizio WebDAV consenta creazione di cartelle, scrittura e lettura dei file.

Se la query di capacità fallisce ma l'upload di file piccoli funziona, il server potrebbe semplicemente non supportare o limitare il report della capacità. Non significa necessariamente che l'upload non sia disponibile.

### Quale modalità di autenticazione scegliere?

Parti da `Basic`.

Se il server richiede esplicitamente digest authentication, usa `Digest`.

Se non sei sicuro, usa la negoziazione automatica.

## Checklist rapida

```text
Prepara endpoint WebDAV, nome utente e password
-> Apri Impostazioni di caricamento
-> Aggiungi canale
-> Seleziona WebDAV
-> Inserisci Endpoint / nome utente / password
-> Lascia Basic come modalità predefinita
-> Lascia imgbed come cartella predefinita
-> Salva
-> Interroga la capacità
-> Carica un file di prova
```
