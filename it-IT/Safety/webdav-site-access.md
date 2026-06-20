# Accesso WebDAV al sito (Beta)

L'impostazione WebDAV in Sicurezza espone il tuo sito ImgBed come endpoint WebDAV.

Dopo l'abilitazione, puoi usare Windows, macOS, file manager mobile o qualunque client compatibile WebDAV per sfogliare, caricare, eliminare e gestire file ImgBed come una cartella remota.

Questo è l'accesso WebDAV del sito. È diverso dal canale di archiviazione WebDAV in Impostazioni di caricamento: il canale di upload salva file su un servizio WebDAV di terze parti, mentre questa impostazione fa offrire WebDAV direttamente al tuo sito ImgBed.

## Dove configurare

Apri il pannello admin e vai a:

```text
System Settings -> Security Settings -> WebDAV
```

Impostazioni disponibili:

- Enable
- Username
- Password
- Image loading mode
- Default channel

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

### Enable

Attiva l'endpoint WebDAV.

Quando è disattivato, i client non possono connettersi via WebDAV.

### Username e Password

Queste credenziali vengono usate dai client WebDAV durante la connessione.

Usa nome utente e password dedicati per WebDAV. Non riutilizzare la password admin o la password di upload.

Se uno dei due campi è vuoto, i client WebDAV non potranno connettersi correttamente.

### Image Loading Mode

Decide quale URL immagine i client WebDAV preferiscono in lettura.

Scelte comuni:

| Modalità | Descrizione |
| --- | --- |
| Smart loading | ImgBed sceglie in base al contesto. Consigliato per l'uso normale. |
| Original | Preferisce le immagini originali. |
| Thumbnail | Preferisce le miniature. Utile per anteprime rapide. |

Se non sei sicuro, lascia `Smart loading`.

### Default Channel

Il canale predefinito viene usato per gli upload WebDAV.

Quando copi file nella directory WebDAV da Windows o da un altro client, ImgBed li carica tramite il canale di upload selezionato.

Se non è selezionato un canale predefinito, la navigazione può funzionare, ma gli upload possono fallire.

## Accedere a WebDAV in Windows 11

Windows 11 può aggiungere WebDAV come percorso di rete.

1. Apri `This PC`.
2. Scegli `Add a network location`.
3. Inserisci `https://your-domain.com/dav`.
4. Inserisci username e password WebDAV quando richiesto.
5. Completa la procedura. La directory WebDAV potrà essere aperta in File Explorer.

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

Le connessioni WebDAV riuscite compaiono anche nella scheda WebDAV di Login Device Management.

Puoi controllare i client WebDAV e forzare offline vecchi dispositivi quando serve.

Se cambi username o password WebDAV, i vecchi client devono accedere di nuovo.

## FAQ

### Windows continua a chiedere username e password

Controlla:

- L'URL è `https://your-domain.com/dav`.
- Username e password corrispondono alle impostazioni WebDAV.
- WebDAV è abilitato.
- Il sito è accessibile via HTTPS.

### La navigazione funziona, ma l'upload fallisce

Controlla `Default channel`.

Gli upload WebDAV hanno bisogno di un canale di upload predefinito. Se manca, è disabilitato o configurato male, gli upload possono fallire.

### La velocità è instabile

Le prestazioni WebDAV dipendono da client, rete, numero di file e canale di upload predefinito.

Se una directory contiene molti file, organizzali in cartelle invece di tenerne troppi nello stesso punto.

## Consigli di sicurezza

- Usa HTTPS per l'accesso WebDAV.
- Imposta una password robusta.
- Non condividere la password WebDAV con persone non fidate.
- Disattiva WebDAV quando non lo usi.
- Pulisci periodicamente i dispositivi WebDAV inutilizzati in Login Device Management.

## Dimensione file per upload WebDAV

I client WebDAV non usano il flusso a chunk della pagina upload del browser. Per file oltre i limiti suggeriti sotto, usa la pagina web di upload.

| Canale di upload predefinito | Limite consigliato per singolo file WebDAV |
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
