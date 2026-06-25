# Accesso WebDAV al sito
L'impostazione WebDAV in Sicurezza espone il tuo sito ImgBed come punto di accesso WebDAV.

Dopo l'abilitazione, puoi usare Windows, macOS, gestori di file per dispositivi mobili o qualunque client compatibile con WebDAV per sfogliare, caricare, eliminare e gestire file ImgBed come una cartella remota.

Questo è l'accesso WebDAV del sito. È diverso dal canale di archiviazione WebDAV in Impostazioni di caricamento: il canale di caricamento salva file su un servizio WebDAV di terze parti, mentre questa impostazione consente al tuo sito ImgBed di offrire accesso WebDAV ai client.

## Dove configurare

Apri il pannello admin e vai a:

```text
System Settings -> Security Settings -> WebDAV
```

Impostazioni disponibili:

- Abilita
- Nome utente
- Parola d\'ordine
- Modalità di caricamento immagini
- Canale predefinito

## A cosa serve

Dopo aver abilitato WebDAV, ImgBed espone un URL fisso:

```text
https://your-domain.com/dav
```

Usa questo URL per connetterti alla directory dei file ImgBed.

Casi d'uso tipici:

- sfogliare file ImgBed direttamente dal file manager del computer.
- trascinare immagini nella cartella WebDAV per caricarle.
- organizzare cartelle ImgBed dal file manager locale.
- usare software compatibile WebDAV per sincronizzare o gestire immagini.
- accedere ai contenuti ImgBed senza aprire il pannello admin.

## Impostazioni

### Abilita

Attiva il punto di accesso WebDAV.

Quando è disattivato, i client non possono connettersi via WebDAV.

### Nome utente e parola d\'ordine

Queste credenziali vengono usate dai client WebDAV durante la connessione.

Usa nome utente e parola d\'ordine dedicati per WebDAV. Non riutilizzare la parola d\'ordine admin o la parola d\'ordine di upload.

Se uno dei due campi è vuoto, i client WebDAV non potranno connettersi correttamente.

### Modalità di caricamento immagini

Decide quale URL immagine i client WebDAV preferiscono in lettura.

Scelte comuni:

| Modalità | Descrizione |
| --- | --- |
| Caricamento intelligente | ImgBed sceglie in base al contesto. Consigliato per l'uso normale. |
| Sorgente | Preferisce le immagini di origine. |
| Miniatura | Preferisce le miniature. Utile per anteprime rapide. |

Se non sei sicuro, lascia `Caricamento intelligente`.

### Canale predefinito

Il canale predefinito viene usato per i caricamenti WebDAV.

Quando copi file nella directory WebDAV da Windows o da un altro client, ImgBed li carica tramite il canale di caricamento predefinito selezionato.

Se non è selezionato un canale predefinito, la navigazione può funzionare, ma i caricamenti possono fallire.

## Accedere a WebDAV in Windows 11

Windows 11 può aggiungere WebDAV come percorso di rete.

1. Apri `Questo PC`.
2. Scegli `Aggiungi percorso di rete`.
3. Inserisci `https://your-domain.com/dav`.
4. Inserisci nome utente e parola d\'ordine WebDAV quando richiesto.
5. Completa la procedura. La directory WebDAV potrà essere aperta in Esplora file.

![Aggiungi WebDAV in Windows 11](../../image/Safety/webdav在win11配置.png)

Dopo l'aggiunta, la directory WebDAV compare in Esplora file. Puoi aprire, copiare e gestire file come in una cartella normale.

![WebDAV in Windows](../../image/Safety/webdav在win显示效果.png)

## Operazioni supportate

Dopo una connessione riuscita, di solito puoi:

- vedere file e cartelle.
- caricare file.
- creare cartelle.
- rinominare file o cartelle.
- spostare file.
- eliminare file.

WebDAV è adatto per accesso quotidiano e gestione leggera. Per spostamenti grandi, eliminazioni massive o organizzazioni complesse, usa il pannello admin.

## Gestione dispositivi login

Le connessioni WebDAV riuscite compaiono anche nella scheda WebDAV di Gestione dispositivi di accesso.

Puoi controllare i client WebDAV e forzare offline vecchi dispositivi quando serve.

Se cambi nome utente o parola d\'ordine WebDAV, i vecchi client devono accedere di nuovo.

## FAQ

### Windows continua a chiedere nome utente e parola d\'ordine

Controlla:

- L'URL è `https://your-domain.com/dav`.
- Nome utente e parola d\'ordine corrispondono alle impostazioni WebDAV.
- WebDAV è abilitato.
- Il sito è accessibile via HTTPS.

### La navigazione funziona, ma il caricamento fallisce

Controlla `Canale predefinito`.

I caricamenti WebDAV hanno bisogno di un canale di caricamento predefinito. Se manca, è disabilitato o configurato male, i caricamenti possono fallire.

### La velocità è instabile

Le prestazioni WebDAV dipendono da client, rete, numero di file e canale di caricamento predefinito.

Se una directory contiene molti file, organizzali in cartelle invece di tenerne troppi nello stesso punto.

## Consigli di sicurezza

- Usa HTTPS per l'accesso WebDAV.
- Imposta una parola d\'ordine robusta.
- Non condividere la parola d\'ordine WebDAV con persone non fidate.
- Disattiva WebDAV quando non lo usi.
- Pulisci periodicamente i dispositivi WebDAV inutilizzati in Gestione dispositivi di accesso.

## Dimensione dei file per caricamenti WebDAV

I client WebDAV non usano il flusso a segmenti per file grandi della pagina di caricamento del programma di navigazione. Per file oltre i limiti suggeriti sotto, usa la pagina web di caricamento.

| Canale di caricamento predefinito | Limite consigliato per singolo file WebDAV |
| --- | ---: |
| Telegram | 20 MB |
| Discord | 10 MB |
| Cloudflare R2 | 30 MB |
| S3 | 30 MB |
| GitHub Releases | 64 MB |
| GitLab Packages | 64 MB |
| Hugging Face | 20 MB |
| OneDrive | 30 MB |
| Google Drive | 30 MB |
| Dropbox | 30 MB |
| Yandex Disk | 30 MB |
| pCloud | 30 MB |
| WebDAV | 64 MB |


