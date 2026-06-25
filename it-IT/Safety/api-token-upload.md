# Caricare file con API Token

Il caricamento tramite API Token è pensato per script, automazioni e programmi di terze parti. Non serve aprire il sito: bastano indirizzo ImgBed, Token, percorso del file e canale reale di caricamento per inviare il file e ottenere il link finale.

![Modifica API Token](../../image/Safety/apitoken/编辑上传权限api.png)

## Preparazione

Nel pannello di amministrazione apri:

```text
System Settings -> Security Settings -> API Token
```

Quando crei o modifichi un API Token, verifica che abbia il permesso di caricare file e scegli un canale predefinito reale. Il caricamento tramite API Token non usa l'ingresso di distribuzione intelligente; anche negli script devi passare un canale reale.

## Scaricare gli script

La documentazione include due script Node.js:

| Script | Uso |
| --- | --- |
| <a href="/tools/imgbed-token-single-upload.mjs" download>script di caricamento singolo</a> | Chiama `/upload` una sola volta; adatto a file piccoli e test di connettività |
| <a href="/tools/imgbed-token-chunk-upload.mjs" download>script di caricamento a blocchi</a> | Usa API a blocchi, caricamento diretto o sessioni della piattaforma; adatto a file grandi |

Serve Node.js 18 o superiore installato in locale.

## Elencare i canali disponibili

Entrambi gli script possono elencare i canali disponibili per il Token corrente:

```powershell
node imgbed-token-single-upload.mjs --base-url "https://your-domain" --token "your API Token" --list-channels
node imgbed-token-chunk-upload.mjs --base-url "https://your-domain" --token "your API Token" --list-channels
```

In questa modalità non servono `--file` e `--channel`. La risposta contiene il canale predefinito, il parametro del canale principale, i nomi dei sottocanali e lo stato del bilanciamento del carico. Non vengono restituiti segreti, token di aggiornamento o altre configurazioni sensibili.

## Scegliere il tipo di caricamento

| Metodo | Quando usarlo | Nota |
| --- | --- | --- |
| Caricamento singolo | File piccoli, script semplici, test API | Il file intero viene inviato in una richiesta a `/upload` |
| Caricamento a blocchi | File grandi o soggetti a scadenza del tempo limite | Lo script usa blocchi, caricamento diretto o sessione della piattaforma in base al canale |

Per file grandi usa di preferenza lo script a blocchi. Il caricamento singolo dipende dal limite del corpo richiesta di Cloudflare, dalla memoria del Worker e dai limiti del canale remoto.

## Caricamento singolo

Lo script di caricamento singolo invia una sola richiesta a `/upload`.

```powershell
node imgbed-token-single-upload.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --file "D:\test\image.png" `
  --channel s3 `
  --folder "photos/2026"
```

Puoi anche mettere il Token in una variabile d'ambiente:

```powershell
$env:IMGBED_API_TOKEN="your API Token"
node imgbed-token-single-upload.mjs --base-url "https://your-domain" --file "D:\test\image.png" --channel s3
```

### Parametri del caricamento singolo

| Parametro | Obbligatorio | Descrizione |
| --- | --- | --- |
| `--base-url <url>` | Sì | Indirizzo del sito ImgBed, ad esempio `https://image.ai6.me` |
| `--token <token>` | Sì | API Token; in alternativa usa `IMGBED_API_TOKEN` |
| `--file <path>` | Sì | Percorso del file locale |
| `--channel <key>` | Sì | Canale di caricamento |
| `--folder <path>` | No | Cartella di destinazione, ad esempio `photos/2026` o `/user/` |
| `--name-type <type>` | No | Strategia di nome file, corrisponde a `uploadNameType`; predefinita `default` |
| `--channel-name <name>` | No | Sottocanale o account specifico; se omesso decide la configurazione del server |
| `--retries <n>` | No | Tentativi per errori temporanei; predefinito `3` |
| `--timeout-ms <n>` | No | Tempo limite della singola richiesta; predefinito `180000` |
| `--output <pretty\|json>` | No | Formato di output; predefinito `pretty` |
| `--save-response <path>` | No | Salva il risultato finale in JSON |
| `--list-channels` | No | Elenca i canali disponibili per il Token senza caricare file |

### Canali del caricamento singolo

| Parametro | Canale |
| --- | --- |
| `telegram` / `tg` | Telegram |
| `discord` / `dc` | Discord |
| `cfr2` / `r2` | Cloudflare R2 |
| `s3` | S3 |
| `webdav` / `wd` | Canale di archiviazione WebDAV |
| `github` / `gh` | GitHub Releases |
| `gitlab` / `gl` | GitLab Packages |
| `huggingface` / `hf` | Hugging Face |
| `onedrive` / `od` | OneDrive |
| `googledrive` / `google` / `gd` | Google Drive |
| `dropbox` / `db` | Dropbox |
| `yandex` / `yx` | Yandex Disk |
| `pcloud` / `pd` | pCloud |

### Limiti del caricamento singolo, con file consigliati sotto 100 MB

Questi canali hanno un limite esplicito per una singola richiesta `/upload`:

| Canale | Limite del caricamento singolo |
| --- | ---: |
| Telegram | 20 MiB |
| Discord | 10 MiB |
| S3 | 64 MiB |
| WebDAV | 64 MiB |
| GitHub Releases | 64 MiB |
| GitLab Packages | 64 MiB |

Se il file supera il limite, lo script mostra subito l'errore locale corrispondente. Gli altri canali non hanno un limite locale fisso di 100 MB nello script; se il corpo richiesta supera la capacità di Cloudflare o della piattaforma, l'errore arriverà da Cloudflare o dal servizio remoto.

## Caricamento a blocchi

Lo script a blocchi usa prima l'API Token per far risolvere al server la destinazione del file, poi segue il flusso per file grandi del canale scelto. Non devi implementare a mano sessioni, blocchi, unione o completamento.

```powershell
node imgbed-token-chunk-upload.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --file "D:\test\video.zip" `
  --channel github `
  --folder "photos/2026" `
  --concurrency 3
```

### Parametri del caricamento a blocchi

| Parametro | Obbligatorio | Descrizione |
| --- | --- | --- |
| `--base-url <url>` | Sì | Indirizzo del sito ImgBed |
| `--token <token>` | Sì | API Token; in alternativa usa `IMGBED_API_TOKEN` |
| `--file <path>` | Sì | Percorso del file locale |
| `--channel <key>` | Sì | Canale di caricamento |
| `--folder <path>` | No | Cartella di destinazione |
| `--name-type <type>` | No | Strategia di nome file, corrisponde a `uploadNameType`; predefinita `default` |
| `--channel-name <name>` | No | Sottocanale o account specifico; se omesso decide la configurazione del server |
| `--concurrency <n>` | No | Caricamenti paralleli; predefinito `1`, massimo `3` |
| `--retries <n>` | No | Tentativi per errori temporanei; predefinito `3` |
| `--timeout-ms <n>` | No | Tempo limite di ogni richiesta; predefinito `180000` |
| `--output <pretty\|json>` | No | Formato di output; predefinito `pretty` |
| `--save-response <path>` | No | Salva il risultato finale in JSON |
| `--list-channels` | No | Elenca i canali disponibili per il Token senza caricare file |

### Canali del caricamento a blocchi

| Parametro | Flusso di caricamento |
| --- | --- |
| `telegram` / `tg` | Vera sessione a blocchi tramite `/upload` |
| `discord` / `dc` | Vera sessione a blocchi tramite `/upload` |
| `cfr2` / `r2` | Vera sessione a blocchi tramite `/upload` |
| `github` / `gh` | Vera sessione a blocchi tramite `/upload` |
| `gitlab` / `gl` | Vera sessione a blocchi tramite `/upload` |
| `webdav` / `wd` | Vera sessione a blocchi tramite `/upload` |
| `s3` | Caricamento multipart S3 |
| `onedrive` / `od` | Sessione di caricamento OneDrive |
| `googledrive` / `google` / `gd` | Caricamento riprendibile Google Drive |
| `dropbox` / `db` | Sessione di caricamento Dropbox |
| `yandex` / `yx` | URL di caricamento diretto Yandex |
| `pcloud` / `pd` | Link di caricamento pCloud |
| `huggingface` / `hf` | Caricamento Hugging Face LFS |

Nei test i file compressi su Yandex sono risultati instabili; i file non compressi sono stati caricati correttamente.

## Risultato restituito

Dopo un caricamento riuscito, lo script stampa:

```text
success
src: /file/photos/2026/example.png
url: https://your-domain/file/photos/2026/example.png
fileId: photos/2026/example.png
```

| Campo | Descrizione |
| --- | --- |
| `src` | Percorso interno del file nel sito |
| `url` | Link completo, pronto per script o database |
| `fileId` | ID del file, utile per interrogazioni, gestione o registri |
| `channelName` | Lo script a blocchi può restituire il sottocanale o account usato davvero |

Con `--output json`, lo script stampa il JSON completo per ulteriori elaborazioni.

## Chiamare direttamente l'API di caricamento singolo

Senza script puoi chiamare direttamente l'API di caricamento singolo:

```text
POST https://your-domain/upload?uploadChannel=s3&uploadFolder=photos/2026&uploadNameType=default
Authorization: Bearer your API Token
Content-Type: multipart/form-data
```

Campo del form:

| Campo | Obbligatorio | Descrizione |
| --- | --- | --- |
| `file` | Sì | File da caricare |

Parametri della query:

| Parametro | Obbligatorio | Descrizione |
| --- | --- | --- |
| `uploadChannel` | Sì | Canale reale di caricamento |
| `uploadFolder` | No | Cartella di destinazione |
| `uploadNameType` | No | Strategia di nome file |
| `channelName` | No | Sottocanale o account specifico |

In caso di successo l'API restituisce un risultato simile:

```json
{
  "success": true,
  "src": "/file/photos/2026/example.png",
  "url": "https://your-domain/file/photos/2026/example.png",
  "fileId": "photos/2026/example.png"
}
```

## Domande frequenti

### Il caricamento singolo di un file grande fallisce

`/upload` in modalità singola invia l'intero file in una richiesta. I file grandi possono essere bloccati da Cloudflare o dalla piattaforma remota. Per file grandi usa lo script a blocchi.

### Ho passato `--channel-name`, ma fallisce ancora

Controlla che nel canale scelto esista un sottocanale con quel nome esatto e che sia attivo. Senza `--channel-name`, il server sceglie un account disponibile in base alla configurazione del canale.

### Voglio usare il risultato in un altro programma

Usa `--output json` oppure `--save-response result.json`. Il programma può leggere il campo `url` per ottenere il link completo.

### Il caricamento di archivi su Yandex fallisce

Yandex non supporta in modo affidabile i formati compressi; può dipendere dalle politiche della piattaforma. Se devi usare Yandex, preferisci file non compressi.




