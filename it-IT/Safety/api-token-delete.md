# Eliminare file con API Token

L'eliminazione tramite API Token è pensata per script, automazioni e programmi di terze parti. Non serve aprire il pannello di amministrazione: bastano indirizzo del sito, API Token e ID file espliciti per eliminare uno o più file da ImgBed.

L'eliminazione è un'operazione di scrittura. Dopo l'esecuzione del comando, i dati vengono rimossi davvero. È consigliabile usare prima `imgbed-token-list.mjs` per verificare i valori `fileId` da eliminare, poi passare questi ID allo script di eliminazione.

![Modifica API Token](../../image/Safety/apitoken/编辑删除权限api.png)

## Preparazione

Nel pannello di amministrazione apri:

```text
System Settings -> Security Settings -> API Token
```

Quando crei o modifichi un API Token, verifica che il Token consenta l'eliminazione. Questo script richiede solo il permesso `delete`.

Puoi anche mettere il Token in una variabile d'ambiente:

```powershell
$env:IMGBED_API_TOKEN="your API Token"
```

## Scaricare lo script

| Script | Uso |
| --- | --- |
| <a href="/tools/imgbed-token-delete.mjs" download>Scarica lo script di eliminazione file</a> | Elimina uno o più ID file indicati esplicitamente |

Serve Node.js 18 o superiore installato in locale.

## Comportamento dell'API di eliminazione

Lo script di eliminazione chiama l'interfaccia di eliminazione del server:

```text
POST /api/manage/delete/batch
```

La richiesta deve includere l'API Token:

```text
Authorization: Bearer <token>
```

Esempio di corpo richiesta:

```json
{
  "fileIds": ["photos/2026/a.txt"],
  "deleteStrictness": "strict"
}
```

Se `fileIds` contiene un solo file, viene eseguita l'eliminazione di un singolo file. Se contiene più file, viene eseguita un'eliminazione in blocco. Il server elabora al massimo 15 file per richiesta, e lo script divide automaticamente il lavoro in più richieste in base a `--batch-size`.

L'interfaccia restituisce un flusso di avanzamento NDJSON. Gli eventi comuni includono `batch_start`, `file_step`, `file_done`, `batch_complete` e `batch_error`. Lo script interpreta questi eventi e li riassume in un risultato leggibile o in un risultato JSON.

Dopo un'eliminazione riuscita, il server aggiorna automaticamente indici dei file, statistiche delle cartelle, statistiche di capacità e pulizia della memoria temporanea.

## Parametri dello script di eliminazione

| Parametro | Obbligatorio | Descrizione |
| --- | --- | --- |
| `--base-url <url>` | Sì | Indirizzo del sito ImgBed, ad esempio `https://image.ai6.me` |
| `--token <token>` | Sì | API Token; in alternativa usa la variabile d'ambiente `IMGBED_API_TOKEN` |
| `--file-id <id>` | Sì | ID del file da eliminare; può essere indicato più volte |
| `--strictness <strict\|soft>` | No | Rigidità dell'eliminazione; predefinita `strict` |
| `--batch-size <n>` | No | Numero di file eliminati per richiesta; predefinito `15`, massimo `15` |
| `--retries <n>` | No | Tentativi per errori temporanei; predefinito `3` |
| `--timeout-ms <n>` | No | Tempo limite della singola richiesta; predefinito `180000` |
| `--output <pretty\|json>` | No | Formato di output; predefinito `pretty` |
| `--save-response <path>` | No | Salva il risultato finale in un file JSON |
| `-h` / `--help` | No | Mostra l'aiuto dello script |

Questo script elimina solo i valori `--file-id` passati esplicitamente. Non esegue corrispondenze approssimative, non svuota cartelle in blocco e non legge gli ID da eliminare da elenchi separati da virgole o da file locali.

## Eliminazione rigida ed eliminazione morbida

| Modalità | Descrizione |
| --- | --- |
| `strict` | Modalità predefinita. Se l'eliminazione nello spazio remoto non riesce, il record ImgBed viene mantenuto per consentire un nuovo tentativo o una verifica |
| `soft` | Se l'eliminazione nello spazio remoto non riesce, il record ImgBed viene comunque pulito e il risultato restituisce un avviso |

Se vuoi considerare riuscita l'operazione solo quando anche il file remoto viene eliminato, usa la modalità predefinita `strict`. Se una piattaforma remota non consente più l'eliminazione e vuoi solo pulire il record ImgBed, usa `soft`.

## Esempi di utilizzo

Eliminare un file:

```powershell
node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --file-id "photos/2026/a.txt"
```

Usare il Token dalla variabile d'ambiente:

```powershell
$env:IMGBED_API_TOKEN="your API Token"

node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --file-id "photos/2026/a.txt"
```

Eliminare più file:

```powershell
node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --file-id "photos/2026/a.txt" `
  --file-id "photos/2026/b.txt" `
  --file-id "photos/2026/c.txt"
```

Pulire il record ImgBed anche se l'eliminazione nello spazio remoto fallisce:

```powershell
node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --file-id "photos/2026/a.txt" `
  --strictness soft
```

Produrre JSON e salvare il risultato:

```powershell
node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --file-id "photos/2026/a.txt" `
  --output json `
  --save-response ".\delete-result.json"
```

Limitare ogni richiesta a 5 file:

```powershell
node imgbed-token-delete.mjs `
  --base-url "https://your-domain" `
  --file-id "photos/2026/a.txt" `
  --file-id "photos/2026/b.txt" `
  --batch-size 5
```

## Controllare `fileId` prima di eliminare

Lo script di eliminazione richiede l'ID file di ImgBed. Puoi prima usare lo script di elenco per vedere i file in una cartella:

```powershell
node imgbed-token-list.mjs `
  --base-url "https://your-domain" `
  --token "your API Token" `
  --files `
  --dir "photos/2026" `
  --count 10 `
  --output json
```

Il campo `name` nel risultato è di solito il `fileId` che puoi passare allo script di eliminazione.

## Domande frequenti

### Perché l'eliminazione è fallita ma il file è ancora nell'elenco?

Con la modalità predefinita `strict`, il record ImgBed viene mantenuto se l'eliminazione nello spazio remoto fallisce. Questo evita di eliminare solo l'indice locale mentre il file remoto continua a esistere. Dopo aver verificato che vuoi solo pulire il record ImgBed, riprova lo stesso `fileId` con `soft`.

### Perché nel risultato ci sono avviso?

I avviso di solito indicano un problema non bloccante durante l'eliminazione nello spazio remoto, la pulizia della memoria temporanea o la chiusura delle statistiche. Lo script li riassume per aiutarti a decidere se riprovare.

### È possibile eliminare una cartella intera in una volta?

Questo script non offre un'operazione per svuotare una cartella intera. Usa prima lo script di elenco per filtrare valori `fileId` precisi, poi passa allo script di eliminazione i file da eliminare uno per uno.




