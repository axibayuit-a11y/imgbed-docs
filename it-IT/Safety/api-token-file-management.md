# Gestione dei file con API Token

La gestione dei file con API Token è pensata per script, attività di automazione e pannelli di gestione di terze parti. Usa il permesso `manage` per modificare le informazioni dei file, spostare file, rinominare file, creare file segnaposto per le directory, regolare tag e stato delle liste dei file, disabilitare o ripristinare un IP di caricamento, e creare o eliminare Token di caricamento a breve durata senza aprire il pannello amministrativo.

Questo script gestisce solo azioni leggere nella gestione dei file e degli utenti. Caricamento, elenco, eliminazione, impostazioni di caricamento, impostazioni del sito e relazioni di federazione continuano a usare i rispettivi script dedicati.

![Modifica API Token](../../image/Safety/apitoken/编辑管理权限api.png)

## Preparazione

Dopo essere entrato nel pannello amministrativo, apri:

Impostazioni di sistema -> Impostazioni di sicurezza -> API Token

Quando crei o modifichi un API Token, verifica che il Token sia autorizzato alla gestione. Il permesso `manage` può modificare lo stato dei file, lo stato di caricamento degli utenti e creare Token di caricamento a breve durata; assegnalo quindi solo a script o utenti fidati.

Le operazioni di scrittura nello script di gestione dei file sono in modalità anteprima per impostazione predefinita e non vengono salvate davvero. Dopo aver verificato che l’anteprima sia corretta, aggiungi `--apply` per eseguire la scrittura.

Puoi anche inserire il Token in una variabile d’ambiente:

```powershell
$env:IMGBED_API_TOKEN="your API Token"
```

## Scaricare lo script

| Script | Uso |
| --- | --- |
| <a href="/tools/imgbed-token-manage.mjs" download>script di gestione dei file</a> | Metadati dei file, etichette di moderazione, tag dei file, stato delle liste, spostamento, rinomina, creazione cartelle, blocco/ripristino IP, creazione ed eliminazione di Token di caricamento a breve durata |

Per eseguire lo script serve Node.js 18 o una versione successiva installata in locale.

## Ambito delle funzioni

| Funzione | Script | Permesso |
| --- | --- | --- |
| Caricare file | `imgbed-token-single-upload.mjs` / `imgbed-token-chunk-upload.mjs` | `upload` |
| Elencare file, filtrare file, leggere statistiche utente | `imgbed-token-list.mjs` | `list` |
| Eliminare file indicati in modo esplicito | `imgbed-token-delete.mjs` | `delete` |
| Modificare informazioni dei file, tag, liste, spostare, rinominare, creare cartelle, bloccare IP, creare o eliminare Token di caricamento a breve durata | `imgbed-token-manage.mjs` | `manage` |
| Modificare canali di caricamento, impostazioni di sicurezza, impostazioni delle pagine, altre impostazioni, relazioni di federazione | Script di gestione della configurazione | `manage` |

`imgbed-token-manage.mjs` non carica file, non elenca file e non elimina file. Se devi trovare un `fileId`, usa prima lo script di elenco per filtrare i file. Se devi eliminare un file, passa il `fileId` esplicito allo script di eliminazione.

## Parametri comuni

| Parametro | Obbligatorio | Descrizione |
| --- | --- | --- |
| `--base-url <url>` | Sì | URL del sito ImgBed, per esempio `https://image.ai6.me` |
| `--token <token>` | Sì | API Token. Puoi usare anche la variabile d’ambiente `IMGBED_API_TOKEN` |
| `--retries <n>` | No | Numero di tentativi in caso di errore temporaneo. Valore predefinito `3` |
| `--timeout-ms <n>` | No | Timeout di una singola richiesta. Valore predefinito `180000` |
| `--output <pretty\|json>` | No | Formato di output. Valore predefinito `pretty`; per chiamate da programma è consigliato `json` |
| `--save-response <path>` | No | Salva il risultato finale in un file JSON |
| `--batch-size <n>` | No | Numero di elementi elaborati per richiesta nelle azioni batch. Valore predefinito `15`, massimo `15` |
| `--apply` | No | Esegue davvero le scritture. Senza questa opzione mostra solo l’anteprima |
| `-h` / `--help` | No | Mostra l’aiuto dello script |

## Verificare prima fileId

La maggior parte delle azioni dello script di gestione dei file richiede `fileId`. Puoi cercarlo prima con lo script di elenco:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --dir "test4" `
  --count 10 `
  --output json
```

Il campo `name` nel risultato restituito è di solito il `fileId` da passare allo script di gestione dei file.

## Metadati dei file

I metadati dei file servono a modificare il nome visualizzato e la sorgente di lettura nella gestione dei file del pannello amministrativo.

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-metadata `
  --file-id "photos/2026/a.jpg" `
  --file-name "cover.jpg" `
  --read-source backup
```

Dopo aver verificato che l’anteprima sia corretta, salva:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-metadata `
  --file-id "photos/2026/a.jpg" `
  --file-name "cover.jpg" `
  --read-source backup `
  --apply
```

### Parametri dei metadati dei file

| Parametro | Descrizione |
| --- | --- |
| `--set-metadata` | Modifica i metadati di un singolo file |
| `--file-id <id>` | ID del file da modificare |
| `--file-name <name>` | Nuovo nome visualizzato nel pannello amministrativo |
| `--read-source <primary\|backup>` | Sorgente di lettura. `primary` è la sorgente principale, `backup` quella di riserva |

Devi passare almeno uno tra `--file-name` e `--read-source`.

## Etichette di moderazione

Le etichette di moderazione corrispondono alla classificazione per età del file. Puoi leggere l’etichetta attuale prima di modificarla.

Leggere l’etichetta di moderazione:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-label `
  --file-id "photos/2026/a.jpg"
```

Impostare l’etichetta di moderazione:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-label `
  --file-id "photos/2026/a.jpg" `
  --label r12 `
  --apply
```

### Parametri delle etichette di moderazione

| Parametro | Descrizione |
| --- | --- |
| `--get-label` | Legge l’etichetta di moderazione di un singolo file |
| `--set-label` | Modifica l’etichetta di moderazione di un singolo file |
| `--file-id <id>` | ID del file |
| `--label <value>` | Valore dell’etichetta: `all-ages`, `r12`, `r16`, `r18`, `None` |

## Tag dei file

I tag dei file servono ad aggiungere ai file tag aziendali ricercabili. Lo script supporta lettura, sostituzione, aggiunta e rimozione, oltre all’elaborazione batch di più file.

Leggere i tag dei file:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-tags `
  --file-id "photos/2026/a.jpg"
```

Aggiungere tag:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --add-tags `
  --file-id "photos/2026/a.jpg" `
  --tag "cover" `
  --tag "2026" `
  --apply
```

Rimuovere tag:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --remove-tags `
  --file-id "photos/2026/a.jpg" `
  --tag "cover" `
  --apply
```

Sostituire tag:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-tags `
  --file-id "photos/2026/a.jpg" `
  --tag "archive" `
  --tag "public" `
  --apply
```

Aggiungere tag in batch:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --batch-tags `
  --file-id "photos/2026/a.jpg" `
  --file-id "photos/2026/b.jpg" `
  --tag-action add `
  --tag "batch-test" `
  --apply
```

### Parametri dei tag dei file

| Parametro | Descrizione |
| --- | --- |
| `--get-tags` | Legge i tag di un singolo file |
| `--set-tags` | Sostituisce i tag di un singolo file |
| `--add-tags` | Aggiunge tag a un singolo file |
| `--remove-tags` | Rimuove tag da un singolo file |
| `--batch-tags` | Imposta, aggiunge o rimuove tag in batch |
| `--file-id <id>` | ID del file. Nelle azioni batch può essere passato più volte |
| `--tag <tag>` | Valore del tag, può essere passato più volte |
| `--tags-json <path>` | Legge un array di tag da un file JSON |
| `--tag-action <set\|add\|remove>` | Azione batch sui tag |

Esempio di contenuto per il file `--tags-json`:

```json
["cover", "2026", "public"]
```

## Stato di lista nera e lista bianca

Lo stato di lista determina il comportamento di controllo accessi del file in modalità di accesso pubblico. Può essere modificato per un singolo file o in batch.

Impostare un singolo file in lista bianca:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-list-type `
  --file-id "photos/2026/a.jpg" `
  --list-type White `
  --apply
```

Aggiungere in batch alla lista nera:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --batch-list-type `
  --file-id "photos/2026/a.jpg" `
  --file-id "photos/2026/b.jpg" `
  --list-type Block `
  --apply
```

Ripristinare lo stato di lista predefinito:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --set-list-type `
  --file-id "photos/2026/a.jpg" `
  --list-type None `
  --apply
```

### Parametri di lista nera e lista bianca

| Parametro | Descrizione |
| --- | --- |
| `--set-list-type` | Modifica lo stato di lista di un singolo file |
| `--batch-list-type` | Modifica lo stato di lista dei file in batch. Una richiesta gestisce al massimo `15` file |
| `--file-id <id>` | ID del file. Nelle azioni batch può essere passato più volte |
| `--list-type <None\|White\|Block>` | `None` è lo stato predefinito, `White` è la lista bianca, `Block` è la lista nera |

## Spostare file

Lo spostamento trasferisce uno o più file nella directory di destinazione. Il backend gestisce al massimo `15` file per richiesta. Lo script divide automaticamente il lavoro in più richieste secondo `--batch-size` e le esegue in ordine.

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --move `
  --file-id "photos/2026/a.jpg" `
  --file-id "photos/2026/b.jpg" `
  --target-path "archive/2026" `
  --apply
```

### Parametri di spostamento

| Parametro | Descrizione |
| --- | --- |
| `--move` | Sposta file |
| `--file-id <id>` | ID del file da spostare, può essere passato più volte |
| `--target-path <dir>` | Directory di destinazione |
| `--batch-size <n>` | Numero di file spostati per richiesta. Valore predefinito `15`, massimo `15` |

## Rinominare o cambiare percorso

La rinomina usa un vecchio ID file e un nuovo ID file espliciti. Il nuovo ID file può cambiare solo il nome del file, oppure cambiare anche la directory.

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --rename `
  --old-file-id "photos/2026/a.jpg" `
  --new-file-id "photos/2026/a-renamed.jpg" `
  --apply
```

Per rinominare in batch, ripeti `--old-file-id` e `--new-file-id`:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --rename `
  --old-file-id "photos/2026/a.jpg" `
  --new-file-id "archive/2026/a.jpg" `
  --old-file-id "photos/2026/b.jpg" `
  --new-file-id "archive/2026/b.jpg" `
  --apply
```

Puoi anche scrivere la mappatura in un file JSON:

```json
[
  {
    "oldFileId": "photos/2026/a.jpg",
    "newFileId": "archive/2026/a.jpg"
  },
  {
    "oldFileId": "photos/2026/b.jpg",
    "newFileId": "archive/2026/b.jpg"
  }
]
```

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --rename `
  --items-json ".\rename-items.json" `
  --apply
```

### Parametri di rinomina

| Parametro | Descrizione |
| --- | --- |
| `--rename` | Rinomina o cambia percorso secondo una mappatura esplicita |
| `--old-file-id <id>` | ID file originale, può essere passato più volte |
| `--new-file-id <id>` | Nuovo ID file, può essere passato più volte; il numero deve corrispondere a `--old-file-id` |
| `--items-json <path>` | Array JSON con elementi `{ "oldFileId": "...", "newFileId": "..." }` |
| `--batch-size <n>` | Numero di rinomine elaborate per richiesta. Valore predefinito `15`, massimo `15` |

## Creare cartelle

Le directory di ImgBed derivano dai percorsi dei file, quindi non esistono vere directory vuote. Quando lo script crea una cartella, crea un file segnaposto `0.md` nella directory di destinazione, così la directory può comparire nella gestione dei file e nelle statistiche delle directory.

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --create-folder `
  --parent-directory "photos" `
  --folder-name "2026" `
  --apply
```

### Parametri di creazione cartella

| Parametro | Descrizione |
| --- | --- |
| `--create-folder` | Crea un file segnaposto per la directory |
| `--parent-directory <dir>` | Directory padre; per la directory radice può essere passata una stringa vuota |
| `--folder-name <name>` | Nome della nuova cartella |

## Bloccare e ripristinare IP di caricamento

Con il permesso di gestione puoi aggiungere un IP alla lista di blocco per il caricamento, oppure rimuoverlo da quella lista. L’azione influisce sui caricamenti successivi da quell’IP, ma non elimina i file già caricati da quell’IP.

Bloccare un IP di caricamento:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --block-ip "67.159.48.149" `
  --apply
```

Ripristinare un IP di caricamento:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --allow-ip "67.159.48.149" `
  --apply
```

Vedere l’elenco corrente degli IP bloccati per il caricamento:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --blocked-ips
```

### Parametri di gestione IP

| Parametro | Descrizione |
| --- | --- |
| `--block-ip <ip>` | Aggiunge l’IP alla lista di blocco per il caricamento |
| `--allow-ip <ip>` | Rimuove l’IP dalla lista di blocco per il caricamento |

## Creare ed eliminare Token di caricamento a breve durata

Il permesso di gestione può creare Token dedicati al solo caricamento e a breve durata. Questo Token ha sempre solo il permesso `upload`, `autoDelete` è sempre `true` e la scadenza massima è `1` giorno.

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --create-upload-token `
  --name "Temporary Upload Token" `
  --owner "upload-bot" `
  --default-upload-channel telegram `
  --expires-in-minutes 20 `
  --apply `
  --output json
```

Puoi anche passare direttamente un timestamp in millisecondi:

```powershell
$expiresAt = [DateTimeOffset]::UtcNow.AddHours(12).ToUnixTimeMilliseconds()

node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --create-upload-token `
  --name "Upload Token valid for one day" `
  --owner "upload-bot" `
  --default-upload-channel telegram `
  --expires-at $expiresAt `
  --apply
```

Quando elimini un Token di caricamento a breve durata, devi passare l’`id` restituito dall’API di creazione. Un Token di gestione può eliminare solo Token che soddisfano queste condizioni:

| Condizione | Requisito |
| --- | --- |
| Permesso | `permissions` contiene solo `upload` |
| Eliminazione automatica | `autoDelete=true` |
| Validità | `expiresAt - createdAt <= 24` ore |

Eliminare un Token di caricamento a breve durata:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --delete-upload-token `
  --token-id "mqt4jqokc85be80d1f0f47078e848a77d6c1aa6e" `
  --apply
```

Un Token di gestione non può eliminare Token normali, Token a lunga durata, Token che includono i permessi `list` / `delete` / `manage`, né Token di caricamento con validità superiore a `1` giorno. Questi Token devono ancora essere gestiti dal pannello amministrativo nel browser.

### Parametri dei Token di caricamento a breve durata

| Parametro | Descrizione |
| --- | --- |
| `--create-upload-token` | Crea un Token dedicato al caricamento a breve durata |
| `--delete-upload-token` | Elimina un Token dedicato al caricamento a breve durata che soddisfa i requisiti |
| `--name <name>` | Nome del Token |
| `--owner <owner>` | Descrizione del proprietario del Token |
| `--default-upload-channel <key>` | Canale di caricamento predefinito; deve essere un canale reale, per esempio `telegram`, `s3`, `github` |
| `--expires-in-minutes <n>` | Minuti alla scadenza rispetto all’ora attuale, massimo `1440` |
| `--expires-at <ms>` | Scadenza assoluta in timestamp millisecondi, massimo `24` ore dall’ora attuale |
| `--token-id <id>` | ID del Token di caricamento a breve durata da eliminare |

I Token di caricamento a breve durata permettono solo il caricamento. Nei test, un Token breve con `permissions=["upload"]` viene rifiutato quando accede alle API di elenco, gestione dei file ed eliminazione.

Dopo la scadenza, i Token con `autoDelete=true` vengono puliti quando il backend verifica che sono scaduti. Anche la lettura dell’elenco degli API Token pulisce i Token scaduti con eliminazione automatica.

## Mappatura API

| Azione | Metodo | API |
| --- | --- | --- |
| Modificare metadati file | `PATCH` | `/api/manage/metadata/{fileId}` |
| Leggere etichetta di moderazione | `GET` | `/api/manage/label/{fileId}` |
| Modificare etichetta di moderazione | `POST` | `/api/manage/label/{fileId}` |
| Leggere tag file | `GET` | `/api/manage/tags/{fileId}` |
| Modificare tag file | `POST` | `/api/manage/tags/{fileId}` |
| Modificare tag file in batch | `POST` | `/api/manage/tags/batch` |
| Modificare stato lista | `POST` | `/api/manage/listType/{fileId}` |
| Modificare stato lista in batch | `POST` | `/api/manage/listType/batch` |
| Spostare o rinominare | `POST` | `/api/manage/relocate/batch` |
| Creare cartella | `POST` | `/api/manage/folder/create` |
| Bloccare IP di caricamento | `POST` | `/api/manage/cusConfig/blockip` |
| Ripristinare IP di caricamento | `POST` | `/api/manage/cusConfig/whiteip` |
| Creare Token di caricamento a breve durata | `POST` | `/api/manage/apiTokens` |
| Eliminare Token di caricamento a breve durata | `DELETE` | `/api/manage/apiTokens?id={tokenId}` |

Lo script aggiunge automaticamente:

```text
Authorization: Bearer your API Token
```

## Formato di output

L’output predefinito `pretty` è adatto alla lettura manuale. Se il risultato deve essere elaborato da un altro programma, usa `--output json`:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-tags `
  --file-id "photos/2026/a.jpg" `
  --output json
```

Puoi anche salvare il risultato completo:

```powershell
node imgbed-token-manage.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --get-tags `
  --file-id "photos/2026/a.jpg" `
  --output json `
  --save-response ".\manage-result.json"
```

Spostamenti batch, rinomine batch e azioni batch sulle liste analizzano lo stream di avanzamento NDJSON restituito dal backend e riepilogano numero di eventi, stato di completamento e dettagli degli errori.

## FAQ

### Perché il comando non ha modificato nulla

Le azioni di scrittura sono in modalità anteprima per impostazione predefinita. Dopo aver verificato che l’anteprima sia corretta, aggiungi `--apply` per salvare davvero.

### Questo script può caricare, elencare o eliminare file

No. Per il caricamento usa gli script di caricamento, per elenco e filtri usa lo script di elenco, e per eliminare file espliciti usa lo script di eliminazione. Lo script di gestione dei file gestisce solo azioni leggere sotto il permesso `manage`.

### Come sapere quale fileId passare

Prima interroga i file con `imgbed-token-list.mjs --files`. Il campo `name` nel risultato restituito è di solito l’ID del file, cioè il valore da passare qui a `--file-id`.

### Quanti file può elaborare al massimo un’operazione batch

Il backend elabora al massimo `15` file per richiesta. Lo script usa `--batch-size 15` per impostazione predefinita; se passi un valore più piccolo, divide automaticamente il lavoro in più richieste sequenziali.

### È possibile creare una vera cartella vuota

Le directory ImgBed sono ricavate dai percorsi dei file, quindi non esistono vere directory vuote. `--create-folder` crea il file segnaposto `0.md`, così la directory può comparire nella gestione dei file e nelle statistiche delle directory.

### Quanto può durare al massimo un Token di caricamento a breve durata

Al massimo `1` giorno, cioè `1440` minuti. Se supera questo limite, lo script rifiuta localmente; anche il backend restituisce `API_TOKEN_MANAGE_CREATE_EXPIRES_AT_TOO_LONG`.

### Un Token di caricamento a breve durata viene eliminato automaticamente dopo la scadenza

Viene pulito automaticamente, ma non da un’attività pianificata immediata. Un Token scaduto viene pulito quando viene verificato di nuovo; anche la lettura dell’elenco degli API Token pulisce i Token scaduti con `autoDelete=true`.
